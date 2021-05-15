import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeptModel, Employee, Paymatrix } from 'src/app/master/master.model';
import { DeptsService } from 'src/app/master/masters.service';
import { Basictype, Emptype } from 'src/app/utilities/utilities.model';
import { BasictypesService, EmptypesService } from 'src/app/utilities/utilities.service';
//import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';
//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";
import { Paytrans, Reports } from '../reports.model';
//import { NgForm } from '@angular/forms';
import { PbillreportsService } from '../reports.service';




// import { Pipe, PipeTransform } from "@angular/core";
//import { jsPDF } from 'jspdf';
//import { style } from '@angular/animations';
//import html2canvas from 'html2canvas';

@Component({
  selector: 'app-Paybills',
  templateUrl: './paybill-list.component.html',
  styleUrls: ['./paybill-list.component.css']
})




export class PaybillListComponent implements OnInit {
  pbillreport: Reports | undefined;
  //private mode = 'createemp';
  //private empId: any;
  maxDate = new Date();
  //search: any;

  Month = new FormControl('');
  Year = new FormControl(''); 

  basictype = new FormControl(''); 
  emptype  = new FormControl(''); 
  department = new FormControl(''); 
  empno = new FormControl(''); 


  /* Departments Dropdown List */
  depts: DeptModel[]  = [];
  //paymatrix: Paymatix[] = [];
  isLoading = false;
  totalDepts = 0;
  deptsPerPage = 5; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
 // userId: any;
  deptsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;

 /* Basictypes Dropdown List */
 basictypes: Basictype[]  = [];
 totalBasictypes = 0;
 basictypesPerPage = this.totalBasictypes; //default value need to be change
 basictypesSub: Subscription = new Subscription;

 /* Employeetype Dropdown List  */
 emptypes: Emptype[]  = [];
 totalEmptypes = 0;
 emptypesPerPage = 5; //default value need to be change
 emptypesSub: Subscription = new Subscription;
 empsPerPage = 5; //default value need to be change
 payGen: Subscription = new Subscription;
 paygen: Paytrans[]  = [];
 totalEmps = 0;
 //pmatrixs: Paymatrix[]  = [];
 
 totalPmatrixs = 0;
 pmatrixsSub: Subscription = new Subscription;
 

    constructor(public deptsService: DeptsService, public basictypesService: BasictypesService, public emptypesService: EmptypesService, 
                private authService: AuthService, public pbillreportsService: PbillreportsService) {}

     ngOnInit() {


      /*  Departments Dropdown List  */
      this.isLoading = true;
      this.deptsService.getDepts(this.deptsPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.deptsSub = this.deptsService.getDeptUpdateListener()
       .subscribe((deptData: {depts: DeptModel[], deptCount: number}) => {
        this.isLoading = false;
        this.totalDepts = deptData.deptCount;
        this.depts = deptData.depts;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

      /* Basictypes Dropdown List */
      this.isLoading = true;
      this.basictypesService.getBasictypes(this.basictypesPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.basictypesSub = this.basictypesService.getBasictypeUpdateListener()
        .subscribe((basictypeData: {basictypes: Basictype[], basictypeCount: number}) => {
        this.isLoading = false;
        this.totalBasictypes = basictypeData.basictypeCount;
        this.basictypes = basictypeData.basictypes;
      });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
        .getAuthStatusListener()
        .subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
          //this.userId = this.authService.getUserId();
        });
  

      /* Employeetype Dropdown List  */
      this.isLoading = true;
      this.emptypesService.getEmptypes(this.emptypesPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.emptypesSub = this.emptypesService.getEmptypeUpdateListener()
       .subscribe((emptypeData: {emptypes: Emptype[], emptypeCount: number}) => {
        this.isLoading = false;
        this.totalEmptypes = emptypeData.emptypeCount;
        this.emptypes = emptypeData.emptypes;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

      /*  Get all data from paytransaction database  */
      this.isLoading = true;
      this.pbillreportsService.getPaytrans();
      //this.userId = this.authService.getUserId();
      this.pmatrixsSub = this.pbillreportsService.getPbillreportUpdateListener()
       .subscribe((payGenData: {paytrans: Paytrans[], paytransCount: number}) => {
        this.isLoading = false;
        this.totalPmatrixs = payGenData.paytransCount;
        this.paygen = payGenData.paytrans;
        console.log(this.paygen);
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

    }
   
   



   /* @ViewChild('pdfTable', { static: false })
  pdfTable!: ElementRef;


     public downloadAsPDF() {

     const doc = new jsPDF({
        orientation: "landscape",
      
        // encryption: {
        //   userPassword: "user",
        //   ownerPassword: "owner",
        //   userPermissions: ["print", "modify", "copy", "annot-forms"]
        //   // try changing the user permissions granted
        // }
      });
      
      debugger;
  
      const pdfTable = this.pdfTable.nativeElement;
      
      doc.setFontSize(14);
      doc.setTextColor(100,12,100,50);
     
      //doc.table(1, 1, pdfTable.innerHTML, pdfTable.outerHTML, { autoSize: true });
     
       doc.html(pdfTable.innerHTML,{
       
      callback: function (doc) {
        //doc.text(pdfTable.innerHTML, 20, 20);
      
        doc.save('pdffile.pdf');
      },
      x: 10,
      y: 20,
      
      
    }) 
    //doc.autoPrint();
 
 
  } 

  public downloadAsPDF() {
	//	const filename  = 'ThisIsYourPDFFilename.pdf';
    const pdfTable = this.pdfTable.nativeElement;
		html2canvas(document.body).then(function (canvas) {
     // var img = canvas.toDataURL("image/png");
    
     const doc = new jsPDF({
      orientation: "landscape",
    
      // encryption: {
      //   userPassword: "user",
      //   ownerPassword: "owner",
      //   userPermissions: ["print", "modify", "copy", "annot-forms"]
      //   // try changing the user permissions granted
      // }
    });
    //doc.setFontSize(14);
    //doc.setTextColor(100,12,100,50);
      doc.html(pdfTable.innerHTML,{
       
        callback: function (doc) {
          //doc.text(pdfTable.innerHTML, 20, 20);
        
          doc.save('pdffile.pdf');
        },
        x: 10,
        y: 20,
        
        
      })       
  });
	} */

  
  
}





