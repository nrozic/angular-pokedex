import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/commons/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { _ENDPOINTS, _MY_POKEMONS_KEY } from 'src/app/commons/constants/constants';
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

    /**
     *Method to fetch complete pokemons list
     *
     * @returns {Observable<IPokemonList[]>}
     * @memberof PokemonsService
     */
    fetchPokemons(): Observable<IPokemonList[]> {
        return this.http.get(_ENDPOINTS.pokemon).pipe(
            map(response => {
                return response.results.map(item => {
                    return new IPokemonList(item);
                });
            })
        );
    }

    /**
     * Method taht returns pokemon details based on ID
     *
     * @param {string} id
     * @returns {Observable<IPokemonDetails>}
     * @memberof PokemonsService
     */
    getPokemon(id: string): Observable<IPokemonDetails> {
        const url = HelperService.concatenateString([_ENDPOINTS.pokemon, id, '/'], '');

        return this.http.get(url).pipe(
            map(response => {
                return new IPokemonDetails(response);
            })
        );
    }

    /**
     * Method to fetch my Pokemons list from local storage
     *
     * @returns {IPokemonList[]}
     * @memberof PokemonsService
     */
    fetchMyPokemonsList(): any {
        const inStorage = HelperService.getObjectFromLocalStorage(_MY_POKEMONS_KEY);
        const myPokemons = (inStorage) ? inStorage : null;
        if (!myPokemons) { return []; }

        return myPokemons.map(
            item => {
                return new IPokemonList(item);
            }
        );
    }

    toggleMyPokemonsList(pokemon: IPokemonList, myPokemons: IPokemonList[]) {
        const duplicate = myPokemons.find(item => item.url === pokemon.url);

        if (duplicate) {
            const index = myPokemons.indexOf(duplicate);
            myPokemons.splice(index, 1);
        } else {
            myPokemons.push(pokemon);
        }

        HelperService.saveObjectToLocalStorage(_MY_POKEMONS_KEY, myPokemons);
    }
}
