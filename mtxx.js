/*
QX
[rewrite_local]
^https:\/\/h5\.xiuxiu\.meitu\.com\/v1\/h5\/vip\/user_detail\.json url script-response-body https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js
[MITM]
hostname: api.meiyan.com
Surge
[Script]
myxj.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js,type=http-response,pattern=^https:\/\/h5\.xiuxiu\.meitu\.com\/v1\/h5\/vip\/user_detail\.json
[MITM]
hostname: api.xiuxiu.meitu.com
*/

var obj = JSON.parse($response.body);

obj = {
   "degrade": 0,
   "error_code": 0,
   "data": {
     "s": 0
   },
   "msg": "成功",
   "error": "Ok",
   "ret": 0
 }

$done({body:JSON.stringify(obj)});
