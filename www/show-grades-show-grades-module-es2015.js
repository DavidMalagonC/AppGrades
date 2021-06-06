(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show-grades-show-grades-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-grades/show-grades.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-grades/show-grades.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      <p>{{subject}}\r\n        <app-nav-menu style=\"align-content: right; float: right;\"></app-nav-menu>\r\n      </p>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"center2\">\r\n    <ion-card *ngFor=\"let grade of grades\">\r\n      <ion-item class=\"ion-activated\">\r\n        <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{grade.name}}: {{grade.grade_value}}</ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

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
    login(latitud, longitud, email, password, image) {
        var request = { latitud, longitud, email, password, image };
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
    getAverageByStudent(code) {
        return this.http.get(this.endpoint_back + "/student/grade/average/" + code);
    }
    getAverageSubjectsByStudent(code) {
        return this.http.get(this.endpoint_back + "/student/list/average/grade/" + code);
    }
    getSubjectsByTeacher(code) {
        return this.http.get(this.endpoint_back + "/perfil/subjects/" + code);
    }
    sendMail(email, subject, message) {
        var request = { email, subject, message };
        return this.http.post(this.endpoint_back + "/perfil/sendEMail/", request);
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

/***/ "./src/app/show-grades/show-grades-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/show-grades/show-grades-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ShowGradesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowGradesPageRoutingModule", function() { return ShowGradesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _show_grades_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-grades.page */ "./src/app/show-grades/show-grades.page.ts");




const routes = [
    {
        path: '',
        component: _show_grades_page__WEBPACK_IMPORTED_MODULE_3__["ShowGradesPage"]
    }
];
let ShowGradesPageRoutingModule = class ShowGradesPageRoutingModule {
};
ShowGradesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowGradesPageRoutingModule);



/***/ }),

/***/ "./src/app/show-grades/show-grades.module.ts":
/*!***************************************************!*\
  !*** ./src/app/show-grades/show-grades.module.ts ***!
  \***************************************************/
/*! exports provided: ShowGradesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowGradesPageModule", function() { return ShowGradesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _show_grades_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-grades-routing.module */ "./src/app/show-grades/show-grades-routing.module.ts");
/* harmony import */ var _show_grades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-grades.page */ "./src/app/show-grades/show-grades.page.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");








let ShowGradesPageModule = class ShowGradesPageModule {
};
ShowGradesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _show_grades_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowGradesPageRoutingModule"]
        ],
        declarations: [_show_grades_page__WEBPACK_IMPORTED_MODULE_6__["ShowGradesPage"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"]]
    })
], ShowGradesPageModule);



/***/ }),

/***/ "./src/app/show-grades/show-grades.page.scss":
/*!***************************************************!*\
  !*** ./src/app/show-grades/show-grades.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctZ3JhZGVzL3Nob3ctZ3JhZGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/show-grades/show-grades.page.ts":
/*!*************************************************!*\
  !*** ./src/app/show-grades/show-grades.page.ts ***!
  \*************************************************/
/*! exports provided: ShowGradesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowGradesPage", function() { return ShowGradesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/json.service */ "./src/app/services/json.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");





let ShowGradesPage = class ShowGradesPage {
    constructor(sessionService, jsonService, router) {
        this.sessionService = sessionService;
        this.jsonService = jsonService;
        this.router = router;
    }
    ngOnInit() {
        this.session = this.sessionService.getSessionLogged();
        this.getGradesBySubject();
    }
    getGradesBySubject() {
        var url = this.router.parseUrl(this.router.url);
        this.subject = url.queryParams['subject'];
        try {
            this.jsonService.getGradesBySubject(url.queryParams['subjectCode'], this.session.user.code).subscribe((data) => {
                this.grades = data;
            });
        }
        catch (error) {
            console.log('Error->', error);
        }
    }
};
ShowGradesPage.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: _services_json_service__WEBPACK_IMPORTED_MODULE_3__["JsonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ShowGradesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-grades',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-grades.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-grades/show-grades.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-grades.page.scss */ "./src/app/show-grades/show-grades.page.scss")).default]
    })
], ShowGradesPage);



/***/ })

}]);
//# sourceMappingURL=show-grades-show-grades-module-es2015.js.map