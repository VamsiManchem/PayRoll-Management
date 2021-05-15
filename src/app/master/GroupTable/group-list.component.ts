import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Group } from '../master.model';
import { GroupsService } from '../masters.service';

@Component({
  selector: 'app-GroupTable',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})

export class GroupTableComponent implements OnInit, OnDestroy  {
  groups: Group[]  = [];
  isLoading = false;
  totalGroups = 0;
  groupsPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  groupsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;




    constructor(public groupsService: GroupsService, private authService: AuthService) {}

    ngOnInit() {

      this.isLoading = true;
      this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.groupsSub = this.groupsService.getGroupUpdateListener()
       .subscribe((groupData: {groups: Group[], groupCount: number}) => {
        this.isLoading = false;
        this.totalGroups = groupData.groupCount;
        this.groups = groupData.groups;
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
      this.groupsPerPage = pageData.pageSize;
      this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
    }

    onDelete(groupId: string) {
      this.isLoading = true;
       this.groupsService.deleteGroup(groupId).subscribe(() => {
        this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
      }, () => {
        this.isLoading = false;
      });
    }

    ngOnDestroy() {
      this.groupsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }

}
