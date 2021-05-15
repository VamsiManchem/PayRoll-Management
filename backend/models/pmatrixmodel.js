const mongoose = require('mongoose');

const pmatrixSchema = mongoose.Schema({
  Cellno: { type: String, required: true },
  Levelno: { type: String, required: true },
  Payband: { type: Number, required: true },
  Gradepay: { type: Number, required: true },
  Basicpay: { type: Number, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Paymatrix', pmatrixSchema);
