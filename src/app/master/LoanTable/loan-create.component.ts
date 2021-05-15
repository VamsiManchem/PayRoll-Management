import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Loan } from '../master.model';
import { NgForm } from '@angular/forms';
import { LoansService } from '../masters.service';

@Component({
  selector: 'app-LoanTable',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.css']
})

export class LoanCreateComponent implements OnInit, OnDestroy {
 enteredName = "";
 enteredDescription = "";
 enteredType = "";
 loan: Loan | undefined;
 isLoading = false;
 private mode = 'createloan';
 private loanId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public loansService: LoansService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

 ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(authStatus => {
     this.isLoading = false;
   });
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
     if(paramMap.has('loanId')) {
       this.mode = 'editloan';
       this.loanId = paramMap.get('loanId');
       this.isLoading = true;
       this.loansService.getLoan(this.loanId).subscribe(loanData => {
       this.isLoading = false;
       this.loan = {id: loanData._id, name: loanData.name, description: loanData.description, type: loanData.type };
       });
     }
     else {
       this.mode= 'createloan';
       this.loanId = null;
     }
   });
 }

  onSaveLoan (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'createloan') {
      this.loansService.addLoan(form.value.desigId, form.value.name, form.value.description, form.value.type);
    
    }
    else {
     this.loansService.updateLoan(this.loanId, form.value.name, form.value.description, form.value.type );
   
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
