const Itnewemp = require("../models/itnewempmodel");


exports.createItnewemp = (req, res, next) => {
  

  const itnewemp = new Itnewemp({
    _id: req.body.id,
    month: req.body.month,
    year: req.body.year,
    empno: req.body.empno,
    empname: req.body.empname,
    designation: req.body.designation,
    emptype: req.body.emptype,
    group: req.body.group,
    basictype: req.body.basictype,

    paylevel: req.body.paylevel,
    cellno: req.body.cellno,
    gpf: req.body.gpf,
    cpsrec: req.body.cpsrec,
    basic: req.body.basic,
    cgegis: req.body.cgegis,
    da: req.body.da,
    cghs: req.body.cghs,
    hra: req.body.hra,
    itrec: req.body.itrec,
    ta: req.body.ta,
    itcess: req.body.itcess,
    daonta: req.body.daonta,
    ptrec: req.body.ptrec,
    effectivedate: req.body.effectivedate,
    creator: req.userData.userId,
    
  });
  console.log(itnewemp);
 // console.log(req.body);
 itnewemp.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'IT New Employee added successfully',
  });

  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Creating a IT New Employee Failed!"
    });
  });
};

exports.updateItnewemp = (req, res, next) => {
  const itnewemp = new Itnewemp({
    _id: req.body.id,
    month: req.body.month,
    year: req.body.year,
    empno: req.body.empno,
    empname: req.body.empname,
    designation: req.body.designation,
    emptype: req.body.emptype,
    group: req.body.group,
    basictype: req.body.basictype,

    paylevel: req.body.paylevel,
    cellno: req.body.cellno,
    gpf: req.body.gpf,
    cpsrec: req.body.cpsrec,
    basic: req.body.basic,
    cgegis: req.body.cgegis,
    da: req.body.da,
    cghs: req.body.cghs,
    hra: req.body.hra,
    itrec: req.body.itrec,
    ta: req.body.ta,
    itcess: req.body.itcess,
    daonta: req.body.daonta,
    ptrec: req.body.ptrec,
    effectivedate: req.body.effectivedate,

  });
  console.log(itnewemp);
  Itnewemp.updateOne({_id: req.params.id }, itnewemp)
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
      message: "Couldn't updated IT New Employee!"
    });
  });
};

exports.getItnewemps = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const itnewempQuery = Itnewemp.find();
  let fetchedItnewemps;
  if (pageSize && currentPage) {
    itnewempQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  itnewempQuery
    .then(documents => {
    fetchedItnewemps = documents;
    return Itnewemp.count();
  })
    .then(count => {
      res.status(200).json({
        message: "IT New Employee fetched successfully!",
        itnewemps: fetchedItnewemps,
        maxItnewemps: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching IT New Employee Failed!"
      });
    });
  };

  exports.getItnewemp = (req, res, next) => {
    Itnewemp.findById(req.params.id).then(itnewemp => {
     if (itnewemp) {
       console.log(itnewemp);
       res.status(200).json(itnewemp);
     }
     else {
       res.status(404).json({ message: 'IT New Employee not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching IT New Employee Failed!"
     });
  });
 };