var body = $response.body
    .replace(/\"pay_status_info\":.*?\}/, "\"pay_status_info\" : null")
    .replace(/\"is_pay\":1/g, "\"is_pay\":0");
$done({ body });
