import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent {
  @Input()
  product: any = {
    name: 'Product Name',
    price: 0,
    url: 'https://via.placeholder.com/150',
  };
}
