 var body = $response.body
    .replace(/\"isVIP\":false,\"isSVIP\":false/, "\"isVIP\":true,\"isSVIP\":true")
    .replace(/\"expire\":\"\"/g, "\"expire\":\"2524521600\"");
$done({ body });
