export class InvoiceRow {
  /*   public get total(): number {
      return this.unitPrice * this.qty;
    } */
  
    constructor(
      //public SIno: number,
      public empno: number,
      public empname: string,
      public designation: string,
      public it: number,
      public cess: number,
      public ittaxamt: number
     
    ) {}
  }
  