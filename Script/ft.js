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
    .replace(/.*/,"\{\"paywall\":0,\"premium\":1,\"standard\":1,\"addon\":0,\"expire\":\"4102415999\",\"v\":1994,\"campaign_code\":\"\",\"latest_duration\":\"yearly\"\}");
$done({ body });
