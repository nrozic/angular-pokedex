import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { LoaderService } from '../../commons/services/loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, AfterContentChecked {
    loaderVisible = true;

    constructor(
        private loaderService: LoaderService
    ) { }

    ngOnInit() {
    }

    ngAfterContentChecked() {
        this.shouldDisplayLoadingSpinner();
    }

    shouldDisplayLoadingSpinner() {
        this.loaderService.spinnerChange.subscribe((data) => {
            this.loaderVisible = data;
        });
    }

}
