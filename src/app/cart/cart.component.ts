import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];

  ngOnInit(): void {
    this.cart = this.getCartProduct();
  }

  getCartProduct() {
    const getProduct = localStorage.getItem('products');
    return getProduct ? [JSON.parse(getProduct)] : [];
  }
}
