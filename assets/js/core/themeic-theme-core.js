function Pe(i, r) {
  for (var e = 0; e < r.length; e++) {
    var t = r[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(i, typeof (n = (function(o, a) {
      if (typeof o != "object" || o === null) return o;
      var c = o[Symbol.toPrimitive];
      if (c !== void 0) {
        var s = c.call(o, "string");
        if (typeof s != "object") return s;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(o);
    })(t.key)) == "symbol" ? n : String(n), t);
  }
  var n;
}
function se(i, r, e) {
  return r && Pe(i.prototype, r), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(i) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t]);
    }
    return i;
  }, R.apply(this, arguments);
}
function V(i, r) {
  i.prototype = Object.create(r.prototype), i.prototype.constructor = i, K(i, r);
}
function te(i) {
  return te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, te(i);
}
function K(i, r) {
  return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, K(i, r);
}
function Ee() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function re(i, r, e) {
  return re = Ee() ? Reflect.construct.bind() : function(t, n, o) {
    var a = [null];
    a.push.apply(a, n);
    var c = new (Function.bind.apply(t, a))();
    return o && K(c, o.prototype), c;
  }, re.apply(null, arguments);
}
function ne(i) {
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
    return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), K(t, e);
  }, ne(i);
}
function xe(i) {
  if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
var _, Ae = function() {
  this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0;
};
(function(i) {
  i[i.off = 0] = "off", i[i.error = 1] = "error", i[i.warning = 2] = "warning", i[i.info = 3] = "info", i[i.debug = 4] = "debug";
})(_ || (_ = {}));
var ae = _.off, U = /* @__PURE__ */ (function() {
  function i(e) {
    this.t = void 0, this.t = e;
  }
  i.getLevel = function() {
    return ae;
  }, i.setLevel = function(e) {
    return ae = _[e];
  };
  var r = i.prototype;
  return r.error = function() {
    this.i(console.error, _.error, [].slice.call(arguments));
  }, r.warn = function() {
    this.i(console.warn, _.warning, [].slice.call(arguments));
  }, r.info = function() {
    this.i(console.info, _.info, [].slice.call(arguments));
  }, r.debug = function() {
    this.i(console.log, _.debug, [].slice.call(arguments));
  }, r.i = function(e, t, n) {
    t <= i.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(n));
  }, i;
})();
function B(i) {
  return i.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function ce(i) {
  return i && i.sensitive ? "" : "i";
}
var j = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, F = new (/* @__PURE__ */ (function() {
  function i() {
    this.o = j, this.u = void 0, this.h = { after: null, before: null, parent: null };
  }
  var r = i.prototype;
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
    var n = this.getContainer() || this.h.before;
    n ? this.l(e, n) : this.h.after ? this.h.after.parentNode.insertBefore(e, this.h.after) : this.h.parent ? this.h.parent.appendChild(e) : t.appendChild(e);
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
    var n = document.getElementsByTagName("head")[0];
    n.insertBefore(t, n.firstChild);
    for (var o, a = document.createElement("a"), c = 1; c < e; c++) a.href = arguments[c], t.href = o = a.href;
    return n.removeChild(t), o;
  }, r.l = function(e, t) {
    t.parentNode.insertBefore(e, t.nextSibling);
  }, r.v = function(e) {
    return this.h = { after: e.nextElementSibling, before: e.previousElementSibling, parent: e.parentElement }, this.h;
  }, i;
})())(), Le = /* @__PURE__ */ (function() {
  function i() {
    this.p = void 0, this.m = [], this.P = -1;
  }
  var r = i.prototype;
  return r.init = function(e, t) {
    this.p = "barba";
    var n = { data: {}, ns: t, scroll: { x: window.scrollX, y: window.scrollY }, url: e };
    this.P = 0, this.m.push(n);
    var o = { from: this.p, index: this.P, states: [].concat(this.m) };
    window.history && window.history.replaceState(o, "", e);
  }, r.change = function(e, t, n) {
    if (n && n.state) {
      var o = n.state, a = o.index;
      t = this.g(this.P - a), this.replace(o.states), this.P = a;
    } else this.add(e, t);
    return t;
  }, r.add = function(e, t, n, o) {
    var a = n ?? this.R(t), c = { data: o ?? {}, ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: e };
    switch (a) {
      case "push":
        this.P = this.size, this.m.push(c);
        break;
      case "replace":
        this.set(this.P, c);
    }
    var s = { from: this.p, index: this.P, states: [].concat(this.m) };
    switch (a) {
      case "push":
        window.history && window.history.pushState(s, "", e);
        break;
      case "replace":
        window.history && window.history.replaceState(s, "", e);
    }
  }, r.store = function(e, t) {
    var n = t || this.P, o = this.get(n);
    o.data = R({}, o.data, e), this.set(n, o);
    var a = { from: this.p, index: this.P, states: [].concat(this.m) };
    window.history.replaceState(a, "");
  }, r.update = function(e, t) {
    var n = t || this.P, o = R({}, this.get(n), e);
    this.set(n, o);
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
    var t = "push", n = e, o = j.prefix + "-" + j.history;
    return n.hasAttribute && n.hasAttribute(o) && (t = n.getAttribute(o)), t;
  }, r.g = function(e) {
    return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : e === 0 ? "popstate" : e > 0 ? "back" : "forward";
  }, se(i, [{ key: "current", get: function() {
    return this.m[this.P];
  } }, { key: "previous", get: function() {
    return this.P < 1 ? null : this.m[this.P - 1];
  } }, { key: "size", get: function() {
    return this.m.length;
  } }]), i;
})(), pe = new Le(), Y = function(i, r) {
  try {
    var e = (function() {
      if (!r.next.html) return Promise.resolve(i).then(function(t) {
        var n = r.next;
        if (t) {
          var o = F.toElement(t.html);
          n.namespace = F.getNamespace(o), n.container = F.getContainer(o), n.url = t.url, n.html = t.html, pe.update({ ns: n.namespace });
          var a = F.toDocument(t.html);
          document.title = a.title;
        }
      });
    })();
    return Promise.resolve(e && e.then ? e.then(function() {
    }) : void 0);
  } catch (t) {
    return Promise.reject(t);
  }
}, ve = function i(r, e, t) {
  return r instanceof RegExp ? (function(n, o) {
    if (!o) return n;
    for (var a = /\((?:\?<(.*?)>)?(?!\?)/g, c = 0, s = a.exec(n.source); s; ) o.push({ name: s[1] || c++, prefix: "", suffix: "", modifier: "", pattern: "" }), s = a.exec(n.source);
    return n;
  })(r, e) : Array.isArray(r) ? (function(n, o, a) {
    var c = n.map(function(s) {
      return i(s, o, a).source;
    });
    return new RegExp("(?:".concat(c.join("|"), ")"), ce(a));
  })(r, e, t) : (function(n, o, a) {
    return (function(c, s, u) {
      u === void 0 && (u = {});
      for (var l = u.strict, h = l !== void 0 && l, f = u.start, w = f === void 0 || f, d = u.end, p = d === void 0 || d, b = u.encode, y = b === void 0 ? function($) {
        return $;
      } : b, T = u.delimiter, P = T === void 0 ? "/#?" : T, L = u.endsWith, C = "[".concat(B(L === void 0 ? "" : L), "]|$"), O = "[".concat(B(P), "]"), A = w ? "^" : "", q = 0, H = c; q < H.length; q++) {
        var m = H[q];
        if (typeof m == "string") A += B(y(m));
        else {
          var S = B(y(m.prefix)), v = B(y(m.suffix));
          if (m.pattern) if (s && s.push(m), S || v) if (m.modifier === "+" || m.modifier === "*") {
            var E = m.modifier === "*" ? "?" : "";
            A += "(?:".concat(S, "((?:").concat(m.pattern, ")(?:").concat(v).concat(S, "(?:").concat(m.pattern, "))*)").concat(v, ")").concat(E);
          } else A += "(?:".concat(S, "(").concat(m.pattern, ")").concat(v, ")").concat(m.modifier);
          else A += m.modifier === "+" || m.modifier === "*" ? "((?:".concat(m.pattern, ")").concat(m.modifier, ")") : "(".concat(m.pattern, ")").concat(m.modifier);
          else A += "(?:".concat(S).concat(v, ")").concat(m.modifier);
        }
      }
      if (p) h || (A += "".concat(O, "?")), A += u.endsWith ? "(?=".concat(C, ")") : "$";
      else {
        var g = c[c.length - 1], k = typeof g == "string" ? O.indexOf(g[g.length - 1]) > -1 : g === void 0;
        h || (A += "(?:".concat(O, "(?=").concat(C, "))?")), k || (A += "(?=".concat(O, "|").concat(C, ")"));
      }
      return new RegExp(A, ce(u));
    })((function(c, s) {
      s === void 0 && (s = {});
      for (var u = (function(v) {
        for (var E = [], g = 0; g < v.length; ) {
          var k = v[g];
          if (k !== "*" && k !== "+" && k !== "?") if (k !== "\\") if (k !== "{") if (k !== "}") if (k !== ":") if (k !== "(") E.push({ type: "CHAR", index: g, value: v[g++] });
          else {
            var $ = 1, J = "";
            if (v[x = g + 1] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(x));
            for (; x < v.length; ) if (v[x] !== "\\") {
              if (v[x] === ")") {
                if (--$ == 0) {
                  x++;
                  break;
                }
              } else if (v[x] === "(" && ($++, v[x + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(x));
              J += v[x++];
            } else J += v[x++] + v[x++];
            if ($) throw new TypeError("Unbalanced pattern at ".concat(g));
            if (!J) throw new TypeError("Missing pattern at ".concat(g));
            E.push({ type: "PATTERN", index: g, value: J }), g = x;
          }
          else {
            for (var Z = "", x = g + 1; x < v.length; ) {
              var I = v.charCodeAt(x);
              if (!(I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || I === 95)) break;
              Z += v[x++];
            }
            if (!Z) throw new TypeError("Missing parameter name at ".concat(g));
            E.push({ type: "NAME", index: g, value: Z }), g = x;
          }
          else E.push({ type: "CLOSE", index: g, value: v[g++] });
          else E.push({ type: "OPEN", index: g, value: v[g++] });
          else E.push({ type: "ESCAPED_CHAR", index: g++, value: v[g++] });
          else E.push({ type: "MODIFIER", index: g, value: v[g++] });
        }
        return E.push({ type: "END", index: g, value: "" }), E;
      })(c), l = s.prefixes, h = l === void 0 ? "./" : l, f = "[^".concat(B(s.delimiter || "/#?"), "]+?"), w = [], d = 0, p = 0, b = "", y = function(v) {
        if (p < u.length && u[p].type === v) return u[p++].value;
      }, T = function(v) {
        var E = y(v);
        if (E !== void 0) return E;
        var g = u[p], k = g.index;
        throw new TypeError("Unexpected ".concat(g.type, " at ").concat(k, ", expected ").concat(v));
      }, P = function() {
        for (var v, E = ""; v = y("CHAR") || y("ESCAPED_CHAR"); ) E += v;
        return E;
      }; p < u.length; ) {
        var L = y("CHAR"), C = y("NAME"), O = y("PATTERN");
        if (C || O) h.indexOf(q = L || "") === -1 && (b += q, q = ""), b && (w.push(b), b = ""), w.push({ name: C || d++, prefix: q, suffix: "", pattern: O || f, modifier: y("MODIFIER") || "" });
        else {
          var A = L || y("ESCAPED_CHAR");
          if (A) b += A;
          else if (b && (w.push(b), b = ""), y("OPEN")) {
            var q = P(), H = y("NAME") || "", m = y("PATTERN") || "", S = P();
            T("CLOSE"), w.push({ name: H || (m ? d++ : ""), pattern: H && !m ? f : m, prefix: q, suffix: S, modifier: y("MODIFIER") || "" });
          } else T("END");
        }
      }
      return w;
    })(n, a), o, a);
  })(r, e, t);
}, Se = { __proto__: null, update: Y, nextTick: function() {
  return new Promise(function(i) {
    window.requestAnimationFrame(i);
  });
}, pathToRegexp: ve }, me = function() {
  return window.location.origin;
}, z = function(i) {
  return i === void 0 && (i = window.location.href), N(i).port;
}, N = function(i) {
  var r, e = i.match(/:\d+/);
  if (e === null) /^http/.test(i) && (r = 80), /^https/.test(i) && (r = 443);
  else {
    var t = e[0].substring(1);
    r = parseInt(t, 10);
  }
  var n, o = i.replace(me(), ""), a = {}, c = o.indexOf("#");
  c >= 0 && (n = o.slice(c + 1), o = o.slice(0, c));
  var s = o.indexOf("?");
  return s >= 0 && (a = ge(o.slice(s + 1)), o = o.slice(0, s)), { hash: n, path: o, port: r, query: a };
}, ge = function(i) {
  return i.split("&").reduce(function(r, e) {
    var t = e.split("=");
    return r[t[0]] = t[1], r;
  }, {});
}, ie = function(i) {
  return i === void 0 && (i = window.location.href), i.replace(/(\/#.*|\/|#.*)$/, "");
}, Te = { __proto__: null, getHref: function() {
  return window.location.href;
}, getAbsoluteHref: function(i, r) {
  return r === void 0 && (r = document.baseURI), new URL(i, r).href;
}, getOrigin: me, getPort: z, getPath: function(i) {
  return i === void 0 && (i = window.location.href), N(i).path;
}, getQuery: function(i, r) {
  return r === void 0 && (r = !1), r ? JSON.stringify(N(i).query) : N(i).query;
}, getHash: function(i) {
  return N(i).hash;
}, parse: N, parseQuery: ge, clean: ie };
function qe(i, r, e, t, n) {
  return r === void 0 && (r = 2e3), new Promise(function(o, a) {
    var c = new XMLHttpRequest();
    c.onreadystatechange = function() {
      if (c.readyState === XMLHttpRequest.DONE) {
        if (c.status === 200) {
          var s = c.responseURL !== "" && c.responseURL !== i ? c.responseURL : i;
          o({ html: c.responseText, url: R({ href: s }, N(s)) }), t.update(i, { status: "fulfilled", target: s });
        } else if (c.status) {
          var u = { status: c.status, statusText: c.statusText };
          e(i, u), a(u), t.update(i, { status: "rejected" });
        }
      }
    }, c.ontimeout = function() {
      var s = new Error("Timeout error [" + r + "]");
      e(i, s), a(s), t.update(i, { status: "rejected" });
    }, c.onerror = function() {
      var s = new Error("Fetch error");
      e(i, s), a(s), t.update(i, { status: "rejected" });
    }, c.open("GET", i), c.timeout = r, c.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), c.setRequestHeader("x-barba", "yes"), n.all().forEach(function(s, u) {
      c.setRequestHeader(u, s);
    }), c.send();
  });
}
function He(i) {
  return !!i && (typeof i == "object" || typeof i == "function") && typeof i.then == "function";
}
function D(i, r) {
  return r === void 0 && (r = {}), function() {
    var e = arguments, t = !1, n = new Promise(function(o, a) {
      r.async = function() {
        return t = !0, function(s, u) {
          s ? a(s) : o(u);
        };
      };
      var c = i.apply(r, [].slice.call(e));
      t || (He(c) ? c.then(o, a) : o(c));
    });
    return n;
  };
}
var M = new (/* @__PURE__ */ (function(i) {
  function r() {
    var t;
    return (t = i.call(this) || this).logger = new U("@barba/core"), t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], t.registered = /* @__PURE__ */ new Map(), t.init(), t;
  }
  V(r, i);
  var e = r.prototype;
  return e.init = function() {
    var t = this;
    this.registered.clear(), this.all.forEach(function(n) {
      t[n] || (t[n] = function(o, a) {
        t.registered.has(n) || t.registered.set(n, /* @__PURE__ */ new Set()), t.registered.get(n).add({ ctx: a || {}, fn: o });
      });
    });
  }, e.do = function(t) {
    var n = arguments, o = this;
    if (this.registered.has(t)) {
      var a = Promise.resolve();
      return this.registered.get(t).forEach(function(c) {
        a = a.then(function() {
          return D(c.fn, c.ctx).apply(void 0, [].slice.call(n, 1));
        });
      }), a.catch(function(c) {
        o.logger.debug("Hook error [" + t + "]"), o.logger.error(c);
      });
    }
    return Promise.resolve();
  }, e.clear = function() {
    var t = this;
    this.all.forEach(function(n) {
      delete t[n];
    }), this.init();
  }, e.help = function() {
    this.logger.info("Available hooks: " + this.all.join(","));
    var t = [];
    this.registered.forEach(function(n, o) {
      return t.push(o);
    }), this.logger.info("Registered hooks: " + t.join(","));
  }, r;
})(Ae))(), ye = /* @__PURE__ */ (function() {
  function i(r) {
    if (this.k = void 0, this.O = [], typeof r == "boolean") this.k = r;
    else {
      var e = Array.isArray(r) ? r : [r];
      this.O = e.map(function(t) {
        return ve(t);
      });
    }
  }
  return i.prototype.checkHref = function(r) {
    if (typeof this.k == "boolean") return this.k;
    var e = N(r).path;
    return this.O.some(function(t) {
      return t.exec(e) !== null;
    });
  }, i;
})(), ke = /* @__PURE__ */ (function(i) {
  function r(t) {
    var n;
    return (n = i.call(this, t) || this).T = /* @__PURE__ */ new Map(), n;
  }
  V(r, i);
  var e = r.prototype;
  return e.set = function(t, n, o, a, c) {
    return this.T.set(t, { action: o, request: n, status: a, target: c ?? t }), { action: o, request: n, status: a, target: c };
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
  }, e.update = function(t, n) {
    var o = R({}, this.T.get(t), n);
    return this.T.set(t, o), o;
  }, r;
})(ye), Oe = /* @__PURE__ */ (function() {
  function i() {
    this.A = /* @__PURE__ */ new Map();
  }
  var r = i.prototype;
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
  }, i;
})(), Re = function() {
  return !window.history.pushState;
}, je = function(i) {
  return !i.el || !i.href;
}, Ce = function(i) {
  var r = i.event;
  return r.which > 1 || r.metaKey || r.ctrlKey || r.shiftKey || r.altKey;
}, Me = function(i) {
  var r = i.el;
  return r.hasAttribute("target") && r.target === "_blank";
}, _e = function(i) {
  var r = i.el;
  return r.protocol !== void 0 && window.location.protocol !== r.protocol || r.hostname !== void 0 && window.location.hostname !== r.hostname;
}, Ne = function(i) {
  var r = i.el;
  return r.port !== void 0 && z() !== z(r.href);
}, Ie = function(i) {
  var r = i.el;
  return r.getAttribute && typeof r.getAttribute("download") == "string";
}, Ue = function(i) {
  return i.el.hasAttribute(j.prefix + "-" + j.prevent);
}, Fe = function(i) {
  return !!i.el.closest("[" + j.prefix + "-" + j.prevent + '="all"]');
}, Be = function(i) {
  var r = i.href;
  return ie(r) === ie() && z(r) === z();
}, De = /* @__PURE__ */ (function(i) {
  function r(t) {
    var n;
    return (n = i.call(this, t) || this).suite = [], n.tests = /* @__PURE__ */ new Map(), n.init(), n;
  }
  V(r, i);
  var e = r.prototype;
  return e.init = function() {
    this.add("pushState", Re), this.add("exists", je), this.add("newTab", Ce), this.add("blank", Me), this.add("corsDomain", _e), this.add("corsPort", Ne), this.add("download", Ie), this.add("preventSelf", Ue), this.add("preventAll", Fe), this.add("sameUrl", Be, !1);
  }, e.add = function(t, n, o) {
    o === void 0 && (o = !0), this.tests.set(t, n), o && this.suite.push(t);
  }, e.run = function(t, n, o, a) {
    return this.tests.get(t)({ el: n, event: o, href: a });
  }, e.checkLink = function(t, n, o) {
    var a = this;
    return this.suite.some(function(c) {
      return a.run(c, t, n, o);
    });
  }, r;
})(ye), ee = /* @__PURE__ */ (function(i) {
  function r(e, t) {
    var n;
    return t === void 0 && (t = "Barba error"), (n = i.call.apply(i, [this].concat([].slice.call(arguments, 2))) || this).error = void 0, n.label = void 0, n.error = e, n.label = t, Error.captureStackTrace && Error.captureStackTrace(xe(n), r), n.name = "BarbaError", n;
  }
  return V(r, i), r;
})(/* @__PURE__ */ ne(Error)), We = /* @__PURE__ */ (function() {
  function i(e) {
    e === void 0 && (e = []), this.logger = new U("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], e && (this.all = this.all.concat(e)), this.update();
  }
  var r = i.prototype;
  return r.add = function(e, t) {
    e === "rule" ? this.j.splice(t.position || 0, 0, t.value) : this.all.push(t), this.update();
  }, r.resolve = function(e, t) {
    var n = this;
    t === void 0 && (t = {});
    var o = t.once ? this.once : this.page;
    o = o.filter(t.self ? function(f) {
      return f.name && f.name === "self";
    } : function(f) {
      return !f.name || f.name !== "self";
    });
    var a = /* @__PURE__ */ new Map(), c = o.find(function(f) {
      var w = !0, d = {};
      return t.self && f.name === "self" ? (a.set(f, d), !0) : (n.j.reverse().forEach(function(p) {
        w && (w = n.M(f, p, e, d), f.from && f.to && (w = n.M(f, p, e, d, "from") && n.M(f, p, e, d, "to")), f.from && !f.to && (w = n.M(f, p, e, d, "from")), !f.from && f.to && (w = n.M(f, p, e, d, "to")));
      }), a.set(f, d), w);
    }), s = a.get(c), u = [];
    if (u.push(t.once ? "once" : "page"), t.self && u.push("self"), s) {
      var l, h = [c];
      Object.keys(s).length > 0 && h.push(s), (l = this.logger).info.apply(l, ["Transition found [" + u.join(",") + "]"].concat(h));
    } else this.logger.info("No transition found [" + u.join(",") + "]");
    return c;
  }, r.update = function() {
    var e = this;
    this.all = this.all.map(function(t) {
      return e.N(t);
    }).sort(function(t, n) {
      return t.priority - n.priority;
    }).reverse().map(function(t) {
      return delete t.priority, t;
    }), this.page = this.all.filter(function(t) {
      return t.leave !== void 0 || t.enter !== void 0;
    }), this.once = this.all.filter(function(t) {
      return t.once !== void 0;
    });
  }, r.M = function(e, t, n, o, a) {
    var c = !0, s = !1, u = e, l = t.name, h = l, f = l, w = l, d = a ? u[a] : u, p = a === "to" ? n.next : n.current;
    if (a ? d && d[l] : d[l]) {
      switch (t.type) {
        case "strings":
        default:
          var b = Array.isArray(d[h]) ? d[h] : [d[h]];
          p[h] && b.indexOf(p[h]) !== -1 && (s = !0), b.indexOf(p[h]) === -1 && (c = !1);
          break;
        case "object":
          var y = Array.isArray(d[f]) ? d[f] : [d[f]];
          p[f] ? (p[f].name && y.indexOf(p[f].name) !== -1 && (s = !0), y.indexOf(p[f].name) === -1 && (c = !1)) : c = !1;
          break;
        case "function":
          d[w](n) ? s = !0 : c = !1;
      }
      s && (a ? (o[a] = o[a] || {}, o[a][l] = u[a][l]) : o[l] = u[l]);
    }
    return c;
  }, r.S = function(e, t, n) {
    var o = 0;
    return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (o += Math.pow(10, n), e.from && e.from[t] && (o += 1), e.to && e.to[t] && (o += 2)), o;
  }, r.N = function(e) {
    var t = this;
    e.priority = 0;
    var n = 0;
    return this.j.forEach(function(o, a) {
      n += t.S(e, o.name, a + 1);
    }), e.priority = n, e;
  }, i;
})();
function X(i, r) {
  try {
    var e = i();
  } catch (t) {
    return r(t);
  }
  return e && e.then ? e.then(void 0, r) : e;
}
var $e = /* @__PURE__ */ (function() {
  function i(e) {
    e === void 0 && (e = []), this.logger = new U("@barba/core"), this.store = void 0, this.C = !1, this.store = new We(e);
  }
  var r = i.prototype;
  return r.get = function(e, t) {
    return this.store.resolve(e, t);
  }, r.doOnce = function(e) {
    var t = e.data, n = e.transition;
    try {
      var o = function() {
        a.C = !1;
      }, a = this, c = n || {};
      a.C = !0;
      var s = X(function() {
        return Promise.resolve(a.L("beforeOnce", t, c)).then(function() {
          return Promise.resolve(a.once(t, c)).then(function() {
            return Promise.resolve(a.L("afterOnce", t, c)).then(function() {
            });
          });
        });
      }, function(u) {
        a.C = !1, a.logger.debug("Transition error [before/after/once]"), a.logger.error(u);
      });
      return Promise.resolve(s && s.then ? s.then(o) : o());
    } catch (u) {
      return Promise.reject(u);
    }
  }, r.doPage = function(e) {
    var t = e.data, n = e.transition, o = e.page, a = e.wrapper;
    try {
      var c = function(f) {
        s.C = !1;
      }, s = this, u = n || {}, l = u.sync === !0 || !1;
      s.C = !0;
      var h = X(function() {
        function f() {
          return Promise.resolve(s.L("before", t, u)).then(function() {
            function d(b) {
              return Promise.resolve(s.remove(t)).then(function() {
                return Promise.resolve(s.L("after", t, u)).then(function() {
                });
              });
            }
            var p = (function() {
              if (l) return X(function() {
                return Promise.resolve(s.add(t, a)).then(function() {
                  return Promise.resolve(s.L("beforeLeave", t, u)).then(function() {
                    return Promise.resolve(s.L("beforeEnter", t, u)).then(function() {
                      return Promise.resolve(Promise.all([s.leave(t, u), s.enter(t, u)])).then(function() {
                        return Promise.resolve(s.L("afterLeave", t, u)).then(function() {
                          return Promise.resolve(s.L("afterEnter", t, u)).then(function() {
                          });
                        });
                      });
                    });
                  });
                });
              }, function(P) {
                if (s.H(P)) throw new ee(P, "Transition error [sync]");
              });
              var b = function(P) {
                return X(function() {
                  var L = (function() {
                    if (y !== !1) return Promise.resolve(s.add(t, a)).then(function() {
                      return Promise.resolve(s.L("beforeEnter", t, u)).then(function() {
                        return Promise.resolve(s.enter(t, u, y)).then(function() {
                          return Promise.resolve(s.L("afterEnter", t, u)).then(function() {
                          });
                        });
                      });
                    });
                  })();
                  if (L && L.then) return L.then(function() {
                  });
                }, function(L) {
                  if (s.H(L)) throw new ee(L, "Transition error [before/after/enter]");
                });
              }, y = !1, T = X(function() {
                return Promise.resolve(s.L("beforeLeave", t, u)).then(function() {
                  return Promise.resolve(Promise.all([s.leave(t, u), Y(o, t)]).then(function(P) {
                    return P[0];
                  })).then(function(P) {
                    return y = P, Promise.resolve(s.L("afterLeave", t, u)).then(function() {
                    });
                  });
                });
              }, function(P) {
                if (s.H(P)) throw new ee(P, "Transition error [before/after/leave]");
              });
              return T && T.then ? T.then(b) : b();
            })();
            return p && p.then ? p.then(d) : d();
          });
        }
        var w = (function() {
          if (l) return Promise.resolve(Y(o, t)).then(function() {
          });
        })();
        return w && w.then ? w.then(f) : f();
      }, function(f) {
        throw s.C = !1, f.name && f.name === "BarbaError" ? (s.logger.debug(f.label), s.logger.error(f.error), f) : (s.logger.debug("Transition error [page]"), s.logger.error(f), f);
      });
      return Promise.resolve(h && h.then ? h.then(c) : c());
    } catch (f) {
      return Promise.reject(f);
    }
  }, r.once = function(e, t) {
    try {
      return Promise.resolve(M.do("once", e, t)).then(function() {
        return t.once ? D(t.once, t)(e) : Promise.resolve();
      });
    } catch (n) {
      return Promise.reject(n);
    }
  }, r.leave = function(e, t) {
    try {
      return Promise.resolve(M.do("leave", e, t)).then(function() {
        return t.leave ? D(t.leave, t)(e) : Promise.resolve();
      });
    } catch (n) {
      return Promise.reject(n);
    }
  }, r.enter = function(e, t, n) {
    try {
      return Promise.resolve(M.do("enter", e, t)).then(function() {
        return t.enter ? D(t.enter, t)(e, n) : Promise.resolve();
      });
    } catch (o) {
      return Promise.reject(o);
    }
  }, r.add = function(e, t) {
    try {
      return F.addContainer(e.next.container, t), M.do("nextAdded", e), Promise.resolve();
    } catch (n) {
      return Promise.reject(n);
    }
  }, r.remove = function(e) {
    try {
      return F.removeContainer(e.current.container), M.do("currentRemoved", e), Promise.resolve();
    } catch (t) {
      return Promise.reject(t);
    }
  }, r.H = function(e) {
    return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status;
  }, r.L = function(e, t, n) {
    try {
      return Promise.resolve(M.do(e, t, n)).then(function() {
        return n[e] ? D(n[e], n)(t) : Promise.resolve();
      });
    } catch (o) {
      return Promise.reject(o);
    }
  }, se(i, [{ key: "isRunning", get: function() {
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
  } }]), i;
})(), Xe = /* @__PURE__ */ (function() {
  function i(r) {
    var e = this;
    this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), r.length !== 0 && (r.forEach(function(t) {
      e.byNamespace.set(t.namespace, t);
    }), this.names.forEach(function(t) {
      M[t](e._(t));
    }));
  }
  return i.prototype._ = function(r) {
    var e = this;
    return function(t) {
      var n = r.match(/enter/i) ? t.next : t.current, o = e.byNamespace.get(n.namespace);
      return o && o[r] ? D(o[r], o)(t) : Promise.resolve();
    };
  }, i;
})();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(i) {
  var r = this;
  do {
    if (r.matches(i)) return r;
    r = r.parentElement || r.parentNode;
  } while (r !== null && r.nodeType === 1);
  return null;
});
var Ke = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } }, W = new (/* @__PURE__ */ (function() {
  function i() {
    this.version = "2.10.3", this.schemaPage = Ke, this.Logger = U, this.logger = new U("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = M, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = F, this.helpers = Se, this.history = pe, this.request = qe, this.url = Te, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0;
  }
  var r = i.prototype;
  return r.use = function(e, t) {
    var n = this.plugins;
    n.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : typeof e.install == "function" ? (e.install(this, t), n.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.');
  }, r.init = function(e) {
    var t = e === void 0 ? {} : e, n = t.transitions, o = n === void 0 ? [] : n, a = t.views, c = a === void 0 ? [] : a, s = t.schema, u = s === void 0 ? j : s, l = t.requestError, h = t.timeout, f = h === void 0 ? 2e3 : h, w = t.cacheIgnore, d = w !== void 0 && w, p = t.cacheFirstPage, b = p !== void 0 && p, y = t.prefetchIgnore, T = y !== void 0 && y, P = t.preventRunning, L = P !== void 0 && P, C = t.prevent, O = C === void 0 ? null : C, A = t.debug, q = t.logLevel;
    if (U.setLevel((A !== void 0 && A) === !0 ? "debug" : q === void 0 ? "off" : q), this.logger.info(this.version), Object.keys(u).forEach(function(S) {
      j[S] && (j[S] = u[S]);
    }), this.B = l, this.timeout = f, this.cacheIgnore = d, this.cacheFirstPage = b, this.prefetchIgnore = T, this.preventRunning = L, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
    this.I();
    var H = this.data.current;
    if (!H.container) throw new Error("[@barba/core] No Barba container found");
    if (this.cache = new ke(d), this.headers = new Oe(), this.prevent = new De(T), this.transitions = new $e(o), this.views = new Xe(c), O !== null) {
      if (typeof O != "function") throw new Error("[@barba/core] Prevent should be a function");
      this.prevent.add("preventCustom", O);
    }
    this.history.init(H.url.href, H.namespace), b && this.cache.set(H.url.href, Promise.resolve({ html: H.html, url: H.url }), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach(function(S) {
      return S.init();
    });
    var m = this.data;
    m.trigger = "barba", m.next = m.current, m.current = R({}, this.schemaPage), this.hooks.do("ready", m), this.once(m), this.I();
  }, r.destroy = function() {
    this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = [];
  }, r.force = function(e) {
    window.location.assign(e);
  }, r.go = function(e, t, n) {
    var o;
    if (t === void 0 && (t = "barba"), this.F = null, this.transitions.isRunning) this.force(e);
    else if (!(o = t === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(e, !0) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf) return t = this.history.change(this.cache.has(e) ? this.cache.get(e).target : e, t, n), n && (n.stopPropagation(), n.preventDefault()), this.page(e, t, n ?? void 0, o);
  }, r.once = function(e) {
    try {
      var t = this;
      return Promise.resolve(t.hooks.do("beforeEnter", e)).then(function() {
        function n() {
          return Promise.resolve(t.hooks.do("afterEnter", e)).then(function() {
          });
        }
        var o = (function() {
          if (t.transitions.hasOnce) {
            var a = t.transitions.get(e, { once: !0 });
            return Promise.resolve(t.transitions.doOnce({ transition: a, data: e })).then(function() {
            });
          }
        })();
        return o && o.then ? o.then(n) : n();
      });
    } catch (n) {
      return Promise.reject(n);
    }
  }, r.page = function(e, t, n, o) {
    try {
      var a, c = function() {
        var h = s.data;
        return Promise.resolve(s.hooks.do("page", h)).then(function() {
          var f = (function(w, d) {
            try {
              var p = (b = s.transitions.get(h, { once: !1, self: o }), Promise.resolve(s.transitions.doPage({ data: h, page: a, transition: b, wrapper: s.q })).then(function() {
                s.I();
              }));
            } catch {
              return d();
            }
            var b;
            return p && p.then ? p.then(void 0, d) : p;
          })(0, function() {
            U.getLevel() === 0 && s.force(h.next.url.href);
          });
          if (f && f.then) return f.then(function() {
          });
        });
      }, s = this;
      if (s.data.next.url = R({ href: e }, s.url.parse(e)), s.data.trigger = t, s.data.event = n, s.cache.has(e)) a = s.cache.update(e, { action: "click" }).request;
      else {
        var u = s.request(e, s.timeout, s.onRequestError.bind(s, t), s.cache, s.headers);
        u.then(function(h) {
          h.url.href !== e && s.history.add(h.url.href, t, "replace");
        }), a = s.cache.set(e, u, "click", "pending").request;
      }
      var l = (function() {
        if (s.transitions.shouldWait) return Promise.resolve(Y(a, s.data)).then(function() {
        });
      })();
      return Promise.resolve(l && l.then ? l.then(c) : c());
    } catch (h) {
      return Promise.reject(h);
    }
  }, r.onRequestError = function(e) {
    this.transitions.isRunning = !1;
    var t = [].slice.call(arguments, 1), n = t[0], o = t[1], a = this.cache.getAction(n);
    return this.cache.delete(n), this.B && this.B(e, a, n, o) === !1 || a === "click" && this.force(n), !1;
  }, r.prefetch = function(e) {
    var t = this;
    e = this.url.getAbsoluteHref(e), this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch(function(n) {
      t.logger.error(n);
    }), "prefetch", "pending");
  }, r.G = function() {
    this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X);
  }, r.J = function() {
    this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X);
  }, r.U = function(e) {
    var t = this, n = this.W(e);
    if (n) {
      var o = this.url.getAbsoluteHref(this.dom.getHref(n));
      this.prevent.checkHref(o) || this.cache.has(o) || this.cache.set(o, this.request(o, this.timeout, this.onRequestError.bind(this, n), this.cache, this.headers).catch(function(a) {
        t.logger.error(a);
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
  }, se(i, [{ key: "data", get: function() {
    return this.D;
  } }, { key: "wrapper", get: function() {
    return this.q;
  } }]), i;
})())();
function oe(i, r) {
  i && i.classList.add(r);
}
function ue(i, r) {
  i && i.classList.remove(r);
}
function we(i, r = document) {
  return i ? typeof i == "string" ? Array.from(r.querySelectorAll(i)) : i instanceof Element ? [i] : i instanceof NodeList || i instanceof HTMLCollection ? Array.from(i) : Array.isArray(i) ? i.filter((e) => e instanceof Element) : [] : [];
}
function Q(i, r) {
  return !i || !r ? !1 : (i instanceof Element ? [i] : i instanceof NodeList || i instanceof HTMLCollection || Array.isArray(i) ? Array.from(i) : []).some(
    (t) => t?.classList?.contains(r)
  );
}
function G(i = !1) {
  if (!i) return;
  let r = new DOMParser(), e = r.parseFromString(i.next.html, "text/html"), t = r.parseFromString(i.current.html, "text/html");
  return { nextHTML: e, currentHTML: t };
}
function ze(i, r) {
  let e = i.current.container, t = i.next.container;
  gsap.set(t, {
    opacity: 0,
    position: "absolute"
  }), gsap.to(e, {
    opacity: 0,
    duration: 0.5,
    ease: "expo.out",
    onComplete() {
      r(), gsap.set(t, {
        position: ""
      }), gsap.to(t, {
        opacity: 1,
        duration: 0.5,
        ease: "expo.out"
      });
    }
  });
}
function Je(i, r) {
  const e = i.getAttribute("href");
  if (!i || !e || r && (r.which > 1 || r.metaKey || r.ctrlKey || r.shiftKey || r.altKey) || i.target === "_blank" || i.hasAttribute("download") || i.rel === "external" || !e.startsWith("/") && !e.startsWith(window.location.origin) && (e.startsWith("#") || /^(mailto|tel|sms|file):/.test(e)))
    return !1;
  const t = new URL(e, window.location.href);
  return !(t.pathname === window.location.pathname && t.search === window.location.search && t.hash !== "" || t.hostname !== window.location.hostname);
}
function Qe(i) {
  const r = i.querySelectorAll('link[rel="stylesheet"]'), e = i.querySelectorAll("script[src]"), t = document.head;
  r.forEach((n) => {
    const o = n.getAttribute("id"), a = n.getAttribute("href");
    if (o) {
      if (!document.getElementById(o)) {
        const c = n.cloneNode(!0);
        t.appendChild(c);
      }
    } else if (a && !Array.from(t.querySelectorAll('link[rel="stylesheet"]')).some((s) => s.getAttribute("href") === a)) {
      const s = n.cloneNode(!0);
      t.appendChild(s);
    }
  }), e.forEach((n) => {
    const o = n.getAttribute("src"), a = n.getAttribute("id");
    if (!(a && document.getElementById(a) || o && document.querySelector(`script[src="${o}"]`))) {
      const s = document.createElement("script");
      Array.from(n.attributes).forEach((u) => {
        s.setAttribute(u.name, u.value);
      }), s.async = !1, document.head.appendChild(s);
    }
  });
}
function fe(i, r = ".header-content-area", e = ".footer-content-area") {
  const t = G(i), n = t.nextHTML.querySelector(r), o = t.nextHTML.querySelector(e), a = document.querySelector(r), c = document.querySelector(e);
  n && a && (a.innerHTML = n.innerHTML), o && c && (c.innerHTML = o.innerHTML);
}
function he(i) {
  return i.closest("#wpadminbar") ? (W.destroy(), !0) : Q(i, "prevent-pt") || Q(i, "prevent-transition") ? !0 : i.closest(".comments-area") || Q(we("body")[0], "elementor-editor-active") ? (W.destroy(), !0) : !1;
}
function be(i, r, e = !0) {
  const t = i.querySelectorAll(":scope > .current-menu-parent, :scope > .current-menu-item, :scope > .active");
  let n = t.length > 0 ? t[0] : null;
  return !n && e && r.length > 0 && (n = r[0]), n ? {
    width: n.offsetWidth,
    height: n.offsetHeight,
    left: n.offsetLeft,
    top: n.offsetTop,
    current: n,
    hasActive: !!t.length
  } : { width: 0, height: 0, left: 0, top: 0, current: null };
}
function le(i) {
  let r = i, e = i.querySelectorAll(":scope > li");
  if (!e.length) {
    let c = i.querySelector("ul");
    if (c)
      r = c, e = c.querySelectorAll(":scope > li");
    else
      return !1;
  }
  if (oe(r, "has-nav-slide-ind"), !r.querySelector(".nav-indicator-back")) {
    let c = document.createElement("span"), s = document.createElement("span");
    c.classList.add("nav-indicator-back"), s.classList.add("nav-indicator-front"), r.appendChild(c), r.appendChild(s);
  }
  let t = r.querySelector(".nav-indicator-back"), n = r.querySelector(".nav-indicator-front");
  function o(c = !0, s = !0, u = 0.4) {
    const l = be(r, e, !0);
    let h = [];
    c && h.push(t), s && h.push(n), gsap.to(h, {
      // Use .to for a smooth reset
      duration: u,
      ease: "power2.out",
      position: "absolute",
      "pointer-events": "none",
      left: l.left,
      top: l.top,
      width: l.width,
      height: l.height,
      "--opacity": l.hasActive ? 1 : 0
    });
  }
  o(!0, !0, 0);
  let a;
  return e.forEach((c) => {
    c.addEventListener("mouseenter", () => {
      a && clearTimeout(a), gsap.killTweensOf(t), gsap.to(t, {
        duration: 0.35,
        ease: "power2.out",
        left: c.offsetLeft,
        top: c.offsetTop,
        width: c.offsetWidth,
        height: c.offsetHeight,
        overwrite: !0
        // Ensure this animation wins
      }), t.classList.add("active");
    }), c.addEventListener("mouseleave", () => {
      a = setTimeout(() => {
        o(!0, !1), t.classList.remove("active");
      }, 80);
    });
  }), window.addEventListener("resize", () => o(!0, !0)), {
    refreshBack() {
      o(!0, !1);
    },
    refreshFront() {
      o(!1, !0);
    },
    refresh() {
      o(!0, !0);
    }
  };
}
function Ge(i = ".has-pt-nav-slide") {
  let r = document.querySelector(i), e = !1;
  return r && (e = le(r)), {
    hasInit: !!r,
    navbarEl: r,
    nav: e,
    add_pt_navbar_slide: le,
    get_current_menu_item_info: be
  };
}
function Ye(i, r) {
  if (!i || !r) return;
  const e = i.querySelectorAll("li"), t = r.querySelectorAll("li");
  e.forEach((n, o) => {
    const a = t[o];
    if (a) {
      n.className = "";
      const c = Array.from(a.classList);
      c.length > 0 && n.classList.add(...c);
    }
  });
}
function Ve(i = ".elementor-location-header, .header-content-area") {
  let r = document.querySelectorAll(i);
  return {
    start(e = 0.5) {
      gsap.set(r, { transition: "none" }), gsap.to(r, {
        ...document.querySelectorAll("#wpadminbar").length ? {} : { y: -20 },
        opacity: 0,
        duration: e,
        ease: "expo.out"
      });
    },
    end(e = 0.5, t = 0) {
      gsap.to(r, {
        ...document.querySelectorAll("#wpadminbar").length ? {} : { y: 0 },
        delay: t,
        opacity: 1,
        duration: e,
        ease: "expo.out",
        onComplete() {
          r.forEach((n) => n.setAttribute("style", ""));
        }
      });
    }
  };
}
function et() {
  let i = we('[data-themeic-ajax-template="wrap"]');
  if (i.length) {
    if (Q(i[0], "initialized-themeic-ajax-pt")) return !1;
    oe(i[0], "initialized-themeic-ajax-pt"), oe(document.querySelector("html"), "has-themeic-pt"), JSON.parse(i[0].getAttribute("data-pt-settings"));
    let r = Ge();
    Ve();
    const e = {
      events: {},
      on(n, o) {
        return this.events[n] || (this.events[n] = []), this.events[n].push(o), this;
      },
      off(n, o) {
        if (this.events[n])
          return o ? this.events[n] = this.events[n].filter((a) => a !== o) : delete this.events[n], this;
      },
      emit(n, o) {
        this.events[n] && this.events[n].forEach((a) => a(o));
      },
      offAll(n) {
        return n ? delete this.events[n] : this.events = {}, this;
      }
    };
    W.init({
      debug: !1,
      // preventRunning:true,
      timeout: 5e3,
      prevent: (n) => {
        he(n.el);
      },
      schema: {
        prefix: "data-themeic-ajax-template",
        wrapper: "wrap",
        container: "container",
        namespace: "name"
        // limit: 0,
        // html: '', 
      },
      transitions: [
        {
          sync: !0,
          name: "default-transition",
          before(n) {
            Qe(G(n)?.nextHTML), e.emit("before", n), r.hasInit;
          },
          leave(n) {
            let o = this.async();
            ze(n, o), e.emit("leave", n);
          },
          afterEnter(n) {
            e.emit("afterEnter", n), r.hasInit || (fe(n), fe(n, ".elementor-location-header", ".elementor-location-footer"));
          },
          after(n) {
            e.emit("after", n), document.body.classList.remove("starting-themeic-pt"), typeof elementorFrontend < "u" && elementorFrontend.init(), Ze(G(n).nextHTML), r.hasInit && (Ye(r.navbarEl, G(n).nextHTML.querySelector(".has-pt-nav-slide")), r.nav.refresh());
          }
        }
      ]
    }), document.addEventListener("click", (n) => {
      const o = n.target.closest("a");
      o && Je(o, n) && !he(o) && (document.body.classList.add("starting-themeic-pt"), e.emit("click", n));
    }), document.querySelector(".circle-loader-wrap") || document.body.insertAdjacentHTML("beforeend", '<div class="circle-loader-wrap"><div class="circle-loader-inner"><div class="circle-spinner-loader"></div></div></div>');
    let t = document.querySelector(".circle-loader-wrap");
    return gsap.set(t, { xPercent: -50, yPercent: -50 }), document.addEventListener("mousemove", function(n) {
      t && gsap.to(t, {
        x: n.clientX,
        y: n.clientY,
        duration: 0.5,
        // Add a little smoothing for that premium feel
        ease: "power2.out"
      });
    }), {
      on: (n, o) => e.on(n, o),
      off: (n, o) => e.off(n, o),
      destroy: () => {
        W.destroy(), e.offAll(), ue(i[0], "initialized-themeic-ajax-pt"), ue(document.querySelector("html"), "has-themeic-pt");
      },
      pt_oject: W
    };
  }
  return !1;
}
function Ze(i) {
  const r = document.querySelector("#wpadminbar");
  if (r) {
    const e = i.body.querySelector("#wpadminbar #wp-admin-bar-edit");
    if (e) {
      const t = r.querySelector("#wp-admin-bar-edit");
      t && (t.innerHTML = e.innerHTML);
      const n = r.querySelector("#wp-admin-bar-elementor_edit_page > a"), o = e.querySelector("a");
      if (n && o) {
        const a = o.getAttribute("href"), c = de(a, "action", "elementor"), s = de(a, "action", "edit");
        n.setAttribute("href", c), e.setAttribute("href", s);
      }
    }
  }
}
function de(i, r, e) {
  if (!i) return "";
  const t = new URL(i);
  return t.searchParams.set(r, e), t.toString();
}
export {
  et as initAjaxTrnasition,
  Ge as initNavAni,
  Ye as updateNavItemsClass
};
