/*
美篇会员
***************************
QuantumultX:
[rewrite_local]
^https:\//poster.meipian.cn\/5.3\/user\/info url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/meipian.js
[mitm]
hostname = poster.meipian.cn
**************************/
var body = $response.body
    .replace(/\"member_type\":0/, "\"member_type\":1")
    .replace(/\"status\":0/, "\"status\":1")
    .replace(/\"due_days\":0/, "\"due_days\":1000")
    .replace(/\"subscribe_product_id\":0/, "\"subscribe_product_id\":2")
    .replace(/\"next_renew_date\":\"\"/, "\"next_renew_date\":\"2049-12-31\"");
$done({ body });
