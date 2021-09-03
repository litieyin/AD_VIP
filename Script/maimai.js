/*
脉脉vip
***************************
QuantumultX:
[rewrite_local]
^https:\//open.taou.com\/maimai\/member\/uh\/get_member_info_ios_v3 url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/maimai.js
[mitm]
hostname = open.taou.com
**************************/
var body = $response.body
    .replace(/\"mem_id.*?mem_bg_pic_url\"/, "\"mem_id\":3,\"mem_name\":VIP\\u4f1a\\u5458\",\"mem_bg_pic_url\"")
    .replace(/\"real_expire_time.*?activity\"/, "\"real_expire_time\": \"999\\u5929\\u540e\\u5230\\u671f\", \"real_expire_days\": 999, \"expire_time_list\": [{\"name\": \"\\u804c\\u573aVIP\\u4f1a\\u5458\", \"expire_time\": \"2029-12-31\\u5230\\u671f\"}]}, \"activity\"");
$done({ body });
