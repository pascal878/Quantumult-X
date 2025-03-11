// Build: 2025/3/9 17:46:25

(() => {
    var Xr = Object.defineProperty; 
    var Yr = (l, e, t) => e in l ? Xr(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t; 
    var de = (l, e, t) => (Yr(l, typeof e != "symbol" ? e + "" : e, t), t); 
    (function (l) {
        function e() { } 
        function t() { } 
        var n = String.fromCharCode; 
        var i = {}.toString; 
        var r = i.call(l.SharedArrayBuffer); 
        var c = i(); 
        var o = l.Uint8Array; 
        var s = o || Array; 
        var a = o ? ArrayBuffer : s; 
        var d = a.isView || function (B) { return B && "length" in B }; 
        var g = i.call(a.prototype); 
        a = t.prototype; 
        var b = l.TextEncoder; 
        var m = new (o ? Uint16Array : s)(32);

        // 文本解码函数
        e.prototype.decode = function (B) {
            if (!d(B)) {
                var D = i.call(B);
                if (D !== g && D !== r && D !== c) {
                    throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                }
                B = o ? new s(B) : B || [];
            }
            for (var x = D = "", k = 0, I = B.length | 0, ce = I - 32 | 0, U, S, L = 0, X = 0, M, $ = 0, j = -1; k < I;) {
                for (U = k <= ce ? 32 : I - k | 0; $ < U; k = k + 1 | 0, $ = $ + 1 | 0) {
                    switch (S = B[k] & 255, S >> 4) {
                        // 处理不同的字节编码情况
                        case 15:
                        case 14:
                        case 13:
                        case 12:
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                        default:
                            m[$] = S;
                            continue;
                    }
                }
                if (x += n(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15], m[16], m[17], m[18], m[19], m[20], m[21], m[22], m[23], m[24], m[25], m[26], m[27], m[28], m[29], m[30], m[31]), 32 > $ && (x = x.slice(0, $ - 32 | 0)), k < I) {
                    if (m[0] = j, $ = ~j >>> 31, j = -1, x.length < D.length) continue;
                } else j !== -1 && (x += n(j));
                D += x, x = "";
            }
            return D;
        };

        // 文本编码函数
        a.encode = function (B) {
            B = B === void 0 ? "" : "" + B;
            var D = B.length | 0;
            var x = new s((D << 1) + 8 | 0);
            var k, I = 0, ce = !o;
            for (k = 0; k < D; k = k + 1 | 0, I = I + 1 | 0) {
                var U = B.charCodeAt(k) | 0;
                if (127 >= U) {
                    x[I] = U;
                } else {
                    if (2047 >= U) {
                        x[I] = 192 | U >> 6;
                    } else {
                        e: {
                            if (55296 <= U) {
                                if (56319 >= U) {
                                    var S = B.charCodeAt(k = k + 1 | 0) | 0;
                                    if (56320 <= S && 57343 >= S) {
                                        if (U = (U << 10) + S - 56613888 | 0, 65535 < U) {
                                            x[I] = 240 | U >> 18;
                                            x[I = I + 1 | 0] = 128 | U >> 12 & 63;
                                            x[I = I + 1 | 0] = 128 | U >> 6 & 63;
                                            x[I = I + 1 | 0] = 128 | U & 63;
                                            continue;
                                        }
                                        break e;
                                    }
                                    U = 65533;
                                } else 57343 >= U && (U = 65533);
                                !ce && k << 1 < I && k << 1 < (I - 7 | 0) && (ce = !0, S = new s(3 * D), S.set(x), x = S);
                            }
                            x[I] = 224 | U >> 12;
                            x[I = I + 1 | 0] = 128 | U >> 6 & 63;
                        }
                        x[I = I + 1 | 0] = 128 | U & 63;
                    }
                }
            }
            return o ? x.subarray(0, I) : x.slice(0, I);
        };
        b || (l.TextDecoder = e, l.TextEncoder = t);
    })(globalThis);
})();

function Re(l) {
    let e = typeof l;
    if (e == "object") {
        if (Array.isArray(l)) return "array";
        if (l === null) return "null";
    }
    return e;
}

function gr(l) {
    return l !== null && typeof l == "object" && !Array.isArray(l);
}

var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
var we = [];
for (let l = 0; l < A.length; l++) {
    we[A[l].charCodeAt(0)] = l;
}
we["-".charCodeAt(0)] = A.indexOf("+");
we["_".charCodeAt(0)] = A.indexOf("/");

function br(l) {
    let e = l.length * 3 / 4;
    l[l.length - 2] == "=" ? e -= 2 : l[l.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e);
    let n = 0, i = 0, r, c = 0;
    for (let o = 0; o < l.length; o++) {
        if (r = we[l.charCodeAt(o)], r === void 0) {
            switch (l[o]) {
                case "=":
                    i = 0;
                case `
    `:
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
        }
        switch (i) {
            case 0:
                c = r, i = 1;
                break;
            case 1:
                t[n++] = c << 2 | (r & 48) >> 4, c = r, i = 2;
                break;
            case 2:
                t[n++] = (c & 15) << 4 | (r & 60) >> 2, c = r, i = 3;
                break;
            case 3:
                t[n++] = (c & 3) << 6 | r, i = 0;
                break;
        }
    }
    if (i == 1) {
        throw Error("invalid base64 string.");
    }
    return t.subarray(0, n);
}
