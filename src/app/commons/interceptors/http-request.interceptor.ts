import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/commons/services/loader.service';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {
    constructor(
        private loaderService: LoaderService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // TODO: implement authentication service
        return this.prepareRequestAndExecute(req, next);
    }

    private prepareRequestAndExecute(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();

        return next.handle(req).pipe(
            finalize(() => {
                this.loaderService.hide();
            })
        );
    }

    private defaultHttpHeaders(): HttpHeaders {
        const httpHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return httpHeader;
    }
}
