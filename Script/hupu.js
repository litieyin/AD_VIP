var body = $response.body
    .replace(/\"isVip\":0/, "\"isVip\":1")
    .replace(/\"cardType\":null,\"isSub\":null/, "\"cardType\":4,\"isSub\":0")
    .replace(/\"cardNum\":null/, "\"cardNum\":999")
    .replace(/\"expiredTime\":null/, "\"expiredTime\":41023296");
$done({ body });
