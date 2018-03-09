import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './bodylayout/layout.component';

import {AppBreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {AppFooterComponent} from './footer/footer.component';
import {AppHeaderComponent} from './header/header.component';
import {AppSidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    AppHeaderComponent,
    AppBreadcrumbComponent,
    AppFooterComponent,
    AppSidebarComponent
  ]
})

export class LayoutModule{

}
