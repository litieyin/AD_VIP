/*
脉脉vip
***************************
QuantumultX:
[rewrite_local]
^https:\//open.taou.com\/maimai\/member\/uh\/get_member_info_ios_v3 url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/maimai.js
[mitm]
hostname = open.taou.com
**************************/
var body = $response.body
    .replace(/\"real_expire_days.*?expire_time_list\"/, "\"real_expire_days\": 999, \"expire_time_list\"");
$done({ body });
