webpackJsonp([1],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersPageModule = (function () {
    function UsersPageModule() {
    }
    UsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */]),
            ],
        })
    ], UsersPageModule);
    return UsersPageModule;
}());

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
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


var UsersPage = (function () {
    function UsersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showEditIcon = false;
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    UsersPage.prototype.editProfiles = function () {
        this.showEditIcon = true;
    };
    UsersPage.prototype.cancelEdit = function () {
        this.showEditIcon = false;
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\users\users.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="../../assets/imgs/netflix-logo.png">\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only color="netflixWhite" *ngIf="!showEditIcon" (click)="editProfiles()">\n        <ion-icon name="md-create" item-end></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="netflixWhite" *ngIf="showEditIcon" (click)="cancelEdit()">\n        <ion-icon name="md-close-circle" item-end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-scroll" text-center padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class="who-watching">Who\'s watching?</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class="user-thumbnail">\n          <img src="../../assets/imgs/orange-user.png" [class.low-opacity]="showEditIcon">\n          <p>Mr John Doe</p>\n          <ion-icon *ngIf="showEditIcon" name="md-create"></ion-icon>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div class="user-thumbnail">\n          <img src="../../assets/imgs/blue-user.jpg" [class.low-opacity]="showEditIcon">\n          <p>Parasite 1</p>\n          <ion-icon *ngIf="showEditIcon" name="md-create"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class="user-thumbnail">\n          <img src="../../assets/imgs/yellow-user.png" [class.low-opacity]="showEditIcon">\n          <p>Parasite 2</p>\n          <ion-icon *ngIf="showEditIcon" name="md-create"></ion-icon>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div class="user-thumbnail">\n          <img src="../../assets/imgs/kids-user.png" [class.low-opacity]="showEditIcon">\n          <p>Kids</p>\n          <ion-icon *ngIf="showEditIcon" name="md-create"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-icon class="add-profile" name="md-add-circle" color="netflixWhite"></ion-icon>\n        <p>Add Profile</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\users\users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ })

});
//# sourceMappingURL=1.js.map