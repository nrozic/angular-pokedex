import { Deserialize } from 'src/app/commons/models/deserialize.model';
import { _SPRITES, _ROUTES } from '../constants/constants';

export class IPokemonList extends Deserialize {
    name: string;
    url: string;

    constructor(data) {
        super();
        this.deserialize(data);
    }

    get id(): number {
        const parts = this.url.split('/');
        const id = (parts[parts.length - 1] === '') ? parts[parts.length - 2] : parts[parts.length - 1];
        return parseInt(id, 10);
    }

    get href(): string {
        return _ROUTES.pokemon + this.id;
    }

    get icon(): string {
        return _SPRITES.frontDefault + this.id + '.png';
    }
}
