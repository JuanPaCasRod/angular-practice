import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videojuegos',
  imports: [FormsModule],
  templateUrl: './videojuegos.html',
  styleUrl: './videojuegos.css',
})
export class Videojuegos {

  videojuegos: string[] = [
    'The Legend of Zelda: Breath of the Wild',
    'God of War',
    'Red Dead Redemption 2',
    'The Witcher 3: Wild Hunt',
    'Minecraft',
    'Fortnite',
    'Cyberpunk 2077',
    'Hades',
    'Among Us',
    'Animal Crossing: New Horizons'
  ];

  nuevoJuego: string = '';

  addJuego() {
    if (this.nuevoJuego.trim()) {
      this.videojuegos.push(this.nuevoJuego.trim());
      this.nuevoJuego = '';
    }

  } 
}