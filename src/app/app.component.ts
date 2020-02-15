import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/compraslist';
import { TareaServiceTsService } from './services/tarea.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gestor Lista Compra';
  tareas: Tarea[];
  
  constructor(private tareaServiceTsService: TareaServiceTsService) { }
  
  ngOnInit() {
    this.tareas = this.tareaServiceTsService.getTareas();
  }
}
