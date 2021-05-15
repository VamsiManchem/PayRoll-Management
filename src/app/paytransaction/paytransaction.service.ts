import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { Schema } from 'mongoose';


import { environment } from "../../environments/environment";
import { Itnewemp, Paytrans } from './paytransaction.model';
import { Paymatrix } from '../master/master.model';


const BACKEND_URL = environment.apiUrl ;



/* Pay Transactions Services*/
@Injectable({providedIn: 'root'})
export class PaytransService {
  private paytrans: Paytrans[] = [];
  private paytransUpdated = new Subject<{paytrans: Paytrans[], paytransCount: number}>();
  get: any;
  
  
  //paytransSub: Subscription = new Subscription;
  
 
  

  constructor(private http: HttpClient, private router: Router) {}

 
  getPaytrans() {
    debugger;
    this.http
      .get<{ message: string; paytrans: any, maxPaytrans: number }>(
        BACKEND_URL+ "/paytrans/" 
      )
      .pipe(
        map(paytransData => {
        return {
          paytrans: paytransData.paytrans.map((paytrans: { Year: any; Month: any; }) => {
          return {
            Year: paytrans.Year,
            Month: paytrans.Month,

        };
      }),
      maxPaytrans: paytransData.maxPaytrans
       };
      })
    )
    .subscribe(transformedPaytransData => {
        console.log(transformedPaytransData);
        this.paytrans = transformedPaytransData.paytrans;
        this.paytransUpdated.next({
          paytrans: [...this.paytrans],
          paytransCount: transformedPaytransData.maxPaytrans
        });
      });
  }
  getPaytransUpdateListener() {
    return this.paytransUpdated.asObservable();
  }

  getPaytran() {
    // return this.http.get<{ Year: Schema.Types.Date, Month: Schema.Types.Date; }>(BACKEND_URL + "/paytrans/");
debugger;
    return this.http.get(BACKEND_URL + "/paytrans/");


  }
  

  addPaytrans(Year: Schema.Types.Date, Month: string) {

debugger;
     const paytrans: Paytrans = { Year: Year, Month: Month } ;
      console.log(paytrans);
      this.http.post<{message: string}>(BACKEND_URL + "/paytrans/", paytrans)
      .subscribe(responseData => {
        alert("Pay Generation Successfully");
        this.router.navigate(["/dashboard"]);
    });
  }


updatePaytrans(Year: Schema.Types.Date, Month: string) {

  const paytrans: Paytrans = { Year: Year, Month: Month };
console.log(paytrans);

  this.http.put(BACKEND_URL + "/paytrans/",  paytrans)
  .subscribe(response => {
    this.router.navigate(["/allpaytransactions"]);
  });

}


}

/* IT New Employee Services*/
@Injectable({providedIn: 'root'})
export class ItnewempsService {
  private itnewemps: Itnewemp[] = [];
  private itnewempsUpdated = new Subject<{itnewemps: Itnewemp[], itnewempCount: number}>();
  get: any;
  itnewempId: any;
  pmatrixs: Paymatrix[]  = [];
  totalPmatrixs = 0;
  pmatrixsSub: Subscription = new Subscription;

  constructor(private http: HttpClient, private router: Router) {}

 
  getItnewemps(itnewempsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${itnewempsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; itnewemps: any, maxItnewemps: number }>(
        BACKEND_URL+ "/itnewemps/" + queryParams
      )
      .pipe(
        map(itnewempData => {
        return {
          itnewemps: itnewempData.itnewemps.map((itnewemp: { month: any; year: any; empno: any; empname: any; designation: any; emptype: any; group: any; basictype: any;
            paylevel: any; cellno: any; gpf: any; cpsrec: any; basic: any; cgegis: any; da: any; cghs: any; hra: any; itrec: any; ta: any; itcess: any; daonta: any; ptrec: any; effectivedate: any; 
            _id: any; creator: any; 
          }) => {
          return {
            month: itnewemp.month,
            year: itnewemp.year,
            empno: itnewemp.empno,
            empname: itnewemp.empname,
            designation: itnewemp.designation,
            emptype: itnewemp.emptype,
            group: itnewemp.group,
            basictype: itnewemp.basictype,

            paylevel: itnewemp.paylevel,
            cellno: itnewemp.cellno,
            gpf: itnewemp.gpf,
            cpsrec: itnewemp.cpsrec,
            basic: itnewemp.basic,
            cgegis: itnewemp.cgegis,
            da: itnewemp.da,
            cghs: itnewemp.cghs,
            hra: itnewemp.hra,
            itrec: itnewemp.itrec,
            ta: itnewemp.ta,
            itcess: itnewemp.itcess,
            daonta: itnewemp.daonta,
            ptrec: itnewemp.ptrec,
            effectivedate: itnewemp.effectivedate,

            id: itnewemp._id,
            creator: itnewemp.creator,
            
        };
      }),
      maxItnewemps: itnewempData.maxItnewemps
       };
      })
    )
    .subscribe(transformedItnewempData => {
        console.log(transformedItnewempData);
        this.itnewemps = transformedItnewempData.itnewemps;
        this.itnewempsUpdated.next({
          itnewemps: [...this.itnewemps],
          itnewempCount: transformedItnewempData.maxItnewemps
        });
      });
  }
  getItnewempUpdateListener() {
    return this.itnewempsUpdated.asObservable();
  }

  getItnewemp(id: string) {
     return this.http.get<{ _id: string;
      month: Schema.Types.Date; year: Schema.Types.Date; empno: number; empname: string; designation: string; emptype: string; group: string; basictype: string;
            paylevel: string; cellno: number; gpf: number; cpsrec: number; basic: number; cgegis: number; da: number; cghs: number; hra: number; itrec: number; ta: number; itcess: number; 
            daonta: number; ptrec: number; effectivedate: Schema.Types.Date; }>(BACKEND_URL + "/itnewemps/"+ id);
  }
  
 
  addItnewemp(id: string, month: Schema.Types.Date, year: Schema.Types.Date, empno: number, empname: string, designation: string, emptype: string, group: string, basictype: string,
    paylevel: string, cellno: number, gpf: number, cpsrec: number, basic: number, cgegis: number, da: number, cghs: number, hra: number, itrec: number, ta: number, itcess: number, 
    daonta: number, ptrec: number, effectivedate: Schema.Types.Date) {
     
      debugger;
     const itnewemp: Itnewemp = { id: id, month: month, year: year, empno: empno, empname: empname, designation: designation, emptype: emptype, group: group, basictype: basictype,
      paylevel: paylevel, cellno: cellno, gpf: gpf, cpsrec: cpsrec, basic: basic, cgegis: cgegis, da: da, cghs: cghs, hra: hra, itrec: itrec, ta: ta, itcess: itcess, 
      daonta: daonta, ptrec: ptrec, effectivedate: effectivedate };

      console.log(itnewemp);
      this.http.post<{message: string}>(BACKEND_URL + "/itnewemps/", itnewemp)
      .subscribe(responseData => {
        this.router.navigate(["/itnewemployee"]);
    });
  }

  
updateItnewemp(id: string, month: Schema.Types.Date, year: Schema.Types.Date, empno: number, empname: string, designation: string, emptype: string, group: string, basictype: string,
  paylevel: string, cellno: number, gpf: number, cpsrec: number, basic: number, cgegis: number, da: number, cghs: number, hra: number, itrec: number, ta: number, itcess: number, 
  daonta: number, ptrec: number, effectivedate: Schema.Types.Date) {


  const itnewemp: Itnewemp = { id: id, month: month, year: year, empno: empno, empname: empname, designation: designation, emptype: emptype, group: group, basictype: basictype,
    paylevel: paylevel, cellno: cellno, gpf: gpf, cpsrec: cpsrec, basic: basic, cgegis: cgegis, da: da, cghs: cghs, hra: hra, itrec: itrec, ta: ta, itcess: itcess, 
    daonta: daonta, ptrec: ptrec, effectivedate: effectivedate };

  console.log(itnewemp);
  this.http.put(BACKEND_URL + "/itnewemps/" + id, itnewemp)
  .subscribe(response => {
    this.router.navigate(["/itnewemployee"]);
  });

}
deleteItnewemp(itnewempId: string) {
  return this.http.delete(BACKEND_URL + "/itnewemps/" + itnewempId);

}

}
