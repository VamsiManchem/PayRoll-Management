import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { DepartmentCreateComponent } from "../master/DepartmentTable/dept-create.component";
import { DepartmentTableComponent } from "../master/DepartmentTable/dept-list.component";
import { DesignationCreateComponent } from "../master/DesignationTable/desig-create.component";
import { DesignationTableComponent } from "../master/DesignationTable/desig-list.component";
import { EmployeeCreateComponent } from "../master/EmployeeTable/emp-create.component";
import { EmployeeTableComponent } from "../master/EmployeeTable/emp-list.component";
import { GroupCreateComponent } from "../master/GroupTable/group-create.component";
import { GroupTableComponent } from "../master/GroupTable/group-list.component";
import { IncometaxCreateComponent } from "../master/IncometaxslabTable/incometax-create.component";
import { IncometaxTableComponent } from "../master/IncometaxslabTable/incometax-list.component";
import { LoanCreateComponent } from "../master/LoanTable/loan-create.component";
import { LoanTableComponent } from "../master/LoanTable/loan-list.component";

import { AllowanceRecoveryCreateComponent } from "../paytransaction/AllowanceRecovery/allowance-create.component";
import { AllowanceRecoveryListComponent } from "../paytransaction/AllowanceRecovery/allowance-list.component";
import { PayTransactionCreateComponent } from "../paytransaction/PayTransactions/paytransaction-create.component";
import { PayTransactionListComponent } from "../paytransaction/PayTransactions/paytransaction-list.component";
import { ITNewEmployeeCreateComponent } from "../paytransaction/ITNewEmployee/itnewemployee-create.component";
import { ITNewEmployeeListComponent } from "../paytransaction/ITNewEmployee/itnewemployee-list.component";
import { ITOldEmployeeCreateComponent } from "../paytransaction/ITOldEmployee/itoldemployee-create.component";
import { ITOldEmployeeListComponent } from "../paytransaction/ITOldEmployee/itoldemployee-list.component";
import { ITsupleeCreateComponent } from "../paytransaction/ITsupleePayments/itsuplee-create.component";
import { ITsupleeListComponent } from "../paytransaction/ITsupleePayments/itsuplee-list.component";
//import { LoanissueCreateComponent } from "../paytransaction/LoanIssues/loanissue-create.component";
//import { LoanissueListComponent } from "../paytransaction/LoanIssues/loanissue-list.component";
import { PaygenerationListComponent } from "../paytransaction/PayGeneration/paygen-list.component";




import { PaybillListComponent } from "../reports/Paybills/paybill-list.component";
import { PayslipListComponent } from "../reports/Payslips/payslip-list.component";
import { GPFListComponent } from "../reports/GPF/gpf-list.component";
import { NPSListComponent } from "../reports/NPS/nps-list.component";
import { OfficeRecoveryListComponent } from "../reports/OfficeRecoveries/officerecovery-list.component";
//import { ITReportListComponent } from "../reports/Schedules/itreport-list.component";
import { Form16ListComponent } from "../reports/Form16/form16-list.component";

import { DAupdateListComponent } from "../utilities/DAupdate/DAupdate-list.component";
import { DAupdateCreateComponent } from "../utilities/DAupdate/DAupdate-create.component";
import { DAarrearsListComponent } from "../utilities/DAarrears/DAarrears-list.component";
import { DAarrearsCreateComponent } from "../utilities/DAarrears/DAarrears-create.component";
import { HRAupdateListComponent } from "../utilities/HRAupdate/HRAupdate-list.component";
import { HRAupdateCreateComponent } from "../utilities/HRAupdate/HRAupdate-create.component";
import { DAonTAupdateListComponent } from "../utilities/DAonTAupdate/DAonTA-list.component";
import { DAonTAupdateCreateComponent } from "../utilities/DAonTAupdate/DAonTA-create.component";
import { BasicTypeupdateListComponent } from "../utilities/Basictypeupdate/Basicupdate-list.component";
import { BasicTypeupdateCreateComponent } from "../utilities/Basictypeupdate/Basicupdate-create.component";
import { EmployeeTypeupdateListComponent } from "../utilities/Employeetypeupdate/Employeeupdate-list.component";
import { EmployeeTypeupdateCreateComponent } from "../utilities/Employeetypeupdate/Employeeupdate-create.component";


import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HraTableComponent } from "../master/HRATable/hra-list.component";
import { HraCreateComponent } from "../master/HRATable/hra-create.component";
import { PaybillreportListComponent } from "../reports/Paybills/paybillreport-list.component";
import { HRAReportListComponent } from "../reports/Schedules/HRA/hrareport-list.component";
import { DAReportListComponent } from "../reports/Schedules/DA/dareport-list.component";
import { TAReportListComponent } from "../reports/Schedules/TA/tareport-list.component";
import { PTAXReportListComponent } from "../reports/Schedules/PTAX/ptaxreport-list.component";
import { HRENTReportListComponent } from "../reports/Schedules/HRENT/hrentreport-list.component";
import { CGEGISReportListComponent } from "../reports/Schedules/CGEGIS/cgegisreport-list.component";
import { DLOMIReportListComponent } from "../reports/Schedules/DLOMI/dlomireport-list.component";
import { ECCSReportListComponent } from "../reports/Schedules/DRDL ECCS/eccsreport-list.component";
import { CQAReportListComponent } from "../reports/Schedules/CQA(L)/cqareport-list.component";
import { MISCRECReportListComponent } from "../reports/Schedules/MISC REC/miscreport-list.component";
import { CGHSReportListComponent } from "../reports/Schedules/CGHS/cghsreport-list.component";
import { GPFNPSReportListComponent } from "../reports/Schedules/GPF-NPS NO/gpfnpsreport-list.component";
import { NCGHSReportListComponent } from "../reports/Schedules/NON CGHS/ncghsreport-list.component";
import { ITReportListComponent } from "../reports/Schedules/IT/itreport-list.component";
import { ITComponent } from "../reports/Schedules/IT/it.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'department', component: DepartmentTableComponent },
  { path: 'create', component: DepartmentCreateComponent },

  { path: 'designation', component: DesignationTableComponent },
  { path: 'createdesig', component: DesignationCreateComponent },

  
  { path: 'hra', component: HraTableComponent },
  { path: 'createhra', component: HraCreateComponent },
  
  { path: 'employee', component: EmployeeTableComponent },
  { path: 'createemp', component: EmployeeCreateComponent },

  { path: 'group', component: GroupTableComponent },
  { path: 'creategroup', component: GroupCreateComponent },

  { path: 'loan', component: LoanTableComponent },
  { path: 'createloan', component: LoanCreateComponent },

  { path: 'incometax', component: IncometaxTableComponent },
  { path: 'addincometax', component: IncometaxCreateComponent },

  //{ path: 'loanissue', component: LoanissueListComponent },
  //{ path: 'addloanissue', component: LoanissueCreateComponent },
  { path: 'allpaytransactions', component: PayTransactionListComponent },
  { path: 'createpaytransaction', component: PayTransactionCreateComponent },
  
  { path: 'allowance-recovery', component: AllowanceRecoveryListComponent },
  { path: 'addpayallowance', component: AllowanceRecoveryCreateComponent },
  { path: 'paygeneration', component: PaygenerationListComponent },
  { path: 'itsupleepayments', component: ITsupleeListComponent },
  { path: 'additsuplee', component: ITsupleeCreateComponent },

  { path: 'itnewemployee', component: ITNewEmployeeListComponent },
  { path: 'addnewemployee', component: ITNewEmployeeCreateComponent },
  
  { path: 'itoldemployee', component: ITOldEmployeeListComponent },
  { path: 'addoldemployee', component: ITOldEmployeeCreateComponent },

  { path: 'paybill', component: PaybillListComponent },
  { path: 'addpaybillreport', component: PaybillreportListComponent },


  { path: 'payslip', component: PayslipListComponent },
  { path: 'gpf', component: GPFListComponent },
  { path: 'nps', component: NPSListComponent },
  { path: 'officerecoveries', component: OfficeRecoveryListComponent },

  { path: 'hrareport', component: HRAReportListComponent },
  { path: 'dareport', component: DAReportListComponent },
  { path: 'tareport', component: TAReportListComponent },
  { path: 'ptaxreport', component: PTAXReportListComponent },
  { path: 'hrentreport', component: HRENTReportListComponent },
  { path: 'cgegisreport', component: CGEGISReportListComponent },
  { path: 'dlomireport', component: DLOMIReportListComponent },
  { path: 'eccsreport', component: ECCSReportListComponent },
  { path: 'cqareport', component: CQAReportListComponent },
  { path: 'miscreport', component: MISCRECReportListComponent },
  { path: 'cghsreport', component: CGHSReportListComponent },
  { path: 'gpfnpsreport', component: GPFNPSReportListComponent },
  { path: 'ncghsreport', component: NCGHSReportListComponent },
  { path: 'itreport', component: ITReportListComponent },
  
  { path: 'generateITPDF', component: ITComponent },
  
  { path: 'form16', component: Form16ListComponent },

  { path: 'DAupdate', component: DAupdateListComponent },
  { path: 'addDA', component: DAupdateCreateComponent },

  { path: 'DAarrears', component: DAarrearsListComponent },
  { path: 'addDAarrears', component: DAarrearsCreateComponent },

  { path: 'HRAupdate', component: HRAupdateListComponent },
  { path: 'addHRA', component: HRAupdateCreateComponent },

  { path: 'DAonTAupdate', component: DAonTAupdateListComponent },
  { path: 'addDAonTA', component: DAonTAupdateCreateComponent },

  { path: 'basictype', component: BasicTypeupdateListComponent },
  { path: 'createbasictype', component: BasicTypeupdateCreateComponent },

  { path: 'employeetype', component: EmployeeTypeupdateListComponent },
  { path: 'createemptype', component: EmployeeTypeupdateCreateComponent },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

