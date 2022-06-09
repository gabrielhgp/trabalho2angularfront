import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService  {


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

  public Editar(id:number, veiculo:Veiculo):Observable<number>{
      return this.http.put<number>(this.api + 'veiculos/' + id, veiculo);
  }

  public Deletar(id:number):Observable<number>{
    return this.http.delete<number>(this.api + 'veiculos/' + id);

  }


}
