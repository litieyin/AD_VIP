**************************/
var body = $response.body
    .replace(/\"isSponsor\":false/g, "\"isSponsor\":true")
    .replace(/\"valid\":false/, "\"valid\":true");
$done({ body });
