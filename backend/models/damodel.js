const mongoose = require('mongoose');

const daSchema = mongoose.Schema({
  title: { type: Number, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Da', daSchema);
