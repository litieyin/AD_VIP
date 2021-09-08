 var body = $response.body
    .replace(/\"member_type\":2,\"expire_time\":null/, "\"member_type\":1,\"expire_time\":2524521600")
    .replace(/\"member_type_detail\":\".*?\"/, "\"member_type_detail\":\"\\u5e74\\u4f1a\\u5458\"");
$done({ body });
