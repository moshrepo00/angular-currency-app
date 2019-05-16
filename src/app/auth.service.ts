import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataProviderService} from './data-provider.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(public dataProv: DataProviderService, private http: HttpClient) {
    }

    setToken(token: string) {
        localStorage.setItem('Token', token);
    }

    localStorage(token: string) {
        return localStorage.getItem('Token');
    }

    login(email: string, password: string) {
        const headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        const reqBody = {
            email: email,
            password: password
        };
        return this.http.post(`${this.dataProv.endpoint}/auth/sign_in`, JSON.stringify(reqBody), headers);
    }

    signUp(email, password, firstName, lastName) {
        const headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        const reqBody = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        return this.http.post(`${this.dataProv.endpoint}/auth/register`, JSON.stringify(reqBody), headers);
    }
}
