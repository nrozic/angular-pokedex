import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from 'src/app/commons/error-handlers/errors.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
    errorService: ErrorsService;

    constructor(private injector: Injector) { }

    init() {
        // Because the ErrorHandler is created before the providers, we’ll have to use the Injector to get them.
        this.errorService = this.injector.get(ErrorsService);
    }

    handleError(error: HttpErrorResponse) {
        this.init();
        if (error instanceof HttpErrorResponse) {
            // Server-side / Backend error occured. The backend returned an unsuccessful response code.
            console.error('Server-side/Backend error occured; code:', error.status, 'body was:', error.error, 'full error:', error);

            if (!navigator.onLine) {
                this.errorService.handleNoInternetConnection(error);
            } else {
                this.errorService.handleErrors(error);
            }
        } else {
            // A client-side or network error occurred. Handle it accordingly.
            console.error(error);
        }
        return throwError('Something bad happened; please try again later');
    }
}
