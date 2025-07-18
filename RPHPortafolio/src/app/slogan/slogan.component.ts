import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slogan',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="slogan-container">
      <img [src]="imageUrl" alt="RPH Logo" class="logo-image">
      <h1 class="slogan-text">Donde la tecnología se encuentra con la imaginación</h1>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;700&display=swap');

    .slogan-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #FFFFFF;
      font-family: 'Commissioner', sans-serif;
    }

    .logo-image {
      max-width: 400px;
      height: auto;
      margin-bottom: 2rem;
    }

    .slogan-text {
      font-size: 33px;
      color: #226F54;
      text-transform: uppercase;
      font-weight: 700;
    }
  `]
})
export class SloganComponent {
  imageUrl = '/assets/images/rph-logo.png';
}
