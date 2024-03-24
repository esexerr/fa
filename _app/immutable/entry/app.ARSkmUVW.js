import { _ as u } from "../chunks/supabase.QNe-N2nr.js";
import {
  s as j,
  a as q,
  e as d,
  c as C,
  i as E,
  d as h,
  N as H,
  y as M,
  g as U,
  j as z,
  k as B,
  o as R,
  I as p,
  t as F,
  n as G,
  x as J,
  H as V,
  O as v,
  P as K,
} from "../chunks/scheduler.8cnpACNK.js";
import {
  S as Q,
  i as W,
  b as g,
  d as D,
  t as b,
  g as O,
  c as k,
  a as A,
  m as I,
  e as P,
} from "../chunks/index.kiO7QkBT.js";
const nt = {};
function X(s) {
  let t, i, n;
  var r = s[1][0];
  function c(e, o) {
    return { props: { data: e[3], form: e[2] } };
  }
  return (
    r && ((t = v(r, c(s))), s[12](t)),
    {
      c() {
        t && k(t.$$.fragment), (i = d());
      },
      l(e) {
        t && A(t.$$.fragment, e), (i = d());
      },
      m(e, o) {
        t && I(t, e, o), E(e, i, o), (n = !0);
      },
      p(e, o) {
        if (o & 2 && r !== (r = e[1][0])) {
          if (t) {
            O();
            const a = t;
            g(a.$$.fragment, 1, 0, () => {
              P(a, 1);
            }),
              D();
          }
          r
            ? ((t = v(r, c(e))),
              e[12](t),
              k(t.$$.fragment),
              b(t.$$.fragment, 1),
              I(t, i.parentNode, i))
            : (t = null);
        } else if (r) {
          const a = {};
          o & 8 && (a.data = e[3]), o & 4 && (a.form = e[2]), t.$set(a);
        }
      },
      i(e) {
        n || (t && b(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        t && g(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        e && h(i), s[12](null), t && P(t, e);
      },
    }
  );
}
function Y(s) {
  let t, i, n;
  var r = s[1][0];
  function c(e, o) {
    return {
      props: { data: e[3], $$slots: { default: [Z] }, $$scope: { ctx: e } },
    };
  }
  return (
    r && ((t = v(r, c(s))), s[11](t)),
    {
      c() {
        t && k(t.$$.fragment), (i = d());
      },
      l(e) {
        t && A(t.$$.fragment, e), (i = d());
      },
      m(e, o) {
        t && I(t, e, o), E(e, i, o), (n = !0);
      },
      p(e, o) {
        if (o & 2 && r !== (r = e[1][0])) {
          if (t) {
            O();
            const a = t;
            g(a.$$.fragment, 1, 0, () => {
              P(a, 1);
            }),
              D();
          }
          r
            ? ((t = v(r, c(e))),
              e[11](t),
              k(t.$$.fragment),
              b(t.$$.fragment, 1),
              I(t, i.parentNode, i))
            : (t = null);
        } else if (r) {
          const a = {};
          o & 8 && (a.data = e[3]),
            o & 8215 && (a.$$scope = { dirty: o, ctx: e }),
            t.$set(a);
        }
      },
      i(e) {
        n || (t && b(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        t && g(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        e && h(i), s[11](null), t && P(t, e);
      },
    }
  );
}
function Z(s) {
  let t, i, n;
  var r = s[1][1];
  function c(e, o) {
    return { props: { data: e[4], form: e[2] } };
  }
  return (
    r && ((t = v(r, c(s))), s[10](t)),
    {
      c() {
        t && k(t.$$.fragment), (i = d());
      },
      l(e) {
        t && A(t.$$.fragment, e), (i = d());
      },
      m(e, o) {
        t && I(t, e, o), E(e, i, o), (n = !0);
      },
      p(e, o) {
        if (o & 2 && r !== (r = e[1][1])) {
          if (t) {
            O();
            const a = t;
            g(a.$$.fragment, 1, 0, () => {
              P(a, 1);
            }),
              D();
          }
          r
            ? ((t = v(r, c(e))),
              e[10](t),
              k(t.$$.fragment),
              b(t.$$.fragment, 1),
              I(t, i.parentNode, i))
            : (t = null);
        } else if (r) {
          const a = {};
          o & 16 && (a.data = e[4]), o & 4 && (a.form = e[2]), t.$set(a);
        }
      },
      i(e) {
        n || (t && b(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        t && g(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        e && h(i), s[10](null), t && P(t, e);
      },
    }
  );
}
function L(s) {
  let t,
    i = s[6] && T(s);
  return {
    c() {
      (t = U("div")), i && i.c(), this.h();
    },
    l(n) {
      t = z(n, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        style: !0,
      });
      var r = B(t);
      i && i.l(r), r.forEach(h), this.h();
    },
    h() {
      R(t, "id", "svelte-announcer"),
        R(t, "aria-live", "assertive"),
        R(t, "aria-atomic", "true"),
        p(t, "position", "absolute"),
        p(t, "left", "0"),
        p(t, "top", "0"),
        p(t, "clip", "rect(0 0 0 0)"),
        p(t, "clip-path", "inset(50%)"),
        p(t, "overflow", "hidden"),
        p(t, "white-space", "nowrap"),
        p(t, "width", "1px"),
        p(t, "height", "1px");
    },
    m(n, r) {
      E(n, t, r), i && i.m(t, null);
    },
    p(n, r) {
      n[6]
        ? i
          ? i.p(n, r)
          : ((i = T(n)), i.c(), i.m(t, null))
        : i && (i.d(1), (i = null));
    },
    d(n) {
      n && h(t), i && i.d();
    },
  };
}
function T(s) {
  let t;
  return {
    c() {
      t = F(s[7]);
    },
    l(i) {
      t = G(i, s[7]);
    },
    m(i, n) {
      E(i, t, n);
    },
    p(i, n) {
      n & 128 && J(t, i[7]);
    },
    d(i) {
      i && h(t);
    },
  };
}
function $(s) {
  let t, i, n, r, c;
  const e = [Y, X],
    o = [];
  function a(_, m) {
    return _[1][1] ? 0 : 1;
  }
  (t = a(s)), (i = o[t] = e[t](s));
  let f = s[5] && L(s);
  return {
    c() {
      i.c(), (n = q()), f && f.c(), (r = d());
    },
    l(_) {
      i.l(_), (n = C(_)), f && f.l(_), (r = d());
    },
    m(_, m) {
      o[t].m(_, m), E(_, n, m), f && f.m(_, m), E(_, r, m), (c = !0);
    },
    p(_, [m]) {
      let w = t;
      (t = a(_)),
        t === w
          ? o[t].p(_, m)
          : (O(),
            g(o[w], 1, 1, () => {
              o[w] = null;
            }),
            D(),
            (i = o[t]),
            i ? i.p(_, m) : ((i = o[t] = e[t](_)), i.c()),
            b(i, 1),
            i.m(n.parentNode, n)),
        _[5]
          ? f
            ? f.p(_, m)
            : ((f = L(_)), f.c(), f.m(r.parentNode, r))
          : f && (f.d(1), (f = null));
    },
    i(_) {
      c || (b(i), (c = !0));
    },
    o(_) {
      g(i), (c = !1);
    },
    d(_) {
      _ && (h(n), h(r)), o[t].d(_), f && f.d(_);
    },
  };
}
function x(s, t, i) {
  let { stores: n } = t,
    { page: r } = t,
    { constructors: c } = t,
    { components: e = [] } = t,
    { form: o } = t,
    { data_0: a = null } = t,
    { data_1: f = null } = t;
  H(n.page.notify);
  let _ = !1,
    m = !1,
    w = null;
  M(() => {
    const l = n.page.subscribe(() => {
      _ &&
        (i(6, (m = !0)),
        K().then(() => {
          i(7, (w = document.title || "untitled page"));
        }));
    });
    return i(5, (_ = !0)), l;
  });
  function y(l) {
    V[l ? "unshift" : "push"](() => {
      (e[1] = l), i(0, e);
    });
  }
  function N(l) {
    V[l ? "unshift" : "push"](() => {
      (e[0] = l), i(0, e);
    });
  }
  function S(l) {
    V[l ? "unshift" : "push"](() => {
      (e[0] = l), i(0, e);
    });
  }
  return (
    (s.$$set = (l) => {
      "stores" in l && i(8, (n = l.stores)),
        "page" in l && i(9, (r = l.page)),
        "constructors" in l && i(1, (c = l.constructors)),
        "components" in l && i(0, (e = l.components)),
        "form" in l && i(2, (o = l.form)),
        "data_0" in l && i(3, (a = l.data_0)),
        "data_1" in l && i(4, (f = l.data_1));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 768 && n.page.set(r);
    }),
    [e, c, o, a, f, _, m, w, n, r, y, N, S]
  );
}
class rt extends Q {
  constructor(t) {
    super(),
      W(this, t, x, $, j, {
        stores: 8,
        page: 9,
        constructors: 1,
        components: 0,
        form: 2,
        data_0: 3,
        data_1: 4,
      });
  }
}
const ot = [
    () =>
      u(
        () => import("../nodes/0.wxlXxJf8.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/1.yhEXfXlW.js"),
        __vite__mapDeps([10, 1, 2, 8, 5, 11]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/2.niu_6gT2.js"),
        __vite__mapDeps([12, 1, 13, 2, 8, 5, 14]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/3.wa2gydaY.js"),
        __vite__mapDeps([15, 1, 2, 13, 16, 17, 18, 5, 6, 7, 19, 8]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/4.hKGghHfn.js"),
        __vite__mapDeps([20, 1, 2, 17, 18, 5, 13, 6, 7, 16, 8]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/5.Qc0_4le1.js"),
        __vite__mapDeps([21, 1, 2, 16, 17, 18, 5, 13, 6, 7]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/6.AzT0SqVY.js"),
        __vite__mapDeps([22, 1, 2, 13, 16, 17, 18, 5, 6, 7]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/7.OomIkzA2.js"),
        __vite__mapDeps([23, 1, 2, 13, 16, 17, 18, 5, 6, 7, 24, 25]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/8.BhaCzeVb.js"),
        __vite__mapDeps([26, 1, 13, 2, 27]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/9.7h-HuM9P.js"),
        __vite__mapDeps([28, 1, 2, 18, 5, 13, 6, 7, 29]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/10.2rOmPPiE.js"),
        __vite__mapDeps([30, 1, 2, 18, 5, 13, 6, 7, 29]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/11.V07hzdEt.js"),
        __vite__mapDeps([31, 1, 2]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/12.ov6lpMAg.js"),
        __vite__mapDeps([32, 1, 2]),
        import.meta.url
      ),
    () =>
      u(
        () => import("../nodes/13.xH70oPnK.js"),
        __vite__mapDeps([33, 1, 2, 16, 13, 19, 24, 6, 5, 7, 34]),
        import.meta.url
      ),
  ],
  st = [0],
  at = {
    "/": [-3],
    "/dashboard": [-4],
    "/dashboard/account": [-5],
    "/dashboard/admin": [-6],
    "/dashboard/premium": [-7],
    "/dashboard/socials": [-8],
    "/leaderboard": [-9],
    "/login": [9],
    "/register": [10],
    "/reset": [11],
    "/titletest": [12],
    "/[slug]": [-14],
  },
  _t = {
    handleError: ({ error: s }) => {
      console.error(s);
    },
    reroute: () => {},
  };
export {
  at as dictionary,
  _t as hooks,
  nt as matchers,
  ot as nodes,
  rt as root,
  st as server_loads,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "../nodes/0.wxlXxJf8.js",
      "../chunks/scheduler.8cnpACNK.js",
      "../chunks/index.kiO7QkBT.js",
      "../chunks/supabase.QNe-N2nr.js",
      "../chunks/_commonjsHelpers.HFhYSYcO.js",
      "../chunks/index.ropV_Qet.js",
      "../chunks/ProgressBar.svelte_svelte_type_style_lang.y4X1qynZ.js",
      "../assets/ProgressBar.oq5aOWfL.css",
      "../chunks/entry.q91-Gv2s.js",
      "../assets/0._KeOFbgI.css",
      "../nodes/1.yhEXfXlW.js",
      "../assets/1.5jJ4HPnr.css",
      "../nodes/2.niu_6gT2.js",
      "../chunks/each.SVyVMnQT.js",
      "../assets/2.71wPv6DT.css",
      "../nodes/3.wa2gydaY.js",
      "../chunks/spread.fGXxbmkC.js",
      "../chunks/dashboard.uPqFW6nm.js",
      "../chunks/Toast.lQwb1Edr.js",
      "../chunks/axios.G2rPRu76.js",
      "../nodes/4.hKGghHfn.js",
      "../nodes/5.Qc0_4le1.js",
      "../nodes/6.AzT0SqVY.js",
      "../nodes/7.OomIkzA2.js",
      "../chunks/iconmap.Kz0PC1Vv.js",
      "../assets/7.4tZNTnb3.css",
      "../nodes/8.BhaCzeVb.js",
      "../assets/8.nKB3fpHV.css",
      "../nodes/9.7h-HuM9P.js",
      "../assets/9.V2QoVBxK.css",
      "../nodes/10.2rOmPPiE.js",
      "../nodes/11.V07hzdEt.js",
      "../nodes/12.ov6lpMAg.js",
      "../nodes/13.xH70oPnK.js",
      "../assets/13.bcQCkQs-.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
