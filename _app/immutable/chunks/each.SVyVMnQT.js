import { t as j, b as q } from "./index.kiO7QkBT.js";
import { w as z } from "./scheduler.8cnpACNK.js";
function E(n) {
  return n?.length !== void 0 ? n : Array.from(n);
}
function F(n, a) {
  n.d(1), a.delete(n.key);
}
function B(n, a) {
  q(n, 1, 1, () => {
    a.delete(n.key);
  });
}
function G(n, a) {
  n.f(), B(n, a);
}
function H(n, a, M, v, x, y, f, S, m, A, _, b) {
  let i = n.length,
    d = y.length,
    o = i;
  const h = {};
  for (; o--; ) h[n[o].key] = o;
  const c = [],
    r = new Map(),
    u = new Map(),
    g = [];
  for (o = d; o--; ) {
    const e = b(x, y, o),
      t = M(e);
    let s = f.get(t);
    s ? v && g.push(() => s.p(e, a)) : ((s = A(t, e)), s.c()),
      r.set(t, (c[o] = s)),
      t in h && u.set(t, Math.abs(o - h[t]));
  }
  const p = new Set(),
    k = new Set();
  function w(e) {
    j(e, 1), e.m(S, _), f.set(e.key, e), (_ = e.first), d--;
  }
  for (; i && d; ) {
    const e = c[d - 1],
      t = n[i - 1],
      s = e.key,
      l = t.key;
    e === t
      ? ((_ = e.first), i--, d--)
      : r.has(l)
      ? !f.has(s) || p.has(s)
        ? w(e)
        : k.has(l)
        ? i--
        : u.get(s) > u.get(l)
        ? (k.add(s), w(e))
        : (p.add(l), i--)
      : (m(t, f), i--);
  }
  for (; i--; ) {
    const e = n[i];
    r.has(e.key) || m(e, f);
  }
  for (; d; ) w(c[d - 1]);
  return z(g), c;
}
export { F as d, E as e, G as f, H as u };
