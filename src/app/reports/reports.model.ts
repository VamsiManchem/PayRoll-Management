import { Date } from "mongoose";

export interface Reports {
  id: string;
  Year: Date;
  Month: string;
  basictype: string;
  emptype: string;
  department: string;
  empno: number;
  noncghs:string;
}
export interface Paytrans {
  Year: Date;
  Month: string;
  EmpRecord: Array<any>;
  //EmployeeRecord: Array<string | number>;
  //EmpRec: string;
}

