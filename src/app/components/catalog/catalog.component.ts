import { Component, EventEmitter, Input, Output } from '@angular/core';
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


  @Output() productCatalogEmitter: EventEmitter<Product> = new EventEmitter();
  addProdctToCart(product: Product) {
    this.productCatalogEmitter.emit(product);
  }
}
