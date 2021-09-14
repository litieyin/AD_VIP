 var body = $response.body
    .replace(/\"isSVIP\":false/, "\"isSVIP\":true")
    .replace(/\"lastVipEndDate\":\"\"/, "\"lastVipEndDate\":\"2099-12-31\"");
$done({ body });
