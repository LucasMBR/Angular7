import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public texto:string;
  constructor() {
    // Initialization inside the constructor
   this.texto = "Olá, tudo bem?"
  }

  ngOnInit(): void {
    this.texto = "Olá, tudo bem?"
  }
  clicou(){
    this.texto = "Clicou"
  }

}
