var obj = JSON.parse($response.body);
 
obj = {
  "code": 0,
  "msg": "success",
  "traceId": "e71cde9117e9157af729693c5832549c",
  "data": {
    "memberLevel": "1",
    "iconImg": "http://wx.qlogo.cn/mmopen/NSBRB2OXZ0FeXibianQ0yr1LNibRdfMDqXoZUDtfWUPLOcQDho7GmbIAIdPwZAdcfl7TEO2CEmG3QT8Q58DGguCJuPx94icVica4v/132",
    "nv": 0,
    "canEraseCount": 1,
    "useVCount": 1,
    "isMember": true,
    "tips": "\u70b9\u51fb\u4e86\u89e3\u66f4\u591a",
    "joinMemberURL": "wanba://webview/sheet?_info=eyJqb2luTWVtYmVySXNTaG93Ijp0cnVlLCJvcGFxdWUiOjAsIndpZHRoIjoieDEiLCJ3aW5kb3dBbHBoYSI6MSwibGF5b3V0RnVsbFNjcmVlbiI6MSwidXJsIjoiaHR0cHM6Ly93d3cud29kaWRhc2hpLmNvbS93ZWIvZnJvbnQtYXBwL2FwcC9vcGVuLW1lbWJlci9pbmRleC5odG1sP3NvdXJjZT13aG9faXNfaGltIiwid2ViRnVsbFNjcmVlbiI6MSwiaGVpZ2h0IjoieDEiLCJmdWxsU2NyZWVuIjoxfQ==",
    "username": "(c ,)",
    "unReadTimes": 0
  }
 }

$done({body: JSON.stringify(obj)});
