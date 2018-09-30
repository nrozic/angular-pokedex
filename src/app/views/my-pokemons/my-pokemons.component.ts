import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PokemonsService } from 'src/app/commons/services/pokemons.service';
import { IPokemonList } from 'src/app/commons/models/pokemon.model';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-my-pokemons',
    templateUrl: './my-pokemons.component.html',
    styleUrls: ['./my-pokemons.component.css']
})
export class MyPokemonsComponent implements OnInit {
    myPokemons: IPokemonList[];
    constructor(
        private pokemonsService: PokemonsService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.fetchMyPokemonsList();
        this.setTitle();
    }

    private fetchMyPokemonsList() {
        this.myPokemons = this.pokemonsService.fetchMyPokemonsList();
    }

    private setTitle() {
        this.titleService.setTitle('My Pokemons' + environment.titleSeparator + environment.appTitle);
    }

    updateMyPokemonsList() {
        this.myPokemons = this.pokemonsService.fetchMyPokemonsList();
    }
}
