/*
爱企查vip
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/aiqicha.js
mitm= aiqicha.baidu.com
*/

let obj = JSON.parse($response.body);
    obj.data = {
    {"status":0,"msg":"","data":{"vip":1,"time":"2099-12-31","signInStaus":0,"consume":5,"svip":{"status":1,"startTime":"","endTime":""},"yuqing_junior":{"status":0,"startTime":"","endTime":""},"yuqing_senior":{"status":0,"startTime":"","endTime":""},"asset":{"status":0,"startTime":"","endTime":""},"icp":{"status":0,"startTime":"","endTime":""},"isHitOptimize":0,"isDisplayPop":0}}
  }
$done({body: JSON.stringify(obj)});
