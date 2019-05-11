import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private dataProv: DataProviderService) {
    }

    ngOnInit() {
        this.dataProv.getConversionData()
            .subscribe(data => console.log(data));
    }

}
