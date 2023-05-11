import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  public imgPerfil: string = "../../../../assets/images/acerca-de/Perfil.png";
  user: Users = new Users("", "", "");
  
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(data => { this.user = data; console.log('Datos del usuario recibidos:', data) });
  }

}

