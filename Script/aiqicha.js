/*
爱企查vip
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/aiqicha.js
mitm= aiqicha.baidu.com
*/

let obj = JSON.parse($response.body);
    obj.data = {
    "vip": 1,
    "consume": 150,
    "time": "2099-12-31",
    "signInStaus": 0
  }
$done({body: JSON.stringify(obj)});
