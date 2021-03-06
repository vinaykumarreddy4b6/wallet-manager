import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-profile',
  templateUrl: './payment-profile.component.html',
  styleUrls: ['./payment-profile.component.css']
})
export class PaymentProfileComponent implements OnInit {

    PaymentInfoGroup: FormGroup;

    options: string[] = ['United Kingdom Pounds', 'Singapore Dollars', 'Indian Rupees'];

    Industries: string[] = ['Retail', 'Technology', 'Manufacturing', 'Insurance', 'Public Sector', 'Charity / Trust', 'Transportation / Logistics'];

    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    PaymentTypes: string[] = ['Salary Payments', 'Vendor/ Supplier Payments', 'Rewards/prizes', 'Reimbursements'];
    Countries: string[] = ['India', 'USA', 'UK', 'Singapore', 'Australia'];
    Currencies: string[] = ['INR', 'USD', 'GBP', 'SGD', 'AUD'];
    CardTypes: string[] = ['Master Card', 'Visa', 'Amex'];

    constructor(private formBuilder: FormBuilder,
        private router: Router, ) { }

    ngOnInit() {

        this.PaymentInfoGroup = this.formBuilder.group({
            //Payment Profile

            avgmonthlyValue: ['', Validators.required],
            avgIntPayments: ['', Validators.required],
            avgValue: ['', Validators.required],
            paymentTypes: ['',],
            countriesList: ['',],
            currenciesList: ['',],           
        });
  }

}
