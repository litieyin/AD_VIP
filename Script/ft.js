/*
ft会员
***************************
QuantumultX:
[rewrite_local]
^https:\//d1025gvspu57dc.cloudfront.net\/index.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/ft.js
[mitm]
hostname = d1025gvspu57dc.cloudfront.net
**************************/
var body = $response.body
    .replace(/\"premium\":0/, "\"premium\":1")
    .replace(/\"expire\":\"1632009600\"/, "\"expire\":\"2524521600\"");
$done({ body });
