  
/*
咪咕视频会员到期日
***************************
QuantumultX:
[rewrite_local]
^https:\//v.miguvideo.com\/ability\/v2\/member-info url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/migu/memberinfo.js
[mitm]
hostname = v.miguvideo.com
**************************/
var body = $response.body
    .replace(/\"2021-09-29 16:50:52\"/p, "\"2099-12-31 23:59:59\"")
    .replace(/\"isDiamond\":[true|false]/, "\"isDiamond\":true")
    .replace(/\"skipBeforeAd\":[true|false]/, "\"skipBeforeAd\":true")
    .replace(/\"isVip\":[true|false]/, "\"isVip\":true");
$done({ body });
