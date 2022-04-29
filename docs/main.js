(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\diego.gadenz\Desktop\VOW-Symbols\src\main.ts */"zUnb");


/***/ }),

/***/ "04V+":
/*!*********************************************************************!*\
  !*** ./src/app/components/symbol-picker/symbol-picker.component.ts ***!
  \*********************************************************************/
/*! exports provided: SymbolPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolPickerComponent", function() { return SymbolPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");



const _c0 = ["template"];
class SymbolPickerComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            animated: true,
            keyboard: false,
            backdrop: true,
            ignoreBackdropClick: true,
            class: 'center-modal modal-lg modal-dialog-centered'
        };
        this.EmailTO = [
            'EHenot@slb.com',
            'FSethi@slb.com',
            'JRubli@slb.com',
            'LMallet@slb.com',
            'PPatel6@slb.com',
            'NBomminauni@slb.com',
            'AShah28@slb.com',
            'KKinare@slb.com',
            'qton@slb.com',
            'gmontero@slb.com',
        ];
        this.SupportSubject = 'Subject: Support request from BI Adoption';
        this.SupportBody = 'Dear ITHelp, <br>Please create and assign this ticket to BISupport-L2 Remedy queue. <br>Support issue: <Please mention the detail>';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subject = '';
        this.message = '';
        this.rating = 0;
        this.model = 'feedback';
    }
    ngOnInit() {
        this.modalRef = this.modalService.show(this.elementView, this.config);
    }
    closeModal() {
        this.close.emit(true);
        this.modalRef.hide();
    }
}
SymbolPickerComponent.ɵfac = function SymbolPickerComponent_Factory(t) { return new (t || SymbolPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
SymbolPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymbolPickerComponent, selectors: [["app-symbol-picker"]], viewQuery: function SymbolPickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementView = _t.first);
    } }, outputs: { close: "close" }, decls: 2, vars: 0, template: function SymbolPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "symbol-picker works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeW1ib2wtcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 6, vars: 0, consts: [[1, "menu", "d-flex", "align-items-center"], [1, "container"], ["routerLink", "/home", 1, "menu-btn"], ["routerLink", "/totem", 1, "menu-btn"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Totem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".menu[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n  position: relative;\n  z-index: 1;\n  background: inherit;\n  overflow: hidden;\n}\n.menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  background: inherit;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 0 0 2000px #5e3b1f;\n  filter: blur(10px);\n  margin: -20px;\n}\n.menu[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #d2c8bf;\n  font-weight: 400;\n  font-size: 18px;\n  outline: 0;\n  margin-right: 40px;\n  transition: 0.3s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHlDQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFESiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMDBweCByZ2IoOTQgNTkgMzEpO1xuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBtYXJnaW46IC0yMHB4O1xuICB9XG5cbiAgLm1lbnUtYnRuIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNkMmM4YmY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_card_symbol_card_symbol_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-symbol/card-symbol.component */ "d1t1");



function HomeComponent_app_card_symbol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-symbol", 4);
} if (rf & 2) {
    const symbol_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symbol", symbol_r1);
} }
class HomeComponent {
    ngOnInit() {
        this.populateSymbols();
    }
    populateSymbols() {
        this.symbols = [
            { name: 'Plano Ascendente', icon: 'ascendant-plane.png' },
            { name: 'Russia', icon: 'black-garden.png' },
            { name: 'Mancha', icon: 'black-hearth.png' },
            { name: 'Coxinha', icon: 'enter.png' },
            { name: 'Pink Floyd', icon: 'commune.png' },
            { name: 'Treva', icon: 'darkness.png' },
            { name: 'Cálice', icon: 'drink.png' },
            { name: 'Terra', icon: 'earth.png' },
            { name: 'Frota', icon: 'fleet.png' },
            { name: 'Buraco no peito', icon: 'grieve.png' },
            { name: 'Mãos', icon: 'give.png' },
            { name: 'Guardião', icon: 'guardian.png' },
            { name: 'Savathun', icon: 'hive.png' },
            { name: 'Estaca', icon: 'kill.png' },
            { name: 'Cérebro', icon: 'remember.png' },
            { name: 'Luz', icon: 'light.png' },
            { name: 'Flor', icon: 'love.png' },
            { name: 'Piramide', icon: 'pyramid.png' },
            { name: 'DLC', icon: 'savathun.png' },
            { name: 'Renegados', icon: 'scorn.png' },
            { name: 'Quadrado', icon: 'stop.png' },
            { name: 'Torre', icon: 'tower.png' },
            { name: 'Viajante', icon: 'treveler.png' },
            { name: 'Testemunha', icon: 'witness.png' },
            { name: 'Verme', icon: 'worm.png' },
            { name: 'Braços abertos', icon: 'worship.png' },
            { name: 'Vazio', icon: 'void.png' },
        ];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 1, consts: [[1, ""], [1, "container", "mt-4"], [1, "row", "justify-content-center"], ["class", "col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-0", 3, "symbol", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "p-0", 3, "symbol"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_app_card_symbol_3_Template, 1, 1, "app-card-symbol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.symbols);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_card_symbol_card_symbol_component__WEBPACK_IMPORTED_MODULE_2__["CardSymbolComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KSn/":
/*!************************************************!*\
  !*** ./src/app/pages/totem/totem.component.ts ***!
  \************************************************/
/*! exports provided: TotemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotemComponent", function() { return TotemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_card_symbol_card_symbol_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-symbol/card-symbol.component */ "d1t1");



function TotemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-symbol", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symbol_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symbol", symbol_r1);
} }
class TotemComponent {
    constructor() { }
    ngOnInit() {
        this.populateSymbols();
    }
    populateSymbols() {
        this.symbols = [
            { name: 'Vazio', icon: 'void.png' },
            { name: 'Vazio', icon: 'void.png' },
            { name: 'Vazio', icon: 'void.png' },
        ];
    }
}
TotemComponent.ɵfac = function TotemComponent_Factory(t) { return new (t || TotemComponent)(); };
TotemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotemComponent, selectors: [["app-totem"]], decls: 5, vars: 1, consts: [[1, "container", "mt-5", "pt-4"], [1, "row"], [1, "col-6", "d-flex", "flex-column", "align-items-end", "justify-content-end"], ["class", "symbol-area d-flex flex-column align-itens-center justify-content-center", 4, "ngFor", "ngForOf"], [1, "col-6"], [1, "symbol-area", "d-flex", "flex-column", "align-itens-center", "justify-content-center"], [1, "", 3, "symbol"]], template: function TotemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TotemComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.symbols);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_card_symbol_card_symbol_component__WEBPACK_IMPORTED_MODULE_2__["CardSymbolComponent"]], styles: [".symbol-area[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b3RlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FBQUYiLCJmaWxlIjoidG90ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ltYm9sLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "background"], ["role", "main", 1, "d-block", "h-100"], [1, "router-flex"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".background[_ngcontent-%COMP%] {\n  width: 100%;\n  background-image: url(\"/assets/background.png\");\n  background-position: center;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  z-index: -2;\n}\n.background[_ngcontent-%COMP%]:after {\n  content: \" \";\n  z-index: -1;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n  background-color: rgba(0, 0, 0, 0.72);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUVBLCtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIRjtBQUtFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7QUFISiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbn1cblxuLmJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL1ZPVy1TeW1ib2xzL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IC0yO1xuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDcyJSk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_card_symbol_card_symbol_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card-symbol/card-symbol.component */ "d1t1");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_symbol_picker_symbol_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/symbol-picker/symbol-picker.component */ "04V+");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_totem_totem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/totem/totem.component */ "KSn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_card_symbol_card_symbol_component__WEBPACK_IMPORTED_MODULE_6__["CardSymbolComponent"],
        _pages_totem_totem_component__WEBPACK_IMPORTED_MODULE_10__["TotemComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
        _components_symbol_picker_symbol_picker_component__WEBPACK_IMPORTED_MODULE_8__["SymbolPickerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]] }); })();


/***/ }),

/***/ "d1t1":
/*!*****************************************************************!*\
  !*** ./src/app/components/card-symbol/card-symbol.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardSymbolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSymbolComponent", function() { return CardSymbolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardSymbolComponent {
    constructor() {
        this.iconsPath = '/assets/symbols/';
    }
    ngOnInit() {
    }
    get iconPath() {
        return this.iconsPath + this.symbol.icon;
    }
}
CardSymbolComponent.ɵfac = function CardSymbolComponent_Factory(t) { return new (t || CardSymbolComponent)(); };
CardSymbolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardSymbolComponent, selectors: [["app-card-symbol"]], inputs: { symbol: "symbol" }, decls: 4, vars: 2, consts: [[1, "card-symbol", "p-3", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "icon", 3, "src"], [1, "name"]], template: function CardSymbolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.symbol.name);
    } }, styles: [".card-symbol[_ngcontent-%COMP%] {\n  transition: 0.3s all;\n}\n.card-symbol[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 110px;\n  transition: 0.3s all;\n}\n.card-symbol[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #c9c9c9;\n  font-size: 20px;\n  transition: 0.3s all;\n}\n.card-symbol[_ngcontent-%COMP%]:hover {\n  z-index: 10;\n  transform: scale(1.2);\n  transition: 0.3s all;\n}\n.card-symbol[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  transition: 0.3s all;\n}\n.card-symbol[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  color: white;\n  transition: 0.3s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLXN5bWJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUdJO0VBQ0Usb0JBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBRk4iLCJmaWxlIjoiY2FyZC1zeW1ib2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zeW1ib2wge1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblxuICAuaWNvbiB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICBjb2xvcjogI2M5YzljOTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cbiAgICAuaWNvbiB7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_totem_totem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/totem/totem.component */ "KSn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'totem', component: _pages_totem_totem_component__WEBPACK_IMPORTED_MODULE_2__["TotemComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map