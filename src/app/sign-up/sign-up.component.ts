import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    url: string;

    loginFormObj = {
        email: '',
        password: ''
    };

    selectedFile: any;

    constructor(public dataProv: DataProviderService, public auth: AuthService) {
    }


    ngOnInit() {
    }

}
