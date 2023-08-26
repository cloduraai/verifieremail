import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';
import axios from 'axios';
import * as EmailValidator from 'email-validator';
import { MongoClient } from 'mongodb';
import Redis from 'ioredis';
import { createHash } from 'node:crypto';
// import * as _ from "lodash";

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const redis = new Redis();

// let db = ();
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
      inlineCriticalCss: false,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.use('/tools/', express.static(distFolder));

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // https://api.ValidEmail.net/?email=EMAIL&token=69d372749aa94cb793fb75905608642f
  server.post('/api/validate', async (req, res) => {
    const db = await client.db('validemaildb');
    const coll = db.collection('emailook');
    console.log(req.headers.cookie);
    const a = JSON.parse(req.body.b);
    const con = req.headers?.cookie?.split(';')[0].split('=')[0] || '';
    const cs = createHash('sha3-256').update(con).digest('hex');
    // console.log('', a.email);
    console.log(cs);
    const getKey = await redis.get(cs);

    if(getKey) {
      console.log('key from redis', getKey);
    }
    if (Number(getKey) < 5) {
      if (a.recaptcha) {
        const b = await validateCaptcha(a.recaptcha);
        redis.set(cs, Number(getKey) + 1, 'EX', 24 * 60 * 60);
        if (b.success) {
          if (a.email && EmailValidator.validate(a.email)) {
            const docs = await coll.findOne({ email: a.email });
            if (docs) {
              console.log('responding from docs');
              // const c = _.extend(docs, {success: true})
              res.status(200).send(docs);
            } else {
              axios
                .get(
                  `https://api.ValidEmail.net/?email=${a.email}&token=69d372749aa94cb793fb75905608642f`
                )
                .then(function (response: any) {
                  // handle success
                  console.log(response.data);
                  const b = {
                    valid: response.data?.IsValid,
                    confidence: response.data?.Score,
                    email: response.data?.Email,
                    status: response.data?.State,
                    reason: response.data?.Reason,
                    domain: response.data?.Domain,
                    isfree: response.data?.Free,
                    isDisposable: response.data?.Disposable,
                    isCatchAll: response.data?.AcceptAll,
                    MX: response.data?.MXRecord,
                    format: EmailValidator.validate(a.email) ? 'Valid' : 'Invalid',
                    success: true
                  };
                  insertreq(b);

                  res.send(b);
                })
                .catch(function (error: any) {
                  // handle error
                  console.log(error);
                  res.send({ success: false, err: 'server error, please try after sometime' });
                });
            }
          } else {
            res.send({ success: false, err: 'email invalid or missing' });
          }
        } else {
          res.send({ success: false, err: 'invalid captcha', type: 'bot' });
        }
      } else {
          res.send({ success: false, err: 'captacha invalid or missing', type:'bot' });
      }
    } else {
      res.send({ success: false, err: 'You have exhausted daily search limit.', type: 'limit' });
    }
  });

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

async function run() {
  const port = process.env['PORT'] || 4000;
  await client.connect();
  // await db = client.db('validemaildb');
  console.log('⚙️   Connected successfully to server');
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(
      `🚀  Node Express server listening on http://localhost:${port}`
    );
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

async function insertreq(d: any) {
  const db = await client.db('validemaildb');
  const coll = db.collection('emailook');
  const insertDocuments = await coll.insertOne(d);
  console.log('Inserted document => ', insertDocuments.insertedId);
  return 'done';
}

async function validateCaptcha(d: string) {
  return axios
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LcVCrgnAAAAAMEoCrC1cWOlvhJijbPsR5RUh_dd&response=${d}`
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return { success: false };
    });
}

export * from './src/main.server';
