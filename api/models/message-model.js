'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = new Schema({
   title: {
      type: String
   },
   body: {
      type: String
   },
   created_date: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Messages', messageSchema);
