var body = $response.body
    .replace(/\"type\":\"2\"/g, "\"type\":\"1\"");
$done({ body });
