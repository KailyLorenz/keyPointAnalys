const express = require("express");

const userController = require('./../controlers/userController')

const router = express.Router();


router.post(
    '/contactMe',
    userController.contactMe,
)

module.exports = router
