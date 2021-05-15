//import 'rxjs/add/operator/switchMap'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

import { DeptModel } from '../master.model';
import { DeptsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-DepartmentTable',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})

export class DepartmentTableComponent implements OnInit, OnDestroy {

  depts: DeptModel[]  = [];
  isLoading = false;
  totalDepts = 0;
  deptsPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  deptsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public deptsService: DeptsService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.deptsService.getDepts(this.deptsPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.deptsSub = this.deptsService.getDeptUpdateListener()
       .subscribe((deptData: {depts: DeptModel[], deptCount: number}) => {
        this.isLoading = false;
        this.totalDepts = deptData.deptCount;
        this.depts = deptData.depts;
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
      this.deptsPerPage = pageData.pageSize;
      this.deptsService.getDepts(this.deptsPerPage, this.currentPage);
    }

    onDelete(deptId: string) {
      this.isLoading = true;
       this.deptsService.deleteDept(deptId).subscribe(() => {
        this.deptsService.getDepts(this.deptsPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.deptsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }

}

