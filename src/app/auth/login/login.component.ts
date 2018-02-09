import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from '../../common/services/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public user = {
    username: "",
    password: ""
  };

  constructor(
    public httpClient: HttpClientService,
    public router: Router
  ) { }

  ngOnInit() {
    window['$']('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }

  login() {
    // let postBody = this.user;
    // console.log(postBody);
    // this.httpClient.post('api/v1/users/login/password', postBody, {
    // 	isAuthHttp: false
    // }).subscribe(data => {
    // 	if (data) {
    // 		sessionStorage.setItem('token', data.token);
    // 		sessionStorage.setItem('user', JSON.stringify(data.user));
    window['swal']('提示', '登录成功', 'success');
    // this.router.navigateByUrl("pages/main/index");
    // 	}
    // });
  }
}
