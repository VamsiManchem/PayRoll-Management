import { Date } from "mongoose";

/* Pay Transactions Model*/
export interface Paytrans {
  Year: Date;
  Month: string;
  //EmployeeRecord: Array<string | number>;
  //EmpRec: string;
}

export interface Itnewemp {
  //Employee Details//
  id: string;
  month: Date;
  year: Date;
  empno: number;
  empname: string;
  designation: string;
  emptype: string;
  group: string;
  basictype: string;

  //Suplee Payments//
  paylevel: string;
  cellno: number;
  gpf: number;
  cpsrec: number;
  basic: number;
  cgegis: number;
  da: number;
  cghs: number;
  hra: number;
  itrec: number;
  ta: number;
  itcess: number;
  daonta: number;
  ptrec: number;
  effectivedate: Date;
}

