import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AuthService } from "src/app/auth/auth.service";
import { Paytrans, Reports } from '../../reports.model';
import { PbillreportsService } from '../../reports.service';



@Component({
  selector: 'app-ITreport',
  templateUrl: 'itreport-list.component.html',
  styleUrls: ['itreport-list.component.css']
})


export class ITReportListComponent implements OnInit {
  pbillreport: Reports | undefined;
  maxDate = new Date();

  Month = new FormControl('');
  Year = new FormControl(''); 
  basictype = new FormControl(''); 
  emptype  = new FormControl(''); 
  
  department = new FormControl(''); 
  empno = new FormControl(''); 
 
  isLoading = false;
  userIsAuthenticated = false;
  deptsSub: Subscription = new Subscription;
  private authStatusSub: Subscription = new Subscription;

 payGen: Subscription = new Subscription;
 paygen: Paytrans[]  = [];
 totalPmatrixs = 0;
 pmatrixsSub: Subscription = new Subscription;
 constructor(private authService: AuthService, public pbillreportsService: PbillreportsService) {}

     ngOnInit() {


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
    removeEmployee(tr:any) {
      debugger;
    
   /* var data = tr.innerHTML;
      var content = tr.innerHTML;
      var d = document.createElement("DIV");
      d.innerHTML = content;
      var th_tags = d.querySelectorAll("th");
      var td_tags = d.querySelectorAll("td");
      for (let i = 0; i < th_tags.length; i++) {
       var heading = th_tags[i].innerText;
        //console.log( th_tags[i].innerText);
      } 
      var reportHeading = [];
     // for (let i = 0; i < th_tags.length; i++) {
        for (let j = 0; j < td_tags.length; j++) {
          let newName = {
            Month: td_tags[j].innerText.toString(),
         };
         reportHeading.push(newName);
        }
     // }
      console.log( reportHeading); */

      var data = tr.innerHTML;
      //var ITreport = data.tabletoJSON();
     // console.log( ITreport);

     const HtmlTableToJson = require('html-table-to-json');
     const jsonTables = HtmlTableToJson.parse(data);
     //console.log(jsonTables.results);

     // var json = JSON.parse(data);
      this.pbillreportsService.passITReport(jsonTables.results);
      //alert(json);
     // console.log(data);
    }
   
  }



