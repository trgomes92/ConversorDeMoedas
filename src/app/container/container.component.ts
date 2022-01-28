import { Conversao } from './conversao';

import { Component } from '@angular/core';
import { ConversorService } from '../service/conversor.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent  {





  moedas = [
    {id: 1, simbolo: 'BRL', nome: 'Real Brasileiro'},
    {id: 2, simbolo: 'USD', nome: 'Dólar Americano'},
    {id: 3, simbolo: 'EUR', nome: 'Euro'}
  ];


  constructor(private service: ConversorService, public cvs: Conversao) {
    cvs.selectedOptionMoedaAtual = '';
    cvs.selectedOptionMoedaConverter = '';
    cvs.valor = 0;
  }






   converter(){
    this.service.converteMoeda(this.cvs);
   }

   /*teste(){
      console.log(this.valor);
      console.log(this.selectedOptionMoedaAtual);
      console.log(this.selectedOptionMoedaConverter);
   }
 */
}
