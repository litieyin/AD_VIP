/*
体坛+vip
^https:\//api.ttplus.cn\/api\/member_recharge_type\/list url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/titan.js
mitm= api.ttplus.cn
*/
var body = $response.body
    .replace(/\"expire\":0/, "\"expire\":2524521600000");
$done({ body });
