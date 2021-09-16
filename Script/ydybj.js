/*
有道云笔记VIP功能 
       By Alex0510
QuanX:       
https://note.youdao.com/yws/(mapi/payment|api/self) url script-response-body https://raw.githubusercontent.com/Alex0510/surge/master/Script/ydybj.js

hostname: note.youdao.com
*/


  const path1 = "/api/self";
  const path2 = "/mapi/payment";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.vip = true,
obj.properties.FEED_BACK_ID = 1,
obj.properties.isvip = true
}
if ($request.url.indexOf(path2) != -1){
  obj.service = 1,
  obj.payYear = true,
  obj.end = 4102415999000
 }
$done({body: JSON.stringify(obj)});
