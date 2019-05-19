import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {DataProviderService} from '../data-provider.service';

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

    constructor(public dataProv: DataProviderService, public auth: AuthService) {
    }

    loginSubmit() {
        this.auth.login(this.loginFormObj.email, this.loginFormObj.password)
            .subscribe(data => {
                console.log(data);
            });
    }

    ngOnInit() {
    }

}
