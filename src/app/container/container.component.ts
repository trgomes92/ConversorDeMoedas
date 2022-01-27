import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { ConversorService } from '../service/conversor.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  moedas = [
    {simbolo: 'BRL', nome: 'Real Brasileiro'},
    {simbolo: 'USD', nome: 'Dólar Americano'},
    {simbolo: 'EUR', nome: 'Euro'}
  ];

 valor:number = 0;

  constructor(private service: ConversorService) {

   }

   ngOnInit(){
      this.service.converteMoeda(this.valor);
   }


}
