
exports.base64Encoding=(text)=>{
    var base64EncodedText = Buffer.from(text,"utf8").toString('base64');
    return base64EncodedText;
}

exports.cookieParser=(res)=>{
    var cookies = "";
    if(res.headers['set-cookie']){
        var cookieArr = res.headers['set-cookie'];
        for(var i =0; i<cookieArr.length; i++){
            cookies+=cookieArr[i].substring(0, cookieArr[i].indexOf(";"))+";"
        }    
    }

    return cookies;
}
