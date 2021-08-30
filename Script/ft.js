/*
ft会员
***************************
QuantumultX:
[rewrite_local]
^https:\//d1025gvspu57dc.cloudfront.net\/index.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/ft.js
[mitm]
hostname = d1025gvspu57dc.cloudfront.net
**************************/
var body = "{
  "paywall" : 0,
  "premium" : 1,
  "expire" : "2524521600",
  "standard" : 0,
  "campaign_code" : "",
  "latest_duration" : "yearly",
  "v" : 1986
}"
$done({ body });
