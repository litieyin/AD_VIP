var body = $response.body
    .replace(/\"level\":0,\"expire\":null/, "\"level\":5,\"expire\":2524521600000");
$done({ body });
