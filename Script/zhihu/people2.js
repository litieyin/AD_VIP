/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

[mitm]
hostname = ap*.intsig.net

**************************/
let obj = JSON.parse($response.body);
obj = {"data":{"menber_infor":{,}}}};
$done({body: JSON.stringify(obj)});
let body = $response.body 
body=JSON.parse(body)
body.data.menber_infor.vip_type = "svip"
body.data.menber_infor.vip_tip={"jump_url":"","text":"2049-12-31 到期"}

body=JSON.stringify(body)
$done({body})
