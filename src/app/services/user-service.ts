import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  getAllUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
  }
}
