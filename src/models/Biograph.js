const mongoose = require("mongoose");
const BiographSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
      description: {
        type: String,
        required: true
      },
   
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Biograph", BiographSchema);