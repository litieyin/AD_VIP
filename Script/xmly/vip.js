var body = $response.body
    .replace(/\"vipStatus\":3.*?autoRenew/, "\"vipStatus\":2,\"vipDescription\":\"VIP会员\",\"expireDate\":\"2099-12-31\",\"expireDays\":0,\"autoRenew");
$done({ body });
