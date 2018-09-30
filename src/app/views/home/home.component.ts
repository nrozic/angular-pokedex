import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { PokemonsService } from 'src/app/commons/services/pokemons.service';
import { IPokemonList } from 'src/app/commons/models/pokemon.model';
import { environment } from 'src/environments/environment';

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
        private pokemonService: PokemonsService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.fetchPokemons();
        this.setTitle();
    }

    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }

    private setTitle() {
        this.titleService.setTitle('Homepage' + environment.titleSeparator + environment.appTitle);
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
