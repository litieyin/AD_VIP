 var body = $response.body
    .replace(/\"userType\":1/, "\"userType\":5")
    .replace(/\"type\":1/, "\"type\":1");
$done({ body });
