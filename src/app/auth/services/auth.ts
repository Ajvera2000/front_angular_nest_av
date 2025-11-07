// auth.service.ts


import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://jsonplaceholder.typicode.com" //Solo para prueba deberia ir "http://127.0.0.1:3000"

  private http = inject(HttpClient)

  //constructor(private http: HttpClient) { } de esta forma se inyectaba en versiones anteriores de Angular

  constructor() { }

  loginConNest(credenciales: any) {
    return this.http.get<any>(`${this.baseUrl}/todos`);
  }

  registroConNest(datos: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, datos);
  }
}