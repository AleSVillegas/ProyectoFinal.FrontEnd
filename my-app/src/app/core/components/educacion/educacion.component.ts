import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public imgUpro: string = "assets/images/educacion/upro.png";


  constructor() { }

  ngOnInit(): void {
  }

}
