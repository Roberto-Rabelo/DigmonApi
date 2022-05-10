import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Digmon } from '../models/digmon.model';
import { DigmonServices } from '../services/digmon.service';


@Component({
  selector: 'app-digmon-detalhes',
  templateUrl: './digmon-detalhes.component.html',
  styleUrls: ['./digmon-detalhes.component.css']
})
export class DigmonDetalhesComponent implements OnInit {

  digmons : Digmon[] =[];
  pagina :number = 1;
  filtro : any ={nome: '', level: ''};

  constructor(private digmonService: DigmonServices, private ngxService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.onInit();
  }
  onInit() :void {
    this.digmonService.getAll().subscribe(resposta =>{this.digmons = resposta})
  }
  handlePageChange(event: number): void {
    this.pagina = event
  }

}
