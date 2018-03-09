import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoListComponent } from './list/list.component';
import { DemoDetailComponent } from './detail/detail.component';
@NgModule({
	imports: [
		CommonModule,
		DemoRoutingModule
	],
	declarations: [DemoListComponent, DemoDetailComponent]
})
export class DemoModule { }
