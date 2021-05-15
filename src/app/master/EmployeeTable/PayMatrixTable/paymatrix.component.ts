//import 'rxjs/add/operator/switchMap'
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Paymatrix } from '../../master.model';
import { PmatrixService } from '../../masters.service';

@Component({
  selector: 'app-PayMatrixTable',
  templateUrl: './paymatrix.component.html'
 // styleUrls: ['./emp-list.component.css']
})

export class PaymatrixTableComponent implements OnInit {
  pmatrixs: Paymatrix[]  = [];
  isLoading = false;
  totalPmatrixs = 0;
  userIsAuthenticated = false;
  pmatrixsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;


    constructor(public pmatrixsService: PmatrixService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.pmatrixsService.getPmatrixs();
      //this.userId = this.authService.getUserId();
      this.pmatrixsSub = this.pmatrixsService.getPmatrixUpdateListener()
       .subscribe((pmatrixData: {pmatrixs: Paymatrix[], pmatrixCount: number}) => {
        this.isLoading = false;
        this.totalPmatrixs = pmatrixData.pmatrixCount;
        this.pmatrixs = pmatrixData.pmatrixs;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

    }

    /* onChangedPage(pageData: PageEvent) {
      this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.pmatrixsPerPage = pageData.pageSize;
      this.pmatrixsService.getPmatrixs(this.pmatrixsPerPage, this.currentPage);
    }
 
     onDelete(pmatrixId: string) {
      this.isLoading = true;
       this.pmatrixsService.deletePmatrix(pmatrixId).subscribe(() => {
        this.pmatrixsService.getPmatrixs(this.pmatrixsPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    } 

    ngOnDestroy() {
      this.pmatrixsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    } */
}
 
