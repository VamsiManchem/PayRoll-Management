const Loan = require("../models/loanmodel");



exports.createLoan = (req, res, next) => {
    const loan = new Loan({
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      creator: req.userData.userId
    });
    console.log(loan);
    loan.save().then(result => {
      res.status(201).json({
        message: 'Loan added successfully',
    });
  
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a Loan Failed!"
      });
    });
  };
exports.updateLoan = (req, res, next) => {
  const loan = new Loan({
    _id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    creator: req.userData.userId
  });
  console.log(loan);
  Loan.updateOne({_id: req.params.id }, loan)
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
      message: "Couldn't updated Loan!"
    });
  });
};

exports.getLoans = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const loanQuery = Loan.find();
  let fetchedLoans;
  if (pageSize && currentPage) {
    loanQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  loanQuery
    .then(documents => {
    fetchedLoans = documents;
     return Loan.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Loans fetched successfully!",
        loans: fetchedLoans,
        maxLoans: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Loans Failed!"
      });
    });
  };

  exports.getLoan = (req, res, next) => {
    Loan.findById(req.params.id).then(loan => {
     if (loan) {
       res.status(200).json(loan);
     }
     else {
       res.status(404).json({ message: 'Loan not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching Loans Failed!"
     });
  });
 };

 exports.deleteLoan = (req, res, next) => {
  Loan.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Loan deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Loans deleted Failed!"
   });;
 });
}
