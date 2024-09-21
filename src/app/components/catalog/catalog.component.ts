import { Component, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {

  @Input() products!: Product[];

}
