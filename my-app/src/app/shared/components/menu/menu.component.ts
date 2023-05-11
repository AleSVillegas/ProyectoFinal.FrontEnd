import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  isMenuFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0 && !this.isMenuFixed) {
      this.isMenuFixed = true;
    } else if (window.pageYOffset == 0 && this.isMenuFixed) {
      this.isMenuFixed = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
