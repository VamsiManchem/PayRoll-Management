import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Loan } from '../master.model';
import { LoansService } from '../masters.service';

@Component({
  selector: 'app-LoanTable',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})

export class LoanTableComponent implements OnInit, OnDestroy {
  loans: Loan[]  = [];
  isLoading = false;
  totalLoans = 0;
  loansPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  loansSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public loansService: LoansService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.loansService.getLoans(this.loansPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.loansSub = this.loansService.getLoanUpdateListener()
       .subscribe((loanData: {loans: Loan[], loanCount: number}) => {
        this.isLoading = false;
        this.totalLoans = loanData.loanCount;
        this.loans = loanData.loans;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

    }

    onChangedPage(pageData: PageEvent) {
      this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.loansPerPage = pageData.pageSize;
      this.loansService.getLoans(this.loansPerPage, this.currentPage);
    }

    onDelete(loanId: string) {
      this.isLoading = true;
       this.loansService.deleteLoan(loanId).subscribe(() => {
        this.loansService.getLoans(this.loansPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.loansSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
}
