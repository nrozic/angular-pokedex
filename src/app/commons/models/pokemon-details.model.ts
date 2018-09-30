import { Deserialize } from 'src/app/commons/models/deserialize.model';
import { _SPRITES, _ROUTES } from '../constants/constants';

export interface INamedApiResource {
    name: string;
    url: string;
}

export interface IPokemonAbility {
    ability: INamedApiResource;
    is_hidden: boolean;
    slot: number;
}

export interface IGameIndicies {
    gameIndex: number;
    version: INamedApiResource;
}

export interface IPokemonHeldItemVersion {
    rarity: number;
    version: INamedApiResource;
}

export interface IPokemonHeldItem {
    item: INamedApiResource;
    versionDetails: IPokemonHeldItemVersion[];
}

export interface IPokemonMoveVersion {
    level_learned_at: number;
    move_learned_method: INamedApiResource;
    version_group: INamedApiResource;
}

export interface IPokemonMove {
    move: INamedApiResource;
    version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface IPokemonStat {
    base_stat: number;
    effort: number;
    stat: INamedApiResource;
}

export interface IPokemonType {
    slot: number;
    type: INamedApiResource;
}

export class IPokemonDetails extends Deserialize {
    abilities: IPokemonAbility[] = [];
    base_experience: number;
    forms: INamedApiResource[];
    game_indicies: IGameIndicies;
    height: number;
    held_items: IPokemonHeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: IPokemonMove[];
    name: string;
    order: number;
    species: INamedApiResource;
    sprites: IPokemonSprites;
    stats: IPokemonStat[];
    types: IPokemonType[];
    weight: number;

    constructor(data) {
        super();
        this.deserialize(data);
    }
}
