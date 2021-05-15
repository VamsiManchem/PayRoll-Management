import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

import { DeptModel } from 'src/app/master/master.model';

import { environment } from "../../environments/environment";
import { Paytrans, Reports } from './reports.model';
import { Schema } from 'mongoose';


const BACKEND_URL = environment.apiUrl ;

/* Department Services*/
@Injectable({providedIn: 'root'})
export class DeptsService {
  private depts: DeptModel[] = [];
  private deptsUpdated = new Subject<{depts: DeptModel[], deptCount: number}>();
  get: any;
  deptId: any;


  constructor(private http: HttpClient, private router: Router) {}

  getDepts(deptsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${deptsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; depts: any, maxDepts: number }>(
        BACKEND_URL+ "/depts/" + queryParams
      )
      .pipe(
        map(deptData => {
        return {
          depts: deptData.depts.map((dept: { title: any;  _id: any; }) => {
          return {
            title: dept.title,
            id: dept._id,
           // creator: dept.creator
        };
      }),
      maxDepts: deptData.maxDepts
       };
      })
    )
    .subscribe(transformedDeptData => {
        console.log(transformedDeptData);
        this.depts = transformedDeptData.depts;
        this.deptsUpdated.next({
          depts: [...this.depts],
          deptCount: transformedDeptData.maxDepts
        });
      });
  }
  getDeptUpdateListener() {
    return this.deptsUpdated.asObservable();
  }

  getDept(id: string) {
    return this.http.get<{ _id: string; title: string; }>(BACKEND_URL + "/depts/"+ id);
  }

addDept( id: string, title: string) {
  const dept: DeptModel = { id: id, title: title};
  this.http.post<{message: string}>(BACKEND_URL + "/depts/", dept)
    .subscribe(responseData => {
      this.router.navigate(["/department"]);

    });
  }

updateDept(id: string, title: string) {
  const dept: DeptModel = { id: id, title: title};
  this.http.put(BACKEND_URL + "/depts/" + id, dept)
  .subscribe(response => {
    this.router.navigate(["/department"]);
  });

}
/* deleteDept(deptId: string) {
  return this.http.delete(BACKEND_URL + "/depts/" + deptId);

} */

}


/* Pay Bill Report Services*/
var global_itreport :any;
@Injectable({providedIn: 'root'})

export class PbillreportsService {
  private paytrans: Paytrans[] = [];
  private paytransUpdated = new Subject<{paytrans: Paytrans[], paytransCount: number}>();
  get: any;
  //pbillreportId: any;


  constructor(private http: HttpClient, private router: Router) {}
  getPaytrans() {
    debugger;
    this.http
      .get<{ message: string; paytrans: any, maxPaytrans: number }>(
        BACKEND_URL+ "/paytrans/" 
      )
      .pipe(
        map(paytransData => {
          //console.log(paytransData );
        return {
        paytrans: paytransData.paytrans.map((paytrans: { Year: any; Month: any; EmpRecord:any;  }) => {
          //console.log(paytrans );
          return {
            Year: paytrans.Year,
            Month: paytrans.Month,
            EmpRecord:paytrans.EmpRecord,

        };
      }),
      maxPaytrans: paytransData.maxPaytrans
       };
      })
    )
    .subscribe(transformedPaytransData => {
       // console.log(transformedPaytransData);
        this.paytrans = transformedPaytransData.paytrans;
       // console.log(this.paytrans);
        this.paytransUpdated.next({
          paytrans: [...this.paytrans],
          paytransCount: transformedPaytransData.maxPaytrans
        });
      });
  }
  getPbillreportUpdateListener() {
    return this.paytransUpdated.asObservable();
  }
 
 /*  getPbillreports(pbillreportsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${pbillreportsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; pbillreports: any, maxPbillreports: number }>(
        BACKEND_URL+ "/pbillreports/" + queryParams
      )
      .pipe(
        map(pbillreportData => {
        return {
          pbillreports: pbillreportData.pbillreports.map((pbillreport: { Year: any; Month: any; basictype: any; emptype: any; _id: any; department: any; empno: any;
          }) => {
          return {
          
            Year: pbillreport.Year,
            Month: pbillreport.Month,
            basictype: pbillreport.basictype,
            emptype: pbillreport.emptype,
            department: pbillreport.department,
            empno: pbillreport.empno,
        };
      }),
      maxPbillreports: pbillreportData.maxPbillreports
       };
      })
    )
    .subscribe(transformedPbillreportData => {
        console.log(transformedPbillreportData);
        this.pbillreports = transformedPbillreportData.pbillreports;
        this.pbillreportsUpdated.next({
          pbillreports: [...this.pbillreports],
          pbillreportCount: transformedPbillreportData.maxPbillreports
        });
      });
  }
  

  getPbillreport(id: string) {
     return this.http.get<{ _id: string; Year: Schema.Types.Date, Month: string, basictype: string, emptype: string, department: string; empno: number;
      }>(BACKEND_URL + "/pbillreports/"+ id);
  }
  

  addPbillreport(id: string, Year: Schema.Types.Date, Month: string, basictype: string, emptype: string, department: string, empno: number) {
     
      debugger;
     const pbillreport: Reports = { id: id, Year: Year, Month: Month, basictype: basictype, emptype: emptype, department: department, empno: empno
    };
      console.log(pbillreport);
      this.http.post<{message: string}>(BACKEND_URL + "/pbillreports/", pbillreport)
      .subscribe(responseData => {
        this.router.navigate(["/paybill"]);
    });
  }

  
updatePbillreport(id: string, Year: Schema.Types.Date, Month: string, basictype: string, emptype: string, department: string, empno: number) {

    debugger;
  
  const pbillreport: Reports = { id: id, Year: Year, Month: Month, basictype: basictype, emptype: emptype, department: department, empno: empno
  };
console.log(pbillreport);
  this.http.put(BACKEND_URL + "/pbillreports/" + id, pbillreport)
  .subscribe(response => {
    this.router.navigate(["/paybill"]);
  });

}
deletePbillreport(pbillreportId: string) {
  return this.http.delete(BACKEND_URL + "/pbillreports/" + pbillreportId);

}
 */

passITReport(tablecontent:any){
  debugger;
  global_itreport = tablecontent;
//alert(global_itreport);
}

getITreport(){
  debugger;
 // alert("getITreport");
  //alert(global_itreport);
  //console.log(global_itreport);
  //console.log(this.passITReport);

  return global_itreport;
  
}

}

