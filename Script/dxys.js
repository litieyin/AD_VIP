/*
丁香医生vip
***************************
QuantumultX:
[rewrite_local]
^https:\//dxy.com\/app\/i\/user\/ask\/account url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/dxys.js

[mitm]
hostname = dxy.com
**************************/
var body = $response.body
    .replace(/\"type\":0/, "\"premium\":1")
    .replace(/\"status\":9/, "\"status\":1")
    .replace(/\"expire_timestamp\":0/, "\"expire_timestamp\":2524521600");
$done({ body });
