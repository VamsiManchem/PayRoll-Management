const Emptype = require("../models/emptypemodel");



exports.createEmptype = (req, res, next) => {
  const emptype = new Emptype({
    title: req.body.title,
    creator: req.userData.userId
  });
  console.log(emptype);
  emptype.save().then(result => {
    res.status(201).json({
      message: 'Employee Type added successfully',
  });

  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a Employee Type Failed!"
    });
  });
};

exports.updateEmptype = (req, res, next) => {
  const emptype = new Emptype({
    _id: req.body.id,
    title: req.body.title,
  });
  console.log(emptype);
  Emptype.updateOne({_id: req.params.id }, emptype)
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
      message: "Couldn't updated employee type!"
    });
  });
};

exports.getEmptypes = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const emptypeQuery = Emptype.find();
  let fetchedEmptypes;
  if (pageSize && currentPage) {
    emptypeQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  emptypeQuery
    .then(documents => {
    fetchedEmptypes = documents;
    return Emptype.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Employee Types fetched successfully!",
        emptypes: fetchedEmptypes,
        maxEmptypes: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Employee Types Failed!"
      });
    });
  };

  exports.getEmptype = (req, res, next) => {
    debugger;
    Emptype.findById(req.params.id).then(emptype => {
      
     if (emptype) {
       res.status(200).json(emptype);
     }
     else {
       res.status(404).json({ message: 'Employee Type not found!'});
     }
    })
    .catch(error => {
      console.log(error);
     res.status(500).json({
       message: "Fetching Employee Type Failed!"
     });
  });
 };

 exports.deleteEmptype = (req, res, next) => {
    Emptype.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Employee Type deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Employee Types deleted Failed!"
   });;
 });
}
