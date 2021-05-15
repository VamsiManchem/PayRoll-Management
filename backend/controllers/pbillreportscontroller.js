
const Emp = require("../models/pbillreportmodel");


exports.createPbillreport = (req, res, next) => {
  

  const pbillreport = new Pbillreport({
    _id: req.body.id,
    Year: req.body.Year,
    Month: req.body.Month,
    basictype: req.body.basictype,
    emptype: req.body.emptype,
    /* empno: req.body.empno, */

  });
  console.log(pbillreport);
  Emp.updateOne({_id: req.params.id }, pbillreport)
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
      message: "Couldn't generate pay bill report!"
    });
  });
};

exports.getPbillreport = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const pbillreportQuery = Pbillreport.find();
  let fetchedPbillreports;
  if (pageSize && currentPage) {
    pbillreportQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  pbillreportQuery
    .then(documents => {
    fetchedPbillreports = documents;
    return Pbillreport.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Pay Bill Reports fetched successfully!",
        pbillreports: fetchedPbillreports,
        maxPbillreports: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Pay Bill Report Failed!"
      });
    });
  };

  exports.getPbillreport = (req, res, next) => {
    Pbillreport.findById(req.params.id).then(pbillreport => {
     if (pbillreport) {
       console.log(pbillreport);
       res.status(200).json(pbillreport);
     }
     else {
       res.status(404).json({ message: 'Pay Bill Report not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching Pay Bill Report Failed!"
     });
  });
 };

 


 exports.deletePbillreport = (req, res, next) => {
  Pbillreport.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Pay Bill Report deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Pay Bill Report deleted Failed!"
   });;
 });
}
