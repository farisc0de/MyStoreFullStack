import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.component.html',
  styleUrls: ['./ordercomplete.component.css'],
})
export class OrdercompleteComponent {
  firstName!: string | null;
  totalPrice!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.firstName = params.get('firstName');
      this.totalPrice = Number(params.get('totalPrice'));
    });
  }
}
