import {Component} from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {
    title = 'currency-converter';

    constructor(private dataProv: DataProviderService) {
    }
}
