import { Deserialize } from 'src/app/commons/models/deserialize.model';
import { _SPRITES, _ROUTES, _MY_POKEMONS_KEY } from '../constants/constants';
import { HelperService } from '../services/helper.service';

export class IPokemonList extends Deserialize {
    name: string;
    url: string;

    constructor(data) {
        super();
        this.deserialize(data);
    }

    get id(): string {
        const parts = this.url.split('/');
        const id = (parts[parts.length - 1] === '') ? parts[parts.length - 2] : parts[parts.length - 1];
        return id;
    }

    get href(): string {
        return HelperService.concatenateString([_ROUTES.pokemon, '/', this.id], '');
    }

    get icon(): string {
        return _SPRITES.frontDefault + this.id + '.png';
    }

    get isFavorite(): boolean {
        const myPokemons: IPokemonList[] = HelperService.getObjectFromLocalStorage(_MY_POKEMONS_KEY);
        const match = (myPokemons) ? myPokemons.find(item => item.url === this.url) : null;
        const favorite = (match) ? true : false;
        return favorite;
    }
}
