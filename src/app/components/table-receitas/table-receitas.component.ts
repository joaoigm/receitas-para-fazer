import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { EventsService } from '../../services/events.service';
import { Receita } from '../../models/receita';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-table-receitas',
  templateUrl: './table-receitas.component.html',
  styleUrls: ['./table-receitas.component.css']
})
export class TableReceitasComponent implements OnInit {

  iconDelete = faTrash;
  iconEdit = faEdit;

  @Input() receitas: Receita[];
  constructor(
    private eventsService: EventsService,
    private receitaService: ReceitasService
  ) { }

  ngOnInit(): void {
    this.eventsService.getSortEvent().subscribe( (data: any) => {
      this.sort(data.column.toLowerCase(), data.reverse);
    });

    this.sort('nome');
  }

  sort(column: string, reverse = false): void {
    this.receitas = this.receitas.sort( (a: Receita, b: Receita) => {
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

  private comparePostProperties(a: Receita, column: string, b: Receita, comparison: number, reverse = false): number {
    if (a.post[column] > b.post[column]) {
      comparison = reverse ? -1 : 1;
    }
    if (a.post[column] < b.post[column]) {
      comparison = reverse ? 1 : -1;
    }
    return comparison;
  }

  delete(receita: Receita, index: number): void {
    this.receitaService.deletar(receita).subscribe(
      data => {console.log(`receita ${receita.nome} deletada`); },
      error => console.log(error),
    );
    this.receitas = this.receitas.filter( r => r !== receita);
  }
}
