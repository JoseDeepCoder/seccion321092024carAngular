import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html'
})
export class ProductCartComponent {

  @Input() product!: Product;

  @Output() productEvenEmitter: EventEmitter<Product> = new EventEmitter();
  addProdctToCart(product: Product) { 
    this.productEvenEmitter.emit(product);
  }

}
