import { TestBed, inject } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonsService]
    });
  });

  it('should be created', inject([PokemonsService], (service: PokemonsService) => {
    expect(service).toBeTruthy();
  }));
});
