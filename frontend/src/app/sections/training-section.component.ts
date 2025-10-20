import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, TrainingItem } from '../services/content.service';

@Component({
  selector: 'app-training-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-section.component.html',
  styleUrls: ['./training-section.component.scss']
})
export class TrainingSectionComponent implements OnInit {
  trainingPrograms = signal<TrainingItem[]>([]);

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    this.content.getTraining().subscribe((items) => this.trainingPrograms.set(items));
  }
}
