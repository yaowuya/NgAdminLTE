import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LayoutComponent} from './bodylayout/layout.component';
import {AuthGuardService} from '../common/services/auth-guard.service';

const routes:Routes=[
  {
    path:"",
    redirectTo:"layout",
    pathMatch:"full"
  },{
    path:"layout",
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    children:[
      {
        path:'main',
        loadChildren:'./main/demo/demo.module#DemoModule'
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class LayoutRoutingModule{

}

