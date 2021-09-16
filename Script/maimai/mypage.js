/*
脉脉vip
***************************
QuantumultX:
[rewrite_local]
^https:\//maimai.cn\/bizmember\/vip_center\/me_tab_page_banner url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/maimai/mypage.js
[mitm]
hostname = maimai.cn
**************************/
var body = $response.body
    .replace(/\"bgtxt\".*?\"bgimgurl\"/, "\"bgtxt\":\"会员有效期至2099/12/31\",\"bgimgurl\"");
$done({ body });
