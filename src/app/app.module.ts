import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpModule, Http, RequestOptions} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

//layout
import {LayoutComponent} from './layout/bodylayout/layout.component';
import {AppBreadcrumbComponent} from './layout/breadcrumb/breadcrumb.component';
import {AppHeaderComponent} from './layout/header/header.component';
import {AppSidebarComponent} from './layout/sidebar/sidebar.component';
import {AppFooterComponent} from './layout/footer/footer.component';

//common services
import {AuthGuardService} from '../app/common/services/auth-guard.service';
import {HttpClientService} from '../app/common/services/http-client.service';
import {MissionService} from '../app/common/services/mission.service';
import {Util} from '../app/common/utils/util';

/**
 * [authHttpServiceFactory 定义存储token的位置和名称]
 * @param {Http}           http    [description]
 * @param {RequestOptions} options [description]
 */
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => sessionStorage.getItem('token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AppBreadcrumbComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthGuardService,
    HttpClientService,
    MissionService,
    Util
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
