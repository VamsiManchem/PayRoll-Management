import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
import { Designation, Employee, Group, Hra, Loan } from './master.model';
import { DeptModel } from './master.model';
import { Paymatrix } from './master.model';
import { Schema } from 'mongoose';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';


const BACKEND_URL = environment.apiUrl ;


/* Department Services*/
@Injectable({providedIn: 'root'})
export class DeptsService {
  private depts: DeptModel[] = [];
  private deptsUpdated = new Subject<{depts: DeptModel[], deptCount: number}>();
  get: any;
  deptId: any;


  constructor(private http: HttpClient, private router: Router) {}

  /* getDepts(deptsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${deptsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; depts: any, maxDepts: number }>(
        BACKEND_URL+ "/depts/" + queryParams
      )
      .pipe(
        map(deptData => {
        return {
          depts: deptData.depts.map((dept: { title: any; content: any; _id: any; creator: any; }) => {
          return {
            title: dept.title,
            content: dept.content,
            id: dept._id,
            creator: dept.creator
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
  } */
  getDepts(deptsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${deptsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; depts: any, maxDepts: number }>(
        BACKEND_URL+ "/depts/" + queryParams
      )
      .pipe(
        map(deptData => {
        return {
          depts: deptData.depts.map((dept: { title: any;  _id: any; creator: any; }) => {
          return {
            title: dept.title,
            id: dept._id,
            creator: dept.creator
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

  /* getDept(id: string) {
    return this.http.get<{ _id: string; title: string; content: string; }>(BACKEND_URL + "/depts/"+ id);
  } */
  getDept(id: string) {
    return this.http.get<{ _id: string; title: string; }>(BACKEND_URL + "/depts/"+ id);
  }

 /*  addDept( id: string, title: string, content: string ) {
    const dept: DeptModel = { id: id, title: title, content: content };
    this.http.post<{message: string}>(BACKEND_URL + "/depts/", dept)
      .subscribe(responseData => {
        this.router.navigate(["/department"]);

      });

} */

addDept( id: string, title: string) {
  const dept: DeptModel = { id: id, title: title};
  this.http.post<{message: string}>(BACKEND_URL + "/depts/", dept)
    .subscribe(responseData => {
      this.router.navigate(["/department"]);

    });
  }

/* updateDept(id: string, title: string, content: string) {
  const dept: DeptModel = { id: id, title: title, content: content };
  this.http.put(BACKEND_URL + "/depts/" + id, dept)
  .subscribe(response => {
    this.router.navigate(["/department"]);
  });

} */
updateDept(id: string, title: string) {
  const dept: DeptModel = { id: id, title: title};
  this.http.put(BACKEND_URL + "/depts/" + id, dept)
  .subscribe(response => {
    this.router.navigate(["/department"]);
  });

}
deleteDept(deptId: string) {
  return this.http.delete(BACKEND_URL + "/depts/" + deptId);

}

}

/* Designation Services*/
@Injectable({providedIn: 'root'})
export class DesigsService {
  private desigs: Designation[] = [];
  private desigsUpdated = new Subject<{desigs: Designation[], desigCount: number}>();
  get: any;
  desigId: any;


  constructor(private http: HttpClient, private router: Router) {}

  getDesigs(desigsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${desigsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; desigs: any, maxDesigs: number }>(
        BACKEND_URL + "/desigs/" + queryParams
      )
      .pipe(
        map(desigData => {
        return {
          desigs: desigData.desigs.map((desig: { title: any; content: any; _id: any; creator: any; }) => {
          return {
            title: desig.title,
            content: desig.content,
            id: desig._id,
            creator: desig.creator
        };
      }),
      maxDesigs: desigData.maxDesigs
       };
      })
    )
    .subscribe(transformedDesigData => {
        console.log(transformedDesigData);
        this.desigs = transformedDesigData.desigs;
        this.desigsUpdated.next({
          desigs: [...this.desigs],
          desigCount: transformedDesigData.maxDesigs
        });
      });
  }

  getDesigUpdateListener() {
    return this.desigsUpdated.asObservable();
  }

  getDesig(id: string) {
    return this.http.get<{ _id: string; title: string; content: string; }>(BACKEND_URL + "/desigs/" + id);
  }

   addDesig( id: string, title: string, content: string ) {
    const desig: Designation = { id: id, title: title, content: content };
    console.log(desig);
    this.http.post<{message: string}>(BACKEND_URL + "/desigs/", desig)
      .subscribe(responseData => {
        this.router.navigate(["/designation"]);

      });

} 

 updateDesig(id: string, title: string, content: string) {
  const desig: Designation = { id: id, title: title, content: content };
  this.http.put(BACKEND_URL + "/desigs/" + id, desig)
  .subscribe(response => {
    this.router.navigate(["/designation"]);
  });

} 

deleteDesig(desigId: string) {
  return this.http.delete(BACKEND_URL + "/desigs/" + desigId);

}

}


/* Group Services*/
@Injectable({providedIn: 'root'})
export class GroupsService {
  private groups: Group[] = [];
  private groupsUpdated = new Subject<{groups: Group[], groupCount: number}>();
  get: any;
  groupId: any;


  constructor(private http: HttpClient, private router: Router) {}

  
  getGroups(groupsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${groupsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; groups: any, maxGroups: number }>(
        BACKEND_URL+ "/groups/" + queryParams
      )
      .pipe(
        map(groupData => {
        return {
          groups: groupData.groups.map((group: { title: any;  _id: any; creator: any; }) => {
          return {
            title: group.title,
            id: group._id,
            creator: group.creator
        };
      }),
      maxGroups: groupData.maxGroups
       };
      })
    )
    .subscribe(transformedGroupData => {
        console.log(transformedGroupData);
        this.groups = transformedGroupData.groups;
        this.groupsUpdated.next({
          groups: [...this.groups],
          groupCount: transformedGroupData.maxGroups
        });
      });
  }
  getGroupUpdateListener() {
    return this.groupsUpdated.asObservable();
  }

  getGroup(id: string) {
    return this.http.get<{ _id: string; title: string; }>(BACKEND_URL + "/groups/"+ id);
  }

addGroup( id: string, title: string) {
  const group: Group = { id: id, title: title};
  this.http.post<{message: string}>(BACKEND_URL + "/groups/", group)
    .subscribe(responseData => {
      this.router.navigate(["/group"]);

    });
  }

updateGroup(id: string, title: string) {
  const group: Group = { id: id, title: title};
  this.http.put(BACKEND_URL + "/groups/" + id, group)
  .subscribe(response => {
    this.router.navigate(["/group"]);
  });

}
deleteGroup(groupId: string) {
  return this.http.delete(BACKEND_URL + "/groups/" + groupId);

}

}

/* Employee Services*/
@Injectable({providedIn: 'root'})
export class EmpsService implements OnDestroy{
  private emps: Employee[] = [];
  private empsUpdated = new Subject<{emps: Employee[], empCount: number}>();
  get: any;
  empId: any;
  pmatrixs: Paymatrix[]  = [];
  totalPmatrixs = 0;
  pmatrixsSub: Subscription = new Subscription;
  
 
  

  constructor(private http: HttpClient, private router: Router, public pmatrixsService: PmatrixService) {}

 
  getEmps(empsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${empsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; emps: any, maxEmps: number }>(
        BACKEND_URL+ "/emps/" + queryParams
      )
      .pipe(
        map(empData => {
        return {
          emps: empData.emps.map((emp: { empno: any; empname: any; basictype: any; emptype: any; department: any; designation: any; group: any; gender: any; dob: any; doj: any; doni: any; doli: any; dor: any; pan: any; gpf: any; nps: any; aadharno: any; 
            bankname: any; bankaccountno: any; ifsccode: any; 
            paylevel: any; cellno: any; basicpay: any; govtqurters: any; medicalstatus: any; exservice: any; ptax: any; cgegis: any; da: any; daamt: any; hra: any; hraamt: any; ta: any; daonta: any; npssubscription: any; npsgovtsub:any; remarks: any; status: any; effectivedate: any; 
            _id: any; creator: any; 
            HBAloan: any; HBAtype: any; HBAloanamt: any; HBAinstno: any; HBAinstamt: any;/*  HBArec: any; */ HBAbal: any; HBAlastinst: any; HBAlastdate: any; HBAremarks: any; HBAstartdate: any; HBAstatus: any;
            MCloan: any; MCtype: any; MCloanamt: any; MCinstno: any; MCinstamt: any; /* MCrec: any; */ MCbal: any; MClastinst: any; MClastdate: any; MCremarks: any; MCstartdate: any; MCstatus: any; 
            PCloan: any; PCtype: any; PCloanamt: any; PCinstno: any; PCinstamt: any; /* PCrec: any; */ PCbal: any; PClastinst: any; PClastdate: any; PCremarks: any; PCstartdate: any; PCstatus: any;
            CARloan: any; CARtype: any; CARloanamt: any; CARinstno: any; CARinstamt: any; /* CARrec: any; */ CARbal: any; CARlastinst: any; CARlastdate: any; CARremarks: any; CARstartdate: any; CARstatus: any;
            GPFloan: any; GPFtype: any; GPFloanamt: any; GPFinstno: any; GPFinstamt: any; /* GPFrec: any; */ GPFbal: any; GPFlastinst: any; GPFlastdate: any; GPFremarks: any; GPFstartdate: any; GPFstatus: any;
            OTHERloan: any; OTHERtype: any; OTHERloanamt: any; OTHERinstno: any; OTHERinstamt: any; /* OTHERrec: any; */ OTHERbal: any; OTHERlastinst: any; OTHERlastdate: any; OTHERremarks: any; OTHERstartdate: any; OTHERstatus: any;
            gpfsub: any; gpfrec: any; npssub: any; npsrec: any; it: any; ittaxamt:any; cess: any; misc1: any; homerent: any; water: any; elec: any; cghs: any; noncghs:any; misc1Alw: any;
            dlomi: any; welfare: any; DRDLEcss: any; cqa: any; OfrMisc1: any; OffRecvdate: any;
            grosspay: any; tdeduction: any; netpay: any; toffcrec: any; tobnkamt: any;
          }) => {
          return {
            empno: emp.empno,
            empname: emp.empname,
            basictype: emp.basictype,
            emptype: emp.emptype,
            department: emp.department,
            designation: emp.designation,
            group: emp.group,
            gender: emp.gender,
            dob: emp.dob,
            doj: emp.doj,
            doni: emp.doni,
            doli: emp.doli,
            dor: emp.dor,
            pan: emp.pan,
            gpf: emp.gpf,
            nps: emp.nps,
            aadharno: emp.aadharno,

            bankname: emp.bankname,
            bankaccountno: emp.bankaccountno,
            ifsccode: emp.ifsccode,

            paylevel: emp.paylevel,
            cellno: emp.cellno,
            basicpay: emp.basicpay,
            govtqurters: emp.govtqurters,
            medicalstatus: emp.medicalstatus,
            exservice: emp.exservice,
            ptax: emp.ptax,
            cgegis: emp.cgegis,
            da: emp.da,
            daamt: emp.daamt,
            hra: emp.hra,
            hraamt: emp.hraamt,
            ta: emp.ta,
            daonta: emp.daonta,
            npssubscription: emp.npssubscription,
            npsgovtsub: emp.npsgovtsub,
            remarks: emp.remarks,
            status: emp.status,
            effectivedate: emp.effectivedate,

            id: emp._id,
            creator: emp.creator,

            HBAloan: emp.HBAloan,
            HBAtype: emp.HBAtype,
            HBAloanamt: emp.HBAloanamt,
            HBAinstno: emp.HBAinstno,
            HBAinstamt: emp.HBAinstamt,
            //HBArec: emp.HBArec, */
            HBAbal: emp.HBAbal,
            HBAlastinst: emp.HBAlastinst,
            HBAlastdate: emp.HBAlastdate,
            HBAremarks: emp.HBAremarks,
            HBAstartdate: emp.HBAstartdate,
            HBAstatus: emp.HBAstatus,

            MCloan: emp.MCloan,
            MCtype: emp.MCtype,
            MCloanamt: emp.MCloanamt,
            MCinstno: emp.MCinstno,
            MCinstamt: emp.MCinstamt,
           //MCrec: emp.MCrec, 
            MCbal: emp.MCbal,
            MClastinst: emp.MClastinst,
            MClastdate: emp.MClastdate,
            MCremarks: emp.MCremarks,
            MCstartdate: emp.MCstartdate,
            MCstatus: emp.MCstatus,

            PCloan: emp.PCloan,
            PCtype: emp.PCtype,
            PCloanamt: emp.PCloanamt,
            PCinstno: emp.PCinstno,
            PCinstamt: emp.PCinstamt,
            //PCrec: emp.PCrec,
            PCbal: emp.PCbal,
            PClastinst: emp.PClastinst,
            PClastdate: emp.PClastdate,
            PCremarks: emp.PCremarks,
            PCstartdate: emp.PCstartdate,
            PCstatus: emp.PCstatus,

            CARloan: emp.CARloan,
            CARtype: emp.CARtype,
            CARloanamt:emp.CARloanamt,
            CARinstno: emp.CARinstno,
            CARinstamt: emp.CARinstamt,
            // CARrec: emp.CARrec, 
            CARbal: emp.CARbal,
            CARlastinst: emp.CARlastinst,
            CARlastdate: emp.CARlastdate,
            CARremarks: emp.CARremarks,
            CARstartdate: emp.CARstartdate,
            CARstatus: emp.CARstatus,

            GPFloan: emp.GPFloan,
            GPFtype: emp.GPFtype,
            GPFloanamt:emp.GPFloanamt,
            GPFinstno: emp.GPFinstno,
            GPFinstamt: emp.GPFinstamt,
            // GPFrec: emp.GPFrec, 
            GPFbal: emp.GPFbal,
            GPFlastinst: emp.GPFlastinst,
            GPFlastdate: emp.GPFlastdate,
            GPFremarks: emp.GPFremarks,
            GPFstartdate: emp.GPFstartdate,
            GPFstatus: emp.GPFstatus,

            OTHERloan: emp.OTHERloan,
            OTHERtype: emp.OTHERtype,
            OTHERloanamt:emp.OTHERloanamt,
            OTHERinstno: emp.OTHERinstno,
            OTHERinstamt: emp.OTHERinstamt,
            // OTHERrec: emp.OTHERrec, 
            OTHERbal: emp.OTHERbal,
            OTHERlastinst: emp.OTHERlastinst,
            OTHERlastdate: emp.OTHERlastdate,
            OTHERremarks: emp.OTHERremarks,
            OTHERstartdate: emp.OTHERstartdate,
            OTHERstatus: emp.OTHERstatus,

            gpfsub: emp.gpfsub,
            gpfrec: emp.gpfrec,
            npssub: emp.npssub,
            npsrec: emp.npsrec,
            it: emp.it,
            ittaxamt: emp.ittaxamt,
            cess: emp.cess,
            misc1: emp.misc1,
            homerent: emp.homerent,
            water: emp.water,
            elec: emp.elec,
            cghs: emp.cghs,
            noncghs:emp.noncghs,
            misc1Alw: emp.misc1Alw,
           
            dlomi: emp.dlomi,
            welfare: emp.welfare,
            DRDLEcss: emp.DRDLEcss,
            cqa: emp.cqa,
            OfrMisc1: emp.OfrMisc1,
            OffRecvdate: emp.OffRecvdate,

            grosspay: emp.grosspay,
            tdeduction: emp.tdeduction,
            netpay: emp.netpay,
            toffcrec: emp.toffcrec,
            tobnkamt: emp.tobnkamt,

        };
      }),
      maxEmps: empData.maxEmps
       };
      })
    )
    .subscribe(transformedEmpData => {
        console.log(transformedEmpData);
        this.emps = transformedEmpData.emps;
        this.empsUpdated.next({
          emps: [...this.emps],
          empCount: transformedEmpData.maxEmps
        });
      });
  }
  getEmpUpdateListener() {
    return this.empsUpdated.asObservable();
  }

  getEmp(id: string) {
     return this.http.get<{ _id: string; empno: number; empname: string; basictype: string, emptype: string, department: string, designation: string, group: string, gender: string, 
      dob: Schema.Types.Date, doj: Schema.Types.Date, doni: Schema.Types.Date, doli: Schema.Types.Date, dor: Schema.Types.Date, pan: string, gpf: string, nps: string, aadharno: number, 
      bankname: string, bankaccountno: number, ifsccode: string, 
      paylevel: string, cellno: number, basicpay: number, govtqurters: string, medicalstatus: string, exservice: string, 
      ptax: number, cgegis: number; da: number; daamt: number; hra: number; hraamt: number; ta: number; daonta: number; npssubscription: number, npsgovtsub:number,remarks: string, status: string, effectivedate: Schema.Types.Date,  
      HBAloan: string;HBAtype: string; HBAloanamt: number, HBAinstno: number; HBAinstamt: number; HBAbal: number; HBAlastinst:number; HBAlastdate: Schema.Types.Date; 
      HBAremarks: string;HBAstartdate: Schema.Types.Date; HBAstatus: string; 
      MCloan: string; MCtype: string; MCloanamt: number; MCinstno: number; MCinstamt: number; MCbal: number; MClastinst:number; MClastdate: Schema.Types.Date; 
      MCremarks: string; MCstartdate: Schema.Types.Date; MCstatus: string; PCloan: string; PCtype: string; 
      PCloanamt: number; PCinstno: number;  PCinstamt: number; PCbal: number; PClastinst:number; PClastdate: Schema.Types.Date; PCremarks: string; 
      PCstartdate: Schema.Types.Date; PCstatus: string; 
      CARloan: string; CARtype: string; CARloanamt: number; CARinstno: number; CARinstamt: number; CARbal: number; CARlastinst:number;  
      CARlastdate: Schema.Types.Date;  CARremarks: string; CARstartdate: Schema.Types.Date; CARstatus: string; 
      GPFloan: string; GPFtype: string; GPFloanamt: number; GPFinstno: number; GPFinstamt: number; GPFbal: number;  GPFlastinst:number; 
      GPFlastdate: Schema.Types.Date; GPFremarks: string; GPFstartdate: Schema.Types.Date; GPFstatus: string; 
      OTHERloan: string; OTHERtype: string; OTHERloanamt: number; OTHERinstno: number; OTHERinstamt: number; OTHERbal: number; OTHERlastinst:number; 
      OTHERlastdate: Schema.Types.Date; OTHERremarks: string; OTHERstartdate: Schema.Types.Date; OTHERstatus: string; 
      gpfsub: number; gpfrec: number; npssub: number; npsrec: number; it: number; ittaxamt:number,cess: number; misc1: number; homerent: number; water: number; elec: number; cghs: number; noncghs:string, misc1Alw: number;
      dlomi: number, welfare: number; DRDLEcss: number; cqa: number; OfrMisc1: number; OffRecvdate: Schema.Types.Date;
      grosspay: number; tdeduction: number; netpay: number; toffcrec: number; tobnkamt: number;}>(BACKEND_URL + "/emps/"+ id);
  }
  

  addEmp(id: string, empno: number, empname: string, basictype: string, emptype: string, department: string, designation: string, group: string, gender: string, dob: Schema.Types.Date, 
    doj: Schema.Types.Date, doni: Schema.Types.Date, doli: Schema.Types.Date, dor: Schema.Types.Date, pan: string, gpf: string, nps: string, aadharno: number, 
    bankname: string, bankaccountno: number, ifsccode: string, 
    paylevel: string, cellno: number, basicpay: number, govtqurters: string, medicalstatus: string, exservice: string, ptax: number, cgegis: number, da: number, daamt: number, hra: number, hraamt: number, ta: number, daonta: number, npssubscription: number, npsgovtsub:number, remarks: string,
    status: string, effectivedate: Schema.Types.Date, 
    HBAloan: string, HBAtype: string, HBAloanamt: number, HBAinstno: number, HBAinstamt: number,  HBAbal: number, HBAlastinst:number,  HBAlastdate: Schema.Types.Date,  HBAremarks: string,  HBAstartdate: Schema.Types.Date,  HBAstatus: string, 
    MCloan: string, MCtype: string, MCloanamt: number, MCinstno: number, MCinstamt: number, MCbal: number, MClastinst:number, MClastdate: Schema.Types.Date, MCremarks: string, MCstartdate: Schema.Types.Date, MCstatus: string, 
    PCloan: string, PCtype: string, PCloanamt: number, PCinstno: number,  PCinstamt: number,  PCbal: number, PClastinst:number, PClastdate: Schema.Types.Date, PCremarks: string, PCstartdate: Schema.Types.Date, PCstatus: string, 
    CARloan: string, CARtype: string, CARloanamt: number, CARinstno: number, CARinstamt: number, CARbal: number, CARlastinst:number, CARlastdate: Schema.Types.Date,  CARremarks: string, CARstartdate: Schema.Types.Date, CARstatus: string, 
    GPFloan: string, GPFtype: string, GPFloanamt: number, GPFinstno: number, GPFinstamt: number,  GPFbal: number,  GPFlastinst:number, GPFlastdate: Schema.Types.Date, GPFremarks: string, GPFstartdate: Schema.Types.Date, GPFstatus: string,
    OTHERloan: string, OTHERtype: string, OTHERloanamt: number, OTHERinstno: number, OTHERinstamt: number, OTHERbal: number,  OTHERlastinst:number,
    OTHERlastdate: Schema.Types.Date, OTHERremarks: string, OTHERstartdate: Schema.Types.Date, OTHERstatus: string,
    gpfsub: number, gpfrec: number, npssub: number, npsrec: number, it: number, ittaxamt: number, cess: number, misc1: number, homerent: number, water: number, elec: number, cghs: number, noncghs:string, misc1Alw: number,
    dlomi: number, welfare: number, DRDLEcss: number, cqa: number, OfrMisc1: number, OffRecvdate: Schema.Types.Date,
    grosspay: number, tdeduction: number, netpay: number, toffcrec: number, tobnkamt: number) {
     
     
     const emp: Employee = { id: id, empno: empno, empname: empname, basictype: basictype, emptype: emptype, department: department, designation: designation, group: group,
      gender: gender, dob: dob, doj: doj, doni: doni, doli: doli, dor: dor, pan: pan, gpf: gpf, nps: nps, aadharno: aadharno, 
      bankname: bankname, bankaccountno: bankaccountno, 
      ifsccode : ifsccode, paylevel: paylevel, cellno: cellno, basicpay: basicpay, govtqurters: govtqurters, medicalstatus: medicalstatus, exservice: exservice,
      ptax: ptax, cgegis: cgegis, da: da, daamt: daamt, hra: hra, hraamt:hraamt, ta: ta, daonta: daonta, npssubscription: npssubscription,npsgovtsub:npsgovtsub, remarks: remarks, status: status, effectivedate: effectivedate, 
      HBAloan:HBAloan, HBAtype:HBAtype, HBAloanamt:HBAloanamt, HBAinstno:HBAinstno, HBAinstamt:HBAinstamt, HBAbal:HBAbal , HBAlastinst:HBAlastinst, HBAlastdate:HBAlastdate, HBAremarks:HBAremarks, HBAstartdate:HBAstartdate, HBAstatus:HBAstatus,
      MCloan:MCloan, MCtype:MCtype, MCloanamt:MCloanamt,MCinstno:MCinstno, MCinstamt:MCinstamt, MCbal:MCbal, MClastinst:MClastinst, MClastdate:MClastdate, MCremarks:MCremarks, MCstartdate:MCstartdate, MCstatus:MCstatus, 
      PCloan:PCloan, PCtype:PCtype, PCloanamt:PCloanamt,PCinstno:PCinstno, PCinstamt:PCinstamt, PCbal:PCbal, PClastinst:PClastinst, PClastdate:PClastdate, PCremarks:PCremarks, PCstartdate:PCstartdate, PCstatus:PCstatus, 
      CARloan:CARloan, CARtype:CARtype, CARloanamt:CARloanamt, CARinstno:CARinstno, CARinstamt:CARinstamt, CARbal:CARbal, CARlastinst: CARlastinst, CARlastdate:CARlastdate, CARremarks:CARremarks, CARstartdate:CARstartdate, CARstatus:CARstatus, 
      GPFloan:GPFloan, GPFtype:GPFtype, GPFloanamt: GPFloanamt, GPFinstno:GPFinstno,  GPFinstamt:GPFinstamt, GPFbal:GPFbal, GPFlastinst:GPFlastinst, GPFlastdate:GPFlastdate,  GPFremarks:GPFremarks, GPFstartdate:GPFstartdate,  GPFstatus:GPFstatus,
      OTHERloan:OTHERloan, OTHERtype:OTHERtype, OTHERloanamt: OTHERloanamt, OTHERinstno:OTHERinstno,  OTHERinstamt:OTHERinstamt, OTHERbal:OTHERbal, OTHERlastinst:OTHERlastinst, OTHERlastdate:OTHERlastdate,  OTHERremarks:OTHERremarks, OTHERstartdate:OTHERstartdate,  OTHERstatus:OTHERstatus,
      gpfsub:gpfsub, gpfrec:gpfrec, npssub:npssub, npsrec:npsrec, it:it,ittaxamt:ittaxamt, cess:cess, misc1:misc1, homerent:homerent, water:water, elec:elec, cghs:cghs, noncghs:noncghs,misc1Alw:misc1Alw,
      dlomi:dlomi, welfare:welfare, DRDLEcss:DRDLEcss, cqa:cqa, OfrMisc1:OfrMisc1, OffRecvdate:OffRecvdate,
      grosspay: grosspay, tdeduction: tdeduction, netpay: netpay, toffcrec: toffcrec, tobnkamt: tobnkamt
    };
      console.log(emp);
      this.http.post<{message: string}>(BACKEND_URL + "/emps/", emp)
      .subscribe(responseData => {
        this.router.navigate(["/employee"]);
    });
  }

  
updateEmp(id: string, empno: number, empname: string, basictype: string, emptype: string, department: string, designation: string, group: string, gender: string, 
  dob: Schema.Types.Date, doj: Schema.Types.Date, doni: Schema.Types.Date, doli: Schema.Types.Date, dor: Schema.Types.Date, pan: string, gpf: string, nps: string, aadharno: number, 
  bankname: string, bankaccountno: number, ifsccode: string, 
  paylevel: string, cellno: number, basicpay: number, govtqurters: string, medicalstatus: string, exservice: string, 
  ptax: number, cgegis: number, da: number, daamt: number, hra: number, hraamt: number,ta: number, daonta: number, npssubscription: number,npsgovtsub:number, remarks: string, status: string, effectivedate: Schema.Types.Date, 
  HBAloan: string, HBAtype: string, HBAloanamt:number, HBAinstno: number, HBAinstamt: number, HBAbal: number, HBAlastinst:number,  HBAlastdate: Schema.Types.Date,  HBAremarks: string,  HBAstartdate: Schema.Types.Date,  HBAstatus: string, 
  MCloan: string, MCtype: string, MCloanamt:number, MCinstno: number, MCinstamt: number, MCbal: number, MClastinst:number, MClastdate: Schema.Types.Date, MCremarks: string, MCstartdate: Schema.Types.Date, MCstatus: string, 
  PCloan: string, PCtype: string,  PCloanamt: number, PCinstno: number,  PCinstamt: number,  PCbal: number, PClastinst:number, PClastdate: Schema.Types.Date, PCremarks: string, PCstartdate: Schema.Types.Date, PCstatus: string, 
  CARloan: string, CARtype: string,  CARloanamt: number, CARinstno: number, CARinstamt: number, CARbal: number, CARlastinst:number, CARlastdate: Schema.Types.Date,  CARremarks: string, CARstartdate: Schema.Types.Date, CARstatus: string, 
  GPFloan: string, GPFtype: string, GPFloanamt: number, GPFinstno: number, GPFinstamt: number,  GPFbal: number,  GPFlastinst:number, GPFlastdate: Schema.Types.Date, GPFremarks: string, GPFstartdate: Schema.Types.Date, GPFstatus: string,
  OTHERloan: string, OTHERtype: string,  OTHERloanamt: number, OTHERinstno: number, OTHERinstamt: number,  OTHERbal: number,  OTHERlastinst:number,
  OTHERlastdate: Schema.Types.Date, OTHERremarks: string, OTHERstartdate: Schema.Types.Date, OTHERstatus: string,
  gpfsub: number, gpfrec: number, npssub: number, npsrec: number, it: number,ittaxamt:number, cess: number, misc1: number, homerent: number, water: number, elec: number, cghs: number,noncghs:string, misc1Alw: number,
  dlomi: number, welfare: number, DRDLEcss: number, cqa: number, OfrMisc1: number, OffRecvdate: Schema.Types.Date,
  grosspay: number, tdeduction: number, netpay: number, toffcrec: number, tobnkamt: number) {

  
  const emp: Employee = { id: id, empno: empno, empname: empname, basictype: basictype, emptype: emptype, department: department, designation: designation, group: group,
    gender: gender, dob: dob, doj: doj, doni: doni, doli: doli, dor: dor, pan: pan, gpf: gpf, nps: nps, aadharno: aadharno, 
    bankname: bankname, bankaccountno: bankaccountno, ifsccode : ifsccode, 
    paylevel: paylevel, cellno: cellno, basicpay: basicpay, govtqurters: govtqurters, medicalstatus: medicalstatus, exservice: exservice, ptax: ptax, cgegis: cgegis, da: da, daamt: daamt,
    hra: hra, hraamt: hraamt, ta: ta, daonta: daonta, npssubscription: npssubscription, npsgovtsub:npsgovtsub,remarks: remarks, status: status, effectivedate: effectivedate, 
    HBAloan:HBAloan, HBAtype:HBAtype, HBAloanamt: HBAloanamt, HBAinstno:HBAinstno, HBAinstamt:HBAinstamt, HBAbal:HBAbal , HBAlastinst:HBAlastinst, HBAlastdate:HBAlastdate, HBAremarks:HBAremarks, HBAstartdate:HBAstartdate, HBAstatus:HBAstatus,
    MCloan:MCloan, MCtype:MCtype, MCloanamt:MCloanamt, MCinstno:MCinstno, MCinstamt:MCinstamt, MCbal:MCbal, MClastinst:MClastinst, MClastdate:MClastdate, MCremarks:MCremarks, MCstartdate:MCstartdate, MCstatus:MCstatus, 
    PCloan:PCloan, PCtype:PCtype, PCloanamt:PCloanamt,  PCinstno:PCinstno, PCinstamt:PCinstamt, PCbal:PCbal, PClastinst:PClastinst, PClastdate:PClastdate, PCremarks:PCremarks, PCstartdate:PCstartdate, PCstatus:PCstatus, 
    CARloan:CARloan, CARtype:CARtype, CARloanamt:CARloanamt, CARinstno:CARinstno, CARinstamt:CARinstamt, CARbal:CARbal, CARlastinst: CARlastinst, CARlastdate:CARlastdate, CARremarks:CARremarks, CARstartdate:CARstartdate, CARstatus:CARstatus, 
    GPFloan:GPFloan, GPFtype:GPFtype, GPFloanamt: GPFloanamt, GPFinstno:GPFinstno,  GPFinstamt:GPFinstamt, GPFbal:GPFbal, GPFlastinst:GPFlastinst, GPFlastdate:GPFlastdate,  GPFremarks:GPFremarks, GPFstartdate:GPFstartdate,  GPFstatus:GPFstatus,
    OTHERloan:OTHERloan, OTHERtype:OTHERtype,  OTHERloanamt:OTHERloanamt, OTHERinstno:OTHERinstno,  OTHERinstamt:OTHERinstamt, OTHERbal:OTHERbal, OTHERlastinst:OTHERlastinst, OTHERlastdate:OTHERlastdate,  OTHERremarks:OTHERremarks, OTHERstartdate:OTHERstartdate,  OTHERstatus:OTHERstatus,
    gpfsub:gpfsub, gpfrec:gpfrec, npssub:npssub, npsrec:npsrec, it:it, ittaxamt:ittaxamt,cess:cess, misc1:misc1, homerent:homerent, water:water, elec:elec, cghs:cghs, noncghs:noncghs, misc1Alw:misc1Alw,
    dlomi:dlomi, welfare:welfare, DRDLEcss:DRDLEcss, cqa:cqa, OfrMisc1:OfrMisc1, OffRecvdate:OffRecvdate,
    grosspay: grosspay, tdeduction: tdeduction, netpay: netpay, toffcrec: toffcrec, tobnkamt: tobnkamt
  };
console.log(emp);
  this.http.put(BACKEND_URL + "/emps/" + id, emp)
  .subscribe(response => {
    this.router.navigate(["/employee"]);
  });

}
deleteEmp(empId: string) {
  return this.http.delete(BACKEND_URL + "/emps/" + empId);

}
ngOnDestroy() {
  this.pmatrixsSub.unsubscribe();
}
}



/* Loan Services*/
@Injectable({providedIn: 'root'})
export class LoansService {
  private loans: Loan[] = [];
  private loansUpdated = new Subject<{loans: Loan[], loanCount: number}>();
  get: any;
  loanId: any;


  constructor(private http: HttpClient, private router: Router) {}

  getLoans(loansPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${loansPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; loans: any, maxLoans: number }>(
        BACKEND_URL + "/loans/" + queryParams
      )
      .pipe(
        map(loanData => {
        return {
          loans: loanData.loans.map((loan: { name: any; description: any; type: any; _id: any; creator: any; }) => {
          return {
            name: loan.name,
            description: loan.description,
            type: loan.type,
            id: loan._id,
            creator: loan.creator
        };
      }),
      maxLoans: loanData.maxLoans
       };
      })
    )
    .subscribe(transformedLoanData => {
        console.log(transformedLoanData);
        this.loans = transformedLoanData.loans;
        this.loansUpdated.next({
          loans: [...this.loans],
          loanCount: transformedLoanData.maxLoans
        });
      });
  }

  getLoanUpdateListener() {
    return this.loansUpdated.asObservable();
  }

  getLoan(id: string) {
    return this.http.get<{ _id: string; name: string; description: string; type: string; }>(BACKEND_URL + "/loans/" + id);
  }

   addLoan( id: string, name: string, description: string, type: string) {
    const loan: Loan = { id: id, name: name, description: description, type: type };
    console.log(loan);
    this.http.post<{message: string}>(BACKEND_URL + "/loans/", loan)
      .subscribe(responseData => {
        this.router.navigate(["/loan"]);

      });

} 

 updateLoan(id: string, name: string, description: string, type: string,) {
  const loan: Loan = { id: id, name: name, description: description, type: type };
  this.http.put(BACKEND_URL + "/loans/" + id, loan)
  .subscribe(response => {
    this.router.navigate(["/loan"]);
  });

} 

deleteLoan(loanId: string) {
  return this.http.delete(BACKEND_URL + "/loans/" + loanId);

}

}

 

/* Paymatrix Services*/
@Injectable({providedIn: 'root'})
export class PmatrixService {
  private pmatrixs: Paymatrix [] = [];
  private pmatrixsUpdated = new Subject<{pmatrixs: Paymatrix[], pmatrixCount: number}>();
  get: any;
  pmatrixId: any;


  constructor(private http: HttpClient, private router: Router) {}

  getPmatrixs() {
    
    this.http
      .get<{ message: string; pmatrixs: any, maxPmatrixs: number }>(
        BACKEND_URL + "/pmatrixs/"  )
      .pipe(
        map(pmatrixData => {
        return {
        
          pmatrixs: pmatrixData.pmatrixs.map((pmatrix: { Cellno: any; Levelno: any; Payband: any; Gradepay: any; Basicpay: any; _id: any; creator: any; }) => {
            
            const cell = [pmatrix.Cellno[0]];
            //const newcell = cell.find((pmatrix: { Cellno: any[]; }) => pmatrix.Cellno.indexOf(0));
            const uniquecell = [...new Set(pmatrix.Cellno)];
           // console.log(newcell);
            //console.log(uniquecell);
           
          return {
          
           //Cellno: Array.from(new Set(pmatrix.Cellno)),
            //Cellno: await Collect(pmatrix.Cellno).unique().all(),
            Cellno: pmatrix.Cellno,
            Levelno: pmatrix.Levelno,
           // Payband: pmatrix.Payband,
            //Gradepay: pmatrix.Gradepay,
            Basicpay: pmatrix.Basicpay,
            id: pmatrix._id,
            //creator: pmatrix.creator
        };
      }),
      maxPmatrixs: pmatrixData.maxPmatrixs
       };
      })
    )
    .subscribe(transformedPmatrixData => {
       
        this.pmatrixs = transformedPmatrixData.pmatrixs;
        this.pmatrixsUpdated.next({
          pmatrixs: [...this.pmatrixs],
          pmatrixCount: transformedPmatrixData.maxPmatrixs
        });
      });
  }

  getPmatrixUpdateListener() {
    return this.pmatrixsUpdated.asObservable();
  }

  getPmatrix(id: string) {
     this.http.get<{ _id: string; Cellno: string; Levelno: string; Payband: number; Gradepay: number; Basicpay: number; }>(BACKEND_URL + "/pmatrixs/" + id)
  }
 /*  getBasicPay(Cellno: string, Levelno: string) {
    debugger;
    //return this.http.get<{  Basicpay: number; }>(BACKEND_URL + "/pmatrixs/" + Cellno +Levelno);
    this.http.get( BACKEND_URL + "/pmatrixs?cellno=" + Cellno +"&paylevel=" + Levelno ).then((result) => {
      
    }).catch((err) => {
      
    });
   
  } */
  addPmatrix( id: string, Cellno: number, Levelno: string, Payband: number, Gradepay: number, Basicpay: number ) {
    const pmatrix: Paymatrix = { id: id, Cellno: Cellno, Levelno: Levelno, Payband: Payband, Gradepay: Gradepay, Basicpay: Basicpay  };
    this.http.post<{message: string}>(BACKEND_URL + "/pmatrixs/", pmatrix)
      .subscribe(responseData => {
        this.router.navigate(["/paymatrix"]);

      });

}

updatePmatrix(id: string, Cellno: number, Levelno: string, Payband: number, Gradepay: number, Basicpay: number) {
  const pmatrix: Paymatrix = { id: id, Cellno: Cellno, Levelno: Levelno, Payband: Payband, Gradepay: Gradepay, Basicpay: Basicpay };
  this.http.put(BACKEND_URL + "/pmatrixs/" + id, pmatrix)
  .subscribe(response => {
    this.router.navigate(["/paymatrix"]);
  });

}

deletePmatrix(pmatrixId: string) {
  return this.http.delete(BACKEND_URL + "/pmatrixs/" + pmatrixId);

}

}


/* HRA Services*/

@Injectable({providedIn: 'root'})
export class HrasService {
  private hras: Hra[] = [];
  private hrasUpdated = new Subject<{hras: Hra[], hraCount: number}>();
  get: any;
  hraId: any;

  constructor(private http: HttpClient, private router: Router) {}

   
  getHras(hrasPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${hrasPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; hras: any, maxHras: number }>(
        BACKEND_URL+ "/hras/" + queryParams
      )
      .pipe(
        map(hraData => {
        return {
          hras: hraData.hras.map((hra: { title: any;  _id: any; }) => {
          return {
            title: hra.title,
            id: hra._id
        };
      }),
      maxHras: hraData.maxHras
       };
      })
    )
    .subscribe(transformedHraData => {
        console.log(transformedHraData);
        this.hras = transformedHraData.hras;
        this.hrasUpdated.next({
          hras: [...this.hras],
          hraCount: transformedHraData.maxHras
        });
      });
  }
  getHraUpdateListener() {
    return this.hrasUpdated.asObservable();
  }

  getHra(id: string) {
    return this.http.get<{ _id: string; title: number; }>(BACKEND_URL + "/hras/"+ id);
  }


addHra( id: string, title: number) {
  const hra: Hra = { id: id, title: title};
  this.http.post<{message: string}>(BACKEND_URL + "/hras/", hra)
    .subscribe(responseData => {
      this.router.navigate(["/hra"]);

    });
  }


updateHra(id: string, title: number) {
  const hra: Hra = { id: id, title: title};
  this.http.put(BACKEND_URL + "/hras/" + id, hra)
  .subscribe(response => {
    this.router.navigate(["/hra"]);
  });

}
deleteHra(hraId: string) {
  return this.http.delete(BACKEND_URL + "/hras/" + hraId);

}

}


