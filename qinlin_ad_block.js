let body = {};
try {
  body = JSON.parse($response.body);
} catch (e) {
  body = {};
}

// 通用清空策略
function deepClean(obj) {
  if (Array.isArray(obj)) return [];
  if (typeof obj === 'object') {
    for (let key in obj) obj[key] = (typeof obj[key] === 'object') ? deepClean(obj[key]) : null;
    return obj;
  }
  return {};
}

if (body.data) {
  body.data = deepClean(body.data);
}

$done({ body: JSON.stringify(body) });
