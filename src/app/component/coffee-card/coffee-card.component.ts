import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss'
})
export class CoffeeCardComponent {
  coffeeProducts = [
    {
      id: 1,
      name: 'Latte',
      description: 'Cortado made from an Ethiopian blend',
      price: 4.99,
      imageUrl: '../../../assets/images/un-caffe-houston-2.jpg'
    },
    {
      id: 2,
      name: 'Pour Over',
      description: 'Pour Over made from a Brazilian blend',
      price: 5.99,
      imageUrl: '../../../assets/images/tenfold-simpson-helmet.jpg'
    },
    {
      id: 3,
      name: 'Piccolo',
      description: 'Piccolo made from a Columbian blend',
      price: 3.99, 
      imageUrl: '../../../assets/images/merit-seahold-austin.jpg'
    },
    {
      id: 4,
      name: 'Espresso',
      description: 'Espresso made from a Ethiopian blend',
      price: 2.99, 
      imageUrl: '../../../assets/images/simply-coffee-houston.jpg'
    }
  ];
}
