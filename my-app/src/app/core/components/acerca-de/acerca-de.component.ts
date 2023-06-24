import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users.model';
import { TokenService } from 'src/app/service/token.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  public imgPerfil: string = "../../../../assets/images/acerca-de/Foto_Perfil.jpg";
  
  //user: Users = new Users("", "", "", "");
  user: Users =null;

  constructor(public usersService: UsersService, private tokenService: TokenService) { }
  isLogged=false;
  
  ngOnInit(): void {
    this.cargarUser();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    /*this.usersService.getUser().subscribe(data => { this.user = data; console.log('Datos del usuario recibidos:', data) });*/
  }

   cargarUser (){
    this.usersService.detail(1).subscribe(data => this.user=data)
   }
}

