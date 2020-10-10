import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private sortEvent = new EventEmitter();

  constructor() { }

  public emitSortEvent(column): void {
    console.log(column);
    this.sortEvent.emit(column);
  }

  public getSortEvent(): EventEmitter<any> {
    return this.sortEvent;
  }
}
