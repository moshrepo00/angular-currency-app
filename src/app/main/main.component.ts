import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import {mergeMap} from 'rxjs/operators';
import {Price} from '../price';
import * as moment from 'moment';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

    dataLoaded: boolean;
    currencyPrice: Price = {
        eth: 10,
        usd: 0,
        hkd: 0
    };
    cryptoLastUpdated;
    currencyRateDate;

    getCurrencyData(): void {
        this.dataProv.getCurrencyConversionData()
            .pipe(
                mergeMap((convData) => {
                    console.log(convData);
                    this.currencyPrice.usd = convData[0].price_usd * this.currencyPrice.eth;
                    this.cryptoLastUpdated = moment.unix(convData[0].last_updated).format('LLLL');
                    return this.dataProv.getCurrencyRateEndpoint();
                }))
            .subscribe((rateData) => {
                this.currencyPrice.hkd = this.currencyPrice.usd * rateData.rates.HKD;
                this.currencyRateDate = moment(rateData.date, 'YYYY-MM-DD').format('DD MMM YYYY');
                this.dataLoaded = true;
                console.log(rateData);
            });
    }

    handleCurrencyUpdate() {
        this.getCurrencyData();
    }

    constructor(private dataProv: DataProviderService) {
    }


    ngOnInit() {
        this.getCurrencyData();
    }

}
