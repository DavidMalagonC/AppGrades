function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Register User</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" #name required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Apellido</ion-label>\r\n      <ion-input type=\"text\" #lastname required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input type=\"text\" #email required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Password</ion-label>\r\n      <ion-input type=\"password\" #password required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Codigo</ion-label>\r\n      <ion-input type=\"password\" #code required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Carrera</ion-label>\r\n      <ion-input type=\"password\" #degree required></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" (click)=\"onRegister(email, password, name, lastname, code, degree)\" expand=\"block\">Register</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n  <ion-row>\r\n    <ion-col>\r\n      <p>\r\n        <a routerLink=\"/login\">Already have an account? </a>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/json.service */
    "./src/app/services/json.service.ts");
    /* harmony import */


    var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/session.service */
    "./src/app/services/session.service.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(authSvc, router, jsonService, sessionService) {
        _classCallCheck(this, RegisterPage);

        this.authSvc = authSvc;
        this.router = router;
        this.jsonService = jsonService;
        this.sessionService = sessionService;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRegister",
        value: function onRegister(email, password, name, lastname, code, degree) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var user, isVerified;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /*  let request = {
                       email.value, password, name, lastname, code, degree
                     } */
                    try {
                      this.jsonService.register(null, email.value, password.value, name.value, lastname.value, code.value, degree.value).subscribe(function (data) {
                        var response;
                        response = data;

                        if (response != null) {
                          _this.sessionService.setSessionLoggedIn(response);
                        }
                      });
                    } catch (error) {
                      console.log('Error', error);
                    }

                    _context.prev = 1;
                    _context.next = 4;
                    return this.authSvc.register(email.value, password.value);

                  case 4:
                    user = _context.sent;

                    if (user) {
                      isVerified = this.authSvc.isEmailVerified(user);
                      this.redirectUser(isVerified);
                    }

                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](1);
                    console.log('Error', _context.t0);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 8]]);
          }));
        }
      }, {
        key: "redirectUser",
        value: function redirectUser(isVerified) {
          if (isVerified) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['verify-email']);
          }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"]
      }, {
        type: _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  },

  /***/
  "./src/app/services/json.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/json.service.ts ***!
    \******************************************/

  /*! exports provided: JsonService */

  /***/
  function srcAppServicesJsonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonService", function () {
      return JsonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/services/session.service.ts");

    var JsonService = /*#__PURE__*/function () {
      function JsonService(http, sessionService) {
        _classCallCheck(this, JsonService);

        this.http = http;
        this.sessionService = sessionService; //  endpoint_back = "http://localhost:3000";

        this.endpoint_back = "https://bk-proyecto-notas.herokuapp.com";
      }

      _createClass(JsonService, [{
        key: "getJson",
        value: function getJson(url) {
          return this.http.get(url);
        }
      }, {
        key: "login",
        value: function login(latitud, longitud, email, password) {
          var request = {
            latitud: latitud,
            longitud: longitud,
            email: email,
            password: password
          };
          console.log(request);
          return this.http.post(this.endpoint_back + "/perfil/usuario/signin", request);
        }
      }, {
        key: "uploadGrade",
        value: function uploadGrade(id_grade, grade_value, name, date, code, code_subject) {
          var request = {
            id_grade: id_grade,
            grade_value: grade_value,
            name: name,
            date: date
          };
          console.log(request);
          return this.http.post(this.endpoint_back + "/student/grade/" + code + "/" + code_subject, request);
        }
      }, {
        key: "getStudentsBySubject",
        value: function getStudentsBySubject(subject) {
          return this.http.get(this.endpoint_back + "/course/students/" + subject);
        }
      }, {
        key: "getGradesBySubject",
        value: function getGradesBySubject(subject, code) {
          return this.http.get(this.endpoint_back + "/student/grade/" + code + "/" + subject);
        }
      }, {
        key: "getSubjectsByTeacher",
        value: function getSubjectsByTeacher(code) {
          return this.http.get(this.endpoint_back + "/perfil/subjects/" + code);
        }
      }, {
        key: "sendMail",
        value: function sendMail(email, subject, message) {
          var request = {
            email: email,
            subject: subject,
            message: message
          };
          return this.http.post(this.endpoint_back + "/perfil/sendMail", request);
        }
      }, {
        key: "postJson",
        value: function postJson(url, formData) {
          if (url == null) {
            url = this.endpoint_back;
          }

          var s = this.sessionService.getSessionLogged();
          return this.http.post(url, formData);
        }
      }, {
        key: "register",
        value: function register(url, email, password, name, lastname, code, degree) {
          var request = {
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            code: code,
            degree: degree
          };

          if (url == null) {
            url = this.endpoint_back;
          }

          return this.http.post(url, request);
        }
      }, {
        key: "update",
        value: function update(url, email, password, name, lastname, code, degree) {
          var request = {
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            code: code,
            degree: degree
          };

          if (url == null) {
            url = this.endpoint_back;
          }

          return this.http.put(url, request);
        }
      }]);

      return JsonService;
    }();

    JsonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
      }];
    };

    JsonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JsonService);
    /***/
  },

  /***/
  "./src/app/services/session.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/session.service.ts ***!
    \*********************************************/

  /*! exports provided: SessionService */

  /***/
  function srcAppServicesSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionService", function () {
      return SessionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SessionService = /*#__PURE__*/function () {
      function SessionService() {
        _classCallCheck(this, SessionService);

        this.isSessionLoggedIn = false;
      }

      _createClass(SessionService, [{
        key: "setSessionLoggedIn",
        value: function setSessionLoggedIn(session) {
          this.isSessionLoggedIn = true;
          this.sessionLogged = session;
          localStorage.setItem('currentSession', JSON.stringify(session));
        }
      }, {
        key: "setSessionLoggedOut",
        value: function setSessionLoggedOut() {
          var s = null;
          localStorage.setItem('currentSession', JSON.stringify(s));
        }
      }, {
        key: "getSessionLogged",
        value: function getSessionLogged() {
          if (localStorage.getItem('currentSession')) {
            return JSON.parse(localStorage.getItem('currentSession'));
          }

          return null;
        }
      }]);

      return SessionService;
    }();

    SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SessionService);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map