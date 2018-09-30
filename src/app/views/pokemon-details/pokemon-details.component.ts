import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PokemonsService } from '../../commons/services/pokemons.service';
import { IPokemonDetails } from '../../commons/models/pokemon-details.model';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
    private _subscriptions = new Subscription();
    private _currentImage: string;
    ready = false;
    pokemon: IPokemonDetails;
    constructor(
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private pokmeonService: PokemonsService
    ) { }

    ngOnInit() {
        this.getPokemonId();
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {

    }

    get currentImage() {
        return this._currentImage;
    }

    set imageType(gender: 'default' | 'female') {
        this._currentImage = (gender === 'female') ? this.pokemon.sprites.front_female : this.pokemon.sprites.front_default;
    }

    /**
     * Method to retrieve ID from url
     *
     * @private
     * @memberof PokemonDetailsComponent
     */
    private getPokemonId() {
        const slugSubscription = this.activatedRoute.params.subscribe((params) => {
            if (params && params.id) {
                this.loadPokemonDetails(params.id);
            } else {
                throw new Error('ID param is missing in url, Cannot load pokemon without ID!');
            }
        });

        this._subscriptions.add(slugSubscription);
    }

    private loadPokemonDetails(id: string) {
        const sub = this.pokmeonService.getPokemon(id).subscribe(
            response => {
                this.pokemon = response;
                this.setTitle();
                this.imageType = 'default';
                this.ready = true;
            },
            error => {
                console.error('There was an error: ' + error.message);
            }
        );
    }

    private setTitle() {
        this.titleService.setTitle(this.pokemon.name + environment.titleSeparator + environment.appTitle);
    }

}
