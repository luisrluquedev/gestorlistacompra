import { TestBed } from '@angular/core/testing';

import { Tarea.Service.TsService } from './tarea.service.ts.service';

describe('Tarea.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tarea.Service.TsService = TestBed.get(Tarea.Service.TsService);
    expect(service).toBeTruthy();
  });
});
