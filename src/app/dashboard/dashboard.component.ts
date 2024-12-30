import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service'; // Make sure your service is in place.
import { WidgetComponent } from '../widget/widget.component';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [WidgetComponent, CommonModule, DragDropModule],
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isMenuOpen = false;

  constructor(public ds: DashboardService) { }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectItem(item: any) {
    console.log('Selected Item:', item);
    this.ds.addWidget(item)
    this.isMenuOpen = false; 
  }
  drop(event: CdkDragDrop<any>) {
    const { previousContainer, container, item } = event;
    this.ds.updateWidgetPosition(previousContainer.data,container.data)
  }
}
