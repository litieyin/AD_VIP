 var body = $response.body
    .replace(/\"isSvip\":false/, "\"isSvip\":true")
    .replace(/\"statusSVIP\":\{\"expire\":\"\"\}/, "\"statusSVIP\":\{\"expire\":\"2099-12-31\"\}");
$done({ body });
