/*
WPS Office 解锁部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

[mitm]
hostname = account.wps.cn

**************************/

var body = JSON.parse($response.body);
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 4102415999 },
    { spid: "ocr", times: 0, expire_time: 4102415999 },
    { spid: "pdf2doc", times: 0, expire_time: 4102415999 },
    { spid: "pdf_merge", times: 0, expire_time: 4102415999 },
    { spid: "pdf_sign", times: 0, expire_time: 4102415999 },
    { spid: "pdf_split", times: 0, expire_time: 4102415999 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 4102415999,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 4102415999 },
      { memberid: 20, name: "WPS会员", expire_time: 4102415999 },
      { memberid: 12, name: "稻壳会员", expire_time: 4102415999 }
    ]
  },
  wealth: 0,
  expire_time: 4102415999
};

$done({ body: JSON.stringify(obj) });
