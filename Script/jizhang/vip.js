var body = $response.body
    .replace(/\"expire_date\":0/, "\"expire_date\":4102383492")
    .replace(/\"vip_type\":\[\]/, "\"vip_type\":\"mymoney\.YearlyMembership\"");
$done({ body });
