let body = $response.body 
body=JSON.parse(body)
delete body['mcn_user_info']
body=JSON.stringify(body)
    .replace(/\"is_vip\":false/, "\"is_vip\":true")
    .replace(/\"expires_day\":\"2020-11-08\"/, "\"expires_day\":\"2049-12-31\"");

$done({body})
