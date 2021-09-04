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
    .replace(/\"member_status\":\"0\"/p, "\"member_status\":\"1\"");
$done({ body });
