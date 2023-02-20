import { Component } from '@angular/core';
import {Product} from "../types/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => this.products = data.filter((p) => p.type === 'pasta')
    );
  }
}
