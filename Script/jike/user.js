**************************/
var body = $response.body
    .replace(/\"isActive\":false/, "\"isActive\":true")
    .replace(/\"paymentType\":\"\"/, "\"paymentType\":\"CHARGE\"")
    .replace(/\"status\":\"\"/, "\"status\":\"续费Jike Yellow\"")
    .replace(/\"productId\":\"\"/, "\"productId\":\"com.ruguoapp.jike.once3year\"")
    .replace(/\"subscribedProductId\":\"\"/, "\"subscribedProductId\":\"com.ruguoapp.jike.once3year\"")
    .replace(/\"platform\":\"\"/, "\"platform\":\"IOS\"")
    .replace(/\"sponsorId\":0/, "\"sponsorId\":1")
    .replace(/\"days\":0/, "\"days\":2");
$done({ body });
