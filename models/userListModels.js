'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  first_name: {
    type:String,
    Required: 'Please enter'
  },

  last_name: {
    type:String,
    Required: 'Please enter'
  },
  Created_date:{
    type: Date,
    default: Date.now
  }

});

var zespoly = module.exports = mongoose.model('Users', UserSchema);

module.exports.getGenres = function(callback, limit){
  zespoly.find(callback).limit(limit);
}
