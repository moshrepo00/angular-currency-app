import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {

    converterEndpoint = 'https://api.coinmarketcap.com/v1/ticker/ethereum';

    getConversionData(): Observable<any> {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/');
    }

    constructor(private http: HttpClient) {
    }
}
