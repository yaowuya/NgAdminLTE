import {NgModule} from "@angular/core";
import {Routes, RouterModule,RouterOutlet} from "@angular/router";
import {LayoutComponent} from './layout/bodylayout/layout.component';
import {AuthGuardService} from './common/services/auth-guard.service';

const routes:Routes=[
  {
    path:'',
    loadChildren:'./auth/auth.module#AuthModule' //懒加载
  },{
    path: 'pages',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'main',
        loadChildren: './main/demo/demo.module#DemoModule'
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
