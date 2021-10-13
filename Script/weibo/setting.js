var body = $response.body
    .replace(/\"vip\":\"1\"/g, "\"vip\":\"0\"");
$done({ body });
