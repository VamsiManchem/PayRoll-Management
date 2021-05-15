import { Date } from "mongoose";

/* export interface DeptModel {
  id: string;
  title: string;
  content: string;
} */
export interface DeptModel {
  id: string;
  title: string;
}
/* Designation Model*/
export interface Designation {
  id: string;
  title: string;
  content: string;
}

/* HRA Model */
export interface Hra {
  id: string;
  title: number;
}

/* Group Model*/
export interface Group {
  id: string;
  title: string;
}

/* Loan Model*/
export interface Loan {
  id: string;
  name: string;
  description: string;
  type: string;

}



/* Employee Model*/
export interface Employee {
  id: string;
  empno: number;
  empname: string;
  basictype: string;
  emptype: string;
  department: string;
  designation: string;
  group: string;
  gender: string;
  dob: Date;
  doj: Date;
  doni: Date;
  doli: Date;
  dor: Date;
  pan: string;
  gpf: string;
  nps: string;
  aadharno: number;

  bankname: string;
  bankaccountno: number;
  ifsccode: string;

  paylevel: string;
  cellno: number;
  basicpay: number;
  govtqurters: string;
  medicalstatus: string;
  exservice: string;
  ptax: number;
  cgegis: number;
  da: number;
  daamt: number;
  hra: number;
  hraamt: number;
  ta: number;
  daonta: number;
  noncghs:string;
  npssubscription: number;
  npsgovtsub:number;
  remarks: string;
 
  status: string;
  effectivedate: Date;

  /* HBA Loan Model  */
  HBAloan: string;
  HBAtype: string;
  HBAloanamt: number;
  HBAinstno: number;
  HBAinstamt: number;
  //HBArec: number
  HBAbal: number;
  HBAlastinst:number;
  HBAlastdate: Date;
  HBAremarks: string;
  HBAstartdate: Date;
  HBAstatus: string;

/* MC Loan Model  */
  MCloan: string;
  MCtype: string;
  MCloanamt: number;
  MCinstno: number;
  MCinstamt: number;
  //MCrec: number;
  MCbal: number;
  MClastinst:number;
  MClastdate: Date;
  MCremarks: string;
  MCstartdate: Date;
  MCstatus: string;

/* Comuter Loan Model  */
  PCloan: string;
  PCtype: string;
  PCloanamt: number;
  PCinstno: number;
  PCinstamt: number;
  //PCrec: number;
  PCbal: number;
  PClastinst:number;
  PClastdate: Date;
  PCremarks: string;
  PCstartdate: Date;
  PCstatus: string;

/* Car Loan Model  */
  CARloan: string;
  CARtype: string;
  CARloanamt: number;
  CARinstno: number;
  CARinstamt: number;
  //CARrec: number;
  CARbal: number;
  CARlastinst:number;
  CARlastdate: Date;
  CARremarks: string;
  CARstartdate: Date;
  CARstatus: string;


  /* Other Loan Model  */
  GPFloan: string;
  GPFtype: string;
  GPFloanamt: number;
  GPFinstno: number;
  GPFinstamt: number;
  //GPFrec: number;
  GPFbal: number;
  GPFlastinst:number;
  GPFlastdate: Date;
  GPFremarks: string;
  GPFstartdate: Date;
  GPFstatus: string;

/* Other Loan Model  */
  OTHERloan: string;
  OTHERtype: string;
  OTHERloanamt: number;
  OTHERinstno: number;
  OTHERinstamt: number;
  //OTHERrec: number;
  OTHERbal: number;
  OTHERlastinst:number;
  OTHERlastdate: Date;
  OTHERremarks: string;
  OTHERstartdate: Date;
  OTHERstatus: string;

/* Allowance and CDA Recoveries*/
 gpfsub: number;
 gpfrec: number;
 npssub: number;
 npsrec: number;
 it: number;
 ittaxamt:number;
 cess: number;
 misc1: number;
 homerent: number;
 water: number;
 elec: number;
 cghs: number;
 //TaDa: number;
 misc1Alw:number;

 /* Office Recoveries*/
dlomi: number;
welfare: number;
DRDLEcss: number;
cqa: number;
OfrMisc1: number;
OffRecvdate: Date;

grosspay: number;
tdeduction: number;
netpay: number;
toffcrec: number;
tobnkamt: number;


}
/* Paymatrix Model*/
export interface Paymatrix {
  id: string;
  Cellno: number;
  Levelno: string;
  Payband: number;
  Gradepay: number;
  Basicpay: number;
}


