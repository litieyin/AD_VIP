/*
丁香医生vip
***************************
QuantumultX:
[rewrite_local]
^https:\//dxy.com\/app\/i\/user\/ask\/account\?ac url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/dxys.js

[mitm]
hostname = dxy.com
**************************/
var body = $response.body
    .replace(/\"status\":9/, "\"status\":0")
    .replace(/\"expire_timestamp\":0/, "\"expire_timestamp\":4102415999000");
$done({ body });
