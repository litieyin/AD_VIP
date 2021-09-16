var body = $response.body
    .replace(/\"pay_status_info\":.*?\}/, "\"pay_status_info\" : null")
    .replace(/\"comment_count\":.*?,/, "\"comment_count\":\"0\",")
    .replace(/\"ding_count\":.*?,/, "\"ding_count\":\"0\",")
    .replace(/\"is_pay\":1/g, "\"is_pay\":0");
$done({ body });
