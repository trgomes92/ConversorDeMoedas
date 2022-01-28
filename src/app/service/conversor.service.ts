

import { ContainerComponent } from '../container/container.component';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Conversao } from '../container/conversao';


@Injectable({
  providedIn: 'root'
})
export class ConversorService{


  selectedOptionMoedaAtual: string = '';
  selectedOptionMoedaConverter = '';
  valor = 0;

  constructor(private http: HttpClient) {

  };






     API = 'https://api.exchangerate.host/convert?';

   converteMoeda(conversao: Conversao):void{


     this.http.get<Object>(this.API + `from=${conversao.selectedOptionMoedaAtual}&to=${conversao.selectedOptionMoedaConverter}&amount=${conversao.valor}`).subscribe( result =>{
        console.log('API RODANDO! :)');
        console.log(result)

     });
   }

}

