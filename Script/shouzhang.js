**************************/
var body = $response.body
    .replace(/\"vip\":false/, "\"vip\":true");
$done({ body });
