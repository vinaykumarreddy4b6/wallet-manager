import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from "ng2-file-upload";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


//Components
import { AppComponent } from './app.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
//import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
//import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
//import { ClientRegComponent } from './client-reg/client-reg.component';
import { AppConstantsComponent } from './app-constants/app-constants.component';
import { WalletBodyComponent } from './wallet-body/wallet-body.component';
import { Clientreg2Component } from './clientreg2/clientreg2.component';
import { LoginComponent } from './login/login.component';
import { ClientFileUploadComponent } from './client-file-upload/client-file-upload.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { CustRegComponent } from './cust-reg/cust-reg.component';
import { RegistrationComponent } from './registration/registration.component';
import { DialogComponent } from './dialog/dialog.component';
import { BeneRegComponent } from './bene-reg/bene-reg.component';
import { PostRegComponent } from './post-reg/post-reg.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { SuccessRegComponent } from './registration/cust-reg.success.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { from } from 'rxjs';
import { BeneRegNewAccComponent } from './Beneficiary-Reg/bene-reg-new-acc/bene-reg-new-acc.component';


@NgModule({
  declarations: [
    AppComponent,
    SelfRegistrationComponent,
        // WalletHeaderComponent,
        // WalletFooterComponent,
       // ClientRegComponent,
        AppConstantsComponent,
        WalletBodyComponent,
        Clientreg2Component,
        LoginComponent,
        ClientFileUploadComponent,
        UserRegComponent,
        CustRegComponent,
        RegistrationComponent,
        DialogComponent,
        BeneRegComponent,       
        PostRegComponent,
        SuccessRegComponent,
      PasswordForgotComponent,
      ConfirmDialogComponent,
      BeneRegNewAccComponent,

  ],
  imports: [
    BrowserModule,    
      ReactiveFormsModule,
      FormsModule,
      FormlyModule.forRoot(),
      FormlyBootstrapModule,
      HttpClientModule,
      FileUploadModule,     
      BrowserAnimationsModule,      
      AppMaterialModule,     
      AppRoutingModule,
      MatRadioModule,
      MatFormFieldModule,
      MatInputModule,
      SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent,ConfirmDialogComponent]
})
export class AppModule { }
