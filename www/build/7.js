webpackJsonp([7],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalListPageModule", function() { return HorizontalListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horizontal_list__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HorizontalListPageModule = (function () {
    function HorizontalListPageModule() {
    }
    HorizontalListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horizontal_list__["a" /* HorizontalListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horizontal_list__["a" /* HorizontalListPage */]),
            ],
        })
    ], HorizontalListPageModule);
    return HorizontalListPageModule;
}());

//# sourceMappingURL=horizontal-list.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HorizontalListPage = (function () {
    function HorizontalListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popularMovies = [];
        this.trendingMovies = [];
        this.myMovies = [];
        this.title = navParams.get('title');
        this.popularMovies = __WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].shuffle(__WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].initialiseMovies());
        this.trendingMovies = __WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].shuffle(__WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].initialiseMovies());
        this.myMovies = __WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].shuffle(__WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].initialiseMovies());
    }
    HorizontalListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorizontalListPage');
    };
    HorizontalListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horizontal-list',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\horizontal-list\horizontal-list.html"*/'<ion-header no-border>\n  <ion-navbar align-title="center">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="item-title">Popular on Netflix</div>\n\n  <ion-scroll scrollX="true" scroll-avatar>\n    <ion-list>\n      <ion-col *ngFor="let movie of popularMovies" class="scroll-item">\n        <img src="{{ movie }}" />\n      </ion-col>\n    </ion-list>\n  </ion-scroll>\n\n  <div class="item-title">Trending Now</div>\n\n  <ion-scroll scrollX="true" scroll-avatar>\n    <ion-list>\n      <ion-col *ngFor="let movie of trendingMovies" class="scroll-item">\n        <img src="{{ movie }}" />\n      </ion-col>\n    </ion-list>\n  </ion-scroll>\n\n  <div class="item-title">Continue watching for Mr John Doe</div>\n\n  <ion-scroll scrollX="true" scroll-avatar>\n    <ion-list>\n      <ion-col *ngFor="let movie of myMovies" class="scroll-item">\n        <img src="{{ movie }}" />\n      </ion-col>\n    </ion-list>\n  </ion-scroll>\n\n  <div class="item-title">Popular on Netflix</div>\n\n  <ion-scroll scrollX="true" scroll-avatar>\n    <ion-list>\n      <ion-col *ngFor="let movie of popularMovies" class="scroll-item">\n        <img src="{{ movie }}" />\n      </ion-col>\n    </ion-list>\n  </ion-scroll>\n\n  <div class="item-title">Trending Now</div>\n\n  <ion-scroll scrollX="true" scroll-avatar>\n    <ion-list>\n      <ion-col *ngFor="let movie of trendingMovies" class="scroll-item">\n        <img src="{{ movie }}" />\n      </ion-col>\n    </ion-list>\n  </ion-scroll>\n\n  <div class="item-title">Continue watching for Mr John Doe</div>\n\n  <ion-scroll scrollX="true" scroll-avatar>\n    <ion-list>\n      <ion-col *ngFor="let movie of myMovies" class="scroll-item">\n        <img src="{{ movie }}" />\n      </ion-col>\n    </ion-list>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\horizontal-list\horizontal-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], HorizontalListPage);
    return HorizontalListPage;
    var _a, _b;
}());

//# sourceMappingURL=horizontal-list.js.map

/***/ })

});
//# sourceMappingURL=7.js.map