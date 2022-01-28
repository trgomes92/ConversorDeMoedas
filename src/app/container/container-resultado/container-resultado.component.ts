import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-resultado',
  templateUrl: './container-resultado.component.html',
  styleUrls: ['./container-resultado.component.css']
})
export class ContainerResultadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  voltarHome(){
      console.log('voltou caralho')
  }
}
