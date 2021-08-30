/*
蜻蜓FM会员
***************************
QuantumultX:
[rewrite_local]
^https:\//pay.qingting.fm\/cashdesk\/v1\/vip\/charge?user_id url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/qtfm.js
[mitm]
hostname = pay.qingting.fm
**************************/
var body = $response.body
    .replace(/\"expire_time\":\"\d\d\d\d-\d\d-d\d \d\d:\d\d:\d\d\"/, "\"expire_time\":\"2049-12-31 23:59:59\"")
    .replace(/\"state\":\"\S*\"/, "\"state\":\"active\"")
    .replace(/\"desc\":\"*\"/, "\"desc\":\"2049.12.31到期\"")
    .replace(/\"type\":\"*\"/, "\"type\":\"openvip\"");
$done({ body });
