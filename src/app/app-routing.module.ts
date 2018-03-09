import {NgModule} from "@angular/core";
import {Routes, RouterModule,RouterOutlet} from "@angular/router";

const routes:Routes=[
  {
    path:'',
    loadChildren:'./auth/auth.module#AuthModule' //懒加载
  },{
    path:'',
    loadChildren:'./layout/layout.module#LayoutModule'
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
