const mongoose = require('mongoose');

const deptSchema = mongoose.Schema({
  title: { type: String, required: true },
  //content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('DeptModel', deptSchema);
