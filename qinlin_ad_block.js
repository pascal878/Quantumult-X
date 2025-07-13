// qinlin_ad_block.js
let body = {};
try {
    body = JSON.parse($response.body);
} catch(e) {
    body = {};
}
if (body.data) {
    if (Array.isArray(body.data)) {
        body.data = [];
    } else if (typeof body.data === 'object') {
        for (let key in body.data) delete body.data[key];
    }
}
$done({ body: JSON.stringify(body) });
