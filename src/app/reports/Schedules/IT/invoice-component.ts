import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { aggregateBy } from '@progress/kendo-data-query';
import { InvoiceRow } from './invoice-row';
import { Paytrans } from '../../reports.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { PbillreportsService } from '../../reports.service';


@Component({
  selector: 'my-invoice',
  template: `
    <div class="header">
      <h3> MISSILE SYSTEM QUALITY ASSURANCE AGENCY (MSQAA), HYD-500058</h3>
    </div>

    <div class="address">
      <div class="for">
        <h3>SCHEDULE OF INCOME TAX DEDUCTION</h3>
      </div>
    </div>

    <div class="items">
      <kendo-grid [data]="data" scrollable="none">
      
      <kendo-grid-column field="empno" title="EMP NO" [width]="450"></kendo-grid-column>
      <kendo-grid-column field="empname" title="EMP NAME" [width]="450"></kendo-grid-column>
      <kendo-grid-column field="desgination" title="DESIGNATION"  [width]="100"></kendo-grid-column>
      <kendo-grid-column field="it" title="AMOUNT(IT)"  [width]="100"></kendo-grid-column>
      <kendo-grid-column field="cess" title="4% CESS" [width]="450"></kendo-grid-column>
      <kendo-grid-column field="ittaxamt" title="TOTAL TAX AMT" [width]="100"></kendo-grid-column>
      <kendo-grid-column field="remarks" title="Remarks" [width]="450"></kendo-grid-column>
      

      <!--   <kendo-grid-column field="empno" title="Emp No">
          <ng-template kendoGridFooterTemplate>
            Total
          </ng-template>
        </kendo-grid-column>
        <kendo-grid-column field="unitPrice"  title="Price" >
                           
        </kendo-grid-column>
        <kendo-grid-column field="qty" title="Pcs."  >
                           
          <ng-template kendoGridFooterTemplate let-column="column">
            {{ totals[column.field].sum }}
          </ng-template>
        </kendo-grid-column>
        <kendo-grid-column field="total" format="{0:c}" title="Total" >
                           
          <ng-template kendoGridFooterTemplate let-column="column">
            {{ totals[column.field].sum | kendoNumber:'c' }}
          </ng-template>
        </kendo-grid-column> -->
      </kendo-grid>
    </div>

    <div class="signature">
      Signature: ________________
    </div>
  `,
  styles: [`
    .header {
      font-size: 30px;
      font-weight: bold;
      margin: 20px 0 20px 0;
      border-bottom: 1px solid #e5e5e5;
      color:black;
    }

    .address {
        display: flex;
        justify-content: center;
        margin: 0 0 20px 0;
    }

     .for p {
      color: #787878;
    }

    .signature {
      padding-top: 36px;
    }
  `]
})
export class InvoiceComponent {
  
  @Input()
  public data: InvoiceRow[] = [];

 /*  private aggregates: any[] = [{
    field: 'qty', aggregate: 'sum'
  }, {
    field: 'total', aggregate: 'sum'
  }];

  public get totals(): any {
    return aggregateBy(this.data, this.aggregates) || {};
  } */


 
}
