/*
体坛+vip
^https:\//api.ttplus.cn\/api\/user\/job\/userlist url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/titan/2.js
mitm= api.ttplus.cn
*/
var body = $response.body
    .replace(/\"is_vip\":0/, "\"is_vip\":1")
    .replace(/\"vip_expire\":null/, "\"vip_expire\":2524521600000");
$done({ body });
