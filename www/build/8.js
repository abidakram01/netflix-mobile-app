webpackJsonp([8],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListPageModule", function() { return GridListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_list__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GridListPageModule = (function () {
    function GridListPageModule() {
    }
    GridListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__grid_list__["a" /* GridListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grid_list__["a" /* GridListPage */]),
            ],
        })
    ], GridListPageModule);
    return GridListPageModule;
}());

//# sourceMappingURL=grid-list.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridListPage; });
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


var GridListPage = (function () {
    function GridListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = navParams.get('title');
    }
    GridListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GridListPage');
    };
    GridListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grid-list',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\grid-list\grid-list.html"*/'<ion-header no-border>\n  <ion-navbar align-title="center">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/brooklyn-99.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/crown.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/damnation.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/everything-sucks.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/end-of-fucking-world.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/seven-seconds.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/sons-of-anarchy.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/wolf-wall-street.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/where-we-first.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/john-wick-2.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/suits.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/black-lightning.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/brooklyn-99.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/crown.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/damnation.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/everything-sucks.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/end-of-fucking-world.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/seven-seconds.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/john-wick-2.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/suits.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/black-lightning.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/sons-of-anarchy.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/wolf-wall-street.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/where-we-first.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/brooklyn-99.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/crown.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/damnation.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/everything-sucks.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/end-of-fucking-world.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/seven-seconds.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/sons-of-anarchy.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/wolf-wall-street.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/where-we-first.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/john-wick-2.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/suits.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/black-lightning.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/brooklyn-99.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/crown.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/damnation.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/everything-sucks.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/end-of-fucking-world.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/seven-seconds.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/john-wick-2.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/suits.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/black-lightning.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/sons-of-anarchy.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/wolf-wall-street.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/where-we-first.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\grid-list\grid-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GridListPage);
    return GridListPage;
}());

//# sourceMappingURL=grid-list.js.map

/***/ })

});
//# sourceMappingURL=8.js.map