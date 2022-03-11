const express = require('express');
const Hometax = require('../modules/hometax')
const base64Encoding = require('../common/commonFunc')
const router = express.Router();
router.post("/login", async(req, res, next)=>{

    const userName=   base64Encoding(req.body.userName);
    const userPhone=  req.body.phoneNum;
    const birth=   req.body.birth;
    const userSsn2=   base64Encoding(req.body.ssn2);

    const result = await Hometax.prototype.간편로그인(userName, userPhone, birth,userSsn2);

    if(!result.resultCode){
        next(result);
    }

    if(result.resultCode === '200'){
        // console.log("로그인 성공")
        // res.status = 301
        const data = JSON.stringify(result);
        res.render("responsing", {postData: data});
    }else{
        console.log('로그인 실패');
        res.redirect('/')
    }

})
router.post("/okResponse", async(req, res, next)=>{
    console.log('/okResponse access');
    const result = await Hometax.prototype.로그인완료(req.body.postData);
    console.log(result)
    if(result['resultCode'] === "200"){
        console.log("로그인 진짜 성공")
    }else if(result['resultCode'] === "402"){
        return res.redirect('/');
    }
})
module.exports = router