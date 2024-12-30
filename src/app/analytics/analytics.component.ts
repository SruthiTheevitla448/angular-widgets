import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import chart, { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements AfterViewInit {
  @ViewChild('chart', { static: false }) chartElement!: ElementRef;

  ngAfterViewInit() {
    const ctx = this.chartElement.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56],
            borderColor: 'rgba(255,99,132)',
            backgroundColor: 'rgba(255,99,132, 0.5)',
            fill: true,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        // elements: {
        //   line: {
        //     tension: 0.4
        //   }
        // }
      },
    });
  }
}
