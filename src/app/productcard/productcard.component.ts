import { Component } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent {
  productname = 'Product Name';
  productdescription = 'Product Description';
  productprice = 0;
}
