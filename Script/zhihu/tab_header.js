/*
知乎vip

***************************
Quantumult X:

[rewrite_local]
^https://api.zhihu.com/bazaar/tab_header$ url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/zhihu/tab_header.js

[mitm]
hostname = api.zhihu.com

**************************/

var body = $response.body
    .replace(/\"vip_type\":\".*?\"/, "\"vip_type\":\"svip\"")
    .replace(/\"text\":\".*?期\"/, "\"text\":\"2099-12-31 到期\"");
$done({ body });
