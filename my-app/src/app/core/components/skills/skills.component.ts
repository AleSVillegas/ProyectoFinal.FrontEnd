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
    { name: 'HTML & CSS', percent: 75, id: 2 },
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




