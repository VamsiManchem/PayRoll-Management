//import 'rxjs/add/operator/switchMap'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

import { Hra } from '../master.model';
import { HrasService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-HraTable',
  templateUrl: './hra-list.component.html',
  styleUrls: ['./hra-list.component.css']
})

export class HraTableComponent implements OnInit, OnDestroy {

  hras: Hra[]  = [];
  isLoading = false;
  totalHras = 0;
  hrasPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  hrasSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public hrasService: HrasService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.hrasService.getHras(this.hrasPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.hrasSub = this.hrasService.getHraUpdateListener()
       .subscribe((hraData: {hras: Hra[], hraCount: number}) => {
        this.isLoading = false;
        this.totalHras = hraData.hraCount;
        this.hras = hraData.hras;
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
      this.hrasPerPage = pageData.pageSize;
      this.hrasService.getHras(this.hrasPerPage, this.currentPage);
    }

    onDelete(hraId: string) {
      this.isLoading = true;
       this.hrasService.deleteHra(hraId).subscribe(() => {
        this.hrasService.getHras(this.hrasPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.hrasSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }

}

