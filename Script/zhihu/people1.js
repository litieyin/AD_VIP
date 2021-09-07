var body = $response.body
    .replace(/\"expires_at\" : .*?,/g, "\"expires_at\":2524521600\,")
    .replace(/\"is_active\" : .*?,/g, "\"is_active\":true\,")
    .replace(/\"is_expired\" : .*?,/g, "\"is_expired\":false\,");
$done({ body });
