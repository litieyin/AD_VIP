var body = $response.body
    .replace(/\"isVip\":false.*?vipUrl/, "\"isVip\":true,\"vipExpireTime\":2524521600000,\"vipStatus\":4,\"vipTip\":\"尊贵的VIP会员\",\"vipUrl")
    .replace(/\"isVip\":false/g, "\"isVip\":true")
    .replace(/\"name\":\".*?\"/, "\"name\":\"大圣人\"")
    .replace(/\"userTitle\":\".*?\"/, "\"userTitle\":\"大圣人\"");
$done({ body });
