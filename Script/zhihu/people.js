
let body = $response.body 
body=JSON.parse(body)
body.vip_info = {
     "is_vip" : true,
    "entrance_v2" : {
      "title" : "我的盐选会员",
      "jump_url" : "zhihu://vip/my",
      "sub_title" : "畅享 10w+ 优质内容",
      "button_text" : "查看权益"
    },
    "entrance" : {
      "button_jump_url" : "",
      "sub_title" : null,
      "title" : "我的盐选会员",
      "button_text" : "为你严选好内容",
      "jump_url" : "zhihu://vip/purchase",
      "sub_title_new" : null,
      "identity" : "svip",
      "icon" : {
        "url" : "https://pic1.zhimg.com/v2-5b7012c8c22fd520f5677305e1e551bf.png",
        "night_mode_url" : "https://pic1.zhimg.com/v2-e51e3252d7a2cb016a70879defd5da0b.png"
      },
      "expires_day" : "2099-12-31"
  }
}

body=JSON.stringify(body)
$done({body})
