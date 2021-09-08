/*
财新会员
***************************
QuantumultX:
[rewrite_local]
^https:\//gateway.caixin.com\/api\/app-api\/auth\/findPowerByReq\?callback url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/caixin/auth.js
[mitm]
hostname = gateway.caixin.com
**************************/
var body = $response.body
    .replace(/\"isuseruse\":0/g, "\"isuseruse\": 1");
$done({ body });
