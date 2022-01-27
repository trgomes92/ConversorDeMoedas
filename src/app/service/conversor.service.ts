import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
    //valorInserido?:number = 100;
    moedaRecebida?: string = 'USD'; //essa variavel recebe o codigo da moeda que o usuario inseriu o valor
    moedaParaSerConvertida?: string = 'BRL'; // essa variavel recebe o codigo da moeda q o usuario quer q seja convertida




  constructor(private http: HttpClient) {
     };



     API = 'https://api.exchangerate.host/convert?';

   converteMoeda(valorInserido: any):void{

     this.http.get<Object>(this.API + `from=${this.moedaRecebida}&to=${this.moedaParaSerConvertida}&amount=${valorInserido}`).subscribe( result =>{
        console.log('API RODANDO! :)');
        console.log(result)

     });
   }

}
