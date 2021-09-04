/*
宝宝树vip
***************************
QuantumultX:
[rewrite_local]
^http:\//go.babytree.com\/go_pregnancy\/api\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/baobaoshu.js
[mitm]
hostname = go.babytree.com
**************************/
var body = $response.body
    .replace(/\"member_status\":\"0\"/p, "\"member_status\":\"1\"")
    .replace(/\"text\":\"开通宝宝树会员，尊享专属特权\"/p, "\"text\":\"宝宝树会员\"")
    .replace(/\"expirationDate\":\"\"/p, "\"expirationDate\":\"2049-12-31 23:59:59\"");
$done({ body });
