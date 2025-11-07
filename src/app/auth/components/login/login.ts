import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  
  loginForm=new FormGroup({
    email:new FormControl("", [Validators.email, Validators.required]),//<-- valores por defecto
    password:new FormControl("",Validators.required),//<-- valores por defecto
  });

funIngresar(){
  alert("Ingresando...")
}
}
