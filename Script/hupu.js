var body = $response.body
    .replace(/\"isVip\":0/, "\"isVip\":1")
    .replace(/\"cardType\":null/, "\"cardType\":4")
    .replace(/\"expiredTime\":null/, "\"expiredTime\":\"2099-12-31\"");
$done({ body });
