import { Directive, ElementRef, HostListener } from '@angular/core';
import { EventsService } from '../services/events.service';

@Directive({
  selector: '[appCursorPointer]'
})
export class CursorPointerDirective {

  constructor(private events: EventsService, private el: ElementRef) {
    el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click') onClick(): void {
    this.events.emitSortEvent(this.el.nativeElement.text);
  }

}
