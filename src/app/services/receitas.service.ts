import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  listarReceitas: string = environment.listar_receitas_url;
  novaReceita: string = environment.nova_receita_url;

  constructor(
    private http: HttpClient) { }

    get(): Observable<any> {
      return this.http.get<any>(this.listarReceitas);
    }
}
