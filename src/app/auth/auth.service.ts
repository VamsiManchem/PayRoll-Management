import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { AuthData } from './auth-data.model';
import { environment } from "../../environments/environment";


const BACKEND_URL = environment.apiUrl + "/user/";



@Injectable({ providedIn: "root" })
export class AuthService{
  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  //private userId: any;
  private authStatusListener = new Subject<boolean>();


  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  /* getUserId() {
    return this.userId;
  } */

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  /* Creating New User in Database --> signup.component.ts */

  createUser(username: string, password: string) {
    const authData: AuthData = {username: username, password: password};
    this.http.post( BACKEND_URL + "/signup", authData)
    .subscribe(() => {
      this.router.navigate(["/"]);
    }, error => {
      this.authStatusListener.next(false);
    });


      /* .subscribe(response => {
        console.log(response);

      }); */
  }

  /* Login with Valid Credentials --> login.component.ts*/

  login(username: string, password: string) {

    const authData: AuthData = {username: username, password: password};
    this.http.post<{token: string, expiresIn: number, userId: string }>
    ( BACKEND_URL + "/login", authData)
    .subscribe(response => {
      const token = response.token;
      console.log(token);
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          //this.userId = response.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(token, expirationDate);
          this.router.navigate(["/dashboard"]);
        }

    }, error => {
      this.authStatusListener.next(false);
    });

  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      //this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
  /* Logout Functionality */
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    //this.userId = null;
    this.clearAuthData();
    this.router.navigate(["/"]);

  }

  /* Setting time for auto logout */
  private setAuthTimer(duration: number) {
    console.log("Seting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration *1000);
  }

  /* Date for data creation */
  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
   // localStorage.setItem("userId", userId);
  }

  /* Clearing auth data */
  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
   // localStorage.removeItem("userId");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    //const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      //userId: userId
    }


  }

}
