import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}
interface Favorito{
  id:number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})

export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario')miFormulario! :NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  nuevojuegot:string = '';

  persona:Persona = {
    nombre:'carlos',
    favoritos:[
      {
        id:1,
        nombre:'pruebas'
      },
      {
        id:2,
        nombre:'pruebas2'
      }
    ]
  }
  guardar(){
    console.log('formulario enviado')
  }
  eliminar(i:number){
    this.persona.favoritos.splice(i, 1);
  }
  agregar(){
   const nuevojuego:Favorito = {
        id:this.persona.favoritos.length +1,
        nombre:this.nuevojuegot
      }

    this.persona.favoritos.push(nuevojuego)
    
  }
}
