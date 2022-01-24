import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styles: [
  ]
})
export class BasicoComponent implements OnInit {

  // sin usar el form builder
  // miFormulario:FormGroup = new FormGroup({
  //   'nombre'    : new FormControl('RTX 1080ti'),
  //   'precio'    : new FormControl(1500),
  //   'existencia': new FormControl(0),
  // })


  // form builder para formularios más grandes
  miFormulario:FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    precio:[, [Validators.min(0), Validators.required]],
    existencia:[, [Validators.min(0), Validators.required]]
  })
  constructor(private fb:FormBuilder) { } 

  ngOnInit(): void {
    // agregar datos a formulario dinamico
    // preferible hacerlo con reset
    // this.miFormulario.setValue(
    //   {
    //     nombre:'RTX1080ti',
    //     precio:1080,
    //     existencia:15
    //   }
    // )
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    // reinicia el formulario
    this.miFormulario.reset()
  }
  validarCampos(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
}
