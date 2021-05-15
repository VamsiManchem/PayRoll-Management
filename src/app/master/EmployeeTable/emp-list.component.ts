//import 'rxjs/add/operator/switchMap'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Employee } from '../master.model';
import { EmpsService } from '../masters.service';


@Component({
  selector: 'app-EmployeeTable',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})

export class EmployeeTableComponent implements OnInit, OnDestroy  {
  emps: Employee[]  = [];
  isLoading = false;
  totalEmps = 0;
  empsPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  empsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;
  searchText: any;

    constructor(public empsService: EmpsService, private authService: AuthService) {
     
    }

    ngOnInit() {

      this.isLoading = true;
      this.empsService.getEmps(this.empsPerPage, this.currentPage);
      
      //this.userId = this.authService.getUserId();
      this.empsSub = this.empsService.getEmpUpdateListener()
       .subscribe((empData: {emps: Employee[], empCount: number}) => {
        this.isLoading = false;
        this.totalEmps = empData.empCount;
        this.emps = empData.emps;
        console.log(this.emps);
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

