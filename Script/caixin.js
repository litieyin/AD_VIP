/*
财新会员
***************************
QuantumultX:
[rewrite_local]
^https:\//gateway.caixin.com\/api\/ucenter\/user\/v1\/checkuser url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/caixin.js
[mitm]
hostname = gateway.caixin.com
**************************/
var body = $response.body
    .replace(/\"expireTime\":0/, "\"expireTime\": 2524579199000")
    .replace(/\"unit\":1/, "\"unit\": \"1,2,3,4,5,6,7,8,9,10,11,12,13\"");
$done({ body });
