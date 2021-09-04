/*
58vip
***************************
QuantumultX:
[rewrite_local]
^https:\//app.58.com\/api\/ucenter\/v2\/index url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/58/index.js
[mitm]
hostname = app.58.com
**************************/
var body = $response.body
    .replace(/\"is_vip\":false/, "\"is_vip\":true");
$done({ body });
