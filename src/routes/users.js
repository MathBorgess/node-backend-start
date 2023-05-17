const express = require("express");
const UserController = require("../controller/user.js");
const controller = new UserController();

const router = express.Router();

router.post("/", async (req, res) => {
  res.json(controller.pay(req.body.userProps, req.body.itemToPay));
});
router.post("/transference", async (req, res) => {
  res.json(
    controller.transference(
      req.body.donatorProps,
      req.body.recieverProps,
      req.body.tranferValue
    )
  );
});

module.exports = router;
