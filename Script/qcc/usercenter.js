 var body = $response.body
    .replace(/\"isVip\":false,\"isSvip\":false/, "\"isVip\":true,\"isSvip\":true")
    .replace(/\"expire\":\"\"/g, "\"expire\":2524521600");
$done({ body });
