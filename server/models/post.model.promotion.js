const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Promotion = new Schema({
  text: [{
    type: String
  }],
  image: [{
    type: String
  }],
  video:[{
    type: String
  }]
},{
    collection: 'Promotion'
});

module.exports = mongoose.model('Post', Promotion);