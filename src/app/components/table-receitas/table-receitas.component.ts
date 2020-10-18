import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-table-receitas',
  templateUrl: './table-receitas.component.html',
  styleUrls: ['./table-receitas.component.css']
})
export class TableReceitasComponent implements OnInit {

  @Input() receitas: any[];
  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.eventsService.getSortEvent().subscribe( (data: any) => {
      this.sort(data.column.toLowerCase(), data.reverse);
    });
  }

  sort(column: string, reverse = false): void {
    this.receitas = this.receitas.sort( (a: any, b: any) => {
      let comparison = 0;

      switch (column) {
        case 'titulo': {
          comparison = this.comparePostProperties(a, column, b, comparison, reverse);
          break;
        }
        case 'status': {
          comparison = this.comparePostProperties(a, column, b, comparison, reverse);
          break;
        }
        default: {
          if (a[column] > b[column]) {
            comparison = reverse ? -1 : 1;
          }
          if (a[column] < b[column]) {
            comparison = reverse ? 1 : -1;
          }
          break;
        }
      }
      return comparison;
    });
  }

  private comparePostProperties(a: any, column: string, b: any, comparison: number, reverse = false): number {
    if (a.post[column] > b.post[column]) {
      comparison = reverse ? -1 : 1;
    }
    if (a.post[column] < b.post[column]) {
      comparison = reverse ? 1 : -1;
    }
    return comparison;
  }
}
