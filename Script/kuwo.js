/*
酷我音乐 解锁会员试听及部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

[mitm]
hostname = vip1.kuwo.cn

**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "2";
	obj.data["vipLuxuryExpire"] = "2524579199000";
	obj.data["time"] = "2524579199000";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "2524579199000";
	obj.data["vipOverSeasExpire"] = "2524579199000";
	obj.data["vipExpire"] = "2524579199000";
	obj.data["vip3Expire"] = "2524579199000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});
