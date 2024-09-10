import {
  s as Y,
  l as $e,
  e as A,
  a as N,
  c as C,
  b as I,
  f as $,
  g as q,
  r as h,
  y as Vt,
  i as x,
  h as y,
  u as _e,
  m as ve,
  o as be,
  Q as vn,
  ab as bn,
  E as wn,
  a5 as xe,
  n as re,
  F as on,
  k as ne,
  w as De,
  x as Be,
  G as ze,
  I as $t,
  B as Nt,
  a8 as kn,
  U as En,
  ac as yn,
  a7 as qt,
  t as B,
  d as z,
  j as F,
  p as U,
  q as Q,
  M as an,
  A as Bt,
  L as Sn,
  v as Le,
  K as zt,
  R as In,
} from "./scheduler.j3FdVX_3.js";
import {
  S as Z,
  i as W,
  t as P,
  b as j,
  g as _t,
  e as vt,
  c as R,
  a as K,
  m as H,
  d as G,
} from "./index.B2YDLXwW.js";
import {
  t as Te,
  c as Ft,
} from "./text-animation.svelte_svelte_type_style_lang.PyTsGWbX.js";
import { w as qe } from "./entry.BXe_oHrD.js";
import { B as Xe } from "./check.CsInqHA3.js";
import { l as Dn, h as je } from "./lenis.Vcx2G2sx.js";
import {
  c as we,
  g as bt,
  G as Ln,
} from "./benefits-list.svelte_svelte_type_style_lang.C3TWG9N2.js";
import { B as wt } from "./blur-light.CTV_9hHm.js";
import { H as kt } from "./header.B-UNqSd_.js";
import { F as tt } from "./feather.CpcrUE3R.js";
import { e as nt, u as Tn, o as Mn } from "./each.CcloCqHC.js";
import { a as An, R as dt, p as Cn } from "./responsive-image.CLIeEDCa.js";
const xn = (r) => ({}),
  Rt = (r) => ({}),
  On = (r) => ({}),
  Ht = (r) => ({});
function Pn(r) {
  let e, n, t, s, o, i, l, a, c, u;
  const f = r[3].title,
    p = $e(f, r, r[2], Ht),
    b = r[3].description,
    m = $e(b, r, r[2], Rt);
  return {
    c() {
      (e = A("article")),
        (n = A("div")),
        (t = A("img")),
        (o = N()),
        (i = A("header")),
        p && p.c(),
        (l = N()),
        (a = A("p")),
        m && m.c(),
        this.h();
    },
    l(d) {
      e = C(d, "ARTICLE", { "data-animation": !0, class: !0 });
      var g = I(e);
      n = C(g, "DIV", { class: !0 });
      var _ = I(n);
      (t = C(_, "IMG", { loading: !0, src: !0, alt: !0, class: !0 })),
        _.forEach($),
        (o = q(g)),
        (i = C(g, "HEADER", { class: !0 }));
      var w = I(i);
      p && p.l(w), w.forEach($), (l = q(g)), (a = C(g, "P", { class: !0 }));
      var v = I(a);
      m && m.l(v), v.forEach($), g.forEach($), this.h();
    },
    h() {
      h(t, "loading", "lazy"),
        Vt(t.src, (s = r[1])) || h(t, "src", s),
        h(t, "alt", "Approach"),
        h(t, "class", "aspect-square h-32"),
        h(n, "class", "shimmer-animation rounded-3xl"),
        h(i, "class", "font-light text-headline-1"),
        h(a, "class", "max-w-[30ch] text-balance text-paragraph-1"),
        h(e, "data-animation", "slide-up-fade"),
        h(
          e,
          "class",
          (c = we(
            "flex w-fit flex-col items-center text-center mobile:gap-1 tablet:gap-2",
            r[0]
          ))
        );
    },
    m(d, g) {
      x(d, e, g),
        y(e, n),
        y(n, t),
        y(e, o),
        y(e, i),
        p && p.m(i, null),
        y(e, l),
        y(e, a),
        m && m.m(a, null),
        (u = !0);
    },
    p(d, [g]) {
      (!u || (g & 2 && !Vt(t.src, (s = d[1])))) && h(t, "src", s),
        p &&
          p.p &&
          (!u || g & 4) &&
          _e(p, f, d, d[2], u ? be(f, d[2], g, On) : ve(d[2]), Ht),
        m &&
          m.p &&
          (!u || g & 4) &&
          _e(m, b, d, d[2], u ? be(b, d[2], g, xn) : ve(d[2]), Rt),
        (!u ||
          (g & 1 &&
            c !==
              (c = we(
                "flex w-fit flex-col items-center text-center mobile:gap-1 tablet:gap-2",
                d[0]
              )))) &&
          h(e, "class", c);
    },
    i(d) {
      u || (P(p, d), P(m, d), (u = !0));
    },
    o(d) {
      j(p, d), j(m, d), (u = !1);
    },
    d(d) {
      d && $(e), p && p.d(d), m && m.d(d);
    },
  };
}
function jn(r, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { class: o = "" } = e,
    { img: i } = e;
  return (
    (r.$$set = (l) => {
      "class" in l && n(0, (o = l.class)),
        "img" in l && n(1, (i = l.img)),
        "$$scope" in l && n(2, (s = l.$$scope));
    }),
    [o, i, s, t]
  );
}
class Ke extends Z {
  constructor(e) {
    super(), W(this, e, jn, Pn, Y, { class: 0, img: 1 });
  }
}
const ht = Symbol("EMBLA_CAROUSEL_CONTEXT");
function Vn(r) {
  return vn(ht, r), r;
}
function rt(r = "This component") {
  if (!bn(ht))
    throw new Error(`${r} must be used within a <Carousel.Root> component`);
  return wn(ht);
}
function Nn(r) {
  let e, n, t, s;
  return {
    c() {
      (e = A("button")), this.h();
    },
    l(o) {
      (e = C(o, "BUTTON", { class: !0, "aria-label": !0 })),
        I(e).forEach($),
        this.h();
    },
    h() {
      h(
        e,
        "class",
        (n = we(
          "transition-all",
          r[1] === r[0]
            ? "h-2 w-[2.75rem] rounded-[2rem] gradient-primary"
            : "h-2 w-2 rounded-full bg-neutral-primary-25"
        ))
      ),
        h(e, "aria-label", "Go To Slide");
    },
    m(o, i) {
      x(o, e, i),
        t || ((s = [xe(e, "click", r[5]), xe(e, "keydown", r[2])]), (t = !0));
    },
    p(o, [i]) {
      i & 3 &&
        n !==
          (n = we(
            "transition-all",
            o[1] === o[0]
              ? "h-2 w-[2.75rem] rounded-[2rem] gradient-primary"
              : "h-2 w-2 rounded-full bg-neutral-primary-25"
          )) &&
        h(e, "class", n);
    },
    i: re,
    o: re,
    d(o) {
      o && $(e), (t = !1), on(s);
    },
  };
}
function qn(r, e, n) {
  let t,
    { idx: s } = e;
  const {
    handleKeyDown: o,
    scrollTo: i,
    currentSlide: l,
  } = rt("<Carousel.Button/>");
  ne(r, l, (c) => n(1, (t = c)));
  const a = () => i(s);
  return (
    (r.$$set = (c) => {
      "idx" in c && n(0, (s = c.idx));
    }),
    [s, t, o, i, l, a]
  );
}
class Bn extends Z {
  constructor(e) {
    super(), W(this, e, qn, Nn, Y, { idx: 0 });
  }
}
function zn(r) {
  let e, n, t, s;
  const o = r[5].default,
    i = $e(o, r, r[4], null);
  let l = [
      { class: (t = we("flex", r[1] !== "horizontal" && "flex-col", r[0])) },
      { "data-embla-container": "" },
      r[3],
    ],
    a = {};
  for (let c = 0; c < l.length; c += 1) a = De(a, l[c]);
  return {
    c() {
      (e = A("div")), (n = A("div")), i && i.c(), this.h();
    },
    l(c) {
      e = C(c, "DIV", { class: !0 });
      var u = I(e);
      n = C(u, "DIV", { class: !0, "data-embla-container": !0 });
      var f = I(n);
      i && i.l(f), f.forEach($), u.forEach($), this.h();
    },
    h() {
      Be(n, a),
        h(
          e,
          "class",
          "overflow-hidden mobile:rounded-[1.5rem] tablet:rounded-[2rem]"
        );
    },
    m(c, u) {
      x(c, e, u), y(e, n), i && i.m(n, null), (s = !0);
    },
    p(c, [u]) {
      i &&
        i.p &&
        (!s || u & 16) &&
        _e(i, o, c, c[4], s ? be(o, c[4], u, null) : ve(c[4]), null),
        Be(
          n,
          (a = bt(l, [
            (!s ||
              (u & 3 &&
                t !==
                  (t = we(
                    "flex",
                    c[1] !== "horizontal" && "flex-col",
                    c[0]
                  )))) && { class: t },
            { "data-embla-container": "" },
            u & 8 && c[3],
          ]))
        );
    },
    i(c) {
      s || (P(i, c), (s = !0));
    },
    o(c) {
      j(i, c), (s = !1);
    },
    d(c) {
      c && $(e), i && i.d(c);
    },
  };
}
function Fn(r, e, n) {
  const t = ["class"];
  let s = ze(e, t),
    o,
    { $$slots: i = {}, $$scope: l } = e,
    { class: a = void 0 } = e;
  const { orientation: c } = rt("<Carousel.Content/>");
  return (
    ne(r, c, (u) => n(1, (o = u))),
    (r.$$set = (u) => {
      (e = De(De({}, e), $t(u))),
        n(3, (s = ze(e, t))),
        "class" in u && n(0, (a = u.class)),
        "$$scope" in u && n(4, (l = u.$$scope));
    }),
    [a, o, c, s, l, i]
  );
}
class Rn extends Z {
  constructor(e) {
    super(), W(this, e, Fn, zn, Y, { class: 0 });
  }
}
function Hn(r) {
  let e, n, t, s, o;
  const i = r[4].default,
    l = $e(i, r, r[3], null);
  let a = [
      { role: "group" },
      { "aria-roledescription": "slide" },
      {
        class: (n = we(
          "carousel-item min-w-0 shrink-0 grow-0 basis-full cursor-pointer select-none",
          r[0]
        )),
      },
      { "data-embla-slide": "" },
      r[2],
    ],
    c = {};
  for (let u = 0; u < a.length; u += 1) c = De(c, a[u]);
  return {
    c() {
      (e = A("div")), l && l.c(), this.h();
    },
    l(u) {
      e = C(u, "DIV", {
        role: !0,
        "aria-roledescription": !0,
        class: !0,
        "data-embla-slide": !0,
      });
      var f = I(e);
      l && l.l(f), f.forEach($), this.h();
    },
    h() {
      Be(e, c);
    },
    m(u, f) {
      x(u, e, f),
        l && l.m(e, null),
        (t = !0),
        s || ((o = xe(e, "click", r[1])), (s = !0));
    },
    p(u, [f]) {
      l &&
        l.p &&
        (!t || f & 8) &&
        _e(l, i, u, u[3], t ? be(i, u[3], f, null) : ve(u[3]), null),
        Be(
          e,
          (c = bt(a, [
            { role: "group" },
            { "aria-roledescription": "slide" },
            (!t ||
              (f & 1 &&
                n !==
                  (n = we(
                    "carousel-item min-w-0 shrink-0 grow-0 basis-full cursor-pointer select-none",
                    u[0]
                  )))) && { class: n },
            { "data-embla-slide": "" },
            f & 4 && u[2],
          ]))
        );
    },
    i(u) {
      t || (P(l, u), (t = !0));
    },
    o(u) {
      j(l, u), (t = !1);
    },
    d(u) {
      u && $(e), l && l.d(u), (s = !1), o();
    },
  };
}
function Gn(r, e, n) {
  const t = ["class"];
  let s = ze(e, t),
    { $$slots: o = {}, $$scope: i } = e;
  const { scrollNext: l } = rt("<Carousel.Item/>");
  let { class: a = void 0 } = e;
  return (
    (r.$$set = (c) => {
      (e = De(De({}, e), $t(c))),
        n(2, (s = ze(e, t))),
        "class" in c && n(0, (a = c.class)),
        "$$scope" in c && n(3, (i = c.$$scope));
    }),
    [a, l, s, i, o]
  );
}
class Kn extends Z {
  constructor(e) {
    super(), W(this, e, Gn, Hn, Y, { class: 0 });
  }
}
function Gt(r, e, n) {
  const t = r.slice();
  (t[2] = e[n]), (t[5] = n);
  const s = t[2];
  return (t[3] = s), t;
}
function Kt(r, e) {
  let n, t, s;
  return (
    (t = new Bn({ props: { idx: e[5] } })),
    {
      key: r,
      first: null,
      c() {
        (n = Nt()), R(t.$$.fragment), this.h();
      },
      l(o) {
        (n = Nt()), K(t.$$.fragment, o), this.h();
      },
      h() {
        this.first = n;
      },
      m(o, i) {
        x(o, n, i), H(t, o, i), (s = !0);
      },
      p(o, i) {
        e = o;
        const l = {};
        i & 1 && (l.idx = e[5]), t.$set(l);
      },
      i(o) {
        s || (P(t.$$.fragment, o), (s = !0));
      },
      o(o) {
        j(t.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && $(n), G(t, o);
      },
    }
  );
}
function Un(r) {
  let e,
    n = [],
    t = new Map(),
    s,
    o = nt(Array.from({ length: r[0] }));
  const i = (l) => l[5];
  for (let l = 0; l < o.length; l += 1) {
    let a = Gt(r, o, l),
      c = i(a);
    t.set(c, (n[l] = Kt(c, a)));
  }
  return {
    c() {
      e = A("nav");
      for (let l = 0; l < n.length; l += 1) n[l].c();
      this.h();
    },
    l(l) {
      e = C(l, "NAV", { "data-cursor-hover-icon": !0, class: !0 });
      var a = I(e);
      for (let c = 0; c < n.length; c += 1) n[c].l(a);
      a.forEach($), this.h();
    },
    h() {
      h(e, "data-cursor-hover-icon", "none"),
        h(
          e,
          "class",
          "left-carousel-item absolute flex w-fit items-center justify-center gap-4 rounded-carousel-progress bg-neutral-secondary-25 bg-opacity-10 p-4 svelte-1ch6zct"
        );
    },
    m(l, a) {
      x(l, e, a);
      for (let c = 0; c < n.length; c += 1) n[c] && n[c].m(e, null);
      s = !0;
    },
    p(l, [a]) {
      a & 1 &&
        ((o = nt(Array.from({ length: l[0] }))),
        _t(),
        (n = Tn(n, a, i, 1, l, o, t, e, Mn, Kt, null, Gt)),
        vt());
    },
    i(l) {
      if (!s) {
        for (let a = 0; a < o.length; a += 1) P(n[a]);
        s = !0;
      }
    },
    o(l) {
      for (let a = 0; a < n.length; a += 1) j(n[a]);
      s = !1;
    },
    d(l) {
      l && $(e);
      for (let a = 0; a < n.length; a += 1) n[a].d();
    },
  };
}
function Qn(r, e, n) {
  let t;
  const { slides: s } = rt("<Carousel.Progress/>");
  return ne(r, s, (o) => n(0, (t = o))), [t, s];
}
class Xn extends Z {
  constructor(e) {
    super(), W(this, e, Qn, Un, Y, {});
  }
}
const Jn = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function Et(r = {}) {
  let e,
    n,
    t,
    s = !1,
    o = !0,
    i = !1,
    l = 0;
  function a(S, T) {
    n = S;
    const { mergeOptions: k, optionsAtMedia: E } = T,
      M = k(Jn, Et.globalOptions),
      L = k(M, r);
    if (((e = E(L)), n.scrollSnapList().length <= 1)) return;
    (i = e.jump), (t = !1);
    const { eventStore: V, ownerDocument: D } = n.internalEngine(),
      J = n.rootNode(),
      oe = (e.rootNode && e.rootNode(J)) || J,
      ie = n.containerNode();
    n.on("pointerDown", f),
      e.stopOnInteraction || n.on("pointerUp", u),
      e.stopOnMouseEnter &&
        (V.add(oe, "mouseenter", () => {
          (o = !1), f();
        }),
        e.stopOnInteraction ||
          V.add(oe, "mouseleave", () => {
            (o = !0), u();
          })),
      e.stopOnFocusIn &&
        (n.on("slideFocusStart", f),
        e.stopOnInteraction || V.add(ie, "focusout", u)),
      V.add(D, "visibilitychange", p),
      e.playOnInit && !b() && u();
  }
  function c() {
    n.off("pointerDown", f).off("pointerUp", u).off("slideFocusStart", f),
      f(),
      (t = !0),
      (s = !1);
  }
  function u() {
    if (t || !o) return;
    s || n.emit("autoplay:play");
    const { ownerWindow: S } = n.internalEngine();
    S.clearInterval(l), (l = S.setInterval(w, e.delay)), (s = !0);
  }
  function f() {
    if (t) return;
    s && n.emit("autoplay:stop");
    const { ownerWindow: S } = n.internalEngine();
    S.clearInterval(l), (l = 0), (s = !1);
  }
  function p() {
    if (b()) return (o = s), f();
    o && u();
  }
  function b() {
    const { ownerDocument: S } = n.internalEngine();
    return S.visibilityState === "hidden";
  }
  function m(S) {
    typeof S < "u" && (i = S), (o = !0), u();
  }
  function d() {
    s && f();
  }
  function g() {
    s && m();
  }
  function _() {
    return s;
  }
  function w() {
    const { index: S } = n.internalEngine(),
      T = S.clone().add(1).get(),
      k = n.scrollSnapList().length - 1;
    e.stopOnLastSnap && T === k && f(),
      n.canScrollNext() ? n.scrollNext(i) : n.scrollTo(0, i);
  }
  return {
    name: "autoplay",
    options: r,
    init: a,
    destroy: c,
    play: m,
    stop: d,
    reset: g,
    isPlaying: _,
  };
}
Et.globalOptions = void 0;
function Yn(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Ut(r) {
  return Yn(r) || Array.isArray(r);
}
function Zn() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function yt(r, e) {
  const n = Object.keys(r),
    t = Object.keys(e);
  if (n.length !== t.length) return !1;
  const s = JSON.stringify(Object.keys(r.breakpoints || {})),
    o = JSON.stringify(Object.keys(e.breakpoints || {}));
  return s !== o
    ? !1
    : n.every((i) => {
        const l = r[i],
          a = e[i];
        return typeof l == "function"
          ? `${l}` == `${a}`
          : !Ut(l) || !Ut(a)
          ? l === a
          : yt(l, a);
      });
}
function Qt(r) {
  return r
    .concat()
    .sort((e, n) => (e.name > n.name ? 1 : -1))
    .map((e) => e.options);
}
function Wn(r, e) {
  if (r.length !== e.length) return !1;
  const n = Qt(r),
    t = Qt(e);
  return n.every((s, o) => {
    const i = t[o];
    return yt(s, i);
  });
}
function St(r) {
  return typeof r == "number";
}
function mt(r) {
  return typeof r == "string";
}
function ot(r) {
  return typeof r == "boolean";
}
function Xt(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function te(r) {
  return Math.abs(r);
}
function It(r) {
  return Math.sign(r);
}
function Qe(r, e) {
  return te(r - e);
}
function es(r, e) {
  if (r === 0 || e === 0 || te(r) <= te(e)) return 0;
  const n = Qe(te(r), te(e));
  return te(n / r);
}
function Je(r) {
  return Ye(r).map(Number);
}
function pe(r) {
  return r[We(r)];
}
function We(r) {
  return Math.max(0, r.length - 1);
}
function Dt(r, e) {
  return e === We(r);
}
function Jt(r, e = 0) {
  return Array.from(Array(r), (n, t) => e + t);
}
function Ye(r) {
  return Object.keys(r);
}
function ln(r, e) {
  return [r, e].reduce(
    (n, t) => (
      Ye(t).forEach((s) => {
        const o = n[s],
          i = t[s],
          l = Xt(o) && Xt(i);
        n[s] = l ? ln(o, i) : i;
      }),
      n
    ),
    {}
  );
}
function gt(r, e) {
  return typeof e.MouseEvent < "u" && r instanceof e.MouseEvent;
}
function ts(r, e) {
  const n = { start: t, center: s, end: o };
  function t() {
    return 0;
  }
  function s(a) {
    return o(a) / 2;
  }
  function o(a) {
    return e - a;
  }
  function i(a, c) {
    return mt(r) ? n[r](a) : r(e, a, c);
  }
  return { measure: i };
}
function Ze() {
  let r = [];
  function e(s, o, i, l = { passive: !0 }) {
    let a;
    if ("addEventListener" in s)
      s.addEventListener(o, i, l), (a = () => s.removeEventListener(o, i, l));
    else {
      const c = s;
      c.addListener(i), (a = () => c.removeListener(i));
    }
    return r.push(a), t;
  }
  function n() {
    r = r.filter((s) => s());
  }
  const t = { add: e, clear: n };
  return t;
}
function ns(r, e, n, t) {
  const s = Ze(),
    o = 1e3 / 60;
  let i = null,
    l = 0,
    a = 0;
  function c() {
    s.add(r, "visibilitychange", () => {
      r.hidden && m();
    });
  }
  function u() {
    b(), s.clear();
  }
  function f(g) {
    if (!a) return;
    i || (i = g);
    const _ = g - i;
    for (i = g, l += _; l >= o; ) n(o), (l -= o);
    const w = l / o;
    t(w), a && e.requestAnimationFrame(f);
  }
  function p() {
    a || (a = e.requestAnimationFrame(f));
  }
  function b() {
    e.cancelAnimationFrame(a), (i = null), (l = 0), (a = 0);
  }
  function m() {
    (i = null), (l = 0);
  }
  return {
    init: c,
    destroy: u,
    start: p,
    stop: b,
    update: () => n(o),
    render: t,
  };
}
function ss(r, e) {
  const n = e === "rtl",
    t = r === "y",
    s = t ? "y" : "x",
    o = t ? "x" : "y",
    i = !t && n ? -1 : 1,
    l = u(),
    a = f();
  function c(m) {
    const { height: d, width: g } = m;
    return t ? d : g;
  }
  function u() {
    return t ? "top" : n ? "right" : "left";
  }
  function f() {
    return t ? "bottom" : n ? "left" : "right";
  }
  function p(m) {
    return m * i;
  }
  return {
    scroll: s,
    cross: o,
    startEdge: l,
    endEdge: a,
    measureSize: c,
    direction: p,
  };
}
function Pe(r = 0, e = 0) {
  const n = te(r - e);
  function t(c) {
    return c < r;
  }
  function s(c) {
    return c > e;
  }
  function o(c) {
    return t(c) || s(c);
  }
  function i(c) {
    return o(c) ? (t(c) ? r : e) : c;
  }
  function l(c) {
    return n ? c - n * Math.ceil((c - e) / n) : c;
  }
  return {
    length: n,
    max: e,
    min: r,
    constrain: i,
    reachedAny: o,
    reachedMax: s,
    reachedMin: t,
    removeOffset: l,
  };
}
function cn(r, e, n) {
  const { constrain: t } = Pe(0, r),
    s = r + 1;
  let o = i(e);
  function i(p) {
    return n ? te((s + p) % s) : t(p);
  }
  function l() {
    return o;
  }
  function a(p) {
    return (o = i(p)), f;
  }
  function c(p) {
    return u().set(l() + p);
  }
  function u() {
    return cn(r, l(), n);
  }
  const f = { get: l, set: a, add: c, clone: u };
  return f;
}
function rs(r, e, n, t, s, o, i, l, a, c, u, f, p, b, m, d, g, _, w) {
  const { cross: v, direction: S } = r,
    T = ["INPUT", "SELECT", "TEXTAREA"],
    k = { passive: !1 },
    E = Ze(),
    M = Ze(),
    L = Pe(50, 225).constrain(b.measure(20)),
    V = { mouse: 300, touch: 400 },
    D = { mouse: 500, touch: 600 },
    J = m ? 43 : 25;
  let oe = !1,
    ie = 0,
    ae = 0,
    he = !1,
    de = !1,
    ke = !1,
    Ee = !1;
  function Fe(O) {
    if (!w) return;
    function X(ce) {
      (ot(w) || w(O, ce)) && He(ce);
    }
    const se = e;
    E.add(se, "dragstart", (ce) => ce.preventDefault(), k)
      .add(se, "touchmove", () => {}, k)
      .add(se, "touchend", () => {})
      .add(se, "touchstart", X)
      .add(se, "mousedown", X)
      .add(se, "touchcancel", le)
      .add(se, "contextmenu", le)
      .add(se, "click", Se, !0);
  }
  function me() {
    E.clear(), M.clear();
  }
  function Ve() {
    const O = Ee ? n : e;
    M.add(O, "touchmove", ue, k)
      .add(O, "touchend", le)
      .add(O, "mousemove", ue, k)
      .add(O, "mouseup", le);
  }
  function Ne(O) {
    const X = O.nodeName || "";
    return T.includes(X);
  }
  function ye() {
    return (m ? D : V)[Ee ? "mouse" : "touch"];
  }
  function Re(O, X) {
    const se = f.add(It(O) * -1),
      ce = u.byDistance(O, !m).distance;
    return m || te(O) < L
      ? ce
      : g && X
      ? ce * 0.5
      : u.byIndex(se.get(), 0).distance;
  }
  function He(O) {
    const X = gt(O, t);
    (Ee = X),
      (ke = m && X && !O.buttons && oe),
      (oe = Qe(s.get(), i.get()) >= 2),
      !(X && O.button !== 0) &&
        (Ne(O.target) ||
          ((he = !0),
          o.pointerDown(O),
          c.useFriction(0).useDuration(0),
          s.set(i),
          Ve(),
          (ie = o.readPoint(O)),
          (ae = o.readPoint(O, v)),
          p.emit("pointerDown")));
  }
  function ue(O) {
    if (!gt(O, t) && O.touches.length >= 2) return le(O);
    const se = o.readPoint(O),
      ce = o.readPoint(O, v),
      ge = Qe(se, ie),
      Ie = Qe(ce, ae);
    if (!de && !Ee && (!O.cancelable || ((de = ge > Ie), !de))) return le(O);
    const Me = o.pointerMove(O);
    ge > d && (ke = !0),
      c.useFriction(0.3).useDuration(0.75),
      l.start(),
      s.add(S(Me)),
      O.preventDefault();
  }
  function le(O) {
    const se = u.byDistance(0, !1).index !== f.get(),
      ce = o.pointerUp(O) * ye(),
      ge = Re(S(ce), se),
      Ie = es(ce, ge),
      Me = J - 10 * Ie,
      Ae = _ + Ie / 50;
    (de = !1),
      (he = !1),
      M.clear(),
      c.useDuration(Me).useFriction(Ae),
      a.distance(ge, !m),
      (Ee = !1),
      p.emit("pointerUp");
  }
  function Se(O) {
    ke && (O.stopPropagation(), O.preventDefault(), (ke = !1));
  }
  function fe() {
    return he;
  }
  return { init: Fe, destroy: me, pointerDown: fe };
}
function os(r, e) {
  let t, s;
  function o(f) {
    return f.timeStamp;
  }
  function i(f, p) {
    const m = `client${(p || r.scroll) === "x" ? "X" : "Y"}`;
    return (gt(f, e) ? f : f.touches[0])[m];
  }
  function l(f) {
    return (t = f), (s = f), i(f);
  }
  function a(f) {
    const p = i(f) - i(s),
      b = o(f) - o(t) > 170;
    return (s = f), b && (t = f), p;
  }
  function c(f) {
    if (!t || !s) return 0;
    const p = i(s) - i(t),
      b = o(f) - o(t),
      m = o(f) - o(s) > 170,
      d = p / b;
    return b && !m && te(d) > 0.1 ? d : 0;
  }
  return { pointerDown: l, pointerMove: a, pointerUp: c, readPoint: i };
}
function is() {
  function r(n) {
    const { offsetTop: t, offsetLeft: s, offsetWidth: o, offsetHeight: i } = n;
    return {
      top: t,
      right: s + o,
      bottom: t + i,
      left: s,
      width: o,
      height: i,
    };
  }
  return { measure: r };
}
function as(r) {
  function e(t) {
    return r * (t / 100);
  }
  return { measure: e };
}
function ls(r, e, n, t, s, o, i) {
  const l = [r].concat(t);
  let a,
    c,
    u = [],
    f = !1;
  function p(g) {
    return s.measureSize(i.measure(g));
  }
  function b(g) {
    if (!o) return;
    (c = p(r)), (u = t.map(p));
    function _(w) {
      for (const v of w) {
        if (f) return;
        const S = v.target === r,
          T = t.indexOf(v.target),
          k = S ? c : u[T],
          E = p(S ? r : t[T]);
        if (te(E - k) >= 0.5) {
          g.reInit(), e.emit("resize");
          break;
        }
      }
    }
    (a = new ResizeObserver((w) => {
      (ot(o) || o(g, w)) && _(w);
    })),
      n.requestAnimationFrame(() => {
        l.forEach((w) => a.observe(w));
      });
  }
  function m() {
    (f = !0), a && a.disconnect();
  }
  return { init: b, destroy: m };
}
function cs(r, e, n, t, s, o) {
  let i = 0,
    l = 0,
    a = s,
    c = o,
    u = r.get(),
    f = 0;
  function p(k) {
    const E = k / 1e3,
      M = a * E,
      L = t.get() - r.get(),
      V = !a;
    let D = 0;
    return (
      V
        ? ((i = 0), n.set(t), r.set(t), (D = L))
        : (n.set(r),
          (i += L / M),
          (i *= c),
          (u += i),
          r.add(i * E),
          (D = u - f)),
      (l = It(D)),
      (f = u),
      T
    );
  }
  function b() {
    const k = t.get() - e.get();
    return te(k) < 0.001;
  }
  function m() {
    return a;
  }
  function d() {
    return l;
  }
  function g() {
    return i;
  }
  function _() {
    return v(s);
  }
  function w() {
    return S(o);
  }
  function v(k) {
    return (a = k), T;
  }
  function S(k) {
    return (c = k), T;
  }
  const T = {
    direction: d,
    duration: m,
    velocity: g,
    seek: p,
    settled: b,
    useBaseFriction: w,
    useBaseDuration: _,
    useFriction: S,
    useDuration: v,
  };
  return T;
}
function us(r, e, n, t, s) {
  const o = s.measure(10),
    i = s.measure(50),
    l = Pe(0.1, 0.99);
  let a = !1;
  function c() {
    return !(a || !r.reachedAny(n.get()) || !r.reachedAny(e.get()));
  }
  function u(b) {
    if (!c()) return;
    const m = r.reachedMin(e.get()) ? "min" : "max",
      d = te(r[m] - e.get()),
      g = n.get() - e.get(),
      _ = l.constrain(d / i);
    n.subtract(g * _),
      !b &&
        te(g) < o &&
        (n.set(r.constrain(n.get())), t.useDuration(25).useBaseFriction());
  }
  function f(b) {
    a = !b;
  }
  return { shouldConstrain: c, constrain: u, toggleActive: f };
}
function fs(r, e, n, t, s) {
  const o = Pe(-e + r, 0),
    i = f(),
    l = u(),
    a = p();
  function c(m, d) {
    return Qe(m, d) < 1;
  }
  function u() {
    const m = i[0],
      d = pe(i),
      g = i.lastIndexOf(m),
      _ = i.indexOf(d) + 1;
    return Pe(g, _);
  }
  function f() {
    return n
      .map((m, d) => {
        const { min: g, max: _ } = o,
          w = o.constrain(m),
          v = !d,
          S = Dt(n, d);
        return v ? _ : S || c(g, w) ? g : c(_, w) ? _ : w;
      })
      .map((m) => parseFloat(m.toFixed(3)));
  }
  function p() {
    if (e <= r + s) return [o.max];
    if (t === "keepSnaps") return i;
    const { min: m, max: d } = l;
    return i.slice(m, d);
  }
  return { snapsContained: a, scrollContainLimit: l };
}
function ds(r, e, n) {
  const t = e[0],
    s = n ? t - r : pe(e);
  return { limit: Pe(s, t) };
}
function ps(r, e, n, t) {
  const o = e.min + 0.1,
    i = e.max + 0.1,
    { reachedMin: l, reachedMax: a } = Pe(o, i);
  function c(p) {
    return p === 1 ? a(n.get()) : p === -1 ? l(n.get()) : !1;
  }
  function u(p) {
    if (!c(p)) return;
    const b = r * (p * -1);
    t.forEach((m) => m.add(b));
  }
  return { loop: u };
}
function hs(r) {
  const { max: e, length: n } = r;
  function t(o) {
    const i = o - e;
    return n ? i / -n : 0;
  }
  return { get: t };
}
function ms(r, e, n, t, s) {
  const { startEdge: o, endEdge: i } = r,
    { groupSlides: l } = s,
    a = f().map(e.measure),
    c = p(),
    u = b();
  function f() {
    return l(t)
      .map((d) => pe(d)[i] - d[0][o])
      .map(te);
  }
  function p() {
    return t.map((d) => n[o] - d[o]).map((d) => -te(d));
  }
  function b() {
    return l(c)
      .map((d) => d[0])
      .map((d, g) => d + a[g]);
  }
  return { snaps: c, snapsAligned: u };
}
function gs(r, e, n, t, s, o) {
  const { groupSlides: i } = s,
    { min: l, max: a } = t,
    c = u();
  function u() {
    const p = i(o),
      b = !r || e === "keepSnaps";
    return n.length === 1
      ? [o]
      : b
      ? p
      : p.slice(l, a).map((m, d, g) => {
          const _ = !d,
            w = Dt(g, d);
          if (_) {
            const v = pe(g[0]) + 1;
            return Jt(v);
          }
          if (w) {
            const v = We(o) - pe(g)[0] + 1;
            return Jt(v, pe(g)[0]);
          }
          return m;
        });
  }
  return { slideRegistry: c };
}
function $s(r, e, n, t, s) {
  const { reachedAny: o, removeOffset: i, constrain: l } = t;
  function a(m) {
    return m.concat().sort((d, g) => te(d) - te(g))[0];
  }
  function c(m) {
    const d = r ? i(m) : l(m),
      g = e
        .map((w, v) => ({ diff: u(w - d, 0), index: v }))
        .sort((w, v) => te(w.diff) - te(v.diff)),
      { index: _ } = g[0];
    return { index: _, distance: d };
  }
  function u(m, d) {
    const g = [m, m + n, m - n];
    if (!r) return m;
    if (!d) return a(g);
    const _ = g.filter((w) => It(w) === d);
    return _.length ? a(_) : pe(g) - n;
  }
  function f(m, d) {
    const g = e[m] - s.get(),
      _ = u(g, d);
    return { index: m, distance: _ };
  }
  function p(m, d) {
    const g = s.get() + m,
      { index: _, distance: w } = c(g),
      v = !r && o(g);
    if (!d || v) return { index: _, distance: m };
    const S = e[_] - w,
      T = m + u(S, 0);
    return { index: _, distance: T };
  }
  return { byDistance: p, byIndex: f, shortcut: u };
}
function _s(r, e, n, t, s, o, i) {
  function l(f) {
    const p = f.distance,
      b = f.index !== e.get();
    o.add(p),
      p && (t.duration() ? r.start() : (r.update(), r.render(1), r.update())),
      b && (n.set(e.get()), e.set(f.index), i.emit("select"));
  }
  function a(f, p) {
    const b = s.byDistance(f, p);
    l(b);
  }
  function c(f, p) {
    const b = e.clone().set(f),
      m = s.byIndex(b.get(), p);
    l(m);
  }
  return { distance: a, index: c };
}
function vs(r, e, n, t, s, o, i, l) {
  const a = { passive: !0, capture: !0 };
  let c = 0;
  function u(b) {
    if (!l) return;
    function m(d) {
      if (new Date().getTime() - c > 10) return;
      i.emit("slideFocusStart"), (r.scrollLeft = 0);
      const w = n.findIndex((v) => v.includes(d));
      St(w) && (s.useDuration(0), t.index(w, 0), i.emit("slideFocus"));
    }
    o.add(document, "keydown", f, !1),
      e.forEach((d, g) => {
        o.add(
          d,
          "focus",
          (_) => {
            (ot(l) || l(b, _)) && m(g);
          },
          a
        );
      });
  }
  function f(b) {
    b.code === "Tab" && (c = new Date().getTime());
  }
  return { init: u };
}
function Ue(r) {
  let e = r;
  function n() {
    return e;
  }
  function t(a) {
    e = i(a);
  }
  function s(a) {
    e += i(a);
  }
  function o(a) {
    e -= i(a);
  }
  function i(a) {
    return St(a) ? a : a.get();
  }
  return { get: n, set: t, add: s, subtract: o };
}
function un(r, e) {
  const n = r.scroll === "x" ? o : i,
    t = e.style;
  let s = !1;
  function o(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function i(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function l(f) {
    s || (t.transform = n(r.direction(f)));
  }
  function a(f) {
    s = !f;
  }
  function c() {
    s ||
      ((t.transform = ""),
      e.getAttribute("style") || e.removeAttribute("style"));
  }
  return { clear: c, to: l, toggleActive: a };
}
function bs(r, e, n, t, s, o, i, l, a) {
  const u = Je(s),
    f = Je(s).reverse(),
    p = _().concat(w());
  function b(E, M) {
    return E.reduce((L, V) => L - s[V], M);
  }
  function m(E, M) {
    return E.reduce((L, V) => (b(L, M) > 0 ? L.concat([V]) : L), []);
  }
  function d(E) {
    return o.map((M, L) => ({
      start: M - t[L] + 0.5 + E,
      end: M + e - 0.5 + E,
    }));
  }
  function g(E, M, L) {
    const V = d(M);
    return E.map((D) => {
      const J = L ? 0 : -n,
        oe = L ? n : 0,
        ie = L ? "end" : "start",
        ae = V[D][ie];
      return {
        index: D,
        loopPoint: ae,
        slideLocation: Ue(-1),
        translate: un(r, a[D]),
        target: () => (l.get() > ae ? J : oe),
      };
    });
  }
  function _() {
    const E = i[0],
      M = m(f, E);
    return g(M, n, !1);
  }
  function w() {
    const E = e - i[0] - 1,
      M = m(u, E);
    return g(M, -n, !0);
  }
  function v() {
    return p.every(({ index: E }) => {
      const M = u.filter((L) => L !== E);
      return b(M, e) <= 0.1;
    });
  }
  function S() {
    p.forEach((E) => {
      const { target: M, translate: L, slideLocation: V } = E,
        D = M();
      D !== V.get() && (L.to(D), V.set(D));
    });
  }
  function T() {
    p.forEach((E) => E.translate.clear());
  }
  return { canLoop: v, clear: T, loop: S, loopPoints: p };
}
function ws(r, e, n) {
  let t,
    s = !1;
  function o(a) {
    if (!n) return;
    function c(u) {
      for (const f of u)
        if (f.type === "childList") {
          a.reInit(), e.emit("slidesChanged");
          break;
        }
    }
    (t = new MutationObserver((u) => {
      s || ((ot(n) || n(a, u)) && c(u));
    })),
      t.observe(r, { childList: !0 });
  }
  function i() {
    t && t.disconnect(), (s = !0);
  }
  return { init: o, destroy: i };
}
function ks(r, e, n, t) {
  const s = {};
  let o = null,
    i = null,
    l,
    a = !1;
  function c() {
    (l = new IntersectionObserver(
      (m) => {
        a ||
          (m.forEach((d) => {
            const g = e.indexOf(d.target);
            s[g] = d;
          }),
          (o = null),
          (i = null),
          n.emit("slidesInView"));
      },
      { root: r.parentElement, threshold: t }
    )),
      e.forEach((m) => l.observe(m));
  }
  function u() {
    l && l.disconnect(), (a = !0);
  }
  function f(m) {
    return Ye(s).reduce((d, g) => {
      const _ = parseInt(g),
        { isIntersecting: w } = s[_];
      return ((m && w) || (!m && !w)) && d.push(_), d;
    }, []);
  }
  function p(m = !0) {
    if (m && o) return o;
    if (!m && i) return i;
    const d = f(m);
    return m && (o = d), m || (i = d), d;
  }
  return { init: c, destroy: u, get: p };
}
function Es(r, e, n, t, s, o) {
  const { measureSize: i, startEdge: l, endEdge: a } = r,
    c = n[0] && s,
    u = m(),
    f = d(),
    p = n.map(i),
    b = g();
  function m() {
    if (!c) return 0;
    const w = n[0];
    return te(e[l] - w[l]);
  }
  function d() {
    if (!c) return 0;
    const w = o.getComputedStyle(pe(t));
    return parseFloat(w.getPropertyValue(`margin-${a}`));
  }
  function g() {
    return n
      .map((w, v, S) => {
        const T = !v,
          k = Dt(S, v);
        return T ? p[v] + u : k ? p[v] + f : S[v + 1][l] - w[l];
      })
      .map(te);
  }
  return { slideSizes: p, slideSizesWithGaps: b, startGap: u, endGap: f };
}
function ys(r, e, n, t, s, o, i, l, a) {
  const { startEdge: c, endEdge: u, direction: f } = r,
    p = St(n);
  function b(_, w) {
    return Je(_)
      .filter((v) => v % w === 0)
      .map((v) => _.slice(v, v + w));
  }
  function m(_) {
    return _.length
      ? Je(_)
          .reduce((w, v, S) => {
            const T = pe(w) || 0,
              k = T === 0,
              E = v === We(_),
              M = s[c] - o[T][c],
              L = s[c] - o[v][u],
              V = !t && k ? f(i) : 0,
              D = !t && E ? f(l) : 0,
              J = te(L - D - (M + V));
            return S && J > e + a && w.push(v), E && w.push(_.length), w;
          }, [])
          .map((w, v, S) => {
            const T = Math.max(S[v - 1] || 0);
            return _.slice(T, w);
          })
      : [];
  }
  function d(_) {
    return p ? b(_, n) : m(_);
  }
  return { groupSlides: d };
}
function Ss(r, e, n, t, s, o, i) {
  const {
      align: l,
      axis: a,
      direction: c,
      startIndex: u,
      loop: f,
      duration: p,
      dragFree: b,
      dragThreshold: m,
      inViewThreshold: d,
      slidesToScroll: g,
      skipSnaps: _,
      containScroll: w,
      watchResize: v,
      watchSlides: S,
      watchDrag: T,
      watchFocus: k,
    } = o,
    E = 2,
    M = is(),
    L = M.measure(e),
    V = n.map(M.measure),
    D = ss(a, c),
    J = D.measureSize(L),
    oe = as(J),
    ie = ts(l, J),
    ae = !f && !!w,
    he = f || !!w,
    {
      slideSizes: de,
      slideSizesWithGaps: ke,
      startGap: Ee,
      endGap: Fe,
    } = Es(D, L, V, n, he, s),
    me = ys(D, J, g, f, L, V, Ee, Fe, E),
    { snaps: Ve, snapsAligned: Ne } = ms(D, ie, L, V, me),
    ye = -pe(Ve) + pe(ke),
    { snapsContained: Re, scrollContainLimit: He } = fs(J, ye, Ne, w, E),
    ue = ae ? Re : Ne,
    { limit: le } = ds(ye, ue, f),
    Se = cn(We(ue), u, f),
    fe = Se.clone(),
    ee = Je(n),
    O = (
      {
        dragHandler: Ce,
        scrollBody: ct,
        scrollBounds: ut,
        options: { loop: et },
      },
      ft
    ) => {
      et || ut.constrain(Ce.pointerDown()), ct.seek(ft);
    },
    X = (
      {
        scrollBody: Ce,
        translate: ct,
        location: ut,
        offsetLocation: et,
        scrollLooper: ft,
        slideLooper: pn,
        dragHandler: hn,
        animation: mn,
        eventHandler: Ct,
        scrollBounds: gn,
        options: { loop: xt },
      },
      Ot
    ) => {
      const Pt = Ce.settled(),
        $n = !gn.shouldConstrain(),
        jt = xt ? Pt : Pt && $n;
      jt && !hn.pointerDown() && (mn.stop(), Ct.emit("settle")),
        jt || Ct.emit("scroll");
      const _n = ut.get() * Ot + Me.get() * (1 - Ot);
      et.set(_n), xt && (ft.loop(Ce.direction()), pn.loop()), ct.to(et.get());
    },
    se = ns(
      t,
      s,
      (Ce) => O(lt, Ce),
      (Ce) => X(lt, Ce)
    ),
    ce = 0.68,
    ge = ue[Se.get()],
    Ie = Ue(ge),
    Me = Ue(ge),
    Ae = Ue(ge),
    Oe = Ue(ge),
    Ge = cs(Ie, Ae, Me, Oe, p, ce),
    it = $s(f, ue, ye, le, Oe),
    at = _s(se, Se, fe, Ge, it, Oe, i),
    Tt = hs(le),
    Mt = Ze(),
    fn = ks(e, n, i, d),
    { slideRegistry: At } = gs(ae, w, ue, He, me, ee),
    dn = vs(r, n, At, at, Ge, Mt, i, k),
    lt = {
      ownerDocument: t,
      ownerWindow: s,
      eventHandler: i,
      containerRect: L,
      slideRects: V,
      animation: se,
      axis: D,
      dragHandler: rs(
        D,
        r,
        t,
        s,
        Oe,
        os(D, s),
        Ie,
        se,
        at,
        Ge,
        it,
        Se,
        i,
        oe,
        b,
        m,
        _,
        ce,
        T
      ),
      eventStore: Mt,
      percentOfView: oe,
      index: Se,
      indexPrevious: fe,
      limit: le,
      location: Ie,
      offsetLocation: Ae,
      previousLocation: Me,
      options: o,
      resizeHandler: ls(e, i, s, n, D, v, M),
      scrollBody: Ge,
      scrollBounds: us(le, Ae, Oe, Ge, oe),
      scrollLooper: ps(ye, le, Ae, [Ie, Ae, Me, Oe]),
      scrollProgress: Tt,
      scrollSnapList: ue.map(Tt.get),
      scrollSnaps: ue,
      scrollTarget: it,
      scrollTo: at,
      slideLooper: bs(D, J, ye, de, ke, Ve, ue, Ae, n),
      slideFocus: dn,
      slidesHandler: ws(e, i, S),
      slidesInView: fn,
      slideIndexes: ee,
      slideRegistry: At,
      slidesToScroll: me,
      target: Oe,
      translate: un(D, e),
    };
  return lt;
}
function Is() {
  let r = {},
    e;
  function n(c) {
    e = c;
  }
  function t(c) {
    return r[c] || [];
  }
  function s(c) {
    return t(c).forEach((u) => u(e, c)), a;
  }
  function o(c, u) {
    return (r[c] = t(c).concat([u])), a;
  }
  function i(c, u) {
    return (r[c] = t(c).filter((f) => f !== u)), a;
  }
  function l() {
    r = {};
  }
  const a = { init: n, emit: s, off: i, on: o, clear: l };
  return a;
}
const Ds = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function Ls(r) {
  function e(o, i) {
    return ln(o, i || {});
  }
  function n(o) {
    const i = o.breakpoints || {},
      l = Ye(i)
        .filter((a) => r.matchMedia(a).matches)
        .map((a) => i[a])
        .reduce((a, c) => e(a, c), {});
    return e(o, l);
  }
  function t(o) {
    return o
      .map((i) => Ye(i.breakpoints || {}))
      .reduce((i, l) => i.concat(l), [])
      .map(r.matchMedia);
  }
  return { mergeOptions: e, optionsAtMedia: n, optionsMediaQueries: t };
}
function Ts(r) {
  let e = [];
  function n(o, i) {
    return (
      (e = i.filter(({ options: l }) => r.optionsAtMedia(l).active !== !1)),
      e.forEach((l) => l.init(o, r)),
      i.reduce((l, a) => Object.assign(l, { [a.name]: a }), {})
    );
  }
  function t() {
    e = e.filter((o) => o.destroy());
  }
  return { init: n, destroy: t };
}
function st(r, e, n) {
  const t = r.ownerDocument,
    s = t.defaultView,
    o = Ls(s),
    i = Ts(o),
    l = Ze(),
    a = Is(),
    { mergeOptions: c, optionsAtMedia: u, optionsMediaQueries: f } = o,
    { on: p, off: b, emit: m } = a,
    d = D;
  let g = !1,
    _,
    w = c(Ds, st.globalOptions),
    v = c(w),
    S = [],
    T,
    k,
    E;
  function M() {
    const { container: ee, slides: O } = v;
    k = (mt(ee) ? r.querySelector(ee) : ee) || r.children[0];
    const se = mt(O) ? k.querySelectorAll(O) : O;
    E = [].slice.call(se || k.children);
  }
  function L(ee) {
    const O = Ss(r, k, E, t, s, ee, a);
    if (ee.loop && !O.slideLooper.canLoop()) {
      const X = Object.assign({}, ee, { loop: !1 });
      return L(X);
    }
    return O;
  }
  function V(ee, O) {
    g ||
      ((w = c(w, ee)),
      (v = u(w)),
      (S = O || S),
      M(),
      (_ = L(v)),
      f([w, ...S.map(({ options: X }) => X)]).forEach((X) =>
        l.add(X, "change", D)
      ),
      v.active &&
        (_.translate.to(_.location.get()),
        _.animation.init(),
        _.slidesInView.init(),
        _.slideFocus.init(fe),
        _.eventHandler.init(fe),
        _.resizeHandler.init(fe),
        _.slidesHandler.init(fe),
        _.options.loop && _.slideLooper.loop(),
        k.offsetParent && E.length && _.dragHandler.init(fe),
        (T = i.init(fe, S))));
  }
  function D(ee, O) {
    const X = me();
    J(), V(c({ startIndex: X }, ee), O), a.emit("reInit");
  }
  function J() {
    _.dragHandler.destroy(),
      _.eventStore.clear(),
      _.translate.clear(),
      _.slideLooper.clear(),
      _.resizeHandler.destroy(),
      _.slidesHandler.destroy(),
      _.slidesInView.destroy(),
      _.animation.destroy(),
      i.destroy(),
      l.clear();
  }
  function oe() {
    g || ((g = !0), l.clear(), J(), a.emit("destroy"), a.clear());
  }
  function ie(ee, O, X) {
    !v.active ||
      g ||
      (_.scrollBody.useBaseFriction().useDuration(O === !0 ? 0 : v.duration),
      _.scrollTo.index(ee, X || 0));
  }
  function ae(ee) {
    const O = _.index.add(1).get();
    ie(O, ee, -1);
  }
  function he(ee) {
    const O = _.index.add(-1).get();
    ie(O, ee, 1);
  }
  function de() {
    return _.index.add(1).get() !== me();
  }
  function ke() {
    return _.index.add(-1).get() !== me();
  }
  function Ee() {
    return _.scrollSnapList;
  }
  function Fe() {
    return _.scrollProgress.get(_.location.get());
  }
  function me() {
    return _.index.get();
  }
  function Ve() {
    return _.indexPrevious.get();
  }
  function Ne() {
    return _.slidesInView.get();
  }
  function ye() {
    return _.slidesInView.get(!1);
  }
  function Re() {
    return T;
  }
  function He() {
    return _;
  }
  function ue() {
    return r;
  }
  function le() {
    return k;
  }
  function Se() {
    return E;
  }
  const fe = {
    canScrollNext: de,
    canScrollPrev: ke,
    containerNode: le,
    internalEngine: He,
    destroy: oe,
    off: b,
    on: p,
    emit: m,
    plugins: Re,
    previousScrollSnap: Ve,
    reInit: d,
    rootNode: ue,
    scrollNext: ae,
    scrollPrev: he,
    scrollProgress: Fe,
    scrollSnapList: Ee,
    scrollTo: ie,
    selectedScrollSnap: me,
    slideNodes: Se,
    slidesInView: Ne,
    slidesNotInView: ye,
  };
  return V(e, n), setTimeout(() => a.emit("init"), 0), fe;
}
st.globalOptions = void 0;
function Lt(r, e = { options: {}, plugins: [] }) {
  let n = e,
    t;
  return (
    Zn() &&
      ((st.globalOptions = Lt.globalOptions),
      (t = st(r, n.options, n.plugins)),
      t.on("init", () =>
        r.dispatchEvent(new CustomEvent("emblaInit", { detail: t }))
      )),
    {
      destroy: () => {
        t && t.destroy();
      },
      update: (s) => {
        const o = !yt(n.options, s.options),
          i = !Wn(n.plugins, s.plugins);
        (!o && !i) || ((n = s), t && t.reInit(n.options, n.plugins));
      },
    }
  );
}
Lt.globalOptions = void 0;
function Ms(r) {
  let e, n, t, s, o, i;
  const l = r[10].default,
    a = $e(l, r, r[9], null);
  let c = [
      { class: (n = we("relative", r[2])) },
      { "data-cursor-hover-icon": "chevron" },
      { role: "region" },
      { "aria-roledescription": "carousel" },
      r[6],
    ],
    u = {};
  for (let f = 0; f < c.length; f += 1) u = De(u, c[f]);
  return {
    c() {
      (e = A("div")), a && a.c(), this.h();
    },
    l(f) {
      e = C(f, "DIV", {
        class: !0,
        "data-cursor-hover-icon": !0,
        role: !0,
        "aria-roledescription": !0,
      });
      var p = I(e);
      a && a.l(p), p.forEach($), this.h();
    },
    h() {
      Be(e, u);
    },
    m(f, p) {
      x(f, e, p),
        a && a.m(e, null),
        (s = !0),
        o ||
          ((i = [
            kn(
              (t = Lt.call(null, e, {
                options: {
                  container: "[data-embla-container]",
                  slides: "[data-embla-slide]",
                  ...r[0],
                  axis: r[3] === "horizontal" ? "x" : "y",
                  loop: !0,
                },
                plugins: r[1],
              }))
            ),
            xe(e, "emblaInit", r[5]),
            xe(e, "mouseenter", r[11]),
            xe(e, "mouseleave", r[12]),
          ]),
          (o = !0));
    },
    p(f, [p]) {
      a &&
        a.p &&
        (!s || p & 512) &&
        _e(a, l, f, f[9], s ? be(l, f[9], p, null) : ve(f[9]), null),
        Be(
          e,
          (u = bt(c, [
            (!s || (p & 4 && n !== (n = we("relative", f[2])))) && { class: n },
            { "data-cursor-hover-icon": "chevron" },
            { role: "region" },
            { "aria-roledescription": "carousel" },
            p & 64 && f[6],
          ]))
        ),
        t &&
          En(t.update) &&
          p & 11 &&
          t.update.call(null, {
            options: {
              container: "[data-embla-container]",
              slides: "[data-embla-slide]",
              ...f[0],
              axis: f[3] === "horizontal" ? "x" : "y",
              loop: !0,
            },
            plugins: f[1],
          });
    },
    i(f) {
      s || (P(a, f), (s = !0));
    },
    o(f) {
      j(a, f), (s = !1);
    },
    d(f) {
      f && $(e), a && a.d(f), (o = !1), on(i);
    },
  };
}
function As(r, e, n) {
  const t = ["opts", "plugins", "api", "orientation", "class"];
  let s = ze(e, t),
    o,
    { $$slots: i = {}, $$scope: l } = e,
    { opts: a = {} } = e,
    { plugins: c = [Et()] } = e,
    { api: u = void 0 } = e,
    { orientation: f = "horizontal" } = e,
    { class: p = void 0 } = e;
  const b = qe(void 0),
    m = qe(f);
  ne(r, m, (D) => n(3, (o = D)));
  const d = qe(!1),
    g = qe(!1),
    _ = qe(0),
    w = qe(5);
  function v() {
    u == null || u.scrollPrev();
  }
  function S() {
    u == null || u.scrollNext();
  }
  function T(D, J) {
    u == null || u.scrollTo(D, J);
  }
  function k(D) {
    D &&
      (d.set(D.canScrollPrev()),
      g.set(D.canScrollNext()),
      _.set(D.selectedScrollSnap()));
  }
  function E(D) {
    D.key === "ArrowLeft"
      ? (D.preventDefault(), v())
      : D.key === "ArrowRight" && (D.preventDefault(), S());
  }
  Vn({
    api: b,
    scrollPrev: v,
    scrollNext: S,
    scrollTo: T,
    orientation: m,
    canScrollNext: g,
    canScrollPrev: d,
    slides: w,
    currentSlide: _,
    handleKeyDown: E,
  });
  function M(D) {
    n(7, (u = D.detail)), b.set(u), w.set(u.slideNodes().length);
  }
  yn(() => {
    u == null || u.off("select", k);
  });
  function L(D) {
    qt.call(this, r, D);
  }
  function V(D) {
    qt.call(this, r, D);
  }
  return (
    (r.$$set = (D) => {
      (e = De(De({}, e), $t(D))),
        n(6, (s = ze(e, t))),
        "opts" in D && n(0, (a = D.opts)),
        "plugins" in D && n(1, (c = D.plugins)),
        "api" in D && n(7, (u = D.api)),
        "orientation" in D && n(8, (f = D.orientation)),
        "class" in D && n(2, (p = D.class)),
        "$$scope" in D && n(9, (l = D.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 256 && m.set(f),
        r.$$.dirty & 128 && u && (k(u), u.on("select", k), u.on("reInit", k));
    }),
    [a, c, p, o, m, M, s, u, f, l, i, L, V]
  );
}
class Cs extends Z {
  constructor(e) {
    super(),
      W(this, e, As, Ms, Y, {
        opts: 0,
        plugins: 1,
        api: 7,
        orientation: 8,
        class: 2,
      });
  }
}
function xs(r) {
  let e;
  const n = r[0].default,
    t = $e(n, r, r[1], null);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, o) {
      t && t.m(s, o), (e = !0);
    },
    p(s, o) {
      t &&
        t.p &&
        (!e || o & 2) &&
        _e(t, n, s, s[1], e ? be(n, s[1], o, null) : ve(s[1]), null);
    },
    i(s) {
      e || (P(t, s), (e = !0));
    },
    o(s) {
      j(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function Os(r) {
  let e, n, t, s;
  return (
    (e = new Rn({
      props: { $$slots: { default: [xs] }, $$scope: { ctx: r } },
    })),
    (t = new Xn({})),
    {
      c() {
        R(e.$$.fragment), (n = N()), R(t.$$.fragment);
      },
      l(o) {
        K(e.$$.fragment, o), (n = q(o)), K(t.$$.fragment, o);
      },
      m(o, i) {
        H(e, o, i), x(o, n, i), H(t, o, i), (s = !0);
      },
      p(o, i) {
        const l = {};
        i & 2 && (l.$$scope = { dirty: i, ctx: o }), e.$set(l);
      },
      i(o) {
        s || (P(e.$$.fragment, o), P(t.$$.fragment, o), (s = !0));
      },
      o(o) {
        j(e.$$.fragment, o), j(t.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && $(n), G(e, o), G(t, o);
      },
    }
  );
}
function Ps(r) {
  let e, n, t;
  return (
    (n = new Cs({
      props: {
        class: "size-carousel relative",
        $$slots: { default: [Os] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = A("div")), R(n.$$.fragment), this.h();
      },
      l(s) {
        e = C(s, "DIV", { class: !0, "data-animation": !0 });
        var o = I(e);
        K(n.$$.fragment, o), o.forEach($), this.h();
      },
      h() {
        h(e, "class", "h-carousel-container flex w-full justify-center"),
          h(e, "data-animation", "slide-up-fade");
      },
      m(s, o) {
        x(s, e, o), H(n, e, null), (t = !0);
      },
      p(s, [o]) {
        const i = {};
        o & 2 && (i.$$scope = { dirty: o, ctx: s }), n.$set(i);
      },
      i(s) {
        t || (P(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        j(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && $(e), G(n);
      },
    }
  );
}



function js(r, e, n) {
  let { $$slots: t = {}, $$scope: s } = e;
  return (
    (r.$$set = (o) => {
      "$$scope" in o && n(1, (s = o.$$scope));
    }),
    [t, s]
  );
}
class Vs extends Z {
  constructor(e) {
    super(), W(this, e, js, Ps, Y, {});
  }
}
const Ns = (r) => ({}),
  Yt = (r) => ({}),
  qs = (r) => ({}),
  Zt = (r) => ({});
function Bs(r) {
  let e = r[3]("common.carousel.cta") + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 8 && e !== (e = t[3]("common.carousel.cta") + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function zs(r) {
  let e = r[3]("common.carousel.learnMore") + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 8 && e !== (e = t[3]("common.carousel.learnMore") + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Fs(r) {
  let e, n, t, s, o, i, l, a, c, u, f, p, b, m;
  n = new An({
    props: {
      src: r[1],
      parseSrc: r[0],
      class: "size-carousel relative -z-[1] object-cover object-center",
    },
  });
  const d = r[4].header,
    g = $e(d, r, r[5], Zt),
    _ = r[4].description,
    w = $e(_, r, r[5], Yt);
  return (
    (f = new Xe({
      props: {
        color: "secondary",
        class: "hidden whitespace-nowrap tablet:block",
        href: "/contact",
        $$slots: { default: [Bs] },
        $$scope: { ctx: r },
      },
    })),
    (b = new Xe({
      props: {
        href: r[2],
        variant: "outline-transparent",
        class: "whitespace-nowrap",
        $$slots: { default: [zs] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = A("div")),
          R(n.$$.fragment),
          (t = N()),
          (s = A("div")),
          (o = A("article")),
          (i = A("header")),
          g && g.c(),
          (l = N()),
          (a = A("p")),
          w && w.c(),
          (c = N()),
          (u = A("div")),
          R(f.$$.fragment),
          (p = N()),
          R(b.$$.fragment),
          this.h();
      },
      l(v) {
        e = C(v, "DIV", { class: !0 });
        var S = I(e);
        K(n.$$.fragment, S), (t = q(S)), (s = C(S, "DIV", { class: !0 }));
        var T = I(s);
        o = C(T, "ARTICLE", { class: !0 });
        var k = I(o);
        i = C(k, "HEADER", { class: !0 });
        var E = I(i);
        g && g.l(E), E.forEach($), (l = q(k)), (a = C(k, "P", { class: !0 }));
        var M = I(a);
        w && w.l(M),
          M.forEach($),
          k.forEach($),
          (c = q(T)),
          (u = C(T, "DIV", { class: !0 }));
        var L = I(u);
        K(f.$$.fragment, L),
          (p = q(L)),
          K(b.$$.fragment, L),
          L.forEach($),
          T.forEach($),
          S.forEach($),
          this.h();
      },
      h() {
        h(i, "class", "font-semibold text-headline-6"),
          h(a, "class", "text-balance text-headline-1"),
          h(o, "class", "flex flex-col gap-4"),
          h(u, "class", "flex gap-6 desktop:justify-end"),
          h(
            s,
            "class",
            "px-carousel-item py-carousel-item absolute bottom-0 flex w-full flex-col items-center justify-between gap-4 mobile:text-center tablet:items-start tablet:text-left desktop:flex-row desktop:items-end desktop:gap-0"
          ),
          h(e, "class", "img-container svelte-9nz9lr");
      },
      m(v, S) {
        x(v, e, S),
          H(n, e, null),
          y(e, t),
          y(e, s),
          y(s, o),
          y(o, i),
          g && g.m(i, null),
          y(o, l),
          y(o, a),
          w && w.m(a, null),
          y(s, c),
          y(s, u),
          H(f, u, null),
          y(u, p),
          H(b, u, null),
          (m = !0);
      },
      p(v, S) {
        const T = {};
        S & 2 && (T.src = v[1]),
          S & 1 && (T.parseSrc = v[0]),
          n.$set(T),
          g &&
            g.p &&
            (!m || S & 32) &&
            _e(g, d, v, v[5], m ? be(d, v[5], S, qs) : ve(v[5]), Zt),
          w &&
            w.p &&
            (!m || S & 32) &&
            _e(w, _, v, v[5], m ? be(_, v[5], S, Ns) : ve(v[5]), Yt);
        const k = {};
        S & 40 && (k.$$scope = { dirty: S, ctx: v }), f.$set(k);
        const E = {};
        S & 4 && (E.href = v[2]),
          S & 40 && (E.$$scope = { dirty: S, ctx: v }),
          b.$set(E);
      },
      i(v) {
        m ||
          (P(n.$$.fragment, v),
          P(g, v),
          P(w, v),
          P(f.$$.fragment, v),
          P(b.$$.fragment, v),
          (m = !0));
      },
      o(v) {
        j(n.$$.fragment, v),
          j(g, v),
          j(w, v),
          j(f.$$.fragment, v),
          j(b.$$.fragment, v),
          (m = !1);
      },
      d(v) {
        v && $(e), G(n), g && g.d(v), w && w.d(v), G(f), G(b);
      },
    }
  );
}
function Rs(r) {
  let e, n;
  return (
    (e = new Kn({
      props: { $$slots: { default: [Fs] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(t) {
        K(e.$$.fragment, t);
      },
      m(t, s) {
        H(e, t, s), (n = !0);
      },
      p(t, [s]) {
        const o = {};
        s & 47 && (o.$$scope = { dirty: s, ctx: t }), e.$set(o);
      },
      i(t) {
        n || (P(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        j(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        G(e, t);
      },
    }
  );
}
function Hs(r, e, n) {
  let t;
  ne(r, Te, (c) => n(3, (t = c)));
  let { $$slots: s = {}, $$scope: o } = e,
    { parseSrc: i = void 0 } = e,
    { src: l } = e,
    { href: a } = e;
  return (
    (r.$$set = (c) => {
      "parseSrc" in c && n(0, (i = c.parseSrc)),
        "src" in c && n(1, (l = c.src)),
        "href" in c && n(2, (a = c.href)),
        "$$scope" in c && n(5, (o = c.$$scope));
    }),
    [i, l, a, t, s, o]
  );
}
class pt extends Z {
  constructor(e) {
    super(), W(this, e, Hs, Rs, Y, { parseSrc: 0, src: 1, href: 2 });
  }
}
function Gs(r) {
  let e, n, t, s, o, i, l, a;
  return {
    c() {
      (e = U("svg")),
        (n = U("g")),
        (t = U("path")),
        (s = U("path")),
        (o = U("path")),
        (i = U("defs")),
        (l = U("clipPath")),
        (a = U("rect")),
        this.h();
    },
    l(c) {
      e = Q(c, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var u = I(e);
      n = Q(u, "g", { "clip-path": !0 });
      var f = I(n);
      (t = Q(f, "path", {
        d: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      })),
        I(t).forEach($),
        (s = Q(f, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        I(s).forEach($),
        (o = Q(f, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        I(o).forEach($),
        f.forEach($),
        (i = Q(u, "defs", {}));
      var p = I(i);
      l = Q(p, "clipPath", { id: !0 });
      var b = I(l);
      (a = Q(b, "rect", { width: !0, height: !0, fill: !0 })),
        I(a).forEach($),
        b.forEach($),
        p.forEach($),
        u.forEach($),
        this.h();
    },
    h() {
      h(t, "d", "M24 10V38"),
        h(t, "stroke", "currentColor"),
        h(t, "stroke-width", "4"),
        h(t, "stroke-linecap", "round"),
        h(t, "stroke-linejoin", "round"),
        h(s, "d", "M36 26L24 38"),
        h(s, "stroke", "currentColor"),
        h(s, "stroke-width", "4"),
        h(s, "stroke-linecap", "round"),
        h(s, "stroke-linejoin", "round"),
        h(o, "d", "M12 26L24 38"),
        h(o, "stroke", "currentColor"),
        h(o, "stroke-width", "4"),
        h(o, "stroke-linecap", "round"),
        h(o, "stroke-linejoin", "round"),
        h(n, "clip-path", "url(#clip0_921_184)"),
        h(a, "width", "48"),
        h(a, "height", "48"),
        h(a, "fill", "currentColor"),
        h(l, "id", "clip0_921_184"),
        h(e, "width", "48"),
        h(e, "height", "48"),
        h(e, "viewBox", "0 0 48 48"),
        h(e, "fill", "none"),
        h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(c, u) {
      x(c, e, u), y(e, n), y(n, t), y(n, s), y(n, o), y(e, i), y(i, l), y(l, a);
    },
    p: re,
    i: re,
    o: re,
    d(c) {
      c && $(e);
    },
  };
}
class Wt extends Z {
  constructor(e) {
    super(), W(this, e, null, Gs, Y, {});
  }
}
function Ks(r) {
  let e, n;
  return {
    c() {
      (e = U("svg")), (n = U("path")), this.h();
    },
    l(t) {
      e = Q(t, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var s = I(e);
      (n = Q(s, "path", { d: !0, fill: !0 })),
        I(n).forEach($),
        s.forEach($),
        this.h();
    },
    h() {
      h(
        n,
        "d",
        "M8 0.5L6.59 1.91L12.17 7.5H0V9.5H12.17L6.59 15.09L8 16.5L16 8.5L8 0.5Z"
      ),
        h(n, "fill", "currentColor"),
        h(e, "width", "16"),
        h(e, "height", "16"),
        h(e, "viewBox", "0 0 16 16"),
        h(e, "fill", "none"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "class", r[0]);
    },
    m(t, s) {
      x(t, e, s), y(e, n);
    },
    p(t, [s]) {
      s & 1 && h(e, "class", t[0]);
    },
    i: re,
    o: re,
    d(t) {
      t && $(e);
    },
  };
}
function Us(r, e, n) {
  let { class: t = "" } = e;
  return (
    (r.$$set = (s) => {
      "class" in s && n(0, (t = s.class));
    }),
    [t]
  );
}
class $o extends Z {
  constructor(e) {
    super(), W(this, e, Us, Ks, Y, { class: 0 });
  }
}
function Qs(r) {
  let e = r[1]("common.promotion.cta") + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 2 && e !== (e = t[1]("common.promotion.cta") + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Xs(r) {
  let e,
    n,
    t =
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>',
    s,
    o,
    i = r[1]("common.promotion.header") + "",
    l,
    a,
    c,
    u = r[1]("common.promotion.description") + "",
    f,
    p,
    b,
    m,
    d,
    g,
    _;
  return (
    (b = new Xe({
      props: {
        href: "/contact",
        variant: "outline-transparent",
        color: "tertiary",
        $$slots: { default: [Qs] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = A("article")),
          (n = A("button")),
          (n.innerHTML = t),
          (s = N()),
          (o = A("header")),
          (l = B(i)),
          (a = N()),
          (c = A("div")),
          (f = B(u)),
          (p = N()),
          R(b.$$.fragment),
          this.h();
      },
      l(w) {
        e = C(w, "ARTICLE", { "data-cursor-style": !0, class: !0 });
        var v = I(e);
        (n = C(v, "BUTTON", { class: !0, "data-svelte-h": !0 })),
          an(n) !== "svelte-1y0lms3" && (n.innerHTML = t),
          (s = q(v)),
          (o = C(v, "HEADER", { class: !0 }));
        var S = I(o);
        (l = z(S, i)),
          S.forEach($),
          (a = q(v)),
          (c = C(v, "DIV", { class: !0 }));
        var T = I(c);
        (f = z(T, u)),
          T.forEach($),
          (p = q(v)),
          K(b.$$.fragment, v),
          v.forEach($),
          this.h();
      },
      h() {
        h(
          n,
          "class",
          "toast-close-button absolute right-0 top-0 -z-10 aspect-square w-[6ch] rounded-full p-[1.5ch] gradient-primary svelte-12ucgne"
        ),
          h(o, "class", "text-headline-3"),
          h(c, "class", "text-balance"),
          h(e, "data-cursor-style", "secondary"),
          h(
            e,
            "class",
            (m =
              Bt(
                Ft(
                  "fixed bottom-2 right-4 z-30 flex aspect-square w-[25ch] flex-col items-center justify-center gap-4 rounded-full text-center !text-neutral-primary-900 text-paragraph-1 gradient-primary",
                  r[0] && "toast-open"
                )
              ) + " svelte-12ucgne")
          );
      },
      m(w, v) {
        x(w, e, v),
          y(e, n),
          y(e, s),
          y(e, o),
          y(o, l),
          y(e, a),
          y(e, c),
          y(c, f),
          y(e, p),
          H(b, e, null),
          (d = !0),
          g || ((_ = xe(n, "click", r[2])), (g = !0));
      },
      p(w, [v]) {
        (!d || v & 2) &&
          i !== (i = w[1]("common.promotion.header") + "") &&
          F(l, i),
          (!d || v & 2) &&
            u !== (u = w[1]("common.promotion.description") + "") &&
            F(f, u);
        const S = {};
        v & 10 && (S.$$scope = { dirty: v, ctx: w }),
          b.$set(S),
          (!d ||
            (v & 1 &&
              m !==
                (m =
                  Bt(
                    Ft(
                      "fixed bottom-2 right-4 z-30 flex aspect-square w-[25ch] flex-col items-center justify-center gap-4 rounded-full text-center !text-neutral-primary-900 text-paragraph-1 gradient-primary",
                      w[0] && "toast-open"
                    )
                  ) + " svelte-12ucgne"))) &&
            h(e, "class", m);
      },
      i(w) {
        d || (P(b.$$.fragment, w), (d = !0));
      },
      o(w) {
        j(b.$$.fragment, w), (d = !1);
      },
      d(w) {
        w && $(e), G(b), (g = !1), _();
      },
    }
  );
}
const Js = 2500;
function Ys(r, e, n) {
  let t;
  ne(r, Te, (i) => n(1, (t = i)));
  let s = !1;
  return (
    Sn(() => {
      window.addEventListener(
        "scroll",
        () => {
          setTimeout(() => n(0, (s = !0)), Js);
        },
        { passive: !0, once: !0 }
      );
    }),
    [s, t, () => n(0, (s = !1))]
  );
}
class _o extends Z {
  constructor(e) {
    super(), W(this, e, Ys, Xs, Y, {});
  }
}
function Zs(r) {
  let e, n, t, s, o, i, l, a, c, u, f, p, b, m;
  return (
    (a = new Wt({})),
    (f = new Wt({})),
    {
      c() {
        (e = A("button")),
          (n = A("div")),
          (t = A("div")),
          (s = A("div")),
          (o = N()),
          (i = A("div")),
          (l = A("div")),
          R(a.$$.fragment),
          (c = N()),
          (u = A("div")),
          R(f.$$.fragment),
          this.h();
      },
      l(d) {
        e = C(d, "BUTTON", {
          "data-animation": !0,
          style: !0,
          class: !0,
          "data-parallax": !0,
          "data-rellax-speed": !0,
        });
        var g = I(e);
        n = C(g, "DIV", { class: !0 });
        var _ = I(n);
        t = C(_, "DIV", { class: !0 });
        var w = I(t);
        (s = C(w, "DIV", { class: !0 })),
          I(s).forEach($),
          (o = q(w)),
          (i = C(w, "DIV", { class: !0 }));
        var v = I(i);
        l = C(v, "DIV", { class: !0 });
        var S = I(l);
        K(a.$$.fragment, S),
          S.forEach($),
          (c = q(v)),
          (u = C(v, "DIV", { class: !0 }));
        var T = I(u);
        K(f.$$.fragment, T),
          T.forEach($),
          v.forEach($),
          w.forEach($),
          _.forEach($),
          g.forEach($),
          this.h();
      },
      h() {
        h(
          s,
          "class",
          "absolute inset-0 rounded-full opacity-0 transition gradient-primary group-hover:opacity-100 svelte-e15lbj"
        ),
          h(l, "class", "arrow-1 absolute size-12 svelte-e15lbj"),
          h(u, "class", "arrow-2 absolute size-12 svelte-e15lbj"),
          h(i, "class", "relative z-10 size-12 overflow-hidden"),
          h(
            t,
            "class",
            "relative flex aspect-square w-full items-center justify-center rounded-full bg-body-dark"
          ),
          h(
            n,
            "class",
            "relative flex aspect-square w-[70%] items-center justify-center rounded-full p-[2px] transition gradient-primary group-hover:w-[30%] svelte-e15lbj"
          ),
          h(e, "data-animation", "slide-up-fade"),
          Le(e, "--delay", "1.35s"),
          h(
            e,
            "class",
            "slide-up-fade group absolute bottom-0 right-0 hidden aspect-square w-[15dvw] items-center justify-center rounded-full desktop:flex svelte-e15lbj"
          ),
          h(e, "data-parallax", ""),
          h(e, "data-rellax-speed", "5");
      },
      m(d, g) {
        x(d, e, g),
          y(e, n),
          y(n, t),
          y(t, s),
          y(t, o),
          y(t, i),
          y(i, l),
          H(a, l, null),
          y(i, c),
          y(i, u),
          H(f, u, null),
          (p = !0),
          b || ((m = xe(e, "click", r[0])), (b = !0));
      },
      p: re,
      i(d) {
        p || (P(a.$$.fragment, d), P(f.$$.fragment, d), (p = !0));
      },
      o(d) {
        j(a.$$.fragment, d), j(f.$$.fragment, d), (p = !1);
      },
      d(d) {
        d && $(e), G(a), G(f), (b = !1), m();
      },
    }
  );
}
function Ws(r, e, n) {
  let t;
  return (
    ne(r, Dn, (o) => n(1, (t = o))),
    [
      () => {
        document.getElementById("benefits-section")
          ? t.scrollTo("#benefits-section")
          : t.scrollTo("#qualities-section");
      },
    ]
  );
}
class vo extends Z {
  constructor(e) {
    super(), W(this, e, Ws, Zs, Y, {});
  }
}
function er(r) {
  let e = r[0](`${r[1]}.approach.steps.planning.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.planning.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function tr(r) {
  let e = r[0](`${r[1]}.approach.steps.planning.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.planning.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function nr(r) {
  let e = r[0](`${r[1]}.approach.steps.design.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.design.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function sr(r) {
  let e = r[0](`${r[1]}.approach.steps.design.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.design.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function rr(r) {
  let e = r[0](`${r[1]}.approach.steps.development.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.development.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function or(r) {
  let e = r[0](`${r[1]}.approach.steps.development.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !==
          (e = t[0](`${t[1]}.approach.steps.development.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function ir(r) {
  let e = r[0](`${r[1]}.approach.steps.testing.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.testing.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function ar(r) {
  let e = r[0](`${r[1]}.approach.steps.testing.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.testing.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function lr(r) {
  let e = r[0](`${r[1]}.approach.steps.launching.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.launching.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function cr(r) {
  let e = r[0](`${r[1]}.approach.steps.launching.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.approach.steps.launching.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function ur(r) {
  let e, n, t, s, o, i, l, a, c, u, f;
  return (
    (n = new Ke({
      props: {
        img: "/images/icons/planning.svg",
        $$slots: { description: [tr], title: [er] },
        $$scope: { ctx: r },
      },
    })),
    (s = new Ke({
      props: {
        img: "/images/icons/design.svg",
        $$slots: { description: [sr], title: [nr] },
        $$scope: { ctx: r },
      },
    })),
    (i = new Ke({
      props: {
        img: "/images/icons/development.svg",
        $$slots: { description: [or], title: [rr] },
        $$scope: { ctx: r },
      },
    })),
    (a = new Ke({
      props: {
        img: "/images/icons/testing.svg",
        $$slots: { description: [ar], title: [ir] },
        $$scope: { ctx: r },
      },
    })),
    (u = new Ke({
      props: {
        img: "/images/icons/hosting.svg",
        $$slots: { description: [cr], title: [lr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = A("div")),
          R(n.$$.fragment),
          (t = N()),
          R(s.$$.fragment),
          (o = N()),
          R(i.$$.fragment),
          (l = N()),
          R(a.$$.fragment),
          (c = N()),
          R(u.$$.fragment),
          this.h();
      },
      l(p) {
        e = C(p, "DIV", { class: !0 });
        var b = I(e);
        K(n.$$.fragment, b),
          (t = q(b)),
          K(s.$$.fragment, b),
          (o = q(b)),
          K(i.$$.fragment, b),
          (l = q(b)),
          K(a.$$.fragment, b),
          (c = q(b)),
          K(u.$$.fragment, b),
          b.forEach($),
          this.h();
      },
      h() {
        h(
          e,
          "class",
          "flex flex-wrap justify-center gap-24 mb-subheader tablet:gap-32 desktop:max-w-[1500px] desktop:gap-44"
        );
      },
      m(p, b) {
        x(p, e, b),
          H(n, e, null),
          y(e, t),
          H(s, e, null),
          y(e, o),
          H(i, e, null),
          y(e, l),
          H(a, e, null),
          y(e, c),
          H(u, e, null),
          (f = !0);
      },
      p(p, [b]) {
        const m = {};
        b & 7 && (m.$$scope = { dirty: b, ctx: p }), n.$set(m);
        const d = {};
        b & 7 && (d.$$scope = { dirty: b, ctx: p }), s.$set(d);
        const g = {};
        b & 7 && (g.$$scope = { dirty: b, ctx: p }), i.$set(g);
        const _ = {};
        b & 7 && (_.$$scope = { dirty: b, ctx: p }), a.$set(_);
        const w = {};
        b & 7 && (w.$$scope = { dirty: b, ctx: p }), u.$set(w);
      },
      i(p) {
        f ||
          (P(n.$$.fragment, p),
          P(s.$$.fragment, p),
          P(i.$$.fragment, p),
          P(a.$$.fragment, p),
          P(u.$$.fragment, p),
          (f = !0));
      },
      o(p) {
        j(n.$$.fragment, p),
          j(s.$$.fragment, p),
          j(i.$$.fragment, p),
          j(a.$$.fragment, p),
          j(u.$$.fragment, p),
          (f = !1);
      },
      d(p) {
        p && $(e), G(n), G(s), G(i), G(a), G(u);
      },
    }
  );
}
function fr(r, e, n) {
  let t, s;
  return (
    ne(r, Te, (o) => n(0, (t = o))), ne(r, je, (o) => n(1, (s = o))), [t, s]
  );
}
class dr extends Z {
  constructor(e) {
    super(), W(this, e, fr, ur, Y, {});
  }
}
function pr(r) {
  let e = r[0](`${r[1]}.approach.header.1`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.approach.header.1`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function hr(r) {
  let e = r[0](`${r[1]}.approach.header.2`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.approach.header.2`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function mr(r) {
  let e = r[0](`${r[1]}.approach.cta`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.approach.cta`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function gr(r) {
  let e,
    n,
    t,
    s,
    o,
    i,
    l,
    a,
    c,
    u = r[0](`${r[1]}.approach.description.1`) + "",
    f,
    p,
    b,
    m = r[0](`${r[1]}.approach.description.2`) + "",
    d,
    g,
    _,
    w,
    v,
    S,
    T;
  return (
    (n = new wt({
      props: {
        class:
          "left-0 top-1/2 z-0 h-full w-[200dvw] -translate-x-1/2 -translate-y-1/2 desktop:aspect-square desktop:h-[200%] desktop:w-auto",
      },
    })),
    (s = new tt({
      props: {
        feather: 4,
        class: "absolute left-0 top-[5dvh] -scale-x-100 desktop:top-[10dvh]",
      },
    })),
    (i = new kt({
      props: {
        class: "text-display-2",
        $$slots: { main: [hr], secondary: [pr] },
        $$scope: { ctx: r },
      },
    })),
    (_ = new dr({})),
    (S = new Xe({
      props: {
        href: "/services",
        variant: "outline",
        $$slots: { default: [mr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = A("section")),
          R(n.$$.fragment),
          (t = N()),
          R(s.$$.fragment),
          (o = N()),
          R(i.$$.fragment),
          (l = N()),
          (a = A("div")),
          (c = A("p")),
          (f = B(u)),
          (p = N()),
          (b = A("p")),
          (d = B(m)),
          (g = N()),
          R(_.$$.fragment),
          (w = N()),
          (v = A("div")),
          R(S.$$.fragment),
          this.h();
      },
      l(k) {
        e = C(k, "SECTION", { class: !0 });
        var E = I(e);
        K(n.$$.fragment, E),
          (t = q(E)),
          K(s.$$.fragment, E),
          (o = q(E)),
          K(i.$$.fragment, E),
          (l = q(E)),
          (a = C(E, "DIV", { class: !0, "data-animation": !0, style: !0 }));
        var M = I(a);
        c = C(M, "P", {});
        var L = I(c);
        (f = z(L, u)), L.forEach($), (p = q(M)), (b = C(M, "P", {}));
        var V = I(b);
        (d = z(V, m)),
          V.forEach($),
          M.forEach($),
          (g = q(E)),
          K(_.$$.fragment, E),
          (w = q(E)),
          (v = C(E, "DIV", { "data-animation": !0 }));
        var D = I(v);
        K(S.$$.fragment, D), D.forEach($), E.forEach($), this.h();
      },
      h() {
        h(
          a,
          "class",
          "flex flex-col gap-2 text-balance text-center text-headline-6 mb-subheader tablet:max-w-[75ch]"
        ),
          h(a, "data-animation", "slide-up-fade"),
          Le(a, "--delay", "1s"),
          h(v, "data-animation", "slide-up-fade"),
          h(e, "class", "relative flex flex-col items-center");
      },
      m(k, E) {
        x(k, e, E),
          H(n, e, null),
          y(e, t),
          H(s, e, null),
          y(e, o),
          H(i, e, null),
          y(e, l),
          y(e, a),
          y(a, c),
          y(c, f),
          y(a, p),
          y(a, b),
          y(b, d),
          y(e, g),
          H(_, e, null),
          y(e, w),
          y(e, v),
          H(S, v, null),
          (T = !0);
      },
      p(k, [E]) {
        const M = {};
        E & 7 && (M.$$scope = { dirty: E, ctx: k }),
          i.$set(M),
          (!T || E & 3) &&
            u !== (u = k[0](`${k[1]}.approach.description.1`) + "") &&
            F(f, u),
          (!T || E & 3) &&
            m !== (m = k[0](`${k[1]}.approach.description.2`) + "") &&
            F(d, m);
        const L = {};
        E & 7 && (L.$$scope = { dirty: E, ctx: k }), S.$set(L);
      },
      i(k) {
        T ||
          (P(n.$$.fragment, k),
          P(s.$$.fragment, k),
          P(i.$$.fragment, k),
          P(_.$$.fragment, k),
          P(S.$$.fragment, k),
          (T = !0));
      },
      o(k) {
        j(n.$$.fragment, k),
          j(s.$$.fragment, k),
          j(i.$$.fragment, k),
          j(_.$$.fragment, k),
          j(S.$$.fragment, k),
          (T = !1);
      },
      d(k) {
        k && $(e), G(n), G(s), G(i), G(_), G(S);
      },
    }
  );
}
function $r(r, e, n) {
  let t, s;
  return (
    ne(r, Te, (o) => n(0, (t = o))), ne(r, je, (o) => n(1, (s = o))), [t, s]
  );
}
class bo extends Z {
  constructor(e) {
    super(), W(this, e, $r, gr, Y, {});
  }
}
function _r(r) {
  let e, n, t, s;
  return {
    c() {
      (e = U("svg")),
        (n = U("path")),
        (t = U("path")),
        (s = U("path")),
        this.h();
    },
    l(o) {
      e = Q(o, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      });
      var i = I(e);
      (n = Q(i, "path", { stroke: !0, d: !0, fill: !0 })),
        I(n).forEach($),
        (t = Q(i, "path", { d: !0 })),
        I(t).forEach($),
        (s = Q(i, "path", { d: !0 })),
        I(s).forEach($),
        i.forEach($),
        this.h();
    },
    h() {
      h(n, "stroke", "none"),
        h(n, "d", "M0 0h24v24H0z"),
        h(n, "fill", "none"),
        h(t, "d", "M5.636 19.364a9 9 0 1 1 12.728 0"),
        h(s, "d", "M16 9l-4 4"),
        h(e, "class", "text-secondary-2nd-900"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "width", "32"),
        h(e, "height", "32"),
        h(e, "viewBox", "0 0 24 24"),
        h(e, "fill", "none"),
        h(e, "stroke", "currentColor"),
        h(e, "stroke-width", "2"),
        h(e, "stroke-linecap", "round"),
        h(e, "stroke-linejoin", "round");
    },
    m(o, i) {
      x(o, e, i), y(e, n), y(e, t), y(e, s);
    },
    p: re,
    i: re,
    o: re,
    d(o) {
      o && $(e);
    },
  };
}
class vr extends Z {
  constructor(e) {
    super(), W(this, e, null, _r, Y, {});
  }
}
function br(r) {
  let e, n, t, s;
  return {
    c() {
      (e = U("svg")),
        (n = U("path")),
        (t = U("path")),
        (s = U("path")),
        this.h();
    },
    l(o) {
      e = Q(o, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      });
      var i = I(e);
      (n = Q(i, "path", { stroke: !0, d: !0, fill: !0 })),
        I(n).forEach($),
        (t = Q(i, "path", { d: !0 })),
        I(t).forEach($),
        (s = Q(i, "path", { d: !0 })),
        I(s).forEach($),
        i.forEach($),
        this.h();
    },
    h() {
      h(n, "stroke", "none"),
        h(n, "d", "M0 0h24v24H0z"),
        h(n, "fill", "none"),
        h(t, "d", "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"),
        h(s, "d", "M21 21l-6 -6"),
        h(e, "class", "text-secondary-2nd-900"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "width", "32"),
        h(e, "height", "32"),
        h(e, "viewBox", "0 0 24 24"),
        h(e, "fill", "none"),
        h(e, "stroke", "currentColor"),
        h(e, "stroke-width", "2"),
        h(e, "stroke-linecap", "round"),
        h(e, "stroke-linejoin", "round");
    },
    m(o, i) {
      x(o, e, i), y(e, n), y(e, t), y(e, s);
    },
    p: re,
    i: re,
    o: re,
    d(o) {
      o && $(e);
    },
  };
}
class wr extends Z {
  constructor(e) {
    super(), W(this, e, null, br, Y, {});
  }
}
function kr(r) {
  let e, n, t, s, o, i;
  return {
    c() {
      (e = U("svg")),
        (n = U("path")),
        (t = U("path")),
        (s = U("path")),
        (o = U("path")),
        (i = U("path")),
        this.h();
    },
    l(l) {
      e = Q(l, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      });
      var a = I(e);
      (n = Q(a, "path", { stroke: !0, d: !0, fill: !0 })),
        I(n).forEach($),
        (t = Q(a, "path", { d: !0 })),
        I(t).forEach($),
        (s = Q(a, "path", { d: !0 })),
        I(s).forEach($),
        (o = Q(a, "path", { d: !0 })),
        I(o).forEach($),
        (i = Q(a, "path", { d: !0 })),
        I(i).forEach($),
        a.forEach($),
        this.h();
    },
    h() {
      h(n, "stroke", "none"),
        h(n, "d", "M0 0h24v24H0z"),
        h(n, "fill", "none"),
        h(t, "d", "M16 3h5v5"),
        h(s, "d", "M8 3h-5v5"),
        h(o, "d", "M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93"),
        h(i, "d", "M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93"),
        h(e, "class", "text-secondary-2nd-900"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "width", "32"),
        h(e, "height", "32"),
        h(e, "viewBox", "0 0 24 24"),
        h(e, "fill", "none"),
        h(e, "stroke", "currentColor"),
        h(e, "stroke-width", "2"),
        h(e, "stroke-linecap", "round"),
        h(e, "stroke-linejoin", "round");
    },
    m(l, a) {
      x(l, e, a), y(e, n), y(e, t), y(e, s), y(e, o), y(e, i);
    },
    p: re,
    i: re,
    o: re,
    d(l) {
      l && $(e);
    },
  };
}
class Er extends Z {
  constructor(e) {
    super(), W(this, e, null, kr, Y, {});
  }
}
function yr(r) {
  let e, n, t, s, o, i;
  return {
    c() {
      (e = U("svg")),
        (n = U("path")),
        (t = U("path")),
        (s = U("path")),
        (o = U("path")),
        (i = U("path")),
        this.h();
    },
    l(l) {
      e = Q(l, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      });
      var a = I(e);
      (n = Q(a, "path", { stroke: !0, d: !0, fill: !0 })),
        I(n).forEach($),
        (t = Q(a, "path", { d: !0 })),
        I(t).forEach($),
        (s = Q(a, "path", { d: !0 })),
        I(s).forEach($),
        (o = Q(a, "path", { d: !0 })),
        I(o).forEach($),
        (i = Q(a, "path", { d: !0 })),
        I(i).forEach($),
        a.forEach($),
        this.h();
    },
    h() {
      h(n, "stroke", "none"),
        h(n, "d", "M0 0h24v24H0z"),
        h(n, "fill", "none"),
        h(t, "d", "M3 21v-4a4 4 0 1 1 4 4h-4"),
        h(s, "d", "M21 3a16 16 0 0 0 -12.8 10.2"),
        h(o, "d", "M21 3a16 16 0 0 1 -10.2 12.8"),
        h(i, "d", "M10.6 9a9 9 0 0 1 4.4 4.4"),
        h(e, "class", "text-secondary-2nd-900"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "width", "32"),
        h(e, "height", "32"),
        h(e, "viewBox", "0 0 24 24"),
        h(e, "fill", "none"),
        h(e, "stroke", "currentColor"),
        h(e, "stroke-width", "2"),
        h(e, "stroke-linecap", "round"),
        h(e, "stroke-linejoin", "round");
    },
    m(l, a) {
      x(l, e, a), y(e, n), y(e, t), y(e, s), y(e, o), y(e, i);
    },
    p: re,
    i: re,
    o: re,
    d(l) {
      l && $(e);
    },
  };
}
class Sr extends Z {
  constructor(e) {
    super(), W(this, e, null, yr, Y, {});
  }
}
const Ir = (r) => ({}),
  en = (r) => ({});
function Dr(r) {
  let e, n, t, s, o, i, l, a;
  var c = nn[r[1]];
  function u(d, g) {
    return {};
  }
  c && (t = zt(c, u()));
  const f = r[3].title,
    p = $e(f, r, r[2], en),
    b = r[3].default,
    m = $e(b, r, r[2], null);
  return {
    c() {
      (e = A("article")),
        (n = A("header")),
        t && R(t.$$.fragment),
        (s = N()),
        (o = A("span")),
        p && p.c(),
        (i = N()),
        (l = A("p")),
        m && m.c(),
        this.h();
    },
    l(d) {
      e = C(d, "ARTICLE", { "data-animation": !0, style: !0, class: !0 });
      var g = I(e);
      n = C(g, "HEADER", { class: !0 });
      var _ = I(n);
      t && K(t.$$.fragment, _), (s = q(_)), (o = C(_, "SPAN", {}));
      var w = I(o);
      p && p.l(w),
        w.forEach($),
        _.forEach($),
        (i = q(g)),
        (l = C(g, "P", { class: !0 }));
      var v = I(l);
      m && m.l(v), v.forEach($), g.forEach($), this.h();
    },
    h() {
      h(
        n,
        "class",
        "flex w-fit items-center gap-2 bg-clip-text font-bold text-transparent text-headline-4 gradient-primary"
      ),
        h(l, "class", "text-paragraph-2"),
        h(e, "data-animation", "slide-up-fade"),
        Le(e, "--add-delay2", tn * (r[0] + 1) + "s"),
        h(
          e,
          "class",
          "shimmer-animation flex flex-col gap-2 rounded-2xl border border-neutral-primary-400 p-4 tablet:gap-3 tablet:px-4 desktop:gap-4 desktop:rounded-3xl"
        );
    },
    m(d, g) {
      x(d, e, g),
        y(e, n),
        t && H(t, n, null),
        y(n, s),
        y(n, o),
        p && p.m(o, null),
        y(e, i),
        y(e, l),
        m && m.m(l, null),
        (a = !0);
    },
    p(d, [g]) {
      if (g & 2 && c !== (c = nn[d[1]])) {
        if (t) {
          _t();
          const _ = t;
          j(_.$$.fragment, 1, 0, () => {
            G(_, 1);
          }),
            vt();
        }
        c
          ? ((t = zt(c, u())),
            R(t.$$.fragment),
            P(t.$$.fragment, 1),
            H(t, n, s))
          : (t = null);
      }
      p &&
        p.p &&
        (!a || g & 4) &&
        _e(p, f, d, d[2], a ? be(f, d[2], g, Ir) : ve(d[2]), en),
        m &&
          m.p &&
          (!a || g & 4) &&
          _e(m, b, d, d[2], a ? be(b, d[2], g, null) : ve(d[2]), null),
        (!a || g & 1) && Le(e, "--add-delay2", tn * (d[0] + 1) + "s");
    },
    i(d) {
      a || (t && P(t.$$.fragment, d), P(p, d), P(m, d), (a = !0));
    },
    o(d) {
      t && j(t.$$.fragment, d), j(p, d), j(m, d), (a = !1);
    },
    d(d) {
      d && $(e), t && G(t), p && p.d(d), m && m.d(d);
    },
  };
}
const tn = 0.15,
  nn = { speed: vr, brush: Sr, flexibility: Er, search: wr };
function Lr(r, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { idx: o } = e,
    { icon: i } = e;
  return (
    (r.$$set = (l) => {
      "idx" in l && n(0, (o = l.idx)),
        "icon" in l && n(1, (i = l.icon)),
        "$$scope" in l && n(2, (s = l.$$scope));
    }),
    [o, i, s, t]
  );
}
class Tr extends Z {
  constructor(e) {
    super(), W(this, e, Lr, Dr, Y, { idx: 0, icon: 1 });
  }
}
function sn(r, e, n) {
  const t = r.slice();
  return (t[2] = e[n]), (t[4] = n), t;
}
function Mr(r) {
  let e = r[0](`${r[1]}.qualities.cards.${r[4]}.description`) + "",
    n,
    t;
  return {
    c() {
      (n = B(e)), (t = N());
    },
    l(s) {
      (n = z(s, e)), (t = q(s));
    },
    m(s, o) {
      x(s, n, o), x(s, t, o);
    },
    p(s, o) {
      o & 3 &&
        e !== (e = s[0](`${s[1]}.qualities.cards.${s[4]}.description`) + "") &&
        F(n, e);
    },
    d(s) {
      s && ($(n), $(t));
    },
  };
}
function Ar(r) {
  let e = r[0](`${r[1]}.qualities.cards.${r[4]}.header`) + "",
    n,
    t;
  return {
    c() {
      (n = B(e)), (t = N());
    },
    l(s) {
      (n = z(s, e)), (t = q(s));
    },
    m(s, o) {
      x(s, n, o), x(s, t, o);
    },
    p(s, o) {
      o & 3 &&
        e !== (e = s[0](`${s[1]}.qualities.cards.${s[4]}.header`) + "") &&
        F(n, e);
    },
    d(s) {
      s && ($(n), $(t));
    },
  };
}
function rn(r) {
  let e, n;
  return (
    (e = new Tr({
      props: {
        idx: r[4],
        icon: r[0](`${r[1]}.qualities.cards.${r[4]}.icon`),
        $$slots: { title: [Ar], default: [Mr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(t) {
        K(e.$$.fragment, t);
      },
      m(t, s) {
        H(e, t, s), (n = !0);
      },
      p(t, s) {
        const o = {};
        s & 3 && (o.icon = t[0](`${t[1]}.qualities.cards.${t[4]}.icon`)),
          s & 35 && (o.$$scope = { dirty: s, ctx: t }),
          e.$set(o);
      },
      i(t) {
        n || (P(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        j(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        G(e, t);
      },
    }
  );
}
function Cr(r) {
  let e,
    n,
    t = nt(Array.from({ length: 4 })),
    s = [];
  for (let i = 0; i < t.length; i += 1) s[i] = rn(sn(r, t, i));
  const o = (i) =>
    j(s[i], 1, 1, () => {
      s[i] = null;
    });
  return {
    c() {
      e = A("div");
      for (let i = 0; i < s.length; i += 1) s[i].c();
      this.h();
    },
    l(i) {
      e = C(i, "DIV", { class: !0 });
      var l = I(e);
      for (let a = 0; a < s.length; a += 1) s[a].l(l);
      l.forEach($), this.h();
    },
    h() {
      h(
        e,
        "class",
        "grid grid-cols-1 gap-4 mb-subheader tablet:grid-cols-2 tablet:gap-4 tablet:[--add-delay:0.5s] desktop:grid-cols-4 desktop:gap-8"
      );
    },
    m(i, l) {
      x(i, e, l);
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(e, null);
      n = !0;
    },
    p(i, [l]) {
      if (l & 3) {
        t = nt(Array.from({ length: 4 }));
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = sn(i, t, a);
          s[a]
            ? (s[a].p(c, l), P(s[a], 1))
            : ((s[a] = rn(c)), s[a].c(), P(s[a], 1), s[a].m(e, null));
        }
        for (_t(), a = t.length; a < s.length; a += 1) o(a);
        vt();
      }
    },
    i(i) {
      if (!n) {
        for (let l = 0; l < t.length; l += 1) P(s[l]);
        n = !0;
      }
    },
    o(i) {
      s = s.filter(Boolean);
      for (let l = 0; l < s.length; l += 1) j(s[l]);
      n = !1;
    },
    d(i) {
      i && $(e), In(s, i);
    },
  };
}
function xr(r, e, n) {
  let t, s;
  return (
    ne(r, Te, (o) => n(0, (t = o))), ne(r, je, (o) => n(1, (s = o))), [t, s]
  );
}
class Or extends Z {
  constructor(e) {
    super(), W(this, e, xr, Cr, Y, {});
  }
}
function Pr(r) {
  let e = r[0](`${r[1]}.qualities.subsection.header.1`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.qualities.subsection.header.1`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function jr(r) {
  let e,
    n,
    t,
    s,
    o,
    i,
    l,
    a = r[0](`${r[1]}.qualities.subsection.header.2`) + "",
    c,
    u,
    f,
    p,
    b = r[0](`${r[1]}.qualities.subsection.description.0`) + "",
    m,
    d,
    g,
    _ = r[0](`${r[1]}.qualities.subsection.description.1`) + "",
    w,
    v,
    S,
    T =
      '<img alt="Phoexa" loading="lazy" height="250" width="962" src="/images/brand/qualities/5.webp" class="h-full w-full rounded-[inherit] object-cover object-top"/> <div class="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-[#ffffff00] to-[black] to-[110%]"></div>',
    k,
    E,
    M;
  return (
    (o = new Ln({
      props: { $$slots: { default: [Pr] }, $$scope: { ctx: r } },
    })),
    (E = new Or({})),
    {
      c() {
        (e = A("div")),
          (n = A("section")),
          (t = A("div")),
          (s = A("header")),
          R(o.$$.fragment),
          (i = N()),
          (l = A("div")),
          (c = B(a)),
          (u = N()),
          (f = A("div")),
          (p = A("p")),
          (m = B(b)),
          (d = N()),
          (g = A("p")),
          (w = B(_)),
          (v = N()),
          (S = A("div")),
          (S.innerHTML = T),
          (k = N()),
          R(E.$$.fragment),
          this.h();
      },
      l(L) {
        e = C(L, "DIV", { class: !0 });
        var V = I(e);
        n = C(V, "SECTION", { class: !0 });
        var D = I(n);
        t = C(D, "DIV", { class: !0 });
        var J = I(t);
        s = C(J, "HEADER", { class: !0 });
        var oe = I(s);
        K(o.$$.fragment, oe),
          (i = q(oe)),
          (l = C(oe, "DIV", { class: !0, "data-animation": !0 }));
        var ie = I(l);
        (c = z(ie, a)),
          ie.forEach($),
          oe.forEach($),
          (u = q(J)),
          (f = C(J, "DIV", { class: !0, "data-animation": !0, style: !0 }));
        var ae = I(f);
        p = C(ae, "P", {});
        var he = I(p);
        (m = z(he, b)), he.forEach($), (d = q(ae)), (g = C(ae, "P", {}));
        var de = I(g);
        (w = z(de, _)),
          de.forEach($),
          ae.forEach($),
          J.forEach($),
          (v = q(D)),
          (S = C(D, "DIV", {
            class: !0,
            "data-animation": !0,
            style: !0,
            "data-svelte-h": !0,
          })),
          an(S) !== "svelte-sgafvu" && (S.innerHTML = T),
          D.forEach($),
          (k = q(V)),
          K(E.$$.fragment, V),
          V.forEach($),
          this.h();
      },
      h() {
        h(l, "class", "text-headline-2"),
          h(l, "data-animation", "slide-up-fade"),
          h(
            s,
            "class",
            "flex flex-col items-center gap-1 text-center text-headline-3 desktop:items-start desktop:gap-2 desktop:text-left"
          ),
          h(
            f,
            "class",
            "flex max-w-[65ch] flex-col gap-2 text-center text-paragraph-1 desktop:text-left"
          ),
          h(f, "data-animation", "slide-up-fade"),
          Le(f, "--add-delay", "0.25s"),
          h(
            t,
            "class",
            "flex flex-col items-center gap-4 text-balance desktop:flex-1 desktop:items-start desktop:gap-6"
          ),
          h(
            S,
            "class",
            "relative h-[150px] w-full rounded-2xl tablet:h-[250px] desktop:h-[300px] desktop:flex-1"
          ),
          h(S, "data-animation", "slide-right-fade"),
          Le(S, "--add-delay", "0.25s"),
          h(
            n,
            "class",
            "mb-12 flex flex-col gap-8 text-center tablet:mb-16 desktop:mb-20 desktop:flex-row desktop:justify-between desktop:gap-20 desktop:text-left"
          ),
          h(e, "class", "flex flex-col");
      },
      m(L, V) {
        x(L, e, V),
          y(e, n),
          y(n, t),
          y(t, s),
          H(o, s, null),
          y(s, i),
          y(s, l),
          y(l, c),
          y(t, u),
          y(t, f),
          y(f, p),
          y(p, m),
          y(f, d),
          y(f, g),
          y(g, w),
          y(n, v),
          y(n, S),
          y(e, k),
          H(E, e, null),
          (M = !0);
      },
      p(L, [V]) {
        const D = {};
        V & 7 && (D.$$scope = { dirty: V, ctx: L }),
          o.$set(D),
          (!M || V & 3) &&
            a !== (a = L[0](`${L[1]}.qualities.subsection.header.2`) + "") &&
            F(c, a),
          (!M || V & 3) &&
            b !==
              (b = L[0](`${L[1]}.qualities.subsection.description.0`) + "") &&
            F(m, b),
          (!M || V & 3) &&
            _ !==
              (_ = L[0](`${L[1]}.qualities.subsection.description.1`) + "") &&
            F(w, _);
      },
      i(L) {
        M || (P(o.$$.fragment, L), P(E.$$.fragment, L), (M = !0));
      },
      o(L) {
        j(o.$$.fragment, L), j(E.$$.fragment, L), (M = !1);
      },
      d(L) {
        L && $(e), G(o), G(E);
      },
    }
  );
}
function Vr(r, e, n) {
  let t, s;
  return (
    ne(r, Te, (o) => n(0, (t = o))), ne(r, je, (o) => n(1, (s = o))), [t, s]
  );
}
class Nr extends Z {
  constructor(e) {
    super(), W(this, e, Vr, jr, Y, {});
  }
}
function qr(r) {
  let e = r[0](`${r[1]}.qualities.header.1`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.qualities.header.1`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Br(r) {
  let e = r[0](`${r[1]}.qualities.header.2`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.qualities.header.2`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function zr(r) {
  let e = r[0](`${r[1]}.qualities.cta`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.qualities.cta`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Fr(r) {
  let e,
    n,
    t,
    s,
    o,
    i,
    l,
    a,
    c,
    u = r[0](`${r[1]}.qualities.description`) + "",
    f,
    p,
    b,
    m = r[0](`${r[1]}.qualities.description2`) + "",
    d,
    g,
    _,
    w,
    v,
    S,
    T;
  return (
    (n = new wt({
      props: {
        class:
          "left-1/2 top-0 h-1/2 w-[200%] -translate-x-1/2 desktop:top-[35%] desktop:h-full desktop:-translate-y-1/2",
      },
    })),
    (s = new tt({
      props: { feather: 2, class: "absolute right-0 desktop:right-[5%]" },
    })),
    (i = new kt({
      props: {
        as: "h2",
        $$slots: { main: [Br], secondary: [qr] },
        $$scope: { ctx: r },
      },
    })),
    (_ = new Nr({})),
    (S = new Xe({
      props: {
        href: "/why-us",
        variant: "outline",
        $$slots: { default: [zr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = A("section")),
          R(n.$$.fragment),
          (t = N()),
          R(s.$$.fragment),
          (o = N()),
          R(i.$$.fragment),
          (l = N()),
          (a = A("div")),
          (c = A("p")),
          (f = B(u)),
          (p = N()),
          (b = A("p")),
          (d = B(m)),
          (g = N()),
          R(_.$$.fragment),
          (w = N()),
          (v = A("div")),
          R(S.$$.fragment),
          this.h();
      },
      l(k) {
        e = C(k, "SECTION", { id: !0, class: !0 });
        var E = I(e);
        K(n.$$.fragment, E),
          (t = q(E)),
          K(s.$$.fragment, E),
          (o = q(E)),
          K(i.$$.fragment, E),
          (l = q(E)),
          (a = C(E, "DIV", { class: !0, "data-animation": !0, style: !0 }));
        var M = I(a);
        c = C(M, "P", {});
        var L = I(c);
        (f = z(L, u)), L.forEach($), (p = q(M)), (b = C(M, "P", {}));
        var V = I(b);
        (d = z(V, m)),
          V.forEach($),
          M.forEach($),
          (g = q(E)),
          K(_.$$.fragment, E),
          (w = q(E)),
          (v = C(E, "DIV", { class: !0, "data-animation": !0, style: !0 }));
        var D = I(v);
        K(S.$$.fragment, D), D.forEach($), E.forEach($), this.h();
      },
      h() {
        h(
          a,
          "class",
          "flex w-full flex-col items-center gap-2 text-balance text-center text-headline-6 mb-subheader tablet:[&>*]:max-w-[75ch]"
        ),
          h(a, "data-animation", "slide-up-fade"),
          Le(a, "--delay", "1s"),
          h(v, "class", "flex justify-center"),
          h(v, "data-animation", "slide-up-fade"),
          Le(v, "--delay", "1s"),
          h(e, "id", "qualities-section"),
          h(e, "class", "relative z-10");
      },
      m(k, E) {
        x(k, e, E),
          H(n, e, null),
          y(e, t),
          H(s, e, null),
          y(e, o),
          H(i, e, null),
          y(e, l),
          y(e, a),
          y(a, c),
          y(c, f),
          y(a, p),
          y(a, b),
          y(b, d),
          y(e, g),
          H(_, e, null),
          y(e, w),
          y(e, v),
          H(S, v, null),
          (T = !0);
      },
      p(k, [E]) {
        const M = {};
        E & 7 && (M.$$scope = { dirty: E, ctx: k }),
          i.$set(M),
          (!T || E & 3) &&
            u !== (u = k[0](`${k[1]}.qualities.description`) + "") &&
            F(f, u),
          (!T || E & 3) &&
            m !== (m = k[0](`${k[1]}.qualities.description2`) + "") &&
            F(d, m);
        const L = {};
        E & 7 && (L.$$scope = { dirty: E, ctx: k }), S.$set(L);
      },
      i(k) {
        T ||
          (P(n.$$.fragment, k),
          P(s.$$.fragment, k),
          P(i.$$.fragment, k),
          P(_.$$.fragment, k),
          P(S.$$.fragment, k),
          (T = !0));
      },
      o(k) {
        j(n.$$.fragment, k),
          j(s.$$.fragment, k),
          j(i.$$.fragment, k),
          j(_.$$.fragment, k),
          j(S.$$.fragment, k),
          (T = !1);
      },
      d(k) {
        k && $(e), G(n), G(s), G(i), G(_), G(S);
      },
    }
  );
}
function Rr(r, e, n) {
  let t, s;
  return (
    ne(r, Te, (o) => n(0, (t = o))), ne(r, je, (o) => n(1, (s = o))), [t, s]
  );
}
class wo extends Z {
  constructor(e) {
    super(), W(this, e, Rr, Fr, Y, {});
  }
}
function Hr(r) {
  let e = r[0](`${r[1]}.works.carousel.trips.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.works.carousel.trips.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Gr(r) {
  let e = r[0](`${r[1]}.works.carousel.trips.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.works.carousel.trips.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Kr(r) {
  let e = r[0](`${r[1]}.works.carousel.wwwallet.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.works.carousel.wwwallet.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Ur(r) {
  let e = r[0](`${r[1]}.works.carousel.wwwallet.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.works.carousel.wwwallet.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Qr(r) {
  let e = r[0](`${r[1]}.works.carousel.way.header`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.works.carousel.way.header`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Xr(r) {
  let e = r[0](`${r[1]}.works.carousel.way.description`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 &&
        e !== (e = t[0](`${t[1]}.works.carousel.way.description`) + "") &&
        F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}


// ---------for-slider-------

// function Jr(r) {
//   let e, n, t, s, o, i;
//   return (
//     (e = new pt({
//       props: {
//         parseSrc: r[2],
//         src: dt + "/images/works/trips/splash.webp",
//         href: "/works/trips",
//         $$slots: { description: [Gr], header: [Hr] },
//         $$scope: { ctx: r },
//       },
//     })),
//     (t = new pt({
//       props: {
//         parseSrc: r[2],
//         src: dt + "/images/works/wwwallet/splash.webp",
//         href: "/works/wwwallet",
//         $$slots: { description: [Ur], header: [Kr] },
//         $$scope: { ctx: r },
//       },
//     })),
//     (o = new pt({
//       props: {
//         parseSrc: r[2],
//         src: dt + "/images/works/way/splash.webp",
//         href: "/works/way",
//         $$slots: { description: [Xr], header: [Qr] },
//         $$scope: { ctx: r },
//       },
//     })),
//     (o = new pt({
//       props: {
//         parseSrc: r[2],
//         src: dt + "/images/works/file/splash.webp",
//         href: "/works/way",
//         $$slots: { description: [Xr], header: [Qr] },
//         $$scope: { ctx: r },
//       },
//     })),



    
//     {
//       c() {
//         R(e.$$.fragment),
//           (n = N()),
//           R(t.$$.fragment),
//           (s = N()),
//           R(o.$$.fragment);
//       },
//       l(l) {
//         K(e.$$.fragment, l),
//           (n = q(l)),
//           K(t.$$.fragment, l),
//           (s = q(l)),
//           K(o.$$.fragment, l);
//       },
//       m(l, a) {
//         H(e, l, a), x(l, n, a), H(t, l, a), x(l, s, a), H(o, l, a), (i = !0);
//       },
//       p(l, a) {
//         const c = {};
//         a & 11 && (c.$$scope = { dirty: a, ctx: l }), e.$set(c);
//         const u = {};
//         a & 11 && (u.$$scope = { dirty: a, ctx: l }), t.$set(u);
//         const f = {};
//         a & 11 && (f.$$scope = { dirty: a, ctx: l }), o.$set(f);
//       },
//       i(l) {
//         i ||
//           (P(e.$$.fragment, l),
//           P(t.$$.fragment, l),
//           P(o.$$.fragment, l),
//           (i = !0));
//       },
//       o(l) {
//         j(e.$$.fragment, l), j(t.$$.fragment, l), j(o.$$.fragment, l), (i = !1);
//       },
//       d(l) {
//         l && ($(n), $(s)), G(e, l), G(t, l), G(o, l);
//       },
//     }
//   );
// }

function Jr(r) {
  let e, n, t, s, o, i, u; 
  return (
    (e = new pt({
      props: {
        parseSrc: r[2],
        src: dt + "/images/works/trips/splash.webp",
        href: "/works/trips",
        $$slots: { description: [Gr], header: [Hr] },
        $$scope: { ctx: r },
      },
    })),
    (t = new pt({
      props: {
        parseSrc: r[2],
        src: dt + "/images/works/wwwallet/splash.webp",
        href: "/works/wwwallet",
        $$slots: { description: [Ur], header: [Kr] },
        $$scope: { ctx: r },
      },
    })),
    (o = new pt({
      props: {
        parseSrc: r[2],
        src: dt + "/images/works/way/splash.webp",
        href: "/works/way",
        $$slots: { description: [Xr], header: [Qr] },
        $$scope: { ctx: r },
      },
    })),
    (u = new pt({
      props: {
        parseSrc: r[2],
        src: dt + "/images/works/file/splash.webp", 
        href: "/works/file",
        $$slots: { description: [Xr], header: [Qr] },
        $$scope: { ctx: r },
      },
    })),

    {
      c() {
        R(e.$$.fragment),
          (n = N()),
          R(t.$$.fragment),
          (s = N()),
          R(o.$$.fragment),
          (n = N()),
          R(u.$$.fragment); 
      },
      l(l) {
        K(e.$$.fragment, l),
          (n = q(l)),
          K(t.$$.fragment, l),
          (s = q(l)),
          K(o.$$.fragment, l),
          (n = q(l)),
          K(u.$$.fragment, l); 
      },
      m(l, a) {
        H(e, l, a), x(l, n, a), H(t, l, a), x(l, s, a), H(o, l, a), H(u, l, a), (i = !0);
      },
      p(l, a) {
        const c = {};
        a & 11 && (c.$$scope = { dirty: a, ctx: l }), e.$set(c);
        const u = {};
        a & 11 && (u.$$scope = { dirty: a, ctx: l }), t.$set(u);
        const f = {};
        a & 11 && (f.$$scope = { dirty: a, ctx: l }), o.$set(f);
        const d = {};
        a & 11 && (d.$$scope = { dirty: a, ctx: l }), u.$set(d); 
      },
      i(l) {
        i ||
          (P(e.$$.fragment, l),
          P(t.$$.fragment, l),
          P(o.$$.fragment, l),
          P(u.$$.fragment, l), 
          (i = !0));
      },
      o(l) {
        j(e.$$.fragment, l), j(t.$$.fragment, l), j(o.$$.fragment, l), j(u.$$.fragment, l), (i = !1); 
      },
      d(l) {
        l && ($(n), $(s)), G(e, l), G(t, l), G(o, l), G(u, l); 
      },
    }
  );
}





function Yr(r) {
  let e, n;
  return (
    (e = new Vs({
      props: { $$slots: { default: [Jr] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(t) {
        K(e.$$.fragment, t);
      },
      m(t, s) {
        H(e, t, s), (n = !0);
      },
      p(t, [s]) {
        const o = {};
        s & 11 && (o.$$scope = { dirty: s, ctx: t }), e.$set(o);
      },
      i(t) {
        n || (P(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        j(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        G(e, t);
      },
    }
  );
}
function Zr(r, e, n) {
  let t, s;
  return (
    ne(r, Te, (i) => n(0, (t = i))),
    ne(r, je, (i) => n(1, (s = i))),
    [
      t,
      s,
      (i) => {
        const { desktop: l, tablet: a, mobile: c } = Cn(i);
        return {
          desktop: l,
          tablet: a,
          mobile: c.replace("splash.webp", "splash-carousel.webp"),
        };
      },
    ]
  );
}
class Wr extends Z {
  constructor(e) {
    super(), W(this, e, Zr, Yr, Y, {});
  }
}
function eo(r) {
  let e = r[0](`${r[1]}.works.header.1`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.works.header.1`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function to(r) {
  let e = r[0](`${r[1]}.works.header.2`) + "",
    n;
  return {
    c() {
      n = B(e);
    },
    l(t) {
      n = z(t, e);
    },
    m(t, s) {
      x(t, n, s);
    },
    p(t, s) {
      s & 3 && e !== (e = t[0](`${t[1]}.works.header.2`) + "") && F(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function no(r) {
  let e,
    n,
    t,
    s,
    o,
    i,
    l,
    a,
    c,
    u,
    f,
    p,
    b = r[0](`${r[1]}.works.description.1`) + "",
    m,
    d,
    g,
    _ = r[0](`${r[1]}.works.description.2`) + "",
    w,
    v,
    S,
    T;
  return (
    (n = new wt({
      props: { class: "absolute right-0 z-0 h-full w-dvw translate-x-1/2" },
    })),
    (s = new tt({
      props: {
        feather: 1,
        class: "absolute left-0 top-0 tablet:hidden desktop:block",
      },
    })),
    (i = new tt({
      props: {
        feather: 3,
        class:
          "absolute -right-[5dvw] top-0 -scale-x-100 tablet:hidden desktop:block",
      },
    })),
    (a = new kt({
      props: {
        as: "h2",
        $$slots: { main: [to], secondary: [eo] },
        $$scope: { ctx: r },
      },
    })),
    (S = new Wr({})),
    {
      c() {
        (e = A("section")),
          R(n.$$.fragment),
          (t = N()),
          R(s.$$.fragment),
          (o = N()),
          R(i.$$.fragment),
          (l = N()),
          R(a.$$.fragment),
          (c = N()),
          (u = A("div")),
          (f = A("div")),
          (p = A("p")),
          (m = B(b)),
          (d = N()),
          (g = A("p")),
          (w = B(_)),
          (v = N()),
          R(S.$$.fragment),
          this.h();
      },
      l(k) {
        e = C(k, "SECTION", { class: !0 });
        var E = I(e);
        K(n.$$.fragment, E),
          (t = q(E)),
          K(s.$$.fragment, E),
          (o = q(E)),
          K(i.$$.fragment, E),
          (l = q(E)),
          K(a.$$.fragment, E),
          (c = q(E)),
          (u = C(E, "DIV", { class: !0, "data-animation": !0, style: !0 }));
        var M = I(u);
        f = C(M, "DIV", { class: !0 });
        var L = I(f);
        p = C(L, "P", {});
        var V = I(p);
        (m = z(V, b)), V.forEach($), (d = q(L)), (g = C(L, "P", {}));
        var D = I(g);
        (w = z(D, _)),
          D.forEach($),
          L.forEach($),
          M.forEach($),
          (v = q(E)),
          K(S.$$.fragment, E),
          E.forEach($),
          this.h();
      },
      h() {
        h(
          f,
          "class",
          "flex w-full flex-col items-center gap-2 text-balance text-center text-paragraph-1 tablet:[&>*]:max-w-[75ch]"
        ),
          h(u, "class", "flex mb-subheader"),
          h(u, "data-animation", "slide-up-fade"),
          Le(u, "--delay", "1s"),
          h(e, "class", "relative");
      },
      m(k, E) {
        x(k, e, E),
          H(n, e, null),
          y(e, t),
          H(s, e, null),
          y(e, o),
          H(i, e, null),
          y(e, l),
          H(a, e, null),
          y(e, c),
          y(e, u),
          y(u, f),
          y(f, p),
          y(p, m),
          y(f, d),
          y(f, g),
          y(g, w),
          y(e, v),
          H(S, e, null),
          (T = !0);
      },
      p(k, [E]) {
        const M = {};
        E & 7 && (M.$$scope = { dirty: E, ctx: k }),
          a.$set(M),
          (!T || E & 3) &&
            b !== (b = k[0](`${k[1]}.works.description.1`) + "") &&
            F(m, b),
          (!T || E & 3) &&
            _ !== (_ = k[0](`${k[1]}.works.description.2`) + "") &&
            F(w, _);
      },
      i(k) {
        T ||
          (P(n.$$.fragment, k),
          P(s.$$.fragment, k),
          P(i.$$.fragment, k),
          P(a.$$.fragment, k),
          P(S.$$.fragment, k),
          (T = !0));
      },
      o(k) {
        j(n.$$.fragment, k),
          j(s.$$.fragment, k),
          j(i.$$.fragment, k),
          j(a.$$.fragment, k),
          j(S.$$.fragment, k),
          (T = !1);
      },
      d(k) {
        k && $(e), G(n), G(s), G(i), G(a), G(S);
      },
    }
  );
}
function so(r, e, n) {
  let t, s;
  return (
    ne(r, Te, (o) => n(0, (t = o))), ne(r, je, (o) => n(1, (s = o))), [t, s]
  );
}
class ko extends Z {
  constructor(e) {
    super(), W(this, e, so, no, Y, {});
  }
}
export { $o as A, _o as P, wo as Q, vo as S, ko as W, bo as a };
