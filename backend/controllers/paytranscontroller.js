const Paytrans = require("../models/paytranmodel");
const Emp = require("../models/empmodel");
const EmpController = require("../controllers/empscontroller");


exports.createPaytrans = (req, res, next) => {
  
const empQuery1 = Emp.find();
let fetchedEmps;
empQuery1
  .then(documents => {
  fetchedEmps = documents;
  const paytrans = new Paytrans({
    _id: req.body.id,
    Year: req.body.Year,
    Month: req.body.Month,
    EmpRecord : fetchedEmps,
  });
  paytrans.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Pay Transaction added successfully',
  });

  })

})
  .catch(error => {
    res.status(500).json({
      message: "Fetching Employee Failed!"
    });
  });
  };

exports.getPaytrans = (req, res, next) => {

  const payQuery = Paytrans.find();
  let fetchedEmpsPay;
  payQuery
    .then(documents => {
      fetchedEmpsPay = documents;
      return Paytrans.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Records fetched successfully!",
        paytrans: fetchedEmpsPay,
        maxPaytrans: count
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Records Employee Failed!"
      });
    });



 /*    Paytrans.find().then(paytrans => {
     if (paytrans) {
      console.log(paytrans);
       res.status(200).json(paytrans);
     }
     else {
       res.status(404).json({ message: 'PT not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching PT Failed!"
     });
  }); */
 };