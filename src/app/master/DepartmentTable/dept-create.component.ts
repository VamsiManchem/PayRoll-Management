import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeptsService } from '../masters.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { DeptModel } from '../master.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-DepartmentTable',
  templateUrl: './dept-create.component.html',
  styleUrls: ['./dept-create.component.css']
})

export class DepartmentCreateComponent implements OnInit, OnDestroy {
 enteredTitle = "";
 //enteredContent = "";
 dept: DeptModel | undefined;
 isLoading = false;
 private mode = 'create';
 private deptId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public deptsService: DeptsService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

 ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(authStatus => {
     this.isLoading = false;
   });
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
     if(paramMap.has('deptId')) {
       this.mode = 'edit';
       this.deptId = paramMap.get('deptId');
       this.isLoading = true;
       this.deptsService.getDept(this.deptId).subscribe(deptData => {
       this.isLoading = false;
      // this.dept = {id: deptData._id, title: deptData.title, content: deptData.content };
      this.dept = {id: deptData._id, title: deptData.title };
       });
     }
     else {
       this.mode= 'create';
       this.deptId = null;
     }
   });
 }

  onSaveDept (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
    //  this.deptsService.addDept(form.value.deptId, form.value.title, form.value.content);
    this.deptsService.addDept(form.value.deptId, form.value.title);
    }
    else {
     //this.deptsService.updateDept(this.deptId, form.value.title, form.value.content);
     this.deptsService.updateDept(this.deptId, form.value.title);
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
