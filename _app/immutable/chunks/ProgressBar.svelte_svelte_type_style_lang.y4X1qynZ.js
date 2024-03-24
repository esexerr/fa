import { w as S, r as h } from "./index.ropV_Qet.js";
import { V as M } from "./scheduler.8cnpACNK.js";
const d = {};
function w(e) {
  return e === "local" ? localStorage : sessionStorage;
}
function u(e, n, r) {
  const o = r?.serializer ?? JSON,
    l = r?.storage ?? "local";
  function f(a, i) {
    w(l).setItem(a, o.stringify(i));
  }
  if (!d[e]) {
    const a = S(n, (t) => {
        const s = w(l).getItem(e);
        s && t(o.parse(s));
        {
          const g = (c) => {
            c.key === e && t(c.newValue ? o.parse(c.newValue) : null);
          };
          return (
            window.addEventListener("storage", g),
            () => window.removeEventListener("storage", g)
          );
        }
      }),
      { subscribe: i, set: m } = a;
    d[e] = {
      set(t) {
        f(e, t), m(t);
      },
      update(t) {
        const s = t(M(a));
        f(e, s), m(s);
      },
      subscribe: i,
    };
  }
  return d[e];
}
u("modeOsPrefers", !1);
u("modeUserPrefers", void 0);
u("modeCurrent", !1);
const p = "(prefers-reduced-motion: reduce)";
function v() {
  return window.matchMedia(p).matches;
}
const E = h(v(), (e) => {
  {
    const n = (o) => {
        e(o.matches);
      },
      r = window.matchMedia(p);
    return (
      r.addEventListener("change", n),
      () => {
        r.removeEventListener("change", n);
      }
    );
  }
});
export { E as p };
