webpackJsonp([6],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieDetailsPageModule = (function () {
    function MovieDetailsPageModule() {
    }
    MovieDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */]),
            ],
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());

//# sourceMappingURL=movie-details.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
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


var MovieDetailsPage = (function () {
    function MovieDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovieDetailsPage');
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-details',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\movie-details\movie-details.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-buttons right>\n      <button ion-button icon-only color="netflixWhite">\n        <ion-icon name="logo-rss" item-end></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="netflixWhite">\n        <ion-icon name="md-share" item-end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen padding>\n  <img src="../../assets/imgs/john-wick-2.jpg">\n\n  <p class="title">John Wick: Chapter Two</p>\n\n  <ion-row class="movie-details-row">\n    <p class="match-percentage">99% Match</p>\n    <p>2017</p>\n    <p>MA 15+</p>\n    <p>2h 2m</p>\n  </ion-row>\n\n  <ion-row class="movie-summary-row">\n    <p>Forced to honor a debt from his past life, John</p>\n    <p>Wick assassinates a target he has no wish to kill,</p>\n    <p>then faces betrayal at the hands of his sponsor.</p>\n  </ion-row>\n\n  <ion-row class="movie-starring-row">\n    <p>\n      <strong>Starring:</strong> Keanu Reeves, Riccardo Scamarcio, Ian McShane</p>\n    <p>\n      <strong>Director:</strong> Chad Stahelski</p>\n  </ion-row>\n\n  <ion-row class="list-like-download-row">\n    <ion-col text-center col-25>\n      <button ion-button icon-only clear color="netflixWhite">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n      <p>My List</p>\n    </ion-col>\n\n    <ion-col text-center col-25>\n      <button ion-button icon-only clear color="netflixWhite">\n        <ion-icon name="md-thumbs-up"></ion-icon>\n      </button>\n      <p>Rate</p>\n    </ion-col>\n\n    <ion-col text-center col-25>\n      <button ion-button icon-only clear color="netflixWhite">\n        <ion-icon name="md-download"></ion-icon>\n      </button>\n      <p>Download</p>\n    </ion-col>\n\n    <ion-col col-25></ion-col>\n  </ion-row>\n\n  <p class="more-like-this-title">More like this</p>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/brooklyn-99.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/crown.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/damnation.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/everything-sucks.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/end-of-fucking-world.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/seven-seconds.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/sons-of-anarchy.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/wolf-wall-street.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/where-we-first.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-left: 0px;">\n    <ion-col col-4>\n      <img src="../../assets/imgs/john-wick-2.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/suits.png" style="width:100%">\n    </ion-col>\n\n    <ion-col col-4>\n      <img src="../../assets/imgs/black-lightning.png" style="width:100%">\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\movie-details\movie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

//# sourceMappingURL=movie-details.js.map

/***/ })

});
//# sourceMappingURL=6.js.map