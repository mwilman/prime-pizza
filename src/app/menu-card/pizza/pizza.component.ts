import {Component, OnInit} from '@angular/core';
import {Product} from "../types/product";
import {ProductService} from "../product.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit{
  products$: Observable<Product[]> =  of([]);
  selectedProduct: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
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
