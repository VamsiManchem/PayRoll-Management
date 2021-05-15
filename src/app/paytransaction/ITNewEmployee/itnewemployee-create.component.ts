import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';



import { Itnewemp } from '../paytransaction.model';
import { Designation, Paymatrix } from 'src/app/master/master.model';
import { Emptype, Basictype } from 'src/app/utilities/utilities.model';
import { Group } from '../../master/master.model';
import { ItnewempsService } from '../paytransaction.service';
import { DesigsService, PmatrixService } from 'src/app/master/masters.service';
import { EmptypesService, BasictypesService } from 'src/app/utilities/utilities.service';
import { GroupsService } from '../../master/masters.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ITNewEmployee',
  templateUrl: './itnewemployee-create.component.html',
  styleUrls: ['./itnewemployee-create.component.css']
})

export class ITNewEmployeeCreateComponent implements OnInit, OnDestroy {

 itnewemp: Itnewemp | undefined;
 private mode = 'addnewemployee';
 private itnewempId: any;
 maxDate = new Date();
 LevelNoList: any[] = [];
 CellNoList: number[] = [];

 /* Designation Dropdown List  */
 desigs: Designation[]  = [];
 isLoading = false;
 totalDesigs = 0;
 currentPage = 1;
 PageSizeOptions = [1, 2, 5, 10];
 desigsPerPage = this.totalDesigs; //default value need to be change
 desigsSub: Subscription = new Subscription;
 userIsAuthenticated = false;
 private authStatusSub: Subscription = new Subscription;

 /* Employeetype Dropdown List  */
 emptypes: Emptype[]  = [];
 totalEmptypes = 0;
 emptypesPerPage = 5; //default value need to be change
 emptypesSub: Subscription = new Subscription;

 /* Groups Dropdown List  */
 groups: Group[]  = [];
 totalGroups = 0;
 groupsPerPage = this.totalGroups; //default value need to be change
 groupsSub: Subscription = new Subscription;

/* Basictypes Dropdown List */
basictypes: Basictype[]  = [];
totalBasictypes = 0;
basictypesPerPage = this.totalBasictypes; //default value need to be change
basictypesSub: Subscription = new Subscription;

  /* Paymatrix Dropdown List  */
  pmatrixs: Paymatrix[]  = [];
  totalPmatrixs = 0;
  pmatrixsSub: Subscription = new Subscription;


constructor(public itnewempsService: ItnewempsService, public route: ActivatedRoute, public desigsService: DesigsService,
  public emptypesService: EmptypesService, public groupsService: GroupsService, public basictypesService: BasictypesService,   
  public pmatrixsService: PmatrixService, private authService: AuthService) {}

    ngOnInit() {

      this.LevelNoList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13A", "14", "15", "16", "17", "18"]; 
      this.CellNoList = Array(40).fill(0).map((x,i)=>i+1);

      /* IT New Employee Services */
      this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe(authStatus => {
      this.isLoading = false;
  });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if(paramMap.has('itnewempId')) {
      this.mode = 'edititnewemp';
      this.itnewempId = paramMap.get('itnewempId');
      this.isLoading = true;
      this.itnewempsService.getItnewemp(this.itnewempId).subscribe(itnewempData => {
      this.isLoading = false;
    
      this.itnewemp = {id: itnewempData._id, month: itnewempData.month, year: itnewempData.year, empno: itnewempData.empno, empname: itnewempData.empname, designation: itnewempData.designation, 
        emptype: itnewempData.emptype, group: itnewempData.group, basictype: itnewempData.basictype, 
        paylevel: itnewempData.paylevel, cellno: itnewempData.cellno, gpf: itnewempData.gpf, cpsrec: itnewempData.cpsrec,
        basic: itnewempData.basic, cgegis: itnewempData.cgegis, da: itnewempData.da, cghs: itnewempData.cghs,
        hra: itnewempData.hra, itrec: itnewempData.itrec, ta: itnewempData.ta, itcess: itnewempData.itcess,
        daonta: itnewempData.daonta, ptrec: itnewempData.ptrec, effectivedate: itnewempData.effectivedate,
       }
      });
    }
    else {
      this.mode= 'addnewemployee';
      this.itnewempId = null;
    }
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

      /* Paymatrix Dropdown List  */

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
    }

    onSaveItnewemp (form: NgForm) {
      if (form.invalid) {
        return;
      }
      this.isLoading = true;
      if (this.mode === 'addnewemployee') {

        debugger;
  
      this.itnewempsService.addItnewemp(form.value.id, form.value.month, form.value.year, form.value.empno, form.value.empname, form.value.designation, form.value.emptype, 
        form.value.group, form.value.basictype, form.value.paylevel, form.value.cellno, form.value.gpf, form.value.cpsrec, form.value.basic,
        form.value.cgegis, form.value.da, form.value.cghs, form.value.hra, form.value.itrec, form.value.ta, form.value.itcess, form.value.daonta,
        form.value.ptrec, form.value.effectivedate);
        }
      else {
  
       
       this.itnewempsService.updateItnewemp(this.itnewempId, form.value.month, form.value.year, form.value.empno, form.value.empname, form.value.designation, form.value.emptype, 
        form.value.group, form.value.basictype, form.value.paylevel, form.value.cellno, form.value.gpf, form.value.cpsrec, form.value.basic,
        form.value.cgegis, form.value.da, form.value.cghs, form.value.hra, form.value.itrec, form.value.ta, form.value.itcess, form.value.daonta,
        form.value.ptrec, form.value.effectivedate,
         );
      }
      form.resetForm();
      //this.isLoading = false;
    }
  
    ngOnDestroy() {
      this.authStatusSub.unsubscribe();
      this.desigsSub.unsubscribe();
      this.emptypesSub.unsubscribe();
      this.groupsSub.unsubscribe();
      this.basictypesSub.unsubscribe();
      this.pmatrixsSub.unsubscribe();
      
    }
}
