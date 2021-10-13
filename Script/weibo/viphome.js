var body = $response.body
    .replace(/\"level\":2,\"vip_identity\":3/, "\"level\":7,\"vip_identity\":2")
    .replace(/\"s_type\":0/, "\"s_type\":1")
    .replace(/\"type\":2/, "\"type\":1")
    .replace(/\"s_type\":0/, "\"s_type\":1")
    .replace(/\"desc\":\".*?\"/,"\"desc\":\"\\u6c38\\u4e45\\u4f1a\\u5458\"")
    .replace(/\"expired_days\":.*?,/,"\"expired_days\":,");
$done({ body });
