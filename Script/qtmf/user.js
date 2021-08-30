/*
蜻蜓FM会员
***************************
QuantumultX:
[rewrite_local]
^https:\//user.qingting.fm\/u2\/api\/v5\/user\/ url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/qtfm/user.js
[mitm]
hostname = user.qingting.fm
**************************/
var body = $response.body
    .replace(/\"expire_time\":\"\d\d\d\d-\d\d-d\d \d\d:\d\d:\d\d\"/p, "\"expire_time\":\"2049-12-31 23:59:59\"")
    .replace(/\"state\":\"\S*\"/, "\"state\":\"active\"")
    .replace(/\"vip\":[true|false]/, "\"vip\":true");
$done({ body });
