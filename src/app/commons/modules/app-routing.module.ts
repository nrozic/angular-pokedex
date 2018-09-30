import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/views/home/home.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';
import { PokemonDetailsComponent } from '../../views/pokemon-details/pokemon-details.component';
import { _ROUTES } from '../constants/constants';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: _ROUTES.pokemon + ':id', component: PokemonDetailsComponent },
    { path: _ROUTES.notFound, component: NotFoundComponent },
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
