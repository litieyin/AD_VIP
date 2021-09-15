var body = $response.body
    .replace(/\"isVip\":false.*?vipUrl/, "\"isVip\":true,\"vipExpireTime\":2524521600000,\"vipStatus\":3,\"vipTip\":"VIP会员",\"vipUrl")
    .replace(/\"isVip\":false/g, "\"isVip\":true");
$done({ body });
