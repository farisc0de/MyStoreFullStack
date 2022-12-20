import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css'],
})
export class CartproductComponent {
  @Input() product: any = {};
}
