(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-grades-upload-grades-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-grades/upload-grades.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-grades/upload-grades.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Subir nota</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"session.user.id_rol == 2\">\r\n  <form>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Concepto</ion-label>\r\n      <ion-input type=\"text\" #course required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Nota</ion-label>\r\n      <ion-input type=\"number \" #grade required></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label >Estudiante:</ion-label>\r\n      <select #code>\r\n        <option *ngFor=\"let student of students\" [value]=\"student.code\">\r\n          {{ student.name }}\r\n        </option>\r\n      </select>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" (click)=\"uploadGrade(grade.value, course.value, code.value)\" expand=\"block\">Guardar Nota</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>  \r\n  <app-nav-menu></app-nav-menu>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/services/json.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/json.service.ts ***!
  \******************************************/
/*! exports provided: JsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonService", function() { return JsonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");




let JsonService = class JsonService {
    constructor(http, sessionService) {
        this.http = http;
        this.sessionService = sessionService;
        //  endpoint_back = "http://localhost:3000";
        this.endpoint_back = "https://bk-proyecto-notas.herokuapp.com";
    }
    getJson(url) {
        return this.http.get(url);
    }
    login(latitud, longitud, email, password) {
        var request = { latitud, longitud, email, password };
        console.log(request);
        return this.http.post(this.endpoint_back + "/perfil/usuario/signin", request);
    }
    uploadGrade(id_grade, grade_value, name, date, code, code_subject) {
        var request = { id_grade, grade_value, name, date };
        console.log(request);
        return this.http.post(this.endpoint_back + "/student/grade/" + code + "/" + code_subject, request);
    }
    getStudentsBySubject(subject) {
        return this.http.get(this.endpoint_back + "/course/students/" + subject);
    }
    getGradesBySubject(subject, code) {
        return this.http.get(this.endpoint_back + "/student/grade/" + code + "/" + subject);
    }
    getSubjectsByTeacher(code) {
        return this.http.get(this.endpoint_back + "/perfil/subjects/" + code);
    }
    sendMail(email, subject, message) {
        var request = { email, subject, message };
        return this.http.post(this.endpoint_back + "/perfil/sendMail", request);
    }
    postJson(url, formData) {
        if (url == null) {
            url = this.endpoint_back;
        }
        let s = this.sessionService.getSessionLogged();
        return this.http.post(url, formData);
    }
    register(url, email, password, name, lastname, code, degree) {
        let request = {
            email, password, name, lastname, code, degree
        };
        if (url == null) {
            url = this.endpoint_back;
        }
        return this.http.post(url, request);
    }
    update(url, email, password, name, lastname, code, degree) {
        let request = {
            email, password, name, lastname, code, degree
        };
        if (url == null) {
            url = this.endpoint_back;
        }
        return this.http.put(url, request);
    }
};
JsonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }
];
JsonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JsonService);



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SessionService = class SessionService {
    constructor() {
        this.isSessionLoggedIn = false;
    }
    setSessionLoggedIn(session) {
        this.isSessionLoggedIn = true;
        this.sessionLogged = session;
        localStorage.setItem('currentSession', JSON.stringify(session));
    }
    setSessionLoggedOut() {
        const s = null;
        localStorage.setItem('currentSession', JSON.stringify(s));
    }
    getSessionLogged() {
        if (localStorage.getItem('currentSession')) {
            return JSON.parse(localStorage.getItem('currentSession'));
        }
        return null;
    }
};
SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SessionService);



/***/ }),

/***/ "./src/app/upload-grades/upload-grades-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/upload-grades/upload-grades-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UploadGradesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadGradesPageRoutingModule", function() { return UploadGradesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _upload_grades_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-grades.page */ "./src/app/upload-grades/upload-grades.page.ts");




const routes = [
    {
        path: '',
        component: _upload_grades_page__WEBPACK_IMPORTED_MODULE_3__["UploadGradesPage"]
    }
];
let UploadGradesPageRoutingModule = class UploadGradesPageRoutingModule {
};
UploadGradesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadGradesPageRoutingModule);



/***/ }),

/***/ "./src/app/upload-grades/upload-grades.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/upload-grades/upload-grades.module.ts ***!
  \*******************************************************/
/*! exports provided: UploadGradesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadGradesPageModule", function() { return UploadGradesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _upload_grades_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-grades-routing.module */ "./src/app/upload-grades/upload-grades-routing.module.ts");
/* harmony import */ var _upload_grades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-grades.page */ "./src/app/upload-grades/upload-grades.page.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");








let UploadGradesPageModule = class UploadGradesPageModule {
};
UploadGradesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _upload_grades_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadGradesPageRoutingModule"]
        ],
        declarations: [_upload_grades_page__WEBPACK_IMPORTED_MODULE_6__["UploadGradesPage"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"]]
    })
], UploadGradesPageModule);



/***/ }),

/***/ "./src/app/upload-grades/upload-grades.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/upload-grades/upload-grades.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1ncmFkZXMvdXBsb2FkLWdyYWRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/upload-grades/upload-grades.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/upload-grades/upload-grades.page.ts ***!
  \*****************************************************/
/*! exports provided: UploadGradesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadGradesPage", function() { return UploadGradesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/json.service */ "./src/app/services/json.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");





let UploadGradesPage = class UploadGradesPage {
    constructor(sessionService, jsonService, router) {
        this.sessionService = sessionService;
        this.jsonService = jsonService;
        this.router = router;
        this.students = [
            {
                "location": {
                    "latitud": 4.6381,
                    "longitud": -74.18
                },
                "_id": "600daf20842b8c4ae41f0e4c",
                "name": "cristian",
                "lastname": "ramirez",
                "code": "1711157",
                "birthdate": null,
                "degree": "Ingenieria de Sistemas",
                "email": "cristian-ramirez1@upc.edu.co",
                "password": "123",
                "id_rol": 1,
                "__v": 2
            },
            {
                "location": {
                    "latitud": 4.6381,
                    "longitud": -74.19
                },
                "_id": "600ddce5d39d0230d89d2c2f",
                "name": "juan Perez",
                "lastname": "rodrigo",
                "code": "1711158",
                "birthdate": null,
                "degree": "Ingenieria de Sistemas",
                "email": "cristian-ramirez12@upc.edu.co",
                "password": "123",
                "id_rol": 1,
                "__v": 0
            },
            {
                "location": {
                    "latitud": 4.58631,
                    "longitud": -74.22734
                },
                "_id": "600def378ffc1b0a8c311a41",
                "name": "juan Perez",
                "lastname": "rodrigo",
                "code": "222",
                "birthdate": null,
                "degree": "Ingenieria de Sistemas",
                "email": "a",
                "password": "b",
                "id_rol": 1,
                "__v": 0
            }
        ];
    }
    ngOnInit() {
        this.session = this.sessionService.getSessionLogged();
        this.getStudentsBySubject();
    }
    uploadGrade(grade_value, name, code) {
        try {
            this.jsonService.uploadGrade("1", grade_value, name, "12-09-20", code, this.subject).subscribe((data) => {
            });
        }
        catch (error) {
            console.log('Error->', error);
        }
    }
    getStudentsBySubject() {
        var url = this.router.parseUrl(this.router.url);
        this.subject = url.queryParams['subject'];
        try {
            this.jsonService.getStudentsBySubject(this.subject).subscribe((data) => {
                this.students = data;
                console.log(this.students);
            });
        }
        catch (error) {
            console.log('Error->', error);
        }
    }
};
UploadGradesPage.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: _services_json_service__WEBPACK_IMPORTED_MODULE_3__["JsonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UploadGradesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-grades',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upload-grades.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-grades/upload-grades.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./upload-grades.page.scss */ "./src/app/upload-grades/upload-grades.page.scss")).default]
    })
], UploadGradesPage);



/***/ })

}]);
//# sourceMappingURL=upload-grades-upload-grades-module-es2015.js.map