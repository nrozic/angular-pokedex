import { environment } from '../../../environments/environment';

export enum _ENDPOINTS {
    pokemon = 'pokemon/', // used to fetch pokemons list as well as pokemon details if pokemon ID is provided as second param
}

export enum _ROUTES {
    home = 'home/',
    pokemon = 'pokemon/',
    notFound = '404/'
}

export enum _SPRITES {
    frontDefault = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    frontShiny = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny',
    backDefault = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/',
    backShiny = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shimy/',
}
