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
    .replace(/\"identity\":\"2,0\"/, "\"identity\":\"2,1\"")
    .replace(/\"您还不是微博高级会员\"/, "\"微博高级会员\"")
    .replace(/\"s_type\":0/, "\"s_type\":1")
    .replace(/\"expire_days\":/d*/, "\"expire_days\":0");
$done({ body });
