import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/views/home/home.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';
import { PokemonDetailsComponent } from 'src/app/views/pokemon-details/pokemon-details.component';
import { _ROUTES } from 'src/app/commons/constants/constants';
import { MyPokemonsComponent } from 'src/app/views/my-pokemons/my-pokemons.component';
import { HelperService } from '../services/helper.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: _ROUTES.myPokemons, component: MyPokemonsComponent },
    { path: _ROUTES.notFound, component: NotFoundComponent },
    { path: HelperService.concatenateString([_ROUTES.pokemon, '/:id'], ''), component: PokemonDetailsComponent },
    { path: '**', redirectTo: _ROUTES.notFound, pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
