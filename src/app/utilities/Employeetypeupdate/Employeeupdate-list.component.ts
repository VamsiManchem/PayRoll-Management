import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Emptype } from '../utilities.model';
import { EmptypesService } from '../utilities.service';

@Component({
  selector: 'app-Employeetypeupdate',
  templateUrl: './Employeeupdate-list.component.html',
  styleUrls: ['./Employeeupdate-list.component.css']
})

export class EmployeeTypeupdateListComponent implements OnInit, OnDestroy {
  emptypes: Emptype[]  = [];
  isLoading = false;
  totalEmptypes = 0;
  emptypesPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  emptypesSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public emptypesService: EmptypesService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.emptypesService.getEmptypes(this.emptypesPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.emptypesSub = this.emptypesService.getEmptypeUpdateListener()
       .subscribe((emptypeData: {emptypes: Emptype[], emptypeCount: number}) => {
        this.isLoading = false;
        this.totalEmptypes = emptypeData.emptypeCount;
        this.emptypes = emptypeData.emptypes;
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
      this.emptypesPerPage = pageData.pageSize;
      this.emptypesService.getEmptypes(this.emptypesPerPage, this.currentPage);
    }

    onDelete(emptypeId: string) {
      this.isLoading = true;
       this.emptypesService.deleteEmptype(emptypeId).subscribe(() => {
        this.emptypesService.getEmptypes(this.emptypesPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.emptypesSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
}
