function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"height: 85%;\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Estudiante</ion-card-subtitle>\r\n        <ion-card-title>{{session.user.name}} {{session.user.lastname}}</ion-card-title>\r\n        <br />\r\n        <img src=\"../../assets/img/perfil.webp\" width=\"70%\" class=\"center\" />\r\n      </ion-card-header>\r\n    </ion-card>\r\n\r\n    <ion-button (click)=\"presentModal()\" class=\"center\">Datos Personales</ion-button>\r\n    <ion-card>\r\n      <ion-item href=\"#\" class=\"ion-activated\">\r\n        <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{session.user.degree}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item href=\"#\">\r\n        <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{session.user.code}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"ion-activated\">\r\n        <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{session.user.email}}</ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-card>\r\n    </ion-card>\r\n  </div>\r\n  <app-nav-menu></app-nav-menu>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-profile/update-profile.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-profile/update-profile.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateProfileUpdateProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Datos personales</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button onclick=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\" >Nombre</ion-label>\r\n      <ion-input type=\"text\" #name required value={{session.user.name}}></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Apellido</ion-label>\r\n      <ion-input type=\"text\" #lastname required value={{session.user.lastname}}></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input type=\"text\" #email required value={{session.user.email}}></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Password</ion-label>\r\n      <ion-input type=\"password\" #password required value={{session.user.password}}></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Codigo</ion-label>\r\n      <ion-input type=\"password\" #code required value={{session.user.code}}></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Carrera</ion-label>\r\n      <ion-input type=\"password\" #degree required value={{session.user.degree}}></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" (click)=\"update(email, password, name, lastname, code, degree)\" expand=\"block\">Update Data</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      exports: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXGRhdmlkLm1hbGFnb25cXG5vdGFzL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC5tb2RhbC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfSIsIi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4ubXktY3VzdG9tLWNsYXNzIC5tb2RhbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/session.service */
    "./src/app/services/session.service.ts");
    /* harmony import */


    var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../update-profile/update-profile.component */
    "./src/app/update-profile/update-profile.component.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(modalController, routerOutlet, sessionService) {
        _classCallCheck(this, ProfilePage);

        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.sessionService = sessionService;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.session = this.sessionService.getSessionLogged();
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProfileComponent"],
                      cssClass: 'my-custom-class',
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }, {
        type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
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
  },

  /***/
  "./src/app/update-profile/update-profile.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/update-profile/update-profile.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateProfileUpdateProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/update-profile/update-profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/update-profile/update-profile.component.ts ***!
    \************************************************************/

  /*! exports provided: UpdateProfileComponent */

  /***/
  function srcAppUpdateProfileUpdateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function () {
      return UpdateProfileComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/json.service */
    "./src/app/services/json.service.ts");
    /* harmony import */


    var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/session.service */
    "./src/app/services/session.service.ts");

    var UpdateProfileComponent = /*#__PURE__*/function () {
      function UpdateProfileComponent(modalCtrl, jsonService, sessionService) {
        _classCallCheck(this, UpdateProfileComponent);

        this.modalCtrl = modalCtrl;
        this.jsonService = jsonService;
        this.sessionService = sessionService;
      }

      _createClass(UpdateProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.session = this.sessionService.getSessionLogged();
        }
        /*  dismiss() {
           // using the injected ModalController this page
           // can "dismiss" itself and optionally pass back data
           this.modalCtrl.dismiss({
             'dismissed': true
           });
         } */

      }, {
        key: "update",
        value: function update(email, password, name, lastname, code, degree) {
          try {
            var response;
            response.name = name.value;
            response.lastname = lastname.value;
            response.password = password.value;
            response.code = code.value;
            response.carreer = degree.value;
            response.email = email.value;

            if (response != null) {
              this.sessionService.setSessionLoggedIn(response);
            }

            this.jsonService.update(null, email, password, name, lastname, code, degree).subscribe(function (data) {
              response = data;
            });
          } catch (error) {
            console.log('Error', error);
          }
        }
      }]);

      return UpdateProfileComponent;
    }();

    UpdateProfileComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_json_service__WEBPACK_IMPORTED_MODULE_3__["JsonService"]
      }, {
        type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    UpdateProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./update-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-profile/update-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./update-profile.component.scss */
      "./src/app/update-profile/update-profile.component.scss"))["default"]]
    })], UpdateProfileComponent);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map