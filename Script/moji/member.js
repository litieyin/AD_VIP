var body = $response.body
    .replace(/\"is_auto_member\":0/, "\"is_auto_member\":1");
$done({ body });
