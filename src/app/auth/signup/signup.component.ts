import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription = new Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });
  }

  /* Created New User Details in Data Base*/
  onSignup(form: NgForm) {
    if (form.invalid) {
    return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.username, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();

  }
}
