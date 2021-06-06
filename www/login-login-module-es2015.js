(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"justify-content: center;\">\r\n  <form style=\"max-width: 80%;  padding-left: 25%; padding-top: 10%;\">\r\n    <ion-item >\r\n      <ion-label position=\"floating\">Correo electronico</ion-label>\r\n      <ion-input type=\"text\" #email required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input type=\"password\" #password required></ion-input>\r\n    </ion-item>\r\n    <!-- <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Tu carita</ion-label>\r\n      <ion-input type=\"file\" capture=\"camera\" required></ion-input>\r\n    </ion-item> -->\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" (click)=\"login(email, password)\" expand=\"block\">Login</ion-button>\r\n      </ion-col>\r\n     \r\n    </ion-row>\r\n   <!--  <ion-row>\r\n      <ion-col>\r\n        <p class=\"ion-text-end\">\r\n          <a routerLink=\"/forgot-password\">Forgot password? </a>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </form>\r\n  <!-- <ion-row>\r\n    <ion-col>\r\n      <p class=\"ion-text-end\">\r\n        <a routerLink=\"/register\">Create an account </a>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row> -->\r\n<div hidden>\r\n<div class=\"video-container\" *ngIf=\"!error\">\r\n\t<video [class.show]=\"!isCaptured\" [class.hide]=\"isCaptured\" #video id=\"video\" [width]=\"WIDTH\" [height]=\"HEIGHT\"\r\n\t\tautoplay></video>\r\n\t<canvas [class.show]=\"isCaptured\" [class.hide]=\"!isCaptured\" #canvas id=\"canvas\" [width]=\"WIDTH\"\r\n\t\t[height]=\"HEIGHT\"></canvas>\r\n</div>\r\n\r\n<div class=\"snap-container\">\r\n\t<button class=\"btn btn-primary\" *ngIf=\"!isCaptured\" (click)=\"capture()\">Snap Photo</button>\r\n\t<button class=\"btn btn-danger\" *ngIf=\"isCaptured\" (click)=\"removeCurrent()\">Take Another</button>\r\n\r\n\t<div *ngIf=\"error\" class=\"text-danger mt-4\">\r\n\t\t{{ error }}. Please click refresh on stackblitz\r\n\t\t<div class=\"mt-5\">\r\n\t\t\t<img src=\"https://trungk18.com/7e0976255739e721501803ee074f1f94/camera.gif\" />\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<ul class=\"list-unstyled\">\r\n\t\t<li *ngFor=\"let src of captures; let idx = index\" (click)=\"setPhoto(idx)\">\r\n\t\t\t<img [src]=\"src\" height=\"50\" />\r\n  </li>\r\n\t</ul>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/location.service.ts":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LocationService = class LocationService {
    constructor() { }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject(err);
            });
        });
    }
};
LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocationService);



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        exports: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-span {\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxTQU5USVxcQXBwR3JhZGVzL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5jZW50ZXItc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../location.service */ "./src/app/location.service.ts");
/* harmony import */ var _services_json_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/json.service */ "./src/app/services/json.service.ts");
/* harmony import */ var _model_session_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/session.model */ "./src/app/model/session.model.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");










let LoginPage = class LoginPage {
    constructor(authSvc, jsonService, router, locationService, sessionService, alertService) {
        this.authSvc = authSvc;
        this.jsonService = jsonService;
        this.router = router;
        this.locationService = locationService;
        this.sessionService = sessionService;
        this.alertService = alertService;
        this.latitude = 4.586303;
        this.longitude = -74.227348;
        this.WIDTH = 640;
        this.HEIGHT = 480;
        this.captures = [];
    }
    ngOnInit() {
        this.getLocation();
    }
    onLogin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.login(email.value, password.value);
                if (user) {
                    const isVerified = this.authSvc.isEmailVerified(user);
                    this.redirectUser(isVerified);
                }
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    login(email, password) {
        this.capture();
        try {
            this.jsonService.login(this.latitude, this.longitude, email.value, password.value, this.image).subscribe((data) => {
                let user;
                user = data;
                let session = new _model_session_model__WEBPACK_IMPORTED_MODULE_6__["Session"];
                session.user = user;
                if (_model_user_model__WEBPACK_IMPORTED_MODULE_8__["User"] != null) {
                    this.sessionService.setSessionLoggedIn(session);
                    this.router.navigate(['profile']);
                }
            }, (error) => {
                this.alertService.FailedAlert("Credenciales incorrectas o servidor caido");
            });
        }
        catch (error) {
            console.log('Error->', error);
        }
    }
    onLoginGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.loginGoogle();
                if (user) {
                    const isVerified = this.authSvc.isEmailVerified(user);
                    this.redirectUser(isVerified);
                }
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    redirectUser(isVerified) {
        if (isVerified) {
            this.router.navigate(['admin']);
        }
        else {
            this.router.navigate(['verify-email']);
        }
    }
    getLocation() {
        this.locationService.getPosition().then(pos => {
            this.latitude = pos.lat;
            this.longitude = pos.lng;
        });
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setupDevices();
        });
    }
    setupDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                try {
                    const stream = yield navigator.mediaDevices.getUserMedia({
                        video: true
                    });
                    if (stream) {
                        this.video.nativeElement.srcObject = stream;
                        this.video.nativeElement.play();
                        this.error = null;
                    }
                    else {
                        this.error = "You have no output video device";
                    }
                }
                catch (e) {
                    this.error = e;
                }
            }
        });
    }
    capture() {
        this.image = this.canvas.nativeElement.toDataURL("image/png");
        //this.drawImageToCanvas(this.video.nativeElement);
        //console.log(this.canvas.nativeElement.toDataURL("image/png"));
        //this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        this.isCaptured = true;
    }
    removeCurrent() {
        this.isCaptured = false;
    }
    setPhoto(idx) {
        this.isCaptured = true;
        var image = new Image();
        image.src = this.captures[idx];
        this.drawImageToCanvas(image);
    }
    drawImageToCanvas(image) {
        this.canvas.nativeElement
            .getContext("2d")
            .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _services_json_service__WEBPACK_IMPORTED_MODULE_5__["JsonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("video")
], LoginPage.prototype, "video", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("canvas")
], LoginPage.prototype, "canvas", void 0);
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/model/session.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/session.model.ts ***!
  \****************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
class Session {
}


/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map