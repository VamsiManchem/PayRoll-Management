import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";
import { Emptype } from '../utilities.model';
import { NgForm } from '@angular/forms';
import { EmptypesService } from '../utilities.service';

@Component({
  selector: 'app-Employeetypeupdate',
  templateUrl: './Employeeupdate-create.component.html',
  styleUrls: ['./Employeeupdate-create.component.css']
})

export class EmployeeTypeupdateCreateComponent implements OnInit, OnDestroy {
 enteredTitle = "";
 emptype: Emptype | undefined;
 isLoading = false;
 private mode = 'createemptype';
 private emptypeId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public emptypesService: EmptypesService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

 ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(authStatus => {
     this.isLoading = false;
   });
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
     debugger;
     if(paramMap.has('emptypeId')) {
       this.mode = 'editemptype';
       this.emptypeId = paramMap.get('emptypeId');
       this.isLoading = true;
       this.emptypesService.getEmptype(this.emptypeId).subscribe(emptypeData => {
       this.isLoading = false;
       this.emptype = {id: emptypeData._id, title: emptypeData.title };
       });
     }
     else {
       this.mode= 'createemptype';
       this.emptypeId = null;
     }
   });
 }

  onSaveEmptype (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'createemptype') {
    this.emptypesService.addEmptype(form.value.emptypeId, form.value.title);
    }
    else {
     this.emptypesService.updateEmptype(this.emptypeId, form.value.title);
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
