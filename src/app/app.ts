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
  nombreProyecto = 'Aprendiendo Angular 19 en adelante angular-practice';
  descripcion = 'Esto es una clase rapida de repaso de Angular moderno';
  profesor = 'Juan Pablo Castilla';
}
