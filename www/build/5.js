webpackJsonp([5],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistPageModule", function() { return MylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mylist__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MylistPageModule = (function () {
    function MylistPageModule() {
    }
    MylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mylist__["a" /* MylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mylist__["a" /* MylistPage */]),
            ],
        })
    ], MylistPageModule);
    return MylistPageModule;
}());

//# sourceMappingURL=mylist.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MylistPage = (function () {
    function MylistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MylistPage');
    };
    MylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mylist',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\mylist\mylist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content padding>\n    <ion-row class="movies-shows-row">\n      <ion-col text-center>\n        <button ion-button clear color="netflixWhite">\n          <ion-icon name=\'ios-checkmark-circle\'></ion-icon>\n        </button>\n\n        <p>Movies and TV show that you download appear here.</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="find-downloads-row">\n      <ion-col text-center>\n        <button ion-button icon-start color="netflixWhite">\n          FIND SOMETHING TO WATCH\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\mylist\mylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MylistPage);
    return MylistPage;
}());

//# sourceMappingURL=mylist.js.map

/***/ })

});
//# sourceMappingURL=5.js.map