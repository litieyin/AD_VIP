var body = $response.body
    .replace(/\"盐选会员已过期\"/, "\"尊敬的盐选会员\"")
    .replace(/\"vip_type\":\"guest\"/, "\"vip_type\":\"svip\"");
$done({ body });
