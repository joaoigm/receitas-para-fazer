import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../services/receitas.service';
import { Receita } from '../models/receita';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
  isLoading = false;
  receitas: Receita[];
  constructor(
    private receitasSvc: ReceitasService,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadReceitas();

    this.eventsService.getNovaReceitaEvent().subscribe(
      () => {
        this.isLoading = true;
        this.loadReceitas();
      });
  }


  private loadReceitas() {
    this.receitasSvc.get().subscribe(
      data => this.receitas = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
