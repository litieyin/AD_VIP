 var body = $response.body
    .replace(/\"userType\":1/, "\"userType\":2")
    .replace(/\"type\":1/, "\"type\":1");
$done({ body });
