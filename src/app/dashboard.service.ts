import { computed, Injectable, signal, Signal, Type } from '@angular/core';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ViewsComponent } from './views/views.component';
import { WatchTimeComponent } from './watch-time/watch-time.component';
import { RevenueComponent } from './revenue/revenue.component';
import { AnalyticsComponent } from './analytics/analytics.component';

interface Data {
  id: number;
  label: string;
  content: Type<any>; // Ensures content is a component class
  rows?: number;
  columns?: number
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // Signal holding an array of Data objects
  widgets: Signal<Data[]> = signal([
    {
      id: 1,
      label: 'Subscribers',
      content: SubscribersComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'white',
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'white'
    },
    {
      id: 3,
      label: 'Watch Hours',
      content: WatchTimeComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'white'
    },
    {
      id: 4,
      label: 'Revenue',
      content: RevenueComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'white'
    },
    {
      id: 5,
      label: 'Analytics',
      content: AnalyticsComponent,
      rows: 2,
      columns: 2,
    },
  ]);
  addedWidgets = signal<Data[]>([])
  widgetsToadd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id)
    return this.widgets().filter(w => !addedIds.includes(w.id))
  })
  addWidget(w: Data) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }])

  }
  // moveWidgetToRight(id: any) {
  //   const index = this.addedWidgets().findIndex(w => w.id = id)
  //   if (index == this.addedWidgets().length - 1) {
  //     return
  //   }
  //   else {
  //     let newWidgets: Data[] = [];
  //     newWidgets = [...this.addedWidgets()];
  //     [newWidgets[index], newWidgets[index + 1]] = [
  //       { ...newWidgets[index + 1] },
  //       { ...newWidgets[index] }

  //     ];
  //     this.addedWidgets.set(newWidgets)
  //   }
  // }
  // moveWidgetToLeft(id: any) {
  //   const index = this.addedWidgets().findIndex(w => w.id = id)
  //   if (index == 0) {
  //     return
  //   }
  //   else {
  //     let newWidgets: Data[] = [];
  //     newWidgets = [...this.addedWidgets()];
  //     [newWidgets[index], newWidgets[index - 1]] = [
  //       { ...newWidgets[index - 1] },
  //       { ...newWidgets[index] }

  //     ];
  //     this.addedWidgets.set(newWidgets)
  //   }
  // }
  updateWidgetPosition(currentId: number, targetId: number) {
    const currentIndex = this.addedWidgets().findIndex(w => w.id == currentId)
    if (currentIndex == -1) {
      return
    }
    else {
      const newWidgets = [...this.addedWidgets()]
      const currentwidget = newWidgets.splice(currentIndex, 1)[0];
      const targetIndex = newWidgets.findIndex(w => w.id == targetId)
      if (targetIndex == -1) {
        return
      }
      else {
        let inserAt = targetIndex
        if (targetIndex == currentIndex) {
          inserAt = targetIndex + 1
        }

        newWidgets.splice(inserAt, 0, currentwidget);

      }
      this.addedWidgets.set(newWidgets)
    }
  }
  constructor() { }
}
