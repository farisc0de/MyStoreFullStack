import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css'],
})
export class CartproductComponent {
  @Input() product: any = {};

  deletedItem(id: number) {
    const storageProducts = this.getCartProduct();
    const products = storageProducts.filter(
      (product: Product) => product.id !== id
    );

    if (products.length == 0) {
      localStorage.removeItem('products');
      window.location.reload();
      alert('Item has been removed from your cart.');
      return;
    }

    window.localStorage.clear();
    localStorage.setItem('products', JSON.stringify(products));
    alert('Item has been removed from your cart.');
    window.location.reload();
  }

  getCartProduct() {
    const getProduct = localStorage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }

  increateQuantity(id: number) {
    const storageProducts = this.getCartProduct();
    const products = storageProducts.map((product: Product) => {
      if (product.id === id) {
        product.quantity++;
      }
      return product;
    });
    window.localStorage.clear();
    localStorage.setItem('products', JSON.stringify(products));
    window.location.reload();
  }

  decreaseQuantity(id: number) {
    const storageProducts = this.getCartProduct();
    const products = storageProducts.map((product: Product) => {
      if (product.id === id) {
        product.quantity--;
      }
      return product;
    });
    window.localStorage.clear();
    localStorage.setItem('products', JSON.stringify(products));
    window.location.reload();
  }
}
