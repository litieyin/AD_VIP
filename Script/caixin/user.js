/*
财新会员
***************************
QuantumultX:
[rewrite_local]
^https:\//gateway.caixin.com\/api\/ucenter\/user\/v1\/checkuser url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/caixin/user.js
[mitm]
hostname = gateway.caixin.com
**************************/
var body = $response.body
    .replace(/\"expireTime\":0/, "\"expireTime\": 2524579199000")
    .replace(/\"unit\":1/, "\"unit\": 615");
$done({ body });
