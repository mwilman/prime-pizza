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
  selectedProduct: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => this.products = data.filter((p) => p.type === 'pizza')
    );
  }

  selectProduct(product: Product) {
    console.log(product.description);
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});
  }

  onRowSelect(event: any) {
    console.log(event.data.description);
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }
}
