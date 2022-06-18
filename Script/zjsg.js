**************************/
var body = $response.body
    .replace(/\"VIP\": 0/, "\"VIP\": 1");
$done({ body });
