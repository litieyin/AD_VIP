/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https://api.zhihu.com/bazaar/mine/personal$ url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/zhihu/mine_personal.js
[mitm]
hostname = api.zhihu.com

**************************/

var body = $response.body
    .replace(/\"vip_type\":\".*?\"/, "\"vip_type\":\"svip\"")
    .replace(/\"expire_text\":\".*?\"/, "\"expire_text\":\"盐选会员 2099-12-31 到期\"");
$done({ body });
