var body = $response.body
    .replace(/\"level\":2,\"vip_identity\":3/, "\"level\":7,\"vip_identity\":2")
    .replace(/\"is_baoyue\":0/, "\"is_baoyue\":1")
    .replace(/\"baoyue_type\":false/, "\"baoyue_type\":true")
    .replace(/\"type\":0/, "\"type\":1")
    .replace(/\"desc\":\".*?\"/,"\"desc\":\"\\u6c38\\u4e45\\u4f1a\\u5458\"");
$done({ body });
