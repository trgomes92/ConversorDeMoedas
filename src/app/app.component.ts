import { Component, Injectable, OnInit } from '@angular/core';
import { ConversorService } from './service/conversor.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Conversor de Moedas';


    constructor(service: ConversorService){
      service.converteMoeda();
    };

  ngOnInit(): void{

  }






}
