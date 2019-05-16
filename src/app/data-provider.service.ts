import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {

    // endpoint = 'https://coinapinodewrapper.herokuapp.com/currency';
    endpoint = 'http://localhost:8080';
    currencyRateEndpoint = 'https://api.exchangeratesapi.io/latest?base=USD';
    showLoader: boolean;

    getCurrencyConversionData(): Observable<any> {
        return this.http.get(this.endpoint + '/currency');
    }

    getCurrencyRateEndpoint(): Observable<any> {
        return this.http.get(this.currencyRateEndpoint);
    }

    postSignUpForm(event): Observable<any> {
        const fd = new FormData();
        const selectedFile = event.target.files[0];
        fd.append('image', selectedFile, selectedFile.name);
        fd.append('firstName', 'Radn');
        fd.append('lastName', 'dd');
        fd.append('email', 'some email');
        return this.http.post(`${this.endpoint}/user/create`, fd);
    }


    constructor(private http: HttpClient) {
    }
}
