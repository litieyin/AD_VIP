var body = $response.body
    .replace(/\"effectiveEndTimestamp\":.*?,/, "\"effectiveEndTimestamp\":4102415999000,");
$done({ body });
