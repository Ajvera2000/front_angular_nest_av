import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // necesario porque estás usando imports
  templateUrl: './login.html',
  styleUrls: ['./login.scss'], // plural correcto
  imports: [JsonPipe] // habilita el pipe "json" en el template
})
export class Login {
  private http = inject(HttpClient);

  loginForm = new FormGroup({
    email: new FormControl("ajb.vera@yavirac.edu.ec", [Validators.email, Validators.required]),
    password: new FormControl("123456", Validators.required)
  });

  funIngresar() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    // alert("Ingresando...");
  }
}
