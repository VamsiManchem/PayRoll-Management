import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";

import { DepartmentCreateComponent } from './DepartmentTable/dept-create.component';
import { DepartmentTableComponent } from './DepartmentTable/dept-list.component';

import { DesignationCreateComponent } from "./DesignationTable/desig-create.component";
import { DesignationTableComponent } from "./DesignationTable/desig-list.component";

import { EmployeeCreateComponent } from "./EmployeeTable/emp-create.component";
import { EmployeeTableComponent } from "./EmployeeTable/emp-list.component";

import { GroupCreateComponent } from "./GroupTable/group-create.component";
import { GroupTableComponent } from "./GroupTable/group-list.component";

import { HraCreateComponent } from "./HRATable/hra-create.component";
import { HraTableComponent } from "./HRATable/hra-list.component";

import { IncometaxCreateComponent } from "./IncometaxslabTable/incometax-create.component";
import { IncometaxTableComponent } from "./IncometaxslabTable/incometax-list.component";

import { LoanCreateComponent } from "./LoanTable/loan-create.component";
import { LoanTableComponent } from "./LoanTable/loan-list.component";

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    DepartmentCreateComponent,
    DepartmentTableComponent,

    DesignationTableComponent,
    DesignationCreateComponent,

    HraTableComponent,
    HraCreateComponent,


    EmployeeTableComponent,
    EmployeeCreateComponent,

    GroupTableComponent,
    GroupCreateComponent,

    LoanTableComponent,
    LoanCreateComponent,
    
    IncometaxTableComponent,
    IncometaxCreateComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class MastersModule {}
