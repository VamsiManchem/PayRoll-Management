import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { InvoiceRow } from './invoice-row';
import { InvoiceData } from './invoice-data';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { PbillreportsService } from '../../reports.service';
import { Paytrans } from 'src/app/paytransaction/paytransaction.model';
import { GridComponent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'my-app',
  /*
   * Set a fixed row height of 36px (20px line height, 2 * 8px padding)
   *
   * [row height] = [line height] + [padding] + [border]
   *
   * Note: If using the Kendo UI Material theme, add 1px to the row height
   * to account for the bottom border width.
   */
  encapsulation: ViewEncapsulation.None,
  styles: [`
       kendo-grid {
        height: 400px; 
        color:black;
      }
     b{
       color:black;
     }
    `],
  template: `
  <button (click)="exportToPDF()"> exportToPDF</button>
          <b>Rows: {{loadedRows}}</b>
          
        <kendo-grid #grid
            [data]="gridView"
            [skip]="skip"
            [pageSize]="pageSize"
            scrollable="virtual"
            [rowHeight]="36"
            (pageChange)="pageChange($event)"
            [navigable]="true"
            [groupable]="true"
            
          >
<kendo-grid-column field="id" [width]="80" title="ID"></kendo-grid-column>
<kendo-grid-column field="empNames" title="Emp Name" [width]="200"> 
  </kendo-grid-column>
  <kendo-grid-column field="lastName" title="Last Name" [width]="200"></kendo-grid-column>
  <kendo-grid-column field="city" title="City" [width]="200"></kendo-grid-column>
  <kendo-grid-column field="title" title="Title" [width]="200"></kendo-grid-column>
  <kendo-grid-column field="title1" title="Title1" [width]="200"></kendo-grid-column>
  <kendo-grid-column field="title2" title="Title2" [width]="200"></kendo-grid-column>
  <kendo-grid-column field="title3" title="Title3" [width]="200"></kendo-grid-column>
  <kendo-grid-column field="title4" title="Title4" [width]="200"></kendo-grid-column> 
  <kendo-grid-column field="title5" title="Title5" [width]="200"></kendo-grid-column> 
  <kendo-grid-column field="title6" title="Title6" [width]="200"></kendo-grid-column> 
   
      <kendo-grid-pdf fileName="test.pdf" title="test" [allPages]="true" paperSize="A4"
        [repeatHeaders]="true" [landscape]="true" [scale]="0.3">
        <kendo-grid-pdf-margin top="2cm" left="1cm" right="1cm" bottom="2cm">
        </kendo-grid-pdf-margin>
 
        <ng-template kendoGridPDFTemplate let-pageNum="pageNum" let-totalPages="totalPages">
          <div class="page-template">
            <div class="header">
              <div style="float: right">
                {{ "page" }} {{ pageNum }} {{ "of" }}
                {{ totalPages }}
              </div>
              {{'test'}}
            </div>
            <div class="footer">
              {{ "page" }} {{ pageNum }} {{ "of" }}
              {{ totalPages }}
            </div>
          </div>
        </ng-template>
      </kendo-grid-pdf>
  `
})

export class ITComponent {

  private grid!: GridComponent;

  @ViewChild('grid') set rptGrid(g: GridComponent) {
    if (g) this.grid = g;
  }
  public gridView!: GridDataResult;
  public data: any[];
  public pageSize = 100;
  public skip = 0;
  public take: number = 100;
  public loadedRows: number = 100;
  //public group: GroupDescriptor[] = [{ field: 'city', aggregates: [{ aggregate: 'count', field: 'firstNames' }] }];

  constructor(public pbillreportsService: PbillreportsService) {
    this.data = this.createRandomData(100);    //call my service to give data in json format
    console.log(this.data);
    this.loadProducts();
    
  }

  public pageChange(event: PageChangeEvent): void {
    console.log('pageChange event', event);
    this.skip = event.skip;
    this.take = event.take;
    this.loadedRows = this.skip + this.take;
    console.log('pageChange this.skip this.take', this.skip, this.take);
    this.loadProducts();
  }

  private loadProducts(): void {

    this.gridView = {
      data: this.data.slice(this.skip, this.skip + this.take),
      total: this.data.length
    };
    
    console.log('this.gridView  ', this.gridView);
    if (this.grid) this.grid.autoFitColumns();

  }

  public exportToPDF(): void {
    if (this.grid) this.grid.saveAsPDF();
  }

 /*  public groupChange(group: GroupDescriptor[]): void {
    this.group = group;
  } */

  /* call service to get filtered data */
  private createRandomData(count: number): any[] {
    debugger;


    const ITreportdata = this.pbillreportsService.getITreport();
    //this.data = JSON.stringify(this.data);
   
  

/*this will have month and year */
    let headingArray = [];
    let dataArray = [];
      for ( var i = 0; i <ITreportdata.length ; i++){
        var innerArrayLength = ITreportdata[i].length;
        for ( var j = 0; j<innerArrayLength ; j++){
          if (ITreportdata[i][j].Desig == "") {
            headingArray.push(ITreportdata[i][j]);
        }
        else{
          dataArray.push(ITreportdata[i][j]);
        }
      }
      }
    
    console.log(headingArray);
    console.log(dataArray);

    console.log(ITreportdata);

    const empNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'],
      lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'],
      cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
      titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer',
        'Software Developer'];

    return Array(count).fill({}).map((_, idx) => ({
      id: idx + 1,
      firstName: empNames[Math.floor(Math.random() )],
      lastName: lastNames[Math.floor(Math.random())],
      city: cities[Math.floor(Math.random() * cities.length)],
      title: titles[Math.floor(Math.random() * titles.length)],
      title1: titles[Math.floor(Math.random() * titles.length)],
      title2: titles[Math.floor(Math.random() * titles.length)],
      title3: titles[Math.floor(Math.random() * titles.length)],
      title4: titles[Math.floor(Math.random() * titles.length)],
      title5: titles[Math.floor(Math.random() * titles.length)],
      title6: titles[Math.floor(Math.random() * titles.length)]
    })
    );
  }

  
  
}



