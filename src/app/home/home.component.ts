import { Component } from '@angular/core';
import { CoffeeCardComponent } from '../component/coffee-card/coffee-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CoffeeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Brew & Bloom';
}
