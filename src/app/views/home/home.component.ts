import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PokemonsService } from '../../commons/services/pokemons.service';
import { IPokemonList } from '../../commons/models/pokemon.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [PokemonsService]
})
export class HomeComponent implements OnInit, OnDestroy {
    private _subscriptions = new Subscription();
    ready = false;
    title = 'Pokedex';
    pokemonsList: IPokemonList[];
    constructor(
        private pokemonService: PokemonsService
    ) { }

    ngOnInit() {
        this.fetchPokemons();
    }

    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }

    /**
     * Method to fetch complete pokemons collection from API
     *
     * @private
     * @memberof HomeComponent
     */
    private fetchPokemons() {
        const sub = this.pokemonService.fetchPokemons().subscribe(
            (response) => {
                this.pokemonsList = response;
            },
            (error) => {
                console.error(error);
                alert('There was an error while fetching Pokemons list, please try again! ');
            }
        );

        this._subscriptions.add(sub);
    }

}
