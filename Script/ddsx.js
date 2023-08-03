var body = $response.body
    .replace(/\"subscriptionExpireDate\":0,/, "\"subscriptionExpireDate\":999,")
    .replace(/\"isSubscriptionActive\":false/, "\"isSubscriptionActive\":true")
    .replace(/\"isTrialActive\":.*?/, "\"isTrialActive\":false")
    .replace(/\"isOneTimePurchaseProductActive\":false/, "\"isOneTimePurchaseProductActive\":true");
$done({ body });
