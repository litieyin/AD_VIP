var body = $response.body
    .replace(/\"level\":2,\"vip_identity\":3,/, "\"level\":7,\"vip_identity\":5,")
    .replace(/\"is_baoyue\":0/, "\"is_baoyue\":1")
    .replace(/\"baoyue_type\":false,/, "\"baoyue_type\":true,")
    .replace(/\"desc\":\".*?\"/,"\"desc\":\"VIP\\u6c38\\u4e45\\u4f1a\\u5458\"");
$done({ body });
