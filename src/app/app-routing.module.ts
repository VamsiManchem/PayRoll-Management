import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentTableComponent } from './master/DepartmentTable/dept-list.component';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentCreateComponent } from './master/DepartmentTable/dept-create.component';
import { DesignationTableComponent } from './master/DesignationTable/desig-list.component';
import { DesignationCreateComponent } from './master/DesignationTable/desig-create.component';
import { EmployeeTableComponent } from './master/EmployeeTable/emp-list.component';
import { EmployeeCreateComponent } from './master/EmployeeTable/emp-create.component';
import { GroupTableComponent } from './master/GroupTable/group-list.component';
import { GroupCreateComponent } from './master/GroupTable/group-create.component';
import { LoanTableComponent } from './master/LoanTable/loan-list.component';
import { LoanCreateComponent } from './master/LoanTable/loan-create.component';
import { IncometaxTableComponent } from './master/IncometaxslabTable/incometax-list.component';

//import { LoanissueListComponent } from './paytransaction/LoanIssues/loanissue-list.component';
import { PayTransactionListComponent } from './paytransaction/PayTransactions/paytransaction-list.component';
import { AllowanceRecoveryListComponent } from './paytransaction/AllowanceRecovery/allowance-list.component';
import { PaygenerationListComponent } from './paytransaction/PayGeneration/paygen-list.component';
import { IncometaxCreateComponent } from './master/IncometaxslabTable/incometax-create.component';
import { AllowanceRecoveryCreateComponent } from './paytransaction/AllowanceRecovery/allowance-create.component';
//import { LoanissueCreateComponent } from './paytransaction/LoanIssues/loanissue-create.component';
import { PayTransactionCreateComponent } from './paytransaction/PayTransactions/paytransaction-create.component';
import { ITsupleeListComponent } from './paytransaction/ITsupleePayments/itsuplee-list.component';
import { ITsupleeCreateComponent } from './paytransaction/ITsupleePayments/itsuplee-create.component';
import { ITNewEmployeeListComponent } from './paytransaction/ITNewEmployee/itnewemployee-list.component';
import { ITNewEmployeeCreateComponent } from './paytransaction/ITNewEmployee/itnewemployee-create.component';
import { ITOldEmployeeCreateComponent } from './paytransaction/ITOldEmployee/itoldemployee-create.component';
import { ITOldEmployeeListComponent } from './paytransaction/ITOldEmployee/itoldemployee-list.component';

import { PaybillListComponent } from './reports/Paybills/paybill-list.component';
import { PayslipListComponent } from './reports/Payslips/payslip-list.component';
import { GPFListComponent } from './reports/GPF/gpf-list.component';
import { OfficeRecoveryListComponent } from './reports/OfficeRecoveries/officerecovery-list.component';
//import { ITReportListComponent } from './reports/Schedules/itreport-list.component';
import { Form16ListComponent } from './reports/Form16/form16-list.component';


import { DAupdateListComponent } from './utilities/DAupdate/DAupdate-list.component';
import { DAupdateCreateComponent } from './utilities/DAupdate/DAupdate-create.component';
import { DAarrearsListComponent } from './utilities/DAarrears/DAarrears-list.component';
import { DAarrearsCreateComponent } from './utilities/DAarrears/DAarrears-create.component';
import { HRAupdateListComponent } from './utilities/HRAupdate/HRAupdate-list.component';
import { HRAupdateCreateComponent } from './utilities/HRAupdate/HRAupdate-create.component';
import { DAonTAupdateListComponent } from './utilities/DAonTAupdate/DAonTA-list.component';
import { DAonTAupdateCreateComponent } from './utilities/DAonTAupdate/DAonTA-create.component';
import { BasicTypeupdateListComponent } from './utilities/Basictypeupdate/Basicupdate-list.component';
import { BasicTypeupdateCreateComponent } from './utilities/Basictypeupdate/Basicupdate-create.component';
import { EmployeeTypeupdateListComponent } from './utilities/Employeetypeupdate/Employeeupdate-list.component';
import { EmployeeTypeupdateCreateComponent } from './utilities/Employeetypeupdate/Employeeupdate-create.component';
import { PaymatrixTableComponent } from './master/EmployeeTable/PayMatrixTable/paymatrix.component';
import { HraTableComponent } from './master/HRATable/hra-list.component';
import { HraCreateComponent } from './master/HRATable/hra-create.component';
import { PaybillreportListComponent } from './reports/Paybills/paybillreport-list.component';
import { HRAReportListComponent } from './reports/Schedules/HRA/hrareport-list.component';
import { DAReportListComponent } from './reports/Schedules/DA/dareport-list.component';
import { TAReportListComponent } from './reports/Schedules/TA/tareport-list.component';
import { PTAXReportListComponent } from './reports/Schedules/PTAX/ptaxreport-list.component';
import { HRENTReportListComponent } from './reports/Schedules/HRENT/hrentreport-list.component';
import { CGEGISReportListComponent } from './reports/Schedules/CGEGIS/cgegisreport-list.component';
import { DLOMIReportListComponent } from './reports/Schedules/DLOMI/dlomireport-list.component';
import { ECCSReportListComponent } from './reports/Schedules/DRDL ECCS/eccsreport-list.component';
import { CQAReportListComponent } from './reports/Schedules/CQA(L)/cqareport-list.component';
import { MISCRECReportListComponent } from './reports/Schedules/MISC REC/miscreport-list.component';
import { CGHSReportListComponent } from './reports/Schedules/CGHS/cghsreport-list.component';
import { GPFNPSReportListComponent } from './reports/Schedules/GPF-NPS NO/gpfnpsreport-list.component';
import { NCGHSReportListComponent } from './reports/Schedules/NON CGHS/ncghsreport-list.component';
import { ITReportListComponent } from './reports/Schedules/IT/itreport-list.component';
import { NPSListComponent } from './reports/NPS/nps-list.component';
import { ITComponent } from './reports/Schedules/IT/it.component';




const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },

  { path: "department", component: DepartmentTableComponent, canActivate: [AuthGuard] },
  { path: "create", component: DepartmentCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:deptId", component: DepartmentCreateComponent, canActivate: [AuthGuard] },

  { path: "designation", component: DesignationTableComponent, canActivate: [AuthGuard] },
  { path: "createdesig", component: DesignationCreateComponent, canActivate: [AuthGuard] },
  { path: "editdesig/:desigId", component: DesignationCreateComponent, canActivate: [AuthGuard] },

  { path: "hra", component: HraTableComponent, canActivate: [AuthGuard] },
  { path: "createhra", component: HraCreateComponent, canActivate: [AuthGuard] },
  { path: "edithra/:hraId", component: HraCreateComponent, canActivate: [AuthGuard] },

  { path: "employee", component: EmployeeTableComponent, canActivate: [AuthGuard] },
  { path: "createemp", component: EmployeeCreateComponent, canActivate: [AuthGuard] },
  { path: "editemp/:empId", component: EmployeeCreateComponent, canActivate: [AuthGuard] },

  { path: "group", component: GroupTableComponent, canActivate: [AuthGuard] },
  { path: "creategroup", component: GroupCreateComponent, canActivate: [AuthGuard] },
  { path: "editgroup/:groupId", component: GroupCreateComponent, canActivate: [AuthGuard] },

  { path: "loan", component: LoanTableComponent, canActivate: [AuthGuard] },
  { path: "createloan", component: LoanCreateComponent, canActivate: [AuthGuard] },
  { path: "editloan/:loanId", component: LoanCreateComponent, canActivate: [AuthGuard] },

  { path: "incometax", component: IncometaxTableComponent, canActivate: [AuthGuard] },
  { path: "addincometax", component: IncometaxCreateComponent, canActivate: [AuthGuard] },

  //{ path: "loanissue", component: LoanissueListComponent, canActivate: [AuthGuard] },
 // { path: "addloanissue", component: LoanissueCreateComponent, canActivate: [AuthGuard] },
 
  { path: "allpaytransactions", component: PayTransactionListComponent, canActivate: [AuthGuard] },
  { path: "createpaytransaction", component: PayTransactionCreateComponent, canActivate: [AuthGuard] },
  { path: "editpaytransaction", component: PayTransactionCreateComponent, canActivate: [AuthGuard] },

  { path: "allowance-recovery", component: AllowanceRecoveryListComponent, canActivate: [AuthGuard] },
  { path: "addpayallowance", component: AllowanceRecoveryCreateComponent, canActivate: [AuthGuard] },

  { path: "paygeneration", component: PaygenerationListComponent, canActivate: [AuthGuard] },

  { path: "itsupleepayments", component: ITsupleeListComponent, canActivate: [AuthGuard] },
  { path: "additsuplee", component: ITsupleeCreateComponent, canActivate: [AuthGuard] },

  { path: "itnewemployee", component: ITNewEmployeeListComponent, canActivate: [AuthGuard] },
  { path: "addnewemployee", component: ITNewEmployeeCreateComponent, canActivate: [AuthGuard] },
  { path: "edititnewemp/:itnewempId", component: ITNewEmployeeCreateComponent, canActivate: [AuthGuard] },


  { path: "itoldemployee", component: ITOldEmployeeListComponent, canActivate: [AuthGuard] },
  { path: "addoldemployee", component: ITOldEmployeeCreateComponent, canActivate: [AuthGuard] },

  { path: "paybill", component: PaybillListComponent, canActivate: [AuthGuard] },
  { path: "addpaybillreport", component: PaybillreportListComponent, canActivate: [AuthGuard] },


  { path: "payslip", component: PayslipListComponent, canActivate: [AuthGuard] },
  { path: "gpf", component: GPFListComponent, canActivate: [AuthGuard] },
  { path: "nps", component: NPSListComponent, canActivate: [AuthGuard] },
  { path: "officerecoveries", component: OfficeRecoveryListComponent, canActivate: [AuthGuard] },

  { path: "hrareport", component: HRAReportListComponent, canActivate: [AuthGuard] },
  { path: "dareport", component: DAReportListComponent, canActivate: [AuthGuard] },
  { path: "tareport", component: TAReportListComponent, canActivate: [AuthGuard] },
  { path: "ptaxreport", component: PTAXReportListComponent, canActivate: [AuthGuard] },
  { path: "hrentreport", component: HRENTReportListComponent, canActivate: [AuthGuard] },
  { path: "cgegisreport", component: CGEGISReportListComponent, canActivate: [AuthGuard] },
  { path: "dlomireport", component: DLOMIReportListComponent, canActivate: [AuthGuard] },
  { path: "eccsreport", component: ECCSReportListComponent, canActivate: [AuthGuard] },
  { path: "cqareport", component: CQAReportListComponent, canActivate: [AuthGuard] },
  { path: "miscreport", component: MISCRECReportListComponent, canActivate: [AuthGuard] },
  { path: "cghsreport", component: CGHSReportListComponent, canActivate: [AuthGuard] },
  { path: "gpfnpsreport", component: GPFNPSReportListComponent, canActivate: [AuthGuard] },
  { path: "ncghsreport", component: NCGHSReportListComponent, canActivate: [AuthGuard] },
  { path: "itreport", component: ITReportListComponent, canActivate: [AuthGuard] },

  { path: "generateITPDF", component: ITComponent, canActivate: [AuthGuard] },



  { path: "form16", component: Form16ListComponent, canActivate: [AuthGuard] },


  { path: "DAupdate", component: DAupdateListComponent, canActivate: [AuthGuard] },
  { path: "addDA", component: DAupdateCreateComponent, canActivate: [AuthGuard] },
  { path: "editda/:daId", component: DAupdateCreateComponent, canActivate: [AuthGuard] },

  { path: "DAarrears", component: DAarrearsListComponent, canActivate: [AuthGuard] },
  { path: "addDAarrears", component: DAarrearsCreateComponent, canActivate: [AuthGuard] },

  { path: "HRAupdate", component: HRAupdateListComponent, canActivate: [AuthGuard] },
  { path: "addHRA", component: HRAupdateCreateComponent, canActivate: [AuthGuard] },

  { path: "DAonTAupdate", component: DAonTAupdateListComponent, canActivate: [AuthGuard] },
  { path: "addDAonTA", component: DAonTAupdateCreateComponent, canActivate: [AuthGuard] },

  { path: "basictype", component: BasicTypeupdateListComponent, canActivate: [AuthGuard] },
  { path: "createbasictype", component: BasicTypeupdateCreateComponent, canActivate: [AuthGuard] },
  { path: "editbasictype/:basictypeId", component: BasicTypeupdateCreateComponent, canActivate: [AuthGuard] },

  { path: "employeetype", component: EmployeeTypeupdateListComponent, canActivate: [AuthGuard] },
  { path: "createemptype", component: EmployeeTypeupdateCreateComponent, canActivate: [AuthGuard] },
  { path: "editemptype/:emptypeId", component: EmployeeTypeupdateCreateComponent, canActivate: [AuthGuard] },



  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}


  //{ path: "auth", loadChildren: "./auth/auth.module"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

