import { defineComponent as _, openBlock as u, createElementBlock as f, createElementVNode as s, normalizeClass as L, withDirectives as ne, withKeys as Le, withModifiers as me, vModelText as it, createCommentVNode as w, Fragment as N, renderList as A, computed as B, unref as O, renderSlot as j, ref as V, watch as st, onMounted as Da, nextTick as lo, toDisplayString as M, vModelSelect as Ie, createTextVNode as ee, vModelCheckbox as Ns, getCurrentScope as cl, onScopeDispose as fl, provide as dl, createVNode as ge, withCtx as te, createBlock as ve, Teleport as ks, Transition as $t, normalizeStyle as De, resolveComponent as ye, resolveDirective as lt, inject as yl, resolveDynamicComponent as Oa, vModelDynamic as pl, createStaticVNode as _a, onUnmounted as Ds, pushScopeId as Os, popScopeId as _s, vModelRadio as hl, isRef as ml, TransitionGroup as gl } from "vue";
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vl = typeof Bt == "object" && Bt && Bt.Object === Object && Bt, wl = vl, bl = wl, Ml = typeof self == "object" && self && self.Object === Object && self, Ll = bl || Ml || Function("return this")(), Wr = Ll, Cl = Wr, Sl = Cl.Symbol, xs = Sl, Ha = xs, $s = Object.prototype, jl = $s.hasOwnProperty, Tl = $s.toString, gt = Ha ? Ha.toStringTag : void 0;
function Nl(e) {
  var t = jl.call(e, gt), n = e[gt];
  try {
    e[gt] = void 0;
    var r = !0;
  } catch {
  }
  var o = Tl.call(e);
  return r && (t ? e[gt] = n : delete e[gt]), o;
}
var kl = Nl, Dl = Object.prototype, Ol = Dl.toString;
function _l(e) {
  return Ol.call(e);
}
var xl = _l, Ga = xs, $l = kl, zl = xl, Il = "[object Null]", Pl = "[object Undefined]", Wa = Ga ? Ga.toStringTag : void 0;
function El(e) {
  return e == null ? e === void 0 ? Pl : Il : Wa && Wa in Object(e) ? $l(e) : zl(e);
}
var Al = El;
function Yl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var zs = Yl, Rl = Al, Ul = zs, Bl = "[object AsyncFunction]", Ql = "[object Function]", Vl = "[object GeneratorFunction]", Hl = "[object Proxy]";
function Gl(e) {
  if (!Ul(e))
    return !1;
  var t = Rl(e);
  return t == Ql || t == Vl || t == Bl || t == Hl;
}
var Wl = Gl, Fl = Wr, ql = Fl["__core-js_shared__"], Jl = ql, eo = Jl, Fa = function() {
  var e = /[^.]+$/.exec(eo && eo.keys && eo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Kl(e) {
  return !!Fa && Fa in e;
}
var Xl = Kl, Zl = Function.prototype, eu = Zl.toString;
function tu(e) {
  if (e != null) {
    try {
      return eu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var nu = tu, ru = Wl, ou = Xl, au = zs, iu = nu, su = /[\\^$.*+?()[\]{}|]/g, lu = /^\[object .+?Constructor\]$/, uu = Function.prototype, cu = Object.prototype, fu = uu.toString, du = cu.hasOwnProperty, yu = RegExp(
  "^" + fu.call(du).replace(su, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pu(e) {
  if (!au(e) || ou(e))
    return !1;
  var t = ru(e) ? yu : lu;
  return t.test(iu(e));
}
var hu = pu;
function mu(e, t) {
  return e?.[t];
}
var gu = mu, vu = hu, wu = gu;
function bu(e, t) {
  var n = wu(e, t);
  return vu(n) ? n : void 0;
}
var xa = bu, Mu = xa, Lu = Mu(Object, "create"), Fr = Lu, qa = Fr;
function Cu() {
  this.__data__ = qa ? qa(null) : {}, this.size = 0;
}
var Su = Cu;
function ju(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Tu = ju, Nu = Fr, ku = "__lodash_hash_undefined__", Du = Object.prototype, Ou = Du.hasOwnProperty;
function _u(e) {
  var t = this.__data__;
  if (Nu) {
    var n = t[e];
    return n === ku ? void 0 : n;
  }
  return Ou.call(t, e) ? t[e] : void 0;
}
var xu = _u, $u = Fr, zu = Object.prototype, Iu = zu.hasOwnProperty;
function Pu(e) {
  var t = this.__data__;
  return $u ? t[e] !== void 0 : Iu.call(t, e);
}
var Eu = Pu, Au = Fr, Yu = "__lodash_hash_undefined__";
function Ru(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Au && t === void 0 ? Yu : t, this;
}
var Uu = Ru, Bu = Su, Qu = Tu, Vu = xu, Hu = Eu, Gu = Uu;
function ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = Bu;
ct.prototype.delete = Qu;
ct.prototype.get = Vu;
ct.prototype.has = Hu;
ct.prototype.set = Gu;
var Wu = ct;
function Fu() {
  this.__data__ = [], this.size = 0;
}
var qu = Fu;
function Ju(e, t) {
  return e === t || e !== e && t !== t;
}
var Ku = Ju, Xu = Ku;
function Zu(e, t) {
  for (var n = e.length; n--; )
    if (Xu(e[n][0], t))
      return n;
  return -1;
}
var qr = Zu, ec = qr, tc = Array.prototype, nc = tc.splice;
function rc(e) {
  var t = this.__data__, n = ec(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : nc.call(t, n, 1), --this.size, !0;
}
var oc = rc, ac = qr;
function ic(e) {
  var t = this.__data__, n = ac(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var sc = ic, lc = qr;
function uc(e) {
  return lc(this.__data__, e) > -1;
}
var cc = uc, fc = qr;
function dc(e, t) {
  var n = this.__data__, r = fc(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var yc = dc, pc = qu, hc = oc, mc = sc, gc = cc, vc = yc;
function ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ft.prototype.clear = pc;
ft.prototype.delete = hc;
ft.prototype.get = mc;
ft.prototype.has = gc;
ft.prototype.set = vc;
var wc = ft, bc = xa, Mc = Wr, Lc = bc(Mc, "Map"), Cc = Lc, Ja = Wu, Sc = wc, jc = Cc;
function Tc() {
  this.size = 0, this.__data__ = {
    hash: new Ja(),
    map: new (jc || Sc)(),
    string: new Ja()
  };
}
var Nc = Tc;
function kc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Dc = kc, Oc = Dc;
function _c(e, t) {
  var n = e.__data__;
  return Oc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Jr = _c, xc = Jr;
function $c(e) {
  var t = xc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var zc = $c, Ic = Jr;
function Pc(e) {
  return Ic(this, e).get(e);
}
var Ec = Pc, Ac = Jr;
function Yc(e) {
  return Ac(this, e).has(e);
}
var Rc = Yc, Uc = Jr;
function Bc(e, t) {
  var n = Uc(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Qc = Bc, Vc = Nc, Hc = zc, Gc = Ec, Wc = Rc, Fc = Qc;
function dt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = Vc;
dt.prototype.delete = Hc;
dt.prototype.get = Gc;
dt.prototype.has = Wc;
dt.prototype.set = Fc;
var qc = dt, Jc = "__lodash_hash_undefined__";
function Kc(e) {
  return this.__data__.set(e, Jc), this;
}
var Xc = Kc;
function Zc(e) {
  return this.__data__.has(e);
}
var ef = Zc, tf = qc, nf = Xc, rf = ef;
function ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new tf(); ++t < n; )
    this.add(e[t]);
}
ur.prototype.add = ur.prototype.push = nf;
ur.prototype.has = rf;
var of = ur;
function af(e, t, n, r) {
  for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var sf = af;
function lf(e) {
  return e !== e;
}
var uf = lf;
function cf(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var ff = cf, df = sf, yf = uf, pf = ff;
function hf(e, t, n) {
  return t === t ? pf(e, t, n) : df(e, yf, n);
}
var mf = hf, gf = mf;
function vf(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && gf(e, t, 0) > -1;
}
var wf = vf;
function bf(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var Mf = bf;
function Lf(e, t) {
  return e.has(t);
}
var Cf = Lf, Sf = xa, jf = Wr, Tf = Sf(jf, "Set"), Nf = Tf;
function kf() {
}
var Df = kf;
function Of(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Is = Of, to = Nf, _f = Df, xf = Is, $f = 1 / 0, zf = to && 1 / xf(new to([, -0]))[1] == $f ? function(e) {
  return new to(e);
} : _f, If = zf, Pf = of, Ef = wf, Af = Mf, Yf = Cf, Rf = If, Uf = Is, Bf = 200;
function Qf(e, t, n) {
  var r = -1, o = Ef, i = e.length, a = !0, c = [], l = c;
  if (n)
    a = !1, o = Af;
  else if (i >= Bf) {
    var d = t ? null : Rf(e);
    if (d)
      return Uf(d);
    a = !1, o = Yf, l = new Pf();
  } else
    l = t ? [] : c;
  e:
    for (; ++r < i; ) {
      var y = e[r], m = t ? t(y) : y;
      if (y = n || y !== 0 ? y : 0, a && m === m) {
        for (var p = l.length; p--; )
          if (l[p] === m)
            continue e;
        t && l.push(m), c.push(y);
      } else
        o(l, m, n) || (l !== c && l.push(m), c.push(y));
    }
  return c;
}
var Vf = Qf, Hf = Vf;
function Gf(e) {
  return e && e.length ? Hf(e) : [];
}
var Wf = Gf;
const Ff = Wf, qf = _({
  name: "SdsAutosuggest",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: 524288
    },
    disableSearch: {
      type: Boolean,
      default: !1
    },
    autosuggest: {
      type: Function,
      default: () => {
      }
    },
    variant: {
      type: String,
      default: "default"
    },
    items: {
      type: Array,
      default: () => []
    },
    threshold: {
      type: Number,
      default: 1
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    useBuiltInHighlighting: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "result"],
  data() {
    return {
      originalQ: "",
      loading: !1,
      isOpen: !1,
      preventDisplay: !0,
      results: [],
      arrowCounter: 0
    };
  },
  computed: {
    q: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    metThreshold() {
      return this.q.length >= this.threshold;
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "btn btn-default text-primary dark:text-blue-400";
        case "danger":
          return "btn btn-default text-danger dark:text-red-400";
        default:
          return "btn btn-default text-secondary dark:text-gray-300";
      }
    }
  },
  watch: {
    items(e) {
      this.results = e, this.loading = !1, this.filterResults();
    }
  },
  mounted() {
    this.autofocus && this.$refs.input.focus(), document.addEventListener("click", this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    formatTerm(e) {
      return e.replace(/<\/?b>/gi, "").trim();
    },
    filterResults() {
      const e = JSON.parse(JSON.stringify(this.items));
      this.results = Ff(
        e.filter((t) => {
          const n = this.q.toLowerCase().replace('"', "").split(" ");
          let r = !1;
          return n.forEach((o) => {
            this.formatTerm(t.term).toLowerCase().indexOf(this.formatTerm(o)) > -1 && (r = !0);
          }), r;
        }).map((t) => (t.term = t.term.trim(), t))
      ), this.isOpen = this.results.length > 0 && this.q !== "", this.originalQ === "" && (this.originalQ = (" " + this.q).slice(1));
    },
    resultWithHightlight(e) {
      if (!this.useBuiltInHighlighting)
        return e.term;
      const n = this.originalQ.replace('"', "").split(" ").join("|").replace(/[-[\]{}()*+?.,\\^$]/g, "\\$&"), r = new RegExp(n, "gi");
      return e.term.replace(r, (o) => `<b>${o}</b>`);
    },
    resetDropdown() {
      this.originalQ = "", this.isOpen = !1, this.preventDisplay = !0, this.results = [], this.arrowCounter = -1;
    },
    handleChange() {
      if (!this.metThreshold) {
        this.resetDropdown();
        return;
      }
      this.originalQ = "", this.arrowCounter = -1, this.preventDisplay = !1, this.loading = !0, this.autosuggest();
    },
    handleArrows(e) {
      switch (this.preventDisplay = !1, e) {
        case "down":
          !this.isOpen && this.metThreshold && this.filterResults(), this.arrowCounter < this.results.length - 1 ? this.arrowCounter = this.arrowCounter + 1 : this.arrowCounter = -1;
          break;
        case "up":
          this.arrowCounter > -1 ? this.arrowCounter = this.arrowCounter - 1 : this.arrowCounter = this.results.length - 1;
          break;
      }
      this.isOpen && (this.results.length > 0 && typeof this.results[this.arrowCounter] < "u" && (this.q = this.formatTerm(this.results[this.arrowCounter].term)), this.arrowCounter === -1 && (this.q = this.originalQ));
    },
    handleEsc() {
      this.originalQ !== "" && (this.q = (" " + this.originalQ).slice(1)), this.resetDropdown();
    },
    handleClickOutside(e) {
      this.$el.contains(e.target) || this.resetDropdown();
    },
    handleClearSearchBtn() {
      this.q = "", this.$refs.input.focus();
    },
    handleSearchBtn() {
      this.disabled || this.disableSearch || (this.resetDropdown(), this.$emit("search", this.q));
    },
    handleDropdownClick(e) {
      this.disabled || this.disableSearch || (this.q = this.formatTerm(e.term), this.resetDropdown(), e !== null && this.$emit("result", e), this.$nextTick(() => {
        this.$emit("search", this.q);
      }));
    },
    handleEnterKeyUp() {
      if (this.disabled || this.disableSearch)
        return;
      const e = typeof this.results[this.arrowCounter] < "u" ? this.results[this.arrowCounter] : null;
      this.q = e !== null ? this.formatTerm(this.results[this.arrowCounter].term) : this.originalQ || this.q, this.resetDropdown(), e !== null && this.$emit("result", e), this.$nextTick(() => {
        this.$emit("search", this.q);
      });
    }
  }
}), E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Jf = {
  "data-id": "sds-autosuggest",
  class: "relative"
}, Kf = { class: "input-group" }, Xf = ["placeholder", "disabled", "maxlength"], Zf = ["disabled"], ed = /* @__PURE__ */ s("span", { class: "sr-only" }, "Clear search", -1), td = /* @__PURE__ */ s("svg", {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5 x",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), nd = [
  ed,
  td
], rd = ["disabled"], od = /* @__PURE__ */ s("span", { class: "sr-only" }, "Search", -1), ad = /* @__PURE__ */ s("svg", {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5 search"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), id = [
  od,
  ad
], sd = {
  key: 0,
  class: "absolute z-50 w-full p-0 mt-1 overflow-auto bg-white border rounded shadow dark:border-gray-600 dark:bg-gray-700"
}, ld = ["onMousedown"], ud = /* @__PURE__ */ s("div", null, [
  /* @__PURE__ */ s("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "inline-block w-5 h-5 my-auto mr-2 search"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ])
], -1), cd = { class: "flex-grow inline-block my-auto truncate align-middle" }, fd = ["innerHTML"];
function dd(e, t, n, r, o, i) {
  return u(), f("div", Jf, [
    s("div", Kf, [
      s("div", {
        class: L(["relative w-full input-group", {
          "opacity-50 pointer-events-none": e.disabled
        }])
      }, [
        ne(s("input", {
          ref: "input",
          "onUpdate:modelValue": t[0] || (t[0] = (a) => e.q = a),
          type: "text",
          autocapitalize: "off",
          autocomplete: "off",
          spellcheck: "false",
          autocorrect: "off",
          class: "pr-8 rounded-r-none form-control",
          placeholder: e.placeholder,
          disabled: e.disabled,
          maxlength: e.maxlength,
          onInput: t[1] || (t[1] = (...a) => e.handleChange && e.handleChange(...a)),
          onKeydown: [
            t[2] || (t[2] = Le((a) => e.handleArrows("down"), ["down"])),
            t[3] || (t[3] = Le((a) => e.handleArrows("up"), ["up"])),
            t[4] || (t[4] = Le(me(() => {
            }, ["prevent", "self"]), ["enter"]))
          ],
          onKeyup: [
            t[5] || (t[5] = Le(me((...a) => e.handleEnterKeyUp && e.handleEnterKeyUp(...a), ["prevent", "self"]), ["enter"])),
            t[6] || (t[6] = Le((...a) => e.handleEsc && e.handleEsc(...a), ["esc"]))
          ],
          onBlur: t[7] || (t[7] = (...a) => e.resetDropdown && e.resetDropdown(...a))
        }, null, 40, Xf), [
          [
            it,
            e.q,
            void 0,
            { trim: !0 }
          ]
        ]),
        e.q.length > 0 ? (u(), f("button", {
          key: 0,
          tabindex: "-1",
          type: "button",
          class: "absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none",
          disabled: e.disabled,
          onClick: t[8] || (t[8] = (...a) => e.handleClearSearchBtn && e.handleClearSearchBtn(...a))
        }, nd, 8, Zf)) : w("", !0)
      ], 2),
      s("button", {
        disabled: e.disabled || e.disableSearch,
        class: L([[e.variantClass], "px-3"]),
        type: "button",
        onClick: t[9] || (t[9] = (...a) => e.handleSearchBtn && e.handleSearchBtn(...a))
      }, id, 10, rd)
    ]),
    e.isOpen && !e.preventDisplay ? (u(), f("ul", sd, [
      (u(!0), f(N, null, A(e.results, (a, c) => (u(), f("li", {
        key: c,
        class: L(["flex px-4 py-2 text-sm text-left text-gray-900 list-none cursor-pointer dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600", { "active bg-gray-200 dark:bg-gray-600": c === e.arrowCounter }]),
        onMousedown: me((l) => e.handleDropdownClick(a), ["prevent"])
      }, [
        ud,
        s("div", cd, [
          s("span", {
            innerHTML: e.resultWithHightlight(a)
          }, null, 8, fd)
        ])
      ], 42, ld))), 128))
    ])) : w("", !0)
  ]);
}
const Qt = /* @__PURE__ */ E(qf, [["render", dd]]);
Qt.install = (e) => {
  e.component(Qt.name, Qt);
};
const yd = {
  name: "SdsBadge"
}, Vt = /* @__PURE__ */ _({
  ...yd,
  props: {
    type: {
      type: String,
      default: "medium"
    },
    variant: {
      type: String,
      default: "gray"
    }
  },
  setup(e) {
    const t = e, n = B(() => {
      let r = "", o = "", i = "";
      switch (t.type === "light-border" && (i = "border border-current"), t.variant) {
        case "blue":
          t.type === "light-border" || t.type === "light" ? (o = "bg-blue-100", r = "text-blue-500") : t.type === "medium" ? (o = "bg-blue-500", r = "text-white") : t.type === "dark" && (o = "bg-blue-700", r = "text-white");
          break;
        case "green":
          t.type === "light-border" || t.type === "light" ? (o = "bg-green-100", r = "text-green-500") : t.type === "medium" ? (o = "bg-green-500", r = "text-white") : t.type === "dark" && (o = "bg-green-700", r = "text-white");
          break;
        case "teal":
          t.type === "light-border" || t.type === "light" ? (o = "bg-teal-100", r = "text-teal-500") : t.type === "medium" ? (o = "bg-teal-500", r = "text-white") : t.type === "dark" && (o = "bg-teal-700", r = "text-white");
          break;
        case "orange":
          t.type === "light-border" || t.type === "light" ? (o = "bg-orange-100", r = "text-orange-800") : t.type === "medium" ? (o = "bg-orange-500", r = "text-white") : t.type === "dark" && (o = "bg-orange-700", r = "text-white");
          break;
        case "red":
          t.type === "light-border" || t.type === "light" ? (o = "bg-red-100", r = "text-red-500") : t.type === "medium" ? (o = "bg-red-500", r = "text-white") : t.type === "dark" && (o = "bg-red-700", r = "text-white");
          break;
        case "tan":
          t.type === "light-border" || t.type === "light" ? (o = "bg-tan-200", r = "text-tan-900") : t.type === "medium" ? (o = "bg-tan-600", r = "text-gray-800") : t.type === "dark" && (o = "bg-tan-800", r = "text-white");
          break;
        case "yellow":
          t.type === "light-border" || t.type === "light" ? (o = "bg-yellow-100", r = "text-yellow-800") : t.type === "medium" ? (o = "bg-yellow-500", r = "text-gray-800") : t.type === "dark" && (o = "bg-yellow-700", r = "text-white");
          break;
        case "pink":
          t.type === "light-border" || t.type === "light" ? (o = "bg-pink-100", r = "text-pink-500") : t.type === "medium" ? (o = "bg-pink-500", r = "text-white") : t.type === "dark" && (o = "bg-pink-700", r = "text-white");
          break;
        case "purple":
          t.type === "light-border" || t.type === "light" ? (o = "bg-purple-100", r = "text-purple-500") : t.type === "medium" ? (o = "bg-purple-400", r = "text-white") : t.type === "dark" && (o = "bg-purple-600", r = "text-white");
          break;
        case "indigo":
          t.type === "light-border" || t.type === "light" ? (o = "bg-indigo-100", r = "text-indigo-500") : t.type === "medium" ? (o = "bg-indigo-500", r = "text-white") : t.type === "dark" && (o = "bg-indigo-700", r = "text-white");
          break;
        case "gray":
        default:
          t.type === "light-border" || t.type === "light" ? (o = "bg-gray-100", r = "text-gray-500") : t.type === "medium" ? (o = "bg-gray-500", r = "text-white") : t.type === "dark" && (o = "bg-gray-700", r = "text-white");
          break;
      }
      return [r, o, i];
    });
    return (r, o) => (u(), f("div", {
      "data-id": "sds-badge",
      class: L(["inline-block tracking-wide max-w-full uppercase px-2 py-1 text-xs font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden align-baseline rounded", O(n)])
    }, [
      j(r.$slots, "default")
    ], 2));
  }
});
Vt.install = (e) => {
  e.component(Vt.name, Vt);
};
const pd = _({
  name: "SdsButton",
  props: {
    variant: { type: String, default: "" },
    size: { type: String, default: "" },
    outline: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  computed: {
    btnClass() {
      return this.variant !== "" || this.size !== "" || this.outline || this.block ? "btn" : "";
    },
    variantClass() {
      switch (this.variant) {
        case "default":
          return "btn-default";
        case "primary":
          return "btn-primary";
        case "success":
          return "btn-success";
        case "danger":
          return "btn-danger";
        case "light":
          return "btn-light";
        default:
          return "";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "btn-sm";
        default:
          return "";
      }
    },
    outlineClass() {
      return this.outline ? "btn-outline" : "";
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    },
    blockClass() {
      return this.block ? "btn-block" : "";
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
}), hd = ["disabled"];
function md(e, t, n, r, o, i) {
  return u(), f("button", {
    "data-id": "sds-button",
    class: L([e.btnClass, e.variantClass, e.sizeClass, e.outlineClass, e.disabledClass, e.blockClass]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, [
    j(e.$slots, "default")
  ], 10, hd);
}
const Ht = /* @__PURE__ */ E(pd, [["render", md]]);
Ht.install = (e) => {
  e.component(Ht.name, Ht);
};
function re(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function x(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Gt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gt = function(n) {
    return typeof n;
  } : Gt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gt(e);
}
function I(e) {
  x(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Gt(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ps(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Be(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), o), n);
}
function gd(e, t) {
  x(2, arguments);
  var n = I(e).getTime(), r = re(t);
  return new Date(n + r);
}
var vd = {};
function yt() {
  return vd;
}
function Es(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ka(e) {
  x(1, arguments);
  var t = I(e);
  return t.setHours(0, 0, 0, 0), t;
}
function wd(e, t) {
  x(2, arguments);
  var n = re(t);
  return Be(e, n * 12);
}
function Wt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wt = function(n) {
    return typeof n;
  } : Wt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wt(e);
}
function uo(e) {
  x(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Wt(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = I(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function Ft(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ft = function(n) {
    return typeof n;
  } : Ft = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ft(e);
}
function co(e) {
  x(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Ft(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = I(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
var bd = 6e4, Md = 36e5, Ld = 1e3;
function qe(e, t) {
  x(2, arguments);
  var n = Ka(e), r = Ka(t);
  return n.getTime() === r.getTime();
}
function qt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qt = function(n) {
    return typeof n;
  } : qt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qt(e);
}
function be(e) {
  return x(1, arguments), e instanceof Date || qt(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function As(e) {
  if (x(1, arguments), !be(e) && typeof e != "number")
    return !1;
  var t = I(e);
  return !isNaN(Number(t));
}
function Cd(e) {
  x(1, arguments);
  var t = I(e);
  return t.setHours(23, 59, 59, 999), t;
}
function rt(e) {
  x(1, arguments);
  var t = I(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Ys(e, t) {
  x(2, arguments);
  var n = re(t);
  return gd(e, -n);
}
var Sd = 864e5;
function jd(e) {
  x(1, arguments);
  var t = I(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Sd) + 1;
}
function ut(e) {
  x(1, arguments);
  var t = 1, n = I(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Rs(e) {
  x(1, arguments);
  var t = I(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = ut(r), i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = ut(i);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function Td(e) {
  x(1, arguments);
  var t = Rs(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = ut(n);
  return r;
}
var Nd = 6048e5;
function Us(e) {
  x(1, arguments);
  var t = I(e), n = ut(t).getTime() - Td(t).getTime();
  return Math.round(n / Nd) + 1;
}
function Ze(e, t) {
  var n, r, o, i, a, c, l, d;
  x(1, arguments);
  var y = yt(), m = re((n = (r = (o = (i = t?.weekStartsOn) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (c = a.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : y.weekStartsOn) !== null && r !== void 0 ? r : (l = y.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = I(e), h = p.getUTCDay(), g = (h < m ? 7 : 0) + h - m;
  return p.setUTCDate(p.getUTCDate() - g), p.setUTCHours(0, 0, 0, 0), p;
}
function $a(e, t) {
  var n, r, o, i, a, c, l, d;
  x(1, arguments);
  var y = I(e), m = y.getUTCFullYear(), p = yt(), h = re((n = (r = (o = (i = t?.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (c = a.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = new Date(0);
  g.setUTCFullYear(m + 1, 0, h), g.setUTCHours(0, 0, 0, 0);
  var b = Ze(g, t), k = new Date(0);
  k.setUTCFullYear(m, 0, h), k.setUTCHours(0, 0, 0, 0);
  var T = Ze(k, t);
  return y.getTime() >= b.getTime() ? m + 1 : y.getTime() >= T.getTime() ? m : m - 1;
}
function kd(e, t) {
  var n, r, o, i, a, c, l, d;
  x(1, arguments);
  var y = yt(), m = re((n = (r = (o = (i = t?.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (c = a.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = y.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = $a(e, t), h = new Date(0);
  h.setUTCFullYear(p, 0, m), h.setUTCHours(0, 0, 0, 0);
  var g = Ze(h, t);
  return g;
}
var Dd = 6048e5;
function Bs(e, t) {
  x(1, arguments);
  var n = I(e), r = Ze(n, t).getTime() - kd(n, t).getTime();
  return Math.round(r / Dd) + 1;
}
function q(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Od = {
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return q(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : q(r + 1, 2);
  },
  d: function(t, n) {
    return q(t.getUTCDate(), n.length);
  },
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, n) {
    return q(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function(t, n) {
    return q(t.getUTCHours(), n.length);
  },
  m: function(t, n) {
    return q(t.getUTCMinutes(), n.length);
  },
  s: function(t, n) {
    return q(t.getUTCSeconds(), n.length);
  },
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), i = Math.floor(o * Math.pow(10, r - 3));
    return q(i, n.length);
  }
};
const Ue = Od;
var ot = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _d = {
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), i = o > 0 ? o : 1 - o;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return Ue.y(t, n);
  },
  Y: function(t, n, r, o) {
    var i = $a(t, o), a = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var c = a % 100;
      return q(c, 2);
    }
    return n === "Yo" ? r.ordinalNumber(a, {
      unit: "year"
    }) : q(a, n.length);
  },
  R: function(t, n) {
    var r = Rs(t);
    return q(r, n.length);
  },
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return q(r, n.length);
  },
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return q(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return q(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Ue.M(t, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return q(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, n, r, o) {
    var i = Bs(t, o);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : q(i, n.length);
  },
  I: function(t, n, r) {
    var o = Us(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : q(o, n.length);
  },
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Ue.d(t, n);
  },
  D: function(t, n, r) {
    var o = jd(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : q(o, n.length);
  },
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, n, r, o) {
    var i = t.getUTCDay(), a = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(a);
      case "ee":
        return q(a, 2);
      case "eo":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, n, r, o) {
    var i = t.getUTCDay(), a = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(a);
      case "cc":
        return q(a, n.length);
      case "co":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, n, r) {
    var o = t.getUTCDay(), i = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return q(i, n.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, n, r) {
    var o = t.getUTCHours(), i = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, n, r) {
    var o = t.getUTCHours(), i;
    switch (o === 12 ? i = ot.noon : o === 0 ? i = ot.midnight : i = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, n, r) {
    var o = t.getUTCHours(), i;
    switch (o >= 17 ? i = ot.evening : o >= 12 ? i = ot.afternoon : o >= 4 ? i = ot.morning : i = ot.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, n, r) {
    if (n === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return Ue.h(t, n);
  },
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Ue.H(t, n);
  },
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : q(o, n.length);
  },
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : q(o, n.length);
  },
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Ue.m(t, n);
  },
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Ue.s(t, n);
  },
  S: function(t, n) {
    return Ue.S(t, n);
  },
  X: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (n) {
      case "X":
        return Za(a);
      case "XXXX":
      case "XX":
        return Je(a);
      case "XXXXX":
      case "XXX":
      default:
        return Je(a, ":");
    }
  },
  x: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return Za(a);
      case "xxxx":
      case "xx":
        return Je(a);
      case "xxxxx":
      case "xxx":
      default:
        return Je(a, ":");
    }
  },
  O: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Xa(a, ":");
      case "OOOO":
      default:
        return "GMT" + Je(a, ":");
    }
  },
  z: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Xa(a, ":");
      case "zzzz":
      default:
        return "GMT" + Je(a, ":");
    }
  },
  t: function(t, n, r, o) {
    var i = o._originalDate || t, a = Math.floor(i.getTime() / 1e3);
    return q(a, n.length);
  },
  T: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTime();
    return q(a, n.length);
  }
};
function Xa(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(o);
  var a = t || "";
  return n + String(o) + a + q(i, 2);
}
function Za(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + q(Math.abs(e) / 60, 2);
  }
  return Je(e, t);
}
function Je(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), i = q(Math.floor(o / 60), 2), a = q(o % 60, 2);
  return r + i + n + a;
}
const xd = _d;
var ei = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Qs = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, $d = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], i = r[2];
  if (!i)
    return ei(t, n);
  var a;
  switch (o) {
    case "P":
      a = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      a = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      a = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      a = n.dateTime({
        width: "full"
      });
      break;
  }
  return a.replace("{{date}}", ei(o, n)).replace("{{time}}", Qs(i, n));
}, zd = {
  p: Qs,
  P: $d
};
const fo = zd;
var Id = ["D", "DD"], Pd = ["YY", "YYYY"];
function Vs(e) {
  return Id.indexOf(e) !== -1;
}
function Hs(e) {
  return Pd.indexOf(e) !== -1;
}
function cr(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Ed = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ad = function(t, n, r) {
  var o, i = Ed[t];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Yd = Ad;
function no(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Rd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ud = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Bd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Qd = {
  date: no({
    formats: Rd,
    defaultWidth: "full"
  }),
  time: no({
    formats: Ud,
    defaultWidth: "full"
  }),
  dateTime: no({
    formats: Bd,
    defaultWidth: "full"
  })
};
const Vd = Qd;
var Hd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Gd = function(t, n, r, o) {
  return Hd[t];
};
const Wd = Gd;
function vt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, a = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[a] || e.formattingValues[i];
    } else {
      var c = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[c];
    }
    var d = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[d];
  };
}
var Fd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, qd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Jd = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Kd = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Xd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Zd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ey = function(t, n) {
  var r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, ty = {
  ordinalNumber: ey,
  era: vt({
    values: Fd,
    defaultWidth: "wide"
  }),
  quarter: vt({
    values: qd,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: vt({
    values: Jd,
    defaultWidth: "wide"
  }),
  day: vt({
    values: Kd,
    defaultWidth: "wide"
  }),
  dayPeriod: vt({
    values: Xd,
    defaultWidth: "wide",
    formattingValues: Zd,
    defaultFormattingWidth: "wide"
  })
};
const ny = ty;
function wt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    var a = i[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(c) ? oy(c, function(m) {
      return m.test(a);
    }) : ry(c, function(m) {
      return m.test(a);
    }), d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = n.valueCallback ? n.valueCallback(d) : d;
    var y = t.slice(a.length);
    return {
      value: d,
      rest: y
    };
  };
}
function ry(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function oy(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ay(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    var c = t.slice(o.length);
    return {
      value: a,
      rest: c
    };
  };
}
var iy = /^(\d+)(th|st|nd|rd)?/i, sy = /\d+/i, ly = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, uy = {
  any: [/^b/i, /^(a|c)/i]
}, cy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, fy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, dy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yy = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, py = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, hy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, my = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gy = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, vy = {
  ordinalNumber: ay({
    matchPattern: iy,
    parsePattern: sy,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: wt({
    matchPatterns: ly,
    defaultMatchWidth: "wide",
    parsePatterns: uy,
    defaultParseWidth: "any"
  }),
  quarter: wt({
    matchPatterns: cy,
    defaultMatchWidth: "wide",
    parsePatterns: fy,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: wt({
    matchPatterns: dy,
    defaultMatchWidth: "wide",
    parsePatterns: yy,
    defaultParseWidth: "any"
  }),
  day: wt({
    matchPatterns: py,
    defaultMatchWidth: "wide",
    parsePatterns: hy,
    defaultParseWidth: "any"
  }),
  dayPeriod: wt({
    matchPatterns: my,
    defaultMatchWidth: "any",
    parsePatterns: gy,
    defaultParseWidth: "any"
  })
};
const wy = vy;
var by = {
  code: "en-US",
  formatDistance: Yd,
  formatLong: Vd,
  formatRelative: Wd,
  localize: ny,
  match: wy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Gs = by;
var My = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ly = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Cy = /^'([^]*?)'?$/, Sy = /''/g, jy = /[a-zA-Z]/;
function he(e, t, n) {
  var r, o, i, a, c, l, d, y, m, p, h, g, b, k, T, D, $, S;
  x(2, arguments);
  var P = String(t), H = yt(), Q = (r = (o = n?.locale) !== null && o !== void 0 ? o : H.locale) !== null && r !== void 0 ? r : Gs, Y = re((i = (a = (c = (l = n?.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (d = n.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && c !== void 0 ? c : H.firstWeekContainsDate) !== null && a !== void 0 ? a : (m = H.locale) === null || m === void 0 || (p = m.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(Y >= 1 && Y <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var R = re((h = (g = (b = (k = n?.weekStartsOn) !== null && k !== void 0 ? k : n == null || (T = n.locale) === null || T === void 0 || (D = T.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && b !== void 0 ? b : H.weekStartsOn) !== null && g !== void 0 ? g : ($ = H.locale) === null || $ === void 0 || (S = $.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = I(e);
  if (!As(K))
    throw new RangeError("Invalid time value");
  var U = Es(K), X = Ys(K, U), fe = {
    firstWeekContainsDate: Y,
    weekStartsOn: R,
    locale: Q,
    _originalDate: K
  }, ce = P.match(Ly).map(function(F) {
    var Z = F[0];
    if (Z === "p" || Z === "P") {
      var Ce = fo[Z];
      return Ce(F, Q.formatLong);
    }
    return F;
  }).join("").match(My).map(function(F) {
    if (F === "''")
      return "'";
    var Z = F[0];
    if (Z === "'")
      return Ty(F);
    var Ce = xd[Z];
    if (Ce)
      return !(n != null && n.useAdditionalWeekYearTokens) && Hs(F) && cr(F, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Vs(F) && cr(F, t, String(e)), Ce(X, F, Q.localize, fe);
    if (Z.match(jy))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Z + "`");
    return F;
  }).join("");
  return ce;
}
function Ty(e) {
  var t = e.match(Cy);
  return t ? t[1].replace(Sy, "'") : e;
}
function Ny(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function ti(e) {
  x(1, arguments);
  var t = I(e), n = t.getDay();
  return n;
}
function ni(e) {
  x(1, arguments);
  var t = I(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function ze(e) {
  x(1, arguments);
  var t = I(e), n = t.getHours();
  return n;
}
function Ke(e, t) {
  x(2, arguments);
  var n = I(e), r = I(t);
  return n.getTime() > r.getTime();
}
function yo(e, t) {
  x(2, arguments);
  var n = I(e), r = I(t);
  return n.getTime() < r.getTime();
}
function po(e, t) {
  x(2, arguments);
  var n = I(e), r = I(t);
  return n.getTime() === r.getTime();
}
function Jt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jt = function(n) {
    return typeof n;
  } : Jt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jt(e);
}
function Ws(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ho(e, t);
}
function Fs(e) {
  var t = Dy();
  return function() {
    var r = fr(e), o;
    if (t) {
      var i = fr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return ky(this, o);
  };
}
function ky(e, t) {
  return t && (Jt(t) === "object" || typeof t == "function") ? t : mo(e);
}
function mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fr(e) {
  return fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, fr(e);
}
function za(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ri(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ia(e, t, n) {
  return t && ri(e.prototype, t), n && ri(e, n), e;
}
function go(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Oy = 10, qs = /* @__PURE__ */ function() {
  function e() {
    za(this, e), go(this, "subPriority", 0);
  }
  return Ia(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), _y = /* @__PURE__ */ function(e) {
  Ws(n, e);
  var t = Fs(n);
  function n(r, o, i, a, c) {
    var l;
    return za(this, n), l = t.call(this), l.value = r, l.validateValue = o, l.setValue = i, l.priority = a, c && (l.subPriority = c), l;
  }
  return Ia(n, [{
    key: "validate",
    value: function(o, i) {
      return this.validateValue(o, this.value, i);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return this.setValue(o, i, this.value, a);
    }
  }]), n;
}(qs), xy = /* @__PURE__ */ function(e) {
  Ws(n, e);
  var t = Fs(n);
  function n() {
    var r;
    za(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), go(mo(r), "priority", Oy), go(mo(r), "subPriority", -1), r;
  }
  return Ia(n, [{
    key: "set",
    value: function(o, i) {
      if (i.timestampIsSet)
        return o;
      var a = new Date(0);
      return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
    }
  }]), n;
}(qs);
function $y(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zy(e, t, n) {
  return t && oi(e.prototype, t), n && oi(e, n), e;
}
var W = /* @__PURE__ */ function() {
  function e() {
    $y(this, e);
  }
  return zy(e, [{
    key: "run",
    value: function(n, r, o, i) {
      var a = this.parse(n, r, o, i);
      return a ? {
        setter: new _y(a.value, this.validate, this.set, this.priority, this.subPriority),
        rest: a.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, o) {
      return !0;
    }
  }]), e;
}();
function Kt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kt = function(n) {
    return typeof n;
  } : Kt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kt(e);
}
function Iy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Py(e, t, n) {
  return t && ai(e.prototype, t), n && ai(e, n), e;
}
function Ey(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && vo(e, t);
}
function vo(e, t) {
  return vo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, vo(e, t);
}
function Ay(e) {
  var t = Ry();
  return function() {
    var r = dr(e), o;
    if (t) {
      var i = dr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Yy(this, o);
  };
}
function Yy(e, t) {
  return t && (Kt(t) === "object" || typeof t == "function") ? t : wo(e);
}
function wo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ry() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function dr(e) {
  return dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, dr(e);
}
function ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uy = /* @__PURE__ */ function(e) {
  Ey(n, e);
  var t = Ay(n);
  function n() {
    var r;
    Iy(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ii(wo(r), "priority", 140), ii(wo(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Py(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "G":
        case "GG":
        case "GGG":
          return a.era(o, {
            width: "abbreviated"
          }) || a.era(o, {
            width: "narrow"
          });
        case "GGGGG":
          return a.era(o, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return a.era(o, {
            width: "wide"
          }) || a.era(o, {
            width: "abbreviated"
          }) || a.era(o, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.era = a, o.setUTCFullYear(a, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W), se = {
  month: /^(1[0-2]|0?\d)/,
  date: /^(3[0-1]|[0-2]?\d)/,
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  week: /^(5[0-3]|[0-4]?\d)/,
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  hour11h: /^(1[0-1]|0?\d)/,
  hour12h: /^(1[0-2]|0?\d)/,
  minute: /^[0-5]?\d/,
  second: /^[0-5]?\d/,
  singleDigit: /^\d/,
  twoDigits: /^\d{1,2}/,
  threeDigits: /^\d{1,3}/,
  fourDigits: /^\d{1,4}/,
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  twoDigitsSigned: /^-?\d{1,2}/,
  threeDigitsSigned: /^-?\d{1,3}/,
  fourDigitsSigned: /^-?\d{1,4}/
}, _e = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function le(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function oe(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function xe(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, o = n[2] ? parseInt(n[2], 10) : 0, i = n[3] ? parseInt(n[3], 10) : 0, a = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (o * Md + i * bd + a * Ld),
    rest: t.slice(n[0].length)
  };
}
function Js(e) {
  return oe(se.anyDigitsSigned, e);
}
function ae(e, t) {
  switch (e) {
    case 1:
      return oe(se.singleDigit, t);
    case 2:
      return oe(se.twoDigits, t);
    case 3:
      return oe(se.threeDigits, t);
    case 4:
      return oe(se.fourDigits, t);
    default:
      return oe(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function yr(e, t) {
  switch (e) {
    case 1:
      return oe(se.singleDigitSigned, t);
    case 2:
      return oe(se.twoDigitsSigned, t);
    case 3:
      return oe(se.threeDigitsSigned, t);
    case 4:
      return oe(se.fourDigitsSigned, t);
    default:
      return oe(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Pa(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Ks(e, t) {
  var n = t > 0, r = n ? t : 1 - t, o;
  if (r <= 50)
    o = e || 100;
  else {
    var i = r + 50, a = Math.floor(i / 100) * 100, c = e >= i % 100;
    o = e + a - (c ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function Xs(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Xt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xt = function(n) {
    return typeof n;
  } : Xt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xt(e);
}
function By(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function si(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qy(e, t, n) {
  return t && si(e.prototype, t), n && si(e, n), e;
}
function Vy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, bo(e, t);
}
function Hy(e) {
  var t = Wy();
  return function() {
    var r = pr(e), o;
    if (t) {
      var i = pr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Gy(this, o);
  };
}
function Gy(e, t) {
  return t && (Xt(t) === "object" || typeof t == "function") ? t : Mo(e);
}
function Mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pr(e) {
  return pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pr(e);
}
function li(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Fy = /* @__PURE__ */ function(e) {
  Vy(n, e);
  var t = Hy(n);
  function n() {
    var r;
    By(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), li(Mo(r), "priority", 130), li(Mo(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Qy(n, [{
    key: "parse",
    value: function(o, i, a) {
      var c = function(d) {
        return {
          year: d,
          isTwoDigitYear: i === "yy"
        };
      };
      switch (i) {
        case "y":
          return le(ae(4, o), c);
        case "yo":
          return le(a.ordinalNumber(o, {
            unit: "year"
          }), c);
        default:
          return le(ae(i.length, o), c);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var c = o.getUTCFullYear();
      if (a.isTwoDigitYear) {
        var l = Ks(a.year, c);
        return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
      }
      var d = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
      return o.setUTCFullYear(d, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function Zt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zt = function(n) {
    return typeof n;
  } : Zt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zt(e);
}
function qy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jy(e, t, n) {
  return t && ui(e.prototype, t), n && ui(e, n), e;
}
function Ky(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Lo(e, t);
}
function Lo(e, t) {
  return Lo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Lo(e, t);
}
function Xy(e) {
  var t = e0();
  return function() {
    var r = hr(e), o;
    if (t) {
      var i = hr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Zy(this, o);
  };
}
function Zy(e, t) {
  return t && (Zt(t) === "object" || typeof t == "function") ? t : Co(e);
}
function Co(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function e0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function hr(e) {
  return hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hr(e);
}
function ci(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var t0 = /* @__PURE__ */ function(e) {
  Ky(n, e);
  var t = Xy(n);
  function n() {
    var r;
    qy(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ci(Co(r), "priority", 130), ci(Co(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Jy(n, [{
    key: "parse",
    value: function(o, i, a) {
      var c = function(d) {
        return {
          year: d,
          isTwoDigitYear: i === "YY"
        };
      };
      switch (i) {
        case "Y":
          return le(ae(4, o), c);
        case "Yo":
          return le(a.ordinalNumber(o, {
            unit: "year"
          }), c);
        default:
          return le(ae(i.length, o), c);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(o, i, a, c) {
      var l = $a(o, c);
      if (a.isTwoDigitYear) {
        var d = Ks(a.year, l);
        return o.setUTCFullYear(d, 0, c.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), Ze(o, c);
      }
      var y = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
      return o.setUTCFullYear(y, 0, c.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), Ze(o, c);
    }
  }]), n;
}(W);
function en(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? en = function(n) {
    return typeof n;
  } : en = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, en(e);
}
function n0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function r0(e, t, n) {
  return t && fi(e.prototype, t), n && fi(e, n), e;
}
function o0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && So(e, t);
}
function So(e, t) {
  return So = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, So(e, t);
}
function a0(e) {
  var t = s0();
  return function() {
    var r = mr(e), o;
    if (t) {
      var i = mr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return i0(this, o);
  };
}
function i0(e, t) {
  return t && (en(t) === "object" || typeof t == "function") ? t : jo(e);
}
function jo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function s0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function mr(e) {
  return mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, mr(e);
}
function di(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var l0 = /* @__PURE__ */ function(e) {
  o0(n, e);
  var t = a0(n);
  function n() {
    var r;
    n0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), di(jo(r), "priority", 130), di(jo(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return r0(n, [{
    key: "parse",
    value: function(o, i) {
      return yr(i === "R" ? 4 : i.length, o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var c = new Date(0);
      return c.setUTCFullYear(a, 0, 4), c.setUTCHours(0, 0, 0, 0), ut(c);
    }
  }]), n;
}(W);
function tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tn = function(n) {
    return typeof n;
  } : tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, tn(e);
}
function u0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function c0(e, t, n) {
  return t && yi(e.prototype, t), n && yi(e, n), e;
}
function f0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && To(e, t);
}
function To(e, t) {
  return To = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, To(e, t);
}
function d0(e) {
  var t = p0();
  return function() {
    var r = gr(e), o;
    if (t) {
      var i = gr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return y0(this, o);
  };
}
function y0(e, t) {
  return t && (tn(t) === "object" || typeof t == "function") ? t : No(e);
}
function No(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function p0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gr(e) {
  return gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gr(e);
}
function pi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var h0 = /* @__PURE__ */ function(e) {
  f0(n, e);
  var t = d0(n);
  function n() {
    var r;
    u0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), pi(No(r), "priority", 130), pi(No(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return c0(n, [{
    key: "parse",
    value: function(o, i) {
      return yr(i === "u" ? 4 : i.length, o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCFullYear(a, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nn = function(n) {
    return typeof n;
  } : nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, nn(e);
}
function m0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function g0(e, t, n) {
  return t && hi(e.prototype, t), n && hi(e, n), e;
}
function v0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ko(e, t);
}
function ko(e, t) {
  return ko = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ko(e, t);
}
function w0(e) {
  var t = M0();
  return function() {
    var r = vr(e), o;
    if (t) {
      var i = vr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return b0(this, o);
  };
}
function b0(e, t) {
  return t && (nn(t) === "object" || typeof t == "function") ? t : Do(e);
}
function Do(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function M0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function vr(e) {
  return vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vr(e);
}
function mi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var L0 = /* @__PURE__ */ function(e) {
  v0(n, e);
  var t = w0(n);
  function n() {
    var r;
    m0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), mi(Do(r), "priority", 120), mi(Do(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return g0(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "Q":
        case "QQ":
          return ae(i.length, o);
        case "Qo":
          return a.ordinalNumber(o, {
            unit: "quarter"
          });
        case "QQQ":
          return a.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return a.quarter(o, {
            width: "wide",
            context: "formatting"
          }) || a.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rn = function(n) {
    return typeof n;
  } : rn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, rn(e);
}
function C0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function S0(e, t, n) {
  return t && gi(e.prototype, t), n && gi(e, n), e;
}
function j0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Oo(e, t);
}
function Oo(e, t) {
  return Oo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Oo(e, t);
}
function T0(e) {
  var t = k0();
  return function() {
    var r = wr(e), o;
    if (t) {
      var i = wr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return N0(this, o);
  };
}
function N0(e, t) {
  return t && (rn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function k0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function wr(e) {
  return wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, wr(e);
}
function vi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var D0 = /* @__PURE__ */ function(e) {
  j0(n, e);
  var t = T0(n);
  function n() {
    var r;
    C0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), vi(_o(r), "priority", 120), vi(_o(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return S0(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "q":
        case "qq":
          return ae(i.length, o);
        case "qo":
          return a.ordinalNumber(o, {
            unit: "quarter"
          });
        case "qqq":
          return a.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return a.quarter(o, {
            width: "wide",
            context: "standalone"
          }) || a.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function on(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? on = function(n) {
    return typeof n;
  } : on = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, on(e);
}
function O0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _0(e, t, n) {
  return t && wi(e.prototype, t), n && wi(e, n), e;
}
function x0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xo(e, t);
}
function xo(e, t) {
  return xo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, xo(e, t);
}
function $0(e) {
  var t = I0();
  return function() {
    var r = br(e), o;
    if (t) {
      var i = br(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return z0(this, o);
  };
}
function z0(e, t) {
  return t && (on(t) === "object" || typeof t == "function") ? t : $o(e);
}
function $o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function I0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function br(e) {
  return br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, br(e);
}
function bi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var P0 = /* @__PURE__ */ function(e) {
  x0(n, e);
  var t = $0(n);
  function n() {
    var r;
    O0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), bi($o(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), bi($o(r), "priority", 110), r;
  }
  return _0(n, [{
    key: "parse",
    value: function(o, i, a) {
      var c = function(d) {
        return d - 1;
      };
      switch (i) {
        case "M":
          return le(oe(se.month, o), c);
        case "MM":
          return le(ae(2, o), c);
        case "Mo":
          return le(a.ordinalNumber(o, {
            unit: "month"
          }), c);
        case "MMM":
          return a.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return a.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return a.month(o, {
            width: "wide",
            context: "formatting"
          }) || a.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.month(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function an(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? an = function(n) {
    return typeof n;
  } : an = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, an(e);
}
function E0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function A0(e, t, n) {
  return t && Mi(e.prototype, t), n && Mi(e, n), e;
}
function Y0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && zo(e, t);
}
function zo(e, t) {
  return zo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, zo(e, t);
}
function R0(e) {
  var t = B0();
  return function() {
    var r = Mr(e), o;
    if (t) {
      var i = Mr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return U0(this, o);
  };
}
function U0(e, t) {
  return t && (an(t) === "object" || typeof t == "function") ? t : Io(e);
}
function Io(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function B0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mr(e);
}
function Li(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Q0 = /* @__PURE__ */ function(e) {
  Y0(n, e);
  var t = R0(n);
  function n() {
    var r;
    E0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Li(Io(r), "priority", 110), Li(Io(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return A0(n, [{
    key: "parse",
    value: function(o, i, a) {
      var c = function(d) {
        return d - 1;
      };
      switch (i) {
        case "L":
          return le(oe(se.month, o), c);
        case "LL":
          return le(ae(2, o), c);
        case "Lo":
          return le(a.ordinalNumber(o, {
            unit: "month"
          }), c);
        case "LLL":
          return a.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return a.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return a.month(o, {
            width: "wide",
            context: "standalone"
          }) || a.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.month(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function V0(e, t, n) {
  x(2, arguments);
  var r = I(e), o = re(t), i = Bs(r, n) - o;
  return r.setUTCDate(r.getUTCDate() - i * 7), r;
}
function sn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sn = function(n) {
    return typeof n;
  } : sn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, sn(e);
}
function H0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ci(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function G0(e, t, n) {
  return t && Ci(e.prototype, t), n && Ci(e, n), e;
}
function W0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Po(e, t);
}
function Po(e, t) {
  return Po = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Po(e, t);
}
function F0(e) {
  var t = J0();
  return function() {
    var r = Lr(e), o;
    if (t) {
      var i = Lr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return q0(this, o);
  };
}
function q0(e, t) {
  return t && (sn(t) === "object" || typeof t == "function") ? t : Eo(e);
}
function Eo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function J0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lr(e);
}
function Si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var K0 = /* @__PURE__ */ function(e) {
  W0(n, e);
  var t = F0(n);
  function n() {
    var r;
    H0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Si(Eo(r), "priority", 100), Si(Eo(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return G0(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "w":
          return oe(se.week, o);
        case "wo":
          return a.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(o, i, a, c) {
      return Ze(V0(o, a, c), c);
    }
  }]), n;
}(W);
function X0(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t), o = Us(n) - r;
  return n.setUTCDate(n.getUTCDate() - o * 7), n;
}
function ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ln = function(n) {
    return typeof n;
  } : ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ln(e);
}
function Z0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ji(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ep(e, t, n) {
  return t && ji(e.prototype, t), n && ji(e, n), e;
}
function tp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ao(e, t);
}
function Ao(e, t) {
  return Ao = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Ao(e, t);
}
function np(e) {
  var t = op();
  return function() {
    var r = Cr(e), o;
    if (t) {
      var i = Cr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return rp(this, o);
  };
}
function rp(e, t) {
  return t && (ln(t) === "object" || typeof t == "function") ? t : Yo(e);
}
function Yo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function op() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Cr(e) {
  return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cr(e);
}
function Ti(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ap = /* @__PURE__ */ function(e) {
  tp(n, e);
  var t = np(n);
  function n() {
    var r;
    Z0(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Ti(Yo(r), "priority", 100), Ti(Yo(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return ep(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "I":
          return oe(se.week, o);
        case "Io":
          return a.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return ut(X0(o, a));
    }
  }]), n;
}(W);
function un(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? un = function(n) {
    return typeof n;
  } : un = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, un(e);
}
function ip(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ni(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sp(e, t, n) {
  return t && Ni(e.prototype, t), n && Ni(e, n), e;
}
function lp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ro(e, t);
}
function Ro(e, t) {
  return Ro = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Ro(e, t);
}
function up(e) {
  var t = fp();
  return function() {
    var r = Sr(e), o;
    if (t) {
      var i = Sr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return cp(this, o);
  };
}
function cp(e, t) {
  return t && (un(t) === "object" || typeof t == "function") ? t : cn(e);
}
function cn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Sr(e) {
  return Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Sr(e);
}
function ro(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dp = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yp = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], pp = /* @__PURE__ */ function(e) {
  lp(n, e);
  var t = up(n);
  function n() {
    var r;
    ip(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ro(cn(r), "priority", 90), ro(cn(r), "subPriority", 1), ro(cn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return sp(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "d":
          return oe(se.date, o);
        case "do":
          return a.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      var a = o.getUTCFullYear(), c = Xs(a), l = o.getUTCMonth();
      return c ? i >= 1 && i <= yp[l] : i >= 1 && i <= dp[l];
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCDate(a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fn = function(n) {
    return typeof n;
  } : fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fn(e);
}
function hp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function mp(e, t, n) {
  return t && ki(e.prototype, t), n && ki(e, n), e;
}
function gp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Uo(e, t);
}
function Uo(e, t) {
  return Uo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Uo(e, t);
}
function vp(e) {
  var t = bp();
  return function() {
    var r = jr(e), o;
    if (t) {
      var i = jr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return wp(this, o);
  };
}
function wp(e, t) {
  return t && (fn(t) === "object" || typeof t == "function") ? t : dn(e);
}
function dn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jr(e) {
  return jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, jr(e);
}
function oo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mp = /* @__PURE__ */ function(e) {
  gp(n, e);
  var t = vp(n);
  function n() {
    var r;
    hp(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), oo(dn(r), "priority", 90), oo(dn(r), "subpriority", 1), oo(dn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return mp(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "D":
        case "DD":
          return oe(se.dayOfYear, o);
        case "Do":
          return a.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      var a = o.getUTCFullYear(), c = Xs(a);
      return c ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(0, a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function Ea(e, t, n) {
  var r, o, i, a, c, l, d, y;
  x(2, arguments);
  var m = yt(), p = re((r = (o = (i = (a = n?.weekStartsOn) !== null && a !== void 0 ? a : n == null || (c = n.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && i !== void 0 ? i : m.weekStartsOn) !== null && o !== void 0 ? o : (d = m.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = I(e), g = re(t), b = h.getUTCDay(), k = g % 7, T = (k + 7) % 7, D = (T < p ? 7 : 0) + g - b;
  return h.setUTCDate(h.getUTCDate() + D), h;
}
function yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yn = function(n) {
    return typeof n;
  } : yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, yn(e);
}
function Lp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cp(e, t, n) {
  return t && Di(e.prototype, t), n && Di(e, n), e;
}
function Sp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Bo(e, t);
}
function Bo(e, t) {
  return Bo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Bo(e, t);
}
function jp(e) {
  var t = Np();
  return function() {
    var r = Tr(e), o;
    if (t) {
      var i = Tr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Tp(this, o);
  };
}
function Tp(e, t) {
  return t && (yn(t) === "object" || typeof t == "function") ? t : Qo(e);
}
function Qo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Np() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Tr(e) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Tr(e);
}
function Oi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kp = /* @__PURE__ */ function(e) {
  Sp(n, e);
  var t = jp(n);
  function n() {
    var r;
    Lp(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Oi(Qo(r), "priority", 90), Oi(Qo(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return Cp(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "E":
        case "EE":
        case "EEE":
          return a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, c) {
      return o = Ea(o, a, c), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pn = function(n) {
    return typeof n;
  } : pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, pn(e);
}
function Dp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Op(e, t, n) {
  return t && _i(e.prototype, t), n && _i(e, n), e;
}
function _p(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Vo(e, t);
}
function Vo(e, t) {
  return Vo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Vo(e, t);
}
function xp(e) {
  var t = zp();
  return function() {
    var r = Nr(e), o;
    if (t) {
      var i = Nr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return $p(this, o);
  };
}
function $p(e, t) {
  return t && (pn(t) === "object" || typeof t == "function") ? t : Ho(e);
}
function Ho(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nr(e);
}
function xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ip = /* @__PURE__ */ function(e) {
  _p(n, e);
  var t = xp(n);
  function n() {
    var r;
    Dp(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), xi(Ho(r), "priority", 90), xi(Ho(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return Op(n, [{
    key: "parse",
    value: function(o, i, a, c) {
      var l = function(y) {
        var m = Math.floor((y - 1) / 7) * 7;
        return (y + c.weekStartsOn + 6) % 7 + m;
      };
      switch (i) {
        case "e":
        case "ee":
          return le(ae(i.length, o), l);
        case "eo":
          return le(a.ordinalNumber(o, {
            unit: "day"
          }), l);
        case "eee":
          return a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, c) {
      return o = Ea(o, a, c), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(n) {
    return typeof n;
  } : hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hn(e);
}
function Pp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ep(e, t, n) {
  return t && $i(e.prototype, t), n && $i(e, n), e;
}
function Ap(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Go(e, t);
}
function Go(e, t) {
  return Go = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Go(e, t);
}
function Yp(e) {
  var t = Up();
  return function() {
    var r = kr(e), o;
    if (t) {
      var i = kr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Rp(this, o);
  };
}
function Rp(e, t) {
  return t && (hn(t) === "object" || typeof t == "function") ? t : Wo(e);
}
function Wo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Up() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bp = /* @__PURE__ */ function(e) {
  Ap(n, e);
  var t = Yp(n);
  function n() {
    var r;
    Pp(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), zi(Wo(r), "priority", 90), zi(Wo(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Ep(n, [{
    key: "parse",
    value: function(o, i, a, c) {
      var l = function(y) {
        var m = Math.floor((y - 1) / 7) * 7;
        return (y + c.weekStartsOn + 6) % 7 + m;
      };
      switch (i) {
        case "c":
        case "cc":
          return le(ae(i.length, o), l);
        case "co":
          return le(a.ordinalNumber(o, {
            unit: "day"
          }), l);
        case "ccc":
          return a.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return a.day(o, {
            width: "wide",
            context: "standalone"
          }) || a.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, c) {
      return o = Ea(o, a, c), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function Qp(e, t) {
  x(2, arguments);
  var n = re(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, o = I(e), i = o.getUTCDay(), a = n % 7, c = (a + 7) % 7, l = (c < r ? 7 : 0) + n - i;
  return o.setUTCDate(o.getUTCDate() + l), o;
}
function mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mn = function(n) {
    return typeof n;
  } : mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mn(e);
}
function Vp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ii(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hp(e, t, n) {
  return t && Ii(e.prototype, t), n && Ii(e, n), e;
}
function Gp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fo(e, t);
}
function Fo(e, t) {
  return Fo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Fo(e, t);
}
function Wp(e) {
  var t = qp();
  return function() {
    var r = Dr(e), o;
    if (t) {
      var i = Dr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Fp(this, o);
  };
}
function Fp(e, t) {
  return t && (mn(t) === "object" || typeof t == "function") ? t : qo(e);
}
function qo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Dr(e);
}
function Pi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jp = /* @__PURE__ */ function(e) {
  Gp(n, e);
  var t = Wp(n);
  function n() {
    var r;
    Vp(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Pi(qo(r), "priority", 90), Pi(qo(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return Hp(n, [{
    key: "parse",
    value: function(o, i, a) {
      var c = function(d) {
        return d === 0 ? 7 : d;
      };
      switch (i) {
        case "i":
        case "ii":
          return ae(i.length, o);
        case "io":
          return a.ordinalNumber(o, {
            unit: "day"
          });
        case "iii":
          return le(a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), c);
        case "iiiii":
          return le(a.day(o, {
            width: "narrow",
            context: "formatting"
          }), c);
        case "iiiiii":
          return le(a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), c);
        case "iiii":
        default:
          return le(a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), c);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 7;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o = Qp(o, a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(W);
function gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(n) {
    return typeof n;
  } : gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gn(e);
}
function Kp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ei(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xp(e, t, n) {
  return t && Ei(e.prototype, t), n && Ei(e, n), e;
}
function Zp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Jo(e, t);
}
function Jo(e, t) {
  return Jo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Jo(e, t);
}
function eh(e) {
  var t = nh();
  return function() {
    var r = Or(e), o;
    if (t) {
      var i = Or(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return th(this, o);
  };
}
function th(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : Ko(e);
}
function Ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Or(e) {
  return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Or(e);
}
function Ai(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rh = /* @__PURE__ */ function(e) {
  Zp(n, e);
  var t = eh(n);
  function n() {
    var r;
    Kp(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Ai(Ko(r), "priority", 80), Ai(Ko(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return Xp(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "a":
        case "aa":
        case "aaa":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(Pa(a), 0, 0, 0), o;
    }
  }]), n;
}(W);
function vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(n) {
    return typeof n;
  } : vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vn(e);
}
function oh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ah(e, t, n) {
  return t && Yi(e.prototype, t), n && Yi(e, n), e;
}
function ih(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Xo(e, t);
}
function Xo(e, t) {
  return Xo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Xo(e, t);
}
function sh(e) {
  var t = uh();
  return function() {
    var r = _r(e), o;
    if (t) {
      var i = _r(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return lh(this, o);
  };
}
function lh(e, t) {
  return t && (vn(t) === "object" || typeof t == "function") ? t : Zo(e);
}
function Zo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _r(e) {
  return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _r(e);
}
function Ri(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ch = /* @__PURE__ */ function(e) {
  ih(n, e);
  var t = sh(n);
  function n() {
    var r;
    oh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Ri(Zo(r), "priority", 80), Ri(Zo(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return ah(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "b":
        case "bb":
        case "bbb":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(Pa(a), 0, 0, 0), o;
    }
  }]), n;
}(W);
function wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wn = function(n) {
    return typeof n;
  } : wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wn(e);
}
function fh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function dh(e, t, n) {
  return t && Ui(e.prototype, t), n && Ui(e, n), e;
}
function yh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ea(e, t);
}
function ea(e, t) {
  return ea = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ea(e, t);
}
function ph(e) {
  var t = mh();
  return function() {
    var r = xr(e), o;
    if (t) {
      var i = xr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return hh(this, o);
  };
}
function hh(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : ta(e);
}
function ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xr(e) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xr(e);
}
function Bi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gh = /* @__PURE__ */ function(e) {
  yh(n, e);
  var t = ph(n);
  function n() {
    var r;
    fh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Bi(ta(r), "priority", 80), Bi(ta(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return dh(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "B":
        case "BB":
        case "BBB":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(Pa(a), 0, 0, 0), o;
    }
  }]), n;
}(W);
function bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bn = function(n) {
    return typeof n;
  } : bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, bn(e);
}
function vh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wh(e, t, n) {
  return t && Qi(e.prototype, t), n && Qi(e, n), e;
}
function bh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && na(e, t);
}
function na(e, t) {
  return na = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, na(e, t);
}
function Mh(e) {
  var t = Ch();
  return function() {
    var r = $r(e), o;
    if (t) {
      var i = $r(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Lh(this, o);
  };
}
function Lh(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : ra(e);
}
function ra(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ch() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function Vi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sh = /* @__PURE__ */ function(e) {
  bh(n, e);
  var t = Mh(n);
  function n() {
    var r;
    vh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Vi(ra(r), "priority", 70), Vi(ra(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return wh(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "h":
          return oe(se.hour12h, o);
        case "ho":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 12;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var c = o.getUTCHours() >= 12;
      return c && a < 12 ? o.setUTCHours(a + 12, 0, 0, 0) : !c && a === 12 ? o.setUTCHours(0, 0, 0, 0) : o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), n;
}(W);
function Mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mn = function(n) {
    return typeof n;
  } : Mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Mn(e);
}
function jh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Th(e, t, n) {
  return t && Hi(e.prototype, t), n && Hi(e, n), e;
}
function Nh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && oa(e, t);
}
function oa(e, t) {
  return oa = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, oa(e, t);
}
function kh(e) {
  var t = Oh();
  return function() {
    var r = zr(e), o;
    if (t) {
      var i = zr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Dh(this, o);
  };
}
function Dh(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : aa(e);
}
function aa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Oh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zr(e) {
  return zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zr(e);
}
function Gi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _h = /* @__PURE__ */ function(e) {
  Nh(n, e);
  var t = kh(n);
  function n() {
    var r;
    jh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Gi(aa(r), "priority", 70), Gi(aa(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return Th(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "H":
          return oe(se.hour23h, o);
        case "Ho":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 23;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), n;
}(W);
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function xh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $h(e, t, n) {
  return t && Wi(e.prototype, t), n && Wi(e, n), e;
}
function zh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ia(e, t);
}
function ia(e, t) {
  return ia = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ia(e, t);
}
function Ih(e) {
  var t = Eh();
  return function() {
    var r = Ir(e), o;
    if (t) {
      var i = Ir(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Ph(this, o);
  };
}
function Ph(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : sa(e);
}
function sa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Eh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ir(e);
}
function Fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ah = /* @__PURE__ */ function(e) {
  zh(n, e);
  var t = Ih(n);
  function n() {
    var r;
    xh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Fi(sa(r), "priority", 70), Fi(sa(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return $h(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "K":
          return oe(se.hour11h, o);
        case "Ko":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var c = o.getUTCHours() >= 12;
      return c && a < 12 ? o.setUTCHours(a + 12, 0, 0, 0) : o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), n;
}(W);
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function Yh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rh(e, t, n) {
  return t && qi(e.prototype, t), n && qi(e, n), e;
}
function Uh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && la(e, t);
}
function la(e, t) {
  return la = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, la(e, t);
}
function Bh(e) {
  var t = Vh();
  return function() {
    var r = Pr(e), o;
    if (t) {
      var i = Pr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Qh(this, o);
  };
}
function Qh(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : ua(e);
}
function ua(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pr(e);
}
function Ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hh = /* @__PURE__ */ function(e) {
  Uh(n, e);
  var t = Bh(n);
  function n() {
    var r;
    Yh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Ji(ua(r), "priority", 70), Ji(ua(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Rh(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "k":
          return oe(se.hour24h, o);
        case "ko":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 24;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var c = a <= 24 ? a % 24 : a;
      return o.setUTCHours(c, 0, 0, 0), o;
    }
  }]), n;
}(W);
function Sn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sn = function(n) {
    return typeof n;
  } : Sn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Sn(e);
}
function Gh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wh(e, t, n) {
  return t && Ki(e.prototype, t), n && Ki(e, n), e;
}
function Fh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ca(e, t);
}
function ca(e, t) {
  return ca = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ca(e, t);
}
function qh(e) {
  var t = Kh();
  return function() {
    var r = Er(e), o;
    if (t) {
      var i = Er(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Jh(this, o);
  };
}
function Jh(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : fa(e);
}
function fa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Er(e) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Er(e);
}
function Xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xh = /* @__PURE__ */ function(e) {
  Fh(n, e);
  var t = qh(n);
  function n() {
    var r;
    Gh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Xi(fa(r), "priority", 60), Xi(fa(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Wh(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "m":
          return oe(se.minute, o);
        case "mo":
          return a.ordinalNumber(o, {
            unit: "minute"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMinutes(a, 0, 0), o;
    }
  }]), n;
}(W);
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function Zh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function e1(e, t, n) {
  return t && Zi(e.prototype, t), n && Zi(e, n), e;
}
function t1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && da(e, t);
}
function da(e, t) {
  return da = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, da(e, t);
}
function n1(e) {
  var t = o1();
  return function() {
    var r = Ar(e), o;
    if (t) {
      var i = Ar(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return r1(this, o);
  };
}
function r1(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : ya(e);
}
function ya(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function o1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ar(e);
}
function es(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var a1 = /* @__PURE__ */ function(e) {
  t1(n, e);
  var t = n1(n);
  function n() {
    var r;
    Zh(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), es(ya(r), "priority", 50), es(ya(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return e1(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "s":
          return oe(se.second, o);
        case "so":
          return a.ordinalNumber(o, {
            unit: "second"
          });
        default:
          return ae(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCSeconds(a, 0), o;
    }
  }]), n;
}(W);
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function i1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ts(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function s1(e, t, n) {
  return t && ts(e.prototype, t), n && ts(e, n), e;
}
function l1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && pa(e, t);
}
function pa(e, t) {
  return pa = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, pa(e, t);
}
function u1(e) {
  var t = f1();
  return function() {
    var r = Yr(e), o;
    if (t) {
      var i = Yr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return c1(this, o);
  };
}
function c1(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : ha(e);
}
function ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function f1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Yr(e) {
  return Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yr(e);
}
function ns(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var d1 = /* @__PURE__ */ function(e) {
  l1(n, e);
  var t = u1(n);
  function n() {
    var r;
    i1(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ns(ha(r), "priority", 30), ns(ha(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return s1(n, [{
    key: "parse",
    value: function(o, i) {
      var a = function(l) {
        return Math.floor(l * Math.pow(10, -i.length + 3));
      };
      return le(ae(i.length, o), a);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMilliseconds(a), o;
    }
  }]), n;
}(W);
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function y1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rs(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function p1(e, t, n) {
  return t && rs(e.prototype, t), n && rs(e, n), e;
}
function h1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ma(e, t);
}
function ma(e, t) {
  return ma = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ma(e, t);
}
function m1(e) {
  var t = v1();
  return function() {
    var r = Rr(e), o;
    if (t) {
      var i = Rr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return g1(this, o);
  };
}
function g1(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : ga(e);
}
function ga(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function v1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rr(e) {
  return Rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rr(e);
}
function os(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var w1 = /* @__PURE__ */ function(e) {
  h1(n, e);
  var t = m1(n);
  function n() {
    var r;
    y1(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), os(ga(r), "priority", 10), os(ga(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return p1(n, [{
    key: "parse",
    value: function(o, i) {
      switch (i) {
        case "X":
          return xe(_e.basicOptionalMinutes, o);
        case "XX":
          return xe(_e.basic, o);
        case "XXXX":
          return xe(_e.basicOptionalSeconds, o);
        case "XXXXX":
          return xe(_e.extendedOptionalSeconds, o);
        case "XXX":
        default:
          return xe(_e.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.timestampIsSet ? o : new Date(o.getTime() - a);
    }
  }]), n;
}(W);
function kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kn = function(n) {
    return typeof n;
  } : kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, kn(e);
}
function b1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function as(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function M1(e, t, n) {
  return t && as(e.prototype, t), n && as(e, n), e;
}
function L1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && va(e, t);
}
function va(e, t) {
  return va = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, va(e, t);
}
function C1(e) {
  var t = j1();
  return function() {
    var r = Ur(e), o;
    if (t) {
      var i = Ur(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return S1(this, o);
  };
}
function S1(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : wa(e);
}
function wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ur(e) {
  return Ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ur(e);
}
function is(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var T1 = /* @__PURE__ */ function(e) {
  L1(n, e);
  var t = C1(n);
  function n() {
    var r;
    b1(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), is(wa(r), "priority", 10), is(wa(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return M1(n, [{
    key: "parse",
    value: function(o, i) {
      switch (i) {
        case "x":
          return xe(_e.basicOptionalMinutes, o);
        case "xx":
          return xe(_e.basic, o);
        case "xxxx":
          return xe(_e.basicOptionalSeconds, o);
        case "xxxxx":
          return xe(_e.extendedOptionalSeconds, o);
        case "xxx":
        default:
          return xe(_e.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.timestampIsSet ? o : new Date(o.getTime() - a);
    }
  }]), n;
}(W);
function Dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(n) {
    return typeof n;
  } : Dn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Dn(e);
}
function N1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ss(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function k1(e, t, n) {
  return t && ss(e.prototype, t), n && ss(e, n), e;
}
function D1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ba(e, t);
}
function ba(e, t) {
  return ba = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ba(e, t);
}
function O1(e) {
  var t = x1();
  return function() {
    var r = Br(e), o;
    if (t) {
      var i = Br(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return _1(this, o);
  };
}
function _1(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Ma(e);
}
function Ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function x1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function ls(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $1 = /* @__PURE__ */ function(e) {
  D1(n, e);
  var t = O1(n);
  function n() {
    var r;
    N1(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ls(Ma(r), "priority", 40), ls(Ma(r), "incompatibleTokens", "*"), r;
  }
  return k1(n, [{
    key: "parse",
    value: function(o) {
      return Js(o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return [new Date(a * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(W);
function On(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(n) {
    return typeof n;
  } : On = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, On(e);
}
function z1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function us(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function I1(e, t, n) {
  return t && us(e.prototype, t), n && us(e, n), e;
}
function P1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, La(e, t);
}
function E1(e) {
  var t = Y1();
  return function() {
    var r = Qr(e), o;
    if (t) {
      var i = Qr(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return A1(this, o);
  };
}
function A1(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : Ca(e);
}
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Y1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qr(e) {
  return Qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qr(e);
}
function cs(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var R1 = /* @__PURE__ */ function(e) {
  P1(n, e);
  var t = E1(n);
  function n() {
    var r;
    z1(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), cs(Ca(r), "priority", 20), cs(Ca(r), "incompatibleTokens", "*"), r;
  }
  return I1(n, [{
    key: "parse",
    value: function(o) {
      return Js(o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return [new Date(a), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(W), U1 = {
  G: new Uy(),
  y: new Fy(),
  Y: new t0(),
  R: new l0(),
  u: new h0(),
  Q: new L0(),
  q: new D0(),
  M: new P0(),
  L: new Q0(),
  w: new K0(),
  I: new ap(),
  d: new pp(),
  D: new Mp(),
  E: new kp(),
  e: new Ip(),
  c: new Bp(),
  i: new Jp(),
  a: new rh(),
  b: new ch(),
  B: new gh(),
  h: new Sh(),
  H: new _h(),
  K: new Ah(),
  k: new Hh(),
  m: new Xh(),
  s: new a1(),
  S: new d1(),
  X: new w1(),
  x: new T1(),
  t: new $1(),
  T: new R1()
};
function _n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(n) {
    return typeof n;
  } : _n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _n(e);
}
function fs(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = B1(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(d) {
        throw d;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, a = !1, c;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var d = n.next();
    return i = d.done, d;
  }, e: function(d) {
    a = !0, c = d;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (a)
        throw c;
    }
  } };
}
function B1(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return ds(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ds(e, t);
  }
}
function ds(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var Q1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, V1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, H1 = /^'([^]*?)'?$/, G1 = /''/g, W1 = /\S/, F1 = /[a-zA-Z]/;
function ao(e, t, n, r) {
  var o, i, a, c, l, d, y, m, p, h, g, b, k, T, D, $, S, P;
  x(3, arguments);
  var H = String(e), Q = String(t), Y = yt(), R = (o = (i = r?.locale) !== null && i !== void 0 ? i : Y.locale) !== null && o !== void 0 ? o : Gs;
  if (!R.match)
    throw new RangeError("locale must contain match property");
  var K = re((a = (c = (l = (d = r?.firstWeekContainsDate) !== null && d !== void 0 ? d : r == null || (y = r.locale) === null || y === void 0 || (m = y.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && l !== void 0 ? l : Y.firstWeekContainsDate) !== null && c !== void 0 ? c : (p = Y.locale) === null || p === void 0 || (h = p.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(K >= 1 && K <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var U = re((g = (b = (k = (T = r?.weekStartsOn) !== null && T !== void 0 ? T : r == null || (D = r.locale) === null || D === void 0 || ($ = D.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && k !== void 0 ? k : Y.weekStartsOn) !== null && b !== void 0 ? b : (S = Y.locale) === null || S === void 0 || (P = S.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(U >= 0 && U <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (Q === "")
    return H === "" ? I(n) : new Date(NaN);
  var X = {
    firstWeekContainsDate: K,
    weekStartsOn: U,
    locale: R
  }, fe = [new xy()], ce = Q.match(V1).map(function(ie) {
    var J = ie[0];
    if (J in fo) {
      var we = fo[J];
      return we(ie, R.formatLong);
    }
    return ie;
  }).join("").match(Q1), F = [], Z = fs(ce), Ce;
  try {
    var et = function() {
      var J = Ce.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Hs(J) && cr(J, Q, e), !(r != null && r.useAdditionalDayOfYearTokens) && Vs(J) && cr(J, Q, e);
      var we = J[0], Fe = U1[we];
      if (Fe) {
        var $e = Fe.incompatibleTokens;
        if (Array.isArray($e)) {
          var mt = F.find(function(Te) {
            return $e.includes(Te.token) || Te.token === we;
          });
          if (mt)
            throw new RangeError("The format string mustn't contain `".concat(mt.fullToken, "` and `").concat(J, "` at the same time"));
        } else if (Fe.incompatibleTokens === "*" && F.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(J, "` and any other token at the same time"));
        F.push({
          token: we,
          fullToken: J
        });
        var nt = Fe.run(H, J, R.match, X);
        if (!nt)
          return {
            v: new Date(NaN)
          };
        fe.push(nt.setter), H = nt.rest;
      } else {
        if (we.match(F1))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + we + "`");
        if (J === "''" ? J = "'" : we === "'" && (J = q1(J)), H.indexOf(J) === 0)
          H = H.slice(J.length);
        else
          return {
            v: new Date(NaN)
          };
      }
    };
    for (Z.s(); !(Ce = Z.n()).done; ) {
      var Ge = et();
      if (_n(Ge) === "object")
        return Ge.v;
    }
  } catch (ie) {
    Z.e(ie);
  } finally {
    Z.f();
  }
  if (H.length > 0 && W1.test(H))
    return new Date(NaN);
  var Xr = fe.map(function(ie) {
    return ie.priority;
  }).sort(function(ie, J) {
    return J - ie;
  }).filter(function(ie, J, we) {
    return we.indexOf(ie) === J;
  }).map(function(ie) {
    return fe.filter(function(J) {
      return J.priority === ie;
    }).sort(function(J, we) {
      return we.subPriority - J.subPriority;
    });
  }).map(function(ie) {
    return ie[0];
  }), ht = I(n);
  if (isNaN(ht.getTime()))
    return new Date(NaN);
  var We = Ys(ht, Es(ht)), Yt = {}, tt = fs(Xr), Rt;
  try {
    for (tt.s(); !(Rt = tt.n()).done; ) {
      var je = Rt.value;
      if (!je.validate(We, X))
        return new Date(NaN);
      var de = je.set(We, Yt, X);
      Array.isArray(de) ? (We = de[0], Ny(Yt, de[1])) : We = de;
    }
  } catch (ie) {
    tt.e(ie);
  } finally {
    tt.f();
  }
  return We;
}
function q1(e) {
  return e.match(H1)[1].replace(G1, "'");
}
function J1(e, t) {
  x(2, arguments);
  var n = I(e).getTime(), r = I(t.start).getTime(), o = I(t.end).getTime();
  if (!(r <= o))
    throw new RangeError("Invalid interval");
  return n >= r && n <= o;
}
function io(e, t) {
  x(2, arguments);
  var n = re(t);
  return Ps(e, -n);
}
function Se(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t);
  return n.setDate(r), n;
}
function pe(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t);
  return n.setHours(r), n;
}
function Ne(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t);
  return n.setMilliseconds(r), n;
}
function Me(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t);
  return n.setMinutes(r), n;
}
function ke(e, t) {
  x(2, arguments);
  var n = I(e), r = re(t);
  return n.setSeconds(r), n;
}
function ys(e, t) {
  x(2, arguments);
  var n = re(t);
  return Be(e, -n);
}
const K1 = {
  "data-id": "sds-calendar",
  class: "select-none"
}, X1 = { key: 0 }, Z1 = ["disabled"], e4 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Go to previous month", -1), t4 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "w-5 h-5",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ s("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M328 112L184 256l144 144"
  })
], -1), n4 = [
  e4,
  t4
], r4 = { class: "flex-grow" }, o4 = {
  key: 0,
  class: "hidden flex-grow sm:block"
}, a4 = ["disabled"], i4 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Go to next month", -1), s4 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "w-5 h-5",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ s("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M184 112l144 144l-144 144"
  })
], -1), l4 = [
  i4,
  s4
], u4 = { class: "flex flex-col sm:flex-row sm:gap-8" }, c4 = { class: "grid grid-cols-7 w-56 h-60 place-content-start" }, f4 = ["disabled", "title", "onClick"], d4 = {
  key: 0,
  class: "hidden sm:grid grid-cols-7 w- place-content-start"
}, y4 = ["disabled", "title", "onClick"], p4 = /* @__PURE__ */ s("div", { class: "mb-1 text-sm uppercase font-semibold text-gray-500" }, " Month ", -1), h4 = { class: "mt-1" }, m4 = /* @__PURE__ */ s("div", { class: "mb-1 text-sm uppercase font-semibold text-gray-500" }, " Year ", -1), g4 = /* @__PURE__ */ s("hr", { class: "my-2" }, null, -1), v4 = { class: "uppercase text-sm text-gray-500 mb-2" }, w4 = { class: "flex gap-1" }, b4 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ s("path", {
    d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
    fill: "currentColor"
  })
], -1), M4 = ["disabled"], L4 = /* @__PURE__ */ s("span", { class: "my-auto" }, ":", -1), C4 = ["disabled"], S4 = ["disabled"], j4 = {
  key: 0,
  class: "border-t my-2 pt-2 border-t w-56"
}, T4 = { class: "uppercase text-sm text-gray-500 mb-2" }, N4 = { class: "flex gap-1" }, k4 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ s("path", {
    d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
    fill: "currentColor"
  })
], -1), D4 = ["disabled"], O4 = /* @__PURE__ */ s("span", { class: "my-auto" }, ":", -1), _4 = ["disabled"], x4 = ["disabled"], $4 = {
  name: "SdsCalendar"
}, Lt = /* @__PURE__ */ _({
  ...$4,
  props: {
    modelValue: { type: [Object, Date], default: new Date() },
    mode: { type: String, default: "date" },
    min: { type: Date, default: null },
    max: { type: Date, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = B({
      get() {
        return n.modelValue;
      },
      set(z) {
        t("update:modelValue", z);
      }
    }), o = V(new Date()), i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], c = [...Array(200).keys()].map((z) => z + 1900), l = B(() => he(o.value, "MMMM")), d = B(() => he(o.value, "yyyy")), y = B(() => ti(rt(o.value)) + 1), m = B(() => ni(o.value)), p = V(Be(o.value, 1)), h = B(() => he(p.value, "MMMM")), g = B(() => he(p.value, "yyyy")), b = B(() => ti(rt(p.value)) + 1), k = B(() => ni(p.value)), T = V("days"), D = V(null), $ = V(null), S = () => {
      D.value = he(o.value, "MMMM"), $.value = he(o.value, "yyyy");
    };
    st(() => T.value, () => {
      S();
    });
    const P = B(() => n.mode === "date" || n.mode === "dateTime"), H = B(() => n.mode === "dateTime" || n.mode === "time"), Q = V(null), Y = V(null), R = V(null), K = V(null), U = V(null), X = V(null);
    Da(() => {
      fe(), ce(), lo(() => {
        F();
      });
    }), st(() => n.modelValue, () => {
      F();
    });
    const fe = () => {
      if (n.mode === "time" && (!r.value || !(r.value instanceof Date) && (!r.value.start || !r.value.end))) {
        const z = pe(Me(ke(Ne(new Date(), 0), 0), 0), 0);
        de.value ? r.value = {
          start: z,
          end: z
        } : r.value = z;
      }
    }, ce = () => {
      r.value && !(r.value instanceof Date) && r.value.start instanceof Date ? o.value = r.value.start : r.value && r.value instanceof Date ? o.value = r.value : n.min && n.min instanceof Date && Ke(n.min, new Date()) && (o.value = n.min), p.value = Be(o.value, 1);
    }, F = () => {
      de.value ? (r.value && !(r.value instanceof Date) && r.value.start instanceof Date ? (Q.value = je(r.value.start, "hh"), Y.value = je(r.value.start, "mm"), R.value = ze(r.value.start) > 11 ? "pm" : "am") : (Q.value = null, Y.value = null, R.value = null), r.value && !(r.value instanceof Date) && r.value.end instanceof Date ? (K.value = je(r.value.end, "hh"), U.value = je(r.value.end, "mm"), X.value = ze(r.value.end) > 11 ? "pm" : "am") : (K.value = null, U.value = null, X.value = null)) : r.value instanceof Date ? (Q.value = je(r.value, "hh"), Y.value = je(r.value, "mm"), R.value = ze(r.value) > 11 ? "pm" : "am") : (Q.value = null, Y.value = null, R.value = null);
    }, Z = (z, C, v = !1) => {
      switch (z) {
        case "hour":
          if (de.value) {
            if (!v && r.value && !(r.value instanceof Date) && r.value.start instanceof Date) {
              const ue = ze(r.value.start) > 12 ? parseInt(C) + 12 : parseInt(C);
              r.value.start = pe(r.value.start, ue);
            } else if (v && r.value && !(r.value instanceof Date) && r.value.end instanceof Date) {
              const ue = ze(r.value.end) > 12 ? parseInt(C) + 12 : parseInt(C);
              r.value.end = pe(r.value.end, ue);
            }
          } else if (r.value instanceof Date) {
            const ue = ze(r.value) > 12 ? parseInt(C) + 12 : parseInt(C);
            r.value = pe(r.value, ue);
          }
          break;
        case "minutes":
          de.value ? !v && r.value && !(r.value instanceof Date) && r.value.start instanceof Date ? r.value.start = Me(r.value.start, parseInt(C)) : v && r.value && !(r.value instanceof Date) && r.value.end instanceof Date && (r.value.end = Me(r.value.end, parseInt(C))) : r.value instanceof Date && (r.value = Me(r.value, parseInt(C)));
          break;
        case "meridian":
          if (de.value) {
            if (!v && r.value && !(r.value instanceof Date) && r.value.start instanceof Date) {
              const G = ze(r.value.start);
              let ue = C === "am" && G >= 12 ? G - 12 : C === "pm" && G < 12 ? G + 12 : G;
              r.value.start = pe(r.value.start, ue);
            } else if (v && r.value && !(r.value instanceof Date) && r.value.end instanceof Date) {
              const G = ze(r.value.end);
              let ue = C === "am" && G >= 12 ? G - 12 : C === "pm" && G < 12 ? G + 12 : G;
              r.value.end = pe(r.value.end, ue);
            }
          } else if (r.value instanceof Date) {
            const G = ze(r.value);
            let ue = C === "am" && G >= 12 ? G - 12 : C === "pm" && G < 12 ? G + 12 : G;
            r.value = pe(r.value, ue);
          }
          break;
      }
      de.value && r.value && !(r.value instanceof Date) && r.value.start instanceof Date && r.value.end instanceof Date && (r.value = {
        start: co([r.value.start, r.value.end]),
        end: uo([r.value.start, r.value.end])
      });
    }, Ce = B(() => [...Array(12).keys()].map((C) => (C + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: !1
    }))), et = B(() => [...Array(60).keys()].map((C) => C.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: !1
    }))), Ge = B(() => ["am", "pm"]), Xr = () => {
      o.value = ys(o.value, 1), p.value = ys(p.value, 1);
    }, ht = () => {
      o.value = Be(o.value, 1), p.value = Be(p.value, 1);
    }, We = () => {
      if (!D.value || !$.value)
        return;
      const z = a.findIndex((C) => C === D.value) + 1;
      typeof z == "number" && (o.value = new Date(parseInt($.value), z, 0, 0, 0, 0, 0), p.value = Be(o.value, 1), T.value = "days");
    }, Yt = () => {
      o.value = new Date(), p.value = Be(o.value, 1), T.value = "days";
    }, tt = B(() => n.min instanceof Date ? yo(rt(n.min), rt(o.value)) : !0), Rt = B(() => n.max instanceof Date ? Ke(rt(n.max), rt(o.value)) : !0), je = (z, C) => he(z, C), de = B(() => n.modelValue && !be(n.modelValue)), ie = (z, C = !1) => {
      const v = C ? p.value : o.value;
      if (de.value && r.value)
        if (r.value.end || !r.value.start)
          r.value = {
            start: pe(Me(ke(Ne(Se(v, z), 0), 0), 0), 0),
            end: null
          };
        else if (!(r.value instanceof Date) && be(r.value.start) && r.value.start instanceof Date) {
          const G = r.value.start, ue = Cd(Se(v, z));
          if (qe(G, ue) && Ke(ue, G))
            r.value = { start: G, end: ue };
          else {
            const Zr = co([G, ue]), ul = uo([G, ue]);
            r.value = {
              start: po(G, Zr) ? Zr : pe(Me(ke(Ne(Zr, 0), 0), 0), 0),
              end: ul
            };
          }
        } else
          r.value.end = pe(Me(ke(Ne(Se(v, z), 0), 0), 0), 0);
      else
        r.value = pe(Me(ke(Ne(Se(v, z), 0), 0), 0), 0);
      lo(() => {
        F();
      });
    }, J = (z, C = !1) => {
      if (!(n.min instanceof Date))
        return !1;
      const v = C ? p.value : o.value;
      return yo(Se(v, z), pe(Me(ke(Ne(n.min, 0), 0), 0), 0));
    }, we = (z, C = !1) => {
      if (!(n.max instanceof Date))
        return !1;
      const v = C ? p.value : o.value, G = Se(v, z - 1), ue = pe(Me(ke(Ne(n.max, 0), 0), 0), 0);
      return Ke(G, ue) || po(G, ue);
    }, Fe = (z, C = !1) => J(z, C) || we(z, C), $e = (z, C = !1) => {
      const v = C ? p.value : o.value;
      return r.value && !(r.value instanceof Date) && be(r.value.start) && r.value.start instanceof Date && be(r.value.end) && r.value.end instanceof Date ? J1(
        Se(v, z),
        { start: r.value.start, end: r.value.end }
      ) : !1;
    }, mt = (z, C = !1) => {
      const v = C ? p.value : o.value;
      return r.value && !(r.value instanceof Date) && be(r.value.start) && r.value.start instanceof Date && be(r.value.end) && r.value.end instanceof Date ? qe(Se(v, z), r.value.start) : !1;
    }, nt = (z, C = !1) => {
      const v = C ? p.value : o.value;
      return r.value && !(r.value instanceof Date) && be(r.value.start) && r.value.start instanceof Date && be(r.value.end) && r.value.end instanceof Date ? qe(Se(v, z), r.value.end) : !1;
    }, Te = (z, C = !1) => {
      if (r.value) {
        if (be(r.value) && r.value instanceof Date) {
          const v = C ? p.value : o.value;
          return qe(Se(v, z), r.value);
        } else if (!(r.value instanceof Date) && (be(r.value.start) && r.value.start instanceof Date || be(r.value.end) && r.value.end instanceof Date)) {
          const v = C ? p.value : o.value;
          return be(r.value.start) && r.value.start instanceof Date && qe(Se(v, z), r.value.start) || be(r.value.end) && r.value.end instanceof Date && qe(Se(v, z), r.value.end);
        }
      } else
        return !1;
    }, Ut = (z, C = !1) => {
      const v = C ? p.value : o.value;
      return qe(Se(v, z), new Date());
    };
    return (z, C) => (u(), f("div", K1, [
      O(P) ? (u(), f("div", X1, [
        T.value === "days" ? (u(), f(N, { key: 0 }, [
          s("div", {
            class: L(["flex relative gap-1 mb-2 w-56", { "sm:w-120": O(de) }])
          }, [
            s("button", {
              class: "absolute left-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
              type: "button",
              tabindex: "-1",
              disabled: !O(tt),
              onClick: Xr
            }, n4, 8, Z1),
            s("div", r4, [
              s("button", {
                class: "m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100",
                type: "button",
                tabindex: "-1",
                onClick: C[0] || (C[0] = (v) => T.value = "years")
              }, [
                s("span", null, M(O(l)) + " " + M(O(d)), 1)
              ])
            ]),
            O(de) ? (u(), f("div", o4, [
              s("button", {
                class: "m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100",
                type: "button",
                tabindex: "-1",
                onClick: C[1] || (C[1] = (v) => T.value = "years")
              }, [
                s("span", null, M(O(h)) + " " + M(O(g)), 1)
              ])
            ])) : w("", !0),
            s("button", {
              class: "absolute right-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
              type: "button",
              tabindex: "-1",
              disabled: !O(Rt),
              onClick: ht
            }, l4, 8, a4)
          ], 2),
          s("div", u4, [
            s("div", c4, [
              (u(), f(N, null, A(i, (v) => s("div", {
                key: v,
                class: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
              }, M(v.charAt(0)), 1)), 64)),
              (u(!0), f(N, null, A(O(m), (v) => (u(), f("div", {
                key: v,
                class: L([
                  "w-8 h-8 mb-1",
                  v === 1 ? `col-start-${O(y)}` : "",
                  $e(v) ? "bg-blue-200 dark:bg-blue-800" : "",
                  mt(v) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "",
                  nt(v) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""
                ])
              }, [
                s("button", {
                  class: L(["disabled:pointer-events-none disabled:opacity-25", {
                    "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
                    "hover:bg-gray-300 dark:hover:bg-gray-600": !Te(v),
                    "font-bold bg-blue-500 text-white": Te(v),
                    "font-bold text-blue-500 bg-gray-100 dark:text-blue-100 dark:bg-gray-800": Ut(v) && !Te(v) && !$e(v),
                    "font-semibold text-blue-900 dark:text-blue-100": $e(v) && !Te(v)
                  }]),
                  type: "button",
                  tabindex: "-1",
                  disabled: Fe(v),
                  title: Ut(v) ? "Today" : "",
                  onClick: (G) => ie(v)
                }, M(v), 11, f4)
              ], 2))), 128))
            ]),
            O(de) ? (u(), f("div", d4, [
              (u(), f(N, null, A(i, (v) => s("div", {
                key: v,
                class: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
              }, M(v.charAt(0)), 1)), 64)),
              (u(!0), f(N, null, A(O(k), (v) => (u(), f("div", {
                key: v,
                class: L([
                  "w-8 h-8 mb-1",
                  v === 1 ? `col-start-${O(b)}` : "",
                  $e(v, !0) ? "bg-blue-200 dark:bg-blue-800" : "",
                  mt(v, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "",
                  nt(v, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""
                ])
              }, [
                s("button", {
                  class: L(["disabled:pointer-events-none disabled:opacity-25", {
                    "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
                    "hover:bg-gray-300 dark:hover:bg-gray-600": !Te(v, !0),
                    "font-bold bg-blue-500 text-white": Te(v, !0),
                    "font-bold text-blue-500 bg-gray-100 dark:text-blue-400 dark:bg-gray-100": Ut(v, !0) && !Te(v, !0) && !$e(v, !0),
                    "font-semibold text-blue-900 dark:text-blue-100": $e(v, !0) && !Te(v, !0)
                  }]),
                  type: "button",
                  tabindex: "-1",
                  disabled: Fe(v, !0),
                  title: Ut(v, !0) ? "Today" : "",
                  onClick: (G) => ie(v, !0)
                }, M(v), 11, y4)
              ], 2))), 128))
            ])) : w("", !0)
          ])
        ], 64)) : (u(), f("div", {
          key: 1,
          class: L(["grid gap-1 w-56", { "sm:w-120": O(de) }])
        }, [
          s("div", null, [
            p4,
            ne(s("select", {
              "onUpdate:modelValue": C[2] || (C[2] = (v) => D.value = v),
              class: "form-control form-control-sm"
            }, [
              (u(), f(N, null, A(a, (v) => s("option", { key: v }, M(v), 1)), 64))
            ], 512), [
              [Ie, D.value]
            ])
          ]),
          s("div", h4, [
            m4,
            ne(s("select", {
              "onUpdate:modelValue": C[3] || (C[3] = (v) => $.value = v),
              class: "form-control form-control-sm"
            }, [
              (u(!0), f(N, null, A(O(c), (v) => (u(), f("option", { key: v }, M(v), 1))), 128))
            ], 512), [
              [Ie, $.value]
            ])
          ]),
          s("button", {
            class: "mt-2 btn btn-primary btn-sm",
            type: "button",
            tabindex: "-1",
            onClick: C[4] || (C[4] = (v) => We())
          }, " Go to Date "),
          s("button", {
            class: "mt-2 btn btn-default btn-sm",
            type: "button",
            tabindex: "-1",
            onClick: C[5] || (C[5] = (v) => Yt())
          }, " Go to Today "),
          g4,
          s("button", {
            class: "btn btn-default btn-sm",
            type: "button",
            tabindex: "-1",
            onClick: C[6] || (C[6] = (v) => T.value = "days")
          }, " Cancel ")
        ], 2))
      ])) : w("", !0),
      O(H) && T.value === "days" ? (u(), f("div", {
        key: 1,
        class: L({ "sm:flex sm:gap-8 sm:w-120": O(P) && O(de) })
      }, [
        s("div", {
          class: L(["w-56", { "border-t my-2 pt-2 border-t": O(P) }])
        }, [
          s("div", v4, [
            O(r) && O(r) instanceof Date ? (u(), f(N, { key: 0 }, [
              ee(M(je(O(r), "eee MMM dd yyyy")), 1)
            ], 64)) : O(r) && !(O(r) instanceof Date) && O(r).start instanceof Date ? (u(), f(N, { key: 1 }, [
              ee(M(je(O(r).start, "eee MMM dd yyyy")), 1)
            ], 64)) : (u(), f(N, { key: 2 }, [
              ee(" -- ")
            ], 64))
          ]),
          s("div", w4, [
            b4,
            ne(s("select", {
              "onUpdate:modelValue": C[7] || (C[7] = (v) => Q.value = v),
              disabled: !Q.value,
              class: "form-control form-control-sm",
              onChange: C[8] || (C[8] = (v) => Z("hour", v.target.value))
            }, [
              (u(!0), f(N, null, A(O(Ce), (v) => (u(), f("option", { key: v }, M(v), 1))), 128))
            ], 40, M4), [
              [Ie, Q.value]
            ]),
            L4,
            ne(s("select", {
              "onUpdate:modelValue": C[9] || (C[9] = (v) => Y.value = v),
              disabled: !Y.value,
              class: "form-control form-control-sm",
              onChange: C[10] || (C[10] = (v) => Z("minutes", v.target.value))
            }, [
              (u(!0), f(N, null, A(O(et), (v) => (u(), f("option", { key: v }, M(v), 1))), 128))
            ], 40, C4), [
              [Ie, Y.value]
            ]),
            ne(s("select", {
              "onUpdate:modelValue": C[11] || (C[11] = (v) => R.value = v),
              disabled: !R.value,
              class: "form-control form-control-sm",
              onChange: C[12] || (C[12] = (v) => Z("meridian", v.target.value))
            }, [
              (u(!0), f(N, null, A(O(Ge), (v) => (u(), f("option", { key: v }, M(v), 1))), 128))
            ], 40, S4), [
              [Ie, R.value]
            ])
          ])
        ], 2),
        O(de) ? (u(), f("div", j4, [
          s("div", T4, [
            O(r) && !(O(r) instanceof Date) && O(r).end instanceof Date ? (u(), f(N, { key: 0 }, [
              ee(M(je(O(r).end, "eee MMM dd yyyy")), 1)
            ], 64)) : (u(), f(N, { key: 1 }, [
              ee(" -- ")
            ], 64))
          ]),
          s("div", N4, [
            k4,
            ne(s("select", {
              "onUpdate:modelValue": C[13] || (C[13] = (v) => K.value = v),
              disabled: !K.value,
              class: "form-control form-control-sm",
              onChange: C[14] || (C[14] = (v) => Z("hour", v.target.value, !0))
            }, [
              (u(!0), f(N, null, A(O(Ce), (v) => (u(), f("option", { key: v }, M(v), 1))), 128))
            ], 40, D4), [
              [Ie, K.value]
            ]),
            O4,
            ne(s("select", {
              "onUpdate:modelValue": C[15] || (C[15] = (v) => U.value = v),
              disabled: !U.value,
              class: "form-control form-control-sm",
              onChange: C[16] || (C[16] = (v) => Z("minutes", v.target.value, !0))
            }, [
              (u(!0), f(N, null, A(O(et), (v) => (u(), f("option", { key: v }, M(v), 1))), 128))
            ], 40, _4), [
              [Ie, U.value]
            ]),
            ne(s("select", {
              "onUpdate:modelValue": C[17] || (C[17] = (v) => X.value = v),
              disabled: !X.value,
              class: "form-control form-control-sm",
              onChange: C[18] || (C[18] = (v) => Z("meridian", v.target.value, !0))
            }, [
              (u(!0), f(N, null, A(O(Ge), (v) => (u(), f("option", { key: v }, M(v), 1))), 128))
            ], 40, x4), [
              [Ie, X.value]
            ])
          ])
        ])) : w("", !0)
      ], 2)) : w("", !0)
    ]));
  }
});
Lt.install = (e) => {
  e.component(Lt.name, Lt);
};
let ps = 0;
const z4 = _({
  name: "SdsCheckboxGroup",
  props: {
    modelValue: { type: Array, default: () => [] },
    name: { type: String, default: null },
    options: { type: Array, default: () => [] },
    required: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue"],
  data() {
    return {
      id: ""
    };
  },
  computed: {
    localChecked: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  mounted() {
    ps++, this.id = `sds-checkbox-group_${ps}`;
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    }
  }
}), I4 = ["id"], P4 = ["id", "value", "name", "required", "onClick"], E4 = ["for"];
function A4(e, t, n, r, o, i) {
  return u(), f("div", {
    id: e.id,
    "data-id": "sds-checkbox-group",
    role: "checkboxgroup",
    tabindex: "-1",
    class: "focus:outline-none"
  }, [
    (u(!0), f(N, null, A(e.options, (a, c) => (u(), f("div", {
      key: a.text,
      class: L(["space-x-1", { "inline-block mr-4": !e.stacked }])
    }, [
      ne(s("input", {
        id: `${e.id}__option_${c}`,
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.localChecked = l),
        type: "checkbox",
        class: "focus:outline-none",
        value: a.value,
        name: e.name ? e.name : `${e.id}__option`,
        required: e.required,
        onClick: (l) => e.onChange(a.value)
      }, null, 8, P4), [
        [Ns, e.localChecked]
      ]),
      j(e.$slots, "label", {
        optionId: `${e.id}__option_${c}`,
        option: a
      }, () => [
        s("label", {
          for: `${e.id}__option_${c}`
        }, [
          s("span", null, M(a.text), 1)
        ], 8, E4)
      ])
    ], 2))), 128))
  ], 8, I4);
}
const xn = /* @__PURE__ */ E(z4, [["render", A4]]);
xn.install = (e) => {
  e.component(xn.name, xn);
};
const at = _({
  setup(e, { slots: t }) {
    const n = V(!1);
    return Da(() => {
      n.value = !0;
    }), () => n.value && t.default ? t.default() : null;
  }
});
at.install = (e) => {
  e.component(at.name, at);
};
const Y4 = {
  key: 0,
  class: "text-base"
}, R4 = { class: "flex gap-2" }, U4 = {
  key: 0,
  class: "text-base mt-auto"
}, B4 = {
  name: "SdsDatapoint"
}, $n = /* @__PURE__ */ _({
  ...B4,
  props: {
    modelValue: { type: [String, Number], default: null },
    label: { type: String, default: null },
    context: { type: String, default: null },
    size: {
      type: String,
      default: "md"
    },
    variant: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = B(() => typeof t.modelValue == "number" ? t.modelValue.toLocaleString() : t.modelValue), r = B(() => {
      let i = "";
      switch (t.size) {
        case "sm":
          i = "text-lg";
          break;
        case "md":
          i = "text-3xl";
          break;
        default:
          i = "text-5xl";
      }
      return i;
    }), o = B(() => {
      let i = "";
      switch (t.variant) {
        case "blue":
          i = "text-blue-500 dark:text-blue-400";
          break;
        case "green":
          i = "text-green-500 dark:text-green-400";
          break;
        case "teal":
          i = "text-teal-500 dark:text-teal-400";
          break;
        case "orange":
          i = "text-orange-700 dark:text-orange-400";
          break;
        case "red":
          i = "text-red-500 dark:text-red-400";
          break;
        case "tan":
          i = "text-tan-800 dark:text-tan-500";
          break;
        case "yellow":
          i = "text-yellow-800 dark:text-yellow-400";
          break;
        case "pink":
          i = "text-pink-600 dark:text-pink-400";
          break;
        case "purple":
          i = "text-purple-500 dark:text-purple-400";
          break;
        case "indigo":
          i = "text-indigo-500 dark:text-indigo-400";
          break;
        case "gray":
          i = "text-gray-500 dark:text-gray-300";
          break;
        default:
          i = "text-black dark:text-white";
          break;
      }
      return i;
    });
    return (i, a) => (u(), f("div", null, [
      i.$slots.label || e.label ? (u(), f("div", Y4, [
        j(i.$slots, "label", {}, () => [
          ee(M(e.label), 1)
        ])
      ])) : w("", !0),
      s("div", R4, [
        s("div", {
          class: L(["font-bold", [O(r), O(o)]])
        }, [
          j(i.$slots, "default", {}, () => [
            ee(M(O(n)), 1)
          ])
        ], 2),
        i.$slots.context || e.context ? (u(), f("div", U4, [
          j(i.$slots, "context", {}, () => [
            ee(M(e.context), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
});
$n.install = (e) => {
  e.component($n.name, $n);
};
var hs;
const Pt = typeof window < "u", Q4 = (e) => typeof e == "string", so = () => {
};
Pt && ((hs = window?.navigator) == null ? void 0 : hs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function V4(e) {
  return typeof e == "function" ? e() : O(e);
}
function H4(e) {
  return e;
}
function G4(e) {
  return cl() ? (fl(e), !0) : !1;
}
function bt(e) {
  var t;
  const n = V4(e);
  return (t = n?.$el) != null ? t : n;
}
const Aa = Pt ? window : void 0;
Pt && window.document;
Pt && window.navigator;
Pt && window.location;
function Mt(...e) {
  let t, n, r, o;
  if (Q4(e[0]) ? ([n, r, o] = e, t = Aa) : [t, n, r, o] = e, !t)
    return so;
  let i = so;
  const a = st(() => bt(t), (l) => {
    i(), l && (l.addEventListener(n, r, o), i = () => {
      l.removeEventListener(n, r, o), i = so;
    });
  }, { immediate: !0, flush: "post" }), c = () => {
    a(), i();
  };
  return G4(c), c;
}
function W4(e, t, n = {}) {
  const { window: r = Aa, ignore: o, capture: i = !0, detectIframe: a = !1 } = n;
  if (!r)
    return;
  const c = V(!0);
  let l;
  const d = (h) => {
    r.clearTimeout(l);
    const g = bt(e);
    !g || g === h.target || h.composedPath().includes(g) || !c.value || t(h);
  }, y = (h) => o && o.some((g) => {
    const b = bt(g);
    return b && (h.target === b || h.composedPath().includes(b));
  }), m = [
    Mt(r, "click", d, { passive: !0, capture: i }),
    Mt(r, "pointerdown", (h) => {
      const g = bt(e);
      c.value = !!g && !h.composedPath().includes(g) && !y(h);
    }, { passive: !0 }),
    Mt(r, "pointerup", (h) => {
      if (h.button === 0) {
        const g = h.composedPath();
        h.composedPath = () => g, l = r.setTimeout(() => d(h), 50);
      }
    }, { passive: !0 }),
    a && Mt(r, "blur", (h) => {
      var g;
      const b = bt(e);
      ((g = document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !b?.contains(document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => m.forEach((h) => h());
}
const F4 = (e) => typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
function q4(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const { target: o = Aa, eventName: i = "keydown", passive: a = !1 } = r, c = F4(t);
  return Mt(o, i, (d) => {
    c(d) && n(d);
  }, a);
}
const Sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ja = "__vueuse_ssr_handlers__";
Sa[ja] = Sa[ja] || {};
Sa[ja];
var ms;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ms || (ms = {}));
var J4 = Object.defineProperty, gs = Object.getOwnPropertySymbols, K4 = Object.prototype.hasOwnProperty, X4 = Object.prototype.propertyIsEnumerable, vs = (e, t, n) => t in e ? J4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Z4 = (e, t) => {
  for (var n in t || (t = {}))
    K4.call(t, n) && vs(e, n, t[n]);
  if (gs)
    for (var n of gs(t))
      X4.call(t, n) && vs(e, n, t[n]);
  return e;
};
const em = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Z4({
  linear: H4
}, em);
function Ee(e) {
  return e.split("-")[0];
}
function Xe(e) {
  return e.split("-")[1];
}
function pt(e) {
  return ["top", "bottom"].includes(Ee(e)) ? "x" : "y";
}
function Ya(e) {
  return e === "y" ? "height" : "width";
}
function ws(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, a = r.y + r.height / 2 - o.height / 2, c = pt(t), l = Ya(c), d = r[l] / 2 - o[l] / 2, y = Ee(t), m = c === "x";
  let p;
  switch (y) {
    case "top":
      p = {
        x: i,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: i,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: a
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: a
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Xe(t)) {
    case "start":
      p[c] -= d * (n && m ? -1 : 1);
      break;
    case "end":
      p[c] += d * (n && m ? -1 : 1);
      break;
  }
  return p;
}
const tm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y
  } = ws(l, r, c), m = r, p = {}, h = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: k
    } = i[g], {
      x: T,
      y: D,
      data: $,
      reset: S
    } = await k({
      x: d,
      y,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = T ?? d, y = D ?? y, p = {
      ...p,
      [b]: {
        ...p[b],
        ...$
      }
    }, S && h <= 50) {
      h++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (l = S.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: d,
        y
      } = ws(l, m, c)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y,
    placement: m,
    strategy: o,
    middlewareData: p
  };
};
function nm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ra(e) {
  return typeof e != "number" ? nm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Ua(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: c,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: y = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = t, g = Ra(h), k = c[p ? m === "floating" ? "reference" : "floating" : m], T = zt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(k))) == null || n ? k : k.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: y,
    strategy: l
  })), D = zt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: m === "floating" ? {
      ...a.floating,
      x: r,
      y: o
    } : a.reference,
    offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)),
    strategy: l
  }) : a[m]);
  return {
    top: T.top - D.top + g.top,
    bottom: D.bottom - T.bottom + g.bottom,
    left: T.left - D.left + g.left,
    right: D.right - T.right + g.right
  };
}
const Zs = Math.min, el = Math.max;
function Ta(e, t, n) {
  return el(e, Zs(t, n));
}
const rm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: r = 0
    } = e ?? {}, {
      x: o,
      y: i,
      placement: a,
      rects: c,
      platform: l
    } = t;
    if (n == null)
      return {};
    const d = Ra(r), y = {
      x: o,
      y: i
    }, m = pt(a), p = Xe(a), h = Ya(m), g = await l.getDimensions(n), b = m === "y" ? "top" : "left", k = m === "y" ? "bottom" : "right", T = c.reference[h] + c.reference[m] - y[m] - c.floating[h], D = y[m] - c.reference[m], $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
    let S = $ ? m === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0;
    S === 0 && (S = c.floating[h]);
    const P = T / 2 - D / 2, H = d[b], Q = S - g[h] - d[k], Y = S / 2 - g[h] / 2 + P, R = Ta(H, Y, Q), X = (p === "start" ? d[b] : d[k]) > 0 && Y !== R && c.reference[h] <= c.floating[h] ? Y < H ? H - Y : Q - Y : 0;
    return {
      [m]: y[m] - X,
      data: {
        [m]: R,
        centerOffset: Y - R
      }
    };
  }
}), om = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => om[t]);
}
function tl(e, t, n) {
  n === void 0 && (n = !1);
  const r = Xe(e), o = pt(e), i = Ya(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Vr(a)), {
    main: a,
    cross: Vr(a)
  };
}
const am = {
  start: "end",
  end: "start"
};
function Na(e) {
  return e.replace(/start|end/g, (t) => am[t]);
}
const im = ["top", "right", "bottom", "left"], sm = /* @__PURE__ */ im.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function lm(e, t, n) {
  return (e ? [...n.filter((o) => Xe(o) === e), ...n.filter((o) => Xe(o) !== e)] : n.filter((o) => Ee(o) === o)).filter((o) => e ? Xe(o) === e || (t ? Na(o) !== o : !1) : !0);
}
const um = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, r, o, i, a;
      const {
        x: c,
        y: l,
        rects: d,
        middlewareData: y,
        placement: m,
        platform: p,
        elements: h
      } = t, {
        alignment: g = null,
        allowedPlacements: b = sm,
        autoAlignment: k = !0,
        ...T
      } = e, D = lm(g, k, b), $ = await Ua(t, T), S = (n = (r = y.autoPlacement) == null ? void 0 : r.index) != null ? n : 0, P = D[S];
      if (P == null)
        return {};
      const {
        main: H,
        cross: Q
      } = tl(P, d, await (p.isRTL == null ? void 0 : p.isRTL(h.floating)));
      if (m !== P)
        return {
          x: c,
          y: l,
          reset: {
            placement: D[0]
          }
        };
      const Y = [$[Ee(P)], $[H], $[Q]], R = [...(o = (i = y.autoPlacement) == null ? void 0 : i.overflows) != null ? o : [], {
        placement: P,
        overflows: Y
      }], K = D[S + 1];
      if (K)
        return {
          data: {
            index: S + 1,
            overflows: R
          },
          reset: {
            placement: K
          }
        };
      const U = R.slice().sort((ce, F) => ce.overflows[0] - F.overflows[0]), X = (a = U.find((ce) => {
        let {
          overflows: F
        } = ce;
        return F.every((Z) => Z <= 0);
      })) == null ? void 0 : a.placement, fe = X ?? U[0].placement;
      return fe !== m ? {
        data: {
          index: S + 1,
          overflows: R
        },
        reset: {
          placement: fe
        }
      } : {};
    }
  };
};
function cm(e) {
  const t = Vr(e);
  return [Na(e), t, Na(t)];
}
const fm = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: i,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: y = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        flipAlignment: h = !0,
        ...g
      } = e, b = Ee(r), T = m || (b === a || !h ? [Vr(a)] : cm(a)), D = [a, ...T], $ = await Ua(t, g), S = [];
      let P = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (d && S.push($[b]), y) {
        const {
          main: R,
          cross: K
        } = tl(r, i, await (c.isRTL == null ? void 0 : c.isRTL(l.floating)));
        S.push($[R], $[K]);
      }
      if (P = [...P, {
        placement: r,
        overflows: S
      }], !S.every((R) => R <= 0)) {
        var H, Q;
        const R = ((H = (Q = o.flip) == null ? void 0 : Q.index) != null ? H : 0) + 1, K = D[R];
        if (K)
          return {
            data: {
              index: R,
              overflows: P
            },
            reset: {
              placement: K
            }
          };
        let U = "bottom";
        switch (p) {
          case "bestFit": {
            var Y;
            const X = (Y = P.map((fe) => [fe, fe.overflows.filter((ce) => ce > 0).reduce((ce, F) => ce + F, 0)]).sort((fe, ce) => fe[1] - ce[1])[0]) == null ? void 0 : Y[0].placement;
            X && (U = X);
            break;
          }
          case "initialPlacement":
            U = a;
            break;
        }
        if (r !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
async function dm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Ee(n), c = Xe(n), l = pt(n) === "x", d = ["left", "top"].includes(a) ? -1 : 1, y = i && l ? -1 : 1, m = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: g
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return c && typeof g == "number" && (h = c === "end" ? g * -1 : g), l ? {
    x: h * y,
    y: p * d
  } : {
    x: p * d,
    y: h * y
  };
}
const ym = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await dm(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function pm(e) {
  return e === "x" ? "y" : "x";
}
const hm = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (k) => {
            let {
              x: T,
              y: D
            } = k;
            return {
              x: T,
              y: D
            };
          }
        },
        ...l
      } = e, d = {
        x: n,
        y: r
      }, y = await Ua(t, l), m = pt(Ee(o)), p = pm(m);
      let h = d[m], g = d[p];
      if (i) {
        const k = m === "y" ? "top" : "left", T = m === "y" ? "bottom" : "right", D = h + y[k], $ = h - y[T];
        h = Ta(D, h, $);
      }
      if (a) {
        const k = p === "y" ? "top" : "left", T = p === "y" ? "bottom" : "right", D = g + y[k], $ = g - y[T];
        g = Ta(D, g, $);
      }
      const b = c.fn({
        ...t,
        [m]: h,
        [p]: g
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r
        }
      };
    }
  };
}, mm = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        elements: o,
        rects: i,
        platform: a,
        strategy: c
      } = t, {
        padding: l = 2,
        x: d,
        y
      } = e, m = zt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: i.reference,
        offsetParent: await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)),
        strategy: c
      }) : i.reference), p = (n = await (a.getClientRects == null ? void 0 : a.getClientRects(o.reference))) != null ? n : [], h = Ra(l);
      function g() {
        if (p.length === 2 && p[0].left > p[1].right && d != null && y != null) {
          var k;
          return (k = p.find((T) => d > T.left - h.left && d < T.right + h.right && y > T.top - h.top && y < T.bottom + h.bottom)) != null ? k : m;
        }
        if (p.length >= 2) {
          if (pt(r) === "x") {
            const U = p[0], X = p[p.length - 1], fe = Ee(r) === "top", ce = U.top, F = X.bottom, Z = fe ? U.left : X.left, Ce = fe ? U.right : X.right, et = Ce - Z, Ge = F - ce;
            return {
              top: ce,
              bottom: F,
              left: Z,
              right: Ce,
              width: et,
              height: Ge,
              x: Z,
              y: ce
            };
          }
          const T = Ee(r) === "left", D = el(...p.map((U) => U.right)), $ = Zs(...p.map((U) => U.left)), S = p.filter((U) => T ? U.left === $ : U.right === D), P = S[0].top, H = S[S.length - 1].bottom, Q = $, Y = D, R = Y - Q, K = H - P;
          return {
            top: P,
            bottom: H,
            left: Q,
            right: Y,
            width: R,
            height: K,
            x: Q,
            y: P
          };
        }
        return m;
      }
      const b = await a.getElementRects({
        reference: {
          getBoundingClientRect: g
        },
        floating: o.floating,
        strategy: c
      });
      return i.reference.x !== b.reference.x || i.reference.y !== b.reference.y || i.reference.width !== b.reference.width || i.reference.height !== b.reference.height ? {
        reset: {
          rects: b
        }
      } : {};
    }
  };
};
function nl(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Re(e) {
  if (e == null)
    return window;
  if (!nl(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Qe(e) {
  return Re(e).getComputedStyle(e);
}
function Ve(e) {
  return nl(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function rl() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Oe(e) {
  return e instanceof Re(e).HTMLElement;
}
function Ae(e) {
  return e instanceof Re(e).Element;
}
function gm(e) {
  return e instanceof Re(e).Node;
}
function It(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Et(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Qe(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function vm(e) {
  return ["table", "td", "th"].includes(Ve(e));
}
function ol(e) {
  const t = /firefox/i.test(rl()), n = Qe(e);
  return n.transform !== "none" || n.perspective !== "none" || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((r) => n.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some(
    (r) => {
      const o = n.contain;
      return o != null ? o.includes(r) : !1;
    }
  );
}
function al() {
  return !/^((?!chrome|android).)*safari/i.test(rl());
}
function Ba(e) {
  return ["html", "body", "#document"].includes(Ve(e));
}
const bs = Math.min, Ct = Math.max, Hr = Math.round;
function Ye(e, t, n) {
  var r, o, i, a;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const c = e.getBoundingClientRect();
  let l = 1, d = 1;
  t && Oe(e) && (l = e.offsetWidth > 0 && Hr(c.width) / e.offsetWidth || 1, d = e.offsetHeight > 0 && Hr(c.height) / e.offsetHeight || 1);
  const y = Ae(e) ? Re(e) : window, m = !al() && n, p = (c.left + (m && (r = (o = y.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / l, h = (c.top + (m && (i = (a = y.visualViewport) == null ? void 0 : a.offsetTop) != null ? i : 0)) / d, g = c.width / l, b = c.height / d;
  return {
    width: g,
    height: b,
    top: h,
    right: p + g,
    bottom: h + b,
    left: p,
    x: p,
    y: h
  };
}
function He(e) {
  return ((gm(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Kr(e) {
  return Ae(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function il(e) {
  return Ye(He(e)).left + Kr(e).scrollLeft;
}
function wm(e) {
  const t = Ye(e);
  return Hr(t.width) !== e.offsetWidth || Hr(t.height) !== e.offsetHeight;
}
function bm(e, t, n) {
  const r = Oe(t), o = He(t), i = Ye(
    e,
    r && wm(t),
    n === "fixed"
  );
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((Ve(t) !== "body" || Et(o)) && (a = Kr(t)), Oe(t)) {
      const l = Ye(t, !0);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = il(o));
  return {
    x: i.left + a.scrollLeft - c.x,
    y: i.top + a.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function Qa(e) {
  return Ve(e) === "html" ? e : e.assignedSlot || e.parentNode || (It(e) ? e.host : null) || He(e);
}
function Ms(e) {
  return !Oe(e) || Qe(e).position === "fixed" ? null : e.offsetParent;
}
function Mm(e) {
  let t = Qa(e);
  for (It(t) && (t = t.host); Oe(t) && !Ba(t); ) {
    if (ol(t))
      return t;
    {
      const n = t.parentNode;
      t = It(n) ? n.host : n;
    }
  }
  return null;
}
function ka(e) {
  const t = Re(e);
  let n = Ms(e);
  for (; n && vm(n) && Qe(n).position === "static"; )
    n = Ms(n);
  return n && (Ve(n) === "html" || Ve(n) === "body" && Qe(n).position === "static" && !ol(n)) ? t : n || Mm(e) || t;
}
function Ls(e) {
  if (Oe(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = Ye(e);
  return {
    width: t.width,
    height: t.height
  };
}
function Lm(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Oe(n), i = He(n);
  if (n === i)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((Ve(n) !== "body" || Et(i)) && (a = Kr(n)), Oe(n))) {
    const l = Ye(n, !0);
    c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - a.scrollLeft + c.x,
    y: t.y - a.scrollTop + c.y
  };
}
function Cm(e, t) {
  const n = Re(e), r = He(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const d = al();
    (d || !d && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function Sm(e) {
  var t;
  const n = He(e), r = Kr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ct(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ct(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let c = -r.scrollLeft + il(e);
  const l = -r.scrollTop;
  return Qe(o || n).direction === "rtl" && (c += Ct(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function sl(e) {
  const t = Qa(e);
  return Ba(t) ? e.ownerDocument.body : Oe(t) && Et(t) ? t : sl(t);
}
function Gr(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = sl(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Re(r), a = o ? [i].concat(i.visualViewport || [], Et(r) ? r : []) : r, c = t.concat(a);
  return o ? c : c.concat(Gr(a));
}
function jm(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && It(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Tm(e, t) {
  let n = e;
  for (; n && !Ba(n) && !t.includes(n) && !(Ae(n) && ["absolute", "fixed"].includes(Qe(n).position)); ) {
    const r = Qa(n);
    n = It(r) ? r.host : r;
  }
  return n;
}
function Nm(e, t) {
  const n = Ye(e, !1, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft;
  return {
    top: r,
    left: o,
    x: o,
    y: r,
    right: o + e.clientWidth,
    bottom: r + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Cs(e, t, n) {
  return t === "viewport" ? zt(Cm(e, n)) : Ae(t) ? Nm(t, n) : zt(Sm(He(e)));
}
function km(e) {
  const t = Gr(e), n = Tm(e, t);
  let r = null;
  if (n && Oe(n)) {
    const o = ka(n);
    Et(n) ? r = n : Oe(o) && (r = o);
  }
  return Ae(r) ? t.filter((o) => r && Ae(o) && jm(o, r) && Ve(o) !== "body") : [];
}
function Dm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? km(t) : [].concat(n), r], c = a[0], l = a.reduce((d, y) => {
    const m = Cs(t, y, o);
    return d.top = Ct(m.top, d.top), d.right = bs(m.right, d.right), d.bottom = bs(m.bottom, d.bottom), d.left = Ct(m.left, d.left), d;
  }, Cs(t, c, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
const Om = {
  getClippingRect: Dm,
  convertOffsetParentRelativeRectToViewportRelativeRect: Lm,
  isElement: Ae,
  getDimensions: Ls,
  getOffsetParent: ka,
  getDocumentElement: He,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: bm(t, ka(n), r),
      floating: {
        ...Ls(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Qe(e).direction === "rtl"
};
function _m(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = !0,
    animationFrame: c = !1
  } = r, l = o && !c, d = l || i ? [...Ae(e) ? Gr(e) : [], ...Gr(t)] : [];
  d.forEach((g) => {
    l && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  let y = null;
  if (a) {
    let g = !0;
    y = new ResizeObserver(() => {
      g || n(), g = !1;
    }), Ae(e) && !c && y.observe(e), y.observe(t);
  }
  let m, p = c ? Ye(e) : null;
  c && h();
  function h() {
    const g = Ye(e);
    p && (g.x !== p.x || g.y !== p.y || g.width !== p.width || g.height !== p.height) && n(), p = g, m = requestAnimationFrame(h);
  }
  return n(), () => {
    var g;
    d.forEach((b) => {
      l && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), (g = y) == null || g.disconnect(), y = null, c && cancelAnimationFrame(m);
  };
}
const xm = (e, t, n) => tm(e, t, {
  platform: Om,
  ...n
});
function $m(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var r = e.get(t);
    r ? r.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var r = e.get(t);
    r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var r = e.get(t);
    r && r.slice().map(function(o) {
      o(n);
    }), (r = e.get("*")) && r.slice().map(function(o) {
      o(t, n);
    });
  } };
}
const zm = { class: "inline-block" }, Im = {
  name: "SdsFloatingUi"
}, Pe = /* @__PURE__ */ _({
  ...Im,
  props: {
    disabled: { type: Boolean, default: !1 },
    placement: { type: String, default: "auto" },
    strategy: { type: String, default: "absolute" },
    overflowPadding: { type: Number, default: 5 },
    arrowPadding: { type: Number, default: 5 },
    offset: { type: Number, default: 10 },
    inline: { type: Boolean, default: !1 },
    shift: { type: Boolean, default: !1 },
    disableAnimation: { type: Boolean, default: !1 },
    popperClass: { type: String, default: void 0 },
    hideArrow: { type: Boolean, default: !1 },
    arrowClass: { type: String, default: void 0 },
    placementTopArrowClass: { type: String, default: void 0 },
    placementRightArrowClass: { type: String, default: void 0 },
    placementBottomArrowClass: { type: String, default: void 0 },
    placementLeftArrowClass: { type: String, default: void 0 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = V(null), r = V(null), o = V(null), i = V(!1), a = V({ left: "0px", top: "0px" }), c = V({ left: "0px", top: "0px" }), l = V(""), d = V(null), y = V(!1), m = (S) => new Promise((P) => (d.value && clearTimeout(d.value), d.value = setTimeout(P, S), d.value)), p = (S) => new Promise(async (P, H) => S ? await S(P, H) : P()), h = async (S = 0) => {
      if (!t.disabled)
        try {
          if (y.value = !0, await m(S), y.value) {
            if (await p(t.willOpen), i.value || !y.value)
              return;
            y.value = !1, i.value = !0;
          }
        } catch {
          y.value = !1;
        }
    }, g = async (S = 0) => {
      try {
        if (y.value = !1, await m(S), await p(t.willClose), !i.value)
          return;
        i.value = !1;
      } catch {
      }
    }, b = async (S = 0, P = 0) => {
      i.value ? g(P) : h(S);
    }, k = $m();
    dl("emitter", k), k.on("floating-ui-toggle", (S) => {
      S ? !i.value && h() : i.value && g();
    }), W4(r, (S) => {
      n.value && S.target && n.value.contains(S.target) || !i.value || g();
    }), q4("Escape", (S) => {
      !i.value || (S.preventDefault(), g());
    });
    const T = B(() => l.value ? l.value.includes("top") ? t.placementTopArrowClass : l.value.includes("right") ? t.placementRightArrowClass : l.value.includes("bottom") ? t.placementBottomArrowClass : l.value.includes("left") ? t.placementLeftArrowClass : "" : ""), D = async () => {
      if (!n.value || !r.value)
        return;
      const S = {
        middleware: [],
        placement: t.placement,
        strategy: t.strategy
      }, P = t.placement.startsWith("auto");
      t.offset && S.middleware.push(ym(t.offset)), P ? S.middleware.push(um({
        alignment: t.placement.split("-")[1] ?? ""
      })) : S.placement = t.placement, t.inline && S.middleware.push(mm()), P || S.middleware.push(fm({
        padding: t.overflowPadding
      })), t.shift && S.middleware.push(hm({
        padding: t.overflowPadding
      })), !t.hideArrow && o.value && S.middleware.push(rm({
        element: o.value,
        padding: t.arrowPadding
      }));
      const H = await xm(n.value, r.value, S), { x: Q, y: Y, placement: R, middlewareData: K } = H;
      if (a.value = {
        left: Q ? `${Q}px` : "",
        top: Y ? `${Y}px` : ""
      }, !t.hideArrow) {
        const { x: U, y: X } = K.arrow;
        l.value = R, c.value = {
          left: U ? `${U}px` : "",
          top: X ? `${X}px` : ""
        };
      }
    };
    let $ = null;
    return st(i, (S) => {
      S ? lo(() => {
        D(), n.value && r.value && ($ = _m(n.value, r.value, D));
      }) : $ && $();
    }), (S, P) => (u(), f("div", zm, [
      s("div", {
        ref_key: "triggerRef",
        ref: n,
        class: "inline-block w-full"
      }, [
        j(S.$slots, "trigger", {
          isOpen: i.value,
          open: h,
          close: g,
          toggle: b
        })
      ], 512),
      ge(at, null, {
        default: te(() => [
          (u(), ve(ks, { to: "body" }, [
            ge($t, {
              css: !e.disableAnimation,
              "enter-active-class": "transition duration-75 ease-out",
              "enter-from-class": "transform scale-95 opacity-0",
              "enter-to-class": "transform scale-100 opacity-100",
              "leave-active-class": "transition duration-50 ease-in",
              "leave-from-class": "transform scale-100 opacity-100",
              "leave-to-class": "transform scale-95 opacity-0"
            }, {
              default: te(() => [
                i.value ? (u(), f("div", {
                  key: 0,
                  ref_key: "popperRef",
                  ref: r,
                  class: L(e.popperClass),
                  style: De(a.value)
                }, [
                  e.hideArrow ? w("", !0) : (u(), f("div", {
                    key: 0,
                    ref_key: "arrowRef",
                    ref: o,
                    class: L([e.arrowClass, O(T)]),
                    style: De(c.value)
                  }, null, 6)),
                  j(S.$slots, "default", {
                    isOpen: i.value,
                    open: h,
                    close: g,
                    toggle: b
                  })
                ], 6)) : w("", !0)
              ]),
              _: 3
            }, 8, ["css"])
          ]))
        ]),
        _: 3
      })
    ]));
  }
}), Pm = _({
  name: "SdsDatepicker",
  components: {
    Calendar: Lt,
    FloatingUi: Pe
  },
  props: {
    zIndex: { type: String, required: !1, default: "50" },
    hideArrow: { type: Boolean, default: !1 },
    size: { type: String, default: "md" },
    mode: { type: String, default: "date" },
    modelValue: { type: [Object, Date], default: null },
    max: { type: Date, default: null },
    min: { type: Date, default: null },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      inputDate: { start: "", end: "" }
    };
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    },
    isRange() {
      return this.modelValue && !(this.modelValue instanceof Date);
    },
    placeholder() {
      switch (this.mode) {
        case "date":
          return "mm/dd/yyyy";
        case "time":
          return "hh:mm a";
        case "dateTime":
          return "mm/dd/yyyy hh:mm a";
        default:
          return "mm/dd/yyyy";
      }
    },
    inputFormat() {
      switch (this.mode) {
        case "date":
          return "MM/dd/yyyy";
        case "time":
          return "hh:mm aaa";
        case "dateTime":
          return "MM/dd/yyyy hh:mm aaa";
        default:
          return "MM/dd/yyyy";
      }
    },
    inputPattern() {
      switch (this.mode) {
        case "date":
          return "[0-9]{2}/[0-9]{2}/[0-9]{4}";
        case "time":
          return "[0-9]{2}:[0-9]{2} [a|p]m";
        case "dateTime":
          return "[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2} [a|p]m";
        default:
          return "[0-9]{2}/[0-9]{2}/[0-9]{4}";
      }
    },
    localDate: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  watch: {
    localDate: {
      handler(e) {
        if (this.isRange) {
          const t = e.start && this.formatDate(he(e.start, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" }, n = e.end && this.formatDate(he(e.end, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" };
          t.date && n.date && Ke(t.date, n.date) ? this.inputDate = {
            start: n.text,
            end: t.text
          } : this.inputDate = {
            start: t.text,
            end: n.text
          };
        } else {
          const t = e && this.formatDate(he(e, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" };
          this.inputDate = {
            start: t.text,
            end: ""
          };
        }
      },
      deep: !0,
      immediate: !0
    }
  },
  methods: {
    focusCorrectInput(e, t) {
      e && e instanceof Date ? this.$refs.startDateInput.focus() : e && !(e instanceof Date) && !e.start ? this.$refs.startDateInput.focus() : e && !(e instanceof Date) && !e.end ? this.$refs.endDateInput.focus() : e && !(e instanceof Date) && e.end ? this.$refs.endDateInput.focus() : this.$refs.startDateInput.focus(), this.mode === "date" && this.$nextTick(() => {
        (this.isRange && this.inputDate.start && this.inputDate.end || !this.isRange && this.inputDate.start) && t();
      });
    },
    updateDatesFromInput() {
      if (this.isRange) {
        const e = this.formatDate(this.inputDate.start), t = this.formatDate(this.inputDate.end);
        this.localDate = {
          start: e.date && t.date && co([e.date, t.date]) || e.date,
          end: e.date && t.date && uo([e.date, t.date]) || t.date
        }, e.date && t.date && Ke(e.date, t.date) ? this.inputDate = {
          start: t.text,
          end: e.text
        } : this.inputDate = {
          start: e.text,
          end: t.text
        };
      } else {
        const e = this.formatDate(this.inputDate.start);
        this.localDate = e.date, this.inputDate = {
          start: e.text,
          end: ""
        };
      }
    },
    formatDate(e) {
      if (e === "now") {
        const o = new Date();
        return { date: o, text: he(o, this.inputFormat) };
      } else if (e === "today") {
        const o = pe(Me(ke(Ne(new Date(), 0), 0), 0), 0);
        return { date: o, text: he(o, this.inputFormat) };
      } else if (e === "tomorrow") {
        const o = Ps(pe(Me(ke(Ne(new Date(), 0), 0), 0), 0), 1);
        return { date: o, text: he(o, this.inputFormat) };
      } else if (e === "yesterday") {
        const o = io(pe(Me(ke(Ne(new Date(), 0), 0), 0), 0), 1);
        return { date: o, text: he(o, this.inputFormat) };
      }
      const t = [
        "MM/dd/yyyy hh:mm aaa",
        "MM/dd/yyyy hh:mm a",
        "MM/dd/yyyy h:mm aaa",
        "MM/dd/yyyy h:mm a",
        "MM/dd/yyyy hh:mmaaa",
        "MM/dd/yyyy hh:mma",
        "MM/dd/yyyy h:mmaaa",
        "MM/dd/yyyy h:mma",
        "MM/dd/yyyy H:mm",
        "MM/dd/yyyy HH:mm",
        "MM/dd/yyyy HH:mm:ss",
        "MM-dd-yyyy hh:mm aaa",
        "MM-dd-yyyy hh:mm a",
        "MM-dd-yyyy h:mm aaa",
        "MM-dd-yyyy h:mm a",
        "MM-dd-yyyy ha",
        "MM-dd-yyyy haaa",
        "MM-dd-yyyy hh:mmaaa",
        "MM-dd-yyyy hh:mma",
        "MM-dd-yyyy h:mmaaa",
        "MM-dd-yyyy h:mma",
        "MM-dd-yyyy H:mm",
        "MM-dd-yyyy HH:mm",
        "MM-dd-yyyy HH:mm:ss",
        "yyyy-MM-dd hh:mm aaa",
        "yyyy-MM-dd hh:mm a",
        "yyyy-MM-dd h:mm aaa",
        "yyyy-MM-dd h:mm a",
        "yyyy-MM-dd hh:mma",
        "yyyy-MM-dd h:mmaaa",
        "yyyy-MM-dd h:mma",
        "yyyy-MM-dd H:mm",
        "yyyy-MM-dd HH:mm",
        "yyyy-MM-dd HH:mm:ss",
        "MM/dd/yyyy",
        "MM-dd-yyyy",
        "yyyy-MM-dd",
        "M/d",
        "MM/dd",
        "MM/yyyy",
        "M-d",
        "MM-dd",
        "MM-yyyy",
        "yyyy/MM",
        "yyyy-MM",
        "M/dd/yyyy hh:mm aaa",
        "M/dd/yyyy hh:mm a",
        "M/dd/yyyy h:mm aaa",
        "M/dd/yyyy h:mm a",
        "M/dd/yyyy ha",
        "M/dd/yyyy haaa",
        "M/dd/yyyy hh:mmaaa",
        "M/dd/yyyy hh:mma",
        "M/dd/yyyy h:mmaaa",
        "M/dd/yyyy h:mma",
        "M/dd/yyyy H:mm",
        "M/dd/yyyy HH:mm",
        "M/dd/yyyy HH:mm:ss",
        "M-dd-yyyy hh:mm aaa",
        "M-dd-yyyy hh:mm a",
        "M-dd-yyyy h:mm aaa",
        "M-dd-yyyy h:mm a",
        "M-dd-yyyy hh:mmaaa",
        "M-dd-yyyy hh:mma",
        "M-dd-yyyy h:mmaaa",
        "M-dd-yyyy h:mma",
        "M-dd-yyyy H:mm",
        "M-dd-yyyy HH:mm",
        "M-dd-yyyy HH:mm:ss",
        "yyyy-M-dd hh:mm aaa",
        "yyyy-M-dd hh:mm a",
        "yyyy-M-dd h:mm aaa",
        "yyyy-M-dd h:mm a",
        "yyyy-M-dd hh:mma",
        "yyyy-M-dd h:mmaaa",
        "yyyy-M-dd h:mma",
        "yyyy-M-dd H:mm",
        "yyyy-M-dd HH:mm",
        "yyyy-M-dd HH:mm:ss",
        "yyyy-M-dd",
        "M/yyyy",
        "M-yyyy",
        "M/yyyy haaa",
        "M-yyyy haaa",
        "M/yyyy ha",
        "M/yyyy HH:mm:ss",
        "M-yyyy HH:mm:ss",
        "M.yyyy HH:mm:ss",
        "M-yyyy ha",
        "M/yyyy h:mmaaa",
        "M-yyyy h:mmaaa",
        "M/yyyy h:mma",
        "M-yyyy h:mma",
        "M/yyyy h:mm aaa",
        "M-yyyy h:mm aaa",
        "M/yyyy h:mm a",
        "M-yyyy h:mm a",
        "yyyy/M",
        "yyyy-M",
        "yyyy",
        "EEE",
        "EEEE",
        "LLL",
        "LLLL",
        "LLL yyyy",
        "LLLL yyyy",
        "LLL dd yyyy",
        "LLLL dd yyyy",
        "hh:mm aaa",
        "hh:mm a",
        "h:mm aaa",
        "h:mm a",
        "hh:mmaaa",
        "hh:mma",
        "h:mmaaa",
        "h:mma",
        "HH:mm:ss",
        "H:mm",
        "HH:mm",
        "QQQ",
        "QQQQ",
        "QQQ yyyy",
        "QQQQ yyyy",
        "PP",
        "PPP",
        "PPPP",
        "bbb",
        "h BBB",
        "h:mm BBB",
        "hh BBB",
        "hh:mm BBB",
        "hBBB",
        "h:mmBBB",
        "hhBBB",
        "hh:mmBBB"
      ];
      let n;
      const r = t.filter((o) => {
        const i = As(ao(e, o, new Date()));
        return i && (n = o), i;
      });
      if (r.length > 0) {
        let o = ao(e, r[0], new Date());
        if (this.mode === "date")
          o = pe(Me(ke(Ne(o, 0), 0), 0), 0);
        else if (this.mode === "time") {
          const d = he(o, "HH:mm:ss"), y = he(new Date(), "yyyy-MM-dd");
          o = ao(`${y} ${d}`, "yyyy-MM-dd HH:mm:ss", new Date());
        }
        const i = o.getFullYear();
        n === "LLLL dd yyyy" && i < 1e3 && (o = wd(o, 2e3));
        const a = yo(o, this.min), c = Ke(io(o, 1), this.max), l = po(io(o, 1), this.max);
        if (!a && !c && !l)
          return { date: o, text: he(o, this.inputFormat) };
      }
      return { date: null, text: "" };
    }
  }
}), Em = ["disabled", "onClick"], Am = {
  key: 0,
  d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
  fill: "currentColor"
}, Ym = {
  key: 1,
  d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
}, Rm = ["title", "placeholder", "readonly", "disabled", "required", "pattern", "onFocusin", "onKeydown", "onMousedown", "onKeyup"], Um = /* @__PURE__ */ s("path", {
  d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  fill: "currentColor"
}, null, -1), Bm = [
  Um
], Qm = ["disabled", "onClick"], Vm = {
  key: 0,
  d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
  fill: "currentColor"
}, Hm = {
  key: 1,
  d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
}, Gm = ["title", "placeholder", "readonly", "disabled", "required", "pattern", "onFocusin", "onKeydown", "onMousedown", "onKeyup"], Wm = { class: "p-4" };
function Fm(e, t, n, r, o, i) {
  const a = ye("calendar"), c = ye("floating-ui");
  return u(), ve(c, {
    "data-id": "sds-datepicker",
    class: "w-full",
    placement: "bottom",
    disabled: e.disabled,
    "popper-class": `absolute bg-white border dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-lg rounded-md w-auto ${e.zIndexClass}`,
    "arrow-class": "absolute bg-white border dark:bg-gray-700 dark:border-gray-600 w-3 h-3 rotate-45",
    "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
    "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
    "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
    "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0"
  }, {
    trigger: te(({ open: l, close: d, toggle: y }) => [
      s("div", {
        class: L(["flex w-full", { "gap-1": e.size === "sm", "gap-2": e.size !== "sm" }])
      }, [
        s("div", {
          class: L(["w-full input-group", { "input-group-sm": e.size === "sm" }])
        }, [
          s("button", {
            type: "button",
            tabindex: "-1",
            class: L(["input-group-text fill-current", {
              "p-1": e.size === "sm",
              "pointer-events-none opacity-50": e.disabled || e.readonly
            }]),
            disabled: e.disabled || e.readonly,
            onClick: (m) => {
              y(), e.$refs.startDateInput.focus();
            }
          }, [
            (u(), f("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              class: L(["fill-current", { "w-3 h-3": e.size === "sm", "w-4 h-4": e.size !== "sm" }])
            }, [
              e.mode === "time" ? (u(), f("path", Am)) : (u(), f("path", Ym))
            ], 2))
          ], 10, Em),
          ne(s("input", {
            ref: "startDateInput",
            "onUpdate:modelValue": t[0] || (t[0] = (m) => e.inputDate.start = m),
            type: "text",
            class: L(["form-control", { "px-1": e.size === "sm" }]),
            title: `${e.placeholder}`,
            placeholder: e.placeholder,
            readonly: e.readonly,
            disabled: e.disabled,
            required: e.required,
            pattern: e.inputPattern,
            onFocusin: (m) => l(),
            onKeydown: [
              Le((m) => {
                e.updateDatesFromInput(), d();
              }, ["tab"]),
              Le(me((m) => {
                e.updateDatesFromInput(), y();
              }, ["prevent"]), ["enter"])
            ],
            onMousedown: me((m) => y(), ["stop"]),
            onKeyup: [
              Le((m) => d(), ["up"]),
              Le((m) => l(), ["down"])
            ],
            onChange: t[1] || (t[1] = (...m) => e.updateDatesFromInput && e.updateDatesFromInput(...m))
          }, null, 42, Rm), [
            [it, e.inputDate.start]
          ])
        ], 2),
        e.isRange ? (u(), f(N, { key: 0 }, [
          e.hideArrow ? w("", !0) : (u(), f("div", {
            key: 0,
            class: L(["flex my-auto flex-shrink-0", {
              "opacity-50": e.disabled || e.readonly
            }])
          }, [
            (u(), f("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              "aria-hidden": "true",
              role: "img",
              class: L(["text-gray-700", { "w-5 h-5": e.size !== "sm", "w-4 h-4": e.size === "sm" }]),
              width: "32",
              height: "32",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24"
            }, Bm, 2))
          ], 2)),
          s("div", {
            class: L(["w-full input-group", { "input-group-sm": e.size === "sm" }])
          }, [
            s("button", {
              type: "button",
              tabindex: "-1",
              class: L(["input-group-text fill-current", {
                "p-1": e.size === "sm",
                "pointer-events-none opacity-50": e.disabled || e.readonly
              }]),
              disabled: e.disabled || e.readonly,
              onClick: (m) => {
                y(), e.$refs.endDateInput.focus();
              }
            }, [
              (u(), f("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512",
                class: L(["fill-current", { "w-3 h-3": e.size === "sm", "w-4 h-4": e.size !== "sm" }])
              }, [
                e.mode === "time" ? (u(), f("path", Vm)) : (u(), f("path", Hm))
              ], 2))
            ], 10, Qm),
            ne(s("input", {
              ref: "endDateInput",
              "onUpdate:modelValue": t[2] || (t[2] = (m) => e.inputDate.end = m),
              type: "text",
              class: L(["form-control", { "px-1": e.size === "sm" }]),
              title: `${e.placeholder}`,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled,
              required: e.required,
              pattern: e.inputPattern,
              onFocusin: (m) => l(),
              onKeydown: [
                Le((m) => {
                  e.updateDatesFromInput(), d();
                }, ["tab"]),
                Le(me((m) => {
                  e.updateDatesFromInput(), y();
                }, ["prevent"]), ["enter"])
              ],
              onMousedown: me((m) => y(), ["stop"]),
              onKeyup: [
                Le((m) => d(), ["up"]),
                Le((m) => l(), ["down"])
              ],
              onChange: t[3] || (t[3] = (...m) => e.updateDatesFromInput && e.updateDatesFromInput(...m))
            }, null, 42, Gm), [
              [it, e.inputDate.end]
            ])
          ], 2)
        ], 64)) : w("", !0)
      ], 2)
    ]),
    default: te(({ close: l }) => [
      s("div", Wm, [
        ge(a, {
          modelValue: e.localDate,
          "onUpdate:modelValue": [
            t[4] || (t[4] = (d) => e.localDate = d),
            (d) => e.focusCorrectInput(d, l)
          ],
          min: e.min,
          max: e.max,
          mode: e.mode
        }, null, 8, ["modelValue", "min", "max", "mode", "onUpdate:modelValue"])
      ])
    ]),
    _: 1
  }, 8, ["disabled", "popper-class"]);
}
const zn = /* @__PURE__ */ E(Pm, [["render", Fm]]);
zn.install = (e) => {
  e.component(zn.name, zn);
};
const Ss = () => Date.now().toString(36) + Math.random().toString(36).substring(2), At = {
  created(e) {
    e.setAttribute("id", e.id || Ss());
  },
  getSSRProps() {
    return {
      id: Ss()
    };
  }
}, qm = _({
  name: "SdsPopover",
  components: {
    FloatingUi: Pe
  },
  directives: {
    uid: At
  },
  props: {
    title: { type: String, default: "" },
    variant: { type: String, default: "default" },
    zIndex: { type: String, required: !1, default: "50" },
    offset: { type: Number, default: 5 },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    size: { type: String, default: "md" },
    auto: { type: Boolean, default: !1 },
    strategy: { type: String, default: "absolute" },
    placement: { type: String, default: "bottom-start" },
    outline: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  setup(e) {
    return {
      button: V(null),
      handleClick: (r, o, i) => {
        r ? i(e.closeDelay) : o(e.openDelay);
      }
    };
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "md":
          return "";
        case "sm":
          return "btn-sm";
        default:
          return "";
      }
    },
    variantClass() {
      switch (this.variant) {
        case "default":
          return "btn-default";
        case "primary":
          return "btn-primary";
        case "success":
          return "btn-success";
        case "danger":
          return "btn-danger";
        case "light":
          return "btn-light";
        default:
          return "";
      }
    },
    outlineClass() {
      return this.outline ? "btn-outline" : "";
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    },
    blockClass() {
      return this.block ? "btn-block" : "";
    }
  }
}), Jm = ["aria-expanded", "disabled", "onClick"], Km = /* @__PURE__ */ s("svg", {
  class: "inline-block self-center w-5 h-5 -mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), Xm = ["aria-labelledby"];
function Zm(e, t, n, r, o, i) {
  const a = ye("floating-ui"), c = lt("uid");
  return u(), ve(a, {
    "data-id": "sds-dropdown",
    offset: e.offset,
    strategy: e.strategy,
    placement: e.placement,
    disabled: e.disabled,
    "will-open": e.willOpen,
    "will-close": e.willClose,
    class: L([e.block ? "w-full" : ""]),
    "popper-class": `absolute border shadow-lg rounded-md bg-white dark:border-gray-600 dark:bg-gray-700 ${e.auto ? "w-auto" : "w-56"} ${e.zIndexClass}`,
    "hide-arrow": "",
    shift: ""
  }, {
    trigger: te(({ open: l, close: d, isOpen: y, toggle: m }) => [
      j(e.$slots, "trigger", {
        open: l,
        close: d,
        isOpen: y,
        toggle: m
      }, () => [
        ne((u(), f("button", {
          ref: "button",
          type: "button",
          class: L(["btn space-x", [e.variantClass, e.sizeClass, e.outlineClass, e.disabledClass, e.blockClass, y ? "active" : ""]]),
          "aria-haspopup": "true",
          "aria-expanded": y,
          disabled: e.disabled,
          onClick: (p) => e.handleClick(y, l, d)
        }, [
          j(e.$slots, "title", {}, () => [
            ee(M(e.title), 1)
          ]),
          Km
        ], 10, Jm)), [
          [c]
        ])
      ])
    ]),
    default: te(({ open: l, close: d, toggle: y, isOpen: m }) => [
      s("div", {
        class: "py-2",
        "aria-orientation": "vertical",
        "aria-labelledby": e.button && e.button.id || void 0
      }, [
        j(e.$slots, "default", {
          close: d,
          open: l,
          toggle: y,
          isOpen: m
        })
      ], 8, Xm)
    ]),
    _: 3
  }, 8, ["offset", "strategy", "placement", "disabled", "will-open", "will-close", "class", "popper-class"]);
}
const In = /* @__PURE__ */ E(qm, [["render", Zm]]);
In.install = (e) => {
  e.component(In.name, In);
};
const eg = _({
  name: "SdsDropdownDivider"
}), tg = {
  "data-id": "sds-dropdown-divider",
  class: "my-2 border-t border-gray-100 dark:border-gray-600"
};
function ng(e, t, n, r, o, i) {
  return u(), f("div", tg);
}
const Pn = /* @__PURE__ */ E(eg, [["render", ng]]);
Pn.install = (e) => {
  e.component(Pn.name, Pn);
};
const rg = _({
  name: "SdsDropdownHeader"
}), og = {
  "data-id": "sds-dropdown-header",
  class: "px-4 py-1 text-sm font-semibold leading-5 text-gray-500 dark:text-gray-300"
};
function ag(e, t, n, r, o, i) {
  return u(), f("div", og, [
    j(e.$slots, "default")
  ]);
}
const En = /* @__PURE__ */ E(rg, [["render", ag]]);
En.install = (e) => {
  e.component(En.name, En);
};
const ig = _({
  name: "SdsDropdownItem",
  props: {
    tag: {
      type: String,
      default: "a"
    },
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    active: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return {
      emitter: yl("emitter")
    };
  }
});
function sg(e, t, n, r, o, i) {
  return u(), ve(Oa(e.tag), {
    "data-id": "sds-dropdown-item",
    class: L(["block w-full select-none px-4 py-2 text-sm leading-5 text-left hover:no-underline hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600 focus:text-white", {
      "bg-blue-500 dark:bg-blue-600 text-white": e.active,
      "text-gray-700 dark:text-gray-100": !e.active,
      "pointer-events-none opacity-50": e.disabled
    }]),
    disabled: e.disabled,
    role: "menuitem",
    onClick: t[0] || (t[0] = (a) => e.closeOnClick ? e.emitter.emit("floating-ui-toggle", !1) : null)
  }, {
    default: te(() => [
      j(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "disabled"]);
}
const An = /* @__PURE__ */ E(ig, [["render", sg]]);
An.install = (e) => {
  e.component(An.name, An);
};
const lg = {
  "data-id": "sds-file-uploader",
  class: "border border-dashed border-2 dark:border-gray-700 rounded p-4 space-y-2 relative"
}, ug = ["accept", "multiple", "required", "name"], cg = { class: "space-y-2" }, fg = { class: "flex gap-2" }, dg = ["for"], yg = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "my-auto h-4 w-4 text-tertiary",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M105.4 182.6c12.5 12.49 32.76 12.5 45.25.001L224 109.3V352c0 17.67 14.33 32 32 32s32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0s-16.4 3.125-22.6 9.375L105.4 137.4c-12.52 12.5-12.52 32.7 0 45.2zM480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24s24 10.8 24 24s-10.8 24-24 24z"
  })
], -1), pg = { class: "my-auto" }, hg = { class: "text-gray-500 text-sm" }, mg = { key: 0 }, gg = { class: "flex" }, vg = { class: "my-auto flex gap-1 flex-grow" }, wg = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "w-4 h-4 my-auto text-success",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2 44.2l108.2-108.2c10.9-10.9 28.7-10.9 39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
  })
], -1), bg = { class: "my-auto" }, Mg = { class: "my-auto text-tertiary text-sm uppercase" }, Lg = ["onClick"], Cg = /* @__PURE__ */ s("svg", {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5 x",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), Sg = /* @__PURE__ */ s("span", { class: "sr-only" }, "Remove file", -1), jg = [
  Cg,
  Sg
], Tg = { class: "flex" }, Ng = { class: "my-auto flex gap-1 flex-grow" }, kg = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "w-4 h-4 my-auto text-danger",
  width: "32",
  height: "32",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M175 175c9.4-9.3 24.6-9.3 33.1 0l47 47.1L303 175c9.4-9.3 24.6-9.3 33.1 0c10.2 9.4 10.2 24.6 0 33.1l-46.2 47l46.2 47.9c10.2 9.4 10.2 24.6 0 33.1c-8.5 10.2-23.7 10.2-33.1 0l-47.9-46.2l-47 46.2c-8.5 10.2-23.7 10.2-33.1 0c-9.3-8.5-9.3-23.7 0-33.1l47.1-47.9l-47.1-47c-9.3-8.5-9.3-23.7 0-33.1zm337 81c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
  })
], -1), Dg = { class: "my-auto" }, Og = { class: "my-auto text-tertiary text-sm uppercase" }, _g = ["onClick"], xg = /* @__PURE__ */ s("svg", {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5 x",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), $g = /* @__PURE__ */ s("span", { class: "sr-only" }, "Remove file", -1), zg = [
  xg,
  $g
], Ig = {
  key: 0,
  class: "text-danger text-xs ml-5 mt-1"
}, Pg = {
  key: 1,
  class: "text-danger text-xs ml-5 mt-1"
}, Eg = {
  directives: {
    uid: At
  }
}, Yn = /* @__PURE__ */ _({
  ...Eg,
  __name: "FileUploader",
  props: {
    modelValue: { type: Array, default: () => [] },
    name: { type: String, default: "sdsFileUploader" },
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    accept: { type: String, default: void 0 },
    allowedFiletypes: { type: Array, default: () => [] },
    filesize: { type: Number, default: 10 },
    helperText: { type: String, default: void 0 }
  },
  emits: ["add", "remove", "remove-invalid", "update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = V(null), o = V([]), i = V([]), a = (p) => {
      if (!r.value)
        return;
      const h = new DataTransfer();
      o.value = o.value.filter((g) => !(g.name === p.name && g.lastModified === p.lastModified && g.size === p.size && g.type === p.type)), o.value.forEach((g) => {
        h.items.add(g);
      }), r.value.files = h.files, t("remove", { files: o.value, invalidFiles: i.value }), t("update:model-value", [...o.value, ...i.value]);
    }, c = (p) => {
      i.value = i.value.filter((h) => !(h.name === p.name && h.lastModified === p.lastModified && h.size === p.size && h.type === p.type)), t("remove-invalid", { files: o.value, invalidFiles: i.value }), t("update:model-value", [...o.value, ...i.value]);
    }, l = (p) => o.value.find((h) => h.name === p.name && h.lastModified === p.lastModified && h.size === p.size && h.type === p.type), d = (p) => {
      if (!p.target)
        return;
      const h = p.target.files;
      Array.from(h).forEach((g) => {
        l(g) || y(g);
      }), t("add", { files: o.value, invalidFiles: i.value }), t("update:model-value", [...o.value, ...i.value]);
    }, y = (p) => {
      if (!r.value)
        return;
      const h = new DataTransfer(), g = parseFloat((p.size / 1024 / 1024).toFixed(4)), b = p.type, k = n.allowedFiletypes.length > 0 && n.allowedFiletypes.includes(b) || n.allowedFiletypes.length < 1;
      n.multiple && o.value.forEach((T) => {
        h.items.add(T);
      }), g <= n.filesize && k ? (h.items.add(p), r.value.files = h.files, o.value = Array.from(r.value.files) || [], n.multiple || (i.value = [])) : g > n.filesize ? n.multiple ? (p.invalidSize = !0, i.value.push(p), i.value = i.value.filter(
        (T, D, $) => D === $.findIndex((S) => S.name === T.name && S.lastModified === T.lastModified && S.size === T.size && S.type === T.type)
      )) : (o.value = [], r.value.files = h.files, p.invalidSize = !0, i.value = [p]) : k || (n.multiple ? (p.invalidType = !0, i.value.push(p), i.value = i.value.filter(
        (T, D, $) => D === $.findIndex((S) => S.name === T.name && S.lastModified === T.lastModified && S.size === T.size && S.type === T.type)
      )) : (o.value = [], r.value.files = h.files, p.invalidType = !0, i.value = [p]));
    }, m = (p) => {
      const h = ["b", "kb", "mb", "gb", "tb"];
      if (p <= 0 || p > 999999999999999)
        return "n/a";
      const g = parseInt(`${Math.floor(Math.log(p) / Math.log(1024))}`, 10);
      return g === 0 ? `${p}${h[g]}` : `${Math.ceil(p / 1024 ** g)} ${h[g]}`;
    };
    return st(() => n.modelValue, (p) => {
      if (!r.value)
        return;
      const h = new DataTransfer();
      p.forEach((g) => h.items.add(g)), r.value.files = h.files, o.value = [], i.value = [], Array.from(h.files).forEach((g) => {
        y(g);
      });
    }, { immediate: !0, deep: !0 }), (p, h) => {
      const g = lt("uid");
      return u(), f("div", lg, [
        ne(s("input", {
          ref_key: "fileInput",
          ref: r,
          type: "file",
          accept: e.accept,
          multiple: e.multiple,
          required: e.required,
          class: "absolute inset-0 opacity-0 cursor-pointer",
          name: e.name,
          onChange: d
        }, null, 40, ug), [
          [g]
        ]),
        s("div", cg, [
          s("div", fg, [
            s("label", {
              for: r.value?.id,
              class: "btn btn-default cursor-pointer z-10"
            }, "Browse", 8, dg),
            yg,
            s("span", pg, M(e.multiple ? "Drag and drop your files here" : "Drag and drop a file here"), 1)
          ]),
          s("p", hg, M(e.helperText ? e.helperText : e.multiple ? `Use files under ${e.filesize} MB.` : `Use a file under ${e.filesize} MB.`), 1),
          j(p.$slots, "default", {
            files: o.value,
            invalidFiles: i.value
          }, () => [
            o.value.length > 0 || i.value.length > 0 ? (u(), f("ul", mg, [
              (u(!0), f(N, null, A(o.value, (b) => (u(), f("li", {
                key: b.name + b.size + b.type + b.lastModified,
                class: "py-2 border-b only:border-0 last:pb-0 last:border-0"
              }, [
                s("div", gg, [
                  s("div", vg, [
                    wg,
                    s("span", bg, M(b.name), 1),
                    s("span", Mg, "(" + M(m(b.size)) + ")", 1)
                  ]),
                  s("button", {
                    class: "my-auto z-10 link hover:text-danger dark:hover:text-red-400",
                    onClick: (k) => a(b)
                  }, jg, 8, Lg)
                ])
              ]))), 128)),
              (u(!0), f(N, null, A(i.value, (b) => (u(), f("li", {
                key: b.name + b.size + b.type + b.lastModified,
                class: "py-2 border-b only:border-0 last:pb-0 last:border-0"
              }, [
                s("div", Tg, [
                  s("div", Ng, [
                    kg,
                    s("span", Dg, M(b.name), 1),
                    s("span", Og, "(" + M(m(b.size)) + ")", 1)
                  ]),
                  s("button", {
                    class: "my-auto z-10 link hover:text-danger dark:hover:text-red-400",
                    onClick: (k) => c(b)
                  }, zg, 8, _g)
                ]),
                b.invalidType ? (u(), f("p", Ig, " Invalid file type ")) : w("", !0),
                b.invalidSize ? (u(), f("p", Pg, " File size is over " + M(e.filesize) + " MB. ", 1)) : w("", !0)
              ]))), 128))
            ])) : w("", !0)
          ])
        ])
      ]);
    };
  }
});
Yn.install = (e) => {
  e.component(Yn.name, Yn);
};
const Ag = _({
  name: "SdsFilterByDropdown",
  components: {
    FloatingUi: Pe
  },
  directives: {
    uid: At
  },
  props: {
    modelValue: { type: Array, default: () => [] },
    variant: { type: String, default: "secondary" },
    zIndex: { type: String, required: !1, default: "50" },
    title: { type: String, default: "Filter" },
    enableFilter: { type: Boolean, default: !1 },
    enableSortOptions: { type: Boolean, default: !1 },
    placement: { type: String, default: "bottom-start" }
  },
  emits: ["update:modelValue"],
  setup() {
    return { button: V(null) };
  },
  data() {
    return {
      filterText: "",
      tmpOptions: [],
      open: !1
    };
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    },
    options: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    allSelected() {
      return this.tmpOptions.every((e) => e.selected);
    },
    someSelected() {
      return this.tmpOptions.some((e) => e.selected);
    },
    indeterminate() {
      return this.someSelected && !this.allSelected;
    },
    filteredTmpOptions() {
      return this.tmpOptions.filter(
        (e) => e.text && e.text.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "link link-primary";
        case "secondary":
          return "link link-secondary";
        default:
          return "";
      }
    }
  },
  methods: {
    toggleSelect() {
      this.allSelected ? this.deselectAllOptions() : this.selectAllOptions();
    },
    saveSelections() {
      this.$emit("update:modelValue", this.tmpOptions);
    },
    cancelSelections() {
      this.resetTmpOptions();
    },
    resetTmpOptions() {
      const e = JSON.parse(JSON.stringify(this.options));
      this.enableSortOptions ? this.tmpOptions = e.sort((t, n) => t.text.toLowerCase() < n.text.toLowerCase() ? -1 : t.text.toLowerCase() > n.text.toLowerCase() ? 1 : 0).sort((t, n) => t.selected > n.selected ? -1 : t.selected < n.selected ? 1 : 0) : this.tmpOptions = e, this.filterText = "";
    },
    deselectAllOptions() {
      this.tmpOptions.forEach((e) => {
        e.selected = !1;
      });
    },
    selectAllOptions() {
      this.tmpOptions.forEach((e) => {
        e.selected = !0;
      });
    }
  }
}), Yg = ["aria-expanded", "onClick"], Rg = /* @__PURE__ */ s("svg", {
  class: "inline-block self-center w-5 h-5 -mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), Ug = ["aria-labelledby"], Bg = {
  key: 0,
  class: "input-group input-group-sm mb-2 pb-2 border-b"
}, Qg = /* @__PURE__ */ s("span", { class: "input-group-text" }, [
  /* @__PURE__ */ s("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "w-5 h-5"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Vg = {
  key: 1,
  class: "pb-2 mb-2 space-x-1 space-y-2 border-b dark:border-gray-500"
}, Hg = { class: "text-gray-900 dark:text-gray-50 flex gap-1 w-max" }, Gg = ["checked", ".indeterminate"], Wg = /* @__PURE__ */ s("span", { class: "my-auto" }, "Select all", -1), Fg = { class: "scroll-area max-h-48" }, qg = { class: "space-x-1" }, Jg = ["id", "onUpdate:modelValue", "value"], Kg = ["for"], Xg = { class: "pt-4 space-y-2" }, Zg = ["onClick"], ev = ["onClick"];
function tv(e, t, n, r, o, i) {
  const a = ye("floating-ui"), c = lt("uid");
  return u(), ve(a, {
    "data-id": "sds-filter-by-dropdown",
    placement: e.placement,
    "popper-class": `absolute border shadow-lg rounded-md bg-gray-100 dark:border-gray-600 dark:bg-gray-700 w-72 ${e.zIndexClass}`,
    "arrow-class": "absolute bg-gray-100 border dark:border-gray-600 dark:bg-gray-700 w-3 h-3 rotate-45",
    "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
    "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
    "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
    "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0",
    shift: ""
  }, {
    trigger: te(({ isOpen: l, toggle: d }) => [
      ne((u(), f("button", {
        ref: "button",
        class: L(e.variantClass),
        type: "button",
        "aria-haspopup": "true",
        "aria-expanded": l,
        onClick: (y) => {
          d(), e.resetTmpOptions();
        }
      }, [
        j(e.$slots, "title", {}, () => [
          s("span", null, M(e.title), 1)
        ]),
        Rg
      ], 10, Yg)), [
        [c]
      ])
    ]),
    default: te(({ close: l }) => [
      s("div", {
        class: "p-2",
        "aria-orientation": "vertical",
        "aria-labelledby": e.button && e.button.id || void 0
      }, [
        e.enableFilter ? (u(), f("div", Bg, [
          ne(s("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (d) => e.filterText = d),
            type: "text",
            class: "form-control",
            placeholder: "Type to filter"
          }, null, 512), [
            [it, e.filterText]
          ]),
          Qg
        ])) : w("", !0),
        e.enableFilter ? w("", !0) : (u(), f("div", Vg, [
          s("label", Hg, [
            s("input", {
              type: "checkbox",
              class: "my-auto",
              checked: e.allSelected,
              ".indeterminate": e.indeterminate,
              onClick: t[1] || (t[1] = (d) => e.toggleSelect())
            }, null, 8, Gg),
            Wg
          ])
        ])),
        s("div", Fg, [
          s("ul", null, [
            (u(!0), f(N, null, A(e.filteredTmpOptions, (d) => (u(), f("li", {
              key: d.id
            }, [
              s("div", qg, [
                ne(s("input", {
                  id: `filter_by_dropdown_selection_list_${d.id}`,
                  "onUpdate:modelValue": (y) => d.selected = y,
                  type: "checkbox",
                  class: "focus:ring-0",
                  value: d.id
                }, null, 8, Jg), [
                  [Ns, d.selected]
                ]),
                s("label", {
                  for: `filter_by_dropdown_selection_list_${d.id}`,
                  class: "text-gray-900 dark:text-gray-50 ml-1"
                }, M(d.text), 9, Kg)
              ])
            ]))), 128))
          ])
        ]),
        s("div", Xg, [
          s("button", {
            class: "btn btn-blue btn-block btn-sm",
            onClick: (d) => {
              e.saveSelections(), l();
            }
          }, " Apply filter ", 8, Zg),
          s("button", {
            class: "btn btn-default btn-block btn-sm",
            onClick: (d) => {
              e.cancelSelections(), l();
            }
          }, " Cancel ", 8, ev)
        ])
      ], 8, Ug)
    ]),
    _: 3
  }, 8, ["placement", "popper-class"]);
}
const Rn = /* @__PURE__ */ E(Ag, [["render", tv]]);
Rn.install = (e) => {
  e.component(Rn.name, Rn);
};
Pe.install = (e) => {
  e.component(Pe.name, Pe);
};
const nv = _({
  name: "SdsCharacterCounter",
  props: {
    currentValue: { type: Number, default: 0 },
    maxValue: { type: Number, default: 0 }
  },
  setup(e) {
    return {
      count: B(() => e.maxValue - e.currentValue)
    };
  }
});
function rv(e, t, n, r, o, i) {
  return u(), f("div", {
    "data-id": "sds-character-counter",
    class: L({ "text-danger": e.count < 0 })
  }, M(e.count.toLocaleString()), 3);
}
const ll = /* @__PURE__ */ E(nv, [["render", rv]]), ov = _({
  name: "SdsInput",
  components: {
    CharacterCounter: ll
  },
  props: {
    modelValue: { type: String, default: "" },
    countCharacters: { type: Boolean, default: !1 },
    maxlength: { type: Number, default: 524288 },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    valid: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  computed: {
    text: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  }
}), av = { "data-id": "sds-input" }, iv = ["type", "maxlength", "placeholder", "autofocus", "disabled", "readonly", "required"];
function sv(e, t, n, r, o, i) {
  const a = ye("character-counter");
  return u(), f("div", av, [
    ne(s("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (c) => e.text = c),
      class: L(["form-control", { valid: e.valid, invalid: e.invalid }]),
      type: e.type,
      maxlength: e.maxlength,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      required: e.required
    }, null, 10, iv), [
      [pl, e.text]
    ]),
    e.countCharacters ? (u(), ve(a, {
      key: 0,
      class: "text-right text-gray-500",
      "current-value": e.text.length,
      "max-value": e.maxlength
    }, null, 8, ["current-value", "max-value"])) : w("", !0)
  ]);
}
const Un = /* @__PURE__ */ E(ov, [["render", sv]]);
Un.install = (e) => {
  e.component(Un.name, Un);
};
const lv = _({
  name: "SdsLink",
  props: {
    variant: { type: String, default: "" },
    external: { type: Boolean, default: !1 },
    cta: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = B(() => e.variant !== "" || e.cta ? "link" : ""), n = B(() => {
      switch (e.variant) {
        case "primary":
          return "link-primary";
        case "secondary":
          return "link-secondary";
        case "tertiary":
          return "link-tertiary";
        case "danger":
          return "link-danger";
        case "light":
          return "link-light";
        case "dark":
          return "link-dark";
        default:
          return "";
      }
    }), r = B(() => e.cta ? "link-cta" : ""), o = B(() => e.disabled ? "disabled" : "");
    return { linkClass: t, variantClass: n, ctaClass: r, disabledClass: o };
  }
}), uv = ["target", "rel", "tabindex"];
function cv(e, t, n, r, o, i) {
  return u(), f("a", {
    "data-id": "sds-link",
    target: e.external ? "_blank" : void 0,
    rel: e.external ? "noopener noreferrer" : void 0,
    class: L([e.linkClass, e.variantClass, e.ctaClass, e.disabledClass]),
    tabindex: e.disabled ? -1 : void 0
  }, [
    j(e.$slots, "default")
  ], 10, uv);
}
const St = /* @__PURE__ */ E(lv, [["render", cv]]), fv = _({
  name: "SdsPopover",
  components: {
    FloatingUi: Pe
  },
  props: {
    zIndex: { type: String, required: !1, default: "50" },
    variant: { type: String, default: "dark" },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    size: { type: String, default: "sm" },
    strategy: { type: String, default: "absolute" },
    placement: { type: String, default: "top" },
    disabled: { type: Boolean, default: !1 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    },
    variantClass() {
      switch (this.variant) {
        case "dark":
          return "bg-dark text-light";
        case "light":
          return "bg-light text-dark";
        default:
          return "bg-dark text-light";
      }
    },
    variantArrowClass() {
      switch (this.variant) {
        case "dark":
          return "bg-dark";
        case "light":
          return "bg-light";
        default:
          return "bg-dark";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "w-32";
        case "md":
          return "w-48";
        case "lg":
          return "w-56";
        case "xl":
          return "w-72";
        case "auto":
          return "w-auto";
        default:
          return "w-32";
      }
    }
  }
}), dv = ["onMouseover", "onMouseleave"], yv = ["onMouseover", "onMouseout"];
function pv(e, t, n, r, o, i) {
  const a = ye("floating-ui");
  return u(), ve(a, {
    "data-id": "sds-tooltip",
    strategy: e.strategy,
    placement: e.placement,
    disabled: e.disabled,
    "will-open": e.willOpen,
    "will-close": e.willClose,
    "popper-class": `absolute text-xs shadow rounded-lg text-center ${e.variantClass} ${e.sizeClass} ${e.zIndexClass}`,
    "arrow-class": `absolute w-2 h-2 rotate-45 ${e.variantArrowClass}`,
    "placement-top-arrow-class": "-bottom-1",
    "placement-right-arrow-class": "-left-1",
    "placement-bottom-arrow-class": "-top-1",
    "placement-left-arrow-class": "-right-1",
    "disable-animation": "",
    shift: ""
  }, {
    trigger: te(({ open: c, close: l }) => [
      s("div", {
        onMouseover: (d) => c(e.openDelay),
        onMouseleave: (d) => l(e.closeDelay)
      }, [
        j(e.$slots, "trigger")
      ], 40, dv)
    ]),
    default: te(({ open: c, close: l, toggle: d, isOpen: y }) => [
      s("div", {
        class: "p-2",
        onMouseover: (m) => c(),
        onMouseout: (m) => l(e.closeDelay)
      }, [
        j(e.$slots, "default", {
          close: l,
          open: c,
          toggle: d,
          isOpen: y
        })
      ], 40, yv)
    ]),
    _: 3
  }, 8, ["strategy", "placement", "disabled", "will-open", "will-close", "popper-class", "arrow-class"]);
}
const jt = /* @__PURE__ */ E(fv, [["render", pv]]), hv = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4NTEuOSAxNDQuMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODUxLjkgMTQ0LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxMy41LDE4LjcgMjEzLjUsNDUuNSAyMTgsNDUuNSAyMTgsNDcuMyAyMDAuMSw0Ny4zIDIwMC4xLDQ1LjUgMjA0LjYsNDUuNSAyMDQuNiwyMC42IDIwMS4xLDIwLjYgCgkJMjAxLjEsMTguNyAJIi8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzYuOSwxLjRoLTEuNmMtMC4xLDEuNC0wLjgsMi0yLjIsMkMzMC40LDMuNCwyNi4zLDAsMjEuNiwwQzguMSwwLDAsMTMuMywwLDI1YzAsMTEuOCw3LjgsMjMuNCwyMC44LDIzLjQKCQljNy45LDAsMTAuOC0zLjcsMTIuOS0zLjdjMS40LDAsMS42LDEuMiwxLjYsMi43aDEuOFYzMS4yaC0xLjhsLTAuNCwyLjJjLTAuOSw1LjMtNS4xLDEzLjItMTMuNSwxMy4yYy03LjUsMC0xMC40LTYuNS0xMC40LTIyLjQKCQlDMTEsNy40LDE1LDEuOCwyMS42LDEuOGM3LjUsMCwxMi42LDguNCwxMy43LDE1LjFoMS42VjEuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MCwzOS42Yy0wLjEsMy40LTIuMSw2LjMtNS4xLDYuM2MtNC40LDAtNC42LTMuNy00LjYtNi42YzAtMy40LDAuNC01LjcsNC42LTYuMmw1LjEtMC41VjM5LjZ6IE03MS44LDQxLjcKCQljMCwxLjctMS4xLDMuNi0xLjgsMy42Yy0xLjIsMC0xLjQtMS4yLTEuNC0zLjJWMjcuMmMwLTcuNC02LjktOS4yLTEzLjYtOS4yYy02LjUsMC0xMS4yLDMuMi0xMS4yLDYuOGMwLDIuMywxLjMsNC4yLDQuMiw0LjIKCQljMi41LDAsNC0xLjYsNC0zLjljMC0zLjMtMy40LTMuMy0zLjQtMy40YzAtMS41LDMuOC0xLjksNi0xLjljNC45LDAsNS41LDEuOCw1LjUsNS43djUuNGwtNi40LDAuNWMtNS45LDAuNS0xMi4zLDItMTIuMyw4LjgKCQljMCw1LjYsNS4xLDcuOSwxMCw3LjljMi41LDAsNy0xLDguNy00LjFjMS4yLDIuNywzLjYsNC4xLDYuNSw0LjFjNC4yLDAsNi45LTIuNSw2LjktNi4zSDcxLjh6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjY3NC41LDE4LjYgNjc0LjUsNDUuNCA2NzksNDUuNCA2NzksNDcuMiA2NjEuMSw0Ny4yIDY2MS4xLDQ1LjQgNjY1LjYsNDUuNCA2NjUuNiwyMC41IDY2MS4xLDIwLjUgCgkJNjYxLjEsMTguNiAJIi8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg2LDMyLjVsMTAuNy0zMC43aDE0LjhsMCwxLjhoLTQuMnY0Mmg0LjJ2MS44aC0xNy44di0xLjhoNC4zVjRoLTAuMWwtMTUuMSw0My4zSDI4MUwyNjUuNSwzLjJoLTAuMVY0MAoJCWMwLDUuMiwxLjQsNS41LDQuOSw1LjVoMC4ydjEuOGgtMTEuMnYtMS44bDAsMGMzLjcsMCw0LjQtMi4yLDQuNC00Ljl2LTM3aC00LjRWMS43aDE2LjNMMjg2LDMyLjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIxLjgsMjkuOXYtNC40YzAtNC4zLDEuOS01LjcsNC4xLTUuN2MzLjEsMCw0LjEsMi4xLDQuMSw1Ljd2NC40SDMyMS44eiBNMzIxLjgsMzEuNmgxNy45CgkJYy0wLjEtNy02LjUtMTMuNy0xMy40LTEzLjZjLTcuNiwwLTE0LjMsNi42LTE0LjMsMTUuNGMwLDguNCw2LjIsMTQuNywxNC41LDE0LjdjOCwwLDExLjktNC45LDEzLjQtMTEuM2gtMS44CgkJYy0xLjQsNi00LjYsOS41LTkuNiw5LjVjLTYsMC02LjctNC43LTYuNy05LjFWMzEuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OTEuMSwyOS44di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzMuMSwwLDQuMSwyLjEsNC4xLDUuN3Y0LjRINTkxLjF6IE01OTEuMSwzMS41SDYwOQoJCWMtMC4xLTctNi41LTEzLjctMTMuNC0xMy42Yy03LjYsMC0xNC4zLDYuNi0xNC4zLDE1LjRjMCw4LjQsNi4yLDE0LjcsMTQuNSwxNC43YzgsMCwxMS45LTQuOSwxMy40LTExLjNoLTEuOAoJCWMtMS40LDYtNC42LDkuNS05LjYsOS41Yy02LDAtNi43LTQuNy02LjctOS4xVjMxLjV6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMzOS44LDEuOCAzMzkuOCwzLjQgMzQ0LjMsMy40IDM0NC4zLDQ1LjUgMzM5LjgsNDUuNSAzMzkuOCw0Ny4zIDM1Ny43LDQ3LjMgMzU3LjcsNDUuNSAzNTMuMyw0NS41IAoJCTM1My4zLDEuOCAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM1OSwxLjggMzU5LDMuNCAzNjMuNCwzLjQgMzYzLjQsNDUuNSAzNTksNDUuNSAzNTksNDcuMyAzNzYuOSw0Ny4zIDM3Ni45LDQ1LjUgMzcyLjQsNDUuNSAzNzIuNCwxLjggCgkJCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM5Ny40LDM5LjVjMCw0LjktMiw2LjktNS4zLDYuOWMtMy4zLDAtNS4zLTItNS4zLTYuOVYyNi43YzAtNC45LDItNi45LDUuMy02LjljMy4zLDAsNS4zLDIsNS4zLDYuOVYzOS41egoJCSBNNDA3LjUsMzMuMWMwLTguOS02LjktMTUtMTUuNC0xNWMtOC42LDAtMTUuNCw2LjItMTUuNCwxNWMwLDguOSw2LjksMTUsMTUuNCwxNUM0MDAuNyw0OC4xLDQwNy41LDQxLjksNDA3LjUsMzMuMSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1NC4xLDMuM2g0LjV2MjguOGMwLDEwLDYuOSwxNi4xLDE3LjUsMTYuMWMxMS45LDAsMTcuMS02LjMsMTcuMS0xNS44VjcuOGMwLTMuOCwxLTQuNSwzLjQtNC41aDEuM1YxLjUKCQloLTExLjR2MS43aDAuOGMzLjMsMCwzLjgsMSwzLjgsNC44djI1YzAsOC44LTUuNSwxMi44LTExLDEyLjhjLTkuNSwwLTExLjMtNi40LTExLjktMTQuNlYzLjNoNC4yVjEuNWgtMTguM1YzLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTY2LjMsNDcuOWgxLjdsOS42LTIyLjdjMS45LTQuMiwzLTQuOCw0LjUtNC44aDAuNnYtMS44aC0xMC4xdjEuOGgxLjJjMS45LDAsMi43LTAuMSwyLjcsMS42CgkJYzAsMS0wLjMsMi4xLTEuMSwzLjlsLTQuNCwxMC40TDU2NCwyMC40aDMuNnYtMS44aC0xNi4zdjEuOGgzTDU2Ni4zLDQ3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjM4LjYsNDcuOWgxLjVjMC4zLTEsMS0xLjYsMi4zLTEuNmMxLjcsMCwzLjcsMS42LDcuMywxLjZjNi4yLDAsMTAuNC01LjMsMTAuNC0xMC42YzAtNy45LTUuNC04LjUtMTIuNC05LjUKCQljLTMuNi0wLjUtNS43LTEtNS43LTMuOWMwLTMsMi43LTQuMyw2LjItNC4zYzQuOSwwLDYuNywzLjIsOC40LDcuNGgxLjVsMC05LjJoLTEuNWMwLDAuOC0wLjcsMS40LTEuOSwxLjRjLTIuMSwwLTMuOC0xLjQtNi43LTEuNAoJCWMtNi41LDAtOS43LDUuNS05LjcsOS43YzAsOC40LDYuNCw5LjEsMTEuMyw5LjdjNC43LDAuNiw2LjQsMC45LDYuNCwzLjljMCwzLjQtMi45LDUtNi40LDVjLTQuOSwwLTguMy00LjMtOS41LTloLTEuNVY0Ny45eiIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1NDksMTguNiA1NDksNDUuNCA1NTMuNSw0NS40IDU1My41LDQ3LjIgNTM1LjYsNDcuMiA1MzUuNiw0NS40IDU0MC4xLDQ1LjQgNTQwLjEsMjAuNSA1MzUuNiwyMC41IAoJCTUzNS42LDE4LjYgCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU0MC4xLDkuN2MwLDIuNSwyLDQuNSw0LjUsNC41YzIuNSwwLDQuNS0yLDQuNS00LjVjMC0yLjUtMi00LjUtNC41LTQuNUM1NDIsNS4yLDU0MC4xLDcuMiw1NDAuMSw5LjciLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NjUuNiw5LjdjMCwyLjUsMiw0LjUsNC41LDQuNWMyLjUsMCw0LjUtMiw0LjUtNC41YzAtMi41LTItNC41LTQuNS00LjVDNjY3LjYsNS4yLDY2NS42LDcuMiw2NjUuNiw5LjciLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDkuOCwyOS45di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzMuMSwwLDQuMSwyLjEsNC4xLDUuN3Y0LjRIMTQ5Ljh6IE0xNDkuOCwzMS42aDE3LjkKCQljLTAuMS03LTYuNS0xMy43LTEzLjQtMTMuNmMtNy42LDAtMTQuMyw2LjYtMTQuMywxNS40YzAsOC40LDYuMiwxNC43LDE0LjUsMTQuN2M4LDAsMTEuOS00LjksMTMuNC0xMS4zaC0xLjgKCQljLTEuNCw2LTQuNiw5LjUtOS42LDkuNWMtNiwwLTYuNy00LjctNi43LTkuMVYzMS42eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyOCwyOS45di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzIuMywwLDQuMSwxLjMsNC4xLDUuN3Y0LjRIMjI4eiBNMjI4LDMxLjZoMTcuOQoJCWMtMC4xLTctNi41LTEzLjctMTMuNC0xMy42Yy03LjYsMC0xNC4zLDYuNi0xNC4zLDE1LjRjMCw4LjQsNi4yLDE0LjcsMTQuNSwxNC43YzgsMCwxMS45LTQuOSwxMy40LTExLjNoLTEuOAoJCWMtMS40LDYtNC42LDkuNS05LjYsOS41Yy02LDAtNi43LTQuNy02LjctOS4xVjMxLjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTI5LjgsNDUuNVYyOGMwLTctMy0xMC4zLTkuMS0xMC4zYy00LjMsMC04LjcsMi41LTEwLjUsNi4zaDB2LTUuMmgtMTMuNHYxLjdoNC41djI1aC00LjV2MS44SDUxNHYtMS44aC0zLjgKCQlWMjguNGMwLjYtMi40LDMuNi04LDcuMS04YzIuNCwwLDMuNSwwLjgsMy41LDUuMnYxOS45aC0zLjd2MS44aDE3LjF2LTEuOEg1MjkuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjAuOSwxOC44djUuMmgwYzEuOC0zLjgsNi4yLTYuMywxMC41LTYuM2M2LjIsMCw5LjEsMy4zLDkuMSwxMC4zdjE3LjVoNC41djEuOGgtMTcuMXYtMS44aDMuN1YyNS43CgkJYzAtNC4zLTEuMi01LjItMy41LTUuMmMtMy41LDAtNi42LDUuNi03LjEsOHYxNy4xaDMuOHYxLjhoLTE3LjJ2LTEuOGg0LjV2LTI1aC00LjV2LTEuN0g0MjAuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMzUuNSw0NS42VjI4LjFjMC03LTMtMTAuMy05LjEtMTAuM2MtNC4zLDAtOC43LDIuNS0xMC41LDYuM2gwdi01LjJoLTEzLjR2MS43aDQuNXYyNWgtNC41djEuOGgxNy4ydi0xLjgKCQloLTMuOFYyOC41YzAuNi0yLjQsMy42LTgsNy4xLThjMi40LDAsMy41LDAuOCwzLjUsNS4ydjE5LjloLTMuN3YxLjhIMTQwdi0xLjhIMTM1LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA0LjYsOS44YzAsMi41LDIsNC41LDQuNSw0LjVjMi41LDAsNC41LTIsNC41LTQuNWMwLTIuNS0yLTQuNS00LjUtNC41QzIwNi42LDUuNCwyMDQuNiw3LjQsMjA0LjYsOS44Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzE4LDE4LjZ2MS45YzIuOCwwLDQsMC4zLDQsMS41YzAsMS0wLjMsMi4xLTEuMSwzLjlsLTQuNCwxMC40bC03LTE1LjhoMy43di0xLjloLTIyLjNWNC43aC0xLjIKCQljMCw2LjktNC43LDEzLjktMTEuMiwxMy45djEuOWgzLjR2MjAuMWMwLDYuMiw1LjMsNy40LDcuMSw3LjRjNCwwLDYuNi0xLjYsOC42LTVsLTEuNC0wLjhjLTAuOCwxLjItMS44LDIuNy0zLjQsMi43CgkJYy0xLjMsMC0yLTAuOS0yLTMuMVYyMC41aDlsMTEuOCwyNy4zbC00LjEsOS43bDAsMGMwLDAsMCwwLDAsMGwwLDBjLTAuMSwwLjItMC4zLDAuMy0wLjUsMC4zYy0wLjIsMC0wLjQtMC4yLTAuNS0wLjRjMCwwLDAsMCwwLDAKCQljLTAuNS0xLjktMi4yLTMuMi00LjMtMy4yYy0yLjUsMC00LjUsMi00LjUsNC41YzAsMS43LDEsMy4yLDIuNCw0YzAsMCwwLDAsMCwwYzAsMCwwLjEsMCwwLjEsMC4xYzAuMSwwLDAuMiwwLjEsMC4zLDAuMQoJCWMwLjUsMC4yLDEsMC4zLDEuNiwwLjNjMy44LDAuMyw1LjctMi41LDctNS4zYzAuMy0wLjYsMC42LTEuMywwLjgtMS45YzAuNi0xLjQsMS42LTMuNywyLjctNi41bDAsMGwxLjEtMi42bDAsMGw5LjEtMjEuNgoJCWMxLjktNC4yLDIuNy00LjgsNS00LjhoMHYtMS45SDcxOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NS45LDE3LjdjLTQuMSwwLTcuMywyLjktOC42LDYuMWgtMC4xdi00LjlINzR2MS44aDQuNXYyNC45SDc0djEuOGgxOS40di0xLjhoLTZ2LTE0YzAtNC4yLDEuMS04LjQsMy44LTEwLjgKCQljMC4yLTAuMSwwLjQtMC4xLDAuNi0wLjFjMC4yLDAuMSwwLjMsMC4zLDAuMywwLjZsMCwwYy0wLjIsMC41LTAuMywxLjEtMC4zLDEuOGMtMC4xLDIuNCwxLjksNC4yLDQuNCw0LjJjMy4xLDAsNC45LTIuMyw0LjktNC43CgkJQzEwMS4xLDE5LjYsOTksMTcuNyw5NS45LDE3Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkzLjUsMTkuOGMwLjEsMCwwLjMtMC4xLDAuNCwwYzAuMSwwLjEsMC4xLDAuMiwwLDAuNGwwLDBjLTAuNCwwLjctMC41LDEuNS0wLjIsMi40YzAuMywwLjksMS4xLDEuNiwyLDEuOAoJCWMxLjksMC40LDMuNS0wLjksMy41LTIuN2MwLTEuMS0wLjctMi0xLjUtMi41Yy0wLjgtMC41LTEuOC0wLjgtMi45LTAuOGMtMS43LDAtMy41LDAuOS00LjgsMmMwLDAsMCwwLDAsMAoJCWMtMC4zLTAuMi0wLjYtMC40LTAuOS0wLjZjLTEuOC0xLTQuMS0xLjctNy4yLTEuN2MtNS40LDAtMTEuMywzLjYtMTEuMyw5LjVjMCwzLjYsMS45LDYuNCw1LjQsNy45djAuMWMtMi41LDAuMy02LjUsMi4xLTYuNSw3LjUKCQljMCwzLjIsMS41LDUuNyw0LjIsNi41djAuMWMtMi42LDAuNy01LjYsMy4zLTUuNiw2LjRjMCw0LjgsNS42LDguNSwxMi44LDguNWM5LDAsMTQuOS02LjEsMTQuOS0xNGMwLTYuMy0zLjEtOS4xLTkuNS05aC0xMC44CgkJYy0xLjYsMC0yLjctMC4xLTIuNy0xLjhjMC0xLjYsMi41LTMuNCw0LjktMy40YzAuNCwwLDEuMSwwLjMsMS4zLDAuNGMwLjgsMC4zLDEuNiwwLjQsMi43LDAuNGM1LjYsMCwxMS41LTMuMiwxMS41LTkuMwoJCWMwLTEuOS0wLjgtNC41LTIuNC02LjFjLTAuMS0wLjEtMC4xLTAuMiwwLTAuM2MwLjYtMC41LDEuMy0wLjksMS43LTEuMUMxOTMsMjAsMTkzLjIsMTkuOSwxOTMuNSwxOS44TDE5My41LDE5Ljh6IE0xODQuOSw0OS42CgkJYzYuNSwwLDguMiwwLjMsOC4yLDQuMmMwLDQuNy01LjgsOS4xLTEyLjMsOS4xYy01LjgsMC04LjYtMy42LTguOC02LjdjMC0yLjksMS40LTQuNywzLjItNi42SDE4NC45eiBNMTg2LDI3LjUKCQljMCw3LjUtMS43LDcuOC00LjEsNy44Yy0yLjYsMC00LTAuNS00LThjMC01LjMsMC42LTcuNSw0LTcuNUMxODQuOSwxOS44LDE4NS45LDIwLDE4NiwyNy41TDE4NiwyNy41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYzMS43LDE3LjVjLTQuMSwwLTcuMywyLjktOC42LDYuMUg2MjN2LTQuOWgtMTMuM3YxLjhoNC41djI0LjloLTQuNXYxLjhoMTkuNHYtMS44aC02di0xNAoJCWMwLTQuMiwxLjEtOC40LDMuOC0xMC44YzAuMi0wLjEsMC40LTAuMSwwLjYtMC4xYzAuMiwwLjEsMC4zLDAuMywwLjMsMC42bDAsMGMtMC4yLDAuNS0wLjMsMS4xLTAuMywxLjhjLTAuMSwyLjQsMS45LDQuMiw0LjQsNC4yCgkJYzMuMSwwLDQuOS0yLjMsNC45LTQuN0M2MzYuOCwxOS4zLDYzNC43LDE3LjUsNjMxLjcsMTcuNXoiLz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC4yLDExNi42YzAsMy45LTEuNCw2LjktNC4zLDkuMmMtMi44LDIuMy02LjYsMy40LTExLjMsMy40Yy01LjcsMC0xMC0wLjYtMTMtMS45di0zLjIKCQljMy4zLDEuNCw3LjYsMi4xLDEyLjgsMi4xYzMuOCwwLDYuOC0wLjksOS4xLTIuNmMyLjItMS43LDMuMy00LDMuMy02LjljMC0xLjgtMC40LTMuMi0xLjEtNC40Yy0wLjctMS4yLTEuOS0yLjItMy42LTMuMgoJCWMtMS43LTEtNC4xLTItNy40LTMuMWMtNC43LTEuNi04LTMuNC05LjgtNS4zYy0xLjgtMS45LTIuNy00LjQtMi43LTcuNmMwLTMuNSwxLjQtNi4zLDQuMS04LjVjMi43LTIuMiw2LjItMy4zLDEwLjUtMy4zCgkJYzQuNCwwLDguNSwwLjgsMTIuMywyLjVsLTEuMiwyLjhjLTMuOS0xLjYtNy41LTIuNC0xMS0yLjRjLTMuNCwwLTYuMiwwLjgtOC4yLDIuNHMtMywzLjctMyw2LjVjMCwxLjcsMC4zLDMuMSwwLjksNC4yCgkJYzAuNiwxLjEsMS42LDIuMSwzLjEsM2MxLjQsMC45LDMuOSwxLjksNy4zLDMuMmMzLjYsMS4yLDYuMywyLjUsOC4yLDMuNmMxLjgsMS4yLDMuMSwyLjUsNCw0QzI5LjgsMTEyLjcsMzAuMiwxMTQuNSwzMC4yLDExNi42eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2LjgsMTExLjJjMCw1LjYtMS40LDEwLTQuMSwxMy4yYy0yLjcsMy4yLTYuNSw0LjctMTEuMyw0LjdjLTMsMC01LjctMC43LTgtMi4yYy0yLjMtMS41LTQuMS0zLjYtNS4zLTYuMwoJCWMtMS4yLTIuNy0xLjgtNS45LTEuOC05LjVjMC01LjYsMS40LTEwLDQuMS0xMy4yYzIuNy0zLjEsNi41LTQuNywxMS4yLTQuN2M0LjcsMCw4LjUsMS42LDExLjIsNC44CgkJQzY1LjUsMTAxLjMsNjYuOCwxMDUuNyw2Ni44LDExMS4yeiBNMzkuNiwxMTEuMmMwLDQuNywxLDguNCwzLjEsMTEuMWMyLjEsMi43LDUsNCw4LjgsNHM2LjgtMS4zLDguOC00YzIuMS0yLjcsMy4xLTYuNCwzLjEtMTEuMQoJCWMwLTQuOC0xLjEtOC41LTMuMi0xMS4xYy0yLjEtMi42LTUuMS0zLjktOC45LTMuOXMtNi43LDEuMy04LjgsMy45QzQwLjYsMTAyLjgsMzkuNiwxMDYuNSwzOS42LDExMS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4LjUsOTYuOGgtOC4xdjMxLjhoLTMuMVY5Ni44aC02LjR2LTEuOGw2LjQtMS4ydi0yLjdjMC00LjIsMC44LTcuMywyLjMtOS4zYzEuNi0yLDQuMS0zLDcuNi0zCgkJYzEuOSwwLDMuOCwwLjMsNS43LDAuOWwtMC43LDIuN2MtMS43LTAuNS0zLjQtMC44LTUtMC44Yy0yLjUsMC00LjIsMC43LTUuMiwyLjJzLTEuNSwzLjgtMS41LDcuMVY5NGg4LjFWOTYuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDYuMywxMjYuNGMyLDAsMy43LTAuMiw1LjItMC41djIuNWMtMS41LDAuNS0zLjMsMC44LTUuMywwLjhjLTMsMC01LjMtMC44LTYuNy0yLjQKCQljLTEuNC0xLjYtMi4yLTQuMi0yLjItNy43Vjk2LjhoLTUuMXYtMS44bDUuMS0xLjRsMS42LTcuOGgxLjZWOTRoMTAuMXYyLjdoLTEwLjF2MjEuOGMwLDIuNiwwLjUsNC42LDEuNCw1LjkKCQlDMTAyLjgsMTI1LjgsMTA0LjMsMTI2LjQsMTA2LjMsMTI2LjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ3LjUsMTI4LjVsLTcuNi0yMy4xYy0wLjUtMS42LTEuMS0zLjktMS45LTYuOWgtMC4ybC0wLjcsMi4zbC0xLjQsNC42bC03LjcsMjNIMTI1TDExNS4xLDk0aDMuNGw1LjUsMjAKCQljMS4zLDUsMi4xLDguNiwyLjUsMTAuOWgwLjJjMS4yLTUsMi4yLTguMiwyLjctOS45bDcuMS0yMWgyLjlsNi44LDIxYzEuNSw1LDIuNSw4LjMsMi44LDkuOWgwLjJjMC4yLTEuNCwxLTUuMSwyLjUtMTFMMTU3LDk0aDMuMgoJCWwtOS40LDM0LjVIMTQ3LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg3LDEyOC41bC0wLjgtNS41SDE4NmMtMS43LDIuMi0zLjUsMy44LTUuMyw0LjdjLTEuOCwwLjktNCwxLjQtNi41LDEuNGMtMy40LDAtNi0wLjktNy45LTIuNgoJCWMtMS45LTEuNy0yLjgtNC4xLTIuOC03LjJjMC0zLjQsMS40LTYsNC4yLTcuOGMyLjgtMS45LDYuOS0yLjgsMTIuMi0zbDYuNi0wLjJ2LTIuM2MwLTMuMy0wLjctNS44LTItNy40Yy0xLjMtMS43LTMuNS0yLjUtNi40LTIuNQoJCWMtMy4yLDAtNi41LDAuOS05LjksMi43bC0xLjItMi43YzMuOC0xLjgsNy41LTIuNywxMS4yLTIuN2MzLjgsMCw2LjYsMSw4LjUsM2MxLjksMiwyLjgsNSwyLjgsOS4ydjIyLjlIMTg3eiBNMTc0LjMsMTI2LjMKCQljMy43LDAsNi42LTEuMSw4LjctMy4yYzIuMS0yLjEsMy4yLTUsMy4yLTguOFYxMTFsLTYsMC4zYy00LjgsMC4yLTguMywxLTEwLjQsMi4zYy0yLjEsMS4zLTMuMSwzLjMtMy4xLDZjMCwyLjIsMC43LDMuOCwyLDUKCQlDMTcwLDEyNS43LDE3MS45LDEyNi4zLDE3NC4zLDEyNi4zeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIxNS4xLDkzLjRjMS41LDAsMywwLjEsNC43LDAuNGwtMC42LDNjLTEuNC0wLjQtMi45LTAuNS00LjUtMC41Yy0yLjksMC01LjQsMS4yLTcuMiwzLjcKCQljLTEuOSwyLjUtMi44LDUuNi0yLjgsOS41djE5aC0zLjFWOTRoMi43bDAuMyw2LjJoMC4yYzEuNC0yLjUsMi45LTQuMyw0LjUtNS4zQzIxMC44LDkzLjksMjEyLjgsOTMuNCwyMTUuMSw5My40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNi42LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41SDIyNGMwLDQuNywxLjEsOC40LDMuMywxMC45YzIuMiwyLjUsNS4zLDMuNyw5LjMsMy43YzIsMCwzLjctMC4xLDUuMi0wLjQKCQljMS41LTAuMywzLjQtMC45LDUuNy0xLjh2Mi45Yy0xLjksMC44LTMuNywxLjQtNS40LDEuN1MyMzguNiwxMjkuMiwyMzYuNiwxMjkuMnogTTIzNS43LDk2LjJjLTMuMywwLTYsMS4xLTgsMy4zCgkJYy0yLDIuMi0zLjIsNS4zLTMuNSw5LjVoMjEuM2MwLTQtMC45LTcuMS0yLjYtOS40QzI0MS4yLDk3LjMsMjM4LjgsOTYuMiwyMzUuNyw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMC4xLDEyOC41aC0yNS40VjgyLjFoMjUuNHYzSDI3OHYxNy42aDIwLjl2M0gyNzh2MTkuOWgyMi4xVjEyOC41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzMS42LDEyOC41di0yMi40YzAtMy41LTAuNy02LTIuMi03LjZjLTEuNS0xLjYtMy43LTIuNC02LjgtMi40Yy00LjEsMC03LjEsMS05LjEsMy4xCgkJYy0xLjksMi4xLTIuOSw1LjUtMi45LDEwLjF2MTloLTMuMVY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkgzMzEuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzIuMyw5NHYyLjJsLTcuMSwwLjRjMS45LDIuNCwyLjksNSwyLjksNy44YzAsMy4zLTEuMSw2LTMuMyw4LjFjLTIuMiwyLjEtNS4yLDMuMS04LjksMy4xCgkJYy0xLjYsMC0yLjctMC4xLTMuMy0wLjJjLTEuMiwwLjctMi4yLDEuNC0yLjksMi4zYy0wLjcsMC45LTEsMS44LTEsMi44YzAsMS4xLDAuNCwxLjksMS4zLDIuNHMyLjIsMC44LDQuMiwwLjhoNgoJCWMzLjcsMCw2LjYsMC44LDguNiwyLjNjMiwxLjUsMywzLjcsMyw2LjdjMCwzLjYtMS41LDYuNC00LjQsOC40Yy0zLDItNy4yLDMtMTIuNiwzYy00LjMsMC03LjctMC44LTEwLjEtMi41Yy0yLjQtMS43LTMuNi00LTMuNi03CgkJYzAtMi40LDAuNy00LjMsMi4yLTUuOWMxLjUtMS42LDMuNS0yLjYsNi0zLjJjLTEtMC40LTEuOS0xLjEtMi41LTEuOWMtMC42LTAuOC0wLjktMS44LTAuOS0yLjhjMC0yLjMsMS41LTQuMyw0LjQtNi4xCgkJYy0yLTAuOC0zLjYtMi4xLTQuNy0zLjljLTEuMS0xLjgtMS43LTMuOC0xLjctNi4xYzAtMy40LDEuMS02LjIsMy4zLTguM2MyLjItMi4xLDUuMS0zLjEsOC45LTMuMWMyLjMsMCw0LDAuMiw1LjMsMC43SDM3Mi4zegoJCSBNMzQ0LjQsMTM0LjRjMCw0LjcsMy41LDcuMSwxMC42LDcuMWM5LjEsMCwxMy42LTIuOSwxMy42LTguN2MwLTIuMS0wLjctMy42LTIuMS00LjVjLTEuNC0wLjktMy43LTEuNC02LjktMS40aC01LjYKCQlDMzQ3LjUsMTI2LjksMzQ0LjQsMTI5LjQsMzQ0LjQsMTM0LjR6IE0zNDcsMTA0LjhjMCwyLjcsMC44LDQuNywyLjQsNi4yYzEuNiwxLjUsMy44LDIuMiw2LjUsMi4yYzIuOSwwLDUuMS0wLjcsNi42LTIuMgoJCXMyLjMtMy42LDIuMy02LjNjMC0yLjktMC44LTUuMS0yLjQtNi42cy0zLjgtMi4yLTYuNi0yLjJjLTIuOCwwLTQuOSwwLjgtNi41LDIuNEMzNDcuOCw5OS44LDM0NywxMDIsMzQ3LDEwNC44eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM4MC4yLDg0LjVjMC0yLDAuNy0zLDItM2MwLjcsMCwxLjIsMC4zLDEuNSwwLjhjMC40LDAuNSwwLjYsMS4zLDAuNiwyLjNjMCwxLTAuMiwxLjctMC42LDIuMwoJCWMtMC40LDAuNi0wLjksMC44LTEuNSwwLjhDMzgwLjksODcuNSwzODAuMiw4Ni41LDM4MC4yLDg0LjV6IE0zODMuOCwxMjguNWgtMy4xVjk0aDMuMVYxMjguNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjAuMiwxMjguNXYtMjIuNGMwLTMuNS0wLjctNi0yLjItNy42Yy0xLjUtMS42LTMuNy0yLjQtNi44LTIuNGMtNC4xLDAtNy4xLDEtOS4xLDMuMQoJCWMtMS45LDIuMS0yLjksNS41LTIuOSwxMC4xdjE5aC0zLjFWOTRoMi43bDAuNiw0LjdoMC4yYzIuMi0zLjYsNi4yLTUuNCwxMi01LjRjNy44LDAsMTEuNyw0LjIsMTEuNywxMi42djIyLjZINDIwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDQ2LjksMTI5LjJjLTUsMC04LjktMS41LTExLjctNC42Yy0yLjgtMy4xLTQuMi03LjQtNC4yLTEzYzAtNS41LDEuNC05LjksNC4xLTEzLjJjMi43LTMuMyw2LjQtNSwxMC45LTUKCQljNC4xLDAsNy4zLDEuNCw5LjYsNC4zYzIuMywyLjgsMy41LDYuNywzLjUsMTEuNnYyLjVoLTI0LjljMCw0LjcsMS4xLDguNCwzLjMsMTAuOWMyLjIsMi41LDUuMywzLjcsOS4zLDMuN2MyLDAsMy43LTAuMSw1LjItMC40CgkJYzEuNS0wLjMsMy40LTAuOSw1LjctMS44djIuOWMtMS45LDAuOC0zLjcsMS40LTUuNCwxLjdTNDQ4LjksMTI5LjIsNDQ2LjksMTI5LjJ6IE00NDYsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDNDUxLjUsOTcuMyw0NDkuMSw5Ni4yLDQ0Niw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4MS40LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41aC0yNC45YzAsNC43LDEuMSw4LjQsMy4zLDEwLjljMi4yLDIuNSw1LjMsMy43LDkuMywzLjdjMiwwLDMuNy0wLjEsNS4yLTAuNAoJCWMxLjUtMC4zLDMuNC0wLjksNS43LTEuOHYyLjljLTEuOSwwLjgtMy43LDEuNC01LjQsMS43UzQ4My40LDEyOS4yLDQ4MS40LDEyOS4yeiBNNDgwLjUsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDNDg2LDk3LjMsNDgzLjYsOTYuMiw0ODAuNSw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUxNSw5My40YzEuNSwwLDMsMC4xLDQuNywwLjRsLTAuNiwzYy0xLjQtMC40LTIuOS0wLjUtNC41LTAuNWMtMi45LDAtNS40LDEuMi03LjIsMy43CgkJYy0xLjksMi41LTIuOCw1LjYtMi44LDkuNXYxOWgtMy4xVjk0aDIuN2wwLjMsNi4yaDAuMmMxLjQtMi41LDIuOS00LjMsNC41LTUuM0M1MTAuOCw5My45LDUxMi43LDkzLjQsNTE1LDkzLjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTI0LjEsODQuNWMwLTIsMC43LTMsMi0zYzAuNywwLDEuMiwwLjMsMS41LDAuOGMwLjQsMC41LDAuNiwxLjMsMC42LDIuM2MwLDEtMC4yLDEuNy0wLjYsMi4zCgkJYy0wLjQsMC42LTAuOSwwLjgtMS41LDAuOEM1MjQuNyw4Ny41LDUyNC4xLDg2LjUsNTI0LjEsODQuNXogTTUyNy43LDEyOC41aC0zLjFWOTRoMy4xVjEyOC41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2NCwxMjguNXYtMjIuNGMwLTMuNS0wLjctNi0yLjItNy42Yy0xLjUtMS42LTMuNy0yLjQtNi44LTIuNGMtNC4xLDAtNy4xLDEtOS4xLDMuMQoJCWMtMS45LDIuMS0yLjksNS41LTIuOSwxMC4xdjE5SDU0MFY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkg1NjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjA1LjYsOTR2Mi4ybC03LjEsMC40YzEuOSwyLjQsMi45LDUsMi45LDcuOGMwLDMuMy0xLjEsNi0zLjMsOC4xYy0yLjIsMi4xLTUuMiwzLjEtOC45LDMuMQoJCWMtMS42LDAtMi43LTAuMS0zLjMtMC4yYy0xLjIsMC43LTIuMiwxLjQtMi45LDIuM2MtMC43LDAuOS0xLDEuOC0xLDIuOGMwLDEuMSwwLjQsMS45LDEuMywyLjRzMi4yLDAuOCw0LjIsMC44aDYKCQljMy43LDAsNi42LDAuOCw4LjYsMi4zYzIsMS41LDMsMy43LDMsNi43YzAsMy42LTEuNSw2LjQtNC40LDguNGMtMywyLTcuMiwzLTEyLjYsM2MtNC4zLDAtNy43LTAuOC0xMC4xLTIuNWMtMi40LTEuNy0zLjYtNC0zLjYtNwoJCWMwLTIuNCwwLjctNC4zLDIuMi01LjljMS41LTEuNiwzLjUtMi42LDYtMy4yYy0xLTAuNC0xLjktMS4xLTIuNS0xLjljLTAuNi0wLjgtMC45LTEuOC0wLjktMi44YzAtMi4zLDEuNS00LjMsNC40LTYuMQoJCWMtMi0wLjgtMy42LTIuMS00LjctMy45Yy0xLjEtMS44LTEuNy0zLjgtMS43LTYuMWMwLTMuNCwxLjEtNi4yLDMuMy04LjNjMi4yLTIuMSw1LjEtMy4xLDguOS0zLjFjMi4zLDAsNCwwLjIsNS4zLDAuN0g2MDUuNnoKCQkgTTU3Ny43LDEzNC40YzAsNC43LDMuNSw3LjEsMTAuNiw3LjFjOS4xLDAsMTMuNi0yLjksMTMuNi04LjdjMC0yLjEtMC43LTMuNi0yLjEtNC41Yy0xLjQtMC45LTMuNy0xLjQtNi45LTEuNGgtNS43CgkJQzU4MC45LDEyNi45LDU3Ny43LDEyOS40LDU3Ny43LDEzNC40eiBNNTgwLjMsMTA0LjhjMCwyLjcsMC44LDQuNywyLjQsNi4yYzEuNiwxLjUsMy44LDIuMiw2LjUsMi4yYzIuOSwwLDUuMS0wLjcsNi42LTIuMgoJCXMyLjMtMy42LDIuMy02LjNjMC0yLjktMC44LTUuMS0yLjQtNi42cy0zLjgtMi4yLTYuNi0yLjJjLTIuOCwwLTQuOSwwLjgtNi41LDIuNEM1ODEuMSw5OS44LDU4MC4zLDEwMiw1ODAuMywxMDQuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MjYuNSwxMjguNVY4Mi4xaDMuMnY0Ni40SDYyNi41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2NS45LDEyOC41di0yMi40YzAtMy41LTAuNy02LTIuMi03LjZjLTEuNS0xLjYtMy43LTIuNC02LjgtMi40Yy00LjEsMC03LjEsMS05LjEsMy4xCgkJYy0xLjksMi4xLTIuOSw1LjUtMi45LDEwLjF2MTloLTMuMVY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkg2NjUuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MDAuOSwxMTkuNmMwLDMuMS0xLjIsNS41LTMuNSw3LjFjLTIuMywxLjctNS43LDIuNS0xMCwyLjVjLTQuNiwwLTguMy0wLjctMTEtMi4xdi0zLjQKCQljMy41LDEuNyw3LjEsMi42LDExLDIuNmMzLjQsMCw2LTAuNiw3LjgtMS43YzEuOC0xLjEsMi43LTIuNiwyLjctNC41YzAtMS43LTAuNy0zLjItMi4xLTQuNGMtMS40LTEuMi0zLjctMi4zLTYuOS0zLjUKCQljLTMuNC0xLjItNS45LTIuMy03LjMtMy4yYy0xLjQtMC45LTIuNC0xLjktMy4yLTNjLTAuNy0xLjEtMS4xLTIuNS0xLjEtNC4xYzAtMi42LDEuMS00LjYsMy4zLTYuMWMyLjItMS41LDUuMi0yLjMsOS4xLTIuMwoJCWMzLjcsMCw3LjMsMC43LDEwLjYsMi4xbC0xLjIsMi45Yy0zLjQtMS40LTYuNS0yLjEtOS40LTIuMWMtMi44LDAtNSwwLjUtNi43LDEuNGMtMS43LDAuOS0yLjUsMi4yLTIuNSwzLjljMCwxLjgsMC42LDMuMiwxLjksNC4zCgkJYzEuMywxLjEsMy44LDIuMyw3LjUsMy42YzMuMSwxLjEsNS40LDIuMSw2LjgsM2MxLjQsMC45LDIuNSwxLjksMy4yLDMuMVM3MDAuOSwxMTgsNzAwLjksMTE5LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzE5LjMsMTI2LjRjMiwwLDMuNy0wLjIsNS4yLTAuNXYyLjVjLTEuNSwwLjUtMy4zLDAuOC01LjMsMC44Yy0zLDAtNS4zLTAuOC02LjctMi40CgkJYy0xLjQtMS42LTIuMi00LjItMi4yLTcuN1Y5Ni44aC01LjF2LTEuOGw1LjEtMS40bDEuNi03LjhoMS42Vjk0aDEwLjF2Mi43aC0xMC4xdjIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzcxNS44LDEyNS44LDcxNy4zLDEyNi40LDcxOS4zLDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTczMC40LDg0LjVjMC0yLDAuNy0zLDItM2MwLjcsMCwxLjIsMC4zLDEuNSwwLjhjMC40LDAuNSwwLjYsMS4zLDAuNiwyLjNjMCwxLTAuMiwxLjctMC42LDIuMwoJCWMtMC40LDAuNi0wLjksMC44LTEuNSwwLjhDNzMxLDg3LjUsNzMwLjQsODYuNSw3MzAuNCw4NC41eiBNNzMzLjksMTI4LjVoLTMuMVY5NGgzLjFWMTI4LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzU2LjIsMTI2LjRjMiwwLDMuNy0wLjIsNS4yLTAuNXYyLjVjLTEuNSwwLjUtMy4zLDAuOC01LjMsMC44Yy0zLDAtNS4zLTAuOC02LjctMi40CgkJYy0xLjQtMS42LTIuMi00LjItMi4yLTcuN1Y5Ni44aC01LjF2LTEuOGw1LjEtMS40bDEuNi03LjhoMS42Vjk0aDEwLjF2Mi43aC0xMC4xdjIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzc1Mi44LDEyNS44LDc1NC4yLDEyNi40LDc1Ni4yLDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc2OS41LDk0djIyLjNjMCwzLjUsMC43LDYsMi4yLDcuNmMxLjUsMS42LDMuNywyLjQsNi44LDIuNGM0LjEsMCw3LjEtMSw5LjEtMy4xYzEuOS0yLjEsMi45LTUuNCwyLjktMTAuMVY5NAoJCWgzLjF2MzQuNWgtMi43bC0wLjYtNC44aC0wLjJjLTIuMiwzLjYtNi4yLDUuNC0xMiw1LjRjLTcuOCwwLTExLjgtNC4yLTExLjgtMTIuNlY5NEg3NjkuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MTQuOCwxMjYuNGMyLDAsMy43LTAuMiw1LjItMC41djIuNWMtMS41LDAuNS0zLjMsMC44LTUuMywwLjhjLTMsMC01LjMtMC44LTYuNy0yLjQKCQljLTEuNC0xLjYtMi4yLTQuMi0yLjItNy43Vjk2LjhoLTUuMXYtMS44bDUuMS0xLjRsMS42LTcuOGgxLjZWOTRoMTAuMXYyLjdIODA5djIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzgxMS4zLDEyNS44LDgxMi44LDEyNi40LDgxNC44LDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTgzOS43LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41aC0yNC45YzAsNC43LDEuMSw4LjQsMy4zLDEwLjljMi4yLDIuNSw1LjMsMy43LDkuMywzLjdjMiwwLDMuNy0wLjEsNS4yLTAuNAoJCWMxLjUtMC4zLDMuNC0wLjksNS43LTEuOHYyLjljLTEuOSwwLjgtMy43LDEuNC01LjQsMS43Uzg0MS43LDEyOS4yLDgzOS43LDEyOS4yeiBNODM4LjgsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDODQ0LjIsOTcuMyw4NDEuOCw5Ni4yLDgzOC44LDk2LjJ6Ii8+CjwvZz4KPC9zdmc+Cg==", mv = _({
  name: "SdsLayoutApp",
  components: {
    SdsLink: St,
    SdsTooltip: jt
  },
  props: {
    modelValue: { type: Boolean, default: !1 },
    sidebarWidth: { type: String, default: "w-72" },
    enableCollapsibleSidebar: { type: Boolean, default: !1 },
    appSuitePrefix: { type: String, default: "SEI" },
    appSuite: { type: String, default: null },
    appSuiteUrl: { type: String, default: null },
    appName: { type: String, default: null },
    appUrl: { type: String, default: null },
    hideAppNameInMobileHeader: { type: Boolean, default: !1 },
    appIconUrl: { type: String, default: null },
    pageTitle: { type: String, default: null },
    hidePageHeader: { type: Boolean, default: !1 },
    sidebarNavigationItems: { type: Array, default: () => [] },
    hideAppIcon: { type: Boolean, default: !1 },
    hideSidebarIcons: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "navigate"],
  data() {
    return {
      showMobileMenu: !1,
      openItemsGroups: []
    };
  },
  computed: {
    wordmark() {
      return hv;
    },
    year() {
      return new Date().getFullYear();
    },
    computedSidebarWidth() {
      return this.enableCollapsibleSidebar ? this.collapsed ? "w-auto" : this.sidebarWidth : this.sidebarWidth;
    },
    collapsed: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  watch: {
    showMobileMenu(e) {
      e ? (document.documentElement.classList.add("layout-app-internal-prevent-scroll"), this.$nextTick(() => {
        this.$refs.mobileMenuCloseBtn.focus();
      })) : (document.documentElement.classList.remove("layout-app-internal-prevent-scroll"), this.$refs.mobileMenuOpenBtn.focus());
    },
    collapsed(e) {
      e && (this.openItemsGroups = []);
    }
  },
  mounted() {
    document.addEventListener("keyup", this.handleDocumentKeyUp);
  },
  unmounted() {
    document.documentElement.classList.remove("layout-app-internal-prevent-scroll"), document.removeEventListener("keyup", this.handleDocumentKeyUp);
  },
  methods: {
    itemsGroupBadgeCount(e) {
      if (!e.items)
        return null;
      let t = 0;
      return e.items.forEach((n) => {
        n.badgeCount && (t = t + n.badgeCount);
      }), t;
    },
    itemsGroupIsActive(e) {
      return e.items && e.items.filter((t) => t.active).length;
    },
    showItemsGroup(e) {
      return this.openItemsGroups.filter((t) => t.id === e.id).length;
    },
    toggleItemsGroup(e) {
      this.collapsed = !1, this.showItemsGroup(e) ? this.openItemsGroups = this.openItemsGroups.filter(
        (t) => t.id !== e.id
      ) : this.openItemsGroups.push(e);
    },
    hasSlot(e) {
      return !!this.$slots[e];
    },
    navigate(e, t, n) {
      this.showMobileMenu = !1, this.$emit("navigate", { group: e, item: t, event: n });
    },
    toggleCollapse() {
      this.enableCollapsibleSidebar ? this.collapsed = !this.collapsed : this.collapsed = !1;
    },
    handleDocumentKeyUp(e) {
      if (!e.target)
        return;
      const t = e.target.tagName.toLowerCase();
      t !== "textarea" && t !== "input" && e.key === "[" && this.toggleCollapse();
    },
    checkKeyEvent(e) {
      if (e.key === "Escape") {
        this.showMobileMenu = !1;
        return;
      }
      const t = this.$refs.mobileSidebarContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (t.length < 2 && e.key === "Tab") {
        e.preventDefault();
        return;
      }
      const n = t.length - 1;
      e.key === "Tab" && e.shiftKey === !1 && e.target === t[n] ? (e.preventDefault(), t[0].focus()) : e.key === "Tab" && e.shiftKey === !0 && e.target === t[0] && (e.preventDefault(), t[n].focus());
    }
  }
});
const gv = {
  "data-id": "sds-layout-app",
  class: "flex flex-col h-screen dark:text-gray-50"
}, vv = { class: "bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 flex flex-shrink-0" }, wv = { class: "my-auto" }, bv = {
  key: 0,
  class: "hidden md:block"
}, Mv = ["href"], Lv = { class: "text-red-400 font-bold" }, Cv = {
  key: 1,
  class: "text-xl flex"
}, Sv = { class: "text-red-400 font-bold" }, jv = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "text-white h-6 w-6 inline-block",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48"
}, [
  /* @__PURE__ */ s("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [
    /* @__PURE__ */ s("path", { d: "M7.95 11.95h32" }),
    /* @__PURE__ */ s("path", { d: "M7.95 23.95h32" }),
    /* @__PURE__ */ s("path", { d: "M7.95 35.95h32" })
  ])
], -1), Tv = { class: "text-xl leading-6 flex" }, Nv = {
  key: 0,
  class: "text-red-400 font-bold"
}, kv = { key: 1 }, Dv = { class: "ml-auto my-auto flex gap-2 flex-shrink-0" }, Ov = { class: "flex flex-grow flex-shrink-0" }, _v = /* @__PURE__ */ s("span", { class: "sr-only" }, "Toggle mobile menu", -1), xv = [
  _v
], $v = /* @__PURE__ */ s("span", { class: "sr-only" }, "Toggle mobile menu", -1), zv = [
  $v
], Iv = { class: "h-screen flex flex-col sticky top-0" }, Pv = { class: "overflow-y-auto flex-grow overscroll-contain" }, Ev = {
  key: 0,
  class: "sticky top-0 bg-gray-900 dark:bg-gray-800 z-10 flex gap-2 p-4"
}, Av = {
  key: 0,
  class: "block w-8 h-8 my-auto flex-shrink-0"
}, Yv = ["href"], Rv = ["src", "alt"], Uv = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512",
  class: "w-8 h-8 fill-current text-blue-400"
}, Bv = /* @__PURE__ */ s("path", { d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" }, null, -1), Qv = [
  Bv
], Vv = ["src", "alt"], Hv = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512",
  class: "w-8 h-8 fill-current text-blue-400"
}, [
  /* @__PURE__ */ s("path", { d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" })
], -1), Gv = ["href"], Wv = {
  key: 1,
  class: "text-lg font-bold my-auto"
}, Fv = {
  key: 1,
  class: "grid grid-cols-1 pb-24"
}, qv = ["href", "onClick"], Jv = {
  key: 0,
  class: "inline-block w-8 h-8 my-auto flex-shrink-0"
}, Kv = ["src", "alt"], Xv = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "w-8 h-8 fill-current"
}, Zv = /* @__PURE__ */ s("path", { d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" }, null, -1), ew = [
  Zv
], tw = { class: "inline-block my-auto text-left" }, nw = {
  key: 0,
  class: "inline-block my-auto"
}, rw = { class: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger" }, ow = {
  class: "absolute w-4 h-4 right-2 top-1/3",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, aw = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3",
  d: "M19 9l-7 7-7-7"
}, iw = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3",
  d: "M9 5l7 7-7 7"
}, sw = ["href", "onClick"], lw = { class: "inline-block my-auto text-left" }, uw = {
  key: 0,
  class: "inline-block my-auto"
}, cw = { class: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger" }, fw = ["href", "onClick"], dw = {
  key: 0,
  class: "inline-block w-8 h-8 my-auto flex-shrink-0"
}, yw = ["src", "alt"], pw = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "w-8 h-8 fill-current"
}, hw = /* @__PURE__ */ s("path", { d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" }, null, -1), mw = [
  hw
], gw = { class: "inline-block my-auto text-left" }, vw = {
  key: 0,
  class: "inline-block my-auto"
}, ww = { class: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger" }, bw = { class: "h-screen flex flex-col sticky top-0" }, Mw = { class: "overflow-y-auto flex-grow overscroll-contain" }, Lw = {
  key: 0,
  class: "sticky top-0 bg-gray-900 dark:bg-gray-800 z-10"
}, Cw = {
  key: 0,
  class: "flex gap-2 p-4"
}, Sw = {
  key: 0,
  class: "block w-8 h-8 my-auto flex-shrink-0"
}, jw = ["href"], Tw = ["src", "alt"], Nw = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512",
  class: "w-8 h-8 fill-current text-blue-400"
}, kw = /* @__PURE__ */ s("path", { d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" }, null, -1), Dw = [
  kw
], Ow = ["src", "alt"], _w = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512",
  class: "w-8 h-8 fill-current text-blue-400"
}, [
  /* @__PURE__ */ s("path", { d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" })
], -1), xw = ["href"], $w = {
  key: 1,
  class: "grid grid-cols-1 pb-24"
}, zw = ["href", "onClick"], Iw = {
  key: 0,
  class: "inline-block w-8 h-8 my-auto flex-shrink-0"
}, Pw = ["src", "alt"], Ew = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "w-8 h-8 fill-current"
}, Aw = /* @__PURE__ */ s("path", { d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" }, null, -1), Yw = [
  Aw
], Rw = {
  key: 0,
  class: "inline-block my-auto text-left"
}, Uw = { class: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger" }, Bw = {
  key: 2,
  class: "absolute w-4 h-4 right-2 top-1/3",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Qw = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3",
  d: "M19 9l-7 7-7-7"
}, Vw = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3",
  d: "M9 5l7 7-7 7"
}, Hw = ["href", "onClick"], Gw = { class: "inline-block my-auto text-left" }, Ww = {
  key: 0,
  class: "inline-block my-auto"
}, Fw = { class: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger" }, qw = ["href", "onClick"], Jw = {
  key: 0,
  class: "inline-block w-8 h-8 my-auto flex-shrink-0"
}, Kw = ["src", "alt"], Xw = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "w-8 h-8 fill-current"
}, Zw = /* @__PURE__ */ s("path", { d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z" }, null, -1), eb = [
  Zw
], tb = {
  key: 0,
  class: "inline-block my-auto text-left"
}, nb = { class: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger" }, rb = {
  key: 0,
  class: "flex-shrink-0 sticky bottom-0 bg-gray-900 dark:bg-gray-800"
}, ob = ["title"], ab = {
  "aria-hidden": "true",
  class: "w-6 h-6 mx-auto",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ib = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 5l7 7-7 7M5 5l7 7-7 7"
}, sb = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
}, lb = { class: "flex flex-col items-stretch flex-grow min-w-0" }, ub = { class: "flex-grow pb-4 bg-gray-100 dark:bg-gray-900" }, cb = {
  key: 0,
  class: "bg-white dark:bg-gray-700 shadow px-4 py-3 sticky top-0 z-40 flex flex-col gap-4 md:flex-row"
}, fb = { class: "flex-grow my-auto flex flex-row gap-2" }, db = { class: "text-2xl font-semibold text-gray-700 dark:text-gray-100" }, yb = {
  key: 0,
  class: "flex-shrink-0 my-auto flex flex-col md:flex-row gap-2"
}, pb = { class: "p-4" }, hb = { class: "bg-gray-900 dark:bg-gray-800 text-xs text-light px-4 pt-4 pb-16 flex flex-col lg:flex-row gap-4" }, mb = { class: "flex-shrink-0 flex order-2 lg:order-1" }, gb = ["src"], vb = {
  key: 0,
  class: "flex-shrink flex lg:mx-auto order-1 lg:order-2"
}, wb = { class: "my-auto" }, bb = { class: "flex-shrink-0 flex lg:ml-auto order-3" }, Mb = { class: "my-auto" }, Lb = {
  key: 0,
  class: "sticky bottom-0 z-40"
};
function Cb(e, t, n, r, o, i) {
  const a = ye("sds-tooltip"), c = ye("sds-link");
  return u(), f("div", gv, [
    s("div", vv, [
      s("div", wv, [
        e.appSuite ? (u(), f("div", bv, [
          e.appSuiteUrl ? (u(), f("a", {
            key: 0,
            href: e.appSuiteUrl,
            class: "text-xl flex hover:underline",
            onClick: t[0] || (t[0] = (l) => e.navigate(null, { title: e.appSuite, href: e.appSuiteUrl }, l))
          }, [
            s("span", Lv, M(e.appSuitePrefix), 1),
            s("span", null, M(e.appSuite), 1)
          ], 8, Mv)) : (u(), f("p", Cv, [
            s("span", Sv, M(e.appSuitePrefix), 1),
            s("span", null, M(e.appSuite), 1)
          ]))
        ])) : w("", !0),
        e.appSuite || e.appName ? (u(), f("button", {
          key: 1,
          ref: "mobileMenuOpenBtn",
          class: "flex md:hidden gap-1 focus:outline-none",
          onClick: t[1] || (t[1] = (l) => e.showMobileMenu = !e.showMobileMenu)
        }, [
          jv,
          s("span", Tv, [
            e.appSuitePrefix ? (u(), f("span", Nv, M(e.appSuitePrefix), 1)) : w("", !0),
            e.appSuite ? (u(), f("span", kv, M(e.appSuite), 1)) : w("", !0),
            e.appName && !e.hideAppNameInMobileHeader ? (u(), f("span", {
              key: 2,
              class: L(["text-sm text-left font-bold text-gray-200 overflow-ellipsis text-ellipsis overflow-hidden whitespace-nowrap w-40 mt-auto mr-auto", [e.appSuite ? "ml-1" : ""]])
            }, M(e.appName), 3)) : w("", !0)
          ])
        ], 512)) : w("", !0)
      ]),
      s("div", Dv, [
        j(e.$slots, "suite-header", { collapsed: e.collapsed })
      ])
    ]),
    s("div", Ov, [
      ge($t, {
        "enter-active-class": "transition-opacity ease-linear duration-150",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-opacity ease-linear duration-150",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: te(() => [
          e.showMobileMenu ? (u(), f("button", {
            key: 0,
            class: "bg-black bg-opacity-40 fixed inset h-screen w-screen z-50 md:hidden",
            onClick: t[2] || (t[2] = (l) => e.showMobileMenu = !e.showMobileMenu)
          }, xv)) : w("", !0)
        ]),
        _: 1
      }),
      ge($t, {
        "enter-active-class": "transition-transform ease-linear duration-150",
        "enter-from-class": "-translate-x-full",
        "enter-to-class": "translate-x-0",
        "leave-active-class": "transition-transform ease-linear duration-150",
        "leave-from-class": "translate-x-0",
        "leave-to-class": "-translate-x-full"
      }, {
        default: te(() => [
          e.showMobileMenu ? (u(), f("aside", {
            key: 0,
            ref: "mobileSidebarContainer",
            class: "md:hidden fixed w-2/3 z-50 bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0",
            onKeydown: t[6] || (t[6] = (...l) => e.checkKeyEvent && e.checkKeyEvent(...l))
          }, [
            s("button", {
              ref: "mobileMenuCloseBtn",
              class: "sr-only",
              onClick: t[3] || (t[3] = (l) => e.showMobileMenu = !e.showMobileMenu)
            }, zv, 512),
            s("div", Iv, [
              s("div", Pv, [
                e.appName ? (u(), f("div", Ev, [
                  j(e.$slots, "app-icon", { classList: "block w-8 h-8 my-auto flex-shrink-0" }, () => [
                    e.hideAppIcon ? w("", !0) : (u(), f("span", Av, [
                      e.appUrl ? (u(), f("a", {
                        key: 0,
                        href: e.appUrl,
                        onClick: t[4] || (t[4] = (l) => e.navigate(null, { title: e.appName, href: e.appUrl }, l))
                      }, [
                        e.appIconUrl ? (u(), f("img", {
                          key: 0,
                          src: e.appIconUrl,
                          alt: e.appName,
                          class: "w-8 h-8"
                        }, null, 8, Rv)) : (u(), f("svg", Uv, Qv))
                      ], 8, Yv)) : (u(), f(N, { key: 1 }, [
                        e.appIconUrl ? (u(), f("img", {
                          key: 0,
                          src: e.appIconUrl,
                          alt: e.appName,
                          class: "w-8 h-8"
                        }, null, 8, Vv)) : w("", !0),
                        Hv
                      ], 64))
                    ]))
                  ]),
                  e.appUrl ? (u(), f("a", {
                    key: 0,
                    href: e.appUrl,
                    class: "text-lg font-bold my-auto hover:underline",
                    onClick: t[5] || (t[5] = (l) => e.navigate(null, { title: e.appName, href: e.appUrl }, l))
                  }, M(e.appName), 9, Gv)) : (u(), f("span", Wv, M(e.appName), 1))
                ])) : w("", !0),
                e.sidebarNavigationItems.length > 0 ? (u(), f("nav", Fv, [
                  j(e.$slots, "mobile-sidebar-navigation", {
                    items: e.sidebarNavigationItems,
                    collapsed: e.collapsed
                  }, () => [
                    (u(!0), f(N, null, A(e.sidebarNavigationItems, (l) => (u(), f(N, {
                      key: l.id
                    }, [
                      l.items ? (u(), f(N, { key: 0 }, [
                        s("button", {
                          href: l.href,
                          class: L(["flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8", {
                            "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !e.itemsGroupIsActive(l) || e.showItemsGroup(l),
                            "text-white border-danger": e.itemsGroupIsActive(l) && !e.showItemsGroup(l)
                          }]),
                          onClick: (d) => e.toggleItemsGroup(l)
                        }, [
                          j(e.$slots, "mobile-sidebar-navigation-item-icon", {
                            item: l,
                            classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
                          }, () => [
                            e.hideSidebarIcons ? w("", !0) : (u(), f("span", Jv, [
                              l.iconUrl ? (u(), f("img", {
                                key: 0,
                                src: l.iconUrl,
                                alt: l.title,
                                class: "w-8 h-8"
                              }, null, 8, Kv)) : (u(), f("svg", Xv, ew))
                            ]))
                          ]),
                          s("span", tw, M(l.title), 1),
                          e.itemsGroupBadgeCount(l) && !e.showItemsGroup(l) ? (u(), f("span", nw, [
                            s("span", rw, M(e.itemsGroupBadgeCount(l)), 1)
                          ])) : w("", !0),
                          (u(), f("svg", ow, [
                            e.showItemsGroup(l) ? (u(), f("path", aw)) : (u(), f("path", iw))
                          ]))
                        ], 10, qv),
                        e.showItemsGroup(l) ? (u(!0), f(N, { key: 0 }, A(l.items, (d) => (u(), f("a", {
                          key: d.id,
                          href: d.href,
                          class: L(["flex relative gap-2 px-4 py-2 border-l-8", {
                            "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !d.active,
                            "text-white border-danger pointer-events-none": d.active,
                            "pl-12": !e.hideSidebarIcons,
                            "pl-8": e.hideSidebarIcons
                          }]),
                          onClick: (y) => e.navigate(l, d, y)
                        }, [
                          s("span", lw, M(d.title), 1),
                          d.badgeCount ? (u(), f("span", uw, [
                            s("span", cw, M(d.badgeCount), 1)
                          ])) : w("", !0)
                        ], 10, sw))), 128)) : w("", !0)
                      ], 64)) : (u(), f("a", {
                        key: 1,
                        href: l.href,
                        class: L(["flex relative gap-2 pl-2 px-4 py-2 border-l-8", {
                          "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !l.active,
                          "text-white border-danger pointer-events-none": l.active
                        }]),
                        onClick: (d) => e.navigate(null, l, d)
                      }, [
                        j(e.$slots, "mobile-sidebar-navigation-item-icon", {
                          item: l,
                          classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
                        }, () => [
                          e.hideSidebarIcons ? w("", !0) : (u(), f("span", dw, [
                            l.iconUrl ? (u(), f("img", {
                              key: 0,
                              src: l.iconUrl,
                              alt: l.title,
                              class: "w-8 h-8"
                            }, null, 8, yw)) : (u(), f("svg", pw, mw))
                          ]))
                        ]),
                        s("span", gw, M(l.title), 1),
                        l.badgeCount ? (u(), f("span", vw, [
                          s("span", ww, M(l.badgeCount), 1)
                        ])) : w("", !0)
                      ], 10, fw))
                    ], 64))), 128))
                  ])
                ])) : w("", !0)
              ])
            ])
          ], 544)) : w("", !0)
        ]),
        _: 3
      }),
      s("aside", {
        class: L(["hidden md:block bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0 z-50", [e.computedSidebarWidth]])
      }, [
        s("div", bw, [
          s("div", Mw, [
            e.appName ? (u(), f("div", Lw, [
              e.appName ? (u(), f("p", Cw, [
                j(e.$slots, "app-icon", { classList: "block w-8 h-8 my-auto flex-shrink-0" }, () => [
                  e.hideAppIcon ? w("", !0) : (u(), f("span", Sw, [
                    e.appUrl ? (u(), f("a", {
                      key: 0,
                      href: e.appUrl,
                      onClick: t[7] || (t[7] = (l) => e.navigate(null, { title: e.appName, href: e.appUrl }, l))
                    }, [
                      e.appIconUrl ? (u(), f("img", {
                        key: 0,
                        src: e.appIconUrl,
                        alt: e.appName,
                        class: "w-8 h-8"
                      }, null, 8, Tw)) : (u(), f("svg", Nw, Dw))
                    ], 8, jw)) : (u(), f(N, { key: 1 }, [
                      e.appIconUrl ? (u(), f("img", {
                        key: 0,
                        src: e.appIconUrl,
                        alt: e.appName,
                        class: "w-8 h-8"
                      }, null, 8, Ow)) : w("", !0),
                      _w
                    ], 64))
                  ]))
                ]),
                e.appUrl && e.appName ? (u(), f("a", {
                  key: 0,
                  href: e.appUrl,
                  class: L(["text-lg font-bold my-auto hover:underline", { "sr-only": e.enableCollapsibleSidebar && e.collapsed }]),
                  onClick: t[8] || (t[8] = (l) => e.navigate(null, { title: e.appName, href: e.appUrl }, l))
                }, M(e.appName), 11, xw)) : e.appName ? (u(), f("span", {
                  key: 1,
                  class: L(["text-lg font-bold my-auto", { "sr-only": e.enableCollapsibleSidebar && e.collapsed }])
                }, M(e.appName), 3)) : w("", !0)
              ])) : w("", !0)
            ])) : w("", !0),
            e.sidebarNavigationItems.length > 0 ? (u(), f("nav", $w, [
              j(e.$slots, "sidebar-navigation", {
                items: e.sidebarNavigationItems,
                collapsed: e.collapsed
              }, () => [
                (u(!0), f(N, null, A(e.sidebarNavigationItems, (l) => (u(), f(N, {
                  key: l.id
                }, [
                  l.items ? (u(), f(N, { key: 0 }, [
                    ge(a, {
                      placement: "right",
                      disabled: !e.collapsed
                    }, {
                      trigger: te(() => [
                        s("button", {
                          href: l.href,
                          class: L(["flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8", {
                            "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !e.itemsGroupIsActive(l) || e.showItemsGroup(l),
                            "text-white border-danger": e.itemsGroupIsActive(l) && (!e.showItemsGroup(l) || e.collapsed)
                          }]),
                          onClick: (d) => e.toggleItemsGroup(l)
                        }, [
                          j(e.$slots, "sidebar-navigation-item-icon", {
                            item: l,
                            classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
                          }, () => [
                            e.hideSidebarIcons ? w("", !0) : (u(), f("span", Iw, [
                              l.iconUrl ? (u(), f("img", {
                                key: 0,
                                src: l.iconUrl,
                                alt: l.title,
                                class: "w-8 h-8"
                              }, null, 8, Pw)) : (u(), f("svg", Ew, Yw))
                            ]))
                          ]),
                          e.collapsed ? w("", !0) : (u(), f("span", Rw, M(l.title), 1)),
                          e.itemsGroupBadgeCount(l) && !e.showItemsGroup(l) ? (u(), f("span", {
                            key: 1,
                            class: L(["inline-block my-auto", {
                              "absolute bottom-1 right-1": e.collapsed
                            }])
                          }, [
                            s("span", Uw, M(e.itemsGroupBadgeCount(l)), 1)
                          ], 2)) : w("", !0),
                          e.collapsed ? w("", !0) : (u(), f("svg", Bw, [
                            e.showItemsGroup(l) ? (u(), f("path", Qw)) : (u(), f("path", Vw))
                          ]))
                        ], 10, zw)
                      ]),
                      default: te(() => [
                        s("p", null, M(l.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled"]),
                    !e.collapsed && e.showItemsGroup(l) ? (u(!0), f(N, { key: 0 }, A(l.items, (d) => (u(), f("a", {
                      key: d.id,
                      href: d.href,
                      class: L(["flex relative gap-2 px-4 py-2 border-l-8", {
                        "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !d.active,
                        "text-white border-danger pointer-events-none": d.active,
                        "pl-12": !e.hideSidebarIcons,
                        "pl-8": e.hideSidebarIcons
                      }]),
                      onClick: (y) => e.navigate(l, d, y)
                    }, [
                      s("span", Gw, M(d.title), 1),
                      d.badgeCount ? (u(), f("span", Ww, [
                        s("span", Fw, M(d.badgeCount), 1)
                      ])) : w("", !0)
                    ], 10, Hw))), 128)) : w("", !0)
                  ], 64)) : (u(), ve(a, {
                    key: 1,
                    placement: "right",
                    disabled: !e.collapsed
                  }, {
                    trigger: te(() => [
                      s("a", {
                        href: l.href,
                        class: L(["flex relative gap-2 pl-2 px-4 py-2 border-l-8", {
                          "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !l.active,
                          "text-white border-danger pointer-events-none": l.active
                        }]),
                        onClick: (d) => e.navigate(null, l, d)
                      }, [
                        j(e.$slots, "sidebar-navigation-item-icon", {
                          item: l,
                          classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
                        }, () => [
                          e.hideSidebarIcons ? w("", !0) : (u(), f("span", Jw, [
                            l.iconUrl ? (u(), f("img", {
                              key: 0,
                              src: l.iconUrl,
                              alt: l.title,
                              class: "w-8 h-8"
                            }, null, 8, Kw)) : (u(), f("svg", Xw, eb))
                          ]))
                        ]),
                        e.collapsed ? w("", !0) : (u(), f("span", tb, M(l.title), 1)),
                        l.badgeCount ? (u(), f("span", {
                          key: 1,
                          class: L(["inline-block my-auto", {
                            "absolute bottom-1 right-1": e.collapsed
                          }])
                        }, [
                          s("span", nb, M(l.badgeCount), 1)
                        ], 2)) : w("", !0)
                      ], 10, qw)
                    ]),
                    default: te(() => [
                      s("p", null, M(l.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled"]))
                ], 64))), 128))
              ])
            ])) : w("", !0)
          ]),
          e.enableCollapsibleSidebar ? (u(), f("div", rb, [
            s("button", {
              id: "btn-collapse-toggle",
              title: e.collapsed ? "Expand sidebar ( [ )" : "Collapse sidebar ( [ )",
              class: L(["px-3 ml-auto border-transparent rounded-none tab tab-block tab-dark", { "w-full": e.collapsed, "w-auto": !e.collapsed }]),
              onClick: t[9] || (t[9] = (...l) => e.toggleCollapse && e.toggleCollapse(...l))
            }, [
              (u(), f("svg", ab, [
                e.collapsed ? (u(), f("path", ib)) : (u(), f("path", sb))
              ]))
            ], 10, ob)
          ])) : w("", !0)
        ])
      ], 2),
      s("section", lb, [
        s("main", ub, [
          e.hidePageHeader ? w("", !0) : (u(), f("div", cb, [
            s("div", fb, [
              j(e.$slots, "page-title", {
                collapsed: e.collapsed,
                classList: "text-2xl font-semibold text-gray-700 dark:text-gray-100"
              }, () => [
                s("p", db, M(e.pageTitle), 1)
              ])
            ]),
            e.hasSlot("page-header") ? (u(), f("div", yb, [
              j(e.$slots, "page-header", { collapsed: e.collapsed })
            ])) : w("", !0)
          ])),
          s("div", pb, [
            j(e.$slots, "default", { collapsed: e.collapsed })
          ])
        ]),
        j(e.$slots, "footer-top"),
        s("footer", hb, [
          s("div", mb, [
            ge(c, {
              href: "https://sei.cmu.edu",
              title: "Software Engineering Institute",
              class: "my-auto",
              external: ""
            }, {
              default: te(() => [
                s("img", {
                  class: "h-10",
                  src: e.wordmark,
                  alt: "Software Engineering Institute"
                }, null, 8, gb)
              ]),
              _: 1
            })
          ]),
          e.hasSlot("footer-middle") ? (u(), f("div", vb, [
            s("div", wb, [
              j(e.$slots, "footer-middle")
            ])
          ])) : w("", !0),
          s("div", bb, [
            s("div", Mb, [
              j(e.$slots, "footer-right", { year: e.year }, () => [
                s("p", null, "\xA9 " + M(e.year) + " Carnegie Mellon University", 1)
              ])
            ])
          ])
        ]),
        e.hasSlot("actions-bar") ? (u(), f("div", Lb, [
          j(e.$slots, "actions-bar")
        ])) : w("", !0)
      ])
    ])
  ]);
}
const Bn = /* @__PURE__ */ E(mv, [["render", Cb]]);
Bn.install = (e) => {
  e.component(Bn.name, Bn);
};
const Sb = _({
  name: "SdsLayoutSeiExternalWordmark"
}), jb = {
  "data-id": "sds-layout-sei-external-wordmark",
  viewBox: "0 0 728.14 64.49"
}, Tb = /* @__PURE__ */ _a('<polygon class="cls-1" points="213.53 18.71 213.53 45.54 218 45.54 218 47.31 200.12 47.31 200.12 45.54 204.59 45.54 204.59 20.6 201.12 20.6 201.12 18.71 213.53 18.71"></polygon><path class="cls-1" d="M36.93,1.38H35.31c-.07,1.38-.79,2-2.17,2C30.38,3.35,26.35,0,21.62,0,8.15,0,0,13.27,0,25S7.75,48.37,20.76,48.37c7.88,0,10.84-3.75,12.94-3.75,1.38,0,1.63,1.22,1.63,2.69h1.78V31.21H35.34l-.39,2.23C34,38.77,29.9,46.63,21.42,46.63,13.93,46.63,11,40.15,11,24.18,11,7.43,15,1.79,21.62,1.79c7.49,0,12.64,8.4,13.69,15.1h1.62Z"></path><path class="cls-1" d="M60,39.6c-.13,3.44-2.07,6.25-5.12,6.25-4.41,0-4.6-3.72-4.6-6.56,0-3.44.39-5.7,4.6-6.16L60,32.61ZM71.8,41.74c0,1.68-1.11,3.63-1.84,3.63-1.17,0-1.43-1.23-1.43-3.24V27.22c0-7.39-6.94-9.2-13.61-9.2-6.48,0-11.21,3.17-11.21,6.8A3.91,3.91,0,0,0,47.92,29a3.69,3.69,0,0,0,4-3.89c0-3.3-3.42-3.34-3.42-3.42,0-1.47,3.81-1.94,6-1.94,4.86,0,5.51,1.79,5.51,5.68v5.44l-6.35.52c-5.9.45-12.32,2-12.32,8.75,0,5.64,5.06,7.91,10,7.91,2.53,0,7-1,8.69-4.08a6.65,6.65,0,0,0,6.48,4.08c4.21,0,6.93-2.53,6.93-6.35Z"></path><polygon class="cls-1" points="674.53 18.61 674.53 45.45 679 45.45 679 47.22 661.11 47.22 661.11 45.45 665.58 45.45 665.58 20.5 661.11 20.5 661.11 18.61 674.53 18.61"></polygon><path class="cls-1" d="M286,32.45,296.7,1.73h14.81l0,1.83h-4.24v42h4.24v1.79H293.68V45.53H298V4h-.13l-15.1,43.29H281L265.53,3.25h-.13V40c0,5.25,1.36,5.53,4.86,5.53h.2v1.79H259.25V45.53h0c3.7,0,4.39-2.16,4.39-4.95v-37h-4.39V1.69h16.26Z"></path><path class="cls-1" d="M321.83,29.87V25.52c0-4.34,1.88-5.7,4.08-5.7,3.11,0,4.08,2.14,4.08,5.7v4.36Zm0,1.76h17.89c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34h-1.77c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"></path><path class="cls-1" d="M591.08,29.77V25.41c0-4.34,1.88-5.7,4.08-5.7,3.11,0,4.08,2.14,4.08,5.7v4.36Zm0,1.76H609c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34H607.4c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"></path><polygon class="cls-1" points="339.83 1.79 339.83 3.44 344.31 3.44 344.31 45.48 339.83 45.48 339.83 47.32 357.72 47.32 357.72 45.48 353.25 45.48 353.25 1.79 339.83 1.79"></polygon><polygon class="cls-1" points="358.97 1.79 358.97 3.44 363.44 3.44 363.44 45.48 358.97 45.48 358.97 47.32 376.86 47.32 376.86 45.48 372.39 45.48 372.39 1.79 358.97 1.79"></polygon><path class="cls-1" d="M397.43,39.47c0,4.86-2,6.87-5.31,6.87s-5.31-2-5.31-6.87V26.71c0-4.86,2-6.87,5.31-6.87s5.31,2,5.31,6.87Zm10.11-6.41c0-8.88-6.87-15-15.42-15s-15.42,6.16-15.42,15,6.87,15,15.42,15,15.42-6.16,15.42-15"></path><path class="cls-1" d="M454.05,3.28h4.53V32.07c0,10,6.93,16.14,17.5,16.14,11.93,0,17.11-6.29,17.11-15.81V7.78c0-3.76,1-4.5,3.37-4.5h1.31V1.54h-11.4V3.28h.82c3.3,0,3.76,1,3.76,4.76V33c0,8.82-5.47,12.83-11,12.83-9.46,0-11.34-6.35-11.9-14.65V3.28h4.25V1.54H454.05Z"></path><path class="cls-1" d="M566.34,47.95h1.75l9.59-22.68c1.94-4.24,3-4.77,4.47-4.84h.58V18.65H572.62v1.79h1.23c1.88,0,2.74-.12,2.74,1.56a10.5,10.5,0,0,1-1.1,3.94l-4.4,10.37L564,20.45h3.6V18.65H551.37v1.79h3Z"></path><path class="cls-1" d="M638.55,47.95h1.54a2.07,2.07,0,0,1,2.29-1.55c1.69,0,3.7,1.55,7.32,1.55a10.57,10.57,0,0,0,10.37-10.63c0-7.91-5.44-8.49-12.38-9.46-3.63-.52-5.68-1-5.68-3.89,0-3,2.66-4.32,6.16-4.32,4.86,0,6.75,3.22,8.36,7.44h1.53v-9.2h-1.47c0,.78-.67,1.43-1.9,1.43-2.08,0-3.76-1.43-6.74-1.43a9.63,9.63,0,0,0-9.66,9.66c0,8.36,6.35,9.08,11.28,9.66,4.67.58,6.35.88,6.35,3.86,0,3.43-2.85,5-6.35,5-4.92,0-8.31-4.26-9.48-9h-1.54Z"></path><polygon class="cls-1" points="549 18.61 549 45.45 553.47 45.45 553.47 47.22 535.58 47.22 535.58 45.45 540.05 45.45 540.05 20.5 535.58 20.5 535.58 18.61 549 18.61"></polygon><path class="cls-1" d="M540.06,9.67a4.46,4.46,0,1,0,4.46-4.47,4.45,4.45,0,0,0-4.46,4.47"></path><path class="cls-1" d="M665.57,9.67A4.46,4.46,0,1,0,670,5.2a4.45,4.45,0,0,0-4.46,4.47"></path><path class="cls-1" d="M149.79,29.86V25.51c0-4.34,1.88-5.7,4.08-5.7,3.11,0,4.08,2.14,4.08,5.7v4.35Zm0,1.76h17.89c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34H166.1c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"></path><path class="cls-1" d="M228,29.86V25.51c0-4.34,1.88-5.7,4.08-5.7s4.08,1.34,4.08,5.7v4.35Zm0,1.76h17.89c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34h-1.77c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"></path><path class="cls-1" d="M529.84,45.46V28c0-7-3-10.27-9.14-10.27-4.35,0-8.75,2.49-10.5,6.25h0V18.7H496.79v1.75h4.47v25h-4.47v1.75H514V45.46H510.2V28.36c.56-2.41,3.61-8,7.15-8,2.35,0,3.55.81,3.55,5.16v19.9h-3.7v1.75h17.11V45.46Z"></path><path class="cls-1" d="M420.93,18.8v5.25h0c1.75-3.76,6.15-6.25,10.5-6.25,6.16,0,9.14,3.27,9.14,10.27v17.5H445v1.75H427.93V45.57h3.7V25.67c0-4.35-1.19-5.16-3.55-5.16-3.54,0-6.59,5.55-7.15,8v17.1h3.83v1.75H407.52V45.57H412v-25h-4.47V18.8Z"></path><path class="cls-1" d="M135.52,45.56V28.06c0-7-3-10.27-9.14-10.27-4.35,0-8.75,2.49-10.5,6.25h0V18.79H102.47v1.75h4.47v25h-4.47v1.75h17.24V45.56h-3.83V28.46c.56-2.41,3.61-8,7.15-8,2.35,0,3.55.81,3.55,5.16v19.9h-3.7v1.75H140V45.56Z"></path><path class="cls-1" d="M204.62,9.84a4.46,4.46,0,1,0,4.46-4.47,4.45,4.45,0,0,0-4.46,4.47"></path><path class="cls-1" d="M718,18.62V20.5c2.76,0,4,.25,4,1.5a10.5,10.5,0,0,1-1.1,3.94l-4.4,10.37-7-15.81h3.68V18.62H690.81V4.72h-1.17c0,6.87-4.67,13.93-11.21,13.93v1.85h3.44V40.56A7.1,7.1,0,0,0,689,47.95a9.22,9.22,0,0,0,8.62-5l-1.39-.76c-.78,1.17-1.81,2.72-3.43,2.72-1.3,0-2-.92-2-3.06V20.51h9l11.84,27.31-4.1,9.65v0h0a.55.55,0,0,1-.49.32.54.54,0,0,1-.51-.37v0a4.46,4.46,0,1,0-6.3,5.18h0l.14.06.26.12a4.51,4.51,0,0,0,1.63.34c3.76.32,5.69-2.46,7-5.29.3-.64.57-1.29.83-1.9.57-1.37,1.56-3.73,2.73-6.48h0L714,46.82h0l9.12-21.55c1.94-4.24,2.69-4.78,5-4.78h0V18.62Z"></path><path class="cls-1" d="M95.94,17.71a9.29,9.29,0,0,0-8.56,6.09h-.13V18.87H74v1.81h4.47V45.62H74V47.4H93.34V45.62h-6v-14c0-4.17,1.09-8.44,3.83-10.79a.53.53,0,0,1,.85.5h0a6.22,6.22,0,0,0-.35,1.85,4.19,4.19,0,0,0,4.41,4.21,4.68,4.68,0,0,0,4.93-4.73C101.06,19.59,99,17.71,95.94,17.71Z"></path><path class="cls-1" d="M193.49,19.82c.13,0,.29-.11.39,0a.27.27,0,0,1,0,.35h0a2.78,2.78,0,0,0-.24,2.38,2.74,2.74,0,0,0,2,1.77,2.79,2.79,0,0,0,3.47-2.72,3,3,0,0,0-1.53-2.53,5.29,5.29,0,0,0-2.85-.75,7.68,7.68,0,0,0-4.76,2h0q-.44-.32-.92-.6A14,14,0,0,0,181.83,18c-5.44,0-11.28,3.56-11.28,9.46a8.42,8.42,0,0,0,5.38,7.91v.13A7.08,7.08,0,0,0,169.45,43c0,3.24,1.49,5.7,4.22,6.48v.13c-2.59.71-5.58,3.31-5.58,6.42,0,4.8,5.64,8.49,12.83,8.49,9,0,14.91-6.09,14.91-14,0-6.29-3.11-9.14-9.46-9H175.61c-1.62,0-2.7-.07-2.7-1.82s2.49-3.37,4.95-3.37a4.87,4.87,0,0,1,1.32.39,8.35,8.35,0,0,0,2.66.39c5.57,0,11.54-3.18,11.54-9.33A9.62,9.62,0,0,0,191,21.61a.22.22,0,0,1,0-.33,13.23,13.23,0,0,1,1.69-1.1,3.64,3.64,0,0,1,.76-.35Zm-8.61,29.82c6.48,0,8.2.27,8.2,4.23,0,4.73-5.8,9.07-12.34,9.07-5.83,0-8.63-3.58-8.76-6.69,0-2.85,1.42-4.73,3.17-6.61ZM186,27.51c0,7.53-1.75,7.78-4.08,7.78-2.59,0-4-.5-4-8,0-5.25.58-7.48,4-7.48,3,0,4,.2,4.08,7.66Z"></path><path class="cls-1" d="M631.67,17.45a9.29,9.29,0,0,0-8.56,6.09H623V18.61H609.7v1.81h4.47V45.36H609.7v1.77h19.38V45.36h-6v-14c0-4.17,1.09-8.43,3.82-10.78a.53.53,0,0,1,.85.5v0a6.23,6.23,0,0,0-.34,1.83,4.19,4.19,0,0,0,4.41,4.21,4.68,4.68,0,0,0,4.93-4.73C636.79,19.33,634.72,17.45,631.67,17.45Z"></path>', 26), Nb = [
  Tb
];
function kb(e, t, n, r, o, i) {
  return u(), f("svg", jb, Nb);
}
const Tt = /* @__PURE__ */ E(Sb, [["render", kb]]), Db = _({
  name: "SdsLayoutSeiExternalHeader",
  components: {
    LayoutSeiExternalWordmark: Tt
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}), Ob = { "data-id": "sds-layout-sei-external-header" }, _b = { class: "bg-red-500" }, xb = { class: "container px-4 py-2 mx-auto md:px-8" }, $b = {
  href: "https://www.cmu.edu/",
  target: "_self",
  class: "block w-80"
}, zb = /* @__PURE__ */ s("span", { class: "sr-only" }, "Carnegie Mellon University", -1), Ib = { class: "text-gray-700 bg-white" }, Pb = { class: "container px-4 pt-8 mx-auto space-y-8 md:px-8" }, Eb = { class: "pb-6 space-y-4 border-b" }, Ab = /* @__PURE__ */ s("h1", { class: "text-5xl font-extralight" }, [
  /* @__PURE__ */ s("a", {
    href: "https://sei.cmu.edu",
    class: "break-words hover:text-red-500"
  }, "Software Engineering Institute")
], -1), Yb = {
  key: 0,
  class: "text-2xl text-gray-500 break-words"
};
function Rb(e, t, n, r, o, i) {
  const a = ye("layout-sei-external-wordmark");
  return u(), f("header", Ob, [
    s("div", _b, [
      s("div", xb, [
        s("a", $b, [
          ge(a, { class: "text-white fill-current h-7" }),
          zb
        ])
      ])
    ]),
    s("div", Ib, [
      s("div", Pb, [
        s("div", Eb, [
          Ab,
          e.page.organization ? (u(), f("h2", Yb, M(e.page.organization), 1)) : w("", !0)
        ])
      ])
    ])
  ]);
}
const Nt = /* @__PURE__ */ E(Db, [["render", Rb]]), Ub = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABN8AAABQCAMAAAAeGCORAAACu1BMVEVMaXHZ2dnZ2dnZ2dmXl5fZ2dlVVVXV1NaamppVVVVVVVVVVVX///9VVVW/KR7VRDcAYeT/CYdMkqXRQzjNRDjx8fHv7+8p1dnHRTrw+PrARTr+/v88OvHbRTi9HxOhoaEuzdUdqec5RvAbtub3+vvhREvGPDE0X+rC3/Dx9PUez98kwd05Ue7ZR1g3Wey+JBfCWXn/+fU1wc+yYohtg7MWw+f/8u45mcvPUWj+/fxQNOsua+smnOBzLePX3OQoeuqjbZWzKbaoKsFhL+kdmeq4PDKQK9R8OsuTdqD+5No+ssiDK90jiupeX1+dKcxkPdf+0Lsvksjiw8T/7ONCQUGUOLxfd6uEfqmpNqn+2cxBPujPamLUjIbfubiSQp3ZrKksi916jKv/qnefTZBomLbOe3UvsdRhXr3nWVK7NpZVpb7/xaMzfNn/to1PS9rYn5o9bc/KWlFNY8WDRqtxT7WludK6xM/0sa+gzOqGV6Hnz85yYa52tuL/jUQXFxdGn8XBMSa/yd3/gTPldnD/nV/qioXQOHNUl6m8Ukmxs7Vort5YkbzlmsD/bBH/dx9XbrkZbeP8IJCNOWEqZdP/XApcc9UwPtq4t9+PpbjvnJs2XredPHr3NplOZIF3OHegsuRJQr9pNKlgmd7b4fFVRYVIX6DLtsiHq968a2TuaK2HkeinM1IAerwAe7zrPjvuPjfnNUngy6fhNlbSixMAdbkAervyOzMSg8Dn3NrZ2dnmQUAAd7rdT0PbNGPasWsEAQHFKp69Kari7/heqd3cvIXcRzrdSz/i2MeLi4vOL4TdTUHKLJHcSDsiIiLcSj2LwuXdUETQgwHyNzbsNT0AAADWLXTlLScxMTHl5eX/VQA6WJmz1+3/ZgAiisTIycnVlzDXo0vQ5vUNDQ0pRGeqqap7e3u9vb0rKytra2sUUHcwAAAADHRSTlMA2nhQLqnj/RaJVL7yjhkNAAApd0lEQVR4XuzZ11LrMBCA4bz/s6zknl7ondN7r8BjoNVaYuNgMhNERiH723E8dqILLr5Zh86XwHVs+4GjVcevWhubzlhHdS98F4vRqhUFFaXsCw+qcQcAD+7U31T2ACa6Sqt+CBytuoOdY6em96bJZJLnaZq+pd64ugsl3aSR1rqDfQtcx/Y3cLTqO9dsNvuzaua7bhladRA4WvVT4GjVz4F7or9AHG2Ub0SZ+LbDgat9S4k3B1wXN15CG08nm+hboOLzTXwT38Q37NzG5reczW+uedvcvpHzm/gmvolvZw/6drHcN6hhA+VdA+IOr4D9gAdO0acBdwB3eT2+kXCNB9TU8oYb1rWvu8kNWxjfIp7fxDfxTXxrH9+eqW+77AG19Qc4Lxzi1ija+U18E9/EN/Ft9x7gcjbA4cuU4LZYrL+/iW/im/i28uPpct8ossqfz58Bwgd4BLrGKQQF2JP7VgPHfJs0BzjcUbiECac1HuZow7f4fRPfxDfxbbw1vnHgTh1wfoCjEtzMrk2J5pFrWGS+iW/im/gW4PF0433zwLX8h0GbzR50a0QbFp1v4lv/ODuYTg+y4774Jr4x3h7tm1IVWLFGIzyC8jdIM4BKAeDnlL1Iqfqraj2/v1H8CZUPcDTBacKNhBuytGsLfbv8/8938tFfnkXmW1a8poqf00x8E99WfTw9bPjmPCvLqtcryxFUProBcDfdWeX8G/G3Vt/4AMeBG6aGtRo4KxruNm3PGXHb5dvl1YD14zpS3/rIG1UUxa9MfBPfWnhb5tuh941Xfn/5e2/v636vZBfBI6dwB6KuotyZwtbkGwnXGODy1DY0O224+46GzjvXVvl2M5jrJFLfbtm3w9ckwjiA41VbbfVMgAiQ0AA8KeAYgzADEBQCBIg1YSTbGA4CR0QELMdY1BIFBvQ6gV7F3nmQaGTuZmSmtSIbEAQSm/0l/e7uued57rgjkbtzpt/nNucdDBjw4Xfes8IBrQgdNZ33beTbzrW1rVCtVnv1KhTaWlu71l/fxJ5uT6lvLGOlbTeS69wukXvOvOqb9EpfBOa9U/NbOBymwH01Aw6WfHAVDoLv+1ylsl9pwBp439735tvnd5ouq+f/HC/fmgc64A7rDvs28m1+y4c0rTnlm5XjG6T3TeINqbl/l+iDBfjCvgkKbDCpkQS8SU7KAd8gZoL7AuE9InLca7I0/YADiFM6Pr4lXsglRr7h6tg1ClzVSd9Gvu1sXUKo777peevBN+iEnIAD3m4zcl+R6cL/WkolIz+zd6gCmeWc8O0DAU4Z4LIUOA4OdnE8LCIcJ+qAq/TbN/z3DnXv25//2TeoWSg0y9JD1EMMXLHqnG8j3+YvInSsfBOt8g2GsFILMT0hH8GBaTRlWlOhE3TbRCB7fcNpgctm98gIpzDHSwu3kEnFY+BcUkKOneHgpb++vUQj30wrHGHh6oPr2/iYHWadH7PLt3kf6qtvomgNb6xvlC6hhphaJSIaAxskENnoJSXBbt8ixLewDNwq9u2nDBy/B6jRBQXTubnoDIIuwDvgDVJ4k4kz9A2hmVh09t7K4+e2+5YYat/Kc8vLS+V/bBYpQoVB9Q1+6/iE9b5NTU1O2OLbzlVkh2+b7Rq46e6sb9Nz2wa+iSa89TK+Ud+IYru/3YipjX1jbkjhwD8KinJ5GT3nnp9GIpFwBAtHgIOy6gjHwyEtKJ1LbQSQmp9P8nBwnMhxZL+IsW+kwOzKM1t9ezS8vm08eOh3TXtd/sVf5jUV4A7Lg+vbu7OnbPBt6sykHb6FkA2+bXaQmq9NzrUMfNvfF3vgrTvfoN23Gt/WS/TWFBSjYdcE+vRBIJft9k2JALdKJjhoLysDBwUzqY3YDGLzwzCX5CEywkGmvtFi9x/b59vVYfVtaeGp1zvtgqa9C7pr9SOo3mSBqw6ub9DJ09b7BsKds9y3BOrRtxZoZdb6JcRU24TRrdVBtY+GvnXPm358M/ctLycz1TG4P6UJ9CZUINBp6MtL2ewbFe4Oe4uqBLbdzW1EAzeQPj8fDPJBPqkIB3XpGxRbeW6Pbwk0nL7NLbgANzXvsuZiFW8OqZbJhrhisTnAvkHjY5b7Bp0fs9i3UK++1XzAlnFtpM3d7vgkXIx8a2h8E1neGt+/eTyeT98a3Y9v+ucLb3TPF66X8F6QvIKabrcvtk766s63SjqTyaVSqdl4PBqNBiA8Yc0EIDgVj8/C5Vwmk66Y+XZL5S0SVoRbhQhwwcWlMtBm2M0gBMDxFDhYnLlvbDfuPbPDt19D6Vt58anXxaQb4IoHuMOmyl3xoD7Yvln8MdyU2uSElb7Nox592wS2TIBbR4a1Pxr6ZsJbw+P5kUxLJUWP53u345t+ftN+ANfexcNZ3mgvb165KJCTNGPf0n/Ju/+XNs44gOMAZa30uU4HhpzhIkAQA5REFKcAbReYIJLiYiIRDbKMQVorMiBNELtNVVRRiSKgRAEKbSn1gK0ZJqQMmq21E1cdDBomq03YbP+MPfdc7vLc9TnPXB7rSt8WzLf++uLzPM9dbAcl1D6u4RvMdVUe4R77HyPhCntwcwCl7ZuaOLJvxDrHqPv2JfgQfQuY4eyG5zBn8Q7+kDpIohUqevh++0Z5G46R+6iCom9ho75FgRZwszZAKicsUgnrU1w3mbcdbm8ykMxW21l7dTYZmNzjOML4pju/CUglfpEXy5nNhHwVL/ytDt2Jjy9adXyLgBKLkH1DFYETfEPAXRN88+j61isIJ4Sui/tR1ze8gQW6vq3b3qFv7pSif0/Nt74LaHjT9m3rQLi8F/VKXq8+3HqvfaO8DcfI6W/DGV6e2kZXVppQ3Xq+1aPPY2Bh75DaH4nmbATfHhF4e8qFIlkW0mYSgsix2f4Q91xnfCOeL2zwELgMQNX/neA31N+ZJDzgkXYbuGniu7wUybcIKLkI0Te5gnB+vwjcb/DfgwDQ7kGL0+lsKXRRMu5iCb6BhiBN39az4B36lq9NYc38fkq+JXvh8KbKMa0+NU0m4bVvQj/It6T+etK+TZG6zuRhbyj4RnUbjlF0/gwl32wAa/TO8e+vzwEhy/4xxzebTTBO+/reR9jw9mRv1cTaTXh21rT6nDuGb5zSNwRWYnN2P5eLfpdO8yJtsmBoXsO/MwQ9x96GafkWAgYKEXxra5N4Q8D5P/PDrok5j/bNiVICR/ZNu54FSr7hvNH3Lf/CyzDeF3nFa+5ncm++/fN0fPOY5eGNvP+WTEqPEHCv5K8U+fmkffuE0NQKmnPdFHyjug3HqKo4R8O3OwDLhPOmP7+J5dRr1F2gVT1p/03EDeeNGx9mq03qqtnhEKfiTd83kat0Ag5uiQQ2lgkP8Jux0LMiapJ1R32/ZQQYKELyDYWNcBA4Wbi4rm84cUZ8Aw0TlHzrtoMT8i3P1B6eRTs+h88YrU+fjm+BOsSbKmsfki3Q1/uNua7O3DskXxkibrsdIOkM+DbRKRw2tTa0D84b8+26uI6nML/R3YZj5PS34QweL4T/MuAbsEWJh6dk3gjrUww3FDdpYk2kWFMvpzu+Sb7hwPEyZMq76xWv8sg9OK2hp3gavjUDAzWTfUPACcT5rvpcPr+rCFz8LiBnQb7JtcjEtZB8CwYHBzp7GgC5gXkKvq2PAkW2S1I3y/Qt7z5MYR2680Z9C9++EausjN24HU4Rm7u/tlhVtbh2f+64vgXguSkpTzbb/3Wdw2q1OmBW67RHGuAebkmT3IEB30Cx9jEjvu2m3HR8o7wNx0jh23B0fWsqxbcokMvsKheuesenZN+2Jd7sdhMx1jP98VMFb/q+qa1CQ1phXIPACa4V/1BWWvV/jry/PgQMFSL41tHRJhkH87lcEDgxsm8WS6st228SfGuEP7hwKNE3UgsTgz2AUPtC2b7NAM0ulefb639SqmpfG/LtXqxSLnaPoBu0TWpx7li+9X/vuECsr8/swLflrOakdK5g3Ldl6BveQOm+TaVo+UZ5G44hdf5Mmb41AazuUnwbAViZqK5v6BPavm0X4sYx3uysUOG5LfB5jXlHc3zT9i2NxaMzA/yln3jxECKR4PlNPg1/Fy6B24Adcb4wCQw1+bZvHW3Cj5g4wbl8Bd78X6l8s7S22pJ3rzTGl5aGoW+NKGQcEk7HN9T8RGcrUNc1Vq5vN0/KN+/L1Fu99Jbu2+jlSkWXR1OKPGtVitY8+r4FIG/k4NymemGo7PntFhhT+ga6lkv1LUzNN8rbcAy5inOn4BsqA/DY+t2jfdvV9m272E4oK/PG2pOB/qGhQNLOCs8CNTVmMwIOY42DPcHGN5VvPJSL38QqTGXKl6Bu/Kcj+7lMJlcfnf2CR8LxOvdnrQJDrRJ8E5KGOLRI9QmLVDHkm0RbdWrmSnwJFo/HoW+WpUY5p5yeb7CFYBdQ1XDrf+qb92yK0Flvqb6FY5WqYmHS8IaPcHq+eTR50zhxKG//LQiCKt9A83Jpvk2lqPlGeRvuP3bu/rWpK4wDOAygCCe00hcSw1KAEJafSunIyMCtIDUWKcbEzoW2KZuGCbWUUKttakvtIqhYURE2QXzDzQoNIMtYMkWhnV0YdhWQtVKWrSVt/DN2zj333ue+nXvubUMtw+/N1aQ3Ag320+c5L9fByq7t8o03j+BdHV68BANzFn3T7MSKuKTazd8z3SZkz3TE73dFcPVG8lLJ26sTOE9fSLyBbzM0uAjLHnZBVp7Qim4FvoR3bGWfKFF2r879nIWblbN8O4M2lTMM3w5KNVzn/s5OItyXgnDx+I8Cbf7lqlLrdYE2nGM41/Pgm0Y48I2ddLsOuB3pW7mYN0xxwZ5vd2oMckfB226DXDb3LQUzp/x4kmLZ9mzT86d9uCHVFd72fDut8a2KZZUt32AYrpK+wTDcdvrGaUS9s64t+PbheYk3V24ay0bT1pZYJrzRKKu383ietT5RDeUb+EZD7m+JIB/RIbaswuDhbPZveAkL5egEKtu3MDJKEJnHHTbwDUKJI7xR4ahvVY2tt0mIbGJaqG/HWlpa8SEJ18L3DZIOaIHbgb6tlfKMNK7Z8e1cjWHkFjWy2zARU9+SwJvF+u33f/95lpPXvz224NskuoJPOpMQRmGdb6jPjm/H85JvHdiwgmNhbeHIekn7yb49srA2vtRRKFr3DYbhKusbDMNtv2+XGJJt3rf5Vzm/yFvqgqSbE8PWlrxAeVNXcAKHroTvBcs3Ytlht9q3DK7fVL59ov8+Zg9nefOnMePpg5sc4WJ63/YehIT24wOXcJJwgm+YtjjNsfgxKderiG+tNC1AnLFv6bGxSe0k6VSfBrjJneUbZ5lWhx3fPjf27XPp+i1j326Z+ZYw5K1JCGPFCNyxnMTK/oU0Sgt96Vhw8k0Mtet9C07Z8K2Yh/qtMG44gbMOhfFzR9G6bzAMV0nfYBhuu31bWZw7awe4s3zfoHzz50TeZONk3uqcdVC/kff7E75q4I3hG7t+W1TdIA52cj3h7M9qZ0yP/nrGTDh3u4FvNAepcxg4/OiUcg/7NhKXA8Ldxr7dpr6BcTSM9W/BqPbWb2NRda9zZSvzp5/h+Le4PmRhqVwuL5Xl12sbeWY24F1l4Z+Z7F94WMPIQ+hODXOZ7duAbk8WmVOY8DmdTt/EhPBClZ5lyGNL+09vhG8ItvWjfnym37SjqN43FLbu2/fwi6FQeK3Iel6K47Uy4xfZvlV4GM7Bya5t9m0VuVZX3Mhq3HNW6rcULd/qG6Zl3pz0AN5wpAJO8q22munbjNa3jLY/hefaG8XNmK3vDTCXf5wwG5oLGPkGwIXIQUq4kKDb4KDg22BcKxz4BuH4RhPoU7ahU+ouu31qi/uzTm9xfS8tJIpyZeHIswM/iuNF3v76qyzfrtLr11i+XWP6lppoUuPW5Et296Ry5H9vQy7VM9DlhBsm6TZs/fYTuZUI+Mas3YhtZNytD/8dRQED34LWfasC3xaMb1WgnbZ5vmHDNxiGq6RvMAy3vfUbspVZC769PNFQT7vTAWX1pgGOHC809RsGjvKmX9+rq99mMqr+1IuMgzvUTGYzvhHhwjZ9g9AeFYS79x327d4gSVxibiQ+MkJ9GzlAIxPXauIb3PpNwVg/UqZvR/hWei69bsyzA549L3F8G6phZoiWb8xcZvnWpSzfPE3ORKQ+GAy6aYI43vpIt9PTBNMLquSwbjzfSO1GbAujsHAGDH1DY1Z9G1I39uPrpY2LhTJ9QX9FvFVcWKK9qy3fQLhK+gbDcNvo2yKylY+4vkF7Wr+s6k59mjjr6uqqBcv+or5N1NbWki/ofWP3p9wMY99mTHxrZvlGhYsh4zQb+bYPfAvtDYnpxI/BQeLbKPaNZkRInPxBfHtAfKNpBeNYvkECCuHSqnY6vRN8W1e3p/wGtcDx7T7bt/vk+iO2b48YvvV6lLolexuCbiQHFvT0gnDJ7pRKOK5vpHaTbYuhGMu3Pp5vsDYEfIOFNx1QKRflC4Bdoz3fYBiuwr7BMBzft3OImx94vl3yIjsZtuLbGeqbqxd4605F1En1Et+S3wrp9WPfBrqE508NfJsx8i1jyTcXHoEz8w0xfOPdG07v2759e8kDlAsdlIULgW9gnJAHom8AnCwc0zdIFLrUsaCS3ys7wLe30sulKtOBniUYPjL37STbt5N0doGZWwzfnB7oTJM9XtBNQ1y9fO8kj2ciEbHk22T7FNmrQGo34ppwtuO5hWbUbORbMIhQc3iS69uQyreyps8vSs8W5AtLgnYs3yo8DOewll2V8c3Pqd9sN6hn+b7N/ykOv7m6Zd/aBrwuiB/HldtTV+frEr+g2OXQVf1CX79ljOo30p/y84l0MyWbvoFwUYu+0RDgDpEDSrjQoOjbqUF8ENsE3cC30aNCDhyVkOP7BntODSu42Lv3DWZGj+TNAoNFbzm+XWX7dpUOvzFzzdg3mFzwTAz4QTdd3N6IU/Hebiu+9eO+NI3GSN1GXBPPKPWNmdgNc9+OqyeeSyCR8PGvS0+gYCsIzb9t36BJraRvMAxXCd8+4/hmt4BzzVnw7Q9pemFa4ZurASI2r07sm36ParLWYn+a0fs2O7y4ODyrERkv8s2Q2PUNctOibxBCHDFOIk7yDTJ6amSUHKJvRDgROTkM35glXBop8vW7983Bn15Qv6+D41uNScj13SYx9k02y+NMKXRb3ig1looNauByylqvi++bOObWL9RtURQVzwDHNxS4YerbaZVvZe3nuCR+gGuKEqxAYts3yAcV9A2yqwK+neP4ZncEboXr2/w8Wf0mCqb3DbKc9DF8q96kb7OXfsniZM6qxF7Bvm2mP4WcD9j27RB+kITIgXPqrsq3UXLQSPXbx0fl2PMNBdNGkwzNV7i+vfetRzFtIFe/DYUj9BsZd2yoetScD+ZRPQlz36aiU3S8jdZuxDXhDPB9QzGWb7A2BNb3aidqxum4p/4z/z/Wb+4htm+QYWQ5i2a+zYsB3/bofYMIvnn1/WltdbXWt4yRbzMa31yHs08yRL3sHFJkFb91877BABzft0/30QcFDh97qXHkIfh2V8DtGwqc0rcvPqb5Cozj+wbply6HEaSP69v7/jThkXn7j7xzfWkrzeM4CwsC6AhkEprGGpBD6KGAKMViKX0nYEHG1lDIRVLF2FLtxbIdxTXq2JZWS+0uVrctM3RpGXZmSN51WbM7EKgUAjQtQBhDS4UJGvtn7HPN85zzOzePUyP1e45JPFHQg3z83S4cb4F8AXtzWIQS8j8SikPRZw/5JudMabyN2W4dlG2Cb1ZKWfCtTvCNuaNaB7VcB96g+iLjb4+t+AbXADqvDoH7ZYR+nVRZ9Zud/fb1WILoHO7POkdfjyG+NUK+2cff1l5meC7ig7bEN+OabyKBas+3k0IIcphvSBRwf2F8u1jVX/GBdP5HxLf3Vb4dHxgQjLPjGwTcAzlUOGfDt4OfX+AGWWtoleOt1MDgxghXqJMBF2vWDUqCfBO+KbPbujnTqnzrrO+05lsE8g2ab9kesJtnGpN5I9sA3sD6IvOnx835Btc422vCCd9EfiEp5xe8RD6vHH9DGQas2Tjpz5oln3gasWz7FzIZXX3Iq8z/+AZ7jQGnfGTz4FzUh5gXwLWZ8U0gDhOOi/DtIuIbOoUeIv14mvBNAI7IjG+Lc3O3B0e6TQGXkgviLfl28OtDhHvamlACDG/rxZxGxUJJcofOSQZca78V33qJ7dansdna6LM939pM+XY3a8e3YiUb/sP49qc/17T+zZ5v5x3xbQER7qgDG86/4IhvR/pBfUjomq/ExfiG8qdMnlCc1fdK0taHpKH9ltbx7d1LtocBfe1HRVwP8B7Undb3WrZoddjx7erJb/BBdPGbfzK+Id2gaCNw43x7eB9raGjo+BACHJfFfMtBalbCgrcRYMDVjm9BZ/W9+drU94rsaXNMZX9bSriY06nYIP0peQ9JEbi4Bd+o7cb41kZtNsY4yDcoU77Jo6CgG1oW9hvwT/dz/4L7+Nt7R3z7oCgB1+Yb5Buv71VXD1d1r6qkl745ac03O/80o/dPZ8i4NzakXM6hMr5lsHbCtyfAtLPjWxM7BOKu4gOL8u0G18MbD5neU74xDRHGQb5BzY1okwwp5qFKv89Irfuzyvu8PyvZzCwx/n8sL/BWRCLPOclDVWQHNWbJN8E2zjT3fAO1Icb5hXmWX/ikHwxXwdq//afu+eZzxrcpQDcr882ebzGvT1cAd+hw6DA6sS96jRt3IY43iW8eHd/SVFZ8E2Zamu9j0ILvxMu0i/76O33WS54h35oQ2poI4KLR6MkoBhw+kADfHuKHp0Tvv9PwDRGOCPANKqX50ftYHdygxLzF2vItG3bcXy+nIYJ71l8/1kxbSn3cOy0XGdpyxfX5PPtsS+Jb0jHfSNytD/DNtX8qakNM6kMY1wrMIJ7W5VUL+3d+iHu+nTbkG9QHF9E3i/jbr6sqGB9yiGvVy4JzgG9W9lvaNL8gwmx8q1YaJRgg39JYTucj3em2MYwjRnwjhCNP0ShhHKUb5Nt1BLfj/zj94pWq+gOIb2dnTswg3b9MGMdlO//tilHPqfSTD9aYb1tO5iM16KdfBPdkPpLgW3NSkc03hIYC+kVQacg25VvYhG9Ju/ibnDftxGyjH+7zC0NwsJTs+hfYna6QN+a1dzi8f+e/uefbtw75tvCq3l6/rznj29u3R3i21N/fpWutD/G3cHoBy0P4pvj9ShzYb1b+aZrVh8h9WJk0XbGl59u/LedbulKvMd+aGOSiRFfxQXRjBfFt+el1Koy3FxIsn549gfiGdRnpviO+wZaFFKjy7asx3+bL9vMtRZCuPM+u7Nl8yxjlW5zfRRx9KxaCPgWZQlulfE7mG/RPrxnyTfScYhsO5Bd2VR+yYcC3gm7v/zxvyNrW9jXkD878XignI+CUKQd8e0v0+lKJe6iJri7ZfAvF1Sr5quE3jycWRxrz7CS/gAT4RuEG+Zbek/nkTUJRTrgq4Ajflq5zPVXrtXybEYTDGrpszTfRdAo91A6AvFrxLRveyXzyMCfens0nTzK+8exCAfml2zRf2lPE3qmObwGfVOE7O2ld3/tI7ltgnOvjNb6u6nsfg8Gg8LYVxMseuf20XHeA9i+4suDerVny7a2QZMD5lH7iolLzLYTwxsCn/hTi5hs+WWGIRDjb/oU0tN+YIN/2ZL9MkwZwUQ64FaSlFS3fnp6u1/EN440DjsvR/gXYkjUIykZ2xTd1F3wLgv0yFgu0gmZ8A4CDeLMEnOl+mYTWfvNOI76x/Yjz1TK44idQ4CsPSoJ8AzVwEVorgl/zvKqb/qy7JoOPC1vzGxvBBvnO07sazlc2KmxwUv6A7c+CmvDbdWY559sb3MJA5S/F73WxgUgxvHVGmG8ccEiNQIBv9vZbOkNMPcg3lqNA+pz7AZuMALeysvwL0vLKM863UXTc6NTz7Qw+iGYuz1jz7cHtK1cGUwYxuA5qwC1KJp0LvoElqD+451td2HY/IARgcE/2A4rZls0xZkwrCAXTPs63HBUmHlNAdk9bE/b99aT3tFeajcSfI276628a8K08Te9UTpuorpvmt5BfP3D7T6EWJo6+UhwH3yDfZB1Jqt7q8tNSfzwZi8UTeEEg1z2RXaCE8zTiQ8hufi9qmjfiWzqTSUO+ZbA+935nDd7wien2zI/btgMBpZPybXQUn8vaZMV/kPk2fGYYE24GI+7yGQu+XWmjCdyUQT4BdGnNuePbgKaH2RXfRHSNqxAEsbeCeDcnvmfv9jsTXrXO8u4FRIwy49unqvm2rZqYb7Z8W+xexDYc5hz5GKHPjHsGspyPdNdocUVuM1wUEkmEje0iuF7T/fW14BvUwu9meFvYGd/eNEoNWV4yEYl1mfLCEUY3dBC2eaztt4wT+43vAkw7yi+IAjgX6vjNxn5raYq2RFuwVyq0vDRKtQT4NoyECSfLkG8PIvq2+hQw125LxHPHtx+0WSpiwZ0f2Bnf4PaYXI+mTKTSkwMbaAz5BnXz+Shi3N9Gn1ObBhLu5+8R4/7+/c+Cbhb99c3X2L/1Tewlk1eVMucbusAUKInq3tbZSWfzLR8NPjL8sBPk27eGied5HuPU17xJN7dMr0O+wcDb7gXpxgNvtefbhN8F3gDfGOASHHBQSqLrkJRdEOYb4FuGKm2QP01DvlH3FNpvYD/grhMM49Z8a8FnSzT6Sz3gG9FyQL6ufCR0w4dGRnzrlUt6waWU3kHtdcQ3qJKujvI0MmuUnfINGhLlhnyFuKF1lXxDGexHteebe0G+cQNOtJ8qKBRfzpe8dVsCbz1VvKljUvI0YTcfyb0g324iAbxlN7eQKuh+9awXptEiwE/aJTKVrTC+XAhv2e4HhIE39zILvNWeb+9eWQ0lt+cbtOC8Jnjr7wpJ0bevmf2GTtP8aQbsXyBhNi3fKNvSGcf1Ie4d1EumfGup0q2lZeWFId8ujC6pmtDm2WGm9uH2M+1WfEtpaoxZJwOogRMua4dLvj2uN9CAC75lN8lFofJ6uKEhvM6vigVPNeHbZIhG4LwUcBtlEtPKieRCWOV488q1IfHS3vDtc94Bq8Cbe8HA277g29SEKd0CE2tu+Pa6Me4zMuG8agLhjasafQP2m91+QMg3bqZB/xTU98oad2W+Qb4RqkmAQ3zrhHy7gDS69Ewz1+kUhVs7wRs+yQPgG2svBdG1iMAZyDksOuIblM+omtIN37L5XNFW5WC2Nnwr9X9FAJdkgNvMoRSqoFuxwVsd/jYGSnu/GL7BwJt7gcBbTfk2hfUOJRYsZiJNre2Ub2+oGlG+VNXTzb+a5M6pyJ7i0yT+xtm0g/q3DOBbGgn2n3KNu8Ib5FsLt9/wgbUS0PPtAtOSsOz8MwRvx4j1xnSGPAK+kdo2y4KQOX0ALuWSbwP1UIorvmXzZVu85bO14lspQQEX89EW7Mo6xxvJiFQzp4mQGN7bGi99WXyDgTf3AoG3WvLNfjBSJ6gLsePbG6Ejh5OTqow4v7907R7GG5dHa795TOJvhvvrDfiGA3UG9SFgvqVOt3o7650rcus3Q75hqDXRByJovyG8cS3964WqKIr6YuIEwtsxdLQfaxcy45vhVKRFiXjgglO+wRIRqAFXfMMb1i01HczWjm+lxCwmV/Phc3T9ghpk03vL4aCvarzFWlulRQ2lL4RvMPC2e4HAW634BqNuUIGjU2tO+fbGQK9DXT8lVtlkXr9vtT+JauEkvInsKUeb4/56zKuXgG+YhA74BnXp1p0n4+Pjvb2RSHd3d19HR0cb9fiQ+rq7I5FI7/j4kyd37tz6L/sOyDdGNkG4Jk2YTbnO+Xbq1CnkpD5/vrD2HL0cJnw7dqwdHXZ8awN808bbevVfNuKYb7DGF+g7d3zLbm4XLbS9ma0l30p0cUzzV7FJL92fVaoEg8EKTbEEAp3KZHJW3rJ17v/s3b9LG2Ecx/HRRbJ4bc8I0eTkqs2Row6F0tAsZhAilJilJCGtkCylhNuKQwmhgw4tgkhdQoYuReJYSCfByaF/wIFFSGnAP6PPD80nuefBhOvpA0feSW+wSwvy4nvP81zihsM3LLwFmbDwpso3CNdjcojNX0C3sb79kqdls9Hdaqler5eq36NZoptOfNM9m6cUNxg30fx2IjsfcsJ+3JH5xoNvgQXfPFmJRHt2qK8HHLeR4nHDSNK4bkvkxS9y316P+dC3LQE8P77xjoRfC9eHb6xLnFbwdrp5+VOtb263GmHCNYpld5UQt8D/4+z7nZe7dYf8rfDNWSHwDQtvQYaFN/W+4WRvb1nAbYU+kOXXN6RFo2aWZ5o6bWR6Y8Qx2+ZufX6hM9H+AhWu05Hvn96/bwS4oX/gt4MM5+3NEG7xmlFLGknW2lKSyrbELjSJb9sjh0E/Cz997j0ysuHLN15rxrO/0PLjG2+xIOetQO5NVfmGyo7NhLPNYj3vPlhdXaY93CmXnEZsaHaLFPNuaHzDwluQQTeVvomRTYbePFVuYf6sd/EBk5tv3wBcVB+kYXojYXxjf27x7WSS+W2Q8vnNSli0ROL47BqelYNMLgfa0vF0vEZ0IyV5RDfeGr+seXwTv2BhW/IQatM70PnwDbX2bvZRF14etXycf0MzdF3L0x/opsY3VHGIbpSwWMTUHadYdBzdJLbFItCtAd3C4BsW3oIMC2/KfAs4+CZPG/FNk45v9IomuD/lt6HC8wvy8yH4/tO79c2y6HvwsqwUuR4et9vt48N9wlsunRvWjWTUjKQx4I0Jh+Abaj6V3Ho2vful7zHj+fMNtVpvScw2f76hvX6BHi3jnX4s9HHoTZlvqFw1Y5S4iG3bMRq2FCh7tl7acd0w+YaFtyDDwlvofQNwus6I065fA+AQxrdx8xt8E9ffOnLfOqy79s26sY1daKlU6jFrfz/DeEun1ylu9EXi05vhGd+kvqHmFnYOZL55b2P9+ibm3zd0uXjev9rcvOqf/8Wym1rfULdS1RscNkSxsxtOqeyiEPimoDD6BuB0kwvn2Ttl4xvr/z8/5AcDjrxV+YbA2wtShumWWydx3uI1+jYwvWF8E3wT+vRq69nGu+Zv9MW75aDeNx8p9A3l61VHb5CBjWdHzN1iqYLJberb1DcxTaeZGN8k89vcON9mx/pGcaPneOXPZynwzcMbnd7iLMbb6OLbkyXWI/ISfAss0bepb2I7+XKlTquU810XTX2b+iZPo+ObJsxvaMznv3Um9I3wJrs/HXSfvv1r5+5VI4ehKAA/QgoXrsLaBNaggelEii22yQvkPaVyCKmmMswDLGy3xTb7Gnt9r+RjRTYmExCj5B55gn+Y9uPIUibWt5+U0N76p74X4R64vYX6Zg6mm0bb8iGjjG/q2/VR39Q3ABc2vu3Ut83/Pz29PCLPE2KU50eE975xfPrg5VRofnqkAdzy2Smlj7j1ePcmwAXZwFvNvl1eP5BLVb6pb+rbSGmowaG/7dY39Dc0uEX4xsknt7yY5/IHheanRwJORuAtrW+UPgLHOcT6Zkwno5V0/KnPt3lx9Pef16uDX1Q6375v6pv6Nkoa9Lf9+pb7xko5NszRkHO5OR3ehQccL3/jZRnfjhLCTTJk9S2WN4ngZg9GgGuX6ar1TfLv8u3KXIi3WnxT39S3cU6T7g2Bb/v9zdMAWWwbieZZNAfEuNPxLXyH46c4SgnfJEPq26K9PcRYy7oxbsTbW+HaKn37eCrxTX1T30YJgJvTJMLd7fQ3ISwhzktxczN8MM57ApAGX5TubyhvG/UNuE0H8cbJdbtd39Q39U19GzkZcN9Zt3f3txM277qleLhAXFhF9XTQxxX3bRjA26pvdhrMmxXdZCSp0LdfX8E39U19G9dyfz+Sa9kv9+L1235/8+FDbqVPRD+H0/AwOMcp4dvAuEXe0tUFtDfRzQbdUN/UtzQ36Jv6pr6t4sYBcHSStbfafRvINuTH9vTUxhgL3kwNvqlv6pv2t3XdBLjt+lZ/f1vqxrxl9S3XDfPTOnxT39Q3ff+W6RYz3gXf3tnfXIDN+XBH9IrLqMlbOefdvP7A2rky798WutHBgW/9U9gaYulYBa4S39Q39U3XF1LccuCabPW0et/SqenAulE2Z6fGWOiWp7tV39Q39U3XTyNueZoA3Gfrb8CNgVtbPcXSAscgbb5DpKvXt/P5/Pfa0He/hG/q239BOcy5ZnLYXQAAAABJRU5ErkJggg==", Bb = _({
  name: "SdsLayoutSeiExternalFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    },
    socialSprites() {
      return Ub;
    }
  }
}), Qb = { "data-id": "sds-layout-sei-external-footer" }, Vb = /* @__PURE__ */ _a('<div class="py-8 text-white bg-gray-500"><div class="container px-4 mx-auto space-y-6 md:px-8"><ul class="grid grid-cols-1 gap-6 md:grid-cols-3"><li><a href="https://vulcoord.cert.org/VulReport/" class="hover:underline focus:underline focus:outline-none">Report a Vulnerability to CERT/CC</a></li><li><a href="https://sei.cmu.edu/subscribe-to-sei-bulletin/" class="hover:underline focus:underline focus:outline-none">Subscribe to SEI Bulletin</a></li><li><a href="https://sei.cmu.edu/legal/request-permission-to-use-sei-material" class="hover:underline focus:underline focus:outline-none">Request Permission to Use SEI Materials</a></li></ul></div></div>', 1), Hb = { class: "py-8 text-gray-100 bg-gray-900" }, Gb = { class: "container px-4 mx-auto space-y-6 md:px-8" }, Wb = { class: "grid grid-cols-1 gap-8 md:grid-cols-3" }, Fb = /* @__PURE__ */ s("div", null, [
  /* @__PURE__ */ s("address", { class: "not-italic" }, [
    /* @__PURE__ */ ee(" Carnegie Mellon University"),
    /* @__PURE__ */ s("br"),
    /* @__PURE__ */ ee(" Software Engineering Institute"),
    /* @__PURE__ */ s("br"),
    /* @__PURE__ */ ee(" 4500 Fifth Avenue"),
    /* @__PURE__ */ s("br"),
    /* @__PURE__ */ ee(" Pittsburgh, PA 15213-2612"),
    /* @__PURE__ */ s("br"),
    /* @__PURE__ */ s("a", {
      href: "tel:412-268-5800",
      target: "_self",
      class: "hover:underline"
    }, "412-268-5800")
  ])
], -1), qb = { class: "space-x-2" }, Jb = { class: "inline-block" }, Kb = /* @__PURE__ */ s("span", { class: "sr-only" }, "Facebook", -1), Xb = [
  Kb
], Zb = { class: "inline-block" }, e2 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Twitter", -1), t2 = [
  e2
], n2 = { class: "inline-block" }, r2 = /* @__PURE__ */ s("span", { class: "sr-only" }, "LinkedIn", -1), o2 = [
  r2
], a2 = { class: "inline-block" }, i2 = /* @__PURE__ */ s("span", { class: "sr-only" }, "YouTube", -1), s2 = [
  i2
], l2 = { class: "inline-block" }, u2 = /* @__PURE__ */ s("span", { class: "sr-only" }, "iTunes", -1), c2 = [
  u2
], f2 = /* @__PURE__ */ s("div", null, [
  /* @__PURE__ */ s("a", {
    href: "https://sei.cmu.edu/contact-us/",
    target: "_self",
    class: "py-8 text-xl text-center transition-colors duration-100 rounded-none btn btn-outline btn-light btn-lg btn-block"
  }, " Contact Us ")
], -1), d2 = /* @__PURE__ */ _a('<ul class="space-x-1 text-sm"><li class="inline-block"><a href="https://www.sei.cmu.edu/locations/index.cfm" target="_self" class="hover:underline">Office Locations</a></li><li class="inline-block"> | </li><li class="inline-block"><a href="https://www.sei.cmu.edu/additional-sites-directory/index.cfm" target="_self" class="hover:underline">Additional Sites Directory</a></li><li class="inline-block"> | </li><li class="inline-block"><a href="https://www.sei.cmu.edu/legal/index.cfm" target="_self" class="hover:underline">Legal</a></li><li class="inline-block"> | </li><li class="inline-block"><a href="https://www.sei.cmu.edu/legal/privacy-notice/index.cfm" target="_self" class="hover:underline">Privacy Notice</a></li><li class="inline-block"> | </li><li class="inline-block"><a href="https://www.cmu.edu/hr/ethics-hotline/" target="_self" class="hover:underline">CMU Ethics Hotline</a></li><li class="inline-block"> | </li><li class="inline-block"><a href="https://www.sei.cmu.edu/index.cfm" target="_self" class="hover:underline">www.sei.cmu.edu</a></li></ul>', 1), y2 = { class: "text-sm" };
function p2(e, t, n, r, o, i) {
  return u(), f("footer", Qb, [
    Vb,
    s("div", Hb, [
      s("div", Gb, [
        s("div", Wb, [
          Fb,
          s("ul", qb, [
            s("li", Jb, [
              s("a", {
                href: "https://www.facebook.com/SEICMU/",
                rel: "noopener",
                target: "_blank",
                class: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 facebook",
                style: De({
                  height: "30px",
                  width: "30px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${e.socialSprites})`,
                  backgroundPosition: "0 0",
                  backgroundSize: "auto 100%"
                })
              }, Xb, 4)
            ]),
            s("li", Zb, [
              s("a", {
                href: "https://twitter.com/sei_cmu",
                rel: "noopener",
                target: "_blank",
                class: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 twitter",
                style: De({
                  height: "30px",
                  width: "30px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${e.socialSprites})`,
                  backgroundPosition: "-32px 0",
                  backgroundSize: "auto 100%",
                  content: ""
                })
              }, t2, 4)
            ]),
            s("li", n2, [
              s("a", {
                href: "https://www.linkedin.com/company/software-engineering-institute",
                rel: "noopener",
                target: "_blank",
                class: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 linkedin",
                style: De({
                  height: "30px",
                  width: "30px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${e.socialSprites})`,
                  backgroundPosition: "-96px 0",
                  backgroundSize: "auto 100%"
                })
              }, o2, 4)
            ]),
            s("li", a2, [
              s("a", {
                href: "https://www.youtube.com/user/TheSEICMU",
                rel: "noopener",
                target: "_blank",
                class: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 youtube",
                style: De({
                  height: "30px",
                  width: "30px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${e.socialSprites})`,
                  backgroundPosition: "-129px 0",
                  backgroundSize: "auto 100%"
                })
              }, s2, 4)
            ]),
            s("li", l2, [
              s("a", {
                href: "https://podcasts.apple.com/us/podcast/software-engineering-institute-sei-podcast-series/id566573552?mt=2",
                rel: "noopener",
                target: "_blank",
                class: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 itunes",
                style: De({
                  height: "30px",
                  width: "30px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${e.socialSprites})`,
                  backgroundPosition: "-161px 0",
                  backgroundSize: "auto 100%",
                  borderRadius: "50%"
                })
              }, c2, 4)
            ])
          ]),
          f2
        ]),
        d2,
        s("div", y2, " \xA9 " + M(e.year) + " Carnegie Mellon University ", 1)
      ])
    ])
  ]);
}
const kt = /* @__PURE__ */ E(Bb, [["render", p2]]), h2 = _({
  name: "SdsLayoutSeiExternalNav",
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}), m2 = {
  "data-id": "sds-layout-sei-external-nav",
  class: "space-y-4"
}, g2 = { class: "text-xl text-gray-600 break-words" }, v2 = { class: "pb-2 space-y-2" }, w2 = ["href"], b2 = {
  key: 0,
  class: "pt-2 border-t"
}, M2 = ["href"], L2 = { class: "group-hover:underline" }, C2 = /* @__PURE__ */ s("svg", {
  viewBox: "0 0 32 32",
  class: "block w-5 h-5 my-auto fill-current",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", { d: "M11.303 8l11.394 7.997L11.303 24z" })
], -1);
function S2(e, t, n, r, o, i) {
  return u(), f("div", m2, [
    (u(!0), f(N, null, A(e.page.nav, (a) => (u(), f("div", {
      key: a.title,
      class: "p-4 space-y-2 bg-gray-100"
    }, [
      s("h3", g2, M(a.title), 1),
      s("ul", v2, [
        (u(!0), f(N, null, A(a.items, (c) => (u(), f("li", {
          key: c.title
        }, [
          s("a", {
            href: c.url,
            class: "text-red-500 break-words hover:text-red-700 hover:underline"
          }, M(c.title), 9, w2)
        ]))), 128))
      ]),
      a.seeAll ? (u(), f("div", b2, [
        s("a", {
          href: a.seeAll.url,
          class: "inline-flex font-bold uppercase group text-secondary"
        }, [
          s("span", L2, M(a.seeAll.title), 1),
          C2
        ], 8, M2)
      ])) : w("", !0)
    ]))), 128))
  ]);
}
const Dt = /* @__PURE__ */ E(h2, [["render", S2]]), j2 = _({
  name: "SdsLayoutSeiExternalHeaderContent",
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}), T2 = {
  "data-id": "sds-layout-sei-external-header-content",
  class: "space-y-4"
}, N2 = {
  key: 0,
  class: "text-3xl text-gray-500 break-words font-extralight"
}, k2 = {
  key: 1,
  class: "text-xl text-gray-500 break-words"
}, D2 = ["innerHTML"];
function O2(e, t, n, r, o, i) {
  return u(), f("div", T2, [
    e.page.title ? (u(), f("h3", N2, M(e.page.title), 1)) : w("", !0),
    e.page.subtitle ? (u(), f("h4", k2, M(e.page.subtitle), 1)) : w("", !0),
    e.page.description ? (u(), f("div", {
      key: 2,
      class: "max-w-screen-md prose break-words prose-red",
      innerHTML: e.page.description
    }, null, 8, D2)) : w("", !0)
  ]);
}
const Ot = /* @__PURE__ */ E(j2, [["render", O2]]), _2 = _({
  name: "SdsLayoutSeiExternalMasthead",
  components: {
    LayoutSeiExternalNav: Dt,
    LayoutSeiExternalHeaderContent: Ot
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}), x2 = {
  "data-id": "sds-layout-sei-external-masthead",
  class: "py-8 bg-white"
}, $2 = { class: "container px-4 mx-auto md:px-8" }, z2 = {
  key: 0,
  class: "grid grid-cols-1 gap-8 lg:grid-cols-12"
}, I2 = { class: "order-2 lg:col-span-3 lg:order-1" }, P2 = {
  key: 0,
  class: "order-1 lg:col-span-9 lg:order-2"
};
function E2(e, t, n, r, o, i) {
  const a = ye("layout-sei-external-nav"), c = ye("layout-sei-external-header-content");
  return u(), f("div", x2, [
    s("div", $2, [
      e.page.nav ? (u(), f("div", z2, [
        s("div", I2, [
          ge(a, { page: e.page }, null, 8, ["page"])
        ]),
        e.page.title || e.page.subtitle || e.page.description ? (u(), f("div", P2, [
          ge(c, { page: e.page }, null, 8, ["page"])
        ])) : w("", !0)
      ])) : (u(), f(N, { key: 1 }, [
        e.page.title || e.page.subtitle || e.page.description ? (u(), ve(c, {
          key: 0,
          page: e.page
        }, null, 8, ["page"])) : w("", !0)
      ], 64))
    ])
  ]);
}
const _t = /* @__PURE__ */ E(_2, [["render", E2]]), A2 = _({
  name: "SdsLayoutSeiExternal",
  components: {
    LayoutSeiExternalHeader: Nt,
    LayoutSeiExternalFooter: kt,
    LayoutSeiExternalMasthead: _t
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    },
    removeContentPadding: {
      type: Boolean,
      default: !1
    },
    showMasthead: {
      type: Boolean,
      default: !1
    }
  }
}), Y2 = {
  "data-id": "sds-layout-sei-external",
  class: "flex flex-col w-full min-h-screen text-gray-900 bg-white"
}, R2 = { class: "flex-grow" }, U2 = {
  key: 1,
  class: "container p-4 mx-auto md:p-8"
};
function B2(e, t, n, r, o, i) {
  const a = ye("layout-sei-external-header"), c = ye("layout-sei-external-masthead"), l = ye("layout-sei-external-footer");
  return u(), f("div", Y2, [
    j(e.$slots, "header", {}, () => [
      ge(a, { page: e.page }, null, 8, ["page"])
    ]),
    e.showMasthead ? j(e.$slots, "masthead", { key: 0 }, () => [
      ge(c, { page: e.page }, null, 8, ["page"])
    ]) : w("", !0),
    s("main", R2, [
      s("div", {
        class: L({
          "bg-gray-50": e.showMasthead
        })
      }, [
        e.removeContentPadding ? j(e.$slots, "default", { key: 0 }) : (u(), f("div", U2, [
          j(e.$slots, "default")
        ]))
      ], 2)
    ]),
    ge(l)
  ]);
}
const Qn = /* @__PURE__ */ E(A2, [["render", B2]]);
Qn.install = (e) => {
  e.component(Qn.name, Qn);
};
kt.install = (e) => {
  e.component(kt.name, kt);
};
Nt.install = (e) => {
  e.component(Nt.name, Nt);
};
Ot.install = (e) => {
  e.component(Ot.name, Ot);
};
_t.install = (e) => {
  e.component(_t.name, _t);
};
Dt.install = (e) => {
  e.component(Dt.name, Dt);
};
Tt.install = (e) => {
  e.component(Tt.name, Tt);
};
const Q2 = _({
  name: "SdsLayoutStacked",
  props: {
    stickyHeader: {
      type: Boolean,
      default: !1
    },
    stickyFooter: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    }
  }
}), V2 = {
  "data-id": "sds-layout-stacked",
  class: "flex flex-col w-full min-h-screen"
}, H2 = { class: "flex-grow" };
function G2(e, t, n, r, o, i) {
  return u(), f("div", V2, [
    e.hasHeaderSlot ? (u(), f("header", {
      key: 0,
      class: L(["z-30 flex-shrink", { "sticky top-0 shadow": e.stickyHeader }])
    }, [
      j(e.$slots, "header")
    ], 2)) : w("", !0),
    s("main", H2, [
      j(e.$slots, "default")
    ]),
    e.hasFooterSlot ? (u(), f("footer", {
      key: 1,
      class: L(["z-20 flex-shrink", { "sticky bottom-0 shadow": e.stickyFooter }])
    }, [
      j(e.$slots, "footer")
    ], 2)) : w("", !0)
  ]);
}
const Vn = /* @__PURE__ */ E(Q2, [["render", G2]]);
Vn.install = (e) => {
  e.component(Vn.name, Vn);
};
St.install = (e) => {
  e.component(St.name, St);
};
const W2 = _({
  name: "SdsLoadingBox",
  props: {
    height: {
      default: "h-full",
      type: String
    },
    width: {
      default: "w-full",
      type: String
    }
  }
});
function F2(e, t, n, r, o, i) {
  return u(), f("span", {
    "data-id": "sds-loading-box",
    class: L(["loadingBox rounded flex flex-row relative overflow-hidden bg-gray-200", e.width, e.height])
  }, null, 2);
}
const Hn = /* @__PURE__ */ E(W2, [["render", F2], ["__scopeId", "data-v-73fb2d42"]]);
Hn.install = (e) => {
  e.component(Hn.name, Hn);
};
const q2 = _({
  name: "SdsLoadingSpinner",
  props: {
    size: { type: String, default: "md" },
    label: { type: String, default: null }
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case "lg":
          return "h-20 w-20";
        case "sm":
          return "h-4 w-4";
        case "auto":
          return "";
        default:
          return "h-12 w-12";
      }
    }
  }
}), J2 = {
  "data-id": "sds-loading-spinner",
  role: "status"
}, K2 = /* @__PURE__ */ s("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), X2 = /* @__PURE__ */ s("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Z2 = [
  K2,
  X2
], eM = {
  key: 0,
  class: "sr-only"
};
function tM(e, t, n, r, o, i) {
  return u(), f("div", J2, [
    (u(), f("svg", {
      class: L(["animate-spin", e.sizeClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, Z2, 2)),
    e.label ? (u(), f("span", eM, M(e.label), 1)) : w("", !0)
  ]);
}
const Gn = /* @__PURE__ */ E(q2, [["render", tM]]);
Gn.install = (e) => {
  e.component(Gn.name, Gn);
};
const nM = _({
  name: "SdsModal",
  components: {
    ClientOnly: at
  },
  directives: {
    uid: At,
    focus: {
      mounted(e) {
        e.focus();
      }
    }
  },
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md"
    },
    zIndex: { type: String, required: !1, default: "50" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const r = V(null), o = V(null), i = V(!1), a = B(() => !!n.title), c = B(() => !!n.footer), l = B({
      get() {
        return e.modelValue;
      },
      set(b) {
        t("update:modelValue", b);
      }
    }), d = B(() => {
      switch (e.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    });
    Ds(() => {
      m();
    });
    const y = () => {
      typeof document > "u" || (document.documentElement.classList.add("modal-prevent-scroll"), setTimeout(() => {
        document.addEventListener("keyup", h);
      }, 0));
    }, m = () => {
      typeof document > "u" || (document.documentElement.classList.remove("modal-prevent-scroll"), document.removeEventListener("keyup", h));
    }, p = () => {
      i.value = !1;
    }, h = (b) => {
      b.key === "Escape" && p();
    }, g = (b) => {
      if (o.value === null)
        return;
      if (b.key === "Escape") {
        p();
        return;
      }
      const k = o.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (k.length < 2 && b.key === "Tab") {
        b.preventDefault();
        return;
      }
      const T = k.length - 1;
      b.key === "Tab" && b.shiftKey === !1 && b.target === k[T] ? (b.preventDefault(), k[0].focus()) : b.key === "Tab" && b.shiftKey === !0 && b.target === k[0] && (b.preventDefault(), k[T].focus());
    };
    return st(l, (b) => {
      i.value = b, !(typeof document > "u") && (b ? y() : m());
    }, { immediate: !0 }), {
      titleWrapper: r,
      modalContainer: o,
      showContent: i,
      hasTitleSlot: a,
      hasFooterSlot: c,
      showModal: l,
      zIndexClass: d,
      makeDomChanges: y,
      removeDomChanges: m,
      close: p,
      handleEscKey: h,
      checkKeyEvent: g
    };
  }
});
const rM = ["aria-labelledby"], oM = { class: "flex items-center p-6 pb-0" }, aM = {
  key: 0,
  ref: "titleWrapper",
  class: "text-xl leading-tight"
}, iM = /* @__PURE__ */ s("svg", {
  class: "w-6 h-6",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", { d: "M6 18L18 6M6 6l12 12" })
], -1), sM = [
  iM
], lM = { class: "p-6" }, uM = {
  key: 0,
  class: "p-6 pt-0"
};
function cM(e, t, n, r, o, i) {
  const a = ye("client-only"), c = lt("uid"), l = lt("focus");
  return u(), ve(a, null, {
    default: te(() => [
      (u(), ve(ks, { to: "body" }, [
        ge($t, {
          "enter-active-class": "transition-opacity duration-75",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition-opacity duration-75",
          "leave-to-class": "opacity-0",
          onAfterEnter: t[4] || (t[4] = (d) => e.showContent = !0),
          onAfterLeave: t[5] || (t[5] = (d) => e.showModal = !1)
        }, {
          default: te(() => [
            e.showModal ? (u(), f("div", {
              key: 0,
              ref: "modalContainer",
              "data-id": "sds-modal",
              class: L(["fixed inset-0 block h-full px-2 py-0 overflow-auto bg-black bg-opacity-50 sds-modal", [e.zIndexClass]]),
              onMousedown: t[2] || (t[2] = me((...d) => e.close && e.close(...d), ["self"])),
              onKeydown: t[3] || (t[3] = (...d) => e.checkKeyEvent && e.checkKeyEvent(...d))
            }, [
              ge($t, {
                "enter-active-class": "transition-all duration-75",
                "enter-from-class": "transform scale-90 opacity-0",
                "leave-active-class": "transition-all duration-75",
                "leave-to-class": "transform scale-90 opacity-0",
                onAfterLeave: t[1] || (t[1] = (d) => e.showModal = !1)
              }, {
                default: te(() => [
                  e.showContent ? (u(), f("div", {
                    key: 0,
                    role: "dialog",
                    "aria-labelledby": e.titleWrapper && e.titleWrapper.id || void 0,
                    class: L(["relative block w-full mx-auto my-2 bg-white border rounded shadow-xl dark:bg-gray-800 dark:border-gray-700 md:my-8", {
                      [e.zIndexClass]: !0,
                      "md:max-w-sm": e.size === "sm",
                      "md:max-w-xl": e.size === "md",
                      "md:max-w-xl lg:max-w-4xl": e.size === "lg",
                      "md:max-w-xl lg:max-w-4xl xl:max-w-6xl": e.size === "xl"
                    }])
                  }, [
                    s("header", oM, [
                      e.hasTitleSlot ? ne((u(), f("div", aM, [
                        j(e.$slots, "title")
                      ])), [
                        [c]
                      ]) : w("", !0),
                      ne((u(), f("button", {
                        "aria-label": "close",
                        class: "inline-block p-0 ml-auto text-3xl text-gray-500 bg-transparent border-0 cursor-pointer hover:text-gray-700 hover:outline-none focus:text-gray-700 focus:outline-none dark:hover:text-gray-300 dark:focus:text-gray-300 active:text-gray-500 dark:active:text-gray-600",
                        onClick: t[0] || (t[0] = (...d) => e.close && e.close(...d))
                      }, sM)), [
                        [l]
                      ])
                    ]),
                    s("main", lM, [
                      j(e.$slots, "default")
                    ]),
                    e.hasFooterSlot ? (u(), f("footer", uM, [
                      j(e.$slots, "footer")
                    ])) : w("", !0)
                  ], 10, rM)) : w("", !0)
                ]),
                _: 3
              })
            ], 34)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ]),
    _: 3
  });
}
const Wn = /* @__PURE__ */ E(nM, [["render", cM]]);
Wn.install = (e) => {
  e.component(Wn.name, Wn);
};
function fM(e, t, n = !1) {
  let r;
  return function(...o) {
    const i = this;
    clearTimeout(r), r = setTimeout(function() {
      r = null, n || e.apply(i, o);
    }, t), n && !r && e.apply(i, o);
  };
}
const dM = _({
  name: "SdsMultiselect",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    valueKey: {
      type: String,
      default: "key"
    },
    labelKey: {
      type: String,
      default: "value"
    },
    modelValue: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingMsg: {
      type: String,
      default: "Loading..."
    },
    defaultMsg: {
      type: String,
      default: ""
    },
    noResultsMsg: {
      type: String,
      default: ""
    },
    cannotAddResultsMsg: {
      type: String,
      default: "You have added the maximum amount of items allowed."
    },
    invalidInputMsg: {
      type: String,
      default: "HTML input is not allowed."
    },
    hideTags: {
      type: Boolean,
      default: !1
    },
    canLoopOptions: {
      type: Boolean,
      default: !1
    },
    toggleSelectedOptions: {
      type: Boolean,
      default: !1
    },
    hideSelectedOptions: {
      type: Boolean,
      default: !1
    },
    closeOnSelection: {
      type: Boolean,
      default: !0
    },
    canSearch: {
      type: Boolean,
      default: !0
    },
    disableRemoveLastSelection: {
      type: Boolean,
      default: !1
    },
    clearInputOnSelection: {
      type: Boolean,
      default: !0
    },
    clearOptionsOnSelection: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: ""
    },
    openDirection: {
      type: String,
      default: "auto"
    },
    maxHeight: {
      type: Number,
      default: 200
    },
    hideCaret: {
      type: Boolean,
      default: !1
    },
    showClear: {
      type: Boolean,
      default: !1
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: void 0
    },
    maxItems: {
      type: Number,
      default: -1
    },
    enforceLowercaseNewTag: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update-selected", "update-options", "open", "close", "focus"],
  data() {
    return {
      debouncePositionDropdown: null,
      isOpen: !1,
      active: !1,
      inputWidth: 0,
      arrowCounter: 0,
      bottom: "auto",
      dropUp: !1
    };
  },
  computed: {
    showDropdown() {
      return this.showLoading || this.showDefault || this.showNoResults || this.showResults || this.showCannotAddResults || this.showInvalidInput;
    },
    showLoading() {
      return this.loading && this.isOpen && this.canAddItem;
    },
    showResults() {
      return this.filteredOptions.length > 0 && this.isOpen && !this.loading && this.canAddItem;
    },
    showDefault() {
      return this.defaultMsg !== "" && this.trimmedValue === "" && this.filteredOptions.length < 1 && !this.loading && this.isOpen && this.canAddItem;
    },
    showNoResults() {
      return this.noResultsMsg !== "" && this.trimmedValue !== "" && this.filteredOptions.length < 1 && !this.loading && this.isOpen && this.canAddItem;
    },
    showPlaceholder() {
      return this.placeholder !== "" && this.selected.length < 1 && this.trimmedValue === "";
    },
    showCannotAddResults() {
      return this.isOpen && !this.canAddItem && this.isCleanInput;
    },
    showInvalidInput() {
      return !this.isCleanInput;
    },
    canAddItem() {
      return this.isCleanInput && (this.maxItems < 0 || this.selected.length < this.maxItems);
    },
    isReadonlyInput() {
      return !this.canSearch;
    },
    isCleanInput() {
      return !this.detectHtml(this.trimmedValue);
    },
    trimmedValue() {
      return this.modelValue.trim();
    },
    filteredOptions() {
      const e = this.options;
      return this.taggable && this.trimmedValue !== "" && (e.some((t) => this.enforceLowercaseNewTag ? t[this.labelKey].trim().toLowerCase() === this.trimmedValue.toLowerCase() : t[this.labelKey].trim() === this.trimmedValue) || e.push(this.newTag)), this.hideSelectedOptions ? e.filter((t) => this.selected.filter((n) => t[this.valueKey] === n[this.valueKey]).length === 0) : e;
    },
    newTag() {
      const e = {}, t = Math.floor(Math.random() * 9e5 + 1e5);
      return e[this.valueKey] = t, e[this.labelKey] = this.enforceLowercaseNewTag ? this.trimmedValue.toLowerCase() : this.trimmedValue, e.isNewTag = !0, e;
    }
  },
  watch: {
    showDropdown(e) {
      e && this.positionDropdown();
    },
    filteredOptions() {
      this.arrowCounter = 0;
    }
  },
  mounted() {
    this.resizeInput(), setTimeout(() => {
      this.autofocus && (this.$refs.input.focus(), this.active = !0);
    }, 0), document.addEventListener("click", this.handleOutsideClick), document.addEventListener("keyup", this.handleOutsideKeyUp), this.debouncePositionDropdown = fM(this.positionDropdown, 150), document.addEventListener("scroll", this.debouncePositionDropdown), window.addEventListener("resize", this.debouncePositionDropdown);
  },
  unmounted() {
    document.removeEventListener("click", this.handleOutsideClick), document.removeEventListener("keyup", this.handleOutsideKeyUp), document.removeEventListener("scroll", this.debouncePositionDropdown), window.removeEventListener("resize", this.debouncePositionDropdown);
  },
  methods: {
    detectHtml(e) {
      return e.match(/<[^\s]|&[^\s;]*;/gi) !== null;
    },
    selectText() {
      this.$refs.input.setSelectionRange(0, this.modelValue.length);
    },
    search(e) {
      !this.canSearch || !e.target || this.input(e.target.value);
    },
    resizeInput() {
      setTimeout(() => {
        if (this.showPlaceholder)
          this.inputWidth = "100%";
        else {
          const t = typeof this.$refs["faux-input"] < "u" ? this.$refs["faux-input"].clientWidth + 20 : 0;
          let n = this.$el.clientWidth - 20;
          (!this.hideCaret || this.showClear && this.selected.length > 0) && (n = n - 10);
          const r = Math.min(Math.max(t, 20), n);
          this.inputWidth = r + "px";
        }
      }, 0);
    },
    removeLastSelection() {
      if (this.modelValue !== "" || !this.canSearch || this.hideTags || this.disableRemoveLastSelection)
        return;
      const e = this.selected;
      e.splice(-1, 1), this.updateSelected(e), this.positionDropdown();
    },
    add(e) {
      if (!this.canAddItem)
        return;
      if (this.isSelectedOption(e)) {
        this.toggleSelectedOptions && this.remove(e);
        return;
      }
      let t = [];
      this.multiple && (t = this.selected), t.push(e), this.updateSelected(t), this.clearInputOnSelection && this.clearInput(), this.clearOptionsOnSelection && this.clearOptions(), this.handleCloseOnSelection(), this.positionDropdown();
    },
    remove(e) {
      this.updateSelected(
        this.selected.filter(
          (t) => t[this.valueKey] !== e[this.valueKey]
        )
      ), this.handleCloseOnSelection(), this.positionDropdown();
    },
    isSelectedOption(e) {
      return this.selected.some(
        (t) => t[this.labelKey] === e[this.labelKey]
      );
    },
    focusInput() {
      this.$emit("focus"), this.$refs.input.focus();
    },
    clearInput() {
      this.input("");
    },
    clearSelected() {
      this.updateSelected([]);
    },
    clearOptions() {
      this.updateOptions([]);
    },
    input(e) {
      this.$emit("update:modelValue", e), this.resizeInput(), this.positionDropdown();
    },
    updateSelected(e) {
      this.$emit("update-selected", e), this.resizeInput(), this.arrowCounter > this.filteredOptions.length - 1 && (this.arrowCounter = this.filteredOptions.length - 1);
    },
    updateOptions(e) {
      this.$emit("update-options", e);
    },
    open() {
      this.disabled || this.showDropdown || (this.$emit("open"), this.focusInput(), this.isOpen = !0, this.$nextTick(() => {
        this.arrowCounter = 0;
      }));
    },
    close() {
      this.showDropdown && (this.$emit("close"), this.multiple || this.clearInput(), this.isOpen = !1, this.arrowCounter = 0);
    },
    handleClearBtn() {
      this.clearSelected(), this.clearInput(), this.focusInput(), this.positionDropdown();
    },
    handleArrows(e) {
      if (!this.showDropdown)
        return;
      const t = 0;
      switch (e) {
        case "down":
          this.arrowCounter < this.filteredOptions.length - 1 ? (this.arrowCounter = this.arrowCounter + 1, this.handleDropdownScroll()) : (this.canLoopOptions && (this.arrowCounter = t), this.canLoopOptions && this.handleDropdownScroll());
          break;
        case "up":
          this.arrowCounter > t ? (this.arrowCounter = this.arrowCounter - 1, this.handleDropdownScroll()) : (this.canLoopOptions && (this.arrowCounter = this.filteredOptions.length - 1), this.canLoopOptions && this.handleDropdownScroll(!0));
          break;
      }
    },
    handleDropdownScroll(e = !1) {
      if (!this.showDropdown || typeof this.$refs.dropdownMenu > "u")
        return;
      const t = this.$refs.dropdownMenu.children[this.arrowCounter] || !1, n = t ? t.offsetHeight : 0;
      let r = 0;
      for (let a = 0; a < this.arrowCounter; a++)
        r += this.$refs.dropdownMenu.children[a].offsetHeight;
      const o = r + n, i = {
        top: this.$refs.dropdownMenu.scrollTop || 0,
        bottom: this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop || 0
      };
      e ? this.$refs.dropdownMenu.scrollTop = o : r <= i.top ? this.$refs.dropdownMenu.scrollTop = r : o >= i.bottom && (this.$refs.dropdownMenu.scrollTop = i.top + n);
    },
    handleKeyUp(e) {
      if (this.disabled)
        return;
      const t = [
        "Enter",
        "Backspace",
        "Delete",
        "Tab",
        "Alt",
        "Shift",
        "Control",
        "Meta",
        "CapsLock",
        "Fn",
        "FnLock",
        "Hyper",
        "NumLock",
        "ScrollLock",
        "Super",
        "Symbol",
        "SymbolLock",
        "ArrowLeft",
        "ArrowRight",
        "Left",
        "Right"
      ];
      e.key === "Enter" && this.showDropdown ? this.arrowCounter <= this.filteredOptions.length - 1 && this.arrowCounter > -1 && this.add(this.filteredOptions[this.arrowCounter]) : e.keyCode === 27 ? (e.preventDefault(), e.stopPropagation(), this.handleEsc()) : e.key === "Tab" ? this.active || (this.active = !0) : !this.showDropdown && !t.includes(e.key) && this.open();
    },
    handleKeyDown(e) {
      this.disabled || (!this.canSearch && e.keyCode === 32 && e.preventDefault(), e.key === "Enter" && this.showDropdown && e.preventDefault(), e.key === "Delete" || e.key === "Backspace" ? this.removeLastSelection() : e.key === "Tab" ? this.showDropdown && (this.arrowCounter <= this.filteredOptions.length - 1 && this.arrowCounter > -1 && this.canAddItem ? (this.add(this.filteredOptions[this.arrowCounter]), e.preventDefault()) : this.close()) : e.key === "ArrowUp" || e.key === "Up" ? (e.preventDefault(), e.stopPropagation(), this.handleArrows("up")) : (e.key === "ArrowDown" || e.key === "Down") && (e.preventDefault(), e.stopPropagation(), this.handleArrows("down")));
    },
    handleMouseUp() {
      this.disabled || (this.open(), this.active = !0);
    },
    handleCloseOnSelection() {
      this.closeOnSelection ? this.close() : this.focusInput();
    },
    handleOutsideClick(e) {
      this.$el.contains(e.target) || (this.active && (this.active = !1), this.close());
    },
    handleOutsideKeyUp(e) {
      this.$el.contains(e.target) || this.active && (this.active = !1);
    },
    positionDropdown() {
      !this.showDropdown || this.$nextTick(() => {
        if (this.openDirection === "down" && (this.dropUp = !1), this.openDirection === "up" && (this.dropUp = !0, this.bottom = this.$el.clientHeight + "px"), this.openDirection === "auto") {
          const t = window.innerHeight - this.$el.getBoundingClientRect().bottom < this.maxHeight;
          this.dropUp = t, this.bottom = this.dropUp ? this.$el.clientHeight + "px" : "auto";
        }
      });
    },
    handleEsc() {
      this.close();
    },
    handleRequired() {
      this.$refs.input.focus(), this.active || (this.active = !0);
    }
  }
});
const Va = (e) => (Os("data-v-00d7dde3"), e = e(), _s(), e), yM = ["title", "aria-label", "disabled", "onClick"], pM = /* @__PURE__ */ Va(() => /* @__PURE__ */ s("span", { "aria-hidden": "true" }, "\xD7", -1)), hM = [
  pM
], mM = /* @__PURE__ */ Va(() => /* @__PURE__ */ s("option", null, null, -1)), gM = [
  mM
], vM = ["value", "placeholder", "readonly", "disabled", "maxlength"], wM = /* @__PURE__ */ Va(() => /* @__PURE__ */ s("svg", {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5 x",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1)), bM = [
  wM
], MM = {
  key: 1,
  "aria-hidden": "true",
  class: "multiselect-caret"
}, LM = {
  key: 0,
  class: "dropdown-list-item loading"
}, CM = ["disabled", "onClick", "onMouseover"], SM = {
  key: 2,
  class: "dropdown-list-item default"
}, jM = {
  key: 3,
  class: "dropdown-list-item no-result"
}, TM = {
  key: 4,
  class: "dropdown-list-item cannot-add-result"
}, NM = {
  key: 5,
  class: "dropdown-list-item invalid-input"
};
function kM(e, t, n, r, o, i) {
  return u(), f("div", {
    "data-id": "sds-multiselect",
    class: L(["sds-multiselect", {
      open: e.showDropdown,
      active: e.active,
      disabled: e.disabled,
      up: e.dropUp,
      canSearch: e.canSearch,
      hideCaret: e.hideCaret,
      showClear: e.showClear,
      hasTags: !e.hideTags && e.selected.length > 0,
      showResults: e.showResults
    }]),
    onMouseup: t[3] || (t[3] = (...a) => e.handleMouseUp && e.handleMouseUp(...a)),
    onMousedown: t[4] || (t[4] = me(() => {
    }, ["prevent", "stop", "self"])),
    onDblclick: t[5] || (t[5] = (...a) => e.selectText && e.selectText(...a)),
    onKeydown: t[6] || (t[6] = (a) => e.handleKeyDown(a)),
    onKeyup: t[7] || (t[7] = (a) => e.handleKeyUp(a))
  }, [
    s("ul", {
      class: L(["tag-list", { single: !e.multiple }])
    }, [
      !e.hideTags || !e.multiple ? (u(!0), f(N, { key: 0 }, A(e.selected, (a) => (u(), f("li", {
        key: a[e.valueKey],
        class: "tag-list-item"
      }, [
        j(e.$slots, "tagTemplate", {
          tag: a,
          remove: e.remove,
          disabled: e.disabled
        }, () => [
          e.multiple ? (u(), f("button", {
            key: 0,
            type: "button",
            class: "remove",
            tabindex: "-1",
            title: `Clear ${a[e.labelKey]}`,
            "aria-label": `Clear ${a[e.labelKey]}`,
            disabled: e.disabled,
            onClick: (c) => e.remove(a)
          }, hM, 8, yM)) : w("", !0),
          s("span", null, M(a[e.labelKey]), 1)
        ], !0)
      ]))), 128)) : w("", !0),
      s("li", {
        style: De({
          width: !e.multiple && e.showDropdown && e.canSearch ? "100%" : e.inputWidth
        }),
        class: "tag-list-item input"
      }, [
        s("span", {
          ref: "faux-input",
          class: "faux-input",
          "aria-hidden": "true"
        }, M(e.modelValue), 513),
        e.required && e.selected.length < 1 ? (u(), f("select", {
          key: 0,
          class: "faux-input",
          tabindex: "-1",
          required: "",
          onFocus: t[0] || (t[0] = (...a) => e.handleRequired && e.handleRequired(...a))
        }, gM, 32)) : w("", !0),
        s("input", {
          ref: "input",
          value: e.modelValue,
          placeholder: e.showPlaceholder ? e.placeholder : "",
          readonly: e.isReadonlyInput,
          disabled: e.disabled,
          style: De({
            width: !e.multiple && e.showDropdown && e.canSearch ? "100%" : e.inputWidth
          }),
          maxlength: e.maxlength,
          autocapitalize: "off",
          autocomplete: "off",
          spellcheck: "false",
          autocorrect: "off",
          type: "text",
          class: "p-0 m-0 border-0 focus:shadow-none focus:ring-0",
          onInput: t[1] || (t[1] = (a) => e.search(a))
        }, null, 44, vM)
      ], 4)
    ], 2),
    e.selected.length > 0 && e.showClear ? (u(), f("button", {
      key: 0,
      type: "button",
      tabindex: "-1",
      title: "Clear all",
      "aria-label": "Clear all",
      class: "multiselect-clear",
      onClick: t[2] || (t[2] = me((...a) => e.handleClearBtn && e.handleClearBtn(...a), ["prevent", "stop"]))
    }, bM)) : w("", !0),
    !e.hideCaret && !(e.showClear && e.selected.length > 0) ? (u(), f("div", MM)) : w("", !0),
    e.showDropdown ? (u(), f("ul", {
      key: 2,
      ref: "dropdownMenu",
      style: De({ bottom: e.bottom, maxHeight: e.maxHeight + "px" }),
      class: "dropdown-list"
    }, [
      e.showLoading ? (u(), f("li", LM, [
        j(e.$slots, "loadingTemplate", { loadingMsg: e.loadingMsg }, () => [
          ee(M(e.loadingMsg), 1)
        ], !0)
      ])) : w("", !0),
      e.showResults ? (u(!0), f(N, { key: 1 }, A(e.filteredOptions, (a, c) => (u(), f("li", {
        key: a[e.valueKey],
        disabled: e.disabled,
        class: L(["dropdown-list-item", { selected: e.isSelectedOption(a), active: c === e.arrowCounter }]),
        onClick: (l) => e.add(a),
        onMouseover: (l) => e.arrowCounter = c
      }, [
        j(e.$slots, "optionTemplate", {
          option: a,
          add: e.add,
          disabled: e.disabled,
          isSelectedOption: e.isSelectedOption(a)
        }, () => [
          ee(M(a[e.labelKey]) + " ", 1),
          a.isNewTag && !e.isSelectedOption(a) ? (u(), f(N, { key: 0 }, [
            ee(" (new) ")
          ], 64)) : w("", !0)
        ], !0)
      ], 42, CM))), 128)) : w("", !0),
      e.showDefault ? (u(), f("li", SM, [
        j(e.$slots, "defaultTemplate", { defaultMsg: e.defaultMsg }, () => [
          ee(M(e.defaultMsg), 1)
        ], !0)
      ])) : w("", !0),
      e.showNoResults ? (u(), f("li", jM, [
        j(e.$slots, "noResultsTemplate", { noResultsMsg: e.noResultsMsg }, () => [
          ee(M(e.noResultsMsg), 1)
        ], !0)
      ])) : w("", !0),
      e.showCannotAddResults ? (u(), f("li", TM, [
        j(e.$slots, "cannotAddResultsTemplate", { cannotAddResultsMsg: e.cannotAddResultsMsg }, () => [
          ee(M(e.cannotAddResultsMsg), 1)
        ], !0)
      ])) : w("", !0),
      e.showInvalidInput ? (u(), f("li", NM, [
        j(e.$slots, "invalidInputTemplate", { invalidInputMsg: e.invalidInputMsg }, () => [
          ee(M(e.invalidInputMsg), 1)
        ], !0)
      ])) : w("", !0)
    ], 4)) : w("", !0)
  ], 34);
}
const Fn = /* @__PURE__ */ E(dM, [["render", kM], ["__scopeId", "data-v-00d7dde3"]]);
Fn.install = (e) => {
  e.component(Fn.name, Fn);
};
const DM = _({
  name: "SdsPaginator",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    threshold: {
      type: Number,
      default: 5
    }
  },
  emits: ["go-to-page"],
  computed: {
    prevDisabled() {
      return this.currentPage <= 1 || this.loading;
    },
    nextDisabled() {
      return this.currentPage >= this.totalPages || this.loading;
    },
    pageList() {
      if (this.totalPages <= this.threshold)
        return Array.apply(null, Array(this.totalPages)).map((e, t) => t + 1);
      if (this.currentPage < this.threshold)
        return Array.apply(null, Array(this.threshold)).map((t, n) => n + 1).concat(["...", this.totalPages]);
      if (this.currentPage > this.totalPages - this.threshold + 1)
        return [1, "..."].concat(
          Array.apply(null, Array(this.threshold)).map((t, n) => this.totalPages - this.threshold + n + 1)
        );
      {
        let e = [1, "..."];
        return e = e.concat(
          Array.apply(null, Array(this.threshold - 3)).map((t, n) => this.currentPage + n - this.threshold + 3)
        ), e.push(this.currentPage), e = e.concat(
          Array.apply(null, Array(this.threshold - 3)).map((t, n) => this.currentPage + n + 1)
        ), e.concat(["...", this.totalPages]);
      }
    }
  },
  methods: {
    goToPage(e, t) {
      this.$emit("go-to-page", { page: e, event: t });
    }
  }
}), OM = {
  key: 0,
  "data-id": "sds-paginator",
  class: "paginator",
  "aria-label": "Page navigation"
}, _M = {
  class: "btn-toolbar",
  role: "toolbar"
}, xM = { class: "mr-2 btn-group" }, $M = ["disabled"], zM = /* @__PURE__ */ s("svg", {
  class: "w-4 h-4 my-auto",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "3",
    d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
  })
], -1), IM = /* @__PURE__ */ s("span", { class: "sr-only sm:not-sr-only" }, "First", -1), PM = [
  zM,
  IM
], EM = ["disabled"], AM = /* @__PURE__ */ s("svg", {
  class: "w-4 h-4 my-auto",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "3",
    d: "M15 19l-7-7 7-7"
  })
], -1), YM = /* @__PURE__ */ s("span", { class: "sr-only sm:not-sr-only" }, "Prev", -1), RM = [
  AM,
  YM
], UM = {
  key: 0,
  class: "hidden btn-group md:block"
}, BM = ["disabled", "onClick"], QM = { class: "block mx-0 currentPageLabelContainer btn-group md:hidden" }, VM = { class: "inline-block px-3 pt-2 currentPageLabel" }, HM = { class: "ml-2 btn-group" }, GM = ["disabled"], WM = /* @__PURE__ */ s("span", { class: "sr-only sm:not-sr-only" }, "Next", -1), FM = /* @__PURE__ */ s("svg", {
  class: "w-4 h-4 my-auto",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "3",
    d: "M9 5l7 7-7 7"
  })
], -1), qM = [
  WM,
  FM
], JM = ["disabled"], KM = /* @__PURE__ */ s("span", { class: "sr-only sm:not-sr-only" }, "Last", -1), XM = /* @__PURE__ */ s("svg", {
  class: "w-4 h-4 my-auto",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "3",
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  })
], -1), ZM = [
  KM,
  XM
];
function eL(e, t, n, r, o, i) {
  return e.totalPages > 1 ? (u(), f("nav", OM, [
    s("div", _M, [
      s("div", xM, [
        s("button", {
          disabled: e.prevDisabled,
          class: "flex space-x-1 btn btn-default",
          title: "First",
          onClick: t[0] || (t[0] = me((a) => e.goToPage(1, a), ["prevent"]))
        }, PM, 8, $M),
        s("button", {
          disabled: e.prevDisabled,
          class: "flex space-x-1 btn btn-default",
          title: "Prev",
          onClick: t[1] || (t[1] = me((a) => e.goToPage(e.currentPage - 1, a), ["prevent"]))
        }, RM, 8, EM)
      ]),
      e.totalPages > 1 ? (u(), f("div", UM, [
        (u(!0), f(N, null, A(e.pageList, (a, c) => (u(), f("button", {
          key: c,
          class: L([{
            "shadow-none border-transparent": a === "...",
            active: e.currentPage === a
          }, "btn btn-default"]),
          disabled: a === "..." || e.loading,
          onClick: me((l) => e.goToPage(a, l), ["prevent"])
        }, M(a.toLocaleString()), 11, BM))), 128))
      ])) : w("", !0),
      s("div", QM, [
        s("span", VM, " Page " + M(e.currentPage.toLocaleString()), 1)
      ]),
      s("div", HM, [
        s("button", {
          disabled: e.nextDisabled,
          class: "flex space-x-1 btn btn-default",
          title: "Next",
          onClick: t[2] || (t[2] = me((a) => e.goToPage(e.currentPage + 1, a), ["prevent"]))
        }, qM, 8, GM),
        s("button", {
          disabled: e.nextDisabled,
          class: "flex space-x-1 btn btn-default",
          title: "Last",
          onClick: t[3] || (t[3] = me((a) => e.goToPage(e.totalPages, a), ["prevent"]))
        }, ZM, 8, JM)
      ])
    ])
  ])) : w("", !0);
}
const qn = /* @__PURE__ */ E(DM, [["render", eL]]);
qn.install = (e) => {
  e.component(qn.name, qn);
};
const tL = _({
  name: "SdsPopover",
  components: {
    FloatingUi: Pe
  },
  props: {
    zIndex: { type: String, default: "50" },
    openDelay: { type: Number, default: 500 },
    closeDelay: { type: Number, default: 250 },
    size: { type: String, default: "lg" },
    strategy: { type: String, default: "absolute" },
    placement: { type: String, default: "auto" },
    disabled: { type: Boolean, default: !1 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "w-80";
        case "lg":
          return "w-96";
        case "auto":
          return "w-auto";
        default:
          return "w-80";
      }
    }
  }
}), nL = ["onMouseover", "onMouseleave"], rL = ["onMouseover", "onMouseout"];
function oL(e, t, n, r, o, i) {
  const a = ye("floating-ui");
  return u(), ve(a, {
    "data-id": "sds-popover",
    strategy: e.strategy,
    placement: e.placement,
    disabled: e.disabled,
    "will-open": e.willOpen,
    "will-close": e.willClose,
    "popper-class": `absolute bg-white dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 border shadow-lg rounded-md ${e.sizeClass} ${e.zIndexClass}`,
    "arrow-class": "absolute bg-white dark:bg-gray-700 dark:border-gray-600 border w-3 h-3 rotate-45",
    "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
    "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
    "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
    "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0",
    shift: ""
  }, {
    trigger: te(({ open: c, close: l }) => [
      s("div", {
        onMouseover: (d) => c(e.openDelay),
        onMouseleave: (d) => l(e.closeDelay)
      }, [
        j(e.$slots, "trigger")
      ], 40, nL)
    ]),
    default: te(({ open: c, close: l, toggle: d, isOpen: y }) => [
      s("div", {
        class: "p-4",
        onMouseover: (m) => c(),
        onMouseout: (m) => l(e.closeDelay)
      }, [
        j(e.$slots, "default", {
          close: l,
          open: c,
          toggle: d,
          isOpen: y
        })
      ], 40, rL)
    ]),
    _: 3
  }, 8, ["strategy", "placement", "disabled", "will-open", "will-close", "popper-class"]);
}
const Jn = /* @__PURE__ */ E(tL, [["render", oL]]);
Jn.install = (e) => {
  e.component(Jn.name, Jn);
};
let js = 0;
const aL = _({
  name: "SdsRadioGroup",
  props: {
    modelValue: { type: [Boolean, String, Number, null], default: null },
    name: { type: String, default: null },
    options: { type: Array, default: () => [] },
    required: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      id: ""
    };
  },
  computed: {
    localChecked: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  mounted() {
    js++, this.id = `sds-radio-group_${js}`;
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    }
  }
}), iL = ["id"], sL = ["id", "value", "name", "required", "onClick"], lL = ["for"];
function uL(e, t, n, r, o, i) {
  return u(), f("div", {
    id: e.id,
    "data-id": "sds-radio-group",
    role: "radiogroup",
    tabindex: "-1",
    class: "focus:outline-none"
  }, [
    (u(!0), f(N, null, A(e.options, (a, c) => (u(), f("div", {
      key: a.text,
      class: L(["space-x-1", { "inline-block mr-4": !e.stacked }])
    }, [
      ne(s("input", {
        id: `${e.id}__option_${c}`,
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.localChecked = l),
        type: "radio",
        class: "focus:outline-none",
        value: a.value,
        name: e.name ? e.name : `${e.id}__option`,
        required: e.required,
        onClick: (l) => e.onChange(a.value)
      }, null, 8, sL), [
        [hl, e.localChecked]
      ]),
      j(e.$slots, "label", {
        optionId: `${e.id}__option_${c}`,
        option: a
      }, () => [
        s("label", {
          for: `${e.id}__option_${c}`
        }, [
          s("span", null, M(a.text), 1)
        ], 8, lL)
      ])
    ], 2))), 128))
  ], 8, iL);
}
const Kn = /* @__PURE__ */ E(aL, [["render", uL]]);
Kn.install = (e) => {
  e.component(Kn.name, Kn);
};
const cL = _({
  name: "SdsScrollArea"
}), fL = {
  "data-id": "sds-scroll-area",
  class: "scroll-area"
};
function dL(e, t, n, r, o, i) {
  return u(), f("div", fL, [
    j(e.$slots, "default")
  ]);
}
const Xn = /* @__PURE__ */ E(cL, [["render", dL]]);
Xn.install = (e) => {
  e.component(Xn.name, Xn);
};
function yL(e, t) {
  let n, r = !1;
  return () => {
    n && clearTimeout(n), r ? n = setTimeout(e, t) : (e(), r = !0, setTimeout(() => {
      r = !1;
    }, t));
  };
}
const pL = ["href", "onClick"], hL = {
  name: "SdsScrollspy"
}, Zn = /* @__PURE__ */ _({
  ...hL,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    parent: { type: String, default: void 0 },
    itemClass: { type: String, default: "" },
    activeClass: { type: String, default: "" },
    inactiveClass: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = B(() => typeof document > "u" ? null : t.parent ? document.querySelector(t.parent) : null), r = V(), o = V(), i = 56, a = (p) => {
      const h = document.getElementById(p.id);
      return h ? h.getBoundingClientRect().top - i - 15 : 0;
    }, c = (p, h, g) => {
      const b = n.value && n.value.getBoundingClientRect().top || window.scrollY;
      return p === 0 && b === 0 ? [!0, null] : b < a(h) ? [!1, null] : !g || b < a(g) ? [!0, h.id] : [!1, null];
    }, l = (p) => {
      const g = document.getElementById(p.id).getBoundingClientRect();
      if (n.value) {
        const b = n.value.getBoundingClientRect();
        return g.top >= b.top && g.bottom <= b.bottom;
      } else
        return g.top >= 0 && g.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }, d = () => {
      const p = [];
      if (o.value = r.value, t.items.forEach((h) => {
        l(h) && p.push(h);
      }), p.length) {
        r.value = p[0].id;
        return;
      }
      if (o.value) {
        r.value = o.value;
        return;
      }
      if (t.items.length && !r.value) {
        for (let h = 0; h < t.items.length; h++) {
          const g = t.items[h], b = t.items[h + 1], [k, T] = c(h, g, b);
          k && (r.value = T);
        }
        return;
      }
    }, y = yL(d, 100);
    Da(() => {
      requestAnimationFrame(d), n.value ? n.value.addEventListener("scroll", y) : window.addEventListener("scroll", y);
    }), Ds(() => {
      n.value ? n.value.removeEventListener("scroll", y) : window.removeEventListener("scroll", y);
    });
    const m = (p, h) => {
      if (!n.value)
        return;
      const g = document.getElementById(p);
      !g || (h.preventDefault(), n.value.scrollTop = g.offsetTop - n.value.offsetTop);
    };
    return (p, h) => (u(), f("nav", null, [
      (u(!0), f(N, null, A(e.items, (g) => (u(), f("a", {
        key: g.id,
        href: `#${g.id}`,
        "data-id": "sds-scrollspy",
        class: L({
          [e.itemClass]: !0,
          [e.activeClass]: r.value === g.id,
          [e.inactiveClass]: r.value !== g.id
        }),
        onClick: (b) => e.parent ? m(g.id, b) : void 0
      }, [
        j(p.$slots, "default", { item: g }, () => [
          ee(M(g.text), 1)
        ])
      ], 10, pL))), 128))
    ]));
  }
});
Zn.install = (e) => {
  e.component(Zn.name, Zn);
};
const mL = _({
  name: "SdsSearchBox",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: 524288
    },
    disableSearch: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: "default"
    },
    searchOnKeyUp: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search"],
  computed: {
    q: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "btn btn-default text-primary dark:text-blue-400";
        case "danger":
          return "btn btn-default text-danger dark:text-red-400";
        default:
          return "btn btn-default text-secondary dark:text-gray-300";
      }
    }
  },
  mounted() {
    this.autofocus && this.$refs.input.focus();
  },
  methods: {
    clearSearch() {
      this.q = "", this.$refs.input.focus();
    },
    search() {
      this.disabled || this.disableSearch || this.$emit("search", this.q);
    }
  }
}), gL = {
  "data-id": "sds-search-box",
  class: "input-group"
}, vL = ["placeholder", "disabled", "maxlength"], wL = ["disabled"], bL = /* @__PURE__ */ s("span", { class: "sr-only" }, "Clear search", -1), ML = /* @__PURE__ */ s("svg", {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5 x",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), LL = [
  bL,
  ML
], CL = ["disabled"], SL = /* @__PURE__ */ s("span", { class: "sr-only" }, "Search", -1), jL = /* @__PURE__ */ s("svg", {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5 search"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), TL = [
  SL,
  jL
];
function NL(e, t, n, r, o, i) {
  return u(), f("div", gL, [
    s("div", {
      class: L(["relative w-full input-group", {
        disabled: e.disabled
      }])
    }, [
      ne(s("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.q = a),
        type: "text",
        autocapitalize: "off",
        autocomplete: "off",
        spellcheck: "false",
        autocorrect: "off",
        class: "pr-8 rounded-r-none form-control",
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxlength,
        onKeyup: [
          t[1] || (t[1] = (a) => e.searchOnKeyUp ? e.search() : null),
          t[2] || (t[2] = Le(me((...a) => e.search && e.search(...a), ["self"]), ["enter"]))
        ]
      }, null, 40, vL), [
        [
          it,
          e.q,
          void 0,
          { trim: !0 }
        ]
      ]),
      e.q.length > 0 ? (u(), f("button", {
        key: 0,
        tabindex: "-1",
        type: "button",
        class: "absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none",
        disabled: e.disabled,
        onClick: t[3] || (t[3] = (...a) => e.clearSearch && e.clearSearch(...a))
      }, LL, 8, wL)) : w("", !0)
    ], 2),
    s("button", {
      disabled: e.disabled || e.disableSearch,
      class: L([[e.variantClass], "px-3"]),
      type: "button",
      onClick: t[4] || (t[4] = (...a) => e.search && e.search(...a))
    }, TL, 10, CL)
  ]);
}
const er = /* @__PURE__ */ E(mL, [["render", NL]]);
er.install = (e) => {
  e.component(er.name, er);
};
const kL = _({
  name: "SdsSection",
  props: {
    type: {
      type: String,
      default: ""
    },
    hideHeader: {
      type: Boolean,
      default: !1
    },
    hideContent: {
      type: Boolean,
      default: !1
    },
    navClass: {
      type: String,
      default: ""
    },
    contentClass: {
      type: String,
      default: "p-4"
    }
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    hasSubtitleSlot() {
      return !!this.$slots.subtitle;
    },
    hasNavSlot() {
      return !!this.$slots.nav;
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    }
  }
}), DL = { class: "self-center flex-grow" }, OL = {
  key: 0,
  class: "slot-title"
}, _L = {
  key: 1,
  class: "text-sm text-gray-500"
};
function xL(e, t, n, r, o, i) {
  return u(), f("div", {
    "data-id": "sds-section",
    class: L(["block bg-white dark:bg-gray-800 dark:border-gray-700", {
      border: e.type === "simple" || e.type === "raised",
      "shadow border rounded": e.type === "raised"
    }])
  }, [
    e.hideHeader ? w("", !0) : (u(), f("header", {
      key: 0,
      class: L({
        "border-b dark:border-gray-700": e.type === "simple" || e.type === "raised",
        "border-0 border-t-2 border-gray-900 dark:border-gray-100": e.type === "accented"
      })
    }, [
      s("div", {
        class: L(["flex px-4 py-3", { "border-b border-gray-300": e.type === "accented" }])
      }, [
        s("div", DL, [
          e.hasTitleSlot ? (u(), f("div", OL, [
            j(e.$slots, "title")
          ])) : w("", !0),
          e.hasSubtitleSlot ? (u(), f("div", _L, [
            j(e.$slots, "subtitle")
          ])) : w("", !0)
        ]),
        e.hasNavSlot ? (u(), f("div", {
          key: 0,
          class: L(["flex items-stretch self-start justify-center ml-auto", [e.navClass]])
        }, [
          j(e.$slots, "nav")
        ], 2)) : w("", !0)
      ], 2)
    ], 2)),
    !e.hideContent && e.hasDefaultSlot ? (u(), f("div", {
      key: 1,
      class: L([e.contentClass])
    }, [
      j(e.$slots, "default")
    ], 2)) : w("", !0)
  ], 2);
}
const tr = /* @__PURE__ */ E(kL, [["render", xL]]);
tr.install = (e) => {
  e.component(tr.name, tr);
};
const $L = ["disabled", "readonly"], zL = /* @__PURE__ */ s("option", {
  disabled: "",
  value: ""
}, null, -1), IL = ["value"], PL = {
  name: "SdsSelect"
}, nr = /* @__PURE__ */ _({
  ...PL,
  props: {
    modelValue: { type: [Boolean, String, Number, Array, Object], default: null },
    options: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    size: { type: String, default: "md" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = B({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:modelValue", o);
      }
    });
    return (o, i) => ne((u(), f("select", {
      "onUpdate:modelValue": i[0] || (i[0] = (a) => ml(r) ? r.value = a : null),
      "data-id": "sds-select",
      disabled: e.disabled,
      readonly: e.readonly,
      class: L(["form-control", { "form-control-sm": e.size === "sm" }])
    }, [
      zL,
      (u(!0), f(N, null, A(e.options, (a) => (u(), f("option", {
        key: a.id,
        value: a.value
      }, M(a.text), 9, IL))), 128))
    ], 10, $L)), [
      [Ie, O(r)]
    ]);
  }
});
nr.install = (e) => {
  e.component(nr.name, nr);
};
const EL = {
  role: "tablist",
  class: "flex whitespace-nowrap z-10"
}, AL = ["id", "aria-labelby"], YL = {
  name: "SdsTabs",
  directives: {
    uid: At
  }
}, rr = /* @__PURE__ */ _({
  ...YL,
  props: {
    modelValue: { type: Array, default: () => [] },
    type: { type: String, default: "folder" },
    willChangeTab: { type: Function, default: null }
  },
  emits: ["update:model-value", "change"],
  setup(e, { emit: t }) {
    const n = e, r = V(), o = B({
      get() {
        return n.modelValue;
      },
      set(c) {
        t("update:model-value", c);
      }
    }), i = (c, l) => new Promise(async (d, y) => l ? await l(c, d, y) : d()), a = async (c) => {
      if (c.tag === "a" && c.href)
        return !0;
      await i(c, n.willChangeTab), o.value = o.value.map((l) => (l.active = c.key === l.key, l)), t("change", c);
    };
    return (c, l) => {
      const d = lt("uid");
      return ne((u(), f("div", {
        ref_key: "root",
        ref: r,
        "data-id": "sds-tabs"
      }, [
        s("div", {
          class: L(["overflow-x-auto", {
            "bg-gray-100 dark:bg-gray-700 rounded-t": e.type === "folder"
          }])
        }, [
          s("ul", EL, [
            (u(!0), f(N, null, A(O(o), (y) => (u(), f("li", {
              key: y.key,
              role: "presentation",
              class: L({
                "mr-auto": y.align === "left",
                "ml-auto": y.align === "right",
                "mx-auto": y.align === "center"
              })
            }, [
              (u(), ve(Oa(y.tag || "button"), {
                id: `sds-tabs-${r.value?.id}__${y.key}__tab`,
                class: L({
                  "opacity-50": y.disabled,
                  "pointer-events-none": y.disabled || y.active,
                  "text-sm inline-block rounded-t py-2 px-4 font-bold": e.type === "folder",
                  "bg-white dark:bg-gray-800 border-l border-t border-r text-gray-700 dark:border-gray-500 dark:text-gray-100": e.type === "folder" && y.active,
                  "text-blue-500 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100": e.type === "folder" && !y.active,
                  "tab tab-underline tab-red": e.type === "underline",
                  "tab tab-block tab-red": e.type === "block",
                  active: (e.type === "underline" || e.type === "block") && y.active,
                  disabled: (e.type === "underline" || e.type === "block") && y.disabled
                }),
                href: y.tag === "a" && y.href || void 0,
                target: y.tag === "a" && y.href && y.external ? "_blank" : void 0,
                rel: y.tag === "a" && y.href && y.external ? "noopener noreferrer" : void 0,
                type: y.tag === "button" ? "button" : void 0,
                disabled: y.disabled,
                tabindex: y.disabled ? -1 : void 0,
                "aria-selected": y.active,
                "aria-controls": `sds-tabs-${r.value?.id}__${y.key}__tab-content`,
                "data-active": y.active ? !0 : void 0,
                role: "tab",
                onClick: (m) => a(y)
              }, {
                default: te(() => [
                  j(c.$slots, `tab(${y.key})`, {}, () => [
                    ee(M(y.title), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["id", "class", "href", "target", "rel", "type", "disabled", "tabindex", "aria-selected", "aria-controls", "data-active", "onClick"]))
            ], 2))), 128))
          ])
        ], 2),
        (u(!0), f(N, null, A(O(o), (y) => (u(), f(N, null, [
          y.active ? (u(), f("div", {
            id: `sds-tabs-${r.value?.id}__${y.key}__tab-content`,
            key: y.key,
            "aria-labelby": `sds-tabs-${r.value?.id}__${y.key}__tab`,
            role: "tabpanel",
            tabindex: "0"
          }, [
            y.active ? j(c.$slots, `panel(${y.key})`, { key: 0 }) : w("", !0)
          ], 8, AL)) : w("", !0)
        ], 64))), 256))
      ])), [
        [d]
      ]);
    };
  }
});
rr.install = (e) => {
  e.component(rr.name, rr);
};
const RL = _({
  name: "SdsTable",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    },
    sortBy: { type: String, default: "" },
    sortDesc: { type: Boolean, default: !1 },
    caption: { type: String, default: null },
    sortedColumnClass: { type: String, default: null }
  },
  data() {
    return {
      sortField: this.sortBy,
      sortOrder: this.sortDesc ? -1 : 1
    };
  },
  computed: {
    sortedItems() {
      return this.items.sort((t, n) => this.sortCompare(t, n, this.sortField));
    },
    displayedFields() {
      return this.fields.filter((e) => !e.hidden);
    },
    displayedFieldKeys() {
      return Object.entries(this.displayedFields).map(([e, t]) => t.key);
    }
  },
  methods: {
    cellElement(e) {
      const t = this.fields.find((n) => n.key === e);
      return t && t.header ? "th" : "td";
    },
    format(e, t) {
      const n = this.fields.find((r) => r.key === t);
      return n && n.format ? n.format(e[t]) : e[t];
    },
    handleSortBy(e) {
      this.sortField = e.key, this.sortOrder = this.sortOrder === 0 ? 1 : this.sortOrder === 1 ? -1 : 1;
    },
    sortCompare(e, t, n) {
      const r = e[n], o = t[n];
      return typeof r == "number" && typeof o == "number" || r instanceof Date && o instanceof Date ? (r < o ? -1 : r > o ? 1 : 0) * this.sortOrder : this.toString(r).localeCompare(this.toString(o)) * this.sortOrder;
    },
    toString(e) {
      return e === null || typeof e > "u" ? "" : e instanceof Object ? Object.keys(e).sort().map((t) => this.toString(e[t])).join(" ") : String(e);
    }
  }
}), UL = { "data-id": "sds-table" }, BL = { key: 0 }, QL = ["onClick"], VL = {
  key: 0,
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z",
  fill: "currentColor"
}, HL = {
  key: 1,
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",
  fill: "currentColor"
}, GL = {
  key: 2,
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z",
  fill: "currentColor"
};
function WL(e, t, n, r, o, i) {
  return u(), f("table", UL, [
    !!e.$slots.caption || e.caption ? (u(), f("caption", BL, [
      j(e.$slots, "caption", {}, () => [
        ee(M(e.caption), 1)
      ])
    ])) : w("", !0),
    s("colgroup", null, [
      (u(!0), f(N, null, A(e.displayedFields, (a) => j(e.$slots, `col(${a.key})`, {
        active: e.sortField === a.key,
        activeClass: e.sortedColumnClass
      }, () => [
        (u(), f("col", {
          key: a.key,
          class: L({
            [e.sortedColumnClass]: e.sortField === a.key
          })
        }, null, 2))
      ])), 256))
    ]),
    s("thead", null, [
      s("tr", null, [
        (u(!0), f(N, null, A(e.displayedFields, (a) => (u(), f("th", {
          key: a.key,
          class: L([{
            [e.sortedColumnClass]: e.sortField === a.key,
            "cursor-pointer": a.sortable
          }, "space-x-1 select-none group"]),
          onClick: (c) => a.sortable ? e.handleSortBy(a) : void 0
        }, [
          j(e.$slots, `head(${a.key})`, {
            field: a,
            active: e.sortField === a.key
          }, () => [
            ee(M(a.label) + " ", 1),
            a.sortable ? (u(), f("svg", {
              key: 0,
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              "aria-hidden": "true",
              role: "img",
              class: L(["inline-block w-4 h-4 group-hover:opacity-100", {
                "opacity-100": e.sortField === a.key,
                "opacity-50": e.sortField !== a.key
              }]),
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 320 512"
            }, [
              e.sortField !== a.key ? (u(), f("path", VL)) : w("", !0),
              e.sortField === a.key && e.sortOrder > 0 ? (u(), f("path", HL)) : w("", !0),
              e.sortField === a.key && e.sortOrder < 0 ? (u(), f("path", GL)) : w("", !0)
            ], 2)) : w("", !0)
          ])
        ], 10, QL))), 128))
      ])
    ]),
    s("tbody", null, [
      (u(!0), f(N, null, A(e.sortedItems, (a) => (u(), f("tr", {
        key: a.id
      }, [
        (u(!0), f(N, null, A(e.displayedFieldKeys, (c) => (u(), ve(Oa(e.cellElement(c)), { key: c }, {
          default: te(() => [
            j(e.$slots, `cell(${c})`, {
              value: e.format(a, c),
              item: a,
              format: (l) => e.format(a, l)
            }, () => [
              ee(M(e.format(a, c)), 1)
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ]))), 128))
    ])
  ]);
}
const or = /* @__PURE__ */ E(RL, [["render", WL]]);
or.install = (e) => {
  e.component(or.name, or);
};
const FL = _({
  name: "SdsTextarea",
  components: {
    CharacterCounter: ll
  },
  props: {
    modelValue: { type: String, default: "" },
    countCharacters: { type: Boolean, default: !1 },
    maxlength: { type: Number, default: 524288 },
    placeholder: { type: String, default: "" },
    rows: { type: Number, default: 5 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    valid: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  computed: {
    text: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  }
}), qL = { "data-id": "sds-textarea" }, JL = ["rows", "maxlength", "placeholder", "autofocus", "disabled", "readonly", "required"];
function KL(e, t, n, r, o, i) {
  const a = ye("character-counter");
  return u(), f("div", qL, [
    ne(s("textarea", {
      "onUpdate:modelValue": t[0] || (t[0] = (c) => e.text = c),
      class: L(["form-control", { valid: e.valid, invalid: e.invalid }]),
      rows: e.rows,
      maxlength: e.maxlength,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      required: e.required
    }, null, 10, JL), [
      [it, e.text]
    ]),
    e.countCharacters ? (u(), ve(a, {
      key: 0,
      class: "text-right text-gray-500",
      "current-value": e.text.length,
      "max-value": e.maxlength
    }, null, 8, ["current-value", "max-value"])) : w("", !0)
  ]);
}
const ar = /* @__PURE__ */ E(FL, [["render", KL]]);
ar.install = (e) => {
  e.component(ar.name, ar);
};
const XL = _({
  name: "SdsToast",
  props: {
    id: { type: Number, required: !0 },
    variant: { type: String, default: "success" },
    title: { type: String, required: !0 },
    text: { type: String, required: !0 },
    autoHideDelay: { type: Number, default: 5e3 },
    noAutoHide: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  data() {
    return {
      timer: null
    };
  },
  mounted() {
    this.setTimer();
  },
  unmounted() {
    this.clearTimer();
  },
  methods: {
    removeToast() {
      this.$emit("remove", this.id);
    },
    clearTimer() {
      !this.timer || clearTimeout(this.timer);
    },
    setTimer() {
      this.clearTimer(), !this.noAutoHide && (this.timer = setTimeout(() => {
        this.removeToast();
      }, this.autoHideDelay));
    }
  }
}), ZL = { class: "overflow-hidden rounded ring-1 ring-black ring-opacity-5" }, e3 = { class: "p-4" }, t3 = { class: "flex toasts-start" }, n3 = { class: "flex-shrink-0" }, r3 = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}, o3 = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, a3 = {
  key: 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
}, i3 = {
  key: 3,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, s3 = { class: "ml-3 w-0 flex-1 pt-0.5" }, l3 = {
  key: 0,
  class: "text-sm font-medium leading-5 text-gray-900 dark:text-gray-100"
}, u3 = {
  key: 1,
  class: "mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300"
}, c3 = { class: "flex flex-shrink-0 ml-4" }, f3 = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), d3 = [
  f3
];
function y3(e, t, n, r, o, i) {
  return u(), f("div", {
    "data-id": "sds-toast",
    role: "alert",
    "aria-live": "polite",
    class: "w-full max-w-sm bg-white rounded shadow-lg pointer-events-auto dark:bg-gray-700",
    onMouseenter: t[1] || (t[1] = (...a) => e.clearTimer && e.clearTimer(...a)),
    onMouseleave: t[2] || (t[2] = (...a) => e.setTimer && e.setTimer(...a))
  }, [
    s("div", ZL, [
      s("div", e3, [
        s("div", t3, [
          s("div", n3, [
            e.variant ? (u(), f("svg", {
              key: 0,
              class: L([{
                " text-green-400 dark:text-green-300": e.variant && e.variant === "success",
                " text-blue-400 dark:text-blue-300": e.variant && e.variant === "info",
                " text-orange-500 dark:text-orange-400": e.variant && e.variant === "warning",
                " text-red-400 dark:text-red-300": e.variant && e.variant === "danger"
              }, "w-6 h-6"]),
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              e.variant === "success" ? (u(), f("path", r3)) : w("", !0),
              e.variant === "info" ? (u(), f("path", o3)) : w("", !0),
              e.variant === "warning" ? (u(), f("path", a3)) : w("", !0),
              e.variant === "danger" ? (u(), f("path", i3)) : w("", !0)
            ], 2)) : w("", !0)
          ]),
          s("div", s3, [
            e.title ? (u(), f("p", l3, M(e.title), 1)) : w("", !0),
            e.text ? (u(), f("p", u3, M(e.text), 1)) : w("", !0)
          ]),
          s("div", c3, [
            s("button", {
              class: "inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-600 hover:text-gray-600 dark:focus:text-gray-100 dark:hover:text-gray-100",
              onClick: t[0] || (t[0] = (...a) => e.removeToast && e.removeToast(...a))
            }, d3)
          ])
        ])
      ])
    ])
  ], 32);
}
const xt = /* @__PURE__ */ E(XL, [["render", y3]]);
xt.install = (e) => {
  e.component(xt.name, xt);
};
const p3 = _({
  name: "SdsToaster",
  components: {
    SdsToast: xt
  },
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  computed: {
    toasts: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    removeToast(e) {
      this.toasts = this.toasts.filter((t) => e !== t.id);
    }
  }
}), h3 = {
  key: 0,
  "data-id": "sds-toaster",
  class: "fixed inset-0 z-50 p-4 pointer-events-none sm:p-6"
};
function m3(e, t, n, r, o, i) {
  const a = ye("sds-toast");
  return e.toasts.length > 0 ? (u(), f("div", h3, [
    ge(gl, {
      tag: "div",
      "enter-active-class": "transition duration-300 ease-out transform",
      "enter-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
      "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
      "leave-active-class": "transition duration-100 ease-in",
      "leave-class": "opacity-100",
      "leave-to-class": "opacity-0",
      class: "space-y-4"
    }, {
      default: te(() => [
        j(e.$slots, "default", {
          toasts: e.toasts,
          removeToast: e.removeToast
        }, () => [
          (u(!0), f(N, null, A(e.toasts, (c) => (u(), ve(a, {
            id: c.id,
            key: c.id,
            variant: c.variant,
            title: c.title,
            text: c.text,
            "auto-hide-delay": c.autoHideDelay || 5e3,
            "no-auto-hide": c.noAutoHide || !1,
            class: "ml-auto",
            onRemove: e.removeToast
          }, null, 8, ["id", "variant", "title", "text", "auto-hide-delay", "no-auto-hide", "onRemove"]))), 128))
        ])
      ]),
      _: 3
    })
  ])) : w("", !0);
}
const ir = /* @__PURE__ */ E(p3, [["render", m3]]);
ir.install = (e) => {
  e.component(ir.name, ir);
};
const g3 = _({
  name: "SdsToggleSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      styles: {
        button: "hover:shadow-md relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none disabled:bg-gray-700 disabled:bg-opacity-50 disabled:shadow-none",
        switch: "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform transition ease-in-out duration-200",
        offIcon: "pointer-events-none absolute h-4 w-4 mt-0.5 ml-0.5 transform ring-0 transition ease-in-out duration-400 fill-current text-gray-700",
        onIcon: "pointer-events-none absolute h-4 w-4 mt-0.5 ml-0.5 transform ring-0 transition ease-in-out duration-400"
      },
      icons: {
        off: "M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z",
        on: "M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
      }
    };
  },
  computed: {
    isToggled: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "bg-blue-500";
        case "danger":
          return "bg-red-500";
        default:
          return "bg-gray-900";
      }
    },
    variantFillClass() {
      switch (this.variant) {
        case "primary":
          return "fill-current text-blue-500";
        case "danger":
          return "fill-current text-red-500";
        default:
          return "fill-current text-gray-900";
      }
    }
  },
  methods: {
    update() {
      this.isToggled = !this.isToggled;
    }
  }
});
const v3 = (e) => (Os("data-v-faa1240c"), e = e(), _s(), e), w3 = {
  "data-id": "sds-toggle-switch",
  class: "flex items-center"
}, b3 = ["disabled"], M3 = ["d"], L3 = /* @__PURE__ */ v3(() => /* @__PURE__ */ s("span", { class: "ml-3" }, null, -1)), C3 = ["d"];
function S3(e, t, n, r, o, i) {
  return u(), f("div", w3, [
    s("button", {
      type: "button",
      class: L([e.isToggled ? e.variantClass : "bg-gray-700 disabled:bg-opacity-50", e.styles.button]),
      disabled: e.disabled,
      role: "switch",
      "aria-checked": "false",
      onClick: t[0] || (t[0] = (...a) => e.update && e.update(...a))
    }, [
      s("span", {
        class: L([e.isToggled ? "translate-x-5 toggle-on-shadow" : "translate-x-0 toggle-off-shadow", e.styles.switch])
      }, null, 2),
      (u(), f("svg", {
        class: L([e.isToggled ? "translate-x-5 hidden" : "translate-x-0 block", e.styles.offIcon, e.disabled && "text-opacity-50"]),
        viewBox: "0 0 1792 1792",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        s("path", {
          d: e.icons.off
        }, null, 8, M3)
      ], 2)),
      L3,
      (u(), f("svg", {
        class: L([e.isToggled ? "translate-x-5 block" : "translate-x-0 hidden", e.styles.onIcon, e.disabled ? "fill-current text-gray-700 text-opacity-50" : e.variantFillClass]),
        viewBox: "0 0 1792 1792",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        s("path", {
          d: e.icons.on
        }, null, 8, C3)
      ], 2))
    ], 10, b3)
  ]);
}
const sr = /* @__PURE__ */ E(g3, [["render", S3], ["__scopeId", "data-v-faa1240c"]]);
sr.install = (e) => {
  e.component(sr.name, sr);
};
jt.install = (e) => {
  e.component(jt.name, jt);
};
const j3 = _({
  name: "SdsTopFiveChart",
  props: {
    title: {
      type: String,
      default: null
    },
    entries: {
      type: Array,
      default: () => []
    },
    doNotLinkEntries: {
      type: Boolean,
      default: !1
    },
    viewAllUrl: {
      type: String,
      default: null
    },
    progressColor: {
      type: String,
      default: "blue"
    },
    showPercent: {
      type: Boolean,
      default: !1
    },
    smallHeading: {
      type: Boolean,
      default: !1
    },
    noDataMsg: {
      type: String,
      default: "There is no chart data to display at this time."
    },
    missingPropsMsg: {
      type: String,
      default: "The chart data is malformed and cannot be displayed at this time."
    }
  },
  emits: ["result-click"],
  computed: {
    results() {
      return this.entriesHaveAllRequiredProps ? this.entries.slice(0, 5) : [];
    },
    entriesHaveAllRequiredProps() {
      return this.entries.length < 1 ? !0 : this.entries.every((e) => Object.prototype.hasOwnProperty.call(e, "id") && Object.prototype.hasOwnProperty.call(e, "title") && Object.prototype.hasOwnProperty.call(e, "count"));
    },
    maxResultValue() {
      return Math.max.apply(
        Math,
        this.results.map((e) => e.count)
      );
    }
  },
  methods: {
    resultValue(e) {
      return e * 100 / this.maxResultValue;
    },
    resultCountDisplay(e) {
      return this.showPercent ? `${e}%` : e;
    },
    resultHasUrl(e) {
      return typeof e.url < "u";
    },
    resultClick(e) {
      this.$emit("result-click", e);
    },
    getProgressColor(e) {
      switch (this.progressColor) {
        case "teal":
          if (e === 0)
            return "bg-teal-900";
          if (e === 1)
            return "bg-teal-700";
          if (e === 2)
            return "bg-teal-500";
          if (e === 3)
            return "bg-teal-300";
          if (e === 4)
            return "bg-teal-100";
          break;
        case "red":
          if (e === 0)
            return "bg-red-900";
          if (e === 1)
            return "bg-red-700";
          if (e === 2)
            return "bg-red-500";
          if (e === 3)
            return "bg-red-300";
          if (e === 4)
            return "bg-red-100";
          break;
        case "gray":
          if (e === 0)
            return "bg-gray-900";
          if (e === 1)
            return "bg-gray-700";
          if (e === 2)
            return "bg-gray-500";
          if (e === 3)
            return "bg-gray-300";
          if (e === 4)
            return "bg-gray-100";
          break;
        case "green":
          if (e === 0)
            return "bg-green-900";
          if (e === 1)
            return "bg-green-700";
          if (e === 2)
            return "bg-green-500";
          if (e === 3)
            return "bg-green-300";
          if (e === 4)
            return "bg-green-100";
          break;
        case "orange":
          if (e === 0)
            return "bg-orange-900";
          if (e === 1)
            return "bg-orange-700";
          if (e === 2)
            return "bg-orange-500";
          if (e === 3)
            return "bg-orange-300";
          if (e === 4)
            return "bg-orange-100";
          break;
        case "pink":
          if (e === 0)
            return "bg-pink-900";
          if (e === 1)
            return "bg-pink-700";
          if (e === 2)
            return "bg-pink-500";
          if (e === 3)
            return "bg-pink-300";
          if (e === 4)
            return "bg-pink-100";
          break;
        case "indigo":
          if (e === 0)
            return "bg-indigo-900";
          if (e === 1)
            return "bg-indigo-700";
          if (e === 2)
            return "bg-indigo-500";
          if (e === 3)
            return "bg-indigo-300";
          if (e === 4)
            return "bg-indigo-100";
          break;
        case "purple":
          if (e === 0)
            return "bg-purple-900";
          if (e === 1)
            return "bg-purple-700";
          if (e === 2)
            return "bg-purple-500";
          if (e === 3)
            return "bg-purple-300";
          if (e === 4)
            return "bg-purple-100";
          break;
        case "blue":
        default:
          if (e === 0)
            return "bg-blue-900";
          if (e === 1)
            return "bg-blue-700";
          if (e === 2)
            return "bg-blue-500";
          if (e === 3)
            return "bg-blue-300";
          if (e === 4)
            return "bg-blue-100";
          break;
      }
    }
  }
}), T3 = {
  "data-id": "sds-top-five-chart",
  class: "space-y-4 chart"
}, N3 = { key: 0 }, k3 = { class: "space-y-6" }, D3 = { class: "flex" }, O3 = { class: "flex-grow" }, _3 = { class: "mb-2" }, x3 = ["title", "aria-valuenow", "aria-valuemax"], $3 = { class: "sr-only" }, z3 = { class: "text-sm font-semibold chart-label-section" }, I3 = ["href"], P3 = ["onClick"], E3 = { key: 1 }, A3 = {
  key: 0,
  class: "mt-4"
}, Y3 = ["href"], R3 = { key: 1 }, U3 = { key: 0 }, B3 = { key: 1 };
function Q3(e, t, n, r, o, i) {
  return u(), f("div", T3, [
    s("h3", {
      class: L({
        "text-lg font-bold": e.smallHeading,
        "text-2xl font-bold": !e.smallHeading
      })
    }, M(e.title), 3),
    e.results.length > 0 ? (u(), f("div", N3, [
      s("ul", k3, [
        (u(!0), f(N, null, A(e.results, (a, c) => (u(), f("li", {
          key: a.id
        }, [
          s("div", D3, [
            s("div", O3, [
              s("div", _3, [
                s("div", {
                  class: L(["h-6 mr-2 rounded", [e.getProgressColor(c)]]),
                  role: "progressbar",
                  title: `${a.count}`,
                  "aria-valuenow": a.count,
                  "aria-valuemin": "0",
                  "aria-valuemax": e.maxResultValue,
                  style: De({ width: `${e.resultValue(a.count)}%` })
                }, [
                  s("span", $3, M(e.resultCountDisplay(a.count)) + " " + M(a.title), 1)
                ], 14, x3)
              ]),
              s("div", z3, [
                ee(M(e.resultCountDisplay(a.count)) + " \xB7 ", 1),
                e.doNotLinkEntries ? (u(), f("span", E3, M(a.title), 1)) : (u(), f(N, { key: 0 }, [
                  e.resultHasUrl(a) ? (u(), f("a", {
                    key: 0,
                    href: a.url,
                    class: "hover:underline focus:underline focus:outline-none"
                  }, M(a.title), 9, I3)) : (u(), f("a", {
                    key: 1,
                    href: "#",
                    class: "hover:underline focus:underline focus:outline-none",
                    onClick: me((l) => e.resultClick(a), ["prevent"])
                  }, M(a.title), 9, P3))
                ], 64))
              ])
            ])
          ])
        ]))), 128)),
        e.viewAllUrl !== null ? (u(), f("li", A3, [
          s("a", {
            href: e.viewAllUrl,
            class: "link link-primary link-cta"
          }, " View All ", 8, Y3)
        ])) : w("", !0)
      ])
    ])) : (u(), f("div", R3, [
      e.entriesHaveAllRequiredProps ? (u(), f("p", U3, M(e.noDataMsg), 1)) : (u(), f("p", B3, M(e.missingPropsMsg), 1))
    ]))
  ]);
}
const lr = /* @__PURE__ */ E(j3, [["render", Q3]]);
lr.install = (e) => {
  e.component(lr.name, lr);
};
const Ts = {
  SdsAutosuggest: Qt,
  SdsBadge: Vt,
  SdsButton: Ht,
  SdsCalendar: Lt,
  SdsCheckboxGroup: xn,
  SdsClientOnly: at,
  SdsDatapoint: $n,
  SdsDatepicker: zn,
  SdsDropdown: In,
  SdsDropdownDivider: Pn,
  SdsDropdownHeader: En,
  SdsDropdownItem: An,
  SdsFileUploader: Yn,
  SdsFilterByDropdown: Rn,
  SdsFloatingUi: Pe,
  SdsInput: Un,
  SdsLayoutApp: Bn,
  SdsLayoutSeiExternal: Qn,
  SdsLayoutSeiExternalFooter: kt,
  SdsLayoutSeiExternalHeader: Nt,
  SdsLayoutSeiExternalHeaderContent: Ot,
  SdsLayoutSeiExternalMasthead: _t,
  SdsLayoutSeiExternalNav: Dt,
  SdsLayoutSeiExternalWordmark: Tt,
  SdsLayoutStacked: Vn,
  SdsLink: St,
  SdsLoadingBox: Hn,
  SdsLoadingSpinner: Gn,
  SdsModal: Wn,
  SdsMultiselect: Fn,
  SdsPaginator: qn,
  SdsPopover: Jn,
  SdsRadioGroup: Kn,
  SdsScrollArea: Xn,
  SdsScrollspy: Zn,
  SdsSearchBox: er,
  SdsSection: tr,
  SdsSelect: nr,
  SdsTabs: rr,
  SdsTable: or,
  SdsTextarea: ar,
  SdsToast: xt,
  SdsToaster: ir,
  SdsToggleSwitch: sr,
  SdsTooltip: jt,
  SdsTopFiveChart: lr
}, H3 = {
  install(e) {
    Object.keys(Ts).forEach((t) => {
      e.component(t, Ts[t]);
    });
  }
};
export {
  Qt as SdsAutosuggest,
  Vt as SdsBadge,
  Ht as SdsButton,
  Lt as SdsCalendar,
  xn as SdsCheckboxGroup,
  at as SdsClientOnly,
  $n as SdsDatapoint,
  zn as SdsDatepicker,
  In as SdsDropdown,
  Pn as SdsDropdownDivider,
  En as SdsDropdownHeader,
  An as SdsDropdownItem,
  Yn as SdsFileUploader,
  Rn as SdsFilterByDropdown,
  Pe as SdsFloatingUi,
  Un as SdsInput,
  Bn as SdsLayoutApp,
  Qn as SdsLayoutSeiExternal,
  kt as SdsLayoutSeiExternalFooter,
  Nt as SdsLayoutSeiExternalHeader,
  Ot as SdsLayoutSeiExternalHeaderContent,
  _t as SdsLayoutSeiExternalMasthead,
  Dt as SdsLayoutSeiExternalNav,
  Tt as SdsLayoutSeiExternalWordmark,
  Vn as SdsLayoutStacked,
  St as SdsLink,
  Hn as SdsLoadingBox,
  Gn as SdsLoadingSpinner,
  Wn as SdsModal,
  Fn as SdsMultiselect,
  qn as SdsPaginator,
  Jn as SdsPopover,
  Kn as SdsRadioGroup,
  Xn as SdsScrollArea,
  Zn as SdsScrollspy,
  er as SdsSearchBox,
  tr as SdsSection,
  nr as SdsSelect,
  or as SdsTable,
  rr as SdsTabs,
  ar as SdsTextarea,
  xt as SdsToast,
  ir as SdsToaster,
  sr as SdsToggleSwitch,
  jt as SdsTooltip,
  lr as SdsTopFiveChart,
  H3 as default
};
