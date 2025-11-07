import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  
  loginForm=new FormGroup({
    email:new FormControl('ajb.vera@yavirac.edu.ec'),//valores por defecto
    password:new FormControl('123456'),//valores por defecto
})

funIngresar(){
  alert("Ingresando...")
}
}
