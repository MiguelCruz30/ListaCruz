import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  propertyToCheck=1;
  boolToCheck=true;
  date = new Date (2022,4,14);
  mostrarDatos:boolean = false
  verMas():void{
    this.mostrarDatos=!this.mostrarDatos
  }
  promociona(estudiante:any):Boolean{
    let cantidadDeNotas:number = estudiante.notas.length;
    let sumaNotas:number=0;
    for (let index = 0; index < estudiante.notas.length; index++) {
      const element = estudiante.notas[index];
      if (element<4 ){return false}
      sumaNotas=sumaNotas + element;
    }
    if (sumaNotas / cantidadDeNotas >= 7){
      return true;
    }
    else{
      return false;
    }
  }


  estudiantes=[
    {
      nombre: 'Lucas Vicente',
      curso:'Angular',
      notas:[4,7,7,9],
      
    },
    {
      nombre: 'Soledad Rodriguez',
      curso:'Java',
      notas:[7,9,10,10],
    },
    {
      nombre:'Sofia Perez',
      curso:'Html - CSS',
      notas:[4,5,6,6],
    },
    {
      nombre: 'Miguel Cruz',
      curso:'Angular',
      notas:[10,10,7],

    },
    {
      nombre:'Rocio Silva',
      curso:'.NET',
      notas:[5,1,7,9],
    }
  ]}


