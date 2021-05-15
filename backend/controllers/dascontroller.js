const Da = require("../models/damodel");

exports.createDa = (req, res, next) => {
  const da = new Da({
    title: req.body.title,
    creator: req.userData.userId
  });
  console.log(da);
  da.save().then(result => {
    res.status(201).json({
      message: 'DA added successfully',
  });

  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a DA Failed!"
    });
  });
};

exports.updateDa = (req, res, next) => {
  const da = new Da({
    _id: req.body.id,
    title: req.body.title,
  });
  console.log(da);
  Da.updateOne({_id: req.params.id }, da)
  .then(result => {
      if (result.n > 0) {
      res.status(200).json({ message: 'Update Successful!' });
    }
    else {
      res.status(401).json({ message: 'Not Authorized!' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Couldn't updated DA!"
    });
  });
};

exports.getDas = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  debugger;
  //console.log(error);
  const daQuery = Da.find();
  let fetchedDas;
  debugger;
  //
  if (pageSize && currentPage) {
    daQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  daQuery
    .then(documents => {
    fetchedDas = documents;
     return Da.count();
  })
    .then(count => {
      res.status(200).json({
        message: "DA fetched successfully!",
        das: fetchedDas,
        maxDas: count
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Fetching DA Failed!"
      });
    });
  };

  exports.getDa = (req, res, next) => {
    Da.findById(req.params.id).then(da => {
     if (da) {
       res.status(200).json(da);
     }
     else {
       res.status(404).json({ message: 'DA not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching DA Failed!"
     });
  });
 };

 exports.deleteDa = (req, res, next) => {
  Da.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "DA deleted!" });
  })
  .catch(error => {
   res.status(500).json({
     message: "DA deleted Failed!"
   });;
 });
}
