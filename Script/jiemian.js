  
/*
界面新闻解锁会员
***************************
QuantumultX:
[rewrite_local]
^https:\/\/papi\.jiemian\.com\/app\/(user|pro|article)\/ url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/jiemian.js
[mitm]
hostname = papi.jiemian.com
**************************/
var body = $response.body
    .replace(/\"is_pro\":0/, "\"is_pro\":1")
    .replace(/\"expire_time\":\"\"/, "\"expire_time\":\"2049-12-31\"")
    .replace(/\"free_read_expire\":\"\"/, "\"free_read_expire\":\"2049-12-31\"")
    .replace(/\"free_read_num\":(\"\d*\"|\d*)/, "\"free_read_num\":\"4537\"" );
$done({ body });
