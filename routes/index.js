const express = require('express');
const router = express.Router();

router.get("/", async(req, res, next)=>{
    res.render('index');
})

router.get("/responsing", (req, res, next)=>{
    res.render("responsing");

    
})
module.exports = router