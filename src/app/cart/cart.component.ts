import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  total: number = 0;
  totalItems: number = 0;

  ngOnInit(): void {
    this.cart = this.getCartProduct();
    this.getTotal();
    this.totalItems = this.cart.length;
  }

  getCartProduct() {
    const getProduct = localStorage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }

  getTotal() {
    this.total = this.cart
      .reduce((acc: any, item: { price: any; quantity: any }) => {
        return (acc + item.price) * item.quantity;
      }, 0)
      .toPrecision(4);
  }
}
