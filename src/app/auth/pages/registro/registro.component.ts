import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
// import { emailPattern, nombreApellidoPattern, userNameInvalid } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre:['', [Validators.required,Validators.pattern(this.vs.nombreApellidoPattern)] ],
    email:['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailv]],
    userName:['', [Validators.required,this.vs.userNameInvalid]],
    password:['', [Validators.required, Validators.min(6)]],
    copiPassword:['', [Validators.required]],
  },
  {
    validators:[this.vs.camposIguales('password', 'copiPassword')]
  }
  )
  constructor(private fb:FormBuilder, private vs:ValidatorService, private emailv:EmailValidatorService ) { }
  
  get emailErrors():string{
    const errores = this.miFormulario.get('email')?.errors;
    if(errores?.['required']){
      return 'El campo es obligatorio'
    }else if(errores?.['pattern']){
      return  'Los datos no coinciden con formato de correo'
    }else if(errores?.['emailtomado']){
      return 'El correo ya exite'
    }

    return ''
  }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Carlos Andres',
      email:'carlos45gfirigua@gmail.com',
      userName:'232Gene'
    })
  }
  validarCampos(model:string){
    return this.miFormulario.get(model)?.invalid && this.miFormulario.get(model)?.touched
  }
  guardar(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
