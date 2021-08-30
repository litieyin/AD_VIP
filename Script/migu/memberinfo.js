  
/*
咪咕视频会员到期日
***************************
QuantumultX:
[rewrite_local]
^https:\/\/papi\.jiemian\.com\/app\/(user|pro|article)\/ url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/jiemian.js
[mitm]
hostname = v.miguvideo.com
**************************/
var body = $response.body
    .replace(/\"2021-09-29 16:50:52\"/p, "\"2049-12-31 23:59:59\"")
    .replace(/\"isDiamond\":[true|false], "\"isDiamond\":true")
    .replace(/\"skipBeforeAd\":[true|false], "\"skipBeforeAd\":true")
    .replace(/\"isVip\":[true|false], "\"isVip\":true")
$done({ body });
