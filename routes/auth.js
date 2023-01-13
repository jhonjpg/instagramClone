const express = require('express');
const { newAccount, confirmAcc, loginAccount } = require('../controller/registerController');
const router = express.Router()




// GET ROUTES
router.get("/", (req, res) => {

    res.render("login")

});


router.get("/confirm/:token", confirmAcc)



router.get("/register", (req, res) => {

    res.render("register")

});


router.get("/profile", (req, res) => {

    res.render("profile")

});


// POST ROUTES


router.post("/register", newAccount);

router.post("/login", loginAccount);




module.exports = router