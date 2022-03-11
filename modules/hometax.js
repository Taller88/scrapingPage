const axios = require('axios');

function Hometax(){};
// Hometax.prototype = Object.create()
Hometax.prototype.간편로그인 = async function(userName, userPhone, birth,userSsn2){
    console.log("Hometax 로그인");
    this.host = "https://www.hometax.go.kr";
    this.header = {};

    
    this.header['Connection'] = 'keep-alive'
    this.header['Content-Length'] = '0'
    this.header['sec-ch-ua'] = '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['Accept'] = 'application/json; charset=utf-8'
    this.header['Content-Type'] = 'application/json; charset=utf-8'
    this.header['X-Requested-With'] = 'XMLHttpRequest'
    this.header['sec-ch-ua-mobile'] = '?0'
    this.header['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] = '"Windows"'
    this.header['Origin'] = 'https://www.hometax.go.kr'
    this.header['Sec-Fetch-Site'] = 'same-origin'
    this.header['Sec-Fetch-Mode'] = 'cors'
    this.header['Sec-Fetch-Dest'] = 'empty'
    this.header['Referer'] = 'https://www.hometax.go.kr/oacx/index.jsp?popupType=layer&userType=R&ssn=&userName='
    this.header['Accept-Encoding'] = 'gzip, deflate, br'
    this.header['Accept-Language'] = 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    this.header['Cookie'] = 'WMONID=M0UjDE4J4cR; TXPPsessionID=h17YwBUJFG1ZAq6bHDxs9ZiBybBJsolNTB3JDfuEOtGby0iC70id1xOb70fIaFD4.tupiwsp26_servlet_TXPP02; nts_homtax:zoomVal=100; nts_hometax:pkckeyboard=none; JSESSIONID=GIrfj6YNzyad7QWge41Q4C91AsaH1iTRTnE0e7HWXeITJS1l76uKaCJPzwJd61E8.s_backup_servlet_GPINNEW01'

    try{
        var result = await axios({
            method:'POST',
            url:this.host+"/oacx/api/v1.0/trans",
            data:"",
            headers:this.header
        })
        console.log(result.data)
        const json = result.data;
        const token = json.token;
        const txId = json.txId;

        // POST https://www.hometax.go.kr HTTP/1.1
        
        this.header = {};
        this.header['Connection'] = 'keep-alive'
        // this.header['Content-Length'] = '1010'
        this.header['sec-ch-ua'] = '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
        this.header['Accept'] = 'application/json; charset=utf-8'
        this.header['Content-Type'] = 'application/json; charset=UTF-8'
        this.header['X-Requested-With'] = 'XMLHttpRequest'
        this.header['sec-ch-ua-mobile'] = '?0'
        this.header['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
        this.header['sec-ch-ua-platform'] = '"Windows"'
        this.header['Origin'] = 'https://www.hometax.go.kr'
        this.header['Sec-Fetch-Site'] = 'same-origin'
        this.header['Sec-Fetch-Mode'] = 'cors'
        this.header['Sec-Fetch-Dest'] = 'empty'
        this.header['Referer'] = 'https://www.hometax.go.kr/oacx/index.jsp?popupType=layer&userType=R&ssn=&userName='
        this.header['Accept-Encoding'] = 'gzip, deflate, br'
        this.header['Accept-Language'] = 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
        // Cookie: WMONID=M0UjDE4J4cR; TXPPsessionID=h17YwBUJFG1ZAq6bHDxs9ZiBybBJsolNTB3JDfuEOtGby0iC70id1xOb70fIaFD4.tupiwsp26_servlet_TXPP02; nts_homtax:zoomVal=100; nts_hometax:pkckeyboard=none; JSESSIONID=GIrfj6YNzyad7QWge41Q4C91AsaH1iTRTnE0e7HWXeITJS1l76uKaCJPzwJd61E8.s_backup_servlet_GPINNEW01
       

       this.postData = {"providerId":"kakao","isBirth":true,"reqTxId":"","deeplinkUri":"","naverAppSchemeUrl":"","telcoTxid":"","provider":"kakao_v1.5","token":token,"txId":txId,"cxId":"","appInfo":{"code":"","path":"","type":""},"userInfo":{"isMember":false,"name":userName,"phone":userPhone,"ssn1":"","ssn2":"","birthday":birth,"privacy":1,"terms":0,"policy3":0,"policy4":1,"telcoTycd":null,"access_token":"","token_type":"","state":""},"deviceInfo":{"code":"PC","browser":"WB","os":""},"contentInfo":{"signTarget":"","signType":"GOV_SIMPLE_AUTH","requestTitle":"","requestContents":""},"providerOptionInfo":{"callbackUrl":"","reqCSPhoneNo":"1","upmuGb":"","isUseTss":"Y","isNotification":"Y","isPASSVerify":"Y","isUserAgreement":"Y"},"compareCI":false}

    //    console.log(this.postData);
       result = await axios({
        method: 'post',
        url: this.host+"/oacx/api/v1.0/authen/request",
        data:this.postData,
        headers:this.header
        });
        // console.log(result);
        // console.log(result.data);
        result.data['userName'] = userName;
        result.data['userPhone'] = userPhone;
        result.data['birth'] = birth;
        console.log(result);
        return result.data;
    }catch(err){
        console.error(err);

        return err
        // next(err)// next(없음)
    }

    // try{
    //     var result = await axios({
    //         method: 'post',
    //         url: "https://www.hometax.go.kr/gpin/v1/request_tx",
    //         data:{
    //             params:{
    //                 signTarget:''
    //             }
    //         },
    //         headers:{

    //         }
    //     });

    //     console.log("reqTxId: "+ result.data.reqTxId);

    //     var reqTxId = result.data.reqTxId;
    //     this.reqTxTest = reqTxId;
    //     var postData = "reqTxId="+reqTxId+"&popupType=layer&userType=R&ssn=&userName=";

    //     var result = await axios({
    //         method: 'post',
    //         url: "https://www.hometax.go.kr/gpin/easy-login",
    //         data:postData,
    //         headers:{
    //             'Host' : 'www.hometax.go.kr',
    //             'Connection' : 'keep-alive',
    //             'Cache-Control' : 'max-age=0',
    //             'sec-ch-ua' : '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
    //             'sec-ch-ua-mobile' : '?0',
    //             'sec-ch-ua-platform' : '"Windows"',
    //             'Upgrade-Insecure-Requests' : '1',
    //             'Origin' : 'https://www.hometax.go.kr',
    //             'Content-Type' : 'application/x-www-form-urlencoded',
    //             'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
    //             'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //             'Sec-Fetch-Site' : 'same-origin',
    //             'Sec-Fetch-Mode' : 'navigate',
    //             'Sec-Fetch-Dest' : 'iframe',
    //             // 'Referer' : "https://www.hometax.go.kr/websquare/popup.html?w2xPath=/ui/comm/a/d/UTECMADA02.xml&layerPopup=Y&popupID=UTECMADA02&w2xHome=/ui/pp/&'w2xDocumentRoot=",
    //             'Accept-Encoding' : 'gzip, deflate, br',
    //             'Accept-Language' : 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
    //         }
    //     });

    //     var cookieArr = result.headers["set-cookie"];
    //     var cookie = "";
    //     for(var i=0; i<cookieArr.length; i++){
    //         cookie += cookieArr[i];
    //     }
    //     console.log("cookie: "+ cookie);
    //     this.cookieValue = cookie;
        
    //     var postData = '{"idn":"","userInfo":{"isMember":false,"name":"'+userName+'","phoneNumber":"'+userPhone+'","ssn1":"'+userSsn1+'","ssn2":"'+userSsn2+'","birthday":"","privacy":"1","terms":"1","policy3":"1","policy4":"1"},"provider":"kakao"}'

    //     // 모바일로 요청
    //     var result = await axios({
    //         method: 'post',
    //         url: "https://www.hometax.go.kr/gpin/v1/certification/notice?reqTxId="+reqTxId,
    //         data:postData,
    //         headers:{
    //             'Connection' : 'keep-alive'
    //             ,'sec-ch-ua' : ' "Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
    //             ,'sec-ch-ua-mobile' : ' ?0'
    //             ,'User-Agent' : ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
    //             ,'sec-ch-ua-platform' : ' "Windows"'
    //             ,'Content-type' : 'application/json'
    //             ,'Accept' : '*/*'
    //             ,'Origin' : 'https://www.hometax.go.kr'
    //             ,'Sec-Fetch-Site' : 'same-origin'
    //             ,'Sec-Fetch-Mode' : 'cors'
    //             ,'Sec-Fetch-Dest' : 'empty'
    //             ,'Referer' : 'https://www.hometax.go.kr/gpin/easy-login'
    //             ,'Accept-Encoding' : 'gzip, deflate, br'
    //             ,'Accept-Language' : 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    //             ,'Cookie' : cookie
    //         }
    //     });

    //     console.log("***result:"+ result.data.resultCode);
    //     return result.data.resultCode ;

    // }catch(err){
    //     console.log("[module] hometax Error")
    //     console.error(err);
    //     next(err);
    // }

}
Hometax.prototype.로그인완료 = async function(postData){
    const json = JSON.parse(postData);

    
    this.header['Connection'] = 'keep-alive'
    // this.header['Content-Length'] = '1456
    this.header['sec-ch-ua'] = '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['Accept'] = 'application/json; charset=utf-8'
    this.header['Content-Type'] = 'application/json; charset=UTF-8'
    this.header['X-Requested-With'] = 'XMLHttpRequest'
    this.header['sec-ch-ua-mobile'] = '?0'
    this.header['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] = '"Windows"'
    this.header['Origin'] = 'https://www.hometax.go.kr'
    this.header['Sec-Fetch-Site'] = 'same-origin'
    this.header['Sec-Fetch-Mode'] = 'cors'
    this.header['Sec-Fetch-Dest'] = 'empty'
    this.header['Referer'] = 'https://www.hometax.go.kr/oacx/index.jsp?popupType=layer&userType=R&ssn=&userName='
    this.header['Accept-Encoding'] = 'gzip, deflate, br'
    this.header['Accept-Language'] = 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    // Cookie: WMONID=M0UjDE4J4cR; TXPPsessionID=h17YwBUJFG1ZAq6bHDxs9ZiBybBJsolNTB3JDfuEOtGby0iC70id1xOb70fIaFD4.tupiwsp26_servlet_TXPP02; nts_homtax:zoomVal=100; nts_hometax:pkckeyboard=none; JSESSIONID=GIrfj6YNzyad7QWge41Q4C91AsaH1iTRTnE0e7HWXeITJS1l76uKaCJPzwJd61E8.s_backup_servlet_GPINNEW01; NetFunnel_ID=

    this.postData ={"providerId":"kakao","isBirth":true,"reqTxId":json.reqTxId,"deeplinkUri":"","naverAppSchemeUrl":"","telcoTxid":"","provider":"kakao_v1.5","token":json.token,"txId":json.reqTxId,"cxId":json.cxId,"appInfo":{"code":"","path":"","type":""},"userInfo":{"isMember":false,"name":json.userName,"phone":json.userPhone,"ssn1":"","ssn2":"","birthday":json.birth,"privacy":1,"terms":0,"policy3":0,"policy4":1,"telcoTycd":null,"access_token":"","token_type":"","state":""},"deviceInfo":{"code":"PC","browser":"WB","os":""},"contentInfo":{"signTarget":"","signType":"GOV_SIMPLE_AUTH","requestTitle":"","requestContents":""},"providerOptionInfo":{"callbackUrl":"","reqCSPhoneNo":"1","upmuGb":"","isUseTss":"Y","isNotification":"Y","isPASSVerify":"Y","isUserAgreement":"Y"},"compareCI":false}

    result = await axios({
        method: 'post',
        url: this.host+"/oacx/api/v1.0/authen/result",
        data:this.postData,
        headers:this.header
    });

    console.log(result);
    if(result.data.resultCode === '200'){
        console.log('로그인 성공')
        const success = {};
        success['resultCode'] = result.data.resultCode;
        success['clientMessage'] = result.data.clientMessage;
        return success;
    }else if(result.data.resultCode === '402'){
        const err = {};
        err['resultCode'] = result.data.resultCode;
        err['clientMessage'] = result.data.clientMessage;
        
        return err; 
    }
}

module.exports = Hometax;