import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { NgForm } from '@angular/forms';
import { PaytransService } from '../paytransaction.service';
import { Paytrans } from '../paytransaction.model';
import { EmpsService } from 'src/app/master/masters.service';
import { Employee } from 'src/app/master/master.model';

@Component({
  selector: 'app-PayTransactions',
  templateUrl: './paytransaction-list.component.html',
  styleUrls: ['./paytransaction-list.component.css']
})

export class PayTransactionListComponent  {
  paytrans: Paytrans | undefined;
  isLoading = false;
  private mode = 'createpaytransaction';
  maxDate = new Date();

 emps: Employee[]  = [];
 totalEmps = 0;
 empsPerPage = 5; //default value need to be change
 currentPage = 1;
 PageSizeOptions = [1, 2, 5, 10];
 userIsAuthenticated = false;
 empsSub: Subscription = new Subscription;
 private authStatusSub: Subscription = new Subscription;

 constructor(public paytransService: PaytransService, public empsService: EmpsService, private authService: AuthService) {}
onSavePayTrans(form: NgForm) {
  if (form.invalid) {
    return;
  }
  this.isLoading = true;
  if (this.mode === 'createpaytransaction') {
  /*   //const paytranslist = this.paytransService.getPaytrans();
    //this.pa
    //console.log(paytranslist);
    this.empsService.getEmps(this.empsPerPage, this.currentPage);
      debugger;
      //this.userId = this.authService.getUserId();
      this.empsSub = this.empsService.getEmpUpdateListener()
       .subscribe((empData: {emps: Employee[]}) => {
        this.isLoading = false;
       this.emps = empData.emps;
      const emplist : Array<string | number> = [];
      const array1 = [...(this.emps)];
        console.log( this.emps.values);
        console.log( array1);

const array2 = array1.concat(form.value.Year, form.value.Month);
console.log( array2);


        this.paytransService.addPaytrans(form.value.Year, form.value.Month);
      }); */
    this.paytransService.addPaytrans(form.value.Year, form.value.Month);
  
}
else{
  this.paytransService.updatePaytrans(form.value.Year, form.value.Month);
}
}

}
