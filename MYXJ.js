/*
[rewrite_local]
^https:\/\/api\.meiyan\.com\/vip\/user_info\.json url script-response-body myxj.js

[MITM]
hostname:api.meiyan.com

*/

var obj = JSON.parse($response.body);
 
obj = {
   "meta": {
     "code": 0,
     "reqid": "5ea72232a71753162271481465c161b2",
     "msg": "",
     "request_uri": "\/vip\/user_info",
     "error": ""
   },
   "response": {
     "status": 1,
     "ad_vip_type": 1,
     "period_type": 1,
     "agreement_platform": 1,
     "expire_time": "999",
     "permission": [
     ],
     "discount_status": 0,
     "agreement_status": 1,
     "type": 1,
     "product_type": 1,
     "expire_date": "2099-10-10"
   }
 }

$done({body: JSON.stringify(obj)});
