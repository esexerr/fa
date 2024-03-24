import {
  s as Mt,
  g as h,
  a as b,
  t as L,
  j as f,
  k as m,
  l as x,
  c as C,
  d,
  n as M,
  o,
  i as y,
  r as i,
  x as yt,
  v as ot,
  y as Pt,
  u as At,
  z as Rt,
} from "../chunks/scheduler.8cnpACNK.js";
import { e as Dt } from "../chunks/each.SVyVMnQT.js";
import { S as St, i as jt } from "../chunks/index.kiO7QkBT.js";
import { g as _t } from "../chunks/entry.q91-Gv2s.js";
function Vt(c, t, s) {
  const e = c.slice();
  return (e[11] = t[s].username), (e[12] = t[s].views), (e[14] = s), e;
}
function qt(c) {
  let t,
    s = "Login",
    e,
    l,
    n = "Register";
  return {
    c() {
      (t = h("a")),
        (t.textContent = s),
        (e = b()),
        (l = h("a")),
        (l.textContent = n),
        this.h();
    },
    l(r) {
      (t = f(r, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        x(t) !== "svelte-xkowli" && (t.textContent = s),
        (e = C(r)),
        (l = f(r, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        x(l) !== "svelte-1x5imry" && (l.textContent = n),
        this.h();
    },
    h() {
      o(t, "href", "/login"),
        o(t, "class", "text-white hover:text-gray-300"),
        o(l, "href", "/register"),
        o(l, "class", "text-white hover:text-gray-300");
    },
    m(r, a) {
      y(r, t, a), y(r, e, a), y(r, l, a);
    },
    d(r) {
      r && (d(t), d(e), d(l));
    },
  };
}
function zt(c) {
  let t,
    s = "Dashboard";
  return {
    c() {
      (t = h("a")), (t.textContent = s), this.h();
    },
    l(e) {
      (t = f(e, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        x(t) !== "svelte-n1nb32" && (t.textContent = s),
        this.h();
    },
    h() {
      o(t, "href", "/dashboard"),
        o(t, "class", "text-white hover:text-gray-300");
    },
    m(e, l) {
      y(e, t, l);
    },
    d(e) {
      e && d(t);
    },
  };
}
function Et(c) {
  let t,
    s,
    e,
    l = "Discord";
  function n(u, v) {
    return u[0].session ? Ht : Ut;
  }
  let r = n(c),
    a = r(c);
  return {
    c() {
      (t = h("div")),
        a.c(),
        (s = b()),
        (e = h("a")),
        (e.textContent = l),
        this.h();
    },
    l(u) {
      t = f(u, "DIV", { class: !0 });
      var v = m(t);
      a.l(v),
        (s = C(v)),
        (e = f(v, "A", {
          href: !0,
          target: !0,
          class: !0,
          "data-svelte-h": !0,
        })),
        x(e) !== "svelte-1b7g5zx" && (e.textContent = l),
        v.forEach(d),
        this.h();
    },
    h() {
      o(e, "href", "https://discord.gg/shuttlebio"),
        o(e, "target", "_blank"),
        o(e, "class", "block text-white"),
        o(
          t,
          "class",
          "md:hidden bg-gray-900 text-white p-2 rounded-md space-y-2"
        );
    },
    m(u, v) {
      y(u, t, v), a.m(t, null), i(t, s), i(t, e);
    },
    p(u, v) {
      r !== (r = n(u)) && (a.d(1), (a = r(u)), a && (a.c(), a.m(t, s)));
    },
    d(u) {
      u && d(t), a.d();
    },
  };
}
function Ut(c) {
  let t,
    s = "Login",
    e,
    l,
    n = "Register";
  return {
    c() {
      (t = h("a")),
        (t.textContent = s),
        (e = b()),
        (l = h("a")),
        (l.textContent = n),
        this.h();
    },
    l(r) {
      (t = f(r, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        x(t) !== "svelte-177ymv" && (t.textContent = s),
        (e = C(r)),
        (l = f(r, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        x(l) !== "svelte-15npl0x" && (l.textContent = n),
        this.h();
    },
    h() {
      o(t, "href", "/login"),
        o(t, "class", "block"),
        o(l, "href", "/register"),
        o(l, "class", "block");
    },
    m(r, a) {
      y(r, t, a), y(r, e, a), y(r, l, a);
    },
    d(r) {
      r && (d(t), d(e), d(l));
    },
  };
}
function Ht(c) {
  let t,
    s = "Dashboard";
  return {
    c() {
      (t = h("a")), (t.textContent = s), this.h();
    },
    l(e) {
      (t = f(e, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        x(t) !== "svelte-1qdhxe9" && (t.textContent = s),
        this.h();
    },
    h() {
      o(t, "href", "/dashboard"), o(t, "class", "block");
    },
    m(e, l) {
      y(e, t, l);
    },
    d(e) {
      e && d(t);
    },
  };
}
function It(c) {
  let t,
    s = "Email Verified";
  return {
    c() {
      (t = h("h1")), (t.textContent = s), this.h();
    },
    l(e) {
      (t = f(e, "H1", { class: !0, "data-svelte-h": !0 })),
        x(t) !== "svelte-1l54ffz" && (t.textContent = s),
        this.h();
    },
    h() {
      o(t, "class", "text-4xl font-bold text-white mb-4");
    },
    m(e, l) {
      y(e, t, l);
    },
    d(e) {
      e && d(t);
    },
  };
}
function Ot(c) {
  let t,
    s = "Dashboard",
    e,
    l;
  return {
    c() {
      (t = h("button")), (t.textContent = s), this.h();
    },
    l(n) {
      (t = f(n, "BUTTON", { type: !0, class: !0, "data-svelte-h": !0 })),
        x(t) !== "svelte-1q4gywi" && (t.textContent = s),
        this.h();
    },
    h() {
      o(t, "type", "submit"), o(t, "class", "btn variant-ghost-primary mb-4");
    },
    m(n, r) {
      y(n, t, r), e || ((l = At(t, "click", c[7])), (e = !0));
    },
    d(n) {
      n && d(t), (e = !1), l();
    },
  };
}
function Nt(c) {
  let t,
    s = "Get Started",
    e,
    l;
  return {
    c() {
      (t = h("button")), (t.textContent = s), this.h();
    },
    l(n) {
      (t = f(n, "BUTTON", { type: !0, class: !0, "data-svelte-h": !0 })),
        x(t) !== "svelte-202j3y" && (t.textContent = s),
        this.h();
    },
    h() {
      o(t, "type", "submit"), o(t, "class", "btn variant-ghost-primary mb-4");
    },
    m(n, r) {
      y(n, t, r), e || ((l = At(t, "click", c[6])), (e = !0));
    },
    d(n) {
      n && d(t), (e = !1), l();
    },
  };
}
function Bt(c) {
  let t,
    s = "No data available.";
  return {
    c() {
      (t = h("p")), (t.textContent = s);
    },
    l(e) {
      (t = f(e, "P", { "data-svelte-h": !0 })),
        x(t) !== "svelte-pdq8ks" && (t.textContent = s);
    },
    m(e, l) {
      y(e, t, l);
    },
    p: ot,
    d(e) {
      e && d(t);
    },
  };
}
function Gt(c) {
  let t,
    s,
    e = Dt(c[5]),
    l = [];
  for (let n = 0; n < e.length; n += 1) l[n] = Tt(Vt(c, e, n));
  return {
    c() {
      (t = h("div")), (s = h("ol"));
      for (let n = 0; n < l.length; n += 1) l[n].c();
      this.h();
    },
    l(n) {
      t = f(n, "DIV", { class: !0 });
      var r = m(t);
      s = f(r, "OL", {});
      var a = m(s);
      for (let u = 0; u < l.length; u += 1) l[u].l(a);
      a.forEach(d), r.forEach(d), this.h();
    },
    h() {
      o(
        t,
        "class",
        "container card p-4 flex flex-col gap-4 items-center mx-auto max-w-screen-md"
      );
    },
    m(n, r) {
      y(n, t, r), i(t, s);
      for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(s, null);
    },
    p(n, r) {
      if (r & 32) {
        e = Dt(n[5]);
        let a;
        for (a = 0; a < e.length; a += 1) {
          const u = Vt(n, e, a);
          l[a] ? l[a].p(u, r) : ((l[a] = Tt(u)), l[a].c(), l[a].m(s, null));
        }
        for (; a < l.length; a += 1) l[a].d(1);
        l.length = e.length;
      }
    },
    d(n) {
      n && d(t), Rt(l, n);
    },
  };
}
function Tt(c) {
  let t,
    s,
    e,
    l = c[14] + 1 + "",
    n,
    r,
    a,
    u,
    v = c[11] + "",
    U,
    P,
    R = c[12] + "",
    p,
    A,
    g;
  return {
    c() {
      (t = h("li")),
        (s = h("a")),
        (e = L("#")),
        (n = L(l)),
        (r = L(". ")),
        (a = h("strong")),
        (u = L("/")),
        (U = L(v)),
        (P = L(" - ")),
        (p = L(R)),
        (A = L(" views")),
        (g = b()),
        this.h();
    },
    l(V) {
      t = f(V, "LI", {});
      var S = m(t);
      s = f(S, "A", { href: !0 });
      var E = m(s);
      (e = M(E, "#")),
        (n = M(E, l)),
        (r = M(E, ". ")),
        (a = f(E, "STRONG", {}));
      var T = m(a);
      (u = M(T, "/")),
        (U = M(T, v)),
        T.forEach(d),
        (P = M(E, " - ")),
        (p = M(E, R)),
        (A = M(E, " views")),
        E.forEach(d),
        (g = C(S)),
        S.forEach(d),
        this.h();
    },
    h() {
      o(s, "href", `/${c[11]}`);
    },
    m(V, S) {
      y(V, t, S),
        i(t, s),
        i(s, e),
        i(s, n),
        i(s, r),
        i(s, a),
        i(a, u),
        i(a, U),
        i(s, P),
        i(s, p),
        i(s, A),
        i(t, g);
    },
    p: ot,
    d(V) {
      V && d(t);
    },
  };
}
function Ft(c) {
  let t,
    s,
    e,
    l,
    n =
      '<a class="items-center space-x-2 flex px-2" href="/"><img src="/icon.ico" alt="logo" width="24" height="24"/> <span class="font-bold inline-block">shuttle.rip</span></a>',
    r,
    a,
    u,
    v,
    U = "Discord",
    P,
    R,
    p,
    A,
    g,
    V,
    S =
      '<h1 class="mb-2 svelte-vn0seh">shuttle.rip</h1> <p class="mb-4 svelte-vn0seh">A streamlined biolink experience</p>',
    E,
    T,
    I,
    j,
    K = "Stats",
    ct,
    H,
    O,
    G,
    mt = "Users",
    ht,
    W,
    Z,
    ft,
    N,
    F,
    xt = "Views",
    dt,
    X,
    $,
    ut,
    J,
    pt = "Top Views",
    vt;
  function bt(_, w) {
    return _[0].session ? zt : qt;
  }
  let tt = bt(c),
    q = tt(c),
    k = c[1] && Et(c),
    D = c[2] && It();
  function Ct(_, w) {
    return _[0].session ? Ot : Nt;
  }
  let et = Ct(c),
    z = et(c);
  function Lt(_, w) {
    return _[5].length > 0 ? Gt : Bt;
  }
  let Y = Lt(c)(c);
  return {
    c() {
      (t = h("div")),
        (s = h("header")),
        (e = h("div")),
        (l = h("div")),
        (l.innerHTML = n),
        (r = b()),
        (a = h("div")),
        q.c(),
        (u = b()),
        (v = h("a")),
        (v.textContent = U),
        (P = b()),
        k && k.c(),
        (R = b()),
        (p = h("div")),
        D && D.c(),
        (A = b()),
        (g = h("div")),
        (V = h("div")),
        (V.innerHTML = S),
        (E = b()),
        z.c(),
        (T = b()),
        (I = h("div")),
        (j = h("div")),
        (j.textContent = K),
        (ct = b()),
        (H = h("div")),
        (O = h("div")),
        (G = h("div")),
        (G.textContent = mt),
        (ht = b()),
        (W = h("p")),
        (Z = L(c[3])),
        (ft = b()),
        (N = h("div")),
        (F = h("div")),
        (F.textContent = xt),
        (dt = b()),
        (X = h("p")),
        ($ = L(c[4])),
        (ut = b()),
        (J = h("div")),
        (J.textContent = pt),
        (vt = b()),
        Y.c(),
        this.h();
    },
    l(_) {
      t = f(_, "DIV", { class: !0 });
      var w = m(t);
      s = f(w, "HEADER", { class: !0 });
      var gt = m(s);
      e = f(gt, "DIV", { class: !0 });
      var lt = m(e);
      (l = f(lt, "DIV", { class: !0, "data-svelte-h": !0 })),
        x(l) !== "svelte-2qucit" && (l.innerHTML = n),
        (r = C(lt)),
        (a = f(lt, "DIV", { class: !0 }));
      var st = m(a);
      q.l(st),
        (u = C(st)),
        (v = f(st, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        x(v) !== "svelte-cya3g2" && (v.textContent = U),
        st.forEach(d),
        lt.forEach(d),
        gt.forEach(d),
        (P = C(w)),
        k && k.l(w),
        (R = C(w)),
        (p = f(w, "DIV", { class: !0 }));
      var at = m(p);
      D && D.l(at), (A = C(at)), (g = f(at, "DIV", { class: !0 }));
      var Q = m(g);
      (V = f(Q, "DIV", { class: !0, "data-svelte-h": !0 })),
        x(V) !== "svelte-wzzqfm" && (V.innerHTML = S),
        (E = C(Q)),
        z.l(Q),
        (T = C(Q)),
        (I = f(Q, "DIV", { class: !0 }));
      var B = m(I);
      (j = f(B, "DIV", { class: !0, "data-svelte-h": !0 })),
        x(j) !== "svelte-1r0zd2p" && (j.textContent = K),
        (ct = C(B)),
        (H = f(B, "DIV", { class: !0 }));
      var nt = m(H);
      O = f(nt, "DIV", { class: !0 });
      var rt = m(O);
      (G = f(rt, "DIV", { class: !0, "data-svelte-h": !0 })),
        x(G) !== "svelte-1uovjxo" && (G.textContent = mt),
        (ht = C(rt)),
        (W = f(rt, "P", {}));
      var kt = m(W);
      (Z = M(kt, c[3])),
        kt.forEach(d),
        rt.forEach(d),
        (ft = C(nt)),
        (N = f(nt, "DIV", { class: !0 }));
      var it = m(N);
      (F = f(it, "DIV", { class: !0, "data-svelte-h": !0 })),
        x(F) !== "svelte-732wm2" && (F.textContent = xt),
        (dt = C(it)),
        (X = f(it, "P", {}));
      var wt = m(X);
      ($ = M(wt, c[4])),
        wt.forEach(d),
        it.forEach(d),
        nt.forEach(d),
        (ut = C(B)),
        (J = f(B, "DIV", { class: !0, "data-svelte-h": !0 })),
        x(J) !== "svelte-yat3lr" && (J.textContent = pt),
        (vt = C(B)),
        Y.l(B),
        B.forEach(d),
        Q.forEach(d),
        at.forEach(d),
        w.forEach(d),
        this.h();
    },
    h() {
      o(l, "class", "flex gap-6 items-center"),
        o(v, "href", "https://discord.gg/shuttlebio"),
        o(v, "class", "text-white hover:text-gray-300"),
        o(a, "class", "flex gap-4 items-center"),
        o(
          e,
          "class",
          "flex h-20 items-center justify-between py-6 lg:px-4 px-8"
        ),
        o(s, "class", "z-40 bg-background w-full max-w-5xl mx-auto"),
        o(V, "class", "text svelte-vn0seh"),
        o(j, "class", "text-2xl font-bold mb-4"),
        o(G, "class", "text-2xl font-bold mb-2"),
        o(
          O,
          "class",
          "container card p-4 flex flex-col items-center w-48 mx-2"
        ),
        o(F, "class", "text-2xl font-bold mb-2"),
        o(
          N,
          "class",
          "container card p-4 flex flex-col items-center w-48 mx-2"
        ),
        o(H, "class", "flex justify-center mt-4"),
        o(J, "class", "text-2xl font-bold mb-4 mt-4"),
        o(I, "class", "mb-8"),
        o(g, "class", "mt-12"),
        o(p, "class", "text-center mt-8"),
        o(t, "class", "flex min-h-screen flex-col");
    },
    m(_, w) {
      y(_, t, w),
        i(t, s),
        i(s, e),
        i(e, l),
        i(e, r),
        i(e, a),
        q.m(a, null),
        i(a, u),
        i(a, v),
        i(t, P),
        k && k.m(t, null),
        i(t, R),
        i(t, p),
        D && D.m(p, null),
        i(p, A),
        i(p, g),
        i(g, V),
        i(g, E),
        z.m(g, null),
        i(g, T),
        i(g, I),
        i(I, j),
        i(I, ct),
        i(I, H),
        i(H, O),
        i(O, G),
        i(O, ht),
        i(O, W),
        i(W, Z),
        i(H, ft),
        i(H, N),
        i(N, F),
        i(N, dt),
        i(N, X),
        i(X, $),
        i(I, ut),
        i(I, J),
        i(I, vt),
        Y.m(I, null);
    },
    p(_, [w]) {
      tt !== (tt = bt(_)) && (q.d(1), (q = tt(_)), q && (q.c(), q.m(a, u))),
        _[1]
          ? k
            ? k.p(_, w)
            : ((k = Et(_)), k.c(), k.m(t, R))
          : k && (k.d(1), (k = null)),
        _[2] ? D || ((D = It()), D.c(), D.m(p, A)) : D && (D.d(1), (D = null)),
        et !== (et = Ct(_)) && (z.d(1), (z = et(_)), z && (z.c(), z.m(g, T))),
        w & 8 && yt(Z, _[3]),
        w & 16 && yt($, _[4]),
        Y.p(_, w);
    },
    i: ot,
    o: ot,
    d(_) {
      _ && d(t), q.d(), k && k.d(), D && D.d(), z.d(), Y.d();
    },
  };
}
function Jt(c, t, s) {
  let e = !1,
    l = !1,
    n = 0,
    r = 0,
    a = 0,
    u = 0,
    { data: v } = t;
  const U = v.body.topUsers;
  Pt(async () => {
    const A = Date.now();
    (a = (await (await fetch("/api/stats/users", { method: "POST" })).json())
      .users),
      (u = (await (await fetch("/api/stats/views", { method: "POST" })).json())
        .totalViews);
    const T = () => {
      const j = Date.now() - A,
        K = Math.min(j / 3e3, 1);
      s(3, (n = Math.floor(K * a))),
        s(4, (r = Math.floor(K * u))),
        K < 1 ? requestAnimationFrame(T) : (s(3, (n = a)), s(4, (r = u)));
    };
    T(),
      new URLSearchParams(window.location.hash.substring(1)).has(
        "access_token"
      ) &&
        (s(2, (l = !0)),
        setTimeout(() => {
          _t("/dashboard");
        }, 1e3));
  });
  const P = () => _t("/register"),
    R = () => _t("/dashboard");
  return (
    (c.$$set = (p) => {
      "data" in p && s(0, (v = p.data));
    }),
    [v, e, l, n, r, U, P, R]
  );
}
class Zt extends St {
  constructor(t) {
    super(), jt(this, t, Jt, Ft, Mt, { data: 0 });
  }
}
export { Zt as component };
