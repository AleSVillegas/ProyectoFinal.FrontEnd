import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Users } from 'src/app/model/users.model';
import { ImageService } from 'src/app/service/image.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
user: Users= null;

  constructor(
    private usersService: UsersService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public imageService: ImageService
    
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.usersService.detail(id).subscribe(
      data =>{
        this.user = data;
      }, err =>{
         alert("Error al modificar el usuario");
         this.router.navigate(['/acercade']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.user.img = this.imageService.url
    this.usersService.update(id, this.user).subscribe(
      data => {
        history.back(); // Regresar a la página anterior
      }, err =>{
         alert("Error al modificar el usuario"); 
         history.back(); // Regresar a la página anterior
      }
    )
  }

  onFileSelected($event:any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.onFileSelected($event, name)
  }

}
