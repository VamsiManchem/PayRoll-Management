import { Component,  OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeptsService, DesigsService, EmpsService, GroupsService, HrasService, PmatrixService,  } from '../masters.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeptModel, Designation, Employee, Group, Hra, Paymatrix } from '../master.model';
import { AuthService } from 'src/app/auth/auth.service';


import { Basictype, Da, Emptype } from 'src/app/utilities/utilities.model';
import { BasictypesService, DasService, EmptypesService } from 'src/app/utilities/utilities.service';



@Component({
  selector: 'app-EmployeeTable',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})

export class EmployeeCreateComponent implements OnInit, OnDestroy {

 emp: Employee | undefined;
 private mode = 'createemp';
 private empId: any;
 maxDate = new Date();
 LevelNoList: any[] = [];
 CellNoList: number[] = [];
 //npsgovsub= Number;

/* Departments Dropdown List */
  depts: DeptModel[]  = [];
  isLoading = false;
  totalDepts = 0;
  deptsPerPage = this.totalDepts; //default value need to be change
  currentPage = 1;
  PageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
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
 
  /* Designation Dropdown List  */
  desigs: Designation[]  = [];
  totalDesigs = 0;
  desigsPerPage = this.totalDesigs; //default value need to be change
  desigsSub: Subscription = new Subscription;

  /* Groups Dropdown List  */
  groups: Group[]  = [];
  totalGroups = 0;
  groupsPerPage = this.totalGroups; //default value need to be change
  groupsSub: Subscription = new Subscription;
  
  /* Paymatrix Dropdown List  */
  pmatrixs: Paymatrix[]  = [];
  totalPmatrixs = 0;
  pmatrixsSub: Subscription = new Subscription;
  
  
  /* HRA Dropdown List */
  hras: Hra[]  = [];
  totalHras = 0;
  hrasPerPage = this.totalHras; //default value need to be change
  hrasSub: Subscription = new Subscription;

    /* DA Dropdown List */
    das: Da[]  = [];
    totalDas = 0;
    dasPerPage = this.totalDas; //default value need to be change
    dasSub: Subscription = new Subscription;
  
 
  
    constructor(public empsService: EmpsService, public route: ActivatedRoute, public deptsService: DeptsService, 
      public basictypesService: BasictypesService, public emptypesService: EmptypesService, public desigsService: DesigsService, 
      public groupsService: GroupsService, public pmatrixsService: PmatrixService, public hrasService: HrasService, public dasService: DasService, private authService: AuthService) {}

     ngOnInit() {

      /* this.LevelNoList = Array(18).fill(0).map((x,i)=>i+1);
      console.log(this.LevelNoList);
      var alpha = ["13A"]; 
      this.LevelNoList = alpha.concat(this.LevelNoList);  */
      this.LevelNoList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13A", "14", "15", "16", "17", "18"]; 
      this.CellNoList = Array(40).fill(0).map((x,i)=>i+1);

      /* Employee Services */
      
      this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe(authStatus => {
      this.isLoading = false;
  });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if(paramMap.has('empId')) {
      this.mode = 'editemp';
      this.empId = paramMap.get('empId');
      this.isLoading = true;
      this.empsService.getEmp(this.empId).subscribe(empData => {
      this.isLoading = false;
      debugger;
      this.emp = {id: empData._id, empno: empData.empno, empname: empData.empname,  basictype: empData.basictype, emptype: empData.emptype, department: empData.department, 
        designation: empData.designation, group: empData.group, gender: empData.gender, dob: empData.dob, doj: empData.doj, doni: empData.doni, doli: empData.doli, dor: empData.dor,
        pan: empData.pan, gpf: empData.gpf, nps: empData.nps, aadharno: empData.aadharno, 
        bankname: empData.bankname,  bankaccountno: empData. bankaccountno, ifsccode: empData.ifsccode, 
        paylevel: empData.paylevel, cellno: empData.cellno, basicpay: empData.basicpay, govtqurters: empData.govtqurters, 
        medicalstatus: empData.medicalstatus, exservice: empData.exservice, ptax: empData.ptax, cgegis: empData.cgegis, da: empData.da, daamt: empData.daamt, hra: empData.hra, hraamt:empData.hraamt,
        ta: empData.ta, daonta: empData.daonta, npssubscription: empData.npssubscription, npsgovtsub: empData.npsgovtsub,remarks: empData.remarks, status: empData.status, effectivedate: empData.effectivedate,
        HBAloan:empData.HBAloan, HBAtype:empData.HBAtype, HBAloanamt:empData.HBAloanamt, HBAinstno:empData.HBAinstno, HBAinstamt:empData.HBAinstamt, /* HBArec:empData.HBArec, */ HBAbal:empData.HBAbal, HBAlastinst:empData.HBAlastinst, HBAlastdate:empData.HBAlastdate, HBAremarks:empData.HBAremarks, HBAstartdate:empData.HBAstartdate, HBAstatus:empData.HBAstatus,
        MCloan:empData.MCloan, MCtype:empData.MCtype, MCloanamt:empData.MCloanamt, MCinstno:empData.MCinstno, MCinstamt:empData.MCinstamt, /* MCrec:empData.MCrec, */ MCbal:empData.MCbal, MClastinst:empData.MClastinst, MClastdate:empData.MClastdate, MCremarks:empData.MCremarks, MCstartdate:empData.MCstartdate, MCstatus:empData.MCstatus,
        PCloan:empData.PCloan, PCtype:empData.PCtype, PCloanamt:empData.PCloanamt, PCinstno:empData.PCinstno, PCinstamt:empData.PCinstamt, /* PCrec:empData.PCrec, */ PCbal:empData.PCbal, PClastinst:empData.PClastinst, PClastdate:empData.PClastdate, PCremarks:empData.PCremarks, PCstartdate:empData.PCstartdate, PCstatus:empData.PCstatus,
        CARloan:empData.CARloan, CARtype:empData.CARtype,  CARloanamt:empData.CARloanamt, CARinstno:empData.CARinstno, CARinstamt:empData.CARinstamt, /* CARrec:empData.CARrec, */ CARbal:empData.CARbal, CARlastinst:empData.CARlastinst, CARlastdate:empData.CARlastdate, CARremarks:empData.CARremarks, CARstartdate:empData.CARstartdate, CARstatus:empData.CARstatus,
        GPFloan:empData.GPFloan, GPFtype:empData.GPFtype, GPFloanamt:empData.GPFloanamt, GPFinstno:empData.GPFinstno, GPFinstamt:empData.GPFinstamt, /* GPFrec:empData.GPFrec, */ GPFbal:empData.GPFbal, GPFlastinst:empData.GPFlastinst, GPFlastdate:empData.GPFlastdate, GPFremarks:empData.GPFremarks, GPFstartdate:empData.GPFstartdate, GPFstatus:empData.GPFstatus,
        OTHERloan:empData.OTHERloan, OTHERtype:empData.OTHERtype, OTHERloanamt:empData.OTHERloanamt, OTHERinstno:empData.OTHERinstno, OTHERinstamt:empData.OTHERinstamt, /* OTHERrec:empData.OTHERrec, */ OTHERbal:empData.OTHERbal, OTHERlastinst:empData.OTHERlastinst, OTHERlastdate:empData.OTHERlastdate, OTHERremarks:empData.OTHERremarks, OTHERstartdate:empData.OTHERstartdate, OTHERstatus:empData.OTHERstatus,
        gpfsub: empData.gpfsub, gpfrec: empData.gpfrec, npssub: empData.npssub, npsrec: empData.npsrec, it: empData.it, ittaxamt: empData.ittaxamt,cess: empData.cess, misc1: empData.misc1, homerent: empData.homerent, water: empData.water, elec: empData.elec, cghs: empData.cghs,noncghs: empData.noncghs, misc1Alw: empData.misc1Alw,
        dlomi: empData.dlomi, welfare: empData.welfare, DRDLEcss: empData.DRDLEcss, cqa: empData.cqa, OfrMisc1: empData.OfrMisc1, OffRecvdate: empData.OffRecvdate,
        grosspay: empData.grosspay, tdeduction: empData.tdeduction, netpay: empData.netpay, toffcrec: empData.toffcrec, tobnkamt: empData.tobnkamt}
      });
    }
    else {
      this.mode= 'createemp';
      this.empId = null;
    }
  });

 

      /* Departments Dropdown List */
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

    
     /* Designation Dropdown List  */
      this.isLoading = true;
      this.desigsService.getDesigs(this.desigsPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.desigsSub = this.desigsService.getDesigUpdateListener()
       .subscribe((desigData: {desigs: Designation[], desigCount: number}) => {
        this.isLoading = false;
        this.totalDesigs = desigData.desigCount;
        this.desigs = desigData.desigs;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

    /* Groups Dropdown List  */

      this.isLoading = true;
      this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.groupsSub = this.groupsService.getGroupUpdateListener()
       .subscribe((groupData: {groups: Group[], groupCount: number}) => {
        this.isLoading = false;
        this.totalGroups = groupData.groupCount;
        this.groups = groupData.groups;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

    /* Paymatrix Dropdown List  */
    //LevelNo : Array;
      //this.LevelNo : [] = ['1','2']  ;

      this.isLoading = true;
      this.pmatrixsService.getPmatrixs();
      //this.userId = this.authService.getUserId();
      this.pmatrixsSub = this.pmatrixsService.getPmatrixUpdateListener()
       .subscribe((pmatrixData: {pmatrixs: Paymatrix[], pmatrixCount: number}) => {
        this.isLoading = false;
        this.totalPmatrixs = pmatrixData.pmatrixCount;
        this.pmatrixs = pmatrixData.pmatrixs;
        
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

      /* HRA Dropdown List */
      this.isLoading = true;
      this.hrasService.getHras(this.hrasPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.hrasSub = this.hrasService.getHraUpdateListener()
       .subscribe((hraData: {hras: Hra[], hraCount: number}) => {
        this.isLoading = false;
        this.totalHras = hraData.hraCount;
        this.hras = hraData.hras;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });

      /* DA Dropdown List */
      this.isLoading = true;
      this.dasService.getDas(this.dasPerPage, this.currentPage);
      //this.userId = this.authService.getUserId();
      this.dasSub = this.dasService.getDaUpdateListener()
       .subscribe((daData: {das: Da[], daCount: number}) => {
        this.isLoading = false;
        this.totalDas = daData.daCount;
        this.das = daData.das;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        //this.userId = this.authService.getUserId();
      });


   }


   onSaveEmp (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'createemp') {

     /* Calling Function BasicPay with CellNo & PaylevelNo */
    form.value.basicpay = this.getBasicPay(form.value.cellno, form.value.paylevel);
    console.log(form.value.basicpay);

     /* Calling Function DA Amount Calculation */
     form.value.daamt = this.getDaamt(form.value.basicpay, form.value.da);
     console.log(form.value.daamt);

     /* Calling Function HRA Calculation */
     form.value.hraamt = this.getHraamt(form.value.basicpay, form.value.govtqurters, form.value.hra);
     console.log(form.value.hraamt);
    

     /* Calling Function TA Calculation */
    
     form.value.ta = this.getTa(form.value.basicpay, form.value.paylevel, form.value.medicalstatus);
     console.log(form.value.ta);

     /* Calling Function DA on TA Calculation */
     form.value.daonta=this.getDaonta(form.value.ta);
     console.log(form.value.daonta);
   
    /* Calling Function NPS Subscription Calculation */
    if(form.value.emptype == "NPS Officer" || form.value.emptype == "NPS Staff") {
      form.value.npssubscription = + this.getNpssubscription(form.value.basicpay, form.value.da);
      var npsgovtsub= + this.getNpsgovtsub(form.value.basicpay, form.value.da);
      console.log(form.value.npssubscription);
      console.log(npsgovtsub);
      npsgovtsub

    }
    else{
      form.value.npssubscription = 0;
      var npsgovtsub= 0;
      console.log(form.value.npssubscription);
      console.log(npsgovtsub);
    }

    /* Calling functin of GPF Numbr & NPS Number*/
    if(form.value.emptype == "GPF Officer" || form.value.emptype == "GPF Staff") {
      form.value.nps = 0;
      form.value.npssub = 0;
      form.value.npsrec = 0;
    }
    else{
      form.value.gpf = 0;
      form.value.gpfsub = 0;
      form.value.gpfrec = 0;
    }

/* Calling functin of HBA Loan type*/
if(form.value.HBAloan == null) {
  form.value.HBAloan = 0;
  form.value.HBAloanamt = 0;
  form.value.HBAtype = 0;
  form.value.HBAinstno = 0;
  form.value.HBAinstamt = 0;
  //form.value.HBArec = 0;
  form.value.HBAbal = 0;
  form.value.HBAlastinst = 0;
  form.value.HBAlastdate = 0;
  form.value.HBAstartdate = 0;
  form.value.HBAstatus = 0;
  form.value.HBAremarks = 0;

}
else{
  form.value.HBAinstamt = form.value.HBAloanamt / form.value.HBAinstno;
 // return form.value.HBAinstamt;
}

/* Calling functin of Motor Cycle Loan type*/

if(form.value.MCloan == null) {
  form.value.MCloan = 0;
  form.value.MCloanamt = 0;
  form.value.MCtype = 0;
  form.value.MCinstno = 0;
  form.value.MCinstamt = 0;
  //form.value.MCrec = 0;
  form.value.MCbal = 0;
  form.value.MClastinst = 0;
  form.value.MClastdate = 0;
  form.value.MCstartdate = 0;
  form.value.MCstatus = 0;
  form.value.MCremarks = 0;
  
}
else{
  form.value.MCinstamt = form.value.MCloanamt / form.value.MCinstno;
  //return form.value.MCinstamt;
}

/* Calling functin of PC Loan type*/

if(form.value.PCloan == null) {
  form.value.PCloan = 0;
  form.value.PCloanamt = 0;
  form.value.PCtype = 0; 
  form.value.PCinstno = 0;
  form.value.PCinstamt = 0;
  //form.value.PCrec = 0;
  form.value.PCbal = 0;
  form.value.PClastinst = 0;
  form.value.PClastdate = 0;
  form.value.PCstartdate = 0;
  form.value.PCstatus = 0;
  form.value.PCremarks = 0;
  
}
else{
  form.value.PCinstamt = form.value.PCloanamt / form.value.PCinstno;
 // return form.value.PCinstamt;
}

/* Calling functin of CAR Loan type*/

if(form.value.CARloan == null) {
  form.value.CARloan = 0;
  form.value.CARloanamt = 0;
  form.value.CARtype = 0;
  form.value.CARinstno = 0;
  form.value.CARinstamt = 0;
  //form.value.CARrec = 0;
  form.value.CARbal = 0;
  form.value.CARlastinst = 0;
  form.value.CARlastdate = 0;
  form.value.CARstartdate = 0;
  form.value.CARstatus = 0;
  form.value.CARremarks = 0;
}
else{
  form.value.CARinstamt = form.value.CARloanamt / form.value.CARinstno;
  //return form.value.CARinstamt;
}


/* Calling functin of GPF Loan type*/

if(form.value.GPFloan == null) {
  form.value.GPFloan = 0;
  form.value.GPFloanamt = 0;
  form.value.GPFtype = 0;
  form.value.GPFinstno = 0;
  form.value.GPFinstamt = 0;
 // form.value.GPFrec = 0;
  form.value.GPFbal = 0;
  form.value.GPFlastinst = 0;
  form.value.GPFlastdate = 0;
  form.value.GPFstartdate = 0;
  form.value.GPFstatus = 0;
  form.value.GPFremarks = 0;
  
}
else{
  form.value.GPFinstamt = form.value.GPFloanamt / form.value.GPFinstno;
  //return form.value.GPFinstamt;
}


/* Calling functin of OTHER Loan type*/

if(form.value.OTHERloan == null) {
  form.value.OTHERloan = 0;
  form.value.OTHERloanamt = 0;
  form.value.OTHERtype = 0;
  form.value.OTHERinstno = 0;
  form.value.OTHERinstamt = 0;
 // form.value.OTHERrec = 0;
  form.value.OTHERbal = 0;
  form.value.OTHERlastinst = 0;
  form.value.OTHERlastdate = 0;
  form.value.OTHERstartdate = 0;
  form.value.OTHERstatus = 0;
  form.value.OTHERremarks = 0;
  
}
else{
  form.value.OTHERinstamt = form.value.OTHERloanamt / form.value.OTHERinstno;
  //return form.value.OTHERinstamt;
}

/* Calling CGEGIS Calculation */
form.value.cgegis = this.getCgegis(form.value.group);
    console.log(form.value.cgegis);

/* Ptax value calling  */
form.value.ptax = "200";

/* Calling CGHS Calculation */
if (form.value.noncghs== 'no'){
  form.value.cghs =0;
}
else {
(form.value.noncghs== 'yes')
form.value.cghs = this.getCghs(form.value.paylevel);
    console.log(form.value.cghs);
  }
/* Calling Function 4% CESS Calculation */
form.value.cess = this.getCess(form.value.it);
console.log(form.value.cess);
/* Calling Function it tax amount Calculation */
const ittaxamt = +this.getIttax(form.value.cess,form.value.it)
console.log(ittaxamt);
/* Calling Function Gross Pay Calculation */


form.value.grosspay = + this.getGrosspay(form.value.basicpay, form.value.da, form.value.hraamt, form.value.ta, form.value.daonta, form.value.misc1Alw);
    console.log(form.value.grosspay);

/* Calling Function Total Deduction Calculation */
form.value.tdeduction = + this.getTotaldeduction(form.value.gpfsub, form.value.gpfrec, form.value.npssub, form.value.npsrec, form.value.cgegis, form.value.cghs,
                                               form.value.homerent, form.value.water, form.value.elec, form.value.it, form.value.cess, form.value.ptax,
                                               form.value.HBAinstamt, form.value.MCinstamt, form.value.PCinstamt, form.value.CARinstamt, form.value.GPFinstamt,
                                               form.value.OTHERinstamt, form.value.misc1);
console.log(form.value.tdeduction);

  /* Calling Function Net Pay Calculation */
  form.value.netpay = + this.getNetpay(form.value.grosspay, form.value.tdeduction);
  console.log(form.value.netpay);

  /* Calling Function Total Office Recoveries Calculation */
  form.value.toffcrec = + this.getTotaloffcrec(form.value.dlomi, form.value.welfare, form.value.DRDLEcss, form.value.cqa, form.value.OfrMisc1);
  console.log(form.value.toffcrec);

  /* Calling Function Total Bank Amount Calculation */
  form.value.tobnkamt = + this.getTobankamt(form.value.netpay, form.value.toffcrec);
  console.log(form.value.tobnkamt);

    this.empsService.addEmp(form.value.empId, form.value.empno, form.value.empname, form.value.basictype, form.value.emptype, form.value.department, form.value.designation, 
      form.value.group, form.value.gender, form.value.dob, form.value.doj, form.value.doni, form.value.doli, form.value.dor, form.value.pan, form.value.gpf, form.value.nps, form.value.aadharno, 
      form.value.bankname, form.value.bankaccountno, form.value.ifsccode, 
      form.value.paylevel, form.value.cellno, form.value.basicpay, 
      form.value.govtqurters, form.value.medicalstatus, form.value.exservice, form.value.ptax, form.value.cgegis, form.value.da, form.value.daamt, form.value.hra, form.value.hraamt, form.value.ta, 
      form.value.daonta, form.value.npssubscription, npsgovtsub ,form.value.remarks, form.value.status, form.value.effectivedate, 
      form.value.HBAloan, form.value.HBAtype, form.value.HBAloanamt, form.value.HBAinstno, form.value.HBAinstamt, form.value.HBAbal, form.value.HBAlastinst, form.value.HBAlastdate, form.value.HBAremarks, form.value.HBAstartdate, form.value.HBAstatus, 
      form.value.MCloan, form.value.MCtype, form.value.MCloanamt,form.value.MCinstno, form.value.MCinstamt, form.value.MCbal, form.value.MClastinst, form.value.MClastdate, form.value.MCremarks, form.value.MCstartdate, form.value.MCstatus,
      form.value.PCloan, form.value.PCtype, form.value.PCloanamt,form.value.PCinstno, form.value.PCinstamt, form.value.PCbal, form.value.PClastinst, form.value.PClastdate, form.value.PCremarks, form.value.PCstartdate, form.value.PCstatus,
      form.value.CARloan, form.value.CARtype, form.value.CARloanamt,form.value.CARinstno, form.value.CARinstamt, form.value.CARbal, form.value.CARlastinst, form.value.CARlastdate, form.value.CARremarks, form.value.CARstartdate, form.value.CARstatus,
      form.value.GPFloan, form.value.GPFtype, form.value.GPFloanamt, form.value.GPFinstno, form.value.GPFinstamt, form.value.GPFbal, form.value.GPFlastinst, form.value.GPFlastdate, form.value.GPFremarks, form.value.GPFstartdate, form.value.GPFstatus,
      form.value.OTHERloan, form.value.OTHERtype, form.value.OTHERloanamt, form.value.OTHERinstno, form.value.OTHERinstamt, form.value.OTHERbal, form.value.OTHERlastinst, form.value.OTHERlastdate, form.value.OTHERremarks, form.value.OTHERstartdate, form.value.OTHERstatus,
      form.value.gpfsub, form.value.gpfrec, form.value.npssub, form.value.npsrec, form.value.it,ittaxamt, form.value.cess, form.value.misc1, form.value.homerent, form.value.water, form.value.elec, form.value.cghs, form.value.noncghs,form.value.misc1Alw, 
      form.value.dlomi, form.value.welfare, form.value.DRDLEcss, form.value.cqa, form.value.OfrMisc1, form.value.OffRecvdate,
      form.value.grosspay, form.value.tdeduction, form.value.netpay, form.value.toffcrec, form.value.tobnkamt);
      }
    else {

     
       /* Calling Function BasicPay with CellNo & PaylevelNo */
  
    form.value.basicpay = this.getBasicPay(form.value.cellno, form.value.paylevel);
    console.log(form.value.basicpay);

     /* Calling Function DA Amount Calculation */
     form.value.daamt = this.getDaamt(form.value.basicpay, form.value.da);
     console.log(form.value.daamt);

     /* Calling Function HRA Calculation */
     form.value.hraamt = this.getHraamt(form.value.basicpay, form.value.govtqurters, form.value.hra);
     console.log(form.value.hraamt);
    

     /* Calling Function TA Calculation */
    
     form.value.ta = this.getTa(form.value.basicpay, form.value.paylevel, form.value.medicalstatus);
     console.log(form.value.ta);

     /* Calling Function DA on TA Calculation */
     form.value.daonta=this.getDaonta(form.value.ta);
     console.log(form.value.daonta);
      
    /* Calling Function NPS Subscription & NPS govt Subscription Calculation */
    if(form.value.emptype == "NPS Officer" || form.value.emptype == "NPS Staff") {
      form.value.npssubscription = + this.getNpssubscription(form.value.basicpay, form.value.da);
      var npsgovtsub = + this.getNpsgovtsub(form.value.basicpay, form.value.da);
      console.log(form.value.npssubscription);
      console.log(npsgovtsub);
    }
    else{
      form.value.npssubscription = 0;
      var npsgovtsub= 0;
      console.log(form.value.npssubscription);
      console.log(npsgovtsub);
    }
    


    /* Calling functin of GPF Numbr & NPS Number*/
    if(form.value.emptype == "GPF Officer" || form.value.emptype == "GPF Staff") {
      form.value.nps = 0;
      form.value.npssub = 0;
      form.value.npsrec = 0;
    }
    else{
      form.value.gpf = 0;
      form.value.gpfsub = 0;
      form.value.gpfrec = 0;
    }

    /* Calling CGEGIS Calculation */
    form.value.cgegis = this.getCgegis(form.value.group);
    console.log(form.value.cgegis);

    /* Calling CGHS Calculation */
    if (form.value.noncghs== 'no'){
      form.value.cghs =0;
    }
    else {
    (form.value.noncghs== 'yes')
    form.value.cghs = this.getCghs(form.value.paylevel);
        console.log(form.value.cghs);
      }

    /* Calling Function 4% CESS Calculation */
    form.value.cess = this.getCess(form.value.it);
    console.log(form.value.cess);
    const ittaxamt = +this.getIttax(form.value.cess,form.value.it)
    console.log(ittaxamt);
    /* Calling Function Gross Pay Calculation */
  
    form.value.grosspay = + this.getGrosspay(form.value.basicpay, form.value.da, form.value.hraamt, form.value.ta, form.value.daonta, form.value.misc1Alw);
    console.log(form.value.grosspay);

    /* Calling Function Total Deduction Calculation */
    form.value.tdeduction = + this.getTotaldeduction(form.value.gpfsub, form.value.gpfrec, form.value.npssub, form.value.npsrec, form.value.cgegis, form.value.cghs,
                                                   form.value.homerent, form.value.water, form.value.elec, form.value.it, form.value.cess, form.value.ptax, form.value.HBAinstamt, 
                                                   form.value.MCinstamt, form.value.PCinstamt, form.value.CARinstamt, form.value.GPFinstamt, form.value.OTHERinstamt, 
                                                   form.value.misc1);
    console.log(form.value.tdeduction);

    /* Calling Function Net Pay Calculation */
    form.value.netpay = + this.getNetpay(form.value.grosspay, form.value.tdeduction);
    console.log(form.value.netpay);

    /* Calling Function Total Office Recoveries Calculation */
    form.value.toffcrec = + this.getTotaloffcrec(form.value.dlomi, form.value.welfare, form.value.DRDLEcss, form.value.cqa, form.value.OfrMisc1);
    console.log(form.value.toffcrec);

    /* Calling Function Total Bank Amount Calculation */
    form.value.tobnkamt = + this.getTobankamt(form.value.netpay, form.value.toffcrec);
    console.log(form.value.tobnkamt);

     this.empsService.updateEmp(this.empId, form.value.empno, form.value.empname, form.value.basictype, form.value.emptype, form.value.department, form.value.designation, form.value.group, 
      form.value.gender, form.value.dob, form.value.doj, form.value.doni, form.value.doli, form.value.dor, form.value.pan, form.value.gpf, form.value.nps, form.value.aadharno, 
      form.value.bankname, form.value.bankaccountno, form.value.ifsccode, 
      form.value.paylevel, form.value.cellno, form.value.basicpay, form.value.govtqurters, form.value.medicalstatus, form.value.exservice, form.value.ptax, form.value.cgegis, 
      form.value.da, form.value.daamt, form.value.hra, form.value.hraamt, form.value.ta, form.value.daonta, form.value.npssubscription,npsgovtsub,form.value.remarks, form.value.status, form.value.effectivedate, 
      form.value.HBAloan, form.value.HBAtype, form.value.HBAloanamt, form.value.HBAinstno, form.value.HBAinstamt, form.value.HBAbal, form.value.HBAlastinst, form.value.HBAlastdate, form.value.HBAremarks, form.value.HBAstartdate, form.value.HBAstatus, 
      form.value.MCloan, form.value.MCtype, form.value.MCloanamt, form.value.MCinstno, form.value.MCinstamt, form.value.MCbal, form.value.MClastinst, form.value.MClastdate, form.value.MCremarks, form.value.MCstartdate, form.value.MCstatus,
      form.value.PCloan, form.value.PCtype, form.value.PCloanamt, form.value.PCinstno, form.value.PCinstamt, form.value.PCbal, form.value.PClastinst, form.value.PClastdate, form.value.PCremarks, form.value.PCstartdate, form.value.PCstatus,
      form.value.CARloan, form.value.CARtype, form.value.CARloanamt, form.value.CARinstno, form.value.CARinstamt, form.value.CARbal, form.value.CARlastinst, form.value.CARlastdate, form.value.CARremarks, form.value.CARstartdate, form.value.CARstatus,
      form.value.GPFloan, form.value.GPFtype, form.value.GPFloanamt, form.value.GPFinstno, form.value.GPFinstamt, form.value.GPFbal, form.value.GPFlastinst, form.value.GPFlastdate, form.value.GPFremarks, form.value.GPFstartdate, form.value.GPFstatus,
      form.value.OTHERloan, form.value.OTHERtype, form.value.OTHERloanamt, form.value.OTHERinstno, form.value.OTHERinstamt, form.value.OTHERbal, form.value.OTHERlastinst, form.value.OTHERlastdate, form.value.OTHERremarks, form.value.OTHERstartdate, form.value.OTHERstatus,
      form.value.gpfsub, form.value.gpfrec, form.value.npssub, form.value.npsrec, form.value.it,ittaxamt, form.value.cess, form.value.misc1, form.value.homerent, form.value.water, form.value.elec, form.value.cghs,form.value.noncghs, form.value.misc1Alw, 
      form.value.dlomi, form.value.welfare, form.value.DRDLEcss, form.value.cqa, form.value.OfrMisc1,form.value.OffRecvdate,
      form.value.grosspay, form.value.tdeduction, form.value.netpay, form.value.toffcrec, form.value.tobnkamt);
    }
    form.resetForm();
    //this.isLoading = false;
  }
  getIttax(cess: number, it: number) {
    const ittaxamt= Number(cess)+Number(it) ;
    return ittaxamt;
    }
  
  getNpsgovtsub(basicpay: number, da: number) {
    const npsgovsub = Number(((14 / 100) * basicpay).toFixed(2)) + da;
   return npsgovsub;
   }
  


/* BasicPay Calculation with CellNo & PaylevelNo */
getBasicPay(cellno:number, paylevel:string){

 const matrix = this.pmatrixs;
 const basic = matrix.filter(mat => mat.Cellno == cellno && mat.Levelno == paylevel);
const bpay = Number(basic.find(pay => pay.Basicpay)?.Basicpay);
console.log(bpay);
return bpay;
  }

/* DA Amount Calculation */
getDaamt(basicpay:number, da: number){ 
 
  const getda= Number(((da / 100) * basicpay).toFixed(2));
  return getda;
  }

/* HRA Calculation */
getHraamt(basicpay:number, govtqurters:string, hra: number ){ 
  if(govtqurters == 'no') {
    const gethra= Number(((hra / 100) * basicpay).toFixed(2));
    return gethra;
    }
    else {
     const hra= 0;
     return hra;
    }
}


 /* TA Calculation */
 ta=0;
 getTa(basicpay:number, paylevel:string, medicalstatus:string) {
  if(medicalstatus == 'yes'){
    if (paylevel == '1' && basicpay < 24200) {
     this.ta = 1350*2;
     return this.ta;
     //this.ta = 1350;
      //return this.ta*2;
    }
    else if(paylevel == '2' && basicpay <= 24200) {
      this.ta = 1350*2;
      return this.ta;
     
    }
    else if(paylevel == '1' || paylevel == '2' && basicpay > 24200 ) {
      this.ta = 3600*2;
      //return ta;
    }
    else if(paylevel <= '8') {
      this.ta = 3600*2;
      //return ta;
    }
    else if(paylevel >= '9') {
      this.ta = 7200*2;
      //return ta;
    }
   return  this.ta;
  }
  else{
    if (paylevel == '1' && basicpay < 24200) {
      this.ta = 1350;
      //return ta;
    }
    else if(paylevel == '2' && basicpay <= 24200) {
      this.ta = 1350;
      //return ta;
    }
    else if(paylevel == '1' || paylevel == '2' && basicpay > 24200 ) {
      this.ta = 3600;
      //return ta;
    }
    else if(paylevel <= '8') {
      this.ta = 3600;
      //return ta;
    }
    else if(paylevel >= '9') {
      this.ta = 7200;
      //return ta;
    }
    return  this.ta;
  }
 }

 /* DA on TA Calculation */
getDaonta(ta:number){ 
 const daonta= Number(((17 / 100) * ta).toFixed(2));
  return daonta;
  }

 /* NPS Subscription Calculation */ /* not working */
 getNpssubscription(basicpay:number, da:number){ 
  const npssubscription = Number(((10 / 100) * basicpay).toFixed(2)) + da;
   return npssubscription;
   }
 
  /* CGEGIS Calculation */
cgegis = 0;
getCgegis(group: string) {
 if(group == "C") {
   this.cgegis = 30;
   //return cgegis;
 }
 else if(group == "B") {
  this.cgegis = 60;
 // return cgegis;
 }
 else if(group == "A") {
  this.cgegis = 120;
  //return cgegis;
 }
 return this.cgegis;
}

/* CGHS Calculation */
cghs = 0;
getCghs(paylevel: string) {
  if(paylevel == '1' || paylevel == '2' || paylevel == '3' || paylevel == '4' || paylevel == '5') {
    this.cghs = 250;
  }
  else if(paylevel == '6') {
    this.cghs = 450;
  }
  else if(paylevel == '7' || paylevel == '8' || paylevel == '9' || paylevel == '10' || paylevel == '11') {
    this.cghs = 650;
  }
  else if(paylevel >= '12') {
    this.cghs = 1000;
  }
  return this.cghs;
}

/* 4% CESS Calculation */
getCess(it:number){ 
  const cess= Number(((4 / 100) * it).toFixed(2));
  return cess;
  }

/* Gross Pay Calculation */ 
getGrosspay(basicpay: number, da: number, hraamt: number, ta: number, daonta: number, misc1Alw: number){ 
  debugger;
  /* const misc1Alw1= Number(misc1Alw); */
  const grosspay= Number(basicpay) + Number(da) + Number(hraamt) + Number(ta) + Number(daonta) + Number(misc1Alw);
  return grosspay;
  } 

  
/* Total Deduction Calculation */ 
getTotaldeduction(gpfsub: number, gpfrec: number, npssub: number, npsrec: number, cgegis: number, cghs: number, homerent: number, water: number, elec: number, it: number, cess: number,
                  ptax: number, HBAinstamt: number, MCinstamt: number, PCinstamt: number, CARinstamt: number, GPFinstamt: number, OTHERinstamt: number, misc1: number){ 
  const tdeduction= Number(gpfsub) + Number(gpfrec) + Number(npssub) + Number(npsrec) + Number(cgegis) + Number(cghs) + Number(homerent) + Number(water) + Number(elec) + Number(it) + Number(cess) + Number(ptax) + Number(HBAinstamt) + Number(MCinstamt) + Number(PCinstamt) + Number(CARinstamt)
                     + Number(GPFinstamt) + Number(OTHERinstamt) + Number(misc1);
  return tdeduction;
  }

  /* Net Pay Calculation */
  getNetpay(grosspay: number, tdeduction: number){ 
    const netpay= Number(grosspay) - Number(tdeduction);
    return netpay;
  }

  /* Total Office Recoveries Calculation */
  getTotaloffcrec(dlomi: number, welfare: number, DRDLEcss: number, cqa: number, OfrMisc1: number){ 
    const toffcrec= Number(dlomi) + Number(welfare) + Number(DRDLEcss) + Number(cqa) + Number(OfrMisc1);
    return toffcrec;
}


/* Total Bank Amount Calculation */
getTobankamt(netpay: number, toffcrec: number){ 
  const tobnkamt= Number(netpay) - Number(toffcrec);
  return tobnkamt;
}
 

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.pmatrixsSub.unsubscribe();
    this.deptsSub.unsubscribe();
    this.basictypesSub.unsubscribe();
    this.emptypesSub.unsubscribe();
    this.desigsSub.unsubscribe();
    this.groupsSub.unsubscribe();
  }
 }


    
    

  
  

      
  
        




