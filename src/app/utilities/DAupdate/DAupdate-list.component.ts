import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";
import { Da } from '../utilities.model';
import { DasService } from '../utilities.service';

@Component({
  selector: 'app-DAupdate',
  templateUrl: './DAupdate-list.component.html',
  styleUrls: ['./DAupdate-list.component.css']
})

export class DAupdateListComponent implements OnInit, OnDestroy {

  das: Da[]  = [];
  isLoading = false;
  totalDas = 0;
  dasPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  dasSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public dasService: DasService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.dasService.getDas(this.dasPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.dasSub = this.dasService.getDaUpdateListener()
       .subscribe((daData: {das: Da[], daCount: number}) => {
        this.isLoading = false;
        this.totalDas = daData.daCount;
        this.das = daData.das;
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
      this.dasPerPage = pageData.pageSize;
      this.dasService.getDas(this.dasPerPage, this.currentPage);
    }

    onDelete(daId: string) {
      this.isLoading = true;
       this.dasService.deleteDa(daId).subscribe(() => {
        this.dasService.getDas(this.dasPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.dasSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }

}
