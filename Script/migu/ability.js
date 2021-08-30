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
    .replace(/\"expiretime\":\"2021-09-29 16:50:52\"/, "\"expiretime\":\"2049-12-31 23:59:59\"")
    .replace(/\"expiredcardImg\":\"\"/, "\"timesFlag\":\"0\"")
    .replace(/\"expiredDay\":\"0\"/, "\"sealedFlag\":\"0\"")
    .replace(/\"effectiveFlag\":\"0\"/, "\"effectiveFlag\":\"1\"")
    .replace(/\"timeStamp\":\"1630227140760\"/, "\"timeStamp\":2524521600")
$done({ body });
