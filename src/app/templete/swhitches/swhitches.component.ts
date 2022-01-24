import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swhitches',
  templateUrl: './swhitches.component.html',
  styles: [
  ]
})
export class SwhitchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;
}
