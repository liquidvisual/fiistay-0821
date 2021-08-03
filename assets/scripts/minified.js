var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      i = e.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      a = n.concat,
      s = n.push,
      l = n.indexOf,
      u = {},
      c = u.toString,
      f = u.hasOwnProperty,
      d = f.toString,
      h = d.call(Object),
      p = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      g = function g(e) {
    return null != e && e === e.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function y(e, t, n) {
    var o,
        r = (t = t || i).createElement("script");if (r.text = e, n) for (o in v) {
      n[o] && (r[o] = n[o]);
    }t.head.appendChild(r).parentNode.removeChild(r);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? u[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var _ = function _(e, t) {
    return new _.fn.init(e, t);
  },
      w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function x(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }_.fn = _.prototype = { jquery: "3.3.1", constructor: _, length: 0, toArray: function toArray() {
      return r.call(this);
    }, get: function get(e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = _.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return _.each(this, e);
    }, map: function map(e) {
      return this.pushStack(_.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, _.extend = _.fn.extend = function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || m(a) || (a = {}), s === l && (a = this, s--); s < l; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (i = e[t]) && (u && i && (_.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && _.isPlainObject(n) ? n : {}, a[t] = _.extend(u, r, i)) : void 0 !== i && (a[t] = i));
      }
    }return a;
  }, _.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = o(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && d.call(n) === h);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var n,
          i = 0;if (x(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(w, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (x(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : l.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
        e[o++] = t[i];
      }return e.length = o, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) {
        !t(e[o], o) !== a && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var i,
          o,
          r = 0,
          s = [];if (x(e)) for (i = e.length; r < i; r++) {
        null != (o = t(e[r], r, n)) && s.push(o);
      } else for (r in e) {
        null != (o = t(e[r], r, n)) && s.push(o);
      }return a.apply([], s);
    }, guid: 1, support: p }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    u["[object " + t + "]"] = t.toLowerCase();
  });var E = function (e) {
    var t,
        n,
        i,
        o,
        r,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        m,
        g,
        v,
        y,
        b,
        _ = "sizzle" + 1 * new Date(),
        w = e.document,
        x = 0,
        E = 0,
        T = ae(),
        C = ae(),
        S = ae(),
        k = function k(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        D = [],
        A = D.pop,
        j = D.push,
        O = D.push,
        L = D.slice,
        I = function I(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        H = "[\\x20\\t\\r\\n\\f]",
        P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F = "\\[" + H + "*(" + P + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + H + "*\\]",
        R = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        M = new RegExp(H + "+", "g"),
        B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        W = new RegExp("^" + H + "*," + H + "*"),
        $ = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
        U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
        Q = new RegExp(R),
        V = new RegExp("^" + P + "$"),
        z = { ID: new RegExp("^#(" + P + ")"), CLASS: new RegExp("^\\.(" + P + ")"), TAG: new RegExp("^(" + P + "|[*])"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), bool: new RegExp("^(?:" + q + ")$", "i"), needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var i = "0x" + t - 65536;return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ie = function ie() {
      d();
    },
        oe = ye(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      O.apply(D = L.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType;
    } catch (e) {
      O = { apply: D.length ? function (e, t) {
          j.apply(e, L.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }function re(e, t, i, o) {
      var r,
          s,
          u,
          c,
          f,
          p,
          v,
          y = t && t.ownerDocument,
          x = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;if (!o && ((t ? t.ownerDocument || t : w) !== h && d(t), t = t || h, m)) {
        if (11 !== x && (f = G.exec(e))) if (r = f[1]) {
          if (9 === x) {
            if (!(u = t.getElementById(r))) return i;if (u.id === r) return i.push(u), i;
          } else if (y && (u = y.getElementById(r)) && b(t, u) && u.id === r) return i.push(u), i;
        } else {
          if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;if ((r = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(r)), i;
        }if (n.qsa && !S[e + " "] && (!g || !g.test(e))) {
          if (1 !== x) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = _), s = (p = a(e)).length; s--;) {
              p[s] = "#" + c + " " + ve(p[s]);
            }v = p.join(","), y = J.test(e) && me(t.parentNode) || t;
          }if (v) try {
            return O.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            c === _ && t.removeAttribute("id");
          }
        }
      }return l(e.replace(B, "$1"), t, i, o);
    }function ae() {
      var e = [];return function t(n, o) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o;
      };
    }function se(e) {
      return e[_] = !0, e;
    }function le(e) {
      var t = h.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ue(e, t) {
      for (var n = e.split("|"), o = n.length; o--;) {
        i.attrHandle[n[o]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function de(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function he(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return se(function (t) {
        return t = +t, se(function (n, i) {
          for (var o, r = e([], n.length, t), a = r.length; a--;) {
            n[o = r[a]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in n = re.support = {}, r = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, d = re.setDocument = function (e) {
      var t,
          o,
          a = e ? e.ownerDocument || e : w;return a !== h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, m = !r(h), w !== h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = le(function (e) {
        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = le(function (e) {
        return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length;
      }), n.getById ? (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n,
              i,
              o,
              r = t.getElementById(e);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            o = 0,
            r = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return r;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
      }, v = [], g = [], (n.qsa = K.test(h.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = h.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), b = t || K.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, k = t ? function (e, t) {
        if (e === t) return f = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            i = 0,
            o = e.parentNode,
            r = t.parentNode,
            a = [e],
            s = [t];if (!o || !r) return e === h ? -1 : t === h ? 1 : o ? -1 : r ? 1 : c ? I(c, e) - I(c, t) : 0;if (o === r) return ce(e, t);for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (n = t; n = n.parentNode;) {
          s.unshift(n);
        }for (; a[i] === s[i];) {
          i++;
        }return i ? ce(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0;
      }, h) : h;
    }, re.matches = function (e, t) {
      return re(e, null, null, t);
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== h && d(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return re(t, h, null, [e]).length > 0;
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== h && d(e), b(e, t);
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== h && d(e);var o = i.attrHandle[t.toLowerCase()],
          r = o && N.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, re.escape = function (e) {
      return (e + "").replace(te, ne);
    }, re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, re.uniqueSort = function (e) {
      var t,
          i = [],
          o = 0,
          r = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(k), f) {
        for (; t = e[r++];) {
          t === e[r] && (o = i.push(r));
        }for (; o--;) {
          e.splice(i[o], 1);
        }
      }return c = null, e;
    }, o = re.getText = function (e) {
      var t,
          n = "",
          i = 0,
          r = e.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += o(t);
      }return n;
    }, (i = re.selectors = { cacheLength: 50, createPseudo: se, match: z, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = T[e + " "];return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && T(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var o = re.attr(i, e);return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(M, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                f,
                d,
                h,
                p,
                m = r !== a ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                y = !l && !s,
                b = !1;if (g) {
              if (r) {
                for (; m;) {
                  for (d = t; d = d[m];) {
                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                  }p = m = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [a ? g.firstChild : g.lastChild], a && y) {
                for (b = (h = (u = (c = (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop();) {
                  if (1 === d.nodeType && ++b && d === t) {
                    c[e] = [x, h, b];break;
                  }
                }
              } else if (y && (b = h = (u = (c = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b) for (; (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t));) {}return (b -= o) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);return o[_] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            for (var i, r = o(e, t), a = r.length; a--;) {
              e[i = I(e, r[a])] = !(n[i] = r[a]);
            }
          }) : function (e) {
            return o(e, 0, n);
          }) : o;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              i = s(e.replace(B, "$1"));return i[_] ? se(function (e, t, n, o) {
            for (var r, a = i(e, null, o, []), s = e.length; s--;) {
              (r = a[s]) && (e[s] = !(t[s] = r));
            }
          }) : function (e, o, r) {
            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return re(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return V.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === p;
        }, focus: function focus(e) {
          return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: he(!1), disabled: he(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !i.pseudos.empty(e);
        }, header: function header(e) {
          return X.test(e.nodeName);
        }, input: function input(e) {
          return Y.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: pe(function () {
          return [0];
        }), last: pe(function (e, t) {
          return [t - 1];
        }), eq: pe(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: pe(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: pe(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      i.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      i.pseudos[t] = de(t);
    }function ge() {}function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function ye(e, t, n) {
      var i = t.dir,
          o = t.next,
          r = o || i,
          a = n && "parentNode" === r,
          s = E++;return t.first ? function (t, n, o) {
        for (; t = t[i];) {
          if (1 === t.nodeType || a) return e(t, n, o);
        }return !1;
      } : function (t, n, l) {
        var u,
            c,
            f,
            d = [x, s];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || a) if (c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((u = c[r]) && u[0] === x && u[1] === s) return d[2] = u[2];if (c[r] = d, d[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function _e(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++) {
        (r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
      }return a;
    }function we(e, t, n, i, o, r) {
      return i && !i[_] && (i = we(i)), o && !o[_] && (o = we(o, r)), se(function (r, a, s, l) {
        var u,
            c,
            f,
            d = [],
            h = [],
            p = a.length,
            m = r || function (e, t, n) {
          for (var i = 0, o = t.length; i < o; i++) {
            re(e, t[i], n);
          }return n;
        }(t || "*", s.nodeType ? [s] : s, []),
            g = !e || !r && t ? m : _e(m, d, e, s, l),
            v = n ? o || (r ? e : p || i) ? [] : a : g;if (n && n(g, v, s, l), i) for (u = _e(v, h), i(u, [], s, l), c = u.length; c--;) {
          (f = u[c]) && (v[h[c]] = !(g[h[c]] = f));
        }if (r) {
          if (o || e) {
            if (o) {
              for (u = [], c = v.length; c--;) {
                (f = v[c]) && u.push(g[c] = f);
              }o(null, v = [], u, l);
            }for (c = v.length; c--;) {
              (f = v[c]) && (u = o ? I(r, f) : d[c]) > -1 && (r[u] = !(a[u] = f));
            }
          }
        } else v = _e(v === a ? v.splice(p, v.length) : v), o ? o(null, a, v, l) : O.apply(a, v);
      });
    }function xe(e) {
      for (var t, n, o, r = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = ye(function (e) {
        return e === t;
      }, s, !0), f = ye(function (e) {
        return I(t, e) > -1;
      }, s, !0), d = [function (e, n, i) {
        var o = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));return t = null, o;
      }]; l < r; l++) {
        if (n = i.relative[e[l].type]) d = [ye(be(d), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++) {}return we(l > 1 && be(d), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"), n, l < o && xe(e.slice(l, o)), o < r && xe(e = e.slice(o)), o < r && ve(e));
          }d.push(n);
        }
      }return be(d);
    }return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge(), a = re.tokenize = function (e, t) {
      var n,
          o,
          r,
          a,
          s,
          l,
          u,
          c = C[e + " "];if (c) return t ? 0 : c.slice(0);for (s = e, l = [], u = i.preFilter; s;) {
        for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = $.exec(s)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(B, " ") }), s = s.slice(n.length)), i.filter) {
          !(o = z[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(), r.push({ value: n, type: a, matches: o }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? re.error(e) : C(e, l).slice(0);
    }, s = re.compile = function (e, t) {
      var n,
          o = [],
          r = [],
          s = S[e + " "];if (!s) {
        for (t || (t = a(e)), n = t.length; n--;) {
          (s = xe(t[n]))[_] ? o.push(s) : r.push(s);
        }(s = S(e, function (e, t) {
          var n = t.length > 0,
              o = e.length > 0,
              r = function r(_r, a, s, l, c) {
            var f,
                p,
                g,
                v = 0,
                y = "0",
                b = _r && [],
                _ = [],
                w = u,
                E = _r || o && i.find.TAG("*", c),
                T = x += null == w ? 1 : Math.random() || .1,
                C = E.length;for (c && (u = a === h || a || c); y !== C && null != (f = E[y]); y++) {
              if (o && f) {
                for (p = 0, a || f.ownerDocument === h || (d(f), s = !m); g = e[p++];) {
                  if (g(f, a || h, s)) {
                    l.push(f);break;
                  }
                }c && (x = T);
              }n && ((f = !g && f) && v--, _r && b.push(f));
            }if (v += y, n && y !== v) {
              for (p = 0; g = t[p++];) {
                g(b, _, a, s);
              }if (_r) {
                if (v > 0) for (; y--;) {
                  b[y] || _[y] || (_[y] = A.call(l));
                }_ = _e(_);
              }O.apply(l, _), c && !_r && _.length > 0 && v + t.length > 1 && re.uniqueSort(l);
            }return c && (x = T, u = w), b;
          };return n ? se(r) : r;
        }(r, o))).selector = e;
      }return s;
    }, l = re.select = function (e, t, n, o) {
      var r,
          l,
          u,
          c,
          f,
          d = "function" == typeof e && e,
          h = !o && a(e = d.selector || e);if (n = n || [], 1 === h.length) {
        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;d && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (r = z.needsContext.test(e) ? 0 : l.length; r-- && (u = l[r], !i.relative[c = u.type]);) {
          if ((f = i.find[c]) && (o = f(u.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
            if (l.splice(r, 1), !(e = o.length && ve(l))) return O.apply(n, o), n;break;
          }
        }
      }return (d || s(e, h))(o, t, !m, n, !t || J.test(e) && me(t.parentNode) || t), n;
    }, n.sortStable = _.split("").sort(k).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ue("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ue("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || ue(q, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), re;
  }(e);_.find = E, _.expr = E.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = E.uniqueSort, _.text = E.getText, _.isXMLDoc = E.isXML, _.contains = E.contains, _.escapeSelector = E.escape;var T = function T(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (o && _(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      C = function C(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      S = _.expr.match.needsContext;function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e, t, n) {
    return m(t) ? _.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? _.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? _.grep(e, function (e) {
      return l.call(t, e) > -1 !== n;
    }) : _.filter(t, e, n);
  }_.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, _.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          o = this;if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (_.contains(o[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        _.find(e, o[t], n);
      }return i > 1 ? _.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    }, is: function is(e) {
      return !!D(this, "string" == typeof e && S.test(e) ? _(e) : e || [], !1).length;
    } });var A,
      j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init = function (e, t, n) {
    var o, r;if (!e) return this;if (n = n || A, "string" == typeof e) {
      if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (o[1]) {
        if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), N.test(o[1]) && _.isPlainObject(t)) for (o in t) {
          m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        }return this;
      }return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
  }).prototype = _.fn, A = _(i);var O = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };function I(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }_.fn.extend({ has: function has(e) {
      var t = _(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (_.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          a = "string" != typeof e && _(e);if (!S.test(e)) for (; i < o; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
            r.push(n);break;
          }
        }
      }return this.pushStack(r.length > 1 ? _.uniqueSort(r) : r);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), _.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return T(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    }, next: function next(e) {
      return I(e, "nextSibling");
    }, prev: function prev(e) {
      return I(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return C((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return C(e.firstChild);
    }, contents: function contents(e) {
      return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
    } }, function (e, t) {
    _.fn[e] = function (n, i) {
      var o = _.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = _.filter(i, o)), this.length > 1 && (L[e] || _.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o);
    };
  });var q = /[^\x20\t\r\n\f]+/g;function H(e) {
    return e;
  }function P(e) {
    throw e;
  }function F(e, t, n, i) {
    var o;try {
      e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }_.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return _.each(e.match(q) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : _.extend({}, e);var t,
        n,
        i,
        o,
        r = [],
        a = [],
        s = -1,
        l = function l() {
      for (o = o || e.once, i = t = !0; a.length; s = -1) {
        for (n = a.shift(); ++s < r.length;) {
          !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
    },
        u = { add: function add() {
        return r && (n && !t && (s = r.length - 1, a.push(n)), function t(n) {
          _.each(n, function (n, i) {
            m(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return _.each(arguments, function (e, t) {
          for (var n; (n = _.inArray(t, r, n)) > -1;) {
            r.splice(n, 1), n <= s && s--;
          }
        }), this;
      }, has: function has(e) {
        return e ? _.inArray(e, r) > -1 : r.length > 0;
      }, empty: function empty() {
        return r && (r = []), this;
      }, disable: function disable() {
        return o = a = [], r = n = "", this;
      }, disabled: function disabled() {
        return !r;
      }, lock: function lock() {
        return o = a = [], n || t || (r = n = ""), this;
      }, locked: function locked() {
        return !!o;
      }, fireWith: function fireWith(e, n) {
        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this;
      }, fire: function fire() {
        return u.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return u;
  }, _.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = { state: function state() {
          return i;
        }, always: function always() {
          return r.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return o.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return _.Deferred(function (t) {
            _.each(n, function (n, i) {
              var o = m(e[i[4]]) && e[i[4]];r[i[1]](function () {
                var e = o && o.apply(this, arguments);e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, o) {
          var r = 0;function a(t, n, i, o) {
            return function () {
              var s = this,
                  l = arguments,
                  u = function u() {
                var e, u;if (!(t < r)) {
                  if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");u = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(u) ? o ? u.call(e, a(r, n, H, o), a(r, n, P, o)) : (r++, u.call(e, a(r, n, H, o), a(r, n, P, o), a(r, n, H, n.notifyWith))) : (i !== H && (s = void 0, l = [e]), (o || n.resolveWith)(s, l));
                }
              },
                  c = o ? u : function () {
                try {
                  u();
                } catch (e) {
                  _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= r && (i !== P && (s = void 0, l = [e]), n.rejectWith(s, l));
                }
              };t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return _.Deferred(function (e) {
            n[0][3].add(a(0, e, m(o) ? o : H, e.notifyWith)), n[1][3].add(a(0, e, m(t) ? t : H)), n[2][3].add(a(0, e, m(i) ? i : P));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? _.extend(e, o) : o;
        } },
          r = {};return _.each(n, function (e, t) {
        var a = t[2],
            s = t[5];o[t[1]] = a.add, s && a.add(function () {
          i = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[t[0] + "With"] = a.fireWith;
      }), o.promise(r), t && t.call(r, r), r;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          a = _.Deferred(),
          s = function s(e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || a.resolveWith(i, o);
        };
      };if (t <= 1 && (F(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || m(o[n] && o[n].then))) return a.then();for (; n--;) {
        F(o[n], s(n), a.reject);
      }return a.promise();
    } });var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, _.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var M = _.Deferred();function B() {
    i.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), _.ready();
  }_.fn.ready = function (e) {
    return M.then(e).catch(function (e) {
      _.readyException(e);
    }), this;
  }, _.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || M.resolveWith(i, [_]));
    } }), _.ready.then = M.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));var W = function W(e, t, n, i, o, r, a) {
    var s = 0,
        l = e.length,
        u = null == n;if ("object" === b(n)) for (s in o = !0, n) {
      W(e, t, s, n[s], !0, r, a);
    } else if (void 0 !== i && (o = !0, m(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function t(e, _t2, n) {
      return u.call(_(e), n);
    })), t)) for (; s < l; s++) {
      t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
    }return o ? e : u ? t.call(e) : l ? t(e[0], n) : r;
  },
      $ = /^-ms-/,
      U = /-([a-z])/g;function Q(e, t) {
    return t.toUpperCase();
  }function V(e) {
    return e.replace($, "ms-").replace(U, Q);
  }var z = function z(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Y() {
    this.expando = _.expando + Y.uid++;
  }Y.uid = 1, Y.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          o = this.cache(e);if ("string" == typeof t) o[V(t)] = n;else for (i in t) {
        o[V(i)] = t[i];
      }return o;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(q) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !_.isEmptyObject(t);
    } };var X = new Y(),
      K = new Y(),
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;function Z(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }_.extend({ hasData: function hasData(e) {
      return K.hasData(e) || X.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return X.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      X.remove(e, t);
    } }), _.fn.extend({ data: function data(e, t) {
      var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes;if (void 0 === e) {
        if (this.length && (o = K.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
          for (n = a.length; n--;) {
            a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = V(i.slice(5)), Z(r, i, o[i]));
          }X.set(r, "hasDataAttrs", !0);
        }return o;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        K.set(this, e);
      }) : W(this, function (t) {
        var n;if (r && void 0 === t) return void 0 !== (n = K.get(r, e)) ? n : void 0 !== (n = Z(r, e)) ? n : void 0;this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), _.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, _.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = _.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = _._queueHooks(e, t);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        _.dequeue(e, t);
      }, r)), !i && r && r.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return X.get(e, n) || X.access(e, n, { empty: _.Callbacks("once memory").add(function () {
          X.remove(e, [t + "queue", n]);
        }) });
    } }), _.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = _.queue(this, e, t);_._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        _.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          o = _.Deferred(),
          r = this,
          a = this.length,
          s = function s() {
        --i || o.resolveWith(r, [r]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
        (n = X.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      }return s(), o.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display");
  },
      oe = function oe(e, t, n, i) {
    var o,
        r,
        a = {};for (r in t) {
      a[r] = e.style[r], e.style[r] = t[r];
    }for (r in o = n.apply(e, i || []), t) {
      e.style[r] = a[r];
    }return o;
  };function re(e, t, n, i) {
    var o,
        r,
        a = 20,
        s = i ? function () {
      return i.cur();
    } : function () {
      return _.css(e, t, "");
    },
        l = s(),
        u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
        c = (_.cssNumber[t] || "px" !== u && +l) && te.exec(_.css(e, t));if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; a--;) {
        _.style(e, t, c + u), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), c /= r;
      }c *= 2, _.style(e, t, c + u), n = n || [];
    }return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o;
  }var ae = {};function se(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        o = ae[i];return o || (t = n.body.appendChild(n.createElement(i)), o = _.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ae[i] = o, o);
  }function le(e, t) {
    for (var n, i, o = [], r = 0, a = e.length; r < a; r++) {
      (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = X.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ie(i) && (o[r] = se(i))) : "none" !== n && (o[r] = "none", X.set(i, "display", n)));
    }for (r = 0; r < a; r++) {
      null != o[r] && (e[r].style.display = o[r]);
    }return e;
  }_.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? _(this).show() : _(this).hide();
      });
    } });var ue = /^(?:checkbox|radio)$/i,
      ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      fe = /^$|^module$|\/(?:java|ecma)script/i,
      de = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function he(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? _.merge([e], n) : n;
  }function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
    }
  }de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;var me,
      ge,
      ve = /<|&#?\w+;/;function ye(e, t, n, i, o) {
    for (var r, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) {
      if ((r = e[h]) || 0 === r) if ("object" === b(r)) _.merge(d, r.nodeType ? [r] : r);else if (ve.test(r)) {
        for (a = a || f.appendChild(t.createElement("div")), s = (ce.exec(r) || ["", ""])[1].toLowerCase(), l = de[s] || de._default, a.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], c = l[0]; c--;) {
          a = a.lastChild;
        }_.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
      } else d.push(t.createTextNode(r));
    }for (f.textContent = "", h = 0; r = d[h++];) {
      if (i && _.inArray(r, i) > -1) o && o.push(r);else if (u = _.contains(r.ownerDocument, r), a = he(f.appendChild(r), "script"), u && pe(a), n) for (c = 0; r = a[c++];) {
        fe.test(r.type || "") && n.push(r);
      }
    }return f;
  }me = i.createDocumentFragment().appendChild(i.createElement("div")), (ge = i.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var be = i.documentElement,
      _e = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      xe = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function Te() {
    return !1;
  }function Ce() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function Se(e, t, n, i, o, r) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (s in "string" != typeof n && (i = i || n, n = void 0), t) {
        Se(e, s, n, i, t[s], r);
      }return e;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Te;else if (!o) return e;return 1 === r && (a = o, (o = function o(e) {
      return _().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = _.guid++)), e.each(function () {
      _.event.add(this, t, o, i, n);
    });
  }_.event = { global: {}, add: function add(e, t, n, i, o) {
      var r,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          m,
          g = X.get(e);if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && _.find.matchesSelector(be, o), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0;
      }), u = (t = (t || "").match(q) || [""]).length; u--;) {
        h = m = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = _.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = _.event.special[h] || {}, c = _.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && _.expr.match.needsContext.test(o), namespace: p.join(".") }, r), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), _.event.global[h] = !0);
      }
    }, remove: function remove(e, t, n, i, o) {
      var r,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          m,
          g = X.hasData(e) && X.get(e);if (g && (l = g.events)) {
        for (u = (t = (t || "").match(q) || [""]).length; u--;) {
          if (h = m = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
            for (f = _.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) {
              c = d[r], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || _.removeEvent(e, h, g.handle), delete l[h]);
          } else for (h in l) {
            _.event.remove(e, h + t[u], n, i, !0);
          }
        }_.isEmptyObject(l) && X.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          o,
          r,
          a,
          s = _.event.fix(e),
          l = new Array(arguments.length),
          u = (X.get(this, "events") || {})[s.type] || [],
          c = _.event.special[s.type] || {};for (l[0] = s, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        for (a = _.event.handlers.call(this, s, u), t = 0; (o = a[t++]) && !s.isPropagationStopped();) {
          for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) {
            s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          o,
          r,
          a,
          s = [],
          l = t.delegateCount,
          u = e.target;if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) {
        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
          for (r = [], a = {}, n = 0; n < l; n++) {
            void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? _(o, this).index(u) > -1 : _.find(o, this, null, [u]).length), a[o] && r.push(i);
          }r.length && s.push({ elem: u, handlers: r });
        }
      }return u = this, l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(_.Event.prototype, e, { enumerable: !0, configurable: !0, get: m(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[_.expando] ? e : new _.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Ce() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Ce() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return k(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, _.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, _.Event = function (e, t) {
    if (!(this instanceof _.Event)) return new _.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0;
  }, _.Event.prototype = { constructor: _.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, _.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, _.event.addProp), _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    _.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === this || _.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), _.fn.extend({ on: function on(e, t, n, i) {
      return Se(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return Se(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (o in e) {
          this.off(o, t, e[o]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        _.event.remove(this, e, n, t);
      });
    } });var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e, t) {
    return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e;
  }function Oe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Ie(e, t) {
    var n, i, o, r, a, s, l, u;if (1 === t.nodeType) {
      if (X.hasData(e) && (r = X.access(e), a = X.set(t, r), u = r.events)) for (o in delete a.handle, a.events = {}, u) {
        for (n = 0, i = u[o].length; n < i; n++) {
          _.event.add(t, o, u[o][n]);
        }
      }K.hasData(e) && (s = K.access(e), l = _.extend({}, s), K.set(t, l));
    }
  }function qe(e, t, n, i) {
    t = a.apply([], t);var o,
        r,
        s,
        l,
        u,
        c,
        f = 0,
        d = e.length,
        h = d - 1,
        g = t[0],
        v = m(g);if (v || d > 1 && "string" == typeof g && !p.checkClone && De.test(g)) return e.each(function (o) {
      var r = e.eq(o);v && (t[0] = g.call(this, o, r.html())), qe(r, t, n, i);
    });if (d && (r = (o = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (l = (s = _.map(he(o, "script"), Oe)).length; f < d; f++) {
        u = o, f !== h && (u = _.clone(u, !0, !0), l && _.merge(s, he(u, "script"))), n.call(e[f], u, f);
      }if (l) for (c = s[s.length - 1].ownerDocument, _.map(s, Le), f = 0; f < l; f++) {
        u = s[f], fe.test(u.type || "") && !X.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(u.src) : y(u.textContent.replace(Ae, ""), c, u));
      }
    }return e;
  }function He(e, t, n) {
    for (var i, o = t ? _.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || _.cleanData(he(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }_.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(ke, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          u,
          c = e.cloneNode(!0),
          f = _.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (a = he(c), i = 0, o = (r = he(e)).length; i < o; i++) {
        s = r[i], l = a[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
      }if (t) if (n) for (r = r || he(e), a = a || he(c), i = 0, o = r.length; i < o; i++) {
        Ie(r[i], a[i]);
      } else Ie(e, c);return (a = he(c, "script")).length > 0 && pe(a, !f && he(e, "script")), c;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, o = _.event.special, r = 0; void 0 !== (n = e[r]); r++) {
        if (z(n)) {
          if (t = n[X.expando]) {
            if (t.events) for (i in t.events) {
              o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
            }n[X.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), _.fn.extend({ detach: function detach(e) {
      return He(this, e, !0);
    }, remove: function remove(e) {
      return He(this, e);
    }, text: function text(e) {
      return W(this, function (e) {
        return void 0 === e ? _.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return qe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return qe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return qe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return qe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (_.cleanData(he(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return _.clone(this, e, t);
      });
    }, html: function html(e) {
      return W(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ne.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = _.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (_.cleanData(he(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return qe(this, arguments, function (t) {
        var n = this.parentNode;_.inArray(this, e) < 0 && (_.cleanData(he(this)), n && n.replaceChild(t, this));
      }, e);
    } }), _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    _.fn[e] = function (e) {
      for (var n, i = [], o = _(e), r = o.length - 1, a = 0; a <= r; a++) {
        n = a === r ? this : this.clone(!0), _(o[a])[t](n), s.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Re = new RegExp(ne.join("|"), "i");function Me(e, t, n) {
    var i,
        o,
        r,
        a,
        s = e.style;return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (a = _.style(e, t)), !p.pixelBoxStyles() && Pe.test(a) && Re.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a;
  }function Be(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (c) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(u).appendChild(c);var t = e.getComputedStyle(c);o = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(u), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var o,
        r,
        a,
        s,
        l,
        u = i.createElement("div"),
        c = i.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return t(), r;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), o;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), l;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();var We = /^(none|table(?!-c[ea]).+)/,
      $e = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: "0", fontWeight: "400" },
      Ve = ["Webkit", "Moz", "ms"],
      ze = i.createElement("div").style;function Ye(e) {
    var t = _.cssProps[e];return t || (t = _.cssProps[e] = function (e) {
      if (e in ze) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;) {
        if ((e = Ve[n] + t) in ze) return e;
      }
    }(e) || e), t;
  }function Xe(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Ke(e, t, n, i, o, r) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (l += _.css(e, n + ne[a], !0, o)), i ? ("content" === n && (l -= _.css(e, "padding" + ne[a], !0, o)), "margin" !== n && (l -= _.css(e, "border" + ne[a] + "Width", !0, o))) : (l += _.css(e, "padding" + ne[a], !0, o), "padding" !== n ? l += _.css(e, "border" + ne[a] + "Width", !0, o) : s += _.css(e, "border" + ne[a] + "Width", !0, o));
    }return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5))), l;
  }function Ge(e, t, n) {
    var i = Fe(e),
        o = Me(e, t, i),
        r = "border-box" === _.css(e, "boxSizing", !1, i),
        a = r;if (Pe.test(o)) {
      if (!n) return o;o = "auto";
    }return a = a && (p.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === _.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + Ke(e, t, n || (r ? "border" : "content"), a, i, o) + "px";
  }function Je(e, t, n, i, o) {
    return new Je.prototype.init(e, t, n, i, o);
  }_.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Me(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            r,
            a,
            s = V(t),
            l = $e.test(t),
            u = e.style;if (l || (t = Ye(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];"string" === (r = typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = te.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (_.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var o,
          r,
          a,
          s = V(t);return $e.test(t) || (t = Ye(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Me(e, t, i)), "normal" === o && t in Qe && (o = Qe[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), _.each(["height", "width"], function (e, t) {
    _.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !We.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : oe(e, Ue, function () {
          return Ge(e, t, i);
        });
      }, set: function set(e, n, i) {
        var o,
            r = Fe(e),
            a = "border-box" === _.css(e, "boxSizing", !1, r),
            s = i && Ke(e, t, i, a, r);return a && p.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ke(e, t, "border", !1, r) - .5)), s && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Xe(0, n, s);
      } };
  }), _.cssHooks.marginLeft = Be(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Me(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    _.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
        }return o;
      } }, "margin" !== e && (_.cssHooks[e + t].set = Xe);
  }), _.fn.extend({ css: function css(e, t) {
      return W(this, function (e, t, n) {
        var i,
            o,
            r = {},
            a = 0;if (Array.isArray(t)) {
          for (i = Fe(e), o = t.length; a < o; a++) {
            r[t[a]] = _.css(e, t[a], !1, i);
          }return r;
        }return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
      }, e, t, arguments.length > 1);
    } }), _.Tween = Je, Je.prototype = { constructor: Je, init: function init(e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (_.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Je.propHooks[this.prop];return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Je.propHooks[this.prop];return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
    } }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit);
      } } }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, _.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, _.fx = Je.prototype.init, _.fx.step = {};var Ze,
      et,
      tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;function it() {
    et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, _.fx.interval), _.fx.tick());
  }function ot() {
    return e.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }function rt(e, t) {
    var n,
        i = 0,
        o = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    }return t && (o.opacity = o.width = e), o;
  }function at(e, t, n) {
    for (var i, o = (st.tweeners[t] || []).concat(st.tweeners["*"]), r = 0, a = o.length; r < a; r++) {
      if (i = o[r].call(n, t, e)) return i;
    }
  }function st(e, t, n) {
    var i,
        o,
        r = 0,
        a = st.prefilters.length,
        s = _.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;for (var t = Ze || ot(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++) {
        u.tweens[r].run(i);
      }return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
    },
        u = s.promise({ elem: e, props: _.extend({}, t), opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Ze || ot(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? u.tweens.length : 0;if (o) return this;for (o = !0; n < i; n++) {
          u.tweens[n].run(1);
        }return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
      } }),
        c = u.props;for (!function (e, t) {
      var n, i, o, r, a;for (n in e) {
        if (o = t[i = V(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = _.cssHooks[i]) && ("expand" in a)) for (n in r = a.expand(r), delete e[i], r) {
          (n in e) || (e[n] = r[n], t[n] = o);
        } else t[i] = o;
      }
    }(c, u.opts.specialEasing); r < a; r++) {
      if (i = st.prefilters[r].call(u, e, c, u.opts)) return m(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    }return _.map(c, at, u), m(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u;
  }_.Animation = _.extend(st, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return re(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(q);for (var n, i = 0, o = e.length; i < o; i++) {
        n = e[i], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          u,
          c,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          m = e.nodeType && ie(e),
          g = X.get(e, "fxshow");for (i in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, d.always(function () {
        d.always(function () {
          a.unqueued--, _.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (o = t[i], tt.test(o)) {
          if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[i]) continue;m = !0;
          }h[i] = g && g[i] || _.style(e, i);
        }
      }if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = X.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = _.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (d.done(function () {
        p.display = u;
      }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, h) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(e, "fxshow", { display: u }), r && (g.hidden = !m), m && le([e], !0), d.done(function () {
          for (i in m || le([e]), X.remove(e, "fxshow"), h) {
            _.style(e, i, h[i]);
          }
        })), l = at(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? st.prefilters.unshift(e) : st.prefilters.push(e);
    } }), _.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? _.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t };return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      m(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
    }, i;
  }, _.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var o = _.isEmptyObject(e),
          r = _.speed(t, n, i),
          a = function a() {
        var t = st(this, _.extend({}, e), r);(o || X.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            r = _.timers,
            a = X.get(this);if (o) a[o] && a[o].stop && i(a[o]);else for (o in a) {
          a[o] && a[o].stop && nt.test(o) && i(a[o]);
        }for (o = r.length; o--;) {
          r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        }!t && n || _.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = X.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = _.timers,
            a = i ? i.length : 0;for (n.finish = !0, _.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) {
          r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        }for (t = 0; t < a; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), _.each(["toggle", "show", "hide"], function (e, t) {
    var n = _.fn[t];_.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, o);
    };
  }), _.each({ slideDown: rt("show"), slideUp: rt("hide"), slideToggle: rt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    _.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), _.timers = [], _.fx.tick = function () {
    var e,
        t = 0,
        n = _.timers;for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || _.fx.stop(), Ze = void 0;
  }, _.fx.timer = function (e) {
    _.timers.push(e), _.fx.start();
  }, _.fx.interval = 13, _.fx.start = function () {
    et || (et = !0, it());
  }, _.fx.stop = function () {
    et = null;
  }, _.fx.speeds = { slow: 600, fast: 200, _default: 400 }, _.fn.delay = function (t, n) {
    return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var o = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(o);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ut = _.expr.attrHandle;_.fn.extend({ attr: function attr(e, t) {
      return W(this, _.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        _.removeAttr(this, e);
      });
    } }), _.extend({ attr: function attr(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === r && _.isXMLDoc(e) || (o = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && k(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          o = t && t.match(q);if (o && 1 === e.nodeType) for (; n = o[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ut[t] || _.find.attr;ut[t] = function (e, t, i) {
      var o,
          r,
          a = t.toLowerCase();return i || (r = ut[a], ut[a] = o, o = null != n(e, t, i) ? a : null, ut[a] = r), o;
    };
  });var ct = /^(?:input|select|textarea|button)$/i,
      ft = /^(?:a|area)$/i;function dt(e) {
    return (e.match(q) || []).join(" ");
  }function ht(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || [];
  }_.fn.extend({ prop: function prop(e, t) {
      return W(this, _.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[_.propFix[e] || e];
      });
    } }), _.extend({ prop: function prop(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(e) || (t = _.propFix[t] || t, o = _.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = _.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (_.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    _.propFix[this.toLowerCase()] = this;
  }), _.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;if (m(e)) return this.each(function (t) {
        _(this).addClass(e.call(this, t, ht(this)));
      });if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = ht(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
          for (a = 0; r = t[a++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }o !== (s = dt(i)) && n.setAttribute("class", s);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;if (m(e)) return this.each(function (t) {
        _(this).removeClass(e.call(this, t, ht(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = ht(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
          for (a = 0; r = t[a++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }o !== (s = dt(i)) && n.setAttribute("class", s);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          i = "string" === n || Array.isArray(e);return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
        _(this).toggleClass(e.call(this, n, ht(this), t), t);
      }) : this.each(function () {
        var t, o, r, a;if (i) for (o = 0, r = _(this), a = pt(e); t = a[o++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = ht(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + dt(ht(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var mt = /\r/g;_.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          o = this[0];return arguments.length ? (i = m(e), this.each(function (n) {
        var o;1 === this.nodeType && (null == (o = i ? e.call(this, n, _(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = _.map(o, function (e) {
          return null == e ? "" : e + "";
        })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
      })) : o ? (t = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
    } }), _.extend({ valHooks: { option: { get: function get(e) {
          var t = _.find.attr(e, "value");return null != t ? t : dt(_.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              l = a ? r + 1 : o.length;for (i = r < 0 ? l : a ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
              if (t = _(n).val(), a) return t;s.push(t);
            }
          }return s;
        }, set: function set(e, t) {
          for (var n, i, o = e.options, r = _.makeArray(t), a = o.length; a--;) {
            ((i = o[a]).selected = _.inArray(_.valHooks.option.get(i), r) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), r;
        } } } }), _.each(["radio", "checkbox"], function () {
    _.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1;
      } }, p.checkOn || (_.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var gt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };_.extend(_.event, { trigger: function trigger(t, n, o, r) {
      var a,
          s,
          l,
          u,
          c,
          d,
          h,
          p,
          v = [o || i],
          y = f.call(t, "type") ? t.type : t,
          b = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !gt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : _.makeArray(n, [t]), h = _.event.special[y] || {}, r || !h.trigger || !1 !== h.trigger.apply(o, n))) {
        if (!r && !h.noBubble && !g(o)) {
          for (u = h.delegateType || y, gt.test(u + y) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), l = s;
          }l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (a = 0; (s = v[a++]) && !t.isPropagationStopped();) {
          p = s, t.type = a > 1 ? u : h.bindType || y, (d = (X.get(s, "events") || {})[t.type] && X.get(s, "handle")) && d.apply(s, n), (d = c && s[c]) && d.apply && z(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = y, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !z(o) || c && m(o[y]) && !g(o) && ((l = o[c]) && (o[c] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), o[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), _.event.triggered = void 0, l && (o[c] = l)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });_.event.trigger(i, null, t);
    } }), _.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        _.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return _.event.trigger(e, t, n, !0);
    } }), p.focusin || _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      _.event.simulate(t, e.target, _.event.fix(e));
    };_.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            o = X.access(i, t);o || i.addEventListener(e, n, !0), X.access(i, t, (o || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = X.access(i, t) - 1;o ? X.access(i, t, o) : (i.removeEventListener(e, n, !0), X.remove(i, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      _t = /\?/;_.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n;
  };var wt = /\[\]$/,
      xt = /\r?\n/g,
      Et = /^(?:submit|button|image|reset|file)$/i,
      Tt = /^(?:input|select|textarea|keygen)/i;function Ct(e, t, n, i) {
    var o;if (Array.isArray(t)) _.each(t, function (t, o) {
      n || wt.test(e) ? i(e, o) : Ct(e + "[" + ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && null != o ? t : "") + "]", o, n, i);
    });else if (n || "object" !== b(t)) i(e, t);else for (o in t) {
      Ct(e + "[" + o + "]", t[o], n, i);
    }
  }_.param = function (e, t) {
    var n,
        i = [],
        o = function o(e, t) {
      var n = m(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      Ct(n, e[n], t, o);
    }return i.join("&");
  }, _.fn.extend({ serialize: function serialize() {
      return _.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = _.prop(this, "elements");return e ? _.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !_(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !ue.test(e));
      }).map(function (e, t) {
        var n = _(this).val();return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
          return { name: t.name, value: e.replace(xt, "\r\n") };
        }) : { name: t.name, value: n.replace(xt, "\r\n") };
      }).get();
    } });var St = /%20/g,
      kt = /#.*$/,
      Nt = /([?&])_=[^&]*/,
      Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      At = /^(?:GET|HEAD)$/,
      jt = /^\/\//,
      Ot = {},
      Lt = {},
      It = "*/".concat("*"),
      qt = i.createElement("a");function Ht(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          o = 0,
          r = t.toLowerCase().match(q) || [];if (m(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function Pt(e, t, n, i) {
    var o = {},
        r = e === Lt;function a(s) {
      var l;return o[s] = !0, _.each(e[s] || [], function (e, s) {
        var u = s(t, n, i);return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1);
      }), l;
    }return a(t.dataTypes[0]) || !o["*"] && a("*");
  }function Ft(e, t) {
    var n,
        i,
        o = _.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && _.extend(!0, e, i), e;
  }qt.href = yt.href, _.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, _.ajaxSettings), t) : Ft(_.ajaxSettings, e);
    }, ajaxPrefilter: Ht(Ot), ajaxTransport: Ht(Lt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var o,
          r,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h,
          p = _.ajaxSetup({}, n),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? _(m) : _.event,
          v = _.Deferred(),
          y = _.Callbacks("once memory"),
          b = p.statusCode || {},
          w = {},
          x = {},
          E = "canceled",
          T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) for (s = {}; t = Dt.exec(a);) {
              s[t[1].toLowerCase()] = t[2];
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) T.always(e[T.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || E;return o && o.abort(t), C(0, t), this;
        } };if (v.promise(T), p.url = ((t || p.url || yt.href) + "").replace(jt, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(q) || [""], null == p.crossDomain) {
        u = i.createElement("a");try {
          u.href = p.url, u.href = u.href, p.crossDomain = qt.protocol + "//" + qt.host != u.protocol + "//" + u.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Pt(Ot, p, n, T), c) return T;for (d in (f = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !At.test(p.type), r = p.url.replace(kt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(St, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (_t.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Nt, "$1"), h = (_t.test(r) ? "&" : "?") + "_=" + bt++ + h), p.url = r + h), p.ifModified && (_.lastModified[r] && T.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && T.setRequestHeader("If-None-Match", _.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        T.setRequestHeader(d, p.headers[d]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, T, p) || c)) return T.abort();if (E = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), o = Pt(Lt, p, n, T)) {
        if (T.readyState = 1, f && g.trigger("ajaxSend", [T, p]), c) return T;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          T.abort("timeout");
        }, p.timeout));try {
          c = !1, o.send(w, C);
        } catch (e) {
          if (c) throw e;C(-1, e);
        }
      } else C(-1, "No Transport");function C(t, n, i, s) {
        var u,
            d,
            h,
            w,
            x,
            E = n;c || (c = !0, l && e.clearTimeout(l), o = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = function (e, t, n) {
          for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (i) for (o in s) {
            if (s[o] && s[o].test(i)) {
              l.unshift(o);break;
            }
          }if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                r = o;break;
              }a || (a = o);
            }r = r || a;
          }if (r) return r !== l[0] && l.unshift(r), n[r];
        }(p, T, i)), w = function (e, t, n, i) {
          var o,
              r,
              a,
              s,
              l,
              u = {},
              c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
            u[a.toLowerCase()] = e.converters[a];
          }for (r = c.shift(); r;) {
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(a = u[l + " " + r] || u["* " + r])) for (o in u) {
                if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                  !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));break;
                }
              }if (!0 !== a) if (a && e.throws) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r };
              }
            }
          }return { state: "success", data: t };
        }(p, w, T, u), u ? (p.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (_.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (_.etag[r] = x)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state, d = w.data, u = !(h = w.error))) : (h = E, !t && E || (E = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || E) + "", u ? v.resolveWith(m, [d, E, T]) : v.rejectWith(m, [T, E, h]), T.statusCode(b), b = void 0, f && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, p, u ? d : h]), y.fireWith(m, [T, E]), f && (g.trigger("ajaxComplete", [T, p]), --_.active || _.event.trigger("ajaxStop")));
      }return T;
    }, getJSON: function getJSON(e, t, n) {
      return _.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return _.get(e, void 0, t, "script");
    } }), _.each(["get", "post"], function (e, t) {
    _[t] = function (e, n, i, o) {
      return m(n) && (o = o || i, i = n, n = void 0), _.ajax(_.extend({ url: e, type: t, dataType: o, data: n, success: i }, _.isPlainObject(e) && e));
    };
  }), _._evalUrl = function (e) {
    return _.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, _.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (m(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return m(e) ? this.each(function (t) {
        _(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = _(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = m(e);return this.each(function (n) {
        _(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        _(this).replaceWith(this.childNodes);
      }), this;
    } }), _.expr.pseudos.hidden = function (e) {
    return !_.expr.pseudos.visible(e);
  }, _.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, _.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Rt = { 0: 200, 1223: 204 },
      Mt = _.ajaxSettings.xhr();p.cors = !!Mt && "withCredentials" in Mt, p.ajax = Mt = !!Mt, _.ajaxTransport(function (t) {
    var _n, i;if (p.cors || Mt && !t.crossDomain) return { send: function send(o, r) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          s.setRequestHeader(a, o[a]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), i = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), _.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), _.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return _.globalEval(e), e;
      } } }), _.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), _.ajaxTransport("script", function (e) {
    var t, _n2;if (e.crossDomain) return { send: function send(o, r) {
        t = _("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && r("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var Bt,
      Wt = [],
      $t = /(=)\?(?=&|$)|\?\?/;_.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Wt.pop() || _.expando + "_" + bt++;return this[e] = !0, e;
    } }), _.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o,
        r,
        a,
        s = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace($t, "$1" + o) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return a || _.error(o + " was not called"), a[0];
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      a = arguments;
    }, i.always(function () {
      void 0 === r ? _(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Wt.push(o)), a && m(r) && r(a[0]), a = r = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Bt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), _.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), r = N.exec(e), a = !n && [], r ? [t.createElement(r[1])] : (r = ye([e], t, a), a && a.length && _(a).remove(), _.merge([], r.childNodes)));var o, r, a;
  }, _.fn.load = function (e, t, n) {
    var i,
        o,
        r,
        a = this,
        s = e.indexOf(" ");return s > -1 && (i = dt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (o = "POST"), a.length > 0 && _.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function (e) {
      r = arguments, a.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, r || [e.responseText, t, e]);
      });
    }), this;
  }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    _.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), _.expr.pseudos.animated = function (e) {
    return _.grep(_.timers, function (t) {
      return e === t.elem;
    }).length;
  }, _.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          u = _.css(e, "position"),
          c = _(e),
          f = {};"static" === u && (e.style.position = "relative"), s = c.offset(), r = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), m(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : c.css(f);
    } }, _.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        _.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((o = _(e).offset()).top += _.css(e, "borderTopWidth", !0), o.left += _.css(e, "borderLeftWidth", !0));
        }return { top: t.top - o.top - _.css(i, "marginTop", !0), left: t.left - o.left - _.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === _.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;_.fn[e] = function (i) {
      return W(this, function (e, i, o) {
        var r;if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
      }, e, i, arguments.length);
    };
  }), _.each(["top", "left"], function (e, t) {
    _.cssHooks[t] = Be(p.pixelPosition, function (e, n) {
      if (n) return n = Me(e, t), Pe.test(n) ? _(e).position()[t] + "px" : n;
    });
  }), _.each({ Height: "height", Width: "width" }, function (e, t) {
    _.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      _.fn[i] = function (o, r) {
        var a = arguments.length && (n || "boolean" != typeof o),
            s = n || (!0 === o || !0 === r ? "margin" : "border");return W(this, function (t, n, o) {
          var r;return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? _.css(t, n, s) : _.style(t, n, o, s);
        }, t, a ? o : void 0, a);
      };
    });
  }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    _.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), _.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), _.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), _.proxy = function (e, t) {
    var n, i, o;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = r.call(arguments, 2), (o = function o() {
      return e.apply(t || this, i.concat(r.call(arguments)));
    }).guid = e.guid = e.guid || _.guid++, o;
  }, _.holdReady = function (e) {
    e ? _.readyWait++ : _.ready(!0);
  }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = k, _.isFunction = m, _.isWindow = g, _.camelCase = V, _.type = b, _.now = Date.now, _.isNumeric = function (e) {
    var t = _.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return _;
  });var Ut = e.jQuery,
      Qt = e.$;return _.noConflict = function (t) {
    return e.$ === _ && (e.$ = Qt), t && e.jQuery === _ && (e.jQuery = Ut), _;
  }, t || (e.jQuery = e.$ = _), _;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
}(this, function () {
  "use strict";
  var e = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
      t = function () {
    for (var t = ["Edge", "Trident", "Firefox"], n = 0; n < t.length; n += 1) {
      if (e && navigator.userAgent.indexOf(t[n]) >= 0) return 1;
    }return 0;
  }();var n = e && window.Promise ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var n = !1;return function () {
      n || (n = !0, setTimeout(function () {
        n = !1, e();
      }, t));
    };
  };function i(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }function o(e, t) {
    if (1 !== e.nodeType) return [];var n = e.ownerDocument.defaultView.getComputedStyle(e, null);return t ? n[t] : n;
  }function r(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }function a(e) {
    if (!e) return document.body;switch (e.nodeName) {case "HTML":case "BODY":
        return e.ownerDocument.body;case "#document":
        return e.body;}var t = o(e),
        n = t.overflow,
        i = t.overflowX,
        s = t.overflowY;return (/(auto|scroll|overlay)/.test(n + s + i) ? e : a(r(e))
    );
  }function s(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }var l = e && !(!window.MSInputMethodContext || !document.documentMode),
      u = e && /MSIE 10/.test(navigator.userAgent);function c(e) {
    return 11 === e ? l : 10 === e ? u : l || u;
  }function f(e) {
    if (!e) return document.documentElement;for (var t = c(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === o(n, "position") ? f(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }function d(e) {
    return null !== e.parentNode ? d(e.parentNode) : e;
  }function h(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        o = n ? t : e,
        r = document.createRange();r.setStart(i, 0), r.setEnd(o, 0);var a,
        s,
        l = r.commonAncestorContainer;if (e !== l && t !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && f(a.firstElementChild) !== a ? f(l) : l;var u = d(e);return u.host ? h(u.host, t) : h(e, d(t).host);
  }function p(e) {
    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;return (e.ownerDocument.scrollingElement || i)[t];
    }return e[t];
  }function m(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"]);
  }function g(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], c(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
  }function v(e) {
    var t = e.body,
        n = e.documentElement,
        i = c(10) && getComputedStyle(n);return { height: g("Height", t, n, i), width: g("Width", t, n, i) };
  }var y = function y(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      b = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      _ = function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  },
      w = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }return e;
  };function x(e) {
    return w({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function E(e) {
    var t = {};try {
      if (c(10)) {
        t = e.getBoundingClientRect();var n = p(e, "top"),
            i = p(e, "left");t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        a = "HTML" === e.nodeName ? v(e.ownerDocument) : {},
        s = a.width || e.clientWidth || r.width,
        l = a.height || e.clientHeight || r.height,
        u = e.offsetWidth - s,
        f = e.offsetHeight - l;if (u || f) {
      var d = o(e);u -= m(d, "x"), f -= m(d, "y"), r.width -= u, r.height -= f;
    }return x(r);
  }function T(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = c(10),
        r = "HTML" === t.nodeName,
        s = E(e),
        l = E(t),
        u = a(e),
        f = o(t),
        d = parseFloat(f.borderTopWidth),
        h = parseFloat(f.borderLeftWidth);n && r && (l.top = Math.max(l.top, 0), l.left = Math.max(l.left, 0));var m = x({ top: s.top - l.top - d, left: s.left - l.left - h, width: s.width, height: s.height });if (m.marginTop = 0, m.marginLeft = 0, !i && r) {
      var g = parseFloat(f.marginTop),
          v = parseFloat(f.marginLeft);m.top -= d - g, m.bottom -= d - g, m.left -= h - v, m.right -= h - v, m.marginTop = g, m.marginLeft = v;
    }return (i && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) && (m = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = p(t, "top"),
          o = p(t, "left"),
          r = n ? -1 : 1;return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e;
    }(m, t)), m;
  }function C(e) {
    if (!e || !e.parentElement || c()) return document.documentElement;for (var t = e.parentElement; t && "none" === o(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function S(e, t, n, i) {
    var l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        u = { top: 0, left: 0 },
        c = l ? C(e) : h(e, s(t));if ("viewport" === i) u = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = T(e, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          a = t ? 0 : p(n),
          s = t ? 0 : p(n, "left");return x({ top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r });
    }(c, l);else {
      var f = void 0;"scrollParent" === i ? "BODY" === (f = a(r(t))).nodeName && (f = e.ownerDocument.documentElement) : f = "window" === i ? e.ownerDocument.documentElement : i;var d = T(f, c, l);if ("HTML" !== f.nodeName || function e(t) {
        var n = t.nodeName;if ("BODY" === n || "HTML" === n) return !1;if ("fixed" === o(t, "position")) return !0;var i = r(t);return !!i && e(i);
      }(c)) u = d;else {
        var m = v(e.ownerDocument),
            g = m.height,
            y = m.width;u.top += d.top - d.marginTop, u.bottom = g + d.top, u.left += d.left - d.marginLeft, u.right = y + d.left;
      }
    }var b = "number" == typeof (n = n || 0);return u.left += b ? n : n.left || 0, u.top += b ? n : n.top || 0, u.right -= b ? n : n.right || 0, u.bottom -= b ? n : n.bottom || 0, u;
  }function k(e, t, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf("auto")) return e;var a = S(n, i, r, o),
        s = { top: { width: a.width, height: t.top - a.top }, right: { width: a.right - t.right, height: a.height }, bottom: { width: a.width, height: a.bottom - t.bottom }, left: { width: t.left - a.left, height: a.height } },
        l = Object.keys(s).map(function (e) {
      return w({ key: e }, s[e], { area: (t = s[e], t.width * t.height) });var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        u = l.filter(function (e) {
      var t = e.width,
          i = e.height;return t >= n.clientWidth && i >= n.clientHeight;
    }),
        c = u.length > 0 ? u[0].key : l[0].key,
        f = e.split("-")[1];return c + (f ? "-" + f : "");
  }function N(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return T(n, i ? C(t) : h(t, s(n)), i);
  }function D(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }function A(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function j(e, t, n) {
    n = n.split("-")[0];var i = D(e),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        a = r ? "top" : "left",
        s = r ? "left" : "top",
        l = r ? "height" : "width",
        u = r ? "width" : "height";return o[a] = t[a] + t[l] / 2 - i[l] / 2, o[s] = n === s ? t[s] - i[u] : t[A(s)], o;
  }function O(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function L(e, t, n) {
    return (void 0 === n ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });var i = O(e, function (e) {
        return e[t] === n;
      });return e.indexOf(i);
    }(e, "name", n))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = e.function || e.fn;e.enabled && i(n) && (t.offsets.popper = x(t.offsets.popper), t.offsets.reference = x(t.offsets.reference), t = n(t, e));
    }), t;
  }function I(e, t) {
    return e.some(function (e) {
      var n = e.name;return e.enabled && n === t;
    });
  }function q(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var o = t[i],
          r = o ? "" + o + n : e;if (void 0 !== document.body.style[r]) return r;
    }return null;
  }function H(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function P(e, t, n, i) {
    n.updateBound = i, H(e).addEventListener("resize", n.updateBound, { passive: !0 });var o = a(e);return function e(t, n, i, o) {
      var r = "BODY" === t.nodeName,
          s = r ? t.ownerDocument.defaultView : t;s.addEventListener(n, i, { passive: !0 }), r || e(a(s.parentNode), n, i, o), o.push(s);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }function F() {
    var e, t;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }function R(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function M(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && R(t[n]) && (i = "px"), e.style[n] = t[n] + i;
    });
  }var B = e && /Firefox/i.test(navigator.userAgent);function W(e, t, n) {
    var i = O(e, function (e) {
      return e.name === t;
    }),
        o = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });if (!o) {
      var r = "`" + t + "`",
          a = "`" + n + "`";console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }return o;
  }var $ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = $.slice(3);function Q(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = U.indexOf(e),
        i = U.slice(n + 1).concat(U.slice(0, n));return t ? i.reverse() : i;
  }var V = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function z(e, t, n, i) {
    var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        a = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = a.indexOf(O(a, function (e) {
      return -1 !== e.search(/,|\s/);
    }));a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];return (u = u.map(function (e, i) {
      var o = (1 === i ? !r : r) ? "height" : "width",
          a = !1;return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              a = o[2];if (!r) return e;if (0 === a.indexOf("%")) {
            var s = void 0;switch (a) {case "%p":
                s = n;break;case "%":case "%r":default:
                s = i;}return x(s)[t] / 100 * r;
          }if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;return r;
        }(e, o, t, n);
      });
    })).forEach(function (e, t) {
      e.forEach(function (n, i) {
        R(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
      });
    }), o;
  }var Y = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];if (i) {
            var o = e.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                u = s ? "width" : "height",
                c = { start: _({}, l, r[l]), end: _({}, l, r[l] + r[u] - a[u]) };e.offsets.popper = w({}, a, c[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              o = e.offsets,
              r = o.popper,
              a = o.reference,
              s = i.split("-")[0],
              l = void 0;return l = R(+n) ? [+n, 0] : z(n, r, a, s), "left" === s ? (r.top += l[0], r.left -= l[1]) : "right" === s ? (r.top += l[0], r.left += l[1]) : "top" === s ? (r.left += l[0], r.top -= l[1]) : "bottom" === s && (r.left += l[0], r.top += l[1]), e.popper = r, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var n = t.boundariesElement || f(e.instance.popper);e.instance.reference === n && (n = f(n));var i = q("transform"),
              o = e.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];o.top = "", o.left = "", o[i] = "";var l = S(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);o.top = r, o.left = a, o[i] = s, t.boundaries = l;var u = t.priority,
              c = e.offsets.popper,
              d = { primary: function primary(e) {
              var n = c[e];return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), _({}, e, n);
            }, secondary: function secondary(e) {
              var n = "right" === e ? "left" : "top",
                  i = c[n];return c[e] > l[e] && !t.escapeWithReference && (i = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), _({}, n, i);
            } };return u.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";c = w({}, c, d[t](e));
          }), e.offsets.popper = c, e;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              o = e.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              u = a ? "width" : "height";return n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, t) {
          var n;if (!W(e.instance.modifiers, "arrow", "keepTogether")) return e;var i = t.element;if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;var r = e.placement.split("-")[0],
              a = e.offsets,
              s = a.popper,
              l = a.reference,
              u = -1 !== ["left", "right"].indexOf(r),
              c = u ? "height" : "width",
              f = u ? "Top" : "Left",
              d = f.toLowerCase(),
              h = u ? "left" : "top",
              p = u ? "bottom" : "right",
              m = D(i)[c];l[p] - m < s[d] && (e.offsets.popper[d] -= s[d] - (l[p] - m)), l[d] + m > s[p] && (e.offsets.popper[d] += l[d] + m - s[p]), e.offsets.popper = x(e.offsets.popper);var g = l[d] + l[c] / 2 - m / 2,
              v = o(e.instance.popper),
              y = parseFloat(v["margin" + f]),
              b = parseFloat(v["border" + f + "Width"]),
              w = g - e.offsets.popper[d] - y - b;return w = Math.max(Math.min(s[c] - m, w), 0), e.arrowElement = i, e.offsets.arrow = (_(n = {}, d, Math.round(w)), _(n, h, ""), n), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (I(e.instance.modifiers, "inner")) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var n = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              i = e.placement.split("-")[0],
              o = A(i),
              r = e.placement.split("-")[1] || "",
              a = [];switch (t.behavior) {case V.FLIP:
              a = [i, o];break;case V.CLOCKWISE:
              a = Q(i);break;case V.COUNTERCLOCKWISE:
              a = Q(i, !0);break;default:
              a = t.behavior;}return a.forEach(function (s, l) {
            if (i !== s || a.length === l + 1) return e;i = e.placement.split("-")[0], o = A(i);var u = e.offsets.popper,
                c = e.offsets.reference,
                f = Math.floor,
                d = "left" === i && f(u.right) > f(c.left) || "right" === i && f(u.left) < f(c.right) || "top" === i && f(u.bottom) > f(c.top) || "bottom" === i && f(u.top) < f(c.bottom),
                h = f(u.left) < f(n.left),
                p = f(u.right) > f(n.right),
                m = f(u.top) < f(n.top),
                g = f(u.bottom) > f(n.bottom),
                v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                y = -1 !== ["top", "bottom"].indexOf(i),
                b = !!t.flipVariations && (y && "start" === r && h || y && "end" === r && p || !y && "start" === r && m || !y && "end" === r && g),
                _ = !!t.flipVariationsByContent && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m),
                x = b || _;(d || v || x) && (e.flipped = !0, (d || v) && (i = a[l + 1]), x && (r = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = w({}, e.offsets.popper, j(e.instance.popper, e.offsets.reference, e.placement)), e = L(e.instance.modifiers, e, "flip"));
          }), e;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = x(o), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!W(e.instance.modifiers, "hide", "preventOverflow")) return e;var t = e.offsets.reference,
              n = O(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              o = e.offsets.popper,
              r = O(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a = void 0 !== r ? r : t.gpuAcceleration,
              s = f(e.instance.popper),
              l = E(s),
              u = { position: o.position },
              c = function (e, t) {
            var n = e.offsets,
                i = n.popper,
                o = n.reference,
                r = Math.round,
                a = Math.floor,
                s = function s(e) {
              return e;
            },
                l = r(o.width),
                u = r(i.width),
                c = -1 !== ["left", "right"].indexOf(e.placement),
                f = -1 !== e.placement.indexOf("-"),
                d = t ? c || f || l % 2 == u % 2 ? r : a : s,
                h = t ? r : s;return { left: d(l % 2 == 1 && u % 2 == 1 && !f && t ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: d(i.right) };
          }(e, window.devicePixelRatio < 2 || !B),
              d = "bottom" === n ? "top" : "bottom",
              h = "right" === i ? "left" : "right",
              p = q("transform"),
              m = void 0,
              g = void 0;if (g = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom : c.top, m = "right" === h ? "HTML" === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right : c.left, a && p) u[p] = "translate3d(" + m + "px, " + g + "px, 0)", u[d] = 0, u[h] = 0, u.willChange = "transform";else {
            var v = "bottom" === d ? -1 : 1,
                y = "right" === h ? -1 : 1;u[d] = g * v, u[h] = m * y, u.willChange = d + ", " + h;
          }var b = { "x-placement": e.placement };return e.attributes = w({}, b, e.attributes), e.styles = w({}, u, e.styles), e.arrowStyles = w({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          var t, n;return M(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && M(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, n, i, o) {
          var r = N(o, t, e, n.positionFixed),
              a = k(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return t.setAttribute("x-placement", a), M(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      X = function () {
    function e(t, o) {
      var r = this,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};y(this, e), this.scheduleUpdate = function () {
        return requestAnimationFrame(r.update);
      }, this.update = n(this.update.bind(this)), this.options = w({}, e.Defaults, a), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = o && o.jquery ? o[0] : o, this.options.modifiers = {}, Object.keys(w({}, e.Defaults.modifiers, a.modifiers)).forEach(function (t) {
        r.options.modifiers[t] = w({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return w({ name: e }, r.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && i(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
      }), this.update();var s = this.options.eventsEnabled;s && this.enableEventListeners(), this.state.eventsEnabled = s;
    }return b(e, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = N(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = k(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = j(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = L(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, I(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[q("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return F.call(this);
      } }]), e;
  }();return X.Utils = ("undefined" != typeof window ? window : global).PopperUtils, X.placements = $, X.Defaults = Y, X;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, n) {
  "use strict";
  function i(e) {
    return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "default" in e ? e : { default: e };
  }var o = i(t),
      r = i(n);function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function s(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), e;
  }function l() {
    return (l = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
      }return e;
    }).apply(this, arguments);
  }var u = "transitionend";function c(e) {
    var t = this,
        n = !1;return o.default(this).one(f.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || f.triggerTransitionEnd(t);
    }, e), this;
  }var f = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
      do {
        e += ~~(1e6 * Math.random());
      } while (document.getElementById(e));return e;
    }, getSelectorFromElement: function getSelectorFromElement(e) {
      var t = e.getAttribute("data-target");if (!t || "#" === t) {
        var n = e.getAttribute("href");t = n && "#" !== n ? n.trim() : "";
      }try {
        return document.querySelector(t) ? t : null;
      } catch (e) {
        return null;
      }
    }, getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
      if (!e) return 0;var t = o.default(e).css("transition-duration"),
          n = o.default(e).css("transition-delay"),
          i = parseFloat(t),
          r = parseFloat(n);return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
    }, reflow: function reflow(e) {
      return e.offsetHeight;
    }, triggerTransitionEnd: function triggerTransitionEnd(e) {
      o.default(e).trigger(u);
    }, supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(u);
    }, isElement: function isElement(e) {
      return (e[0] || e).nodeType;
    }, typeCheckConfig: function typeCheckConfig(e, t, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = t[i],
              a = r && f.isElement(r) ? "element" : null === (s = r) || void 0 === s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
        }
      }var s;
    }, findShadowRoot: function findShadowRoot(e) {
      if (!document.documentElement.attachShadow) return null;if ("function" == typeof e.getRootNode) {
        var t = e.getRootNode();return t instanceof ShadowRoot ? t : null;
      }return e instanceof ShadowRoot ? e : e.parentNode ? f.findShadowRoot(e.parentNode) : null;
    }, jQueryDetection: function jQueryDetection() {
      if (void 0 === o.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = o.default.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    } };f.jQueryDetection(), o.default.fn.emulateTransitionEnd = c, o.default.event.special[f.TRANSITION_END] = { bindType: u, delegateType: u, handle: function handle(e) {
      if (o.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
    } };var d = o.default.fn.alert,
      h = function () {
    function e(e) {
      this._element = e;
    }var t = e.prototype;return t.close = function (e) {
      var t = this._element;e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.alert"), this._element = null;
    }, t._getRootElement = function (e) {
      var t = f.getSelectorFromElement(e),
          n = !1;return t && (n = document.querySelector(t)), n || (n = o.default(e).closest(".alert")[0]), n;
    }, t._triggerCloseEvent = function (e) {
      var t = o.default.Event("close.bs.alert");return o.default(e).trigger(t), t;
    }, t._removeElement = function (e) {
      var t = this;if (o.default(e).removeClass("show"), o.default(e).hasClass("fade")) {
        var n = f.getTransitionDurationFromElement(e);o.default(e).one(f.TRANSITION_END, function (n) {
          return t._destroyElement(e, n);
        }).emulateTransitionEnd(n);
      } else this._destroyElement(e);
    }, t._destroyElement = function (e) {
      o.default(e).detach().trigger("closed.bs.alert").remove();
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.alert");i || (i = new e(this), n.data("bs.alert", i)), "close" === t && i[t](this);
      });
    }, e._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }]), e;
  }();o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h())), o.default.fn.alert = h._jQueryInterface, o.default.fn.alert.Constructor = h, o.default.fn.alert.noConflict = function () {
    return o.default.fn.alert = d, h._jQueryInterface;
  };var p = o.default.fn.button,
      m = function () {
    function e(e) {
      this._element = e, this.shouldAvoidTriggerChange = !1;
    }var t = e.prototype;return t.toggle = function () {
      var e = !0,
          t = !0,
          n = o.default(this._element).closest('[data-toggle="buttons"]')[0];if (n) {
        var i = this._element.querySelector('input:not([type="hidden"])');if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains("active")) e = !1;else {
            var r = n.querySelector(".active");r && o.default(r).removeClass("active");
          }e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || o.default(i).trigger("change")), i.focus(), t = !1;
        }
      }this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && o.default(this._element).toggleClass("active"));
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.button"), this._element = null;
    }, e._jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = o.default(this),
            r = i.data("bs.button");r || (r = new e(this), i.data("bs.button", r)), r.shouldAvoidTriggerChange = n, "toggle" === t && r[t]();
      });
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }]), e;
  }();o.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    var t = e.target,
        n = t;if (o.default(t).hasClass("btn") || (t = o.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();else {
      var i = t.querySelector('input:not([type="hidden"])');if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();"INPUT" !== n.tagName && "LABEL" === t.tagName || m._jQueryInterface.call(o.default(t), "toggle", "INPUT" === n.tagName);
    }
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    var t = o.default(e.target).closest(".btn")[0];o.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
  }), o.default(window).on("load.bs.button.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
      var i = e[t],
          o = i.querySelector('input:not([type="hidden"])');o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
    }for (var r = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
      var s = e[r];"true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active");
    }
  }), o.default.fn.button = m._jQueryInterface, o.default.fn.button.Constructor = m, o.default.fn.button.noConflict = function () {
    return o.default.fn.button = p, m._jQueryInterface;
  };var g = "carousel",
      v = ".bs.carousel",
      y = o.default.fn[g],
      b = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      _ = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      w = ".carousel-indicators",
      x = { TOUCH: "touch", PEN: "pen" },
      E = function () {
    function e(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(w), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }var t = e.prototype;return t.next = function () {
      this._isSliding || this._slide("next");
    }, t.nextWhenVisible = function () {
      var e = o.default(this._element);!document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide("prev");
    }, t.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (e) {
      var t = this;this._activeElement = this._element.querySelector(".active.carousel-item");var n = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) o.default(this._element).one("slid.bs.carousel", function () {
        return t.to(e);
      });else {
        if (n === e) return this.pause(), void this.cycle();var i = e > n ? "next" : "prev";this._slide(i, this._items[e]);
      }
    }, t.dispose = function () {
      o.default(this._element).off(v), o.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (e) {
      return e = l({}, b, e), f.typeCheckConfig(g, e, _), e;
    }, t._handleSwipe = function () {
      var e = Math.abs(this.touchDeltaX);if (!(e <= 40)) {
        var t = e / this.touchDeltaX;this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", function (t) {
        return e.pause(t);
      }).on("mouseleave.bs.carousel", function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var e = this;if (this._touchSupported) {
        var t = function t(_t3) {
          e._pointerEvent && x[_t3.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = _t3.originalEvent.clientX : e._pointerEvent || (e.touchStartX = _t3.originalEvent.touches[0].clientX);
        },
            n = function n(t) {
          e._pointerEvent && x[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", function (e) {
          return t(e);
        }), o.default(this._element).on("pointerup.bs.carousel", function (e) {
          return n(e);
        }), this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", function (e) {
          return t(e);
        }), o.default(this._element).on("touchmove.bs.carousel", function (t) {
          return function (t) {
            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX;
          }(t);
        }), o.default(this._element).on("touchend.bs.carousel", function (e) {
          return n(e);
        }));
      }
    }, t._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {case 37:
          e.preventDefault(), this.prev();break;case 39:
          e.preventDefault(), this.next();}
    }, t._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e);
    }, t._getItemByDirection = function (e, t) {
      var n = "next" === e,
          i = "prev" === e,
          o = this._getItemIndex(t),
          r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;var a = (o + ("prev" === e ? -1 : 1)) % this._items.length;return -1 === a ? this._items[this._items.length - 1] : this._items[a];
    }, t._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
          r = o.default.Event("slide.bs.carousel", { relatedTarget: e, direction: t, from: i, to: n });return o.default(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));o.default(t).removeClass("active");var n = this._indicatorsElement.children[this._getItemIndex(e)];n && o.default(n).addClass("active");
      }
    }, t._updateInterval = function () {
      var e = this._activeElement || this._element.querySelector(".active.carousel-item");if (e) {
        var t = parseInt(e.getAttribute("data-interval"), 10);t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, t._slide = function (e, t) {
      var n,
          i,
          r,
          a = this,
          s = this._element.querySelector(".active.carousel-item"),
          l = this._getItemIndex(s),
          u = t || s && this._getItemByDirection(e, s),
          c = this._getItemIndex(u),
          d = Boolean(this._interval);if ("next" === e ? (n = "carousel-item-left", i = "carousel-item-next", r = "left") : (n = "carousel-item-right", i = "carousel-item-prev", r = "right"), u && o.default(u).hasClass("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && s && u) {
        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u;var h = o.default.Event("slid.bs.carousel", { relatedTarget: u, direction: r, from: l, to: c });if (o.default(this._element).hasClass("slide")) {
          o.default(u).addClass(i), f.reflow(u), o.default(s).addClass(n), o.default(u).addClass(n);var p = f.getTransitionDurationFromElement(s);o.default(s).one(f.TRANSITION_END, function () {
            o.default(u).removeClass(n + " " + i).addClass("active"), o.default(s).removeClass("active " + i + " " + n), a._isSliding = !1, setTimeout(function () {
              return o.default(a._element).trigger(h);
            }, 0);
          }).emulateTransitionEnd(p);
        } else o.default(s).removeClass("active"), o.default(u).addClass("active"), this._isSliding = !1, o.default(this._element).trigger(h);d && this.cycle();
      }
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this).data("bs.carousel"),
            i = l({}, b, o.default(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = l({}, i, t));var r = "string" == typeof t ? t : i.slide;if (n || (n = new e(this, i), o.default(this).data("bs.carousel", n)), "number" == typeof t) n.to(t);else if ("string" == typeof r) {
          if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');n[r]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      });
    }, e._dataApiClickHandler = function (t) {
      var n = f.getSelectorFromElement(this);if (n) {
        var i = o.default(n)[0];if (i && o.default(i).hasClass("carousel")) {
          var r = l({}, o.default(i).data(), o.default(this).data()),
              a = this.getAttribute("data-slide-to");a && (r.interval = !1), e._jQueryInterface.call(o.default(i), r), a && o.default(i).data("bs.carousel").to(a), t.preventDefault();
        }
      }
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return b;
      } }]), e;
  }();o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", E._dataApiClickHandler), o.default(window).on("load.bs.carousel.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
      var i = o.default(e[t]);E._jQueryInterface.call(i, i.data());
    }
  }), o.default.fn[g] = E._jQueryInterface, o.default.fn[g].Constructor = E, o.default.fn[g].noConflict = function () {
    return o.default.fn[g] = y, E._jQueryInterface;
  };var T = "collapse",
      C = o.default.fn[T],
      S = { toggle: !0, parent: "" },
      k = { toggle: "boolean", parent: "(string|element)" },
      N = '[data-toggle="collapse"]',
      D = function () {
    function e(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(N)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            a = f.getSelectorFromElement(r),
            s = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
          return t === e;
        });null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = e.prototype;return t.toggle = function () {
      o.default(this._element).hasClass("show") ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          n,
          i = this;if (!this._isTransitioning && !o.default(this._element).hasClass("show") && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains("collapse");
      })).length && (t = null), !(t && (n = o.default(t).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
        var r = o.default.Event("show.bs.collapse");if (o.default(this._element).trigger(r), !r.isDefaultPrevented()) {
          t && (e._jQueryInterface.call(o.default(t).not(this._selector), "hide"), n || o.default(t).data("bs.collapse", null));var a = this._getDimension();o.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
              l = f.getTransitionDurationFromElement(this._element);o.default(this._element).one(f.TRANSITION_END, function () {
            o.default(i._element).removeClass("collapsing").addClass("collapse show"), i._element.style[a] = "", i.setTransitioning(!1), o.default(i._element).trigger("shown.bs.collapse");
          }).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px";
        }
      }
    }, t.hide = function () {
      var e = this;if (!this._isTransitioning && o.default(this._element).hasClass("show")) {
        var t = o.default.Event("hide.bs.collapse");if (o.default(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", f.reflow(this._element), o.default(this._element).addClass("collapsing").removeClass("collapse show");var i = this._triggerArray.length;if (i > 0) for (var r = 0; r < i; r++) {
            var a = this._triggerArray[r],
                s = f.getSelectorFromElement(a);if (null !== s) o.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || o.default(a).addClass("collapsed").attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var l = f.getTransitionDurationFromElement(this._element);o.default(this._element).one(f.TRANSITION_END, function () {
            e.setTransitioning(!1), o.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
          }).emulateTransitionEnd(l);
        }
      }
    }, t.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (e) {
      return (e = l({}, S, e)).toggle = Boolean(e.toggle), f.typeCheckConfig(T, e, k), e;
    }, t._getDimension = function () {
      return o.default(this._element).hasClass("width") ? "width" : "height";
    }, t._getParent = function () {
      var t,
          n = this;f.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          r = [].slice.call(t.querySelectorAll(i));return o.default(r).each(function (t, i) {
        n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (e, t) {
      var n = o.default(e).hasClass("show");t.length && o.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n);
    }, e._getTargetFromElement = function (e) {
      var t = f.getSelectorFromElement(e);return t ? document.querySelector(t) : null;
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.collapse"),
            r = l({}, S, n.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {});if (!i && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1), i || (i = new e(this, r), n.data("bs.collapse", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
        }
      });
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return S;
      } }]), e;
  }();o.default(document).on("click.bs.collapse.data-api", N, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();var t = o.default(this),
        n = f.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(n));o.default(i).each(function () {
      var e = o.default(this),
          n = e.data("bs.collapse") ? "toggle" : t.data();D._jQueryInterface.call(e, n);
    });
  }), o.default.fn[T] = D._jQueryInterface, o.default.fn[T].Constructor = D, o.default.fn[T].noConflict = function () {
    return o.default.fn[T] = C, D._jQueryInterface;
  };var A = "dropdown",
      j = o.default.fn[A],
      O = new RegExp("38|40|27"),
      L = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
      I = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
      q = function () {
    function e(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = e.prototype;return t.toggle = function () {
      if (!this._element.disabled && !o.default(this._element).hasClass("disabled")) {
        var t = o.default(this._menu).hasClass("show");e._clearMenus(), t || this.show(!0);
      }
    }, t.show = function (t) {
      if (void 0 === t && (t = !1), !(this._element.disabled || o.default(this._element).hasClass("disabled") || o.default(this._menu).hasClass("show"))) {
        var n = { relatedTarget: this._element },
            i = o.default.Event("show.bs.dropdown", n),
            a = e._getParentFromElement(this._element);if (o.default(a).trigger(i), !i.isDefaultPrevented()) {
          if (!this._inNavbar && t) {
            if (void 0 === r.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var s = this._element;"parent" === this._config.reference ? s = a : f.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && o.default(a).addClass("position-static"), this._popper = new r.default(s, this._menu, this._getPopperConfig());
          }"ontouchstart" in document.documentElement && 0 === o.default(a).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), o.default(this._menu).toggleClass("show"), o.default(a).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown", n));
        }
      }
    }, t.hide = function () {
      if (!this._element.disabled && !o.default(this._element).hasClass("disabled") && o.default(this._menu).hasClass("show")) {
        var t = { relatedTarget: this._element },
            n = o.default.Event("hide.bs.dropdown", t),
            i = e._getParentFromElement(this._element);o.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass("show"), o.default(i).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown", t)));
      }
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.dropdown"), o.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;o.default(this._element).on("click.bs.dropdown", function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (e) {
      return e = l({}, this.constructor.Default, o.default(this._element).data(), e), f.typeCheckConfig(A, e, this.constructor.DefaultType), e;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = e._getParentFromElement(this._element);t && (this._menu = t.querySelector(".dropdown-menu"));
      }return this._menu;
    }, t._getPlacement = function () {
      var e = o.default(this._element.parentNode),
          t = "bottom-start";return e.hasClass("dropup") ? t = o.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : o.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t;
    }, t._detectNavbar = function () {
      return o.default(this._element).closest(".navbar").length > 0;
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), l({}, e, this._config.popperConfig);
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this).data("bs.dropdown");if (n || (n = new e(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null), o.default(this).data("bs.dropdown", n)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
        }
      });
    }, e._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, r = n.length; i < r; i++) {
        var a = e._getParentFromElement(n[i]),
            s = o.default(n[i]).data("bs.dropdown"),
            l = { relatedTarget: n[i] };if (t && "click" === t.type && (l.clickEvent = t), s) {
          var u = s._menu;if (o.default(a).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && o.default.contains(a, t.target))) {
            var c = o.default.Event("hide.bs.dropdown", l);o.default(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), o.default(u).removeClass("show"), o.default(a).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown", l)));
          }
        }
      }
    }, e._getParentFromElement = function (e) {
      var t,
          n = f.getSelectorFromElement(e);return n && (t = document.querySelector(n)), t || e.parentNode;
    }, e._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || o.default(t.target).closest(".dropdown-menu").length)) : O.test(t.which)) && !this.disabled && !o.default(this).hasClass("disabled")) {
        var n = e._getParentFromElement(this),
            i = o.default(n).hasClass("show");if (i || 27 !== t.which) {
          if (t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which) return 27 === t.which && o.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void o.default(this).trigger("click");var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
            return o.default(e).is(":visible");
          });if (0 !== r.length) {
            var a = r.indexOf(t.target);38 === t.which && a > 0 && a--, 40 === t.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus();
          }
        }
      }
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return L;
      } }, { key: "DefaultType", get: function get() {
        return I;
      } }]), e;
  }();o.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', q._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", q._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", q._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (e) {
    e.preventDefault(), e.stopPropagation(), q._jQueryInterface.call(o.default(this), "toggle");
  }).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
    e.stopPropagation();
  }), o.default.fn[A] = q._jQueryInterface, o.default.fn[A].Constructor = q, o.default.fn[A].noConflict = function () {
    return o.default.fn[A] = j, q._jQueryInterface;
  };var H = o.default.fn.modal,
      P = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      F = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      R = ".modal-dialog",
      M = function () {
    function e(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(R), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }var t = e.prototype;return t.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, t.show = function (e) {
      var t = this;if (!this._isShown && !this._isTransitioning) {
        o.default(this._element).hasClass("fade") && (this._isTransitioning = !0);var n = o.default.Event("show.bs.modal", { relatedTarget: e });o.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (e) {
          return t.hide(e);
        }), o.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
          o.default(t._element).one("mouseup.dismiss.bs.modal", function (e) {
            o.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, t.hide = function (e) {
      var t = this;if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = o.default.Event("hide.bs.modal");if (o.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;var i = o.default(this._element).hasClass("fade");if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), o.default(document).off("focusin.bs.modal"), o.default(this._element).removeClass("show"), o.default(this._element).off("click.dismiss.bs.modal"), o.default(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
            var r = f.getTransitionDurationFromElement(this._element);o.default(this._element).one(f.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return o.default(e).off(".bs.modal");
      }), o.default(document).off("focusin.bs.modal"), o.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (e) {
      return e = l({}, P, e), f.typeCheckConfig("modal", e, F), e;
    }, t._triggerBackdropTransition = function () {
      var e = this,
          t = o.default.Event("hidePrevented.bs.modal");if (o.default(this._element).trigger(t), !t.isDefaultPrevented()) {
        var n = this._element.scrollHeight > document.documentElement.clientHeight;n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");var i = f.getTransitionDurationFromElement(this._dialog);o.default(this._element).off(f.TRANSITION_END), o.default(this._element).one(f.TRANSITION_END, function () {
          e._element.classList.remove("modal-static"), n || o.default(e._element).one(f.TRANSITION_END, function () {
            e._element.style.overflowY = "";
          }).emulateTransitionEnd(e._element, i);
        }).emulateTransitionEnd(i), this._element.focus();
      }
    }, t._showElement = function (e) {
      var t = this,
          n = o.default(this._element).hasClass("fade"),
          i = this._dialog ? this._dialog.querySelector(".modal-body") : null;this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && f.reflow(this._element), o.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();var r = o.default.Event("shown.bs.modal", { relatedTarget: e }),
          a = function a() {
        t._config.focus && t._element.focus(), t._isTransitioning = !1, o.default(t._element).trigger(r);
      };if (n) {
        var s = f.getTransitionDurationFromElement(this._dialog);o.default(this._dialog).one(f.TRANSITION_END, a).emulateTransitionEnd(s);
      } else a();
    }, t._enforceFocus = function () {
      var e = this;o.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function (t) {
        document !== t.target && e._element !== t.target && 0 === o.default(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown ? o.default(this._element).on("keydown.dismiss.bs.modal", function (t) {
        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
      }) : this._isShown || o.default(this._element).off("keydown.dismiss.bs.modal");
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? o.default(window).on("resize.bs.modal", function (t) {
        return e.handleUpdate(t);
      }) : o.default(window).off("resize.bs.modal");
    }, t._hideModal = function () {
      var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        o.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), o.default(e._element).trigger("hidden.bs.modal");
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (o.default(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (e) {
      var t = this,
          n = o.default(this._element).hasClass("fade") ? "fade" : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), o.default(this._backdrop).appendTo(document.body), o.default(this._element).on("click.dismiss.bs.modal", function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide());
        }), n && f.reflow(this._backdrop), o.default(this._backdrop).addClass("show"), !e) return;if (!n) return void e();var i = f.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(f.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        o.default(this._backdrop).removeClass("show");var r = function r() {
          t._removeBackdrop(), e && e();
        };if (o.default(this._element).hasClass("fade")) {
          var a = f.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(f.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();
      } else e && e();
    }, t._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var e = this;if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
            n = [].slice.call(document.querySelectorAll(".sticky-top"));o.default(t).each(function (t, n) {
          var i = n.style.paddingRight,
              r = o.default(n).css("padding-right");o.default(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
        }), o.default(n).each(function (t, n) {
          var i = n.style.marginRight,
              r = o.default(n).css("margin-right");o.default(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
        });var i = document.body.style.paddingRight,
            r = o.default(document.body).css("padding-right");o.default(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }o.default(document.body).addClass("modal-open");
    }, t._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));o.default(e).each(function (e, t) {
        var n = o.default(t).data("padding-right");o.default(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });var t = [].slice.call(document.querySelectorAll(".sticky-top"));o.default(t).each(function (e, t) {
        var n = o.default(t).data("margin-right");void 0 !== n && o.default(t).css("margin-right", n).removeData("margin-right");
      });var n = o.default(document.body).data("padding-right");o.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var e = document.createElement("div");e.className = "modal-scrollbar-measure", document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
    }, e._jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = o.default(this).data("bs.modal"),
            r = l({}, P, o.default(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {});if (i || (i = new e(this, r), o.default(this).data("bs.modal", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t](n);
        } else r.show && i.show(n);
      });
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return P;
      } }]), e;
  }();o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
    var t,
        n = this,
        i = f.getSelectorFromElement(this);i && (t = document.querySelector(i));var r = o.default(t).data("bs.modal") ? "toggle" : l({}, o.default(t).data(), o.default(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var a = o.default(t).one("show.bs.modal", function (e) {
      e.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
        o.default(n).is(":visible") && n.focus();
      });
    });M._jQueryInterface.call(o.default(t), r, this);
  }), o.default.fn.modal = M._jQueryInterface, o.default.fn.modal.Constructor = M, o.default.fn.modal.noConflict = function () {
    return o.default.fn.modal = H, M._jQueryInterface;
  };var B = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      W = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
      $ = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      U = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Q(e, t, n) {
    if (0 === e.length) return e;if (n && "function" == typeof n) return n(e);for (var i = new window.DOMParser().parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), a = function a(e, n) {
      var i = r[e],
          a = i.nodeName.toLowerCase();if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";var s = [].slice.call(i.attributes),
          l = [].concat(t["*"] || [], t[a] || []);s.forEach(function (e) {
        (function (e, t) {
          var n = e.nodeName.toLowerCase();if (-1 !== t.indexOf(n)) return -1 === B.indexOf(n) || Boolean(e.nodeValue.match($) || e.nodeValue.match(U));for (var i = t.filter(function (e) {
            return e instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }return !1;
        })(e, l) || i.removeAttribute(e.nodeName);
      });
    }, s = 0, l = r.length; s < l; s++) {
      a(s);
    }return i.body.innerHTML;
  }var V = "tooltip",
      z = o.default.fn.tooltip,
      Y = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      X = ["sanitize", "whiteList", "sanitizeFn"],
      K = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
      G = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      J = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: !0, sanitizeFn: null, whiteList: W, popperConfig: null },
      Z = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
      ee = function () {
    function e(e, t) {
      if (void 0 === r.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }var t = e.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY,
            n = o.default(e.currentTarget).data(t);n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (o.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), o.default.removeData(this.element, this.constructor.DATA_KEY), o.default(this.element).off(this.constructor.EVENT_KEY), o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === o.default(this.element).css("display")) throw new Error("Please use show on visible elements");var t = o.default.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        o.default(this.element).trigger(t);var n = f.findShadowRoot(this.element),
            i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !i) return;var a = this.getTipElement(),
            s = f.getUID(this.constructor.NAME);a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && o.default(a).addClass("fade");var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
            u = this._getAttachment(l);this.addAttachmentClass(u);var c = this._getContainer();o.default(a).data(this.constructor.DATA_KEY, this), o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(a).appendTo(c), o.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new r.default(this.element, a, this._getPopperConfig(u)), o.default(a).addClass("show"), o.default(a).addClass(this.config.customClass), "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);var d = function d() {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, o.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
        };if (o.default(this.tip).hasClass("fade")) {
          var h = f.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(f.TRANSITION_END, d).emulateTransitionEnd(h);
        } else d();
      }
    }, t.hide = function (e) {
      var t = this,
          n = this.getTipElement(),
          i = o.default.Event(this.constructor.Event.HIDE),
          r = function r() {
        "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), o.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e();
      };if (o.default(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (o.default(n).removeClass("show"), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, o.default(this.tip).hasClass("fade")) {
          var a = f.getTransitionDurationFromElement(n);o.default(n).one(f.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (e) {
      o.default(this.getTipElement()).addClass("bs-tooltip-" + e);
    }, t.getTipElement = function () {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var e = this.getTipElement();this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(e).removeClass("fade show");
    }, t.setElementContent = function (e, t) {
      "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Q(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? o.default(t).parent().is(e) || e.empty().append(t) : e.text(o.default(t).text());
    }, t.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, t._getPopperConfig = function (e) {
      var t = this;return l({}, { placement: e, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
          e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
        }, onUpdate: function onUpdate(e) {
          return t._handlePopperPlacementChange(e);
        } }, this.config.popperConfig);
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : f.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container);
    }, t._getAttachment = function (e) {
      return G[e.toUpperCase()];
    }, t._setListeners = function () {
      var e = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) o.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
          return e.toggle(t);
        });else if ("manual" !== t) {
          var n = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
              i = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;o.default(e.element).on(n, e.config.selector, function (t) {
            return e._enter(t);
          }).on(i, e.config.selector, function (t) {
            return e._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        e.element && e.hide();
      }, o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;(t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), o.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        "show" === t._hoverState && t.show();
      }, t.config.delay.show) : t.show());
    }, t._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;(t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        "out" === t._hoverState && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, t._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }return !1;
    }, t._getConfig = function (e) {
      var t = o.default(this.element).data();return Object.keys(t).forEach(function (e) {
        -1 !== X.indexOf(e) && delete t[e];
      }), "number" == typeof (e = l({}, this.constructor.Default, t, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), f.typeCheckConfig(V, e, this.constructor.DefaultType), e.sanitize && (e.template = Q(e.template, e.whiteList, e.sanitizeFn)), e;
    }, t._getDelegateConfig = function () {
      var e = {};if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }return e;
    }, t._cleanTipClass = function () {
      var e = o.default(this.getTipElement()),
          t = e.attr("class").match(Y);null !== t && t.length && e.removeClass(t.join(""));
    }, t._handlePopperPlacementChange = function (e) {
      this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, t._fixTransition = function () {
      var e = this.getTipElement(),
          t = this.config.animation;null === e.getAttribute("x-placement") && (o.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.tooltip"),
            r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), n.data("bs.tooltip", i)), "string" == typeof t)) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
        }
      });
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return J;
      } }, { key: "NAME", get: function get() {
        return V;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.tooltip";
      } }, { key: "Event", get: function get() {
        return Z;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.tooltip";
      } }, { key: "DefaultType", get: function get() {
        return K;
      } }]), e;
  }();o.default.fn.tooltip = ee._jQueryInterface, o.default.fn.tooltip.Constructor = ee, o.default.fn.tooltip.noConflict = function () {
    return o.default.fn.tooltip = z, ee._jQueryInterface;
  };var te = "popover",
      ne = o.default.fn.popover,
      ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      oe = l({}, ee.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      re = l({}, ee.DefaultType, { content: "(string|element|function)" }),
      ae = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
      se = function (e) {
    var t, n;function i() {
      return e.apply(this, arguments) || this;
    }n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;var r = i.prototype;return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (e) {
      o.default(this.getTipElement()).addClass("bs-popover-" + e);
    }, r.getTipElement = function () {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var e = o.default(this.getTipElement());this.setElementContent(e.find(".popover-header"), this.getTitle());var t = this._getContent();"function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show");
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var e = o.default(this.getTipElement()),
          t = e.attr("class").match(ie);null !== t && t.length > 0 && e.removeClass(t.join(""));
    }, i._jQueryInterface = function (e) {
      return this.each(function () {
        var t = o.default(this).data("bs.popover"),
            n = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null;if ((t || !/dispose|hide/.test(e)) && (t || (t = new i(this, n), o.default(this).data("bs.popover", t)), "string" == typeof e)) {
          if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return oe;
      } }, { key: "NAME", get: function get() {
        return te;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.popover";
      } }, { key: "Event", get: function get() {
        return ae;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.popover";
      } }, { key: "DefaultType", get: function get() {
        return re;
      } }]), i;
  }(ee);o.default.fn.popover = se._jQueryInterface, o.default.fn.popover.Constructor = se, o.default.fn.popover.noConflict = function () {
    return o.default.fn.popover = ne, se._jQueryInterface;
  };var le = "scrollspy",
      ue = o.default.fn[le],
      ce = { offset: 10, method: "auto", target: "" },
      fe = { offset: "number", method: "string", target: "(string|element)" },
      de = "scroll.bs.scrollspy",
      he = ".nav-link",
      pe = ".list-group-item",
      me = ".dropdown-item",
      ge = function () {
    function e(e, t) {
      var n = this;this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + he + "," + this._config.target + " " + pe + "," + this._config.target + " " + me, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o.default(this._scrollElement).on(de, function (e) {
        return n._process(e);
      }), this.refresh(), this._process();
    }var t = e.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          n = "auto" === this._config.method ? t : this._config.method,
          i = "position" === n ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t,
            r = f.getSelectorFromElement(e);if (r && (t = document.querySelector(r)), t) {
          var a = t.getBoundingClientRect();if (a.width || a.height) return [o.default(t)[n]().top + i, r];
        }return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.scrollspy"), o.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (e) {
      if ("string" != typeof (e = l({}, ce, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {})).target && f.isElement(e.target)) {
        var t = o.default(e.target).attr("id");t || (t = f.getUID(le), o.default(e.target).attr("id", t)), e.target = "#" + t;
      }return f.typeCheckConfig(le, e, fe), e;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= n) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = o.default([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(he + ", " + pe).addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(he).addClass("active")), o.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: e });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
        return e.classList.contains("active");
      }).forEach(function (e) {
        return e.classList.remove("active");
      });
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this).data("bs.scrollspy");if (n || (n = new e(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), o.default(this).data("bs.scrollspy", n)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
        }
      });
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return ce;
      } }]), e;
  }();o.default(window).on("load.bs.scrollspy.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
      var n = o.default(e[t]);ge._jQueryInterface.call(n, n.data());
    }
  }), o.default.fn[le] = ge._jQueryInterface, o.default.fn[le].Constructor = ge, o.default.fn[le].noConflict = function () {
    return o.default.fn[le] = ue, ge._jQueryInterface;
  };var ve = o.default.fn.tab,
      ye = function () {
    function e(e) {
      this._element = e;
    }var t = e.prototype;return t.show = function () {
      var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass("active") || o.default(this._element).hasClass("disabled"))) {
        var t,
            n,
            i = o.default(this._element).closest(".nav, .list-group")[0],
            r = f.getSelectorFromElement(this._element);if (i) {
          var a = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";n = (n = o.default.makeArray(o.default(i).find(a)))[n.length - 1];
        }var s = o.default.Event("hide.bs.tab", { relatedTarget: this._element }),
            l = o.default.Event("show.bs.tab", { relatedTarget: n });if (n && o.default(n).trigger(s), o.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (t = document.querySelector(r)), this._activate(this._element, i);var u = function u() {
            var t = o.default.Event("hidden.bs.tab", { relatedTarget: e._element }),
                i = o.default.Event("shown.bs.tab", { relatedTarget: n });o.default(n).trigger(t), o.default(e._element).trigger(i);
          };t ? this._activate(t, t.parentNode, u) : u();
        }
      }
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.tab"), this._element = null;
    }, t._activate = function (e, t, n) {
      var i = this,
          r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? o.default(t).children(".active") : o.default(t).find("> li > .active"))[0],
          a = n && r && o.default(r).hasClass("fade"),
          s = function s() {
        return i._transitionComplete(e, r, n);
      };if (r && a) {
        var l = f.getTransitionDurationFromElement(r);o.default(r).removeClass("show").one(f.TRANSITION_END, s).emulateTransitionEnd(l);
      } else s();
    }, t._transitionComplete = function (e, t, n) {
      if (t) {
        o.default(t).removeClass("active");var i = o.default(t.parentNode).find("> .dropdown-menu .active")[0];i && o.default(i).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }if (o.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && o.default(e.parentNode).hasClass("dropdown-menu")) {
        var r = o.default(e).closest(".dropdown")[0];if (r) {
          var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));o.default(a).addClass("active");
        }e.setAttribute("aria-expanded", !0);
      }n && n();
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.tab");if (i || (i = new e(this), n.data("bs.tab", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
        }
      });
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }]), e;
  }();o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
    e.preventDefault(), ye._jQueryInterface.call(o.default(this), "show");
  }), o.default.fn.tab = ye._jQueryInterface, o.default.fn.tab.Constructor = ye, o.default.fn.tab.noConflict = function () {
    return o.default.fn.tab = ve, ye._jQueryInterface;
  };var be = o.default.fn.toast,
      _e = { animation: "boolean", autohide: "boolean", delay: "number" },
      we = { animation: !0, autohide: !0, delay: 500 },
      xe = function () {
    function e(e, t) {
      this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
    }var t = e.prototype;return t.show = function () {
      var e = this,
          t = o.default.Event("show.bs.toast");if (o.default(this._element).trigger(t), !t.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");var n = function n() {
          e._element.classList.remove("showing"), e._element.classList.add("show"), o.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function () {
            e.hide();
          }, e._config.delay));
        };if (this._element.classList.remove("hide"), f.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
          var i = f.getTransitionDurationFromElement(this._element);o.default(this._element).one(f.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, t.hide = function () {
      if (this._element.classList.contains("show")) {
        var e = o.default.Event("hide.bs.toast");o.default(this._element).trigger(e), e.isDefaultPrevented() || this._close();
      }
    }, t.dispose = function () {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), o.default(this._element).off("click.dismiss.bs.toast"), o.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
    }, t._getConfig = function (e) {
      return e = l({}, we, o.default(this._element).data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {}), f.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
    }, t._setListeners = function () {
      var e = this;o.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
        return e.hide();
      });
    }, t._close = function () {
      var e = this,
          t = function t() {
        e._element.classList.add("hide"), o.default(e._element).trigger("hidden.bs.toast");
      };if (this._element.classList.remove("show"), this._config.animation) {
        var n = f.getTransitionDurationFromElement(this._element);o.default(this._element).one(f.TRANSITION_END, t).emulateTransitionEnd(n);
      } else t();
    }, t._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.toast");if (i || (i = new e(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), n.data("bs.toast", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t](this);
        }
      });
    }, s(e, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "DefaultType", get: function get() {
        return _e;
      } }, { key: "Default", get: function get() {
        return we;
      } }]), e;
  }();o.default.fn.toast = xe._jQueryInterface, o.default.fn.toast.Constructor = xe, o.default.fn.toast.noConflict = function () {
    return o.default.fn.toast = be, xe._jQueryInterface;
  }, e.Alert = h, e.Button = m, e.Carousel = E, e.Collapse = D, e.Dropdown = q, e.Modal = M, e.Popover = se, e.Scrollspy = ge, e.Tab = ye, e.Toast = xe, e.Tooltip = ee, e.Util = f, Object.defineProperty(e, "__esModule", { value: !0 });
}), function (e) {
  "use strict";
  function t(t) {
    return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!e('[name="' + t.attr("name") + '"]:checked').length : t.is("select[multiple]") ? (t.val() || []).length : t.val();
  }var n = function n(i, o) {
    this.options = o, this.validators = e.extend({}, n.VALIDATORS, o.custom), this.$element = e(i), this.$btn = e('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", e.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", e.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
      var n = e(this),
          i = n.attr("data-match");e(i).on("input.bs.validator", function (e) {
        t(n) && n.trigger("input.bs.validator");
      });
    }), this.$inputs.filter(function () {
      return t(e(this)) && !e(this).closest(".has-error").length;
    }).trigger("focusout"), this.$element.attr("novalidate", !0);
  };function i(t) {
    return this.each(function () {
      var i = e(this),
          o = e.extend({}, n.DEFAULTS, i.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t),
          r = i.data("bs.validator");(r || "destroy" != t) && (r || i.data("bs.validator", r = new n(this, o)), "string" == typeof t && r[t]());
    });
  }n.VERSION = "0.11.9", n.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', n.FOCUS_OFFSET = 20, n.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, n.VALIDATORS = { native: function native(e) {
      var t = e[0];if (t.checkValidity) return !t.checkValidity() && !t.validity.valid && (t.validationMessage || "error!");
    }, match: function match(t) {
      var i = t.attr("data-match");return t.val() !== e(i).val() && n.DEFAULTS.errors.match;
    }, minlength: function minlength(e) {
      var t = e.attr("data-minlength");return e.val().length < t && n.DEFAULTS.errors.minlength;
    } }, n.prototype.update = function () {
    var t = this;return this.$inputs = this.$element.find(n.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      t.clearErrors(e(this));
    })), this.toggleSubmit(), this;
  }, n.prototype.onInput = function (t) {
    var n = this,
        i = e(t.target),
        o = "focusout" !== t.type;this.$inputs.is(i) && this.validateInput(i, o).done(function () {
      n.toggleSubmit();
    });
  }, n.prototype.validateInput = function (n, i) {
    t(n);var o = n.data("bs.validator.errors");n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]'));var r = e.Event("validate.bs.validator", { relatedTarget: n[0] });if (this.$element.trigger(r), !r.isDefaultPrevented()) {
      var a = this;return this.runValidators(n).done(function (t) {
        n.data("bs.validator.errors", t), t.length ? i ? a.defer(n, a.showErrors) : a.showErrors(n) : a.clearErrors(n), o && t.toString() === o.toString() || (r = t.length ? e.Event("invalid.bs.validator", { relatedTarget: n[0], detail: t }) : e.Event("valid.bs.validator", { relatedTarget: n[0], detail: o }), a.$element.trigger(r)), a.toggleSubmit(), a.$element.trigger(e.Event("validated.bs.validator", { relatedTarget: n[0] }));
      });
    }
  }, n.prototype.runValidators = function (n) {
    var i = [],
        o = e.Deferred();function r(e) {
      return function (e) {
        return n.attr("data-" + e + "-error");
      }(e) || ((t = n[0].validity).typeMismatch ? n.attr("data-type-error") : t.patternMismatch ? n.attr("data-pattern-error") : t.stepMismatch ? n.attr("data-step-error") : t.rangeOverflow ? n.attr("data-max-error") : t.rangeUnderflow ? n.attr("data-min-error") : t.valueMissing ? n.attr("data-required-error") : null) || n.attr("data-error");var t;
    }return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", o), e.each(this.validators, e.proxy(function (e, o) {
      var a = null;!t(n) && !n.attr("required") || void 0 === n.attr("data-" + e) && "native" != e || !(a = o.call(this, n)) || (a = r(e) || a, !~i.indexOf(a) && i.push(a));
    }, this)), !i.length && t(n) && n.attr("data-remote") ? this.defer(n, function () {
      var a = {};a[n.attr("name")] = t(n), e.get(n.attr("data-remote"), a).fail(function (e, t, n) {
        i.push(r("remote") || n);
      }).always(function () {
        o.resolve(i);
      });
    }) : o.resolve(i), o.promise();
  }, n.prototype.validate = function () {
    var t = this;return e.when(this.$inputs.map(function (n) {
      return t.validateInput(e(this), !1);
    })).then(function () {
      t.toggleSubmit(), t.focusError();
    }), this;
  }, n.prototype.focusError = function () {
    if (this.options.focus) {
      var t = this.$element.find(".has-error:first :input");0 !== t.length && (e("html, body").animate({ scrollTop: t.offset().top - n.FOCUS_OFFSET }, 250), t.focus());
    }
  }, n.prototype.showErrors = function (t) {
    var n = this.options.html ? "html" : "text",
        i = t.data("bs.validator.errors"),
        o = t.closest(".form-group"),
        r = o.find(".help-block.with-errors"),
        a = o.find(".form-control-feedback");i.length && (i = e("<ul/>").addClass("list-unstyled").append(e.map(i, function (t) {
      return e("<li/>")[n](t);
    })), void 0 === r.data("bs.validator.originalContent") && r.data("bs.validator.originalContent", r.html()), r.empty().append(i), o.addClass("has-error has-danger"), o.hasClass("has-feedback") && a.removeClass(this.options.feedback.success) && a.addClass(this.options.feedback.error) && o.removeClass("has-success"));
  }, n.prototype.clearErrors = function (e) {
    var n = e.closest(".form-group"),
        i = n.find(".help-block.with-errors"),
        o = n.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")), n.removeClass("has-error has-danger has-success"), n.hasClass("has-feedback") && o.removeClass(this.options.feedback.error) && o.removeClass(this.options.feedback.success) && t(e) && o.addClass(this.options.feedback.success) && n.addClass("has-success");
  }, n.prototype.hasErrors = function () {
    return !!this.$inputs.filter(function () {
      return !!(e(this).data("bs.validator.errors") || []).length;
    }).length;
  }, n.prototype.isIncomplete = function () {
    return !!this.$inputs.filter("[required]").filter(function () {
      var n = t(e(this));return !("string" == typeof n ? e.trim(n) : n);
    }).length;
  }, n.prototype.onSubmit = function (e) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && e.preventDefault();
  }, n.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
  }, n.prototype.defer = function (t, n) {
    if (n = e.proxy(n, this, t), !this.options.delay) return n();window.clearTimeout(t.data("bs.validator.timeout")), t.data("bs.validator.timeout", window.setTimeout(n, this.options.delay));
  }, n.prototype.reset = function () {
    return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () {
      var t = e(this),
          n = t.data("bs.validator.timeout");window.clearTimeout(n) && t.removeData("bs.validator.timeout");
    }), this.$element.find(".help-block.with-errors").each(function () {
      var t = e(this),
          n = t.data("bs.validator.originalContent");t.removeData("bs.validator.originalContent").html(n);
    }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this;
  }, n.prototype.destroy = function () {
    return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this;
  };var o = e.fn.validator;e.fn.validator = i, e.fn.validator.Constructor = n, e.fn.validator.noConflict = function () {
    return e.fn.validator = o, this;
  }, e(window).on("load", function () {
    e('form[data-toggle="validator"]').each(function () {
      var t = e(this);i.call(t, t.data());
    });
  });
}(jQuery), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.Headroom = t();
}(this, function () {
  "use strict";
  var e = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };function t(e) {
    this.callback = e, this.ticking = !1;
  }function n(e, t) {
    var i;t = function e(t) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var n,
          i,
          o,
          r = t || {};for (i = 1; i < arguments.length; i++) {
        var a = arguments[i] || {};for (n in a) {
          "object" != _typeof(r[n]) || (o = r[n]) && "undefined" != typeof window && (o === window || o.nodeType) ? r[n] = r[n] || a[n] : r[n] = e(r[n], a[n]);
        }
      }return r;
    }(t, n.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = (i = t.tolerance) === Object(i) ? i : { down: i, up: i }, this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom;
  }return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, t.prototype = { constructor: t, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, n.prototype = { constructor: n, init: function init() {
      if (n.cutsTheMustard) return this.debouncer = new t(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var e = this.classes;for (var t in this.initialised = !1, e) {
        e.hasOwnProperty(t) && this.elem.classList.remove(e[t]);
      }this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var e = this.elem.classList,
          t = this.classes;!e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this));
    }, bottom: function bottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this));
    }, notBottom: function notBottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }, getElementPhysicalHeight: function getElementPhysicalHeight(e) {
      return Math.max(e.offsetHeight, e.clientHeight);
    }, getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    }, getDocumentHeight: function getDocumentHeight() {
      var e = document.body,
          t = document.documentElement;return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight);
    }, getElementHeight: function getElementHeight(e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(e) {
      var t = e < 0,
          n = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();return t || n;
    }, toleranceExceeded: function toleranceExceeded(e, t) {
      return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
    }, shouldUnpin: function shouldUnpin(e, t) {
      var n = e > this.lastKnownScrollY,
          i = e >= this.offset;return n && i && t;
    }, shouldPin: function shouldPin(e, t) {
      var n = e < this.lastKnownScrollY,
          i = e <= this.offset;return n && t || i;
    }, update: function update() {
      var e = this.getScrollY(),
          t = e > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(e, t);this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e);
    } }, n.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, n.cutsTheMustard = void 0 !== e && e.rAF && e.bind && e.classList, n;
}), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";
  var t = e.scrollTo = function (t, n, i) {
    return e(window).scrollTo(t, n, i);
  };function n(t) {
    return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function i(e) {
    return "function" == typeof e;
  }function o(t) {
    return i(t) || e.isPlainObject(t) ? t : { top: t, left: t };
  }return t.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function (r, a, s) {
    "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (s = a, a = 0), "function" == typeof s && (s = { onAfter: s }), "max" === r && (r = 9e9), s = e.extend({}, t.defaults, s), a = a || s.duration;var l = s.queue && s.axis.length > 1;return l && (a /= 2), s.offset = o(s.offset), s.over = o(s.over), this.each(function () {
      if (null !== r) {
        var u,
            c = n(this),
            f = c ? this.contentWindow || window : this,
            d = e(f),
            h = r,
            p = {};switch (typeof h === "undefined" ? "undefined" : _typeof(h)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = o(h);break;
            }h = c ? e(h) : e(h, f);case "object":
            if (0 === h.length) return;(h.is || h.style) && (u = (h = e(h)).offset());}var m = i(s.offset) && s.offset(f, h) || s.offset;e.each(s.axis.split(""), function (e, n) {
          var i = "x" === n ? "Left" : "Top",
              o = i.toLowerCase(),
              r = "scroll" + i,
              a = d[r](),
              v = t.max(f, n);if (u) p[r] = u[o] + (c ? 0 : a - d.offset()[o]), s.margin && (p[r] -= parseInt(h.css("margin" + i), 10) || 0, p[r] -= parseInt(h.css("border" + i + "Width"), 10) || 0), p[r] += m[o] || 0, s.over[o] && (p[r] += h["x" === n ? "width" : "height"]() * s.over[o]);else {
            var y = h[o];p[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(p[r]) && (p[r] = p[r] <= 0 ? 0 : Math.min(p[r], v)), !e && s.axis.length > 1 && (a === p[r] ? p = {} : l && (g(s.onAfterFirst), p = {}));
        }), g(s.onAfter);
      }function g(t) {
        var n = e.extend({}, s, { queue: !0, duration: a, complete: t && function () {
            t.call(f, h, s);
          } });d.animate(p, n);
      }
    });
  }, t.max = function (t, i) {
    var o = "x" === i ? "Width" : "Height",
        r = "scroll" + o;if (!n(t)) return t[r] - e(t)[o.toLowerCase()]();var a = "client" + o,
        s = t.ownerDocument || t.document,
        l = s.documentElement,
        u = s.body;return Math.max(l[r], u[r]) - Math.min(l[a], u[a]);
  }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = { get: function get(t) {
      return e(t.elem)[t.prop]();
    }, set: function set(t) {
      var n = this.get(t);if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();var i = Math.round(t.now);n !== i && (e(t.elem)[t.prop](i), t._last = this.get(t));
    } }, t;
}), function () {
  "use strict";
  var e,
      t = document.querySelector(".lv-page"),
      n = null;function i() {
    n.offset = 140, window.innerWidth >= 768 && (n.offset = 230), window.innerWidth >= 992 && (n.offset = 230);
  }window.addEventListener("load", function () {
    var _ref;

    if (!n) return n = new Headroom(t, (_ref = { offset: 0, tolerance: 0 }, _defineProperty(_ref, "tolerance", { up: 5, down: 0 }), _defineProperty(_ref, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_ref, "onPin", function onPin() {}), _defineProperty(_ref, "onUnpin", function onUnpin() {}), _defineProperty(_ref, "onTop", function onTop() {}), _defineProperty(_ref, "onNotTop", function onNotTop() {}), _defineProperty(_ref, "onBottom", function onBottom() {}), _defineProperty(_ref, "onNotBottom", function onNotBottom() {}), _ref)), i(), void n.init();
  }), window.addEventListener("resize", function () {
    clearTimeout(e), e = setTimeout(function () {
      n && i();
    }, 250);
  });
}(), function (e) {
  "use strict";
  var t = e("html"),
      n = (e(".lv-page"), e(".lv-off-canvas")),
      i = e(".dropdown", n),
      o = e("li:not(.has-dropdown) > a", i),
      r = e(".submenu-arrow");e("[data-menu-toggle]").on("click", function (e) {
    e.preventDefault(), t.toggleClass("has-open-menu");
  }), r.on("click", function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), o.click(function (n) {
    n.preventDefault();var i = e(this).attr("href");t.removeClass("has-open-menu").addClass("has-closed-menu"), setTimeout(function () {
      window.location = i;
    }.bind(i), 200);
  }), i.on("click", function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  });
}(jQuery), function (e) {
  "use strict";
  var t = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = e("body");1 != e(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        o,
        r = window.innerWidth,
        a = window.innerHeight,
        s = e(window).width(),
        l = e(window).height();r < t.sm && (i = "xs"), r >= t.sm && r < t.md && (i = "sm"), r >= t.md && r < t.lg && (i = "md"), r >= t.lg && r < t.xl && (i = "lg"), r >= t.xl && r < t.xxl && (i = "xl"), r >= t.xxl && (i = "xxl"), s < t.sm && (o = "xs"), s >= t.sm && s < t.md && (o = "sm"), s >= t.md && s < t.lg && (o = "md"), s >= t.lg && s < t.xl && (o = "lg"), s >= t.xl && s < t.xxl && (o = "xl"), s >= t.xxl && (o = "xxl"), e(".lv-screen-data").html(s + " x " + l + "<br><small>" + r + " x " + a + "</small><br>" + i + "  [" + o + "]").css({ position: "fixed", top: 0, padding: "5px 10px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, o = "", r = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), a = 0; a < r.length; a++) {
      t[n[a]] = Number(r[a].replace("px", "")), o += "<tr><td>" + n[a] + "</td><td>" + r[a] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + o + "</table>", e('[data-js="lv-responsive-table"]').append(i);
  }(), e("html[development]").length && (i(), e(window).resize(function () {
    i();
  }));
}(jQuery);
