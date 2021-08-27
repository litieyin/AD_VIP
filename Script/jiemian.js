  
/*
界面新闻解锁会员
***************************
QuantumultX:
[rewrite_local]
^https:\/\/papi\.jiemian\.com\/app\/(user|pro)\/ url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/jiemian.js
[mitm]
hostname = papi.jiemian.com
**************************/
var body = $response.body
    .replace(/\"is_pro\":0/, "\"is_pro\":1")
    .replace(/\"is_pay\":1/, "\"is_pay\":0")
    .replace(/\"free_read_num\":3/, "\"free_read_num\":9999");
$done({ body });
