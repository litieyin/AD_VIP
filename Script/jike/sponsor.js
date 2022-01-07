**************************/
var body = $response.body
    .replace(/\"isActive\":false,\"paymentType\":\"\",\"status\":\"\",\"productId\":\"\",\"subscribedProductId\":\"\",\"platform\":\"\",\"sponsorId\":0,\"days\":0/, "\"isActive\":true,\"paymentType\":\"CHARGE\",\"status\":\"续费Jike Yellow\",\"productId\":\"com\.ruguoapp\.jike\.once3year\",\"subscribedProductId\":\"com\.ruguoapp\.jike\.once3year\",\"platform\":\"IOS\",\"sponsorId\":1,\"days\":36");
$done({ body });
