// const {} =require('express');
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  bgUrl: {
    type: String,
    required: false,
    default: "",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.includes("@gmail.com");
      },
      message: "Email must contain @",
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: "Password must be at least 6 characters long",
    },
  },
  rePassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
    select: false,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 8;
      },
      message: "Phone number must be 8 characters long",
    },
  },
  follow: {
    type: Array,
    default: [],
  },
  address: {
    type: String,
    required: false,
    default: "",
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
