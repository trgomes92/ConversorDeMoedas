import { Conversao } from './conversao';

import { Component } from '@angular/core';
import { ConversorService } from '../service/conversor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-conversor',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent  {


  moedas = [
    {simbolo: 'BRL', nome: 'Real Brasileiro'},
    {simbolo: 'USD', nome: 'Dólar Americano'},
    {simbolo: 'EUR', nome: 'Euro'}
  ];




  constructor(private service: ConversorService, public cvs: Conversao, private router: Router) {
    cvs.selectedOptionMoedaAtual = '';
    cvs.selectedOptionMoedaConverter = '';
    cvs.valor = 0;

  }






   converter(){
    this.router.navigate(['result'])
    this.service.converteMoeda(this.cvs);

   }

   /*teste(){
      console.log(this.valor);
      console.log(this.selectedOptionMoedaAtual);
      console.log(this.selectedOptionMoedaConverter);
   }
 */
}
