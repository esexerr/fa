(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(5943);
        },
      ]);
    },
    5943: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return tt;
          },
        });
      var r,
        l = n(4051),
        o = n.n(l),
        a = n(5893),
        i = n(1163),
        u = n(7294);
      function c(e, t, n, r, l, o, a) {
        try {
          var i = e[o](a),
            u = i.value;
        } catch (c) {
          return void n(c);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, l);
      }
      function s(e) {
        var t,
          n = e.getContent,
          r = e.children,
          l = e.timeout,
          i = void 0 === l ? 2e3 : l,
          s = e.className,
          f = e.idleClassName,
          d = e.loadingClassName,
          m = e.copiedClassName,
          h = e.errorClassName,
          b = (0, u.useState)(0),
          v = b[0],
          p = b[1];
        return (
          (0, u.useEffect)(
            function () {
              if (2 === v) {
                var e = setTimeout(function () {
                  p(0);
                }, i);
                return function () {
                  return clearTimeout(e);
                };
              }
            },
            [v]
          ),
          (0, a.jsx)("button", {
            type: "button",
            onClick:
              ((t = o().mark(function e() {
                var t;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (0 === v) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        if ("string" !== typeof (t = n())) {
                          e.next = 8;
                          break;
                        }
                        return (
                          navigator.clipboard.writeText(t),
                          t,
                          p(2),
                          e.abrupt("return")
                        );
                      case 8:
                        return (
                          p(1), (e.t0 = navigator.clipboard), (e.next = 12), t
                        );
                      case 12:
                        return (
                          (e.t1 = e.sent),
                          e.t0.writeText.call(e.t0, e.t1),
                          (e.next = 16),
                          t
                        );
                      case 16:
                        return (
                          e.sent, (e.t2 = window.history), (e.next = 20), t
                        );
                      case 20:
                        return (
                          (e.t3 = e.sent),
                          e.t2.pushState.call(
                            e.t2,
                            "Copy The Url",
                            "Copy The Url",
                            e.t3
                          ),
                          p(2),
                          e.abrupt("return")
                        );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, l) {
                  var o = t.apply(e, n);
                  function a(e) {
                    c(o, r, l, a, i, "next", e);
                  }
                  function i(e) {
                    c(o, r, l, a, i, "throw", e);
                  }
                  a(void 0);
                });
              }),
            className: ""
              .concat(s, " ")
              .concat(0 === v ? f : 1 === v ? d : 2 === v ? m : h),
            children:
              0 === v
                ? r
                : 1 === v
                ? "Loading..."
                : 2 === v
                ? "Copy The URL If you are on Phone"
                : "An error occurred.",
          })
        );
      }
      !(function (e) {
        (e[(e.Idle = 0)] = "Idle"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Copied = 2)] = "Copied"),
          (e[(e.Error = 3)] = "Error");
      })(r || (r = {}));
      var f = n(3689),
        d = n(4249);
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return m(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return m(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function b(e) {
        try {
          var t = new URL(e),
            n = t.hostname,
            r = t.protocol;
          if (
            "file:" === (null === r || void 0 === r ? void 0 : r.toLowerCase())
          )
            return;
          if (!n) return;
          return (t.hostname = (0, f.H9)(n)), t.toString();
        } catch (l) {}
      }
      var v = [
          "A-Z",
          "a-z",
          "\xc0-\xd6",
          "\xd8-\xf6",
          "\xf8-\u02b8",
          "\u0300-\u0590",
          "\u0800-\u1fff",
          "\u200e-\ufb1c",
          "\ufe00-\ufe6f",
          "\ufefd-\uffff",
        ].join(""),
        p = ["\u0591-\u07ff", "\ufb1d-\ufdfd", "\ufe70-\ufefc"].join("");
      new RegExp("^[^".concat(p, "]*[").concat(v, "]")),
        new RegExp("^[^".concat(v, "]*[").concat(p, "]"));
      var y = function (e) {
        var t = h(e, 2)[1],
          n = b(t);
        return n
          ? { content: [{ type: "text", content: n }], target: n }
          : { type: "text", content: t };
      };
      function x(e) {
        var t = (0, d.parserFor)(e, { inline: !0 }),
          n = (0, d.outputFor)(e, "react");
        return function (e) {
          var r = t(e);
          return n(r);
        };
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function j(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function w(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return g(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var O = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              j(e, t, n[t]);
            });
        }
        return e;
      })({}, d.defaultRules.link, {
        parse: function (e, t, n) {
          var r = w(e, 4),
            l = r[1],
            o = r[2],
            a = r[3],
            i = (0, d.unescapeUrl)(o);
          if (!/^https?:\/\//i.test(i)) return t(l, n);
          var u = b(i);
          if (!u) return { type: "text", content: i };
          var c = u;
          return { content: t(l, n), target: c, title: a };
        },
        react: function (e, t, n) {
          return (0, a.jsx)(
            "a",
            {
              href: e.target,
              title: e.title,
              rel: "noopener noreferrer nofollow ugc",
              target: "_blank",
              className: "hover:underline text-[#00b0f4]",
              children: t(e.content, n),
            },
            n.key
          );
        },
      });
      function S(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var N = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              S(e, t, n[t]);
            });
        }
        return e;
      })({}, d.defaultRules.autolink, { parse: y, react: O.react });
      function k(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function A(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              A(e, t, n[t]);
            });
        }
        return e;
      }
      function P(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return k(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return k(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var U = /^$|\n *$/,
        E = /^( *>>> +([\S\s]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
        I = /^ *> ?/gm,
        R = /^ *>>> ?/,
        T = C({}, d.defaultRules.blockQuote, {
          match: function (e, t) {
            var n,
              r = t.nested,
              l = t.inQuote,
              o = t.prevCapture;
            return r || l
              ? null
              : U.test(
                  null !== (n = null === o || void 0 === o ? void 0 : o[0]) &&
                    void 0 !== n
                    ? n
                    : ""
                )
              ? E.exec(e)
              : null;
          },
          parse: function (e, t, n) {
            var r = P(e, 1)[0],
              l = n.inline,
              o = void 0 !== l && l,
              a = R.test(e[0]),
              i = a ? R : I,
              u = t(
                r.replace(i, ""),
                C({}, n, { inline: !a || o, inQuote: !0 })
              );
            return (
              0 === u.length && u.push({ type: "text", content: " " }),
              { content: u }
            );
          },
          react: function (e, t, n) {
            return (0, a.jsxs)(
              "div",
              {
                className: "flex",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "min-w-[.25rem] max-w-[.25rem] rounded bg-[#50545c]",
                  }),
                  (0, a.jsx)("blockquote", {
                    className: "max-w-full pr-2 pl-3 m-0 indent-0",
                    children: t(e.content, n),
                  }),
                ],
              },
              n.key
            );
          },
        });
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function F(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var $ = {
          order: d.defaultRules.codeBlock.order,
          match: (0, d.anyScopeRegex)(
            /^```(?:([\w+.-]+?)\n)?\n*([^\n][\S\s]*?)\n*```/i
          ),
          parse: function (e) {
            return { content: F(e, 3)[2] };
          },
          react: function (e, t, n) {
            return (0, a.jsx)(
              "pre",
              {
                className:
                  "max-w-full bg-[#202225] text-[##b9bbbe] rounded mt-[.375rem] p-2 text-sm leading-[1.125rem] whitespace-pre-wrap",
                children: e.content,
              },
              n.key
            );
          },
        },
        L = d.defaultRules.em,
        D = d.defaultRules.escape;
      function M(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var q = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function (t) {
                M(e, t, n[t]);
              });
          }
          return e;
        })({}, d.defaultRules.inlineCode, {
          react: function (e, t, n) {
            return (0, a.jsx)(
              "code",
              {
                className:
                  "p-[.2em] my-[-.2em] rounded-[3px] bg-[#202225] text-[.75rem] leading-[1.125rem] whitespace-pre-wrap",
                children: e.content,
              },
              n.key
            );
          },
        }),
        B = d.defaultRules.br;
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function J(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Q = new Map(
          Object.entries({
            "@": "@user",
            "@!": "@user",
            "@&": "@role",
            "#": "#channel",
          })
        ),
        z = {
          order: d.defaultRules.text.order,
          match: (0, d.inlineRegex)(/^<(@!?|@&|#)\d+>|^(@(?:everyone|here))/),
          parse: function (e) {
            var t = J(e, 3),
              n = t[1],
              r = t[2];
            return r ? { content: r } : { content: Q.get(n) };
          },
          react: function (e, t, n) {
            return (0, a.jsx)(
              "span",
              {
                className:
                  "rounded-[3px] px-0.5 font-medium transition-colors duration-[50ms] bg-[#5f64f2] bg-opacity-30  text-[#dee0fc]  ".concat(
                    "@everyone" === e.content || "@here" === e.content
                      ? ""
                      : "cursor-pointer hover:bg-opacity-100 hover:text-white"
                  ),
                children: e.content,
              },
              n.key
            );
          },
        },
        V = d.defaultRules.newline,
        X = d.defaultRules.paragraph,
        Y = {
          order: d.defaultRules.text.order,
          match: (0, d.inlineRegex)(/^\|\|([\S\s]+?)\|\|/),
          parse: function (e, t, n) {
            return { content: t(e[1], n) };
          },
          react: function (e, t, n) {
            return (0, a.jsx)(
              "span",
              {
                className: "bg-white bg-opacity-10 rounded-[3px]",
                children: t(e.content, n),
              },
              n.key
            );
          },
        };
      function H(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var G = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function (t) {
                H(e, t, n[t]);
              });
          }
          return e;
        })({}, d.defaultRules.del, {
          match: (0, d.inlineRegex)(/^~~([\S\s]+?)~~(?!_)/),
        }),
        K = d.defaultRules.strong;
      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ee(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              ee(e, t, n[t]);
            });
        }
        return e;
      }
      function ne(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return W(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return W(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var re = te({}, d.defaultRules.text, {
          parse: function (e, t, n) {
            var r = ne(e, 1)[0];
            return n.nested ? { content: r } : t(r, te({}, n, { nested: !0 }));
          },
        }),
        le = d.defaultRules.u;
      function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ae(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ie(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return oe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return oe(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var ue = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function (t) {
                ae(e, t, n[t]);
              });
          }
          return e;
        })({}, d.defaultRules.url, {
          match: function (e, t) {
            if (!t.inline) return null;
            var n = /^((?:https?|steam):\/\/[^\s<]+[^\s"',.:;<\]])/.exec(e);
            if (!n) return null;
            for (
              var r = ie(n, 1)[0], l = 0, o = r.length - 1;
              o >= 0 && ")" === r[o];
              o -= 1
            ) {
              var a = r.indexOf("(", l);
              if (-1 === a) {
                r = r.slice(0, -1);
                break;
              }
              l = a + 1;
            }
            return [r, r];
          },
          parse: y,
          react: O.react,
        }),
        ce = {
          content: x({
            autolink: N,
            blockQuote: T,
            codeBlock: $,
            emphasis: L,
            escape: D,
            inlineCode: q,
            lineBreak: B,
            link: O,
            mention: z,
            newline: V,
            paragraph: X,
            spoiler: Y,
            strikethrough: G,
            strong: K,
            text: re,
            underline: le,
            url: ue,
          }),
          header: x({
            autolink: N,
            blockQuote: T,
            emphasis: L,
            escape: D,
            inlineCode: q,
            spoiler: Y,
            strikethrough: G,
            strong: K,
            text: re,
            underline: le,
            url: ue,
          }),
        };
      function se(e) {
        var t = e.className,
          n = e.children,
          r = e.type,
          l = ce[void 0 === r ? "content" : r];
        return (0, a.jsx)("div", {
          className: "whitespace-pre-wrap break-words leading-snug ".concat(t),
          children: l(n.trim()),
        });
      }
      function fe(e) {
        var t = e.embed,
          n = [],
          r = !0,
          l = !1,
          o = void 0;
        try {
          for (
            var i, u = t.fields[Symbol.iterator]();
            !(r = (i = u.next()).done);
            r = !0
          ) {
            var c = i.value;
            0 === n.length ||
            !c.inline ||
            !n[n.length - 1][0].inline ||
            n[n.length - 1].length >= 3
              ? n.push([c])
              : n[n.length - 1].push(c);
          }
        } catch (y) {
          (l = !0), (o = y);
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (l) throw o;
          }
        }
        var s = [],
          f = !0,
          d = !1,
          m = void 0;
        try {
          for (
            var h, b = n[Symbol.iterator]();
            !(f = (h = b.next()).done);
            f = !0
          )
            for (var v = 12 / h.value.length, p = 1; p < 13; p += v)
              s.push("".concat(p, "/").concat(p + v));
        } catch (y) {
          (d = !0), (m = y);
        } finally {
          try {
            f || null == b.return || b.return();
          } finally {
            if (d) throw m;
          }
        }
        return (0, a.jsx)("article", {
          className:
            "bg-[#2f3136] border-l-4 border-solid relative grid w-fit max-w-[520px] box-border rounded leading-[1.375rem]",
          style: { borderLeftColor: t.color || "#202225" },
          children: (0, a.jsxs)("div", {
            className:
              "overflow-hidden p-[.5rem_1rem_1rem_.75rem] inline-grid grid-cols-[auto] grid-rows-[auto]",
            children: [
              t.author.name || t.author.iconUrl
                ? (0, a.jsxs)("div", {
                    className: "min-w-0 flex items-center col-[1/1] mt-2",
                    children: [
                      t.author.iconUrl
                        ? (0, a.jsx)("img", {
                            className:
                              "h-6 w-6 rounded-full mr-2 object-contain",
                            src: t.author.iconUrl,
                            alt: "",
                          })
                        : null,
                      (0, a.jsx)("a", {
                        href: t.author.url || void 0,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        role: "button",
                        className: "text-white text-sm font-semibold ".concat(
                          t.author.url ? "hover:underline" : "cursor-text"
                        ),
                        children: t.author.name,
                      }),
                    ],
                  })
                : null,
              t.title
                ? (0, a.jsx)("a", {
                    href: t.url || void 0,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    role: "button",
                    className:
                      "min-w-0 text-white inline-block font-semibold col-[1/1] mt-2 ".concat(
                        t.url ? "hover:underline text-[#00b0f4]" : "cursor-text"
                      ),
                    children: (0, a.jsx)(se, {
                      type: "header",
                      children: t.title,
                    }),
                  })
                : null,
              t.content
                ? (0, a.jsx)("div", {
                    className:
                      "min-w-0 text-sm font-normal whitespace-pre-line col-[1/1] mt-2",
                    children: (0, a.jsx)(se, { children: t.content }),
                  })
                : null,
              t.autodelete
                ? (0, a.jsx)("div", {
                    className:
                      "min-w-0 text-sm font-normal whitespace-pre-line col-[1/1] mt-2",
                    children: (0, a.jsx)(se, { children: t.autodelete }),
                  })
                : null,
              t.description
                ? (0, a.jsx)("div", {
                    className:
                      "min-w-0 text-sm font-normal whitespace-pre-line col-[1/1] mt-2",
                    children: (0, a.jsx)(se, { children: t.description }),
                  })
                : null,
              t.fields.length
                ? (0, a.jsx)("div", {
                    className: "min-w-0 grid col-[1/1] mt-2 gap-2",
                    children: t.fields.map(function (e, t) {
                      return (0,
                      a.jsxs)("div", { className: "min-w-0 text-sm leading-[1.125rem] font-normal", style: { gridColumn: s[t] }, children: [(0, a.jsx)("div", { className: "min-w-0 text-white font-semibold mb-0.5", children: (0, a.jsx)(se, { type: "header", children: e.name }) }), (0, a.jsx)("div", { className: "min-w-0 font-normal whitespace-pre-line", children: (0, a.jsx)(se, { children: e.value }) })] }, t);
                    }),
                  })
                : null,
              t.image
                ? (0, a.jsx)("div", {
                    className:
                      "min-w-0 block mt-4 max-w-[400px] max-h-[300px] justify-self-start rounded cursor-pointer overflow-hidden ".concat(
                        t.thumbnail ? "col-[1/3]" : "col-[1/1]"
                      ),
                    children: (0, a.jsx)("img", {
                      className: "object-contain max-h-full max-w-full",
                      src: t.image,
                      alt: t.image,
                    }),
                  })
                : null,
              t.thumbnail
                ? (0, a.jsx)("div", {
                    className:
                      "min-w-0 row-[1/8] col-[2/2] mt-2 ml-4 shrink-0 justify-self-end block max-w-20 max-h-20 rounded-[3px] cursor-pointer overflow-hidden",
                    children: (0, a.jsx)("img", {
                      className: "object-contain max-h-full max-w-full",
                      src: t.thumbnail,
                      alt: t.thumbnail,
                    }),
                  })
                : null,
              t.footer.text || t.footer.iconUrl
                ? (0, a.jsxs)("div", {
                    className:
                      "min-w-0 flex items-center mt-2 row-auto ".concat(
                        t.thumbnail ? "col-[1/3]" : "col-[1/1]"
                      ),
                    children: [
                      t.footer.iconUrl
                        ? (0, a.jsx)("img", {
                            className:
                              "h-5 w-5 rounded-full mr-2 object-contain",
                            src: t.footer.iconUrl,
                            alt: "",
                          })
                        : null,
                      (0, a.jsxs)("div", {
                        className: "min-w-0 text-xs font-medium",
                        children: [
                          t.footer.text,
                          t.footer.text && t.timestamp
                            ? (0, a.jsx)("span", {
                                className: "inline-block mx-1",
                                children: "\u2022",
                              })
                            : null,
                          t.timestamp ? "Today at 12:00 PM" : null,
                        ],
                      }),
                    ],
                  })
                : null,
            ],
          }),
        });
      }
      function de(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              de(e, t, n[t]);
            });
        }
        return e;
      }
      function he(e, t) {
        if (null == e) return {};
        var n,
          r,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              l = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (l[n] = e[n]));
        }
        return l;
      }
      function be(e) {
        var t = e.limit,
          n = e.textarea,
          r = void 0 !== n && n,
          l = e.required,
          o = void 0 !== l && l,
          i = he(e, ["limit", "textarea", "required"]),
          u = r ? "textarea" : "input";
        return (0, a.jsxs)("div", {
          className: "limited-input relative",
          children: [
            (0, a.jsx)(
              u,
              me({}, i, {
                style:
                  "string" === typeof i.value &&
                  (i.value.length > t || (o && !i.value))
                    ? me({}, i.style, { borderColor: "#df4549" })
                    : i.style,
              })
            ),
            "string" === typeof i.value && i.value.length > 0.8 * t
              ? (0, a.jsxs)("span", {
                  className:
                    "absolute pointer-events-none text-xs right-0 -bottom-4",
                  children: [
                    "string" === typeof i.value && i.value.length,
                    "/",
                    t,
                  ],
                })
              : o && "string" === typeof i.value && !i.value
              ? (0, a.jsx)("span", {
                  className:
                    "absolute pointer-events-none text-xs right-1 bottom-1",
                  children: "This field is required.",
                })
              : null,
          ],
        });
      }
      function ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function pe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return ve(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ve(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ye(e) {
        return xe(e);
      }
      function xe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null === e || void 0 === e
          ? e
          : Array.isArray(e)
          ? e.map(function (e) {
              return xe(e, t);
            })
          : Object.entries(e).reduce(function (e, n) {
              var r = pe(n, 2),
                l = r[0],
                o = r[1];
              if (
                (t &&
                  (l = l.replace(/[A-Z]/g, function (e) {
                    return "_".concat(e.toLowerCase());
                  })),
                "object" === typeof o)
              ) {
                var a = xe(o, t);
                if (0 === Object.keys(a).length) return e;
                e[l] = a;
              } else o && (e[l] = t && ("image" === l || "thumbnail" === l) ? { url: o } : o);
              return e;
            }, {});
      }
      var ge = n(5226),
        je = n(2538),
        we = n(8829),
        Oe = n(6671);
      function Se(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ne(e, t) {
        if (null == e) return {};
        var n,
          r,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              l = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (l[n] = e[n]));
        }
        return l;
      }
      function ke(e) {
        var t = e.children,
          n = e.language,
          r = Ne(e, ["children", "language"]);
        return (0, a.jsx)(
          ge.Z,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function (t) {
                  Se(e, t, n[t]);
                });
            }
            return e;
          })({ language: n, style: Oe.FE, wrapLongLines: !0 }, r, {
            children: t,
          })
        );
      }
      function Ae(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Ce() {
        var e = Ae(["title=", ""]);
        return (
          (Ce = function () {
            return e;
          }),
          e
        );
      }
      function Pe() {
        var e = Ae(["url=", ""]);
        return (
          (Pe = function () {
            return e;
          }),
          e
        );
      }
      function Ue() {
        var e = Ae(["description=", ""]);
        return (
          (Ue = function () {
            return e;
          }),
          e
        );
      }
      function Ee() {
        var e = Ae(["name=", ""]);
        return (
          (Ee = function () {
            return e;
          }),
          e
        );
      }
      function Ie() {
        var e = Ae(["url=", ""]);
        return (
          (Ie = function () {
            return e;
          }),
          e
        );
      }
      function Re() {
        var e = Ae(["icon_url=", ""]);
        return (
          (Re = function () {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Ae(
          ["\nembed.add_field(name=", ",\n"],
          ["\\nembed.add_field(name=", ",\\n"]
        );
        return (
          (Te = function () {
            return e;
          }),
          e
        );
      }
      function _e() {
        var e = Ae(["                value=", ""]);
        return (
          (_e = function () {
            return e;
          }),
          e
        );
      }
      function Fe() {
        var e = Ae(
          ["\nembed.set_image(url=", ")\n"],
          ["\\nembed.set_image(url=", ")\\n"]
        );
        return (
          (Fe = function () {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = Ae(
          ["\nembed.set_thumbnail(url=", ")\n"],
          ["\\nembed.set_thumbnail(url=", ")\\n"]
        );
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = Ae(["text=", ""]);
        return (
          (Le = function () {
            return e;
          }),
          e
        );
      }
      function De() {
        var e = Ae(["icon_url=", ""]);
        return (
          (De = function () {
            return e;
          }),
          e
        );
      }
      function Me(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        for (var l = "", o = 0; o < e.length; o++)
          o > 0 && (l += JSON.stringify(n[o - 1])), (l += e[o]);
        return l;
      }
      function qe(e) {
        var t = e.embed,
          n = (0, u.useState)("affect"),
          r = n[0],
          l = n[1],
          o = (0, u.useState)("14"),
          i = (o[0], o[1], (0, u.useState)("chained")),
          c = (i[0], i[1], "{embed}");
        if ("json" === r)
          c = (function (e) {
            var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = JSON.stringify(xe(e, !0), null, 2);
            return t ? n.replace(/(\n\s*)"(\w+)":/g, "$1$2:") : n;
          })(t, !1);
        else if ("affect" === r) {
          var s = "";
          if (t.author.name || t.author.url || t.author.iconUrl) {
            var f = "";
            t.author.name && (f += "author: ".concat(t.author.name, " ")),
              t.author.url && (f += "&& url: ".concat(t.author.url, " ")),
              t.author.iconUrl && (f += "&& icon: ".concat(t.author.iconUrl)),
              (s += "{".concat(f, "}$v"));
          }
          if (
            (t.title && (s += "{title: ".concat(t.title, "}$v")),
            t.content && (s += "{content: ".concat(t.content, "}$v")),
            t.autodelete && (s += "{autodelete: ".concat(t.autodelete, "}")),
            t.url && (s += "{url: ".concat(t.url, "}$v")),
            t.description &&
              (s += "{description: ".concat(t.description, "}$v")),
            t.fields.length > 0)
          ) {
            f = "";
            var d = !0,
              m = !1,
              h = void 0;
            try {
              for (
                var b, v = t.fields[Symbol.iterator]();
                !(d = (b = v.next()).done);
                d = !0
              ) {
                var p = b.value;
                (f += "{field: "
                  .concat(p.name, " && value: ")
                  .concat(p.value, " ")),
                  p.inline && (f += "&& inline: true"),
                  (f += "}$v");
              }
            } catch (I) {
              (m = !0), (h = I);
            } finally {
              try {
                d || null == v.return || v.return();
              } finally {
                if (m) throw h;
              }
            }
            s += f;
          }
          if (t.buttons.length > 0) {
            f = "";
            var y = !0,
              x = !1,
              g = void 0;
            try {
              for (
                var j, w = t.buttons[Symbol.iterator]();
                !(y = (j = w.next()).done);
                y = !0
              ) {
                var O = j.value;
                (f += "{button: ".concat(O.button, " && ")),
                  (f += "label: ".concat(O.label, " && ")),
                  (f += "emoji: ".concat(O.emoji, " && ")),
                  (f += "style: ".concat(O.style)),
                  (f += "}$v");
              }
            } catch (I) {
              (x = !0), (g = I);
            } finally {
              try {
                y || null == w.return || w.return();
              } finally {
                if (x) throw g;
              }
            }
            s += f;
          }
          if (
            (t.image && (s += "{image: ".concat(t.image, "}$v")),
            t.thumbnail && (s += "{thumbnail: ".concat(t.thumbnail, "}$v")),
            t.color && (s += "{color: ".concat(t.color, "}$v")),
            t.footer.text || t.footer.iconUrl)
          ) {
            f = "";
            t.footer.text && (f += "footer: ".concat(t.footer.text, " ")),
              t.footer.iconUrl && (f += "&& icon: ".concat(t.footer.iconUrl)),
              (s += "{".concat(f, "}$v"));
          }
          t.timestamp && (s += "{timestamp: true}$v"), (c += s);
        } else {
          c += "embed = discord.Embed(";
          var S = [];
          if (
            (t.title && S.push(Me(Ce(), t.title)),
            t.url && S.push(Me(Pe(), t.url)),
            t.description && S.push(Me(Ue(), t.description)),
            t.color && S.push("colour=".concat(t.color.replace("#", "0x"))),
            t.timestamp && S.push("timestamp=datetime.now()"),
            (c += "".concat(S.join(",\n                      "), ")\n")),
            t.author.name || t.author.url || t.author.iconUrl)
          ) {
            c += "\nembed.set_author(";
            var N = [];
            t.author.name && N.push(Me(Ee(), t.author.name)),
              t.author.url && N.push(Me(Ie(), t.author.url)),
              t.author.iconUrl && N.push(Me(Re(), t.author.iconUrl)),
              (c += "".concat(N.join(",\n                 "), ")\n"));
          }
          if (t.fields.length > 0) {
            var k = !0,
              A = !1,
              C = void 0;
            try {
              for (
                var P, U = t.fields[Symbol.iterator]();
                !(k = (P = U.next()).done);
                k = !0
              ) {
                var E = P.value;
                (c += Me(Te(), E.name)),
                  (c += Me(_e(), E.value)),
                  E.inline && (c += ",\n                inline=True"),
                  (c += ")");
              }
            } catch (I) {
              (A = !0), (C = I);
            } finally {
              try {
                k || null == U.return || U.return();
              } finally {
                if (A) throw C;
              }
            }
            c += "\n";
          }
          t.image && (c += Me(Fe(), t.image)),
            t.thumbnail && (c += Me($e(), t.thumbnail)),
            (t.footer.text || t.footer.iconUrl) &&
              ((c += "\nembed.set_footer("),
              t.footer.text && (c += Me(Le(), t.footer.text)),
              t.footer.iconUrl &&
                (t.footer.text && (c += ",\n                 "),
                (c += Me(De(), t.footer.iconUrl))),
              (c += ")\n")),
            (c += "\nawait ctx.send(embed=embed)");
        }
        return (0, a.jsxs)("div", {
          className: "mt-8",
          children: [
            (0, a.jsx)(ke, {
              language: "json" === r ? "js" : r,
              className: "rounded text-sm",
              children: c,
            }),
          ],
        });
      }
      function Be(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ze(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              Ze(e, t, n[t]);
            });
        }
        return e;
      }
      function Qe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                l,
                o = [],
                a = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (u) {
                (i = !0), (l = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (i) throw l;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Be(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Be(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ze(e) {
        var t = e.label,
          n = Qe(e.value, 2),
          r = n[0],
          l = n[1],
          o = e.limit,
          i = e.textarea,
          c = (0, u.useId)();
        return o
          ? (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("label", { htmlFor: c, children: t }),
                (0, a.jsx)(
                  be,
                  Je(
                    {
                      limit: o,
                      id: c,
                      value: r,
                      onChange: function (e) {
                        return l(e.target.value);
                      },
                    },
                    i ? { textarea: !0 } : { type: "text" }
                  )
                ),
              ],
            })
          : (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("label", { htmlFor: c, children: t }),
                (0, a.jsx)("input", {
                  type: "text",
                  id: c,
                  value: r,
                  onChange: function (e) {
                    return l(e.target.value);
                  },
                }),
              ],
            });
      }
      function Ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Xe(e, t, n, r, l, o, a) {
        try {
          var i = e[o](a),
            u = i.value;
        } catch (c) {
          return void n(c);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, l);
      }
      function Ye(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, l) {
            var o = e.apply(t, n);
            function a(e) {
              Xe(o, r, l, a, i, "next", e);
            }
            function i(e) {
              Xe(o, r, l, a, i, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function He(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ve(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Ve(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ve(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ge(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
        return e.length > t ? "".concat(e.slice(0, t - 3), "...") : e;
      }
      function Ke() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "blue";
        return '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n                font-medium py-1 px-2 rounded transition '.concat(
          "blue" === e
            ? "bg-[#5865f2] hover:bg-[#4752c4] text-white"
            : "red" === e
            ? "bg-[#d83c3e] hover:bg-[#a12d2f] text-white"
            : "bg-[#4f545c] cursor-not-allowed"
        );
      }
      function We(e) {
        var t = !0,
          n = !1,
          r = void 0;
        try {
          for (
            var l,
              o = Array.from(document.getElementsByTagName("details"))[
                Symbol.iterator
              ]();
            !(t = (l = o.next()).done);
            t = !0
          ) {
            l.value.open = e;
          }
        } catch (a) {
          (n = !0), (r = a);
        } finally {
          try {
            t || null == o.return || o.return();
          } finally {
            if (n) throw r;
          }
        }
      }
      ge.Z.registerLanguage("js", je.Z), ge.Z.registerLanguage("py", we.Z);
      var et = {
        author: { name: "", url: "", iconUrl: "" },
        title: "",
        url: "",
        description: "",
        color: "",
        fields: [],
        image: "",
        thumbnail: "",
        footer: { text: "", iconUrl: "" },
        timestamp: void 0,
        content: "",
        autodelete: "",
        buttons: [],
      };
      function tt() {
        var e = function (e) {
            var t, n, l, o, a, i, u, c, s, d, m, b, v, y, x, j, w, S, N, A;
            r(
              null !==
                (i =
                  null === (t = e.author) || void 0 === t
                    ? void 0
                    : t.iconUrl) && void 0 !== i
                ? i
                : ""
            ),
              f(
                null !==
                  (u =
                    null === (n = e.author) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== u
                  ? u
                  : ""
              ),
              h(
                null !==
                  (c =
                    null === (l = e.author) || void 0 === l ? void 0 : l.url) &&
                  void 0 !== c
                  ? c
                  : ""
              ),
              p(null !== (s = e.content) && void 0 !== s ? s : ""),
              g(null !== (d = e.autodelete) && void 0 !== d ? d : ""),
              O(null !== (m = e.title) && void 0 !== m ? m : ""),
              k(null !== (b = e.url) && void 0 !== b ? b : ""),
              P(null !== (v = e.description) && void 0 !== v ? v : ""),
              L(null !== (y = e.fields) && void 0 !== y ? y : []),
              q(null !== (x = e.buttons) && void 0 !== x ? x : []),
              J(null !== (j = e.image) && void 0 !== j ? j : ""),
              V(null !== (w = e.thumbnail) && void 0 !== w ? w : ""),
              e.color && I(e.color),
              _(void 0 !== e.color),
              H(
                null !==
                  (S =
                    null === (o = e.footer) || void 0 === o
                      ? void 0
                      : o.text) && void 0 !== S
                  ? S
                  : ""
              ),
              W(
                null !==
                  (N =
                    null === (a = e.footer) || void 0 === a
                      ? void 0
                      : a.iconUrl) && void 0 !== N
                  ? N
                  : ""
              ),
              ne(null !== (A = e.timestamp) && void 0 !== A ? A : void 0),
              oe(!0);
          },
          t = (0, u.useState)(""),
          n = t[0],
          r = t[1],
          l = (0, u.useState)(""),
          c = l[0],
          f = l[1],
          d = (0, u.useState)(""),
          m = d[0],
          h = d[1],
          b = (0, u.useState)(""),
          v = b[0],
          p = b[1],
          y = (0, u.useState)(""),
          x = y[0],
          g = y[1],
          j = (0, u.useState)(""),
          w = j[0],
          O = j[1],
          S = (0, u.useState)(""),
          N = S[0],
          k = S[1],
          A = (0, u.useState)(""),
          C = A[0],
          P = A[1],
          U = (0, u.useState)(""),
          E = U[0],
          I = U[1],
          R = (0, u.useState)(!1),
          T = R[0],
          _ = R[1],
          F = (0, u.useState)([]),
          $ = F[0],
          L = F[1],
          D = (0, u.useState)([]),
          M = D[0],
          q = D[1],
          B = (0, u.useState)(""),
          Z = B[0],
          J = B[1],
          Q = (0, u.useState)(""),
          z = Q[0],
          V = Q[1],
          X = (0, u.useState)(""),
          Y = X[0],
          H = X[1],
          G = (0, u.useState)(""),
          K = G[0],
          W = G[1],
          ee = (0, u.useState)(void 0),
          te = ee[0],
          ne = ee[1],
          re = (0, u.useState)(!1),
          le = re[0],
          oe = re[1],
          ae = (0, u.useState)(void 0),
          ie = ae[0],
          ue = ae[1],
          ce = (0, u.useState)(!1),
          se = ce[0],
          de = ce[1],
          me = (0, i.useRouter)();
        (0, u.useEffect)(
          function () {
            Ye(
              o().mark(function t() {
                var n, r, l, a, i;
                return o().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (me.isReady) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          if (
                            ((n = me.query), (r = n.data), (l = n.id), r || l)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return le || e(et), t.abrupt("return");
                        case 6:
                          if (((t.prev = 6), !l)) {
                            t.next = 16;
                            break;
                          }
                          return (
                            (t.next = 11),
                            fetch("/api/load?id=".concat(l))
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                return e.embed;
                              })
                          );
                        case 11:
                          if ((a = t.sent)) {
                            t.next = 14;
                            break;
                          }
                          throw new Error("No embed found.");
                        case 14:
                          t.next = 17;
                          break;
                        case 16:
                          r &&
                            ((i = Array.isArray(r) ? r[0] : r),
                            (a = JSON.parse(atob(i))));
                        case 17:
                          e(a), (t.next = 24);
                          break;
                        case 20:
                          (t.prev = 20),
                            (t.t0 = t.catch(6)),
                            e(et),
                            ue("An error occurred while importing the embed!");
                        case 24:
                          return (
                            (t.prev = 24),
                            me.push("/", "/", { shallow: !0 }),
                            t.finish(24)
                          );
                        case 27:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 20, 24, 27]]
                );
              })
            )();
          },
          [me]
        ),
          (0, u.useEffect)(
            function () {
              w.length +
                C.length +
                $.reduce(function (e, t) {
                  return e + t.name.length + t.value.length;
                }, 0) +
                Y.length +
                c.length >
                6e3 &&
                ue(
                  "The total number of characters in the embed content must not exceed 6000!"
                );
            },
            [w, C, $, M, x, v, Y, c]
          );
        var he = {
          author: { name: c, iconUrl: n, url: m },
          title: w,
          url: N,
          description: C,
          fields: $.map(function (e) {
            return { name: e.name, value: e.value, inline: e.inline };
          }),
          image: Z,
          thumbnail: z,
          color: T ? E : void 0,
          footer: { text: Y, iconUrl: K },
          timestamp: te,
          content: v,
          autodelete: x,
          buttons: M.map(function (e) {
            return { button: e.button, label: e.label, url: e.url, emoji: e.emoji, style: e.style };
          }),
        };
        return (0, a.jsxs)("div", {
          className: "screen flex min-h-screen",
          children: [
            (0, a.jsxs)("div", {
              className: "flex-1 embed-inputs",
              children: [
                ie
                  ? (0, a.jsx)("div", {
                      className:
                        "px-4 py-2 rounded bg-[#d83c3e] font-semibold text-white",
                      children: ie,
                    })
                  : null,
                (0, a.jsxs)("details", {
                  open: !0,
                  children: [
                    (0, a.jsx)("summary", {
                      children: (0, a.jsxs)("h2", {
                        children: [
                          "Content",
                          v
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [" \u2013 ", Ge(v)],
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, a.jsx)(ze, {
                      label: "Content",
                      value: [v, p],
                      limit: 2e3,
                      textarea: !0,
                    }),
                  ],
                }),
                (0, a.jsxs)("details", {
                  open: !0,
                  children: [
                    (0, a.jsx)("summary", {
                      children: (0, a.jsxs)("h2", {
                        children: [
                          "Author",
                          c
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [" \u2013 ", Ge(c)],
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, a.jsx)(ze, {
                      label: "Author Name",
                      value: [c, f],
                      limit: 256,
                    }),
                    (0, a.jsx)(ze, { label: "Author URL", value: [m, h] }),
                    (0, a.jsx)(ze, { label: "Author Icon URL", value: [n, r] }),
                  ],
                }),
                (0, a.jsxs)("details", {
                  open: !0,
                  children: [
                    (0, a.jsx)("summary", {
                      children: (0, a.jsxs)("h2", {
                        children: [
                          "Body",
                          w
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [" \u2013 ", Ge(w)],
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, a.jsx)(ze, {
                      label: "Title",
                      value: [w, O],
                      limit: 256,
                    }),
                    (0, a.jsx)(ze, { label: "Title URL", value: [N, k] }),
                    (0, a.jsx)(ze, {
                      label: "Description",
                      value: [C, P],
                      limit: 4096,
                      textarea: !0,
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)("label", {
                          htmlFor: "color",
                          children: "Color",
                        }),
                        (0, a.jsx)("input", {
                          type: "color",
                          id: "color",
                          value: E,
                          onChange: function (e) {
                            return I(e.target.value);
                          },
                          disabled: !T,
                          className: "mt-2",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("details", {
                  open: !0,
                  className: "fields",
                  children: [
                    (0, a.jsx)("summary", {
                      children: (0, a.jsxs)("h2", {
                        children: ["Fields \u2013 ", $.length],
                      }),
                    }),
                    $.map(function (e, t) {
                      return (0, a.jsxs)(
                        "details",
                        {
                          children: [
                            (0, a.jsxs)("summary", {
                              children: [
                                (0, a.jsxs)("h3", {
                                  className: "text-white font-semibold mr-auto",
                                  children: [
                                    "Field ",
                                    t + 1,
                                    " \u2013",
                                    " ",
                                    Ge(e.name),
                                  ],
                                }),
                                (0, a.jsx)("button", {
                                  onClick: function () {
                                    if (0 !== t) {
                                      var e,
                                        n = He($);
                                      (e = [n[t], n[t - 1]]),
                                        (n[t - 1] = e[0]),
                                        (n[t] = e[1]),
                                        L(n);
                                    }
                                  },
                                  className: Ke(0 === t ? "disabled" : "blue"),
                                  children: "Move Up",
                                }),
                                (0, a.jsx)("button", {
                                  onClick: function () {
                                    if (t !== $.length - 1) {
                                      var e,
                                        n = He($);
                                      (e = [n[t], n[t + 1]]),
                                        (n[t + 1] = e[0]),
                                        (n[t] = e[1]),
                                        L(n);
                                    }
                                  },
                                  className: Ke(
                                    t === $.length - 1 ? "disabled" : "blue"
                                  ),
                                  children: "Move Down",
                                }),
                                (0, a.jsx)("button", {
                                  onClick: function () {
                                    L(
                                      $.filter(function (e, n) {
                                        return n !== t;
                                      })
                                    );
                                  },
                                  className: Ke("red"),
                                  children: "Delete",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "field-name-".concat(t),
                                  children: "Name",
                                }),
                                (0, a.jsx)(be, {
                                  limit: 256,
                                  required: !0,
                                  type: "text",
                                  id: "field-name-".concat(t),
                                  value: e.name,
                                  onChange: function (e) {
                                    var n = He($);
                                    (n[t].name = e.target.value), L(n);
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "field-value-".concat(t),
                                  children: "Value",
                                }),
                                (0, a.jsx)(be, {
                                  limit: 1024,
                                  required: !0,
                                  textarea: !0,
                                  id: "field-value-".concat(t),
                                  value: e.value,
                                  onChange: function (e) {
                                    var n = He($);
                                    (n[t].value = e.target.value), L(n);
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center justify-start gap-2",
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "field-inline-".concat(t),
                                  children: "Inline",
                                }),
                                (0, a.jsx)("input", {
                                  type: "checkbox",
                                  id: "field-inline-".concat(t),
                                  checked: e.inline,
                                  onChange: function (e) {
                                    var n = He($);
                                    (n[t].inline = e.target.checked), L(n);
                                  },
                                  className: "mt-2",
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        $.length < 25 &&
                          L(
                            He($).concat([
                              { name: "A New Field", value: "", inline: !1 },
                            ])
                          );
                      },
                      className: "mt-4 ".concat(
                        Ke($.length < 25 ? "blue" : "disabled")
                      ),
                      children: "Add Field",
                    }),
                  ],
                }),
                (0, a.jsxs)("details", {
                  open: !0,
                  className: "buttons",
                  children: [
                    (0, a.jsx)("summary", {
                      children: (0, a.jsxs)("h2", {
                        children: ["Buttons \u2013 ", M.length],
                      }),
                    }),
                    M.map(function (e, t) {
                      return (0, a.jsxs)(
                        "details",
                        {
                          children: [
                            (0, a.jsxs)("summary", {
                              children: [
                                (0, a.jsxs)("h3", {
                                  className: "text-white font-semibold mr-auto",
                                  children: [
                                    "Button ",
                                    t + 1,
                                    " \u2013",
                                    " ",
                                    Ge(e.label),
                                  ],
                                }),
                                (0, a.jsx)("button", {
                                  onClick: function () {
                                    if (0 !== t) {
                                      var e,
                                        n = He(M);
                                      (e = [n[t], n[t - 1]]),
                                        (n[t - 1] = e[0]),
                                        (n[t] = e[1]),
                                        q(n);
                                    }
                                  },
                                  className: Ke(0 === t ? "disabled" : "blue"),
                                  children: "Move Up",
                                }),
                                (0, a.jsx)("button", {
                                  onClick: function () {
                                    if (t !== M.length - 1) {
                                      var e,
                                        n = He(M);
                                      (e = [n[t], n[t + 1]]),
                                        (n[t + 1] = e[0]),
                                        (n[t] = e[1]),
                                        q(n);
                                    }
                                  },
                                  className: Ke(
                                    t === M.length - 1 ? "disabled" : "blue"
                                  ),
                                  children: "Move Down",
                                }),
                                (0, a.jsx)("button", {
                                  onClick: function () {
                                    q(
                                      M.filter(function (e, n) {
                                        return n !== t;
                                      })
                                    );
                                  },
                                  className: Ke("red"),
                                  children: "Delete",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "button-label-".concat(t),
                                  children: "Button Name",
                                }),
                                (0, a.jsx)(be, {
                                  limit: 256,
                                  required: !0,
                                  type: "text",
                                  id: "button-label-".concat(t),
                                  value: e.button,
                                  onChange: function (e) {
                                    var n = He(M);
                                    (n[t].button = e.target.value), q(n);
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "button-label-".concat(t),
                                  children: "Button Label",
                                }),
                                (0, a.jsx)(be, {
                                  limit: 1024,
                                  required: !0,
                                  textarea: !0,
                                  id: "button-label-".concat(t),
                                  value: e.label,
                                  onChange: function (e) {
                                    var n = He(M);
                                    (n[t].label = e.target.value), q(n);
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "button-label-".concat(t),
                                  children: "Button Emoji",
                                }),
                                (0, a.jsx)(be, {
                                  limit: 256,
                                  required: !0,
                                  type: "text",
                                  id: "button-label-".concat(t),
                                  value: e.emoji,
                                  onChange: function (e) {
                                    var n = He(M);
                                    (n[t].emoji = e.target.value), q(n);
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "button-label-".concat(t),
                                  children: "Button Style",
                                }),
                                (0, a.jsx)(be, {
                                  limit: 256,
                                  required: !0,
                                  type: "text",
                                  id: "button-label-".concat(t),
                                  value: e.style,
                                  onChange: function (e) {
                                    var n = He(M);
                                    (n[t].style = e.target.value), q(n);
                                  },
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        M.length < 25 &&
                          q(He(M).concat([{ button: "new button", label: "", emoji: "", style: "red/green/gray/blue" }]));
                      },
                      className: "mt-4 ".concat(
                        Ke(M.length < 25 ? "blue" : "disabled")
                      ),
                      children: "Add Button",
                    }),
                  ],
                }),
                (0, a.jsxs)("details", {
                  open: !0,
                  children: [
                    (0, a.jsx)("summary", {
                      children: (0, a.jsx)("h2", { children: "Images" }),
                    }),
                    (0, a.jsx)(ze, { label: "Image URL", value: [Z, J] }),
                    (0, a.jsx)(ze, { label: "Thumbnail URL", value: [z, V] }),
                  ],
                }),
                (0, a.jsxs)("details", {
                  open: !0,
                  children: [
                    (0, a.jsx)("summary", {
                      children: (0, a.jsxs)("h2", {
                        children: [
                          "Footer",
                          Y
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [" \u2013 ", Ge(Y)],
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, a.jsx)(ze, {
                      label: "Footer Text",
                      value: [Y, H],
                      limit: 2048,
                    }),
                    (0, a.jsx)(ze, { label: "Footer Icon URL", value: [K, W] }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex-1 bg-[#36393f] p-8",
              children: [
                (0, a.jsx)(fe, { embed: he }),
                (0, a.jsx)(qe, { embed: he }),
              ],
            }),
            se
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50",
                      onClick: function () {
                        return de(!1);
                      },
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#292b2f] p-4 rounded",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-white text-xl font-semibold",
                          children: "Share Your Embed",
                        }),
                        (0, a.jsx)("p", {
                          className: "mb-2",
                          children:
                            "Click the button below to copy a link to share your embed.",
                        }),
                        (0, a.jsx)("p", {
                          className: "mb-1",
                          children:
                            "The short link will be valid for one week.",
                        }),
                        (0, a.jsx)(s, {
                          getContent: Ye(
                            o().mark(function e() {
                              var t;
                              return o().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        fetch("/api/save", {
                                          body: JSON.stringify({
                                            embed: ye(he),
                                          }),
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                        }).then(function (e) {
                                          return e.json();
                                        })
                                      );
                                    case 2:
                                      return (
                                        (t = e.sent.id),
                                        e.abrupt(
                                          "return",
                                          ""
                                            .concat(location.origin, "/?id=")
                                            .concat(t)
                                        )
                                      );
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          ),
                          idleClassName: Ke(),
                          loadingClassName: "".concat(
                            Ke("disabled"),
                            " animate-pulse"
                          ),
                          copiedClassName: Ke("disabled"),
                          errorClassName: Ke("disabled"),
                          timeout: 3e4,
                          children: "Copy Short Link",
                        }),
                        (0, a.jsx)("p", {
                          className: "mt-2 mb-1",
                          children:
                            "The permanent link contains all of your embed data.",
                        }),
                        (0, a.jsx)(s, {
                          getContent: function () {
                            return ""
                              .concat(location.origin, "/?data=")
                              .concat(
                                encodeURIComponent(btoa(JSON.stringify(ye(he))))
                              );
                          },
                          idleClassName: Ke(),
                          copiedClassName: Ke("disabled"),
                          children: "Copy Permanent Link",
                        }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [918, 774, 888, 179], function () {
      return (t = 8312), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
