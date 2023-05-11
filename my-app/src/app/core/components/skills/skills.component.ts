import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

interface hardSkill {
name: string;
percent: number;
}

interface softSkill {
name: string;
percent: number;
wordSize?: number;
}

@Component({
selector: 'app-skills',
templateUrl: './skills.component.html',
styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
public hardskills: hardSkill[] = [
{ name: 'PYTHON', percent: 75 },
{ name: 'HTML & CSS', percent: 70 },
{ name: 'JavaScript', percent: 70 },
{ name: 'MySQL', percent: 70 },
{ name: 'ANGULAR', percent: 70 },
{ name: 'Git & GitHub', percent: 70 }
];

public softSkills: softSkill[] = [
{ name: 'Comunicación', percent: 90 },
{ name: 'Trabajo en equipo', percent: 80, wordSize: 14 },
{ name: 'Resolución de problemas', percent: 80, wordSize: 11 },
{ name: 'Creatividad', percent: 85 },
{ name: 'Flexibilidad', percent: 85 },
{ name: 'Pensamiento crítico', percent: 80, wordSize: 14 },
{ name: 'Gestión del tiempo', percent: 85, wordSize: 14 }
];

radius: number = 0 ;

constructor(private breakpointObserver: BreakpointObserver) {}

ngOnInit() {
this.breakpointObserver.observe(['(max-width: 575px)']).subscribe(result => {
if (result.matches) {
// Si la pantalla tiene un ancho máximo de 575px, establecemos el radio en 50
this.radius = 80;
} else {
// De lo contrario, calculamos el radio como una fracción del ancho de la pantalla
this.radius = Math.min(window.innerWidth, window.innerHeight) * 0.15;
}
});
}
}



/*import { Component, OnInit } from '@angular/core';

interface hardSkill {
  name: string;
  percent: number;
}

interface softSkill {
  name: string;
  percent: number;
  wordSize?: number;

}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})


export class SkillsComponent implements OnInit {

  public hardskills: hardSkill [] = [
    
    { name: 'PYTHON', percent: 75,},
    { name: 'HTML & CSS', percent: 70,},
    { name: 'JavaScript',percent: 70,},
    { name: 'MySQL',percent: 70,},
    { name: 'ANGULAR',percent: 70,},
    { name: 'Git & GitHub',percent: 70,}
  ];

  public softSkills: softSkill[] = [
    
    { name: 'Comunicación', percent: 90,},
    { name: 'Trabajo en equipo', percent: 80, wordSize: 13,},
    { name: 'Resolución de problemas',percent: 80, wordSize: 10,},
    { name: 'Creatividad',percent: 85,},
    { name: 'Flexibilidad', percent: 85,},
    { name: 'Pensamiento crítico',percent: 80,wordSize: 13,},
    { name: 'Gestión del tiempo', percent: 85,wordSize: 13,}
  ];
  /*public dimension: [number, number] = [200, 200];

  public showLegend: boolean = true;
  public showLabels: boolean = true;
  
  public colorScheme: any[string] = {
    domain: ['#5AA454', '#E44D25']
  };

  

  constructor() { }

  ngOnInit(): void {
    /*this.softSkills.forEach(skill => {
      if (skill.name.length > 10) {
        skill.name = skill.name.substring(0, 14) + '...';
      }
    });
    
  }
  
}*/
