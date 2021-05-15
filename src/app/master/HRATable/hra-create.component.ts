import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HrasService } from '../masters.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { Hra } from '../master.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-HRATable',
  templateUrl: './hra-create.component.html',
  styleUrls: ['./hra-create.component.css']
})

export class HraCreateComponent implements OnInit, OnDestroy {
 enteredTitle = "";
 hra: Hra | undefined;
 isLoading = false;
 private mode = 'createhra';
 private hraId: any;
 private authStatusSub: Subscription = new Subscription;


 constructor(
   public hrasService: HrasService,
   public route: ActivatedRoute,
   private authService: AuthService
   ) {}

 ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(authStatus => {
     this.isLoading = false;
   });
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
     if(paramMap.has('hraId')) {
       this.mode = 'edithra';
       this.hraId = paramMap.get('hraId');
       this.isLoading = true;
       this.hrasService.getHra(this.hraId).subscribe(hraData => {
       this.isLoading = false;
      // this.dept = {id: deptData._id, title: deptData.title, content: deptData.content };
      this.hra = {id: hraData._id, title: hraData.title };
       });
     }
     else {
       this.mode= 'createhra';
       this.hraId = null;
     }
   });
 }

  onSaveHra (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'createhra') {
    //  this.deptsService.addDept(form.value.deptId, form.value.title, form.value.content);
    this.hrasService.addHra(form.value.hraId, form.value.title);
    }
    else {
     //this.deptsService.updateDept(this.deptId, form.value.title, form.value.content);
     this.hrasService.updateHra(this.hraId, form.value.title);
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
