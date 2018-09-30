import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../../../environments/environment.prod';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
    title = '404 - Not found';
    constructor(
        private titleService: Title
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.title + environment.titleSeparator + environment.appTitle);
    }

}
