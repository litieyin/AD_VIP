/*
解锁知音漫客付费章节 (需登录)

***************************
QuantumultX:

[rewrite_local]
^https:\/\/(userpurchased|user-api)\.zymk\.cn\/v\d\/(userpurchased\/paychapters|getuserinfo)\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js

[mitm]
hostname = user*.zymk.cn

**************************/

var obj = JSON.parse($response.body);
obj.status = 0;
obj.data.isvip = 1;
obj.data.coins = 6666;
obj.data.Cgold = 6666;
$done({body: JSON.stringify(obj)});
