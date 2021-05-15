import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";
import { Basictype } from '../utilities.model';
import { BasictypesService } from '../utilities.service';

@Component({
  selector: 'app-Basictypeupdate',
  templateUrl: './Basicupdate-list.component.html',
  styleUrls: ['./Basicupdate-list.component.css']
})

export class BasicTypeupdateListComponent implements OnInit, OnDestroy {
  basictypes: Basictype[]  = [];
  isLoading = false;
  totalBasictypes = 0;
  basictypesPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  basictypesSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public basictypesService: BasictypesService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.basictypesService.getBasictypes(this.basictypesPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.basictypesSub = this.basictypesService.getBasictypeUpdateListener()
       .subscribe((basictypeData: {basictypes: Basictype[], basictypeCount: number}) => {
        this.isLoading = false;
        this.totalBasictypes = basictypeData.basictypeCount;
        this.basictypes = basictypeData.basictypes;
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
      this.basictypesPerPage = pageData.pageSize;
      this.basictypesService.getBasictypes(this.basictypesPerPage, this.currentPage);
    }

    onDelete(basictypeId: string) {
      this.isLoading = true;
       this.basictypesService.deleteBasictype(basictypeId).subscribe(() => {
        this.basictypesService.getBasictypes(this.basictypesPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.basictypesSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
}
