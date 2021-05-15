//import 'rxjs/add/operator/switchMap'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Designation } from '../master.model';
import { DesigsService } from '../masters.service';

@Component({
  selector: 'app-DesignationTable',
  templateUrl: './desig-list.component.html',
  styleUrls: ['./desig-list.component.css']
})

export class DesignationTableComponent implements OnInit, OnDestroy {
  desigs: Designation[]  = [];
  isLoading = false;
  totalDesigs = 0;
  desigsPerPage = 15; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10, 15];
  userIsAuthenticated = false;
 // userId: any;
  desigsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public desigsService: DesigsService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.desigsService.getDesigs(this.desigsPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.desigsSub = this.desigsService.getDesigUpdateListener()
       .subscribe((desigData: {desigs: Designation[], desigCount: number}) => {
        this.isLoading = false;
        this.totalDesigs = desigData.desigCount;
        this.desigs = desigData.desigs;
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
      this.desigsPerPage = pageData.pageSize;
      this.desigsService.getDesigs(this.desigsPerPage, this.currentPage);
    }

    onDelete(desigId: string) {
      this.isLoading = true;
       this.desigsService.deleteDesig(desigId).subscribe(() => {
        this.desigsService.getDesigs(this.desigsPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.desigsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
}

