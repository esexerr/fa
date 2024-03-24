import {
  s as x,
  g as h,
  t as k,
  a as D,
  j as _,
  k as f,
  n as q,
  d as p,
  c as H,
  o as E,
  i as C,
  r as o,
  x as y,
  v as I,
  Q as M,
  y as N,
} from "../chunks/scheduler.8cnpACNK.js";
import { S as P, i as Q } from "../chunks/index.kiO7QkBT.js";
import { s as w } from "../chunks/entry.q91-Gv2s.js";
const z = () => {
    const e = w;
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      updated: e.updated,
    };
  },
  V = {
    subscribe(e) {
      return z().page.subscribe(e);
    },
  };
function B(e) {
  let s,
    i,
    n = e[0]?.status + "",
    l,
    r,
    c,
    d = (e[0].error ? e[1][e[0].status] : "") + "",
    b,
    $,
    m,
    u,
    v = e[0].error?.message + "",
    g;
  return {
    c() {
      (s = h("div")),
        (i = h("h1")),
        (l = k(n)),
        (r = D()),
        (c = h("span")),
        (b = k(d)),
        ($ = D()),
        (m = h("div")),
        (u = h("h2")),
        (g = k(v)),
        this.h();
    },
    l(a) {
      s = _(a, "DIV", { class: !0 });
      var t = f(s);
      i = _(t, "H1", { class: !0 });
      var S = f(i);
      (l = q(S, n)),
        S.forEach(p),
        (r = H(t)),
        (c = _(t, "SPAN", { class: !0 }));
      var j = f(c);
      (b = q(j, d)), j.forEach(p), ($ = H(t)), (m = _(t, "DIV", {}));
      var F = f(m);
      u = _(F, "H2", { class: !0 });
      var A = f(u);
      (g = q(A, v)), A.forEach(p), F.forEach(p), t.forEach(p), this.h();
    },
    h() {
      E(i, "class", "svelte-ikycqx"),
        E(c, "class", "emoji svelte-ikycqx"),
        E(u, "class", "svelte-ikycqx"),
        E(s, "class", "error svelte-ikycqx");
    },
    m(a, t) {
      C(a, s, t),
        o(s, i),
        o(i, l),
        o(s, r),
        o(s, c),
        o(c, b),
        o(s, $),
        o(s, m),
        o(m, u),
        o(u, g);
    },
    p(a, [t]) {
      t & 1 && n !== (n = a[0]?.status + "") && y(l, n),
        t & 1 &&
          d !== (d = (a[0].error ? a[1][a[0].status] : "") + "") &&
          y(b, d),
        t & 1 && v !== (v = a[0].error?.message + "") && y(g, v);
    },
    i: I,
    o: I,
    d(a) {
      a && p(s);
    },
  };
}
function G(e, s, i) {
  let n;
  M(e, V, (r) => i(0, (n = r)));
  let l = { 404: "🤔", 500: "😱", 503: "🚧" };
  return (
    N(() => {
      V.subscribe((r) => {
        r.error && (document.title = `${r.status} - ${r.error.message}`);
      });
    }),
    [n, l]
  );
}
let O = class extends P {
  constructor(s) {
    super(), Q(this, s, G, B, x, {});
  }
};
export { O as component };
