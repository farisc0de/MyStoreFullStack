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
  };

  addToCart(product: Product): void {
    const cartProducts: Product[] = this.getCartProduct();
    localStorage.setItem('products', JSON.stringify(product));
    alert('Product added to cart!');
  }

  getCartProduct() {
    const getProduct = localStorage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }
}
