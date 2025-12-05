import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  cars = ['tata', 'honda', 'maruti'];
  addNewCar(newCar: string) {
    this.cars.push(newCar)
  }
}
