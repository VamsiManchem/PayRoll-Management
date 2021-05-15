
const Loanissue = require("../models/loanissuemodel");


exports.createLoanissue = (req, res, next) => {
  

  const loanissue = new Loanissue({
    _id: req.body.id,
    empno: req.body.empno,
    empname: req.body.empname,
    designation: req.body.designation,
    emptype: req.body.emptype,
    group: req.body.group,
    basicpay: req.body.basicpay,

    selectloan: req.body.selectloan,
    loantype: req.body.loantype,
    loanamount: req.body.loanamount,
    noofinsta: req.body.noofinsta,
    instaamount: req.body.instaamount,
    allrec: req.body.allrec,
    balance: req.body.balance,
    
    lastinstano: req.body.lastinstano,
    paiddate: req.body.paiddate,
    remarks: req.body.remarks,
    effectivedate: req.body.effectivedate,
    status: req.body.status,
   // creator: req.userData.userId
  });
  console.log(loanissue);
 // console.log(req.body);
 loanissue.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Loan Issue added successfully',
  });

  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Creating a Loan Issue Failed!"
    });
  });
};

exports.updateLoanissue = (req, res, next) => {
  const loanissue = new Loanissue({
    _id: req.body.id,
    empno: req.body.empno,
    empname: req.body.empname,
    designation: req.body.designation,
    emptype: req.body.emptype,
    group: req.body.group,
    basicpay: req.body.basicpay,

    selectloan: req.body.selectloan,
    loantype: req.body.loantype,
    loanamount: req.body.loanamount,
    noofinsta: req.body.noofinsta,
    instaamount: req.body.instaamount,
    allrec: req.body.allrec,
    balance: req.body.balance,
    
    lastinstano: req.body.lastinstano,
    paiddate: req.body.paiddate,
    remarks: req.body.remarks,
    effectivedate: req.body.effectivedate,
    status: req.body.status,
  });
  console.log(loanissue);
  Loanissue.updateOne({_id: req.params.id }, loanissue)
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
      message: "Couldn't updated Loan Issue!"
    });
  });
};

exports.getLoanissues = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const loanissueQuery = Loanissue.find();
  let fetchedLoanissues;
  if (pageSize && currentPage) {
    loanissueQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  loanissueQuery
    .then(documents => {
    fetchedLoanissues = documents;
    return Loanissue.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Loan Issue fetched successfully!",
        loanissues: fetchedLoanissues,
        maxLoanissues: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Loan Issue Failed!"
      });
    });
  };

  exports.getLoanissue = (req, res, next) => {
    Loanissue.findById(req.params.id).then(loanissue => {
     if (loanissue) {
       console.log(loanissue);
       res.status(200).json(loanissue);
     }
     else {
       res.status(404).json({ message: 'Loan Issue not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching Loan Issue Failed!"
     });
  });
 };

 exports.deleteLoanissue = (req, res, next) => {
    Loanissue.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Loan Issue deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Loan Issue deleted Failed!"
   });;
 });
}
