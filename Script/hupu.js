var body = $response.body
    .replace(/\"isVip\":0/, "\"isVip\":1")
    .replace(/\"cardType\":null/, "\"cardType\":4")
    .replace(/\"expiredTime\":null/, "\"expiredTime\":4102415999000");
$done({ body });
