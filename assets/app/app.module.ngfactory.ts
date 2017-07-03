/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/http';
import * as import6 from '@angular/forms';
import * as import7 from './messages/message.module';
import * as import8 from './errors/error.service';
import * as import9 from './messages/message.service';
import * as import10 from './auth/auth.service';
import * as import11 from './messages/messages.compontent.ngfactory';
import * as import12 from './auth/authentication.component.ngfactory';
import * as import13 from './app.component.ngfactory';
import * as import14 from './messages/messages.compontent';
import * as import15 from './auth/authentication.component';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _NgProbeToken_2:any[];
  _ɵg_3:import3.ɵg;
  _APP_INITIALIZER_4:any[];
  _ApplicationInitStatus_5:import0.ApplicationInitStatus;
  _ɵf_6:import0.ɵf;
  _ApplicationRef_7:any;
  _ApplicationModule_8:import0.ApplicationModule;
  _BrowserModule_9:import4.BrowserModule;
  _ɵa_10:any;
  _UrlSerializer_11:import3.DefaultUrlSerializer;
  _RouterOutletMap_12:import3.RouterOutletMap;
  _ROUTER_CONFIGURATION_13:any;
  _LocationStrategy_14:any;
  _Location_15:import2.Location;
  _Compiler_16:import0.Compiler;
  _NgModuleFactoryLoader_17:import0.SystemJsNgModuleLoader;
  _ROUTES_18:any[];
  _Router_19:any;
  _RouterModule_20:import3.RouterModule;
  _HttpModule_21:import5.HttpModule;
  _ɵba_22:import6.ɵba;
  _FormsModule_23:import6.FormsModule;
  _MessageModule_24:import7.MessageModule;
  _AppModule_25:import1.AppModule;
  __LOCALE_ID_26:any;
  __NgLocalization_27:import2.NgLocaleLocalization;
  __APP_ID_28:any;
  __IterableDiffers_29:any;
  __KeyValueDiffers_30:any;
  __DomSanitizer_31:import4.ɵe;
  __Sanitizer_32:any;
  __HAMMER_GESTURE_CONFIG_33:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_34:any[];
  __EventManager_35:import4.EventManager;
  __ɵDomSharedStylesHost_36:import4.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_37:import4.ɵDomRendererFactory2;
  __RendererFactory2_38:any;
  __ɵSharedStylesHost_39:any;
  __Testability_40:import0.Testability;
  __Meta_41:import4.Meta;
  __Title_42:import4.Title;
  __BrowserXhr_43:import5.BrowserXhr;
  __ResponseOptions_44:import5.BaseResponseOptions;
  __XSRFStrategy_45:any;
  __XHRBackend_46:import5.XHRBackend;
  __RequestOptions_47:import5.BaseRequestOptions;
  __Http_48:any;
  __ɵi_49:import6.ɵi;
  __ErrorService_50:import8.ErrorService;
  __MessageService_51:import9.MessageService;
  __ActivatedRoute_52:any;
  __NoPreloading_53:import3.NoPreloading;
  __PreloadingStrategy_54:any;
  __RouterPreloader_55:import3.RouterPreloader;
  __PreloadAllModules_56:import3.PreloadAllModules;
  __ROUTER_INITIALIZER_57:any;
  __APP_BOOTSTRAP_LISTENER_58:any[];
  __AuthService_59:import10.AuthService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import11.MessagesComponentNgFactory,
      import12.AuthenticationComponentNgFactory,
      import13.AppComponentNgFactory
    ]
    ,[import13.AppComponentNgFactory]);
  }
  get _LOCALE_ID_26():any {
    if ((this.__LOCALE_ID_26 == null)) { (this.__LOCALE_ID_26 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_26;
  }
  get _NgLocalization_27():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_27 == null)) { (this.__NgLocalization_27 = new import2.NgLocaleLocalization(this._LOCALE_ID_26)); }
    return this.__NgLocalization_27;
  }
  get _APP_ID_28():any {
    if ((this.__APP_ID_28 == null)) { (this.__APP_ID_28 = import0.ɵg()); }
    return this.__APP_ID_28;
  }
  get _IterableDiffers_29():any {
    if ((this.__IterableDiffers_29 == null)) { (this.__IterableDiffers_29 = import0.ɵl()); }
    return this.__IterableDiffers_29;
  }
  get _KeyValueDiffers_30():any {
    if ((this.__KeyValueDiffers_30 == null)) { (this.__KeyValueDiffers_30 = import0.ɵm()); }
    return this.__KeyValueDiffers_30;
  }
  get _DomSanitizer_31():import4.ɵe {
    if ((this.__DomSanitizer_31 == null)) { (this.__DomSanitizer_31 = new import4.ɵe(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_31;
  }
  get _Sanitizer_32():any {
    if ((this.__Sanitizer_32 == null)) { (this.__Sanitizer_32 = this._DomSanitizer_31); }
    return this.__Sanitizer_32;
  }
  get _HAMMER_GESTURE_CONFIG_33():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_33 == null)) { (this.__HAMMER_GESTURE_CONFIG_33 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_33;
  }
  get _EVENT_MANAGER_PLUGINS_34():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_34 == null)) { (this.__EVENT_MANAGER_PLUGINS_34 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_33)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_34;
  }
  get _EventManager_35():import4.EventManager {
    if ((this.__EventManager_35 == null)) { (this.__EventManager_35 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_34,this.parent.get(import0.NgZone))); }
    return this.__EventManager_35;
  }
  get _ɵDomSharedStylesHost_36():import4.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_36 == null)) { (this.__ɵDomSharedStylesHost_36 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_36;
  }
  get _ɵDomRendererFactory2_37():import4.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_37 == null)) { (this.__ɵDomRendererFactory2_37 = new import4.ɵDomRendererFactory2(this._EventManager_35,this._ɵDomSharedStylesHost_36)); }
    return this.__ɵDomRendererFactory2_37;
  }
  get _RendererFactory2_38():any {
    if ((this.__RendererFactory2_38 == null)) { (this.__RendererFactory2_38 = this._ɵDomRendererFactory2_37); }
    return this.__RendererFactory2_38;
  }
  get _ɵSharedStylesHost_39():any {
    if ((this.__ɵSharedStylesHost_39 == null)) { (this.__ɵSharedStylesHost_39 = this._ɵDomSharedStylesHost_36); }
    return this.__ɵSharedStylesHost_39;
  }
  get _Testability_40():import0.Testability {
    if ((this.__Testability_40 == null)) { (this.__Testability_40 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_40;
  }
  get _Meta_41():import4.Meta {
    if ((this.__Meta_41 == null)) { (this.__Meta_41 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_41;
  }
  get _Title_42():import4.Title {
    if ((this.__Title_42 == null)) { (this.__Title_42 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_42;
  }
  get _BrowserXhr_43():import5.BrowserXhr {
    if ((this.__BrowserXhr_43 == null)) { (this.__BrowserXhr_43 = new import5.BrowserXhr()); }
    return this.__BrowserXhr_43;
  }
  get _ResponseOptions_44():import5.BaseResponseOptions {
    if ((this.__ResponseOptions_44 == null)) { (this.__ResponseOptions_44 = new import5.BaseResponseOptions()); }
    return this.__ResponseOptions_44;
  }
  get _XSRFStrategy_45():any {
    if ((this.__XSRFStrategy_45 == null)) { (this.__XSRFStrategy_45 = import5.ɵb()); }
    return this.__XSRFStrategy_45;
  }
  get _XHRBackend_46():import5.XHRBackend {
    if ((this.__XHRBackend_46 == null)) { (this.__XHRBackend_46 = new import5.XHRBackend(this._BrowserXhr_43,this._ResponseOptions_44,this._XSRFStrategy_45)); }
    return this.__XHRBackend_46;
  }
  get _RequestOptions_47():import5.BaseRequestOptions {
    if ((this.__RequestOptions_47 == null)) { (this.__RequestOptions_47 = new import5.BaseRequestOptions()); }
    return this.__RequestOptions_47;
  }
  get _Http_48():any {
    if ((this.__Http_48 == null)) { (this.__Http_48 = import5.ɵc(this._XHRBackend_46,this._RequestOptions_47)); }
    return this.__Http_48;
  }
  get _ɵi_49():import6.ɵi {
    if ((this.__ɵi_49 == null)) { (this.__ɵi_49 = new import6.ɵi()); }
    return this.__ɵi_49;
  }
  get _ErrorService_50():import8.ErrorService {
    if ((this.__ErrorService_50 == null)) { (this.__ErrorService_50 = new import8.ErrorService()); }
    return this.__ErrorService_50;
  }
  get _MessageService_51():import9.MessageService {
    if ((this.__MessageService_51 == null)) { (this.__MessageService_51 = new import9.MessageService(this._Http_48,this._ErrorService_50)); }
    return this.__MessageService_51;
  }
  get _ActivatedRoute_52():any {
    if ((this.__ActivatedRoute_52 == null)) { (this.__ActivatedRoute_52 = import3.ɵf(this._Router_19)); }
    return this.__ActivatedRoute_52;
  }
  get _NoPreloading_53():import3.NoPreloading {
    if ((this.__NoPreloading_53 == null)) { (this.__NoPreloading_53 = new import3.NoPreloading()); }
    return this.__NoPreloading_53;
  }
  get _PreloadingStrategy_54():any {
    if ((this.__PreloadingStrategy_54 == null)) { (this.__PreloadingStrategy_54 = this._NoPreloading_53); }
    return this.__PreloadingStrategy_54;
  }
  get _RouterPreloader_55():import3.RouterPreloader {
    if ((this.__RouterPreloader_55 == null)) { (this.__RouterPreloader_55 = new import3.RouterPreloader(this._Router_19,this._NgModuleFactoryLoader_17,this._Compiler_16,this,this._PreloadingStrategy_54)); }
    return this.__RouterPreloader_55;
  }
  get _PreloadAllModules_56():import3.PreloadAllModules {
    if ((this.__PreloadAllModules_56 == null)) { (this.__PreloadAllModules_56 = new import3.PreloadAllModules()); }
    return this.__PreloadAllModules_56;
  }
  get _ROUTER_INITIALIZER_57():any {
    if ((this.__ROUTER_INITIALIZER_57 == null)) { (this.__ROUTER_INITIALIZER_57 = import3.ɵi(this._ɵg_3)); }
    return this.__ROUTER_INITIALIZER_57;
  }
  get _APP_BOOTSTRAP_LISTENER_58():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_58 == null)) { (this.__APP_BOOTSTRAP_LISTENER_58 = [this._ROUTER_INITIALIZER_57]); }
    return this.__APP_BOOTSTRAP_LISTENER_58;
  }
  get _AuthService_59():import10.AuthService {
    if ((this.__AuthService_59 == null)) { (this.__AuthService_59 = new import10.AuthService(this._Http_48,this._ErrorService_50)); }
    return this.__AuthService_59;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import4.ɵa();
    this._NgProbeToken_2 = [import3.ɵb()];
    this._ɵg_3 = new import3.ɵg(this);
    this._APP_INITIALIZER_4 = [
      import0.ɵo,
      import4.ɵc(this.parent.get(import4.NgProbeToken,(null as any)),this._NgProbeToken_2),
      import3.ɵh(this._ɵg_3)
    ]
    ;
    this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
    this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5);
    this._ApplicationRef_7 = this._ɵf_6;
    this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
    this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ɵa_10 = import3.ɵd(this.parent.get(import3.Router,(null as any)));
    this._UrlSerializer_11 = new import3.DefaultUrlSerializer();
    this._RouterOutletMap_12 = new import3.RouterOutletMap();
    this._ROUTER_CONFIGURATION_13 = {};
    this._LocationStrategy_14 = import3.ɵc(this.parent.get(import2.PlatformLocation),this.parent.get(import2.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_13);
    this._Location_15 = new import2.Location(this._LocationStrategy_14);
    this._Compiler_16 = new import0.Compiler();
    this._NgModuleFactoryLoader_17 = new import0.SystemJsNgModuleLoader(this._Compiler_16,this.parent.get(import0.SystemJsNgModuleLoaderConfig,(null as any)));
      this._ROUTES_18 = [[
        {
          path: '',
          redirectTo: '/messages',
          pathMatch: 'full'
        }
        ,
        {
          path: 'messages',
          component: import14.MessagesComponent
        }
        ,
        {
          path: 'auth',
          component: import15.AuthenticationComponent,
          loadChildren: './auth/auth.module#AuthModule'
        }

      ]
    ];
    this._Router_19 = import3.ɵe(this._ApplicationRef_7,this._UrlSerializer_11,this._RouterOutletMap_12,this._Location_15,this,this._NgModuleFactoryLoader_17,this._Compiler_16,this._ROUTES_18,this._ROUTER_CONFIGURATION_13,this.parent.get(import3.UrlHandlingStrategy,(null as any)),this.parent.get(import3.RouteReuseStrategy,(null as any)));
    this._RouterModule_20 = new import3.RouterModule(this._ɵa_10,this._Router_19);
    this._HttpModule_21 = new import5.HttpModule();
    this._ɵba_22 = new import6.ɵba();
    this._FormsModule_23 = new import6.FormsModule();
    this._MessageModule_24 = new import7.MessageModule();
    this._AppModule_25 = new import1.AppModule();
    return this._AppModule_25;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.NgProbeToken)) { return this._NgProbeToken_2; }
    if ((token === import3.ɵg)) { return this._ɵg_3; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_4; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_5; }
    if ((token === import0.ɵf)) { return this._ɵf_6; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_7; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_8; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_9; }
    if ((token === import3.ɵa)) { return this._ɵa_10; }
    if ((token === import3.UrlSerializer)) { return this._UrlSerializer_11; }
    if ((token === import3.RouterOutletMap)) { return this._RouterOutletMap_12; }
    if ((token === import3.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_13; }
    if ((token === import2.LocationStrategy)) { return this._LocationStrategy_14; }
    if ((token === import2.Location)) { return this._Location_15; }
    if ((token === import0.Compiler)) { return this._Compiler_16; }
    if ((token === import0.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_17; }
    if ((token === import3.ROUTES)) { return this._ROUTES_18; }
    if ((token === import3.Router)) { return this._Router_19; }
    if ((token === import3.RouterModule)) { return this._RouterModule_20; }
    if ((token === import5.HttpModule)) { return this._HttpModule_21; }
    if ((token === import6.ɵba)) { return this._ɵba_22; }
    if ((token === import6.FormsModule)) { return this._FormsModule_23; }
    if ((token === import7.MessageModule)) { return this._MessageModule_24; }
    if ((token === import1.AppModule)) { return this._AppModule_25; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_26; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_27; }
    if ((token === import0.APP_ID)) { return this._APP_ID_28; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_29; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_30; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_31; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_32; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_33; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_34; }
    if ((token === import4.EventManager)) { return this._EventManager_35; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_36; }
    if ((token === import4.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_37; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_38; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_39; }
    if ((token === import0.Testability)) { return this._Testability_40; }
    if ((token === import4.Meta)) { return this._Meta_41; }
    if ((token === import4.Title)) { return this._Title_42; }
    if ((token === import5.BrowserXhr)) { return this._BrowserXhr_43; }
    if ((token === import5.ResponseOptions)) { return this._ResponseOptions_44; }
    if ((token === import5.XSRFStrategy)) { return this._XSRFStrategy_45; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_46; }
    if ((token === import5.RequestOptions)) { return this._RequestOptions_47; }
    if ((token === import5.Http)) { return this._Http_48; }
    if ((token === import6.ɵi)) { return this._ɵi_49; }
    if ((token === import8.ErrorService)) { return this._ErrorService_50; }
    if ((token === import9.MessageService)) { return this._MessageService_51; }
    if ((token === import3.ActivatedRoute)) { return this._ActivatedRoute_52; }
    if ((token === import3.NoPreloading)) { return this._NoPreloading_53; }
    if ((token === import3.PreloadingStrategy)) { return this._PreloadingStrategy_54; }
    if ((token === import3.RouterPreloader)) { return this._RouterPreloader_55; }
    if ((token === import3.PreloadAllModules)) { return this._PreloadAllModules_56; }
    if ((token === import3.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_57; }
    if ((token === import0.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_58; }
    if ((token === import10.AuthService)) { return this._AuthService_59; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_6.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_36 && this._ɵDomSharedStylesHost_36.ngOnDestroy());
    (this.__RouterPreloader_55 && this._RouterPreloader_55.ngOnDestroy());
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUHJvamVjdHMvQ3Vyc29zL1VkZW15IC0gQW5ndWxhciAmIE5vZGUvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Qcm9qZWN0cy9DdXJzb3MvVWRlbXkgLSBBbmd1bGFyICYgTm9kZS9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
