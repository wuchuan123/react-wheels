(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    F4QJ: function(e, t, r) {
      'use strict';
      function n() {
        var e = u(r('q1tI'));
        return (
          (n = function() {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = r('dEAq');
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function(t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t['default'] = void 0);
      var p = function(e, t) {
        var r = [],
          u = e.match.params.uuid,
          c = void 0 === e.location.query.wrapper,
          a = t[u];
        if (a) {
          var p = i(
            i({}, a.previewerProps),
            {},
            {
              hideActions: (a.previewerProps.hideActions || []).concat([
                'EXTERNAL',
              ]),
            },
          );
          void 0 !== e.location.query.capture &&
            ((p.motions = (p.motions || []).slice()),
            p.motions.unshift('autoplay'),
            p.motions.every(function(e) {
              return !e.startsWith('capture');
            }) && p.motions.push('capture:[id|=root]')),
            (r = c
              ? [
                  n()['default'].createElement(function() {
                    return (
                      (0, o().useMotions)(
                        p.motions || [],
                        document.documentElement,
                      ),
                      n()['default'].createElement(
                        'div',
                        {},
                        n()['default'].createElement(a.component),
                      )
                    );
                  }),
                ]
              : [p, n()['default'].createElement(a.component)]);
        }
        return r;
      };
      t['default'] = p;
    },
  },
]);
