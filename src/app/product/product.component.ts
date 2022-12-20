import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id: number = 1;
  product: any = {};
  products: any = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.httpService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.product = this.getProductById(this.id);
      },
      error: (err) => console.log(err),
    });
  }

  getProductById(id: any) {
    return this.products.filter((item: any) => item.id === id)[0];
  }
}
