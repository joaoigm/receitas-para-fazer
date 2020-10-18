import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { EventsService } from '../services/events.service';

@Directive({
  selector: '[appCursorPointer]'
})
export class CursorPointerDirective {

  reverse = false;

  constructor(
    private events: EventsService,
    private el: ElementRef,
    renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');

  }

  @HostListener('click') onClick(): void {
    this.events.emitSortEvent(this.el.nativeElement.innerText, this.reverse);
    this.reverse = !this.reverse;
  }

}
