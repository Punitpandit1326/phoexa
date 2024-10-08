import {
  s as _,
  B as w,
  i as h,
  f as u,
  l as C,
  w as z,
  e as E,
  c as p,
  b as k,
  C as A,
  u as W,
  m as L,
  o as T,
  r as G,
  a9 as I,
  L as M,
  z as P,
} from "./scheduler.j3FdVX_3.js";
import { S as j, i as D, t as y, b as g } from "./index.B2YDLXwW.js";
import { c as R } from "./text-animation.svelte_svelte_type_style_lang.PyTsGWbX.js";
function q(t, n) {
  const i = {},
    s = {},
    a = { $$scope: 1 };
  let e = t.length;
  for (; e--; ) {
    const o = t[e],
      r = n[e];
    if (r) {
      for (const l in o) l in r || (s[l] = 1);
      for (const l in r) a[l] || ((i[l] = r[l]), (a[l] = 1));
      t[e] = r;
    } else for (const l in o) a[l] = 1;
  }
  for (const o in s) o in i || (i[o] = void 0);
  return i;
}
function Q(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function N(t) {
  var n,
    i,
    s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var a = t.length;
      for (n = 0; n < a; n++)
        t[n] && (i = N(t[n])) && (s && (s += " "), (s += i));
    } else for (i in t) t[i] && (s && (s += " "), (s += i));
  return s;
}
function B() {
  for (var t, n, i = 0, s = "", a = arguments.length; i < a; i++)
    (t = arguments[i]) && (n = N(t)) && (s && (s += " "), (s += n));
  return s;
}
function v(...t) {
  return R(B(t));
}
function c(t) {
  let n, i, s;
  const a = t[8].default,
    e = C(a, t, t[7], null);
  let o = [
      {
        class: (i = v(
          "inline-block w-fit bg-clip-text font-bold text-transparent [--eclipse-radius:5em]",
          t[2] === "primary" ? "gradient-primary" : "gradient-secondary",
          t[3] && t[4] && "fill-from-below",
          t[5] && "desktop:whitespace-nowrap",
          t[0]
        )),
      },
      t[3] && {
        "data-animation": "fill-from-below",
        style: `--add-delay2: ${t[6]}s`,
      },
    ],
    r = {};
  for (let l = 0; l < o.length; l += 1) r = z(r, o[l]);
  return {
    c() {
      (n = E(t[1])), e && e.c(), this.h();
    },
    l(l) {
      n = p(l, (t[1] || "null").toUpperCase(), { class: !0 });
      var f = k(n);
      e && e.l(f), f.forEach(u), this.h();
    },
    h() {
      A(t[1])(n, r);
    },
    m(l, f) {
      h(l, n, f), e && e.m(n, null), (s = !0);
    },
    p(l, f) {
      e &&
        e.p &&
        (!s || f & 128) &&
        W(e, a, l, l[7], s ? T(a, l[7], f, null) : L(l[7]), null),
        A(l[1])(
          n,
          (r = q(o, [
            (!s ||
              (f & 61 &&
                i !==
                  (i = v(
                    "inline-block w-fit bg-clip-text font-bold text-transparent [--eclipse-radius:5em]",
                    l[2] === "primary"
                      ? "gradient-primary"
                      : "gradient-secondary",
                    l[3] && l[4] && "fill-from-below",
                    l[5] && "desktop:whitespace-nowrap",
                    l[0]
                  )))) && { class: i },
            f & 72 &&
              l[3] && {
                "data-animation": "fill-from-below",
                style: `--add-delay2: ${l[6]}s`,
              },
          ]))
        );
    },
    i(l) {
      s || (y(e, l), (s = !0));
    },
    o(l) {
      g(e, l), (s = !1);
    },
    d(l) {
      l && u(n), e && e.d(l);
    },
  };
}
function U(t) {
  let n = t[1],
    i,
    s,
    a = t[1] && c(t);
  return {
    c() {
      a && a.c(), (i = w());
    },
    l(e) {
      a && a.l(e), (i = w());
    },
    m(e, o) {
      a && a.m(e, o), h(e, i, o), (s = !0);
    },
    p(e, [o]) {
      e[1]
        ? n
          ? _(n, e[1])
            ? (a.d(1), (a = c(e)), (n = e[1]), a.c(), a.m(i.parentNode, i))
            : a.p(e, o)
          : ((a = c(e)), (n = e[1]), a.c(), a.m(i.parentNode, i))
        : n && (a.d(1), (a = null), (n = e[1]));
    },
    i(e) {
      s || (y(a, e), (s = !0));
    },
    o(e) {
      g(a, e), (s = !1);
    },
    d(e) {
      e && u(i), a && a.d(e);
    },
  };
}
function V(t, n, i) {
  let { $$slots: s = {}, $$scope: a } = n,
    { class: e = "" } = n,
    { as: o = "strong" } = n,
    { color: r = "primary" } = n,
    { animated: l = !0 } = n,
    { immediateAnimation: f = !1 } = n,
    { noWordWrap: m = !1 } = n,
    { delay: b = 0 } = n;
  return (
    (t.$$set = (d) => {
      "class" in d && i(0, (e = d.class)),
        "as" in d && i(1, (o = d.as)),
        "color" in d && i(2, (r = d.color)),
        "animated" in d && i(3, (l = d.animated)),
        "immediateAnimation" in d && i(4, (f = d.immediateAnimation)),
        "noWordWrap" in d && i(5, (m = d.noWordWrap)),
        "delay" in d && i(6, (b = d.delay)),
        "$$scope" in d && i(7, (a = d.$$scope));
    }),
    [e, o, r, l, f, m, b, a, s]
  );
}
class X extends j {
  constructor(n) {
    super(),
      D(this, n, V, U, _, {
        class: 0,
        as: 1,
        color: 2,
        animated: 3,
        immediateAnimation: 4,
        noWordWrap: 5,
        delay: 6,
      });
  }
}
function Y(t) {
  let n, i;
  const s = t[4].default,
    a = C(s, t, t[3], null);
  return {
    c() {
      (n = E("div")), a && a.c(), this.h();
    },
    l(e) {
      n = p(e, "DIV", { class: !0 });
      var o = k(n);
      a && a.l(o), o.forEach(u), this.h();
    },
    h() {
      G(
        n,
        "class",
        "flex flex-wrap gap-x-[0.25em] [--anim-duration:0.3s] svelte-hddzt0"
      );
    },
    m(e, o) {
      h(e, n, o), a && a.m(n, null), t[5](n), (i = !0);
    },
    p(e, [o]) {
      a &&
        a.p &&
        (!i || o & 8) &&
        W(a, s, e, e[3], i ? T(s, e[3], o, null) : L(e[3]), null);
    },
    i(e) {
      i || (y(a, e), (i = !0));
    },
    o(e) {
      g(a, e), (i = !1);
    },
    d(e) {
      e && u(n), a && a.d(e), t[5](null);
    },
  };
}
const S = 0.03,
  F = (t, n, i) => {
    const s = t.textContent || "";
    t.textContent = "";
    const a = s.split(" ");
    let e = 1;
    a.forEach((o) => {
      const r = document.createElement("div");
      r.classList.add("flex"),
        Array.from(o).forEach((l) => {
          const f = document.createElement("div");
          f.style.setProperty("--add-delay2", `${S * e++}s`),
            f.setAttribute("data-animation", n),
            i && f.classList.add(n);
          const m = document.createElement("span");
          (m.textContent = l === " " ? " " : l),
            f.appendChild(m),
            r.appendChild(f);
        }),
        t.appendChild(r);
    });
  };
function H(t, n, i) {
  let { $$slots: s = {}, $$scope: a } = n,
    { animation: e = "slide-up-overflow" } = n,
    { immediateAnimation: o = !1 } = n,
    r;
  const l = I();
  M(() => {
    var m;
    l("length", {
      length: (((m = r.textContent) == null ? void 0 : m.length) || 0) * S,
    }),
      F(r, e, o);
  });
  function f(m) {
    P[m ? "unshift" : "push"](() => {
      (r = m), i(0, r);
    });
  }
  return (
    (t.$$set = (m) => {
      "animation" in m && i(1, (e = m.animation)),
        "immediateAnimation" in m && i(2, (o = m.immediateAnimation)),
        "$$scope" in m && i(3, (a = m.$$scope));
    }),
    [r, e, o, a, s, f]
  );
}
class Z extends j {
  constructor(n) {
    super(), D(this, n, H, Y, _, { animation: 1, immediateAnimation: 2 });
  }
}
export { X as G, Z as T, Q as a, v as c, q as g };
