var body = $response.body
    .replace(/\"expires_at\":.*?,/g, "\"expires_at\":4102415999,")
    .replace(/\"is_active\":false/g, "\"is_active\":true")
    .replace(/\"is_expired\":true/g, "\"is_expired\":false")
    .replace(/\"alert\":.*?\,/g, "\"alert\":\"永久会员\",");
$done({ body });
