var body = $response.body
    .replace(/\"vip\":\"0\"/, "\"vip\":\"1\"")
    .replace(/\"is_vip\":\"0\"/, "\"is_vip\":\"1\"");
$done({ body });
