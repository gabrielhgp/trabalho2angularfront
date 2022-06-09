import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../models/veiculo';
import { VeiculosService } from '../services/veiculos.service';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-lst-veiculos',
  templateUrl: './lst-veiculos.component.html',
  styleUrls: ['./lst-veiculos.component.css'],
})
export class LstVeiculosComponent implements OnInit {
  constructor(private route: Router, private veiculoService: VeiculoService) {}

  veiculos!: Veiculo[];

  ngOnInit(): void {
    this.obterTodos();
  }



  obterTodos() {
    this.veiculoService.ObterTodos().subscribe({
      error: (e) => {
        console.log(e);
      },
      next: (dados) => {
        this.veiculos = dados;
      },
    });
  }

  cadastrarVeiculo() {
    this.route.navigate(['/veiculo']);
  }

  removerVeiculo(id: number) {
    let isExecuted = confirm('Deseja realmente remover este veiculo?');

    if (isExecuted) {
      this.veiculoService.Deletar(id).subscribe({
        next: (d) => {
          this.obterTodos();
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
