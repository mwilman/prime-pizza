import {Component, OnInit} from '@angular/core';
import {Product} from "../types/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.cart = this.productService.cart;
  }
}

