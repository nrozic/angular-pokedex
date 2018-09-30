import { environment } from '../../../environments/environment';

export enum _ENDPOINTS {
    pokemon = 'pokemon/', // used to fetch pokemons list as well as pokemon details if pokemon ID is provided as second param
}

export enum _ROUTES {
    home = 'home',
    pokemon = 'pokemon',
    myPokemons = 'my-pokemons',
    notFound = '404'
}

export enum _SPRITES {
    frontDefault = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    frontShiny = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny',
    backDefault = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/',
    backShiny = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shimy/',
}

export const _MY_POKEMONS_KEY = 'my-pokemons';
