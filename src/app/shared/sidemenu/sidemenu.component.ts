import { Component, OnInit } from '@angular/core';
export interface Menuitems{
  texto:string,
  ruta:string
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  templeteMenu:Menuitems[] = [
    {
      texto:'Basicos',
      ruta:'Templete/basicos'
    },
    {
      texto:'Dinamicos',
      ruta:'Templete/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'Templete/switches'
    }
    
  ]

  reactiveMenu:Menuitems[]=[
    {
      texto:'Basicos',
      ruta:'Reactive/basicos'
    },
    {
      texto:'Dinamicos',
      ruta:'Reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'Reactive/swhitches'
    }
  ]
  authMenu:Menuitems[]=[
    {
      texto:'Login',
      ruta:'auth/login'
    },
    {
      texto:'Registro',
      ruta:'auth/registro'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
