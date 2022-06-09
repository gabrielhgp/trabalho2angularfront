import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Veiculo } from '../models/veiculo';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  api: string = environment.api;

  constructor(private http: HttpClient ) {}

  public ObterTodos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.api + 'veiculos');
  }

  public ObterPorId(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.api + 'veiculos/' + id);
  }

  public Adicionar(veiculo: Veiculo): Observable<number> {
    return this.http.post<number>(this.api + 'veiculos', veiculo);
  }

  public Editar(id: number, veiculo: Veiculo): Observable<number> {
    return this.http.put<number>(this.api + 'veiculos/' + id, veiculo);
  }

  public Deletar(id: Number) {
    return this.http.delete(this.api + 'veiculos/' + id);
  }
}
