/*
中国体育直播 unlock 
QX:

[rewrite_local]👇

http:\/\/rest\.zhibo\.tv\/room\/get\-pull\-stream\-info\-v430 url script-response-body zgtyzb.js


MITM = rest.zhibo.tv

*/

const path1 = "/room/get-pull-stream-info-v430";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.anchor["userHas"] = "1";	
}

$done({body: JSON.stringify(obj)});
