import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-clientreg2',
  templateUrl: './clientreg2.component.html',
  styleUrls: ['./clientreg2.component.css']
})
export class Clientreg2Component implements OnInit {
    clientRegisterForm2: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
        private router: Router,) { }

    ngOnInit() {
        this.clientRegisterForm2 = this.formBuilder.group({
            customerId: ['', Validators.required],
            paymentVolume: ['', Validators.required],
            Amountlimit: ['', Validators.required],
            amtLmtPerPayment: ['', Validators.required],
            payLmtPerFile: ['', Validators.required],
            filesLmtPerday: ['', Validators.required],
            msgsLmtPerday: ['', Validators.required],
            activeDaysForPayment: ['', Validators.required],
            currency1: ['', Validators.required],
            currencyFmtForPayments: ['', Validators.required],
            currencyFmtForBene: ['', Validators.required],
            reminderemail: ['', Validators.required],
            remindersms: ['', Validators.required],
            fileauthorization: ['', Validators.required],
            margins: [''],
            FxTiers: [''],
            teamemail: ['', Validators.required],
            method: ['', Validators.required],
            debitprofile: ['', Validators.required],
            countrybank: ['', Validators.required],
            bankname: ['', Validators.required],
            clearingcode: ['', Validators.required],
            accountnumber: ['', Validators.required],
            cardtype: ['', Validators.required],
            cardname: ['', Validators.required],
            cardnumber: ['', Validators.required],
            expirydate: ['', Validators.required],
            securitycode: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            role: ['', Validators.required],
            email: ['', Validators.required],
            usertype: ['', Validators.required],
            yourmobileNumber: ['', Validators.required],
            yourdeskNumber: ['', Validators.required],
            password: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
        });
    }
    get f() { return this.clientRegisterForm2.controls; }

}
