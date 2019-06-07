import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {DataProviderService} from './data-provider.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService, private dataProv: DataProviderService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log('DEBUGGING REQUEST', request);
        if (request.url.includes(this.dataProv.endpoint)) {
            const token = this.auth.getToken();
            if (token) {
                request = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}
