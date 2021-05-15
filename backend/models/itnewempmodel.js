const mongoose = require('mongoose');

const itnewempSchema = mongoose.Schema({
    //Employee Details//
  month: {type: Date, required: true },
  year: {type: Date, required: true },
  empno: { type: Number, required: true },
  empname: { type: String, required: true },
  designation: { type: String, required: true },
  emptype: { type: String, required: true },
  group: { type: String, required: true },
  basictype: { type: String, required: true },
  
    //Suplee Payments//
  paylevel: { type: String, required: true },
  cellno: { type: Number, required: true },
  gpf: { type: Number, required: true },
  cpsrec: { type: Number, required: true },
  basic: { type: Number, required: true },
  cgegis: { type: Number, required: true },
  da: { type: Number, required: true },
  cghs:{ type: Number, required: true },
  hra: { type: Number, required: true },
  itrec:{ type: Number, required: true },
  ta: { type: Number, required: true },
  itcess: { type: Number, required: true },
  daonta: { type: Number, required: true },
  ptrec:{ type: Number, required: true },
  effectivedate: { type: Date, required: true, default: Date.now  },

  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Itnewemp', itnewempSchema);
