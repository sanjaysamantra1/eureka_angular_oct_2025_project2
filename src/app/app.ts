import { Component, signal } from '@angular/core';
import { MaterialDemo } from './components/material-demo/material-demo';

@Component({
  selector: 'app-root',
  imports: [
    MaterialDemo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_angular_oct_2025_project2');
}
