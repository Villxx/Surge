/*
QX
[rewrite_local]
^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/user\/show\.json url script-response-body https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js
[MITM]
hostname: api.meiyan.com
Surge
[Script]
myxj.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js,type=http-response,pattern=^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/user\/show\.json
[MITM]
hostname: api.xiuxiu.meitu.com

失败，只有vip图标没实际功能
mtxx.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js,type=http-response,pattern=^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/user\/show\.json
#mtxx.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/huduke/Hugo/main/javaScript/unlockVip/mtxx.js,type=http-response,pattern=^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/user\/show\.json
*/

var obj = JSON.parse($response.body);

obj.data.vip_type=1;
obj.data.expire_days=-9999999999;
obj.data.screen_name="IOS鍏ぞ";
obj.data.is_expire=0;
obj.data.in_valid_time=4076488923;
obj.data.is_valid_user=1;
obj.data.valid_time=4076488923;
obj.data.home_prompt="鏇村娴烽噺绂忓埄锛岃鍏虫敞寰俊鍏紬鍙凤細IOS鍏ぞ";
obj.data.home_btn_prompt="缁釜姣涚殑璐 ";

$done({ body: JSON.stringify(obj) });
