(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) m(f);
  new MutationObserver((f) => {
    for (const v of f)
      if (v.type === "childList")
        for (const E of v.addedNodes)
          E.tagName === "LINK" && E.rel === "modulepreload" && m(E);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const v = {};
    return (
      f.integrity && (v.integrity = f.integrity),
      f.referrerPolicy && (v.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (v.credentials = "omit")
        : (v.credentials = "same-origin"),
      v
    );
  }
  function m(f) {
    if (f.ep) return;
    f.ep = !0;
    const v = a(f);
    fetch(f.href, v);
  }
})();
var Jo = { exports: {} },
  Pr = {},
  Go = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function Td() {
  if (lc) return b;
  lc = 1;
  var o = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    v = Symbol.for("react.provider"),
    E = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    k = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    F = Symbol.iterator;
  function j(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (F && y[F]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    U = {};
  function D(y, P, $) {
    (this.props = y),
      (this.context = P),
      (this.refs = U),
      (this.updater = $ || B);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (y, P) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, y, P, "setState");
    }),
    (D.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function O() {}
  O.prototype = D.prototype;
  function V(y, P, $) {
    (this.props = y),
      (this.context = P),
      (this.refs = U),
      (this.updater = $ || B);
  }
  var q = (V.prototype = new O());
  (q.constructor = V), A(q, D.prototype), (q.isPureReactComponent = !0);
  var te = Array.isArray,
    ae = Object.prototype.hasOwnProperty,
    we = { current: null },
    ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(y, P, $) {
    var ee,
      re = {},
      le = null,
      se = null;
    if (P != null)
      for (ee in (P.ref !== void 0 && (se = P.ref),
      P.key !== void 0 && (le = "" + P.key),
      P))
        ae.call(P, ee) && !ve.hasOwnProperty(ee) && (re[ee] = P[ee]);
    var oe = arguments.length - 2;
    if (oe === 1) re.children = $;
    else if (1 < oe) {
      for (var pe = Array(oe), Xe = 0; Xe < oe; Xe++)
        pe[Xe] = arguments[Xe + 2];
      re.children = pe;
    }
    if (y && y.defaultProps)
      for (ee in ((oe = y.defaultProps), oe))
        re[ee] === void 0 && (re[ee] = oe[ee]);
    return {
      $$typeof: o,
      type: y,
      key: le,
      ref: se,
      props: re,
      _owner: we.current,
    };
  }
  function xe(y, P) {
    return {
      $$typeof: o,
      type: y.type,
      key: P,
      ref: y.ref,
      props: y.props,
      _owner: y._owner,
    };
  }
  function Te(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function vt(y) {
    var P = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function ($) {
        return P[$];
      })
    );
  }
  var yt = /\/+/g;
  function Ge(y, P) {
    return typeof y == "object" && y !== null && y.key != null
      ? vt("" + y.key)
      : P.toString(36);
  }
  function ot(y, P, $, ee, re) {
    var le = typeof y;
    (le === "undefined" || le === "boolean") && (y = null);
    var se = !1;
    if (y === null) se = !0;
    else
      switch (le) {
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case o:
            case s:
              se = !0;
          }
      }
    if (se)
      return (
        (se = y),
        (re = re(se)),
        (y = ee === "" ? "." + Ge(se, 0) : ee),
        te(re)
          ? (($ = ""),
            y != null && ($ = y.replace(yt, "$&/") + "/"),
            ot(re, P, $, "", function (Xe) {
              return Xe;
            }))
          : re != null &&
            (Te(re) &&
              (re = xe(
                re,
                $ +
                  (!re.key || (se && se.key === re.key)
                    ? ""
                    : ("" + re.key).replace(yt, "$&/") + "/") +
                  y
              )),
            P.push(re)),
        1
      );
    if (((se = 0), (ee = ee === "" ? "." : ee + ":"), te(y)))
      for (var oe = 0; oe < y.length; oe++) {
        le = y[oe];
        var pe = ee + Ge(le, oe);
        se += ot(le, P, $, pe, re);
      }
    else if (((pe = j(y)), typeof pe == "function"))
      for (y = pe.call(y), oe = 0; !(le = y.next()).done; )
        (le = le.value), (pe = ee + Ge(le, oe++)), (se += ot(le, P, $, pe, re));
    else if (le === "object")
      throw (
        ((P = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (P === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : P) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return se;
  }
  function gt(y, P, $) {
    if (y == null) return y;
    var ee = [],
      re = 0;
    return (
      ot(y, ee, "", "", function (le) {
        return P.call($, le, re++);
      }),
      ee
    );
  }
  function Ve(y) {
    if (y._status === -1) {
      var P = y._result;
      (P = P()),
        P.then(
          function ($) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = $));
          },
          function ($) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = $));
          }
        ),
        y._status === -1 && ((y._status = 0), (y._result = P));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Se = { current: null },
    M = { transition: null },
    X = {
      ReactCurrentDispatcher: Se,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: we,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (b.Children = {
      map: gt,
      forEach: function (y, P, $) {
        gt(
          y,
          function () {
            P.apply(this, arguments);
          },
          $
        );
      },
      count: function (y) {
        var P = 0;
        return (
          gt(y, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (y) {
        return (
          gt(y, function (P) {
            return P;
          }) || []
        );
      },
      only: function (y) {
        if (!Te(y))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return y;
      },
    }),
    (b.Component = D),
    (b.Fragment = a),
    (b.Profiler = f),
    (b.PureComponent = V),
    (b.StrictMode = m),
    (b.Suspense = S),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (b.act = _),
    (b.cloneElement = function (y, P, $) {
      if (y == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            y +
            "."
        );
      var ee = A({}, y.props),
        re = y.key,
        le = y.ref,
        se = y._owner;
      if (P != null) {
        if (
          (P.ref !== void 0 && ((le = P.ref), (se = we.current)),
          P.key !== void 0 && (re = "" + P.key),
          y.type && y.type.defaultProps)
        )
          var oe = y.type.defaultProps;
        for (pe in P)
          ae.call(P, pe) &&
            !ve.hasOwnProperty(pe) &&
            (ee[pe] = P[pe] === void 0 && oe !== void 0 ? oe[pe] : P[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) ee.children = $;
      else if (1 < pe) {
        oe = Array(pe);
        for (var Xe = 0; Xe < pe; Xe++) oe[Xe] = arguments[Xe + 2];
        ee.children = oe;
      }
      return {
        $$typeof: o,
        type: y.type,
        key: re,
        ref: le,
        props: ee,
        _owner: se,
      };
    }),
    (b.createContext = function (y) {
      return (
        (y = {
          $$typeof: E,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (y.Provider = { $$typeof: v, _context: y }),
        (y.Consumer = y)
      );
    }),
    (b.createElement = Ne),
    (b.createFactory = function (y) {
      var P = Ne.bind(null, y);
      return (P.type = y), P;
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (y) {
      return { $$typeof: C, render: y };
    }),
    (b.isValidElement = Te),
    (b.lazy = function (y) {
      return { $$typeof: I, _payload: { _status: -1, _result: y }, _init: Ve };
    }),
    (b.memo = function (y, P) {
      return { $$typeof: k, type: y, compare: P === void 0 ? null : P };
    }),
    (b.startTransition = function (y) {
      var P = M.transition;
      M.transition = {};
      try {
        y();
      } finally {
        M.transition = P;
      }
    }),
    (b.unstable_act = _),
    (b.useCallback = function (y, P) {
      return Se.current.useCallback(y, P);
    }),
    (b.useContext = function (y) {
      return Se.current.useContext(y);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (y) {
      return Se.current.useDeferredValue(y);
    }),
    (b.useEffect = function (y, P) {
      return Se.current.useEffect(y, P);
    }),
    (b.useId = function () {
      return Se.current.useId();
    }),
    (b.useImperativeHandle = function (y, P, $) {
      return Se.current.useImperativeHandle(y, P, $);
    }),
    (b.useInsertionEffect = function (y, P) {
      return Se.current.useInsertionEffect(y, P);
    }),
    (b.useLayoutEffect = function (y, P) {
      return Se.current.useLayoutEffect(y, P);
    }),
    (b.useMemo = function (y, P) {
      return Se.current.useMemo(y, P);
    }),
    (b.useReducer = function (y, P, $) {
      return Se.current.useReducer(y, P, $);
    }),
    (b.useRef = function (y) {
      return Se.current.useRef(y);
    }),
    (b.useState = function (y) {
      return Se.current.useState(y);
    }),
    (b.useSyncExternalStore = function (y, P, $) {
      return Se.current.useSyncExternalStore(y, P, $);
    }),
    (b.useTransition = function () {
      return Se.current.useTransition();
    }),
    (b.version = "18.3.1"),
    b
  );
}
var ic;
function nu() {
  return ic || ((ic = 1), (Go.exports = Td())), Go.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc;
function Ld() {
  if (oc) return Pr;
  oc = 1;
  var o = nu(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(C, S, k) {
    var I,
      F = {},
      j = null,
      B = null;
    k !== void 0 && (j = "" + k),
      S.key !== void 0 && (j = "" + S.key),
      S.ref !== void 0 && (B = S.ref);
    for (I in S) m.call(S, I) && !v.hasOwnProperty(I) && (F[I] = S[I]);
    if (C && C.defaultProps)
      for (I in ((S = C.defaultProps), S)) F[I] === void 0 && (F[I] = S[I]);
    return {
      $$typeof: s,
      type: C,
      key: j,
      ref: B,
      props: F,
      _owner: f.current,
    };
  }
  return (Pr.Fragment = a), (Pr.jsx = E), (Pr.jsxs = E), Pr;
}
var uc;
function zd() {
  return uc || ((uc = 1), (Jo.exports = Ld())), Jo.exports;
}
var p = zd(),
  N = nu(),
  Yl = {},
  Xo = { exports: {} },
  Je = {},
  Zo = { exports: {} },
  qo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac;
function Ad() {
  return (
    ac ||
      ((ac = 1),
      (function (o) {
        function s(M, X) {
          var _ = M.length;
          M.push(X);
          e: for (; 0 < _; ) {
            var y = (_ - 1) >>> 1,
              P = M[y];
            if (0 < f(P, X)) (M[y] = X), (M[_] = P), (_ = y);
            else break e;
          }
        }
        function a(M) {
          return M.length === 0 ? null : M[0];
        }
        function m(M) {
          if (M.length === 0) return null;
          var X = M[0],
            _ = M.pop();
          if (_ !== X) {
            M[0] = _;
            e: for (var y = 0, P = M.length, $ = P >>> 1; y < $; ) {
              var ee = 2 * (y + 1) - 1,
                re = M[ee],
                le = ee + 1,
                se = M[le];
              if (0 > f(re, _))
                le < P && 0 > f(se, re)
                  ? ((M[y] = se), (M[le] = _), (y = le))
                  : ((M[y] = re), (M[ee] = _), (y = ee));
              else if (le < P && 0 > f(se, _))
                (M[y] = se), (M[le] = _), (y = le);
              else break e;
            }
          }
          return X;
        }
        function f(M, X) {
          var _ = M.sortIndex - X.sortIndex;
          return _ !== 0 ? _ : M.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var v = performance;
          o.unstable_now = function () {
            return v.now();
          };
        } else {
          var E = Date,
            C = E.now();
          o.unstable_now = function () {
            return E.now() - C;
          };
        }
        var S = [],
          k = [],
          I = 1,
          F = null,
          j = 3,
          B = !1,
          A = !1,
          U = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function q(M) {
          for (var X = a(k); X !== null; ) {
            if (X.callback === null) m(k);
            else if (X.startTime <= M)
              m(k), (X.sortIndex = X.expirationTime), s(S, X);
            else break;
            X = a(k);
          }
        }
        function te(M) {
          if (((U = !1), q(M), !A))
            if (a(S) !== null) (A = !0), Ve(ae);
            else {
              var X = a(k);
              X !== null && Se(te, X.startTime - M);
            }
        }
        function ae(M, X) {
          (A = !1), U && ((U = !1), O(Ne), (Ne = -1)), (B = !0);
          var _ = j;
          try {
            for (
              q(X), F = a(S);
              F !== null && (!(F.expirationTime > X) || (M && !vt()));

            ) {
              var y = F.callback;
              if (typeof y == "function") {
                (F.callback = null), (j = F.priorityLevel);
                var P = y(F.expirationTime <= X);
                (X = o.unstable_now()),
                  typeof P == "function"
                    ? (F.callback = P)
                    : F === a(S) && m(S),
                  q(X);
              } else m(S);
              F = a(S);
            }
            if (F !== null) var $ = !0;
            else {
              var ee = a(k);
              ee !== null && Se(te, ee.startTime - X), ($ = !1);
            }
            return $;
          } finally {
            (F = null), (j = _), (B = !1);
          }
        }
        var we = !1,
          ve = null,
          Ne = -1,
          xe = 5,
          Te = -1;
        function vt() {
          return !(o.unstable_now() - Te < xe);
        }
        function yt() {
          if (ve !== null) {
            var M = o.unstable_now();
            Te = M;
            var X = !0;
            try {
              X = ve(!0, M);
            } finally {
              X ? Ge() : ((we = !1), (ve = null));
            }
          } else we = !1;
        }
        var Ge;
        if (typeof V == "function")
          Ge = function () {
            V(yt);
          };
        else if (typeof MessageChannel < "u") {
          var ot = new MessageChannel(),
            gt = ot.port2;
          (ot.port1.onmessage = yt),
            (Ge = function () {
              gt.postMessage(null);
            });
        } else
          Ge = function () {
            D(yt, 0);
          };
        function Ve(M) {
          (ve = M), we || ((we = !0), Ge());
        }
        function Se(M, X) {
          Ne = D(function () {
            M(o.unstable_now());
          }, X);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            A || B || ((A = !0), Ve(ae));
          }),
          (o.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (xe = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return a(S);
          }),
          (o.unstable_next = function (M) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = j;
            }
            var _ = j;
            j = X;
            try {
              return M();
            } finally {
              j = _;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (M, X) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var _ = j;
            j = M;
            try {
              return X();
            } finally {
              j = _;
            }
          }),
          (o.unstable_scheduleCallback = function (M, X, _) {
            var y = o.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? y + _ : y))
                : (_ = y),
              M)
            ) {
              case 1:
                var P = -1;
                break;
              case 2:
                P = 250;
                break;
              case 5:
                P = 1073741823;
                break;
              case 4:
                P = 1e4;
                break;
              default:
                P = 5e3;
            }
            return (
              (P = _ + P),
              (M = {
                id: I++,
                callback: X,
                priorityLevel: M,
                startTime: _,
                expirationTime: P,
                sortIndex: -1,
              }),
              _ > y
                ? ((M.sortIndex = _),
                  s(k, M),
                  a(S) === null &&
                    M === a(k) &&
                    (U ? (O(Ne), (Ne = -1)) : (U = !0), Se(te, _ - y)))
                : ((M.sortIndex = P), s(S, M), A || B || ((A = !0), Ve(ae))),
              M
            );
          }),
          (o.unstable_shouldYield = vt),
          (o.unstable_wrapCallback = function (M) {
            var X = j;
            return function () {
              var _ = j;
              j = X;
              try {
                return M.apply(this, arguments);
              } finally {
                j = _;
              }
            };
          });
      })(qo)),
    qo
  );
}
var sc;
function Id() {
  return sc || ((sc = 1), (Zo.exports = Ad())), Zo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc;
function Dd() {
  if (cc) return Je;
  cc = 1;
  var o = nu(),
    s = Id();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var m = new Set(),
    f = {};
  function v(e, t) {
    E(e, t), E(e + "Capture", t);
  }
  function E(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) m.add(t[e]);
  }
  var C = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    S = Object.prototype.hasOwnProperty,
    k =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    I = {},
    F = {};
  function j(e) {
    return S.call(F, e)
      ? !0
      : S.call(I, e)
      ? !1
      : k.test(e)
      ? (F[e] = !0)
      : ((I[e] = !0), !1);
  }
  function B(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function A(e, t, n, r) {
    if (t === null || typeof t > "u" || B(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function U(e, t, n, r, l, i, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u);
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      D[e] = new U(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new U(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      D[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      D[e] = new U(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        D[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      D[e] = new U(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      D[e] = new U(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      D[e] = new U(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      D[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var O = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, V);
      D[t] = new U(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, V);
        D[t] = new U(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, V);
      D[t] = new U(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new U(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function q(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (A(t, n, l, r) && (n = null),
      r || l === null
        ? j(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var te = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ae = Symbol.for("react.element"),
    we = Symbol.for("react.portal"),
    ve = Symbol.for("react.fragment"),
    Ne = Symbol.for("react.strict_mode"),
    xe = Symbol.for("react.profiler"),
    Te = Symbol.for("react.provider"),
    vt = Symbol.for("react.context"),
    yt = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    ot = Symbol.for("react.suspense_list"),
    gt = Symbol.for("react.memo"),
    Ve = Symbol.for("react.lazy"),
    Se = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    y;
  function P(e) {
    if (y === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        y = (t && t[1]) || "";
      }
    return (
      `
` +
      y +
      e
    );
  }
  var $ = !1;
  function ee(e, t) {
    if (!e || $) return "";
    $ = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var r = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            r = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (
          var l = x.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            c = i.length - 1;
          1 <= u && 0 <= c && l[u] !== i[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== i[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== i[c])) {
                  var d =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      ($ = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? P(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ee(e.type, !1)), e;
      case 11:
        return (e = ee(e.type.render, !1)), e;
      case 1:
        return (e = ee(e.type, !0)), e;
      default:
        return "";
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ve:
        return "Fragment";
      case we:
        return "Portal";
      case xe:
        return "Profiler";
      case Ne:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case ot:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vt:
          return (e.displayName || "Context") + ".Consumer";
        case Te:
          return (e._context.displayName || "Context") + ".Provider";
        case yt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case gt:
          return (
            (t = e.displayName || null), t !== null ? t : le(e.type) || "Memo"
          );
        case Ve:
          (t = e._payload), (e = e._init);
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(t);
      case 8:
        return t === Ne ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function oe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xe(e) {
    var t = pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Or(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function cu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ur(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function bl(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function fu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = oe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function du(e, t) {
    (t = t.checked), t != null && q(e, "checked", t, !1);
  }
  function ei(e, t) {
    du(e, t);
    var n = oe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? ti(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ti(e, t.type, oe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function pu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function ti(e, t, n) {
    (t !== "number" || Ur(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var _n = Array.isArray;
  function hn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + oe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ni(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function mu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (_n(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function hu(e, t) {
    var n = oe(t.value),
      r = oe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function vu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function yu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ri(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? yu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Mr,
    gu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Mr = Mr || document.createElement("div"),
            Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Mr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ic = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kn).forEach(function (e) {
    Ic.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]);
    });
  });
  function wu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function xu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = wu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Dc = _(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function li(e, t) {
    if (t) {
      if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function ii(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var oi = null;
  function ui(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ai = null,
    vn = null,
    yn = null;
  function Su(e) {
    if ((e = pr(e))) {
      if (typeof ai != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = ul(t)), ai(e.stateNode, e.type, t));
    }
  }
  function ku(e) {
    vn ? (yn ? yn.push(e) : (yn = [e])) : (vn = e);
  }
  function Eu() {
    if (vn) {
      var e = vn,
        t = yn;
      if (((yn = vn = null), Su(e), t)) for (e = 0; e < t.length; e++) Su(t[e]);
    }
  }
  function Cu(e, t) {
    return e(t);
  }
  function Nu() {}
  var si = !1;
  function ju(e, t, n) {
    if (si) return e(t, n);
    si = !0;
    try {
      return Cu(e, t, n);
    } finally {
      (si = !1), (vn !== null || yn !== null) && (Nu(), Eu());
    }
  }
  function Yn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ul(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var ci = !1;
  if (C)
    try {
      var Jn = {};
      Object.defineProperty(Jn, "passive", {
        get: function () {
          ci = !0;
        },
      }),
        window.addEventListener("test", Jn, Jn),
        window.removeEventListener("test", Jn, Jn);
    } catch {
      ci = !1;
    }
  function Fc(e, t, n, r, l, i, u, c, d) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (T) {
      this.onError(T);
    }
  }
  var Gn = !1,
    Br = null,
    Hr = !1,
    fi = null,
    Oc = {
      onError: function (e) {
        (Gn = !0), (Br = e);
      },
    };
  function Uc(e, t, n, r, l, i, u, c, d) {
    (Gn = !1), (Br = null), Fc.apply(Oc, arguments);
  }
  function Mc(e, t, n, r, l, i, u, c, d) {
    if ((Uc.apply(this, arguments), Gn)) {
      if (Gn) {
        var x = Br;
        (Gn = !1), (Br = null);
      } else throw Error(a(198));
      Hr || ((Hr = !0), (fi = x));
    }
  }
  function tn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ru(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Pu(e) {
    if (tn(e) !== e) throw Error(a(188));
  }
  function Bc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = tn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Pu(l), e;
          if (i === r) return Pu(l), t;
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = i);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = i.child; c; ) {
            if (c === n) {
              (u = !0), (n = i), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = i), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Tu(e) {
    return (e = Bc(e)), e !== null ? Lu(e) : null;
  }
  function Lu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Lu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zu = s.unstable_scheduleCallback,
    Au = s.unstable_cancelCallback,
    Hc = s.unstable_shouldYield,
    Vc = s.unstable_requestPaint,
    Ee = s.unstable_now,
    Wc = s.unstable_getCurrentPriorityLevel,
    di = s.unstable_ImmediatePriority,
    Iu = s.unstable_UserBlockingPriority,
    Vr = s.unstable_NormalPriority,
    _c = s.unstable_LowPriority,
    Du = s.unstable_IdlePriority,
    Wr = null,
    wt = null;
  function Qc(e) {
    if (wt && typeof wt.onCommitFiberRoot == "function")
      try {
        wt.onCommitFiberRoot(Wr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Jc,
    Kc = Math.log,
    Yc = Math.LN2;
  function Jc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Yc) | 0)) | 0;
  }
  var _r = 64,
    Qr = 4194304;
  function Xn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Kr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = Xn(c)) : ((i &= u), i !== 0 && (r = Xn(i)));
    } else (u = n & ~l), u !== 0 ? (r = Xn(u)) : i !== 0 && (r = Xn(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Gc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var u = 31 - ut(i),
        c = 1 << u,
        d = l[u];
      d === -1
        ? (!(c & n) || c & r) && (l[u] = Gc(c, t))
        : d <= t && (e.expiredLanes |= c),
        (i &= ~c);
    }
  }
  function pi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Fu() {
    var e = _r;
    return (_r <<= 1), !(_r & 4194240) && (_r = 64), e;
  }
  function mi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ut(t)),
      (e[t] = n);
  }
  function Zc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ut(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function hi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ut(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ue = 0;
  function Ou(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Uu,
    vi,
    Mu,
    Bu,
    Hu,
    yi = !1,
    Yr = [],
    Dt = null,
    Ft = null,
    Ot = null,
    qn = new Map(),
    $n = new Map(),
    Ut = [],
    qc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Vu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ft = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $n.delete(t.pointerId);
    }
  }
  function bn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = pr(t)), t !== null && vi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function $c(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Dt = bn(Dt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Ft = bn(Ft, e, t, n, r, l)), !0;
      case "mouseover":
        return (Ot = bn(Ot, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return qn.set(i, bn(qn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), $n.set(i, bn($n.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Wu(e) {
    var t = nn(e.target);
    if (t !== null) {
      var n = tn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ru(n)), t !== null)) {
            (e.blockedOn = t),
              Hu(e.priority, function () {
                Mu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (oi = r), n.target.dispatchEvent(r), (oi = null);
      } else return (t = pr(n)), t !== null && vi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function _u(e, t, n) {
    Jr(e) && n.delete(t);
  }
  function bc() {
    (yi = !1),
      Dt !== null && Jr(Dt) && (Dt = null),
      Ft !== null && Jr(Ft) && (Ft = null),
      Ot !== null && Jr(Ot) && (Ot = null),
      qn.forEach(_u),
      $n.forEach(_u);
  }
  function er(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yi ||
        ((yi = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, bc)));
  }
  function tr(e) {
    function t(l) {
      return er(l, e);
    }
    if (0 < Yr.length) {
      er(Yr[0], e);
      for (var n = 1; n < Yr.length; n++) {
        var r = Yr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && er(Dt, e),
        Ft !== null && er(Ft, e),
        Ot !== null && er(Ot, e),
        qn.forEach(t),
        $n.forEach(t),
        n = 0;
      n < Ut.length;
      n++
    )
      (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
      Wu(n), n.blockedOn === null && Ut.shift();
  }
  var gn = te.ReactCurrentBatchConfig,
    Gr = !0;
  function ef(e, t, n, r) {
    var l = ue,
      i = gn.transition;
    gn.transition = null;
    try {
      (ue = 1), gi(e, t, n, r);
    } finally {
      (ue = l), (gn.transition = i);
    }
  }
  function tf(e, t, n, r) {
    var l = ue,
      i = gn.transition;
    gn.transition = null;
    try {
      (ue = 4), gi(e, t, n, r);
    } finally {
      (ue = l), (gn.transition = i);
    }
  }
  function gi(e, t, n, r) {
    if (Gr) {
      var l = wi(e, t, n, r);
      if (l === null) Oi(e, t, r, Xr, n), Vu(e, r);
      else if ($c(l, e, t, n, r)) r.stopPropagation();
      else if ((Vu(e, r), t & 4 && -1 < qc.indexOf(e))) {
        for (; l !== null; ) {
          var i = pr(l);
          if (
            (i !== null && Uu(i),
            (i = wi(e, t, n, r)),
            i === null && Oi(e, t, r, Xr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Oi(e, t, r, null, n);
    }
  }
  var Xr = null;
  function wi(e, t, n, r) {
    if (((Xr = null), (e = ui(r)), (e = nn(e)), e !== null))
      if (((t = tn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ru(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Xr = e), null;
  }
  function Qu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Wc()) {
          case di:
            return 1;
          case Iu:
            return 4;
          case Vr:
          case _c:
            return 16;
          case Du:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    xi = null,
    Zr = null;
  function Ku() {
    if (Zr) return Zr;
    var e,
      t = xi,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Zr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function qr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $r() {
    return !0;
  }
  function Yu() {
    return !1;
  }
  function Ze(e) {
    function t(n, r, l, i, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(i) : i[c]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? $r
          : Yu),
        (this.isPropagationStopped = Yu),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = $r));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = $r));
        },
        persist: function () {},
        isPersistent: $r,
      }),
      t
    );
  }
  var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Si = Ze(wn),
    nr = _({}, wn, { view: 0, detail: 0 }),
    nf = Ze(nr),
    ki,
    Ei,
    rr,
    br = _({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ni,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== rr &&
              (rr && e.type === "mousemove"
                ? ((ki = e.screenX - rr.screenX), (Ei = e.screenY - rr.screenY))
                : (Ei = ki = 0),
              (rr = e)),
            ki);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ei;
      },
    }),
    Ju = Ze(br),
    rf = _({}, br, { dataTransfer: 0 }),
    lf = Ze(rf),
    of = _({}, nr, { relatedTarget: 0 }),
    Ci = Ze(of),
    uf = _({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    af = Ze(uf),
    sf = _({}, wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cf = Ze(sf),
    ff = _({}, wn, { data: 0 }),
    Gu = Ze(ff),
    df = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    pf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    mf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function hf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = mf[e])
      ? !!t[e]
      : !1;
  }
  function Ni() {
    return hf;
  }
  var vf = _({}, nr, {
      key: function (e) {
        if (e.key) {
          var t = df[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? pf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ni,
      charCode: function (e) {
        return e.type === "keypress" ? qr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    yf = Ze(vf),
    gf = _({}, br, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xu = Ze(gf),
    wf = _({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ni,
    }),
    xf = Ze(wf),
    Sf = _({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kf = Ze(Sf),
    Ef = _({}, br, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Cf = Ze(Ef),
    Nf = [9, 13, 27, 32],
    ji = C && "CompositionEvent" in window,
    lr = null;
  C && "documentMode" in document && (lr = document.documentMode);
  var jf = C && "TextEvent" in window && !lr,
    Zu = C && (!ji || (lr && 8 < lr && 11 >= lr)),
    qu = " ",
    $u = !1;
  function bu(e, t) {
    switch (e) {
      case "keyup":
        return Nf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ea(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = !1;
  function Rf(e, t) {
    switch (e) {
      case "compositionend":
        return ea(t);
      case "keypress":
        return t.which !== 32 ? null : (($u = !0), qu);
      case "textInput":
        return (e = t.data), e === qu && $u ? null : e;
      default:
        return null;
    }
  }
  function Pf(e, t) {
    if (xn)
      return e === "compositionend" || (!ji && bu(e, t))
        ? ((e = Ku()), (Zr = xi = Mt = null), (xn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tf[e.type] : t === "textarea";
  }
  function na(e, t, n, r) {
    ku(r),
      (t = ll(t, "onChange")),
      0 < t.length &&
        ((n = new Si("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ir = null,
    or = null;
  function Lf(e) {
    xa(e, 0);
  }
  function el(e) {
    var t = Nn(e);
    if (cu(t)) return e;
  }
  function zf(e, t) {
    if (e === "change") return t;
  }
  var ra = !1;
  if (C) {
    var Ri;
    if (C) {
      var Pi = "oninput" in document;
      if (!Pi) {
        var la = document.createElement("div");
        la.setAttribute("oninput", "return;"),
          (Pi = typeof la.oninput == "function");
      }
      Ri = Pi;
    } else Ri = !1;
    ra = Ri && (!document.documentMode || 9 < document.documentMode);
  }
  function ia() {
    ir && (ir.detachEvent("onpropertychange", oa), (or = ir = null));
  }
  function oa(e) {
    if (e.propertyName === "value" && el(or)) {
      var t = [];
      na(t, or, e, ui(e)), ju(Lf, t);
    }
  }
  function Af(e, t, n) {
    e === "focusin"
      ? (ia(), (ir = t), (or = n), ir.attachEvent("onpropertychange", oa))
      : e === "focusout" && ia();
  }
  function If(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return el(or);
  }
  function Df(e, t) {
    if (e === "click") return el(t);
  }
  function Ff(e, t) {
    if (e === "input" || e === "change") return el(t);
  }
  function Of(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : Of;
  function ur(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!S.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ua(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function aa(e, t) {
    var n = ua(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ua(n);
    }
  }
  function sa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? sa(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ca() {
    for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ur(e.document);
    }
    return t;
  }
  function Ti(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Uf(e) {
    var t = ca(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      sa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ti(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = aa(n, i));
          var u = aa(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Mf = C && "documentMode" in document && 11 >= document.documentMode,
    Sn = null,
    Li = null,
    ar = null,
    zi = !1;
  function fa(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zi ||
      Sn == null ||
      Sn !== Ur(r) ||
      ((r = Sn),
      "selectionStart" in r && Ti(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ar && ur(ar, r)) ||
        ((ar = r),
        (r = ll(Li, "onSelect")),
        0 < r.length &&
          ((t = new Si("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Sn))));
  }
  function tl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var kn = {
      animationend: tl("Animation", "AnimationEnd"),
      animationiteration: tl("Animation", "AnimationIteration"),
      animationstart: tl("Animation", "AnimationStart"),
      transitionend: tl("Transition", "TransitionEnd"),
    },
    Ai = {},
    da = {};
  C &&
    ((da = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete kn.animationend.animation,
      delete kn.animationiteration.animation,
      delete kn.animationstart.animation),
    "TransitionEvent" in window || delete kn.transitionend.transition);
  function nl(e) {
    if (Ai[e]) return Ai[e];
    if (!kn[e]) return e;
    var t = kn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in da) return (Ai[e] = t[n]);
    return e;
  }
  var pa = nl("animationend"),
    ma = nl("animationiteration"),
    ha = nl("animationstart"),
    va = nl("transitionend"),
    ya = new Map(),
    ga =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Bt(e, t) {
    ya.set(e, t), v(t, [e]);
  }
  for (var Ii = 0; Ii < ga.length; Ii++) {
    var Di = ga[Ii],
      Bf = Di.toLowerCase(),
      Hf = Di[0].toUpperCase() + Di.slice(1);
    Bt(Bf, "on" + Hf);
  }
  Bt(pa, "onAnimationEnd"),
    Bt(ma, "onAnimationIteration"),
    Bt(ha, "onAnimationStart"),
    Bt("dblclick", "onDoubleClick"),
    Bt("focusin", "onFocus"),
    Bt("focusout", "onBlur"),
    Bt(va, "onTransitionEnd"),
    E("onMouseEnter", ["mouseout", "mouseover"]),
    E("onMouseLeave", ["mouseout", "mouseover"]),
    E("onPointerEnter", ["pointerout", "pointerover"]),
    E("onPointerLeave", ["pointerout", "pointerover"]),
    v(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    v(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    v("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    v(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    v(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    v(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var sr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Vf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(sr)
    );
  function wa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Mc(r, t, void 0, e), (e.currentTarget = null);
  }
  function xa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              d = c.instance,
              x = c.currentTarget;
            if (((c = c.listener), d !== i && l.isPropagationStopped()))
              break e;
            wa(l, c, x), (i = d);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (d = c.instance),
              (x = c.currentTarget),
              (c = c.listener),
              d !== i && l.isPropagationStopped())
            )
              break e;
            wa(l, c, x), (i = d);
          }
      }
    }
    if (Hr) throw ((e = fi), (Hr = !1), (fi = null), e);
  }
  function fe(e, t) {
    var n = t[Wi];
    n === void 0 && (n = t[Wi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Sa(t, e, 2, !1), n.add(r));
  }
  function Fi(e, t, n) {
    var r = 0;
    t && (r |= 4), Sa(n, e, r, t);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function cr(e) {
    if (!e[rl]) {
      (e[rl] = !0),
        m.forEach(function (n) {
          n !== "selectionchange" && (Vf.has(n) || Fi(n, !1, e), Fi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rl] || ((t[rl] = !0), Fi("selectionchange", !1, t));
    }
  }
  function Sa(e, t, n, r) {
    switch (Qu(t)) {
      case 1:
        var l = ef;
        break;
      case 4:
        l = tf;
        break;
      default:
        l = gi;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !ci ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Oi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var d = u.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = u.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (((u = nn(c)), u === null)) return;
            if (((d = u.tag), d === 5 || d === 6)) {
              r = i = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    ju(function () {
      var x = i,
        T = ui(n),
        L = [];
      e: {
        var R = ya.get(e);
        if (R !== void 0) {
          var H = Si,
            Q = e;
          switch (e) {
            case "keypress":
              if (qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = yf;
              break;
            case "focusin":
              (Q = "focus"), (H = Ci);
              break;
            case "focusout":
              (Q = "blur"), (H = Ci);
              break;
            case "beforeblur":
            case "afterblur":
              H = Ci;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Ju;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = lf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = xf;
              break;
            case pa:
            case ma:
            case ha:
              H = af;
              break;
            case va:
              H = kf;
              break;
            case "scroll":
              H = nf;
              break;
            case "wheel":
              H = Cf;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = cf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Xu;
          }
          var K = (t & 4) !== 0,
            Ce = !K && e === "scroll",
            g = K ? (R !== null ? R + "Capture" : null) : R;
          K = [];
          for (var h = x, w; h !== null; ) {
            w = h;
            var z = w.stateNode;
            if (
              (w.tag === 5 &&
                z !== null &&
                ((w = z),
                g !== null &&
                  ((z = Yn(h, g)), z != null && K.push(fr(h, z, w)))),
              Ce)
            )
              break;
            h = h.return;
          }
          0 < K.length &&
            ((R = new H(R, Q, null, n, T)), L.push({ event: R, listeners: K }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((R = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            R &&
              n !== oi &&
              (Q = n.relatedTarget || n.fromElement) &&
              (nn(Q) || Q[Nt]))
          )
            break e;
          if (
            (H || R) &&
            ((R =
              T.window === T
                ? T
                : (R = T.ownerDocument)
                ? R.defaultView || R.parentWindow
                : window),
            H
              ? ((Q = n.relatedTarget || n.toElement),
                (H = x),
                (Q = Q ? nn(Q) : null),
                Q !== null &&
                  ((Ce = tn(Q)), Q !== Ce || (Q.tag !== 5 && Q.tag !== 6)) &&
                  (Q = null))
              : ((H = null), (Q = x)),
            H !== Q)
          ) {
            if (
              ((K = Ju),
              (z = "onMouseLeave"),
              (g = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = Xu),
                (z = "onPointerLeave"),
                (g = "onPointerEnter"),
                (h = "pointer")),
              (Ce = H == null ? R : Nn(H)),
              (w = Q == null ? R : Nn(Q)),
              (R = new K(z, h + "leave", H, n, T)),
              (R.target = Ce),
              (R.relatedTarget = w),
              (z = null),
              nn(T) === x &&
                ((K = new K(g, h + "enter", Q, n, T)),
                (K.target = w),
                (K.relatedTarget = Ce),
                (z = K)),
              (Ce = z),
              H && Q)
            )
              t: {
                for (K = H, g = Q, h = 0, w = K; w; w = En(w)) h++;
                for (w = 0, z = g; z; z = En(z)) w++;
                for (; 0 < h - w; ) (K = En(K)), h--;
                for (; 0 < w - h; ) (g = En(g)), w--;
                for (; h--; ) {
                  if (K === g || (g !== null && K === g.alternate)) break t;
                  (K = En(K)), (g = En(g));
                }
                K = null;
              }
            else K = null;
            H !== null && ka(L, R, H, K, !1),
              Q !== null && Ce !== null && ka(L, Ce, Q, K, !0);
          }
        }
        e: {
          if (
            ((R = x ? Nn(x) : window),
            (H = R.nodeName && R.nodeName.toLowerCase()),
            H === "select" || (H === "input" && R.type === "file"))
          )
            var Y = zf;
          else if (ta(R))
            if (ra) Y = Ff;
            else {
              Y = If;
              var J = Af;
            }
          else
            (H = R.nodeName) &&
              H.toLowerCase() === "input" &&
              (R.type === "checkbox" || R.type === "radio") &&
              (Y = Df);
          if (Y && (Y = Y(e, x))) {
            na(L, Y, n, T);
            break e;
          }
          J && J(e, R, x),
            e === "focusout" &&
              (J = R._wrapperState) &&
              J.controlled &&
              R.type === "number" &&
              ti(R, "number", R.value);
        }
        switch (((J = x ? Nn(x) : window), e)) {
          case "focusin":
            (ta(J) || J.contentEditable === "true") &&
              ((Sn = J), (Li = x), (ar = null));
            break;
          case "focusout":
            ar = Li = Sn = null;
            break;
          case "mousedown":
            zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zi = !1), fa(L, n, T);
            break;
          case "selectionchange":
            if (Mf) break;
          case "keydown":
          case "keyup":
            fa(L, n, T);
        }
        var G;
        if (ji)
          e: {
            switch (e) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break e;
              case "compositionend":
                Z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break e;
            }
            Z = void 0;
          }
        else
          xn
            ? bu(e, n) && (Z = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Z = "onCompositionStart");
        Z &&
          (Zu &&
            n.locale !== "ko" &&
            (xn || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && xn && (G = Ku())
              : ((Mt = T),
                (xi = "value" in Mt ? Mt.value : Mt.textContent),
                (xn = !0))),
          (J = ll(x, Z)),
          0 < J.length &&
            ((Z = new Gu(Z, e, null, n, T)),
            L.push({ event: Z, listeners: J }),
            G ? (Z.data = G) : ((G = ea(n)), G !== null && (Z.data = G)))),
          (G = jf ? Rf(e, n) : Pf(e, n)) &&
            ((x = ll(x, "onBeforeInput")),
            0 < x.length &&
              ((T = new Gu("onBeforeInput", "beforeinput", null, n, T)),
              L.push({ event: T, listeners: x }),
              (T.data = G)));
      }
      xa(L, t);
    });
  }
  function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Yn(e, n)),
        i != null && r.unshift(fr(e, i, l)),
        (i = Yn(e, t)),
        i != null && r.push(fr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function En(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ka(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        d = c.alternate,
        x = c.stateNode;
      if (d !== null && d === r) break;
      c.tag === 5 &&
        x !== null &&
        ((c = x),
        l
          ? ((d = Yn(n, i)), d != null && u.unshift(fr(n, d, c)))
          : l || ((d = Yn(n, i)), d != null && u.push(fr(n, d, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Wf = /\r\n?/g,
    _f = /\u0000|\uFFFD/g;
  function Ea(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wf,
        `
`
      )
      .replace(_f, "");
  }
  function il(e, t, n) {
    if (((t = Ea(t)), Ea(e) !== t && n)) throw Error(a(425));
  }
  function ol() {}
  var Ui = null,
    Mi = null;
  function Bi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Hi = typeof setTimeout == "function" ? setTimeout : void 0,
    Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ca = typeof Promise == "function" ? Promise : void 0,
    Kf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ca < "u"
        ? function (e) {
            return Ca.resolve(null).then(e).catch(Yf);
          }
        : Hi;
  function Yf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Vi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), tr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    tr(t);
  }
  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Na(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Cn = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + Cn,
    dr = "__reactProps$" + Cn,
    Nt = "__reactContainer$" + Cn,
    Wi = "__reactEvents$" + Cn,
    Jf = "__reactListeners$" + Cn,
    Gf = "__reactHandles$" + Cn;
  function nn(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Nt] || n[xt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Na(e); e !== null; ) {
            if ((n = e[xt])) return n;
            e = Na(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function pr(e) {
    return (
      (e = e[xt] || e[Nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Nn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ul(e) {
    return e[dr] || null;
  }
  var _i = [],
    jn = -1;
  function Vt(e) {
    return { current: e };
  }
  function de(e) {
    0 > jn || ((e.current = _i[jn]), (_i[jn] = null), jn--);
  }
  function ce(e, t) {
    jn++, (_i[jn] = e.current), (e.current = t);
  }
  var Wt = {},
    Fe = Vt(Wt),
    We = Vt(!1),
    rn = Wt;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function _e(e) {
    return (e = e.childContextTypes), e != null;
  }
  function al() {
    de(We), de(Fe);
  }
  function ja(e, t, n) {
    if (Fe.current !== Wt) throw Error(a(168));
    ce(Fe, t), ce(We, n);
  }
  function Ra(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, se(e) || "Unknown", l));
    return _({}, n, r);
  }
  function sl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Wt),
      (rn = Fe.current),
      ce(Fe, e),
      ce(We, We.current),
      !0
    );
  }
  function Pa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = Ra(e, t, rn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        de(We),
        de(Fe),
        ce(Fe, e))
      : de(We),
      ce(We, n);
  }
  var jt = null,
    cl = !1,
    Qi = !1;
  function Ta(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  function Xf(e) {
    (cl = !0), Ta(e);
  }
  function _t() {
    if (!Qi && jt !== null) {
      Qi = !0;
      var e = 0,
        t = ue;
      try {
        var n = jt;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (jt = null), (cl = !1);
      } catch (l) {
        throw (jt !== null && (jt = jt.slice(e + 1)), zu(di, _t), l);
      } finally {
        (ue = t), (Qi = !1);
      }
    }
    return null;
  }
  var Pn = [],
    Tn = 0,
    fl = null,
    dl = 0,
    et = [],
    tt = 0,
    ln = null,
    Rt = 1,
    Pt = "";
  function on(e, t) {
    (Pn[Tn++] = dl), (Pn[Tn++] = fl), (fl = e), (dl = t);
  }
  function La(e, t, n) {
    (et[tt++] = Rt), (et[tt++] = Pt), (et[tt++] = ln), (ln = e);
    var r = Rt;
    e = Pt;
    var l = 32 - ut(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - ut(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      (i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Rt = (1 << (32 - ut(t) + l)) | (n << l) | r),
        (Pt = i + e);
    } else (Rt = (1 << i) | (n << l) | r), (Pt = e);
  }
  function Ki(e) {
    e.return !== null && (on(e, 1), La(e, 1, 0));
  }
  function Yi(e) {
    for (; e === fl; )
      (fl = Pn[--Tn]), (Pn[Tn] = null), (dl = Pn[--Tn]), (Pn[Tn] = null);
    for (; e === ln; )
      (ln = et[--tt]),
        (et[tt] = null),
        (Pt = et[--tt]),
        (et[tt] = null),
        (Rt = et[--tt]),
        (et[tt] = null);
  }
  var qe = null,
    $e = null,
    me = !1,
    st = null;
  function za(e, t) {
    var n = it(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Aa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (qe = e), ($e = Ht(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (qe = e), ($e = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = ln !== null ? { id: Rt, overflow: Pt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = it(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (qe = e),
              ($e = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ji(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gi(e) {
    if (me) {
      var t = $e;
      if (t) {
        var n = t;
        if (!Aa(e, t)) {
          if (Ji(e)) throw Error(a(418));
          t = Ht(n.nextSibling);
          var r = qe;
          t && Aa(e, t)
            ? za(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (me = !1), (qe = e));
        }
      } else {
        if (Ji(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (me = !1), (qe = e);
      }
    }
  }
  function Ia(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    qe = e;
  }
  function pl(e) {
    if (e !== qe) return !1;
    if (!me) return Ia(e), (me = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Bi(e.type, e.memoizedProps))),
      t && (t = $e))
    ) {
      if (Ji(e)) throw (Da(), Error(a(418)));
      for (; t; ) za(e, t), (t = Ht(t.nextSibling));
    }
    if ((Ia(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                $e = Ht(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        $e = null;
      }
    } else $e = qe ? Ht(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    for (var e = $e; e; ) e = Ht(e.nextSibling);
  }
  function Ln() {
    ($e = qe = null), (me = !1);
  }
  function Xi(e) {
    st === null ? (st = [e]) : st.push(e);
  }
  var Zf = te.ReactCurrentBatchConfig;
  function mr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[i] : (c[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Fa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Oa(e) {
    function t(g, h) {
      if (e) {
        var w = g.deletions;
        w === null ? ((g.deletions = [h]), (g.flags |= 16)) : w.push(h);
      }
    }
    function n(g, h) {
      if (!e) return null;
      for (; h !== null; ) t(g, h), (h = h.sibling);
      return null;
    }
    function r(g, h) {
      for (g = new Map(); h !== null; )
        h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
      return g;
    }
    function l(g, h) {
      return (g = qt(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function i(g, h, w) {
      return (
        (g.index = w),
        e
          ? ((w = g.alternate),
            w !== null
              ? ((w = w.index), w < h ? ((g.flags |= 2), h) : w)
              : ((g.flags |= 2), h))
          : ((g.flags |= 1048576), h)
      );
    }
    function u(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function c(g, h, w, z) {
      return h === null || h.tag !== 6
        ? ((h = Vo(w, g.mode, z)), (h.return = g), h)
        : ((h = l(h, w)), (h.return = g), h);
    }
    function d(g, h, w, z) {
      var Y = w.type;
      return Y === ve
        ? T(g, h, w.props.children, z, w.key)
        : h !== null &&
          (h.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === Ve &&
              Fa(Y) === h.type))
        ? ((z = l(h, w.props)), (z.ref = mr(g, h, w)), (z.return = g), z)
        : ((z = Ml(w.type, w.key, w.props, null, g.mode, z)),
          (z.ref = mr(g, h, w)),
          (z.return = g),
          z);
    }
    function x(g, h, w, z) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== w.containerInfo ||
        h.stateNode.implementation !== w.implementation
        ? ((h = Wo(w, g.mode, z)), (h.return = g), h)
        : ((h = l(h, w.children || [])), (h.return = g), h);
    }
    function T(g, h, w, z, Y) {
      return h === null || h.tag !== 7
        ? ((h = mn(w, g.mode, z, Y)), (h.return = g), h)
        : ((h = l(h, w)), (h.return = g), h);
    }
    function L(g, h, w) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Vo("" + h, g.mode, w)), (h.return = g), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ae:
            return (
              (w = Ml(h.type, h.key, h.props, null, g.mode, w)),
              (w.ref = mr(g, null, h)),
              (w.return = g),
              w
            );
          case we:
            return (h = Wo(h, g.mode, w)), (h.return = g), h;
          case Ve:
            var z = h._init;
            return L(g, z(h._payload), w);
        }
        if (_n(h) || X(h))
          return (h = mn(h, g.mode, w, null)), (h.return = g), h;
        ml(g, h);
      }
      return null;
    }
    function R(g, h, w, z) {
      var Y = h !== null ? h.key : null;
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return Y !== null ? null : c(g, h, "" + w, z);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case ae:
            return w.key === Y ? d(g, h, w, z) : null;
          case we:
            return w.key === Y ? x(g, h, w, z) : null;
          case Ve:
            return (Y = w._init), R(g, h, Y(w._payload), z);
        }
        if (_n(w) || X(w)) return Y !== null ? null : T(g, h, w, z, null);
        ml(g, w);
      }
      return null;
    }
    function H(g, h, w, z, Y) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return (g = g.get(w) || null), c(h, g, "" + z, Y);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ae:
            return (
              (g = g.get(z.key === null ? w : z.key) || null), d(h, g, z, Y)
            );
          case we:
            return (
              (g = g.get(z.key === null ? w : z.key) || null), x(h, g, z, Y)
            );
          case Ve:
            var J = z._init;
            return H(g, h, w, J(z._payload), Y);
        }
        if (_n(z) || X(z)) return (g = g.get(w) || null), T(h, g, z, Y, null);
        ml(h, z);
      }
      return null;
    }
    function Q(g, h, w, z) {
      for (
        var Y = null, J = null, G = h, Z = (h = 0), Ae = null;
        G !== null && Z < w.length;
        Z++
      ) {
        G.index > Z ? ((Ae = G), (G = null)) : (Ae = G.sibling);
        var ie = R(g, G, w[Z], z);
        if (ie === null) {
          G === null && (G = Ae);
          break;
        }
        e && G && ie.alternate === null && t(g, G),
          (h = i(ie, h, Z)),
          J === null ? (Y = ie) : (J.sibling = ie),
          (J = ie),
          (G = Ae);
      }
      if (Z === w.length) return n(g, G), me && on(g, Z), Y;
      if (G === null) {
        for (; Z < w.length; Z++)
          (G = L(g, w[Z], z)),
            G !== null &&
              ((h = i(G, h, Z)),
              J === null ? (Y = G) : (J.sibling = G),
              (J = G));
        return me && on(g, Z), Y;
      }
      for (G = r(g, G); Z < w.length; Z++)
        (Ae = H(G, g, Z, w[Z], z)),
          Ae !== null &&
            (e &&
              Ae.alternate !== null &&
              G.delete(Ae.key === null ? Z : Ae.key),
            (h = i(Ae, h, Z)),
            J === null ? (Y = Ae) : (J.sibling = Ae),
            (J = Ae));
      return (
        e &&
          G.forEach(function ($t) {
            return t(g, $t);
          }),
        me && on(g, Z),
        Y
      );
    }
    function K(g, h, w, z) {
      var Y = X(w);
      if (typeof Y != "function") throw Error(a(150));
      if (((w = Y.call(w)), w == null)) throw Error(a(151));
      for (
        var J = (Y = null), G = h, Z = (h = 0), Ae = null, ie = w.next();
        G !== null && !ie.done;
        Z++, ie = w.next()
      ) {
        G.index > Z ? ((Ae = G), (G = null)) : (Ae = G.sibling);
        var $t = R(g, G, ie.value, z);
        if ($t === null) {
          G === null && (G = Ae);
          break;
        }
        e && G && $t.alternate === null && t(g, G),
          (h = i($t, h, Z)),
          J === null ? (Y = $t) : (J.sibling = $t),
          (J = $t),
          (G = Ae);
      }
      if (ie.done) return n(g, G), me && on(g, Z), Y;
      if (G === null) {
        for (; !ie.done; Z++, ie = w.next())
          (ie = L(g, ie.value, z)),
            ie !== null &&
              ((h = i(ie, h, Z)),
              J === null ? (Y = ie) : (J.sibling = ie),
              (J = ie));
        return me && on(g, Z), Y;
      }
      for (G = r(g, G); !ie.done; Z++, ie = w.next())
        (ie = H(G, g, Z, ie.value, z)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              G.delete(ie.key === null ? Z : ie.key),
            (h = i(ie, h, Z)),
            J === null ? (Y = ie) : (J.sibling = ie),
            (J = ie));
      return (
        e &&
          G.forEach(function (Pd) {
            return t(g, Pd);
          }),
        me && on(g, Z),
        Y
      );
    }
    function Ce(g, h, w, z) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === ve &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case ae:
            e: {
              for (var Y = w.key, J = h; J !== null; ) {
                if (J.key === Y) {
                  if (((Y = w.type), Y === ve)) {
                    if (J.tag === 7) {
                      n(g, J.sibling),
                        (h = l(J, w.props.children)),
                        (h.return = g),
                        (g = h);
                      break e;
                    }
                  } else if (
                    J.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === Ve &&
                      Fa(Y) === J.type)
                  ) {
                    n(g, J.sibling),
                      (h = l(J, w.props)),
                      (h.ref = mr(g, J, w)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                  n(g, J);
                  break;
                } else t(g, J);
                J = J.sibling;
              }
              w.type === ve
                ? ((h = mn(w.props.children, g.mode, z, w.key)),
                  (h.return = g),
                  (g = h))
                : ((z = Ml(w.type, w.key, w.props, null, g.mode, z)),
                  (z.ref = mr(g, h, w)),
                  (z.return = g),
                  (g = z));
            }
            return u(g);
          case we:
            e: {
              for (J = w.key; h !== null; ) {
                if (h.key === J)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === w.containerInfo &&
                    h.stateNode.implementation === w.implementation
                  ) {
                    n(g, h.sibling),
                      (h = l(h, w.children || [])),
                      (h.return = g),
                      (g = h);
                    break e;
                  } else {
                    n(g, h);
                    break;
                  }
                else t(g, h);
                h = h.sibling;
              }
              (h = Wo(w, g.mode, z)), (h.return = g), (g = h);
            }
            return u(g);
          case Ve:
            return (J = w._init), Ce(g, h, J(w._payload), z);
        }
        if (_n(w)) return Q(g, h, w, z);
        if (X(w)) return K(g, h, w, z);
        ml(g, w);
      }
      return (typeof w == "string" && w !== "") || typeof w == "number"
        ? ((w = "" + w),
          h !== null && h.tag === 6
            ? (n(g, h.sibling), (h = l(h, w)), (h.return = g), (g = h))
            : (n(g, h), (h = Vo(w, g.mode, z)), (h.return = g), (g = h)),
          u(g))
        : n(g, h);
    }
    return Ce;
  }
  var zn = Oa(!0),
    Ua = Oa(!1),
    hl = Vt(null),
    vl = null,
    An = null,
    Zi = null;
  function qi() {
    Zi = An = vl = null;
  }
  function $i(e) {
    var t = hl.current;
    de(hl), (e._currentValue = t);
  }
  function bi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function In(e, t) {
    (vl = e),
      (Zi = An = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Qe = !0), (e.firstContext = null));
  }
  function nt(e) {
    var t = e._currentValue;
    if (Zi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
        if (vl === null) throw Error(a(308));
        (An = e), (vl.dependencies = { lanes: 0, firstContext: e });
      } else An = An.next = e;
    return t;
  }
  var un = null;
  function eo(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function Ma(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), eo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Tt(e, r)
    );
  }
  function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Qt = !1;
  function to(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ba(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ne & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Tt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), eo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Tt(e, n)
    );
  }
  function yl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), hi(e, n);
    }
  }
  function Ha(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function gl(e, t, n, r) {
    var l = e.updateQueue;
    Qt = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c,
        x = d.next;
      (d.next = null), u === null ? (i = x) : (u.next = x), (u = d);
      var T = e.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (c = T.lastBaseUpdate),
        c !== u &&
          (c === null ? (T.firstBaseUpdate = x) : (c.next = x),
          (T.lastBaseUpdate = d)));
    }
    if (i !== null) {
      var L = l.baseState;
      (u = 0), (T = x = d = null), (c = i);
      do {
        var R = c.lane,
          H = c.eventTime;
        if ((r & R) === R) {
          T !== null &&
            (T = T.next =
              {
                eventTime: H,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var Q = e,
              K = c;
            switch (((R = t), (H = n), K.tag)) {
              case 1:
                if (((Q = K.payload), typeof Q == "function")) {
                  L = Q.call(H, L, R);
                  break e;
                }
                L = Q;
                break e;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = K.payload),
                  (R = typeof Q == "function" ? Q.call(H, L, R) : Q),
                  R == null)
                )
                  break e;
                L = _({}, L, R);
                break e;
              case 2:
                Qt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (R = l.effects),
            R === null ? (l.effects = [c]) : R.push(c));
        } else
          (H = {
            eventTime: H,
            lane: R,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            T === null ? ((x = T = H), (d = L)) : (T = T.next = H),
            (u |= R);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (R = c),
            (c = R.next),
            (R.next = null),
            (l.lastBaseUpdate = R),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (T === null && (d = L),
        (l.baseState = d),
        (l.firstBaseUpdate = x),
        (l.lastBaseUpdate = T),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (cn |= u), (e.lanes = u), (e.memoizedState = L);
    }
  }
  function Va(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var hr = {},
    St = Vt(hr),
    vr = Vt(hr),
    yr = Vt(hr);
  function an(e) {
    if (e === hr) throw Error(a(174));
    return e;
  }
  function no(e, t) {
    switch ((ce(yr, t), ce(vr, e), ce(St, hr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ri(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ri(t, e));
    }
    de(St), ce(St, t);
  }
  function Dn() {
    de(St), de(vr), de(yr);
  }
  function Wa(e) {
    an(yr.current);
    var t = an(St.current),
      n = ri(t, e.type);
    t !== n && (ce(vr, e), ce(St, n));
  }
  function ro(e) {
    vr.current === e && (de(St), de(vr));
  }
  var ye = Vt(0);
  function wl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var lo = [];
  function io() {
    for (var e = 0; e < lo.length; e++)
      lo[e]._workInProgressVersionPrimary = null;
    lo.length = 0;
  }
  var xl = te.ReactCurrentDispatcher,
    oo = te.ReactCurrentBatchConfig,
    sn = 0,
    ge = null,
    Re = null,
    Le = null,
    Sl = !1,
    gr = !1,
    wr = 0,
    qf = 0;
  function Oe() {
    throw Error(a(321));
  }
  function uo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function ao(e, t, n, r, l, i) {
    if (
      ((sn = i),
      (ge = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (xl.current = e === null || e.memoizedState === null ? td : nd),
      (e = n(r, l)),
      gr)
    ) {
      i = 0;
      do {
        if (((gr = !1), (wr = 0), 25 <= i)) throw Error(a(301));
        (i += 1),
          (Le = Re = null),
          (t.updateQueue = null),
          (xl.current = rd),
          (e = n(r, l));
      } while (gr);
    }
    if (
      ((xl.current = Cl),
      (t = Re !== null && Re.next !== null),
      (sn = 0),
      (Le = Re = ge = null),
      (Sl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function so() {
    var e = wr !== 0;
    return (wr = 0), e;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Le === null ? (ge.memoizedState = Le = e) : (Le = Le.next = e), Le;
  }
  function rt() {
    if (Re === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Le === null ? ge.memoizedState : Le.next;
    if (t !== null) (Le = t), (Re = e);
    else {
      if (e === null) throw Error(a(310));
      (Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        Le === null ? (ge.memoizedState = Le = e) : (Le = Le.next = e);
    }
    return Le;
  }
  function xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function co(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Re,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = i.next), (i.next = u);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var c = (u = null),
        d = null,
        x = i;
      do {
        var T = x.lane;
        if ((sn & T) === T)
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (r = x.hasEagerState ? x.eagerState : e(r, x.action));
        else {
          var L = {
            lane: T,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          d === null ? ((c = d = L), (u = r)) : (d = d.next = L),
            (ge.lanes |= T),
            (cn |= T);
        }
        x = x.next;
      } while (x !== null && x !== i);
      d === null ? (u = r) : (d.next = c),
        at(r, t.memoizedState) || (Qe = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = d),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (ge.lanes |= i), (cn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function fo(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== l);
      at(i, t.memoizedState) || (Qe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function _a() {}
  function Qa(e, t) {
    var n = ge,
      r = rt(),
      l = t(),
      i = !at(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Qe = !0)),
      (r = r.queue),
      po(Ja.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Sr(9, Ya.bind(null, n, r, l, t), void 0, null),
        ze === null)
      )
        throw Error(a(349));
      sn & 30 || Ka(n, t, l);
    }
    return l;
  }
  function Ka(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ge.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ya(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ga(t) && Xa(e);
  }
  function Ja(e, t, n) {
    return n(function () {
      Ga(t) && Xa(e);
    });
  }
  function Ga(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function Xa(e) {
    var t = Tt(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function Za(e) {
    var t = kt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = ed.bind(null, ge, e)),
      [t.memoizedState, e]
    );
  }
  function Sr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ge.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function qa() {
    return rt().memoizedState;
  }
  function kl(e, t, n, r) {
    var l = kt();
    (ge.flags |= e),
      (l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function El(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Re !== null) {
      var u = Re.memoizedState;
      if (((i = u.destroy), r !== null && uo(r, u.deps))) {
        l.memoizedState = Sr(t, n, i, r);
        return;
      }
    }
    (ge.flags |= e), (l.memoizedState = Sr(1 | t, n, i, r));
  }
  function $a(e, t) {
    return kl(8390656, 8, e, t);
  }
  function po(e, t) {
    return El(2048, 8, e, t);
  }
  function ba(e, t) {
    return El(4, 2, e, t);
  }
  function es(e, t) {
    return El(4, 4, e, t);
  }
  function ts(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ns(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), El(4, 4, ts.bind(null, t, e), n)
    );
  }
  function mo() {}
  function rs(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && uo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ls(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && uo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function is(e, t, n) {
    return sn & 21
      ? (at(n, t) ||
          ((n = Fu()), (ge.lanes |= n), (cn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
  }
  function $f(e, t) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = oo.transition;
    oo.transition = {};
    try {
      e(!1), t();
    } finally {
      (ue = n), (oo.transition = r);
    }
  }
  function os() {
    return rt().memoizedState;
  }
  function bf(e, t, n) {
    var r = Xt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      us(e))
    )
      as(t, n);
    else if (((n = Ma(e, t, n, r)), n !== null)) {
      var l = He();
      pt(n, e, r, l), ss(n, t, r);
    }
  }
  function ed(e, t, n) {
    var r = Xt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (us(e)) as(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), at(c, u))) {
            var d = t.interleaved;
            d === null
              ? ((l.next = l), eo(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ma(e, t, l, r)),
        n !== null && ((l = He()), pt(n, e, r, l), ss(n, t, r));
    }
  }
  function us(e) {
    var t = e.alternate;
    return e === ge || (t !== null && t === ge);
  }
  function as(e, t) {
    gr = Sl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ss(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), hi(e, n);
    }
  }
  var Cl = {
      readContext: nt,
      useCallback: Oe,
      useContext: Oe,
      useEffect: Oe,
      useImperativeHandle: Oe,
      useInsertionEffect: Oe,
      useLayoutEffect: Oe,
      useMemo: Oe,
      useReducer: Oe,
      useRef: Oe,
      useState: Oe,
      useDebugValue: Oe,
      useDeferredValue: Oe,
      useTransition: Oe,
      useMutableSource: Oe,
      useSyncExternalStore: Oe,
      useId: Oe,
      unstable_isNewReconciler: !1,
    },
    td = {
      readContext: nt,
      useCallback: function (e, t) {
        return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nt,
      useEffect: $a,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          kl(4194308, 4, ts.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return kl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return kl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = kt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = kt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = bf.bind(null, ge, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = kt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Za,
      useDebugValue: mo,
      useDeferredValue: function (e) {
        return (kt().memoizedState = e);
      },
      useTransition: function () {
        var e = Za(!1),
          t = e[0];
        return (e = $f.bind(null, e[1])), (kt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ge,
          l = kt();
        if (me) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(a(349));
          sn & 30 || Ka(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          $a(Ja.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Sr(9, Ya.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = kt(),
          t = ze.identifierPrefix;
        if (me) {
          var n = Pt,
            r = Rt;
          (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = wr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = qf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    nd = {
      readContext: nt,
      useCallback: rs,
      useContext: nt,
      useEffect: po,
      useImperativeHandle: ns,
      useInsertionEffect: ba,
      useLayoutEffect: es,
      useMemo: ls,
      useReducer: co,
      useRef: qa,
      useState: function () {
        return co(xr);
      },
      useDebugValue: mo,
      useDeferredValue: function (e) {
        var t = rt();
        return is(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = co(xr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: _a,
      useSyncExternalStore: Qa,
      useId: os,
      unstable_isNewReconciler: !1,
    },
    rd = {
      readContext: nt,
      useCallback: rs,
      useContext: nt,
      useEffect: po,
      useImperativeHandle: ns,
      useInsertionEffect: ba,
      useLayoutEffect: es,
      useMemo: ls,
      useReducer: fo,
      useRef: qa,
      useState: function () {
        return fo(xr);
      },
      useDebugValue: mo,
      useDeferredValue: function (e) {
        var t = rt();
        return Re === null ? (t.memoizedState = e) : is(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = fo(xr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: _a,
      useSyncExternalStore: Qa,
      useId: os,
      unstable_isNewReconciler: !1,
    };
  function ct(e, t) {
    if (e && e.defaultProps) {
      (t = _({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ho(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Nl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? tn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = He(),
        l = Xt(e),
        i = Lt(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Kt(e, i, l)),
        t !== null && (pt(t, e, l, r), yl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = He(),
        l = Xt(e),
        i = Lt(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Kt(e, i, l)),
        t !== null && (pt(t, e, l, r), yl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = He(),
        r = Xt(e),
        l = Lt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Kt(e, l, r)),
        t !== null && (pt(t, e, r, n), yl(t, e, r));
    },
  };
  function cs(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ur(n, r) || !ur(l, i)
        : !0
    );
  }
  function fs(e, t, n) {
    var r = !1,
      l = Wt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = nt(i))
        : ((l = _e(t) ? rn : Fe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Rn(e, l) : Wt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Nl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function ds(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
  }
  function vo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), to(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = nt(i))
      : ((i = _e(t) ? rn : Fe.current), (l.context = Rn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (ho(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Nl.enqueueReplaceState(l, l.state, null),
        gl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += re(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function yo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function go(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var ld = typeof WeakMap == "function" ? WeakMap : Map;
  function ps(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Al || ((Al = !0), (Io = r)), go(e, t);
      }),
      n
    );
  }
  function ms(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          go(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          go(e, t),
            typeof r != "function" &&
              (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ld();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = gd.bind(null, e, t, n)), t.then(e, e));
  }
  function vs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ys(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Lt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var id = te.ReactCurrentOwner,
    Qe = !1;
  function Be(e, t, n, r) {
    t.child = e === null ? Ua(t, null, n, r) : zn(t, e.child, n, r);
  }
  function gs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      In(t, l),
      (r = ao(e, t, n, r, i, l)),
      (n = so()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (me && n && Ki(t), (t.flags |= 1), Be(e, t, r, l), t.child)
    );
  }
  function ws(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Ho(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), xs(e, t, i, r, l))
        : ((e = Ml(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ur), n(u, r) && e.ref === t.ref)
      )
        return zt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = qt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function xs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ur(i, r) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Qe = !0);
        else return (t.lanes = e.lanes), zt(e, t, l);
    }
    return wo(e, t, n, r, l);
  }
  function Ss(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(Un, be),
          (be |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(Un, be),
            (be |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          ce(Un, be),
          (be |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(Un, be),
        (be |= r);
    return Be(e, t, l, n), t.child;
  }
  function ks(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function wo(e, t, n, r, l) {
    var i = _e(n) ? rn : Fe.current;
    return (
      (i = Rn(t, i)),
      In(t, l),
      (n = ao(e, t, n, r, i, l)),
      (r = so()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (me && r && Ki(t), (t.flags |= 1), Be(e, t, n, l), t.child)
    );
  }
  function Es(e, t, n, r, l) {
    if (_e(n)) {
      var i = !0;
      sl(t);
    } else i = !1;
    if ((In(t, l), t.stateNode === null))
      Rl(e, t), fs(t, n, r), vo(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var d = u.context,
        x = n.contextType;
      typeof x == "object" && x !== null
        ? (x = nt(x))
        : ((x = _e(n) ? rn : Fe.current), (x = Rn(t, x)));
      var T = n.getDerivedStateFromProps,
        L =
          typeof T == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || d !== x) && ds(t, u, r, x)),
        (Qt = !1);
      var R = t.memoizedState;
      (u.state = R),
        gl(t, r, u, l),
        (d = t.memoizedState),
        c !== r || R !== d || We.current || Qt
          ? (typeof T == "function" && (ho(t, n, T, r), (d = t.memoizedState)),
            (c = Qt || cs(t, n, c, r, R, d, x))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (u.props = r),
            (u.state = d),
            (u.context = x),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        Ba(e, t),
        (c = t.memoizedProps),
        (x = t.type === t.elementType ? c : ct(t.type, c)),
        (u.props = x),
        (L = t.pendingProps),
        (R = u.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = nt(d))
          : ((d = _e(n) ? rn : Fe.current), (d = Rn(t, d)));
      var H = n.getDerivedStateFromProps;
      (T =
        typeof H == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== L || R !== d) && ds(t, u, r, d)),
        (Qt = !1),
        (R = t.memoizedState),
        (u.state = R),
        gl(t, r, u, l);
      var Q = t.memoizedState;
      c !== L || R !== Q || We.current || Qt
        ? (typeof H == "function" && (ho(t, n, H, r), (Q = t.memoizedState)),
          (x = Qt || cs(t, n, x, r, R, Q, d) || !1)
            ? (T ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, Q, d),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, Q, d)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Q)),
          (u.props = r),
          (u.state = Q),
          (u.context = d),
          (r = x))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return xo(e, t, n, r, i, l);
  }
  function xo(e, t, n, r, l, i) {
    ks(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Pa(t, n, !1), zt(e, t, i);
    (r = t.stateNode), (id.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = zn(t, e.child, null, i)), (t.child = zn(t, null, c, i)))
        : Be(e, t, c, i),
      (t.memoizedState = r.state),
      l && Pa(t, n, !0),
      t.child
    );
  }
  function Cs(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ja(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ja(e, t.context, !1),
      no(e, t.containerInfo);
  }
  function Ns(e, t, n, r, l) {
    return Ln(), Xi(l), (t.flags |= 256), Be(e, t, n, r), t.child;
  }
  var So = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ko(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function js(e, t, n) {
    var r = t.pendingProps,
      l = ye.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(ye, l & 1),
      e === null)
    )
      return (
        Gi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = Bl(u, r, 0, null)),
                (e = mn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = ko(n)),
                (t.memoizedState = So),
                e)
              : Eo(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return od(e, t, u, r, c, l, n);
    if (i) {
      (i = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var d = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = qt(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (i = qt(c, i)) : ((i = mn(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? ko(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = So),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = qt(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Eo(e, t) {
    return (
      (t = Bl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function jl(e, t, n, r) {
    return (
      r !== null && Xi(r),
      zn(t, e.child, null, n),
      (e = Eo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function od(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = yo(Error(a(422)))), jl(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Bl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = mn(i, l, u, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && zn(t, e.child, null, u),
          (t.child.memoizedState = ko(u)),
          (t.memoizedState = So),
          i);
    if (!(t.mode & 1)) return jl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (i = Error(a(419))), (r = yo(i, r, void 0)), jl(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), Qe || c)) {
      if (((r = ze), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Tt(e, l), pt(r, e, l, -1));
      }
      return Bo(), (r = yo(Error(a(421)))), jl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = wd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        ($e = Ht(l.nextSibling)),
        (qe = t),
        (me = !0),
        (st = null),
        e !== null &&
          ((et[tt++] = Rt),
          (et[tt++] = Pt),
          (et[tt++] = ln),
          (Rt = e.id),
          (Pt = e.overflow),
          (ln = t)),
        (t = Eo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Rs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), bi(e.return, t, n);
  }
  function Co(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Ps(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Be(e, t, r.children, n), (r = ye.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
          else if (e.tag === 19) Rs(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ce(ye, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && wl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Co(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && wl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Co(t, !0, n, null, i);
          break;
        case "together":
          Co(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Rl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function zt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (cn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = qt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function ud(e, t, n) {
    switch (t.tag) {
      case 3:
        Cs(t), Ln();
        break;
      case 5:
        Wa(t);
        break;
      case 1:
        _e(t.type) && sl(t);
        break;
      case 4:
        no(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ce(hl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(ye, ye.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? js(e, t, n)
            : (ce(ye, ye.current & 1),
              (e = zt(e, t, n)),
              e !== null ? e.sibling : null);
        ce(ye, ye.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ps(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(ye, ye.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ss(e, t, n);
    }
    return zt(e, t, n);
  }
  var Ts, No, Ls, zs;
  (Ts = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (No = function () {}),
    (Ls = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), an(St.current);
        var i = null;
        switch (n) {
          case "input":
            (l = bl(e, l)), (r = bl(e, r)), (i = []);
            break;
          case "select":
            (l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = ni(e, l)), (r = ni(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ol);
        }
        li(n, r);
        var u;
        n = null;
        for (x in l)
          if (!r.hasOwnProperty(x) && l.hasOwnProperty(x) && l[x] != null)
            if (x === "style") {
              var c = l[x];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              x !== "dangerouslySetInnerHTML" &&
                x !== "children" &&
                x !== "suppressContentEditableWarning" &&
                x !== "suppressHydrationWarning" &&
                x !== "autoFocus" &&
                (f.hasOwnProperty(x)
                  ? i || (i = [])
                  : (i = i || []).push(x, null));
        for (x in r) {
          var d = r[x];
          if (
            ((c = l != null ? l[x] : void 0),
            r.hasOwnProperty(x) && d !== c && (d != null || c != null))
          )
            if (x === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (d && d.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in d)
                  d.hasOwnProperty(u) &&
                    c[u] !== d[u] &&
                    (n || (n = {}), (n[u] = d[u]));
              } else n || (i || (i = []), i.push(x, n)), (n = d);
            else
              x === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (c = c ? c.__html : void 0),
                  d != null && c !== d && (i = i || []).push(x, d))
                : x === "children"
                ? (typeof d != "string" && typeof d != "number") ||
                  (i = i || []).push(x, "" + d)
                : x !== "suppressContentEditableWarning" &&
                  x !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(x)
                    ? (d != null && x === "onScroll" && fe("scroll", e),
                      i || c === d || (i = []))
                    : (i = i || []).push(x, d));
        }
        n && (i = i || []).push("style", n);
        var x = i;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (zs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function kr(e, t) {
    if (!me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function ad(e, t, n) {
    var r = t.pendingProps;
    switch ((Yi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return _e(t.type) && al(), Ue(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Dn(),
          de(We),
          de(Fe),
          io(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), st !== null && (Oo(st), (st = null)))),
          No(e, t),
          Ue(t),
          null
        );
      case 5:
        ro(t);
        var l = an(yr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ls(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Ue(t), null;
          }
          if (((e = an(St.current)), pl(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[xt] = t), (r[dr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < sr.length; l++) fe(sr[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                fu(r, i), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                mu(r, i), fe("invalid", r);
            }
            li(n, i), (l = null);
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var c = i[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (i.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (i.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : f.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                Or(r), pu(r, i, !0);
                break;
              case "textarea":
                Or(r), vu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ol);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = yu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[xt] = t),
              (e[dr] = r),
              Ts(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = ii(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < sr.length; l++) fe(sr[l], e);
                  l = r;
                  break;
                case "source":
                  fe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (l = r);
                  break;
                case "details":
                  fe("toggle", e), (l = r);
                  break;
                case "input":
                  fu(e, r), (l = bl(e, r)), fe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  mu(e, r), (l = ni(e, r)), fe("invalid", e);
                  break;
                default:
                  l = r;
              }
              li(n, l), (c = l);
              for (i in c)
                if (c.hasOwnProperty(i)) {
                  var d = c[i];
                  i === "style"
                    ? xu(e, d)
                    : i === "dangerouslySetInnerHTML"
                    ? ((d = d ? d.__html : void 0), d != null && gu(e, d))
                    : i === "children"
                    ? typeof d == "string"
                      ? (n !== "textarea" || d !== "") && Qn(e, d)
                      : typeof d == "number" && Qn(e, "" + d)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (f.hasOwnProperty(i)
                        ? d != null && i === "onScroll" && fe("scroll", e)
                        : d != null && q(e, i, d, u));
                }
              switch (n) {
                case "input":
                  Or(e), pu(e, r, !1);
                  break;
                case "textarea":
                  Or(e), vu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? hn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        hn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ol);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ue(t), null;
      case 6:
        if (e && t.stateNode != null) zs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = an(yr.current)), an(St.current), pl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[xt] = t),
              (i = r.nodeValue !== n) && ((e = qe), e !== null))
            )
              switch (e.tag) {
                case 3:
                  il(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    il(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[xt] = t),
              (t.stateNode = r);
        }
        return Ue(t), null;
      case 13:
        if (
          (de(ye),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (me && $e !== null && t.mode & 1 && !(t.flags & 128))
            Da(), Ln(), (t.flags |= 98560), (i = !1);
          else if (((i = pl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(a(317));
              i[xt] = t;
            } else
              Ln(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (i = !1);
          } else st !== null && (Oo(st), (st = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ye.current & 1 ? Pe === 0 && (Pe = 3) : Bo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ue(t),
            null);
      case 4:
        return (
          Dn(),
          No(e, t),
          e === null && cr(t.stateNode.containerInfo),
          Ue(t),
          null
        );
      case 10:
        return $i(t.type._context), Ue(t), null;
      case 17:
        return _e(t.type) && al(), Ue(t), null;
      case 19:
        if ((de(ye), (i = t.memoizedState), i === null)) return Ue(t), null;
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) kr(i, !1);
          else {
            if (Pe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = wl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      kr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ce(ye, (ye.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Ee() > Mn &&
              ((t.flags |= 128), (r = !0), kr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = wl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                kr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !me)
              )
                return Ue(t), null;
            } else
              2 * Ee() - i.renderingStartTime > Mn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), kr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Ee()),
            (t.sibling = null),
            (n = ye.current),
            ce(ye, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          Mo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? be & 1073741824 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function sd(e, t) {
    switch ((Yi(t), t.tag)) {
      case 1:
        return (
          _e(t.type) && al(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dn(),
          de(We),
          de(Fe),
          io(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ro(t), null;
      case 13:
        if (
          (de(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Ln();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return de(ye), null;
      case 4:
        return Dn(), null;
      case 10:
        return $i(t.type._context), null;
      case 22:
      case 23:
        return Mo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pl = !1,
    Me = !1,
    cd = typeof WeakSet == "function" ? WeakSet : Set,
    W = null;
  function On(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ke(e, t, r);
        }
      else n.current = null;
  }
  function jo(e, t, n) {
    try {
      n();
    } catch (r) {
      ke(e, t, r);
    }
  }
  var As = !1;
  function fd(e, t) {
    if (((Ui = Gr), (e = ca()), Ti(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              d = -1,
              x = 0,
              T = 0,
              L = e,
              R = null;
            t: for (;;) {
              for (
                var H;
                L !== n || (l !== 0 && L.nodeType !== 3) || (c = u + l),
                  L !== i || (r !== 0 && L.nodeType !== 3) || (d = u + r),
                  L.nodeType === 3 && (u += L.nodeValue.length),
                  (H = L.firstChild) !== null;

              )
                (R = L), (L = H);
              for (;;) {
                if (L === e) break t;
                if (
                  (R === n && ++x === l && (c = u),
                  R === i && ++T === r && (d = u),
                  (H = L.nextSibling) !== null)
                )
                  break;
                (L = R), (R = L.parentNode);
              }
              L = H;
            }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Mi = { focusedElem: e, selectionRange: n }, Gr = !1, W = t;
      W !== null;

    )
      if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (W = e);
      else
        for (; W !== null; ) {
          t = W;
          try {
            var Q = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Q !== null) {
                    var K = Q.memoizedProps,
                      Ce = Q.memoizedState,
                      g = t.stateNode,
                      h = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : ct(t.type, K),
                        Ce
                      );
                    g.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1
                    ? (w.textContent = "")
                    : w.nodeType === 9 &&
                      w.documentElement &&
                      w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (z) {
            ke(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (W = e);
            break;
          }
          W = t.return;
        }
    return (Q = As), (As = !1), Q;
  }
  function Er(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && jo(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Tl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ro(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Is(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Is(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[xt],
          delete t[dr],
          delete t[Wi],
          delete t[Jf],
          delete t[Gf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ds(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Fs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ds(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Po(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ol));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Po(e, t, n), e = e.sibling; e !== null; )
        Po(e, t, n), (e = e.sibling);
  }
  function To(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (To(e, t, n), e = e.sibling; e !== null; )
        To(e, t, n), (e = e.sibling);
  }
  var Ie = null,
    ft = !1;
  function Yt(e, t, n) {
    for (n = n.child; n !== null; ) Os(e, t, n), (n = n.sibling);
  }
  function Os(e, t, n) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(Wr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Me || On(n, t);
      case 6:
        var r = Ie,
          l = ft;
        (Ie = null),
          Yt(e, t, n),
          (Ie = r),
          (ft = l),
          Ie !== null &&
            (ft
              ? ((e = Ie),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ie.removeChild(n.stateNode));
        break;
      case 18:
        Ie !== null &&
          (ft
            ? ((e = Ie),
              (n = n.stateNode),
              e.nodeType === 8
                ? Vi(e.parentNode, n)
                : e.nodeType === 1 && Vi(e, n),
              tr(e))
            : Vi(Ie, n.stateNode));
        break;
      case 4:
        (r = Ie),
          (l = ft),
          (Ie = n.stateNode.containerInfo),
          (ft = !0),
          Yt(e, t, n),
          (Ie = r),
          (ft = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Me &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            (i = i.tag),
              u !== void 0 && (i & 2 || i & 4) && jo(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Yt(e, t, n);
        break;
      case 1:
        if (
          !Me &&
          (On(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            ke(n, t, c);
          }
        Yt(e, t, n);
        break;
      case 21:
        Yt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Me = (r = Me) || n.memoizedState !== null), Yt(e, t, n), (Me = r))
          : Yt(e, t, n);
        break;
      default:
        Yt(e, t, n);
    }
  }
  function Us(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new cd()),
        t.forEach(function (r) {
          var l = xd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (Ie = c.stateNode), (ft = !1);
                break e;
              case 3:
                (Ie = c.stateNode.containerInfo), (ft = !0);
                break e;
              case 4:
                (Ie = c.stateNode.containerInfo), (ft = !0);
                break e;
            }
            c = c.return;
          }
          if (Ie === null) throw Error(a(160));
          Os(i, u, l), (Ie = null), (ft = !1);
          var d = l.alternate;
          d !== null && (d.return = null), (l.return = null);
        } catch (x) {
          ke(l, t, x);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ms(t, e), (t = t.sibling);
  }
  function Ms(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((dt(t, e), Et(e), r & 4)) {
          try {
            Er(3, e, e.return), Tl(3, e);
          } catch (K) {
            ke(e, e.return, K);
          }
          try {
            Er(5, e, e.return);
          } catch (K) {
            ke(e, e.return, K);
          }
        }
        break;
      case 1:
        dt(t, e), Et(e), r & 512 && n !== null && On(n, n.return);
        break;
      case 5:
        if (
          (dt(t, e),
          Et(e),
          r & 512 && n !== null && On(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Qn(l, "");
          } catch (K) {
            ke(e, e.return, K);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            c = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              c === "input" && i.type === "radio" && i.name != null && du(l, i),
                ii(c, u);
              var x = ii(c, i);
              for (u = 0; u < d.length; u += 2) {
                var T = d[u],
                  L = d[u + 1];
                T === "style"
                  ? xu(l, L)
                  : T === "dangerouslySetInnerHTML"
                  ? gu(l, L)
                  : T === "children"
                  ? Qn(l, L)
                  : q(l, T, L, x);
              }
              switch (c) {
                case "input":
                  ei(l, i);
                  break;
                case "textarea":
                  hu(l, i);
                  break;
                case "select":
                  var R = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var H = i.value;
                  H != null
                    ? hn(l, !!i.multiple, H, !1)
                    : R !== !!i.multiple &&
                      (i.defaultValue != null
                        ? hn(l, !!i.multiple, i.defaultValue, !0)
                        : hn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[dr] = i;
            } catch (K) {
              ke(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((dt(t, e), Et(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (K) {
            ke(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          (dt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            tr(t.containerInfo);
          } catch (K) {
            ke(e, e.return, K);
          }
        break;
      case 4:
        dt(t, e), Et(e);
        break;
      case 13:
        dt(t, e),
          Et(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ao = Ee())),
          r & 4 && Us(e);
        break;
      case 22:
        if (
          ((T = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Me = (x = Me) || T), dt(t, e), (Me = x)) : dt(t, e),
          Et(e),
          r & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null),
            (e.stateNode.isHidden = x) && !T && e.mode & 1)
          )
            for (W = e, T = e.child; T !== null; ) {
              for (L = W = T; W !== null; ) {
                switch (((R = W), (H = R.child), R.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Er(4, R, R.return);
                    break;
                  case 1:
                    On(R, R.return);
                    var Q = R.stateNode;
                    if (typeof Q.componentWillUnmount == "function") {
                      (r = R), (n = R.return);
                      try {
                        (t = r),
                          (Q.props = t.memoizedProps),
                          (Q.state = t.memoizedState),
                          Q.componentWillUnmount();
                      } catch (K) {
                        ke(r, n, K);
                      }
                    }
                    break;
                  case 5:
                    On(R, R.return);
                    break;
                  case 22:
                    if (R.memoizedState !== null) {
                      Vs(L);
                      continue;
                    }
                }
                H !== null ? ((H.return = R), (W = H)) : Vs(L);
              }
              T = T.sibling;
            }
          e: for (T = null, L = e; ; ) {
            if (L.tag === 5) {
              if (T === null) {
                T = L;
                try {
                  (l = L.stateNode),
                    x
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((c = L.stateNode),
                        (d = L.memoizedProps.style),
                        (u =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (c.style.display = wu("display", u)));
                } catch (K) {
                  ke(e, e.return, K);
                }
              }
            } else if (L.tag === 6) {
              if (T === null)
                try {
                  L.stateNode.nodeValue = x ? "" : L.memoizedProps;
                } catch (K) {
                  ke(e, e.return, K);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              T === L && (T = null), (L = L.return);
            }
            T === L && (T = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        dt(t, e), Et(e), r & 4 && Us(e);
        break;
      case 21:
        break;
      default:
        dt(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ds(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
            var i = Fs(e);
            To(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = Fs(e);
            Po(e, c, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        ke(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dd(e, t, n) {
    (W = e), Bs(e);
  }
  function Bs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; W !== null; ) {
      var l = W,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Pl;
        if (!u) {
          var c = l.alternate,
            d = (c !== null && c.memoizedState !== null) || Me;
          c = Pl;
          var x = Me;
          if (((Pl = u), (Me = d) && !x))
            for (W = l; W !== null; )
              (u = W),
                (d = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Ws(l)
                  : d !== null
                  ? ((d.return = u), (W = d))
                  : Ws(l);
          for (; i !== null; ) (W = i), Bs(i), (i = i.sibling);
          (W = l), (Pl = c), (Me = x);
        }
        Hs(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (W = i)) : Hs(e);
    }
  }
  function Hs(e) {
    for (; W !== null; ) {
      var t = W;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Me || Tl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Me)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Va(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Va(t, u, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var T = x.memoizedState;
                    if (T !== null) {
                      var L = T.dehydrated;
                      L !== null && tr(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          Me || (t.flags & 512 && Ro(t));
        } catch (R) {
          ke(t, t.return, R);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function Vs(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function Ws(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Tl(4, t);
            } catch (d) {
              ke(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                ke(t, l, d);
              }
            }
            var i = t.return;
            try {
              Ro(t);
            } catch (d) {
              ke(t, i, d);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Ro(t);
            } catch (d) {
              ke(t, u, d);
            }
        }
      } catch (d) {
        ke(t, t.return, d);
      }
      if (t === e) {
        W = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (W = c);
        break;
      }
      W = t.return;
    }
  }
  var pd = Math.ceil,
    Ll = te.ReactCurrentDispatcher,
    Lo = te.ReactCurrentOwner,
    lt = te.ReactCurrentBatchConfig,
    ne = 0,
    ze = null,
    je = null,
    De = 0,
    be = 0,
    Un = Vt(0),
    Pe = 0,
    Cr = null,
    cn = 0,
    zl = 0,
    zo = 0,
    Nr = null,
    Ke = null,
    Ao = 0,
    Mn = 1 / 0,
    At = null,
    Al = !1,
    Io = null,
    Jt = null,
    Il = !1,
    Gt = null,
    Dl = 0,
    jr = 0,
    Do = null,
    Fl = -1,
    Ol = 0;
  function He() {
    return ne & 6 ? Ee() : Fl !== -1 ? Fl : (Fl = Ee());
  }
  function Xt(e) {
    return e.mode & 1
      ? ne & 2 && De !== 0
        ? De & -De
        : Zf.transition !== null
        ? (Ol === 0 && (Ol = Fu()), Ol)
        : ((e = ue),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qu(e.type))),
          e)
      : 1;
  }
  function pt(e, t, n, r) {
    if (50 < jr) throw ((jr = 0), (Do = null), Error(a(185)));
    Zn(e, n, r),
      (!(ne & 2) || e !== ze) &&
        (e === ze && (!(ne & 2) && (zl |= n), Pe === 4 && Zt(e, De)),
        Ye(e, r),
        n === 1 &&
          ne === 0 &&
          !(t.mode & 1) &&
          ((Mn = Ee() + 500), cl && _t()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    Xc(e, t);
    var r = Kr(e, e === ze ? De : 0);
    if (r === 0)
      n !== null && Au(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Au(n), t === 1))
        e.tag === 0 ? Xf(Qs.bind(null, e)) : Ta(Qs.bind(null, e)),
          Kf(function () {
            !(ne & 6) && _t();
          }),
          (n = null);
      else {
        switch (Ou(r)) {
          case 1:
            n = di;
            break;
          case 4:
            n = Iu;
            break;
          case 16:
            n = Vr;
            break;
          case 536870912:
            n = Du;
            break;
          default:
            n = Vr;
        }
        n = $s(n, _s.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function _s(e, t) {
    if (((Fl = -1), (Ol = 0), ne & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (Bn() && e.callbackNode !== n) return null;
    var r = Kr(e, e === ze ? De : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ul(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var i = Ys();
      (ze !== e || De !== t) && ((At = null), (Mn = Ee() + 500), dn(e, t));
      do
        try {
          vd();
          break;
        } catch (c) {
          Ks(e, c);
        }
      while (!0);
      qi(),
        (Ll.current = i),
        (ne = l),
        je !== null ? (t = 0) : ((ze = null), (De = 0), (t = Pe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = pi(e)), l !== 0 && ((r = l), (t = Fo(e, l)))),
        t === 1)
      )
        throw ((n = Cr), dn(e, 0), Zt(e, r), Ye(e, Ee()), n);
      if (t === 6) Zt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !md(l) &&
            ((t = Ul(e, r)),
            t === 2 && ((i = pi(e)), i !== 0 && ((r = i), (t = Fo(e, i)))),
            t === 1))
        )
          throw ((n = Cr), dn(e, 0), Zt(e, r), Ye(e, Ee()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            pn(e, Ke, At);
            break;
          case 3:
            if (
              (Zt(e, r),
              (r & 130023424) === r && ((t = Ao + 500 - Ee()), 10 < t))
            ) {
              if (Kr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                He(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Hi(pn.bind(null, e, Ke, At), t);
              break;
            }
            pn(e, Ke, At);
            break;
          case 4:
            if ((Zt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - ut(r);
              (i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i);
            }
            if (
              ((r = l),
              (r = Ee() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * pd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Hi(pn.bind(null, e, Ke, At), r);
              break;
            }
            pn(e, Ke, At);
            break;
          case 5:
            pn(e, Ke, At);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ye(e, Ee()), e.callbackNode === n ? _s.bind(null, e) : null;
  }
  function Fo(e, t) {
    var n = Nr;
    return (
      e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
      (e = Ul(e, t)),
      e !== 2 && ((t = Ke), (Ke = n), t !== null && Oo(t)),
      e
    );
  }
  function Oo(e) {
    Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
  }
  function md(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!at(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Zt(e, t) {
    for (
      t &= ~zo,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ut(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Qs(e) {
    if (ne & 6) throw Error(a(327));
    Bn();
    var t = Kr(e, 0);
    if (!(t & 1)) return Ye(e, Ee()), null;
    var n = Ul(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = pi(e);
      r !== 0 && ((t = r), (n = Fo(e, r)));
    }
    if (n === 1) throw ((n = Cr), dn(e, 0), Zt(e, t), Ye(e, Ee()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      pn(e, Ke, At),
      Ye(e, Ee()),
      null
    );
  }
  function Uo(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && ((Mn = Ee() + 500), cl && _t());
    }
  }
  function fn(e) {
    Gt !== null && Gt.tag === 0 && !(ne & 6) && Bn();
    var t = ne;
    ne |= 1;
    var n = lt.transition,
      r = ue;
    try {
      if (((lt.transition = null), (ue = 1), e)) return e();
    } finally {
      (ue = r), (lt.transition = n), (ne = t), !(ne & 6) && _t();
    }
  }
  function Mo() {
    (be = Un.current), de(Un);
  }
  function dn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Qf(n)), je !== null))
      for (n = je.return; n !== null; ) {
        var r = n;
        switch ((Yi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && al();
            break;
          case 3:
            Dn(), de(We), de(Fe), io();
            break;
          case 5:
            ro(r);
            break;
          case 4:
            Dn();
            break;
          case 13:
            de(ye);
            break;
          case 19:
            de(ye);
            break;
          case 10:
            $i(r.type._context);
            break;
          case 22:
          case 23:
            Mo();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (je = e = qt(e.current, null)),
      (De = be = t),
      (Pe = 0),
      (Cr = null),
      (zo = zl = cn = 0),
      (Ke = Nr = null),
      un !== null)
    ) {
      for (t = 0; t < un.length; t++)
        if (((n = un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            (i.next = l), (r.next = u);
          }
          n.pending = r;
        }
      un = null;
    }
    return e;
  }
  function Ks(e, t) {
    do {
      var n = je;
      try {
        if ((qi(), (xl.current = Cl), Sl)) {
          for (var r = ge.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Sl = !1;
        }
        if (
          ((sn = 0),
          (Le = Re = ge = null),
          (gr = !1),
          (wr = 0),
          (Lo.current = null),
          n === null || n.return === null)
        ) {
          (Pe = 1), (Cr = t), (je = null);
          break;
        }
        e: {
          var i = e,
            u = n.return,
            c = n,
            d = t;
          if (
            ((t = De),
            (c.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var x = d,
              T = c,
              L = T.tag;
            if (!(T.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var R = T.alternate;
              R
                ? ((T.updateQueue = R.updateQueue),
                  (T.memoizedState = R.memoizedState),
                  (T.lanes = R.lanes))
                : ((T.updateQueue = null), (T.memoizedState = null));
            }
            var H = vs(u);
            if (H !== null) {
              (H.flags &= -257),
                ys(H, u, c, i, t),
                H.mode & 1 && hs(i, x, t),
                (t = H),
                (d = x);
              var Q = t.updateQueue;
              if (Q === null) {
                var K = new Set();
                K.add(d), (t.updateQueue = K);
              } else Q.add(d);
              break e;
            } else {
              if (!(t & 1)) {
                hs(i, x, t), Bo();
                break e;
              }
              d = Error(a(426));
            }
          } else if (me && c.mode & 1) {
            var Ce = vs(u);
            if (Ce !== null) {
              !(Ce.flags & 65536) && (Ce.flags |= 256),
                ys(Ce, u, c, i, t),
                Xi(Fn(d, c));
              break e;
            }
          }
          (i = d = Fn(d, c)),
            Pe !== 4 && (Pe = 2),
            Nr === null ? (Nr = [i]) : Nr.push(i),
            (i = u);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = ps(i, d, t);
                Ha(i, g);
                break e;
              case 1:
                c = d;
                var h = i.type,
                  w = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (w !== null &&
                      typeof w.componentDidCatch == "function" &&
                      (Jt === null || !Jt.has(w))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var z = ms(i, c, t);
                  Ha(i, z);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Gs(n);
      } catch (Y) {
        (t = Y), je === n && n !== null && (je = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ys() {
    var e = Ll.current;
    return (Ll.current = Cl), e === null ? Cl : e;
  }
  function Bo() {
    (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      ze === null || (!(cn & 268435455) && !(zl & 268435455)) || Zt(ze, De);
  }
  function Ul(e, t) {
    var n = ne;
    ne |= 2;
    var r = Ys();
    (ze !== e || De !== t) && ((At = null), dn(e, t));
    do
      try {
        hd();
        break;
      } catch (l) {
        Ks(e, l);
      }
    while (!0);
    if ((qi(), (ne = n), (Ll.current = r), je !== null)) throw Error(a(261));
    return (ze = null), (De = 0), Pe;
  }
  function hd() {
    for (; je !== null; ) Js(je);
  }
  function vd() {
    for (; je !== null && !Hc(); ) Js(je);
  }
  function Js(e) {
    var t = qs(e.alternate, e, be);
    (e.memoizedProps = e.pendingProps),
      t === null ? Gs(e) : (je = t),
      (Lo.current = null);
  }
  function Gs(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = sd(n, t)), n !== null)) {
          (n.flags &= 32767), (je = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Pe = 6), (je = null);
          return;
        }
      } else if (((n = ad(n, t, be)), n !== null)) {
        je = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function pn(e, t, n) {
    var r = ue,
      l = lt.transition;
    try {
      (lt.transition = null), (ue = 1), yd(e, t, n, r);
    } finally {
      (lt.transition = l), (ue = r);
    }
    return null;
  }
  function yd(e, t, n, r) {
    do Bn();
    while (Gt !== null);
    if (ne & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (Zc(e, i),
      e === ze && ((je = ze = null), (De = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Il ||
        ((Il = !0),
        $s(Vr, function () {
          return Bn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = lt.transition), (lt.transition = null);
      var u = ue;
      ue = 1;
      var c = ne;
      (ne |= 4),
        (Lo.current = null),
        fd(e, n),
        Ms(n, e),
        Uf(Mi),
        (Gr = !!Ui),
        (Mi = Ui = null),
        (e.current = n),
        dd(n),
        Vc(),
        (ne = c),
        (ue = u),
        (lt.transition = i);
    } else e.current = n;
    if (
      (Il && ((Il = !1), (Gt = e), (Dl = l)),
      (i = e.pendingLanes),
      i === 0 && (Jt = null),
      Qc(n.stateNode),
      Ye(e, Ee()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Al) throw ((Al = !1), (e = Io), (Io = null), e);
    return (
      Dl & 1 && e.tag !== 0 && Bn(),
      (i = e.pendingLanes),
      i & 1 ? (e === Do ? jr++ : ((jr = 0), (Do = e))) : (jr = 0),
      _t(),
      null
    );
  }
  function Bn() {
    if (Gt !== null) {
      var e = Ou(Dl),
        t = lt.transition,
        n = ue;
      try {
        if (((lt.transition = null), (ue = 16 > e ? 16 : e), Gt === null))
          var r = !1;
        else {
          if (((e = Gt), (Gt = null), (Dl = 0), ne & 6)) throw Error(a(331));
          var l = ne;
          for (ne |= 4, W = e.current; W !== null; ) {
            var i = W,
              u = i.child;
            if (W.flags & 16) {
              var c = i.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var x = c[d];
                  for (W = x; W !== null; ) {
                    var T = W;
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, T, i);
                    }
                    var L = T.child;
                    if (L !== null) (L.return = T), (W = L);
                    else
                      for (; W !== null; ) {
                        T = W;
                        var R = T.sibling,
                          H = T.return;
                        if ((Is(T), T === x)) {
                          W = null;
                          break;
                        }
                        if (R !== null) {
                          (R.return = H), (W = R);
                          break;
                        }
                        W = H;
                      }
                  }
                }
                var Q = i.alternate;
                if (Q !== null) {
                  var K = Q.child;
                  if (K !== null) {
                    Q.child = null;
                    do {
                      var Ce = K.sibling;
                      (K.sibling = null), (K = Ce);
                    } while (K !== null);
                  }
                }
                W = i;
              }
            }
            if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (W = u);
            else
              e: for (; W !== null; ) {
                if (((i = W), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(9, i, i.return);
                  }
                var g = i.sibling;
                if (g !== null) {
                  (g.return = i.return), (W = g);
                  break e;
                }
                W = i.return;
              }
          }
          var h = e.current;
          for (W = h; W !== null; ) {
            u = W;
            var w = u.child;
            if (u.subtreeFlags & 2064 && w !== null) (w.return = u), (W = w);
            else
              e: for (u = h; W !== null; ) {
                if (((c = W), c.flags & 2048))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tl(9, c);
                    }
                  } catch (Y) {
                    ke(c, c.return, Y);
                  }
                if (c === u) {
                  W = null;
                  break e;
                }
                var z = c.sibling;
                if (z !== null) {
                  (z.return = c.return), (W = z);
                  break e;
                }
                W = c.return;
              }
          }
          if (
            ((ne = l),
            _t(),
            wt && typeof wt.onPostCommitFiberRoot == "function")
          )
            try {
              wt.onPostCommitFiberRoot(Wr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (lt.transition = t);
      }
    }
    return !1;
  }
  function Xs(e, t, n) {
    (t = Fn(n, t)),
      (t = ps(e, t, 1)),
      (e = Kt(e, t, 1)),
      (t = He()),
      e !== null && (Zn(e, 1, t), Ye(e, t));
  }
  function ke(e, t, n) {
    if (e.tag === 3) Xs(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xs(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Jt === null || !Jt.has(r)))
          ) {
            (e = Fn(n, e)),
              (e = ms(t, e, 1)),
              (t = Kt(t, e, 1)),
              (e = He()),
              t !== null && (Zn(t, 1, e), Ye(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function gd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = He()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (De & n) === n &&
        (Pe === 4 || (Pe === 3 && (De & 130023424) === De && 500 > Ee() - Ao)
          ? dn(e, 0)
          : (zo |= n)),
      Ye(e, t);
  }
  function Zs(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
        : (t = 1));
    var n = He();
    (e = Tt(e, t)), e !== null && (Zn(e, t, n), Ye(e, n));
  }
  function wd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Zs(e, n);
  }
  function xd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Zs(e, n);
  }
  var qs;
  qs = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) Qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), ud(e, t, n);
        Qe = !!(e.flags & 131072);
      }
    else (Qe = !1), me && t.flags & 1048576 && La(t, dl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Rl(e, t), (e = t.pendingProps);
        var l = Rn(t, Fe.current);
        In(t, n), (l = ao(null, t, r, e, l, n));
        var i = so();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              _e(r) ? ((i = !0), sl(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              to(t),
              (l.updater = Nl),
              (t.stateNode = l),
              (l._reactInternals = t),
              vo(t, r, e, n),
              (t = xo(null, t, r, !0, i, n)))
            : ((t.tag = 0), me && i && Ki(t), Be(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Rl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = kd(r)),
            (e = ct(r, e)),
            l)
          ) {
            case 0:
              t = wo(null, t, r, e, n);
              break e;
            case 1:
              t = Es(null, t, r, e, n);
              break e;
            case 11:
              t = gs(null, t, r, e, n);
              break e;
            case 14:
              t = ws(null, t, r, ct(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          wo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Es(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Cs(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Ba(e, t),
            gl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Fn(Error(a(423)), t)), (t = Ns(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Fn(Error(a(424)), t)), (t = Ns(e, t, r, n, l));
              break e;
            } else
              for (
                $e = Ht(t.stateNode.containerInfo.firstChild),
                  qe = t,
                  me = !0,
                  st = null,
                  n = Ua(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Ln(), r === l)) {
              t = zt(e, t, n);
              break e;
            }
            Be(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Wa(t),
          e === null && Gi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Bi(r, l) ? (u = null) : i !== null && Bi(r, i) && (t.flags |= 32),
          ks(e, t),
          Be(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Gi(t), null;
      case 13:
        return js(e, t, n);
      case 4:
        return (
          no(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = zn(t, null, r, n)) : Be(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          gs(e, t, r, l, n)
        );
      case 7:
        return Be(e, t, t.pendingProps, n), t.child;
      case 8:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            ce(hl, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (at(i.value, u)) {
              if (i.children === l.children && !We.current) {
                t = zt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var c = i.dependencies;
                if (c !== null) {
                  u = i.child;
                  for (var d = c.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (i.tag === 1) {
                        (d = Lt(-1, n & -n)), (d.tag = 2);
                        var x = i.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var T = x.pending;
                          T === null
                            ? (d.next = d)
                            : ((d.next = T.next), (T.next = d)),
                            (x.pending = d);
                        }
                      }
                      (i.lanes |= n),
                        (d = i.alternate),
                        d !== null && (d.lanes |= n),
                        bi(i.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    d = d.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    bi(u, n, t),
                    (u = i.sibling);
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      (i.return = u.return), (u = i);
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          Be(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          In(t, n),
          (l = nt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Be(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ct(r, t.pendingProps)),
          (l = ct(r.type, l)),
          ws(e, t, r, l, n)
        );
      case 15:
        return xs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Rl(e, t),
          (t.tag = 1),
          _e(r) ? ((e = !0), sl(t)) : (e = !1),
          In(t, n),
          fs(t, r, l),
          vo(t, r, l, n),
          xo(null, t, r, !0, e, n)
        );
      case 19:
        return Ps(e, t, n);
      case 22:
        return Ss(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function $s(e, t) {
    return zu(e, t);
  }
  function Sd(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function it(e, t, n, r) {
    return new Sd(e, t, n, r);
  }
  function Ho(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function kd(e) {
    if (typeof e == "function") return Ho(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === yt)) return 11;
      if (e === gt) return 14;
    }
    return 2;
  }
  function qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = it(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ml(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) Ho(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case ve:
          return mn(n.children, l, i, t);
        case Ne:
          (u = 8), (l |= 8);
          break;
        case xe:
          return (
            (e = it(12, n, t, l | 2)), (e.elementType = xe), (e.lanes = i), e
          );
        case Ge:
          return (e = it(13, n, t, l)), (e.elementType = Ge), (e.lanes = i), e;
        case ot:
          return (e = it(19, n, t, l)), (e.elementType = ot), (e.lanes = i), e;
        case Se:
          return Bl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Te:
                u = 10;
                break e;
              case vt:
                u = 9;
                break e;
              case yt:
                u = 11;
                break e;
              case gt:
                u = 14;
                break e;
              case Ve:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = it(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function mn(e, t, n, r) {
    return (e = it(7, e, r, t)), (e.lanes = n), e;
  }
  function Bl(e, t, n, r) {
    return (
      (e = it(22, e, r, t)),
      (e.elementType = Se),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Vo(e, t, n) {
    return (e = it(6, e, null, t)), (e.lanes = n), e;
  }
  function Wo(e, t, n) {
    return (
      (t = it(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Ed(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = mi(0)),
      (this.expirationTimes = mi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function _o(e, t, n, r, l, i, u, c, d) {
    return (
      (e = new Ed(e, t, n, c, d)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = it(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      to(i),
      e
    );
  }
  function Cd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: we,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function bs(e) {
    if (!e) return Wt;
    e = e._reactInternals;
    e: {
      if (tn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (_e(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (_e(n)) return Ra(e, n, t);
    }
    return t;
  }
  function ec(e, t, n, r, l, i, u, c, d) {
    return (
      (e = _o(n, r, !0, e, l, i, u, c, d)),
      (e.context = bs(null)),
      (n = e.current),
      (r = He()),
      (l = Xt(n)),
      (i = Lt(r, l)),
      (i.callback = t ?? null),
      Kt(n, i, l),
      (e.current.lanes = l),
      Zn(e, l, r),
      Ye(e, r),
      e
    );
  }
  function Hl(e, t, n, r) {
    var l = t.current,
      i = He(),
      u = Xt(l);
    return (
      (n = bs(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Lt(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Kt(l, t, u)),
      e !== null && (pt(e, l, u, i), yl(e, l, u)),
      u
    );
  }
  function Vl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function tc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Qo(e, t) {
    tc(e, t), (e = e.alternate) && tc(e, t);
  }
  var nc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ko(e) {
    this._internalRoot = e;
  }
  (Wl.prototype.render = Ko.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Hl(e, t, null, null);
    }),
    (Wl.prototype.unmount = Ko.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fn(function () {
            Hl(null, e, null, null);
          }),
            (t[Nt] = null);
        }
      });
  function Wl(e) {
    this._internalRoot = e;
  }
  Wl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Bu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
      Ut.splice(n, 0, e), n === 0 && Wu(e);
    }
  };
  function Yo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function _l(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rc() {}
  function Nd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var x = Vl(u);
          i.call(x);
        };
      }
      var u = ec(t, r, e, 0, null, !1, !1, "", rc);
      return (
        (e._reactRootContainer = u),
        (e[Nt] = u.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var x = Vl(d);
        c.call(x);
      };
    }
    var d = _o(e, 0, !1, null, null, !1, !1, "", rc);
    return (
      (e._reactRootContainer = d),
      (e[Nt] = d.current),
      cr(e.nodeType === 8 ? e.parentNode : e),
      fn(function () {
        Hl(t, d, n, r);
      }),
      d
    );
  }
  function Ql(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var d = Vl(u);
          c.call(d);
        };
      }
      Hl(t, u, e, l);
    } else u = Nd(n, t, e, l, r);
    return Vl(u);
  }
  (Uu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 &&
            (hi(t, n | 1), Ye(t, Ee()), !(ne & 6) && ((Mn = Ee() + 500), _t()));
        }
        break;
      case 13:
        fn(function () {
          var r = Tt(e, 1);
          if (r !== null) {
            var l = He();
            pt(r, e, 1, l);
          }
        }),
          Qo(e, 1);
    }
  }),
    (vi = function (e) {
      if (e.tag === 13) {
        var t = Tt(e, 134217728);
        if (t !== null) {
          var n = He();
          pt(t, e, 134217728, n);
        }
        Qo(e, 134217728);
      }
    }),
    (Mu = function (e) {
      if (e.tag === 13) {
        var t = Xt(e),
          n = Tt(e, t);
        if (n !== null) {
          var r = He();
          pt(n, e, t, r);
        }
        Qo(e, t);
      }
    }),
    (Bu = function () {
      return ue;
    }),
    (Hu = function (e, t) {
      var n = ue;
      try {
        return (ue = e), t();
      } finally {
        ue = n;
      }
    }),
    (ai = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ul(r);
                if (!l) throw Error(a(90));
                cu(r), ei(r, l);
              }
            }
          }
          break;
        case "textarea":
          hu(e, n);
          break;
        case "select":
          (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
      }
    }),
    (Cu = Uo),
    (Nu = fn);
  var jd = { usingClientEntryPoint: !1, Events: [pr, Nn, ul, ku, Eu, Uo] },
    Rr = {
      findFiberByHostInstance: nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Rd = {
      bundleType: Rr.bundleType,
      version: Rr.version,
      rendererPackageName: Rr.rendererPackageName,
      rendererConfig: Rr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Tu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Rr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber)
      try {
        (Wr = Kl.inject(Rd)), (wt = Kl);
      } catch {}
  }
  return (
    (Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jd),
    (Je.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yo(t)) throw Error(a(200));
      return Cd(e, t, null, n);
    }),
    (Je.createRoot = function (e, t) {
      if (!Yo(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = nc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = _o(e, 1, !1, null, null, n, !1, r, l)),
        (e[Nt] = t.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        new Ko(t)
      );
    }),
    (Je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = Tu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Je.flushSync = function (e) {
      return fn(e);
    }),
    (Je.hydrate = function (e, t, n) {
      if (!_l(t)) throw Error(a(200));
      return Ql(null, e, t, !0, n);
    }),
    (Je.hydrateRoot = function (e, t, n) {
      if (!Yo(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = nc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = ec(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[Nt] = t.current),
        cr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Wl(t);
    }),
    (Je.render = function (e, t, n) {
      if (!_l(t)) throw Error(a(200));
      return Ql(null, e, t, !1, n);
    }),
    (Je.unmountComponentAtNode = function (e) {
      if (!_l(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (fn(function () {
            Ql(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Nt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Je.unstable_batchedUpdates = Uo),
    (Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!_l(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Ql(e, t, n, !1, r);
    }),
    (Je.version = "18.3.1-next-f1338f8080-20240426"),
    Je
  );
}
var fc;
function Fd() {
  if (fc) return Xo.exports;
  fc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (s) {
        console.error(s);
      }
  }
  return o(), (Xo.exports = Dd()), Xo.exports;
}
var dc;
function Od() {
  if (dc) return Yl;
  dc = 1;
  var o = Fd();
  return (Yl.createRoot = o.createRoot), (Yl.hydrateRoot = o.hydrateRoot), Yl;
}
var Ud = Od(),
  Tr = {},
  pc;
function Md() {
  if (pc) return Tr;
  (pc = 1),
    Object.defineProperty(Tr, "__esModule", { value: !0 }),
    (Tr.parse = E),
    (Tr.serialize = k);
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    m = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    v = (() => {
      const j = function () {};
      return (j.prototype = Object.create(null)), j;
    })();
  function E(j, B) {
    const A = new v(),
      U = j.length;
    if (U < 2) return A;
    const D = (B == null ? void 0 : B.decode) || I;
    let O = 0;
    do {
      const V = j.indexOf("=", O);
      if (V === -1) break;
      const q = j.indexOf(";", O),
        te = q === -1 ? U : q;
      if (V > te) {
        O = j.lastIndexOf(";", V - 1) + 1;
        continue;
      }
      const ae = C(j, O, V),
        we = S(j, V, ae),
        ve = j.slice(ae, we);
      if (A[ve] === void 0) {
        let Ne = C(j, V + 1, te),
          xe = S(j, te, Ne);
        const Te = D(j.slice(Ne, xe));
        A[ve] = Te;
      }
      O = te + 1;
    } while (O < U);
    return A;
  }
  function C(j, B, A) {
    do {
      const U = j.charCodeAt(B);
      if (U !== 32 && U !== 9) return B;
    } while (++B < A);
    return A;
  }
  function S(j, B, A) {
    for (; B > A; ) {
      const U = j.charCodeAt(--B);
      if (U !== 32 && U !== 9) return B + 1;
    }
    return A;
  }
  function k(j, B, A) {
    const U = (A == null ? void 0 : A.encode) || encodeURIComponent;
    if (!o.test(j)) throw new TypeError(`argument name is invalid: ${j}`);
    const D = U(B);
    if (!s.test(D)) throw new TypeError(`argument val is invalid: ${B}`);
    let O = j + "=" + D;
    if (!A) return O;
    if (A.maxAge !== void 0) {
      if (!Number.isInteger(A.maxAge))
        throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);
      O += "; Max-Age=" + A.maxAge;
    }
    if (A.domain) {
      if (!a.test(A.domain))
        throw new TypeError(`option domain is invalid: ${A.domain}`);
      O += "; Domain=" + A.domain;
    }
    if (A.path) {
      if (!m.test(A.path))
        throw new TypeError(`option path is invalid: ${A.path}`);
      O += "; Path=" + A.path;
    }
    if (A.expires) {
      if (!F(A.expires) || !Number.isFinite(A.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${A.expires}`);
      O += "; Expires=" + A.expires.toUTCString();
    }
    if (
      (A.httpOnly && (O += "; HttpOnly"),
      A.secure && (O += "; Secure"),
      A.partitioned && (O += "; Partitioned"),
      A.priority)
    )
      switch (
        typeof A.priority == "string" ? A.priority.toLowerCase() : void 0
      ) {
        case "low":
          O += "; Priority=Low";
          break;
        case "medium":
          O += "; Priority=Medium";
          break;
        case "high":
          O += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${A.priority}`);
      }
    if (A.sameSite)
      switch (
        typeof A.sameSite == "string" ? A.sameSite.toLowerCase() : A.sameSite
      ) {
        case !0:
        case "strict":
          O += "; SameSite=Strict";
          break;
        case "lax":
          O += "; SameSite=Lax";
          break;
        case "none":
          O += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${A.sameSite}`);
      }
    return O;
  }
  function I(j) {
    if (j.indexOf("%") === -1) return j;
    try {
      return decodeURIComponent(j);
    } catch {
      return j;
    }
  }
  function F(j) {
    return f.call(j) === "[object Date]";
  }
  return Tr;
}
Md();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var mc = "popstate";
function Bd(o = {}) {
  function s(m, f) {
    let { pathname: v, search: E, hash: C } = m.location;
    return eu(
      "",
      { pathname: v, search: E, hash: C },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function a(m, f) {
    return typeof f == "string" ? f : Ir(f);
  }
  return Vd(s, a, null, o);
}
function he(o, s) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(s);
}
function mt(o, s) {
  if (!o) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function Hd() {
  return Math.random().toString(36).substring(2, 10);
}
function hc(o, s) {
  return { usr: o.state, key: o.key, idx: s };
}
function eu(o, s, a = null, m) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? Hn(s) : s),
    state: a,
    key: (s && s.key) || m || Hd(),
  };
}
function Ir({ pathname: o = "/", search: s = "", hash: a = "" }) {
  return (
    s && s !== "?" && (o += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (o += a.charAt(0) === "#" ? a : "#" + a),
    o
  );
}
function Hn(o) {
  let s = {};
  if (o) {
    let a = o.indexOf("#");
    a >= 0 && ((s.hash = o.substring(a)), (o = o.substring(0, a)));
    let m = o.indexOf("?");
    m >= 0 && ((s.search = o.substring(m)), (o = o.substring(0, m))),
      o && (s.pathname = o);
  }
  return s;
}
function Vd(o, s, a, m = {}) {
  let { window: f = document.defaultView, v5Compat: v = !1 } = m,
    E = f.history,
    C = "POP",
    S = null,
    k = I();
  k == null && ((k = 0), E.replaceState({ ...E.state, idx: k }, ""));
  function I() {
    return (E.state || { idx: null }).idx;
  }
  function F() {
    C = "POP";
    let D = I(),
      O = D == null ? null : D - k;
    (k = D), S && S({ action: C, location: U.location, delta: O });
  }
  function j(D, O) {
    C = "PUSH";
    let V = eu(U.location, D, O);
    k = I() + 1;
    let q = hc(V, k),
      te = U.createHref(V);
    try {
      E.pushState(q, "", te);
    } catch (ae) {
      if (ae instanceof DOMException && ae.name === "DataCloneError") throw ae;
      f.location.assign(te);
    }
    v && S && S({ action: C, location: U.location, delta: 1 });
  }
  function B(D, O) {
    C = "REPLACE";
    let V = eu(U.location, D, O);
    k = I();
    let q = hc(V, k),
      te = U.createHref(V);
    E.replaceState(q, "", te),
      v && S && S({ action: C, location: U.location, delta: 0 });
  }
  function A(D) {
    let O = f.location.origin !== "null" ? f.location.origin : f.location.href,
      V = typeof D == "string" ? D : Ir(D);
    return (
      (V = V.replace(/ $/, "%20")),
      he(
        O,
        `No window.location.(origin|href) available to create URL for href: ${V}`
      ),
      new URL(V, O)
    );
  }
  let U = {
    get action() {
      return C;
    },
    get location() {
      return o(f, E);
    },
    listen(D) {
      if (S) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(mc, F),
        (S = D),
        () => {
          f.removeEventListener(mc, F), (S = null);
        }
      );
    },
    createHref(D) {
      return s(f, D);
    },
    createURL: A,
    encodeLocation(D) {
      let O = A(D);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: j,
    replace: B,
    go(D) {
      return E.go(D);
    },
  };
  return U;
}
function wc(o, s, a = "/") {
  return Wd(o, s, a, !1);
}
function Wd(o, s, a, m) {
  let f = typeof s == "string" ? Hn(s) : s,
    v = bt(f.pathname || "/", a);
  if (v == null) return null;
  let E = xc(o);
  _d(E);
  let C = null;
  for (let S = 0; C == null && S < E.length; ++S) {
    let k = ep(v);
    C = $d(E[S], k, m);
  }
  return C;
}
function xc(o, s = [], a = [], m = "") {
  let f = (v, E, C) => {
    let S = {
      relativePath: C === void 0 ? v.path || "" : C,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: E,
      route: v,
    };
    S.relativePath.startsWith("/") &&
      (he(
        S.relativePath.startsWith(m),
        `Absolute route path "${S.relativePath}" nested under path "${m}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (S.relativePath = S.relativePath.slice(m.length)));
    let k = It([m, S.relativePath]),
      I = a.concat(S);
    v.children &&
      v.children.length > 0 &&
      (he(
        v.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${k}".`
      ),
      xc(v.children, s, I, k)),
      !(v.path == null && !v.index) &&
        s.push({ path: k, score: Zd(k, v.index), routesMeta: I });
  };
  return (
    o.forEach((v, E) => {
      var C;
      if (v.path === "" || !((C = v.path) != null && C.includes("?"))) f(v, E);
      else for (let S of Sc(v.path)) f(v, E, S);
    }),
    s
  );
}
function Sc(o) {
  let s = o.split("/");
  if (s.length === 0) return [];
  let [a, ...m] = s,
    f = a.endsWith("?"),
    v = a.replace(/\?$/, "");
  if (m.length === 0) return f ? [v, ""] : [v];
  let E = Sc(m.join("/")),
    C = [];
  return (
    C.push(...E.map((S) => (S === "" ? v : [v, S].join("/")))),
    f && C.push(...E),
    C.map((S) => (o.startsWith("/") && S === "" ? "/" : S))
  );
}
function _d(o) {
  o.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : qd(
          s.routesMeta.map((m) => m.childrenIndex),
          a.routesMeta.map((m) => m.childrenIndex)
        )
  );
}
var Qd = /^:[\w-]+$/,
  Kd = 3,
  Yd = 2,
  Jd = 1,
  Gd = 10,
  Xd = -2,
  vc = (o) => o === "*";
function Zd(o, s) {
  let a = o.split("/"),
    m = a.length;
  return (
    a.some(vc) && (m += Xd),
    s && (m += Yd),
    a
      .filter((f) => !vc(f))
      .reduce((f, v) => f + (Qd.test(v) ? Kd : v === "" ? Jd : Gd), m)
  );
}
function qd(o, s) {
  return o.length === s.length && o.slice(0, -1).every((m, f) => m === s[f])
    ? o[o.length - 1] - s[s.length - 1]
    : 0;
}
function $d(o, s, a = !1) {
  let { routesMeta: m } = o,
    f = {},
    v = "/",
    E = [];
  for (let C = 0; C < m.length; ++C) {
    let S = m[C],
      k = C === m.length - 1,
      I = v === "/" ? s : s.slice(v.length) || "/",
      F = Zl(
        { path: S.relativePath, caseSensitive: S.caseSensitive, end: k },
        I
      ),
      j = S.route;
    if (
      (!F &&
        k &&
        a &&
        !m[m.length - 1].route.index &&
        (F = Zl(
          { path: S.relativePath, caseSensitive: S.caseSensitive, end: !1 },
          I
        )),
      !F)
    )
      return null;
    Object.assign(f, F.params),
      E.push({
        params: f,
        pathname: It([v, F.pathname]),
        pathnameBase: lp(It([v, F.pathnameBase])),
        route: j,
      }),
      F.pathnameBase !== "/" && (v = It([v, F.pathnameBase]));
  }
  return E;
}
function Zl(o, s) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [a, m] = bd(o.path, o.caseSensitive, o.end),
    f = s.match(a);
  if (!f) return null;
  let v = f[0],
    E = v.replace(/(.)\/+$/, "$1"),
    C = f.slice(1);
  return {
    params: m.reduce((k, { paramName: I, isOptional: F }, j) => {
      if (I === "*") {
        let A = C[j] || "";
        E = v.slice(0, v.length - A.length).replace(/(.)\/+$/, "$1");
      }
      const B = C[j];
      return (
        F && !B ? (k[I] = void 0) : (k[I] = (B || "").replace(/%2F/g, "/")), k
      );
    }, {}),
    pathname: v,
    pathnameBase: E,
    pattern: o,
  };
}
function bd(o, s = !1, a = !0) {
  mt(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let m = [],
    f =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (E, C, S) => (
            m.push({ paramName: C, isOptional: S != null }),
            S ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (m.push({ paramName: "*" }),
        (f += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (f += "\\/*$")
      : o !== "" && o !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, s ? void 0 : "i"), m]
  );
}
function ep(o) {
  try {
    return o
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      mt(
        !1,
        `The URL path "${o}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      o
    );
  }
}
function bt(o, s) {
  if (s === "/") return o;
  if (!o.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    m = o.charAt(a);
  return m && m !== "/" ? null : o.slice(a) || "/";
}
function tp(o, s = "/") {
  let {
    pathname: a,
    search: m = "",
    hash: f = "",
  } = typeof o == "string" ? Hn(o) : o;
  return {
    pathname: a ? (a.startsWith("/") ? a : np(a, s)) : s,
    search: ip(m),
    hash: op(f),
  };
}
function np(o, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function $o(o, s, a, m) {
  return `Cannot include a '${o}' character in a manually specified \`to.${s}\` field [${JSON.stringify(
    m
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rp(o) {
  return o.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0)
  );
}
function ru(o) {
  let s = rp(o);
  return s.map((a, m) => (m === s.length - 1 ? a.pathname : a.pathnameBase));
}
function lu(o, s, a, m = !1) {
  let f;
  typeof o == "string"
    ? (f = Hn(o))
    : ((f = { ...o }),
      he(
        !f.pathname || !f.pathname.includes("?"),
        $o("?", "pathname", "search", f)
      ),
      he(
        !f.pathname || !f.pathname.includes("#"),
        $o("#", "pathname", "hash", f)
      ),
      he(!f.search || !f.search.includes("#"), $o("#", "search", "hash", f)));
  let v = o === "" || f.pathname === "",
    E = v ? "/" : f.pathname,
    C;
  if (E == null) C = a;
  else {
    let F = s.length - 1;
    if (!m && E.startsWith("..")) {
      let j = E.split("/");
      for (; j[0] === ".."; ) j.shift(), (F -= 1);
      f.pathname = j.join("/");
    }
    C = F >= 0 ? s[F] : "/";
  }
  let S = tp(f, C),
    k = E && E !== "/" && E.endsWith("/"),
    I = (v || E === ".") && a.endsWith("/");
  return !S.pathname.endsWith("/") && (k || I) && (S.pathname += "/"), S;
}
var It = (o) => o.join("/").replace(/\/\/+/g, "/"),
  lp = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ip = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  op = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function up(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
var kc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(kc);
var ap = ["GET", ...kc];
new Set(ap);
var Vn = N.createContext(null);
Vn.displayName = "DataRouter";
var ql = N.createContext(null);
ql.displayName = "DataRouterState";
var Ec = N.createContext({ isTransitioning: !1 });
Ec.displayName = "ViewTransition";
var sp = N.createContext(new Map());
sp.displayName = "Fetchers";
var cp = N.createContext(null);
cp.displayName = "Await";
var ht = N.createContext(null);
ht.displayName = "Navigation";
var Dr = N.createContext(null);
Dr.displayName = "Location";
var Ct = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ct.displayName = "Route";
var iu = N.createContext(null);
iu.displayName = "RouteError";
function fp(o, { relative: s } = {}) {
  he(
    Wn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: m } = N.useContext(ht),
    { hash: f, pathname: v, search: E } = Fr(o, { relative: s }),
    C = v;
  return (
    a !== "/" && (C = v === "/" ? a : It([a, v])),
    m.createHref({ pathname: C, search: E, hash: f })
  );
}
function Wn() {
  return N.useContext(Dr) != null;
}
function en() {
  return (
    he(
      Wn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    N.useContext(Dr).location
  );
}
var Cc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Nc(o) {
  N.useContext(ht).static || N.useLayoutEffect(o);
}
function jc() {
  let { isDataRoute: o } = N.useContext(Ct);
  return o ? Cp() : dp();
}
function dp() {
  he(
    Wn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = N.useContext(Vn),
    { basename: s, navigator: a } = N.useContext(ht),
    { matches: m } = N.useContext(Ct),
    { pathname: f } = en(),
    v = JSON.stringify(ru(m)),
    E = N.useRef(!1);
  return (
    Nc(() => {
      E.current = !0;
    }),
    N.useCallback(
      (S, k = {}) => {
        if ((mt(E.current, Cc), !E.current)) return;
        if (typeof S == "number") {
          a.go(S);
          return;
        }
        let I = lu(S, JSON.parse(v), f, k.relative === "path");
        o == null &&
          s !== "/" &&
          (I.pathname = I.pathname === "/" ? s : It([s, I.pathname])),
          (k.replace ? a.replace : a.push)(I, k.state, k);
      },
      [s, a, v, f, o]
    )
  );
}
N.createContext(null);
function Fr(o, { relative: s } = {}) {
  let { matches: a } = N.useContext(Ct),
    { pathname: m } = en(),
    f = JSON.stringify(ru(a));
  return N.useMemo(() => lu(o, JSON.parse(f), m, s === "path"), [o, f, m, s]);
}
function pp(o, s) {
  return Rc(o, s);
}
function Rc(o, s, a, m) {
  var O;
  he(
    Wn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = N.useContext(ht),
    { matches: v } = N.useContext(Ct),
    E = v[v.length - 1],
    C = E ? E.params : {},
    S = E ? E.pathname : "/",
    k = E ? E.pathnameBase : "/",
    I = E && E.route;
  {
    let V = (I && I.path) || "";
    Pc(
      S,
      !I || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${
        V === "/" ? "*" : `${V}/*`
      }">.`
    );
  }
  let F = en(),
    j;
  if (s) {
    let V = typeof s == "string" ? Hn(s) : s;
    he(
      k === "/" || ((O = V.pathname) == null ? void 0 : O.startsWith(k)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ),
      (j = V);
  } else j = F;
  let B = j.pathname || "/",
    A = B;
  if (k !== "/") {
    let V = k.replace(/^\//, "").split("/");
    A = "/" + B.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let U = wc(o, { pathname: A });
  mt(
    I || U != null,
    `No routes matched location "${j.pathname}${j.search}${j.hash}" `
  ),
    mt(
      U == null ||
        U[U.length - 1].route.element !== void 0 ||
        U[U.length - 1].route.Component !== void 0 ||
        U[U.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let D = gp(
    U &&
      U.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, C, V.params),
          pathname: It([
            k,
            f.encodeLocation
              ? f.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? k
              : It([
                  k,
                  f.encodeLocation
                    ? f.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        })
      ),
    v,
    a,
    m
  );
  return s && D
    ? N.createElement(
        Dr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...j,
            },
            navigationType: "POP",
          },
        },
        D
      )
    : D;
}
function mp() {
  let o = Ep(),
    s = up(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    a = o instanceof Error ? o.stack : null,
    m = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: m },
    v = { padding: "2px 4px", backgroundColor: m },
    E = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (E = N.createElement(
      N.Fragment,
      null,
      N.createElement("p", null, "💿 Hey developer 👋"),
      N.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        N.createElement("code", { style: v }, "ErrorBoundary"),
        " or",
        " ",
        N.createElement("code", { style: v }, "errorElement"),
        " prop on your route."
      )
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement("h2", null, "Unexpected Application Error!"),
      N.createElement("h3", { style: { fontStyle: "italic" } }, s),
      a ? N.createElement("pre", { style: f }, a) : null,
      E
    )
  );
}
var hp = N.createElement(mp, null),
  vp = class extends N.Component {
    constructor(o) {
      super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        });
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, s) {
      return s.location !== o.location ||
        (s.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : s.error,
            location: s.location,
            revalidation: o.revalidation || s.revalidation,
          };
    }
    componentDidCatch(o, s) {
      console.error(
        "React Router caught the following error during render",
        o,
        s
      );
    }
    render() {
      return this.state.error !== void 0
        ? N.createElement(
            Ct.Provider,
            { value: this.props.routeContext },
            N.createElement(iu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function yp({ routeContext: o, match: s, children: a }) {
  let m = N.useContext(Vn);
  return (
    m &&
      m.static &&
      m.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (m.staticContext._deepestRenderedBoundaryId = s.route.id),
    N.createElement(Ct.Provider, { value: o }, a)
  );
}
function gp(o, s = [], a = null, m = null) {
  if (o == null) {
    if (!a) return null;
    if (a.errors) o = a.matches;
    else if (s.length === 0 && !a.initialized && a.matches.length > 0)
      o = a.matches;
    else return null;
  }
  let f = o,
    v = a == null ? void 0 : a.errors;
  if (v != null) {
    let S = f.findIndex(
      (k) => k.route.id && (v == null ? void 0 : v[k.route.id]) !== void 0
    );
    he(
      S >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        v
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, S + 1)));
  }
  let E = !1,
    C = -1;
  if (a)
    for (let S = 0; S < f.length; S++) {
      let k = f[S];
      if (
        ((k.route.HydrateFallback || k.route.hydrateFallbackElement) && (C = S),
        k.route.id)
      ) {
        let { loaderData: I, errors: F } = a,
          j =
            k.route.loader &&
            !I.hasOwnProperty(k.route.id) &&
            (!F || F[k.route.id] === void 0);
        if (k.route.lazy || j) {
          (E = !0), C >= 0 ? (f = f.slice(0, C + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((S, k, I) => {
    let F,
      j = !1,
      B = null,
      A = null;
    a &&
      ((F = v && k.route.id ? v[k.route.id] : void 0),
      (B = k.route.errorElement || hp),
      E &&
        (C < 0 && I === 0
          ? (Pc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (j = !0),
            (A = null))
          : C === I &&
            ((j = !0), (A = k.route.hydrateFallbackElement || null))));
    let U = s.concat(f.slice(0, I + 1)),
      D = () => {
        let O;
        return (
          F
            ? (O = B)
            : j
            ? (O = A)
            : k.route.Component
            ? (O = N.createElement(k.route.Component, null))
            : k.route.element
            ? (O = k.route.element)
            : (O = S),
          N.createElement(yp, {
            match: k,
            routeContext: { outlet: S, matches: U, isDataRoute: a != null },
            children: O,
          })
        );
      };
    return a && (k.route.ErrorBoundary || k.route.errorElement || I === 0)
      ? N.createElement(vp, {
          location: a.location,
          revalidation: a.revalidation,
          component: B,
          error: F,
          children: D(),
          routeContext: { outlet: null, matches: U, isDataRoute: !0 },
        })
      : D();
  }, null);
}
function ou(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wp(o) {
  let s = N.useContext(Vn);
  return he(s, ou(o)), s;
}
function xp(o) {
  let s = N.useContext(ql);
  return he(s, ou(o)), s;
}
function Sp(o) {
  let s = N.useContext(Ct);
  return he(s, ou(o)), s;
}
function uu(o) {
  let s = Sp(o),
    a = s.matches[s.matches.length - 1];
  return (
    he(
      a.route.id,
      `${o} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function kp() {
  return uu("useRouteId");
}
function Ep() {
  var m;
  let o = N.useContext(iu),
    s = xp("useRouteError"),
    a = uu("useRouteError");
  return o !== void 0 ? o : (m = s.errors) == null ? void 0 : m[a];
}
function Cp() {
  let { router: o } = wp("useNavigate"),
    s = uu("useNavigate"),
    a = N.useRef(!1);
  return (
    Nc(() => {
      a.current = !0;
    }),
    N.useCallback(
      async (f, v = {}) => {
        mt(a.current, Cc),
          a.current &&
            (typeof f == "number"
              ? o.navigate(f)
              : await o.navigate(f, { fromRouteId: s, ...v }));
      },
      [o, s]
    )
  );
}
var yc = {};
function Pc(o, s, a) {
  !s && !yc[o] && ((yc[o] = !0), mt(!1, a));
}
N.memo(Np);
function Np({ routes: o, future: s, state: a }) {
  return Rc(o, void 0, a, s);
}
function jp({ to: o, replace: s, state: a, relative: m }) {
  he(
    Wn(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = N.useContext(ht);
  mt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: v } = N.useContext(Ct),
    { pathname: E } = en(),
    C = jc(),
    S = lu(o, ru(v), E, m === "path"),
    k = JSON.stringify(S);
  return (
    N.useEffect(() => {
      C(JSON.parse(k), { replace: s, state: a, relative: m });
    }, [C, k, m, s, a]),
    null
  );
}
function zr(o) {
  he(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Rp({
  basename: o = "/",
  children: s = null,
  location: a,
  navigationType: m = "POP",
  navigator: f,
  static: v = !1,
}) {
  he(
    !Wn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let E = o.replace(/^\/*/, "/"),
    C = N.useMemo(
      () => ({ basename: E, navigator: f, static: v, future: {} }),
      [E, f, v]
    );
  typeof a == "string" && (a = Hn(a));
  let {
      pathname: S = "/",
      search: k = "",
      hash: I = "",
      state: F = null,
      key: j = "default",
    } = a,
    B = N.useMemo(() => {
      let A = bt(S, E);
      return A == null
        ? null
        : {
            location: { pathname: A, search: k, hash: I, state: F, key: j },
            navigationType: m,
          };
    }, [E, S, k, I, F, j, m]);
  return (
    mt(
      B != null,
      `<Router basename="${E}"> is not able to match the URL "${S}${k}${I}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    B == null
      ? null
      : N.createElement(
          ht.Provider,
          { value: C },
          N.createElement(Dr.Provider, { children: s, value: B })
        )
  );
}
function Pp({ children: o, location: s }) {
  return pp(tu(o), s);
}
function tu(o, s = []) {
  let a = [];
  return (
    N.Children.forEach(o, (m, f) => {
      if (!N.isValidElement(m)) return;
      let v = [...s, f];
      if (m.type === N.Fragment) {
        a.push.apply(a, tu(m.props.children, v));
        return;
      }
      he(
        m.type === zr,
        `[${
          typeof m.type == "string" ? m.type : m.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        he(
          !m.props.index || !m.props.children,
          "An index route cannot have child routes."
        );
      let E = {
        id: m.props.id || v.join("-"),
        caseSensitive: m.props.caseSensitive,
        element: m.props.element,
        Component: m.props.Component,
        index: m.props.index,
        path: m.props.path,
        loader: m.props.loader,
        action: m.props.action,
        hydrateFallbackElement: m.props.hydrateFallbackElement,
        HydrateFallback: m.props.HydrateFallback,
        errorElement: m.props.errorElement,
        ErrorBoundary: m.props.ErrorBoundary,
        hasErrorBoundary:
          m.props.hasErrorBoundary === !0 ||
          m.props.ErrorBoundary != null ||
          m.props.errorElement != null,
        shouldRevalidate: m.props.shouldRevalidate,
        handle: m.props.handle,
        lazy: m.props.lazy,
      };
      m.props.children && (E.children = tu(m.props.children, v)), a.push(E);
    }),
    a
  );
}
var Gl = "get",
  Xl = "application/x-www-form-urlencoded";
function $l(o) {
  return o != null && typeof o.tagName == "string";
}
function Tp(o) {
  return $l(o) && o.tagName.toLowerCase() === "button";
}
function Lp(o) {
  return $l(o) && o.tagName.toLowerCase() === "form";
}
function zp(o) {
  return $l(o) && o.tagName.toLowerCase() === "input";
}
function Ap(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Ip(o, s) {
  return o.button === 0 && (!s || s === "_self") && !Ap(o);
}
var Jl = null;
function Dp() {
  if (Jl === null)
    try {
      new FormData(document.createElement("form"), 0), (Jl = !1);
    } catch {
      Jl = !0;
    }
  return Jl;
}
var Fp = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function bo(o) {
  return o != null && !Fp.has(o)
    ? (mt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xl}"`
      ),
      null)
    : o;
}
function Op(o, s) {
  let a, m, f, v, E;
  if (Lp(o)) {
    let C = o.getAttribute("action");
    (m = C ? bt(C, s) : null),
      (a = o.getAttribute("method") || Gl),
      (f = bo(o.getAttribute("enctype")) || Xl),
      (v = new FormData(o));
  } else if (Tp(o) || (zp(o) && (o.type === "submit" || o.type === "image"))) {
    let C = o.form;
    if (C == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let S = o.getAttribute("formaction") || C.getAttribute("action");
    if (
      ((m = S ? bt(S, s) : null),
      (a = o.getAttribute("formmethod") || C.getAttribute("method") || Gl),
      (f =
        bo(o.getAttribute("formenctype")) ||
        bo(C.getAttribute("enctype")) ||
        Xl),
      (v = new FormData(C, o)),
      !Dp())
    ) {
      let { name: k, type: I, value: F } = o;
      if (I === "image") {
        let j = k ? `${k}.` : "";
        v.append(`${j}x`, "0"), v.append(`${j}y`, "0");
      } else k && v.append(k, F);
    }
  } else {
    if ($l(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Gl), (m = null), (f = Xl), (E = o);
  }
  return (
    v && f === "text/plain" && ((E = v), (v = void 0)),
    { action: m, method: a.toLowerCase(), encType: f, formData: v, body: E }
  );
}
function au(o, s) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(s);
}
async function Up(o, s) {
  if (o.id in s) return s[o.id];
  try {
    let a = await import(o.module);
    return (s[o.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Mp(o) {
  return o == null
    ? !1
    : o.href == null
    ? o.rel === "preload" &&
      typeof o.imageSrcSet == "string" &&
      typeof o.imageSizes == "string"
    : typeof o.rel == "string" && typeof o.href == "string";
}
async function Bp(o, s, a) {
  let m = await Promise.all(
    o.map(async (f) => {
      let v = s.routes[f.route.id];
      if (v) {
        let E = await Up(v, a);
        return E.links ? E.links() : [];
      }
      return [];
    })
  );
  return _p(
    m
      .flat(1)
      .filter(Mp)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function gc(o, s, a, m, f, v) {
  let E = (S, k) => (a[k] ? S.route.id !== a[k].route.id : !0),
    C = (S, k) => {
      var I;
      return (
        a[k].pathname !== S.pathname ||
        (((I = a[k].route.path) == null ? void 0 : I.endsWith("*")) &&
          a[k].params["*"] !== S.params["*"])
      );
    };
  return v === "assets"
    ? s.filter((S, k) => E(S, k) || C(S, k))
    : v === "data"
    ? s.filter((S, k) => {
        var F;
        let I = m.routes[S.route.id];
        if (!I || !I.hasLoader) return !1;
        if (E(S, k) || C(S, k)) return !0;
        if (S.route.shouldRevalidate) {
          let j = S.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((F = a[0]) == null ? void 0 : F.params) || {},
            nextUrl: new URL(o, window.origin),
            nextParams: S.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof j == "boolean") return j;
        }
        return !0;
      })
    : [];
}
function Hp(o, s) {
  return Vp(
    o
      .map((a) => {
        let m = s.routes[a.route.id];
        if (!m) return [];
        let f = [m.module];
        return m.imports && (f = f.concat(m.imports)), f;
      })
      .flat(1)
  );
}
function Vp(o) {
  return [...new Set(o)];
}
function Wp(o) {
  let s = {},
    a = Object.keys(o).sort();
  for (let m of a) s[m] = o[m];
  return s;
}
function _p(o, s) {
  let a = new Set();
  return (
    new Set(s),
    o.reduce((m, f) => {
      let v = JSON.stringify(Wp(f));
      return a.has(v) || (a.add(v), m.push({ key: v, link: f })), m;
    }, [])
  );
}
function Qp(o) {
  let s =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : o;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function Kp() {
  let o = N.useContext(Vn);
  return (
    au(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    o
  );
}
function Yp() {
  let o = N.useContext(ql);
  return (
    au(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    o
  );
}
var su = N.createContext(void 0);
su.displayName = "FrameworkContext";
function Tc() {
  let o = N.useContext(su);
  return (
    au(o, "You must render this element inside a <HydratedRouter> element"), o
  );
}
function Jp(o, s) {
  let a = N.useContext(su),
    [m, f] = N.useState(!1),
    [v, E] = N.useState(!1),
    {
      onFocus: C,
      onBlur: S,
      onMouseEnter: k,
      onMouseLeave: I,
      onTouchStart: F,
    } = s,
    j = N.useRef(null);
  N.useEffect(() => {
    if ((o === "render" && E(!0), o === "viewport")) {
      let U = (O) => {
          O.forEach((V) => {
            E(V.isIntersecting);
          });
        },
        D = new IntersectionObserver(U, { threshold: 0.5 });
      return (
        j.current && D.observe(j.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [o]),
    N.useEffect(() => {
      if (m) {
        let U = setTimeout(() => {
          E(!0);
        }, 100);
        return () => {
          clearTimeout(U);
        };
      }
    }, [m]);
  let B = () => {
      f(!0);
    },
    A = () => {
      f(!1), E(!1);
    };
  return a
    ? o !== "intent"
      ? [v, j, {}]
      : [
          v,
          j,
          {
            onFocus: Lr(C, B),
            onBlur: Lr(S, A),
            onMouseEnter: Lr(k, B),
            onMouseLeave: Lr(I, A),
            onTouchStart: Lr(F, B),
          },
        ]
    : [!1, j, {}];
}
function Lr(o, s) {
  return (a) => {
    o && o(a), a.defaultPrevented || s(a);
  };
}
function Gp({ page: o, ...s }) {
  let { router: a } = Kp(),
    m = N.useMemo(() => wc(a.routes, o, a.basename), [a.routes, o, a.basename]);
  return m ? N.createElement(Zp, { page: o, matches: m, ...s }) : null;
}
function Xp(o) {
  let { manifest: s, routeModules: a } = Tc(),
    [m, f] = N.useState([]);
  return (
    N.useEffect(() => {
      let v = !1;
      return (
        Bp(o, s, a).then((E) => {
          v || f(E);
        }),
        () => {
          v = !0;
        }
      );
    }, [o, s, a]),
    m
  );
}
function Zp({ page: o, matches: s, ...a }) {
  let m = en(),
    { manifest: f, routeModules: v } = Tc(),
    { loaderData: E, matches: C } = Yp(),
    S = N.useMemo(() => gc(o, s, C, f, m, "data"), [o, s, C, f, m]),
    k = N.useMemo(() => gc(o, s, C, f, m, "assets"), [o, s, C, f, m]),
    I = N.useMemo(() => {
      if (o === m.pathname + m.search + m.hash) return [];
      let B = new Set(),
        A = !1;
      if (
        (s.forEach((D) => {
          var V;
          let O = f.routes[D.route.id];
          !O ||
            !O.hasLoader ||
            ((!S.some((q) => q.route.id === D.route.id) &&
              D.route.id in E &&
              (V = v[D.route.id]) != null &&
              V.shouldRevalidate) ||
            O.hasClientLoader
              ? (A = !0)
              : B.add(D.route.id));
        }),
        B.size === 0)
      )
        return [];
      let U = Qp(o);
      return (
        A &&
          B.size > 0 &&
          U.searchParams.set(
            "_routes",
            s
              .filter((D) => B.has(D.route.id))
              .map((D) => D.route.id)
              .join(",")
          ),
        [U.pathname + U.search]
      );
    }, [E, m, f, S, s, o, v]),
    F = N.useMemo(() => Hp(k, f), [k, f]),
    j = Xp(k);
  return N.createElement(
    N.Fragment,
    null,
    I.map((B) =>
      N.createElement("link", {
        key: B,
        rel: "prefetch",
        as: "fetch",
        href: B,
        ...a,
      })
    ),
    F.map((B) =>
      N.createElement("link", { key: B, rel: "modulepreload", href: B, ...a })
    ),
    j.map(({ key: B, link: A }) => N.createElement("link", { key: B, ...A }))
  );
}
function qp(...o) {
  return (s) => {
    o.forEach((a) => {
      typeof a == "function" ? a(s) : a != null && (a.current = s);
    });
  };
}
var Lc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Lc && (window.__reactRouterVersion = "7.1.1");
} catch {}
function $p({ basename: o, children: s, window: a }) {
  let m = N.useRef();
  m.current == null && (m.current = Bd({ window: a, v5Compat: !0 }));
  let f = m.current,
    [v, E] = N.useState({ action: f.action, location: f.location }),
    C = N.useCallback(
      (S) => {
        N.startTransition(() => E(S));
      },
      [E]
    );
  return (
    N.useLayoutEffect(() => f.listen(C), [f, C]),
    N.createElement(Rp, {
      basename: o,
      children: s,
      location: v.location,
      navigationType: v.action,
      navigator: f,
    })
  );
}
var zc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ar = N.forwardRef(function (
    {
      onClick: s,
      discover: a = "render",
      prefetch: m = "none",
      relative: f,
      reloadDocument: v,
      replace: E,
      state: C,
      target: S,
      to: k,
      preventScrollReset: I,
      viewTransition: F,
      ...j
    },
    B
  ) {
    let { basename: A } = N.useContext(ht),
      U = typeof k == "string" && zc.test(k),
      D,
      O = !1;
    if (typeof k == "string" && U && ((D = k), Lc))
      try {
        let xe = new URL(window.location.href),
          Te = k.startsWith("//") ? new URL(xe.protocol + k) : new URL(k),
          vt = bt(Te.pathname, A);
        Te.origin === xe.origin && vt != null
          ? (k = vt + Te.search + Te.hash)
          : (O = !0);
      } catch {
        mt(
          !1,
          `<Link to="${k}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let V = fp(k, { relative: f }),
      [q, te, ae] = Jp(m, j),
      we = nm(k, {
        replace: E,
        state: C,
        target: S,
        preventScrollReset: I,
        relative: f,
        viewTransition: F,
      });
    function ve(xe) {
      s && s(xe), xe.defaultPrevented || we(xe);
    }
    let Ne = N.createElement("a", {
      ...j,
      ...ae,
      href: D || V,
      onClick: O || v ? s : ve,
      ref: qp(B, te),
      target: S,
      "data-discover": !U && a === "render" ? "true" : void 0,
    });
    return q && !U
      ? N.createElement(N.Fragment, null, Ne, N.createElement(Gp, { page: V }))
      : Ne;
  });
Ar.displayName = "Link";
var bp = N.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: a = !1,
    className: m = "",
    end: f = !1,
    style: v,
    to: E,
    viewTransition: C,
    children: S,
    ...k
  },
  I
) {
  let F = Fr(E, { relative: k.relative }),
    j = en(),
    B = N.useContext(ql),
    { navigator: A, basename: U } = N.useContext(ht),
    D = B != null && um(F) && C === !0,
    O = A.encodeLocation ? A.encodeLocation(F).pathname : F.pathname,
    V = j.pathname,
    q =
      B && B.navigation && B.navigation.location
        ? B.navigation.location.pathname
        : null;
  a ||
    ((V = V.toLowerCase()),
    (q = q ? q.toLowerCase() : null),
    (O = O.toLowerCase())),
    q && U && (q = bt(q, U) || q);
  const te = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let ae = V === O || (!f && V.startsWith(O) && V.charAt(te) === "/"),
    we =
      q != null &&
      (q === O || (!f && q.startsWith(O) && q.charAt(O.length) === "/")),
    ve = { isActive: ae, isPending: we, isTransitioning: D },
    Ne = ae ? s : void 0,
    xe;
  typeof m == "function"
    ? (xe = m(ve))
    : (xe = [
        m,
        ae ? "active" : null,
        we ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Te = typeof v == "function" ? v(ve) : v;
  return N.createElement(
    Ar,
    {
      ...k,
      "aria-current": Ne,
      className: xe,
      ref: I,
      style: Te,
      to: E,
      viewTransition: C,
    },
    typeof S == "function" ? S(ve) : S
  );
});
bp.displayName = "NavLink";
var em = N.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: s,
      navigate: a,
      reloadDocument: m,
      replace: f,
      state: v,
      method: E = Gl,
      action: C,
      onSubmit: S,
      relative: k,
      preventScrollReset: I,
      viewTransition: F,
      ...j
    },
    B
  ) => {
    let A = im(),
      U = om(C, { relative: k }),
      D = E.toLowerCase() === "get" ? "get" : "post",
      O = typeof C == "string" && zc.test(C),
      V = (q) => {
        if ((S && S(q), q.defaultPrevented)) return;
        q.preventDefault();
        let te = q.nativeEvent.submitter,
          ae = (te == null ? void 0 : te.getAttribute("formmethod")) || E;
        A(te || q.currentTarget, {
          fetcherKey: s,
          method: ae,
          navigate: a,
          replace: f,
          state: v,
          relative: k,
          preventScrollReset: I,
          viewTransition: F,
        });
      };
    return N.createElement("form", {
      ref: B,
      method: D,
      action: U,
      onSubmit: m ? S : V,
      ...j,
      "data-discover": !O && o === "render" ? "true" : void 0,
    });
  }
);
em.displayName = "Form";
function tm(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ac(o) {
  let s = N.useContext(Vn);
  return he(s, tm(o)), s;
}
function nm(
  o,
  {
    target: s,
    replace: a,
    state: m,
    preventScrollReset: f,
    relative: v,
    viewTransition: E,
  } = {}
) {
  let C = jc(),
    S = en(),
    k = Fr(o, { relative: v });
  return N.useCallback(
    (I) => {
      if (Ip(I, s)) {
        I.preventDefault();
        let F = a !== void 0 ? a : Ir(S) === Ir(k);
        C(o, {
          replace: F,
          state: m,
          preventScrollReset: f,
          relative: v,
          viewTransition: E,
        });
      }
    },
    [S, C, k, a, m, s, o, f, v, E]
  );
}
var rm = 0,
  lm = () => `__${String(++rm)}__`;
function im() {
  let { router: o } = Ac("useSubmit"),
    { basename: s } = N.useContext(ht),
    a = kp();
  return N.useCallback(
    async (m, f = {}) => {
      let { action: v, method: E, encType: C, formData: S, body: k } = Op(m, s);
      if (f.navigate === !1) {
        let I = f.fetcherKey || lm();
        await o.fetch(I, a, f.action || v, {
          preventScrollReset: f.preventScrollReset,
          formData: S,
          body: k,
          formMethod: f.method || E,
          formEncType: f.encType || C,
          flushSync: f.flushSync,
        });
      } else
        await o.navigate(f.action || v, {
          preventScrollReset: f.preventScrollReset,
          formData: S,
          body: k,
          formMethod: f.method || E,
          formEncType: f.encType || C,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [o, s, a]
  );
}
function om(o, { relative: s } = {}) {
  let { basename: a } = N.useContext(ht),
    m = N.useContext(Ct);
  he(m, "useFormAction must be used inside a RouteContext");
  let [f] = m.matches.slice(-1),
    v = { ...Fr(o || ".", { relative: s }) },
    E = en();
  if (o == null) {
    v.search = E.search;
    let C = new URLSearchParams(v.search),
      S = C.getAll("index");
    if (S.some((I) => I === "")) {
      C.delete("index"),
        S.filter((F) => F).forEach((F) => C.append("index", F));
      let I = C.toString();
      v.search = I ? `?${I}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      f.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (v.pathname = v.pathname === "/" ? a : It([a, v.pathname])),
    Ir(v)
  );
}
function um(o, s = {}) {
  let a = N.useContext(Ec);
  he(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: m } = Ac("useViewTransitionState"),
    f = Fr(o, { relative: s.relative });
  if (!a.isTransitioning) return !1;
  let v = bt(a.currentLocation.pathname, m) || a.currentLocation.pathname,
    E = bt(a.nextLocation.pathname, m) || a.nextLocation.pathname;
  return Zl(f.pathname, E) != null || Zl(f.pathname, v) != null;
}
new TextEncoder();
const am = "/React-Portfolio-2/assets/ido-avatar-C_hoHd-2-C_hoHd-2.png",
  sm = () => {
    const [o, s] = N.useState(!1),
      a = () => {
        s(!o);
      };
    return p.jsxs("aside", {
      className: `sidebar ${o ? "active" : ""}`,
      "data-sidebar": !0,
      children: [
        p.jsxs("div", {
          className: "sidebar-info",
          children: [
            p.jsx("button", {
              className: "info_more-btn",
              "data-sidebar-btn": !0,
              onClick: a,
              children: p.jsx("ion-icon", {
                name: o ? "chevron-up" : "chevron-down",
              }),
            }),
            p.jsx("figure", {
              className: "avatar-box",
              children: p.jsx("img", { src: am, alt: "Ido Roth", width: "80" }),
            }),
            p.jsxs("div", {
              className: "info-content",
              children: [
                p.jsx("h1", {
                  className: "name",
                  title: "Ido Roth",
                  children: "Ido Roth",
                }),
                p.jsx("p", {
                  className: "title",
                  children: "Full Stack Developer",
                }),
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: `sidebar-info_more ${o ? "visible" : ""}`,
          children: [
            p.jsx("div", { className: "separator" }),
            p.jsxs("ul", {
              className: "contacts-list",
              children: [
                p.jsxs("li", {
                  className: "contact-item",
                  children: [
                    p.jsx("div", {
                      className: "icon-box",
                      children: p.jsx("ion-icon", { name: "mail-outline" }),
                    }),
                    p.jsxs("div", {
                      className: "contact-info",
                      children: [
                        p.jsx("p", {
                          className: "contact-title",
                          children: "Email",
                        }),
                        p.jsx("p", {
                          className: "contact-link",
                          children: "idoroth4@gmail.com",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("li", {
                  className: "contact-item",
                  children: [
                    p.jsx("div", {
                      className: "icon-box",
                      children: p.jsx("ion-icon", {
                        name: "phone-portrait-outline",
                      }),
                    }),
                    p.jsxs("div", {
                      className: "contact-info",
                      children: [
                        p.jsx("p", {
                          className: "contact-title",
                          children: "Phone",
                        }),
                        p.jsx("p", {
                          className: "contact-link",
                          children: "+972 54-833-3107",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("li", {
                  className: "contact-item",
                  children: [
                    p.jsx("div", {
                      className: "icon-box",
                      children: p.jsx("ion-icon", { name: "calendar-outline" }),
                    }),
                    p.jsxs("div", {
                      className: "contact-info",
                      children: [
                        p.jsx("p", {
                          className: "contact-title",
                          children: "Birthday",
                        }),
                        p.jsx("time", {
                          dateTime: "2002-01-14",
                          children: "January 14, 2002",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("li", {
                  className: "contact-item",
                  children: [
                    p.jsx("div", {
                      className: "icon-box",
                      children: p.jsx("ion-icon", { name: "location-outline" }),
                    }),
                    p.jsxs("div", {
                      className: "contact-info",
                      children: [
                        p.jsx("p", {
                          className: "contact-title",
                          children: "Location",
                        }),
                        p.jsx("address", { children: "Lod, Israel" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsx("div", { className: "separator" }),
            p.jsxs("ul", {
              className: "social-list",
              children: [
                p.jsx("li", {
                  className: "social-item",
                  children: p.jsx("a", {
                    href: "https://www.facebook.com/profile.php?id=100002097524154&locale=he_IL",
                    className: "social-link",
                    children: p.jsx("ion-icon", { name: "logo-facebook" }),
                  }),
                }),
                p.jsx("li", {
                  className: "social-item",
                  children: p.jsx("a", {
                    href: "https://www.linkedin.com/in/almayo-mekonen-0835942b4/",
                    className: "social-link",
                    children: p.jsx("ion-icon", { name: "logo-linkedin" }),
                  }),
                }),
                p.jsx("li", {
                  className: "social-item",
                  children: p.jsx("a", {
                    href: "https://www.instagram.com/almayomekonen/",
                    className: "social-link",
                    children: p.jsx("ion-icon", { name: "logo-instagram" }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function cm() {
  return p.jsx("nav", {
    className: "navbar",
    children: p.jsxs("ul", {
      className: "navbar-list",
      children: [
        p.jsx("li", {
          className: "navbar-item",
          children: p.jsx(Ar, {
            to: "/",
            className: "navbar-link",
            children: "About",
          }),
        }),
        p.jsx("li", {
          className: "navbar-item",
          children: p.jsx(Ar, {
            to: "/portfolio",
            className: "navbar-link",
            children: "Portfolio",
          }),
        }),
        p.jsx("li", {
          className: "navbar-item",
          children: p.jsx(Ar, {
            to: "/contact",
            className: "navbar-link",
            children: "Contact",
          }),
        }),
      ],
    }),
  });
}
const fm = () =>
    p.jsxs("section", {
      className: "clients",
      children: [
        p.jsx("h3", { className: "h3 clients-title", children: "Clients" }),
        p.jsx("ul", {
          className: "clients-list has-scrollbar",
          children: [
            "logo-1-color.png",
            "logo-2-color.png",
            "logo-3-color.png",
            "logo-4-color.png",
            "logo-5-color.png",
            "logo-6-color.png",
          ].map((o, s) =>
            p.jsx(
              "li",
              {
                className: "clients-item",
                children: p.jsx("a", {
                  href: "#",
                  children: p.jsx("img", {
                    src: `src/assets/images/${o}`,
                    alt: "client logo",
                  }),
                }),
              },
              s
            )
          ),
        }),
      ],
    }),
  dm = "/React-Portfolio-2/assets/icon-design-CWbO1wVI.svg",
  pm = "/React-Portfolio-2/assets/icon-dev-Bt_NknEe.svg",
  mm = () =>
    p.jsxs("section", {
      className: "service",
      children: [
        p.jsx("h3", {
          style: { marginTop: "30px" },
          className: "h3 service-title",
          children: "Skills",
        }),
        p.jsxs("ul", {
          className: "service-list",
          children: [
            p.jsxs("li", {
              className: "service-item",
              children: [
                p.jsx("div", {
                  className: "service-icon-box",
                  children: p.jsx("img", {
                    src: dm,
                    alt: "אייקון עיצוב",
                    width: "40",
                  }),
                }),
                p.jsxs("div", {
                  className: "service-content-box",
                  children: [
                    p.jsx("h4", {
                      className: "h4 service-item-title",
                      children: "Web Development",
                    }),
                    p.jsx("p", {
                      className: "service-item-text",
                      children:
                        "Website development with HTML, CSS, JS, TS, React.js and Node.js.",
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("li", {
              className: "service-item",
              children: [
                p.jsx("div", {
                  className: "service-icon-box",
                  children: p.jsx("img", {
                    src: pm,
                    alt: "אייקון פיתוח אתרים",
                    width: "40",
                  }),
                }),
                p.jsxs("div", {
                  className: "service-content-box",
                  children: [
                    p.jsx("h4", {
                      className: "h4 service-item-title",
                      children: "Interpersonal Communication",
                    }),
                    p.jsx("p", {
                      className: "service-item-text",
                      children:
                        "High level of emotional intelligence and articulateness. Fluency in English.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  hm =
    "data:image/png;base64,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",
  vm =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC+lBMVEUAAABbPhA3Ig0+KhCDYjFMMBU0FwfVj1xLLxM1IQ3Kkl9sQyDGglOkc0OYdz1dPBpuVSosHQjan2nXgWlGLRBdQxyJVTiMZDF0VCWJZjLAf1vck3KUbjyqb06yhkjTiWNtSSJlSSBwWS2MXTyxWD1GPByziUZHLgangkTioXVSOBRUPBaCXS5aOxXIglXynXhsQhhxSSQBAQLhoGP80rL8z6/91bWIZC7lo2ZMMQX4x6HhsmqFYSz5y6jvv3b5yqTwwn7ktm7dnWH+1rn0u4vus36BXijzw3nqu3PLjlT7zqv1v5P0u5Pxt4nsrG7rqWropmfVl131wJjwsXjtqW/UlFqUbTSQazLxtYC+gkzyt4XZmmDAhU6rcT/4xZ7zuI7dr2bHjFTGmlOkfT+faTr2wp73xJrxw4TnuHLXqmHNoVrQk1mwhUSnbT6geDqPWi7/0KTurnX5tXPDh1C4jky6fUmqgkGMaC/Tp1/Zml28j0u1i0eWcTZSNwpHLQP+xZD6vYXzxIDtqnnmn2XNkVbCllCkbDmcdTeeZDeYYjN9WyZwUB5hPxNaOA34v474xnzqpWvPjFfHiVG3eUWvdEOTXjBpSRr3x6WxeUSOaDCIVSlkRBb+2Lz/zp3wsIbVUnXZrGXPn1bJnlW/lE55WCR5TSEQAQH/yJf9yn/immPQpFscFRJUMQhBKQH/38D+u3vxrnCNNkxyRxz/3bn/xIYTOU2/UEeXa0N0KC5cPSIEFyEtERBAdY73x4XtnnbellzBY1VyUDQ9Hw7/////1Kr1t3/Im3nfp3d9dXLsn2spV2vBkmmxfU9lQSZSNh1fJBwbCgX/2a9wmKvot23isWV2aF3bpFxUVVanPUaDTyV1UyJDLRvk8vmjnpSacm3FTmK6h1zSY1yyRVwEIzMnJibi4N6wxtL/7szp0L+TrL2Jg4Tofm/cYWmeT2G/nlO6bkZFQD2OPyv07u3O09vTyLrBvbrBq5b6q4aHXT3/8tTcw6pTfZG8smGQZD5wE185AAAAMnRSTlMA/jIinhYL/mBA/j/+/suNd039/YV+UOfayL++uJTu37injHRtT/bt4NbKuYLX5+LgWRt6WWEAAAscSURBVGje7ZlnVJpXGMejphptdrOadO89eEWWiFBAENlbBGVoFNkIyHDvvbcxzjjiitGYxIzGrGY2e++ke+99Ti+mp6dfIfb0Q/0dOOfl+OHn/97n8d4H580xxxxzzDHHf8BDq5Y+M3/+M6899/BD8/4d/J5d/MKXF87FnTt77nfFE4uXPjz7iocf6/qys7NjICkOTwkLCzt77sKXi1f6za5jfl5H50ASJhGPx7THxWEwiWEUTNKAc77fbDo6kvDh4Vnrs7KyIsIoifi4pPa4sxTMQIfztVlzLOjEUBIT8Ri8+4VPDIuICAdBUtsxSZ2KxbMSxu+1+avVqUkYfGIihQJeQBaHSYzYHY5PVacCyxOzUAHPqDt1rq528NtHZIF3OFixcAo+rh1DyYrADyjUirwXfB9Q4bu2L6Jd6UqNCAOEu9/h4evXr98Nliu1PTEiLE6Rl5f30oN1zdLUvjBMqlWZWNHX11dR4U5yn/W7d1PiUtvPRpztTHF0LX4gRxIeD3YgRZmicaYoUuMoERUVFVnhf6XJSkwaiKNQ1E5n10rvHW93qFNBKVWkpKEGUSjUYFl9qFKBiejbnQWqGQBWS52Kwas1TqfXJfZ8V5caQwnDKMmLgpazg24tauopLUvzKbYmVfRVuC1gjzBqdXucwup41NvS1TjzkjAYR3e3ZDyjd4PhwOkDhgxSkKqnrKw4hdK3e0YShu9UpKY6lFYv6/hRZ4q6faCgpIkxQqJHcRLQWHhIyNatpzccbhwbbNFh+ipA81MSMYo8dafV6l0U3wKNIkmB6HYxTUYRMSoBjcNGwoODQ1qHt57ulejLfARJFRVhoDPb8xx5KUrl895IVlqd6i6ysIA/yuSKiDTZXw5Aa2vr1l6oqMzHFVcRBv6MDTicDmuBV1Ge0jhSil3KRiYLSGLdEjgcON6ZobX1QAYBaJR40C1qhUajKdB50ff+qzXO0CZHARWJZHKjY2kJ6H9KQsDTgcyqy4MlXfikzjyH1aorWOJFbbmsglCw1AQCkseNJgIJbma57jtCguFweGRGpbR0UDCg7krRKHWCNZ5LAgtcxTqn0kGAkIyZJAmyvy1uRSQWHY/O4FZfHrySonBqdAVNZM8bcomAHGrVaOQSCMkTlfcaDAYcuuG+JtjtwKETODRa+UGqfrDU6rDqBDZyoMeSV0Ov2JQaDdUOMUcyDx87duxwucEQj8ZGRsIjIyOxDfGyDYYNvRnlpuS6wTKdpkCIKF7mseSV7hKbTteYzGYwju/bcXIHeP18KIET34DFYhvQCbQNvaRDx44dEo27LWkunZDcvcBzSUkJQiiw8HPMJ05MBh0+fDho8uTPmcQoTjxalkAjlt/at2PHiRM7TkzyTNTmdB+hkHzFc8mr9fXdZIE4F1o0aRofz8zMHBnhIXlGUAI0GlFE4k7uu7U8O3v58R0n5aPisaF6RHGJ58u1oqWlpFgQQ2UzTVxSNJEuMrIqK0HL0GNjiSIjk8UwjYwcPJg5bpo8KYbyUeklxSWed+OyltL6YlVMroTFcLcJjW5kESQQi0Gi04EDCUFAKBKRjKOm44vsMfVDPiX1D3ne8S/6tHTni6kEpvFgee+GjBETUsJmQwxSNJ3EQEr4kplHEZeHZBHk5uYhVMvr8zzn9fSyK1IxFeIxuBmk40UqMYuVnExwJyExoWQqG+KNHiQCIQtiy8V16SifVz2/v697rBQ11mhhM5lB+6Y3wXbu3Dydz8q1M6JjY0kstpyKZOUgTeMZolEgqa4pLEX5rPBY8vi6hxiLehrN4uOTm2Gwox9OTBzd9XUdxGYQOVEiZC51r/7k1NTVnuUZbom5VlWcVuZ5BT/38loWV6WlHgeK67+d+XYz7O6Z7/ZV2400GUcEUfknLh6dmLi7E3Z1EZPFjqktutIy5O+xZN2TC6USrdYMTcM+2L9rJwwG23n02g96yMjByaIJ/Muffnhm/8WdRydgsH1IyFJblzbd8pzHklVrA6prtdIYJv/8D9/tugskd3dd+2ByL1cWiY4m1Jzff2biUxBy1yebYVf/qJbWlY09te5Zj/fkyT2EfJXULBnJvHXox+vnr97b9cn+D4L2RuPguGhC/vf7z4B0YLOufbsTto+fr7eYlq5a63GS515GalW1ckIl0WA4PfzRcOv3Hw/H8xg0LBxHhKo+3v/JBHBM7Prw2sWrbIuqiCB+402QxOMsJm1hbVV/pYiGjgwOGR7eegDNIRLRwSFwjpFBHP74+vVDh3798caNYyaoRqVqzH9y3VrPJc/2SYvcElKUDAsHB2LrO3C0DB0Z0hqCo5Un4IKHP/rlo62G3oxMZrKlsEhFCHrci5vEqnGxvjYgh9cWFY+bOXZDInENMhkaDc5E4AAXo2D32RXLg/iWQr10dM+TXlwi/ZdL3JJselR8QySQhARjcegoEiCak4CDA2kwHIvmiCqBpKhOPLrKm9neb5G8TlvllnAawL0OgMUR9+wRRTNzomVgmwBwXEIsCUhq6uokL3s3uLvqm7XV/dltsVHx8Q0NWBwWK0PujQoOJvIhGvgArCBIbBsvJ6CmWTXyuHcTr7NlTLtw75HsNnosOHRlaJmsnFpt2DpsSDYT0eiZsz4+yi2pkl6uNnk3Bq3sKm4ptAT078nOdqfhADKTC5eXZ3DzzZkcTjyAExVFz+b1L1Tp+Y0rvJLMd9hK9DVVe3MqATwjiU4kEkfze4rym4uQxCg3sXR6W1v2kb3iwuYW8jPejSeOJnKzdGFAfw4SyY8hmDLLy2m9RHNhnRY6SKfTo0lcLsjIO9JfVVtUOqR7zBuH/wuaptDmQktVP5LFytWqAo60gUUzgBkIAFqQy7JLoJycnP6Ahdrm9FLdE17NQAqrDVFcV1stQTJ5jCPTU1u+uHTp0rZHYtseAezZc6S/sZYPQZCkqqawBRUqSPH1ZirtUIKbZ7NKzId4pHLcFti9i+/duPHFF3cubZlh+/Q3VXYkkhCwUKr3KRE2pcz3ZoQfUAoQ5GJ9LZWAFKEPfDYF23Tv64vn3/v0PcD5r+/BYO+O83hIEETVUx+KECqf8PfmyydwUUd09xSK2ZAxwfDTzU2wTTDYpk2nNgNOgcftPxmieRB7oVZf2k0OFQg7vBgaH1MUCBCI0NJmqdyOpONEn92Zmpqemjq1CXDqFHB8lhEZzZJUNRaO+YQCic3hRX0t7nIJEQhhaVlRY669kka78MjN7du/2f7+DKdgWz7P2ZDAIPAtqmZUPYIcahPq1J4PQS+lCJsQCEHJ0Fi+JdluLOfab2+8c2mbm2+2b7/zOZUi4xL44nx9WXo3SIJwCRVLPU+SZ0OEIgRkVHqPVgxujkam/d2NGzd+fvv2tm03N942n8s02pNjtHWlQz5kcijY+SbrS57PjKsLBDab0OYzhOqRxiQTkEjWBQvQuLn5VR7EYNpzY6T60vT0ehDEbXF1BHp+UV25RqBzuerTUcAi5hMIEskF6lfvAr4Sd9gJkJ1q0erLwE/BagEHogmRB1rFc5Y9jShApKHclhg+m81PZrM7knPzcpOTwSd5Tf7lwXRUug+CDLbEvbRe9aM7zoKnfdKAZkwbQ83NzZXLqVSqXC4Hz+bGojEUyJFeInRLbAJX09P+3n8/7xu44pUXSwstZjlVXl1tNpur5fJqsVQPdgv402wFTTah0LZmie8D/yfAL/CpfEuMOeY+4pqit14cSgOAJlmz5qmnFwDDrOC7ZLVKWtNYUyMtXL3Eb56/r++yZcsCff38580q/oELVixZsmJBoP+8OeaYY4455pjjf8+fvUeve0aj06UAAAAASUVORK5CYII=",
  ym =
    "data:image/png;base64,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",
  gm =
    "data:image/png;base64,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",
  wm = ({ showModal: o }) => {
    const s = [
      {
        name: "Daniel Lewis",
        avatar: hm,
        text: "Ido developed a memory card game for my daughter. She likes it very much! And the fireworks, too!",
      },
      {
        name: "Jessica miller",
        avatar: vm,
        text: "Ido built a task management tool for me. I find it really helpful and I don't know how I got along before.",
      },
      {
        name: "Emily evans",
        avatar: ym,
        text: "Ido created a trivia quiz for me and my family. We play with it every weekend and we really have fun!",
      },
      {
        name: "Henry william",
        avatar: gm,
        text: "I didn't know where to go until I discovered Ido's place picker - I plan every travel with it.",
      },
    ];
    return p.jsxs("section", {
      className: "testimonials",
      children: [
        p.jsx("h3", {
          className: "h3 testimonials-title",
          children: "Testimonials",
        }),
        p.jsx("ul", {
          className: "testimonials-list has-scrollbar",
          children: s.map((a, m) =>
            p.jsx(
              "li",
              {
                className: "testimonials-item",
                onClick: () => o(a),
                children: p.jsxs("div", {
                  className: "content-card",
                  "data-testimonials-item": !0,
                  children: [
                    p.jsx("figure", {
                      className: "testimonials-avatar-box",
                      children: p.jsx("img", {
                        src: a.avatar,
                        alt: a.name,
                        width: "60",
                        "data-testimonials-avatar": !0,
                      }),
                    }),
                    p.jsx("h4", {
                      className: "h4 testimonials-item-title",
                      "data-testimonials-title": !0,
                      children: a.name,
                    }),
                    p.jsx("div", {
                      className: "testimonials-text",
                      "data-testimonials-text": !0,
                      children: p.jsx("p", { children: a.text }),
                    }),
                  ],
                }),
              },
              m
            )
          ),
        }),
      ],
    });
  },
  xm = ({ data: o, closeModal: s }) =>
    o
      ? p.jsxs("div", {
          className: `modal-container ${o ? "active" : ""}`,
          "data-modal-container": !0,
          children: [
            p.jsx("div", {
              className: `overlay ${o ? "active" : ""}`,
              "data-overlay": !0,
              onClick: s,
            }),
            p.jsxs("section", {
              className: "testimonials-modal",
              children: [
                p.jsx("button", {
                  className: "modal-close-btn",
                  "data-modal-close-btn": !0,
                  onClick: s,
                  children: p.jsx("ion-icon", { name: "close-outline" }),
                }),
                p.jsx("div", {
                  className: "modal-img-wrapper",
                  children: p.jsx("figure", {
                    className: "modal-avatar-box",
                    children: p.jsx("img", {
                      src: o.avatar,
                      alt: o.name,
                      width: "80",
                      "data-modal-img": !0,
                    }),
                  }),
                }),
                p.jsxs("div", {
                  className: "modal-content",
                  children: [
                    p.jsx("h4", {
                      className: "h3 modal-title",
                      "data-modal-title": !0,
                      children: o.name,
                    }),
                    p.jsx("time", {
                      dateTime: o.date,
                      children: o.formattedDate,
                    }),
                    p.jsx("div", {
                      "data-modal-text": !0,
                      children: p.jsx("p", { children: o.text }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null,
  Sm = () => {
    const [o, s] = N.useState(null),
      a = (f) => {
        s(f);
      },
      m = () => {
        s(null);
      };
    return p.jsxs("article", {
      className: "about active",
      "data-page": "about",
      children: [
        p.jsx("header", {
          children: p.jsx("h2", {
            className: "h2 article-title",
            children: "About",
          }),
        }),
        p.jsxs("section", {
          style: { fontSize: "16px" },
          className: "about-text",
          children: [
            p.jsx("p", {
              children: "I am a Full Stack developer from Lod, Israel.",
            }),
            p.jsxs("p", {
              children: [
                "My job is to build your website so that it is functional, user-friendly and attractive at the same time. ",
                p.jsx("br", {}),
                " Furthermore, I add personal touch to your website and make sure that it is eye-catching and easy to use.  ",
                p.jsx("br", {}),
                " My aim is to bring across your message and identity in the most creative way.",
              ],
            }),
            p.jsx(mm, {}),
            p.jsx(wm, { showModal: a }),
            p.jsx(xm, { data: o, closeModal: m }),
            p.jsx(fm, {}),
          ],
        }),
      ],
    });
  },
  km = () =>
    p.jsxs("article", {
      className: "portfolio active",
      "data-page": "portfolio",
      id: "PortfolioPage",
      children: [
        p.jsx("header", {
          children: p.jsx("h2", {
            className: "h2 article-title",
            children: "Portfolio",
          }),
        }),
        p.jsxs("section", {
          className: "projects",
          children: [
            p.jsx("h3", {
              style: { marginTop: "20px" },
              className: "h3 form-title",
              children: "Games",
            }),
            p.jsxs("ul", {
              className: "project-list",
              children: [
                p.jsx("li", {
                  className: "project-item active",
                  "data-filter-item": !0,
                  "data-category": "web development",
                  children: p.jsxs("a", {
                    href: "https://i112233.github.io/tic-tac-toe-game/",
                    children: [
                      p.jsxs("figure", {
                        className: "project-img",
                        children: [
                          p.jsx("div", {
                            className: "project-item-icon-box",
                            children: p.jsx("ion-icon", {
                              name: "eye-outline",
                            }),
                          }),
                          p.jsx("img", {
                            src: "src/assets/images/Calculator-Preview.png",
                            alt: "calculator",
                            loading: "lazy",
                          }),
                        ],
                      }),
                      p.jsx("h3", {
                        className: "project-title",
                        children: "Tic-tac-toe game",
                      }),
                      p.jsx("p", {
                        style: {
                          color: "var(--light-gray)",
                          fontSize: "small",
                        },
                        className: "description-text",
                        children: "A simple paper-and-pencil game",
                      }),
                    ],
                  }),
                }),
                p.jsx("li", {
                  className: "project-item active",
                  "data-filter-item": !0,
                  "data-category": "web development",
                  children: p.jsxs("a", {
                    href: "https://i112233.github.io/Memory-Game/",
                    children: [
                      p.jsxs("figure", {
                        className: "project-img",
                        children: [
                          p.jsx("div", {
                            className: "project-item-icon-box",
                            children: p.jsx("ion-icon", {
                              name: "eye-outline",
                            }),
                          }),
                          p.jsx("img", {
                            src: "src/assets/images/Memory Card Game Preview.png",
                            alt: "Memory Card Game",
                            loading: "lazy",
                          }),
                        ],
                      }),
                      p.jsx("h3", {
                        className: "project-title",
                        children: "Memory Card Game",
                      }),
                      p.jsx("p", {
                        style: {
                          color: "var(--light-gray)",
                          fontSize: "small",
                        },
                        className: "description-text",
                        children: "A chanllenging memory-based game",
                      }),
                    ],
                  }),
                }),
                p.jsx("li", {
                  className: "project-item active",
                  "data-filter-item": !0,
                  "data-category": "web development",
                  children: p.jsxs("a", {
                    href: "https://i112233.github.io/rock-paper-scissors/",
                    children: [
                      p.jsxs("figure", {
                        className: "project-img",
                        children: [
                          p.jsx("div", {
                            className: "project-item-icon-box",
                            children: p.jsx("ion-icon", {
                              name: "eye-outline",
                            }),
                          }),
                          p.jsx("img", {
                            src: "src/assets/images/Puzzle Game Preview.png",
                            alt: "Puzzle Game",
                            loading: "lazy",
                          }),
                        ],
                      }),
                      p.jsx("h3", {
                        className: "project-title",
                        children: "Rock paper scissors game",
                      }),
                      p.jsx("p", {
                        style: {
                          color: "var(--light-gray)",
                          fontSize: "small",
                        },
                        className: "description-text",
                        children: "A simple luck-based hand game",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            p.jsx("h3", {
              style: { marginTop: "30px" },
              className: "h3 form-title",
              children: "Entertainment",
            }),
            p.jsxs("ul", {
              className: "project-list",
              children: [
                p.jsx("li", {
                  className: "project-item active",
                  "data-filter-item": !0,
                  "data-category": "web development",
                  children: p.jsxs("a", {
                    href: "#",
                    children: [
                      p.jsxs("figure", {
                        className: "project-img",
                        children: [
                          p.jsx("div", {
                            className: "project-item-icon-box",
                            children: p.jsx("ion-icon", {
                              name: "eye-outline",
                            }),
                          }),
                          p.jsx("img", {
                            src: "src/assets/images/Snake Game Preview.png",
                            alt: "Snake Game",
                            loading: "lazy",
                          }),
                        ],
                      }),
                      p.jsx("h3", {
                        className: "project-title",
                        children: "Trivia Quiz",
                      }),
                      p.jsx("p", {
                        style: {
                          color: "var(--light-gray)",
                          fontSize: "small",
                        },
                        className: "description-text",
                        children: "A great way to test your knowledge",
                      }),
                    ],
                  }),
                }),
                p.jsx("li", {
                  className: "project-item active",
                  "data-filter-item": !0,
                  "data-category": "web development",
                  children: p.jsxs("a", {
                    href: "https://i112233.github.io/YouTube/",
                    children: [
                      p.jsxs("figure", {
                        className: "project-img",
                        children: [
                          p.jsx("div", {
                            className: "project-item-icon-box",
                            children: p.jsx("ion-icon", {
                              name: "eye-outline",
                            }),
                          }),
                          p.jsx("img", {
                            src: "src/assets/images/Tetris Game Preview.png",
                            alt: "Tetris Game",
                            loading: "lazy",
                          }),
                        ],
                      }),
                      p.jsx("h3", {
                        className: "project-title",
                        children: "YouTube (Replica)",
                      }),
                      p.jsx("p", {
                        style: {
                          color: "var(--light-gray)",
                          fontSize: "small",
                        },
                        className: "description-text",
                        children: "A copy of Google famous video website",
                      }),
                    ],
                  }),
                }),
                p.jsx("li", {
                  className: "project-item active",
                  "data-filter-item": !0,
                  "data-category": "web development",
                  children: p.jsxs("a", {
                    href: "https://i112233.github.io/place-picker/",
                    children: [
                      p.jsxs("figure", {
                        className: "project-img",
                        children: [
                          p.jsx("div", {
                            className: "project-item-icon-box",
                            children: p.jsx("ion-icon", {
                              name: "eye-outline",
                            }),
                          }),
                          p.jsx("img", {
                            src: "src/assets/images/TicTacToe Game Preview.png",
                            alt: "Tic-Tac-Toe Game",
                            loading: "lazy",
                          }),
                        ],
                      }),
                      p.jsx("h3", {
                        className: "project-title",
                        children: "Place Picker",
                      }),
                      p.jsx("p", {
                        style: {
                          color: "var(--light-gray)",
                          fontSize: "small",
                        },
                        className: "description-text",
                        children: "Choose your favorite must-visit places",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            p.jsx("h3", {
              style: { marginTop: "30px" },
              className: "h3 form-title",
              children: "Utility",
            }),
            p.jsx("ul", {
              className: "project-list",
              children: p.jsx("li", {
                className: "project-item active",
                "data-filter-item": !0,
                "data-category": "web development",
                children: p.jsxs("a", {
                  href: "https://i112233.github.io/management-app/",
                  children: [
                    p.jsxs("figure", {
                      className: "project-img",
                      children: [
                        p.jsx("div", {
                          className: "project-item-icon-box",
                          children: p.jsx("ion-icon", { name: "eye-outline" }),
                        }),
                        p.jsx("img", {
                          src: "src/assets/images/TicTacToe Game Preview.png",
                          alt: "Tic-Tac-Toe Game",
                          loading: "lazy",
                        }),
                      ],
                    }),
                    p.jsx("h3", {
                      className: "project-title",
                      children: "Task Management",
                    }),
                    p.jsx("p", {
                      style: { color: "var(--light-gray)", fontSize: "small" },
                      className: "description-text",
                      children: "Organize all your tasks in one place",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  Em = () =>
    p.jsxs("article", {
      className: "contact active",
      "data-page": "contact",
      children: [
        p.jsx("header", {
          children: p.jsx("h2", {
            className: "h2 article-title",
            children: "Contact",
          }),
        }),
        p.jsx("section", {
          className: "mapbox",
          "data-mapbox": !0,
          children: p.jsx("figure", {
            children: p.jsx("iframe", {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27082.148459092656!2d34.914923170301165!3d31.953610257067517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502ca5c5ad106a1%3A0xacee445e07ca811a!2z15zXldeT!5e0!3m2!1siw!2sil!4v1736603865286!5m2!1siw!2sil",
              width: "600",
              height: "450",
              style: { border: 0 },
              allowFullScreen: !0,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              "aria-label": "Google Map showing location",
            }),
          }),
        }),
        p.jsxs("section", {
          className: "contact-form",
          children: [
            p.jsx("h3", {
              className: "h3 form-title",
              children: "Contact Form",
            }),
            p.jsxs("form", {
              action: "#",
              className: "form",
              "data-form": !0,
              children: [
                p.jsxs("div", {
                  className: "input-wrapper",
                  children: [
                    p.jsx("input", {
                      type: "text",
                      name: "fullname",
                      className: "form-input",
                      placeholder: "Full name",
                      required: !0,
                      "data-form-input": !0,
                      "aria-label": "Full name",
                    }),
                    p.jsx("input", {
                      type: "email",
                      name: "email",
                      className: "form-input",
                      placeholder: "Email address",
                      required: !0,
                      "data-form-input": !0,
                      "aria-label": "Email address",
                    }),
                  ],
                }),
                p.jsx("textarea", {
                  name: "message",
                  className: "form-input",
                  placeholder: "Your Message",
                  required: !0,
                  "data-form-input": !0,
                  "aria-label": "Your Message",
                }),
                p.jsxs("button", {
                  className: "form-btn",
                  type: "submit",
                  "data-form-btn": !0,
                  children: [
                    p.jsx("ion-icon", { name: "paper-plane" }),
                    p.jsx("span", { children: "Send Message" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
function Cm() {
  return p.jsxs("main", {
    children: [
      p.jsx(sm, {}),
      p.jsxs("div", {
        className: "main-content",
        children: [
          p.jsx(cm, {}),
          p.jsxs(Pp, {
            children: [
              p.jsx(zr, { path: "/", element: p.jsx(Sm, {}) }),
              p.jsx(zr, { path: "/portfolio", element: p.jsx(km, {}) }),
              p.jsx(zr, { path: "/contact", element: p.jsx(Em, {}) }),
              p.jsx(zr, {
                path: "*",
                element: p.jsx(jp, { to: "/", replace: !0 }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
Ud.createRoot(document.getElementById("root")).render(
  p.jsx(N.StrictMode, {
    children: p.jsx($p, {
      basename: "/React-Portfolio-2",
      children: p.jsx(Cm, {}),
    }),
  })
);
