 var body = $response.body
    .replace(/\"isVipUser\":false/, "\"isVipUser\":true");
$done({ body });
