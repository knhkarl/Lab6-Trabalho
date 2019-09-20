import { Component, ViewChild } from '@angular/core';
import { Cars } from './cars';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('carForm', {static: true})
  carForm: NgForm;

  newCar: Cars = new Cars();
  car: Cars [] = [];

  saveCar(){
    if(!this.newCar.id){
      this.newCar.id = (new Date().getTime());
      this.car.push(this.newCar);
    }else{
      let oldCar = this.car.find(p => p.id === this.newCar.id);
      oldCar.tipo = this.newCar.tipo;
      oldCar.marca = this.newCar.marca;
      oldCar.modelo = this.newCar.modelo;
      oldCar.cor = this.newCar.cor;
      oldCar.ano = this.newCar.ano;
    }
    this.newCar = new Cars();
    this.carForm.reset();
  }

  edit(cr : Cars){
    this.newCar = new Cars(cr.id, cr.tipo, cr.marca, cr.modelo, cr.cor, cr.ano);
  }

  delete(cr : Cars){
    let index = this.car.findIndex(p => p.id === cr.id);
    this.car.splice(index, 1);
  }
}
