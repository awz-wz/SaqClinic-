import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ServiceItem } from '../services/content.service';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  services = signal<ServiceItem[]>([]);

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    this.content.getServices().subscribe((items) => this.services.set(items));
  }
}
