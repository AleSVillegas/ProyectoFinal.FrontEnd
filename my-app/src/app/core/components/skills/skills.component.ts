import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

interface HardSoftSkill {
  name: string;
  percent: number;
  id: number;
  wordSize?: number;                                                                                                                                               
}

@Component({                       
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public hardsoftskills: HardSoftSkill[] = [
    { name: 'Python', percent: 75, id: 1 },
    { name: 'HTML & CSS', percent: 70, id: 2 },
    { name: 'JavaScript', percent: 70, id: 3 },
    { name: 'MySQL', percent: 70, id: 4 },
    { name: 'Angular', percent: 70, id: 5 },
    { name: 'Git & GitHub', percent: 70, id: 6 },
    { name: 'Comunicación', percent: 90, id: 7 },
    { name: 'Trabajo en equipo', percent: 95,  wordSize: 14, id: 8 },
    { name: 'Resolución de problemas', percent: 80, wordSize: 11, id: 9 },
    { name: 'Creatividad', percent: 85, id: 10 },
    { name: 'Flexibilidad', percent: 85, id: 11 },
    { name: 'Pensamiento crítico', percent: 80, wordSize: 14, id: 12 },
    { name: 'Gestión del tiempo', percent: 90, wordSize: 14, id: 13 }
  ];


  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}




/*import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

interface HardSkill {
  name: string;
  percent: number;
  id: number;
}

interface SoftSkill {
  name: string;
  percent: number;
  wordSize?: number;
  id: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public hardskills: HardSkill[] = [
    { name: 'Python', percent: 75, id: 1 },
    { name: 'HTML & CSS', percent: 70, id: 2 },
    { name: 'JavaScript', percent: 70, id: 3 },
    { name: 'MySQL', percent: 70, id: 4 },
    { name: 'Angular', percent: 70, id: 5 },
    { name: 'Git & GitHub', percent: 70, id: 6 }
  ];

  public softSkills: SoftSkill[] = [
    { name: 'Comunicación', percent: 90, id: 1 },
    { name: 'Trabajo en equipo', percent: 80, wordSize: 14, id: 2 },
    { name: 'Resolución de problemas', percent: 80, wordSize: 11, id: 3 },
    { name: 'Creatividad', percent: 85, id: 4 },
    { name: 'Flexibilidad', percent: 85, id: 5 },
    { name: 'Pensamiento crítico', percent: 80, wordSize: 14, id: 6 },
    { name: 'Gestión del tiempo', percent: 85, wordSize: 14, id: 7 }
  ];

  radius = 0;
  skill: Skill[] = [];
  isLogged = false;

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      (data: Skill[]) => {
        this.skill = data;
      }
    );
  }

  deleteSkill(id: number): void {
    if (id !== undefined) {
      this.skillS.delete(id).subscribe(
        () => {
          this.cargarSkills();
        },
        (err) => {
          alert("No se pudo borrar la skill");
        }
      );
    }
  }
}
*/

































/*import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

interface hardSkill {
  name: string;
  percent: number;
  id: number;
}

interface softSkill {
  name: string;
  percent: number;
  wordSize?: number;
  id: number;
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

  radius: number = 0;
  skill: Skill[] = [];
  isLogged = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private skillS: SkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 575px)']).subscribe(result => {
      if (result.matches) {
        // Si la pantalla tiene un ancho máximo de 575px, establecemos el radio en 50
        this.radius = 80;
      } else {
        // De lo contrario, calculamos el radio como una fracción del ancho de la pantalla
        this.radius = Math.min(window.innerWidth, window.innerHeight) * 0.15;
      }
    });

    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    );
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      );
    }
  }
}*/





















/*import { Component, OnInit } from '@angular/core';
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
}*/



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
