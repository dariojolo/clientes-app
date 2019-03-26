import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent implements OnInit {

  listaCurso:string[] = ['TypeScript', 'JavaScript','Java SE','C#', 'PHP']
  habilitar:boolean = true;
  etiquetaBoton:string='Ocultar';
  constructor() { }

  ngOnInit() {
  }
  botonClick(){
    if (this.habilitar){
      this.habilitar = false;
      this.etiquetaBoton = 'Mostrar';
    }else{
      this.habilitar = true;
      this.etiquetaBoton = 'Ocultar';
    }
     
  }
}
