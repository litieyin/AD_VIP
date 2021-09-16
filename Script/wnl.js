/*
万年历vip
***************************
QuantumultX:
[rewrite_local]
^https:\//r.51wnl-cq.com\/Api\/User\/GetExtInfo url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/wnl.js
[mitm]
hostname = r.51wnl-cq.com
**************************/
var body = $response.body
    .replace(/\"memberType\":0/, "\"memberType\":1")
    .replace(/\"memberDate\":\"1970-01-01/, "\"memberDate\":\"2099-12-31");
$done({ body });
