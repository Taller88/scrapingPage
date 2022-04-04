# scrapingPage
nodeJS 를 활용하여 홈택스 간편인증을 진행하고 현금영수증 조회(AWS 배포)
## 배포 주소
  * http://13.124.173.234/
## 화면 
![image](https://user-images.githubusercontent.com/48818574/158220343-70206d1d-3f61-4722-9329-f06995c59dfe.png)

## 간편인증
  * 간편인증은 스크래핑으로 진행하였습니다.
  
![image](https://user-images.githubusercontent.com/48818574/158220278-e866f504-c9e9-46ed-aa8a-1a6e884a2cea.png)

## 환경 
  * 언어
    > nodeJS
  * 사용모듈
    1. Express
    2. axios 
    3. morgan
    4. nunjucks
    5. xml2js
    6. dotenv
    
  * 배포환경
    * AWS - lightsail
    * 배포주소 
      * http://13.124.173.234/

## 구조 
 > common
 >  > commonFunc.js
 
 > modules
 >  > hometax.js 
 
 > public
 >  > css
 >  > lib
 
 > routes
 >  > hometax.js
 >  > index.js
 
 > views
 >  > index.html
 
 >  > resposing.html
 
 >  > hometaxMenu.html
 
 >  > error.html
 
 > .env
 
 > app.js
 
 > package.json
 
 > package-lock.json
