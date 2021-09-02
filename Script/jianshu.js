/*
简书解锁VIP
^https:\//www.jianshu.com\/asimov\/current_user url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/jianshu.js
mitm= www.jianshu.com
*/

let obj = JSON.parse($response.body);
    obj.members = {
    "title" : "银牌会员 - 12个月",
    "description" : "银牌会员 - 12个月",
    "iap_product_id" : "silver_vip",
    "expire_time" : 2524521600
  }
$done({body: JSON.stringify(obj)});
