import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

;
import { AuthService } from "src/app/auth/auth.service";
import { Group } from '../master.model';
import { GroupsService } from '../masters.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-GroupTable',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})

export class GroupCreateComponent implements OnInit, OnDestroy {
  enteredTitle = "";
 //enteredContent = "";
 group: Group | undefined;
 isLoading = false;
 private mode = 'creategroup';
 private groupId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public groupsService: GroupsService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

 ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(authStatus => {
     this.isLoading = false;
   });
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
     if(paramMap.has('groupId')) {
       this.mode = 'editgroup';
       this.groupId = paramMap.get('groupId');
       this.isLoading = true;
       this.groupsService.getGroup(this.groupId).subscribe(groupData => {
       this.isLoading = false;
       this.group = {id: groupData._id, title: groupData.title };
       });
     }
     else {
       this.mode= 'creategroup';
       this.groupId = null;
     }
   });
 }

  onSaveGroup (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'creategroup') {
     this.groupsService.addGroup(form.value.groupId, form.value.title);
    }
    else {
     this.groupsService.updateGroup(this.groupId, form.value.title);
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
