/*
石墨文档解锁VIP
https://shimo.im/lizard-api/users/me
mitm= shimo.im
*/

var body = $response.body
    .replace(/\"value\":\"personal_free\"/, "\"value\":\"personal_premium\"");
$done({ body });
