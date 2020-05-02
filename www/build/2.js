webpackJsonp([2],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsPageModule", function() { return ShowDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_details__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowDetailsPageModule = (function () {
    function ShowDetailsPageModule() {
    }
    ShowDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_details__["a" /* ShowDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_details__["a" /* ShowDetailsPage */]),
            ],
        })
    ], ShowDetailsPageModule);
    return ShowDetailsPageModule;
}());

//# sourceMappingURL=show-details.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDetailsPage; });
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


var ShowDetailsPage = (function () {
    function ShowDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShowDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowDetailsPage');
    };
    ShowDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-details',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\show-details\show-details.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-buttons right>\n      <button ion-button icon-only color="netflixWhite">\n        <ion-icon name="logo-rss" item-end></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="netflixWhite">\n        <ion-icon name="md-share" item-end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen padding>\n  <img src="../../assets/imgs/suits_main.jpg">\n\n  <p class="title">Suits</p>\n\n  <ion-row class="movie-details-row">\n    <p>2016</p>\n    <p>M</p>\n    <p>6 seasons</p>\n  </ion-row>\n\n  <ion-row class="movie-summary-row">\n    <p>When he impresses a big lawyer with his razor-sharp</p>\n    <p>mind, a college dropout scores a coveted associate</p>\n    <p>job, even though he has no legal credentials.</p>\n  </ion-row>\n\n  <ion-row class="movie-starring-row">\n    <p>\n      <strong>Starring:</strong> Gabriel Macht, Patrick J. Adams, Rick Hoffman</p>\n    <p>\n      <strong>Director:</strong> Aaron Korsh</p>\n  </ion-row>\n\n  <ion-row class="list-like-download-row">\n    <ion-col text-center col-25>\n      <button ion-button icon-only clear color="netflixWhite">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n      <p>My List</p>\n    </ion-col>\n\n    <ion-col text-center col-25>\n      <button ion-button icon-only clear color="netflixWhite">\n        <ion-icon name="md-thumbs-up"></ion-icon>\n      </button>\n      <p>Rate</p>\n    </ion-col>\n\n    <ion-col col-25></ion-col>\n    <ion-col col-25></ion-col>\n  </ion-row>\n\n  <ion-select>\n    <ion-option selected value="1">Season 1</ion-option>\n    <ion-option value="2">Season 2</ion-option>\n    <ion-option value="3">Season 3</ion-option>\n    <ion-option value="4">Season 4</ion-option>\n    <ion-option value="5">Season 5</ion-option>\n    <ion-option value="6">Season 6</ion-option>\n  </ion-select>\n\n  <ion-list no-lines>\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits1.png">\n\n      <ion-col>\n        <p class="episode-title">1. Pilot Part 1 & 2</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits2.png">\n\n      <ion-col>\n        <p class="episode-title">2. Errors and Omissions</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits3.png">\n\n      <ion-col>\n        <p class="episode-title">3. Inside Track</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits4.png">\n\n      <ion-col>\n        <p class="episode-title">4. Dirty Little Secrets</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits5.png">\n\n      <ion-col>\n        <p class="episode-title">5. Bail Out</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits6.png">\n\n      <ion-col>\n        <p class="episode-title">6. Tricks of the Trade</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits7.png">\n\n      <ion-col>\n        <p class="episode-title">7. Play the Man</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits8.png">\n\n      <ion-col>\n        <p class="episode-title">8. Identity Crisis</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits9.png">\n\n      <ion-col>\n        <p class="episode-title">9. Undefeated</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits10.png">\n\n      <ion-col>\n        <p class="episode-title">10. The Shelf Life</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits11.png">\n\n      <ion-col>\n        <p class="episode-title">11. Rules of the Game</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <img item-start src="../../assets/imgs/suits12.png">\n\n      <ion-col>\n        <p class="episode-title">12. Dog Fight</p>\n        <p class="episode-duration">1h 21m</p>\n      </ion-col>\n\n      <ion-icon name="md-download" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item style="margin-top: -20px;">\n      <ion-row>\n        <p>When Harvey\'s promotion requires him to recruit and hire</p>\n        <p>a graduate of Harvard Law, he chooses Mike Ross. But</p>\n        <p>Mike doesn\'t actually have a law degree.</p>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\show-details\show-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShowDetailsPage);
    return ShowDetailsPage;
}());

//# sourceMappingURL=show-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map