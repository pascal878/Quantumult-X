// Build: 2025/3/9 17:46:25
(() => {
    var Xr = Object.defineProperty;
    var Yr = (l, e, t) => e in l ? Xr(l, e, { enumerable: true, configurable: true, writable: true, value: t }) : l[e] = t;
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
                        case 15:
                            if (M = B[k = k + 1 | 0] & 255, M >> 6 !== 2 || 247 < S) {
                                k = k - 1 | 0;
                                break;
                            }
                            L = (S & 7) << 6 | M & 63;
                            X = 5;
                            S = 256;
                        case 14:
                            M = B[k = k + 1 | 0] & 255;
                            L <<= 6;
                            L |= (S & 15) << 6 | M & 63;
                            X = M >> 6 === 2 ? X + 4 | 0 : 24;
                            S = S + 256 & 768;
                        case 13:
                        case 12:
                            M = B[k = k + 1 | 0] & 255;
                            L <<= 6;
                            L |= (S & 31) << 6 | M & 63;
                            X = X + 7 | 0;
                            if (k < I && M >> 6 === 2 && L >> X && 1114112 > L) {
                                S = L;
                                L = L - 65536 | 0;
                                if (0 <= L) {
                                    j = (L >> 10) + 55296 | 0;
                                    S = (L & 1023) + 56320 | 0;
                                    if (31 > $) {
                                        m[$] = j;
                                        $ = $ + 1 | 0;
                                        j = -1;
                                    } else {
                                        M = j;
                                        j = S;
                                        S = M;
                                    }
                                }
                            } else {
                                S >>= 8;
                                k = k - S - 1 | 0;
                                S = 65533;
                            }
                            L = X = 0;
                            U = k <= ce ? 32 : I - k | 0;
                            break;
                        default:
                            m[$] = S;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                            m[$] = 65533;
                    }
                }

                if (x += n(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15], m[16], m[17], m[18], m[19], m[20], m[21], m[22], m[23], m[24], m[25], m[26], m[27], m[28], m[29], m[30], m[31])) {
                    if (32 > $) {
                        x = x.slice(0, $ - 32 | 0);
                    }
                }

                if (k < I) {
                    if (m[0] = j, $ = ~j >>> 31, j = -1, x.length < D.length) {
                        continue;
                    }
                } else {
                    if (j !== -1) {
                        x += n(j);
                    }
                }

                D += x;
                x = "";
            }

            return D;
        };

        a.encode = function (B) {
            B = B === undefined ? "" : "" + B;
            var D = B.length | 0;
            var x = new s((D << 1) + 8 | 0);
            var k, I = 0;
            var ce = !o;

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
                                } else {
                                    if (57343 >= U) {
                                        U = 65533;
                                    }
                                }
                            }

                            if (!ce && k << 1 < I && k << 1 < (I - 7 | 0)) {
                                ce = true;
                                S = new s(3 * D);
                                S.set(x);
                                x = S;
                            }
                        }

                        x[I] = 224 | U >> 12;
                        x[I = I + 1 | 0] = 128 | U >> 6 & 63;
                    }

                    x[I = I + 1 | 0] = 128 | U & 63;
                }
            }

            return o ? x.subarray(0, I) : x.slice(0, I);
        };

        if (!b) {
            l.TextDecoder = e;
            l.TextEncoder = t;
        }
    })(globalThis);

    function Re(l) {
        let e = typeof l;
        if (e == "object") {
            if (Array.isArray(l)) {
                return "array";
            }
            if (l === null) {
                return "null";
            }
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
        if (l[l.length - 2] == "=") {
            e -= 2;
        } else if (l[l.length - 1] == "=") {
            e -= 1;
        }

        let t = new Uint8Array(e);
        let n = 0;
        let i = 0;
        let r;
        let c = 0;

        for (let o = 0; o < l.length; o++) {
            if (r = we[l.charCodeAt(o)], r === undefined) {
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
                    c = r;
                    i = 1;
                    break;
                case 1:
                    t[n++] = c << 2 | (r & 48) >> 4;
                    c = r;
                    i = 2;
                    break;
                case 2:
                    t[n++] = (c & 15) << 4 | (r & 60) >> 2;
                    c = r;
                    i = 3;
                    break;
                case 3:
                    t[n++] = (c & 3) << 6 | r;
                    i = 0;
                    break;
            }
        }

        if (i == 1) {
            throw Error("invalid base64 string.");
        }

        return t.subarray(0, n);
    }

    function kr(l) {
        let e = "";
        let t = 0;
        let n;
        let i = 0;

        for (let r = 0; r < l.length; r++) {
            switch (n = l[r], t) {
                case 0:
                    e += A[n >> 2];
                    i = (n & 3) << 4;
                    t = 1;
                    break;
                case 1:
                    e += A[i | n >> 4];
                    i = (n & 15) << 2;
                    t = 2;
                    break;
                case 2:
                    e += A[i | n >> 6];
                    e += A[n & 63];
                    t = 0;
                    break;
            }
        }

        if (t) {
            e += A[i];
            e += "=";
            if (t == 1) {
                e += "=";
            }
        }

        return e;
    }

    var f;
    (function (l) {
        l.symbol = Symbol.for("protobuf-ts/unknown");
        l.onRead = (t, n, i, r, c) => {
            (e(n) ? n[l.symbol] : n[l.symbol] = []).push({ no: i, wireType: r, data: c });
        };
        l.onWrite = (t, n, i) => {
            for (let { no: r, wireType: c, data: o } of l.list(n)) {
                i.tag(r, c).raw(o);
            }
        };
        l.list = (t, n) => {
            if (e(t)) {
                let i = t[l.symbol];
                return n ? i.filter(r => r.no == n) : i;
            }
            return [];
        };
        l.last = (t, n) => l.list(t, n).slice(-1)[0];

        let e = t => t && Array.isArray(t[l.symbol]);
    })(f || (f = {}));

    var u;
    (function (l) {
        l[l.Varint = 0] = "Varint";
        l[l.Bit64 = 1] = "Bit64";
        l[l.LengthDelimited = 2] = "LengthDelimited";
        l[l.StartGroup = 3] = "StartGroup";
        l[l.EndGroup = 4] = "EndGroup";
        l[l.Bit32 = 5] = "Bit32";
    })(u || (u = {}));

    function Rr() {
        let l = 0;
        let e = 0;

        for (let n = 0; n < 28; n += 7) {
            let i = this.buf[this.pos++];
            if (l |= (i & 127) << n, !(i & 128)) {
                return this.assertBounds(), [l, e];
            }
        }

        let t = this.buf[this.pos++];
        if (l |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128)) {
            return this.assertBounds(), [l, e];
        }

        for (let n = 3; n <= 31; n += 7) {
            let i = this.buf[this.pos++];
            if (e |= (i & 127) << n, !(i & 128)) {
                return this.assertBounds(), [l, e];
            }
        }

        throw new Error("invalid varint");
    }

    function Te(l, e, t) {
        for (let r = 0; r < 28; r = r + 7) {
            let c = l >>> r;
            let o = !(!(c >>> 7) && e == 0);
            let s = (o ? c | 128 : c) & 255;
            if (t.push(s), !o) {
                return;
            }
        }

        let n = l >>> 28 & 15 | (e & 7) << 4;
        let i = !!(e >> 3);

        if (t.push((i ? n | 128 : n) & 255), !!i) {
            for (let r = 3; r < 31; r = r + 7) {
                let c = e >>> r;
                let o = !!(c >>> 7);
                let s = (o ? c | 128 : c) & 255;
                if (t.push(s), !o) {
                    return;
                }
            }
            t.push(e >>> 31 & 1);
        }
    }

    var Be = (1 << 16) * (1 << 16);

    function Ge(l) {
        let e = l[0] == "-";
        if (e) {
            l = l.slice(1);
        }

        let t = 1e6;
        let n = 0;
        let i = 0;

        function r(c, o) {
            let s = Number(l.slice(c, o));
            i *= t;
            n = n * t + s;
            if (n >= Be) {
                i = i + (n / Be | 0);
                n = n % Be;
            }
        }

        r(-24, -18);
        r(-18, -12);
        r(-12, -6);
        r(-6);

        return [e, n, i];
    }

    function Ie(l, e) {
        if (e >>> 0 <= 2097151) {
            return "" + (Be * e + (l >>> 0));
        }

        let t = l & 16777215;
        let n = (l >>> 24 | e << 8) >>> 0 & 16777215;
        let i = e >> 16 & 65535;
        let r = t + n * 6777216 + i * 6710656;
        let c = n + i * 8147497;
        let o = i * 2;
        let s = 1e7;

        if (r >= s) {
            c += Math.floor(r / s);
            r %= s;
        }
        if (c >= s) {
            o += Math.floor(c / s);
            c %= s;
        }

        function a(d, g) {
            let b = d ? String(d) : "";
            return g ? "0000000".slice(b.length) + b : b;
        }

        return a(o, 0) + a(c, o) + a(r, 1);
    }

    function Ke(l, e) {
        if (l >= 0) {
            for (; l > 127;) {
                e.push(l & 127 | 128);
                l = l >>> 7;
            }
            e.push(l);
        } else {
            for (let t = 0; t < 9; t++) {
                e.push(l & 127 | 128);
                l = l >> 7;
            }
            e.push(1);
        }
    }

    function wr() {
        let l = this.buf[this.pos++];
        let e = l & 127;

        if (!(l & 128)) {
            return this.assertBounds(), e;
        }

        if (l = this.buf[this.pos++], e |= (l & 127) << 7, !(l & 128)) {
            return this.assertBounds(), e;
        }

        if (l = this.buf[this.pos++], e |= (l & 127) << 14, !(l & 128)) {
            return this.assertBounds(), e;
        }

        if (l = this.buf[this.pos++], e |= (l & 127) << 21, !(l & 128)) {
            return this.assertBounds(), e;
        }

        l = this.buf[this.pos++];
        e |= (l & 15) << 28;

        for (let t = 5; l & 128 && t < 10; t++) {
            l = this.buf[this.pos++];
        }

        if (l & 128) {
            throw new Error("invalid varint");
        }

        return this.assertBounds(), e >>> 0;
    }

    var N;

    function qr() {
        let l = new DataView(new ArrayBuffer(8));
        N = globalThis.BigInt !== undefined && typeof l.getBigInt64 == "function" && typeof l.getBigUint64 == "function" && typeof l.setBigInt64 == "function" && typeof l.setBigUint64 == "function" ? {
            MIN: BigInt("-9223372036854775808"),
            MAX: BigInt("9223372036854775807"),
            UMIN: BigInt("0"),
            UMAX: BigInt("18446744073709551615"),
            C: BigInt,
            V: l
        } : undefined;
    }

    qr();

    function Br(l) {
        if (!l) {
            throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
        }
    }

    var Tr = /^-?[0-9]+$/;
    var We = 4294967296;
    var Ne = 2147483648;

    var xe = class {
        constructor(e, t) {
            this.lo = e | 0;
            this.hi = t | 0;
        }

        isZero() {
            return this.lo == 0 && this.hi == 0;
        }

        toNumber() {
            let e = this.hi * We + (this.lo >>> 0);
            if (!Number.isSafeInteger(e)) {
                throw new Error("cannot convert to safe number");
            }
            return e;
        }
    };

    var P = class extends xe {
        static from(e) {
            if (N) {
                switch (typeof e) {
                    case "string":
                        if (e == "0") {
                            return this.ZERO;
                        }
                        if (e == "") {
                            throw new Error("string is no integer");
                        }
                        e = N.C(e);
                    case "number":
                        if (e === 0) {
                            return this.ZERO;
                        }
                        e = N.C(e);
                    case "bigint":
                        if (!e) {
                            return this.ZERO;
                        }
                        if (e < N.UMIN) {
                            throw new Error("signed value for ulong");
                        }
                        if (e > N.UMAX) {
                            throw new Error("ulong too large");
                        }
                        N.V.setBigUint64(0, e, true);
                        return new P(N.V.getInt32(0, true), N.V.getInt32(4, true));
                }
            } else {
                switch (typeof e) {
                    case "string":
                        if (e == "0") {
                            return this.ZERO;
                        }
                        if (e = e.trim(), !Tr.test(e)) {
                            throw new Error("string is no integer");
                        }
                        let [t, n, i] = Ge(e);
                        if (t) {
                            throw new Error("signed value for ulong");
                        }
                        return new P(n, i);
                    case "number":
                        if (e == 0) {
                            return this.ZERO;
                        }
                        if (!Number.isSafeInteger(e)) {
                            throw new Error("number is no integer");
                        }
                        if (e < 0) {
                            throw new Error("signed value for ulong");
                        }
                        return new P(e, e / We);
                }
            }

            throw new Error("unknown value " + typeof e);
        }

        toString() {
            return N ? this.toBigInt().toString() : Ie(this.lo, this.hi);
        }

        toBigInt() {
            Br(N);
            N.V.setInt32(0, this.lo, true);
            N.V.setInt32(4, this.hi, true);
            return N.V.getBigUint64(0, true);
        }
    };

    P.ZERO = new P(0, 0);

    var T = class extends xe {
        static from(e) {
            if (N) {
                switch (typeof e) {
                    case "string":
                        if (e == "0") {
                            return this.ZERO;
                        }
                        if (e == "") {
                            throw new Error("string is no integer");
                        }
                        e = N.C(e);
                    case "number":
                        if (e === 0) {
                            return this.ZERO;
                        }
                        e = N.C(e);
                    case "bigint":
                        if (!e) {
                            return this.ZERO;
                        }
                        if (e < N.MIN) {
                            throw new Error("signed long too small");
                        }
                        if (e > N.MAX) {
                            throw new Error("signed long too large");
                        }
                        N.V.setBigInt64(0, e, true);
                        return new T(N.V.getInt32(0, true), N.V.getInt32(4, true));
                }
            } else {
                switch (typeof e) {
                    case "string":
                        if (e == "0") {
                            return this.ZERO;
                        }
                        if (e = e.trim(), !Tr.test(e)) {
                            throw new Error("string is no integer");
                        }
                        let [t, n, i] = Ge(e);
                        if (t) {
                            if (i > Ne || i == Ne && n != 0) {
                                throw new Error("signed long too small");
                            }
                        } else {
                            if (i >= Ne) {
                                throw new Error("signed long too large");
                            }
                        }
                        let r = new T(n, i);
                        return t ? r.negate() : r;
                    case "number":
                        if (e == 0) {
                            return this.ZERO;
                        }
                        if (!Number.isSafeInteger(e)) {
                            throw new Error("number is no integer");
                        }
                        return e > 0 ? new T(e, e / We) : new T(-e, -e / We).negate();
                }
            }

            throw new Error("unknown value " + typeof e);
        }

        isNegative() {
            return (this.hi & Ne) !== 0;
        }

        negate() {
            let e = ~this.hi;
            let t = this.lo;
            if (t) {
                t = ~t + 1;
            } else {
                e += 1;
            }
            return new T(t, e);
        }

        toString() {
            if (N) {
                return this.toBigInt().toString();
            }
            if (this.isNegative()) {
                let e = this.negate();
                return "-" + Ie(e.lo, e.hi);
            }
            return Ie(this.lo, this.hi);
        }

        toBigInt() {
            Br(N);
            N.V.setInt32(0, this.lo, true);
            N.V.setInt32(4, this.hi, true);
            return N.V.getBigInt64(0, true);
        }
    };

    T.ZERO = new T(0, 0);

    var Ir = { readUnknownField: true, readerFactory: l => new Je(l) };

    function Nr(l) {
        return l ? Object.assign(Object.assign({}, Ir), l) : Ir;
    }

    var Je = class {
        constructor(e, t) {
            this.varint64 = Rr;
            this.uint32 = wr;
            this.buf = e;
            this.len = e.length;
            this.pos = 0;
            this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
            this.textDecoder = t ?? new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
        }

        tag() {
            let e = this.uint32();
            let t = e >>> 3;
            let n = e & 7;
            if (t <= 0 || n < 0 || n > 5) {
                throw new Error("illegal tag: field no " + t + " wire type " + n);
            }
            return [t, n];
        }

        skip(e) {
            let t = this.pos;
            switch (e) {
                case u.Varint:
                    for (; this.buf[this.pos++] & 128;);
                    break;
                case u.Bit64:
                    this.pos += 4;
                case u.Bit32:
                    this.pos += 4;
                    break;
                case u.LengthDelimited:
                    let n = this.uint32();
                    this.pos += n;
                    break;
                case u.StartGroup:
                    let i;
                    for (; (i = this.tag()[1]) !== u.EndGroup;) {
                        this.skip(i);
                    }
                    break;
                default:
                    throw new Error("cant skip wire type " + e);
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos);
        }

        assertBounds() {
            if (this.pos > this.len) {
                throw new RangeError("premature EOF");
            }
        }

        int32() {
            return this.uint32() | 0;
        }

        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(e & 1);
        }

        int64() {
            return new T(...this.varint64());
        }

        uint64() {
            return new P(...this.varint64());
        }

        sint64() {
            let [e, t] = this.varint64();
            let n = -(e & 1);
            e = (e >>> 1 | (t & 1) << 31) ^ n;
            t = t >>> 1 ^ n;
            return new T(e, t);
        }

        bool() {
            let [e, t] = this.varint64();
            return e !== 0 || t !== 0;
        }

        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, true);
        }

        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, true);
        }

        fixed64() {
            return new P(this.sfixed32(), this.sfixed32());
        }

        sfixed64() {
            return new T(this.sfixed32(), this.sfixed32());
        }

        float() {
            return this.view.getFloat32((this.pos += 4) - 4, true);
        }

        double() {
            return this.view.getFloat64((this.pos += 8) - 8, true);
        }

        bytes() {
            let e = this.uint32();
            let t = this.pos;
            this.pos += e;
            return this.assertBounds(), this.buf.subarray(t, t + e);
        }

        string() {
            return this.textDecoder.decode(this.bytes());
        }
    };

    function R(l, e) {
        if (!l) {
            throw new Error(e);
        }
    }

    var Zr = 34028234663852886e22;
    var zr = -34028234663852886e22;
    var Hr = 4294967295;
    var Qr = 2147483647;
    var ei = -2147483648;

    function K(l) {
        if (typeof l != "number") {
            throw new Error("invalid int 32: " + typeof l);
        }
        if (!Number.isInteger(l) || l > Qr || l < ei) {
            throw new Error("invalid int 32: " + l);
        }
    }

    function Y(l) {
        if (typeof l != "number") {
            throw new Error("invalid uint 32: " + typeof l);
        }
        if (!Number.isInteger(l) || l > Hr || l < 0) {
            throw new Error("invalid uint 32: " + l);
        }
    }

    function H(l) {
        if (typeof l != "number") {
            throw new Error("invalid float 32: " + typeof l);
        }
        if (Number.isFinite(l) && (l > Zr || l < zr)) {
            throw new Error("invalid float 32: " + l);
        }
    }

    var Wr = { writeUnknownFields: true, writerFactory: () => new _e };

    function xr(l) {
        return l ? Object.assign(Object.assign({}, Wr), l) : Wr;
    }

    var _e = class {
        constructor(e) {
            this.stack = [];
            this.textEncoder = e ?? new TextEncoder();
            this.chunks = [];
            this.buf = [];
        }

        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let i = 0; i < this.chunks.length; i++) {
                e += this.chunks[i].length;
            }
            let t = new Uint8Array(e);
            let n = 0;
            for (let i = 0; i < this.chunks.length; i++) {
                t.set(this.chunks[i], n);
                n += this.chunks[i].length;
            }
            this.chunks = [];
            return t;
        }

        fork() {
            this.stack.push({ chunks: this.chunks, buf: this.buf });
            this.chunks = [];
            this.buf = [];
            return this;
        }

        join() {
            let e = this.finish();
            let t = this.stack.pop();
            if (!t) {
                throw new Error("invalid state, fork stack empty");
            }
            this.chunks = t.chunks;
            this.buf = t.buf;
            this.uint32(e.byteLength);
            this.raw(e);
            return this;
        }

        tag(e, t) {
            return this.uint32((e << 3 | t) >>> 0);
        }

        raw(e) {
            if (this.buf.length) {
                this.chunks.push(new Uint8Array(this.buf));
                this.buf = [];
            }
            this.chunks.push(e);
            return this;
        }

        uint32(e) {
            for (Y(e); e > 127;) {
                this.buf.push(e & 127 | 128);
                e = e >>> 7;
            }
            this.buf.push(e);
            return this;
        }

        int32(e) {
            K(e);
            Ke(e, this.buf);
            return this;
        }

        bool(e) {
            this.buf.push(e ? 1 : 0);
            return this;
        }

        bytes(e) {
            this.uint32(e.byteLength);
            this.raw(e);
            return this;
        }

        string(e) {
            let t = this.textEncoder.encode(e);
            this.uint32(t.byteLength);
            this.raw(t);
            return this;
        }

        float(e) {
            H(e);
            let t = new Uint8Array(4);
            new DataView(t.buffer).setFloat32(0, e, true);
            this.raw(t);
            return this;
        }

        double(e) {
            let t = new Uint8Array(8);
            new DataView(t.buffer).setFloat64(0, e, true);
            this.raw(t);
            return this;
        }

        fixed32(e) {
            Y(e);
            let t = new Uint8Array(4);
            new DataView(t.buffer).setUint32(0, e, true);
            this.raw(t);
            return this;
        }

        sfixed32(e) {
            K(e);
            let t = new Uint8Array(4);
            new DataView(t.buffer).setInt32(0, e, true);
            this.raw(t);
            return this;
        }

        sint32(e) {
            K(e);
            e = (e << 1 ^ e >> 31) >>> 0;
            Ke(e, this.buf);
            return this;
        }

        sfixed64(e) {
            let t = new Uint8Array(8);
            let n = new DataView(t.buffer);
            let i = T.from(e);
            n.setInt32(0, i.lo, true);
            n.setInt32(4, i.hi, true);
            this.raw(t);
            return this;
        }

        fixed64(e) {
            let t = new Uint8Array(8);
            let n = new DataView(t.buffer);
            let i = P.from(e);
            n.setInt32(0, i.lo, true);
            n.setInt32(4, i.hi, true);
            this.raw(t);
            return this;
        }

        int64(e) {
            let t = T.from(e);
            Te(t.lo, t.hi, this.buf);
            return this;
        }

        sint64(e) {
            let t = T.from(e);
            let n = t.hi >> 31;
            let i = t.lo << 1 ^ n;
            let r = (t.hi << 1 | t.lo >>> 31) ^ n;
            Te(i, r, this.buf);
            return this;
        }

        uint64(e) {
            let t = P.from(e);
            Te(t.lo, t.hi, this.buf);
            return this;
        }
    };

    var Sr = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    var Pr = { ignoreUnknownFields: false };

    function Or(l) {
        return l ? Object.assign(Object.assign({}, Pr), l) : Pr;
    }

    function Ur(l) {
        return l ? Object.assign(Object.assign({}, Sr), l) : Sr;
    }

    var Se = Symbol.for("protobuf-ts/message-type");

    function Xe(l) {
        let e = false;
        let t = [];
        for (let n = 0; n < l.length; n++) {
            let i = l.charAt(n);
            if (i == "_") {
                e = true;
            } else if (/\d/.test(i)) {
                t.push(i);
                e = true;
            } else if (e) {
                t.push(i.toUpperCase());
                e = false;
            } else if (n == 0) {
                t.push(i.toLowerCase());
            } else {
                t.push(i);
            }
        }
        return t.join("");
    }

    var p;
    (function (l) {
        l[l.DOUBLE = 1] = "DOUBLE";
        l[l.FLOAT = 2] = "FLOAT";
        l[l.INT64 = 3] = "INT64";
        l[l.UINT64 = 4] = "UINT64";
        l[l.INT32 = 5] = "INT32";
        l[l.FIXED64 = 6] = "FIXED64";
        l[l.FIXED32 = 7] = "FIXED32";
        l[l.BOOL = 8] = "BOOL";
        l[l.STRING = 9] = "STRING";
        l[l.BYTES = 12] = "BYTES";
        l[l.UINT32 = 13] = "UINT32";
        l[l.SFIXED32 = 15] = "SFIXED32";
        l[l.SFIXED64 = 16] = "SFIXED64";
        l[l.SINT32 = 17] = "SINT32";
        l[l.SINT64 = 18] = "SINT64";
    })(p || (p = {}));

    var E;
    (function (l) {
        l[l.BIGINT = 0] = "BIGINT";
        l[l.STRING = 1] = "STRING";
        l[l.NUMBER = 2] = "NUMBER";
    })(E || (E = {}));

    var ue;
    (function (l) {
        l[l.NO = 0] = "NO";
        l[l.PACKED = 1] = "PACKED";
        l[l.UNPACKED = 2] = "UNPACKED";
    })(ue || (ue = {}));

    function Cr(l) {
        var e, t, n, i;
        l.localName = (e = l.localName) !== null && e !== undefined ? e : Xe(l.name);
        l.jsonName = (t = l.jsonName) !== null && t !== undefined ? t : Xe(l.name);
        l.repeat = (n = l.repeat) !== null && n !== undefined ? n : ue.NO;
        l.opt = (i = l.opt) !== null && i !== undefined ? i : l.repeat || l.oneof ? false : l.kind == "message";
        return l;
    }

    function Er(l) {
        if (typeof l != "object" || l === null || !l.hasOwnProperty("oneofKind")) {
            return false;
        }
        switch (typeof l.oneofKind) {
            case "string":
                return l[l.oneofKind] === undefined ? false : Object.keys(l).length == 2;
            case "undefined":
                return Object.keys(l).length == 1;
            default:
                return false;
        }
    }

    var Pe = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== undefined ? t : [];
        }

        prepare() {
            if (this.data) {
                return;
            }
            let e = [];
            let t = [];
            let n = [];
            for (let i of this.fields) {
                if (i.oneof) {
                    if (!n.includes(i.oneof)) {
                        n.push(i.oneof);
                        e.push(i.oneof);
                        t.push(i.oneof);
                    }
                } else {
                    t.push(i.localName);
                    switch (i.kind) {
                        case "scalar":
                        case "enum":
                            if (!i.opt || i.repeat) {
                                e.push(i.localName);
                            }
                            break;
                        case "message":
                            if (i.repeat) {
                                e.push(i.localName);
                            }
                            break;
                        case "map":
                            e.push(i.localName);
                            break;
                    }
                }
            }
            this.data = { req: e, known: t, oneofs: Object.values(n) };
        }

        is(e, t, n = false) {
            if (t < 0) {
                return true;
            }
            if (e == null || typeof e != "object") {
                return false;
            }
            this.prepare();
            let i = Object.keys(e);
            let r = this.data;
            if (i.length < r.req.length || r.req.some(c => !i.includes(c)) || !n && i.some(c => !r.known.includes(c))) {
                return false;
            }
            if (t < 1) {
                return true;
            }
            for (let c of r.oneofs) {
                let o = e[c];
                if (!Er(o)) {
                    return false;
                }
                if (o.oneofKind === undefined) {
                    continue;
                }
                let s = this.fields.find(a => a.localName === o.oneofKind);
                if (!s || !this.field(o[o.oneofKind], s, n, t)) {
                    return false;
                }
            }
            for (let c of this.fields) {
                if (c.oneof === undefined && !this.field(e[c.localName], c, n, t)) {
                    return false;
                }
            }
            return true;
        }

        field(e, t, n, i) {
            let r = t.repeat;
            switch (t.kind) {
                case "scalar":
                    return e === undefined ? t.opt : r ? this.scalars(e, t.T, i, t.L) : this.scalar(e, t.T, t.L);
                case "enum":
                    return e === undefined ? t.opt : r ? this.scalars(e, p.INT32, i) : this.scalar(e, p.INT32);
                case "message":
                    return e === undefined ? true : r ? this.messages(e, t.T(), n, i) : this.message(e, t.T(), n, i);
                case "map":
                    if (typeof e != "object" || e === null) {
                        return false;
                    }
                    if (i < 2) {
                        return true;
                    }
                    if (!this.mapKeys(e, t.K, i)) {
                        return false;
                    }
                    switch (t.V.kind) {
                        case "scalar":
                            return this.scalars(Object.values(e), t.V.T, i, t.V.L);
                        case "enum":
                            return this.scalars(Object.values(e), p.INT32, i);
                        case "message":
                            return this.messages(Object.values(e), t.V.T(), n, i);
                    }
                    break;
            }
            return true;
        }

        message(e, t, n, i) {
            return n ? t.isAssignable(e, i) : t.is(e, i);
        }

        messages(e, t, n, i) {
            if (!Array.isArray(e)) {
                return false;
            }
            if (i < 2) {
                return true;
            }
            if (n) {
                for (let r = 0; r < e.length && r < i; r++) {
                    if (!t.isAssignable(e[r], i - 1)) {
                        return false;
                    }
                }
            } else {
                for (let r = 0; r < e.length && r < i; r++) {
                    if (!t.is(e[r], i - 1)) {
                        return false;
                    }
                }
            }
            return true;
        }

        scalar(e, t, n) {
            let i = typeof e;
            switch (t) {
                case p.UINT64:
                case p.FIXED64:
                case p.INT64:
                case p.SFIXED64:
                case p.SINT64:
                    switch (n) {
                        case E.BIGINT:
                            return i == "bigint";
                        case E.NUMBER:
                            return i == "number" && !isNaN(e);
                        default:
                            return i == "string";
                    }
                case p.BOOL:
                    return i == "boolean";
                case p.STRING:
                    return i == "string";
                case p.BYTES:
                    return e instanceof Uint8Array;
                case p.DOUBLE:
                case p.FLOAT:
                    return i == "number" && !isNaN(e);
                default:
                    return i == "number" && Number.isInteger(e);
            }
        }

        scalars(e, t, n, i) {
            if (!Array.isArray(e)) {
                return false;
            }
            if (n < 2) {
                return true;
            }
            if (Array.isArray(e)) {
                for (let r = 0; r < e.length && r < n; r++) {
                    if (!this.scalar(e[r], t, i)) {
                        return false;
                    }
                }
            }
            return true;
        }

        mapKeys(e, t, n) {
            let i = Object.keys(e);
            switch (t) {
                case p.INT32:
                case p.FIXED32:
                case p.SFIXED32:
                case p.SINT32:
                case p.UINT32:
                    return this.scalars(i.slice(0, n).map(r => parseInt(r)), t, n);
                case p.BOOL:
                    return this.scalars(i.slice(0, n).map(r => r == "true" ? true : r == "false" ? false : r), t, n);
                default:
                    return this.scalars(i, t, n, E.STRING);
            }
        }
    };

    function F(l, e) {
        switch (e) {
            case E.BIGINT:
                return l.toBigInt();
            case E.NUMBER:
                return l.toNumber();
            default:
                return l.toString();
        }
    }

    var Oe = class {
        constructor(e) {
            this.info = e;
        }

        prepare() {
            var e;
            if (this.fMap === undefined) {
                this.fMap = {};
                let t = (e = this.info.fields) !== null && e !== undefined ? e : [];
                for (let n of t) {
                    this.fMap[n.name] = n;
                    this.fMap[n.jsonName] = n;
                    this.fMap[n.localName] = n;
                }
            }
        }

        assert(e, t, n) {
            if (!e) {
                let i = Re(n);
                if ((i == "number" || i == "boolean") && (i = n.toString())) {
                    throw new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`);
                }
            }
        }

        read(e, t, n) {
            this.prepare();
            let i = [];
            for (let [r, c] of Object.entries(e)) {
                let o = this.fMap[r];
                if (!o) {
                    if (!n.ignoreUnknownFields) {
                        throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`);
                    }
                    continue;
                }
                let s = o.localName;
                let a;
                if (o.oneof) {
                    if (c === null && (o.kind !== "enum" || o.T()[0] !== "google.protobuf.NullValue")) {
                        continue;
                    }
                    if (i.includes(o.oneof)) {
                        throw new Error(`Multiple members of the oneof group "${o.oneof}" of ${this.info.typeName} are present in JSON.`);
                    }
                    i.push(o.oneof);
                    a = t[o.oneof] = { oneofKind: s };
                } else {
                    a = t;
                }
                if (o.kind == "map") {
                    if (c === null) {
                        continue;
                    }
                    this.assert(gr(c), o.name, c);
                    let d = a[s];
                    for (let [g, b] of Object.entries(c)) {
                        this.assert(b !== null, o.name + " map value", null);
                        let m;
                        switch (o.V.kind) {
                            case "message":
                                m = o.V.T().internalJsonRead(b, n);
                                break;
                            case "enum":
                                if (m = this.enum(o.V.T(), b, o.name, n.ignoreUnknownFields), m === false) {
                                    continue;
                                }
                                break;
                            case "scalar":
                                m = this.scalar(b, o.V.T, o.V.L, o.name);
                                break;
                        }
                        this.assert(m !== undefined, o.name + " map value", b);
                        let B = g;
                        if (o.K == p.BOOL) {
                            B = B == "true" ? true : B == "false" ? false : B;
                        }
                        B = this.scalar(B, o.K, E.STRING, o.name).toString();
                        d[B] = m;
                    }
                } else if (o.repeat) {
                    if (c === null) {
                        continue;
                    }
                    this.assert(Array.isArray(c), o.name, c);
                    let d = a[s];
                    for (let g of c) {
                        this.assert(g !== null, o.name, null);
                        let b;
                        switch (o.kind) {
                            case "message":
                                b = o.T().internalJsonRead(g, n);
                                break;
                            case "enum":
                                if (b = this.enum(o.T(), g, o.name, n.ignoreUnknownFields), b === false) {
                                    continue;
                                }
                                break;
                            case "scalar":
                                b = this.scalar(g, o.T, o.L, o.name);
                                break;
                        }
                        this.assert(b !== undefined, o.name, c);
                        d.push(b);
                    }
                } else {
                    switch (o.kind) {
                        case "message":
                            if (c === null && o.T().typeName != "google.protobuf.Value") {
                                this.assert(o.oneof === undefined, o.name + " (oneof member)", null);
                                continue;
                            }
                            a[s] = o.T().internalJsonRead(c, n, a[s]);
                            break;
                        case "enum":
                            let d = this.enum(o.T(), c, 0, n.ignoreUnknownFields);
                            if (d === false) {
                                continue;
                            }
                            a[s] = d;
                            break;
                        case "scalar":
                            a[s] = this.scalar(c, o.T, o.L, o.name);
                            break;
                    }
                }
            }
            return t;
        }

        enum(e, t, n, i) {
            if (typeof t == "string") {
                for (let [r, c] of Object.entries(e)) {
                    if (c == t) {
                        return r;
                    }
                }
            } else if (typeof t == "number") {
                for (let [r, c] of Object.entries(e)) {
                    if (parseInt(r) == t) {
                        return c;
                    }
                }
            }
            if (!i) {
                throw new Error(`Cannot parse enum value "${t}" for ${this.info.typeName}#${n}`);
            }
            return false;
        }

        scalar(e, t, n, i) {
            switch (t) {
                case p.UINT64:
                case p.FIXED64:
                case p.INT64:
                case p.SFIXED64:
                case p.SINT64:
                    switch (n) {
                        case E.BIGINT:
                            return BigInt(e);
                        case E.NUMBER:
                            return Number(e);
                        default:
                            return String(e);
                    }
                case p.BOOL:
                    return e == "true" ? true : e == "false" ? false : e;
                case p.STRING:
                    return String(e);
                case p.BYTES:
                    return br(e);
                case p.DOUBLE:
                case p.FLOAT:
                    return Number(e);
                default:
                    return parseInt(e);
            }
        }
    };

    function xe(l) {
        let e = l.length;
        if (e % 2) {
            l = "0" + l;
        }
        e = l.length;
        let t = new Uint8Array(e / 2);
        for (let n = 0; n < e; n += 2) {
            let i = l.substring(0, 2);
            l = l.substring(2);
            t[n / 2] = parseInt(i, 16);
        }
        return t;
    }

    function oe() {
        // 2025/3/9 17:46:25
    }
});
