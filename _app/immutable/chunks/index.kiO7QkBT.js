import {
  v as w,
  _ as J,
  d as X,
  $ as K,
  w as E,
  a0 as j,
  X as O,
  a1 as Q,
  a2 as I,
  a3 as U,
  k as T,
  a4 as W,
  a5 as Y,
  a6 as Z,
  a7 as tt,
  a8 as V,
  a9 as et,
  aa as nt,
  ab as it,
  ac as st,
  ad as rt,
} from "./scheduler.8cnpACNK.js";
const q = typeof window < "u";
let N = q ? () => window.performance.now() : () => Date.now(),
  B = q ? (t) => requestAnimationFrame(t) : w;
const k = new Set();
function G(t) {
  k.forEach((e) => {
    e.c(t) || (k.delete(e), e.f());
  }),
    k.size !== 0 && B(G);
}
function D(t) {
  let e;
  return (
    k.size === 0 && B(G),
    {
      promise: new Promise((n) => {
        k.add((e = { c: t, f: n }));
      }),
      abort() {
        k.delete(e);
      },
    }
  );
}
const P = new Map();
let R = 0;
function at(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function ot(t, e) {
  const n = { stylesheet: K(e), rules: {} };
  return P.set(t, n), n;
}
function z(t, e, n, s, u, a, l, i = 0) {
  const c = 16.666 / s;
  let r = `{
`;
  for (let $ = 0; $ <= 1; $ += c) {
    const m = e + (n - e) * a($);
    r +=
      $ * 100 +
      `%{${l(m, 1 - m)}}
`;
  }
  const d =
      r +
      `100% {${l(n, 1 - n)}}
}`,
    f = `__svelte_${at(d)}_${i}`,
    g = J(t),
    { stylesheet: h, rules: o } = P.get(g) || ot(g, t);
  o[f] ||
    ((o[f] = !0), h.insertRule(`@keyframes ${f} ${d}`, h.cssRules.length));
  const _ = t.style.animation || "";
  return (
    (t.style.animation = `${
      _ ? `${_}, ` : ""
    }${f} ${s}ms linear ${u}ms 1 both`),
    (R += 1),
    f
  );
}
function A(t, e) {
  const n = (t.style.animation || "").split(", "),
    s = n.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    ),
    u = n.length - s.length;
  u && ((t.style.animation = s.join(", ")), (R -= u), R || ft());
}
function ft() {
  B(() => {
    R ||
      (P.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && X(e);
      }),
      P.clear());
  });
}
let S;
function F() {
  return (
    S ||
      ((S = Promise.resolve()),
      S.then(() => {
        S = null;
      })),
    S
  );
}
function v(t, e, n) {
  t.dispatchEvent(Q(`${e ? "intro" : "outro"}${n}`));
}
const M = new Set();
let p;
function ht() {
  p = { r: 0, c: [], p };
}
function gt() {
  p.r || E(p.c), (p = p.p);
}
function ut(t, e) {
  t && t.i && (M.delete(t), t.i(e));
}
function mt(t, e, n, s) {
  if (t && t.o) {
    if (M.has(t)) return;
    M.add(t),
      p.c.push(() => {
        M.delete(t), s && (n && t.d(1), s());
      }),
      t.o(e);
  } else s && s();
}
const L = { duration: 0 };
function pt(t, e, n) {
  const s = { direction: "in" };
  let u = e(t, n, s),
    a = !1,
    l,
    i,
    c = 0;
  function r() {
    l && A(t, l);
  }
  function d() {
    const {
      delay: g = 0,
      duration: h = 300,
      easing: o = I,
      tick: _ = w,
      css: $,
    } = u || L;
    $ && (l = z(t, 0, 1, h, g, o, $, c++)), _(0, 1);
    const m = N() + g,
      y = m + h;
    i && i.abort(),
      (a = !0),
      O(() => v(t, !0, "start")),
      (i = D((x) => {
        if (a) {
          if (x >= y) return _(1, 0), v(t, !0, "end"), r(), (a = !1);
          if (x >= m) {
            const b = o((x - m) / h);
            _(b, 1 - b);
          }
        }
        return a;
      }));
  }
  let f = !1;
  return {
    start() {
      f || ((f = !0), A(t), j(u) ? ((u = u(s)), F().then(d)) : d());
    },
    invalidate() {
      f = !1;
    },
    end() {
      a && (r(), (a = !1));
    },
  };
}
function yt(t, e, n) {
  const s = { direction: "out" };
  let u = e(t, n, s),
    a = !0,
    l;
  const i = p;
  i.r += 1;
  let c;
  function r() {
    const {
      delay: d = 0,
      duration: f = 300,
      easing: g = I,
      tick: h = w,
      css: o,
    } = u || L;
    o && (l = z(t, 1, 0, f, d, g, o));
    const _ = N() + d,
      $ = _ + f;
    O(() => v(t, !1, "start")),
      "inert" in t && ((c = t.inert), (t.inert = !0)),
      D((m) => {
        if (a) {
          if (m >= $) return h(0, 1), v(t, !1, "end"), --i.r || E(i.c), !1;
          if (m >= _) {
            const y = g((m - _) / f);
            h(1 - y, y);
          }
        }
        return a;
      });
  }
  return (
    j(u)
      ? F().then(() => {
          (u = u(s)), r();
        })
      : r(),
    {
      end(d) {
        d && "inert" in t && (t.inert = c),
          d && u.tick && u.tick(1, 0),
          a && (l && A(t, l), (a = !1));
      },
    }
  );
}
function xt(t, e, n, s) {
  let a = e(t, n, { direction: "both" }),
    l = s ? 0 : 1,
    i = null,
    c = null,
    r = null,
    d;
  function f() {
    r && A(t, r);
  }
  function g(o, _) {
    const $ = o.b - l;
    return (
      (_ *= Math.abs($)),
      {
        a: l,
        b: o.b,
        d: $,
        duration: _,
        start: o.start,
        end: o.start + _,
        group: o.group,
      }
    );
  }
  function h(o) {
    const {
        delay: _ = 0,
        duration: $ = 300,
        easing: m = I,
        tick: y = w,
        css: x,
      } = a || L,
      b = { start: N() + _, b: o };
    o || ((b.group = p), (p.r += 1)),
      "inert" in t &&
        (o ? d !== void 0 && (t.inert = d) : ((d = t.inert), (t.inert = !0))),
      i || c
        ? (c = b)
        : (x && (f(), (r = z(t, l, o, $, _, m, x))),
          o && y(0, 1),
          (i = g(b, $)),
          O(() => v(t, o, "start")),
          D((C) => {
            if (
              (c &&
                C > c.start &&
                ((i = g(c, $)),
                (c = null),
                v(t, i.b, "start"),
                x && (f(), (r = z(t, l, i.b, i.duration, 0, m, a.css)))),
              i)
            ) {
              if (C >= i.end)
                y((l = i.b), 1 - l),
                  v(t, i.b, "end"),
                  c || (i.b ? f() : --i.group.r || E(i.group.c)),
                  (i = null);
              else if (C >= i.start) {
                const H = C - i.start;
                (l = i.a + i.d * m(H / i.duration)), y(l, 1 - l);
              }
            }
            return !!(i || c);
          }));
  }
  return {
    run(o) {
      j(a)
        ? F().then(() => {
            (a = a({ direction: o ? "in" : "out" })), h(o);
          })
        : h(o);
    },
    end() {
      f(), (i = c = null);
    },
  };
}
function vt(t, e, n) {
  const s = t.$$.props[e];
  s !== void 0 && ((t.$$.bound[s] = n), n(t.$$.ctx[s]));
}
function wt(t) {
  t && t.c();
}
function bt(t, e) {
  t && t.l(e);
}
function lt(t, e, n) {
  const { fragment: s, after_update: u } = t.$$;
  s && s.m(e, n),
    O(() => {
      const a = t.$$.on_mount.map(et).filter(j);
      t.$$.on_destroy ? t.$$.on_destroy.push(...a) : E(a), (t.$$.on_mount = []);
    }),
    u.forEach(O);
}
function ct(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (Z(n.after_update),
    E(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function dt(t, e) {
  t.$$.dirty[0] === -1 && (nt.push(t), it(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function kt(t, e, n, s, u, a, l = null, i = [-1]) {
  const c = tt;
  V(t);
  const r = (t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: w,
    not_equal: u,
    bound: U(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: U(),
    dirty: i,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  l && l(r.root);
  let d = !1;
  if (
    ((r.ctx = n
      ? n(t, e.props || {}, (f, g, ...h) => {
          const o = h.length ? h[0] : g;
          return (
            r.ctx &&
              u(r.ctx[f], (r.ctx[f] = o)) &&
              (!r.skip_bound && r.bound[f] && r.bound[f](o), d && dt(t, f)),
            g
          );
        })
      : []),
    r.update(),
    (d = !0),
    E(r.before_update),
    (r.fragment = s ? s(r.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      st();
      const f = T(e.target);
      r.fragment && r.fragment.l(f), f.forEach(X);
    } else r.fragment && r.fragment.c();
    e.intro && ut(t.$$.fragment), lt(t, e.target, e.anchor), rt(), W();
  }
  V(c);
}
class Et {
  $$ = void 0;
  $$set = void 0;
  $destroy() {
    ct(this, 1), (this.$destroy = w);
  }
  $on(e, n) {
    if (!j(n)) return w;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      s.push(n),
      () => {
        const u = s.indexOf(n);
        u !== -1 && s.splice(u, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Y(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const _t = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(_t);
export {
  Et as S,
  bt as a,
  mt as b,
  wt as c,
  gt as d,
  ct as e,
  vt as f,
  ht as g,
  pt as h,
  kt as i,
  xt as j,
  yt as k,
  D as l,
  lt as m,
  N as n,
  z as o,
  A as p,
  ut as t,
};
