import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpRequestsInterceptor } from 'src/app/commons/interceptors/http-request.interceptor';
import { NavbarComponent } from 'src/app/views/menus/navbar/navbar.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';
import { HeaderComponent } from 'src/app/views/header/header.component';
import { FooterComponent } from 'src/app/views/footer/footer.component';
import { LoaderComponent } from 'src/app/views/loader/loader.component';
import { PokemonListCardComponent } from 'src/app/commons/components/pokemon-list-card/pokemon-list-card.component';
import { AppPreloadImageDirective } from 'src/app/commons/directives/preload-image.directive';
import { FilterPipe } from 'src/app/commons/pipes/filter.pipe';
import { PokemonDetailsComponent } from '../../views/pokemon-details/pokemon-details.component';
import { MyPokemonsComponent } from '../../views/my-pokemons/my-pokemons.component';
import { ErrorsHandler } from 'src/app/commons/error-handlers/errors-handler';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        NavbarComponent,
        HomeComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        PokemonListCardComponent,
        AppPreloadImageDirective,
        FilterPipe,
        PokemonDetailsComponent,
        MyPokemonsComponent,
    ],
    providers: [
        // Providing http request interceptor
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestsInterceptor,
            multi: true
        },
        {
            provide: ErrorHandler,
            useClass: ErrorsHandler
        },
    ],
    exports: [
        RouterModule,
        HomeComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        FormsModule,
        PokemonListCardComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppPreloadImageDirective,
                FilterPipe
            ] // Providers that needs to be shared in lazy loaded modules
        };
    }
}
