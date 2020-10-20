import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Receita } from '../../models/receita';
import { ReceitasService } from '../../services/receitas.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-adicionar-receita',
  templateUrl: './adicionar-receita.component.html',
  styleUrls: ['./adicionar-receita.component.css']
})
export class AdicionarReceitaComponent implements OnInit {
  circle = faCircleNotch;
  submited = false;
  receita: Receita;

  constructor(
    private receitasService: ReceitasService,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.receita = new Receita();
  }

  onSubmit(form: NgForm): void {
    document.getElementsByTagName('form')[0].classList.add('was-validated');
    if (form.valid) {
      this.submited = true;
      this.receitasService.adicionar(this.receita).subscribe(
        (data) => {
          console.log('Nova receita cadastrada');
          console.log(data);
          this.eventsService.emitNovaReceitaEvent();
          form.reset();
          document.getElementsByTagName('form')[0].classList.remove('was-validated');
        },
        err => console.log(err),
        () => this.submited = false
      );
    }
  }
}
