const Desig = require("../models/desigmodel");



exports.createDesig = (req, res, next) => {
  const desig = new Desig({
    title: req.body.title,
    content: req.body.content,
    //creator: req.userData.userId
  });
  console.log(desig);
  desig.save().then(result => {
    res.status(201).json({
      message: 'Designation added successfully',
  });

  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a Designation Failed!"
    });
  });
};

exports.updateDesig = (req, res, next) => {
  const desig = new Desig({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
   //creator: req.userData.userId
  });
  console.log(desig);
  Desig.updateOne({_id: req.params.id }, desig)
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
      message: "Couldn't updated designation!"
    });
  });
};

exports.getDesigs = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const desigQuery = Desig.find();
  let fetchedDesigs;
  if (pageSize && currentPage) {
    desigQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  desigQuery
    .then(documents => {
    fetchedDesigs = documents;
     return Desig.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Designations fetched successfully!",
        desigs: fetchedDesigs,
        maxDesigs: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Designations Failed!"
      });
    });
  };

  exports.getDesig = (req, res, next) => {
    Desig.findById(req.params.id).then(desig => {
     if (desig) {
       res.status(200).json(desig);
     }
     else {
       res.status(404).json({ message: 'Designation not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching Designations Failed!"
     });
  });
 };

 exports.deleteDesig = (req, res, next) => {
  Desig.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Designation deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "DDesignations deleted Failed!"
   });;
 });
}
