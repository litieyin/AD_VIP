 var body = $response.body
    .replace(/\"isVipUser\":false/, "\"isVipUser\":true,\"expireTime\":4102415999000");
$done({ body });
