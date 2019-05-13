import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {

    endpoint = 'https://coinapinodewrapper.herokuapp.com/currency';
    currencyRateEndpoint = 'https://api.exchangeratesapi.io/latest?base=USD';
    showLoader: boolean;

    getCurrencyConversionData(): Observable<any> {
        return this.http.get(this.endpoint);
    }

    getCurrencyRateEndpoint(): Observable<any> {
        return this.http.get(this.currencyRateEndpoint);
    }


    constructor(private http: HttpClient) {
    }
}
