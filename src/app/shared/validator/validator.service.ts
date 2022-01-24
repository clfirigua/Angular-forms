import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  userNameInvalid(control: FormControl):ValidationErrors| null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === "strider") {
      return {
        notStrider: true
      }
    }
    return null
  }

  camposIguales(c1:string, c2:string){
    return (control:AbstractControl):ValidationErrors | null =>{
      const pass1 = control.get(c1)?.value
      const pass2 = control.get(c2)?.value
      if(pass1 !== pass2){
        control.get(c2)?.setErrors({noIguales:true})
        return {
          noIguales:true
        }
      }
      control.get(c2)?.setErrors(null)
      return null
    }
  }
}
