(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <fieldset class=\"form-group\">\n        <legend>{{adForm.legendLabel}}</legend>\n        <br />\n        <form [formGroup]=\"form\" novalidate>\n            <div class=\"form-row\" *ngFor=\"let currentRow of adForm.rows\">\n                <div class=\"form-group\" *ngFor=\"let currentComponent of currentRow.lstComponent;\"\n                    [ngClass]=\"getClass(currentRow.nbreComponent)\">\n                    <app-ad [ads]=\"currentComponent\" [form]=\"form\" [displayFieldCss]=\"displayFieldCss\"></app-ad>\n                </div>\n            </div>\n\n            <div class=\"form-row\">\n                <button class=\"btn btn-secondary\" (click)=\"reset()\">Cancel</button>\n                <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"!form.valid\">{{adForm.submitLabel}}</button>\n            </div>\n        </form>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ad_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ad.data.service */ "./src/app/services/ad.data.service.ts");
/* harmony import */ var _services_ad_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ad.factory.service */ "./src/app/services/ad.factory.service.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, factoryService, formBuilder) {
        this.dataService = dataService;
        this.factoryService = factoryService;
        this.formBuilder = formBuilder;
        this.displayFieldCss = this.displayFieldCss.bind(this);
    }
    Object.defineProperty(AppComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var dataFormDesc = this.dataService.getCustomFormDescription();
        this.adForm = {
            legendLabel: dataFormDesc.legendLabel,
            submitLabel: dataFormDesc.submitLabel,
            rows: Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["createRowsItems"])(dataFormDesc.customRows, this.factoryService)
        };
        // https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
        this.form = this.formBuilder.group(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["createControlConfig"])(dataFormDesc));
    };
    AppComponent.prototype.onSubmit = function () {
        if (this.form.invalid) {
            return;
        }
        console.log(JSON.stringify(this.form.value));
    };
    AppComponent.prototype.reset = function () {
        console.log(JSON.stringify(this.form.value));
        this.form.reset();
    };
    AppComponent.prototype.getClass = function (nbreComponent) {
        return 'col-md-' + (12 / nbreComponent).toString();
    };
    AppComponent.prototype.displayFieldCss = function (field) {
        return { 'is-invalid': !this.form.get(field).valid && this.form.get(field).touched };
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_services_ad_data_service__WEBPACK_IMPORTED_MODULE_2__["AdDataService"], _services_ad_factory_service__WEBPACK_IMPORTED_MODULE_3__["AdFactoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_ad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/ad.component */ "./src/app/core/ad.component.ts");
/* harmony import */ var _core_ad_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/ad.directive */ "./src/app/core/ad.directive.ts");
/* harmony import */ var _custom_ad_input_ad_input_ad_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-ad/input-ad/input-ad.component */ "./src/app/custom-ad/input-ad/input-ad.component.ts");
/* harmony import */ var _custom_ad_input_radio_ad_input_radio_ad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-ad/input-radio-ad/input-radio-ad.component */ "./src/app/custom-ad/input-radio-ad/input-radio-ad.component.ts");
/* harmony import */ var _custom_ad_input_checkbox_ad_input_checkbox_ad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-ad/input-checkbox-ad/input-checkbox-ad.component */ "./src/app/custom-ad/input-checkbox-ad/input-checkbox-ad.component.ts");
/* harmony import */ var _custom_ad_input_email_ad_input_email_ad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-ad/input-email-ad/input-email-ad.component */ "./src/app/custom-ad/input-email-ad/input-email-ad.component.ts");
/* harmony import */ var _custom_ad_input_date_ad_input_date_ad_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-ad/input-date-ad/input-date-ad.component */ "./src/app/custom-ad/input-date-ad/input-date-ad.component.ts");
/* harmony import */ var _custom_ad_textarea_ad_textarea_ad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-ad/textarea-ad/textarea-ad.component */ "./src/app/custom-ad/textarea-ad/textarea-ad.component.ts");
/* harmony import */ var _custom_ad_select_ad_select_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom-ad/select-ad/select-ad.component */ "./src/app/custom-ad/select-ad/select-ad.component.ts");
/* harmony import */ var _services_ad_factory_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/ad.factory.service */ "./src/app/services/ad.factory.service.ts");
/* harmony import */ var _services_ad_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/ad.data.service */ "./src/app/services/ad.data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _services_ad_data_service__WEBPACK_IMPORTED_MODULE_15__["AdDataService"],
                _services_ad_factory_service__WEBPACK_IMPORTED_MODULE_14__["AdFactoryService"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _core_ad_component__WEBPACK_IMPORTED_MODULE_5__["AdComponent"],
                _custom_ad_input_ad_input_ad_component__WEBPACK_IMPORTED_MODULE_7__["InputAdComponent"],
                _custom_ad_input_radio_ad_input_radio_ad_component__WEBPACK_IMPORTED_MODULE_8__["InputRadioAdComponent"],
                _custom_ad_input_checkbox_ad_input_checkbox_ad_component__WEBPACK_IMPORTED_MODULE_9__["InputCheckboxAdComponent"],
                _custom_ad_input_email_ad_input_email_ad_component__WEBPACK_IMPORTED_MODULE_10__["InputEmailAdComponent"],
                _custom_ad_input_date_ad_input_date_ad_component__WEBPACK_IMPORTED_MODULE_11__["InputDateAdComponent"],
                _custom_ad_textarea_ad_textarea_ad_component__WEBPACK_IMPORTED_MODULE_12__["TextareaAdComponent"],
                _custom_ad_select_ad_select_ad_component__WEBPACK_IMPORTED_MODULE_13__["SelectAdComponent"],
                _core_ad_directive__WEBPACK_IMPORTED_MODULE_6__["AdDirective"]
            ],
            entryComponents: [
                _custom_ad_input_ad_input_ad_component__WEBPACK_IMPORTED_MODULE_7__["InputAdComponent"],
                _custom_ad_input_radio_ad_input_radio_ad_component__WEBPACK_IMPORTED_MODULE_8__["InputRadioAdComponent"],
                _custom_ad_input_checkbox_ad_input_checkbox_ad_component__WEBPACK_IMPORTED_MODULE_9__["InputCheckboxAdComponent"],
                _custom_ad_input_email_ad_input_email_ad_component__WEBPACK_IMPORTED_MODULE_10__["InputEmailAdComponent"],
                _custom_ad_input_date_ad_input_date_ad_component__WEBPACK_IMPORTED_MODULE_11__["InputDateAdComponent"],
                _custom_ad_textarea_ad_textarea_ad_component__WEBPACK_IMPORTED_MODULE_12__["TextareaAdComponent"],
                _custom_ad_select_ad_select_ad_component__WEBPACK_IMPORTED_MODULE_13__["SelectAdComponent"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/ad.component.ts":
/*!**************************************!*\
  !*** ./src/app/core/ad.component.ts ***!
  \**************************************/
/*! exports provided: AdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdComponent", function() { return AdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ad_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad.directive */ "./src/app/core/ad.directive.ts");
/* harmony import */ var _models_ad_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ad-item */ "./src/app/models/ad-item.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdComponent = /** @class */ (function () {
    function AdComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // Empty...
    }
    AdComponent.prototype.ngOnInit = function () {
        this.loadComponent();
    };
    AdComponent.prototype.loadComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ads.component);
        var componentRef = this.adHost.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.ads.data;
        componentRef.instance.controlName = this.ads.controlName;
        componentRef.instance.placeHolder = this.ads.placeHolder;
        componentRef.instance.required = this.ads.required;
        componentRef.instance.label = this.ads.label;
        componentRef.instance.displayFieldCss = this.displayFieldCss;
        componentRef.instance.form = this.form;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_ad_item__WEBPACK_IMPORTED_MODULE_2__["AdItem"])
    ], AdComponent.prototype, "ads", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], AdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], AdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ad_directive__WEBPACK_IMPORTED_MODULE_1__["AdDirective"]),
        __metadata("design:type", _ad_directive__WEBPACK_IMPORTED_MODULE_1__["AdDirective"])
    ], AdComponent.prototype, "adHost", void 0);
    AdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ad',
            template: "<ng-template ad-host></ng-template>"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AdComponent);
    return AdComponent;
}());



/***/ }),

/***/ "./src/app/core/ad.directive.ts":
/*!**************************************!*\
  !*** ./src/app/core/ad.directive.ts ***!
  \**************************************/
/*! exports provided: AdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDirective", function() { return AdDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdDirective = /** @class */ (function () {
    function AdDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AdDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ad-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AdDirective);
    return AdDirective;
}());



/***/ }),

/***/ "./src/app/custom-ad/input-ad/input-ad.component.html":
/*!************************************************************!*\
  !*** ./src/app/custom-ad/input-ad/input-ad.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <label class=\"center-block\" [ngClass]=\"{'required' : required}\" [for]=\"controlName\">{{label}}</label>\n    <input type=\"text\" [attr.id]=\"controlName\" class=\"form-control\" [formControlName]=\"controlName\"\n        [placeholder]=\"placeHolder\" [ngClass]=\"displayFieldCss(controlName)\">\n</form>"

/***/ }),

/***/ "./src/app/custom-ad/input-ad/input-ad.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-ad/input-ad/input-ad.component.ts ***!
  \**********************************************************/
/*! exports provided: InputAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAdComponent", function() { return InputAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputAdComponent = /** @class */ (function () {
    function InputAdComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], InputAdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], InputAdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputAdComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputAdComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputAdComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputAdComponent.prototype, "label", void 0);
    InputAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./input-ad.component.html */ "./src/app/custom-ad/input-ad/input-ad.component.html")
        })
    ], InputAdComponent);
    return InputAdComponent;
}());



/***/ }),

/***/ "./src/app/custom-ad/input-checkbox-ad/input-checkbox-ad.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/custom-ad/input-checkbox-ad/input-checkbox-ad.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <label class=\"center-block\" [ngClass]=\"{'required' : required}\">{{label}}</label>\n    <div class=\"form-check\" *ngFor=\"let currentData of form.controls[controlName].controls; let i = index\">\n        <label class=\"form-check-label\" [formArrayName]=\"controlName\">\n            <input class=\"form-check-input\" [name]=\"data[i].label\" [value]=\"data[i].value\" [checked]=\"currentData.value.checked\" type=\"checkbox\" [formControlName]=\"i\" (change)=\"onCheckboxChange($event)\" >\n            {{data[i].label}}\n        </label>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/custom-ad/input-checkbox-ad/input-checkbox-ad.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/custom-ad/input-checkbox-ad/input-checkbox-ad.component.ts ***!
  \****************************************************************************/
/*! exports provided: InputCheckboxAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCheckboxAdComponent", function() { return InputCheckboxAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputCheckboxAdComponent = /** @class */ (function () {
    function InputCheckboxAdComponent() {
    }
    InputCheckboxAdComponent.prototype.onCheckboxChange = function (event) {
        var indexCurrentElement = this.data.findIndex(function (e) { return e.value === event.target.value; });
        if (indexCurrentElement === -1)
            return;
        this.form.get(this.controlName).controls[indexCurrentElement].setValue({
            label: event.target.name,
            value: event.target.value,
            checked: event.target.checked
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], InputCheckboxAdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], InputCheckboxAdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputCheckboxAdComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputCheckboxAdComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputCheckboxAdComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputCheckboxAdComponent.prototype, "data", void 0);
    InputCheckboxAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./input-checkbox-ad.component.html */ "./src/app/custom-ad/input-checkbox-ad/input-checkbox-ad.component.html")
        })
    ], InputCheckboxAdComponent);
    return InputCheckboxAdComponent;
}());



/***/ }),

/***/ "./src/app/custom-ad/input-date-ad/input-date-ad.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/custom-ad/input-date-ad/input-date-ad.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>These datepickers use custom Date adapter that lets you use your own model implementation.\n    In this example we are converting from and to a JS native Date object</p>\n\n<div class=\"row\">\n    <div class=\"col-6\">\n        <form class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d2\" #c2=\"ngModel\" [(ngModel)]=\"model2\"\n                        ngbDatepicker #d2=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\"></button>\n                    </div>\n                </div>\n            </div>\n        </form>\n\n        <hr />\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model2 = today\">Select Today</button>\n        <hr />\n\n        <pre>Model: {{ model2 | json }}</pre>\n        <pre>State: {{ c2.status }}</pre>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/custom-ad/input-date-ad/input-date-ad.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/custom-ad/input-date-ad/input-date-ad.component.ts ***!
  \********************************************************************/
/*! exports provided: InputDateAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateAdComponent", function() { return InputDateAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputDateAdComponent = /** @class */ (function () {
    function InputDateAdComponent() {
    }
    Object.defineProperty(InputDateAdComponent.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], InputDateAdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], InputDateAdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputDateAdComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputDateAdComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputDateAdComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputDateAdComponent.prototype, "data", void 0);
    InputDateAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./input-date-ad.component.html */ "./src/app/custom-ad/input-date-ad/input-date-ad.component.html"),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"] }]
        })
    ], InputDateAdComponent);
    return InputDateAdComponent;
}());



/***/ }),

/***/ "./src/app/custom-ad/input-email-ad/input-email-ad.component.html":
/*!************************************************************************!*\
  !*** ./src/app/custom-ad/input-email-ad/input-email-ad.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <label class=\"center-block\" [ngClass]=\"{'required' : required}\" [for]=\"controlName\">{{label}}</label>\n    <input type=\"email\" [attr.id]=\"controlName\" class=\"form-control\" [formControlName]=\"controlName\"\n        [placeholder]=\"placeHolder\" [ngClass]=\"displayFieldCss(controlName)\">\n</form>"

/***/ }),

/***/ "./src/app/custom-ad/input-email-ad/input-email-ad.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/custom-ad/input-email-ad/input-email-ad.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputEmailAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEmailAdComponent", function() { return InputEmailAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputEmailAdComponent = /** @class */ (function () {
    function InputEmailAdComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], InputEmailAdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], InputEmailAdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputEmailAdComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputEmailAdComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputEmailAdComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputEmailAdComponent.prototype, "label", void 0);
    InputEmailAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./input-email-ad.component.html */ "./src/app/custom-ad/input-email-ad/input-email-ad.component.html")
        })
    ], InputEmailAdComponent);
    return InputEmailAdComponent;
}());



/***/ }),

/***/ "./src/app/custom-ad/input-radio-ad/input-radio-ad.component.html":
/*!************************************************************************!*\
  !*** ./src/app/custom-ad/input-radio-ad/input-radio-ad.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <label class=\"center-block\" [ngClass]=\"{'required' : required}\">{{label}}</label>\n    <div class=\"form-check\" *ngFor=\"let currentData of data\">\n        <input class=\"form-check-input\" type=\"radio\" id=\"{{controlName + '-' + currentData.value}}\"\n            [formControlName]=\"controlName\" [value]=\"currentData\">\n        <label class=\"form-check-label\" for=\"{{controlName + '-' + currentData.value}}\">\n            {{currentData.label}}\n        </label>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/custom-ad/input-radio-ad/input-radio-ad.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/custom-ad/input-radio-ad/input-radio-ad.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputRadioAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadioAdComponent", function() { return InputRadioAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputRadioAdComponent = /** @class */ (function () {
    function InputRadioAdComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], InputRadioAdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], InputRadioAdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputRadioAdComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputRadioAdComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputRadioAdComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputRadioAdComponent.prototype, "data", void 0);
    InputRadioAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./input-radio-ad.component.html */ "./src/app/custom-ad/input-radio-ad/input-radio-ad.component.html")
        })
    ], InputRadioAdComponent);
    return InputRadioAdComponent;
}());



/***/ }),

/***/ "./src/app/custom-ad/select-ad/select-ad.component.html":
/*!**************************************************************!*\
  !*** ./src/app/custom-ad/select-ad/select-ad.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <label class=\"center-block\" [ngClass]=\"{'required' : required}\" [for]=\"controlName\">{{label}}</label>\n    <select [attr.id]=\"controlName\" class=\"form-control\" [formControlName]=\"controlName\"\n        [ngClass]=\"displayFieldCss(controlName)\">\n        <option *ngFor=\"let currentData of data\" [ngValue]=\"currentData\">\n            {{ currentData.label }}\n        </option>\n    </select>\n</form>"

/***/ }),

/***/ "./src/app/custom-ad/select-ad/select-ad.component.ts":
/*!************************************************************!*\
  !*** ./src/app/custom-ad/select-ad/select-ad.component.ts ***!
  \************************************************************/
/*! exports provided: SelectAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAdComponent", function() { return SelectAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectAdComponent = /** @class */ (function () {
    function SelectAdComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], SelectAdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SelectAdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectAdComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectAdComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectAdComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectAdComponent.prototype, "label", void 0);
    SelectAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./select-ad.component.html */ "./src/app/custom-ad/select-ad/select-ad.component.html")
        })
    ], SelectAdComponent);
    return SelectAdComponent;
}());



/***/ }),

/***/ "./src/app/custom-ad/textarea-ad/textarea-ad.component.html":
/*!******************************************************************!*\
  !*** ./src/app/custom-ad/textarea-ad/textarea-ad.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <label class=\"center-block\" [ngClass]=\"{'required' : required}\" [for]=\"controlName\">{{label}}</label>\n    <textarea class=\"form-control\" [attr.id]=\"controlName\" [formControlName]=\"controlName\" [placeholder]=\"placeHolder\"\n        [ngClass]=\"displayFieldCss(controlName)\" rows=\"3\"></textarea>\n</form>"

/***/ }),

/***/ "./src/app/custom-ad/textarea-ad/textarea-ad.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/custom-ad/textarea-ad/textarea-ad.component.ts ***!
  \****************************************************************/
/*! exports provided: TextareaAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaAdComponent", function() { return TextareaAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextareaAdComponent = /** @class */ (function () {
    function TextareaAdComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TextareaAdComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], TextareaAdComponent.prototype, "displayFieldCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextareaAdComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextareaAdComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TextareaAdComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextareaAdComponent.prototype, "label", void 0);
    TextareaAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./textarea-ad.component.html */ "./src/app/custom-ad/textarea-ad/textarea-ad.component.html")
        })
    ], TextareaAdComponent);
    return TextareaAdComponent;
}());



/***/ }),

/***/ "./src/app/models/ad-item.ts":
/*!***********************************!*\
  !*** ./src/app/models/ad-item.ts ***!
  \***********************************/
/*! exports provided: AdItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdItem", function() { return AdItem; });
var AdItem = /** @class */ (function () {
    function AdItem(component, label, controlName, required, placeHolder, data) {
        if (required === void 0) { required = false; }
        this.component = component;
        this.label = label;
        this.controlName = controlName;
        this.required = required;
        this.placeHolder = placeHolder;
        this.data = data;
    }
    return AdItem;
}());



/***/ }),

/***/ "./src/app/services/ad.data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ad.data.service.ts ***!
  \*********************************************/
/*! exports provided: AdDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDataService", function() { return AdDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/types */ "./src/app/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AdDataService = /** @class */ (function () {
    function AdDataService() {
    }
    AdDataService.prototype.getCustomFormDescription = function () {
        return {
            legendLabel: 'Dynamic form validation',
            submitLabel: 'Save',
            customRows: [
                {
                    position: 0,
                    customControls: [
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Text,
                            required: true,
                            label: 'First name',
                            controlName: 'firstName',
                            placeHolder: 'Enter your first name'
                        },
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Text,
                            required: true,
                            label: 'Last name',
                            controlName: 'lastName',
                            placeHolder: 'Enter your last name'
                        },
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Date,
                            required: false,
                            label: 'Birthday',
                            controlName: 'birthday',
                            placeHolder: 'dd/MM/yyyy'
                        }
                    ]
                },
                {
                    position: 1,
                    customControls: [
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Text,
                            required: false,
                            label: 'City',
                            controlName: 'city',
                            placeHolder: 'Enter your city'
                        },
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].List,
                            required: true,
                            label: 'State',
                            controlName: 'state',
                            data: [
                                { name: '', label: '' },
                                { name: 'Arizona', label: 'AZ' },
                                { name: 'California', label: 'CA' },
                                { name: 'Colorado', label: 'CO' },
                                { name: 'New York', label: 'NY' },
                                { name: 'Pennsylvania', label: 'PA' },
                            ]
                        },
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Text,
                            required: false,
                            label: 'Zip',
                            controlName: 'zip',
                            placeHolder: 'Enter your zip code'
                        }
                    ]
                },
                {
                    position: 2,
                    customControls: [
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Email,
                            required: true,
                            label: 'E-mail',
                            controlName: 'email',
                            placeHolder: 'Enter your e-mail'
                        }
                    ]
                },
                {
                    position: 3,
                    customControls: [
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Radio,
                            required: true,
                            label: 'Gender',
                            controlName: 'gender',
                            data: [
                                {
                                    label: 'Male',
                                    value: 'Male'
                                },
                                {
                                    label: 'Female',
                                    value: 'Female'
                                }
                            ]
                        },
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].Checkbox,
                            required: true,
                            label: 'Your skills',
                            controlName: 'skills',
                            data: [
                                {
                                    label: 'c#',
                                    value: 'csharp'
                                },
                                {
                                    label: 'Angular',
                                    value: 'angular'
                                },
                                {
                                    label: 'React',
                                    value: 'react'
                                },
                                {
                                    label: 'Sql Server',
                                    value: 'sqlserver'
                                },
                                {
                                    label: 'Cobol',
                                    value: 'cobol'
                                },
                                {
                                    label: 'DB2',
                                    value: 'db2'
                                }
                            ]
                        },
                        {
                            type: _shared_types__WEBPACK_IMPORTED_MODULE_1__["CustomControlNameEnum"].MultiLignes,
                            required: true,
                            label: 'Comment',
                            controlName: 'comment',
                            placeHolder: 'Enter your comment'
                        }
                    ]
                }
            ]
        };
    };
    AdDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AdDataService);
    return AdDataService;
}());



/***/ }),

/***/ "./src/app/services/ad.factory.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ad.factory.service.ts ***!
  \************************************************/
/*! exports provided: AdFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdFactoryService", function() { return AdFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_ad_input_ad_input_ad_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-ad/input-ad/input-ad.component */ "./src/app/custom-ad/input-ad/input-ad.component.ts");
/* harmony import */ var _custom_ad_input_radio_ad_input_radio_ad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-ad/input-radio-ad/input-radio-ad.component */ "./src/app/custom-ad/input-radio-ad/input-radio-ad.component.ts");
/* harmony import */ var _custom_ad_input_checkbox_ad_input_checkbox_ad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-ad/input-checkbox-ad/input-checkbox-ad.component */ "./src/app/custom-ad/input-checkbox-ad/input-checkbox-ad.component.ts");
/* harmony import */ var _custom_ad_input_email_ad_input_email_ad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-ad/input-email-ad/input-email-ad.component */ "./src/app/custom-ad/input-email-ad/input-email-ad.component.ts");
/* harmony import */ var _custom_ad_input_date_ad_input_date_ad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-ad/input-date-ad/input-date-ad.component */ "./src/app/custom-ad/input-date-ad/input-date-ad.component.ts");
/* harmony import */ var _custom_ad_textarea_ad_textarea_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-ad/textarea-ad/textarea-ad.component */ "./src/app/custom-ad/textarea-ad/textarea-ad.component.ts");
/* harmony import */ var _custom_ad_select_ad_select_ad_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-ad/select-ad/select-ad.component */ "./src/app/custom-ad/select-ad/select-ad.component.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/types */ "./src/app/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdFactoryService = /** @class */ (function () {
    function AdFactoryService() {
    }
    AdFactoryService.prototype.getAdComponent = function (customControlName) {
        switch (customControlName) {
            case _shared_types__WEBPACK_IMPORTED_MODULE_8__["CustomControlNameEnum"].Text:
                return _custom_ad_input_ad_input_ad_component__WEBPACK_IMPORTED_MODULE_1__["InputAdComponent"];
            case _shared_types__WEBPACK_IMPORTED_MODULE_8__["CustomControlNameEnum"].Radio:
                return _custom_ad_input_radio_ad_input_radio_ad_component__WEBPACK_IMPORTED_MODULE_2__["InputRadioAdComponent"];
            case _shared_types__WEBPACK_IMPORTED_MODULE_8__["CustomControlNameEnum"].Checkbox:
                return _custom_ad_input_checkbox_ad_input_checkbox_ad_component__WEBPACK_IMPORTED_MODULE_3__["InputCheckboxAdComponent"];
            case _shared_types__WEBPACK_IMPORTED_MODULE_8__["CustomControlNameEnum"].Email:
                return _custom_ad_input_email_ad_input_email_ad_component__WEBPACK_IMPORTED_MODULE_4__["InputEmailAdComponent"];
            case _shared_types__WEBPACK_IMPORTED_MODULE_8__["CustomControlNameEnum"].Date:
                return _custom_ad_input_date_ad_input_date_ad_component__WEBPACK_IMPORTED_MODULE_5__["InputDateAdComponent"];
            case _shared_types__WEBPACK_IMPORTED_MODULE_8__["CustomControlNameEnum"].MultiLignes:
                return _custom_ad_textarea_ad_textarea_ad_component__WEBPACK_IMPORTED_MODULE_6__["TextareaAdComponent"];
            case _shared_types__WEBPACK_IMPORTED_MODULE_8__["CustomControlNameEnum"].List:
                return _custom_ad_select_ad_select_ad_component__WEBPACK_IMPORTED_MODULE_7__["SelectAdComponent"];
            default:
                throw new Error("Custom control name : " + customControlName + " are unknown");
        }
    };
    AdFactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AdFactoryService);
    return AdFactoryService;
}());



/***/ }),

/***/ "./src/app/shared/types.ts":
/*!*********************************!*\
  !*** ./src/app/shared/types.ts ***!
  \*********************************/
/*! exports provided: CustomControlNameEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomControlNameEnum", function() { return CustomControlNameEnum; });
var CustomControlNameEnum;
(function (CustomControlNameEnum) {
    CustomControlNameEnum["Text"] = "Text";
    CustomControlNameEnum["Radio"] = "Radio";
    CustomControlNameEnum["Checkbox"] = "Checkbox";
    CustomControlNameEnum["List"] = "List";
    CustomControlNameEnum["Email"] = "Email";
    CustomControlNameEnum["Date"] = "Date";
    CustomControlNameEnum["MultiLignes"] = "MultiLignes";
})(CustomControlNameEnum || (CustomControlNameEnum = {}));


/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: createControlConfig, createRowsItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createControlConfig", function() { return createControlConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRowsItems", function() { return createRowsItems; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_ad_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ad-item */ "./src/app/models/ad-item.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/app/shared/types.ts");



function createControlConfig(customForm) {
    var config = {};
    customForm.customRows.forEach(function (row) {
        row.customControls.forEach(function (ctr) {
            if (ctr.type === _types__WEBPACK_IMPORTED_MODULE_2__["CustomControlNameEnum"].Checkbox) {
                config[ctr.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"](ctr.data.map(function (item) {
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({
                        label: item.label,
                        value: item.value,
                        checked: false
                    });
                }), getValidator(ctr));
            }
            else {
                config[ctr.controlName] = ['', getValidator(ctr)];
            }
        });
    });
    return config;
}
function getValidator(ctr) {
    var validatorList = [];
    switch (ctr.type) {
        case _types__WEBPACK_IMPORTED_MODULE_2__["CustomControlNameEnum"].Email:
            validatorList.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email);
            break;
        default:
            break;
    }
    if (ctr.required) {
        switch (ctr.type) {
            case _types__WEBPACK_IMPORTED_MODULE_2__["CustomControlNameEnum"].Checkbox:
                validatorList.push(minSelectedCheckboxes(1));
                break;
            default:
                validatorList.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
                break;
        }
    }
    if (validatorList.length === 0) {
        validatorList.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].nullValidator);
    }
    return validatorList;
}
function createRowsItems(rows, factoryService) {
    var adRows = [];
    rows.forEach(function (row) {
        adRows.push({
            nbreComponent: row.customControls.length,
            lstComponent: createControl(row.customControls, factoryService)
        });
    });
    return adRows;
}
function createControl(ctrls, factoryService) {
    var adItems = [];
    ctrls.forEach(function (ctrl) {
        adItems.push(new _models_ad_item__WEBPACK_IMPORTED_MODULE_1__["AdItem"](factoryService.getAdComponent(ctrl.type), ctrl.label, ctrl.controlName, ctrl.required, ctrl.placeHolder, ctrl.data));
    });
    return adItems;
}
// Original : https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
function minSelectedCheckboxes(min) {
    if (min === void 0) { min = 1; }
    var validator = function (formArray) {
        var totalSelected = formArray.controls
            .map(function (control) { return control.value; })
            .reduce(function (prev, next) { return next.checked ? prev + 1 : prev; }, 0);
        return totalSelected >= min ? null : { required: true };
    };
    return validator;
}


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Sadri/Documents/Documents - MacBook Pro de Sadri/HomeWork/Angular/DynamicComponentLoader/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map