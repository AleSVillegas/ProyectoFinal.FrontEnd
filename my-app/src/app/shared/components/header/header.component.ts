import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.checkLoggedIn();
  }

  onLogOut():void{
    this.tokenService.logOut();
    this.checkLoggedIn();
  }

  login(){
    this.router.navigate(['/login']);
  }

  checkLoggedIn(): void {
    this.isLogged = !!this.tokenService.getToken();
  }


}