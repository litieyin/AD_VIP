 var body = $response.body
    .replace(/\"isVIP\":false,\"isSVIP\":false/, "\"isVIP\":true,\"isSVIP\":true")
    .replace(/\"lastVipEndDate\":\"\"/, "\"lastVipEndDate\":\"2524521600\"");
$done({ body });
