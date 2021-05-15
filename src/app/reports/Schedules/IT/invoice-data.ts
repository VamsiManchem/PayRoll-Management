import { Component,Input, OnInit } from '@angular/core';
import { PbillreportsService } from '../../reports.service';
import { InvoiceRow } from './invoice-row';


//export const invoiceData = [];
@Component({
  template: ''
})

export class InvoiceData implements OnInit{
  // public gridView: GridDataResult;
  @Input()
    public invoiceData: any;
   constructor( public pbillreportsService: PbillreportsService) {}
   ngOnInit() {
     debugger;
     this.invoiceData = this.pbillreportsService.getITreport();
     this.invoiceData = JSON.stringify(this.invoiceData);
     //console.log(string);
     alert(this.invoiceData);
     
   }
   
  } 
