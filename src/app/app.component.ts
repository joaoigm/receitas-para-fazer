import { Component, OnInit } from '@angular/core';
import { ReceitasService } from './services/receitas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoading = false;

  title = 'receitas-para-fazer';

  receitas: any[];

  constructor(
    private receitasSvc: ReceitasService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.receitasSvc.get().subscribe(
      data => this.receitas = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
