import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import {mergeMap} from 'rxjs/operators';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    currencyPrice = {
        eth: 10,
        hkd: '',
        usd: ''
    };

    getCurrencyData(): void {
        this.dataProv.getCurrencyConversionData()
            .pipe(
                mergeMap((convData) => {
                    console.log(convData);
                    this.currencyPrice.usd = convData[0].price_usd;
                    return this.dataProv.getCurrencyRateEndpoint();
                }))
            .subscribe((rateData) => {
                console.log(rateData);
            });
    }

    handleCurrencyUpdate() {

        console.log('currency update');
    }

    constructor(private dataProv: DataProviderService) {
    }


    ngOnInit() {
        this.getCurrencyData();
    }

}
