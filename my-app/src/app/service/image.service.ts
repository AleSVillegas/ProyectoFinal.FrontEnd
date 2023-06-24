import { HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  selectedImage: File | null = null;
  url: string = "";

  constructor(private storage: Storage) { }

  public onFileSelected($event: any, name: string) {
    const selectedImage = $event.target.files[0];
    const imgRef = ref (this.storage, 'image_perfil/' + name)
    uploadBytes(imgRef,selectedImage)
    .then (resoonse => {this.getImage()})
    .catch(error => console.log(error))
  }
  getImage(){
    const imagesRef = ref (this.storage, 'image_perfil')
    list(imagesRef)
    .then(async response =>{ 
      for (let item of response.items){
        this.url = await getDownloadURL(item);
        console.log('URL: ' + this.url);
      }
    })
    .catch(error => console.log(error))
  }
}

/*export class ImageService {
  selectedImage: File | null = null;

  public onFileSelected($event: any) {
    this.selectedImage = $event.target.files[0];
    const imgRef = ref
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
}*/