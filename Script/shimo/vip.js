/*
石墨文档解锁VIP
https://shimo.im/lizard-api/users/me
mitm= shimo.im
*/

let obj = JSON.parse($response.body);
    obj.membership = {
    "accountTypeExpiredAt": "2099-04-30T16:00:00.000Z",
    "accountTypeCreatedAt": "2020-03-25T13:09:31.000Z",
    "accountType": "personal_premium",
    "isEnterprisePremium": true,
    "isExpired": false,
    "isNewDing": false,
    "isOfficial": true
  }
$done({body: JSON.stringify(obj)});
var body1 = $body
    .replace(/\"isPersonalPremium\":false/, "\"isPersonalPremium\":true")
    .replace(/\"isEnterprisePremium\":false/, "\"isEnterprisePremium\":true");
$done({ body1 });
