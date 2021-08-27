  
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
    .replace(/\"is_pro\":0/p, "\"is_pro\":1")
    .replace(/\"expire_time\":\"\"/p, "\"expire_time\":\"2049-12-31\"")
    .replace(/\"free_read_expire\":\"\"/p, "\"free_read_expire\":\"2049-12-31\"")
    .replace(/\"free_read_num\":(\"\d*\"|\d*)/p, "\"free_read_num\":\"4537"\" );
$done({ body });
