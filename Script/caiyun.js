var body = $response.body
    .replace(/\"svip_expired_at\":.*?,\"/g, "\"svip_expired_at\":4102415999.5412800312,\"")
    .replace(/\"vip_type\":\".*?\"/, "\"vip_type\":\"s\"")
    .replace(/\"is_vip\":.*?,/, "\"is_vip\":true,");
$done({ body });
