import { Component } from '@angular/core';
import {Product} from "../types/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  products: Product[] =  [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => this.products = data.filter((p) => p.type === 'pizza')
    );
  }

}
