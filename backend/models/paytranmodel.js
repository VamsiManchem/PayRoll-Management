const mongoose = require('mongoose');

const paytransSchema = mongoose.Schema({
  Year: { type: Date, required: true },
  Month: { type: String, required: true },
  EmpRecord:{type:Array}
 // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Paytrans', paytransSchema);
