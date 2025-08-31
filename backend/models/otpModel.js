const { model, Schema } = require("mongoose");

const otpUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,

    },

    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    role :{
     type : String,
     enum:["ADMIN","USER"],
     default:"USER",
    },


   phoneOtp:String


  },
  { timestamps: true }
);

module.exports = model("OtpUser", otpUserSchema);
