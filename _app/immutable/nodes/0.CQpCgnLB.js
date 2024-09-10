var Se = Object.defineProperty;
var Me = (i, t, s) =>
  t in i
    ? Se(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (i[t] = s);
var ht = (i, t, s) => Me(i, typeof t != "symbol" ? t + "" : t, s);
import {
  i as Te,
  E as ae,
  s as Tt,
  H as ce,
  b as Zt,
  C as ze,
  a as Jt,
  t as Vt,
  d as Le,
} from "../chunks/email.Dmnkevij.js";
import {
  h as Ce,
  s as Ne,
  i as Ie,
  t as zt,
  N as ue,
  L as Re,
  d as Ae,
  j as wt,
  a as Oe,
  k as Qt,
  n as he,
  l as He,
} from "../chunks/text-animation.svelte_svelte_type_style_lang.PyTsGWbX.js";
import {
  s as X,
  e as E,
  a as R,
  t as it,
  c as x,
  b as $,
  M as At,
  g as A,
  f as u,
  d as lt,
  r as o,
  v as tt,
  i as y,
  h as p,
  a5 as De,
  j as bt,
  R as Rt,
  k as G,
  L as Lt,
  n as B,
  z as fe,
  K as Ot,
  l as de,
  a8 as je,
  u as pe,
  m as me,
  o as ge,
  U as We,
  P as Be,
  a9 as $e,
  ad as Dt,
  A as kt,
  B as ct,
  p as O,
  q as H,
  y as _e,
  a6 as ve,
  J as Pe,
} from "../chunks/scheduler.j3FdVX_3.js";
import {
  S as Y,
  i as F,
  c as T,
  a as C,
  m as z,
  t as v,
  g as $t,
  e as _t,
  b,
  d as L,
} from "../chunks/index.B2YDLXwW.js";
import { e as Mt } from "../chunks/each.CcloCqHC.js";
import { l as we, h as Ve, s as Ue } from "../chunks/lenis.Vcx2G2sx.js";
import { L as Et } from "../chunks/Link.BtFA_H7i.js";
import { b as qe, o as Xe, a as Ye } from "../chunks/entry.BXe_oHrD.js";
import { i as Ht, s as Fe } from "../chunks/page.Ch4oKtEx.js";
import { H as Ke } from "../chunks/header.B-UNqSd_.js";
import { F as Ge } from "../chunks/feather.CpcrUE3R.js";
import { B as jt } from "../chunks/check.CsInqHA3.js";
import {
  c as yt,
  T as Ze,
} from "../chunks/benefits-list.svelte_svelte_type_style_lang.C3TWG9N2.js";
import { C as Je } from "../chunks/chevron-right.ecURoIU5.js";
import { p as Qe } from "../chunks/stores.Cj75UAyh.js";
/* empty css                                                     */ const ts =
    !1,
  es = ts,
  ss = "always",
  rs = async ({ data: i }) => {
    const { i18n: t, translations: s } = i,
      { lang: e, route: r } = t;
    return Ce(s), await Ne(r), await Ie(e), Te(), t;
  },
  tn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, load: rs, trailingSlash: ss },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function ns(i, t, s) {
  const e = i.slice();
  return (e[9] = t[s]), e;
}
function te(i, t, s) {
  const e = i.slice();
  return (e[12] = t[s].icon), (e[13] = t[s].name), (e[14] = t[s].to), e;
}
function is(i, t, s) {
  const e = i.slice();
  return (e[9] = t[s]), e;
}
function ls(i) {
  let t = i[9].title + "",
    s;
  return {
    c() {
      s = it(t);
    },
    l(e) {
      s = lt(e, t);
    },
    m(e, r) {
      y(e, s, r);
    },
    p: B,
    d(e) {
      e && u(s);
    },
  };
}
function os(i) {
  let t, s, e, r;
  return (
    (s = new Et({
      props: {
        href: i[9].href,
        $$slots: { default: [ls] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (t = E("li")), T(s.$$.fragment), (e = R()), this.h();
      },
      l(n) {
        t = x(n, "LI", { class: !0 });
        var l = $(t);
        C(s.$$.fragment, l), (e = A(l)), l.forEach(u), this.h();
      },
      h() {
        o(t, "class", "underline-on-hover");
      },
      m(n, l) {
        y(n, t, l), z(s, t, null), p(t, e), (r = !0);
      },
      p(n, l) {
        const a = {};
        l & 524288 && (a.$$scope = { dirty: l, ctx: n }), s.$set(a);
      },
      i(n) {
        r || (v(s.$$.fragment, n), (r = !0));
      },
      o(n) {
        b(s.$$.fragment, n), (r = !1);
      },
      d(n) {
        n && u(t), L(s);
      },
    }
  );
}
function as(i) {
  let t,
    s,
    e,
    r = i[13] + "",
    n,
    l;
  var a = i[12];
  function h(c, f) {
    return { props: { class: "h-[1.5em] w-[1.5em]" } };
  }
  return (
    a && (t = Ot(a, h())),
    {
      c() {
        t && T(t.$$.fragment),
          (s = R()),
          (e = E("span")),
          (n = it(r)),
          this.h();
      },
      l(c) {
        t && C(t.$$.fragment, c), (s = A(c)), (e = x(c, "SPAN", { class: !0 }));
        var f = $(e);
        (n = lt(f, r)), f.forEach(u), this.h();
      },
      h() {
        o(e, "class", "underline-on-hover");
      },
      m(c, f) {
        t && z(t, c, f), y(c, s, f), y(c, e, f), p(e, n), (l = !0);
      },
      p(c, f) {
        if (a !== (a = c[12])) {
          if (t) {
            $t();
            const _ = t;
            b(_.$$.fragment, 1, 0, () => {
              L(_, 1);
            }),
              _t();
          }
          a
            ? ((t = Ot(a, h())),
              T(t.$$.fragment),
              v(t.$$.fragment, 1),
              z(t, s.parentNode, s))
            : (t = null);
        }
      },
      i(c) {
        l || (t && v(t.$$.fragment, c), (l = !0));
      },
      o(c) {
        t && b(t.$$.fragment, c), (l = !1);
      },
      d(c) {
        c && (u(s), u(e)), t && L(t, c);
      },
    }
  );
}
function ee(i) {
  let t, s, e, r;
  return (
    (s = new Et({
      props: {
        href: i[14],
        class: "flex items-center gap-1",
        target: "_blank",
        $$slots: { default: [as] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (t = E("li")), T(s.$$.fragment), (e = R());
      },
      l(n) {
        t = x(n, "LI", {});
        var l = $(t);
        C(s.$$.fragment, l), (e = A(l)), l.forEach(u);
      },
      m(n, l) {
        y(n, t, l), z(s, t, null), p(t, e), (r = !0);
      },
      p(n, l) {
        const a = {};
        l & 524288 && (a.$$scope = { dirty: l, ctx: n }), s.$set(a);
      },
      i(n) {
        r || (v(s.$$.fragment, n), (r = !0));
      },
      o(n) {
        b(s.$$.fragment, n), (r = !1);
      },
      d(n) {
        n && u(t), L(s);
      },
    }
  );
}
function cs(i) {
  let t, s;
  return (
    (t = new hr({ props: { class: "h-[1.25em] w-[1.25em]" } })),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      p: B,
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
function us(i) {
  let t = i[9].title + "",
    s;
  return {
    c() {
      s = it(t);
    },
    l(e) {
      s = lt(e, t);
    },
    m(e, r) {
      y(e, s, r);
    },
    p: B,
    d(e) {
      e && u(s);
    },
  };
}
function hs(i) {
  let t, s, e, r;
  return (
    (s = new Et({
      props: {
        href: i[9].href,
        $$slots: { default: [us] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (t = E("li")), T(s.$$.fragment), (e = R()), this.h();
      },
      l(n) {
        t = x(n, "LI", { class: !0 });
        var l = $(t);
        C(s.$$.fragment, l), (e = A(l)), l.forEach(u), this.h();
      },
      h() {
        o(t, "class", "underline-on-hover pt-1");
      },
      m(n, l) {
        y(n, t, l), z(s, t, null), p(t, e), (r = !0);
      },
      p(n, l) {
        const a = {};
        l & 524288 && (a.$$scope = { dirty: l, ctx: n }), s.$set(a);
      },
      i(n) {
        r || (v(s.$$.fragment, n), (r = !0));
      },
      o(n) {
        b(s.$$.fragment, n), (r = !1);
      },
      d(n) {
        n && u(t), L(s);
      },
    }
  );
}
function fs(i) {
  let t,
    s,
    e,
    r,
    n = "Quick Links",
    l,
    a,
    h,
    c,
    f,
    _ = "Connect",
    m,
    g,
    k,
    I,
    P,
    j = i[2]("common.footer.contact") + "",
    W,
    K,
    D,
    N,
    d,
    M,
    ft,
    ot,
    dt,
    at,
    xt,
    et,
    Z,
    mt,
    st,
    ut = i[2]("common.footer.links.top") + "",
    pt,
    rt,
    Wt,
    Xt,
    Bt = Mt(ue),
    J = [];
  for (let w = 0; w < Bt.length; w += 1) J[w] = os(is(i, Bt, w));
  let gt = Mt(i[3]),
    V = [];
  for (let w = 0; w < gt.length; w += 1) V[w] = ee(te(i, gt, w));
  const xe = (w) =>
    b(V[w], 1, 1, () => {
      V[w] = null;
    });
  (D = new ae({})),
    (M = new xr({})),
    (ot = new Et({
      props: {
        href: "https://t.me/phoexa",
        rel: "external",
        target: "_blank",
        "aria-label": "Telegram Contact",
        $$slots: { default: [cs] },
        $$scope: { ctx: i },
      },
    }));
  let Pt = Mt(Re),
    Q = [];
  for (let w = 0; w < Pt.length; w += 1) Q[w] = hs(ns(i, Pt, w));
  return {
    c() {
      (t = E("footer")),
        (s = E("div")),
        (e = E("section")),
        (r = E("header")),
        (r.textContent = n),
        (l = R()),
        (a = E("ul"));
      for (let w = 0; w < J.length; w += 1) J[w].c();
      (h = R()),
        (c = E("section")),
        (f = E("header")),
        (f.textContent = _),
        (m = R()),
        (g = E("ul"));
      for (let w = 0; w < V.length; w += 1) V[w].c();
      (k = R()),
        (I = E("section")),
        (P = E("header")),
        (W = it(j)),
        (K = R()),
        T(D.$$.fragment),
        (N = R()),
        (d = E("div")),
        T(M.$$.fragment),
        (ft = R()),
        T(ot.$$.fragment),
        (dt = R()),
        (at = E("hr")),
        (xt = R()),
        (et = E("div")),
        (Z = E("ul"));
      for (let w = 0; w < Q.length; w += 1) Q[w].c();
      (mt = R()), (st = E("button")), (pt = it(ut)), this.h();
    },
    l(w) {
      t = x(w, "FOOTER", { class: !0, style: !0, "data-cursor-style": !0 });
      var S = $(t);
      s = x(S, "DIV", { class: !0 });
      var U = $(s);
      e = x(U, "SECTION", { class: !0 });
      var q = $(e);
      (r = x(q, "HEADER", { class: !0, "data-svelte-h": !0 })),
        At(r) !== "svelte-1yggz3q" && (r.textContent = n),
        (l = A(q)),
        (a = x(q, "UL", { class: !0 }));
      var St = $(a);
      for (let nt = 0; nt < J.length; nt += 1) J[nt].l(St);
      St.forEach(u),
        q.forEach(u),
        (h = A(U)),
        (c = x(U, "SECTION", { class: !0 }));
      var Ct = $(c);
      (f = x(Ct, "HEADER", { class: !0, "data-svelte-h": !0 })),
        At(f) !== "svelte-1hxn2ki" && (f.textContent = _),
        (m = A(Ct)),
        (g = x(Ct, "UL", { class: !0 }));
      var Yt = $(g);
      for (let nt = 0; nt < V.length; nt += 1) V[nt].l(Yt);
      Yt.forEach(u),
        Ct.forEach(u),
        (k = A(U)),
        (I = x(U, "SECTION", { class: !0 }));
      var vt = $(I);
      P = x(vt, "HEADER", { class: !0 });
      var Ft = $(P);
      (W = lt(Ft, j)),
        Ft.forEach(u),
        (K = A(vt)),
        C(D.$$.fragment, vt),
        (N = A(vt)),
        (d = x(vt, "DIV", { class: !0 }));
      var Nt = $(d);
      C(M.$$.fragment, Nt),
        (ft = A(Nt)),
        C(ot.$$.fragment, Nt),
        Nt.forEach(u),
        vt.forEach(u),
        U.forEach(u),
        (dt = A(S)),
        (at = x(S, "HR", { class: !0 })),
        (xt = A(S)),
        (et = x(S, "DIV", { class: !0 }));
      var It = $(et);
      Z = x(It, "UL", { class: !0 });
      var Kt = $(Z);
      for (let nt = 0; nt < Q.length; nt += 1) Q[nt].l(Kt);
      Kt.forEach(u), (mt = A(It)), (st = x(It, "BUTTON", { class: !0 }));
      var Gt = $(st);
      (pt = lt(Gt, ut)), Gt.forEach(u), It.forEach(u), S.forEach(u), this.h();
    },
    h() {
      o(r, "class", "font-medium text-paragraph-3"),
        o(
          a,
          "class",
          "grid grid-cols-3 place-items-center gap-x-10 gap-y-4 text-link-1 tablet:grid-cols-2 tablet:place-items-start tablet:justify-start tablet:gap-x-12 desktop:gap-y-6 svelte-e32dru"
        ),
        o(e, "class", "flex flex-col items-center gap-4 tablet:items-start"),
        o(f, "class", "font-medium text-paragraph-3"),
        o(
          g,
          "class",
          "grid grid-cols-2 flex-col gap-x-10 gap-y-4 text-link-1 tablet:flex tablet:justify-start tablet:gap-x-12 desktop:gap-y-6 svelte-e32dru"
        ),
        o(c, "class", "flex flex-col items-center gap-4 tablet:items-start"),
        o(P, "class", "font-medium text-paragraph-3"),
        o(d, "class", "flex items-start gap-4 text-headline-4"),
        o(
          I,
          "class",
          "flex flex-col items-center gap-4 tablet:flex-1 tablet:items-start tablet:self-end tablet:*:ml-auto"
        ),
        o(
          s,
          "class",
          "flex flex-col gap-y-12 tablet:flex-row tablet:gap-x-12 desktop:gap-x-32 desktop:px-12"
        ),
        o(at, "class", "h-[2px] bg-neutral-primary-700"),
        o(
          Z,
          "class",
          "flex flex-col items-center gap-6 text-link-1 tablet:flex-row tablet:justify-center tablet:gap-16 desktop:w-fit svelte-e32dru"
        ),
        o(st, "class", "font-bold text-link-1"),
        o(
          et,
          "class",
          "mt-8 flex w-full flex-col gap-12 desktop:mt-24 desktop:flex-row desktop:justify-between desktop:px-12"
        ),
        o(
          t,
          "class",
          "relative flex w-full flex-col gap-12 px-4 pb-12 text-body-dark gradient-primary [--eclipse-height:10dvh] [--max-radius:30dvh] before:gradient-primary tablet:px-8 desktop:px-24 desktop:pt-12 desktop:[--eclipse-height:20dvh] desktop:[--max-radius:70dvh] svelte-e32dru"
        ),
        tt(t, "--scroll-progress", i[1]),
        o(t, "data-cursor-style", "secondary");
    },
    m(w, S) {
      y(w, t, S), p(t, s), p(s, e), p(e, r), p(e, l), p(e, a);
      for (let U = 0; U < J.length; U += 1) J[U] && J[U].m(a, null);
      p(s, h), p(s, c), p(c, f), p(c, m), p(c, g);
      for (let U = 0; U < V.length; U += 1) V[U] && V[U].m(g, null);
      p(s, k),
        p(s, I),
        p(I, P),
        p(P, W),
        p(I, K),
        z(D, I, null),
        p(I, N),
        p(I, d),
        z(M, d, null),
        p(d, ft),
        z(ot, d, null),
        p(t, dt),
        p(t, at),
        p(t, xt),
        p(t, et),
        p(et, Z);
      for (let U = 0; U < Q.length; U += 1) Q[U] && Q[U].m(Z, null);
      p(et, mt),
        p(et, st),
        p(st, pt),
        i[6](t),
        (rt = !0),
        Wt || ((Xt = De(st, "click", i[5])), (Wt = !0));
    },
    p(w, [S]) {
      if (S & 8) {
        gt = Mt(w[3]);
        let q;
        for (q = 0; q < gt.length; q += 1) {
          const St = te(w, gt, q);
          V[q]
            ? (V[q].p(St, S), v(V[q], 1))
            : ((V[q] = ee(St)), V[q].c(), v(V[q], 1), V[q].m(g, null));
        }
        for ($t(), q = gt.length; q < V.length; q += 1) xe(q);
        _t();
      }
      (!rt || S & 4) &&
        j !== (j = w[2]("common.footer.contact") + "") &&
        bt(W, j);
      const U = {};
      S & 524288 && (U.$$scope = { dirty: S, ctx: w }),
        ot.$set(U),
        (!rt || S & 4) &&
          ut !== (ut = w[2]("common.footer.links.top") + "") &&
          bt(pt, ut),
        (!rt || S & 2) && tt(t, "--scroll-progress", w[1]);
    },
    i(w) {
      if (!rt) {
        for (let S = 0; S < Bt.length; S += 1) v(J[S]);
        for (let S = 0; S < gt.length; S += 1) v(V[S]);
        v(D.$$.fragment, w), v(M.$$.fragment, w), v(ot.$$.fragment, w);
        for (let S = 0; S < Pt.length; S += 1) v(Q[S]);
        rt = !0;
      }
    },
    o(w) {
      J = J.filter(Boolean);
      for (let S = 0; S < J.length; S += 1) b(J[S]);
      V = V.filter(Boolean);
      for (let S = 0; S < V.length; S += 1) b(V[S]);
      b(D.$$.fragment, w),
        b(M.$$.fragment, w),
        b(ot.$$.fragment, w),
        (Q = Q.filter(Boolean));
      for (let S = 0; S < Q.length; S += 1) b(Q[S]);
      rt = !1;
    },
    d(w) {
      w && u(t),
        Rt(J, w),
        Rt(V, w),
        L(D),
        L(M),
        L(ot),
        Rt(Q, w),
        i[6](null),
        (Wt = !1),
        Xt();
    },
  };
}
function ds(i, t, s) {
  let e, r, n;
  G(i, we, (m) => s(7, (e = m))), G(i, zt, (m) => s(2, (n = m)));
  const l = [
      {
        name: "Linkedin",
        icon: ar,
        to: "",
      },
      { name: "Facebook", icon: sr, to: "" },
      { name: "Twitter", icon: pr, to: "" },
      {
        name: "Instagram",
        icon: ir,
        to: "",
      },
    ],
    { scrollProgress: a, monitorScrollProgress: h } = Ae();
  G(i, a, (m) => s(1, (r = m)));
  let c;
  const f = () => e.scrollTo(0, { duration: 1 });
  Lt(() => h(c));
  function _(m) {
    fe[m ? "unshift" : "push"](() => {
      (c = m), s(0, c);
    });
  }
  return [c, r, n, l, a, f, _];
}
class ps extends Y {
  constructor(t) {
    super(), F(this, t, ds, fs, X, {});
  }
}
function ms(i) {
  let t, s, e, r, n;
  const l = i[2].default,
    a = de(l, i, i[1], null);
  return {
    c() {
      (t = E("div")), a && a.c(), this.h();
    },
    l(h) {
      t = x(h, "DIV", {});
      var c = $(t);
      a && a.l(c), c.forEach(u), this.h();
    },
    h() {
      t.hidden = !0;
    },
    m(h, c) {
      y(h, t, c),
        a && a.m(t, null),
        (e = !0),
        r || ((n = je((s = gs.call(null, t, i[0])))), (r = !0));
    },
    p(h, [c]) {
      a &&
        a.p &&
        (!e || c & 2) &&
        pe(a, l, h, h[1], e ? ge(l, h[1], c, null) : me(h[1]), null),
        s && We(s.update) && c & 1 && s.update.call(null, h[0]);
    },
    i(h) {
      e || (v(a, h), (e = !0));
    },
    o(h) {
      b(a, h), (e = !1);
    },
    d(h) {
      h && u(t), a && a.d(h), (r = !1), n();
    },
  };
}
function gs(i, t = "body") {
  let s;
  async function e(n) {
    if (((t = n), typeof t == "string")) {
      if (
        ((s = document.querySelector(t)),
        s === null && (await Be(), (s = document.querySelector(t))),
        s === null)
      )
        throw new Error(`No element found matching css selector: "${t}"`);
    } else if (t instanceof HTMLElement) s = t;
    else
      throw new TypeError(
        `Unknown portal target type: ${
          t === null ? "null" : typeof t
        }. Allowed types: string (CSS selector) or HTMLElement.`
      );
    s.appendChild(i), (i.hidden = !1);
  }
  function r() {
    i.parentNode && i.parentNode.removeChild(i);
  }
  return e(t), { update: e, destroy: r };
}
function $s(i, t, s) {
  let { $$slots: e = {}, $$scope: r } = t,
    { target: n = "body" } = t;
  return (
    (i.$$set = (l) => {
      "target" in l && s(0, (n = l.target)),
        "$$scope" in l && s(1, (r = l.$$scope));
    }),
    [n, r, e]
  );
}
class _s extends Y {
  constructor(t) {
    super(), F(this, t, $s, ms, X, { target: 0 });
  }
}
function vs(i) {
  let t, s;
  return (
    (t = new ce({})),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
function ws(i) {
  let t, s;
  return (
    (t = new jt({
      props: {
        id: Ut,
        variant: "outline-transparent",
        color: "tertiary",
        class: "button-hamburger ml-auto",
        size: "icon",
        "aria-controls": "primary-navigation",
        "aria-label": "Close Menu",
        "data-state": "closed",
        "aria-expanded": "false",
        $$slots: { default: [vs] },
        $$scope: { ctx: i },
      },
    })),
    t.$on("click", i[0]),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      p(e, [r]) {
        const n = {};
        r & 4 && (n.$$scope = { dirty: r, ctx: e }), t.$set(n);
      },
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
const Ut = "hamburger-button-close",
  bs = () => {
    const i = document.getElementById(Ut);
    i.setAttribute("data-state", "opened"),
      i.setAttribute("aria-expanded", "true");
  };
function ks(i) {
  const t = $e(),
    s = () => {
      const e = document.getElementById(Ut),
        r = e.getAttribute("data-state");
      !r || r === "closed"
        ? (e.setAttribute("data-state", "opened"),
          e.setAttribute("aria-expanded", "true"))
        : (e.setAttribute("data-state", "closed"),
          e.setAttribute("aria-expanded", "false")),
        t("close");
    };
  return (
    Lt(async () => {
      await Tt(10), bs();
    }),
    [s]
  );
}
class ys extends Y {
  constructor(t) {
    super(), F(this, t, ks, ws, X, {});
  }
}
function Es(i) {
  let t, s;
  return (
    (t = new ce({})),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
function xs(i) {
  let t, s;
  return (
    (t = new jt({
      props: {
        class: "button-hamburger flex",
        size: "icon",
        "aria-controls": "primary-navigation",
        "aria-label": "Open Menu",
        "data-state": "closed",
        "aria-expanded": "false",
        $$slots: { default: [Es] },
        $$scope: { ctx: i },
      },
    })),
    t.$on("click", i[1]),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      p(e, [r]) {
        const n = {};
        r & 4 && (n.$$scope = { dirty: r, ctx: e }), t.$set(n);
      },
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
function Ss(i, t, s) {
  let e;
  return (
    G(i, wt, (n) => s(0, (e = n))),
    [
      e,
      () => {
        Dt(wt, (e = !0), e);
      },
    ]
  );
}
class Ms extends Y {
  constructor(t) {
    super(), F(this, t, Ss, xs, X, {});
  }
}
function Ts(i, t, s) {
  const e = i.slice();
  return (e[3] = t[s]), e;
}
function zs(i) {
  let t = i[3].title + "",
    s;
  return {
    c() {
      s = it(t);
    },
    l(e) {
      s = lt(e, t);
    },
    m(e, r) {
      y(e, s, r);
    },
    p: B,
    d(e) {
      e && u(s);
    },
  };
}
function Ls(i) {
  let t, s, e;
  return (
    (s = new Et({
      props: {
        href: i[3].href,
        $$slots: { default: [zs] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (t = E("li")), T(s.$$.fragment), this.h();
      },
      l(r) {
        t = x(r, "LI", { class: !0 });
        var n = $(t);
        C(s.$$.fragment, n), n.forEach(u), this.h();
      },
      h() {
        o(t, "class", "underline-on-hover");
      },
      m(r, n) {
        y(r, t, n), z(s, t, null), (e = !0);
      },
      p(r, n) {
        const l = {};
        n & 64 && (l.$$scope = { dirty: n, ctx: r }), s.$set(l);
      },
      i(r) {
        e || (v(s.$$.fragment, r), (e = !0));
      },
      o(r) {
        b(s.$$.fragment, r), (e = !1);
      },
      d(r) {
        r && u(t), L(s);
      },
    }
  );
}
function Cs(i) {
  let t, s, e, r, n, l, a, h, c, f;
  (e = new ys({})), e.$on("close", i[2]);
  let _ = Mt(ue),
    m = [];
  for (let g = 0; g < _.length; g += 1) m[g] = Ls(Ts(i, _, g));
  return (
    (h = new ae({})),
    {
      c() {
        (t = E("aside")),
          (s = E("div")),
          T(e.$$.fragment),
          (r = R()),
          (n = E("ul"));
        for (let g = 0; g < m.length; g += 1) m[g].c();
        (l = R()), (a = E("li")), T(h.$$.fragment), this.h();
      },
      l(g) {
        t = x(g, "ASIDE", { class: !0, "data-cursor-style": !0, style: !0 });
        var k = $(t);
        s = x(k, "DIV", { class: !0 });
        var I = $(s);
        C(e.$$.fragment, I),
          I.forEach(u),
          (r = A(k)),
          (n = x(k, "UL", { class: !0 }));
        var P = $(n);
        for (let W = 0; W < m.length; W += 1) m[W].l(P);
        (l = A(P)), (a = x(P, "LI", { class: !0 }));
        var j = $(a);
        C(h.$$.fragment, j), j.forEach(u), P.forEach(u), k.forEach(u), this.h();
      },
      h() {
        o(s, "class", "px-4 py-3 tablet:px-8 desktop:px-36"),
          o(a, "class", "mt-auto pb-2 text-headline-4"),
          o(
            n,
            "class",
            "z-10 my-8 flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden font-light text-neutral-primary-900 text-display-3 tablet:my-0"
          ),
          o(
            t,
            "class",
            (c =
              kt(
                yt(
                  "fixed left-0 top-0 z-[140] flex w-full flex-col duration-500 gradient-primary [--menu-height:85dvh] after:gradient-primary",
                  i[0] ? "open" : "closed"
                )
              ) + " svelte-rhbmpc")
          ),
          o(t, "data-cursor-style", "secondary"),
          tt(t, "--anim-duration", be + "ms");
      },
      m(g, k) {
        y(g, t, k), p(t, s), z(e, s, null), p(t, r), p(t, n);
        for (let I = 0; I < m.length; I += 1) m[I] && m[I].m(n, null);
        p(n, l), p(n, a), z(h, a, null), (f = !0);
      },
      p(g, [k]) {
        (!f ||
          (k & 1 &&
            c !==
              (c =
                kt(
                  yt(
                    "fixed left-0 top-0 z-[140] flex w-full flex-col duration-500 gradient-primary [--menu-height:85dvh] after:gradient-primary",
                    g[0] ? "open" : "closed"
                  )
                ) + " svelte-rhbmpc"))) &&
          o(t, "class", c);
      },
      i(g) {
        if (!f) {
          v(e.$$.fragment, g);
          for (let k = 0; k < _.length; k += 1) v(m[k]);
          v(h.$$.fragment, g), (f = !0);
        }
      },
      o(g) {
        b(e.$$.fragment, g), (m = m.filter(Boolean));
        for (let k = 0; k < m.length; k += 1) b(m[k]);
        b(h.$$.fragment, g), (f = !1);
      },
      d(g) {
        g && u(t), L(e), Rt(m, g), L(h);
      },
    }
  );
}
const be = 500;
function Ns(i, t, s) {
  const e = $e();
  let r = !0;
  return [
    r,
    e,
    async () => {
      s(0, (r = !1)), await Tt(be), e("close");
    },
  ];
}
class Is extends Y {
  constructor(t) {
    super(), F(this, t, Ns, Cs, X, {});
  }
}
function se(i) {
  let t, s;
  return (
    (t = new Is({})),
    t.$on("close", i[1]),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      p: B,
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
function Rs(i) {
  let t,
    s,
    e = i[0] && se(i);
  return {
    c() {
      e && e.c(), (t = ct());
    },
    l(r) {
      e && e.l(r), (t = ct());
    },
    m(r, n) {
      e && e.m(r, n), y(r, t, n), (s = !0);
    },
    p(r, n) {
      r[0]
        ? e
          ? (e.p(r, n), n & 1 && v(e, 1))
          : ((e = se(r)), e.c(), v(e, 1), e.m(t.parentNode, t))
        : e &&
          ($t(),
          b(e, 1, 1, () => {
            e = null;
          }),
          _t());
    },
    i(r) {
      s || (v(e), (s = !0));
    },
    o(r) {
      b(e), (s = !1);
    },
    d(r) {
      r && u(t), e && e.d(r);
    },
  };
}
function As(i) {
  let t, s, e, r;
  return (
    (t = new _s({
      props: {
        target: "body",
        $$slots: { default: [Rs] },
        $$scope: { ctx: i },
      },
    })),
    (e = new Ms({})),
    {
      c() {
        T(t.$$.fragment), (s = R()), T(e.$$.fragment);
      },
      l(n) {
        C(t.$$.fragment, n), (s = A(n)), C(e.$$.fragment, n);
      },
      m(n, l) {
        z(t, n, l), y(n, s, l), z(e, n, l), (r = !0);
      },
      p(n, [l]) {
        const a = {};
        l & 5 && (a.$$scope = { dirty: l, ctx: n }), t.$set(a);
      },
      i(n) {
        r || (v(t.$$.fragment, n), v(e.$$.fragment, n), (r = !0));
      },
      o(n) {
        b(t.$$.fragment, n), b(e.$$.fragment, n), (r = !1);
      },
      d(n) {
        n && u(s), L(t, n), L(e, n);
      },
    }
  );
}
function Os(i, t, s) {
  let e;
  return G(i, wt, (n) => s(0, (e = n))), [e, () => Dt(wt, (e = !1), e)];
}
class Hs extends Y {
  constructor(t) {
    super(), F(this, t, Os, As, X, {});
  }
}
function Ds(i) {
  let t = i[0]("common.cta.1") + "",
    s;
  return {
    c() {
      s = it(t);
    },
    l(e) {
      s = lt(e, t);
    },
    m(e, r) {
      y(e, s, r);
    },
    p(e, r) {
      r & 1 && t !== (t = e[0]("common.cta.1") + "") && bt(s, t);
    },
    d(e) {
      e && u(s);
    },
  };
}
function js(i) {
  let t = i[0]("common.cta.2") + "",
    s;
  return {
    c() {
      s = it(t);
    },
    l(e) {
      s = lt(e, t);
    },
    m(e, r) {
      y(e, s, r);
    },
    p(e, r) {
      r & 1 && t !== (t = e[0]("common.cta.2") + "") && bt(s, t);
    },
    d(e) {
      e && u(s);
    },
  };
}
function Ws(i) {
  let t = i[0]("common.navbar.cta") + "",
    s;
  return {
    c() {
      s = it(t);
    },
    l(e) {
      s = lt(e, t);
    },
    m(e, r) {
      y(e, s, r);
    },
    p(e, r) {
      r & 1 && t !== (t = e[0]("common.navbar.cta") + "") && bt(s, t);
    },
    d(e) {
      e && u(s);
    },
  };
}
function Bs(i) {
  let t, s, e, r, n, l, a, h;
  return (
    (s = new Ge({
      props: {
        feather: 3,
        class:
          "absolute right-[5%] top-[125px] -rotate-90 -scale-x-100 desktop:right-[20%]",
      },
    })),
    (r = new Ke({
      props: {
        as: "div",
        $$slots: { main: [js], secondary: [Ds] },
        $$scope: { ctx: i },
      },
    })),
    (a = new jt({
      props: {
        color: "secondary",
        class: "text-button-cta",
        href: "/contact",
        $$slots: { default: [Ws] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (t = E("div")),
          T(s.$$.fragment),
          (e = R()),
          T(r.$$.fragment),
          (n = R()),
          (l = E("div")),
          T(a.$$.fragment),
          this.h();
      },
      l(c) {
        t = x(c, "DIV", { class: !0 });
        var f = $(t);
        C(s.$$.fragment, f),
          (e = A(f)),
          C(r.$$.fragment, f),
          (n = A(f)),
          (l = x(f, "DIV", { "data-animation": !0, style: !0 }));
        var _ = $(l);
        C(a.$$.fragment, _), _.forEach(u), f.forEach(u), this.h();
      },
      h() {
        o(l, "data-animation", "slide-up-fade"),
          tt(l, "--add-delay", "0.5s"),
          o(
            t,
            "class",
            "relative flex w-full flex-col items-center bg-body-dark pt-20 text-center text-display-2 tablet:pt-40 desktop:pt-52"
          );
      },
      m(c, f) {
        y(c, t, f),
          z(s, t, null),
          p(t, e),
          z(r, t, null),
          p(t, n),
          p(t, l),
          z(a, l, null),
          (h = !0);
      },
      p(c, [f]) {
        const _ = {};
        f & 3 && (_.$$scope = { dirty: f, ctx: c }), r.$set(_);
        const m = {};
        f & 3 && (m.$$scope = { dirty: f, ctx: c }), a.$set(m);
      },
      i(c) {
        h ||
          (v(s.$$.fragment, c),
          v(r.$$.fragment, c),
          v(a.$$.fragment, c),
          (h = !0));
      },
      o(c) {
        b(s.$$.fragment, c), b(r.$$.fragment, c), b(a.$$.fragment, c), (h = !1);
      },
      d(c) {
        c && u(t), L(s), L(r), L(a);
      },
    }
  );
}
function Ps(i, t, s) {
  let e;
  return G(i, zt, (r) => s(0, (e = r))), [e];
}
class Vs extends Y {
  constructor(t) {
    super(), F(this, t, Ps, Bs, X, {});
  }
}
function Us(i) {
  let t, s, e;
  var r = i[0];
  function n(l, a) {
    return {};
  }
  return (
    r && (t = Ot(r, n())),
    {
      c() {
        t && T(t.$$.fragment), (s = ct());
      },
      l(l) {
        t && C(t.$$.fragment, l), (s = ct());
      },
      m(l, a) {
        t && z(t, l, a), y(l, s, a), (e = !0);
      },
      p(l, [a]) {
        if (r !== (r = l[0])) {
          if (t) {
            $t();
            const h = t;
            b(h.$$.fragment, 1, 0, () => {
              L(h, 1);
            }),
              _t();
          }
          r
            ? ((t = Ot(r, n())),
              T(t.$$.fragment),
              v(t.$$.fragment, 1),
              z(t, s.parentNode, s))
            : (t = null);
        }
      },
      i(l) {
        e || (t && v(t.$$.fragment, l), (e = !0));
      },
      o(l) {
        t && b(t.$$.fragment, l), (e = !1);
      },
      d(l) {
        l && u(s), t && L(t, l);
      },
    }
  );
}
function qs(i, t, s) {
  const e = { eye: Qs, chevron: Je };
  let { icon: r } = t;
  const n = e[r];
  return (
    (i.$$set = (l) => {
      "icon" in l && s(1, (r = l.icon));
    }),
    [n, r]
  );
}
class Xs extends Y {
  constructor(t) {
    super(), F(this, t, qs, Us, X, { icon: 1 });
  }
}
function re(i) {
  let t, s, e, r, n;
  const l = [Fs, Ys],
    a = [];
  function h(c, f) {
    return c[4] ? 0 : 1;
  }
  return (
    (s = h(i)),
    (e = a[s] = l[s](i)),
    {
      c() {
        (t = E("div")), e.c(), this.h();
      },
      l(c) {
        t = x(c, "DIV", { class: !0, style: !0 });
        var f = $(t);
        e.l(f), f.forEach(u), this.h();
      },
      h() {
        o(
          t,
          "class",
          (r =
            kt(
              yt(
                "pointer-events-none fixed flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 ease-epic",
                i[3] ? "cursor-interactable h-16" : "h-12",
                i[4] && "cursor-interactable-icon",
                i[5] === "primary" ? "cursor-primary" : "cursor-secondary",
                i[6] ? "z-[150]" : "z-[100]"
              )
            ) + " svelte-1jhpuzw")
        ),
          tt(t, "top", i[1] + "px"),
          tt(t, "left", i[0] + "px");
      },
      m(c, f) {
        y(c, t, f), a[s].m(t, null), (n = !0);
      },
      p(c, f) {
        let _ = s;
        (s = h(c)),
          s === _
            ? a[s].p(c, f)
            : ($t(),
              b(a[_], 1, 1, () => {
                a[_] = null;
              }),
              _t(),
              (e = a[s]),
              e ? e.p(c, f) : ((e = a[s] = l[s](c)), e.c()),
              v(e, 1),
              e.m(t, null)),
          (!n ||
            (f & 120 &&
              r !==
                (r =
                  kt(
                    yt(
                      "pointer-events-none fixed flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 ease-epic",
                      c[3] ? "cursor-interactable h-16" : "h-12",
                      c[4] && "cursor-interactable-icon",
                      c[5] === "primary"
                        ? "cursor-primary"
                        : "cursor-secondary",
                      c[6] ? "z-[150]" : "z-[100]"
                    )
                  ) + " svelte-1jhpuzw"))) &&
            o(t, "class", r),
          (!n || f & 2) && tt(t, "top", c[1] + "px"),
          (!n || f & 1) && tt(t, "left", c[0] + "px");
      },
      i(c) {
        n || (v(e), (n = !0));
      },
      o(c) {
        b(e), (n = !1);
      },
      d(c) {
        c && u(t), a[s].d();
      },
    }
  );
}
function Ys(i) {
  let t;
  return {
    c() {
      (t = E("div")), this.h();
    },
    l(s) {
      (t = x(s, "DIV", { class: !0 })), $(t).forEach(u), this.h();
    },
    h() {
      o(t, "class", "shadow svelte-1jhpuzw");
    },
    m(s, e) {
      y(s, t, e);
    },
    p: B,
    i: B,
    o: B,
    d(s) {
      s && u(t);
    },
  };
}
function Fs(i) {
  let t, s;
  return (
    (t = new Xs({ props: { icon: i[4] } })),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      p(e, r) {
        const n = {};
        r & 16 && (n.icon = e[4]), t.$set(n);
      },
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
function Ks(i) {
  let t,
    s,
    e = i[2] && re(i);
  return {
    c() {
      e && e.c(), (t = ct());
    },
    l(r) {
      e && e.l(r), (t = ct());
    },
    m(r, n) {
      e && e.m(r, n), y(r, t, n), (s = !0);
    },
    p(r, [n]) {
      r[2]
        ? e
          ? (e.p(r, n), n & 4 && v(e, 1))
          : ((e = re(r)), e.c(), v(e, 1), e.m(t.parentNode, t))
        : e &&
          ($t(),
          b(e, 1, 1, () => {
            e = null;
          }),
          _t());
    },
    i(r) {
      s || (v(e), (s = !0));
    },
    o(r) {
      b(e), (s = !1);
    },
    d(r) {
      r && u(t), e && e.d(r);
    },
  };
}
function Gs(i, t, s) {
  let e;
  G(i, wt, (k) => s(6, (e = k)));
  let r = 0,
    n = 0,
    l = 0,
    a = 0,
    h = !1,
    c = !1,
    f = null,
    _ = "primary";
  const m = (k) => {
      (r = k.clientX), (n = k.clientY), s(0, (l = r)), s(1, (a = n));
    },
    g = (k) => {
      var j;
      if (!k.target) return;
      const I = k.target,
        P = (j = getComputedStyle(I)) == null ? void 0 : j.cursor;
      s(3, (c = P !== "auto")),
        s(4, (f = c ? Zt(I, "data-cursor-hover-icon") : null)),
        s(5, (_ = Zt(I, "data-cursor-style") || "primary"));
    };
  return (
    Lt(() => {
      if ((s(2, (h = window.matchMedia("(pointer: fine)").matches)), !h))
        return;
      const k = Oe(m, 50);
      return (
        window.addEventListener("mousemove", k, { passive: !0 }),
        window.addEventListener("mouseover", g, { passive: !0 }),
        () => {
          window.removeEventListener("mousemove", k),
            window.removeEventListener("mouseover", g);
        }
      );
    }),
    [l, a, h, c, f, _, e]
  );
}
class Zs extends Y {
  constructor(t) {
    super(), F(this, t, Gs, Ks, X, {});
  }
}
function Js(i) {
  let t, s, e, r, n, l, a;
  return {
    c() {
      (t = O("svg")),
        (s = O("g")),
        (e = O("path")),
        (r = O("path")),
        (n = O("defs")),
        (l = O("clipPath")),
        (a = O("rect")),
        this.h();
    },
    l(h) {
      t = H(h, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var c = $(t);
      s = H(c, "g", { "clip-path": !0 });
      var f = $(s);
      (e = H(f, "path", {
        d: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      })),
        $(e).forEach(u),
        (r = H(f, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        $(r).forEach(u),
        f.forEach(u),
        (n = H(c, "defs", {}));
      var _ = $(n);
      l = H(_, "clipPath", { id: !0 });
      var m = $(l);
      (a = H(m, "rect", { width: !0, height: !0, fill: !0 })),
        $(a).forEach(u),
        m.forEach(u),
        _.forEach(u),
        c.forEach(u),
        this.h();
    },
    h() {
      o(
        e,
        "d",
        "M15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18Z"
      ),
        o(e, "stroke", "#131518"),
        o(e, "stroke-width", "2"),
        o(e, "stroke-linecap", "round"),
        o(e, "stroke-linejoin", "round"),
        o(
          r,
          "d",
          "M31.5 18C27.9 24 23.4 27 18 27C12.6 27 8.1 24 4.5 18C8.1 12 12.6 9 18 9C23.4 9 27.9 12 31.5 18Z"
        ),
        o(r, "stroke", "#131518"),
        o(r, "stroke-width", "2"),
        o(r, "stroke-linecap", "round"),
        o(r, "stroke-linejoin", "round"),
        o(s, "clip-path", "url(#clip0_651_4117)"),
        o(a, "width", "36"),
        o(a, "height", "36"),
        o(a, "fill", "white"),
        o(l, "id", "clip0_651_4117"),
        o(t, "width", "36"),
        o(t, "height", "36"),
        o(t, "viewBox", "0 0 36 36"),
        o(t, "fill", "none"),
        o(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(h, c) {
      y(h, t, c), p(t, s), p(s, e), p(s, r), p(t, n), p(n, l), p(l, a);
    },
    p: B,
    i: B,
    o: B,
    d(h) {
      h && u(t);
    },
  };
}
class Qs extends Y {
  constructor(t) {
    super(), F(this, t, null, Js, X, {});
  }
}
function tr(i) {
  let t, s, e;
  return {
    c() {
      (t = O("svg")), (s = O("path")), (e = O("path")), this.h();
    },
    l(r) {
      t = H(r, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0,
      });
      var n = $(t);
      (s = H(n, "path", { stroke: !0, d: !0, fill: !0 })),
        $(s).forEach(u),
        (e = H(n, "path", { d: !0 })),
        $(e).forEach(u),
        n.forEach(u),
        this.h();
    },
    h() {
      o(s, "stroke", "none"),
        o(s, "d", "M0 0h24v24H0z"),
        o(s, "fill", "none"),
        o(
          e,
          "d",
          "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
        ),
        o(t, "xmlns", "http://www.w3.org/2000/svg"),
        o(t, "width", "24"),
        o(t, "height", "24"),
        o(t, "viewBox", "0 0 24 24"),
        o(t, "fill", "none"),
        o(t, "stroke", "currentColor"),
        o(t, "stroke-width", "2"),
        o(t, "stroke-linecap", "round"),
        o(t, "stroke-linejoin", "round"),
        o(t, "class", i[0]);
    },
    m(r, n) {
      y(r, t, n), p(t, s), p(t, e);
    },
    p(r, [n]) {
      n & 1 && o(t, "class", r[0]);
    },
    i: B,
    o: B,
    d(r) {
      r && u(t);
    },
  };
}
function er(i, t, s) {
  let { class: e = "" } = t;
  return (
    (i.$$set = (r) => {
      "class" in r && s(0, (e = r.class));
    }),
    [e]
  );
}
class sr extends Y {
  constructor(t) {
    super(), F(this, t, er, tr, X, { class: 0 });
  }
}
function rr(i) {
  let t, s, e, r, n;
  return {
    c() {
      (t = O("svg")),
        (s = O("path")),
        (e = O("path")),
        (r = O("path")),
        (n = O("path")),
        this.h();
    },
    l(l) {
      t = H(l, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0,
      });
      var a = $(t);
      (s = H(a, "path", { stroke: !0, d: !0, fill: !0 })),
        $(s).forEach(u),
        (e = H(a, "path", { d: !0 })),
        $(e).forEach(u),
        (r = H(a, "path", { d: !0 })),
        $(r).forEach(u),
        (n = H(a, "path", { d: !0 })),
        $(n).forEach(u),
        a.forEach(u),
        this.h();
    },
    h() {
      o(s, "stroke", "none"),
        o(s, "d", "M0 0h24v24H0z"),
        o(s, "fill", "none"),
        o(
          e,
          "d",
          "M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
        ),
        o(r, "d", "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"),
        o(n, "d", "M16.5 7.5l0 .01"),
        o(t, "xmlns", "http://www.w3.org/2000/svg"),
        o(t, "width", "24"),
        o(t, "height", "24"),
        o(t, "viewBox", "0 0 24 24"),
        o(t, "fill", "none"),
        o(t, "stroke", "currentColor"),
        o(t, "stroke-width", "2"),
        o(t, "stroke-linecap", "round"),
        o(t, "stroke-linejoin", "round"),
        o(t, "class", i[0]);
    },
    m(l, a) {
      y(l, t, a), p(t, s), p(t, e), p(t, r), p(t, n);
    },
    p(l, [a]) {
      a & 1 && o(t, "class", l[0]);
    },
    i: B,
    o: B,
    d(l) {
      l && u(t);
    },
  };
}
function nr(i, t, s) {
  let { class: e = "" } = t;
  return (
    (i.$$set = (r) => {
      "class" in r && s(0, (e = r.class));
    }),
    [e]
  );
}
class ir extends Y {
  constructor(t) {
    super(), F(this, t, nr, rr, X, { class: 0 });
  }
}
function lr(i) {
  let t, s, e, r, n, l, a;
  return {
    c() {
      (t = O("svg")),
        (s = O("path")),
        (e = O("path")),
        (r = O("path")),
        (n = O("path")),
        (l = O("path")),
        (a = O("path")),
        this.h();
    },
    l(h) {
      t = H(h, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0,
      });
      var c = $(t);
      (s = H(c, "path", { stroke: !0, d: !0, fill: !0 })),
        $(s).forEach(u),
        (e = H(c, "path", { d: !0 })),
        $(e).forEach(u),
        (r = H(c, "path", { d: !0 })),
        $(r).forEach(u),
        (n = H(c, "path", { d: !0 })),
        $(n).forEach(u),
        (l = H(c, "path", { d: !0 })),
        $(l).forEach(u),
        (a = H(c, "path", { d: !0 })),
        $(a).forEach(u),
        c.forEach(u),
        this.h();
    },
    h() {
      o(s, "stroke", "none"),
        o(s, "d", "M0 0h24v24H0z"),
        o(s, "fill", "none"),
        o(
          e,
          "d",
          "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
        ),
        o(r, "d", "M8 11l0 5"),
        o(n, "d", "M8 8l0 .01"),
        o(l, "d", "M12 16l0 -5"),
        o(a, "d", "M16 16v-3a2 2 0 0 0 -4 0"),
        o(t, "xmlns", "http://www.w3.org/2000/svg"),
        o(t, "width", "24"),
        o(t, "height", "24"),
        o(t, "viewBox", "0 0 24 24"),
        o(t, "fill", "none"),
        o(t, "stroke", "currentColor"),
        o(t, "stroke-width", "2"),
        o(t, "stroke-linecap", "round"),
        o(t, "stroke-linejoin", "round"),
        o(t, "class", i[0]);
    },
    m(h, c) {
      y(h, t, c), p(t, s), p(t, e), p(t, r), p(t, n), p(t, l), p(t, a);
    },
    p(h, [c]) {
      c & 1 && o(t, "class", h[0]);
    },
    i: B,
    o: B,
    d(h) {
      h && u(t);
    },
  };
}
function or(i, t, s) {
  let { class: e = "" } = t;
  return (
    (i.$$set = (r) => {
      "class" in r && s(0, (e = r.class));
    }),
    [e]
  );
}
class ar extends Y {
  constructor(t) {
    super(), F(this, t, or, lr, X, { class: 0 });
  }
}
function cr(i) {
  let t, s, e;
  return {
    c() {
      (t = O("svg")), (s = O("path")), (e = O("path")), this.h();
    },
    l(r) {
      t = H(r, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0,
      });
      var n = $(t);
      (s = H(n, "path", { stroke: !0, d: !0, fill: !0 })),
        $(s).forEach(u),
        (e = H(n, "path", { d: !0 })),
        $(e).forEach(u),
        n.forEach(u),
        this.h();
    },
    h() {
      o(s, "stroke", "none"),
        o(s, "d", "M0 0h24v24H0z"),
        o(s, "fill", "none"),
        o(e, "d", "M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"),
        o(t, "xmlns", "http://www.w3.org/2000/svg"),
        o(t, "width", "24"),
        o(t, "height", "24"),
        o(t, "viewBox", "0 0 24 24"),
        o(t, "fill", "none"),
        o(t, "stroke", "currentColor"),
        o(t, "stroke-width", "2"),
        o(t, "stroke-linecap", "round"),
        o(t, "stroke-linejoin", "round"),
        o(t, "class", i[0]);
    },
    m(r, n) {
      y(r, t, n), p(t, s), p(t, e);
    },
    p(r, [n]) {
      n & 1 && o(t, "class", r[0]);
    },
    i: B,
    o: B,
    d(r) {
      r && u(t);
    },
  };
}
function ur(i, t, s) {
  let { class: e = "" } = t;
  return (
    (i.$$set = (r) => {
      "class" in r && s(0, (e = r.class));
    }),
    [e]
  );
}
class hr extends Y {
  constructor(t) {
    super(), F(this, t, ur, cr, X, { class: 0 });
  }
}
function fr(i) {
  let t, s, e, r;
  return {
    c() {
      (t = O("svg")),
        (s = O("path")),
        (e = O("path")),
        (r = O("path")),
        this.h();
    },
    l(n) {
      t = H(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0,
      });
      var l = $(t);
      (s = H(l, "path", { stroke: !0, d: !0, fill: !0 })),
        $(s).forEach(u),
        (e = H(l, "path", { d: !0 })),
        $(e).forEach(u),
        (r = H(l, "path", { d: !0 })),
        $(r).forEach(u),
        l.forEach(u),
        this.h();
    },
    h() {
      o(s, "stroke", "none"),
        o(s, "d", "M0 0h24v24H0z"),
        o(s, "fill", "none"),
        o(e, "d", "M4 4l11.733 16h4.267l-11.733 -16z"),
        o(r, "d", "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"),
        o(t, "xmlns", "http://www.w3.org/2000/svg"),
        o(t, "width", "24"),
        o(t, "height", "24"),
        o(t, "viewBox", "0 0 24 24"),
        o(t, "fill", "none"),
        o(t, "stroke", "currentColor"),
        o(t, "stroke-width", "2"),
        o(t, "stroke-linecap", "round"),
        o(t, "stroke-linejoin", "round"),
        o(t, "class", i[0]);
    },
    m(n, l) {
      y(n, t, l), p(t, s), p(t, e), p(t, r);
    },
    p(n, [l]) {
      l & 1 && o(t, "class", n[0]);
    },
    i: B,
    o: B,
    d(n) {
      n && u(t);
    },
  };
}
function dr(i, t, s) {
  let { class: e = "" } = t;
  return (
    (i.$$set = (r) => {
      "class" in r && s(0, (e = r.class));
    }),
    [e]
  );
}
class pr extends Y {
  constructor(t) {
    super(), F(this, t, dr, fr, X, { class: 0 });
  }
}
function mr(i) {
  let t;
  return {
    c() {
      t = it("ScaleClient");
    },
    l(s) {
      t = lt(s, "ScaleClient");
    },
    m(s, e) {
      y(s, t, e);
    },
    d(s) {
      s && u(t);
    },
  };
}
function gr(i) {
  let t, s, e, r, n, l;
  return (
    (n = new Ze({
      props: {
        animation: "slide-bottom-overflow",
        immediateAnimation: !0,
        $$slots: { default: [mr] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (t = E("img")), (e = R()), (r = E("span")), T(n.$$.fragment), this.h();
      },
      l(a) {
        (t = x(a, "IMG", {
          loading: !0,
          src: !0,
          alt: !0,
          class: !0,
          "data-animation": !0,
          width: !0,
          height: !0,
        })),
          (e = A(a)),
          (r = x(a, "SPAN", { class: !0, style: !0 }));
        var h = $(r);
        C(n.$$.fragment, h), h.forEach(u), this.h();
      },
      h() {
        o(t, "loading", "lazy"),
          _e(t.src, (s = "/images/brand/logo.svg")) || o(t, "src", s),
          o(t, "alt", "Phoexa Logo"),
          o(t, "class", "slide-bottom-fade h-12"),
          o(t, "data-animation", "slide-bottom-fade"),
          o(t, "width", "48"),
          o(t, "height", "43"),
          o(r, "class", "font-thin text-headline-3"),
          tt(r, "--delay", "0.25s");
      },
      m(a, h) {
        y(a, t, h), y(a, e, h), y(a, r, h), z(n, r, null), (l = !0);
      },
      p(a, h) {
        const c = {};
        h & 1 && (c.$$scope = { dirty: h, ctx: a }), n.$set(c);
      },
      i(a) {
        l || (v(n.$$.fragment, a), (l = !0));
      },
      o(a) {
        b(n.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && (u(t), u(e), u(r)), L(n);
      },
    }
  );
}
function $r(i) {
  let t, s;
  return (
    (t = new Et({
      props: {
        class: "flex items-center gap-4",
        href: "/",
        $$slots: { default: [gr] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      p(e, [r]) {
        const n = {};
        r & 1 && (n.$$scope = { dirty: r, ctx: e }), t.$set(n);
      },
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
class _r extends Y {
  constructor(t) {
    super(), F(this, t, null, $r, X, {});
  }
}
function ne(i) {
  let t;
  return {
    c() {
      (t = E("div")), this.h();
    },
    l(s) {
      (t = x(s, "DIV", { class: !0, style: !0 })), $(t).forEach(u), this.h();
    },
    h() {
      o(
        t,
        "class",
        "page-transition-cover fixed top-0 z-[150] w-[100dvw] gradient-primary after:gradient-primary svelte-cvol1n"
      ),
        tt(t, "--anim-duration", qt + "ms"),
        tt(t, "--anim-delay", ke + "ms");
    },
    m(s, e) {
      y(s, t, e);
    },
    p: B,
    d(s) {
      s && u(t);
    },
  };
}
function vr(i) {
  let t,
    s = i[0] && ne();
  return {
    c() {
      s && s.c(), (t = ct());
    },
    l(e) {
      s && s.l(e), (t = ct());
    },
    m(e, r) {
      s && s.m(e, r), y(e, t, r);
    },
    p(e, [r]) {
      e[0]
        ? s
          ? s.p(e, r)
          : ((s = ne()), s.c(), s.m(t.parentNode, t))
        : s && (s.d(1), (s = null));
    },
    i: B,
    o: B,
    d(e) {
      e && u(t), s && s.d(e);
    },
  };
}
const qt = 500,
  ke = 250,
  wr = qt * 2 + ke;
function br(i, t, s) {
  let e;
  return (
    G(i, Ht, (r) => s(0, (e = r))),
    (i.$$.update = () => {
      i.$$.dirty & 1 && e && Tt(wr).then(() => Dt(Ht, (e = !1), e));
    }),
    [e]
  );
}
class kr extends Y {
  constructor(t) {
    super(), F(this, t, br, vr, X, {});
  }
}
function yr(i) {
  let t, s;
  return (
    (t = new ze({ props: { text: Er } })),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      p: B,
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
const Er = "+39 3513666047";
class xr extends Y {
  constructor(t) {
    super(), F(this, t, null, yr, X, {});
  }
}
function Sr(i) {
  let t = i[3]("common.navbar.cta") + "",
    s;
  return {
    c() {
      s = it(t);
    },
    l(e) {
      s = lt(e, t);
    },
    m(e, r) {
      y(e, s, r);
    },
    p(e, r) {
      r & 8 && t !== (t = e[3]("common.navbar.cta") + "") && bt(s, t);
    },
    d(e) {
      e && u(s);
    },
  };
}
function Mr(i) {
  let t, s, e, r, n, l, a, h, c;
  return (
    (s = new _r({})),
    (n = new jt({
      props: {
        variant: "outline",
        href: "/contact",
        class: "hidden tablet:block",
        $$slots: { default: [Sr] },
        $$scope: { ctx: i },
      },
    })),
    (a = new Hs({})),
    {
      c() {
        (t = E("nav")),
          T(s.$$.fragment),
          (e = R()),
          (r = E("div")),
          T(n.$$.fragment),
          (l = R()),
          T(a.$$.fragment),
          this.h();
      },
      l(f) {
        t = x(f, "NAV", { class: !0 });
        var _ = $(t);
        C(s.$$.fragment, _),
          (e = A(_)),
          (r = x(_, "DIV", { class: !0, "data-animation": !0, style: !0 }));
        var m = $(r);
        C(n.$$.fragment, m),
          (l = A(m)),
          C(a.$$.fragment, m),
          m.forEach(u),
          _.forEach(u),
          this.h();
      },
      h() {
        o(r, "class", "slide-right-fade flex items-center gap-6"),
          o(r, "data-animation", "slide-right-fade"),
          tt(r, "--delay", "0.75s"),
          o(
            t,
            "class",
            (h =
              kt(
                yt(
                  "fixed top-0 z-40 flex w-dvw justify-between px-4 py-2 transition-all duration-300 ease-epic tablet:px-8 tablet:py-3 desktop:px-36",
                  !i[2] && "-translate-y-full",
                  i[0] === -1 && "nav-shadow bg-body-dark"
                )
              ) + " svelte-1wt14bs")
          );
      },
      m(f, _) {
        y(f, t, _),
          z(s, t, null),
          p(t, e),
          p(t, r),
          z(n, r, null),
          p(r, l),
          z(a, r, null),
          i[5](t),
          (c = !0);
      },
      p(f, [_]) {
        const m = {};
        _ & 136 && (m.$$scope = { dirty: _, ctx: f }),
          n.$set(m),
          (!c ||
            (_ & 5 &&
              h !==
                (h =
                  kt(
                    yt(
                      "fixed top-0 z-40 flex w-dvw justify-between px-4 py-2 transition-all duration-300 ease-epic tablet:px-8 tablet:py-3 desktop:px-36",
                      !f[2] && "-translate-y-full",
                      f[0] === -1 && "nav-shadow bg-body-dark"
                    )
                  ) + " svelte-1wt14bs"))) &&
            o(t, "class", h);
      },
      i(f) {
        c ||
          (v(s.$$.fragment, f),
          v(n.$$.fragment, f),
          v(a.$$.fragment, f),
          (c = !0));
      },
      o(f) {
        b(s.$$.fragment, f), b(n.$$.fragment, f), b(a.$$.fragment, f), (c = !1);
      },
      d(f) {
        f && u(t), L(s), L(n), L(a), i[5](null);
      },
    }
  );
}
function Tr(i, t, s) {
  let e, r, n;
  G(i, Qt, (f) => s(2, (r = f))), G(i, zt, (f) => s(3, (n = f)));
  let l;
  const { monitorScrollDirection: a, scrollDirection: h } = He();
  G(i, h, (f) => s(0, (e = f))), Lt(() => (he.set(l.clientHeight), a()));
  function c(f) {
    fe[f ? "unshift" : "push"](() => {
      (l = f), s(1, l);
    });
  }
  return (
    (i.$$.update = () => {
      i.$$.dirty & 1 && Dt(Qt, (r = e !== 1), r);
    }),
    [e, l, r, n, h, c]
  );
}
class zr extends Y {
  constructor(t) {
    super(), F(this, t, Tr, Mr, X, {});
  }
}
function ye(i, t, s) {
  return Math.max(i, Math.min(t, s));
}
class Lr {
  advance(t) {
    var a;
    if (!this.isRunning) return;
    let s = !1;
    if (this.lerp)
      (this.value =
        ((e = this.value),
        (r = this.to),
        (n = 60 * this.lerp),
        (l = t),
        (function (h, c, f) {
          return (1 - f) * h + f * c;
        })(e, r, 1 - Math.exp(-n * l)))),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (s = !0));
    else {
      this.currentTime += t;
      const h = ye(0, this.currentTime / this.duration, 1);
      s = h >= 1;
      const c = s ? 1 : this.easing(h);
      this.value = this.from + (this.to - this.from) * c;
    }
    var e, r, n, l;
    (a = this.onUpdate) == null || a.call(this, this.value, s),
      s && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    t,
    s,
    {
      lerp: e = 0.1,
      duration: r = 1,
      easing: n = (h) => h,
      onStart: l,
      onUpdate: a,
    }
  ) {
    (this.from = this.value = t),
      (this.to = s),
      (this.lerp = e),
      (this.duration = r),
      (this.easing = n),
      (this.currentTime = 0),
      (this.isRunning = !0),
      l == null || l(),
      (this.onUpdate = a);
  }
}
class Cr {
  constructor({
    wrapper: t,
    content: s,
    autoResize: e = !0,
    debounce: r = 250,
  } = {}) {
    ht(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    ht(this, "onWrapperResize", () => {
      this.wrapper === window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    });
    ht(this, "onContentResize", () => {
      this.wrapper === window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    });
    (this.wrapper = t),
      (this.content = s),
      e &&
        ((this.debouncedResize = (function (n, l) {
          let a;
          return function () {
            let h = arguments,
              c = this;
            clearTimeout(a),
              (a = setTimeout(function () {
                n.apply(c, h);
              }, l));
          };
        })(this.resize, r)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize();
  }
  destroy() {
    var t, s;
    (t = this.wrapperResizeObserver) == null || t.disconnect(),
      (s = this.contentResizeObserver) == null || s.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class Ee {
  constructor() {
    this.events = {};
  }
  emit(t, ...s) {
    let e = this.events[t] || [];
    for (let r = 0, n = e.length; r < n; r++) e[r](...s);
  }
  on(t, s) {
    var e;
    return (
      ((e = this.events[t]) != null && e.push(s)) || (this.events[t] = [s]),
      () => {
        var r;
        this.events[t] =
          (r = this.events[t]) == null ? void 0 : r.filter((n) => s !== n);
      }
    );
  }
  off(t, s) {
    var e;
    this.events[t] =
      (e = this.events[t]) == null ? void 0 : e.filter((r) => s !== r);
  }
  destroy() {
    this.events = {};
  }
}
const ie = 100 / 6;
class Nr {
  constructor(t, { wheelMultiplier: s = 1, touchMultiplier: e = 1 }) {
    ht(this, "onTouchStart", (t) => {
      const { clientX: s, clientY: e } = t.targetTouches
        ? t.targetTouches[0]
        : t;
      (this.touchStart.x = s),
        (this.touchStart.y = e),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
    });
    ht(this, "onTouchMove", (t) => {
      const { clientX: s, clientY: e } = t.targetTouches
          ? t.targetTouches[0]
          : t,
        r = -(s - this.touchStart.x) * this.touchMultiplier,
        n = -(e - this.touchStart.y) * this.touchMultiplier;
      (this.touchStart.x = s),
        (this.touchStart.y = e),
        (this.lastDelta = { x: r, y: n }),
        this.emitter.emit("scroll", { deltaX: r, deltaY: n, event: t });
    });
    ht(this, "onTouchEnd", (t) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: t,
      });
    });
    ht(this, "onWheel", (t) => {
      let { deltaX: s, deltaY: e, deltaMode: r } = t;
      (s *= r === 1 ? ie : r === 2 ? this.windowWidth : 1),
        (e *= r === 1 ? ie : r === 2 ? this.windowHeight : 1),
        (s *= this.wheelMultiplier),
        (e *= this.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: s, deltaY: e, event: t });
    });
    ht(this, "onWindowResize", () => {
      (this.windowWidth = window.innerWidth),
        (this.windowHeight = window.innerHeight);
    });
    (this.element = t),
      (this.wheelMultiplier = s),
      (this.touchMultiplier = e),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new Ee()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(t, s) {
    return this.emitter.on(t, s);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
}
class Ir {
  constructor({
    wrapper: t = window,
    content: s = document.documentElement,
    wheelEventsTarget: e = t,
    eventsTarget: r = e,
    smoothWheel: n = !0,
    syncTouch: l = !1,
    syncTouchLerp: a = 0.075,
    touchInertiaMultiplier: h = 35,
    duration: c,
    easing: f = (K) => Math.min(1, 1.001 - Math.pow(2, -10 * K)),
    lerp: _ = !c && 0.1,
    infinite: m = !1,
    orientation: g = "vertical",
    gestureOrientation: k = "vertical",
    touchMultiplier: I = 1,
    wheelMultiplier: P = 1,
    autoResize: j = !0,
    __experimental__naiveDimensions: W = !1,
  } = {}) {
    (this.__isSmooth = !1),
      (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.onVirtualScroll = ({ deltaX: K, deltaY: D, event: N }) => {
        if (N.ctrlKey) return;
        const d = N.type.includes("touch"),
          M = N.type.includes("wheel");
        if (
          this.options.syncTouch &&
          d &&
          N.type === "touchstart" &&
          !this.isStopped &&
          !this.isLocked
        )
          return void this.reset();
        const ft = K === 0 && D === 0,
          ot =
            (this.options.gestureOrientation === "vertical" && D === 0) ||
            (this.options.gestureOrientation === "horizontal" && K === 0);
        if (ft || ot) return;
        let dt = N.composedPath();
        if (
          ((dt = dt.slice(0, dt.indexOf(this.rootElement))),
          dt.find((Z) => {
            var mt, st, ut, pt, rt;
            return (
              ((mt = Z.hasAttribute) === null || mt === void 0
                ? void 0
                : mt.call(Z, "data-lenis-prevent")) ||
              (d &&
                ((st = Z.hasAttribute) === null || st === void 0
                  ? void 0
                  : st.call(Z, "data-lenis-prevent-touch"))) ||
              (M &&
                ((ut = Z.hasAttribute) === null || ut === void 0
                  ? void 0
                  : ut.call(Z, "data-lenis-prevent-wheel"))) ||
              (((pt = Z.classList) === null || pt === void 0
                ? void 0
                : pt.contains("lenis")) &&
                !(
                  !((rt = Z.classList) === null || rt === void 0) &&
                  rt.contains("lenis-stopped")
                ))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void N.preventDefault();
        if (
          ((this.isSmooth =
            (this.options.syncTouch && d) || (this.options.smoothWheel && M)),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        N.preventDefault();
        let at = D;
        this.options.gestureOrientation === "both"
          ? (at = Math.abs(D) > Math.abs(K) ? D : K)
          : this.options.gestureOrientation === "horizontal" && (at = K);
        const xt = d && this.options.syncTouch,
          et = d && N.type === "touchend" && Math.abs(at) > 5;
        et && (at = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + at,
            Object.assign(
              { programmatic: !1 },
              xt
                ? { lerp: et ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }
            )
          );
      }),
      (this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const K = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - K)),
            this.emit();
        }
      }),
      (window.lenisVersion = "1.0.42"),
      (t !== document.documentElement && t !== document.body) || (t = window),
      (this.options = {
        wrapper: t,
        content: s,
        wheelEventsTarget: e,
        eventsTarget: r,
        smoothWheel: n,
        syncTouch: l,
        syncTouchLerp: a,
        touchInertiaMultiplier: h,
        duration: c,
        easing: f,
        lerp: _,
        infinite: m,
        gestureOrientation: k,
        orientation: g,
        touchMultiplier: I,
        wheelMultiplier: P,
        autoResize: j,
        __experimental__naiveDimensions: W,
      }),
      (this.animate = new Lr()),
      (this.emitter = new Ee()),
      (this.dimensions = new Cr({ wrapper: t, content: s, autoResize: j })),
      this.toggleClassName("lenis", !0),
      (this.velocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isSmooth = l || n),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      (this.virtualScroll = new Nr(r, {
        touchMultiplier: I,
        wheelMultiplier: P,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.toggleClassName("lenis", !1),
      this.toggleClassName("lenis-smooth", !1),
      this.toggleClassName("lenis-scrolling", !1),
      this.toggleClassName("lenis-stopped", !1),
      this.toggleClassName("lenis-locked", !1);
  }
  on(t, s) {
    return this.emitter.on(t, s);
  }
  off(t, s) {
    return this.emitter.off(t, s);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.velocity = 0),
      this.animate.stop();
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(t) {
    const s = t - (this.time || t);
    (this.time = t), this.animate.advance(0.001 * s);
  }
  scrollTo(
    t,
    {
      offset: s = 0,
      immediate: e = !1,
      lock: r = !1,
      duration: n = this.options.duration,
      easing: l = this.options.easing,
      lerp: a = !n && this.options.lerp,
      onComplete: h,
      force: c = !1,
      programmatic: f = !0,
    } = {}
  ) {
    if ((!this.isStopped && !this.isLocked) || c) {
      if (["top", "left", "start"].includes(t)) t = 0;
      else if (["bottom", "right", "end"].includes(t)) t = this.limit;
      else {
        let _;
        if (
          (typeof t == "string"
            ? (_ = document.querySelector(t))
            : t != null && t.nodeType && (_ = t),
          _)
        ) {
          if (this.options.wrapper !== window) {
            const g = this.options.wrapper.getBoundingClientRect();
            s -= this.isHorizontal ? g.left : g.top;
          }
          const m = _.getBoundingClientRect();
          t = (this.isHorizontal ? m.left : m.top) + this.animatedScroll;
        }
      }
      if (typeof t == "number") {
        if (
          ((t += s),
          (t = Math.round(t)),
          this.options.infinite
            ? f && (this.targetScroll = this.animatedScroll = this.scroll)
            : (t = ye(0, t, this.limit)),
          e)
        )
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            void (h == null || h(this))
          );
        if (!f) {
          if (t === this.targetScroll) return;
          this.targetScroll = t;
        }
        this.animate.fromTo(this.animatedScroll, t, {
          duration: n,
          easing: l,
          lerp: a,
          onStart: () => {
            r && (this.isLocked = !0), (this.isScrolling = !0);
          },
          onUpdate: (_, m) => {
            (this.isScrolling = !0),
              (this.velocity = _ - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = _),
              this.setScroll(this.scroll),
              f && (this.targetScroll = _),
              m || this.emit(),
              m &&
                (this.reset(),
                this.emit(),
                h == null || h(this),
                (this.__preventNextScrollEvent = !0),
                requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent;
                }));
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((t = this.animatedScroll), (s = this.limit), ((t % s) + s) % s)
      : this.animatedScroll;
    var t, s;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(t) {
    this.__isSmooth !== t &&
      ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      ((this.__isScrolling = t), this.toggleClassName("lenis-scrolling", t));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t &&
      ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t &&
      ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
  }
  get className() {
    let t = "lenis";
    return (
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isSmooth && (t += " lenis-smooth"),
      t
    );
  }
  toggleClassName(t, s) {
    this.rootElement.classList.toggle(t, s),
      this.emitter.emit("className change", this);
  }
}
const Rr = (i) => {
  const t = ve(zt)(i);
  return t === i ? null : t;
};
function le(i) {
  let t,
    s = "",
    e,
    r,
    n,
    l = `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-16507257160", { allow_enhanced_conversions: true });`;
  return {
    c() {
      (t = E("script")),
        (t.innerHTML = s),
        (r = R()),
        (n = E("script")),
        (n.textContent = l),
        this.h();
    },
    l(a) {
      (t = x(a, "SCRIPT", { src: !0, "data-svelte-h": !0 })),
        At(t) !== "svelte-jb9eqg" && (t.innerHTML = s),
        (r = A(a)),
        (n = x(a, "SCRIPT", { "data-svelte-h": !0 })),
        At(n) !== "svelte-13zhdi8" && (n.textContent = l),
        this.h();
    },
    h() {
      (t.async = !0),
        _e(
          t.src,
          (e = "https://www.googletagmanager.com/gtag/js?id=AW-16507257160")
        ) || o(t, "src", e);
    },
    m(a, h) {
      y(a, t, h), y(a, r, h), y(a, n, h);
    },
    d(a) {
      a && (u(t), u(r), u(n));
    },
  };
}
function oe(i) {
  let t, s;
  return (
    (t = new Vs({})),
    {
      c() {
        T(t.$$.fragment);
      },
      l(e) {
        C(t.$$.fragment, e);
      },
      m(e, r) {
        z(t, e, r), (s = !0);
      },
      i(e) {
        s || (v(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        b(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        L(t, e);
      },
    }
  );
}
function Ar(i) {
  let t,
    s,
    e,
    r,
    n,
    l,
    a,
    h,
    c,
    f,
    _,
    m,
    g,
    k,
    I,
    P,
    j,
    W = i[1] && le();
  a = new zr({});
  const K = i[8].default,
    D = de(K, i, i[7], null);
  let N = i[0].route.id !== "/contact" && oe();
  return (
    (m = new ps({})),
    (k = new Zs({})),
    (P = new kr({})),
    {
      c() {
        (t = E("meta")),
          (s = E("meta")),
          (e = E("meta")),
          (r = E("link")),
          W && W.c(),
          (n = ct()),
          (l = R()),
          T(a.$$.fragment),
          (h = R()),
          (c = E("main")),
          D && D.c(),
          (f = R()),
          N && N.c(),
          (_ = R()),
          T(m.$$.fragment),
          (g = R()),
          T(k.$$.fragment),
          (I = R()),
          T(P.$$.fragment),
          this.h();
      },
      l(d) {
        const M = Pe("svelte-jgptzq", document.head);
        (t = x(M, "META", { name: !0, content: !0 })),
          (s = x(M, "META", { property: !0, content: !0 })),
          (e = x(M, "META", { name: !0, content: !0 })),
          (r = x(M, "LINK", { rel: !0, href: !0 })),
          W && W.l(M),
          (n = ct()),
          M.forEach(u),
          (l = A(d)),
          C(a.$$.fragment, d),
          (h = A(d)),
          (c = x(d, "MAIN", { class: !0, style: !0 }));
        var ft = $(c);
        D && D.l(ft),
          ft.forEach(u),
          (f = A(d)),
          N && N.l(d),
          (_ = A(d)),
          C(m.$$.fragment, d),
          (g = A(d)),
          C(k.$$.fragment, d),
          (I = A(d)),
          C(P.$$.fragment, d),
          this.h();
      },
      h() {
        o(t, "name", "description"),
          o(t, "content", i[3]),
          o(s, "property", "og:description"),
          o(s, "content", i[3]),
          o(e, "name", "twitter:description"),
          o(e, "content", i[3]),
          o(r, "rel", "canonical"),
          o(r, "href", i[2]),
          o(c, "class", "padding-x relative"),
          tt(c, "margin-top", i[4] + "px");
      },
      m(d, M) {
        p(document.head, t),
          p(document.head, s),
          p(document.head, e),
          p(document.head, r),
          W && W.m(document.head, null),
          p(document.head, n),
          y(d, l, M),
          z(a, d, M),
          y(d, h, M),
          y(d, c, M),
          D && D.m(c, null),
          y(d, f, M),
          N && N.m(d, M),
          y(d, _, M),
          z(m, d, M),
          y(d, g, M),
          z(k, d, M),
          y(d, I, M),
          z(P, d, M),
          (j = !0);
      },
      p(d, [M]) {
        (!j || M & 8) && o(t, "content", d[3]),
          (!j || M & 8) && o(s, "content", d[3]),
          (!j || M & 8) && o(e, "content", d[3]),
          (!j || M & 4) && o(r, "href", d[2]),
          d[1]
            ? W || ((W = le()), W.c(), W.m(n.parentNode, n))
            : W && (W.d(1), (W = null)),
          D &&
            D.p &&
            (!j || M & 128) &&
            pe(D, K, d, d[7], j ? ge(K, d[7], M, null) : me(d[7]), null),
          (!j || M & 16) && tt(c, "margin-top", d[4] + "px"),
          d[0].route.id !== "/contact"
            ? N
              ? M & 1 && v(N, 1)
              : ((N = oe()), N.c(), v(N, 1), N.m(_.parentNode, _))
            : N &&
              ($t(),
              b(N, 1, 1, () => {
                N = null;
              }),
              _t());
      },
      i(d) {
        j ||
          (v(a.$$.fragment, d),
          v(D, d),
          v(N),
          v(m.$$.fragment, d),
          v(k.$$.fragment, d),
          v(P.$$.fragment, d),
          (j = !0));
      },
      o(d) {
        b(a.$$.fragment, d),
          b(D, d),
          b(N),
          b(m.$$.fragment, d),
          b(k.$$.fragment, d),
          b(P.$$.fragment, d),
          (j = !1);
      },
      d(d) {
        d && (u(l), u(h), u(c), u(f), u(_), u(g), u(I)),
          u(t),
          u(s),
          u(e),
          u(r),
          W && W.d(d),
          u(n),
          L(a, d),
          D && D.d(d),
          N && N.d(d),
          L(m, d),
          L(k, d),
          L(P, d);
      },
    }
  );
}
function Or(i, t, s) {
  let e, r, n, l, a, h, c;
  G(i, Qe, (g) => s(0, (n = g))),
    G(i, zt, (g) => s(5, (l = g))),
    G(i, Ve, (g) => s(6, (a = g))),
    G(i, we, (g) => s(9, (h = g))),
    G(i, he, (g) => s(4, (c = g)));
  let { $$slots: f = {}, $$scope: _ } = t,
    m = !1;
  return (
    qe(async ({ type: g, willUnload: k }) => {
      if ((wt.set(!1), k || g === "leave")) return Vt("leave");
      Ht.set(!0), Vt("leave");
    }),
    Xe(async () => {
      ve(Ht) && (await Tt(qt));
    }),
    Ye(() => {
      h.scrollTo(0, { immediate: !0 }), Jt(), Vt("view");
    }),
    Lt(() => {
      Jt();
      const g = new Ir({ duration: 2 });
      Ue(g);
      const k = () => {
        Fe.set(Le());
      };
      return (
        k(),
        window.addEventListener("resize", k, { passive: !0 }),
        Tt(1500).then(() => s(1, (m = !es))),
        () => window.removeEventListener("resize", k)
      );
    }),
    (i.$$set = (g) => {
      "$$scope" in g && s(7, (_ = g.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 96 &&
        s(3, (e = Rr(`${a}.metaDescription`) || l("common.description"))),
        i.$$.dirty & 1 &&
          s(
            2,
            (r =
              n.route.id === "/" && n.url.toString().endsWith("/")
                ? n.url.toString().slice(0, -1)
                : n.url.toString())
          );
    }),
    [n, m, r, e, c, l, a, _, f]
  );
}
class en extends Y {
  constructor(t) {
    super(), F(this, t, Or, Ar, X, {});
  }
}
export { en as component, tn as universal };
