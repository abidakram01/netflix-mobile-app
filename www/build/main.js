webpackJsonp([14],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonPage; });
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


/**
 * Generated class for the ComingSoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComingSoonPage = (function () {
    function ComingSoonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComingSoonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingSoonPage');
    };
    ComingSoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coming-soon',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\coming-soon\coming-soon.html"*/'<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let movie of movies">\n      <img src="{{ movie.picture }}">\n\n      <ion-row>\n        <ion-col col-8>\n          <p class="item-title">{{ movie.title }}</p>\n        </ion-col>\n\n        <ion-col col-4>\n          <button ion-button clear color="netflixWhite">\n            <ion-icon name=\'md-add\'></ion-icon>\n            <p>My List</p>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <p class="item-summary line-break">{{ movie.description }}</p>\n      </ion-row>\n\n      <ion-row>\n        <p class="coming-date">Coming 27 February</p>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\coming-soon\coming-soon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ComingSoonPage);
    return ComingSoonPage;
}());

//# sourceMappingURL=coming-soon.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
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


var DownloadsPage = (function () {
    function DownloadsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DownloadsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DownloadsPage');
    };
    DownloadsPage.prototype.goToAvailableDownloads = function () {
        this.navCtrl.push('HorizontalListPage', { title: "Available Downloads" });
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-downloads',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\downloads\downloads.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Downloads</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row class="smart-downloads-row">\n    <ion-col col-10>\n      <ion-row>\n        <p class="item-title">Smart Downloads</p>\n      </ion-row>\n      <ion-row>\n        <p class="item-sub-title">Completed episodes will be deleted and replaced with the next episodes, only on Wi-Fi.</p>\n      </ion-row>\n    </ion-col>\n\n    <ion-col col-2>\n      <ion-toggle checked="false" color="netflixRed"></ion-toggle>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="movies-shows-row">\n    <ion-col text-center>\n      <button ion-button clear color="netflixWhite">\n        <ion-icon name=\'md-download\'></ion-icon>\n      </button>\n\n      <p>Movies and TV show that you download appear here.</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="find-downloads-row">\n    <ion-col text-center>\n      <button ion-button icon-start color="netflixWhite" (click)="goToAvailableDownloads()">\n        FIND SOMETHING TO DOWNLOAD\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\downloads\downloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popularMovies = [];
        this.trendingMovies = [];
        this.myMovies = [];
        this.popularMovies = __WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].shuffle(__WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].initialiseMovies());
        this.trendingMovies = __WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].shuffle(__WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].initialiseMovies());
        this.myMovies = __WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].shuffle(__WEBPACK_IMPORTED_MODULE_2__data_MoviesInitialiser__["a" /* MoviesInitialiser */].initialiseMovies());
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToShowDetails = function () {
        this.navCtrl.push('ShowDetailsPage');
    };
    HomePage.prototype.goToMovieDetails = function () {
        this.navCtrl.push('MovieDetailsPage');
    };
    HomePage.prototype.playVideoTrailer = function () {
        this.navCtrl.push('VideoPlaybackPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar align-title="center" transparent>\n    <ion-title>\n      <img src="../../assets/imgs/netflix-logo.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen padding #pageContent>\n  <div class="image">\n    <img src="../../assets/imgs/black-lightning-poster3.png">\n  </div>\n\n  <div class="scroll-container">\n    <ion-row text-center>\n      <ion-col>\n        <p>New episode coming March 6th</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="series-button" col-4 text-center>\n        <button ion-button clear color="netflixWhite">\n          <ion-icon name=\'md-add\'></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col class="series-button" col-4 text-center>\n        <button ion-button icon-start color="netflixWhite" (click)="playVideoTrailer()">\n          <ion-icon name=\'ios-play\'></ion-icon>\n          PLAY\n        </button>\n      </ion-col>\n\n      <ion-col class="series-button" col-4 text-center>\n        <button ion-button clear color="netflixWhite">\n          <ion-icon name=\'ios-information-circle-outline\'></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <div class="item-title">Popular on Netflix</div>\n\n    <ion-scroll scrollX="true" scroll-avatar>\n      <ion-list>\n        <ion-col *ngFor="let movie of popularMovies" class="scroll-item">\n          <img src="{{ movie }}" (click)="goToMovieDetails()" />\n        </ion-col>\n      </ion-list>\n    </ion-scroll>\n\n    <div class="item-title">Trending Now</div>\n\n    <ion-scroll scrollX="true" scroll-avatar>\n      <ion-list>\n        <ion-col *ngFor="let movie of trendingMovies" class="scroll-item">\n          <img src="{{ movie }}" (click)="goToShowDetails()" />\n        </ion-col>\n      </ion-list>\n    </ion-scroll>\n\n    <div class="item-title">Continue watching for Mr John Doe</div>\n\n    <ion-scroll scrollX="true" scroll-avatar>\n      <ion-list>\n        <ion-col *ngFor="let movie of myMovies" class="scroll-item">\n          <img src="{{ movie }}" (click)="goToMovieDetails()" />\n        </ion-col>\n      </ion-list>\n    </ion-scroll>\n\n    <div class="item-title">Popular on Netflix</div>\n\n    <ion-scroll scrollX="true" scroll-avatar>\n      <ion-list>\n        <ion-col *ngFor="let movie of popularMovies" class="scroll-item">\n          <img src="{{ movie }}" (click)="goToShowDetails()" />\n        </ion-col>\n      </ion-list>\n    </ion-scroll>\n\n    <div class="item-title">Trending Now</div>\n\n    <ion-scroll scrollX="true" scroll-avatar>\n      <ion-list>\n        <ion-col *ngFor="let movie of trendingMovies" class="scroll-item">\n          <img src="{{ movie }}" (click)="goToMovieDetails()" />\n        </ion-col>\n      </ion-list>\n    </ion-scroll>\n\n    <div class="item-title">Continue watching for Mr John Doe</div>\n\n    <ion-scroll scrollX="true" scroll-avatar>\n      <ion-list>\n        <ion-col *ngFor="let movie of myMovies" class="scroll-item">\n          <img src="{{ movie }}" (click)="goToShowDetails()" />\n        </ion-col>\n      </ion-list>\n    </ion-scroll>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, app, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goToUsers = function () {
        this.navCtrl.push('UsersPage');
    };
    ProfilePage.prototype.goToNotifications = function () {
        this.navCtrl.push('NotificationsPage');
    };
    ProfilePage.prototype.goToMyList = function () {
        this.navCtrl.push('MylistPage');
    };
    ProfilePage.prototype.goToSettings = function () {
        this.navCtrl.push('SettingsPage');
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging out..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__["a" /* SignInPage */]);
        }, 2000);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-row (click)="goToUsers()">\n        <ion-col text-center col-2>\n          <img src="../../assets/imgs/netflix-avatar.png">\n        </ion-col>\n\n        <ion-col col-8>\n          <p>Mr John Doe</p>\n        </ion-col>\n\n        <ion-col text-center col-2>\n          <ion-icon name="md-repeat" item-end></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="top-menu-list">\n    <ion-item (click)="goToNotifications()">\n      <ion-icon name="md-notifications" item-start></ion-icon>\n      <p>Notifications</p>\n    </ion-item>\n\n    <ion-item (click)="goToMyList()">\n      <ion-icon name="md-checkmark" item-start></ion-icon>\n      <p>My List</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines class="user-menu-list">\n    <ion-item (click)="goToSettings()">\n      <p>App Settings</p>\n    </ion-item>\n\n    <ion-item>\n      <p>Account</p>\n    </ion-item>\n\n    <ion-item>\n      <p>About</p>\n    </ion-item>\n\n    <ion-item>\n      <p>Help</p>\n    </ion-item>\n\n    <ion-item (click)="signOut()">\n      <p>Sign Out</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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


var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'Available for Download' },
            { title: 'Netflix Originals' },
            { title: 'TV Shows' },
            { title: 'Actions' },
            { title: 'Australian Movies' },
            { title: 'Children & Family' },
            { title: 'Comedies' },
            { title: 'Documentaries' },
            { title: 'Drama' },
            { title: 'Horror' },
            { title: 'Independent' },
            { title: 'International' },
            { title: 'LGBTQ' },
            { title: 'Music & Musicals' },
            { title: 'Romance' },
            { title: 'Sci-Fi & Fantasy' },
            { title: 'Thrillers' },
            { title: 'Audio Description' }
        ];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.openPage = function (page) {
        if (page.title == 'Netflix Originals' || page.title == 'Audio Description') {
            this.navCtrl.push('GridListPage', { title: page.title });
        }
        else {
            this.navCtrl.push('HorizontalListPage', { title: page.title });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], SearchPage.prototype, "nav", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\search\search.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 text-center>\n        <button ion-button clear color="netflixWhite">\n          <ion-icon name=\'md-search\'></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col class="underline-col" col-8>\n        <ion-input type="text" placeholder="Titles, people & genres"></ion-input>\n      </ion-col>\n\n      <ion-col class="underline-col" col-2>\n        <button ion-button clear color="netflixWhite">\n          <ion-icon name=\'md-mic\'></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item ion-item *ngFor="let p of pages" (click)="openPage(p)" clear text-center>\n      {{p.title}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coming-soon/coming-soon.module": [
		280,
		13
	],
	"../pages/downloads/downloads.module": [
		281,
		12
	],
	"../pages/grid-list/grid-list.module": [
		282,
		8
	],
	"../pages/home/home.module": [
		283,
		9
	],
	"../pages/horizontal-list/horizontal-list.module": [
		284,
		7
	],
	"../pages/movie-details/movie-details.module": [
		285,
		6
	],
	"../pages/mylist/mylist.module": [
		287,
		5
	],
	"../pages/notifications/notifications.module": [
		286,
		4
	],
	"../pages/profile/profile.module": [
		288,
		11
	],
	"../pages/search/search.module": [
		289,
		10
	],
	"../pages/settings/settings.module": [
		290,
		3
	],
	"../pages/show-details/show-details.module": [
		291,
		2
	],
	"../pages/sign-in/sign-in.module": [
		159
	],
	"../pages/sign-up/sign-up.module": [
		160
	],
	"../pages/users/users.module": [
		292,
		1
	],
	"../pages/video-playback/video-playback.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__downloads_downloads__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__["a" /* ComingSoonPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__downloads_downloads__["a" /* DownloadsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\tabs\tabs.html"*/'<ion-tabs color="netflixBlack">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Search" tabIcon="md-search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Coming Soon" tabIcon="md-laptop"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Downloads" tabIcon="md-download"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="My Profile" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_coming_soon_coming_soon__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/coming-soon/coming-soon.module#ComingSoonPageModule', name: 'ComingSoonPage', segment: 'coming-soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grid-list/grid-list.module#GridListPageModule', name: 'GridListPage', segment: 'grid-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horizontal-list/horizontal-list.module#HorizontalListPageModule', name: 'HorizontalListPage', segment: 'horizontal-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mylist/mylist.module#MylistPageModule', name: 'MylistPage', segment: 'mylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-details/show-details.module#ShowDetailsPageModule', name: 'ShowDetailsPage', segment: 'show-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-playback/video-playback.module#VideoPlaybackPageModule', name: 'VideoPlaybackPage', segment: 'video-playback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in_module__["SignInPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up_module__["SignUpPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_up_sign_up__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_up_sign_up__["a" /* SignUpPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesInitialiser; });
var MoviesInitialiser = (function () {
    function MoviesInitialiser() {
    }
    MoviesInitialiser.initialiseMovies = function () {
        var movies = [];
        movies.push("../../assets/imgs/john-wick-2.png");
        movies.push("../../assets/imgs/suits.png");
        movies.push("../../assets/imgs/black-lightning.png");
        movies.push("../../assets/imgs/blacklist.png");
        movies.push("../../assets/imgs/boss.png");
        movies.push("../../assets/imgs/brooklyn-99.png");
        movies.push("../../assets/imgs/cloverfield-paradox.png");
        movies.push("../../assets/imgs/crown.png");
        movies.push("../../assets/imgs/damnation.png");
        movies.push("../../assets/imgs/dirty-money.png");
        movies.push("../../assets/imgs/end-of-fucking-world.png");
        movies.push("../../assets/imgs/everything-sucks.png");
        movies.push("../../assets/imgs/first-team-juventus.png");
        movies.push("../../assets/imgs/frankenstein-chronicles.png");
        movies.push("../../assets/imgs/full-metal-alchemist.png");
        movies.push("../../assets/imgs/grimm.png");
        movies.push("../../assets/imgs/guardians-galaxy-2.png");
        movies.push("../../assets/imgs/huntsman.png");
        movies.push("../../assets/imgs/joel-mchale-show.png");
        movies.push("../../assets/imgs/lucifer.png");
        movies.push("../../assets/imgs/mindhunter.png");
        movies.push("../../assets/imgs/mute.png");
        movies.push("../../assets/imgs/people-vs-ojsimpson.png");
        movies.push("../../assets/imgs/pirates-carribean.png");
        movies.push("../../assets/imgs/rick-morty.png");
        movies.push("../../assets/imgs/seriously-funny.png");
        movies.push("../../assets/imgs/seven-seconds.png");
        movies.push("../../assets/imgs/sons-of-anarchy.png");
        movies.push("../../assets/imgs/star-trek.png");
        movies.push("../../assets/imgs/tamborine.png");
        movies.push("../../assets/imgs/vikings.png");
        movies.push("../../assets/imgs/where-we-first.png");
        movies.push("../../assets/imgs/wolf-wall-street.png");
        return movies;
    };
    MoviesInitialiser.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    return MoviesInitialiser;
}());

//# sourceMappingURL=MoviesInitialiser.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInPage = (function () {
    function SignInPage(navCtrl, navParams, app, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.signIn = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging in..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }, 2000);
    };
    SignInPage.prototype.goToSignUp = function () {
        if (this.navCtrl.canGoBack()) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.push('SignUpPage');
        }
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\sign-in\sign-in.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="../../assets/imgs/netflix-logo.png">\n    </ion-title>\n\n    <ion-buttons right>\n      <button class="help" ion-button clear>HELP</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-scroll" text-center padding>\n  <ion-row>\n    <p class="sign-in-title">Sign in</p>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <button color="netflixRed" ion-button round full (click)="signIn()">SIGN IN</button>\n  </ion-row>\n\n  <ion-row style="height: 20%; margin-top: 40%;">\n    <ion-col>\n      <p>Forgot your email or password?</p>\n      <p (click)="goToSignUp()">New to Netflix? <strong>Sign up now.</strong></p>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
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


var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpSegment = "cancel";
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signIn = function () {
        this.navCtrl.push('SignInPage');
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\sign-up\sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="../../assets/imgs/netflix-logo.png">\n    </ion-title>\n\n    <ion-buttons right>\n      <button class="navbar-button" ion-button clear (click)="signIn()">SIGN IN</button>\n      <button class="navbar-button" ion-button clear>HELP</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="image">\n    <img src="../../assets/imgs/netflix-signup.png">\n  </div>\n\n  <ion-row style="margin-top: -60px;">\n    <ion-col text-center>\n      <p class="title">See what\'s next.</p>\n      <p class="subtitle">WATCH ANYWHERE. CANCEL AT ANY TIME.</p>\n    </ion-col>\n  </ion-row>\n\n  <div padding>\n    <ion-segment [(ngModel)]="signUpSegment">\n      <ion-segment-button value="cancel">\n        <button ion-button clear>\n          <ion-icon name="md-close-circle"></ion-icon>\n          <p>Cancel</p>\n        </button>\n      </ion-segment-button>\n\n      <ion-segment-button value="devices">\n        <button ion-button clear>\n          <ion-icon name="md-desktop"></ion-icon>\n          <p>Devices</p>\n        </button>\n      </ion-segment-button>\n\n      <ion-segment-button value="price">\n        <button ion-button clear>\n          <ion-icon name="md-pricetags"></ion-icon>\n          <p>Price</p>\n        </button>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="signUpSegment">\n    <div class="netflixSegment cancelSegment" *ngSwitchCase="\'cancel\'">\n      <ion-col text-center>\n        <p class="segment-title">If you decide Netflix isn\'t for you - no</p>\n        <p class="segment-title">problem. No commitment. Cancel online</p>\n        <p class="segment-title">at any time.</p>\n\n        <button color="netflixRed" ion-button round block>JOIN FREE FOR A MONTH</button>\n      </ion-col>\n    </div>\n\n    <div class="netflixSegment devicesSegment" *ngSwitchCase="\'devices\'">\n      <ion-col text-center>\n        <p class="segment-title">Watch TV shows and movies at</p>\n        <p class="segment-title">any time, anywhere -</p>\n        <p class="segment-title">personalised for you.</p>\n\n        <button color="netflixRed" ion-button round block>JOIN FREE FOR A MONTH</button>\n      </ion-col>\n\n      <img src="../../assets/imgs/devices-netflix.png">\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="devices-segment-title">Watch on your TV</p>\n\n          <p class="devices-segment-subtitle">Smart Tvs, Playstation, Xbox, Chromecast,</p>\n          <p class="devices-segment-subtitle">Apple TV, Blu-ray players and more.</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="devices-segment-title">Watch instantly or download for later</p>\n\n          <p class="devices-segment-subtitle">Available on phone and tablet,</p>\n          <p class="devices-segment-subtitle">wherever you go.</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="devices-segment-title">Use any computer</p>\n\n          <p class="devices-segment-subtitle">Watch instantly in your browser.</p>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="netflixSegment priceSegment" *ngSwitchCase="\'price\'">\n      <ion-col text-center>\n        <p class="segment-title">Choose one plan and watch</p>\n        <p class="segment-title">everything on Netflix.</p>\n\n        <button color="netflixRed" ion-button round block>JOIN FREE FOR A MONTH</button>\n      </ion-col>\n\n      <ion-row style="margin-top: 40px;">\n        <ion-col text-center col-4>\n          <p class="table-column">BASIC</p>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <p class="table-column">STANDARD</p>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <p class="table-column">PREMIUM</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">Monthly price after free month ends on 27/3/18</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <p class="table-value">$9.99</p>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <p class="table-value">$13.99</p>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <p class="table-value">$17.99</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">HD available</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <ion-icon name="md-close" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">Ultra HD available</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <ion-icon name="md-close" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-close" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">Screens you can watch on at the same time</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <p class="table-value">1</p>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <p class="table-value">2</p>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <p class="table-value">4</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">Watch on your laptop, TV, phone & tablet</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">Unlimited movies and TV shows</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">Cancel at any time</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p class="table-value">First month free</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n\n        <ion-col text-center col-4>\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <p class="questions">Questions? Phone 1800 071 578</p>\n\n  <ion-row>\n    <ion-col col-6>\n      <p class="footer-text">Help Centre</p>\n    </ion-col>\n\n    <ion-col col-6>\n      <p class="footer-text">Terms of Use</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-6>\n      <p class="footer-text">Privacy</p>\n    </ion-col>\n\n    <ion-col col-6>\n      <p class="footer-text">Cookie Preferences</p>\n    </ion-col>\n  </ion-row>\n\n  <p class="footer-text">Netflix Australia</p>\n</ion-content>'/*ion-inline-end:"C:\Users\cviney\ion-netflix\ionNetflix\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map