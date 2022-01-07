**************************/
var body = $response.body
    .replace(/\"isSponsor\":false/, "\"isSponsor\":true")
    .replace(/\"valid\":false/, "\"valid\":true");
$done({ body });
