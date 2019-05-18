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

    signUpFormObj = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    selectedFile: any;


    constructor(public dataProv: DataProviderService, public auth: AuthService) {
    }

    onSelectFile(event) {
        this.convertToBase64(event);
        this.selectedFile = event;
    }

    loginSubmit() {
        this.auth.login(this.loginFormObj.email, this.loginFormObj.password)
            .subscribe(data => {
                console.log(data);
            });
    }

    signUpSubmit() {
        console.log('sign up');
        this.auth.signUp(this.signUpFormObj.firstName, this.signUpFormObj.lastName, this.signUpFormObj.email, this.selectedFile, this.signUpFormObj.password)
            .subscribe(data => {
                console.log(data);
            });
    }

    convertToBase64(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (e: any) => { // called once readAsDataURL is completed
                this.url = e.target.result;
            };
        }
    }


    ngOnInit() {
    }

}
