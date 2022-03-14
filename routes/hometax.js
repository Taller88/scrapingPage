const express = require('express');
const Hometax = require('../modules/hometax')
const {base64Encoding} = require('../common/commonFunc')
const router = express.Router();
router.post("/login", async(req, res, next)=>{
    try{
       
        
        const userName=   base64Encoding(req.body.userName);
        const userPhone=  req.body.phoneNum;
        const birth=   req.body.birth;
        
        const result = await Hometax.prototype.간편로그인(userName, userPhone, birth);
        console.log("*********")
        console.log(result);
        if(!result.resultCode){
            next(result);
        }

        if(result['resultCode'] === '200'){
            const data = JSON.stringify(result);
            res.render("responsing", {postData: data});
        }else if(result['resultCode'] === '401'){
            res.redirect("/?err=invalidInfo");
        }else{
            console.log('로그인 실패');
            res.redirect('/')
        }
    }catch(err){
        console.log("[hometax router] /login")
        next(err)
    }

})
router.post("/okResponse", async(req, res, next)=>{
    try{
     
    
        console.log('/okResponse access');
        const result = await Hometax.prototype.로그인완료(req.body.postData);
        console.log(result);
        if(result['resultCode'] === 200){
            console.log("로그인 진짜 성공");
            const fIndex = result['clientMessage'].indexOf('<userNm>')+8
            const bIndex = result['clientMessage'].indexOf('</userNm>')

            const checkName = result['clientMessage'].substring(fIndex,bIndex)
            return res.render('hometaxMenu',{user:checkName});
        }else if(result['resultCode'] === 402){
            console.log(result['clientMessage']);
            return res.redirect("/?err=notComplete")
            // return res.render('index', {errMsg:"인증미완료"});
        }else{
        }
    }catch(err){
        console.log("[hometax router] /okResponse")
        next(err)
    }

});
router.get("/cashReceipt", async(req, res, next)=>{
    try{
        return res.render('hometaxMenu',{errMsg: req.query.errMsg});    
    }catch(err){
        console.log("[hometax router] /cashReceipt")
        next(err)
    }
    
});
router.post("/cashReceipt", async(req, res, next)=>{
    try{

        console.log("현금영수증 월별 사용내역조회");
        const month = Number(req.params.month);
        const lastDay =new Date(2022, month,0).getDate();
        var result = await Hometax.prototype.현금영수증월별사용내역조회(month, lastDay);
        console.log(result['status']);
        if(result['status']=== 402){
            return res.redirect('/hometax/cashReceipt?errMsg='+encodeURIComponent(result['errMsg']));
        }
    }catch(err){
        console.log("[hometax router] /cashReceipt- POST")
        next(err)
    }
});



module.exports = router