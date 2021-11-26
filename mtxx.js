/*
QX
[rewrite_local]
^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/vip\/price\.json url script-response-body https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js
[MITM]
hostname: api.meiyan.com
Surge
[Script]
myxj.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js,type=http-response,pattern=^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/vip\/price\.json
[MITM]
hostname: api.xiuxiu.meitu.com
*/

var obj = JSON.parse($response.body); 

obj ={
"promotional_type": 0,
        "is_activity_price": 0,
        "product_id": "com.meitu.mtxx.nonrenew.vip8",
        "first_price": 2500,
        "renew": 1,
        "user_type": 1,
        "sub_type": 1,
        "original_price": 3000,
        "end_time": 4102415999,
        "price": 2500,
        "top_price_desc": "",
        "lt3_price_size_title_first_place": ""
      },
      {
        "month_price": "¥20.00\/月",
        "lt3_price_size_attach_title_first_place": "",
        "sub_id": 6848088274173713654,
        "sale_text": "",
        "title": "立即订阅",
        "effective_type": 0,
        "lt3_price_size_attach_title": "",
        "attach_title": "",
        "sub_name": "3个月",
        "sub_biz_type": 1,
        "money_unit": "¥",
        "discount_value": 1500,
        "money_code": "CNY",
        "exchange_days": 0,
        "oversea_agreement_desc": "到期自动续费¥60.00\/季, 可随时取消",
        "lt3_price_size_title": "",
        "day_price": "¥0.67\/天",
        "type": 1,
        "promotional_type": 0,
        "is_activity_price": 0,
        "product_id": "com.meitu.mtxx.nonrenew.vip9",
        "first_price": 6000,
        "renew": 1,
        "user_type": 0,
        "sub_type": 2,
        "original_price": 7500,
        "end_time": 4102415999,
        "price": 6000,
        "top_price_desc": "",
        "lt3_price_size_title_first_place": ""
      },
      {
        "month_price": "¥14.83\/月",
        "lt3_price_size_attach_title_first_place": "",
        "sub_id": 6848088454507816326,
        "sale_text": "",
        "title": "立即订阅",
        "effective_type": 0,
        "lt3_price_size_attach_title": "",
        "attach_title": "",
        "sub_name": "12个月",
        "sub_biz_type": 1,
        "money_unit": "¥",
        "discount_value": 12200,
        "money_code": "CNY",
        "exchange_days": 0,
        "oversea_agreement_desc": "到期自动续费¥178.00\/年, 可随时取消",
        "lt3_price_size_title": "",
        "day_price": "¥0.49\/天",
        "type": 1,
        "promotional_type": 0,
        "is_activity_price": 0,
        "product_id": "com.meitu.mtxx.nonrenew.vip10",
        "first_price": 17800,
        "renew": 1,
        "user_type": 1,
        "sub_type": 3,
        "original_price": 30000,
        "end_time": 4102415999,
        "price": 17800,
        "top_price_desc": "",
        "lt3_price_size_title_first_place": ""
      }
    ],
    "old_vip_type": 1
  },
  "msg": "成功",
  "error": "Ok",
  "ret": 0
}
$done({body:JSON.stringify(obj)});
