import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export enum HttpStatusCodes {
    OK = 200,
    badRequest = 400,
    notAuthorized = 401,
    forbidden = 403,
    notFound = 404,
    internalServerError = 500,
    badGateway = 502,
    serviceUnavailable = 503,
    gatewayTimeout = 504
}

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private httpClient: HttpClient
    ) { }

    private fullUrl(path: string) {
        return environment.apiUrl + path;
    }

    /**
     * Method to handle all GET requests
     *
     * @param {string} path
     * @param {(HttpHeaders | null)} [headers]
     * @param {HttpParams} [params]
     * @returns {Observable<any>}
     * @memberof HttpService
     */
    get(path: string, headers?: HttpHeaders | null, params?: HttpParams): Observable<any> {
        return this.httpClient
            .get(this.fullUrl(path), { headers: headers, params: params });
    }
}
