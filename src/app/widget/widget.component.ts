import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetOptionsComponent } from '../widget-options/widget-options.component';
import { DashboardService } from '../dashboard.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule,WidgetOptionsComponent,DragDropModule],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  host: {
    '[style.grid-area]': 'gridArea'
  }
})
export class WidgetComponent {
  @Input() data: any={}
  @Input() index:any
  showClose:boolean=false
  showOptions=signal(false)
  get gridArea(): string {
    const rows = this.data?.rows ?? 1;
    const columns = this.data?.columns ?? 1;
    return `span ${rows} / span ${columns}`;
  }
  constructor(public ds:DashboardService){

  }
  settings(){
    this.showOptions.set(true) 
    this.showClose=true
  }
  close(){
    this.showOptions.set(false) 
    this.showClose=false
  }
  delete(){
   this.ds.addedWidgets().splice(this.index,1)
  }
 
}
