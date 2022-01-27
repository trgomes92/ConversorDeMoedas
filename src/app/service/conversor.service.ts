import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerComponent } from '../container/container.component';
@Injectable({
  providedIn: 'root'
})
export class ConversorService {
    valorInserido?:number = 100;
    moedaRecebida?: string = 'USD'; //essa variavel recebe o codigo da moeda que o usuario inseriu o valor
    moedaParaSerConvertida?: string = 'EUR'; // essa variavel recebe o codigo da moeda q o usuario quer q seja convertida

  constructor(private http: HttpClient) {
     };



     API = 'https://api.exchangerate.host/convert?';

   converteMoeda(): void{

     this.http.get<Object>(this.API + `from=${this.moedaRecebida}&to=${this.moedaParaSerConvertida}&amount=${this.valorInserido}`).subscribe( result =>{
        console.log('foi caralho');
        console.log(result)

     });
   }

}
