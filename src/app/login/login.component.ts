import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {DataProviderService} from '../data-provider.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    url: string;
    loginFormObj = {
        email: '',
        password: ''
    };

    constructor(private router: Router, public dataProv: DataProviderService, public auth: AuthService) {
    }

    loginSubmit() {
        this.auth.login(this.loginFormObj.email, this.loginFormObj.password)
            .subscribe(loginData => {
                const token = loginData.token;
                if (token) {
                    this.auth.setToken(loginData.token);
                    this.router.navigate(['/main']);
                }
            });
    }

    ngOnInit() {
    }

}
