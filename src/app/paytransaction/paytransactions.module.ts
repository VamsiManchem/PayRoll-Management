import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";

//import { LoanissueListComponent } from './LoanIssues/loanissue-list.component';
import { PayTransactionListComponent } from './PayTransactions/paytransaction-list.component';
import { AllowanceRecoveryListComponent } from "./AllowanceRecovery/allowance-list.component";
import { PaygenerationListComponent } from "./PayGeneration/paygen-list.component";
import { AllowanceRecoveryCreateComponent } from "./AllowanceRecovery/allowance-create.component";
//import { LoanissueCreateComponent } from "./LoanIssues/loanissue-create.component";
import { PayTransactionCreateComponent } from "./PayTransactions/paytransaction-create.component";
import { ITsupleeListComponent } from './ITsupleePayments/itsuplee-list.component';
import { ITsupleeCreateComponent } from "./ITsupleePayments/itsuplee-create.component";
import { ITNewEmployeeListComponent } from "./ITNewEmployee/itnewemployee-list.component";
import { ITNewEmployeeCreateComponent } from "./ITNewEmployee/itnewemployee-create.component";
import { ITOldEmployeeListComponent } from "./ITOldEmployee/itoldemployee-list.component";
import { ITOldEmployeeCreateComponent } from "./ITOldEmployee/itoldemployee-create.component";


@NgModule({
  declarations: [

    //LoanissueListComponent,
   // LoanissueCreateComponent,
    PayTransactionListComponent,
    PayTransactionCreateComponent,
    //AllowanceRecoveryListComponent,
    AllowanceRecoveryCreateComponent,
    PaygenerationListComponent,
    ITsupleeListComponent,
    ITsupleeCreateComponent,
    ITNewEmployeeListComponent,
    ITNewEmployeeCreateComponent,
    ITOldEmployeeListComponent,
    ITOldEmployeeCreateComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class PaytransactionsModule {}
