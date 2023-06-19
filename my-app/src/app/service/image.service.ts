import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  selectedImage: File | null = null;

  public onFileSelected($event: any) {
    this.selectedImage = $event.target.files[0];
  }

  onUpload() {
    if (this.selectedImage) {
      // Aquí puedes agregar la lógica para subir la imagen al servidor
      // Puedes utilizar servicios o bibliotecas externas como AngularFireStorage
      // para subir la imagen a un servicio de almacenamiento en la nube como Firebase Storage
      console.log('Imagen seleccionada:', this.selectedImage);
    } else {
      console.log('No se ha seleccionado ninguna imagen.');
    }
  }

  constructor() { }
}
