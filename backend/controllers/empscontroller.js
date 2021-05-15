const Emp = require("../models/empmodel");

exports.createEmp = (req, res, next) => {
  

  const emp = new Emp({
    _id: req.body.id,
    empno: req.body.empno,
    empname: req.body.empname,
    basictype: req.body.basictype,
    emptype: req.body.emptype,
    department: req.body.department,
    designation: req.body.designation,
    group: req.body.group,
    gender: req.body.gender,
    dob: req.body.dob,
    doj: req.body.doj,
    doni: req.body.doni,
    doli: req.body.doli,
    dor: req.body.dor,
    pan: req.body.pan,
    gpf: req.body.gpf,
    nps: req.body.nps,
    aadharno: req.body.aadharno,

    bankname: req.body.bankname,
    bankaccountno: req.body.bankaccountno,
    ifsccode: req.body.ifsccode,

    paylevel: req.body.paylevel,
    cellno: req.body.cellno,
    basicpay: req.body.basicpay,
    govtqurters: req.body.govtqurters,
    medicalstatus: req.body.medicalstatus,
    exservice: req.body.exservice,
    ptax: req.body.ptax,
    cgegis: req.body.cgegis,
    da: req.body.da,
    daamt: req.body.daamt,
    hra: req.body.hra,
    hraamt:  req.body.hraamt,
    ta: req.body.ta,
    daonta: req.body.daonta,
    npssubscription: req.body.npssubscription,
    npsgovtsub: req.body.npsgovtsub,
    remarks: req.body.remarks,

    status: req.body.status,
    effectivedate: req.body.effectivedate,
    creator: req.userData.userId,

    HBAloan: req.body.HBAloan,
    HBAtype: req.body.HBAtype,
    HBAloan: req.body.HBAloan,
    HBAtype: req.body.HBAtype,
    HBAloanamt:req.body.HBAloanamt,
    HBAinstno: req.body.HBAinstno,
    HBAinstamt: req.body.HBAinstamt,
    //HBArec: req.body.HBArec,
    HBAbal:req.body.HBAbal,
    HBAlastinst: req.body.HBAlastinst,
    HBAlastdate: req.body.HBAlastdate,
    HBAremarks: req.body.HBAremarks,
    HBAstartdate: req.body.HBAstartdate,
    HBAstatus: req.body.HBAstatus,

    MCloan: req.body.MCloan,
    MCtype: req.body.MCtype,
    MCloanamt:req.body.MCloanamt,
    MCinstno: req.body.MCinstno,
    MCinstamt: req.body.MCinstamt,
    //MCrec: req.body.MCrec,
    MCbal: req.body.MCbal,
    MClastinst: req.body.MClastinst,
    MClastdate: req.body.MClastdate,
    MCremarks: req.body.MCremarks,
    MCstartdate: req.body.MCstartdate,
    MCstatus: req.body.MCstatus,

    PCloan: req.body.PCloan,
    PCtype: req.body.PCtype,
    PCloanamt:req.body.PCloanamt,
    PCinstno: req.body.PCinstno,
    PCinstamt: req.body.PCinstamt,
    //PCrec: req.body.PCrec,
    PCbal: req.body.PCbal,
    PClastinst: req.body.PClastinst,
    PClastdate: req.body.PClastdate,
    PCremarks: req.body.PCremarks,
    PCstartdate: req.body.PCstartdate,
    PCstatus: req.body.PCstatus,

    CARloan: req.body.CARloan,
    CARtype: req.body.CARtype,
    CARloanamt:req.body.CARloanamt,
    CARinstno: req.body.CARinstno,
    CARinstamt: req.body.CARinstamt,
    //CARrec: req.body.CARrec,
    CARbal: req.body.CARbal,
    CARlastinst: req.body.CARlastinst,
    CARlastdate: req.body.CARlastdate,
    CARremarks: req.body.CARremarks,
    CARstartdate: req.body.CARstartdate,
    CARstatus: req.body.CARstatus,

    GPFloan: req.body.GPFloan,
    GPFtype: req.body.GPFtype,
    GPFloanamt: req.body.GPFloanamt,
    GPFinstno: req.body.GPFinstno,
    GPFinstamt: req.body.GPFinstamt,
    //GPFrec: req.body.GPFrec,
    GPFbal: req.body.GPFbal,
    GPFlastinst: req.body.GPFlastinst,
    GPFlastdate: req.body.GPFlastdate,
    GPFremarks: req.body.GPFremarks,
    GPFstartdate: req.body.GPFstartdate,
    GPFstatus: req.body.GPFstatus, 

    OTHERloan: req.body.OTHERloan,
    OTHERtype: req.body.OTHERtype,
    OTHERloanamt: req.body.OTHERloanamt,
    OTHERinstno: req.body.OTHERinstno,
    OTHERinstamt: req.body.OTHERinstamt,
    //OTHERrec: req.body.OTHERrec,
    OTHERbal: req.body.OTHERbal,
    OTHERlastinst: req.body.OTHERlastinst,
    OTHERlastdate: req.body.OTHERlastdate,
    OTHERremarks: req.body.OTHERremarks,
    OTHERstartdate: req.body.OTHERstartdate,
    OTHERstatus: req.body.OTHERstatus, 

    gpfsub: req.body.gpfsub, 
    gpfrec: req.body.gpfrec,
    npssub: req.body.npssub,
    npsrec: req.body.npsrec,
    it: req.body.it,
    ittaxamt: req.body.ittaxamt,
    cess: req.body.cess,
    misc1: req.body.misc1 ,
    homerent: req.body.homerent ,
    water: req.body. water ,
    elec: req.body.elec,
    cghs: req.body.cghs,
    noncghs:req.body.noncghs,
    TaDa: req.body.TaDa,
    misc1Alw: req.body.misc1Alw,
    OTHERstatus: req.body.OTHERstatus ,

    dlomi: req.body.dlomi,
    welfare: req.body.welfare,
    DRDLEcss: req.body.DRDLEcss,
    cqa: req.body.cqa,
    OfrMisc1: req.body.OfrMisc1,
    OffRecvdate: req.body.OffRecvdate,

    grosspay: req.body.grosspay,
    tdeduction: req.body.tdeduction,
    netpay: req.body.netpay,
    toffcrec: req.body.toffcrec,
    tobnkamt: req.body.tobnkamt,


  });
  console.log(emp);
 // console.log(req.body);
  emp.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Employee added successfully',
  });

  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Creating a Employee Failed!"
    });
  });
};

exports.updateEmp = (req, res, next) => {
  const emp = new Emp({
    _id: req.body.id,
    empno: req.body.empno,
    empname: req.body.empname,
    basictype: req.body.basictype,
    emptype: req.body.emptype,
    department: req.body.department,
    designation: req.body.designation,
    group: req.body.group,
    gender: req.body.gender,
    dob: req.body.dob,
    doj: req.body.doj,
    doni: req.body.doni,
    doli: req.body.doli,
    dor: req.body.dor,
    pan: req.body.pan,
    gpf: req.body.gpf,
    nps: req.body.nps,
    aadharno: req.body.aadharno,

    bankname: req.body.bankname,
    bankaccountno: req.body.bankaccountno,
    ifsccode: req.body.ifsccode,

    paylevel: req.body.paylevel,
    cellno: req.body.cellno,
    basicpay: req.body.basicpay,
    govtqurters: req.body.govtqurters,
    medicalstatus: req.body.medicalstatus,
    exservice: req.body.exservice,
    ptax: req.body.ptax,
    cgegis: req.body.cgegis,
    da: req.body.da,
    daamt: req.body.daamt,
    hra: req.body.hra,
    hraamt: req.body.hraamt,
    ta: req.body.ta,
    daonta: req.body.daonta,
    npssubscription: req.body.npssubscription,
    npsgovtsub: req.body.npsgovtsub,
    remarks: req.body.remarks,

    status: req.body.status,
    effectivedate: req.body.effectivedate,


    HBAloan: req.body.HBAloan,
    HBAtype: req.body.HBAtype,
    HBAloan: req.body.HBAloan,
    HBAtype: req.body.HBAtype,
    HBAloanamt: req.body.HBAloanamt,
    HBAinstno: req.body.HBAinstno,
    HBAinstamt: req.body.HBAinstamt,
    //HBArec: req.body.HBArec,
    HBAbal:req.body.HBAbal,
    HBAlastinst: req.body.HBAlastinst,
    HBAlastdate: req.body.HBAlastdate,
    HBAremarks: req.body.HBAremarks,
    HBAstartdate: req.body.HBAstartdate,
    HBAstatus: req.body.HBAstatus,

    MCloan: req.body.MCloan,
    MCtype: req.body.MCtype,
    MCloanamt: req.body.MCloanamt,
    MCinstno: req.body.MCinstno,
    MCinstamt: req.body.MCinstamt,
    //MCrec: req.body.MCrec,
    MCbal: req.body.MCbal,
    MClastinst: req.body.MClastinst,
    MClastdate: req.body.MClastdate,
    MCremarks: req.body.MCremarks,
    MCstartdate: req.body.MCstartdate,
    MCstatus: req.body.MCstatus,

    PCloan: req.body.PCloan,
    PCtype: req.body.PCtype,
    PCloanamt: req.body.PCloanamt,
    PCinstno: req.body.PCinstno,
    PCinstamt: req.body.PCinstamt,
    //PCrec: req.body.PCrec,
    PCbal: req.body.PCbal,
    PClastinst: req.body.PClastinst,
    PClastdate: req.body.PClastdate,
    PCremarks: req.body.PCremarks,
    PCstartdate: req.body.PCstartdate,
    PCstatus: req.body.PCstatus,

    CARloan: req.body.CARloan,
    CARtype: req.body.CARtype,
    CARloanamt: req.body.CARloanamt,
    CARinstno: req.body.CARinstno,
    CARinstamt: req.body.CARinstamt,
    //CARrec: req.body.CARrec,
    CARbal: req.body.CARbal,
    CARlastinst: req.body.CARlastinst,
    CARlastdate: req.body.CARlastdate,
    CARremarks: req.body.CARremarks,
    CARstartdate: req.body.CARstartdate,
    CARstatus: req.body.CARstatus,

    GPFloan: req.body.GPFloan,
    GPFtype: req.body.GPFtype,
    GPFloanamt: req.body.GPFloanamt,
    GPFinstno: req.body.GPFinstno,
    GPFinstamt: req.body.GPFinstamt,
    //GPFrec: req.body.GPFrec,
    GPFbal: req.body.GPFbal,
    GPFlastinst: req.body.GPFlastinst,
    GPFlastdate: req.body.GPFlastdate,
    GPFremarks: req.body.GPFremarks,
    GPFstartdate: req.body.GPFstartdate,
    GPFstatus: req.body.GPFstatus, 

    OTHERloan: req.body.OTHERloan,
    OTHERtype: req.body.OTHERtype,
    OTHERloanamt: req.body.OTHERloanamt,
    OTHERinstno: req.body.OTHERinstno,
    OTHERinstamt: req.body.OTHERinstamt,
    //OTHERrec: req.body.OTHERrec,
    OTHERbal: req.body.OTHERbal,
    OTHERlastinst: req.body.OTHERlastinst,
    OTHERlastdate: req.body.OTHERlastdate,
    OTHERremarks: req.body.OTHERremarks,
    OTHERstartdate: req.body.OTHERstartdate,
    OTHERstatus: req.body.OTHERstatus,

    gpfsub: req.body.gpfsub, 
    gpfrec: req.body.gpfrec,
    npssub: req.body.npssub,
    npsrec: req.body.npsrec,
    it: req.body.it,
    ittaxamt: req.body.ittaxamt,
    cess: req.body.cess,
    misc1: req.body.misc1 ,
    homerent: req.body.homerent ,
    water: req.body. water ,
    elec: req.body.elec,
    cghs: req.body.cghs,
    noncghs: req.body.noncghs,
    TaDa: req.body.TaDa,
    misc1Alw: req.body.misc1Alw,
    OTHERstatus: req.body.OTHERstatus ,

    dlomi: req.body.dlomi,
    welfare: req.body.welfare,
    DRDLEcss: req.body.DRDLEcss,
    cqa: req.body.cqa,
    OfrMisc1: req.body.OfrMisc1,
    OffRecvdate: req.body.OffRecvdate,

    grosspay: req.body.grosspay,
    tdeduction: req.body.tdeduction,
    netpay: req.body.netpay,
    toffcrec: req.body.toffcrec,
    tobnkamt: req.body.tobnkamt,

  });
  console.log(emp);
  Emp.updateOne({_id: req.params.id }, emp)
  .then(result => {
    //res.status(200).json({ message: 'Update uccessful!' });

      if (result.n > 0) {
      res.status(200).json({ message: 'Update Successful!' });
    }
    else {
      res.status(401).json({ message: 'Not Authorized!' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Couldn't updated employee!"
    });
  });
};

exports.getEmps = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const empQuery = Emp.find();
  let fetchedEmps;
  if (pageSize && currentPage) {
    empQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  empQuery
    .then(documents => {
    fetchedEmps = documents;
    return Emp.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Employee fetched successfully!",
        emps: fetchedEmps,
        maxEmps: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Employee Failed!"
      });
    });
  };

  exports.getEmp = (req, res, next) => {
    Emp.findById(req.params.id).then(emp => {
     if (emp) {
       console.log(emp);
       res.status(200).json(emp);
     }
     else {
       res.status(404).json({ message: 'Employee not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching Employee Failed!"
     });
  });
 };

 


 exports.deleteEmp = (req, res, next) => {
    Emp.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Employee deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Employee deleted Failed!"
   });;
 });
}
