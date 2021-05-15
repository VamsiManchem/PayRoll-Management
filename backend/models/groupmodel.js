const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  title: { type: String, required: true },
  //content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Group', groupSchema);
