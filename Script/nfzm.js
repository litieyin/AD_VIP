 var body = $response.body
    .replace(/\"member_type\":2,\"expire_time\":null/, "\"member_type\":5,\"expire_time\":2524521600")
    .replace(/\"member_type_detail\":\".*?\"/, "\"member_type_detail\":\"\\u5357\\u65b9\\u5468\\u672b\\u5e74\\u4f1a\\u5458\"");
$done({ body });
