import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private sortEvent = new EventEmitter();
  private novaReceitaEvent = new EventEmitter();

  constructor() { }

  public emitSortEvent(column, reverse: boolean): void {
    this.sortEvent.emit({column, reverse});
  }

  public emitNovaReceitaEvent(): void {
    this.novaReceitaEvent.emit();
  }

  public getSortEvent(): EventEmitter<any> {
    return this.sortEvent;
  }

  public getNovaReceitaEvent(): EventEmitter<any> {
    return this.novaReceitaEvent;
  }
}
