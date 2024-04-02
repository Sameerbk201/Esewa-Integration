var initialScript = (function (e) {
  var t = {};
  function r(a) {
    if (t[a]) return t[a].exports;
    var n = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 3211))
  );
})({
  148: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (t.readData = function (e) {
        try {
          return JSON.parse(localStorage.getItem(e));
        } catch (t) {
          t && o(e);
        }
      }),
      n = (t.storeData = function (e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }),
      o = (t.removeData = function (e) {
        localStorage.removeItem(e);
      });
    t.clearStorage = function (e) {
      var t = {};
      e &&
        e.length > 0 &&
        e.forEach(function (e) {
          t[e] = a(e);
        }),
        localStorage.clear(),
        Object.keys(t).length > 0 &&
          Object.keys(t).forEach(function (e) {
            t[e] && n(e, t[e]);
          });
    };
  },
  3211: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getMyInfo = void 0);
    var a,
      n = r(3212),
      o = (a = n) && a.__esModule ? a : { default: a };
    t.getMyInfo = o.default;
  },
  3212: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a,
      n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        },
      o = r(148),
      i = r(3213),
      u = (a = i) && a.__esModule ? a : { default: a };
    var s = function (e) {
      var t = {
          consumerV2: [
            "Consumer",
            "POS",
            "Dealer level 1",
            "Dealer level 2",
            "Dealer level 3",
          ],
          merchantV2: [
            "Merchant",
            "Merchant admin staff",
            "Merchant developer staff",
            "Merchant finance staff",
            "Merchant branch",
            "Merchant outlet",
            "Enterprise maker staff",
            "Enterprise checker staff",
          ],
          bankV2: ["Bank"],
          superuserV2: ["Superuser", "Superuser support"],
        },
        r = "supportV2";
      if ((console.log(e), e.roles)) {
        var a = !0,
          n = !1,
          o = void 0;
        try {
          for (
            var i, u = Object.keys(t)[Symbol.iterator]();
            !(a = (i = u.next()).done);
            a = !0
          ) {
            var s = i.value,
              c = !0,
              l = !1,
              d = void 0;
            try {
              for (
                var f, v = e.roles[Symbol.iterator]();
                !(c = (f = v.next()).done);
                c = !0
              ) {
                var y = f.value;
                if (t[s].includes(y.name || y)) {
                  r = s;
                  break;
                }
              }
            } catch (e) {
              (l = !0), (d = e);
            } finally {
              try {
                !c && v.return && v.return();
              } finally {
                if (l) throw d;
              }
            }
          }
        } catch (e) {
          (n = !0), (o = e);
        } finally {
          try {
            !a && u.return && u.return();
          } finally {
            if (n) throw o;
          }
        }
      }
      return r;
    };
    t.default = function () {
      return new Promise(function (e, t) {
        (0, u.default)("/api/data/", {
          method: "POST",
          body: { my_info: { url_name: "my-info" } },
        })
          .then(function (r) {
            ((r && 403 === r.status_code) || 401 === r.status_code) &&
              ((0, o.clearStorage)(), window.location.reload());
            var a = {},
              i = r.my_info;
            if (
              (i.data &&
                !i.data.user &&
                ((0, o.clearStorage)(), window.location.reload()),
              200 === i.status)
            ) {
              i.data && i.data.user && (i.data.user.is_hijacked = r.isHijacked);
              var c = !0,
                l = !1,
                d = void 0;
              try {
                for (
                  var f, v = Object.keys(i.data)[Symbol.iterator]();
                  !(c = (f = v.next()).done);
                  c = !0
                ) {
                  var y = f.value;
                  "is_signed_auth" !== y && (a[y] = { data: i.data[y] });
                }
              } catch (e) {
                (l = !0), (d = e);
              } finally {
                try {
                  !c && v.return && v.return();
                } finally {
                  if (l) throw d;
                }
              }
            }
            delete r.my_info, delete r.isHijacked;
            var p,
              m = {},
              h = s(i.data.user);
            if (
              ("merchantV2" === h &&
                ((p = ["is_enterprise_user", "true"]),
                void 0 !==
                  i.data.ui_permissions.find(function (e) {
                    return e[0] == p[0] && e[1] == p[1];
                  }))) ||
              "consumerV2" === h
            ) {
              (0, u.default)("/api/data/", {
                method: "POST",
                body: {
                  service_fee: { url_name: "servicefee-user" },
                  user_commission: { url_name: "my-user-commission" },
                  config: {
                    url_name: "newdashboard-config",
                    kwargs: { version: "v2" },
                  },
                },
              })
                .then(function (t) {
                  var r = !0,
                    o = !1,
                    u = void 0;
                  try {
                    for (
                      var c, l = Object.keys(t)[Symbol.iterator]();
                      !(r = (c = l.next()).done);
                      r = !0
                    ) {
                      var d = c.value;
                      200 === t[d].status && (t[d] = t[d].data);
                    }
                  } catch (e) {
                    (o = !0), (u = e);
                  } finally {
                    try {
                      !r && l.return && l.return();
                    } finally {
                      if (o) throw u;
                    }
                  }
                  delete (m = n({}, t, a)).my_info,
                    e({ initialState: m, bundleToServe: s(i.data.user) });
                })
                .catch(function (e) {
                  (401 !== e.status && 403 !== e.status) ||
                    ((0, o.clearStorage)(["deviceId"]),
                    window.location.reload()),
                    e.response &&
                      e.response.data &&
                      (403 === e.response.data.status_code ||
                        401 === e.response.data.status_code) &&
                      ((0, o.clearStorage)(["deviceId"]),
                      window.location.reload()),
                    t(e);
                });
            } else
              delete (m = n({}, a)).my_info,
                e({ initialState: m, bundleToServe: s(i.data.user) });
          })
          .catch(function (e) {
            (401 !== e.status && 403 !== e.status) ||
              ((0, o.clearStorage)(["deviceId"]), window.location.reload()),
              e.response &&
                e.response.data &&
                (403 === e.response.data.status_code ||
                  401 === e.response.data.status_code) &&
                ((0, o.clearStorage)(["deviceId"]), window.location.reload()),
              t(e);
          });
      });
    };
  },
  3213: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        },
      n = r(148);
    t.default = function (e, t) {
      return new Promise(function (r, o) {
        var i =
            localStorage.getItem("khaltiToken") ||
            sessionStorage.getItem("khaltiToken"),
          u = JSON.parse(i),
          s = (0, n.readData)("deviceId"),
          c = new Headers();
        u && c.append("Authorization", "Token " + u),
          s && c.append("DEVICEID", s),
          c.append("content-type", "application/json;charset=UTF-8"),
          t.body && (t.body = JSON.stringify(t.body));
        var l = new AbortController(),
          d = setTimeout(function () {
            return (
              l.abort("Connection Timeout Please Refresh your page"),
              window.document.getElementById("loaderPlayer").remove(),
              window.document.write(
                "<h1>408 Request Timeout.</h1><hr/> <p>The server is taking a long time to respond. Please Refresh your page</p>"
              ),
              o(new Error("Connection Timeout Please refresh your page."))
            );
          }, 12e4),
          f = a({ headers: c, redirect: "follow" }, t, { signal: l.signal });
        return fetch("https://a.khalti.com" + e, f)
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            clearTimeout(d),
              (e.isHijacked = !(!s || !s.includes("HIJACK"))),
              r(e);
          })
          .catch(function (e) {
            o(e);
          });
      });
    };
  },
});
