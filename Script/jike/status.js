**************************/
var body = $response.body
    .replace(/\"isActive\":false,\"paymentType\":\"\",\"status\":\"\",\"productId\":\"\",\"subscribedProductId\":\"\",\"platform\":\"\",\"sponsorId\":0,\"days\":0/, "\"isActive\":true,\"paymentType\":\"CHARGE\",\"status\":\"\",\"productId\":\"com.ruguoapp.jike.once3year\",\"subscribedProductId\":\"\",\"platform\":\"\",\"sponsorId\":0,\"days\":999");

$done({ body });
