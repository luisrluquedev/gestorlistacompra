import { Injectable } from '@angular/core';
import { Tarea } from '../models/compraslist';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceTsService {
  tareas: Tarea[] = [
    { id: 1, titulo: 'Leche', cantidad: 6 },
    { id: 2, titulo: 'Pan', cantidad: 1},
    { id: 3, titulo: 'Pasta dientes', cantidad: 2 },
  ];

  constructor() { }

  getTareas() {
    return this.tareas;
  }
}
