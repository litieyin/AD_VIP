 var body = $response.body
    .replace(/: <span/, ": 2099-12-31 <span");
$done({ body });
