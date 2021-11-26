/*
QX
[rewrite_local]
^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/vip\/price\.json url script-response-body https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js
[MITM]
hostname: api.xiuxiu.meitu.com
Surge
[Script]
mtxx.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js,type=http-response,pattern=^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/vip\/price\.json
[MITM]
hostname: api.xiuxiu.meitu.com
*/

var obj = JSON.parse($response.body); 

obj ={
"promotional_type": 0,
        "is activity price": 0,
        "product id": "com.meitu.mtxx.nonrenew.vip8",
        "first price": 2500,
        "renew": 1,
        "user type": 1,
        "sub type": 3,
        "original price": 3000,
        "end time": 31536000000,
        "price": 2500,
        "top price desc": "",
        "lt3 price size title first place": ""
      },
      {
        "month price": "¥20.00\/月",
        "lt3 price size attach title first place": "",
        "sub id": 6848088274173713654,
        "sale text": "",
        "title": "立即订阅",
        "effective type": 0,
        "lt3 price size attach title": "",
        "attach title": "",
        "sub name": "3个月",
        "sub biz type": 1,
        "money unit": "¥",
        "discount value": 1500,
        "money code": "CNY",
        "exchange days": 0,
        "oversea agreement desc": "到期自动续费¥60.00\/季, 可随时取消",
        "lt3 price size title": "",
        "day price": "¥0.67\/天",
        "type": 1,
        "promotional type": 0,
        "is activity price": 0,
        "product id": "com.meitu.mtxx.nonrenew.vip9",
        "first price": 6000,
        "renew": 1,
        "user type": 0,
        "sub type": 2,
        "original price": 7500,
        "end time": 4102415999,
        "price": 6000,
        "top price desc": "",
        "lt3 price size title first place": ""
      },
      {
        "month price": "¥14.83\/月",
        "lt3 price size attach title first place": "",
        "sub id": 6848088454507816326,
        "sale text": "",
        "title": "立即订阅",
        "effective_type": 0,
        "lt3 price size attach title": "",
        "attach title": "",
        "sub name": "12个月",
        "sub biz type": 1,
        "money unit": "¥",
        "discount value": 12200,
        "money code": "CNY",
        "exchange days": 0,
        "oversea agreement desc": "到期自动续费¥178.00\/年, 可随时取消",
        "lt3 price size title": "",
        "day_price": "¥0.49\/天",
        "type": 1,
        "promotional type": 0,
        "is activity price": 0,
        "product_id": "com.meitu.mtxx.nonrenew.vip10",
        "first price": 17800,
        "renew": 1,
        "user type": 0,
        "sub type": 3,
        "original price": 30000,
        "end_time": 4102415999,
        "price": 17800,
        "top_price_desc": "",
        "lt3 price size title first place": ""
      }
    ],
    "old vip type": 1
  },
  "msg": "成功",
  "error": "Ok",
  "ret": 0
}
$done({body:JSON.stringify(obj)});
