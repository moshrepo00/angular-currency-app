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

    signUpFormObj = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    selectedFile: any;

    onSelectFile(event) {
        this.convertToBase64(event);
        this.selectedFile = event;
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

    constructor(public dataProv: DataProviderService, public auth: AuthService) {
    }


    ngOnInit() {
    }

}
