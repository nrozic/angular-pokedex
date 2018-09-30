import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/commons/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { _ENDPOINTS } from 'src/app/commons/constants/constants';
import { HelperService } from 'src/app/commons/services/helper.service';
import { IPokemonList } from 'src/app/commons/models/pokemon.model';
import { IPokemonDetails } from 'src/app/commons/models/pokemon-details.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonsService {

    constructor(
        private http: HttpService
    ) { }

    fetchPokemons(): Observable<IPokemonList[]> {
        return this.http.get(_ENDPOINTS.pokemon).pipe(
            map(response => {
                return response.results.map(item => {
                    return new IPokemonList(item);
                });
            })
        );
    }

    getPokemon(id: string) {
        const url = HelperService.concatenateString([_ENDPOINTS.pokemon, id, '/'], '');

        return this.http.get(url).pipe(
            map(response => {
                return new IPokemonDetails(response);
            })
        );
    }
}
