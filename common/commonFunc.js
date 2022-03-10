
function base64Encoding(text){
    var base64EncodedText = Buffer.from(text,"utf8").toString('base64');
    return base64EncodedText;
}


module.exports = base64Encoding;
