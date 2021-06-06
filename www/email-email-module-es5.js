function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmailEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title> <p>Asistenacia academica\r\n      <app-nav-menu style=\"align-content: right; float: right;\"></app-nav-menu>\r\n    </p></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"center2\">\r\n  <form style=\"height: 90%;\">\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Asunto</ion-label>\r\n      <ion-input type=\"text\" #subject required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Mensaje</ion-label>\r\n      <ion-textarea type=\"text\" #message required rows=5></ion-textarea>\r\n    </ion-item>\r\n    <br />\r\n    <ion-button type=\"submit\" expand=\"block\" color=\"primary\" (click)=\"sendMail(subject.value, message.value)\">Enviar\r\n      mensaje</ion-button>\r\n  </form>\r\n</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/email/email-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/email/email-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: EmailPageRoutingModule */

  /***/
  function srcAppEmailEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPageRoutingModule", function () {
      return EmailPageRoutingModule;
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


    var _email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./email.page */
    "./src/app/email/email.page.ts");

    var routes = [{
      path: '',
      component: _email_page__WEBPACK_IMPORTED_MODULE_3__["EmailPage"]
    }];

    var EmailPageRoutingModule = function EmailPageRoutingModule() {
      _classCallCheck(this, EmailPageRoutingModule);
    };

    EmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/email/email.module.ts":
  /*!***************************************!*\
    !*** ./src/app/email/email.module.ts ***!
    \***************************************/

  /*! exports provided: EmailPageModule */

  /***/
  function srcAppEmailEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPageModule", function () {
      return EmailPageModule;
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


    var _email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./email-routing.module */
    "./src/app/email/email-routing.module.ts");
    /* harmony import */


    var _email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./email.page */
    "./src/app/email/email.page.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");

    var EmailPageModule = function EmailPageModule() {
      _classCallCheck(this, EmailPageModule);
    };

    EmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _email_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailPageRoutingModule"]],
      declarations: [_email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"]]
    })], EmailPageModule);
    /***/
  },

  /***/
  "./src/app/email/email.page.scss":
  /*!***************************************!*\
    !*** ./src/app/email/email.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmailEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL2VtYWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/email/email.page.ts":
  /*!*************************************!*\
    !*** ./src/app/email/email.page.ts ***!
    \*************************************/

  /*! exports provided: EmailPage */

  /***/
  function srcAppEmailEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPage", function () {
      return EmailPage;
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


    var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../alert.service */
    "./src/app/alert.service.ts");
    /* harmony import */


    var _services_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/json.service */
    "./src/app/services/json.service.ts");

    var EmailPage = /*#__PURE__*/function () {
      function EmailPage(jsonService, alertService) {
        _classCallCheck(this, EmailPage);

        this.jsonService = jsonService;
        this.alertService = alertService;
      }

      _createClass(EmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendMail",
        value: function sendMail(subject, message) {
          var _this = this;

          try {
            this.jsonService.sendMail("cristian-ramirez1@upc.edu.co", subject, message).subscribe(function (data) {
              _this.response = data;

              _this.alertService.successfulAlert(_this.response.msg);
            }, function (error) {
              _this.alertService.FailedAlert("No se pudo enviar el correo");
            });
          } catch (error) {
            console.log('Error->', error);
          }
        }
      }]);

      return EmailPage;
    }();

    EmailPage.ctorParameters = function () {
      return [{
        type: _services_json_service__WEBPACK_IMPORTED_MODULE_3__["JsonService"]
      }, {
        type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    EmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-email',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./email.page.scss */
      "./src/app/email/email.page.scss"))["default"]]
    })], EmailPage);
    /***/
  }
}]);
//# sourceMappingURL=email-email-module-es5.js.map