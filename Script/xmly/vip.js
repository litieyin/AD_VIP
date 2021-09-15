var body = $response.body
    .replace(/\"vipStatus\":3.*?autoRenew/, "\"vipStatus\":3,\"vipDescription\":\"VIP会员\",\"expireDate\":\"2099-12-31\",\"expireDays\":,\"autoRenew");
$done({ body });
