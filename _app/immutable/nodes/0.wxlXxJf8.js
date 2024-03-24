import {
  s as nn,
  A as on,
  C as rn,
  D as sn,
  E as an,
  y as cn,
} from "../chunks/scheduler.8cnpACNK.js";
import {
  S as ln,
  i as un,
  t as fn,
  b as dn,
} from "../chunks/index.kiO7QkBT.js";
import { s as gn } from "../chunks/supabase.QNe-N2nr.js";
import { g as pn } from "../chunks/_commonjsHelpers.HFhYSYcO.js";
import { w as ht } from "../chunks/index.ropV_Qet.js";
import "../chunks/ProgressBar.svelte_svelte_type_style_lang.y4X1qynZ.js";
import { i as bn } from "../chunks/entry.q91-Gv2s.js";
function mt(e) {
  return (
    e instanceof Map
      ? (e.clear =
          e.delete =
          e.set =
            function () {
              throw new Error("map is read-only");
            })
      : e instanceof Set &&
        (e.add =
          e.clear =
          e.delete =
            function () {
              throw new Error("set is read-only");
            }),
    Object.freeze(e),
    Object.getOwnPropertyNames(e).forEach((t) => {
      const n = e[t],
        i = typeof n;
      (i === "object" || i === "function") && !Object.isFrozen(n) && mt(n);
    }),
    e
  );
}
class ot {
  constructor(t) {
    t.data === void 0 && (t.data = {}),
      (this.data = t.data),
      (this.isMatchIgnored = !1);
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function Et(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
function ie(e, ...t) {
  const n = Object.create(null);
  for (const i in e) n[i] = e[i];
  return (
    t.forEach(function (i) {
      for (const s in i) n[s] = i[s];
    }),
    n
  );
}
const hn = "</span>",
  rt = (e) => !!e.scope,
  mn = (e, { prefix: t }) => {
    if (e.startsWith("language:")) return e.replace("language:", "language-");
    if (e.includes(".")) {
      const n = e.split(".");
      return [
        `${t}${n.shift()}`,
        ...n.map((i, s) => `${i}${"_".repeat(s + 1)}`),
      ].join(" ");
    }
    return `${t}${e}`;
  };
class En {
  constructor(t, n) {
    (this.buffer = ""), (this.classPrefix = n.classPrefix), t.walk(this);
  }
  addText(t) {
    this.buffer += Et(t);
  }
  openNode(t) {
    if (!rt(t)) return;
    const n = mn(t.scope, { prefix: this.classPrefix });
    this.span(n);
  }
  closeNode(t) {
    rt(t) && (this.buffer += hn);
  }
  value() {
    return this.buffer;
  }
  span(t) {
    this.buffer += `<span class="${t}">`;
  }
}
const st = (e = {}) => {
  const t = { children: [] };
  return Object.assign(t, e), t;
};
class We {
  constructor() {
    (this.rootNode = st()), (this.stack = [this.rootNode]);
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(t) {
    this.top.children.push(t);
  }
  openNode(t) {
    const n = st({ scope: t });
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1) return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); );
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(t) {
    return this.constructor._walk(t, this.rootNode);
  }
  static _walk(t, n) {
    return (
      typeof n == "string"
        ? t.addText(n)
        : n.children &&
          (t.openNode(n),
          n.children.forEach((i) => this._walk(t, i)),
          t.closeNode(n)),
      t
    );
  }
  static _collapse(t) {
    typeof t != "string" &&
      t.children &&
      (t.children.every((n) => typeof n == "string")
        ? (t.children = [t.children.join("")])
        : t.children.forEach((n) => {
            We._collapse(n);
          }));
  }
}
class _n extends We {
  constructor(t) {
    super(), (this.options = t);
  }
  addText(t) {
    t !== "" && this.add(t);
  }
  startScope(t) {
    this.openNode(t);
  }
  endScope() {
    this.closeNode();
  }
  __addSublanguage(t, n) {
    const i = t.root;
    n && (i.scope = `language:${n}`), this.add(i);
  }
  toHTML() {
    return new En(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function Ee(e) {
  return e ? (typeof e == "string" ? e : e.source) : null;
}
function _t(e) {
  return fe("(?=", e, ")");
}
function yn(e) {
  return fe("(?:", e, ")*");
}
function wn(e) {
  return fe("(?:", e, ")?");
}
function fe(...e) {
  return e.map((n) => Ee(n)).join("");
}
function xn(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object
    ? (e.splice(e.length - 1, 1), t)
    : {};
}
function Ze(...e) {
  return (
    "(" + (xn(e).capture ? "" : "?:") + e.map((i) => Ee(i)).join("|") + ")"
  );
}
function yt(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
function An(e, t) {
  const n = e && e.exec(t);
  return n && n.index === 0;
}
const Sn = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Ke(e, { joinWith: t }) {
  let n = 0;
  return e
    .map((i) => {
      n += 1;
      const s = n;
      let a = Ee(i),
        o = "";
      for (; a.length > 0; ) {
        const r = Sn.exec(a);
        if (!r) {
          o += a;
          break;
        }
        (o += a.substring(0, r.index)),
          (a = a.substring(r.index + r[0].length)),
          r[0][0] === "\\" && r[1]
            ? (o += "\\" + String(Number(r[1]) + s))
            : ((o += r[0]), r[0] === "(" && n++);
      }
      return o;
    })
    .map((i) => `(${i})`)
    .join(t);
}
const Nn = /\b\B/,
  wt = "[a-zA-Z]\\w*",
  Xe = "[a-zA-Z_]\\w*",
  xt = "\\b\\d+(\\.\\d+)?",
  At = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
  St = "\\b(0b[01]+)",
  Rn =
    "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
  vn = (e = {}) => {
    const t = /^#![ ]*\//;
    return (
      e.binary && (e.begin = fe(t, /.*\b/, e.binary, /\b.*/)),
      ie(
        {
          scope: "meta",
          begin: t,
          end: /$/,
          relevance: 0,
          "on:begin": (n, i) => {
            n.index !== 0 && i.ignoreMatch();
          },
        },
        e
      )
    );
  },
  _e = { begin: "\\\\[\\s\\S]", relevance: 0 },
  Tn = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [_e],
  },
  On = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [_e],
  },
  Mn = {
    begin:
      /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
  },
  Le = function (e, t, n = {}) {
    const i = ie({ scope: "comment", begin: e, end: t, contains: [] }, n);
    i.contains.push({
      scope: "doctag",
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0,
    });
    const s = Ze(
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      /[A-Za-z]+[-][a-z]+/,
      /[A-Za-z][a-z]{2,}/
    );
    return (
      i.contains.push({
        begin: fe(/[ ]+/, "(", s, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
      }),
      i
    );
  },
  kn = Le("//", "$"),
  Cn = Le("/\\*", "\\*/"),
  In = Le("#", "$"),
  Ln = { scope: "number", begin: xt, relevance: 0 },
  Dn = { scope: "number", begin: At, relevance: 0 },
  Bn = { scope: "number", begin: St, relevance: 0 },
  Pn = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [_e, { begin: /\[/, end: /\]/, relevance: 0, contains: [_e] }],
  },
  Un = { scope: "title", begin: wt, relevance: 0 },
  $n = { scope: "title", begin: Xe, relevance: 0 },
  zn = { begin: "\\.\\s*" + Xe, relevance: 0 },
  Fn = function (e) {
    return Object.assign(e, {
      "on:begin": (t, n) => {
        n.data._beginMatch = t[1];
      },
      "on:end": (t, n) => {
        n.data._beginMatch !== t[1] && n.ignoreMatch();
      },
    });
  };
var ve = Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: Tn,
  BACKSLASH_ESCAPE: _e,
  BINARY_NUMBER_MODE: Bn,
  BINARY_NUMBER_RE: St,
  COMMENT: Le,
  C_BLOCK_COMMENT_MODE: Cn,
  C_LINE_COMMENT_MODE: kn,
  C_NUMBER_MODE: Dn,
  C_NUMBER_RE: At,
  END_SAME_AS_BEGIN: Fn,
  HASH_COMMENT_MODE: In,
  IDENT_RE: wt,
  MATCH_NOTHING_RE: Nn,
  METHOD_GUARD: zn,
  NUMBER_MODE: Ln,
  NUMBER_RE: xt,
  PHRASAL_WORDS_MODE: Mn,
  QUOTE_STRING_MODE: On,
  REGEXP_MODE: Pn,
  RE_STARTERS_RE: Rn,
  SHEBANG: vn,
  TITLE_MODE: Un,
  UNDERSCORE_IDENT_RE: Xe,
  UNDERSCORE_TITLE_MODE: $n,
});
function Hn(e, t) {
  e.input[e.index - 1] === "." && t.ignoreMatch();
}
function Gn(e, t) {
  e.className !== void 0 && ((e.scope = e.className), delete e.className);
}
function Wn(e, t) {
  t &&
    e.beginKeywords &&
    ((e.begin =
      "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
    (e.__beforeBegin = Hn),
    (e.keywords = e.keywords || e.beginKeywords),
    delete e.beginKeywords,
    e.relevance === void 0 && (e.relevance = 0));
}
function Zn(e, t) {
  Array.isArray(e.illegal) && (e.illegal = Ze(...e.illegal));
}
function Kn(e, t) {
  if (e.match) {
    if (e.begin || e.end)
      throw new Error("begin & end are not supported with match");
    (e.begin = e.match), delete e.match;
  }
}
function Xn(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
const Vn = (e, t) => {
    if (!e.beforeMatch) return;
    if (e.starts) throw new Error("beforeMatch cannot be used with starts");
    const n = Object.assign({}, e);
    Object.keys(e).forEach((i) => {
      delete e[i];
    }),
      (e.keywords = n.keywords),
      (e.begin = fe(n.beforeMatch, _t(n.begin))),
      (e.starts = {
        relevance: 0,
        contains: [Object.assign(n, { endsParent: !0 })],
      }),
      (e.relevance = 0),
      delete n.beforeMatch;
  },
  Yn = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value",
  ],
  jn = "keyword";
function Nt(e, t, n = jn) {
  const i = Object.create(null);
  return (
    typeof e == "string"
      ? s(n, e.split(" "))
      : Array.isArray(e)
      ? s(n, e)
      : Object.keys(e).forEach(function (a) {
          Object.assign(i, Nt(e[a], t, a));
        }),
    i
  );
  function s(a, o) {
    t && (o = o.map((r) => r.toLowerCase())),
      o.forEach(function (r) {
        const c = r.split("|");
        i[c[0]] = [a, qn(c[0], c[1])];
      });
  }
}
function qn(e, t) {
  return t ? Number(t) : Jn(e) ? 0 : 1;
}
function Jn(e) {
  return Yn.includes(e.toLowerCase());
}
const at = {},
  ae = (e) => {
    console.error(e);
  },
  ct = (e, ...t) => {
    console.log(`WARN: ${e}`, ...t);
  },
  de = (e, t) => {
    at[`${e}/${t}`] ||
      (console.log(`Deprecated as of ${e}. ${t}`), (at[`${e}/${t}`] = !0));
  },
  Oe = new Error();
function Rt(e, t, { key: n }) {
  let i = 0;
  const s = e[n],
    a = {},
    o = {};
  for (let r = 1; r <= t.length; r++)
    (o[r + i] = s[r]), (a[r + i] = !0), (i += yt(t[r - 1]));
  (e[n] = o), (e[n]._emit = a), (e[n]._multi = !0);
}
function Qn(e) {
  if (Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw (
        (ae(
          "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
        ),
        Oe)
      );
    if (typeof e.beginScope != "object" || e.beginScope === null)
      throw (ae("beginScope must be object"), Oe);
    Rt(e, e.begin, { key: "beginScope" }),
      (e.begin = Ke(e.begin, { joinWith: "" }));
  }
}
function ei(e) {
  if (Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw (
        (ae("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Oe)
      );
    if (typeof e.endScope != "object" || e.endScope === null)
      throw (ae("endScope must be object"), Oe);
    Rt(e, e.end, { key: "endScope" }), (e.end = Ke(e.end, { joinWith: "" }));
  }
}
function ti(e) {
  e.scope &&
    typeof e.scope == "object" &&
    e.scope !== null &&
    ((e.beginScope = e.scope), delete e.scope);
}
function ni(e) {
  ti(e),
    typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }),
    typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }),
    Qn(e),
    ei(e);
}
function ii(e) {
  function t(o, r) {
    return new RegExp(
      Ee(o),
      "m" +
        (e.case_insensitive ? "i" : "") +
        (e.unicodeRegex ? "u" : "") +
        (r ? "g" : "")
    );
  }
  class n {
    constructor() {
      (this.matchIndexes = {}),
        (this.regexes = []),
        (this.matchAt = 1),
        (this.position = 0);
    }
    addRule(r, c) {
      (c.position = this.position++),
        (this.matchIndexes[this.matchAt] = c),
        this.regexes.push([c, r]),
        (this.matchAt += yt(r) + 1);
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const r = this.regexes.map((c) => c[1]);
      (this.matcherRe = t(Ke(r, { joinWith: "|" }), !0)), (this.lastIndex = 0);
    }
    exec(r) {
      this.matcherRe.lastIndex = this.lastIndex;
      const c = this.matcherRe.exec(r);
      if (!c) return null;
      const u = c.findIndex((m, h) => h > 0 && m !== void 0),
        g = this.matchIndexes[u];
      return c.splice(0, u), Object.assign(c, g);
    }
  }
  class i {
    constructor() {
      (this.rules = []),
        (this.multiRegexes = []),
        (this.count = 0),
        (this.lastIndex = 0),
        (this.regexIndex = 0);
    }
    getMatcher(r) {
      if (this.multiRegexes[r]) return this.multiRegexes[r];
      const c = new n();
      return (
        this.rules.slice(r).forEach(([u, g]) => c.addRule(u, g)),
        c.compile(),
        (this.multiRegexes[r] = c),
        c
      );
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(r, c) {
      this.rules.push([r, c]), c.type === "begin" && this.count++;
    }
    exec(r) {
      const c = this.getMatcher(this.regexIndex);
      c.lastIndex = this.lastIndex;
      let u = c.exec(r);
      if (
        this.resumingScanAtSamePosition() &&
        !(u && u.index === this.lastIndex)
      ) {
        const g = this.getMatcher(0);
        (g.lastIndex = this.lastIndex + 1), (u = g.exec(r));
      }
      return (
        u &&
          ((this.regexIndex += u.position + 1),
          this.regexIndex === this.count && this.considerAll()),
        u
      );
    }
  }
  function s(o) {
    const r = new i();
    return (
      o.contains.forEach((c) => r.addRule(c.begin, { rule: c, type: "begin" })),
      o.terminatorEnd && r.addRule(o.terminatorEnd, { type: "end" }),
      o.illegal && r.addRule(o.illegal, { type: "illegal" }),
      r
    );
  }
  function a(o, r) {
    const c = o;
    if (o.isCompiled) return c;
    [Gn, Kn, ni, Vn].forEach((g) => g(o, r)),
      e.compilerExtensions.forEach((g) => g(o, r)),
      (o.__beforeBegin = null),
      [Wn, Zn, Xn].forEach((g) => g(o, r)),
      (o.isCompiled = !0);
    let u = null;
    return (
      typeof o.keywords == "object" &&
        o.keywords.$pattern &&
        ((o.keywords = Object.assign({}, o.keywords)),
        (u = o.keywords.$pattern),
        delete o.keywords.$pattern),
      (u = u || /\w+/),
      o.keywords && (o.keywords = Nt(o.keywords, e.case_insensitive)),
      (c.keywordPatternRe = t(u, !0)),
      r &&
        (o.begin || (o.begin = /\B|\b/),
        (c.beginRe = t(c.begin)),
        !o.end && !o.endsWithParent && (o.end = /\B|\b/),
        o.end && (c.endRe = t(c.end)),
        (c.terminatorEnd = Ee(c.end) || ""),
        o.endsWithParent &&
          r.terminatorEnd &&
          (c.terminatorEnd += (o.end ? "|" : "") + r.terminatorEnd)),
      o.illegal && (c.illegalRe = t(o.illegal)),
      o.contains || (o.contains = []),
      (o.contains = [].concat(
        ...o.contains.map(function (g) {
          return oi(g === "self" ? o : g);
        })
      )),
      o.contains.forEach(function (g) {
        a(g, c);
      }),
      o.starts && a(o.starts, r),
      (c.matcher = s(c)),
      c
    );
  }
  if (
    (e.compilerExtensions || (e.compilerExtensions = []),
    e.contains && e.contains.includes("self"))
  )
    throw new Error(
      "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
    );
  return (e.classNameAliases = ie(e.classNameAliases || {})), a(e);
}
function vt(e) {
  return e ? e.endsWithParent || vt(e.starts) : !1;
}
function oi(e) {
  return (
    e.variants &&
      !e.cachedVariants &&
      (e.cachedVariants = e.variants.map(function (t) {
        return ie(e, { variants: null }, t);
      })),
    e.cachedVariants
      ? e.cachedVariants
      : vt(e)
      ? ie(e, { starts: e.starts ? ie(e.starts) : null })
      : Object.isFrozen(e)
      ? ie(e)
      : e
  );
}
var ri = "11.9.0";
class si extends Error {
  constructor(t, n) {
    super(t), (this.name = "HTMLInjectionError"), (this.html = n);
  }
}
const Fe = Et,
  lt = ie,
  ut = Symbol("nomatch"),
  ai = 7,
  Tt = function (e) {
    const t = Object.create(null),
      n = Object.create(null),
      i = [];
    let s = !0;
    const a =
        "Could not find the language '{}', did you forget to load/include a language module?",
      o = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let r = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: _n,
    };
    function c(l) {
      return r.noHighlightRe.test(l);
    }
    function u(l) {
      let f = l.className + " ";
      f += l.parentNode ? l.parentNode.className : "";
      const _ = r.languageDetectRe.exec(f);
      if (_) {
        const S = P(_[1]);
        return (
          S ||
            (ct(a.replace("{}", _[1])),
            ct("Falling back to no-highlight mode for this block.", l)),
          S ? _[1] : "no-highlight"
        );
      }
      return f.split(/\s+/).find((S) => c(S) || P(S));
    }
    function g(l, f, _) {
      let S = "",
        O = "";
      typeof f == "object"
        ? ((S = l), (_ = f.ignoreIllegals), (O = f.language))
        : (de("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
          de(
            "10.7.0",
            `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
          ),
          (O = l),
          (S = f)),
        _ === void 0 && (_ = !0);
      const B = { code: S, language: O };
      D("before:highlight", B);
      const W = B.result ? B.result : m(B.language, B.code, _);
      return (W.code = B.code), D("after:highlight", W), W;
    }
    function m(l, f, _, S) {
      const O = Object.create(null);
      function B(d, b) {
        return d.keywords[b];
      }
      function W() {
        if (!w.keywords) {
          z.addText(I);
          return;
        }
        let d = 0;
        w.keywordPatternRe.lastIndex = 0;
        let b = w.keywordPatternRe.exec(I),
          x = "";
        for (; b; ) {
          x += I.substring(d, b.index);
          const M = J.case_insensitive ? b[0].toLowerCase() : b[0],
            H = B(w, M);
          if (H) {
            const [ee, en] = H;
            if (
              (z.addText(x),
              (x = ""),
              (O[M] = (O[M] || 0) + 1),
              O[M] <= ai && (Re += en),
              ee.startsWith("_"))
            )
              x += b[0];
            else {
              const tn = J.classNameAliases[ee] || ee;
              q(b[0], tn);
            }
          } else x += b[0];
          (d = w.keywordPatternRe.lastIndex), (b = w.keywordPatternRe.exec(I));
        }
        (x += I.substring(d)), z.addText(x);
      }
      function Se() {
        if (I === "") return;
        let d = null;
        if (typeof w.subLanguage == "string") {
          if (!t[w.subLanguage]) {
            z.addText(I);
            return;
          }
          (d = m(w.subLanguage, I, !0, it[w.subLanguage])),
            (it[w.subLanguage] = d._top);
        } else d = p(I, w.subLanguage.length ? w.subLanguage : null);
        w.relevance > 0 && (Re += d.relevance),
          z.__addSublanguage(d._emitter, d.language);
      }
      function Z() {
        w.subLanguage != null ? Se() : W(), (I = "");
      }
      function q(d, b) {
        d !== "" && (z.startScope(b), z.addText(d), z.endScope());
      }
      function Qe(d, b) {
        let x = 1;
        const M = b.length - 1;
        for (; x <= M; ) {
          if (!d._emit[x]) {
            x++;
            continue;
          }
          const H = J.classNameAliases[d[x]] || d[x],
            ee = b[x];
          H ? q(ee, H) : ((I = ee), W(), (I = "")), x++;
        }
      }
      function et(d, b) {
        return (
          d.scope &&
            typeof d.scope == "string" &&
            z.openNode(J.classNameAliases[d.scope] || d.scope),
          d.beginScope &&
            (d.beginScope._wrap
              ? (q(
                  I,
                  J.classNameAliases[d.beginScope._wrap] || d.beginScope._wrap
                ),
                (I = ""))
              : d.beginScope._multi && (Qe(d.beginScope, b), (I = ""))),
          (w = Object.create(d, { parent: { value: w } })),
          w
        );
      }
      function tt(d, b, x) {
        let M = An(d.endRe, x);
        if (M) {
          if (d["on:end"]) {
            const H = new ot(d);
            d["on:end"](b, H), H.isMatchIgnored && (M = !1);
          }
          if (M) {
            for (; d.endsParent && d.parent; ) d = d.parent;
            return d;
          }
        }
        if (d.endsWithParent) return tt(d.parent, b, x);
      }
      function Yt(d) {
        return w.matcher.regexIndex === 0 ? ((I += d[0]), 1) : ((ze = !0), 0);
      }
      function jt(d) {
        const b = d[0],
          x = d.rule,
          M = new ot(x),
          H = [x.__beforeBegin, x["on:begin"]];
        for (const ee of H)
          if (ee && (ee(d, M), M.isMatchIgnored)) return Yt(b);
        return (
          x.skip
            ? (I += b)
            : (x.excludeBegin && (I += b),
              Z(),
              !x.returnBegin && !x.excludeBegin && (I = b)),
          et(x, d),
          x.returnBegin ? 0 : b.length
        );
      }
      function qt(d) {
        const b = d[0],
          x = f.substring(d.index),
          M = tt(w, d, x);
        if (!M) return ut;
        const H = w;
        w.endScope && w.endScope._wrap
          ? (Z(), q(b, w.endScope._wrap))
          : w.endScope && w.endScope._multi
          ? (Z(), Qe(w.endScope, d))
          : H.skip
          ? (I += b)
          : (H.returnEnd || H.excludeEnd || (I += b),
            Z(),
            H.excludeEnd && (I = b));
        do
          w.scope && z.closeNode(),
            !w.skip && !w.subLanguage && (Re += w.relevance),
            (w = w.parent);
        while (w !== M.parent);
        return M.starts && et(M.starts, d), H.returnEnd ? 0 : b.length;
      }
      function Jt() {
        const d = [];
        for (let b = w; b !== J; b = b.parent) b.scope && d.unshift(b.scope);
        d.forEach((b) => z.openNode(b));
      }
      let Ne = {};
      function nt(d, b) {
        const x = b && b[0];
        if (((I += d), x == null)) return Z(), 0;
        if (
          Ne.type === "begin" &&
          b.type === "end" &&
          Ne.index === b.index &&
          x === ""
        ) {
          if (((I += f.slice(b.index, b.index + 1)), !s)) {
            const M = new Error(`0 width match regex (${l})`);
            throw ((M.languageName = l), (M.badRule = Ne.rule), M);
          }
          return 1;
        }
        if (((Ne = b), b.type === "begin")) return jt(b);
        if (b.type === "illegal" && !_) {
          const M = new Error(
            'Illegal lexeme "' +
              x +
              '" for mode "' +
              (w.scope || "<unnamed>") +
              '"'
          );
          throw ((M.mode = w), M);
        } else if (b.type === "end") {
          const M = qt(b);
          if (M !== ut) return M;
        }
        if (b.type === "illegal" && x === "") return 1;
        if ($e > 1e5 && $e > b.index * 3)
          throw new Error(
            "potential infinite loop, way more iterations than matches"
          );
        return (I += x), x.length;
      }
      const J = P(l);
      if (!J)
        throw (
          (ae(a.replace("{}", l)), new Error('Unknown language: "' + l + '"'))
        );
      const Qt = ii(J);
      let Ue = "",
        w = S || Qt;
      const it = {},
        z = new r.__emitter(r);
      Jt();
      let I = "",
        Re = 0,
        se = 0,
        $e = 0,
        ze = !1;
      try {
        if (J.__emitTokens) J.__emitTokens(f, z);
        else {
          for (w.matcher.considerAll(); ; ) {
            $e++,
              ze ? (ze = !1) : w.matcher.considerAll(),
              (w.matcher.lastIndex = se);
            const d = w.matcher.exec(f);
            if (!d) break;
            const b = f.substring(se, d.index),
              x = nt(b, d);
            se = d.index + x;
          }
          nt(f.substring(se));
        }
        return (
          z.finalize(),
          (Ue = z.toHTML()),
          {
            language: l,
            value: Ue,
            relevance: Re,
            illegal: !1,
            _emitter: z,
            _top: w,
          }
        );
      } catch (d) {
        if (d.message && d.message.includes("Illegal"))
          return {
            language: l,
            value: Fe(f),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: d.message,
              index: se,
              context: f.slice(se - 100, se + 100),
              mode: d.mode,
              resultSoFar: Ue,
            },
            _emitter: z,
          };
        if (s)
          return {
            language: l,
            value: Fe(f),
            illegal: !1,
            relevance: 0,
            errorRaised: d,
            _emitter: z,
            _top: w,
          };
        throw d;
      }
    }
    function h(l) {
      const f = {
        value: Fe(l),
        illegal: !1,
        relevance: 0,
        _top: o,
        _emitter: new r.__emitter(r),
      };
      return f._emitter.addText(l), f;
    }
    function p(l, f) {
      f = f || r.languages || Object.keys(t);
      const _ = h(l),
        S = f
          .filter(P)
          .filter(V)
          .map((Z) => m(Z, l, !1));
      S.unshift(_);
      const O = S.sort((Z, q) => {
          if (Z.relevance !== q.relevance) return q.relevance - Z.relevance;
          if (Z.language && q.language) {
            if (P(Z.language).supersetOf === q.language) return 1;
            if (P(q.language).supersetOf === Z.language) return -1;
          }
          return 0;
        }),
        [B, W] = O,
        Se = B;
      return (Se.secondBest = W), Se;
    }
    function E(l, f, _) {
      const S = (f && n[f]) || _;
      l.classList.add("hljs"), l.classList.add(`language-${S}`);
    }
    function y(l) {
      let f = null;
      const _ = u(l);
      if (c(_)) return;
      if (
        (D("before:highlightElement", { el: l, language: _ }),
        l.dataset.highlighted)
      ) {
        console.log(
          "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
          l
        );
        return;
      }
      if (
        l.children.length > 0 &&
        (r.ignoreUnescapedHTML ||
          (console.warn(
            "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
          ),
          console.warn(
            "https://github.com/highlightjs/highlight.js/wiki/security"
          ),
          console.warn("The element with unescaped HTML:"),
          console.warn(l)),
        r.throwUnescapedHTML)
      )
        throw new si(
          "One of your code blocks includes unescaped HTML.",
          l.innerHTML
        );
      f = l;
      const S = f.textContent,
        O = _ ? g(S, { language: _, ignoreIllegals: !0 }) : p(S);
      (l.innerHTML = O.value),
        (l.dataset.highlighted = "yes"),
        E(l, _, O.language),
        (l.result = {
          language: O.language,
          re: O.relevance,
          relevance: O.relevance,
        }),
        O.secondBest &&
          (l.secondBest = {
            language: O.secondBest.language,
            relevance: O.secondBest.relevance,
          }),
        D("after:highlightElement", { el: l, result: O, text: S });
    }
    function N(l) {
      r = lt(r, l);
    }
    const A = () => {
      k(),
        de("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function R() {
      k(),
        de(
          "10.6.0",
          "initHighlightingOnLoad() deprecated.  Use highlightAll() now."
        );
    }
    let v = !1;
    function k() {
      if (document.readyState === "loading") {
        v = !0;
        return;
      }
      document.querySelectorAll(r.cssSelector).forEach(y);
    }
    function T() {
      v && k();
    }
    typeof window < "u" &&
      window.addEventListener &&
      window.addEventListener("DOMContentLoaded", T, !1);
    function C(l, f) {
      let _ = null;
      try {
        _ = f(e);
      } catch (S) {
        if (
          (ae(
            "Language definition for '{}' could not be registered.".replace(
              "{}",
              l
            )
          ),
          s)
        )
          ae(S);
        else throw S;
        _ = o;
      }
      _.name || (_.name = l),
        (t[l] = _),
        (_.rawDefinition = f.bind(null, e)),
        _.aliases && X(_.aliases, { languageName: l });
    }
    function F(l) {
      delete t[l];
      for (const f of Object.keys(n)) n[f] === l && delete n[f];
    }
    function G() {
      return Object.keys(t);
    }
    function P(l) {
      return (l = (l || "").toLowerCase()), t[l] || t[n[l]];
    }
    function X(l, { languageName: f }) {
      typeof l == "string" && (l = [l]),
        l.forEach((_) => {
          n[_.toLowerCase()] = f;
        });
    }
    function V(l) {
      const f = P(l);
      return f && !f.disableAutodetect;
    }
    function U(l) {
      l["before:highlightBlock"] &&
        !l["before:highlightElement"] &&
        (l["before:highlightElement"] = (f) => {
          l["before:highlightBlock"](Object.assign({ block: f.el }, f));
        }),
        l["after:highlightBlock"] &&
          !l["after:highlightElement"] &&
          (l["after:highlightElement"] = (f) => {
            l["after:highlightBlock"](Object.assign({ block: f.el }, f));
          });
    }
    function j(l) {
      U(l), i.push(l);
    }
    function L(l) {
      const f = i.indexOf(l);
      f !== -1 && i.splice(f, 1);
    }
    function D(l, f) {
      const _ = l;
      i.forEach(function (S) {
        S[_] && S[_](f);
      });
    }
    function $(l) {
      return (
        de("10.7.0", "highlightBlock will be removed entirely in v12.0"),
        de("10.7.0", "Please use highlightElement now."),
        y(l)
      );
    }
    Object.assign(e, {
      highlight: g,
      highlightAuto: p,
      highlightAll: k,
      highlightElement: y,
      highlightBlock: $,
      configure: N,
      initHighlighting: A,
      initHighlightingOnLoad: R,
      registerLanguage: C,
      unregisterLanguage: F,
      listLanguages: G,
      getLanguage: P,
      registerAliases: X,
      autoDetection: V,
      inherit: lt,
      addPlugin: j,
      removePlugin: L,
    }),
      (e.debugMode = function () {
        s = !1;
      }),
      (e.safeMode = function () {
        s = !0;
      }),
      (e.versionString = ri),
      (e.regex = {
        concat: fe,
        lookahead: _t,
        either: Ze,
        optional: wn,
        anyNumberOfTimes: yn,
      });
    for (const l in ve) typeof ve[l] == "object" && mt(ve[l]);
    return Object.assign(e, ve), e;
  },
  pe = Tt({});
pe.newInstance = () => Tt({});
var ci = pe;
pe.HighlightJS = pe;
pe.default = pe;
const me = pn(ci),
  li = ht(void 0),
  ui = ht(void 0);
function fi(e) {
  const t = e.regex,
    n = t.concat(
      /[\p{L}_]/u,
      t.optional(/[\p{L}0-9_.-]*:/u),
      /[\p{L}0-9_.-]*/u
    ),
    i = /[\p{L}0-9._:-]+/u,
    s = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
    a = {
      begin: /\s/,
      contains: [
        { className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ },
      ],
    },
    o = e.inherit(a, { begin: /\(/, end: /\)/ }),
    r = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
    c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
    u = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        { className: "attr", begin: i, relevance: 0 },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                { begin: /"/, end: /"/, contains: [s] },
                { begin: /'/, end: /'/, contains: [s] },
                { begin: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg",
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          a,
          c,
          r,
          o,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [a, o, c, r],
              },
            ],
          },
        ],
      },
      e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
      { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
      s,
      {
        className: "meta",
        end: /\?>/,
        variants: [
          { begin: /<\?xml/, relevance: 10, contains: [c] },
          { begin: /<\?[a-z][a-z0-9]+/ },
        ],
      },
      {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [u],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ["css", "xml"],
        },
      },
      {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [u],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ["javascript", "handlebars", "xml"],
        },
      },
      { className: "tag", begin: /<>|<\/>/ },
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))
        ),
        end: /\/?>/,
        contains: [{ className: "name", begin: n, relevance: 0, starts: u }],
      },
      {
        className: "tag",
        begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
        contains: [
          { className: "name", begin: n, relevance: 0 },
          { begin: />/, relevance: 0, endsParent: !0 },
        ],
      },
    ],
  };
}
const di = (e) => ({
    IMPORTANT: { scope: "meta", begin: "!important" },
    BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
    },
    FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin:
        e.NUMBER_RE +
        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0,
    },
    CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
  }),
  gi = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video",
  ],
  pi = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    "min-width",
    "max-width",
    "min-height",
    "max-height",
  ],
  bi = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where",
  ],
  hi = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error",
  ],
  mi = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index",
  ].reverse();
function Ei(e) {
  const t = e.regex,
    n = di(e),
    i = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
    s = "and or not only",
    a = /@-?\w[\w]*(-\w+)*/,
    o = "[a-zA-Z-][a-zA-Z0-9_-]*",
    r = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: { keyframePosition: "selector-tag" },
    contains: [
      n.BLOCK_COMMENT,
      i,
      n.CSS_NUMBER_MODE,
      { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
      { className: "selector-class", begin: "\\." + o, relevance: 0 },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + bi.join("|") + ")" },
          { begin: ":(:)?(" + hi.join("|") + ")" },
        ],
      },
      n.CSS_VARIABLE,
      { className: "attribute", begin: "\\b(" + mi.join("|") + ")\\b" },
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...r,
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: { built_in: "url data-uri" },
            contains: [
              ...r,
              {
                className: "string",
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0,
              },
            ],
          },
          n.FUNCTION_DISPATCH,
        ],
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        contains: [
          { className: "keyword", begin: a },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: s,
              attribute: pi.join(" "),
            },
            contains: [
              { begin: /[a-z-]+(?=:)/, className: "attribute" },
              ...r,
              n.CSS_NUMBER_MODE,
            ],
          },
        ],
      },
      { className: "selector-tag", begin: "\\b(" + gi.join("|") + ")\\b" },
    ],
  };
}
const ft = "[A-Za-z$_][0-9A-Za-z$_]*",
  _i = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
  ],
  yi = ["true", "false", "null", "undefined", "NaN", "Infinity"],
  Ot = [
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    "Math",
    "Date",
    "Number",
    "BigInt",
    "String",
    "RegExp",
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "Reflect",
    "Proxy",
    "Intl",
    "WebAssembly",
  ],
  Mt = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
  ],
  kt = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape",
  ],
  wi = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global",
  ],
  xi = [].concat(kt, Ot, Mt);
function Ai(e) {
  const t = e.regex,
    n = (f, { after: _ }) => {
      const S = "</" + f[0].slice(1);
      return f.input.indexOf(S, _) !== -1;
    },
    i = ft,
    s = { begin: "<>", end: "</>" },
    a = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    o = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (f, _) => {
        const S = f[0].length + f.index,
          O = f.input[S];
        if (O === "<" || O === ",") {
          _.ignoreMatch();
          return;
        }
        O === ">" && (n(f, { after: S }) || _.ignoreMatch());
        let B;
        const W = f.input.substring(S);
        if ((B = W.match(/^\s*=/))) {
          _.ignoreMatch();
          return;
        }
        if ((B = W.match(/^\s+extends\s+/)) && B.index === 0) {
          _.ignoreMatch();
          return;
        }
      },
    },
    r = {
      $pattern: ft,
      keyword: _i,
      literal: yi,
      built_in: xi,
      "variable.language": wi,
    },
    c = "[0-9](_?[0-9])*",
    u = `\\.(${c})`,
    g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
    m = {
      className: "number",
      variants: [
        { begin: `(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b` },
        { begin: `\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b` },
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        { begin: "\\b0[0-7]+n?\\b" },
      ],
      relevance: 0,
    },
    h = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: r,
      contains: [],
    },
    p = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, h],
        subLanguage: "xml",
      },
    },
    E = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, h],
        subLanguage: "css",
      },
    },
    y = {
      begin: "gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, h],
        subLanguage: "graphql",
      },
    },
    N = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, h],
    },
    R = {
      className: "comment",
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                { className: "doctag", begin: "@[A-Za-z]+" },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: "variable",
                  begin: i + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    v = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      E,
      y,
      N,
      { match: /\$\d+/ },
      m,
    ];
  h.contains = v.concat({
    begin: /\{/,
    end: /\}/,
    keywords: r,
    contains: ["self"].concat(v),
  });
  const k = [].concat(R, h.contains),
    T = k.concat([
      { begin: /\(/, end: /\)/, keywords: r, contains: ["self"].concat(k) },
    ]),
    C = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: r,
      contains: T,
    },
    F = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            i,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(i, "(", t.concat(/\./, i), ")*"),
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited",
          },
        },
        {
          match: [/class/, /\s+/, i],
          scope: { 1: "keyword", 3: "title.class" },
        },
      ],
    },
    G = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      ),
      className: "title.class",
      keywords: { _: [...Ot, ...Mt] },
    },
    P = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    X = {
      variants: [
        { match: [/function/, /\s+/, i, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: "keyword", 3: "title.function" },
      label: "func.def",
      contains: [C],
      illegal: /%/,
    },
    V = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant",
    };
  function U(f) {
    return t.concat("(?!", f.join("|"), ")");
  }
  const j = {
      match: t.concat(
        /\b/,
        U([...kt, "super", "import"]),
        i,
        t.lookahead(/\(/)
      ),
      className: "title.function",
      relevance: 0,
    },
    L = {
      begin: t.concat(/\./, t.lookahead(t.concat(i, /(?![0-9A-Za-z$_(])/))),
      end: i,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0,
    },
    D = {
      match: [/get|set/, /\s+/, i, /(?=\()/],
      className: { 1: "keyword", 3: "title.function" },
      contains: [{ begin: /\(\)/ }, C],
    },
    $ =
      "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
      e.UNDERSCORE_IDENT_RE +
      ")\\s*=>",
    l = {
      match: [
        /const|var|let/,
        /\s+/,
        i,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead($),
      ],
      keywords: "async",
      className: { 1: "keyword", 3: "title.function" },
      contains: [C],
    };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: r,
    exports: { PARAMS_CONTAINS: T, CLASS_REFERENCE: G },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
      P,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      E,
      y,
      N,
      R,
      { match: /\$\d+/ },
      m,
      G,
      { className: "attr", begin: i + t.lookahead(":"), relevance: 0 },
      l,
      {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          R,
          e.REGEXP_MODE,
          {
            className: "function",
            begin: $,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: r,
                    contains: T,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: s.begin, end: s.end },
              { match: a },
              { begin: o.begin, "on:begin": o.isTrulyOpeningTag, end: o.end },
            ],
            subLanguage: "xml",
            contains: [
              { begin: o.begin, end: o.end, skip: !0, contains: ["self"] },
            ],
          },
        ],
      },
      X,
      { beginKeywords: "while if switch catch for" },
      {
        begin:
          "\\b(?!function)" +
          e.UNDERSCORE_IDENT_RE +
          "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        label: "func.def",
        contains: [
          C,
          e.inherit(e.TITLE_MODE, { begin: i, className: "title.function" }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      L,
      { match: "\\$" + i, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [C],
      },
      j,
      V,
      F,
      D,
      { match: /\$[(.]/ },
    ],
  };
}
const Me = "[A-Za-z$_][0-9A-Za-z$_]*",
  Ct = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
  ],
  It = ["true", "false", "null", "undefined", "NaN", "Infinity"],
  Lt = [
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    "Math",
    "Date",
    "Number",
    "BigInt",
    "String",
    "RegExp",
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "Reflect",
    "Proxy",
    "Intl",
    "WebAssembly",
  ],
  Dt = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
  ],
  Bt = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape",
  ],
  Pt = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global",
  ],
  Ut = [].concat(Bt, Lt, Dt);
function Si(e) {
  const t = e.regex,
    n = (f, { after: _ }) => {
      const S = "</" + f[0].slice(1);
      return f.input.indexOf(S, _) !== -1;
    },
    i = Me,
    s = { begin: "<>", end: "</>" },
    a = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    o = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (f, _) => {
        const S = f[0].length + f.index,
          O = f.input[S];
        if (O === "<" || O === ",") {
          _.ignoreMatch();
          return;
        }
        O === ">" && (n(f, { after: S }) || _.ignoreMatch());
        let B;
        const W = f.input.substring(S);
        if ((B = W.match(/^\s*=/))) {
          _.ignoreMatch();
          return;
        }
        if ((B = W.match(/^\s+extends\s+/)) && B.index === 0) {
          _.ignoreMatch();
          return;
        }
      },
    },
    r = {
      $pattern: Me,
      keyword: Ct,
      literal: It,
      built_in: Ut,
      "variable.language": Pt,
    },
    c = "[0-9](_?[0-9])*",
    u = `\\.(${c})`,
    g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
    m = {
      className: "number",
      variants: [
        { begin: `(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b` },
        { begin: `\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b` },
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        { begin: "\\b0[0-7]+n?\\b" },
      ],
      relevance: 0,
    },
    h = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: r,
      contains: [],
    },
    p = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, h],
        subLanguage: "xml",
      },
    },
    E = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, h],
        subLanguage: "css",
      },
    },
    y = {
      begin: "gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, h],
        subLanguage: "graphql",
      },
    },
    N = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, h],
    },
    R = {
      className: "comment",
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                { className: "doctag", begin: "@[A-Za-z]+" },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: "variable",
                  begin: i + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    v = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      E,
      y,
      N,
      { match: /\$\d+/ },
      m,
    ];
  h.contains = v.concat({
    begin: /\{/,
    end: /\}/,
    keywords: r,
    contains: ["self"].concat(v),
  });
  const k = [].concat(R, h.contains),
    T = k.concat([
      { begin: /\(/, end: /\)/, keywords: r, contains: ["self"].concat(k) },
    ]),
    C = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: r,
      contains: T,
    },
    F = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            i,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(i, "(", t.concat(/\./, i), ")*"),
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited",
          },
        },
        {
          match: [/class/, /\s+/, i],
          scope: { 1: "keyword", 3: "title.class" },
        },
      ],
    },
    G = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      ),
      className: "title.class",
      keywords: { _: [...Lt, ...Dt] },
    },
    P = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    X = {
      variants: [
        { match: [/function/, /\s+/, i, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: "keyword", 3: "title.function" },
      label: "func.def",
      contains: [C],
      illegal: /%/,
    },
    V = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant",
    };
  function U(f) {
    return t.concat("(?!", f.join("|"), ")");
  }
  const j = {
      match: t.concat(
        /\b/,
        U([...Bt, "super", "import"]),
        i,
        t.lookahead(/\(/)
      ),
      className: "title.function",
      relevance: 0,
    },
    L = {
      begin: t.concat(/\./, t.lookahead(t.concat(i, /(?![0-9A-Za-z$_(])/))),
      end: i,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0,
    },
    D = {
      match: [/get|set/, /\s+/, i, /(?=\()/],
      className: { 1: "keyword", 3: "title.function" },
      contains: [{ begin: /\(\)/ }, C],
    },
    $ =
      "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
      e.UNDERSCORE_IDENT_RE +
      ")\\s*=>",
    l = {
      match: [
        /const|var|let/,
        /\s+/,
        i,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead($),
      ],
      keywords: "async",
      className: { 1: "keyword", 3: "title.function" },
      contains: [C],
    };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: r,
    exports: { PARAMS_CONTAINS: T, CLASS_REFERENCE: G },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
      P,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      E,
      y,
      N,
      R,
      { match: /\$\d+/ },
      m,
      G,
      { className: "attr", begin: i + t.lookahead(":"), relevance: 0 },
      l,
      {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          R,
          e.REGEXP_MODE,
          {
            className: "function",
            begin: $,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: r,
                    contains: T,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: s.begin, end: s.end },
              { match: a },
              { begin: o.begin, "on:begin": o.isTrulyOpeningTag, end: o.end },
            ],
            subLanguage: "xml",
            contains: [
              { begin: o.begin, end: o.end, skip: !0, contains: ["self"] },
            ],
          },
        ],
      },
      X,
      { beginKeywords: "while if switch catch for" },
      {
        begin:
          "\\b(?!function)" +
          e.UNDERSCORE_IDENT_RE +
          "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        label: "func.def",
        contains: [
          C,
          e.inherit(e.TITLE_MODE, { begin: i, className: "title.function" }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      L,
      { match: "\\$" + i, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [C],
      },
      j,
      V,
      F,
      D,
      { match: /\$[(.]/ },
    ],
  };
}
function Ni(e) {
  const t = Si(e),
    n = Me,
    i = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown",
    ],
    s = {
      beginKeywords: "namespace",
      end: /\{/,
      excludeEnd: !0,
      contains: [t.exports.CLASS_REFERENCE],
    },
    a = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: { keyword: "interface extends", built_in: i },
      contains: [t.exports.CLASS_REFERENCE],
    },
    o = { className: "meta", relevance: 10, begin: /^\s*['"]use strict['"]/ },
    r = [
      "type",
      "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
    ],
    c = {
      $pattern: Me,
      keyword: Ct.concat(r),
      literal: It,
      built_in: Ut.concat(i),
      "variable.language": Pt,
    },
    u = { className: "meta", begin: "@" + n },
    g = (h, p, E) => {
      const y = h.contains.findIndex((N) => N.label === p);
      if (y === -1) throw new Error("can not find mode to replace");
      h.contains.splice(y, 1, E);
    };
  Object.assign(t.keywords, c),
    t.exports.PARAMS_CONTAINS.push(u),
    (t.contains = t.contains.concat([u, s, a])),
    g(t, "shebang", e.SHEBANG()),
    g(t, "use_strict", o);
  const m = t.contains.find((h) => h.label === "func.def");
  return (
    (m.relevance = 0),
    Object.assign(t, {
      name: "TypeScript",
      aliases: ["ts", "tsx", "mts", "cts"],
    }),
    t
  );
}
const be = Math.min,
  ce = Math.max,
  ke = Math.round,
  Te = Math.floor,
  oe = (e) => ({ x: e, y: e }),
  Ri = { left: "right", right: "left", bottom: "top", top: "bottom" },
  vi = { start: "end", end: "start" };
function He(e, t, n) {
  return ce(e, be(t, n));
}
function we(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function le(e) {
  return e.split("-")[0];
}
function xe(e) {
  return e.split("-")[1];
}
function $t(e) {
  return e === "x" ? "y" : "x";
}
function Ve(e) {
  return e === "y" ? "height" : "width";
}
function De(e) {
  return ["top", "bottom"].includes(le(e)) ? "y" : "x";
}
function Ye(e) {
  return $t(De(e));
}
function Ti(e, t, n) {
  n === void 0 && (n = !1);
  const i = xe(e),
    s = Ye(e),
    a = Ve(s);
  let o =
    s === "x"
      ? i === (n ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
      ? "bottom"
      : "top";
  return t.reference[a] > t.floating[a] && (o = Ce(o)), [o, Ce(o)];
}
function Oi(e) {
  const t = Ce(e);
  return [Ge(e), t, Ge(t)];
}
function Ge(e) {
  return e.replace(/start|end/g, (t) => vi[t]);
}
function Mi(e, t, n) {
  const i = ["left", "right"],
    s = ["right", "left"],
    a = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? s : i) : t ? i : s;
    case "left":
    case "right":
      return t ? a : o;
    default:
      return [];
  }
}
function ki(e, t, n, i) {
  const s = xe(e);
  let a = Mi(le(e), n === "start", i);
  return (
    s && ((a = a.map((o) => o + "-" + s)), t && (a = a.concat(a.map(Ge)))), a
  );
}
function Ce(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ri[t]);
}
function Ci(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function zt(e) {
  return typeof e != "number"
    ? Ci(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ie(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function dt(e, t, n) {
  let { reference: i, floating: s } = e;
  const a = De(t),
    o = Ye(t),
    r = Ve(o),
    c = le(t),
    u = a === "y",
    g = i.x + i.width / 2 - s.width / 2,
    m = i.y + i.height / 2 - s.height / 2,
    h = i[r] / 2 - s[r] / 2;
  let p;
  switch (c) {
    case "top":
      p = { x: g, y: i.y - s.height };
      break;
    case "bottom":
      p = { x: g, y: i.y + i.height };
      break;
    case "right":
      p = { x: i.x + i.width, y: m };
      break;
    case "left":
      p = { x: i.x - s.width, y: m };
      break;
    default:
      p = { x: i.x, y: i.y };
  }
  switch (xe(t)) {
    case "start":
      p[o] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const Ii = async (e, t, n) => {
  const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: a = [],
      platform: o,
    } = n,
    r = a.filter(Boolean),
    c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: g, y: m } = dt(u, i, c),
    h = i,
    p = {},
    E = 0;
  for (let y = 0; y < r.length; y++) {
    const { name: N, fn: A } = r[y],
      {
        x: R,
        y: v,
        data: k,
        reset: T,
      } = await A({
        x: g,
        y: m,
        initialPlacement: i,
        placement: h,
        strategy: s,
        middlewareData: p,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    if (
      ((g = R ?? g),
      (m = v ?? m),
      (p = { ...p, [N]: { ...p[N], ...k } }),
      T && E <= 50)
    ) {
      E++,
        typeof T == "object" &&
          (T.placement && (h = T.placement),
          T.rects &&
            (u =
              T.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : T.rects),
          ({ x: g, y: m } = dt(u, h, c))),
        (y = -1);
      continue;
    }
  }
  return { x: g, y: m, placement: h, strategy: s, middlewareData: p };
};
async function Ft(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: i, y: s, platform: a, rects: o, elements: r, strategy: c } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: m = "floating",
      altBoundary: h = !1,
      padding: p = 0,
    } = we(t, e),
    E = zt(p),
    N = r[h ? (m === "floating" ? "reference" : "floating") : m],
    A = Ie(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(N))) == null ||
          n
            ? N
            : N.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(r.floating))),
        boundary: u,
        rootBoundary: g,
        strategy: c,
      })
    ),
    R = m === "floating" ? { ...o.floating, x: i, y: s } : o.reference,
    v = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(r.floating)),
    k = (await (a.isElement == null ? void 0 : a.isElement(v)))
      ? (await (a.getScale == null ? void 0 : a.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    T = Ie(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: R,
            offsetParent: v,
            strategy: c,
          })
        : R
    );
  return {
    top: (A.top - T.top + E.top) / k.y,
    bottom: (T.bottom - A.bottom + E.bottom) / k.y,
    left: (A.left - T.left + E.left) / k.x,
    right: (T.right - A.right + E.right) / k.x,
  };
}
const Li = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: i,
          placement: s,
          rects: a,
          platform: o,
          elements: r,
          middlewareData: c,
        } = t,
        { element: u, padding: g = 0 } = we(e, t) || {};
      if (u == null) return {};
      const m = zt(g),
        h = { x: n, y: i },
        p = Ye(s),
        E = Ve(p),
        y = await o.getDimensions(u),
        N = p === "y",
        A = N ? "top" : "left",
        R = N ? "bottom" : "right",
        v = N ? "clientHeight" : "clientWidth",
        k = a.reference[E] + a.reference[p] - h[p] - a.floating[E],
        T = h[p] - a.reference[p],
        C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let F = C ? C[v] : 0;
      (!F || !(await (o.isElement == null ? void 0 : o.isElement(C)))) &&
        (F = r.floating[v] || a.floating[E]);
      const G = k / 2 - T / 2,
        P = F / 2 - y[E] / 2 - 1,
        X = be(m[A], P),
        V = be(m[R], P),
        U = X,
        j = F - y[E] - V,
        L = F / 2 - y[E] / 2 + G,
        D = He(U, L, j),
        $ =
          !c.arrow &&
          xe(s) != null &&
          L != D &&
          a.reference[E] / 2 - (L < U ? X : V) - y[E] / 2 < 0,
        l = $ ? (L < U ? L - U : L - j) : 0;
      return {
        [p]: h[p] + l,
        data: {
          [p]: D,
          centerOffset: L - D - l,
          ...($ && { alignmentOffset: l }),
        },
        reset: $,
      };
    },
  }),
  Di = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, i;
          const {
              placement: s,
              middlewareData: a,
              rects: o,
              initialPlacement: r,
              platform: c,
              elements: u,
            } = t,
            {
              mainAxis: g = !0,
              crossAxis: m = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: y = !0,
              ...N
            } = we(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const A = le(s),
            R = le(r) === r,
            v = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            k = h || (R || !y ? [Ce(r)] : Oi(r));
          !h && E !== "none" && k.push(...ki(r, y, E, v));
          const T = [r, ...k],
            C = await Ft(t, N),
            F = [];
          let G = ((i = a.flip) == null ? void 0 : i.overflows) || [];
          if ((g && F.push(C[A]), m)) {
            const U = Ti(s, o, v);
            F.push(C[U[0]], C[U[1]]);
          }
          if (
            ((G = [...G, { placement: s, overflows: F }]),
            !F.every((U) => U <= 0))
          ) {
            var P, X;
            const U = (((P = a.flip) == null ? void 0 : P.index) || 0) + 1,
              j = T[U];
            if (j)
              return {
                data: { index: U, overflows: G },
                reset: { placement: j },
              };
            let L =
              (X = G.filter((D) => D.overflows[0] <= 0).sort(
                (D, $) => D.overflows[1] - $.overflows[1]
              )[0]) == null
                ? void 0
                : X.placement;
            if (!L)
              switch (p) {
                case "bestFit": {
                  var V;
                  const D =
                    (V = G.map(($) => [
                      $.placement,
                      $.overflows
                        .filter((l) => l > 0)
                        .reduce((l, f) => l + f, 0),
                    ]).sort(($, l) => $[1] - l[1])[0]) == null
                      ? void 0
                      : V[0];
                  D && (L = D);
                  break;
                }
                case "initialPlacement":
                  L = r;
                  break;
              }
            if (s !== L) return { reset: { placement: L } };
          }
          return {};
        },
      }
    );
  };
async function Bi(e, t) {
  const { placement: n, platform: i, elements: s } = e,
    a = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)),
    o = le(n),
    r = xe(n),
    c = De(n) === "y",
    u = ["left", "top"].includes(o) ? -1 : 1,
    g = a && c ? -1 : 1,
    m = we(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: E,
  } = typeof m == "number"
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m };
  return (
    r && typeof E == "number" && (p = r === "end" ? E * -1 : E),
    c ? { x: p * g, y: h * u } : { x: h * u, y: p * g }
  );
}
const Pi = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, i;
          const { x: s, y: a, placement: o, middlewareData: r } = t,
            c = await Bi(t, e);
          return o === ((n = r.offset) == null ? void 0 : n.placement) &&
            (i = r.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: s + c.x, y: a + c.y, data: { ...c, placement: o } };
        },
      }
    );
  },
  Ui = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: i, placement: s } = t,
            {
              mainAxis: a = !0,
              crossAxis: o = !1,
              limiter: r = {
                fn: (N) => {
                  let { x: A, y: R } = N;
                  return { x: A, y: R };
                },
              },
              ...c
            } = we(e, t),
            u = { x: n, y: i },
            g = await Ft(t, c),
            m = De(le(s)),
            h = $t(m);
          let p = u[h],
            E = u[m];
          if (a) {
            const N = h === "y" ? "top" : "left",
              A = h === "y" ? "bottom" : "right",
              R = p + g[N],
              v = p - g[A];
            p = He(R, p, v);
          }
          if (o) {
            const N = m === "y" ? "top" : "left",
              A = m === "y" ? "bottom" : "right",
              R = E + g[N],
              v = E - g[A];
            E = He(R, E, v);
          }
          const y = r.fn({ ...t, [h]: p, [m]: E });
          return { ...y, data: { x: y.x - n, y: y.y - i } };
        },
      }
    );
  };
function re(e) {
  return Ht(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function K(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ne(e) {
  var t;
  return (t = (Ht(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Ht(e) {
  return e instanceof Node || e instanceof K(e).Node;
}
function te(e) {
  return e instanceof Element || e instanceof K(e).Element;
}
function Q(e) {
  return e instanceof HTMLElement || e instanceof K(e).HTMLElement;
}
function gt(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof K(e).ShadowRoot;
}
function Ae(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: s } = Y(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + i + n) &&
    !["inline", "contents"].includes(s)
  );
}
function $i(e) {
  return ["table", "td", "th"].includes(re(e));
}
function je(e) {
  const t = qe(),
    n = Y(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((i) =>
      (n.willChange || "").includes(i)
    ) ||
    ["paint", "layout", "strict", "content"].some((i) =>
      (n.contain || "").includes(i)
    )
  );
}
function zi(e) {
  let t = he(e);
  for (; Q(t) && !Be(t); ) {
    if (je(t)) return t;
    t = he(t);
  }
  return null;
}
function qe() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Be(e) {
  return ["html", "body", "#document"].includes(re(e));
}
function Y(e) {
  return K(e).getComputedStyle(e);
}
function Pe(e) {
  return te(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function he(e) {
  if (re(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (gt(e) && e.host) || ne(e);
  return gt(t) ? t.host : t;
}
function Gt(e) {
  const t = he(e);
  return Be(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Q(t) && Ae(t)
    ? t
    : Gt(t);
}
function ye(e, t, n) {
  var i;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Gt(e),
    a = s === ((i = e.ownerDocument) == null ? void 0 : i.body),
    o = K(s);
  return a
    ? t.concat(
        o,
        o.visualViewport || [],
        Ae(s) ? s : [],
        o.frameElement && n ? ye(o.frameElement) : []
      )
    : t.concat(s, ye(s, [], n));
}
function Wt(e) {
  const t = Y(e);
  let n = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const s = Q(e),
    a = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : i,
    r = ke(n) !== a || ke(i) !== o;
  return r && ((n = a), (i = o)), { width: n, height: i, $: r };
}
function Je(e) {
  return te(e) ? e : e.contextElement;
}
function ge(e) {
  const t = Je(e);
  if (!Q(t)) return oe(1);
  const n = t.getBoundingClientRect(),
    { width: i, height: s, $: a } = Wt(t);
  let o = (a ? ke(n.width) : n.width) / i,
    r = (a ? ke(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!r || !Number.isFinite(r)) && (r = 1),
    { x: o, y: r }
  );
}
const Fi = oe(0);
function Zt(e) {
  const t = K(e);
  return !qe() || !t.visualViewport
    ? Fi
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Hi(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== K(e)) ? !1 : t;
}
function ue(e, t, n, i) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    a = Je(e);
  let o = oe(1);
  t && (i ? te(i) && (o = ge(i)) : (o = ge(e)));
  const r = Hi(a, n, i) ? Zt(a) : oe(0);
  let c = (s.left + r.x) / o.x,
    u = (s.top + r.y) / o.y,
    g = s.width / o.x,
    m = s.height / o.y;
  if (a) {
    const h = K(a),
      p = i && te(i) ? K(i) : i;
    let E = h.frameElement;
    for (; E && i && p !== h; ) {
      const y = ge(E),
        N = E.getBoundingClientRect(),
        A = Y(E),
        R = N.left + (E.clientLeft + parseFloat(A.paddingLeft)) * y.x,
        v = N.top + (E.clientTop + parseFloat(A.paddingTop)) * y.y;
      (c *= y.x),
        (u *= y.y),
        (g *= y.x),
        (m *= y.y),
        (c += R),
        (u += v),
        (E = K(E).frameElement);
    }
  }
  return Ie({ width: g, height: m, x: c, y: u });
}
function Gi(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const s = Q(n),
    a = ne(n);
  if (n === a) return t;
  let o = { scrollLeft: 0, scrollTop: 0 },
    r = oe(1);
  const c = oe(0);
  if (
    (s || (!s && i !== "fixed")) &&
    ((re(n) !== "body" || Ae(a)) && (o = Pe(n)), Q(n))
  ) {
    const u = ue(n);
    (r = ge(n)), (c.x = u.x + n.clientLeft), (c.y = u.y + n.clientTop);
  }
  return {
    width: t.width * r.x,
    height: t.height * r.y,
    x: t.x * r.x - o.scrollLeft * r.x + c.x,
    y: t.y * r.y - o.scrollTop * r.y + c.y,
  };
}
function Wi(e) {
  return Array.from(e.getClientRects());
}
function Kt(e) {
  return ue(ne(e)).left + Pe(e).scrollLeft;
}
function Zi(e) {
  const t = ne(e),
    n = Pe(e),
    i = e.ownerDocument.body,
    s = ce(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    a = ce(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let o = -n.scrollLeft + Kt(e);
  const r = -n.scrollTop;
  return (
    Y(i).direction === "rtl" && (o += ce(t.clientWidth, i.clientWidth) - s),
    { width: s, height: a, x: o, y: r }
  );
}
function Ki(e, t) {
  const n = K(e),
    i = ne(e),
    s = n.visualViewport;
  let a = i.clientWidth,
    o = i.clientHeight,
    r = 0,
    c = 0;
  if (s) {
    (a = s.width), (o = s.height);
    const u = qe();
    (!u || (u && t === "fixed")) && ((r = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: a, height: o, x: r, y: c };
}
function Xi(e, t) {
  const n = ue(e, !0, t === "fixed"),
    i = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    a = Q(e) ? ge(e) : oe(1),
    o = e.clientWidth * a.x,
    r = e.clientHeight * a.y,
    c = s * a.x,
    u = i * a.y;
  return { width: o, height: r, x: c, y: u };
}
function pt(e, t, n) {
  let i;
  if (t === "viewport") i = Ki(e, n);
  else if (t === "document") i = Zi(ne(e));
  else if (te(t)) i = Xi(t, n);
  else {
    const s = Zt(e);
    i = { ...t, x: t.x - s.x, y: t.y - s.y };
  }
  return Ie(i);
}
function Xt(e, t) {
  const n = he(e);
  return n === t || !te(n) || Be(n)
    ? !1
    : Y(n).position === "fixed" || Xt(n, t);
}
function Vi(e, t) {
  const n = t.get(e);
  if (n) return n;
  let i = ye(e, [], !1).filter((r) => te(r) && re(r) !== "body"),
    s = null;
  const a = Y(e).position === "fixed";
  let o = a ? he(e) : e;
  for (; te(o) && !Be(o); ) {
    const r = Y(o),
      c = je(o);
    !c && r.position === "fixed" && (s = null),
      (
        a
          ? !c && !s
          : (!c &&
              r.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Ae(o) && !c && Xt(e, o))
      )
        ? (i = i.filter((g) => g !== o))
        : (s = r),
      (o = he(o));
  }
  return t.set(e, i), i;
}
function Yi(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: s } = e;
  const o = [...(n === "clippingAncestors" ? Vi(t, this._c) : [].concat(n)), i],
    r = o[0],
    c = o.reduce((u, g) => {
      const m = pt(t, g, s);
      return (
        (u.top = ce(m.top, u.top)),
        (u.right = be(m.right, u.right)),
        (u.bottom = be(m.bottom, u.bottom)),
        (u.left = ce(m.left, u.left)),
        u
      );
    }, pt(t, r, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function ji(e) {
  const { width: t, height: n } = Wt(e);
  return { width: t, height: n };
}
function qi(e, t, n) {
  const i = Q(t),
    s = ne(t),
    a = n === "fixed",
    o = ue(e, !0, a, t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const c = oe(0);
  if (i || (!i && !a))
    if (((re(t) !== "body" || Ae(s)) && (r = Pe(t)), i)) {
      const u = ue(t, !0, a, t);
      (c.x = u.x + t.clientLeft), (c.y = u.y + t.clientTop);
    } else s && (c.x = Kt(s));
  return {
    x: o.left + r.scrollLeft - c.x,
    y: o.top + r.scrollTop - c.y,
    width: o.width,
    height: o.height,
  };
}
function bt(e, t) {
  return !Q(e) || Y(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Vt(e, t) {
  const n = K(e);
  if (!Q(e)) return n;
  let i = bt(e, t);
  for (; i && $i(i) && Y(i).position === "static"; ) i = bt(i, t);
  return i &&
    (re(i) === "html" ||
      (re(i) === "body" && Y(i).position === "static" && !je(i)))
    ? n
    : i || zi(e) || n;
}
const Ji = async function (e) {
  let { reference: t, floating: n, strategy: i } = e;
  const s = this.getOffsetParent || Vt,
    a = this.getDimensions;
  return {
    reference: qi(t, await s(n), i),
    floating: { x: 0, y: 0, ...(await a(n)) },
  };
};
function Qi(e) {
  return Y(e).direction === "rtl";
}
const eo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gi,
  getDocumentElement: ne,
  getClippingRect: Yi,
  getOffsetParent: Vt,
  getElementRects: Ji,
  getClientRects: Wi,
  getDimensions: ji,
  getScale: ge,
  isElement: te,
  isRTL: Qi,
};
function to(e, t) {
  let n = null,
    i;
  const s = ne(e);
  function a() {
    clearTimeout(i), n && n.disconnect(), (n = null);
  }
  function o(r, c) {
    r === void 0 && (r = !1), c === void 0 && (c = 1), a();
    const { left: u, top: g, width: m, height: h } = e.getBoundingClientRect();
    if ((r || t(), !m || !h)) return;
    const p = Te(g),
      E = Te(s.clientWidth - (u + m)),
      y = Te(s.clientHeight - (g + h)),
      N = Te(u),
      R = {
        rootMargin: -p + "px " + -E + "px " + -y + "px " + -N + "px",
        threshold: ce(0, be(1, c)) || 1,
      };
    let v = !0;
    function k(T) {
      const C = T[0].intersectionRatio;
      if (C !== c) {
        if (!v) return o();
        C
          ? o(!1, C)
          : (i = setTimeout(() => {
              o(!1, 1e-7);
            }, 100));
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(k, { ...R, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(k, R);
    }
    n.observe(e);
  }
  return o(!0), a;
}
function no(e, t, n, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: r = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = i,
    u = Je(e),
    g = s || a ? [...(u ? ye(u) : []), ...ye(t)] : [];
  g.forEach((A) => {
    s && A.addEventListener("scroll", n, { passive: !0 }),
      a && A.addEventListener("resize", n);
  });
  const m = u && r ? to(u, n) : null;
  let h = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((A) => {
      let [R] = A;
      R &&
        R.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          p && p.observe(t);
        }))),
        n();
    })),
    u && !c && p.observe(u),
    p.observe(t));
  let E,
    y = c ? ue(e) : null;
  c && N();
  function N() {
    const A = ue(e);
    y &&
      (A.x !== y.x ||
        A.y !== y.y ||
        A.width !== y.width ||
        A.height !== y.height) &&
      n(),
      (y = A),
      (E = requestAnimationFrame(N));
  }
  return (
    n(),
    () => {
      g.forEach((A) => {
        s && A.removeEventListener("scroll", n),
          a && A.removeEventListener("resize", n);
      }),
        m && m(),
        p && p.disconnect(),
        (p = null),
        c && cancelAnimationFrame(E);
    }
  );
}
const io = Ui,
  oo = Di,
  ro = Li,
  so = (e, t, n) => {
    const i = new Map(),
      s = { platform: eo, ...n },
      a = { ...s.platform, _c: i };
    return Ii(e, t, { ...s, platform: a });
  };
function ao(e) {
  let t;
  const n = e[1].default,
    i = on(n, e, e[0], null);
  return {
    c() {
      i && i.c();
    },
    l(s) {
      i && i.l(s);
    },
    m(s, a) {
      i && i.m(s, a), (t = !0);
    },
    p(s, [a]) {
      i &&
        i.p &&
        (!t || a & 1) &&
        rn(i, n, s, s[0], t ? an(n, s[0], a, null) : sn(s[0]), null);
    },
    i(s) {
      t || (fn(i, s), (t = !0));
    },
    o(s) {
      dn(i, s), (t = !1);
    },
    d(s) {
      i && i.d(s);
    },
  };
}
function co(e, t, n) {
  let { $$slots: i = {}, $$scope: s } = t;
  return (
    me.registerLanguage("xml", fi),
    me.registerLanguage("css", Ei),
    me.registerLanguage("javascript", Ai),
    me.registerLanguage("typescript", Ni),
    li.set(me),
    ui.set({
      computePosition: so,
      autoUpdate: no,
      flip: oo,
      shift: io,
      offset: Pi,
      arrow: ro,
    }),
    cn(() => {
      const {
        data: { subscription: a },
      } = gn.auth.onAuthStateChange(() => {
        bn();
      });
      return () => {
        a.unsubscribe();
      };
    }),
    (e.$$set = (a) => {
      "$$scope" in a && n(0, (s = a.$$scope));
    }),
    [s, i]
  );
}
class mo extends ln {
  constructor(t) {
    super(), un(this, t, co, ao, nn, {});
  }
}
export { mo as component };
