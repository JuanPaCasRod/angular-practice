import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojuegos } from './components/videojuegos/videojuegos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Videojuegos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreProyecto = 'Hello, angular-practice';
  descripcion = 'Angular 19 practice';
  profesor = 'Juan Pablo Castilla';
}
