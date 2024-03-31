import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {

  formulario: FormGroup;
  userService: any;
  router: any;

  constructor(private FormBuilder: FormBuilder) {
    this.formulario = this.FormBuilder.group({
      nombre: [null, [Validators.required]],
      apellidos: [null],
      email: [null, [Validators.email]],
      password: []
    })
  }
  async onSubmit() {
     console.log(this.formulario.value)
    try {
      const response = await this.userService.register(this.formulario.value);
      alert('Usuario registrado correctamente');
      localStorage.setItem('token_crm', response.token!);
      this.router.navigateByUrl('/gestion');
    } catch (error) {
      alert('Error en el registro')
    }
    
  }
  
}

