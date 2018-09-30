import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private _numberOfRequests: number;
    spinnerChange = new BehaviorSubject<boolean>(false);

    constructor() {
        this.init();
    }

    private init() {
        this.numberOfRequests = 0;
        this.spinnerChange.next(false);
    }

    private get numberOfRequests() {
        return this._numberOfRequests;
    }

    private set numberOfRequests(newValue: number) {
        // console.log('numberOfRequests: ', newValue);
        this._numberOfRequests = newValue;
        this.toggleLoadingSpinnerVisiblity(newValue !== 0);
    }

    private toggleLoadingSpinnerVisiblity(visible: boolean) {
        this.spinnerChange.next(visible);
    }

    show() {
        this.numberOfRequests++;
    }

    hide() {
        this.numberOfRequests--;
    }
}
