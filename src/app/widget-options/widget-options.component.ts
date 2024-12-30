import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-widget-options',
  standalone: true,
  imports: [CommonModule,MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrls: ['./widget-options.component.scss'],

})

export class WidgetOptionsComponent {
  @Input() resize:any
  @Input() index:any
  // @Output() rows = new EventEmitter<any>();
  // @Output() columns = new EventEmitter<any>();

  // Method to emit the event
  constructor(public ds:DashboardService){

  }
  onWidthSelect(item: any) {
    this.ds.addedWidgets()[this.index].columns=item.value
  }
  onHeightSelect(item: any) {
    this.ds.addedWidgets()[this.index].rows=item.value // Emit the event to the parent component
  }
}
