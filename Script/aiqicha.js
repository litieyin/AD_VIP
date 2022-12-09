/*
爱企查vip
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/aiqicha.js
mitm= aiqicha.baidu.com
*/

var body = $response.body
    .replace(/\"svip\":\{\"status\":0/g, "\"svip\":\{\"status\":1");
$done({ body });
