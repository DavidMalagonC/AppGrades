(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Soporte</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form style=\"height: 90%;\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Asunto</ion-label>\n      <ion-input type=\"text\" #subject required></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Mensaje</ion-label>\n      <ion-textarea type=\"text\" #message required rows=5></ion-textarea>\n    </ion-item>\n    <br />\n    <ion-button type=\"submit\" expand=\"block\" color=\"primary\" (click)=\"sendMail(subject.value, message.value)\">Enviar\n      mensaje</ion-button>\n  </form>\n\n<app-nav-menu></app-nav-menu>\n</ion-content>");

/***/ }),

/***/ "./src/app/email/email-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/email/email-routing.module.ts ***!
  \***********************************************/
/*! exports provided: EmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageRoutingModule", function() { return EmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email.page */ "./src/app/email/email.page.ts");




const routes = [
    {
        path: '',
        component: _email_page__WEBPACK_IMPORTED_MODULE_3__["EmailPage"]
    }
];
let EmailPageRoutingModule = class EmailPageRoutingModule {
};
EmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmailPageRoutingModule);



/***/ }),

/***/ "./src/app/email/email.module.ts":
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/*! exports provided: EmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageModule", function() { return EmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/email/email-routing.module.ts");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.page */ "./src/app/email/email.page.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");








let EmailPageModule = class EmailPageModule {
};
EmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _email_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailPageRoutingModule"]
        ],
        declarations: [_email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"]]
    })
], EmailPageModule);



/***/ }),

/***/ "./src/app/email/email.page.scss":
/*!***************************************!*\
  !*** ./src/app/email/email.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL2VtYWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/email/email.page.ts":
/*!*************************************!*\
  !*** ./src/app/email/email.page.ts ***!
  \*************************************/
/*! exports provided: EmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPage", function() { return EmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _services_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/json.service */ "./src/app/services/json.service.ts");




let EmailPage = class EmailPage {
    constructor(jsonService, alertService) {
        this.jsonService = jsonService;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    sendMail(subject, message) {
        try {
            this.jsonService.sendMail("cristian-ramirez1@upc.edu.co", subject, message).subscribe((data) => {
                this.response = data;
            }, (error) => {
                this.alertService.FailedAlert("No se pudo enviar el correo");
            });
        }
        catch (error) {
            console.log('Error->', error);
        }
    }
};
EmailPage.ctorParameters = () => [
    { type: _services_json_service__WEBPACK_IMPORTED_MODULE_3__["JsonService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
EmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email.page.scss */ "./src/app/email/email.page.scss")).default]
    })
], EmailPage);



/***/ })

}]);
//# sourceMappingURL=email-email-module-es2015.js.map