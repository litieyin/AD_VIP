/*
石墨文档解锁VIP
https://shimo.im/lizard-api/users/me
mitm= shimo.im
*/

let obj = JSON.parse($response.body);
    obj.membership = {
    "accountTypeExpiredAt": "2049-12-31T16:00:00.000Z",
    "accountTypeCreatedAt": "2020-03-25T13:09:31.000Z",
    "accountType": "personal_premium",
    "isEnterprisePremium": true,
    "isExpired": false,
    "isNewDing": false,
    "isOfficial": true
  }
  obj.accountMetadata= {
    "isDingtalk" : false,
    "isFreeEnterprise" : false,
    "isTrial" : false,
    "expiredAt" : {
      "seconds" : 1945906839,
      "nanos" : 55173442
    },
    "isWework" : false,
    "isExpired" : false,
    "isEnterprise" : false,
    "isPersonalPremium" : true,
    "isEnterprisePremium" : true,
    "isEnterpriseLight" : false
  }
$done({body: JSON.stringify(obj)});
