const mongoose = require('mongoose');

const pbillreportSchema = mongoose.Schema({
  //id: { type: String, required: true },
  Year: { type: Date, required: true },
  Month: { type: String, required: true },
  basictype: { type: String, required: true },
  emptype: { type: String, required: true },
  department: { type: String, required: true },
  empno: { type: Number, required: true },
 
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Reports', pbillreportSchema);
