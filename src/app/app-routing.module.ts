import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'main',
        component: MainComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule,
        FormsModule
    ]
})
export class AppRoutingModule {
}
