const express = require('express');
const router = express.Router();

router.get("/", async(req, res, next)=>{
    // console.log(req.query.err);

    if(req.query.err){
        console.log(req.query.err)
        return res.render('index', {errMsg:req.query.err})
    }
    return res.render('index',{errMsg:""});
})

router.get("/responsing", (req, res, next)=>{
    res.render("responsing");

    
})
module.exports = router