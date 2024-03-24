function D() {}
const rt = (t) => t;
function R(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function F(t) {
  return t();
}
function ct() {
  return Object.create(null);
}
function G(t) {
  t.forEach(F);
}
function z(t) {
  return typeof t == "function";
}
function lt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let m;
function ot(t, e) {
  return t === e
    ? !0
    : (m || (m = document.createElement("a")), (m.href = e), t === m.href);
}
function at(t) {
  return Object.keys(t).length === 0;
}
function H(t, ...e) {
  if (t == null) {
    for (const i of e) i(void 0);
    return D;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ut(t) {
  let e;
  return H(t, (n) => (e = n))(), e;
}
function ft(t, e, n) {
  t.$$.on_destroy.push(H(e, n));
}
function _t(t, e, n, i) {
  if (t) {
    const s = L(t, e, n, i);
    return t[0](s);
  }
}
function L(t, e, n, i) {
  return t[1] && i ? R(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function ht(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const l = [],
        r = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o];
      return l;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function dt(t, e, n, i, s, l) {
  if (s) {
    const r = L(e, n, i, l);
    t.p(r, s);
  }
}
function mt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function pt(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function yt(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function gt(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function bt(t) {
  return t ?? "";
}
function xt(t) {
  return t && z(t.destroy) ? t.destroy : D;
}
function Et(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
let y = !1;
function wt() {
  y = !0;
}
function vt() {
  y = !1;
}
function I(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function U(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let a = 0; a < e.length; a++) {
      const u = e[a];
      u.claim_order !== void 0 && c.push(u);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let c = 0; c < e.length; c++) {
    const a = e[c].claim_order,
      u =
        (s > 0 && e[n[s]].claim_order <= a
          ? s + 1
          : I(1, s, (B) => e[n[B]].claim_order, a)) - 1;
    i[c] = n[u] + 1;
    const A = u + 1;
    (n[A] = c), (s = Math.max(A, s));
  }
  const l = [],
    r = [];
  let o = e.length - 1;
  for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
    for (l.push(e[c - 1]); o >= c; o--) r.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) r.push(e[o]);
  l.reverse(), r.sort((c, a) => c.claim_order - a.claim_order);
  for (let c = 0, a = 0; c < r.length; c++) {
    for (; a < l.length && r[c].claim_order >= l[a].claim_order; ) a++;
    const u = a < l.length ? l[a] : null;
    t.insertBefore(r[c], u);
  }
}
function W(t, e) {
  t.appendChild(e);
}
function J(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Tt(t) {
  const e = T("style");
  return (e.textContent = "/* empty */"), K(J(t), e), e.sheet;
}
function K(t, e) {
  return W(t.head || t, e), e.sheet;
}
function Q(t, e) {
  if (y) {
    for (
      U(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function V(t, e, n) {
  t.insertBefore(e, n || null);
}
function X(t, e, n) {
  y && !n
    ? Q(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Nt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function T(t) {
  return document.createElement(t);
}
function M(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function N(t) {
  return document.createTextNode(t);
}
function At() {
  return N(" ");
}
function kt() {
  return N("");
}
function Ct(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function S(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Y = ["width", "height"];
function Dt(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = e[i])
      : i === "__value"
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set && Y.indexOf(i) === -1
      ? (t[i] = e[i])
      : S(t, i, e[i]);
}
function Ht(t, e) {
  for (const n in e) S(t, n, e[n]);
}
function Lt(t) {
  return t.dataset.svelteH;
}
function Mt(t) {
  return Array.from(t.childNodes);
}
function j(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function P(t, e, n, i, s = !1) {
  j(t);
  const l = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const o = t[r];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s || (t.claim_info.last_index = r),
          o
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const o = t[r];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          o
        );
      }
    }
    return i();
  })();
  return (
    (l.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    l
  );
}
function O(t, e, n, i) {
  return P(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const l = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const o = s.attributes[r];
        n[o.name] || l.push(o.name);
      }
      l.forEach((r) => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function St(t, e, n) {
  return O(t, e, n, T);
}
function jt(t, e, n) {
  return O(t, e, n, M);
}
function Z(t, e) {
  return P(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => N(e),
    !0
  );
}
function Pt(t) {
  return Z(t, " ");
}
function k(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === e) return i;
  }
  return -1;
}
function Ot(t, e) {
  const n = k(t, "HTML_TAG_START", 0),
    i = k(t, "HTML_TAG_END", n + 1);
  if (n === -1 || i === -1) return new g(e);
  j(t);
  const s = t.splice(n, i - n + 1);
  E(s[0]), E(s[s.length - 1]);
  const l = s.slice(1, s.length - 1);
  if (l.length === 0) return new g(e);
  for (const r of l)
    (r.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new g(e, l);
}
function qt(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Bt(t, e) {
  t.value = e ?? "";
}
function Rt(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function Ft(t, e, n) {
  t.classList.toggle(e, !!n);
}
function $(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Gt(t, e) {
  const n = [];
  let i = 0;
  for (const s of e.childNodes)
    if (s.nodeType === 8) {
      const l = s.textContent.trim();
      l === `HEAD_${t}_END`
        ? ((i -= 1), n.push(s))
        : l === `HEAD_${t}_START` && ((i += 1), n.push(s));
    } else i > 0 && n.push(s);
  return n;
}
class tt {
  is_svg = !1;
  e = void 0;
  n = void 0;
  t = void 0;
  a = void 0;
  constructor(e = !1) {
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg
        ? (this.e = M(n.nodeName))
        : (this.e = T(n.nodeType === 11 ? "TEMPLATE" : n.nodeName)),
      (this.t = n.tagName !== "TEMPLATE" ? n : n.content),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) V(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(E);
  }
}
class g extends tt {
  l = void 0;
  constructor(e = !1, n) {
    super(e), (this.e = this.n = null), (this.l = n);
  }
  c(e) {
    this.l ? (this.n = this.l) : super.c(e);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) X(this.t, this.n[n], e);
  }
}
function zt(t, e) {
  return new t(e);
}
let p;
function b(t) {
  p = t;
}
function h() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function It(t) {
  h().$$.on_mount.push(t);
}
function Ut(t) {
  h().$$.after_update.push(t);
}
function Wt(t) {
  h().$$.on_destroy.push(t);
}
function Jt() {
  const t = h();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const l = $(e, n, { cancelable: i });
      return (
        s.slice().forEach((r) => {
          r.call(t, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function Kt(t, e) {
  return h().$$.context.set(t, e), e;
}
function Qt(t) {
  return h().$$.context.get(t);
}
function Vt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const d = [],
  C = [];
let _ = [];
const w = [],
  q = Promise.resolve();
let v = !1;
function et() {
  v || ((v = !0), q.then(it));
}
function Xt() {
  return et(), q;
}
function nt(t) {
  _.push(t);
}
function Yt(t) {
  w.push(t);
}
const x = new Set();
let f = 0;
function it() {
  if (f !== 0) return;
  const t = p;
  do {
    try {
      for (; f < d.length; ) {
        const e = d[f];
        f++, b(e), st(e.$$);
      }
    } catch (e) {
      throw ((d.length = 0), (f = 0), e);
    }
    for (b(null), d.length = 0, f = 0; C.length; ) C.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      x.has(n) || (x.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; w.length; ) w.pop()();
  (v = !1), x.clear(), b(t);
}
function st(t) {
  if (t.fragment !== null) {
    t.update(), G(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(nt);
  }
}
function Zt(t) {
  const e = [],
    n = [];
  _.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (_ = e);
}
export {
  Tt as $,
  _t as A,
  Dt as B,
  dt as C,
  mt as D,
  ht as E,
  yt as F,
  Vt as G,
  C as H,
  Rt as I,
  Yt as J,
  Ft as K,
  bt as L,
  Wt as M,
  Ut as N,
  zt as O,
  Xt as P,
  ft as Q,
  Gt as R,
  Jt as S,
  ot as T,
  xt as U,
  ut as V,
  gt as W,
  nt as X,
  g as Y,
  Ot as Z,
  J as _,
  At as a,
  z as a0,
  $ as a1,
  rt as a2,
  ct as a3,
  it as a4,
  at as a5,
  Zt as a6,
  p as a7,
  b as a8,
  F as a9,
  d as aa,
  et as ab,
  wt as ac,
  vt as ad,
  Kt as ae,
  Qt as af,
  Et as ag,
  R as b,
  Pt as c,
  E as d,
  kt as e,
  pt as f,
  T as g,
  M as h,
  X as i,
  St as j,
  Mt as k,
  Lt as l,
  jt as m,
  Z as n,
  S as o,
  Bt as p,
  Ht as q,
  Q as r,
  lt as s,
  N as t,
  Ct as u,
  D as v,
  G as w,
  qt as x,
  It as y,
  Nt as z,
};
