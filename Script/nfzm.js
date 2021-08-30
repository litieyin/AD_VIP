/*
南方周末vip
***************************
QuantumultX:
[rewrite_local]
^https:\//v.miguvideo.com\/ability\/v2\/member-info url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/migu/memberinfo.js
[mitm]
hostname = v.miguvideo.com
**************************/
var body = $response.body
    .replace(/\"expire_time\":null/, "\"expire_time\":2524521600")
    .replace(/\"开通会员享特权\"/, "\"南周会员\"");
$done({ body });
