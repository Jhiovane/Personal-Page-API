const mongoose = require("mongoose");
const PortfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type:String,
    required:true
  },
  image_url: {
      type:String,
      required:false,
      default:"https://github.com/Jhiovane/Portfolio/blob/master/public/assets/exclamation.png?raw=true"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Portfolio", PortfolioSchema);

