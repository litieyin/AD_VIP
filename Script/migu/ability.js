/*
咪咕视频会员到期日
***************************
QuantumultX:
[rewrite_local]
^https:\//v.miguvideo.com\/ability\/v url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/migu/ability.js
[mitm]
hostname = v.miguvideo.com
**************************/
var body = $response.body
    .replace(/\"expireTime\":\"2021-09-29 16:50:52\"/, "\"expireTime\":\"2099-12-31 23:59:59\"")
    .replace(/\"nextPaidTime\":\"2021-09-29 16:50:53\"/, "\"nextPaidTime\":\"2099-12-31 23:59:59\"")
    .replace(/\"endTime\":\"20210929165037\"/, "\"endTime\":\"20991231235959\"")
    .replace(/\"expiredCardImg\":\"\"/, "\"timesFlag\":\"0\"")
    .replace(/\"expiredDay\":\"0\"/, "\"sealedFlag\":\"0\"")
    .replace(/\"effectiveFlag\":\"0\"/, "\"effectiveFlag\":\"1\"");
$done({ body });
