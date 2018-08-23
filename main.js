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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- shell page -->\n<nav class=\"navbar navbar-expand-md bg-primary navbar-dark shadow-sm\">\n  <!-- Brand -->\n  <a class=\"navbar-brand text-white\" [routerLink]=\"['/home']\">Country Explorer</a>\n\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Navbar links -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a style=\"text-decoration: none;color: #ffffff;font-weight: bold\" [routerLink]=\"['/home']\">Home</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item m-1\">\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#currenciesAll\"\n                data-backdrop=\"static\" data-keyboard=\"false\">Currency Filter\n        </button>\n      </li>\n      <li class=\"nav-item m-1\">\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#languagesAll\"\n                data-backdrop=\"static\" data-keyboard=\"false\">Language Filter\n        </button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- currency modal -->\n<div class=\"modal fade\" id=\"currenciesAll\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"text-center\">Select a currency to get countries</h4>\n            </div>\n            <div *ngFor=\"let item of allCurrency\" class=\"col-md-2 col-sm-6\">\n              <input type=\"radio\" name=\"options\" (click)=\"codeForRouting = item\">{{item}}\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-body\">\n\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"showCurrencyFiltered()\" type=\"button\" class=\"btn btn-default bg-primary\" data-dismiss=\"modal\">\n          Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-default bg-danger\" data-dismiss=\"modal\">Close\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- language modal -->\n<div class=\"modal fade\" id=\"languagesAll\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"text-center\">Select a language to get countries</h4>\n            </div>\n            <div *ngFor=\"let item of allLanguages\" class=\"col-md-2\">\n              <input type=\"radio\" name=\"options\" (click)=\"codeForRouting = item\">{{item}}\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-body\">\n\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"showLanguageFiltered()\" type=\"button\" class=\"btn btn-default bg-primary\" data-dismiss=\"modal\">\n          Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-default bg-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _countryapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countryapi.service */ "./src/app/countryapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
    function AppComponent(route, router, countryApi, location) {
        this.route = route;
        this.router = router;
        this.countryApi = countryApi;
        this.location = location;
        this.title = 'app';
        this.codeForRouting = '';
        this.allCurrency = [];
        this.allLanguages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var temp1, temp2;
        var final1 = [];
        var final2 = [];
        this.countryApi.getAllCurrencies().subscribe(function (data) {
            temp1 = data;
            for (var i = 0; i < temp1.length; i++) {
                final1.push(temp1[i]['currencies'][0].code);
            }
            final1 = final1.filter(function (element) {
                return element !== undefined && element !== null && element !== '';
            });
            final1 = final1.filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            });
            final1 = final1.sort();
            console.log(final1);
            final1 = final1.filter(function (e) { return e !== '(none)'; });
            _this.allCurrency = final1;
        }, function (error1) { return console.log(error1); });
        this.countryApi.getAlllanguages().subscribe(function (data) {
            temp2 = data;
            for (var i = 0; i < temp2.length; i++) {
                final2.push(temp2[i]['languages'][0]['iso639_1']);
            }
            final2 = final2.filter(function (element) {
                return element !== undefined && element !== null && element !== '';
            });
            final2 = final2.filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            });
            final2 = final2.sort();
            final2 = final2.filter(function (e) { return e !== '(none)'; });
            console.log(final2);
            _this.allLanguages = final2;
        }, function (error1) {
            alert('Internet Error');
        });
    };
    AppComponent.prototype.showCurrencyFiltered = function () {
        if (this.codeForRouting !== '') {
            this.router.navigate(['/region', JSON.stringify({ 'currency': this.codeForRouting })]);
        }
        else {
            alert('please select a currency');
        }
    };
    AppComponent.prototype.showLanguageFiltered = function () {
        if (this.codeForRouting !== '') {
            this.router.navigate(['/region', JSON.stringify({ 'language': this.codeForRouting })]);
        }
        else {
            alert('please select a language');
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _countryapi_service__WEBPACK_IMPORTED_MODULE_2__["CountryapiService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/countries/countries.component.ts");
/* harmony import */ var _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country-details/country-details.component */ "./src/app/country-details/country-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _countryapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countryapi.service */ "./src/app/countryapi.service.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_3__["RegionComponent"],
                _countries_countries_component__WEBPACK_IMPORTED_MODULE_4__["CountriesComponent"],
                _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_5__["CountryDetailsComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: 'home', component: _region_region_component__WEBPACK_IMPORTED_MODULE_3__["RegionComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'region/:id', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_4__["CountriesComponent"] },
                    { path: 'country/:alphaCode', component: _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_5__["CountryDetailsComponent"] },
                    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"] }
                ])
            ],
            providers: [_countryapi_service__WEBPACK_IMPORTED_MODULE_8__["CountryapiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/countries/countries.component.css":
/*!***************************************************!*\
  !*** ./src/app/countries/countries.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n  color: #ffffff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/countries/countries.component.html":
/*!****************************************************!*\
  !*** ./src/app/countries/countries.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n\n\n    <div *ngIf=\"!(isVisible)\" class=\"text-center\">\n      <div class=\"loading\">\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"text-center col-sm-12\" *ngIf=\"allCountries.length > 0 && isVisible\">\n        <div style=\"margin: 2%\">\n          <p class=\"m-2 current-region\" style=\"color: #000000\">{{currentRegion}}</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"allCountries.length > 0 && isVisible\">\n      <div [@fadeIn]=\"''\" *ngFor=\"let country of allCountries\" class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 card-holder-no-outline\">\n        <div class=\"card-container\" [routerLink]=\"['/country',country['alpha3Code']]\" style=\"margin: 2%;\"\n             title=\"{{'Click here to get details of '+country.name}}\">\n          <div class=\"card\">\n            <img class=\"flag-control\" [attr.src]=\"country['flag']\" width=\"100%\" alt=\"question image\"\n                 style=\"width:100%\">\n            <div class=\"card-container text-center bg-dark\">\n              <p class=\"font-weight-bold\">\n                {{country['name']}}\n              </p>\n              <p class=\"text-white font-weight-bold\">\n                Capital : {{country['capital']}}\n              </p>\n              <p class=\"text-white font-weight-bold\">\n                Region :{{country['region']}}\n              </p>\n              <p class=\"text-white font-weight-bold\">\n                Sub Region : {{country['subregion']}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"allCountries.length > 0 && isVisible\">\n      <div class=\"text-center col-sm-12\">\n        <button class=\"btn btn-primary m-5\" (click)=\"goBack()\">Go Back</button>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/countries/countries.component.ts":
/*!**************************************************!*\
  !*** ./src/app/countries/countries.component.ts ***!
  \**************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _countryapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countryapi.service */ "./src/app/countryapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(countryApi, route, router, location) {
        this.countryApi = countryApi;
        this.route = route;
        this.router = router;
        this.location = location;
        this.isVisible = false;
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            _this.isVisible = false;
            var flag = _this.IsJsonString(param.get('id'));
            if (flag) {
                var jsonParam = JSON.parse(param.get('id'));
                console.log(jsonParam);
                if (jsonParam.hasOwnProperty('currency')) {
                    _this.getCountriesByCurrency(jsonParam['currency']);
                }
                if (jsonParam.hasOwnProperty('language')) {
                    _this.getCountriesByLanguage(jsonParam['language']);
                }
            }
            else {
                _this.getCountriesByRegionId(param.get('id'));
            }
        }, function (error) {
            console.log('no param found');
        });
    };
    CountriesComponent.prototype.getCountriesByRegionId = function (param) {
        var _this = this;
        this.allCountries = this.countryApi.getAllCountries(param).subscribe(function (data) {
            _this.currentRegion = param;
            console.log(data);
            _this.allCountries = data;
            _this.isVisible = true;
        }, function (error) {
            alert('Internet Error');
        });
    };
    CountriesComponent.prototype.getCountriesByCurrency = function (currency) {
        var _this = this;
        this.allCountries = this.countryApi.getCountryDetailsByCurrency(currency).subscribe(function (data) {
            _this.currentRegion = '';
            console.log(data);
            _this.allCountries = data;
            _this.isVisible = true;
        }, function (error) {
            alert('Internet Error');
        });
    };
    CountriesComponent.prototype.getCountriesByLanguage = function (lang) {
        var _this = this;
        this.allCountries = this.countryApi.getCountryDetailsByLanguage(lang).subscribe(function (data) {
            _this.currentRegion = '';
            console.log(data);
            _this.allCountries = data;
            _this.isVisible = true;
        }, function (error) {
            alert('Internet Error');
        });
    };
    CountriesComponent.prototype.goBack = function () {
        this.location.back();
    };
    CountriesComponent.prototype.IsJsonString = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    CountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/countries/countries.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: '1' })),
                    ]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_countryapi_service__WEBPACK_IMPORTED_MODULE_1__["CountryapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/country-details/country-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/country-details/country-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country-details/country-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/country-details/country-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!(isVisible)\" class=\"text-center\">\n  <div class=\"loading\">\n    <div class=\"loading-bar\"></div>\n    <div class=\"loading-bar\"></div>\n    <div class=\"loading-bar\"></div>\n    <div class=\"loading-bar\"></div>\n  </div>\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"isVisible\">\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 m-auto bg-dark text-center p-4\">\n      <p class=\"m-2\" style=\"font-size: 30px;color: #ffffff\"><b>{{currentCountry['name']}}</b></p>\n      <img class=\"img-fluid big-flag-control\" attr.src=\"{{currentCountry['flag']}}\"\n           title=\"{{currentCountry['name'] + 'flag'}}\"\n           alt=\"{{currentCountry['name'] + 'flag'}}\">\n    </div>\n\n    <div class=\"col-sm-12 text-center\">\n      <div class=\"m-1\" style=\"border: 2px solid #000000\">\n        <p class=\"m-1\"><b>Top Level Domain</b> : <i>{{topLevelDomain}}</i></p>\n        <p class=\"m-1\"><b>Alpha 2 Code</b> : <i>{{currentCountry['alpha2Code']}}</i></p>\n        <p class=\"m-1\"><b>Alpha 3 Code</b> : <i>{{currentCountry['alpha3Code']}}</i></p>\n        <p class=\"m-1\"><b>Calling Codes</b> : <i>{{callingCodes}}</i></p>\n        <p class=\"m-1\"><b>Capital of The Country</b> : <i>{{currentCountry['capital']}}</i></p>\n        <p class=\"m-1\"><b>Alternate Spellings</b> : <i>{{altSpellings}}</i></p>\n        <p class=\"m-1\"><b>Country Resides in The Region of</b> : <i>{{currentCountry['region']}}</i></p>\n        <p class=\"m-1\"><b>Sub Region of The Country </b> : <i>{{currentCountry['subregion']}}</i></p>\n        <p class=\"m-1\"><b>Country Current Population</b> : <i>{{currentCountry['population']}}</i> million</p>\n        <p class=\"m-1\"><b>Latitude and Longitude</b> : <i>{{latLang}}</i></p>\n        <p class=\"m-1\"><b>Demonym of the Country</b> : <i>{{currentCountry['demonym']}}</i></p>\n        <p class=\"m-1\"><b>Area of the Country is </b> : <i>{{currentCountry['area']}}</i> KM<sup>2</sup></p>\n        <p class=\"m-1\"><b>Gini index</b> : <i>{{currentCountry['gini']}}</i></p>\n        <p class=\"m-1\"><b>All Time Zones</b> : <i>{{timeZones}}</i></p>\n        <p class=\"m-1\"><b>Native Name of The Country</b> : <i>{{currentCountry['nativeName']}}</i></p>\n        <p class=\"m-1\"><b>Numeric Code of the Country</b> : <i>{{currentCountry['numericCode']}}</i></p>\n        <p class=\"m-1\"><b>Country CIOC</b> : <i>{{currentCountry['cioc']}}</i></p>\n      </div>\n    </div>\n\n\n    <div *ngIf=\"currentCountry['currencies'].length > 0\" class=\"text-center col-sm-12\">\n      <p class=\"m-2\" style=\"font-size: 1.5em\"><b>Currency</b></p>\n    </div>\n    <div *ngFor=\"let cur of currentCountry['currencies']\" class=\"col-sm-4 text-center m-auto\"\n         style=\"border: 2px #000654 solid;border-radius: 3%\">\n      <p><b>Currency Code</b> : {{cur['code']}}</p>\n      <p><b>Currency Name</b> : {{cur['name']}}</p>\n      <p><b>Currency Symbol</b> : {{cur['symbol']}}</p>\n    </div>\n\n    <div *ngIf=\"borderCountries.length > 0\" class=\"container\">\n      <div class=\"text-center col-sm-12\">\n        <p class=\"m-2\" style=\"font-size: 1.5em\"><b>Border Countries</b></p>\n      </div>\n\n      <div class=\"row\" *ngIf=\"borderCountries && isVisible\">\n        <div *ngFor=\"let country of borderCountries\"\n             class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 card-holder-no-outline m-auto\">\n          <div class=\"card-container\" [routerLink]=\"['/country',country['alpha3Code']]\" style=\"margin: 2%;\"\n               title=\"{{'Click here to get details of ' + country.name}}\">\n            <div class=\"card\">\n              <img class=\"flag-control\" [attr.src]=\"country['flag']\" width=\"100%\" alt=\"question image\"\n                   style=\"width:100%\">\n              <div class=\"card-container text-center bg-dark\">\n                <p class=\"font-weight-bold\" style=\"color: #ffffff\">\n                  {{country['name']}}\n                </p>\n                <p class=\"text-white font-weight-bold\">\n                  Capital : {{country['capital']}}\n                </p>\n                <p class=\"text-white font-weight-bold\">\n                  Region :{{country['region']}}\n                </p>\n                <p class=\"text-white font-weight-bold\">\n                  Sub Region : {{country['subregion']}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"currentCountry['languages'].length > 0\" class=\"text-center col-sm-12\">\n      <p class=\"m-2\" style=\"font-size: 1.5em\"><b>Country official Languages</b></p>\n    </div>\n    <div *ngFor=\"let lan of currentCountry['languages']\" class=\"col-sm-4 m-auto text-center\">\n      <p><b>Language Name</b> : {{lan['name']}}</p>\n      <p><b>Language ISO639_1 Code</b> : {{lan['iso639_1']}}</p>\n      <p><b>Language ISO639_2 Code</b> : {{lan['iso639_2']}}</p>\n      <p><b>Language native Name</b> : {{lan['nativeName']}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\" *ngIf=\"translations(currentCountry['translations']).length > 0\">\n    <div class=\"text-center col-sm-12\">\n      <p class=\"m-2\" style=\"font-size: 1.5em\"><b>Country Name in Different Languages</b></p>\n    </div>\n    <div *ngFor=\"let lang of translations(currentCountry['translations'])\" class=\"col-sm-4 text-center\">\n      <p>{{lang + ' : ' + currentCountry['translations'][lang]}}</p>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"currentCountry['regionalBlocs'].length > 0\">\n    <div class=\"text-center col-sm-12\">\n      <p class=\"m-2\" style=\"font-size: 1.5em\"><b>Regional Blocks</b></p>\n    </div>\n    <div *ngFor=\"let blocks of currentCountry['regionalBlocs']\" class=\"col-sm-4 m-auto text-center\">\n      <p><b>Block Acronyms</b> : {{blocks['acronym']}}</p>\n      <p><b>Block Name</b> : {{blocks['name']}}</p>\n      <p *ngIf=\"!(blocks['otherAcronyms']==='')\"><b>Other Acronyms</b> : {{blocks['otherAcronyms']}}</p>\n      <p *ngIf=\"blocks['otherNames'].length > 0\"><b>Other Names</b></p>\n      <div class=\"row\">\n        <div *ngFor=\"let otherName of blocks['otherNames']; let first = first; let last = last\"\n             class=\"col-sm-12 text-center\">\n          <p class=\"d-inline-block\">{{otherName}}</p>\n          <p class=\"d-inline-block\" *ngIf=\"last\"></p>\n          <p class=\"d-inline-block\" *ngIf=\"!(last)\">, </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\" *ngIf=\"currentCountry  && isVisible\">\n    <div class=\"text-center col-sm-12\">\n      <button class=\"btn btn-primary m-5\" (click)=\"goBack()\">Go Back</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/country-details/country-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/country-details/country-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CountryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailsComponent", function() { return CountryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _countryapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countryapi.service */ "./src/app/countryapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CountryDetailsComponent = /** @class */ (function () {
    function CountryDetailsComponent(route, router, countryApi, location) {
        this.route = route;
        this.router = router;
        this.countryApi = countryApi;
        this.location = location;
        this.currentCountry = [];
        this.isVisible = false;
        this.topLevelDomain = '';
        this.callingCodes = '';
        this.altSpellings = '';
        this.latLang = '';
        this.timeZones = '';
        this.currencies = '';
        this.translations = Object.keys;
        this.borderCountries = [];
    }
    CountryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            _this.isVisible = false;
            _this.currentCountry.length = 0;
            _this.currentCountry = _this.countryApi.getCountryDetails(param.get('alphaCode')).subscribe(function (data) {
                console.log(data);
                _this.currentCountry = data;
                _this.getTopLevelDomain(_this.currentCountry);
                _this.getCallingCodes(_this.currentCountry);
                _this.getAltSpellings(_this.currentCountry);
                _this.getLatLang(_this.currentCountry);
                _this.getTimeZones(_this.currentCountry);
                _this.getCurrencies(_this.currentCountry);
                _this.getBorderCountries(_this.currentCountry['borders']);
                _this.isVisible = true;
            }, function (error) {
                alert('Internet Error');
            });
        }, function (error) {
            console.log('no param found');
        });
    };
    CountryDetailsComponent.prototype.getTopLevelDomain = function (currentObj) {
        var temp = '';
        for (var i = 0; i < currentObj.topLevelDomain.length; i++) {
            var comma = i === currentObj.topLevelDomain.length - 1 ? ' ' : ' ';
            temp += "" + currentObj.topLevelDomain[i] + comma;
        }
        this.topLevelDomain = temp;
    };
    CountryDetailsComponent.prototype.getCallingCodes = function (currentObj) {
        var temp = '';
        for (var i = 0; i < currentObj.callingCodes.length; i++) {
            var comma = i === currentObj.callingCodes.length - 1 ? ' ' : ', ';
            temp += "" + currentObj.callingCodes[i] + comma;
        }
        this.callingCodes = temp;
    };
    CountryDetailsComponent.prototype.getAltSpellings = function (currentObj) {
        var temp = '';
        for (var i = 0; i < currentObj.altSpellings.length; i++) {
            var comma = i === currentObj.altSpellings.length - 1 ? ' ' : ', ';
            temp += "" + currentObj.altSpellings[i] + comma;
        }
        this.altSpellings = temp;
    };
    CountryDetailsComponent.prototype.getLatLang = function (currentObj) {
        var temp = '';
        for (var i = 0; i < currentObj.latlng.length; i++) {
            var and = i === currentObj.latlng.length - 1 ? ' ' : ' & ';
            temp += "" + currentObj.latlng[i] + and;
        }
        this.latLang = temp;
    };
    CountryDetailsComponent.prototype.getTimeZones = function (currentObj) {
        var temp = '';
        for (var i = 0; i < currentObj.timezones.length; i++) {
            var comma = i === currentObj.timezones.length - 1 ? ' ' : ', ';
            temp += "" + currentObj.timezones[i] + comma;
        }
        this.timeZones = temp;
    };
    CountryDetailsComponent.prototype.getCurrencies = function (currentObj) {
        var temp = '';
        for (var i = 0; i < currentObj.currencies.length; i++) {
            var comma = i === currentObj.currencies.length - 1 ? ' ' : ', ';
            temp += "" + currentObj.currencies[i] + comma;
        }
        this.currencies = temp;
    };
    CountryDetailsComponent.prototype.getBorderCountries = function (borderCountries) {
        return __awaiter(this, void 0, void 0, function () {
            var tempBorder, _i, borderCountries_1, el, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tempBorder = [];
                        _i = 0, borderCountries_1 = borderCountries;
                        _a.label = 1;
                    case 1:
                        if (!(_i < borderCountries_1.length)) return [3 /*break*/, 4];
                        el = borderCountries_1[_i];
                        return [4 /*yield*/, this.countryApi.getSingleCountryInfoPromise(el)];
                    case 2:
                        info = _a.sent();
                        tempBorder.push(info);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.borderCountries = tempBorder;
                        console.log(this.borderCountries);
                        return [2 /*return*/];
                }
            });
        });
    };
    CountryDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    CountryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-details',
            template: __webpack_require__(/*! ./country-details.component.html */ "./src/app/country-details/country-details.component.html"),
            styles: [__webpack_require__(/*! ./country-details.component.css */ "./src/app/country-details/country-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _countryapi_service__WEBPACK_IMPORTED_MODULE_2__["CountryapiService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CountryDetailsComponent);
    return CountryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/countryapi.service.ts":
/*!***************************************!*\
  !*** ./src/app/countryapi.service.ts ***!
  \***************************************/
/*! exports provided: CountryapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryapiService", function() { return CountryapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryapiService = /** @class */ (function () {
    function CountryapiService(myHttpClient) {
        this.myHttpClient = myHttpClient;
        this.baseApiUrl = "https://restcountries.eu/rest/v2/";
    }
    CountryapiService.prototype.getAllCountries = function (regionName) {
        var allRegionResponse = this.myHttpClient.get(this.baseApiUrl + "region/" + regionName);
        return allRegionResponse;
    };
    CountryapiService.prototype.getCountryDetails = function (alphaCode) {
        var singleCountryDetails = this.myHttpClient.get(this.baseApiUrl + "alpha/" + alphaCode);
        return singleCountryDetails;
    };
    CountryapiService.prototype.getSingleCountryInfoPromise = function (alphaCode) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.myHttpClient.get(_this.baseApiUrl + "alpha/" + alphaCode).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    CountryapiService.prototype.getAllCurrencies = function () {
        var allCurrencyResponse = this.myHttpClient.get(this.baseApiUrl + "all?fields=currencies");
        return allCurrencyResponse;
    };
    CountryapiService.prototype.getAlllanguages = function () {
        var allCurrencyResponse = this.myHttpClient.get(this.baseApiUrl + "all?fields=languages");
        return allCurrencyResponse;
    };
    CountryapiService.prototype.getCountryDetailsByCurrency = function (currency) {
        var singleCountryDetails = this.myHttpClient.get(this.baseApiUrl + "currency/" + currency);
        return singleCountryDetails;
    };
    CountryapiService.prototype.getCountryDetailsByLanguage = function (lang) {
        var singleCountryDetails = this.myHttpClient.get(this.baseApiUrl + "lang/" + lang);
        return singleCountryDetails;
    };
    CountryapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryapiService);
    return CountryapiService;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <h1 class=\"text-danger\">Sorry There no such place like {{currentRoute}}</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent(router) {
        this.router = router;
    }
    NotfoundComponent.prototype.ngOnInit = function () {
        this.currentRoute = this.router.url;
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/region/region.component.css":
/*!*********************************************!*\
  !*** ./src/app/region/region.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".region-holder {\r\n  height: 200px;\r\n}\r\n\r\n.as, .af, .am, .oc, .eu {\r\n  transition-timing-function: ease;\r\n  transition-duration: 0.3s;\r\n}\r\n\r\n.as:hover, .am:hover, .eu:hover, .af:hover, .oc:hover {\r\n  box-shadow: 0 5px 24px 2px rgba(0, 0, 0, 0.75);\r\n  -webkit-transform: scale(1.009);\r\n          transform: scale(1.009);\r\n\r\n}\r\n\r\n.as {\r\n  background: url('as.jpg') no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.am {\r\n  background: url('am.jpg') no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.af {\r\n  background: url('af.jpg') no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.oc {\r\n  background: url('oc.jpg') no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.eu {\r\n  background: url('eu.jpg') no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.western, .pacific {\r\n  font-size: 2.5em;\r\n  font-weight: bold;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #ffffff;\r\n  text-shadow: -1px -1px 0 #212121,\r\n  1px -1px 0 #212121,\r\n  -1px 1px 0 #212121,\r\n  1px 1px 0 #212121;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/region/region.component.html":
/*!**********************************************!*\
  !*** ./src/app/region/region.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <h2 class=\"m-2 p-2 font-weight-bold\" style=\"color: #000000;font-size: 3.5em\">Regions</h2>\n  <div class=\"container text-center\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"as d-flex justify-content-center rounded m-2 region-holder\"\n             [routerLink]=\"['/region','asia']\">\n          <p class=\"pacific align-self-center\">Asia</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"am d-flex justify-content-center rounded m-2 region-holder\"\n             [routerLink]=\"['/region','americas']\">\n          <p class=\"western align-self-center\">Americas</p>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"eu d-flex justify-content-center rounded m-2 region-holder\"\n             [routerLink]=\"['/region','europe']\">\n          <p class=\"western align-self-center\">Europe</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"af d-flex justify-content-center rounded m-2 region-holder\"\n             [routerLink]=\"['/region','africa']\">\n          <p class=\"western align-self-center\">Africa</p>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"oc d-flex justify-content-center rounded m-2 region-holder\"\n             [routerLink]=\"['/region','oceania']\">\n          <p class=\"western align-self-center\">Oceania</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/region/region.component.ts":
/*!********************************************!*\
  !*** ./src/app/region/region.component.ts ***!
  \********************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
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

var RegionComponent = /** @class */ (function () {
    function RegionComponent() {
    }
    RegionComponent.prototype.ngOnInit = function () {
    };
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/region/region.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionComponent);
    return RegionComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\KRISHNENDU\Desktop\New folder (4)\CountryApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map