import { Component, OnInit, Input, HostListener } from '@angular/core';

import { IPokemonList } from 'src/app/commons/models/pokemon.model';
import { AppPreloadImageDirective } from 'src/app/commons/directives/preload-image.directive';
import { HelperService } from 'src/app/commons/services/helper.service';
import { _MY_POKEMONS_KEY } from 'src/app/commons/constants/constants';
import { PokemonsService } from '../../services/pokemons.service';

const LIMIT = 4;

@Component({
    selector: 'app-pokemon-list-card',
    templateUrl: './pokemon-list-card.component.html',
    styleUrls: ['./pokemon-list-card.component.scss'],
    providers: [AppPreloadImageDirective]
})
export class PokemonListCardComponent implements OnInit {
    private _firstVisible = 0;
    private _lastY: number;

    @Input() pokemons: IPokemonList[];
    @Input() filter: string; // Initial filter value is set to speedup initial page load.
    myPokemons: IPokemonList[] = [];
    visibleList: IPokemonList[];
    filteredText: string;

    @HostListener('window:wheel', ['$event']) onScroll(event) {
        // this.updateVisibleList(event);
    }

    @HostListener('touchmove', ['$event']) onTouchMove(event) {
        // this.updateVisibleListOnTouch(event);
    }

    constructor(
        private pokemonsService: PokemonsService
    ) { }

    ngOnInit() {
        // NOTE: in order to use virtual scroll, in *ngFor loop in template pokemons collection should be replaced
        // with visibleList collection and host listeners needs to be enabled and setVisibleList method should be called onInit
        // this.setVisibleList();
        this.updateMyPokemonsList();
    }

    /**
     * Method to reset search filter
     *
     * @memberof PokemonListCardComponent
     */
    resetFilter() {
        this.filter = null;
    }

    /**
     * Method to add new pokemons to my pokemons list
     *
     * @param {IPokemonList} pokemon
     * @returns
     * @memberof PokemonListCardComponent
     */
    togglePokemonInMyPokemonsList(event: MouseEvent, pokemon: IPokemonList) {
        event.preventDefault();
        this.pokemonsService.toggleMyPokemonsList(pokemon, this.myPokemons);
        this.updateMyPokemonsList();
    }

    /**
     * Method to update pokemons list after adding new pokemons
     *
     * @private
     * @memberof PokemonListCardComponent
     */
    private updateMyPokemonsList() {
        this.myPokemons = [];
        this.myPokemons = this.pokemonsService.fetchMyPokemonsList();
    }

    /**
     * Method to set initial visible List for virtual scroll
     *
     * @private
     * @memberof PokemonListCardComponent
     */
    private setVisibleList() {
        this.visibleList = this.pokemons.slice(this._firstVisible, LIMIT);
    }

    /**
     *Method to update visible list on scroll event. It detects scroll direction and calls coresponding method
     *
     * @private
     * @param {MouseWheelEvent} event
     * @memberof PokemonListCardComponent
     */
    private updateVisibleList(event: MouseWheelEvent) {
        const delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;

        (delta < 0) ? this.scrollDown() : this.scrollUp();
    }

    /**
     * Method to update visible items on touch devices. Needs to be optimized, it doesn't work as expected... yet :)
     *
     * @private
     * @param {TouchEvent} event
     * @memberof PokemonListCardComponent
     */
    private updateVisibleListOnTouch(event: TouchEvent) {
        const currentY = event.touches[0].clientY;
        (currentY > this._lastY) ? this.scrollDown() : this.scrollUp();
        this._lastY = currentY;
    }

    /**
     * Simple method that will perform virtual scroll Up
     *
     * @private
     * @returns
     * @memberof PokemonListCardComponent
     */
    private scrollDown() {
        const lastVisiblePokemon = this.visibleList[this.visibleList.length - 1];
        const lastVisiblePokemonIndex = this.pokemons.indexOf(this.pokemons.find(item => item.id === lastVisiblePokemon.id));

        if (lastVisiblePokemonIndex >= this.pokemons.length - 1) { return; }

        ++this._firstVisible;
        const limit = this._firstVisible + LIMIT;
        this.visibleList = this.pokemons.slice(this._firstVisible, limit);
    }

    /**
     * Simple method that will perform virtual scroll down
     *
     * @private
     * @returns
     * @memberof PokemonListCardComponent
     */
    private scrollUp() {
        const firstVisiblePokemon = this.visibleList[0];
        const firstVisiblePokemonIndex = this.pokemons.indexOf(this.pokemons.find(item => item.id === firstVisiblePokemon.id));

        if (firstVisiblePokemonIndex <= 0) { return; }

        --this._firstVisible;
        const limit = this._firstVisible + LIMIT;
        this.visibleList = this.pokemons.slice(this._firstVisible, limit);
    }

}
