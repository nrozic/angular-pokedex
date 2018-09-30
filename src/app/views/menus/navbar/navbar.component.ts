import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment.prod';
import { _ROUTES } from '../../../commons/constants/constants';

export interface IMenuItem {
    href: string;
    title: string;
    id?: string;
    icon?: string;
}

const APP_MENU = [
    { href: '/', title: 'Home' },
    { href: _ROUTES.myPokemons, title: 'My Pokemons' },
];

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @ViewChild('mainmenu') mainmenu: ElementRef;
    private _isMenuActive = false;
    appTitle = environment.appTitle;
    menuItems: IMenuItem[] = APP_MENU;

    constructor(
        private titleService: Title
    ) { }

    ngOnInit() {
        this.setInitialTitle();
    }

    setInitialTitle() {
        this.titleService.setTitle(APP_MENU[0].title + environment.titleSeparator + this.appTitle);
    }

    toggleMenu(newTitle?: string) {
        this._isMenuActive = !this._isMenuActive;
        if (newTitle) {
            this.titleService.setTitle(newTitle + environment.titleSeparator + this.appTitle);
        }
    }

    closeMenu() {
        this._isMenuActive = false;
    }

    get isMenuActive() {
        return this._isMenuActive;
    }

}
