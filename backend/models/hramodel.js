const mongoose = require('mongoose');

const hraSchema = mongoose.Schema({
  title: { type: Number, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Hra', hraSchema);
