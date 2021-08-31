/*
爱企查vip
https://aiqicha.baidu.com/usercenter/getvipinfoajax
mitm= aiqicha.baidu.com
*/

var body = $response.body
    .replace(/\"vip\":0/, "\"vip\":1");
$done({ body });
