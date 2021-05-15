const Pmatrix = require("../models/pmatrixmodel");


exports.getPmatrixs = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const pmatrixQuery = Pmatrix.find();
  console.log(pmatrixQuery);
  let fetchedPmatrixs;
  if (pageSize && currentPage) {
    pmatrixQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  pmatrixQuery
    .then(documents => {
    fetchedPmatrixs = documents;
     return Pmatrix.count();
  })
    .then(count => {
      res.status(200).json({
        //message: "Departments fetched successfully!",
        pmatrixs: fetchedPmatrixs,
        maxPmatrixs: count
      });
    })
    .catch(error => {
      res.status(500).json({
        //message: "Fetching departments Failed!"
      });
    });
  };

  exports.getPmatrix = (req, res, next) => {
    Pmatrix.findById(req.params.id).then(pmatrix => {
     if (pmatrix) {
       res.status(200).json(pmatrix);
     }
     else {
       res.status(404).json({ message: 'Not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching Failed!"
     });
  });
 };

 /* exports.deletePmatrix = (req, res, next) => {
  Pmatrix.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Paymatrix deleted!" });
   })
  .catch(error => {
   res.status(500).json({
     message: "Paymatrixs deleted Failed!"
   });;
 });
} */

