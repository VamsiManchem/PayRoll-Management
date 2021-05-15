/* import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";
import { Loanissue } from '../paytransaction.model';

@Component({
  selector: 'app-LoanIssues',
  templateUrl: './loanissue-list.component.html',
  styleUrls: ['./loanissue-list.component.css']
})

export class LoanissueListComponent implements OnInit, OnDestroy {
  loanissues: Loanissue[]  = [];
  isLoading = false;
  totalEmps = 0;
  loanissuesPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  loanissuesSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;



    constructor(public loanissuesService: LoanissuesService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.loanissuesService.getLoanissues(this.loanissuesPerPage, this.currentPage);
      
      //this.userId = this.authService.getUserId();
      this.loanissuesSub = this.loanissuesService.getLoanissueUpdateListener()
       .subscribe((empData: {emps: Employee[], empCount: number}) => {
        this.isLoading = false;
        this.totalEmps = empData.empCount;
        this.emps = empData.emps;
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
      this.empsPerPage = pageData.pageSize;
      this.empsService.getEmps(this.empsPerPage, this.currentPage);
    }

    onDelete(empId: string) {
      this.isLoading = true;
       this.empsService.deleteEmp(empId).subscribe(() => {
        this.empsService.getEmps(this.empsPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.empsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
}
 */