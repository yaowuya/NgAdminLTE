import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoListComponent } from './list/list.component';
import { DemoDetailComponent } from './detail/detail.component';

const routes: Routes = [
	{
		path: 'index',
		redirectTo: 'index',
		pathMatch: 'full'
	}, {
		path: "index",
		component: DemoListComponent
	}, {
		path: "detail",
		component: DemoDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DemoRoutingModule { }
