// adblock_qinlin.js
let obj = JSON.parse($response.body);
obj = {}; // 返回空广告数据
$done({body: JSON.stringify(obj)});
