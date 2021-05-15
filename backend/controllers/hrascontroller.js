const Hra = require("../models/hramodel");



exports.createHra = (req, res, next) => {
  const hra = new Hra({
    title: req.body.title,
    creator: req.userData.userId
  });
  console.log(hra);
  hra.save().then(result => {
    res.status(201).json({
      message: 'HRA added successfully',
  });

  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a HRA Failed!"
    });
  });
};

exports.updateHra = (req, res, next) => {
  const hra = new Hra({
    _id: req.body.id,
    title: req.body.title,
  });
  console.log(hra);
  Hra.updateOne({_id: req.params.id }, hra)
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
      message: "Couldn't updated HRA!"
    });
  });
};

exports.getHras = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const hraQuery = Hra.find();
  let fetchedHras;
  if (pageSize && currentPage) {
    hraQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  hraQuery
    .then(documents => {
    fetchedHras = documents;
     return Hra.count();
  })
    .then(count => {
      res.status(200).json({
        message: "HRA fetched successfully!",
        hras: fetchedHras,
        maxHras: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching HRA Failed!"
      });
    });
  };

  exports.getHra = (req, res, next) => {
    Hra.findById(req.params.id).then(hra => {
     if (hra) {
       res.status(200).json(hra);
     }
     else {
       res.status(404).json({ message: 'HRA not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching HRA Failed!"
     });
  });
 };

 exports.deleteHra = (req, res, next) => {
  Hra.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "HRA deleted!" });
  })
  .catch(error => {
   res.status(500).json({
     message: "HRA deleted Failed!"
   });;
 });
}
