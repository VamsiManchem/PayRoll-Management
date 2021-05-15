import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { AuthService } from "src/app/auth/auth.service";
import { Itnewemp } from '../paytransaction.model';
import { ItnewempsService } from '../paytransaction.service';

@Component({
  selector: 'app-ITNewEmployee',
  templateUrl: './itnewemployee-list.component.html',
  styleUrls: ['./itnewemployee-list.component.css']
})

export class ITNewEmployeeListComponent implements OnInit, OnDestroy {
  itnewemps: Itnewemp[]  = [];
  isLoading = false;
  totalItnewemps = 0;
  itnewempsPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  itnewempsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;

    constructor(public itnewempsService: ItnewempsService, private authService: AuthService) {
     
    }

    ngOnInit() {

      this.isLoading = true;
      this.itnewempsService.getItnewemps(this.itnewempsPerPage, this.currentPage);
      
      //this.userId = this.authService.getUserId();
      this.itnewempsSub = this.itnewempsService.getItnewempUpdateListener()
       .subscribe((itnewempData: {itnewemps: Itnewemp[], itnewempCount: number}) => {
        this.isLoading = false;
        this.totalItnewemps = itnewempData.itnewempCount;
        this.itnewemps = itnewempData.itnewemps;
        console.log(this.itnewemps);
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
      this.itnewempsPerPage = pageData.pageSize;
      this.itnewempsService.getItnewemps(this.itnewempsPerPage, this.currentPage);
    }

  
    onDelete(itnewempId: string) {
      this.isLoading = true;
       this.itnewempsService.deleteItnewemp(itnewempId).subscribe(() => {
        this.itnewempsService.getItnewemps(this.itnewempsPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.itnewempsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }

}
