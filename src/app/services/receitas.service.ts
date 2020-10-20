import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Receita } from '../models/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  listarReceitas: string = environment.listar_receitas_url;
  novaReceita: string = environment.nova_receita_url;
  deletarReceita: string = environment.deletar_receitas_url;

  constructor(
    private http: HttpClient) { }

    get(): Observable<Receita[]> {
      return this.http.get<Receita[]>(this.listarReceitas);
    }

    adicionar(receita: Receita): Observable<Receita> {
      return this.http.post<Receita>(this.novaReceita, receita);
    }

    deletar(receita: Receita): Observable<any> {
      return this.http.request<Receita>('DELETE', this.deletarReceita, {
        body: receita
      });
    }
}
