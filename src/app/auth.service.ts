import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataProviderService} from './data-provider.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(public dataProv: DataProviderService, private http: HttpClient) {
    }

    setToken(token: string) {
        localStorage.setItem('Token', token);
    }

    getToken() {
        return localStorage.getItem('Token');
    }

    logout() {
        localStorage.removeItem('Token');
    }

    login(email: string, password: string) {
        const headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        const reqBody = {
            email: email,
            password: password
        };
        return this.http.post(`${this.dataProv.endpoint}/auth/login`, JSON.stringify(reqBody), headers)
            .pipe(
                map((response: any) => {
                    const token = response.token;
                    if (token) {
                        this.setToken(token);
                    }
                    return response;
                })
            );
    }

    signUp(firstName, lastName, email, file, password) {
        const fd = new FormData();
        const selectedFile = file.target.files[0];
        fd.append('firstName', firstName);
        fd.append('lastName', lastName);
        fd.append('email', email);
        fd.append('password', password);
        fd.append('image', selectedFile, selectedFile.name);
        return this.http.post(`${this.dataProv.endpoint}/auth/sign-up`, fd);
    }
}
