import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
  isLoading = false;
  receitas: any[];
  constructor(
    private receitasSvc: ReceitasService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.receitasSvc.get().subscribe(
      data => this.receitas = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
