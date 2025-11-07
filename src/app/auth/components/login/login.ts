import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router'; // ✅ Router de Angular

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [JsonPipe]
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);
  private http = inject(HttpClient); // ✅ Inyectamos HttpClient

  loginForm = new FormGroup({
    email: new FormControl('ajb.vera@yavirac.edu.ec', [Validators.email, Validators.required]),
    password: new FormControl('123456', Validators.required)
  });

  funIngresar() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin']); // Navega a /admin
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
