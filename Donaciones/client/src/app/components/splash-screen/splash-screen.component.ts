import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  isLoading = true;

  constructor() {
      // Simula la carga de la aplicación
      setTimeout(() => {
          this.isLoading = false;
      }, 5000);
  }
}
