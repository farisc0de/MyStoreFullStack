import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Output() userInfo = new EventEmitter();
  constructor(private route: Router) {}

  firstName: any;
  lastName: any;
  EmailAddress: any;
  total: number = 0;

  cart: any = [];
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

  onSubmit(value: any) {
    this.route.navigate([`success/${value.firstName}/${this.total}`]);
  }
}
