import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../models/veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'tests-frm-veiculo',
  templateUrl: './frm-veiculo.component.html',
  styleUrls: ['./frm-veiculo.component.css'],
})
export class FrmVeiculoComponent implements OnInit {
  constructor(
    private router: Router,
    private veiculoService: VeiculoService,
    private route: ActivatedRoute
  ) {}


  model: Veiculo = new Veiculo();

 
  id!: number;

  voltarParaLista() {
    this.router.navigate(['/veiculos']);
  }

  obterPorId(id:number){

    this.veiculoService.ObterPorId(id).subscribe({
      error: (e) => { console.log(e) },
      next: (dados) => { this.model = dados },
      });
  }

  submit(): void {


    if (this.id > 0) {

      this.veiculoService.Editar(this.id,this.model).subscribe({
        error: (e) => { console.log(e) },
        next: (dados) => {
          alert('Veiculo alterado com sucesso!!!!!');
          this.voltarParaLista();
         },
        });

    } else {
      this.veiculoService.Adicionar(this.model).subscribe({
        error: (e) => { console.log(e) },
        next: (dados) => {
          alert('Veiculo cadastrado com sucesso!!!!!');
          this.voltarParaLista();
         },
        });
    }
  }

  ngOnInit(): void {

 
    this.id =  this.route.snapshot.params['id'];

    if (this.id){
      this.obterPorId(this.id);
    }
  }
}
