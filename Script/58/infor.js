/*
58vip
***************************
QuantumultX:
[rewrite_local]
^https:\//passport.58.com\/58\/user/\info url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/58/infor.js
[mitm]
hostname = passport.58.com
**************************/
var body = $response.body
    .replace(/\"isVip\":false/, "\"isVip\":true");
$done({ body });
