 var body = $response.body
    .replace(/\"userType\":1/, "\"userType\":2")
    .replace(/\"type\":1/, "\"type\":2");
$done({ body });
