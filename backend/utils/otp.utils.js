const { response } = require("express");
const fast2sms = require("fast-two-sms");
const { FAST2SMS } = require("../config");


var options = {
  authorization: 'U4t1Cru7ePZwl3nahRL6ix5zdsbcMNjpyS0qVXm9KYk2gTBQ8WLTHNvnr3CDiKMSubgJ7aEky5V9O1WG',
  numbers: ['9999999999', '8888888888'],
  message: 'YOUR_MESSAGE_HERE'
}


fast2sms.sendMessage(options)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })



exports.generateOTP = (otp_length) => {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.fast2sms = async ({ message, contactNumber }, next) => {
  try {
    const res = await fast2sms.sendMessage({
      authorization: FAST2SMS,
      message,
      numbers: [contactNumber],
    });
    // console.log(res);
  } catch (error) {
    next(error);
  }
};