const Basictype = require("../models/basictypemodel");



exports.createBasictype = (req, res, next) => {
  const basictype = new Basictype({
    title: req.body.title,
    creator: req.userData.userId
  });
  console.log(basictype);
  basictype.save().then(result => {
    res.status(201).json({
      message: 'Basic Type added successfully',
  });

  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a Basic Type Failed!"
    });
  });
};

exports.updateBasictype = (req, res, next) => {
  const basictype = new Basictype({
    _id: req.body.id,
    title: req.body.title,
  });
  console.log(basictype);
  Basictype.updateOne({_id: req.params.id }, basictype)
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
      message: "Couldn't updated basic type!"
    });
  });
};

exports.getBasictypes = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const basictypeQuery = Basictype.find();
  let fetchedBasictypes;
  if (pageSize && currentPage) {
    basictypeQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  basictypeQuery
    .then(documents => {
    fetchedBasictypes = documents;
    return Basictype.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Basic Types fetched successfully!",
        basictypes: fetchedBasictypes,
        maxBasictypes: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Basic Types Failed!"
      });
    });
  };

  exports.getBasictype = (req, res, next) => {
    Basictype.findById(req.params.id).then(basictype => {
     if (basictype) {
       res.status(200).json(basictype);
     }
     else {
       res.status(404).json({ message: 'Basic Type not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching Basic Type Failed!"
     });
  });
 };

 exports.deleteBasictype = (req, res, next) => {
    Basictype.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Basic Type deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Basic Types deleted Failed!"
   });;
 });
}
