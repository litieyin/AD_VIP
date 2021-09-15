var body = $response.body
    .replace(/\"isVip\":false/, "\"isVip\":true\");
$done({ body });
