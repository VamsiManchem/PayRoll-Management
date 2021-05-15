import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesigsService } from '../masters.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';


import { AuthService } from 'src/app/auth/auth.service';
import { Designation } from '../master.model';

@Component({
  selector: 'app-DesignationTable',
  templateUrl: './desig-create.component.html',
  styleUrls: ['./desig-create.component.css']
})

export class DesignationCreateComponent implements OnInit, OnDestroy {
 enteredTitle = "";
 enteredContent = "";
 desig: Designation | undefined;
 isLoading = false;
 private mode = 'createdesig';
 private desigId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public desigsService: DesigsService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

 ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(authStatus => {
     this.isLoading = false;
   });
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
     if(paramMap.has('desigId')) {
       this.mode = 'editdesig';
       this.desigId = paramMap.get('desigId');
       this.isLoading = true;
       this.desigsService.getDesig(this.desigId).subscribe(desigData => {
       this.isLoading = false;
       this.desig = {id: desigData._id, title: desigData.title, content: desigData.content };
       });
     }
     else {
       this.mode= 'createdesig';
       this.desigId = null;
     }
   });
 }

  onSaveDesig (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'createdesig') {
      this.desigsService.addDesig(form.value.desigId, form.value.title, form.value.content);
    
    }
    else {
     this.desigsService.updateDesig(this.desigId, form.value.title, form.value.content);
   
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
