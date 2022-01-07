**************************/
var body = $response.body
    .replace(/\"isSponsor\":false/, "\"isSponsor\":true");
$done({ body });
