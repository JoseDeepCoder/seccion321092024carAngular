import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html'
})
export class ProductCartComponent {

  @Input() product!: Product;


}
