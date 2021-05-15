const mongoose = require('mongoose');

const loanissueSchema = mongoose.Schema({
  
  empno: { type: Number, required: true },
  empname: { type: String, required: true },
  designation: { type: String, required: true },
  emptype: { type: String, required: true },
  group: { type: String, required: true },
  basicpay: { type: Number, required: true },
  
  selectloan: { type: String, required: true },
  loantype: { type: String, required: true },
  loanamount: { type: Number, required: true },
  noofinsta: { type: Number, required: true },
  instaamount: { type: Number, required: true },
  allrec: { type: String, required: true },
  balance: { type: Number, required: true },


  lastinstano: { type: Number, required: true },
  paiddate: { type: Date, required: true },
  remarks: { type: String, required: true },
  effctivedate: { type: Date, required: true },
  status: { type: String, required: true },

  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Loanissue', loanissueSchema);
