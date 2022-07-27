const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 10,
  },
  country: {
    type: String,
    required: true,
  },
});

const ContactModel = mongoose.model("contactModel", contactSchema);

module.exports = ContactModel;