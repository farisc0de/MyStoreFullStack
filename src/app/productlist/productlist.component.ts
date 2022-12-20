import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
