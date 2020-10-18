import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private sortEvent = new EventEmitter();

  constructor() { }

  public emitSortEvent(column, reverse: boolean): void {
    this.sortEvent.emit({column, reverse});
  }

  public getSortEvent(): EventEmitter<any> {
    return this.sortEvent;
  }
}
