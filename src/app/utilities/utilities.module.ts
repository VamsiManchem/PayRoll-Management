import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";


import { DAupdateCreateComponent } from "./DAupdate/DAupdate-create.component";
import { DAupdateListComponent } from "./DAupdate/DAupdate-list.component";

import { DAarrearsListComponent } from "./DAarrears/DAarrears-list.component";
import { DAarrearsCreateComponent } from "./DAarrears/DAarrears-create.component";

import { HRAupdateListComponent } from "./HRAupdate/HRAupdate-list.component";
import { HRAupdateCreateComponent } from "./HRAupdate/HRAupdate-create.component";

import { DAonTAupdateListComponent } from "./DAonTAupdate/DAonTA-list.component";
import { DAonTAupdateCreateComponent } from "./DAonTAupdate/DAonTA-create.component";

import { BasicTypeupdateListComponent } from "./Basictypeupdate/Basicupdate-list.component";
import { BasicTypeupdateCreateComponent } from "./Basictypeupdate/Basicupdate-create.component";

import { EmployeeTypeupdateListComponent } from "./Employeetypeupdate/Employeeupdate-list.component";
import { EmployeeTypeupdateCreateComponent } from "./Employeetypeupdate/Employeeupdate-create.component";

@NgModule({
    declarations: [
        DAupdateListComponent,
        DAupdateCreateComponent,

        DAarrearsListComponent,
        DAarrearsCreateComponent,

        HRAupdateListComponent,
        HRAupdateCreateComponent,

        DAonTAupdateListComponent,
        DAonTAupdateCreateComponent,

        BasicTypeupdateListComponent,
        BasicTypeupdateCreateComponent,
        
        EmployeeTypeupdateListComponent,
        EmployeeTypeupdateCreateComponent

    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      AngularMaterialModule,
      RouterModule,
      FormsModule
    ]
  })
  export class UtilitiesModule {}
  