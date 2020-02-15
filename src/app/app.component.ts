import { Component } from '@angular/core';
import { Tarea } from './models/compraslist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestor Lista Compra';
  tareas: Tarea[];
  
  constructor() { }
}
