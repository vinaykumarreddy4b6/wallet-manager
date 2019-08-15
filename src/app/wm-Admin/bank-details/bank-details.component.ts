import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BankSetupServices } from 'src/app/services/bankSetup.services';
import { first, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ValidationService } from 'src/app/validations/validation.service';
import { STATEGROUPS } from 'src/app/countries-List/country-data';
import { StateGroup } from 'src/app/countries-List/country';
//For Custom Date Picker
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';



export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};



@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BankDetailsComponent),
      multi: true,
    },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})


export class BankDetailsComponent implements OnInit, ControlValueAccessor {
  bankInfoGroup: FormGroup;


  IsChecked: boolean;
  Options: string[] = ['Yes', 'No'];
  option = 'Yes';

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  //State Groups.
  stateGroups: StateGroup[] = STATEGROUPS;
  stateGroupOptions: Observable<StateGroup[]>;
  

  //Date Min and Max Validation.
  servciceActivationStartDate = new FormControl('date', [Validators.required]);
  serviceActivationEndDate =  new FormControl('date', [Validators.required]);

  // minDate is the start of today.
  minDate = new Date(new Date().setHours(0, 0, 0, 0));
  //minDate = new Date(2019, 0, 1);
  maxDate = new Date(2021, 0, 1);

  constructor(
    private formBuilder: FormBuilder,
    private BankSetupServices: BankSetupServices, ) { }

  ngOnInit() {

    this.bankInfoGroup = this.formBuilder.group({

      //Bank Details
         
      bankId: ['', Validators.compose([Validators.required, ValidationService.bicCodeValidator])],
      bankName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactEmailId: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],      
      primaryContactPhoneNo: ['', Validators.compose([Validators.required, Validators.minLength(11)])],

      //Services and Preferences
      bankServiceSubscription: [''],

     // servciceActivationStartDate: ['date', Validators.required],

     // serviceActivationEndDate: [''],

      supportReqforBankUserMgmt: [''],

      supportReqforClientUserMgmt: [''],

      authManualPymtActivity: [''],

      authNonPymtActivity: [''],


      addressLine1: [''],
      addressLine2: [''],
      cityName: ['',],
      state: ['',],
      //country: ['',],
      stateGroup: ['',],

      postCode: ['',],

      //Registered Address
      regAddressLine1: ['',],
      regAddressLine2: [''],
      regCity: ['',],
      regState: ['',],
      //regCountry: ['',],
      regstateGroup: ['',],
      regPostCode: ['',],

    });

    this.stateGroupOptions = this.bankInfoGroup.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    
    // this.stateGroupOptions = this.bankInfoGroup.get('regstateGroup')!.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filterGroup(value))
    //   );
  }

  //Date Error Messages.
  getErrorMessage(pickerInput: string): string {
    if (!pickerInput || pickerInput === '' ) {
      return 'Please choose a date.';
    }
    return this.isMyDateFormat(pickerInput);
  }


  /**
   * An example of custom validator on a date string.
   * Valid date is a string, which is:
   * 1, in the form of YYYY-MM-DD
   * 2, later than today
   * 3, not an invalid value like 2018-20-81
   * @param date a date string
   */
  isMyDateFormat(date: string): string {
    if (date.length !== 10) {
      return 'Invalid input: Please input a string in the form of DD/MM/YYYY';
    } else {
      const da = date.split('-');
      if (da.length !== 3 || da[0].length !== 4 || da[1].length !== 2 || da[2].length !== 2) {
        return 'Invalid input: Please input a string in the form of DD/MM/YYYY';
      } else if (moment(date).isValid()) {
        return 'Invalid date: Please input a date no later than today';
      } else if (!moment(date).isValid()) {
        return 'Invalid date: Please input a date with a valid month and date.';
      }
    }
    return 'Unknown error.';
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }




  showOptions(event) {
    console.log(event);

    if (event.checked) {

      this.bankInfoGroup.patchValue(
        {
          regAddressLine1: this.bankInfoGroup.value.addressLine1,
          regAddressLine2: this.bankInfoGroup.value.addressLine2,
          regCity: this.bankInfoGroup.value.cityName,
          regState: this.bankInfoGroup.value.state,
          regPostCode: this.bankInfoGroup.value.postCode,
          // regCountry: this.bankInfoGroup.value.stateGroup.trim(),
          regstateGroup: this.bankInfoGroup.value.stateGroup.trim(),


        })


    }
    else {
      this.bankInfoGroup.patchValue({
        regAddressLine1: '',
        regAddressLine2: '',
        regCity: '',
        regState: '',
        // regCountry: '',
        regstateGroup: '',
        regPostCode: '',

      })

    }


    console.log(this.bankInfoGroup.value);

  }

  onSubmit() {

    console.log("payload.." + this.bankInfoGroup.value);
    //verify the fields existance and submit the request...
    this.BankSetupServices.setBankMasterInfo(this.bankInfoGroup.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("redirectd to success page" + data);
        },
        error => {
          console.log("redirectd to wmuser failure page" + error);
        });
  }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.bankInfoGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {

    this.bankInfoGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.bankInfoGroup.disable() : this.bankInfoGroup.enable();
  }

}

// export function emailValidator(control: FormControl): { [key: string]: any } {
//   var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
//   if (control.value && !emailRegexp.test(control.value)) {
//     return { invalidEmail: true };
//   }
// }
