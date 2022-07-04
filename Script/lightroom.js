**************************/
var body = $response.body
    .replace(/\"PROFILE_UNAVAILABLE\"/, "\"PROFILE_AVAILABLE\"" );
    .replace(/\"legacyProfile\":\"\{\}\"/, "\"legacyProfile\":\"\{\\\"licenseId\\\":\\\"6D9AE026FADC6E9767EA\\\",\\\"licenseType\\\":3,\\\"licenseVersion\\\":\\\"1.0\\\",\\\"effectiveEndTimestamp\\\":1657522799000,\\\"graceTime\\\":1382400000,\\\"licensedFeatures\\\":\[\],\\\"enigmaData\\\":\{\\\"productId\\\":999,\\\"serialKey\\\":\\\"909705317204142075672469\\\",\\\"clearSerialKey\\\":\\\"15984699818860331728\\\",\\\"locale\\\":\\\"ALL\\\",\\\"associatedLocales\\\":\\\"ALL\\\",\\\"platform\\\":0,\\\"isk\\\":9999999,\\\"customerId\\\":0,\\\"deliveryMethod\\\":3,\\\"pc\\\":true,\\\"rb\\\":false\}\}\"" );
$done({ body });
