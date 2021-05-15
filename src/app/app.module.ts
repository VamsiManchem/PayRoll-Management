import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AngularMaterialModule } from './angular-material.module';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MastersModule } from './master/masters.module';
import { PaytransactionsModule } from './paytransaction/paytransactions.module';
import { ReportsModule } from './reports/reports.module';
import { UtilitiesModule } from './utilities/utilities.module';
//import { SearchPipe } from './reports/search.pipe';
//import { ErrorInterceptor } from './error-interceptor';
//import { ErrorComponent } from './error/error.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    //SearchPipe,
    //SearchFilterPipe, 
   // SortingPipes , 
    //SelectionPipes,
   // ErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    MastersModule,
    PaytransactionsModule,
    ReportsModule,
    UtilitiesModule,
    ReactiveFormsModule,
   

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
             // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  //entryComponents: [ErrorComponent]
})
export class AppModule { }
