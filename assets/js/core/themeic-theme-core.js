function Ee(n, r) {
  for (var e = 0; e < r.length; e++) {
    var t = r[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, typeof (i = (function(o, c) {
      if (typeof o != "object" || o === null) return o;
      var s = o[Symbol.toPrimitive];
      if (s !== void 0) {
        var a = s.call(o, "string");
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(o);
    })(t.key)) == "symbol" ? i : String(i), t);
  }
  var i;
}
function ce(n, r, e) {
  return r && Ee(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
    }
    return n;
  }, R.apply(this, arguments);
}
function Y(n, r) {
  n.prototype = Object.create(r.prototype), n.prototype.constructor = n, z(n, r);
}
function te(n) {
  return te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, te(n);
}
function z(n, r) {
  return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, z(n, r);
}
function Pe() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function re(n, r, e) {
  return re = Pe() ? Reflect.construct.bind() : function(t, i, o) {
    var c = [null];
    c.push.apply(c, i);
    var s = new (Function.bind.apply(t, c))();
    return o && z(s, o.prototype), s;
  }, re.apply(null, arguments);
}
function ne(n) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ne = function(e) {
    if (e === null || Function.toString.call(e).indexOf("[native code]") === -1) return e;
    if (typeof e != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(e)) return r.get(e);
      r.set(e, t);
    }
    function t() {
      return re(e, arguments, te(this).constructor);
    }
    return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), z(t, e);
  }, ne(n);
}
function xe(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
var _, Le = function() {
  this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0;
};
(function(n) {
  n[n.off = 0] = "off", n[n.error = 1] = "error", n[n.warning = 2] = "warning", n[n.info = 3] = "info", n[n.debug = 4] = "debug";
})(_ || (_ = {}));
var ue = _.off, B = /* @__PURE__ */ (function() {
  function n(e) {
    this.t = void 0, this.t = e;
  }
  n.getLevel = function() {
    return ue;
  }, n.setLevel = function(e) {
    return ue = _[e];
  };
  var r = n.prototype;
  return r.error = function() {
    this.i(console.error, _.error, [].slice.call(arguments));
  }, r.warn = function() {
    this.i(console.warn, _.warning, [].slice.call(arguments));
  }, r.info = function() {
    this.i(console.info, _.info, [].slice.call(arguments));
  }, r.debug = function() {
    this.i(console.log, _.debug, [].slice.call(arguments));
  }, r.i = function(e, t, i) {
    t <= n.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(i));
  }, n;
})();
function F(n) {
  return n.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function fe(n) {
  return n && n.sensitive ? "" : "i";
}
var M = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, U = new (/* @__PURE__ */ (function() {
  function n() {
    this.o = M, this.u = void 0, this.h = { after: null, before: null, parent: null };
  }
  var r = n.prototype;
  return r.toString = function(e) {
    return e.outerHTML;
  }, r.toDocument = function(e) {
    return this.u || (this.u = new DOMParser()), this.u.parseFromString(e, "text/html");
  }, r.toElement = function(e) {
    var t = document.createElement("div");
    return t.innerHTML = e, t;
  }, r.getHtml = function(e) {
    return e === void 0 && (e = document), this.toString(e.documentElement);
  }, r.getWrapper = function(e) {
    return e === void 0 && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
  }, r.getContainer = function(e) {
    return e === void 0 && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
  }, r.removeContainer = function(e) {
    document.body.contains(e) && (this.v(e), e.parentNode.removeChild(e));
  }, r.addContainer = function(e, t) {
    var i = this.getContainer() || this.h.before;
    i ? this.l(e, i) : this.h.after ? this.h.after.parentNode.insertBefore(e, this.h.after) : this.h.parent ? this.h.parent.appendChild(e) : t.appendChild(e);
  }, r.getSibling = function() {
    return this.h;
  }, r.getNamespace = function(e) {
    e === void 0 && (e = document);
    var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
    return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
  }, r.getHref = function(e) {
    if (e.tagName && e.tagName.toLowerCase() === "a") {
      if (typeof e.href == "string") return e.href;
      var t = e.getAttribute("href") || e.getAttribute("xlink:href");
      if (t) return this.resolveUrl(t.baseVal || t);
    }
    return null;
  }, r.resolveUrl = function() {
    var e = [].slice.call(arguments).length;
    if (e === 0) throw new Error("resolveUrl requires at least one argument; got none.");
    var t = document.createElement("base");
    if (t.href = arguments[0], e === 1) return t.href;
    var i = document.getElementsByTagName("head")[0];
    i.insertBefore(t, i.firstChild);
    for (var o, c = document.createElement("a"), s = 1; s < e; s++) c.href = arguments[s], t.href = o = c.href;
    return i.removeChild(t), o;
  }, r.l = function(e, t) {
    t.parentNode.insertBefore(e, t.nextSibling);
  }, r.v = function(e) {
    return this.h = { after: e.nextElementSibling, before: e.previousElementSibling, parent: e.parentElement }, this.h;
  }, n;
})())(), Ae = /* @__PURE__ */ (function() {
  function n() {
    this.p = void 0, this.m = [], this.P = -1;
  }
  var r = n.prototype;
  return r.init = function(e, t) {
    this.p = "barba";
    var i = { data: {}, ns: t, scroll: { x: window.scrollX, y: window.scrollY }, url: e };
    this.P = 0, this.m.push(i);
    var o = { from: this.p, index: this.P, states: [].concat(this.m) };
    window.history && window.history.replaceState(o, "", e);
  }, r.change = function(e, t, i) {
    if (i && i.state) {
      var o = i.state, c = o.index;
      t = this.g(this.P - c), this.replace(o.states), this.P = c;
    } else this.add(e, t);
    return t;
  }, r.add = function(e, t, i, o) {
    var c = i ?? this.R(t), s = { data: o ?? {}, ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: e };
    switch (c) {
      case "push":
        this.P = this.size, this.m.push(s);
        break;
      case "replace":
        this.set(this.P, s);
    }
    var a = { from: this.p, index: this.P, states: [].concat(this.m) };
    switch (c) {
      case "push":
        window.history && window.history.pushState(a, "", e);
        break;
      case "replace":
        window.history && window.history.replaceState(a, "", e);
    }
  }, r.store = function(e, t) {
    var i = t || this.P, o = this.get(i);
    o.data = R({}, o.data, e), this.set(i, o);
    var c = { from: this.p, index: this.P, states: [].concat(this.m) };
    window.history.replaceState(c, "");
  }, r.update = function(e, t) {
    var i = t || this.P, o = R({}, this.get(i), e);
    this.set(i, o);
  }, r.remove = function(e) {
    e ? this.m.splice(e, 1) : this.m.pop(), this.P--;
  }, r.clear = function() {
    this.m = [], this.P = -1;
  }, r.replace = function(e) {
    this.m = e;
  }, r.get = function(e) {
    return this.m[e];
  }, r.set = function(e, t) {
    return this.m[e] = t;
  }, r.R = function(e) {
    var t = "push", i = e, o = M.prefix + "-" + M.history;
    return i.hasAttribute && i.hasAttribute(o) && (t = i.getAttribute(o)), t;
  }, r.g = function(e) {
    return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : e === 0 ? "popstate" : e > 0 ? "back" : "forward";
  }, ce(n, [{ key: "current", get: function() {
    return this.m[this.P];
  } }, { key: "previous", get: function() {
    return this.P < 1 ? null : this.m[this.P - 1];
  } }, { key: "size", get: function() {
    return this.m.length;
  } }]), n;
})(), pe = new Ae(), J = function(n, r) {
  try {
    var e = (function() {
      if (!r.next.html) return Promise.resolve(n).then(function(t) {
        var i = r.next;
        if (t) {
          var o = U.toElement(t.html);
          i.namespace = U.getNamespace(o), i.container = U.getContainer(o), i.url = t.url, i.html = t.html, pe.update({ ns: i.namespace });
          var c = U.toDocument(t.html);
          document.title = c.title;
        }
      });
    })();
    return Promise.resolve(e && e.then ? e.then(function() {
    }) : void 0);
  } catch (t) {
    return Promise.reject(t);
  }
}, ve = function n(r, e, t) {
  return r instanceof RegExp ? (function(i, o) {
    if (!o) return i;
    for (var c = /\((?:\?<(.*?)>)?(?!\?)/g, s = 0, a = c.exec(i.source); a; ) o.push({ name: a[1] || s++, prefix: "", suffix: "", modifier: "", pattern: "" }), a = c.exec(i.source);
    return i;
  })(r, e) : Array.isArray(r) ? (function(i, o, c) {
    var s = i.map(function(a) {
      return n(a, o, c).source;
    });
    return new RegExp("(?:".concat(s.join("|"), ")"), fe(c));
  })(r, e, t) : (function(i, o, c) {
    return (function(s, a, u) {
      u === void 0 && (u = {});
      for (var l = u.strict, h = l !== void 0 && l, f = u.start, y = f === void 0 || f, d = u.end, p = d === void 0 || d, b = u.encode, w = b === void 0 ? function($) {
        return $;
      } : b, S = u.delimiter, E = S === void 0 ? "/#?" : S, A = u.endsWith, j = "[".concat(F(A === void 0 ? "" : A), "]|$"), O = "[".concat(F(E), "]"), L = y ? "^" : "", H = 0, k = s; H < k.length; H++) {
        var m = k[H];
        if (typeof m == "string") L += F(w(m));
        else {
          var T = F(w(m.prefix)), v = F(w(m.suffix));
          if (m.pattern) if (a && a.push(m), T || v) if (m.modifier === "+" || m.modifier === "*") {
            var P = m.modifier === "*" ? "?" : "";
            L += "(?:".concat(T, "((?:").concat(m.pattern, ")(?:").concat(v).concat(T, "(?:").concat(m.pattern, "))*)").concat(v, ")").concat(P);
          } else L += "(?:".concat(T, "(").concat(m.pattern, ")").concat(v, ")").concat(m.modifier);
          else L += m.modifier === "+" || m.modifier === "*" ? "((?:".concat(m.pattern, ")").concat(m.modifier, ")") : "(".concat(m.pattern, ")").concat(m.modifier);
          else L += "(?:".concat(T).concat(v, ")").concat(m.modifier);
        }
      }
      if (p) h || (L += "".concat(O, "?")), L += u.endsWith ? "(?=".concat(j, ")") : "$";
      else {
        var g = s[s.length - 1], q = typeof g == "string" ? O.indexOf(g[g.length - 1]) > -1 : g === void 0;
        h || (L += "(?:".concat(O, "(?=").concat(j, "))?")), q || (L += "(?=".concat(O, "|").concat(j, ")"));
      }
      return new RegExp(L, fe(u));
    })((function(s, a) {
      a === void 0 && (a = {});
      for (var u = (function(v) {
        for (var P = [], g = 0; g < v.length; ) {
          var q = v[g];
          if (q !== "*" && q !== "+" && q !== "?") if (q !== "\\") if (q !== "{") if (q !== "}") if (q !== ":") if (q !== "(") P.push({ type: "CHAR", index: g, value: v[g++] });
          else {
            var $ = 1, Q = "";
            if (v[x = g + 1] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(x));
            for (; x < v.length; ) if (v[x] !== "\\") {
              if (v[x] === ")") {
                if (--$ == 0) {
                  x++;
                  break;
                }
              } else if (v[x] === "(" && ($++, v[x + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(x));
              Q += v[x++];
            } else Q += v[x++] + v[x++];
            if ($) throw new TypeError("Unbalanced pattern at ".concat(g));
            if (!Q) throw new TypeError("Missing pattern at ".concat(g));
            P.push({ type: "PATTERN", index: g, value: Q }), g = x;
          }
          else {
            for (var V = "", x = g + 1; x < v.length; ) {
              var I = v.charCodeAt(x);
              if (!(I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || I === 95)) break;
              V += v[x++];
            }
            if (!V) throw new TypeError("Missing parameter name at ".concat(g));
            P.push({ type: "NAME", index: g, value: V }), g = x;
          }
          else P.push({ type: "CLOSE", index: g, value: v[g++] });
          else P.push({ type: "OPEN", index: g, value: v[g++] });
          else P.push({ type: "ESCAPED_CHAR", index: g++, value: v[g++] });
          else P.push({ type: "MODIFIER", index: g, value: v[g++] });
        }
        return P.push({ type: "END", index: g, value: "" }), P;
      })(s), l = a.prefixes, h = l === void 0 ? "./" : l, f = "[^".concat(F(a.delimiter || "/#?"), "]+?"), y = [], d = 0, p = 0, b = "", w = function(v) {
        if (p < u.length && u[p].type === v) return u[p++].value;
      }, S = function(v) {
        var P = w(v);
        if (P !== void 0) return P;
        var g = u[p], q = g.index;
        throw new TypeError("Unexpected ".concat(g.type, " at ").concat(q, ", expected ").concat(v));
      }, E = function() {
        for (var v, P = ""; v = w("CHAR") || w("ESCAPED_CHAR"); ) P += v;
        return P;
      }; p < u.length; ) {
        var A = w("CHAR"), j = w("NAME"), O = w("PATTERN");
        if (j || O) h.indexOf(H = A || "") === -1 && (b += H, H = ""), b && (y.push(b), b = ""), y.push({ name: j || d++, prefix: H, suffix: "", pattern: O || f, modifier: w("MODIFIER") || "" });
        else {
          var L = A || w("ESCAPED_CHAR");
          if (L) b += L;
          else if (b && (y.push(b), b = ""), w("OPEN")) {
            var H = E(), k = w("NAME") || "", m = w("PATTERN") || "", T = E();
            S("CLOSE"), y.push({ name: k || (m ? d++ : ""), pattern: k && !m ? f : m, prefix: H, suffix: T, modifier: w("MODIFIER") || "" });
          } else S("END");
        }
      }
      return y;
    })(i, c), o, c);
  })(r, e, t);
}, Te = { __proto__: null, update: J, nextTick: function() {
  return new Promise(function(n) {
    window.requestAnimationFrame(n);
  });
}, pathToRegexp: ve }, me = function() {
  return window.location.origin;
}, K = function(n) {
  return n === void 0 && (n = window.location.href), N(n).port;
}, N = function(n) {
  var r, e = n.match(/:\d+/);
  if (e === null) /^http/.test(n) && (r = 80), /^https/.test(n) && (r = 443);
  else {
    var t = e[0].substring(1);
    r = parseInt(t, 10);
  }
  var i, o = n.replace(me(), ""), c = {}, s = o.indexOf("#");
  s >= 0 && (i = o.slice(s + 1), o = o.slice(0, s));
  var a = o.indexOf("?");
  return a >= 0 && (c = ge(o.slice(a + 1)), o = o.slice(0, a)), { hash: i, path: o, port: r, query: c };
}, ge = function(n) {
  return n.split("&").reduce(function(r, e) {
    var t = e.split("=");
    return r[t[0]] = t[1], r;
  }, {});
}, ie = function(n) {
  return n === void 0 && (n = window.location.href), n.replace(/(\/#.*|\/|#.*)$/, "");
}, Se = { __proto__: null, getHref: function() {
  return window.location.href;
}, getAbsoluteHref: function(n, r) {
  return r === void 0 && (r = document.baseURI), new URL(n, r).href;
}, getOrigin: me, getPort: K, getPath: function(n) {
  return n === void 0 && (n = window.location.href), N(n).path;
}, getQuery: function(n, r) {
  return r === void 0 && (r = !1), r ? JSON.stringify(N(n).query) : N(n).query;
}, getHash: function(n) {
  return N(n).hash;
}, parse: N, parseQuery: ge, clean: ie };
function He(n, r, e, t, i) {
  return r === void 0 && (r = 2e3), new Promise(function(o, c) {
    var s = new XMLHttpRequest();
    s.onreadystatechange = function() {
      if (s.readyState === XMLHttpRequest.DONE) {
        if (s.status === 200) {
          var a = s.responseURL !== "" && s.responseURL !== n ? s.responseURL : n;
          o({ html: s.responseText, url: R({ href: a }, N(a)) }), t.update(n, { status: "fulfilled", target: a });
        } else if (s.status) {
          var u = { status: s.status, statusText: s.statusText };
          e(n, u), c(u), t.update(n, { status: "rejected" });
        }
      }
    }, s.ontimeout = function() {
      var a = new Error("Timeout error [" + r + "]");
      e(n, a), c(a), t.update(n, { status: "rejected" });
    }, s.onerror = function() {
      var a = new Error("Fetch error");
      e(n, a), c(a), t.update(n, { status: "rejected" });
    }, s.open("GET", n), s.timeout = r, s.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), s.setRequestHeader("x-barba", "yes"), i.all().forEach(function(a, u) {
      s.setRequestHeader(u, a);
    }), s.send();
  });
}
function ke(n) {
  return !!n && (typeof n == "object" || typeof n == "function") && typeof n.then == "function";
}
function D(n, r) {
  return r === void 0 && (r = {}), function() {
    var e = arguments, t = !1, i = new Promise(function(o, c) {
      r.async = function() {
        return t = !0, function(a, u) {
          a ? c(a) : o(u);
        };
      };
      var s = n.apply(r, [].slice.call(e));
      t || (ke(s) ? s.then(o, c) : o(s));
    });
    return i;
  };
}
var C = new (/* @__PURE__ */ (function(n) {
  function r() {
    var t;
    return (t = n.call(this) || this).logger = new B("@barba/core"), t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], t.registered = /* @__PURE__ */ new Map(), t.init(), t;
  }
  Y(r, n);
  var e = r.prototype;
  return e.init = function() {
    var t = this;
    this.registered.clear(), this.all.forEach(function(i) {
      t[i] || (t[i] = function(o, c) {
        t.registered.has(i) || t.registered.set(i, /* @__PURE__ */ new Set()), t.registered.get(i).add({ ctx: c || {}, fn: o });
      });
    });
  }, e.do = function(t) {
    var i = arguments, o = this;
    if (this.registered.has(t)) {
      var c = Promise.resolve();
      return this.registered.get(t).forEach(function(s) {
        c = c.then(function() {
          return D(s.fn, s.ctx).apply(void 0, [].slice.call(i, 1));
        });
      }), c.catch(function(s) {
        o.logger.debug("Hook error [" + t + "]"), o.logger.error(s);
      });
    }
    return Promise.resolve();
  }, e.clear = function() {
    var t = this;
    this.all.forEach(function(i) {
      delete t[i];
    }), this.init();
  }, e.help = function() {
    this.logger.info("Available hooks: " + this.all.join(","));
    var t = [];
    this.registered.forEach(function(i, o) {
      return t.push(o);
    }), this.logger.info("Registered hooks: " + t.join(","));
  }, r;
})(Le))(), ye = /* @__PURE__ */ (function() {
  function n(r) {
    if (this.k = void 0, this.O = [], typeof r == "boolean") this.k = r;
    else {
      var e = Array.isArray(r) ? r : [r];
      this.O = e.map(function(t) {
        return ve(t);
      });
    }
  }
  return n.prototype.checkHref = function(r) {
    if (typeof this.k == "boolean") return this.k;
    var e = N(r).path;
    return this.O.some(function(t) {
      return t.exec(e) !== null;
    });
  }, n;
})(), qe = /* @__PURE__ */ (function(n) {
  function r(t) {
    var i;
    return (i = n.call(this, t) || this).T = /* @__PURE__ */ new Map(), i;
  }
  Y(r, n);
  var e = r.prototype;
  return e.set = function(t, i, o, c, s) {
    return this.T.set(t, { action: o, request: i, status: c, target: s ?? t }), { action: o, request: i, status: c, target: s };
  }, e.get = function(t) {
    return this.T.get(t);
  }, e.getRequest = function(t) {
    return this.T.get(t).request;
  }, e.getAction = function(t) {
    return this.T.get(t).action;
  }, e.getStatus = function(t) {
    return this.T.get(t).status;
  }, e.getTarget = function(t) {
    return this.T.get(t).target;
  }, e.has = function(t) {
    return !this.checkHref(t) && this.T.has(t);
  }, e.delete = function(t) {
    return this.T.delete(t);
  }, e.update = function(t, i) {
    var o = R({}, this.T.get(t), i);
    return this.T.set(t, o), o;
  }, r;
})(ye), Oe = /* @__PURE__ */ (function() {
  function n() {
    this.A = /* @__PURE__ */ new Map();
  }
  var r = n.prototype;
  return r.set = function(e, t) {
    return this.A.set(e, t), { name: t };
  }, r.get = function(e) {
    return this.A.get(e);
  }, r.all = function() {
    return this.A;
  }, r.has = function(e) {
    return this.A.has(e);
  }, r.delete = function(e) {
    return this.A.delete(e);
  }, r.clear = function() {
    return this.A.clear();
  }, n;
})(), Re = function() {
  return !window.history.pushState;
}, Me = function(n) {
  return !n.el || !n.href;
}, je = function(n) {
  var r = n.event;
  return r.which > 1 || r.metaKey || r.ctrlKey || r.shiftKey || r.altKey;
}, Ce = function(n) {
  var r = n.el;
  return r.hasAttribute("target") && r.target === "_blank";
}, _e = function(n) {
  var r = n.el;
  return r.protocol !== void 0 && window.location.protocol !== r.protocol || r.hostname !== void 0 && window.location.hostname !== r.hostname;
}, Ne = function(n) {
  var r = n.el;
  return r.port !== void 0 && K() !== K(r.href);
}, Ie = function(n) {
  var r = n.el;
  return r.getAttribute && typeof r.getAttribute("download") == "string";
}, Be = function(n) {
  return n.el.hasAttribute(M.prefix + "-" + M.prevent);
}, Ue = function(n) {
  return !!n.el.closest("[" + M.prefix + "-" + M.prevent + '="all"]');
}, Fe = function(n) {
  var r = n.href;
  return ie(r) === ie() && K(r) === K();
}, De = /* @__PURE__ */ (function(n) {
  function r(t) {
    var i;
    return (i = n.call(this, t) || this).suite = [], i.tests = /* @__PURE__ */ new Map(), i.init(), i;
  }
  Y(r, n);
  var e = r.prototype;
  return e.init = function() {
    this.add("pushState", Re), this.add("exists", Me), this.add("newTab", je), this.add("blank", Ce), this.add("corsDomain", _e), this.add("corsPort", Ne), this.add("download", Ie), this.add("preventSelf", Be), this.add("preventAll", Ue), this.add("sameUrl", Fe, !1);
  }, e.add = function(t, i, o) {
    o === void 0 && (o = !0), this.tests.set(t, i), o && this.suite.push(t);
  }, e.run = function(t, i, o, c) {
    return this.tests.get(t)({ el: i, event: o, href: c });
  }, e.checkLink = function(t, i, o) {
    var c = this;
    return this.suite.some(function(s) {
      return c.run(s, t, i, o);
    });
  }, r;
})(ye), Z = /* @__PURE__ */ (function(n) {
  function r(e, t) {
    var i;
    return t === void 0 && (t = "Barba error"), (i = n.call.apply(n, [this].concat([].slice.call(arguments, 2))) || this).error = void 0, i.label = void 0, i.error = e, i.label = t, Error.captureStackTrace && Error.captureStackTrace(xe(i), r), i.name = "BarbaError", i;
  }
  return Y(r, n), r;
})(/* @__PURE__ */ ne(Error)), We = /* @__PURE__ */ (function() {
  function n(e) {
    e === void 0 && (e = []), this.logger = new B("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], e && (this.all = this.all.concat(e)), this.update();
  }
  var r = n.prototype;
  return r.add = function(e, t) {
    e === "rule" ? this.j.splice(t.position || 0, 0, t.value) : this.all.push(t), this.update();
  }, r.resolve = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var o = t.once ? this.once : this.page;
    o = o.filter(t.self ? function(f) {
      return f.name && f.name === "self";
    } : function(f) {
      return !f.name || f.name !== "self";
    });
    var c = /* @__PURE__ */ new Map(), s = o.find(function(f) {
      var y = !0, d = {};
      return t.self && f.name === "self" ? (c.set(f, d), !0) : (i.j.reverse().forEach(function(p) {
        y && (y = i.M(f, p, e, d), f.from && f.to && (y = i.M(f, p, e, d, "from") && i.M(f, p, e, d, "to")), f.from && !f.to && (y = i.M(f, p, e, d, "from")), !f.from && f.to && (y = i.M(f, p, e, d, "to")));
      }), c.set(f, d), y);
    }), a = c.get(s), u = [];
    if (u.push(t.once ? "once" : "page"), t.self && u.push("self"), a) {
      var l, h = [s];
      Object.keys(a).length > 0 && h.push(a), (l = this.logger).info.apply(l, ["Transition found [" + u.join(",") + "]"].concat(h));
    } else this.logger.info("No transition found [" + u.join(",") + "]");
    return s;
  }, r.update = function() {
    var e = this;
    this.all = this.all.map(function(t) {
      return e.N(t);
    }).sort(function(t, i) {
      return t.priority - i.priority;
    }).reverse().map(function(t) {
      return delete t.priority, t;
    }), this.page = this.all.filter(function(t) {
      return t.leave !== void 0 || t.enter !== void 0;
    }), this.once = this.all.filter(function(t) {
      return t.once !== void 0;
    });
  }, r.M = function(e, t, i, o, c) {
    var s = !0, a = !1, u = e, l = t.name, h = l, f = l, y = l, d = c ? u[c] : u, p = c === "to" ? i.next : i.current;
    if (c ? d && d[l] : d[l]) {
      switch (t.type) {
        case "strings":
        default:
          var b = Array.isArray(d[h]) ? d[h] : [d[h]];
          p[h] && b.indexOf(p[h]) !== -1 && (a = !0), b.indexOf(p[h]) === -1 && (s = !1);
          break;
        case "object":
          var w = Array.isArray(d[f]) ? d[f] : [d[f]];
          p[f] ? (p[f].name && w.indexOf(p[f].name) !== -1 && (a = !0), w.indexOf(p[f].name) === -1 && (s = !1)) : s = !1;
          break;
        case "function":
          d[y](i) ? a = !0 : s = !1;
      }
      a && (c ? (o[c] = o[c] || {}, o[c][l] = u[c][l]) : o[l] = u[l]);
    }
    return s;
  }, r.S = function(e, t, i) {
    var o = 0;
    return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (o += Math.pow(10, i), e.from && e.from[t] && (o += 1), e.to && e.to[t] && (o += 2)), o;
  }, r.N = function(e) {
    var t = this;
    e.priority = 0;
    var i = 0;
    return this.j.forEach(function(o, c) {
      i += t.S(e, o.name, c + 1);
    }), e.priority = i, e;
  }, n;
})();
function X(n, r) {
  try {
    var e = n();
  } catch (t) {
    return r(t);
  }
  return e && e.then ? e.then(void 0, r) : e;
}
var $e = /* @__PURE__ */ (function() {
  function n(e) {
    e === void 0 && (e = []), this.logger = new B("@barba/core"), this.store = void 0, this.C = !1, this.store = new We(e);
  }
  var r = n.prototype;
  return r.get = function(e, t) {
    return this.store.resolve(e, t);
  }, r.doOnce = function(e) {
    var t = e.data, i = e.transition;
    try {
      var o = function() {
        c.C = !1;
      }, c = this, s = i || {};
      c.C = !0;
      var a = X(function() {
        return Promise.resolve(c.L("beforeOnce", t, s)).then(function() {
          return Promise.resolve(c.once(t, s)).then(function() {
            return Promise.resolve(c.L("afterOnce", t, s)).then(function() {
            });
          });
        });
      }, function(u) {
        c.C = !1, c.logger.debug("Transition error [before/after/once]"), c.logger.error(u);
      });
      return Promise.resolve(a && a.then ? a.then(o) : o());
    } catch (u) {
      return Promise.reject(u);
    }
  }, r.doPage = function(e) {
    var t = e.data, i = e.transition, o = e.page, c = e.wrapper;
    try {
      var s = function(f) {
        a.C = !1;
      }, a = this, u = i || {}, l = u.sync === !0 || !1;
      a.C = !0;
      var h = X(function() {
        function f() {
          return Promise.resolve(a.L("before", t, u)).then(function() {
            function d(b) {
              return Promise.resolve(a.remove(t)).then(function() {
                return Promise.resolve(a.L("after", t, u)).then(function() {
                });
              });
            }
            var p = (function() {
              if (l) return X(function() {
                return Promise.resolve(a.add(t, c)).then(function() {
                  return Promise.resolve(a.L("beforeLeave", t, u)).then(function() {
                    return Promise.resolve(a.L("beforeEnter", t, u)).then(function() {
                      return Promise.resolve(Promise.all([a.leave(t, u), a.enter(t, u)])).then(function() {
                        return Promise.resolve(a.L("afterLeave", t, u)).then(function() {
                          return Promise.resolve(a.L("afterEnter", t, u)).then(function() {
                          });
                        });
                      });
                    });
                  });
                });
              }, function(E) {
                if (a.H(E)) throw new Z(E, "Transition error [sync]");
              });
              var b = function(E) {
                return X(function() {
                  var A = (function() {
                    if (w !== !1) return Promise.resolve(a.add(t, c)).then(function() {
                      return Promise.resolve(a.L("beforeEnter", t, u)).then(function() {
                        return Promise.resolve(a.enter(t, u, w)).then(function() {
                          return Promise.resolve(a.L("afterEnter", t, u)).then(function() {
                          });
                        });
                      });
                    });
                  })();
                  if (A && A.then) return A.then(function() {
                  });
                }, function(A) {
                  if (a.H(A)) throw new Z(A, "Transition error [before/after/enter]");
                });
              }, w = !1, S = X(function() {
                return Promise.resolve(a.L("beforeLeave", t, u)).then(function() {
                  return Promise.resolve(Promise.all([a.leave(t, u), J(o, t)]).then(function(E) {
                    return E[0];
                  })).then(function(E) {
                    return w = E, Promise.resolve(a.L("afterLeave", t, u)).then(function() {
                    });
                  });
                });
              }, function(E) {
                if (a.H(E)) throw new Z(E, "Transition error [before/after/leave]");
              });
              return S && S.then ? S.then(b) : b();
            })();
            return p && p.then ? p.then(d) : d();
          });
        }
        var y = (function() {
          if (l) return Promise.resolve(J(o, t)).then(function() {
          });
        })();
        return y && y.then ? y.then(f) : f();
      }, function(f) {
        throw a.C = !1, f.name && f.name === "BarbaError" ? (a.logger.debug(f.label), a.logger.error(f.error), f) : (a.logger.debug("Transition error [page]"), a.logger.error(f), f);
      });
      return Promise.resolve(h && h.then ? h.then(s) : s());
    } catch (f) {
      return Promise.reject(f);
    }
  }, r.once = function(e, t) {
    try {
      return Promise.resolve(C.do("once", e, t)).then(function() {
        return t.once ? D(t.once, t)(e) : Promise.resolve();
      });
    } catch (i) {
      return Promise.reject(i);
    }
  }, r.leave = function(e, t) {
    try {
      return Promise.resolve(C.do("leave", e, t)).then(function() {
        return t.leave ? D(t.leave, t)(e) : Promise.resolve();
      });
    } catch (i) {
      return Promise.reject(i);
    }
  }, r.enter = function(e, t, i) {
    try {
      return Promise.resolve(C.do("enter", e, t)).then(function() {
        return t.enter ? D(t.enter, t)(e, i) : Promise.resolve();
      });
    } catch (o) {
      return Promise.reject(o);
    }
  }, r.add = function(e, t) {
    try {
      return U.addContainer(e.next.container, t), C.do("nextAdded", e), Promise.resolve();
    } catch (i) {
      return Promise.reject(i);
    }
  }, r.remove = function(e) {
    try {
      return U.removeContainer(e.current.container), C.do("currentRemoved", e), Promise.resolve();
    } catch (t) {
      return Promise.reject(t);
    }
  }, r.H = function(e) {
    return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status;
  }, r.L = function(e, t, i) {
    try {
      return Promise.resolve(C.do(e, t, i)).then(function() {
        return i[e] ? D(i[e], i)(t) : Promise.resolve();
      });
    } catch (o) {
      return Promise.reject(o);
    }
  }, ce(n, [{ key: "isRunning", get: function() {
    return this.C;
  }, set: function(e) {
    this.C = e;
  } }, { key: "hasOnce", get: function() {
    return this.store.once.length > 0;
  } }, { key: "hasSelf", get: function() {
    return this.store.all.some(function(e) {
      return e.name === "self";
    });
  } }, { key: "shouldWait", get: function() {
    return this.store.all.some(function(e) {
      return e.to && !e.to.route || e.sync;
    });
  } }]), n;
})(), Xe = /* @__PURE__ */ (function() {
  function n(r) {
    var e = this;
    this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), r.length !== 0 && (r.forEach(function(t) {
      e.byNamespace.set(t.namespace, t);
    }), this.names.forEach(function(t) {
      C[t](e._(t));
    }));
  }
  return n.prototype._ = function(r) {
    var e = this;
    return function(t) {
      var i = r.match(/enter/i) ? t.next : t.current, o = e.byNamespace.get(i.namespace);
      return o && o[r] ? D(o[r], o)(t) : Promise.resolve();
    };
  }, n;
})();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(n) {
  var r = this;
  do {
    if (r.matches(n)) return r;
    r = r.parentElement || r.parentNode;
  } while (r !== null && r.nodeType === 1);
  return null;
});
var ze = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } }, W = new (/* @__PURE__ */ (function() {
  function n() {
    this.version = "2.10.3", this.schemaPage = ze, this.Logger = B, this.logger = new B("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = C, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = U, this.helpers = Te, this.history = pe, this.request = He, this.url = Se, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0;
  }
  var r = n.prototype;
  return r.use = function(e, t) {
    var i = this.plugins;
    i.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : typeof e.install == "function" ? (e.install(this, t), i.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.');
  }, r.init = function(e) {
    var t = e === void 0 ? {} : e, i = t.transitions, o = i === void 0 ? [] : i, c = t.views, s = c === void 0 ? [] : c, a = t.schema, u = a === void 0 ? M : a, l = t.requestError, h = t.timeout, f = h === void 0 ? 2e3 : h, y = t.cacheIgnore, d = y !== void 0 && y, p = t.cacheFirstPage, b = p !== void 0 && p, w = t.prefetchIgnore, S = w !== void 0 && w, E = t.preventRunning, A = E !== void 0 && E, j = t.prevent, O = j === void 0 ? null : j, L = t.debug, H = t.logLevel;
    if (B.setLevel((L !== void 0 && L) === !0 ? "debug" : H === void 0 ? "off" : H), this.logger.info(this.version), Object.keys(u).forEach(function(T) {
      M[T] && (M[T] = u[T]);
    }), this.B = l, this.timeout = f, this.cacheIgnore = d, this.cacheFirstPage = b, this.prefetchIgnore = S, this.preventRunning = A, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
    this.I();
    var k = this.data.current;
    if (!k.container) throw new Error("[@barba/core] No Barba container found");
    if (this.cache = new qe(d), this.headers = new Oe(), this.prevent = new De(S), this.transitions = new $e(o), this.views = new Xe(s), O !== null) {
      if (typeof O != "function") throw new Error("[@barba/core] Prevent should be a function");
      this.prevent.add("preventCustom", O);
    }
    this.history.init(k.url.href, k.namespace), b && this.cache.set(k.url.href, Promise.resolve({ html: k.html, url: k.url }), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach(function(T) {
      return T.init();
    });
    var m = this.data;
    m.trigger = "barba", m.next = m.current, m.current = R({}, this.schemaPage), this.hooks.do("ready", m), this.once(m), this.I();
  }, r.destroy = function() {
    this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = [];
  }, r.force = function(e) {
    window.location.assign(e);
  }, r.go = function(e, t, i) {
    var o;
    if (t === void 0 && (t = "barba"), this.F = null, this.transitions.isRunning) this.force(e);
    else if (!(o = t === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(e, !0) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf) return t = this.history.change(this.cache.has(e) ? this.cache.get(e).target : e, t, i), i && (i.stopPropagation(), i.preventDefault()), this.page(e, t, i ?? void 0, o);
  }, r.once = function(e) {
    try {
      var t = this;
      return Promise.resolve(t.hooks.do("beforeEnter", e)).then(function() {
        function i() {
          return Promise.resolve(t.hooks.do("afterEnter", e)).then(function() {
          });
        }
        var o = (function() {
          if (t.transitions.hasOnce) {
            var c = t.transitions.get(e, { once: !0 });
            return Promise.resolve(t.transitions.doOnce({ transition: c, data: e })).then(function() {
            });
          }
        })();
        return o && o.then ? o.then(i) : i();
      });
    } catch (i) {
      return Promise.reject(i);
    }
  }, r.page = function(e, t, i, o) {
    try {
      var c, s = function() {
        var h = a.data;
        return Promise.resolve(a.hooks.do("page", h)).then(function() {
          var f = (function(y, d) {
            try {
              var p = (b = a.transitions.get(h, { once: !1, self: o }), Promise.resolve(a.transitions.doPage({ data: h, page: c, transition: b, wrapper: a.q })).then(function() {
                a.I();
              }));
            } catch {
              return d();
            }
            var b;
            return p && p.then ? p.then(void 0, d) : p;
          })(0, function() {
            B.getLevel() === 0 && a.force(h.next.url.href);
          });
          if (f && f.then) return f.then(function() {
          });
        });
      }, a = this;
      if (a.data.next.url = R({ href: e }, a.url.parse(e)), a.data.trigger = t, a.data.event = i, a.cache.has(e)) c = a.cache.update(e, { action: "click" }).request;
      else {
        var u = a.request(e, a.timeout, a.onRequestError.bind(a, t), a.cache, a.headers);
        u.then(function(h) {
          h.url.href !== e && a.history.add(h.url.href, t, "replace");
        }), c = a.cache.set(e, u, "click", "pending").request;
      }
      var l = (function() {
        if (a.transitions.shouldWait) return Promise.resolve(J(c, a.data)).then(function() {
        });
      })();
      return Promise.resolve(l && l.then ? l.then(s) : s());
    } catch (h) {
      return Promise.reject(h);
    }
  }, r.onRequestError = function(e) {
    this.transitions.isRunning = !1;
    var t = [].slice.call(arguments, 1), i = t[0], o = t[1], c = this.cache.getAction(i);
    return this.cache.delete(i), this.B && this.B(e, c, i, o) === !1 || c === "click" && this.force(i), !1;
  }, r.prefetch = function(e) {
    var t = this;
    e = this.url.getAbsoluteHref(e), this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch(function(i) {
      t.logger.error(i);
    }), "prefetch", "pending");
  }, r.G = function() {
    this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X);
  }, r.J = function() {
    this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X);
  }, r.U = function(e) {
    var t = this, i = this.W(e);
    if (i) {
      var o = this.url.getAbsoluteHref(this.dom.getHref(i));
      this.prevent.checkHref(o) || this.cache.has(o) || this.cache.set(o, this.request(o, this.timeout, this.onRequestError.bind(this, i), this.cache, this.headers).catch(function(c) {
        t.logger.error(c);
      }), "enter", "pending");
    }
  }, r.$ = function(e) {
    var t = this.W(e);
    if (t) {
      if (this.transitions.isRunning && this.preventRunning) return e.preventDefault(), void e.stopPropagation();
      this.F = e, this.go(this.dom.getHref(t), t, e);
    }
  }, r.X = function(e) {
    this.go(this.url.getHref(), "popstate", e);
  }, r.W = function(e) {
    for (var t = e.target; t && !this.dom.getHref(t); ) t = t.parentNode;
    if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t))) return t;
  }, r.I = function() {
    var e = this.url.getHref(), t = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: R({ href: e }, this.url.parse(e)) };
    this.D = { current: t, event: void 0, next: R({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data);
  }, ce(n, [{ key: "data", get: function() {
    return this.D;
  } }, { key: "wrapper", get: function() {
    return this.q;
  } }]), n;
})())();
function oe(n, r) {
  !n || !r || n.classList.add(r);
}
function se(n, r) {
  !n || !r || n.classList.remove(r);
}
function we(n, r = document) {
  return n ? typeof n == "string" ? Array.from(r.querySelectorAll(n)) : n instanceof Element ? [n] : n instanceof NodeList || n instanceof HTMLCollection ? Array.from(n) : Array.isArray(n) ? n.filter((e) => e instanceof Element) : [] : [];
}
function G(n, r) {
  return !n || !r ? !1 : (n instanceof Element ? [n] : n instanceof NodeList || n instanceof HTMLCollection || Array.isArray(n) ? Array.from(n) : []).some((t) => t?.classList?.contains(r));
}
function ae(n = null) {
  const r = n?.next?.html, e = n?.current?.html;
  if (!r && !e) return null;
  const t = new DOMParser();
  return {
    nextHTML: r ? t.parseFromString(r, "text/html") : null,
    currentHTML: e ? t.parseFromString(e, "text/html") : null
  };
}
function Ke() {
  window.scrollTo(0, 0), typeof ScrollTrigger < "u" && ScrollTrigger.getAll().forEach((n) => n.kill()), gsap.killTweensOf("*");
}
function Qe(n, r = () => {
}) {
  const e = n?.current?.container, t = n?.next?.container;
  if (!e || !t || typeof gsap > "u") {
    r();
    return;
  }
  gsap.set(t, { opacity: 0, position: "absolute" }), gsap.to(e, {
    opacity: 0,
    duration: 0.5,
    ease: "expo.out",
    onComplete() {
      Ke(), gsap.to(t, {
        opacity: 1,
        delay: 0.1,
        duration: 0.5,
        ease: "expo.out",
        onStart: () => {
          r(), gsap.set(t, { clearProps: "position, opacity" });
        }
      });
    }
  });
}
function Ge(n, r) {
  const e = n?.getAttribute("href");
  if (!n || !e || r && (r.which > 1 || r.metaKey || r.ctrlKey || r.shiftKey || r.altKey) || n.target === "_blank" || n.hasAttribute("download") || n.rel === "external" || !e.startsWith("/") && !e.startsWith(window.location.origin) && (e.startsWith("#") || /^(mailto|tel|sms|file):/.test(e)))
    return !1;
  try {
    const t = new URL(e, window.location.href);
    if (t.pathname === window.location.pathname && t.search === window.location.search && t.hash !== "" || t.hostname !== window.location.hostname)
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
function Je(n) {
  if (!n) return;
  const r = n.querySelectorAll('link[rel="stylesheet"]'), e = n.querySelectorAll("script[src]"), t = document.head;
  r.forEach((i) => {
    const o = i.getAttribute("id"), c = i.getAttribute("href");
    if (o) {
      if (!document.getElementById(o)) {
        const s = i.cloneNode(!0);
        t.appendChild(s);
      }
    } else if (c && !Array.from(t.querySelectorAll('link[rel="stylesheet"]')).some((a) => a.getAttribute("href") === c)) {
      const a = i.cloneNode(!0);
      t.appendChild(a);
    }
  }), e.forEach((i) => {
    const o = i.getAttribute("src"), c = i.getAttribute("id");
    if (!(c && document.getElementById(c) || o && Array.from(document.scripts).some((a) => a.getAttribute("src") === o))) {
      const a = document.createElement("script");
      Array.from(i.attributes).forEach((u) => {
        a.setAttribute(u.name, u.value);
      }), a.async = !1, document.head.appendChild(a);
    }
  });
}
function ee(n, r = ".header-content-area", e = ".footer-content-area") {
  const t = ae(n);
  if (console.log("UF"), !t?.nextHTML) return;
  const i = t.nextHTML.querySelector(r), o = t.nextHTML.querySelector(e), c = document.querySelector(r), s = document.querySelector(e);
  i && c && (c.innerHTML = i.innerHTML), o && s && (s.innerHTML = o.innerHTML);
}
function he(n) {
  return n ? n.closest("#wpadminbar") ? (W.destroy(), !0) : G(n, "prevent-pt") || G(n, "prevent-transition") ? !0 : n.closest(".comments-area") || G(we("body")[0], "elementor-editor-active") ? (W.destroy(), !0) : !1 : !0;
}
function be(n, r, e = !0) {
  const t = n.querySelectorAll(":scope > .current-menu-parent, :scope > .current-menu-item, :scope > .active");
  let i = t.length > 0 ? t[0] : null;
  return !i && e && r.length > 0 && (i = r[0]), i ? {
    width: i.offsetWidth,
    height: i.offsetHeight,
    left: i.offsetLeft,
    top: i.offsetTop,
    current: i,
    hasActive: !!t.length
  } : { width: 0, height: 0, left: 0, top: 0, current: null };
}
function le(n) {
  let r = n, e = n.querySelectorAll(":scope > li");
  if (!e.length) {
    const u = n.querySelector("ul");
    if (u)
      r = u, e = u.querySelectorAll(":scope > li");
    else
      return !1;
  }
  if (oe(r, "has-nav-slide-ind"), !r.querySelector(".nav-indicator-back")) {
    const u = document.createElement("span"), l = document.createElement("span");
    u.classList.add("nav-indicator-back"), l.classList.add("nav-indicator-front"), r.appendChild(u), r.appendChild(l);
  }
  const t = r.querySelector(".nav-indicator-back"), i = r.querySelector(".nav-indicator-front"), o = [];
  function c(u = !0, l = !0, h = 0.4) {
    if (typeof gsap > "u") return;
    const f = be(r, e, !0), y = [];
    u && y.push(t), l && y.push(i), gsap.to(y, {
      duration: h,
      ease: "power2.out",
      position: "absolute",
      "pointer-events": "none",
      left: f.left,
      top: f.top,
      width: f.width,
      height: f.height,
      "--opacity": f.hasActive ? 1 : 0
    });
  }
  c(!0, !0, 0);
  let s;
  e.forEach((u) => {
    const l = () => {
      s && clearTimeout(s), !(typeof gsap > "u") && (gsap.killTweensOf(t), gsap.to(t, {
        duration: 0.35,
        ease: "power2.out",
        left: u.offsetLeft,
        top: u.offsetTop,
        width: u.offsetWidth,
        height: u.offsetHeight,
        overwrite: !0
      }), t.classList.add("active"));
    }, h = () => {
      s = setTimeout(() => {
        c(!0, !1), t.classList.remove("active");
      }, 80);
    };
    u.addEventListener("mouseenter", l), u.addEventListener("mouseleave", h), o.push(() => u.removeEventListener("mouseenter", l)), o.push(() => u.removeEventListener("mouseleave", h));
  });
  const a = () => c(!0, !0);
  return window.addEventListener("resize", a), o.push(() => window.removeEventListener("resize", a)), {
    refreshBack() {
      c(!0, !1);
    },
    refreshFront() {
      c(!1, !0);
    },
    refresh() {
      c(!0, !0);
    },
    destroy() {
      s && clearTimeout(s), o.forEach((u) => u()), se(r, "has-nav-slide-ind");
    }
  };
}
function Ye(n = ".has-pt-nav-slide") {
  const r = document.querySelector(n);
  let e = !1;
  return r && (e = le(r)), {
    hasInit: !!(r && e),
    navbarEl: r,
    nav: e,
    add_pt_navbar_slide: le,
    get_current_menu_item_info: be
  };
}
function Ve(n, r) {
  if (!n || !r) return;
  const e = n.querySelectorAll("li"), t = r.querySelectorAll("li");
  e.forEach((i, o) => {
    const c = t[o];
    if (c) {
      i.className = "";
      const s = Array.from(c.classList);
      s.length > 0 && i.classList.add(...s);
    }
  });
}
function et() {
  const n = we('[data-themeic-ajax-template="wrap"]');
  if (!n.length || G(n[0], "initialized-themeic-ajax-pt")) return !1;
  oe(n[0], "initialized-themeic-ajax-pt"), oe(document.documentElement, "has-themeic-pt");
  const r = Ye(), e = [], t = {
    events: {},
    on(s, a) {
      return !s || typeof a != "function" ? this : (this.events[s] || (this.events[s] = []), this.events[s].push(a), this);
    },
    off(s, a) {
      return this.events[s] ? (a ? this.events[s] = this.events[s].filter((u) => u !== a) : delete this.events[s], this) : this;
    },
    emit(s, a) {
      this.events[s] && this.events[s].forEach((u) => u(a));
    },
    offAll(s) {
      return s ? delete this.events[s] : this.events = {}, this;
    }
  };
  W.init({
    debug: !0,
    timeout: 5e3,
    prevent: (s) => he(s.el),
    schema: {
      prefix: "data-themeic-ajax-template",
      wrapper: "wrap",
      container: "container",
      namespace: "name"
    },
    transitions: [
      {
        sync: !0,
        name: "default-transition",
        before(s) {
          const a = ae(s);
          Je(a?.nextHTML), t.emit("before", s);
        },
        leave(s) {
          const a = this.async();
          Qe(s, a), t.emit("leave", s);
        },
        afterEnter(s) {
          t.emit("afterEnter", s), ee(s, null), r.hasInit || (ee(s), ee(s, ".elementor-location-header", ".elementor-location-footer"));
        },
        after(s) {
          const a = ae(s);
          if (t.emit("after", s), document.body.classList.remove("starting-themeic-pt"), typeof elementorFrontend < "u" && elementorFrontend.init(), Ze(a?.nextHTML), r.hasInit) {
            const u = a?.nextHTML?.querySelector(".has-pt-nav-slide");
            Ve(r.navbarEl, u), r.nav?.refresh();
          }
        }
      }
    ]
  });
  const i = (s) => {
    const a = s.target.closest("a");
    a && Ge(a, s) && !he(a) && (document.body.classList.add("starting-themeic-pt"), t.emit("click", s));
  };
  document.addEventListener("click", i), e.push(() => document.removeEventListener("click", i)), document.querySelector(".circle-loader-wrap") || document.body.insertAdjacentHTML("beforeend", '<div class="circle-loader-wrap"><div class="circle-loader-inner"><div class="circle-spinner-loader"></div></div></div>');
  const o = document.querySelector(".circle-loader-wrap");
  o && typeof gsap < "u" && gsap.set(o, { xPercent: -50, yPercent: -50 });
  const c = (s) => {
    !o || typeof gsap > "u" || gsap.to(o, {
      x: s.clientX,
      y: s.clientY,
      duration: 0.5,
      ease: "power2.out"
    });
  };
  return document.addEventListener("mousemove", c), e.push(() => document.removeEventListener("mousemove", c)), {
    on: (s, a) => t.on(s, a),
    off: (s, a) => t.off(s, a),
    destroy: () => {
      W.destroy(), r.nav?.destroy?.(), e.forEach((s) => s()), t.offAll(), se(n[0], "initialized-themeic-ajax-pt"), se(document.documentElement, "has-themeic-pt");
    },
    pt_oject: W
  };
}
function Ze(n) {
  const r = document.querySelector("#wpadminbar");
  if (!r || !n) return;
  const e = n.body.querySelector("#wpadminbar #wp-admin-bar-edit");
  if (!e) return;
  const t = r.querySelector("#wp-admin-bar-edit");
  t && (t.innerHTML = e.innerHTML);
  const i = r.querySelector("#wp-admin-bar-elementor_edit_page > a"), o = e.querySelector("a");
  if (i && o) {
    const c = o.getAttribute("href"), s = de(c, "action", "elementor"), a = de(c, "action", "edit");
    s && i.setAttribute("href", s), a && o.setAttribute("href", a);
  }
}
function de(n, r, e) {
  if (!n || !r) return "";
  try {
    const t = new URL(n, window.location.href);
    return t.searchParams.set(r, e), t.toString();
  } catch {
    return "";
  }
}
export {
  et as initAjaxTrnasition,
  Ye as initNavAni,
  Ve as updateNavItemsClass
};
