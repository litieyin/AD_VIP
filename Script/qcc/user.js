 var body = $response.body
    .replace(/\"isVIP\":false,\"isSVIP\":false/, "\"isVIP\":true,\"isSVIP\":true")
    .replace(/\"lastVipEndDate\":\"\"/, "\"lastVipEndDate\":\"2099-12-31\"");
$done({ body });
