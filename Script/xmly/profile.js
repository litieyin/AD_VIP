var body = $response.body
    .replace(/\"value\":0,\"level\":0,\"expire\":null,\"state\":2,\"today\":0/, "\"value\":25000,\"level\":5,\"expire\":2524521600000,\"state\":2,\"today\":5")
    .replace(/\"ret\":0/, "\"ret\":99999");
$done({ body });
