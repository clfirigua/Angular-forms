import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  
  miForulario:FormGroup = this.fb.group(
    {
      nombre:['',[Validators.required, Validators.minLength(3)]],
      favoritos: this.fb.array([
        ['Metal Hero', Validators.required],
        ['Death nothe', Validators.required]
      ], Validators.required)
    }
  )
  nuevoFavorito:FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miForulario.get('favoritos') as FormArray
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  validar(control:string){
    return this.miForulario.controls[control].errors && this.miForulario.controls[control].touched;
  }
  guardar(){
    console.log(this.miForulario.invalid)
    if(this.miForulario.invalid){
      this.miForulario.markAllAsTouched();
      return
    }
    console.log(this.miForulario.value)
  }
  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return
    }
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset()
  }
  borrar(i:number){
    this.favoritosArr.removeAt(i);
  }
}
