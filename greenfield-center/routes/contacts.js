const express = require('express');
const router = express.Router();

router.get("/contact", (req, res) => {
  res.json({
    email: "balu@gmail.com",
    phone: "+91 9876543XXXX"
  });
});

module.exports = router;
