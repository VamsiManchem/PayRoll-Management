import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";

import { PaybillListComponent } from "./Paybills/paybill-list.component";
import { PayslipListComponent } from "./Payslips/payslip-list.component";
import { GPFListComponent } from "./GPF/gpf-list.component";
import { OfficeRecoveryListComponent } from "./OfficeRecoveries/officerecovery-list.component";
//import { ITReportListComponent } from "./Schedules/hrareport-list.component";
import { Form16ListComponent } from "./Form16/form16-list.component";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from "./search.pipe";
import { FilterPipe } from "./filter.pipe";
import { HRAReportListComponent } from "./Schedules/HRA/hrareport-list.component";
import { DAReportListComponent } from "./Schedules/DA/dareport-list.component";
import { TAReportListComponent } from "./Schedules/TA/tareport-list.component";
import { PTAXReportListComponent } from "./Schedules/PTAX/ptaxreport-list.component";
import { HRENTReportListComponent } from "./Schedules/HRENT/hrentreport-list.component";
import { CGEGISReportListComponent } from "./Schedules/CGEGIS/cgegisreport-list.component";
import { DLOMIReportListComponent } from "./Schedules/DLOMI/dlomireport-list.component";
import { ECCSReportListComponent } from "./Schedules/DRDL ECCS/eccsreport-list.component";
import { CQAReportListComponent } from "./Schedules/CQA(L)/cqareport-list.component";
import { MISCRECReportListComponent } from "./Schedules/MISC REC/miscreport-list.component";
import { CGHSReportListComponent } from "./Schedules/CGHS/cghsreport-list.component";
import { NCGHSReportListComponent } from "./Schedules/NON CGHS/ncghsreport-list.component";
import { ITReportListComponent } from "./Schedules/IT/itreport-list.component";
import { NPSListComponent } from "./NPS/nps-list.component";
import { GPFNPSReportListComponent } from "./Schedules/GPF-NPS NO/gpfnpsreport-list.component";
//import { NcghsfilterPipe } from "./ncghsfilter.pipe";
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { InvoiceComponent } from "./Schedules/IT/invoice-component";
import { IntlModule } from '@progress/kendo-angular-intl';
import { ITComponent } from "./Schedules/IT/it.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        PaybillListComponent,
        PayslipListComponent,
        GPFListComponent,
        NPSListComponent,
        OfficeRecoveryListComponent,

        HRAReportListComponent,
        DAReportListComponent,
        TAReportListComponent,
        PTAXReportListComponent,
        HRENTReportListComponent,
        CGEGISReportListComponent,
        DLOMIReportListComponent,
        ECCSReportListComponent,
        CQAReportListComponent,
        MISCRECReportListComponent,
        CGHSReportListComponent,
        NCGHSReportListComponent,
        ITReportListComponent,
        ITComponent,
        GPFNPSReportListComponent,
        InvoiceComponent,
        

        Form16ListComponent,
        SearchPipe,
        FilterPipe,
      
  
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      AngularMaterialModule,
      RouterModule,
      FormsModule,
      Ng2SearchPipeModule,
      GridModule,
      PDFExportModule,
      IntlModule,
      BrowserModule,
      BrowserAnimationsModule,
      PDFModule,
      ExcelModule
    ]
  })
  export class ReportsModule {}
  