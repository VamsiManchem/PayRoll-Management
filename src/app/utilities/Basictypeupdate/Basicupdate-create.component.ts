import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';


import { AuthService } from "src/app/auth/auth.service";
import { Basictype } from '../utilities.model';
import { BasictypesService } from '../utilities.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Basictypeupdate',
  templateUrl: './Basicupdate-create.component.html',
  styleUrls: ['./Basicupdate-create.component.css']
})

export class BasicTypeupdateCreateComponent implements OnInit, OnDestroy {
 enteredTitle = "";
 basictype: Basictype | undefined;
 isLoading = false;
 private mode = 'createbasictype';
 private basictypeId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public basictypesService: BasictypesService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

 ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(authStatus => {
     this.isLoading = false;
   });
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
     if(paramMap.has('basictypeId')) {
       this.mode = 'editbasictype';
       this.basictypeId = paramMap.get('basictypeId');
       this.isLoading = true;
       this.basictypesService.getBasictype(this.basictypeId).subscribe(basictypeData => {
       this.isLoading = false;
      this.basictype = {id: basictypeData._id, title: basictypeData.title };
       });
     }
     else {
       this.mode= 'createbasictype';
       this.basictypeId = null;
     }
   });
 }

  onSaveBasictype (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'createbasictype') {
    this.basictypesService.addBasictype(form.value.basictypeId, form.value.title);
    }
    else {
     this.basictypesService.updateBasictype(this.basictypeId, form.value.title);
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
