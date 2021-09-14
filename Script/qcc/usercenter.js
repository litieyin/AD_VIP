 var body = $response.body
    .replace(/\"isVip\":false,\"isSvip\":false/, "\"isVip\":true,\"isSvip\":true")
    .replace(/\"expire\":\"\"/g, "\"expire\":\"2099-12-31\"");
$done({ body });
