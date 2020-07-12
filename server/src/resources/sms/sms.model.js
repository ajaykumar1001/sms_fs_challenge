const mongoose = require('mongoose');

const { Schema } = mongoose;

const SmsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status : {
    type: String,
    enum : ['Seldom','Never','Often','Once','Daily','Weekly','Monthly','Yearly'],
    required: true,
  },
  color: {
    type: String,
    required: true,
  }
});

export default mongoose.model('sms', SmsSchema);
