/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34991:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_13__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_13__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_13__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var _Users_abhay_Projects_Clodura_lab_verifyinbox_io_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/node */ 20650);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nguniversal/express-engine */ 93389);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ 35162);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:fs */ 87561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node:path */ 49411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/main.server */ 49174);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ 27473);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! email-validator */ 36296);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mongodb */ 23692);
/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ioredis */ 2203);
/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node:crypto */ 6005);
/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(node_crypto__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-server */ 97014);

/* eslint-disable @typescript-eslint/no-var-requires */












// const Wappalyzer = require('wappalyzer');
// const options = {
// debug: false,
// delay: 500,
// headers: {},
// maxDepth: 3,
// maxUrls: 10,
// maxWait: 5000,
// recursive: true,
// probe: true,
// proxy: false,
// userAgent: 'buwdevwith-analyzer',
// htmlMaxCols: 2000,
// htmlMaxRows: 2000,
// noScripts: false,
// noRedirect: false,
// };
// import * as _ from "lodash";
const url = 'mongodb://127.0.0.1:27017';
const client = new mongodb__WEBPACK_IMPORTED_MODULE_8__.MongoClient(url);
const redis = new (ioredis__WEBPACK_IMPORTED_MODULE_9___default())();
// let db = ();
// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_3__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_5__.join)(process.cwd(), 'dist/browser');
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_4__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_5__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  server.use(express__WEBPACK_IMPORTED_MODULE_3__.json());
  server.use(express__WEBPACK_IMPORTED_MODULE_3__.urlencoded({
    extended: true
  }));
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_2__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule,
    inlineCriticalCss: false
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.use('/tools/', express__WEBPACK_IMPORTED_MODULE_3__["static"](distFolder));
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // https://api.ValidEmail.net/?email=EMAIL&token=69d372749aa94cb793fb75905608642f
  server.post('/tools/api/validate', /*#__PURE__*/function () {
    var _ref = (0,_Users_abhay_Projects_Clodura_lab_verifyinbox_io_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
      const db = yield client.db('validemaildb');
      const coll = db.collection('emailook');
      console.log(req.headers.cookie);
      const a = JSON.parse(req.body.b);
      const con = req.headers?.cookie?.split(';')[0].split('=')[0] || '';
      const cs = (0,node_crypto__WEBPACK_IMPORTED_MODULE_10__.createHash)('sha3-256').update(con).digest('hex');
      // console.log('', a.email);
      // console.log(cs);
      let getKey = yield redis.get(cs);
      if (getKey) {
        console.log('key from redis', getKey);
      } else {
        getKey = '0';
      }
      console.log('', getKey);
      if (Number(getKey) < 11) {
        if (a.recaptcha) {
          const b = yield validateCaptcha(a.recaptcha);
          if (b.success) {
            if (a.email && email_validator__WEBPACK_IMPORTED_MODULE_7__.validate(a.email)) {
              const docs = yield coll.findOne({
                email: a.email
              });
              if (docs) {
                console.log('responding from docs');
                // const c = _.extend(docs, {success: true})
                res.status(200).send(docs);
              } else {
                let c = {
                  valid: '',
                  confidence: '',
                  email: '',
                  status: '',
                  reason: '',
                  domain: '',
                  isfree: false,
                  isDisposable: false,
                  isCatchAll: false,
                  MX: '',
                  format: email_validator__WEBPACK_IMPORTED_MODULE_7__.validate(a.email) ? 'Valid' : 'Invalid',
                  success: true,
                  code: 0
                };
                axios__WEBPACK_IMPORTED_MODULE_11__["default"].get(`https://api.ValidEmail.net/?email=${a.email}&token=69d372749aa94cb793fb75905608642f`).then(function (response) {
                  // handle success
                  console.log('ValidEmail');
                  console.log(response.data);
                  c = {
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
                    format: email_validator__WEBPACK_IMPORTED_MODULE_7__.validate(a.email) ? 'Valid' : 'Invalid',
                    code: 0,
                    success: true
                  };
                  axios__WEBPACK_IMPORTED_MODULE_11__["default"].get(`https://api.millionverifier.com/api/v3/?api=8J2iR2jYgI4ULrBzpj5mYaMrx&email=${a.email}&timeout=9`).then(millResponse => {
                    // handle success
                    c.status = millResponse.data.quality;
                    c.reason = millResponse.data.result;
                    c.isfree = millResponse.data?.free;
                    switch (millResponse.data.resultCode) {
                      case 2:
                        c.isCatchAll = true;
                        break;
                      case 5:
                        c.isDisposable = true;
                        break;
                      case 6:
                        c.code = 4;
                        c.status = 'err';
                        c.reason = millResponse.data.subresult;
                        break;
                    }
                    console.log('MillionVerifier');
                    console.log(millResponse.data);
                    insertreq(c);
                    res.send(c);
                  }).catch(err => {
                    console.log(err);
                    res.send({
                      success: false,
                      err: 'server error, please try after sometime'
                    });
                  });
                }).catch(function (error) {
                  // handle error
                  console.log(error);
                  res.send({
                    success: false,
                    err: 'server error, please try after sometime'
                  });
                });
              }
            } else {
              res.send({
                success: false,
                err: 'email invalid or missing'
              });
            }
          } else {
            res.send({
              success: false,
              err: 'invalid captcha',
              type: 'bot'
            });
          }
          redis.set(cs, Number(getKey) + 1, 'EX', 24 * 60 * 60);
        } else {
          res.send({
            success: false,
            err: 'captacha invalid or missing',
            type: 'bot'
          });
        }
      } else {
        res.send({
          success: false,
          err: 'You have exhausted daily search limit.',
          type: 'limit'
        });
      }
    });
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  server.post('/tools/api/discover', /*#__PURE__*/function () {
    var _ref2 = (0,_Users_abhay_Projects_Clodura_lab_verifyinbox_io_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
      const db = yield client.db('validemaildb');
      const coll = db.collection('emailook');
      console.log(req.headers.cookie);
      const a = JSON.parse(req.body.b);
      const con = req.headers?.cookie?.split(';')[0].split('=')[0] + 'websiteanalyzer' || 0;
      const cs = (0,node_crypto__WEBPACK_IMPORTED_MODULE_10__.createHash)('sha3-256').update(con).digest('hex');
      // console.log('', a.email);
      // console.log(cs);
      let getKey = yield redis.get(cs);
      if (getKey) {
        console.log('key from redis', getKey);
      } else {
        getKey = '0';
      }
      console.log('', getKey);
      if (Number(getKey) < 11) {
        if (a.recaptcha) {
          const b = yield validateCaptcha(a.recaptcha);
          if (b.success) {
            if (a.email && email_validator__WEBPACK_IMPORTED_MODULE_7__.validate(a.email)) {
              const docs = yield coll.findOne({
                email: a.email
              });
              if (docs) {
                console.log('responding from docs');
                // const c = _.extend(docs, {success: true})
                res.status(200).send(docs);
              } else {
                axios__WEBPACK_IMPORTED_MODULE_11__["default"].get(`http://localhost:3321/url/${a.email}`).then(function (response) {
                  // handle success
                  console.log('ValidEmail');
                  console.log(response.data);
                  const a = [];
                  if (response.data && response.data.length > 0) {
                    for (const iterator of response.data) {
                      const b = iterator.categories.map(c => c.name);
                      a.push({
                        name: iterator.name,
                        description: iterator.description,
                        icon: iterator.icon,
                        categories: b
                      });
                    }
                    res.send(a);
                  } else {
                    res.send({});
                  }
                }).catch(function (error) {
                  // handle error
                  console.log(error);
                  res.send({
                    success: false,
                    err: 'server error, please try after sometime'
                  });
                });
              }
            } else {
              res.send({
                success: false,
                err: 'email invalid or missing'
              });
            }
          } else {
            res.send({
              success: false,
              err: 'invalid captcha',
              type: 'bot'
            });
          }
          redis.set(cs, Number(getKey) + 1, 'EX', 24 * 60 * 60);
        } else {
          res.send({
            success: false,
            err: 'captacha invalid or missing',
            type: 'bot'
          });
        }
      } else {
        res.send({
          success: false,
          err: 'You have exhausted daily search limit.',
          type: 'limit'
        });
      }
    });
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_3__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  return _run.apply(this, arguments);
}
function _run() {
  _run = (0,_Users_abhay_Projects_Clodura_lab_verifyinbox_io_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const port = process.env['PORT'] || 4000;
    yield client.connect();
    // await db = client.db('validemaildb');
    console.log('⚙️   Connected successfully to server');
    // Start up the Node server
    const server = app();
    server.listen(port, () => {
      console.log(`🚀  Node Express server listening on http://localhost:${port}`);
    });
  });
  return _run.apply(this, arguments);
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}
function insertreq(_x5) {
  return _insertreq.apply(this, arguments);
}
function _insertreq() {
  _insertreq = (0,_Users_abhay_Projects_Clodura_lab_verifyinbox_io_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (d) {
    const db = yield client.db('validemaildb');
    const coll = db.collection('emailook');
    const insertDocuments = yield coll.insertOne(d);
    console.log('Inserted document => ', insertDocuments.insertedId);
    return 'done';
  });
  return _insertreq.apply(this, arguments);
}
function validateCaptcha(_x6) {
  return _validateCaptcha.apply(this, arguments);
}
function _validateCaptcha() {
  _validateCaptcha = (0,_Users_abhay_Projects_Clodura_lab_verifyinbox_io_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (d) {
    return axios__WEBPACK_IMPORTED_MODULE_11__["default"].post(`https://www.google.com/recaptcha/api/siteverify?secret=6LcVCrgnAAAAAMEoCrC1cWOlvhJijbPsR5RUh_dd&response=${d}`).then(res => {
      console.log(res.data);
      return res.data;
    }).catch(err => {
      console.log(err);
      return {
        success: false
      };
    });
  });
  return _validateCaptcha.apply(this, arguments);
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 11838:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/general/home/home.component */ 73541);
/* harmony import */ var _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/general/not-found/not-found.component */ 20245);
/* harmony import */ var _modules_general_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/general/landing/landing.component */ 22969);
/* harmony import */ var _modules_general_bw_bw_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/general/bw/bw.component */ 67754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 59936);







const routes = [{
  path: '',
  component: _modules_general_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__.LandingComponent
}, {
  path: 'email-verifier',
  component: _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  pathMatch: 'full'
}, {
  path: 'developed-with',
  component: _modules_general_bw_bw_component__WEBPACK_IMPORTED_MODULE_3__.DevelopedWithComponent,
  pathMatch: 'full'
}, {
  path: '*',
  component: _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledBlocking',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 96846:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 73149);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 49186);






class AppComponent {
  constructor(platformId, document) {
    this.platformId = platformId;
    this.document = document;
  }
  ngOnInit() {
    // console.log(this.documents.defaultView);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      const navMain = this.document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: [".navbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  border-top: 1px solid #09238d;\n  border-bottom: 1px solid #09238d;\n}\n\n.navbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: yellow;\n  border-top: 1px solid yellow;\n  border-bottom: 1px solid yellow;\n}\n\n.nga-navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 11px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #09238d;\n}\n\n.nga-navbar-logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.nga-navbar-logo[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.nga-logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.nga-logo[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.nga-footer[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: yellow;\n  text-decoration: underline;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUVFLDhFQUE4RTtFQUM5RSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwOTIzOGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDkyMzhkO1xufVxuXG4ubmF2YmFyLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogeWVsbG93O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgeWVsbG93O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgeWVsbG93O1xufVxuXG4ubmdhLW5hdmJhciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAxMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDExcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTIzOGQ7XG59XG5cbi5uZ2EtbmF2YmFyLWxvZ28ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmdhLW5hdmJhci1sb2dvOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG59XG5cbi5uZ2EtbG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZ2EtbG9nbzpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xufVxuXG4ubmdhLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5nYS1mb290ZXIgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbi5uZ2EtZm9vdGVyIGE6aG92ZXIsXG4ubmdhLWZvb3RlciBhOmZvY3VzIHtcbiAgY29sb3I6IHllbGxvdztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uZ2EtZm9vdGVyIC5oaW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbn1cblxuLm5nYS1mb290ZXIgLmhpbnQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 50041:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 11838);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 5826);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 56448);
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-captcha */ 26926);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/general/home/home.component */ 73541);
/* harmony import */ var _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/general/not-found/not-found.component */ 20245);
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.module */ 72215);
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.module */ 2322);
/* harmony import */ var _modules_general_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/general/landing/landing.component */ 22969);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _modules_general_bw_bw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/general/bw/bw.component */ 67754);





 //<== captcha module











// import { environment } from '../../environments/environment';
// const globalSettings: RecaptchaSettings = {
//   siteKey: '6Lfr3pInAAAAADzW7q41TFAElTtFHkkqob5shuca',
// };
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.APP_BASE_HREF,
    useValue: '/tools/'
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }), _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__.HeaderModule, _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_captcha__WEBPACK_IMPORTED_MODULE_14__.NgxCaptchaModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _modules_general_bw_bw_component__WEBPACK_IMPORTED_MODULE_7__.DevelopedWithComponent, _modules_general_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent, _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__.HeaderModule, _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_captcha__WEBPACK_IMPORTED_MODULE_14__.NgxCaptchaModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 21463:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 97014);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 50041);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class AppServerModule {}
AppServerModule.ɵfac = function AppServerModule_Factory(t) {
  return new (t || AppServerModule)();
};
AppServerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppServerModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppServerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 64841:
/*!************************************************************!*\
  !*** ./src/app/components/footer/footer-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterRoutingModule: () => (/* binding */ FooterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);



const routes = [];
class FooterRoutingModule {}
FooterRoutingModule.ɵfac = function FooterRoutingModule_Factory(t) {
  return new (t || FooterRoutingModule)();
};
FooterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FooterRoutingModule
});
FooterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 49186:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class FooterComponent {
  constructor() {
    this.todate = new Date();
    this.year = this.todate.getFullYear();
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 69,
  vars: 1,
  consts: [[1, "nga-footer"], [1, "container", "pt-5", "pb-1", "text-center", "text-lg-start"], [1, "row"], [1, "col-md-3", "col-xs-6", "col-sm-3", "col-lg-3", "mb-3"], [1, "h6", "text-16", "text-white"], [1, "list-unstyled", "text-white"], [1, "mb-2"], ["href", "https://clodura.ai/zoominfo-competitor", 1, "text-white", "text-15", "text-300"], ["href", "https://clodura.ai/lusha-competitor", 1, "text-white", "text-15", "text-300"], ["href", "https://clodura.ai/seamless-competitor", 1, "text-white", "text-15", "text-300"], ["href", "https://clodura.ai/apollo-competitor", 1, "text-white", "text-15", "text-300"], ["href", "https://www.clodura.ai/tools/email-verifier/", 1, "text-white", "text-15", "text-300"], ["href", "https://www.clodura.ai/database-center/", 1, "text-white", "text-15", "text-300"], ["href", "https://www.clodura.ai/blog/", 1, "text-white", "text-15", "text-300"], ["href", "https://clodura.ai/executives/", 1, "text-white", "text-15", "text-300"], ["href", "https://www.clodura.ai/affiliate-program/", 1, "text-white", "text-15", "text-300"], ["type", "button", "href", "mailto:support@clodura.ai", 1, "nga-btn-social", "nga-btn-social-i"], ["aria-hidden", "true", 1, "fas", "fa-envelope"], [1, "h6", "text-400", "text-white"], ["type", "button", "href", "https://www.linkedin.com/company/clodura-systems/", "aria-label", "Linkedin Clodura.AI", 1, "nga-btn-social", "nga-btn-social-i"], [1, "fab", "fa-linkedin-in"], ["type", "button", "href", "https://twitter.com/Clodura/", "aria-label", "Twitter Clodura.AI", 1, "nga-btn-social", "nga-btn-social-i"], [1, "fab", "fa-twitter"], ["type", "button", "href", "https://www.facebook.com/Clodura/", "aria-label", "Facebook Clodura.AI", 1, "nga-btn-social", "nga-btn-social-i"], [1, "fab", "fa-facebook"], ["type", "button", "href", "https://www.youtube.com/channel/UCozYAtSiPlYcDC85z94JTFw/", "aria-label", "Youtube Clodura.AI", 1, "nga-btn-social", "nga-btn-social-i"], [1, "fab", "fa-youtube"], [1, "col-md-3", "col-xs-6", "col-sm-6", "col-lg-3", "mb-3"], [1, "h6", "text-13", "text-600", "text-white"], [1, "text-400", "text-12"], ["href", "https://chrome.google.com/webstore/detail/cloduraai-free-email-dire/edfgdiieipdlhkmmanhakhibhomfdjip", "target", "_blank", 1, "btn", "btn-outline", "border", "border-white", "text-left", "px-0", "mx-0", "ps-2", "px-2", "py-3", "text-start", "text-15"], [1, "text-white"], [1, "fab", "fa-chrome", "fa-lg", "mr-1"], [1, "py-3", "text-center", "bg-black"], [1, "container", "text-15", "text-grey"], [1, "fas", "fa-copyright"], ["href", "https://clodura.ai/privacy-policy/", 1, "text-grey"], ["href", "https://clodura.ai/gdpr/", 1, "text-grey"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Compare With Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5)(7, "li", 6)(8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ZoomInfo Alternative");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lusha Alternative");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6)(14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Seamless.AI Alternative");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6)(17, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Apollo.io Alternative");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3)(20, "ul", 5)(21, "li", 6)(22, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Free Email Verifier Tool");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6)(25, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Database Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6)(28, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Blogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 6)(31, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Executives");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 6)(34, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Affiliate Program");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3)(37, "h5")(38, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "support@clodura.ai");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div")(43, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27)(52, "h2", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Aggregate from LinkedIn & the Web");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Unlock & Connect to 600M contacts & direct dials. Target via your Cadence. Maximize your Leadgen Outreach. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 30)(57, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00A0\u00A0 Clodura Chrome Extension ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33)(61, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u00A0\u00A0|\u00A0\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "GDPR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " Clodura. All Rights Reserved\u00A0\u00A0|\u00A0\u00A0");
    }
  },
  styles: [".nga-footer[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: white;\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: white;\n  text-decoration: underline;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .nga-hint[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .nga-hint[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.nga-btn-social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  padding: 0;\n  margin: 10px;\n  overflow: hidden;\n  vertical-align: middle;\n  cursor: pointer;\n  border-radius: 50%;\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease-in-out;\n  width: 47px;\n  height: 47px;\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 47px\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: inherit;\n  color: white;\n  text-align: center\n}\n\n.nga-btn-social[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.nga-btn-social-i[_ngcontent-%COMP%] {\n  border: 1px #fff solid;\n}\n.nga-btn-github[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n.nga-btn-gitlab[_ngcontent-%COMP%] {\n  background-color: #ff4500;\n}\n\n.nga-btn-linkedin[_ngcontent-%COMP%] {\n  background-color: #0082ca;\n}\n\n.nga-btn-twitter[_ngcontent-%COMP%] {\n  background-color: #55acee;\n}\n\n.nga-btn-chrome-extension[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLDhFQUE4RTtFQUU5RSxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUVFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtJQUNwQixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5uZ2EtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmdhLWZvb3RlciBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbn1cblxuLm5nYS1mb290ZXIgYTpob3Zlcixcbi5uZ2EtZm9vdGVyIGE6Zm9jdXMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubmdhLWZvb3RlciAubmdhLWhpbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xufVxuXG4ubmdhLWZvb3RlciAubmdhLWhpbnQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5uZ2EtYnRuLXNvY2lhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogNDdweDtcbn1cblxuLm5nYS1idG4tc29jaWFsIGkge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiA0N3B4XG59XG5cbi5uZ2EtYnRuLXNvY2lhbCBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLm5nYS1idG4tc29jaWFsOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMTdweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSlcbn1cblxuLm5nYS1idG4tc29jaWFsIGk6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5uZ2EtYnRuLXNvY2lhbC1pIHtcbiAgYm9yZGVyOiAxcHggI2ZmZiBzb2xpZDtcbn1cbi5uZ2EtYnRuLWdpdGh1YiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi5uZ2EtYnRuLWdpdGxhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XG59XG5cbi5uZ2EtYnRuLWxpbmtlZGluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODJjYTtcbn1cblxuLm5nYS1idG4tdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59XG5cbi5uZ2EtYnRuLWNocm9tZS1leHRlbnNpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2322:
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterModule: () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-routing.module */ 64841);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component */ 49186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class FooterModule {}
FooterModule.ɵfac = function FooterModule_Factory(t) {
  return new (t || FooterModule)();
};
FooterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FooterModule
});
FooterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterRoutingModule],
    exports: [_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent]
  });
})();

/***/ }),

/***/ 65060:
/*!************************************************************!*\
  !*** ./src/app/components/header/header-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderRoutingModule: () => (/* binding */ HeaderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);



const routes = [];
class HeaderRoutingModule {}
HeaderRoutingModule.ɵfac = function HeaderRoutingModule_Factory(t) {
  return new (t || HeaderRoutingModule)();
};
HeaderRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: HeaderRoutingModule
});
HeaderRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 73149:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 98,
  vars: 0,
  consts: [[1, "navbar", "navbar-dark", "navbar-expand-lg", "fixed-top", "nav-pad-15", "nga-navbar"], ["aria-label", "Main navigation", 1, "container"], ["href", "/", "alt", "Clodura.AI", "aria-label", "Clodura.AI", 1, "navbar-brand"], ["src", "./assets/params/images/logo/clodura.ai.webp", "width", "200px", "height", "23px", "alt", "Clodura.AI Logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "navbar-nav", "me-auto"], [1, "nav-item", "dropdown"], ["aria-current", "page", "id", "dropdownMenuButtonProduct", "data-bs-toggle", "dropdown", "href", "/sales-prospecting-platform/", 1, "nav-link", "nga-nav-link", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButtonProduct", 1, "dropdown-menu"], ["href", "/b2b-data-lists/", 1, "dropdown-item"], ["href", "/direct-dials/", 1, "dropdown-item"], ["href", "/technology-install-base-data/", 1, "dropdown-item"], ["href", "/sales-intelligence/", 1, "dropdown-item"], ["href", "/sales-cadence/", 1, "dropdown-item"], ["href", "/custom-research/", 1, "dropdown-item"], ["href", "/integrations/", 1, "dropdown-item"], [1, "nav-item"], ["aria-current", "page", "href", "/our-data/", 1, "nav-link", "nga-nav-link"], ["aria-current", "page", "href", "/pricing/", 1, "nav-link", "nga-nav-link"], ["aria-current", "page", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "href", "/database-center/", 1, "nav-link", "nga-nav-link", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], ["href", "/database-center/", 1, "dropdown-item"], ["href", "/tools/email-verifier/", 1, "dropdown-item"], ["href", "/blog/", 1, "dropdown-item"], ["href", "/webinar/", 1, "dropdown-item"], ["href", "/compare-with-us/", 1, "dropdown-item"], ["href", "/salesstreetvideos/", 1, "dropdown-item"], ["href", "/videos/", 1, "dropdown-item"], ["href", "/clodura-ai-product-tutorials/", 1, "dropdown-item"], ["aria-current", "page", "id", "dropdownMenuButton2", "data-bs-toggle", "dropdown", "href", "/our-happy-customers-clodura-ai/", 1, "nav-link", "nga-nav-link", "dropdown-toggle"], ["href", "/our-happy-customers-clodura-ai/", 1, "dropdown-item"], ["href", "/reviews", 1, "dropdown-item"], ["href", "/affiliate-program/", 1, "dropdown-item"], ["href", "/executives/", 1, "dropdown-item"], ["href", "/career/", 1, "dropdown-item"], ["aria-current", "page", "href", "https://app.clodura.ai/#/auth/login/", 1, "nav-link", "nga-nav-link"], ["type", "button", "href", "/app/#/auth/register?utm_source=Clodura&utm_medium=Tools&utm_campaign=Tools_Verification&utm_content=register", 1, "btn", "btn-sm", "btn-outline-light", "me-2", "button-free-sign-up", "text-white"], [1, "text-white"], ["type", "button", "href", "/request-demo?utm_source=Clodura&utm_medium=Tools&utm_campaign=Tools_Verification&utm_content=requeest-demo", 1, "btn", "btn-sm", "btn-outline-light", "me-2", "button-free-book-a-demo", "text-white"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8)(9, "li", 9)(10, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11)(13, "li")(14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "B2B Data Lists");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Direct Dials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Technology Install Base Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sales Intelligence");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sales Cadence");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Custom Research");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Integration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 19)(35, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Our Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 19)(38, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 9)(41, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Resources");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 23)(44, "li")(45, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Database Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Free Tools");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Blogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li")(54, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Webinar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Compare With Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sales Street Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li")(63, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 9)(69, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 23)(72, "li")(73, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li")(76, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li")(79, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Affiliate Program");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Executives");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li")(85, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Career");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 19)(88, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 19)(91, "a", 39)(92, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Free Sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 19)(95, "a", 41)(96, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Book A Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: [".nga-nav-link[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 400 !important;\n  font-size: 16px !important;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 400 !important;\n  font-size: 16px !important;\n\n}\n\n\n.nga-navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 11px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff !important;\n}\n\n.nga-logo[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.nga-logo[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.nga-btn-navbar[_ngcontent-%COMP%] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #1976d2;\n  --bs-btn-border-color: #1976d2;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0b5ed7;\n  --bs-btn-hover-border-color: #0a58ca;\n}\n\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 1px !important;\n  box-shadow: #aaa 0px 0px 10px 0px !important;\n  border: none !important;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n  margin-bottom: 20px !important;\n  margin-right: 5px !important;\n  margin-left: 5px !important;\n  display: block;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n    color: rgb(42, 162, 117) !important;\n    background-color: transparent !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMEJBQTBCOztBQUU1Qjs7O0FBR0E7RUFFRSw4RUFBOEU7RUFDOUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixvQ0FBb0M7QUFDdEM7Ozs7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw0Q0FBNEM7RUFDNUMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsd0NBQXdDO0FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiLm5nYS1uYXYtbGluayB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuXG59XG5cblxuLm5nYS1uYXZiYXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMTFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAxMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2EtbG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uZ2EtbG9nbzpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xufVxuXG4ubmdhLWJ0bi1uYXZiYXIge1xuICAtLWJzLWJ0bi1jb2xvcjogI2ZmZjtcbiAgLS1icy1idG4tYmc6ICMxOTc2ZDI7XG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogIzE5NzZkMjtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICNmZmY7XG4gIC0tYnMtYnRuLWhvdmVyLWJnOiAjMGI1ZWQ3O1xuICAtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6ICMwYTU4Y2E7XG59XG5cblxuXG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogI2FhYSAwcHggMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgY29sb3I6IHJnYig0MiwgMTYyLCAxMTcpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 72215:
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderModule: () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-routing.module */ 65060);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ 73149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class HeaderModule {}
HeaderModule.ɵfac = function HeaderModule_Factory(t) {
  return new (t || HeaderModule)();
};
HeaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HeaderModule
});
HeaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HeaderModule, {
    declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderRoutingModule],
    exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent]
  });
})();

/***/ }),

/***/ 67754:
/*!****************************************************!*\
  !*** ./src/app/modules/general/bw/bw.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevelopedWithComponent: () => (/* binding */ DevelopedWithComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 56316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 88262);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-captcha */ 26926);










const _c0 = ["captchaElem"];
function DevelopedWithComponent_form_13_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DevelopedWithComponent_form_13_span_12_span_1_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DevelopedWithComponent_form_13_span_12_span_2_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DevelopedWithComponent_form_13_span_12_span_3_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.valresp.success && ctx_r4.valresp.valid && ctx_r4.loadnsub.reset);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.valresp.success && !ctx_r4.valresp.valid && ctx_r4.loadnsub.reset);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.valresp.success && ctx_r4.loadnsub.reset);
  }
}
function DevelopedWithComponent_form_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " A proper website url is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide a valid website url. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please fill in captcha. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r14.errMsg.msg));
  }
}
function DevelopedWithComponent_form_13_span_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You have exhausted daily verification limit. Please try again tomorrow or you can ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " for bigger and wider database. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_form_13_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DevelopedWithComponent_form_13_span_20_span_1_Template, 3, 3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DevelopedWithComponent_form_13_span_20_span_2_Template, 5, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.errMsg.type !== "limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.errMsg.type === "limit");
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "bg-gray-active text-black": a0,
    "bg-clodura-warning text-black": a1,
    "bg-clodura-success": a2
  };
};
function DevelopedWithComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DevelopedWithComponent_form_13_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.verify(ctx_r16.aFormGroup));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 62)(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 65)(5, "div", 66)(6, "ngx-recaptcha2", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reset", function DevelopedWithComponent_form_13_Template_ngx_recaptcha2_reset_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.handleReset());
    })("expire", function DevelopedWithComponent_form_13_Template_ngx_recaptcha2_expire_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.handleExpire());
    })("load", function DevelopedWithComponent_form_13_Template_ngx_recaptcha2_load_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.handleLoad());
    })("success", function DevelopedWithComponent_form_13_Template_ngx_recaptcha2_success_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.handleSuccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 69)(9, "div")(10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DevelopedWithComponent_form_13_span_11_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DevelopedWithComponent_form_13_span_12_Template, 4, 3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DevelopedWithComponent_form_13_div_15_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DevelopedWithComponent_form_13_div_16_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DevelopedWithComponent_form_13_div_17_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DevelopedWithComponent_form_13_span_18_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DevelopedWithComponent_form_13_span_19_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DevelopedWithComponent_form_13_span_20_Template, 3, 2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.aFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("siteKey", ctx_r0.siteKey)("useGlobalDomain", false)("size", "normal")("hl", ctx_r0.lang)("theme", ctx_r0.theme)("type", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](18, _c1, ctx_r0.loadnsub.loading && ctx_r0.loadnsub.submit && ctx_r0.loadnsub.reset, !ctx_r0.loadnsub.loading && !ctx_r0.loadnsub.submit && ctx_r0.loadnsub.reset && ctx_r0.valresp && ctx_r0.valresp.success && !ctx_r0.valresp.valid, !ctx_r0.loadnsub.loading && !ctx_r0.loadnsub.submit && ctx_r0.loadnsub.reset && ctx_r0.valresp && ctx_r0.valresp.success && ctx_r0.valresp.valid))("disabled", ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loadnsub.loading && ctx_r0.loadnsub.submit && !ctx_r0.valresp);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.loadnsub.loading && !ctx_r0.loadnsub.submit && ctx_r0.valresp);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.loadnsub.btnLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_12_0.hasError("required")) && (((tmp_12_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_12_0.touched) || ((tmp_12_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_12_0.dirty)) && !ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_13_0.hasError("pattern")) && (((tmp_13_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_13_0.touched) || ((tmp_13_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_13_0.dirty)) && !ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx_r0.aFormGroup.get("recaptcha")) == null ? null : tmp_14_0.hasError("required")) && (((tmp_14_0 = ctx_r0.aFormGroup.get("recaptcha")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx_r0.aFormGroup.get("recaptcha")) == null ? null : tmp_14_0.touched)) && !ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.hasError("required")) && !((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.hasError("pattern")) && (((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.touched) || ((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loadnsub.isError);
  }
}
function DevelopedWithComponent_div_16_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 97);
  }
}
function DevelopedWithComponent_div_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_div_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_div_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_div_16_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Bad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_div_16_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email/Inbox looks good and can receive email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_div_16_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email/Inbox appears risky. Email may land in spam or bounce.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DevelopedWithComponent_div_16_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email/Inbox appears bad or has errors. Email may not reach.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    "text-danger": a0,
    "text-success": a1,
    "text-warning": a2
  };
};
function DevelopedWithComponent_div_16_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 104)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](4, _c2, ctx_r31.valresp.status === "" || ctx_r31.valresp.status === "bad" || ctx_r31.valresp.status === "err", ctx_r31.valresp.status === "good", ctx_r31.valresp.status === "risky"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r31.valresp == null ? null : ctx_r31.valresp.status), " ");
  }
}
function DevelopedWithComponent_div_16_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 104)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](4, _c2, ctx_r32.valresp.status === "" || ctx_r32.valresp.status === "bad" || ctx_r32.valresp.status === "err", ctx_r32.valresp.status === "good", ctx_r32.valresp.status === "risky"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r32.valresp == null ? null : ctx_r32.valresp.reason), " ");
  }
}
const _c3 = function (a0, a1, a2) {
  return {
    "bg-clodura-error text-white": a0,
    "bg-clodura-warning text-black": a1,
    "bg-clodura-success text-white": a2
  };
};
function DevelopedWithComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "div", 81)(4, "div", 82)(5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DevelopedWithComponent_div_16_i_6_Template, 1, 0, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DevelopedWithComponent_div_16_span_7_Template, 2, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DevelopedWithComponent_div_16_span_8_Template, 2, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DevelopedWithComponent_div_16_span_9_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DevelopedWithComponent_div_16_span_10_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DevelopedWithComponent_div_16_span_11_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 87)(13, "span", 88)(14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DevelopedWithComponent_div_16_span_17_Template, 2, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DevelopedWithComponent_div_16_span_18_Template, 2, 0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DevelopedWithComponent_div_16_span_19_Template, 2, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DevelopedWithComponent_div_16_span_20_Template, 5, 8, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DevelopedWithComponent_div_16_span_21_Template, 5, 8, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 23)(24, "div", 39)(25, "p")(26, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "An email domain is the web address that comes after the @ symbol in an email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 39)(33, "p")(34, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "MX Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "A mail exchanger record (MX record) specifies the mail server responsible for accepting email messages on behalf of a domain name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 39)(41, "p")(42, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Is Disposable?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "A disposable email is a unique email address that is temporary. It expires after a set amount of time or a set number of uses.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 39)(49, "p")(50, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Is Catch-all?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "A catch-all email/domain is a mailbox/domain that captures emails sent to any invalid email addresses of the domain.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 39)(57, "p")(58, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Is free?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Email inbox services that are offered for free to users.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 39)(65, "p")(66, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Format");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](20, _c3, ctx_r1.valresp.status === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err", ctx_r1.valresp.status === "risky", ctx_r1.valresp.status === "good"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](24, _c2, (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "good", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "Risky"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp == null ? null : ctx_r1.valresp.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp == null ? null : ctx_r1.valresp.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.MX);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.valresp == null ? null : ctx_r1.valresp.isDisposable) ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.valresp == null ? null : ctx_r1.valresp.isCatchAll) ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.valresp == null ? null : ctx_r1.valresp.isfree) ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.format);
  }
}
class DevelopedWithComponent {
  constructor(platformId, seoService, formBuilder, cdr, dom, meta, rf2, seoSvc) {
    this.seoService = seoService;
    this.formBuilder = formBuilder;
    this.cdr = cdr;
    this.dom = dom;
    this.meta = meta;
    this.rf2 = rf2;
    this.seoSvc = seoSvc;
    this.siteKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.gtwoSiteKey;
    this.captchaIsLoaded = false;
    this.captchaSuccess = false;
    this.captchaIsExpired = false;
    this.theme = 'light';
    this.size = 'normal';
    this.lang = 'en';
    this.type = 'image';
    this.useGlobalDomain = false;
    this.name = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.name;
    // sitekey = environment.application.gsiteKey;
    // secretKey = environment.application.secretKey;
    this.email = '';
    this.token = '';
    this.errMsg = {
      msg: '',
      type: ''
    };
    this.loadnsub = {
      loading: false,
      submit: false,
      reset: false,
      isError: false,
      btnLabel: 'Analyze Website'
    };
    this.formModel = {};
    this.renderer = rf2.createRenderer(null, null);
    this.seoSvc.setMetaTitle(`Free Developed With Tool | Instantly identify technologies| Clodura.AI`);
    this.seoSvc.setMetaOrgTitle(`Free Developed With Tool | Instantly identify technologies | Clodura.AI`);
    this.seoSvc.setMetaDescription(`Instantly identify technologies used to develop a website.  Determine the technologies that were used to create a website without having to manually inspect the code or the website itself. No sign-up required.`);
    this.seoSvc.setMetaOrgDesc(`Instantly identify technologies used to develop a website.  Determine the technologies that were used to create a website without having to manually inspect the code or the website itself. No sign-up required.`);
    this.seoSvc.setMetaKey(`
          website scanner, website analyzer, analyze website, analyse website, website analyser, website technology scanner, identify website technologies, website developed with, website built with, website coded with, discover technologies, find technologies, discover website technologies, find website technologies, scan website technologies
          `);
    this.createCanonicalURL();
    this.updateHrefLangs(`https://www.clodura.ai/tools/developed-with`);
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(platformId);
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/)]]
    });
  }
  ngOnInit() {
    console.log('');
  }
  verify(form) {
    this.loadnsub.submit = true;
    this.loadnsub.reset = true;
    if (form.valid) {
      this.loadnsub.loading = true;
      this.loadnsub.btnLabel = 'Verifying';
      this.seoService.validateEmail(form.value).subscribe(res => {
        this.loadnsub.loading = false;
        this.loadnsub.submit = false;
        if (!res.success) {
          this.loadnsub.isError = true;
          this.errMsg.msg = res.err;
          this.errMsg.type = res.type;
          this.loadnsub.btnLabel = 'Error';
        } else {
          this.valresp = res;
          if (this.valresp.valid) {
            this.loadnsub.btnLabel = 'Valid';
          } else {
            this.loadnsub.btnLabel = 'Invalid';
          }
        }
        setTimeout(() => {
          this.loadnsub.reset = false;
          this.loadnsub.btnLabel = 'Verify Email';
          this.aFormGroup.reset();
          // this.handleReset();
          this.captchaElem.reloadCaptcha();
        }, 3000);
      });
    } else {
      this.loadnsub.submit = false;
    }
  }
  handleReset() {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  handleSuccess(captchaResponse) {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  handleLoad() {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  handleExpire() {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }
  createCanonicalURL() {
    const head = this.dom.getElementsByTagName('head')[0];
    let element = this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.dom.createElement('link');
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', 'https://www.clodura.ai/tools/developed-with');
  }
  updateHrefLangs(url) {
    // let link: HTMLLinkElement = this.dom.createElement("link");
    // link.setAttribute("rel", "canonical");
    // this.dom.head.appendChild(link);
    // link.setAttribute("href", this.dom.URL.replace("http://", "https://"));
    // console.log(link, this.dom.URL);
    const arr = Array.from(this.dom.head.children);
    const linkElt = arr.find(e => e['rel'] === 'alternate' && e['hreflang'] === 'x-default');
    const linkElten = arr.find(e => e['rel'] === 'alternate' && e['hreflang'] === 'en');
    this.renderer.setAttribute(linkElten, 'href', url);
    this.renderer.setAttribute(linkElt, 'href', url);
  }
}
DevelopedWithComponent.ɵfac = function DevelopedWithComponent_Factory(t) {
  return new (t || DevelopedWithComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
};
DevelopedWithComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DevelopedWithComponent,
  selectors: [["app-dw"]],
  viewQuery: function DevelopedWithComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.captchaElem = _t.first);
    }
  },
  decls: 232,
  vars: 2,
  consts: [[1, "container", "bkg"], [1, "row", "mb-5"], [1, "col-12", "text-center", "pt-5", "px-5"], [1, "bg-black", "text-white", "text-400", "py-1"], [1, "col-12", "py-2"], [1, "card", "shadow", "shadow-md", "bg-white", "rounded", "rounded-md", "border-0"], [1, "card-body", "bg-white", "rounded", "rounded-md", "text-center"], ["class", "row gy-2 gx-3 align-items-center", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "col-12", "mb-5"], ["class", "card shadow shadow-md bg-white border-0", 4, "ngIf"], [1, "row", "border-bottom", "border-top"], [1, "col-12", "mt-3", "mb-3"], [1, "col-xs-12", "col-sm-6", "col-md-3", "col-lg-3", "mb-5", "d-flex", "align-items-stretch"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-gray-clodura"], [1, "card-body", "rounded", "bg-gray-clodura"], [1, "card-title"], [1, "d-block", "text-42-100", "mb-3"], [1, "fas", "fa-keyboard"], [1, "rounded-circle"], [1, "card-text"], [1, "fas", "fa-robot"], [1, "fas", "fa-check-square"], [1, "fas", "fa-certificate"], [1, "row"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-one"], [1, "card-body", "rounded", "bg-one"], [1, "fas", "fa-rocket"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-two"], [1, "card-body", "rounded", "bg-two"], [1, "fas", "fa-code"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-three"], [1, "card-body", "rounded", "bg-three"], [1, "fas", "fa-globe"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-four"], [1, "card-body", "rounded", "bg-four"], [1, "fas", "fa-mitten"], [1, "col-12"], [1, "card", "bg-periwinkle", "rounded", "border-0"], [1, "card-body", "bg-periwinkle", "rounded", "border-0"], [1, "col-6"], [1, "col-6", "text-center"], ["src", "https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/151122_7.png", "alt", "accuracy", 1, "img-fluid"], [1, "row", "mt-4"], [1, "card", "bg-misty-rose", "rounded", "border-0"], [1, "card-body", "bg-misty-rose", "rounded", "border-0"], ["src", "https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/speed.png", "alt", "fast", "width", "240px", 1, "img-fluid"], [1, "row", "mt-4", "border-bottom"], [1, "card", "bg-linen", "rounded", "border-0"], [1, "card-body", "bg-linen", "rounded", "border-0"], ["src", "https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/trust.png", "alt", "trust", "width", "240px", 1, "img-fluid"], [1, "row", "border-bottom"], [1, "col-12", "mb-5", "d-flex", "align-items-stretch"], [1, "card", "bg-mint-cream", "border-0", "rounded"], [1, "card-body", "bg-mint-cream", "border-0", "rounded"], [1, "card-text", 2, "list-style", "none"], [1, "mb-1", "py-2"], [1, "card", "bg-light-blue", "border-0", "rounded"], [1, "card-body", "bg-light-blue", "border-0", "rounded"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4", "mb-5", "d-flex", "align-items-stretch"], [1, "card"], [1, "card-body"], [1, "row", "gy-2", "gx-3", "align-items-center", 3, "formGroup", "ngSubmit"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-7"], [1, "input-group"], ["type", "email", "placeholder", "https://www.example.com", "formControlName", "email", 1, "form-control", "form-control-lg", "py-4", "text-center"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-3"], [1, "g-recaptcha", "d-flex", "justify-content-center"], ["formControlName", "recaptcha", 3, "siteKey", "useGlobalDomain", "size", "hl", "theme", "type", "reset", "expire", "load", "success"], ["captchaElem", ""], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-2"], ["type", "submit", 1, "rounded", "bg-clodura-color", "bg-clodura-primary", "shadow", "shadow-md", "py-4", "w-100", 3, "ngClass", "disabled"], [4, "ngIf"], [1, "col-sm-12", "text-danger", "text-14"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "far", "fa-check-circle"], [1, "fas", "fa-exclamation-circle"], [1, "far", "fa-times-circle"], ["href", "/app/#/auth/register?utm_source=Clodura&utm_medium=Tools&utm_campaign=Tools_Verification&utm_content=register"], [1, "card", "shadow", "shadow-md", "bg-white", "border-0"], [1, "card-body", "bg-white"], [1, "widget-49"], [1, "widget-49-title-wrapper"], [1, "widget-49-date-primary", 3, "ngClass"], [1, "widget-49-date-day"], ["class", "far fa-smile", 4, "ngIf"], ["class", "widget-49-date-day", 4, "ngIf"], ["class", "widget-49-date-month", 4, "ngIf"], [1, "widget-49-meeting-info"], [1, "widget-49-pro-title"], [1, "widget-49-meeting-time", "text-14", 3, "ngClass"], ["class", "widget-49-date-month text-success", 4, "ngIf"], ["class", "widget-49-date-month text-warning", 4, "ngIf"], ["class", "widget-49-date-month text-danger", 4, "ngIf"], ["class", "d-block", 3, "ngClass", 4, "ngIf"], [1, "text-600", "text-14", "d-block", "border-bottom"], [1, "text-600", "text-16", "d-block"], [1, "text-11", "text-500", "text-gray-light"], [1, "far", "fa-smile"], [1, "far", "fa-meh-blank"], [1, "far", "fa-dizzy"], [1, "widget-49-date-month"], [1, "widget-49-date-month", "text-success"], [1, "widget-49-date-month", "text-warning"], [1, "widget-49-date-month", "text-danger"], [1, "d-block", 3, "ngClass"]],
  template: function DevelopedWithComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Developed With");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Identifies the technologies used to develop the website.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Instantly identify technologies used to develop a website. Determine the technologies that were used to create a website without having to manually inspect the code or the website itself. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "div", 4)(11, "div", 5)(12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DevelopedWithComponent_form_13_Template, 21, 22, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1)(15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DevelopedWithComponent_div_16_Template, 70, 28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "How it works?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "h3", 15)(25, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "1.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Input Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Type or Simply paste your email address into the input text field. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12)(33, "div", 13)(34, "div", 14)(35, "h3", 15)(36, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "2.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Bot Check ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " To avoid bots and provide you with good results. Please check - I'm not a robot. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 12)(44, "div", 13)(45, "div", 14)(46, "h3", 15)(47, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "3.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Verify ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Click on verify button. Our advanced verification algorithm and system will quickly analyze email address. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 12)(55, "div", 13)(56, "div", 14)(57, "h3", 15)(58, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "4.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Result ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Within no time, you will receive a detailed yet easy to understand email verification report, indicating the status of the email address. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 23)(66, "div", 11)(67, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 12)(70, "div", 24)(71, "div", 25)(72, "h3", 15)(73, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "1.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Fast and Accurate ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Our email verifier is built on cutting-edge technology, ensuring quick and accurate results for your email address. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 12)(81, "div", 27)(82, "div", 28)(83, "h3", 15)(84, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "2.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Syntax Validation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Our tool checks the syntax of each email address to ensure it follows the correct format. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 12)(92, "div", 30)(93, "div", 31)(94, "h3", 15)(95, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "3.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Domain Check ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " We verify the domain of each email address to ensure it exists and can receive emails. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 12)(103, "div", 33)(104, "div", 34)(105, "h3", 15)(106, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "4.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Catch-All Detection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " Spot catch-all email domains, which accept emails for any address at that domain, potentially affecting deliverability. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 23)(114, "div", 36)(115, "div", 37)(116, "div", 38)(117, "div", 23)(118, "div", 39)(119, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Accurate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, " Our email verifier tool uses a variety of methods to ensure that the emails you verify are accurate, including DNS lookup, MX record check, and inbox check. We also have a 99% accuracy rate, so you can be confident that the emails you send will reach their intended recipients. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "By removing invalid and spammy emails from your list, you can improve your email deliverability and avoid getting your emails marked as spam.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 42)(128, "div", 36)(129, "div", 43)(130, "div", 44)(131, "div", 23)(132, "div", 39)(133, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Fast");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, " Our email verifier tool is fast and efficient, so you can get your results quickly. We can verify thousands of emails in minutes, so you can spend less time cleaning your email list and more time sending emails. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "By cleaning your email list regularly, you can save time and money by avoiding the costs of sending emails to invalid addresses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 46)(142, "div", 8)(143, "div", 47)(144, "div", 48)(145, "div", 23)(146, "div", 39)(147, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Reliable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, " Our email verifier tool is reliable and trustworthy. We use a secure infrastructure to protect your data. We provide detailed reports on the results of your email verification, so you can see which emails are valid, invalid, and spam traps. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "When your emails reach the right people, they're more likely to open and read them, which can lead to increased engagement and conversions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 50)(156, "div", 11)(157, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Why do I need Email Verifier?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 51)(160, "div", 52)(161, "div", 53)(162, "ul", 54)(163, "li", 55)(164, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Improved email deliverability");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, " When you send emails to valid addresses, you're more likely to achieve inbox placement. This means that your emails will be seen by the recipient, which can lead to increased open rates, click-through rates, and conversions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "li", 55)(168, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Reduced bounce rates");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " When you remove invalid addresses from your list, you can reduce your bounce rates. Bounce rates are a measure of how many emails are not delivered successfully. High bounce rates can damage your sender reputation and make it more difficult for your emails to reach the inbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "li", 55)(172, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Increased ROI");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, " By improving your email deliverability and reducing your bounce rates, you can increase your ROI from email marketing. This means that you can get more out of your email marketing campaigns by spending less money.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 50)(176, "div", 11)(177, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "How do we do it?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 51)(180, "div", 56)(181, "div", 57)(182, "ul", 54)(183, "li", 55)(184, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "DNS lookup");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, " This is the process of querying the Domain Name System (DNS) to find out the location of the email server for a particular domain. If the DNS lookup fails, then the email address is invalid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "li", 55)(188, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "MX record check");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, " This is the process of checking the Mail Exchanger (MX) record for a particular domain. The MX record tells us which email server is responsible for receiving emails for that domain. If the MX record is not found, then the email address is invalid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "li", 55)(192, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Inbox check");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, " This is the process of sending a test email to the address to see if it arrives in the recipient's inbox. If the test email does not arrive, then the email address is invalid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "li", 55)(196, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Spam trap detection");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, " We identify and remove spam traps from your list. Spam traps are email addresses that are set up to catch spammers. If you send an email to a spam trap, your email will be rejected and your sender reputation will be damaged.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "li", 55)(200, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Disposable email detection");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, " We identify and remove disposable email addresses from your list. Disposable email addresses are created for temporary use and are often used by spammers.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "li", 55)(204, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Hard bounce detection");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, " We identify and remove hard bounces from your list. Hard bounces are emails that are returned to the sender because the recipient's email address does not exist or is no longer valid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 23)(208, "div", 11)(209, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Why Clodura?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 58)(212, "div", 59)(213, "div", 60)(214, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Get Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, " Ready to clean and validate your email? Start using our Free Email Verifier Tool today and experience the benefits of a squeaky-clean email database. It's time to take control of your email marketing and communication efforts. Remember, clean email lists lead to successful campaigns! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 58)(219, "div", 59)(220, "div", 60)(221, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Data Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, " At Clodura.AI, we take data security seriously. We understand the importance of protecting your email lists and ensuring their confidentiality. Rest assured that we don't store any email addresses you verify using our tool. Once the verification process is complete, the data is automatically purged from our system. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 58)(226, "div", 59)(227, "div", 60)(228, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Disclaimer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, " Please note that while our email verification tool is highly accurate, it cannot guarantee 100% accuracy. Email validation results may vary based on factors beyond our control, such as the email provider's server response or temporary issues with domains. Always cross-verify the results with additional sources for the best outcomes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isBrowser);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadnsub.loading && !ctx.loadnsub.submit && ctx.valresp);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ngx_captcha__WEBPACK_IMPORTED_MODULE_6__.ReCaptcha2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe],
  styles: [".bkg[_ngcontent-%COMP%] {\n  background-image: url('https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/validback.jpg') !important;\n  \n\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.bg-gray-clodura[_ngcontent-%COMP%] {\n  background-color: rgba(225, 229, 242, .7) !important;\n}\n\n.bg-one[_ngcontent-%COMP%] {\n  background-color: #edf2fb !important\n}\n\n.bg-two[_ngcontent-%COMP%] {\n  background-color: #d7e3fc !important\n}\n\n.bg-three[_ngcontent-%COMP%] {\n  background-color: #b6ccfe !important\n}\n\n.bg-four[_ngcontent-%COMP%] {\n  background-color: #abc4ff !important\n}\n\n\n\n.bg-magnolia[_ngcontent-%COMP%] { background-color: #eae4e9ff !important;}\n.bg-linen[_ngcontent-%COMP%] { background-color: #fff1e6ff !important;}\n.bg-misty-rose[_ngcontent-%COMP%] { background-color: #fde2e4ff !important;}\n.bg-mimi-pink[_ngcontent-%COMP%] { background-color: #fad2e1ff !important;}\n.bg-mint-cream[_ngcontent-%COMP%] { background-color: #e2ece9ff !important;}\n.bg-light-blue[_ngcontent-%COMP%] { background-color: #bee1e6ff !important;}\n.bg-isabelline[_ngcontent-%COMP%] { background-color: #f0efebff !important;}\n.bg-lavender-web[_ngcontent-%COMP%] { background-color: #dfe7fdff !important;}\n.bg-periwinkle[_ngcontent-%COMP%] { background-color: #cddafdff !important;}\n\n.text-32[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n}\n\n.text-42-100[_ngcontent-%COMP%] {\n  font-size: 42px !important;\n  font-weight: 100 !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2J3L2J3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSw4SUFBOEk7RUFDOUksMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBLFlBQVk7QUFDWixlQUFlLHNDQUFzQyxDQUFDO0FBQ3RELFlBQVksc0NBQXNDLENBQUM7QUFDbkQsaUJBQWlCLHNDQUFzQyxDQUFDO0FBQ3hELGdCQUFnQixzQ0FBc0MsQ0FBQztBQUN2RCxpQkFBaUIsc0NBQXNDLENBQUM7QUFDeEQsaUJBQWlCLHNDQUFzQyxDQUFDO0FBQ3hELGlCQUFpQixzQ0FBc0MsQ0FBQztBQUN4RCxtQkFBbUIsc0NBQXNDLENBQUM7QUFDMUQsaUJBQWlCLHNDQUFzQyxDQUFDOztBQUV4RDtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4uYmtnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vY2xvZHVyYS1zaXRlbWFwLWFwcC0wMS9zdGF0YXNzZXRzL2Fzc2V0cy9wYXJhbXMvaW1hZ2VzL2ltYWdlcy92YWxpZGJhY2suanBnJykgIWltcG9ydGFudDtcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogOyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iZy1ncmF5LWNsb2R1cmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI5LCAyNDIsIC43KSAhaW1wb3J0YW50O1xufVxuXG4uYmctb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjJmYiAhaW1wb3J0YW50XG59XG5cbi5iZy10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlM2ZjICFpbXBvcnRhbnRcbn1cblxuLmJnLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2Y2NmZSAhaW1wb3J0YW50XG59XG5cbi5iZy1mb3VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYzRmZiAhaW1wb3J0YW50XG59XG5cbi8qIENTUyBIRVggKi9cbi5iZy1tYWdub2xpYSB7IGJhY2tncm91bmQtY29sb3I6ICNlYWU0ZTlmZiAhaW1wb3J0YW50O31cbi5iZy1saW5lbiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmYxZTZmZiAhaW1wb3J0YW50O31cbi5iZy1taXN0eS1yb3NlIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTJlNGZmICFpbXBvcnRhbnQ7fVxuLmJnLW1pbWktcGluayB7IGJhY2tncm91bmQtY29sb3I6ICNmYWQyZTFmZiAhaW1wb3J0YW50O31cbi5iZy1taW50LWNyZWFtIHsgYmFja2dyb3VuZC1jb2xvcjogI2UyZWNlOWZmICFpbXBvcnRhbnQ7fVxuLmJnLWxpZ2h0LWJsdWUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVlMWU2ZmYgIWltcG9ydGFudDt9XG4uYmctaXNhYmVsbGluZSB7IGJhY2tncm91bmQtY29sb3I6ICNmMGVmZWJmZiAhaW1wb3J0YW50O31cbi5iZy1sYXZlbmRlci13ZWIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlN2ZkZmYgIWltcG9ydGFudDt9XG4uYmctcGVyaXdpbmtsZSB7IGJhY2tncm91bmQtY29sb3I6ICNjZGRhZmRmZiAhaW1wb3J0YW50O31cblxuLnRleHQtMzIge1xuICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtNDItMTAwIHtcbiAgZm9udC1zaXplOiA0MnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 73541:
/*!********************************************************!*\
  !*** ./src/app/modules/general/home/home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 56316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 88262);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-captcha */ 26926);










const _c0 = ["captchaElem"];
function HomeComponent_form_13_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_form_13_span_12_span_1_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_form_13_span_12_span_2_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_form_13_span_12_span_3_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.valresp.success && ctx_r4.valresp.valid && ctx_r4.loadnsub.reset);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.valresp.success && !ctx_r4.valresp.valid && ctx_r4.loadnsub.reset);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.valresp.success && ctx_r4.loadnsub.reset);
  }
}
function HomeComponent_form_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " An email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide a valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please fill in captcha. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r14.errMsg.msg));
  }
}
function HomeComponent_form_13_span_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You have exhausted daily verification limit. Please try again tomorrow or you can ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " for bigger and wider database. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_form_13_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_form_13_span_20_span_1_Template, 3, 3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_form_13_span_20_span_2_Template, 5, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.errMsg.type !== "limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.errMsg.type === "limit");
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "bg-gray-active text-black": a0,
    "bg-clodura-warning text-black": a1,
    "bg-clodura-success": a2
  };
};
function HomeComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_13_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.verify(ctx_r16.aFormGroup));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 62)(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 65)(5, "div", 66)(6, "ngx-recaptcha2", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reset", function HomeComponent_form_13_Template_ngx_recaptcha2_reset_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.handleReset());
    })("expire", function HomeComponent_form_13_Template_ngx_recaptcha2_expire_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.handleExpire());
    })("load", function HomeComponent_form_13_Template_ngx_recaptcha2_load_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.handleLoad());
    })("success", function HomeComponent_form_13_Template_ngx_recaptcha2_success_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.handleSuccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 69)(9, "div")(10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeComponent_form_13_span_11_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeComponent_form_13_span_12_Template, 4, 3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HomeComponent_form_13_div_15_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HomeComponent_form_13_div_16_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HomeComponent_form_13_div_17_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HomeComponent_form_13_span_18_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HomeComponent_form_13_span_19_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HomeComponent_form_13_span_20_Template, 3, 2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.aFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("siteKey", ctx_r0.siteKey)("useGlobalDomain", false)("size", "normal")("hl", ctx_r0.lang)("theme", ctx_r0.theme)("type", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](18, _c1, ctx_r0.loadnsub.loading && ctx_r0.loadnsub.submit && ctx_r0.loadnsub.reset, !ctx_r0.loadnsub.loading && !ctx_r0.loadnsub.submit && ctx_r0.loadnsub.reset && ctx_r0.valresp && ctx_r0.valresp.success && !ctx_r0.valresp.valid, !ctx_r0.loadnsub.loading && !ctx_r0.loadnsub.submit && ctx_r0.loadnsub.reset && ctx_r0.valresp && ctx_r0.valresp.success && ctx_r0.valresp.valid))("disabled", ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loadnsub.loading && ctx_r0.loadnsub.submit && !ctx_r0.valresp);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.loadnsub.loading && !ctx_r0.loadnsub.submit && ctx_r0.valresp);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.loadnsub.btnLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_12_0.hasError("required")) && (((tmp_12_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_12_0.touched) || ((tmp_12_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_12_0.dirty)) && !ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_13_0.hasError("pattern")) && (((tmp_13_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_13_0.touched) || ((tmp_13_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_13_0.dirty)) && !ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx_r0.aFormGroup.get("recaptcha")) == null ? null : tmp_14_0.hasError("required")) && (((tmp_14_0 = ctx_r0.aFormGroup.get("recaptcha")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx_r0.aFormGroup.get("recaptcha")) == null ? null : tmp_14_0.touched)) && !ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.hasError("required")) && !((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.hasError("pattern")) && (((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.touched) || ((tmp_15_0 = ctx_r0.aFormGroup.get("email")) == null ? null : tmp_15_0.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.aFormGroup.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loadnsub.isError);
  }
}
function HomeComponent_div_16_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 97);
  }
}
function HomeComponent_div_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_16_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Bad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_16_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email/Inbox looks good and can receive email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_16_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email/Inbox appears risky. Email may land in spam or bounce.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_16_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email/Inbox appears bad or has errors. Email may not reach.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    "text-danger": a0,
    "text-success": a1,
    "text-warning": a2
  };
};
function HomeComponent_div_16_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 104)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](4, _c2, ctx_r31.valresp.status === "" || ctx_r31.valresp.status === "bad" || ctx_r31.valresp.status === "err", ctx_r31.valresp.status === "good", ctx_r31.valresp.status === "risky"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r31.valresp == null ? null : ctx_r31.valresp.status), " ");
  }
}
function HomeComponent_div_16_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 104)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](4, _c2, ctx_r32.valresp.status === "" || ctx_r32.valresp.status === "bad" || ctx_r32.valresp.status === "err", ctx_r32.valresp.status === "good", ctx_r32.valresp.status === "risky"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r32.valresp == null ? null : ctx_r32.valresp.reason), " ");
  }
}
const _c3 = function (a0, a1, a2) {
  return {
    "bg-clodura-error text-white": a0,
    "bg-clodura-warning text-black": a1,
    "bg-clodura-success text-white": a2
  };
};
function HomeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "div", 81)(4, "div", 82)(5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_div_16_i_6_Template, 1, 0, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_16_span_7_Template, 2, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_div_16_span_8_Template, 2, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeComponent_div_16_span_9_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeComponent_div_16_span_10_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeComponent_div_16_span_11_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 87)(13, "span", 88)(14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HomeComponent_div_16_span_17_Template, 2, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HomeComponent_div_16_span_18_Template, 2, 0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HomeComponent_div_16_span_19_Template, 2, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HomeComponent_div_16_span_20_Template, 5, 8, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HomeComponent_div_16_span_21_Template, 5, 8, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 23)(24, "div", 39)(25, "p")(26, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "An email domain is the web address that comes after the @ symbol in an email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 39)(33, "p")(34, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "MX Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "A mail exchanger record (MX record) specifies the mail server responsible for accepting email messages on behalf of a domain name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 39)(41, "p")(42, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Is Disposable?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "A disposable email is a unique email address that is temporary. It expires after a set amount of time or a set number of uses.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 39)(49, "p")(50, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Is Catch-all?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "A catch-all email/domain is a mailbox/domain that captures emails sent to any invalid email addresses of the domain.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 39)(57, "p")(58, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Is free?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Email inbox services that are offered for free to users.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 39)(65, "p")(66, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Format");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](20, _c3, ctx_r1.valresp.status === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err", ctx_r1.valresp.status === "risky", ctx_r1.valresp.status === "good"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp.status === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](24, _c2, (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "good", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "Risky"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "risky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.valresp == null ? null : ctx_r1.valresp.status) === "" || ctx_r1.valresp.status === "bad" || ctx_r1.valresp.status === "err");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp == null ? null : ctx_r1.valresp.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.valresp == null ? null : ctx_r1.valresp.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.MX);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.valresp == null ? null : ctx_r1.valresp.isDisposable) ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.valresp == null ? null : ctx_r1.valresp.isCatchAll) ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.valresp == null ? null : ctx_r1.valresp.isfree) ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.valresp == null ? null : ctx_r1.valresp.format);
  }
}
class HomeComponent {
  constructor(platformId, seoService, formBuilder, cdr, dom, meta, rf2, seoSvc) {
    this.seoService = seoService;
    this.formBuilder = formBuilder;
    this.cdr = cdr;
    this.dom = dom;
    this.meta = meta;
    this.rf2 = rf2;
    this.seoSvc = seoSvc;
    this.siteKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.gtwoSiteKey;
    this.captchaIsLoaded = false;
    this.captchaSuccess = false;
    this.captchaIsExpired = false;
    this.theme = 'light';
    this.size = 'normal';
    this.lang = 'en';
    this.type = 'image';
    this.useGlobalDomain = false;
    this.name = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.name;
    // sitekey = environment.application.gsiteKey;
    // secretKey = environment.application.secretKey;
    this.email = '';
    this.token = '';
    this.errMsg = {
      msg: '',
      type: ''
    };
    this.loadnsub = {
      loading: false,
      submit: false,
      reset: false,
      isError: false,
      btnLabel: 'Verify Email'
    };
    this.formModel = {};
    this.renderer = rf2.createRenderer(null, null);
    this.seoSvc.setMetaTitle(`Free Email Verifier Tool | Instantly Verify Email Addresses | Clodura.AI`);
    this.seoSvc.setMetaOrgTitle(`Free Email Verifier Tool | Instantly Verify Email Addresses | Clodura.AI`);
    this.seoSvc.setMetaDescription(`Clean and validate your email list with Clodura.AI’s free email verifier tool. Instantly verify email addresses for better deliverability, engagement, and cost savings. No sign-up required.`);
    this.seoSvc.setMetaOrgDesc(`Clean and validate your email list with Clodura.AI’s free email verifier tool. Instantly verify email addresses for better deliverability, engagement, and cost savings. No sign-up required.`);
    this.seoSvc.setMetaKey(`
          email verifier, free email verifier, verify email addresses, email validation, clean email list, bulk email verification, improve deliverability, email marketing, validate emails, email list cleaning, email verification tool, check email validity.
          `);
    this.createCanonicalURL();
    this.updateHrefLangs(`https://www.clodura.ai/tools/email-verifier`);
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(platformId);
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]]
    });
  }
  ngOnInit() {
    console.log('');
  }
  verify(form) {
    this.loadnsub.submit = true;
    this.loadnsub.reset = true;
    if (form.valid) {
      this.loadnsub.loading = true;
      this.loadnsub.btnLabel = 'Verifying';
      this.seoService.validateEmail(form.value).subscribe(res => {
        this.loadnsub.loading = false;
        this.loadnsub.submit = false;
        if (!res.success) {
          this.loadnsub.isError = true;
          this.errMsg.msg = res.err;
          this.errMsg.type = res.type;
          this.loadnsub.btnLabel = 'Error';
        } else {
          this.valresp = res;
          if (this.valresp.valid) {
            this.loadnsub.btnLabel = 'Valid';
          } else {
            this.loadnsub.btnLabel = 'Invalid';
          }
        }
        setTimeout(() => {
          this.loadnsub.reset = false;
          this.loadnsub.btnLabel = 'Verify Email';
          this.aFormGroup.reset();
          // this.handleReset();
          this.captchaElem.reloadCaptcha();
        }, 3000);
      });
    } else {
      this.loadnsub.submit = false;
    }
  }
  handleReset() {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  handleSuccess(captchaResponse) {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  handleLoad() {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  handleExpire() {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }
  createCanonicalURL() {
    const head = this.dom.getElementsByTagName('head')[0];
    let element = this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.dom.createElement('link');
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', 'https://www.clodura.ai/tools/email-verifier');
  }
  updateHrefLangs(url) {
    // let link: HTMLLinkElement = this.dom.createElement("link");
    // link.setAttribute("rel", "canonical");
    // this.dom.head.appendChild(link);
    // link.setAttribute("href", this.dom.URL.replace("http://", "https://"));
    // console.log(link, this.dom.URL);
    const arr = Array.from(this.dom.head.children);
    const linkElt = arr.find(e => e['rel'] === 'alternate' && e['hreflang'] === 'x-default');
    const linkElten = arr.find(e => e['rel'] === 'alternate' && e['hreflang'] === 'en');
    this.renderer.setAttribute(linkElten, 'href', url);
    this.renderer.setAttribute(linkElt, 'href', url);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.captchaElem = _t.first);
    }
  },
  decls: 232,
  vars: 2,
  consts: [[1, "container", "bkg"], [1, "row", "mb-5"], [1, "col-12", "text-center", "pt-5", "px-5"], [1, "bg-black", "text-white", "text-400", "py-1"], [1, "col-12", "py-2"], [1, "card", "shadow", "shadow-md", "bg-white", "rounded", "rounded-md", "border-0"], [1, "card-body", "bg-white", "rounded", "rounded-md", "text-center"], ["class", "row gy-2 gx-3 align-items-center", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "col-12", "mb-5"], ["class", "card shadow shadow-md bg-white border-0", 4, "ngIf"], [1, "row", "border-bottom", "border-top"], [1, "col-12", "mt-3", "mb-3"], [1, "col-xs-12", "col-sm-6", "col-md-3", "col-lg-3", "mb-5", "d-flex", "align-items-stretch"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-gray-clodura"], [1, "card-body", "rounded", "bg-gray-clodura"], [1, "card-title"], [1, "d-block", "text-42-100", "mb-3"], [1, "fas", "fa-keyboard"], [1, "rounded-circle"], [1, "card-text"], [1, "fas", "fa-robot"], [1, "fas", "fa-check-square"], [1, "fas", "fa-certificate"], [1, "row"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-one"], [1, "card-body", "rounded", "bg-one"], [1, "fas", "fa-rocket"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-two"], [1, "card-body", "rounded", "bg-two"], [1, "fas", "fa-code"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-three"], [1, "card-body", "rounded", "bg-three"], [1, "fas", "fa-globe"], [1, "card", "border-0", "shadow", "shadow-sm", "rounded", "bg-four"], [1, "card-body", "rounded", "bg-four"], [1, "fas", "fa-mitten"], [1, "col-12"], [1, "card", "bg-periwinkle", "rounded", "border-0"], [1, "card-body", "bg-periwinkle", "rounded", "border-0"], [1, "col-6"], [1, "col-6", "text-center"], ["src", "https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/151122_7.png", "alt", "accuracy", 1, "img-fluid"], [1, "row", "mt-4"], [1, "card", "bg-misty-rose", "rounded", "border-0"], [1, "card-body", "bg-misty-rose", "rounded", "border-0"], ["src", "https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/speed.png", "alt", "fast", "width", "240px", 1, "img-fluid"], [1, "row", "mt-4", "border-bottom"], [1, "card", "bg-linen", "rounded", "border-0"], [1, "card-body", "bg-linen", "rounded", "border-0"], ["src", "https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/trust.png", "alt", "trust", "width", "240px", 1, "img-fluid"], [1, "row", "border-bottom"], [1, "col-12", "mb-5", "d-flex", "align-items-stretch"], [1, "card", "bg-mint-cream", "border-0", "rounded"], [1, "card-body", "bg-mint-cream", "border-0", "rounded"], [1, "card-text", 2, "list-style", "none"], [1, "mb-1", "py-2"], [1, "card", "bg-light-blue", "border-0", "rounded"], [1, "card-body", "bg-light-blue", "border-0", "rounded"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4", "mb-5", "d-flex", "align-items-stretch"], [1, "card"], [1, "card-body"], [1, "row", "gy-2", "gx-3", "align-items-center", 3, "formGroup", "ngSubmit"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-7"], [1, "input-group"], ["type", "email", "placeholder", "jane.doe@company.com", "formControlName", "email", 1, "form-control", "form-control-lg", "py-4", "text-center"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-3"], [1, "g-recaptcha", "d-flex", "justify-content-center"], ["formControlName", "recaptcha", 3, "siteKey", "useGlobalDomain", "size", "hl", "theme", "type", "reset", "expire", "load", "success"], ["captchaElem", ""], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-2"], ["type", "submit", 1, "rounded", "bg-clodura-color", "bg-clodura-primary", "shadow", "shadow-md", "py-4", "w-100", 3, "ngClass", "disabled"], [4, "ngIf"], [1, "col-sm-12", "text-danger", "text-14"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "far", "fa-check-circle"], [1, "fas", "fa-exclamation-circle"], [1, "far", "fa-times-circle"], ["href", "/app/#/auth/register?utm_source=Clodura&utm_medium=Tools&utm_campaign=Tools_Verification&utm_content=register"], [1, "card", "shadow", "shadow-md", "bg-white", "border-0"], [1, "card-body", "bg-white"], [1, "widget-49"], [1, "widget-49-title-wrapper"], [1, "widget-49-date-primary", 3, "ngClass"], [1, "widget-49-date-day"], ["class", "far fa-smile", 4, "ngIf"], ["class", "widget-49-date-day", 4, "ngIf"], ["class", "widget-49-date-month", 4, "ngIf"], [1, "widget-49-meeting-info"], [1, "widget-49-pro-title"], [1, "widget-49-meeting-time", "text-14", 3, "ngClass"], ["class", "widget-49-date-month text-success", 4, "ngIf"], ["class", "widget-49-date-month text-warning", 4, "ngIf"], ["class", "widget-49-date-month text-danger", 4, "ngIf"], ["class", "d-block", 3, "ngClass", 4, "ngIf"], [1, "text-600", "text-14", "d-block", "border-bottom"], [1, "text-600", "text-16", "d-block"], [1, "text-11", "text-500", "text-gray-light"], [1, "far", "fa-smile"], [1, "far", "fa-meh-blank"], [1, "far", "fa-dizzy"], [1, "widget-49-date-month"], [1, "widget-49-date-month", "text-success"], [1, "widget-49-date-month", "text-warning"], [1, "widget-49-date-month", "text-danger"], [1, "d-block", 3, "ngClass"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Verify E-Mails");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Check the deliverability of an email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Don't let your email messages go to spam. Use Clodura.AI email verification service to clean up your list and ensure your emails reach real people. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "div", 4)(11, "div", 5)(12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HomeComponent_form_13_Template, 21, 22, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1)(15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HomeComponent_div_16_Template, 70, 28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "How it works?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "h3", 15)(25, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "1.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Input Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Type or Simply paste your email address into the input text field. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12)(33, "div", 13)(34, "div", 14)(35, "h3", 15)(36, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "2.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Bot Check ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " To avoid bots and provide you with good results. Please check - I'm not a robot. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 12)(44, "div", 13)(45, "div", 14)(46, "h3", 15)(47, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "3.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Verify ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Click on verify button. Our advanced verification algorithm and system will quickly analyze email address. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 12)(55, "div", 13)(56, "div", 14)(57, "h3", 15)(58, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "4.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Result ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Within no time, you will receive a detailed yet easy to understand email verification report, indicating the status of the email address. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 23)(66, "div", 11)(67, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 12)(70, "div", 24)(71, "div", 25)(72, "h3", 15)(73, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "1.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Fast and Accurate ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Our email verifier is built on cutting-edge technology, ensuring quick and accurate results for your email address. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 12)(81, "div", 27)(82, "div", 28)(83, "h3", 15)(84, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "2.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Syntax Validation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Our tool checks the syntax of each email address to ensure it follows the correct format. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 12)(92, "div", 30)(93, "div", 31)(94, "h3", 15)(95, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "3.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Domain Check ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " We verify the domain of each email address to ensure it exists and can receive emails. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 12)(103, "div", 33)(104, "div", 34)(105, "h3", 15)(106, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "4.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Catch-All Detection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " Spot catch-all email domains, which accept emails for any address at that domain, potentially affecting deliverability. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 23)(114, "div", 36)(115, "div", 37)(116, "div", 38)(117, "div", 23)(118, "div", 39)(119, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Accurate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, " Our email verifier tool uses a variety of methods to ensure that the emails you verify are accurate, including DNS lookup, MX record check, and inbox check. We also have a 99% accuracy rate, so you can be confident that the emails you send will reach their intended recipients. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "By removing invalid and spammy emails from your list, you can improve your email deliverability and avoid getting your emails marked as spam.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 42)(128, "div", 36)(129, "div", 43)(130, "div", 44)(131, "div", 23)(132, "div", 39)(133, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Fast");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, " Our email verifier tool is fast and efficient, so you can get your results quickly. We can verify thousands of emails in minutes, so you can spend less time cleaning your email list and more time sending emails. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "By cleaning your email list regularly, you can save time and money by avoiding the costs of sending emails to invalid addresses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 46)(142, "div", 8)(143, "div", 47)(144, "div", 48)(145, "div", 23)(146, "div", 39)(147, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Reliable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, " Our email verifier tool is reliable and trustworthy. We use a secure infrastructure to protect your data. We provide detailed reports on the results of your email verification, so you can see which emails are valid, invalid, and spam traps. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "When your emails reach the right people, they're more likely to open and read them, which can lead to increased engagement and conversions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 50)(156, "div", 11)(157, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Why do I need Email Verifier?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 51)(160, "div", 52)(161, "div", 53)(162, "ul", 54)(163, "li", 55)(164, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Improved email deliverability");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, " When you send emails to valid addresses, you're more likely to achieve inbox placement. This means that your emails will be seen by the recipient, which can lead to increased open rates, click-through rates, and conversions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "li", 55)(168, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Reduced bounce rates");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " When you remove invalid addresses from your list, you can reduce your bounce rates. Bounce rates are a measure of how many emails are not delivered successfully. High bounce rates can damage your sender reputation and make it more difficult for your emails to reach the inbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "li", 55)(172, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Increased ROI");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, " By improving your email deliverability and reducing your bounce rates, you can increase your ROI from email marketing. This means that you can get more out of your email marketing campaigns by spending less money.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 50)(176, "div", 11)(177, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "How do we do it?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 51)(180, "div", 56)(181, "div", 57)(182, "ul", 54)(183, "li", 55)(184, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "DNS lookup");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, " This is the process of querying the Domain Name System (DNS) to find out the location of the email server for a particular domain. If the DNS lookup fails, then the email address is invalid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "li", 55)(188, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "MX record check");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, " This is the process of checking the Mail Exchanger (MX) record for a particular domain. The MX record tells us which email server is responsible for receiving emails for that domain. If the MX record is not found, then the email address is invalid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "li", 55)(192, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Inbox check");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, " This is the process of sending a test email to the address to see if it arrives in the recipient's inbox. If the test email does not arrive, then the email address is invalid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "li", 55)(196, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Spam trap detection");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, " We identify and remove spam traps from your list. Spam traps are email addresses that are set up to catch spammers. If you send an email to a spam trap, your email will be rejected and your sender reputation will be damaged.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "li", 55)(200, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Disposable email detection");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, " We identify and remove disposable email addresses from your list. Disposable email addresses are created for temporary use and are often used by spammers.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "li", 55)(204, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Hard bounce detection");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, " We identify and remove hard bounces from your list. Hard bounces are emails that are returned to the sender because the recipient's email address does not exist or is no longer valid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 23)(208, "div", 11)(209, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Why Clodura?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 58)(212, "div", 59)(213, "div", 60)(214, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Get Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, " Ready to clean and validate your email? Start using our Free Email Verifier Tool today and experience the benefits of a squeaky-clean email database. It's time to take control of your email marketing and communication efforts. Remember, clean email lists lead to successful campaigns! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 58)(219, "div", 59)(220, "div", 60)(221, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Data Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, " At Clodura.AI, we take data security seriously. We understand the importance of protecting your email lists and ensuring their confidentiality. Rest assured that we don't store any email addresses you verify using our tool. Once the verification process is complete, the data is automatically purged from our system. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 58)(226, "div", 59)(227, "div", 60)(228, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Disclaimer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, " Please note that while our email verification tool is highly accurate, it cannot guarantee 100% accuracy. Email validation results may vary based on factors beyond our control, such as the email provider's server response or temporary issues with domains. Always cross-verify the results with additional sources for the best outcomes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isBrowser);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadnsub.loading && !ctx.loadnsub.submit && ctx.valresp);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ngx_captcha__WEBPACK_IMPORTED_MODULE_6__.ReCaptcha2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe],
  styles: [".bkg[_ngcontent-%COMP%] {\n  background-image: url('https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/validback.jpg') !important;\n  \n\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.bg-gray-clodura[_ngcontent-%COMP%] {\n  background-color: rgba(225, 229, 242, .7) !important;\n}\n\n.bg-one[_ngcontent-%COMP%] {\n  background-color: #edf2fb !important\n}\n\n.bg-two[_ngcontent-%COMP%] {\n  background-color: #d7e3fc !important\n}\n\n.bg-three[_ngcontent-%COMP%] {\n  background-color: #b6ccfe !important\n}\n\n.bg-four[_ngcontent-%COMP%] {\n  background-color: #abc4ff !important\n}\n\n\n\n.bg-magnolia[_ngcontent-%COMP%] { background-color: #eae4e9ff !important;}\n.bg-linen[_ngcontent-%COMP%] { background-color: #fff1e6ff !important;}\n.bg-misty-rose[_ngcontent-%COMP%] { background-color: #fde2e4ff !important;}\n.bg-mimi-pink[_ngcontent-%COMP%] { background-color: #fad2e1ff !important;}\n.bg-mint-cream[_ngcontent-%COMP%] { background-color: #e2ece9ff !important;}\n.bg-light-blue[_ngcontent-%COMP%] { background-color: #bee1e6ff !important;}\n.bg-isabelline[_ngcontent-%COMP%] { background-color: #f0efebff !important;}\n.bg-lavender-web[_ngcontent-%COMP%] { background-color: #dfe7fdff !important;}\n.bg-periwinkle[_ngcontent-%COMP%] { background-color: #cddafdff !important;}\n\n.text-32[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n}\n\n.text-42-100[_ngcontent-%COMP%] {\n  font-size: 42px !important;\n  font-weight: 100 !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsOElBQThJO0VBQzlJLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQSxZQUFZO0FBQ1osZUFBZSxzQ0FBc0MsQ0FBQztBQUN0RCxZQUFZLHNDQUFzQyxDQUFDO0FBQ25ELGlCQUFpQixzQ0FBc0MsQ0FBQztBQUN4RCxnQkFBZ0Isc0NBQXNDLENBQUM7QUFDdkQsaUJBQWlCLHNDQUFzQyxDQUFDO0FBQ3hELGlCQUFpQixzQ0FBc0MsQ0FBQztBQUN4RCxpQkFBaUIsc0NBQXNDLENBQUM7QUFDeEQsbUJBQW1CLHNDQUFzQyxDQUFDO0FBQzFELGlCQUFpQixzQ0FBc0MsQ0FBQzs7QUFFeEQ7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLmJrZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2Nsb2R1cmEtc2l0ZW1hcC1hcHAtMDEvc3RhdGFzc2V0cy9hc3NldHMvcGFyYW1zL2ltYWdlcy9pbWFnZXMvdmFsaWRiYWNrLmpwZycpICFpbXBvcnRhbnQ7XG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IDsgKi9cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmctZ3JheS1jbG9kdXJhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyOSwgMjQyLCAuNykgIWltcG9ydGFudDtcbn1cblxuLmJnLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYyZmIgIWltcG9ydGFudFxufVxuXG4uYmctdHdvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTNmYyAhaW1wb3J0YW50XG59XG5cbi5iZy10aHJlZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmNjZmUgIWltcG9ydGFudFxufVxuXG4uYmctZm91ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmM0ZmYgIWltcG9ydGFudFxufVxuXG4vKiBDU1MgSEVYICovXG4uYmctbWFnbm9saWEgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlNGU5ZmYgIWltcG9ydGFudDt9XG4uYmctbGluZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWU2ZmYgIWltcG9ydGFudDt9XG4uYmctbWlzdHktcm9zZSB7IGJhY2tncm91bmQtY29sb3I6ICNmZGUyZTRmZiAhaW1wb3J0YW50O31cbi5iZy1taW1pLXBpbmsgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFkMmUxZmYgIWltcG9ydGFudDt9XG4uYmctbWludC1jcmVhbSB7IGJhY2tncm91bmQtY29sb3I6ICNlMmVjZTlmZiAhaW1wb3J0YW50O31cbi5iZy1saWdodC1ibHVlIHsgYmFja2dyb3VuZC1jb2xvcjogI2JlZTFlNmZmICFpbXBvcnRhbnQ7fVxuLmJnLWlzYWJlbGxpbmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZmViZmYgIWltcG9ydGFudDt9XG4uYmctbGF2ZW5kZXItd2ViIHsgYmFja2dyb3VuZC1jb2xvcjogI2RmZTdmZGZmICFpbXBvcnRhbnQ7fVxuLmJnLXBlcml3aW5rbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkYWZkZmYgIWltcG9ydGFudDt9XG5cbi50ZXh0LTMyIHtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LTQyLTEwMCB7XG4gIGZvbnQtc2l6ZTogNDJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 22969:
/*!**************************************************************!*\
  !*** ./src/app/modules/general/landing/landing.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/seo/seo.service */ 88262);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 41081);




class LandingComponent {
  constructor(seoSvc, dom, meta, rf2) {
    this.seoSvc = seoSvc;
    this.dom = dom;
    this.meta = meta;
    this.rf2 = rf2;
    this.renderer = rf2.createRenderer(null, null);
    this.seoSvc.setMetaTitle(`Leadgen Tools, Free Tools, Sales Tools, Lead Tools | Clodura.AI`);
    this.seoSvc.setMetaOrgTitle(`Leadgen Tools, Free Tools, Sales Tools, Lead Tools | Clodura.AI`);
    this.seoSvc.setMetaDescription(`Free and AI-powered lead generation tools, such as Clodura.AI, can be used to identify and qualify potential customers, generate personalized content, and verify the accuracy of contact information. These tools can be a valuable resource for businesses of all sizes, regardless of their budget or experience.`);
    this.seoSvc.setMetaOrgDesc(`Free and AI-powered lead generation tools, such as Clodura.AI, can be used to identify and qualify potential customers, generate personalized content, and verify the accuracy of contact information. These tools can be a valuable resource for businesses of all sizes, regardless of their budget or experience.`);
    this.seoSvc.setMetaKey(`
          Sales Tools, Lead Generation Tools, LeadGen Tools, Free Tools, Sales Tools, Free Sales Tools, AI Powered, AI Powered LeadGen Tools, Verification Tools, Content Generation, Clodura.AI, Email Validation, Built With, email verifier, free email verifier, verify email addresses, email validation, clean email list, bulk email verification, improve deliverability, email marketing, validate emails, email list cleaning, email verification tool, check email validity.
          `);
    this.createCanonicalURL();
    this.updateHrefLangs(`https://www.clodura.ai/tools`);
  }
  createCanonicalURL() {
    const head = this.dom.getElementsByTagName('head')[0];
    let element = this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.dom.createElement('link');
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', 'https://www.clodura.ai/tools');
  }
  updateHrefLangs(url) {
    // let link: HTMLLinkElement = this.dom.createElement("link");
    // link.setAttribute("rel", "canonical");
    // this.dom.head.appendChild(link);
    // link.setAttribute("href", this.dom.URL.replace("http://", "https://"));
    // console.log(link, this.dom.URL);
    const arr = Array.from(this.dom.head.children);
    const linkElt = arr.find(e => e['rel'] === 'alternate' && e['hreflang'] === 'x-default');
    const linkElten = arr.find(e => e['rel'] === 'alternate' && e['hreflang'] === 'en');
    this.renderer.setAttribute(linkElten, 'href', url);
    this.renderer.setAttribute(linkElt, 'href', url);
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2));
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-home"]],
  decls: 89,
  vars: 0,
  consts: [[1, "container"], [1, "row", "my-5", "bg-one", "shadow", "shadow-md", "rounded"], [1, "col-2", "float-end", "my-auto"], ["src", "https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/toolsicon.png", "alt", "toolsicon", "height", "64px", 1, "float-end"], [1, "col-8"], [1, "card", "bg-transparent", "border-0"], [1, "card-body"], [1, "col-2"], [1, "row", "mt-5", "mb-5"], [1, "col-4", "my-2", "d-flex", "align-items-stretch"], ["href", "/tools/email-verifier"], [1, "card", "pointer", "bg-linen"], [1, "card-title"], [1, "card-text", "text-14"], ["href", "https://kb.clodura.ai/tools/spf"], [1, "text-12"], [1, "fas", "fa-external-link-alt"], ["href", "https://kb.clodura.ai/tools/dmarc"], [1, "card", "w-100"], [1, "my-5"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Free Resources / Tools");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Generate Leads and Close Deals Faster with AI-Powered Free Tools ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "a", 10)(15, "div", 11)(16, "div", 6)(17, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email Verifier");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Verify emails with our fast and powerful Email Verifying engine. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9)(22, "a", 14)(23, "div", 11)(24, "div", 6)(25, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "SPF Generator ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Create a valid SPF record in a few clicks to use it in your Name Server/DNS.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9)(32, "a", 17)(33, "div", 11)(34, "div", 6)(35, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "DMARC Generatorn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Create a valid DMARC record in a few clicks to use it in your Name Server/DNS.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9)(42, "div", 18)(43, "div", 6)(44, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9)(49, "div", 18)(50, "div", 6)(51, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9)(56, "div", 18)(57, "div", 6)(58, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 9)(63, "div", 18)(64, "div", 6)(65, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 9)(70, "div", 18)(71, "div", 6)(72, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 9)(77, "div", 18)(78, "div", 6)(79, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br")(85, "br")(86, "br")(87, "br")(88, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: [".bkg[_ngcontent-%COMP%] {\n  background-image: url('https://storage.googleapis.com/clodura-sitemap-app-01/statassets/assets/params/images/images/validback.jpg') !important;\n  \n\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.bg-gray-clodura[_ngcontent-%COMP%] {\n  background-color: rgba(225, 229, 242, .7) !important;\n}\n\n.bg-one[_ngcontent-%COMP%] {\n  background-color: #edf2fb !important\n}\n\n.bg-two[_ngcontent-%COMP%] {\n  background-color: #d7e3fc !important\n}\n\n.bg-three[_ngcontent-%COMP%] {\n  background-color: #b6ccfe !important\n}\n\n.bg-four[_ngcontent-%COMP%] {\n  background-color: #abc4ff !important\n}\n\n\n\n.bg-magnolia[_ngcontent-%COMP%] { background-color: #eae4e9ff !important;}\n.bg-linen[_ngcontent-%COMP%] { background-color: #fff1e6ff !important;}\n.bg-misty-rose[_ngcontent-%COMP%] { background-color: #fde2e4ff !important;}\n.bg-mimi-pink[_ngcontent-%COMP%] { background-color: #fad2e1ff !important;}\n.bg-mint-cream[_ngcontent-%COMP%] { background-color: #e2ece9ff !important;}\n.bg-light-blue[_ngcontent-%COMP%] { background-color: #bee1e6ff !important;}\n.bg-isabelline[_ngcontent-%COMP%] { background-color: #f0efebff !important;}\n.bg-lavender-web[_ngcontent-%COMP%] { background-color: #dfe7fdff !important;}\n.bg-periwinkle[_ngcontent-%COMP%] { background-color: #cddafdff !important;}\n\n.text-32[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n}\n\n.text-42-100[_ngcontent-%COMP%] {\n  font-size: 42px !important;\n  font-weight: 100 !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.pointer[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-color: #ee6055  !important;\n  color: #ee6055;\n}\n\n.pointer[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  color: #ee6055 !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsOElBQThJO0VBQzlJLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQSxZQUFZO0FBQ1osZUFBZSxzQ0FBc0MsQ0FBQztBQUN0RCxZQUFZLHNDQUFzQyxDQUFDO0FBQ25ELGlCQUFpQixzQ0FBc0MsQ0FBQztBQUN4RCxnQkFBZ0Isc0NBQXNDLENBQUM7QUFDdkQsaUJBQWlCLHNDQUFzQyxDQUFDO0FBQ3hELGlCQUFpQixzQ0FBc0MsQ0FBQztBQUN4RCxpQkFBaUIsc0NBQXNDLENBQUM7QUFDeEQsbUJBQW1CLHNDQUFzQyxDQUFDO0FBQzFELGlCQUFpQixzQ0FBc0MsQ0FBQzs7QUFFeEQ7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5ia2cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jbG9kdXJhLXNpdGVtYXAtYXBwLTAxL3N0YXRhc3NldHMvYXNzZXRzL3BhcmFtcy9pbWFnZXMvaW1hZ2VzL3ZhbGlkYmFjay5qcGcnKSAhaW1wb3J0YW50O1xuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJnLWdyYXktY2xvZHVyYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjksIDI0MiwgLjcpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMmZiICFpbXBvcnRhbnRcbn1cblxuLmJnLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2UzZmMgIWltcG9ydGFudFxufVxuXG4uYmctdGhyZWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZjY2ZlICFpbXBvcnRhbnRcbn1cblxuLmJnLWZvdXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJjNGZmICFpbXBvcnRhbnRcbn1cblxuLyogQ1NTIEhFWCAqL1xuLmJnLW1hZ25vbGlhIHsgYmFja2dyb3VuZC1jb2xvcjogI2VhZTRlOWZmICFpbXBvcnRhbnQ7fVxuLmJnLWxpbmVuIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFlNmZmICFpbXBvcnRhbnQ7fVxuLmJnLW1pc3R5LXJvc2UgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMmU0ZmYgIWltcG9ydGFudDt9XG4uYmctbWltaS1waW5rIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZhZDJlMWZmICFpbXBvcnRhbnQ7fVxuLmJnLW1pbnQtY3JlYW0geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlY2U5ZmYgIWltcG9ydGFudDt9XG4uYmctbGlnaHQtYmx1ZSB7IGJhY2tncm91bmQtY29sb3I6ICNiZWUxZTZmZiAhaW1wb3J0YW50O31cbi5iZy1pc2FiZWxsaW5lIHsgYmFja2dyb3VuZC1jb2xvcjogI2YwZWZlYmZmICFpbXBvcnRhbnQ7fVxuLmJnLWxhdmVuZGVyLXdlYiB7IGJhY2tncm91bmQtY29sb3I6ICNkZmU3ZmRmZiAhaW1wb3J0YW50O31cbi5iZy1wZXJpd2lua2xlIHsgYmFja2dyb3VuZC1jb2xvcjogI2NkZGFmZGZmICFpbXBvcnRhbnQ7fVxuXG4udGV4dC0zMiB7XG4gIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC00Mi0xMDAge1xuICBmb250LXNpemU6IDQycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2VlNjA1NSAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNlZTYwNTU7XG59XG5cbi5wb2ludGVyOmhvdmVyIGg0IHtcbiAgY29sb3I6ICNlZTYwNTUgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 20245:
/*!******************************************************************!*\
  !*** ./src/app/modules/general/not-found/not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 88262);


class NotFoundComponent {
  constructor(seoService) {
    this.seoService = seoService;
    const content = 'NotFound content with meta';
    this.seoService.setMetaDescription(content);
  }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService));
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 24,
  vars: 0,
  consts: [["id", "notfound"], [1, "notfound"], [1, "notfound-404"], ["href", "https://www.clodura.ai"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Oops! Page not found");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1")(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "we are sorry, but the page you requested was not found");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br")(16, "br")(17, "br")(18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Country roads, take me home To the place I belong ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Take Me Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["#notfound[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.notfound[_ngcontent-%COMP%] {\n  max-width: 520px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n  position: relative;\n  height: 240px;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 252px;\n  font-weight: 900;\n  margin: 0px;\n  color: #262626;\n  text-transform: uppercase;\n  letter-spacing: -40px;\n  margin-left: -20px;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n  text-shadow: -8px 0px 0px #fff;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n  position: relative;\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #262626;\n  margin: 0px;\n  letter-spacing: 3px;\n  padding-left: 6px;\n}\n\n.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #000;\n  margin-top: 0px;\n  margin-bottom: 25px;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 200px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n    height: 162px;\n  }\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 162px;\n    height: 150px;\n    line-height: 162px;\n  }\n  .notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFHQSxnQ0FBZ0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUdBLGdDQUFnQztFQUN4QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGZvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubm90Zm91bmQge1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMjUycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC00MHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxPnNwYW4ge1xuICB0ZXh0LXNoYWRvdzogLThweCAwcHggMHB4ICNmZmY7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgzIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5ub3Rmb3VuZCBoMiB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1zaXplOiAyMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICBoZWlnaHQ6IDE2MnB4O1xuICB9XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICBmb250LXNpemU6IDE2MnB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2MnB4O1xuICB9XG4gIC5ub3Rmb3VuZCBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 88262:
/*!*********************************************!*\
  !*** ./src/app/services/seo/seo.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeoService: () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 56448);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 85028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 41081);






const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
class SeoService {
  constructor(http, meta, titleService) {
    this.http = http;
    this.meta = meta;
    this.titleService = titleService;
  }
  setMetaDescription(content) {
    this.meta.updateTag({
      name: 'description',
      content: content
    });
  }
  setMetaKey(content) {
    this.meta.updateTag({
      name: 'Keywords',
      content: content
    });
  }
  setMetaOrgUrl(content) {
    this.meta.updateTag({
      property: 'og:url',
      content: content
    });
  }
  setMetaOrgTitle(content) {
    this.meta.updateTag({
      property: 'og:title',
      content: content
    });
  }
  setMetaOrgDesc(content) {
    this.meta.updateTag({
      property: 'og:description',
      content: content
    });
  }
  setMetaTitle(title) {
    this.titleService.setTitle(title);
  }
  validateEmail(f) {
    const body = JSON.stringify(f);
    return this.http.post('/tools/api/validate', {
      b: body
    }, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError('validateemail')));
  }
  discoverDw(f) {
    const body = JSON.stringify(f);
    return this.http.post('/tools/api/discover', {
      b: body
    }, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError('discoverDw')));
  }
  handleError(operation = 'operation', result) {
    return error => {
      console.error(`${operation} failed: ${error.message}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
    };
  }
}
SeoService.ɵfac = function SeoService_Factory(t) {
  return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
};
SeoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SeoService,
  factory: SeoService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 56316:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  application: {
    name: 'Email Verify',
    siteKey: '0x4AAAAAAAIesLfWAqeQAH2Q',
    gtwoSiteKey: '6LcVCrgnAAAAAK7jBLGcKp7Wa2cUKzULcP5SpNED'
  },
  urlNews: './assets/params/json/mock/trailers.json',
  urlMovies: './assets/params/json/mock/movies.json',
  /* urlNews: 'http://localhost:5004/trailers', */
  // url: 'https://api.ganatan.com/tutorials',
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */
    /* LOCAL JSON (NO CRUD) */
    api: false,
    url: './assets/params/json/crud/'
    /* LOCAL REST API CRUD WITH POSTGRESQL */
    /* api: true,
    url: 'http://localhost:5004/', */
  }
};

/***/ }),

/***/ 49174:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 21463);


/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 65616:
/*!****************************************!*\
  !*** ./node_modules/mongodb/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 65616;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 39491:
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 9523:
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 6005:
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 87561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 49411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 77282:
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 85477:
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 24404:
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(56394)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(34991)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map