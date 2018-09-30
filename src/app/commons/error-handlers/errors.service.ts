import { Injectable } from '@angular/core';

import { HttpStatusCodes } from 'src/app/commons/services/http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ErrorsService {

    constructor() { }

    /**
     * Method that returns list of allowed status codes
     *
     * @returns {HttpStatusCodes[]}
     * @memberof ErrorsService
     */
    allowedStatusCodes(): HttpStatusCodes[] {
        // for now only status code 200 is allowed but this method is easily extendable if there will be special cases in the future
        return [
            HttpStatusCodes.OK
        ];
    }

    /**
     * Method to display network error if there is no internet connection
     *
     * @param {*} error
     * @memberof ErrorsService
     */
    handleNoInternetConnection(error: any) {
        // TODO: create popup component and show message in popup dialog
        alert('No internet connection');
    }

    handleErrors(error: HttpErrorResponse) {
        const statusCode: number = error.status;
        switch (statusCode) {
            case HttpStatusCodes.badRequest:
                alert('Bad request:' + error.message);
                break;

            case HttpStatusCodes.notAuthorized:
                alert('Not Authorized:' + error.message);
                break;

            case HttpStatusCodes.forbidden:
                alert('Forbidden:' + error.message);
                break;

            case HttpStatusCodes.notFound:
                alert('Not found:' + error.message);
                break;

            case HttpStatusCodes.internalServerError:
                alert('Internal server error:' + error.message);
                break;

            case HttpStatusCodes.badGateway:
                alert('Bad gateway:' + error.message);
                break;

            case HttpStatusCodes.serviceUnavailable:
                alert('Service unavailable:' + error.message);
                break;

            case HttpStatusCodes.gatewayTimeout:
                alert('Gateway timeout:' + error.message);
                break;

            default:
                console.log('Unexpected error has occured:' + error.message);
                break;
        }
    }
}
