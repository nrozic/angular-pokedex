import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/views/home/home.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: ':slug/:id', component: SinglePostComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
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
