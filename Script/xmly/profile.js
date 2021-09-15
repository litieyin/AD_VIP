var body = $response.body
    .replace(/\"value\":0,\"level\":0,\"expire\":null,\"state\":2,\"today\":0/, "\"value\":25000,\"level\":5,\"expire\":2524521600000,\"state\":5,\"today\":5")
    .replace(/\"defeat\":0/, "\"defeat\":99999");
$done({ body });
