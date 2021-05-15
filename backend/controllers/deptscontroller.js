const Dept = require("../models/deptmodel");



exports.createDept = (req, res, next) => {
  const dept = new Dept({
    title: req.body.title,
    //content: req.body.content,
    creator: req.userData.userId
  });
  console.log(dept);
  dept.save().then(result => {
    res.status(201).json({
      message: 'Department added successfully',
  });

  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a Department Failed!"
    });
  });
};

exports.updateDept = (req, res, next) => {
  const dept = new Dept({
    _id: req.body.id,
    title: req.body.title,
    //content: req.body.content,
   // creator: req.userData.userId
  });
  console.log(dept);
  Dept.updateOne({_id: req.params.id }, dept)
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
      message: "Couldn't updated department!"
    });
  });
};

exports.getDepts = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const deptQuery = Dept.find();
  let fetchedDepts;
  if (pageSize && currentPage) {
    deptQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  deptQuery
    .then(documents => {
    fetchedDepts = documents;
     return Dept.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Departments fetched successfully!",
        depts: fetchedDepts,
        maxDepts: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching departments Failed!"
      });
    });
  };

  exports.getDept = (req, res, next) => {
    Dept.findById(req.params.id).then(dept => {
     if (dept) {
       res.status(200).json(dept);
     }
     else {
       res.status(404).json({ message: 'Department not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching departments Failed!"
     });
  });
 };

 exports.deleteDept = (req, res, next) => {
  Dept.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Department deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Departments deleted Failed!"
   });;
 });
}
