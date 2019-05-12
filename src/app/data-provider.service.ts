import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {

    endpoint = 'http://localhost:8080/currency';
    currencyRateEndpoint = 'https://api.exchangeratesapi.io/latest';

    getCurrencyConversionData(): Observable<any> {
        return this.http.get(this.endpoint);
    }
    getCurrencyRateEndpoint(): Observable<any> {
        return this.http.get(this.currencyRateEndpoint);
    }


    constructor(private http: HttpClient) {
    }
}
