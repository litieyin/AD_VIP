/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

[mitm]
hostname = ap*.intsig.net

**************************/

var body = $response.body
    .replace(/\"vip_typ\":\"*\"/, "\"vip_typ\":\"svip\"")
    .replace(/\"expire_text\":\"读书会员 * 到期\"/, "\"expire_text\":\"读书会员 2049-12-31 到期");
$done({ body });
