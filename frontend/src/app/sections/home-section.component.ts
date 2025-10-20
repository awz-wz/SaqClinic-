import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService, ClinicInfo } from '../services/content.service';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  clinicInfo = signal<ClinicInfo | null>(null);

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    this.content.getClinicInfo().subscribe((info) => this.clinicInfo.set(info));
  }
}
