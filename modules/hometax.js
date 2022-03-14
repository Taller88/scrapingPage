const axios = require('axios');
const convert = require('xml-js');

const {cookieParser} = require('../common/commonFunc');

function Hometax(){
    // this.cookies ="";
};
// Hometax.prototype = Object.create()
Hometax.prototype.간편로그인 = async function(userName, userPhone, birth){
    this.host = "https://www.hometax.go.kr";
    this.cookies = "";
    console.log("")
    try{
        this.header = {};
        this.header['Connection'] ='keep-alive'
        this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
        this.header['sec-ch-ua-mobile'] ='?0'
        this.header['sec-ch-ua-platform'] ='"Windows"'
        this.header['Upgrade-Insecure-Requests'] ='1'
        this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
        this.header['Accept'] ='text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        this.header['Sec-Fetch-Site'] ='none'
        this.header['Sec-Fetch-Mode'] ='navigate'
        this.header['Sec-Fetch-User'] ='?1'
        this.header['Sec-Fetch-Dest'] ='document'
        this.header['Accept-Encoding'] ='gzip, deflate, br'

        
        var result = await axios({
            method:'GET',
            url:this.host,
            headers:this.header
        });
        
        console.log(cookieParser(result));
        this.cookies = cookieParser(result)+"nts_homtax:zoomVal=100; nts_hometax:pkckeyboard=none"

        console.log("1: "+this.cookies);
        this.header = {};
        this.header['Connection'] ='keep-alive'
        this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
        this.header['sec-ch-ua-mobile'] ='?0'
        this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
        this.header['sec-ch-ua-platform'] ='"Windows"'
        this.header['Accept'] ='*/*'
        this.header['Sec-Fetch-Site'] ='same-origin'
        this.header['Sec-Fetch-Mode'] ='no-cors'
        this.header['Sec-Fetch-Dest'] ='script'
        this.header['Referer'] ='https://www.hometax.go.kr/websquare/popup.html?w2xPath=/ui/comm/a/d/UTECMADA02.xml&layerPopup=Y&popupID=UTECMADA02&w2xHome=/ui/pp/&w2xDocumentRoot='
        this.header['Accept-Encoding'] ='gzip, deflate, br'
        this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
        this.header['Cookie'] = this.cookies

        var result = await axios({
            method:'GET',
            url:this.host+"/oacx/index.jsp?popupType=layer&userType=R&ssn=&userName=",
            headers:this.header
        })
        this.cookies +=cookieParser(result);
   
        console.log("Hometax 로그인");
   
   

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
    this.header['Cookie'] = this.cookies;
   
 
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
        this.header['Cookie'] = this.cookies;
        // Cookie: WMONID=M0UjDE4J4cR; TXPPsessionID=h17YwBUJFG1ZAq6bHDxs9ZiBybBJsolNTB3JDfuEOtGby0iC70id1xOb70fIaFD4.tupiwsp26_servlet_TXPP02; nts_homtax:zoomVal=100; nts_hometax:pkckeyboard=none; JSESSIONID=GIrfj6YNzyad7QWge41Q4C91AsaH1iTRTnE0e7HWXeITJS1l76uKaCJPzwJd61E8.s_backup_servlet_GPINNEW01
       

       this.postData = {"providerId":"kakao","isBirth":true,"reqTxId":"","deeplinkUri":"","naverAppSchemeUrl":"","telcoTxid":"","provider":"kakao_v1.5","token":token,"txId":txId,"cxId":"","appInfo":{"code":"","path":"","type":""},"userInfo":{"isMember":false,"name":userName,"phone":userPhone,"ssn1":"","ssn2":"","birthday":birth,"privacy":1,"terms":0,"policy3":0,"policy4":1,"telcoTycd":null,"access_token":"","token_type":"","state":""},"deviceInfo":{"code":"PC","browser":"WB","os":""},"contentInfo":{"signTarget":"","signType":"GOV_SIMPLE_AUTH","requestTitle":"","requestContents":""},"providerOptionInfo":{"callbackUrl":"","reqCSPhoneNo":"1","upmuGb":"","isUseTss":"Y","isNotification":"Y","isPASSVerify":"Y","isUserAgreement":"Y"},"compareCI":false}

       console.log("test postData:"+this.postData);
       result = await axios({
        method: 'post',
        url: this.host+"/oacx/api/v1.0/authen/request",
        data:this.postData,
        headers:this.header
        });
        console.log("check: "+this.cookies)
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
    console.log("로그인완료: "+this.cookies);

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
    this.header['Cookie'] = this.cookies;
    // Cookie: WMONID=M0UjDE4J4cR; TXPPsessionID=h17YwBUJFG1ZAq6bHDxs9ZiBybBJsolNTB3JDfuEOtGby0iC70id1xOb70fIaFD4.tupiwsp26_servlet_TXPP02; nts_homtax:zoomVal=100; nts_hometax:pkckeyboard=none; JSESSIONID=GIrfj6YNzyad7QWge41Q4C91AsaH1iTRTnE0e7HWXeITJS1l76uKaCJPzwJd61E8.s_backup_servlet_GPINNEW01; NetFunnel_ID=

    this.postData ={"providerId":"kakao","isBirth":true,"reqTxId":json.reqTxId,"deeplinkUri":"","naverAppSchemeUrl":"","telcoTxid":"","provider":"kakao_v1.5","token":json.token,"txId":json.reqTxId,"cxId":json.cxId,"appInfo":{"code":"","path":"","type":""},"userInfo":{"isMember":false,"name":json.userName,"phone":json.userPhone,"ssn1":"","ssn2":"","birthday":json.birth,"privacy":1,"terms":0,"policy3":0,"policy4":1,"telcoTycd":null,"access_token":"","token_type":"","state":""},"deviceInfo":{"code":"PC","browser":"WB","os":""},"contentInfo":{"signTarget":"","signType":"GOV_SIMPLE_AUTH","requestTitle":"","requestContents":""},"providerOptionInfo":{"callbackUrl":"","reqCSPhoneNo":"1","upmuGb":"","isUseTss":"Y","isNotification":"Y","isPASSVerify":"Y","isUserAgreement":"Y"},"compareCI":false}

    result = await axios({
        method: 'post',
        url: this.host+"/oacx/api/v1.0/authen/result",
        data:this.postData,
        headers:this.header
    });
    console.log(result.data);
    if(result.data.resultCode==='402'){
        const err = {};
        err['resultCode'] = Number(result.data.resultCode);
        err['clientMessage'] = result.data.clientMessage;
        
        return err; 
    }

    this.header = {};

    this.header['Connection'] ='keep-alive'
    this.header['Content-Length'] ='886'
    this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['Accept'] ='text/plain, */*; q=0.01'
    this.header['Content-Type'] ='application/x-www-form-urlencoded; charset=UTF-8'
    this.header['X-Requested-With'] ='XMLHttpRequest'
    this.header['sec-ch-ua-mobile'] ='?0'
    this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] ='"Windows"'
    this.header['Origin'] ='https://www.hometax.go.kr'
    this.header['Sec-Fetch-Site'] ='same-origin'
    this.header['Sec-Fetch-Mode'] ='cors'
    this.header['Sec-Fetch-Dest'] ='empty'
    this.header['Referer'] ='https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/comm/a/b/UTXPPABA01.xml&w2xHome=/ui/pp/&w2xDocumentRoot='
    this.header['Accept-Encoding'] ='gzip, deflate, br'
    this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    this.header['Cookie'] = this.cookies;

    const checkReqTxId= result.data.token;
    this.postData = "moisCertYn=Y&newGpinYn=Y&reqTxId="+checkReqTxId+"&ssoStatus=&portalStatus=&scrnId=UTXPPABA01&userScrnRslnXcCnt=1920&userScrnRslnYcCnt=1080";

    result = await axios({
        method: 'post',
        url: this.host+"/pubcLogin.do?domain=hometax.go.kr&mainSys=Y",
        data:this.postData,
        headers:this.header
    });
    this.cookies += cookieParser(result);
    
    this.header = {}
    this.header['Connection'] ='keep-alive'
    this.header['Content-Length'] ='45'
    this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['Accept'] ='application/xml; charset=UTF-8'
    this.header['Content-Type'] ='application/xml; charset=UTF-8'
    this.header['sec-ch-ua-mobile'] ='?0'
    this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] ='"Windows"'
    this.header['Origin'] ='https://www.hometax.go.kr'
    this.header['Sec-Fetch-Site'] ='same-origin'
    this.header['Sec-Fetch-Mode'] ='cors'
    this.header['Sec-Fetch-Dest'] ='empty'
    this.header['Referer'] ='https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/comm/a/b/UTXPPABA01.xml&w2xHome=/ui/pp/&w2xDocumentRoot='
    this.header['Accept-Encoding'] ='gzip, deflate, br'
    this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    this.header['Cookie'] =this.cookies
    
    this.postData = "<map id='postParam'><popupYn></popupYn></map>"

    result = await axios({
        method: 'post',
        url: this.host+"/permission.do?screenId=UTXPPABA01",
        data:this.postData,
        headers:this.header
    });

    this.cookies += cookieParser(result);
    console.log("*****************************************")
    console.log("result.status: "+result.status)
    console.log(result);
    console.log("*****************************************")
    
    if(result.status === 200){
        console.log('로그인 성공')
        const success = {};
        success['resultCode'] = Number(result.status);
        success['clientMessage'] = result.data;
        return success;
    }else if(result.status === 402){
        const err = {};
        err['resultCode'] = Number(result.status);
        err['clientMessage'] = result.data.clientMessage;
        
        return err; 
    }
}

Hometax.prototype.현금영수증월별사용내역조회 = async function(month, lastDay){
    const paramMonth = month>10?month:+"0"+month;
    console.log("현금영수증월별사용내역조회: "+this.cookies);

    console.log("[Module] 현금영수증월별사용내역");
    console.log(this.cookies);
    const tempHost = "https://tecr.hometax.go.kr"
    this.header = {};

    this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['Accept'] ='application/xml; charset=UTF-8'
    this.header['Content-Type'] ='application/xml; charset=UTF-8'
    this.header['sec-ch-ua-mobile'] ='?0'
    this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] ='"Windows"'
    this.header['Origin'] ='https://tecr.hometax.go.kr'
    this.header['Sec-Fetch-Site'] ='same-origin'
    this.header['Sec-Fetch-Mode'] ='cors'
    this.header['Sec-Fetch-Dest'] ='empty'
    this.header['Referer'] ='https://tecr.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/cr/c/b/UTECRCB001.xml'
    this.header['Accept-Encoding'] ='gzip, deflate, br'
    this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    this.header['Cookie'] = this.cookies;
    this.postData = "<map id='postParam'><popupYn>false</popupYn></map>"

    var result = await axios({
        method: 'POST',
        url: tempHost+"/permission.do?screenId=UTECRCB001",
        data:this.postData,
        headers:this.header
    });
    console.log("/permission.do?screenId=UTECRCB001");
    console.log(result.data);

    this.cookies += cookieParser(result);
    // 2022_03_13
    const date = new Date()
    const today = date.getFullYear()+"_"+date.getMonth()+"_"+date.getDate();
    
    // query 고정값인지 확인 필요
    
    this.header ={}
    this.header['Connection'] ='keep-alive'
    this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['sec-ch-ua-mobile'] ='?0'
    this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] ='"Windows"'
    this.header['Accept'] ='*/*'
    this.header['Sec-Fetch-Site'] ='same-site'
    this.header['Sec-Fetch-Mode'] ='no-cors'
    this.header['Sec-Fetch-Dest'] ='script'
    this.header['Referer'] ='https://tecr.hometax.go.kr/'
    this.header['Accept-Encoding'] ='gzip, deflate, br'
    this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'

    
    var result = await axios({
        method: 'GET',
        url: this.host+"/token.do?query=_VNUnlqdZhXHK61XvSHYS&postfix="+today,
        headers:this.header
    });
    console.log("ssotoken")
    
    var fIndex = result.data.indexOf("<ssoToken>");
    var bIndex = result.data.indexOf("</ssoToken>");
    const ssoToken = result.data.substring(fIndex, bIndex);
    console.log(result.data);
    console.log("ssoToken: "+ssoToken);

    this.header = {}
    this.header['Host'] ='tecr.hometax.go.kr'
    this.header['Connection'] ='keep-alive'
    this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['Accept'] ='application/xml; charset=UTF-8'
    this.header['Content-Type'] ='application/xml; charset=UTF-8'
    this.header['sec-ch-ua-mobile'] ='?0'
    this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] ='"Windows"'
    this.header['Origin'] ='https://tecr.hometax.go.kr'
    this.header['Sec-Fetch-Site'] ='same-origin'
    this.header['Sec-Fetch-Mode'] ='cors'
    this.header['Sec-Fetch-Dest'] ='empty'
    this.header['Referer'] ='https://tecr.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/cr/c/b/UTECRCB001.xml'
    this.header['Accept-Encoding'] ='gzip, deflate, br'
    this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    this.header['Cookie'] =this.cookies

    this.postData = "<map id='postParam'><ssoToken>"+ssoToken+"</ssoToken><userClCd>02</userClCd><popupYn>false</popupYn></map>"
    
    var result = await axios({
        method: 'POST',
        url: tempHost+"/permission.do?screenId=UTECRCB001&domain=hometax.go.kr",
        data:this.postData,
        headers:this.header
    });

    this.cookies+=cookieParser(result);
    console.log("this.cookies: "+this.cookies)
    const todayInt = new Date()-0
    
    this.header = {};
    this.header['Host'] ='apct.hometax.go.kr'
    this.header['Connection'] ='keep-alive'
    this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['sec-ch-ua-mobile'] ='?0'
    this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] ='"Windows"'
    this.header['Accept'] ='*/*'
    this.header['Sec-Fetch-Site'] ='same-site'
    this.header['Sec-Fetch-Mode'] ='no-cors'
    this.header['Sec-Fetch-Dest'] ='script'
    this.header['Referer'] ='https://tecr.hometax.go.kr/'
    this.header['Accept-Encoding'] ='gzip, deflate, br'
    this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    this.header['Cookie'] =this.cookies
    var result = await axios({
        method: 'GET',
        url: 'https://apct.hometax.go.kr/ts.wseq?opcode=5101&nfid=0&prefix=NetFunnel.gRtype=5101;&sid=service_2&aid=ATECR_SEARCH&js=yes&'+todayInt,
        headers:this.header
    });
    
    console.log("NetFunnel_ID");
    console.log(result.data);
    fIndex = result.data.indexOf("gControl.result='")+17
    bIndex = result.data.indexOf("';")
    console.log(result.data.substring(fIndex,bIndex))
    this.cookies+='NetFunnel_ID='+encodeURIComponent(result.data.substring(fIndex,bIndex)+";");

    console.log("last this.cookies: "+this.cookies)
    // var common_te_URL = '/js/comm/ui/common_te-min.js?postfix=' + today
    

    // this.header ={}
    // this.header['Connection'] ='keep-alive'
    // this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    // this.header['sec-ch-ua-mobile'] ='?0'
    // this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    // this.header['sec-ch-ua-platform'] ='"Windows"'
    // this.header['Accept'] ='*/*'
    // this.header['Sec-Fetch-Site'] ='same-site'
    // this.header['Sec-Fetch-Mode'] ='no-cors'
    // this.header['Sec-Fetch-Dest'] ='script'
    // // this.header['Referer'] ='https://tecr.hometax.go.kr/'
    // this.header['Accept-Encoding'] ='gzip, deflate, br'
    // this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'


    // var result = await axios({
    //     method: 'GET',
    //     url: this.tempHost + common_te_URL,
    //     headers:this.header
    // });
    // var common_teJS = result.data;
    // eval(common_teJS +
    //     '  var az = k.k7();  ' +
    //     '  var encValue = "<nts<nts>nts>" + (Number(az) + 11) + k.k4(reqData, az) + az;');
    // console.log('encValue : ' + encValue);


    this.header = {};

    this.header['Connection'] ='keep-alive'
    this.header['sec-ch-ua'] ='" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'
    this.header['Accept'] ='application/xml; charset=UTF-8'
    this.header['Content-Type'] ='application/xml; charset=UTF-8'
    this.header['sec-ch-ua-mobile'] ='?0'
    this.header['User-Agent'] ='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    this.header['sec-ch-ua-platform'] ='"Windows"'
    this.header['Origin'] ='https://tecr.hometax.go.kr'
    this.header['Sec-Fetch-Site'] ='same-origin'
    this.header['Sec-Fetch-Mode'] ='cors'
    this.header['Sec-Fetch-Dest'] ='empty'
    this.header['Referer'] ='https://tecr.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/cr/c/b/UTECRCB001.xml'
    this.header['Accept-Encoding'] ='gzip, deflate, br'
    this.header['Accept-Language'] ='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
    this.header['Cookie'] =this.cookies

    const nts = '<nts<nts>nts>28usfxMt4GFTEoLayVhjDwnY3S4TXzGPa8h043jNqQY17'
    this.postData ='<map id="ATECRCBA001R01"><trsDtRngStrt>2022'+paramMonth+'01</trsDtRngStrt><trsDtRngEnd>2022'+paramMonth+''+lastDay+'</trsDtRngEnd><spjbTrsYn/><cshptUsgClCd/><sumTotaTrsAmt/></map>'

    var result = await axios({
        method: 'POST',
        url: 'https://tecr.hometax.go.kr/wqAction.do?actionId=ATECRCBA001R01&screenId=UTECRCB001&popupYn=false&realScreenId=',
        data:this.postData,
        headers:this.header
    });
    this.cookies+=cookieParser(result);
    console.log("******************************************")
    console.log(result.data);
    console.log("******************************************")
    var xmlToJson = convert.xml2json(result.data, {compact: true, spaces: 4});
    console.log(JSON.stringify(xmlToJson));
    var err = {};
    err['status'] = 402;
    err['errMsg'] = '세션정보가 존재하지 않습니다.'
    return err;
    // console.log(xmlToJson['map']);
    
    // if(xmlToJson['map']['msg']['_text']==='세션정보가 존재하지 않습니다.'){
    //     var err = {};
    //     err['status'] = 402;
    //     err['msg'] = xmlToJson['map']['msg']['_text']
    //     return 
    // }
}

module.exports = Hometax;