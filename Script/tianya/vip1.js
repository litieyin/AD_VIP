 var body = $response.body
    .replace(/天涯贝：<span><\/span><\/p >
            <p class=\"deadline\">会员有效期至 :/, "天涯贝：999<span><\/span><\/p >
            <p class=\"deadline\">会员有效期至 :2099-12-31 ");
$done({ body });
