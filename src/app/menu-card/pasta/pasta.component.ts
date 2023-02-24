import {Component, OnInit} from '@angular/core';
import {Product} from "../types/product";
import {ProductService} from "../product.service";
import {map, Observable, of} from "rxjs";

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  selectedProduct: Product[] = [];


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts()
      .pipe(
        map((products) => {
          return products.filter((item) => item.type === 'pasta');
        })
      );
  }

  selectProduct(product: Product) {
    console.log(product.description);
    this.productService.addToCart(product);
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});
  }

  onRowSelect(event: any) {
    console.log(event.data.description);
    this.productService.addToCart(event.data);
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }
}
