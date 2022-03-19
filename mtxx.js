/*
QX
[rewrite_local]
^https:\/\/h5\.xiuxiu\.meitu\.com\/v1\/h5\/vip\/user_detail\.json url script-response-body https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js
[MITM]
hostname: api.meiyan.com
Surge
[Script]
myxj.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ABXYvvv/Surge/main/mtxx.js,type=http-response,pattern=^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/user\/show\.json
[MITM]
hostname: api.xiuxiu.meitu.com
*/

var obj = JSON.parse($response.body);

obj = {
  "degrade": 0,
  "error_code": 0,
  "data": {
    "avatar_url": "http:\/\/maavatar1.meitudata.com\/623545a0ed86c1251.jpg",
    "feed_count": 0,
    "identity_type": 0,
    "video_template_feed_count": 0,
    "background_url": "https:\/\/xximg1.meitudata.com\/6531090532355802113.png",
    "last_update_time": 0,
    "vip_type": 1,
    "identity_card": "165845214",
    "portal_icon": "",
    "template_feed_count": 0,
    "is_live": 0,
    "card_item": [
    ],
    "is_authorize": 1,
    "has_shop_permission": 0,
    "city_id": 0,
    "show_producer_level": 2,
    "topic_favorite_count": 0,
    "type": 0,
    "country_id": 0,
    "desc": "",
    "feed_like_count": 0,
    "follower_count": 6,
    "identity_desc": "null",
    "identity_new_status": 0,
    "be_favorites_count": 0,
    "portal_url": "",
    "screen_name": "欢乐马💾📇",
    "create_time": 1647658404,
    "is_invited": 0,
    "is_preset": 0,
    "identity_schema": "https:\/\/titan-h5.meitu.com\/xiu-h5\/authcard\/index.html",
    "portal_type": 0,
    "pendants_content": [
    ],
    "favorites_count": 0,
    "core": false,
    "has_permission": 0,
    "landmark_count": "0",
    "age": 20,
    "pendants": [
    ],
    "birthday": 631123200,
    "mt_num": 0,
    "uid": 1885661298,
    "level": 0,
    "friendship_status": 0,
    "identity_status": 0,
    "in_blacklist": 0,
    "gender": "f",
    "be_like_count": 0,
    "show_shopping_cart": 0,
    "free_trial": 1,
    "have_unlock_landmark": 0,
    "fan_count": 0,
    "landmark_ranking": "0",
    "constellation": "",
    "video_favorites_count": 0,
    "feed_favorites_count": 0,
    "province_id": 0,
    "magazine_count": 0
  },
  "msg": "成功",
  "error": "Ok",
  "ret": 0
 }

$done({body:JSON.stringify(obj)});
