import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";
import { Da } from '../utilities.model';
import { NgForm } from '@angular/forms';
import { DasService } from '../utilities.service';

@Component({
  selector: 'app-DAupdate',
  templateUrl: './DAupdate-create.component.html',
  styleUrls: ['./DAupdate-create.component.css']
})

export class DAupdateCreateComponent implements OnInit, OnDestroy {

 enteredTitle = "";
 da: Da | undefined;
 isLoading = false;
 private mode = 'addDA';
 private daId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public dasService: DasService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

   ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('daId')) {
        this.mode = 'editda';
        this.daId = paramMap.get('daId');
        this.isLoading = true;
        this.dasService.getDa(this.daId).subscribe(daData => {
        this.isLoading = false;
       
       this.da = {id: daData._id, title: daData.title };
        });
      }
      else {
        this.mode= 'addDA';
        this.daId = null;
      }
    });
  }

  onSaveDa (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'addDA') {
    
    debugger;
    this.dasService.addDa(form.value.daId, form.value.title);
    }
    else {
     
     debugger;
     this.dasService.updateDa(this.daId, form.value.title);
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
