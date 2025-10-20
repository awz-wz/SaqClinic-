import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ContentService, ProductItem } from '../services/content.service';

@Component({
  selector: 'app-shop-section',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './shop-section.component.html',
  styleUrls: ['./shop-section.component.scss']
})
export class ShopSectionComponent implements OnInit {
  products = signal<ProductItem[]>([]);

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    this.content.getProducts().subscribe((items) => this.products.set(items));
  }
}
