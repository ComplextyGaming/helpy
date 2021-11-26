import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string;
  clave!: string;
  mensaje!: string;
  error!: string;

  constructor(private loginService: LoginService, private userService: UserService,private router: Router) {}

  ngOnInit(): void {}

  iniciarSesion() {
    this.loginService.login(this.usuario, this.clave).subscribe((data1) => {
      sessionStorage.setItem(environment.TOKEN_NAME, data1.access_token);
      sessionStorage.setItem('email', this.usuario);
      this.userService.getUserByEmail(this.usuario).subscribe((data2) =>{
        console.log(data2)
        sessionStorage.setItem('id', data2.id)
      })
      this.router.navigate(['home']);
    });
  }
}
