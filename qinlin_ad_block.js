// adblock_qinlin.js
let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj.ads) {
    obj.ads = []; // 清空广告
  }
  if (obj.data && obj.data.adList) {
    obj.data.adList = []; // 有些广告字段名不同
  }

  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({ body }); // fallback 返回原数据
}
