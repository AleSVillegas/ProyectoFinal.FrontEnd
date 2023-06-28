import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  showInvalidCredentialsError = false; // Nueva variable para controlar la visibilidad del mensaje de error 

  @ViewChild('passwordInput') passwordInput: ElementRef<HTMLInputElement>;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['home']).then(() => {
        window.location.reload(); // Actualizar la página
      });
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje; 
      this.showInvalidCredentialsError = true; // Mostrar mensaje de error
      console.log(this.errMsj);
    });
  }

  private checkLoggedIn(): void {
    this.isLogged = this.tokenService.isLoggedIn();
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }

  togglePasswordVisibility() {
    const passwordInputType = this.passwordInput.nativeElement.type;

    // Cambia el tipo de entrada de contraseña entre 'password' y 'text'
    if (passwordInputType === 'password') {
      this.passwordInput.nativeElement.type = 'text';
    } else {
      this.passwordInput.nativeElement.type = 'password';
    }
  }
}





/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string; 

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/']); // Redirigir al usuario a la página de inicio
        
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }


}*/


/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.router.navigate(['home']); // Redirigir al usuario a la página de inicio
        window.location.reload(); // Actualizar la página
      },
      (err) => {
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    );
  }
}*/