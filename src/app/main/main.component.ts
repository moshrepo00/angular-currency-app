import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import {mergeMap, timeInterval} from 'rxjs/operators';
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
    exchangeRate: number;
    currencyRateDate;
    url = '';


    getCurrencyData(): void {
        this.dataProv.showLoader = true;
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
                this.exchangeRate = rateData.rates.HKD;
                this.dataLoaded = true;
                this.dataProv.showLoader = false;
                console.log(rateData);
            });
    }

    handleCurrencyUpdate(): void {
        this.getCurrencyData();
    }

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (e: any) => { // called once readAsDataURL is completed
                this.url = e.target.result;
            };
        }
    }

    constructor(private dataProv: DataProviderService) {
        this.getCurrencyData();
        setInterval(() => {
                this.getCurrencyData();
            },
            120000);
    }


    ngOnInit() {
    }

}
