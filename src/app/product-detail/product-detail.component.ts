import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input() product: Product = {
    id: 0,
    name: 'Product Name',
    price: 0,
    url: 'https://via.placeholder.com/150',
    description: 'Product Description',
    amount: '0',
    quantity: 0,
  };

  addToCart(product: Product): void {
    const cartProducts: Product[] = this.getCartProduct();
    let products: Product[] = [];

    if (cartProducts.length == 0) {
      products = [...cartProducts, product];
      localStorage.setItem('products', JSON.stringify(products));
      const message = `${product.name} has been added to your cart.`;
      alert(message);
      return;
    }

    let productInCart = cartProducts.find((ele) => ele.id === product.id);
    console.log(cartProducts);

    if (!productInCart) {
      products = [...cartProducts, product];
      localStorage.setItem('products', JSON.stringify(products));
      const message = `${product.name} has been added to your cart.`;
      alert(message);
    }
  }

  getCartProduct() {
    const getProduct = localStorage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }
}
