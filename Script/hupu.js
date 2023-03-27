var obj = JSON.parse($response.body);

obj = {
   {"code":1,"message":"成功","data":{"isVip":1,"cardNum":4,"nickname":"啊喔呃咦唔吁啵嘙嗼哹","header":"https://i3.hoopchina.com.cn/user/545/35652426969545/35652426969545-1526204680.jpeg@194h_194w_2e","expiredTime":4102415999,"cardType":4,"isSub":0,"cardColor":null,"cardNightColor":null,"cardBackColor":null,"cardNightBackColor":null,"cardIcon":null,"cardNightIcon":null,"rights":null,"isNFTHeader":0}}
 }

$done({body: JSON.stringify(obj)});
