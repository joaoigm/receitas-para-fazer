import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-receitas',
  templateUrl: './table-receitas.component.html',
  styleUrls: ['./table-receitas.component.css']
})
export class TableReceitasComponent implements OnInit {

  @Input() receitas: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
