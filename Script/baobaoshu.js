/*
宝宝树vip
***************************
QuantumultX:
[rewrite_local]
^http:\//m.meitun.com\/newapi\/router\/memberInfo\/queryUserMemberInfo url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/baobaoshu.js
[mitm]
hostname = m.meitun.com
**************************/
var body = $response.body
    .replace(/\"memberState\":0/, "\"memberState\":1")
    .replace(/\"expirationDateDesc\":\"开通宝宝树会员，尊享专属特权\"/, "\"expirationDateDesc\":\"宝宝树会员\"")
    .replace(/\"vipSwitch\":1/, "\"vipSwitch\":0")
    .replace(/\"expirationDateStr\":\"\"/, "\"expirationDateStr\":\"2049-12-31 23:59:59\"");
$done({ body });
