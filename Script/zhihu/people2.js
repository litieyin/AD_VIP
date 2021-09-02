/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

[mitm]
hostname = ap*.intsig.net

**************************/
body=JSON.parse(body)
body.data.menber_infor.vip_type = "svip"
body.data.menber_infor.vip_tip={"jump_url":"","text":"2049-12-31 到期"}

body=JSON.stringify(body)
$done({body})


var body = $response.body
    .replace(/\"vip_type\":\"*\"/, "\"vip_type\":\"svip\"")
    .replace(/\"text\":\"* 到期\"/, "\"text\":\"2049-12-31 到期\"");
$done({ body });
