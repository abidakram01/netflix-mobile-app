webpackJsonp([3],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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


var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\settings\settings.html"*/'<ion-header no-border>\n  <ion-navbar align-title="center">\n    <ion-title>\n      <img src="../../assets/imgs/netflix-logo.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-list-header>Video playback</ion-list-header>\n\n    <ion-item>\n      <p class="item-title">Cellular Data Usage</p>\n      <p class="item-subtitle">Automatic (Default data & quality setting)</p>\n    </ion-item>\n\n    <ion-list-header>Notifications</ion-list-header>\n\n    <ion-item>\n      <ion-label class="item-title">Accept push notifications</ion-label>\n      <ion-checkbox color="netflixRed" checked="true" item-end></ion-checkbox>\n    </ion-item>\n\n    <ion-item style="margin-top: -10px;">\n      <p class="item-subtitle">Notifications may include newly-</p>\n      <p class="item-subtitle">added movies, TV shows, personalised</p>\n      <p class="item-subtitle">suggestions or other notices</p>\n    </ion-item>\n\n    <ion-list-header>Downloads</ion-list-header>\n\n    <ion-item>\n      <ion-label class="item-title">Smart Downloads</ion-label>\n      <ion-checkbox color="netflixRed" checked="false" item-end></ion-checkbox>\n    </ion-item>\n\n    <ion-item style="margin-top: -10px;">\n      <p class="item-subtitle">Completely episodes will be deleted and</p>\n      <p class="item-subtitle">replaced with the next episodes, only</p>\n      <p class="item-subtitle">on Wi-Fi</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="item-title">Wi-Fi only</ion-label>\n      <ion-checkbox color="netflixRed" checked="true" item-end></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <p class="item-title">Download Video Quality</p>\n      <p class="item-subtitle">Standard</p>\n    </ion-item>\n\n    <ion-item>\n      <p class="item-title">Download Location</p>\n      <p class="item-subtitle">Internal Storage</p>\n    </ion-item>\n\n    <ion-item>\n      <p class="item-title">Internal Storage</p>\n      <p class="item-title" item-end>Default</p>\n    </ion-item>\n\n    <ion-item style="margin-top: -10px;">\n      <div class="light-grey-rectangle"></div>\n      <div class="red-rectangle"></div>\n      <div class="white-rectangle"></div>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <div class="light-grey-square"></div>\n        <p class="used-storage">Used - 10 GB</p>\n        <div class="red-square"></div>\n        <p class="used-storage">Netflix - 5 GB</p>\n        <div class="white-square"></div>\n        <p class="used-storage">Free - 15 GB</p>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=3.js.map