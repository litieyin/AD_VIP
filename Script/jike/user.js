**************************/
var body = $response.body
    .replace(/\"isSponsor\":false/g, "\"isSponsor\":true");
$done({ body });
