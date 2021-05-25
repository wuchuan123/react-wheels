(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    '0zqC': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('tJVT'),
        o = n('q1tI'),
        i = n.n(o),
        a = n('wx14'),
        s = n('rePB'),
        l = n('ODXe'),
        c = n('U8pU'),
        u = n('Ff2n'),
        p = n('VTBJ'),
        d = n('TSYQ'),
        f = n.n(d),
        h = n('Zm9Q'),
        m = function() {
          if ('undefined' === typeof navigator || 'undefined' === typeof window)
            return !1;
          var e = navigator.userAgent || navigator.vendor || window.opera;
          return !(
            !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              e,
            ) &&
            !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
              e.substr(0, 4),
            )
          );
        };
      function b(e, t) {
        var n = t || {},
          r = n.defaultValue,
          i = n.value,
          a = n.onChange,
          s = n.postState,
          c = o['useState'](function() {
            return void 0 !== i
              ? i
              : void 0 !== r
              ? 'function' === typeof r
                ? r()
                : r
              : 'function' === typeof e
              ? e()
              : e;
          }),
          u = Object(l['a'])(c, 2),
          p = u[0],
          d = u[1],
          f = void 0 !== i ? i : p;
        function h(e) {
          d(e), f !== e && a && a(e, f);
        }
        s && (f = s(f));
        var m = o['useRef'](!0);
        return (
          o['useEffect'](
            function() {
              m.current ? (m.current = !1) : void 0 === i && d(i);
            },
            [i],
          ),
          [f, h]
        );
      }
      var g = n('KQm4'),
        v = n('wgJM'),
        y = n('1OyB'),
        O = n('vuIU'),
        E = n('Ji7U'),
        w = n('LK+K'),
        k = n('m+aA'),
        S = n('Kwbf'),
        C = n('c+Xe'),
        T = n('bdgK'),
        M = 'rc-observer-key',
        A = (function(e) {
          Object(E['a'])(n, e);
          var t = Object(w['a'])(n);
          function n() {
            var e;
            return (
              Object(y['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.resizeObserver = null),
              (e.childNode = null),
              (e.currentElement = null),
              (e.state = {
                width: 0,
                height: 0,
                offsetHeight: 0,
                offsetWidth: 0,
              }),
              (e.onResize = function(t) {
                var n = e.props.onResize,
                  r = t[0].target,
                  o = r.getBoundingClientRect(),
                  i = o.width,
                  a = o.height,
                  s = r.offsetWidth,
                  l = r.offsetHeight,
                  c = Math.floor(i),
                  u = Math.floor(a);
                if (
                  e.state.width !== c ||
                  e.state.height !== u ||
                  e.state.offsetWidth !== s ||
                  e.state.offsetHeight !== l
                ) {
                  var d = {
                    width: c,
                    height: u,
                    offsetWidth: s,
                    offsetHeight: l,
                  };
                  e.setState(d),
                    n &&
                      Promise.resolve().then(function() {
                        n(
                          Object(p['a'])(
                            Object(p['a'])({}, d),
                            {},
                            { offsetWidth: s, offsetHeight: l },
                          ),
                          r,
                        );
                      });
                }
              }),
              (e.setChildNode = function(t) {
                e.childNode = t;
              }),
              e
            );
          }
          return (
            Object(O['a'])(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.destroyObserver();
                },
              },
              {
                key: 'onComponentUpdated',
                value: function() {
                  var e = this.props.disabled;
                  if (e) this.destroyObserver();
                  else {
                    var t = Object(k['a'])(this.childNode || this),
                      n = t !== this.currentElement;
                    n && (this.destroyObserver(), (this.currentElement = t)),
                      !this.resizeObserver &&
                        t &&
                        ((this.resizeObserver = new T['a'](this.onResize)),
                        this.resizeObserver.observe(t));
                  }
                },
              },
              {
                key: 'destroyObserver',
                value: function() {
                  this.resizeObserver &&
                    (this.resizeObserver.disconnect(),
                    (this.resizeObserver = null));
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.children,
                    t = Object(h['a'])(e);
                  if (t.length > 1)
                    Object(S['a'])(
                      !1,
                      'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
                    );
                  else if (0 === t.length)
                    return (
                      Object(S['a'])(
                        !1,
                        '`children` of ResizeObserver is empty. Nothing is in observe.',
                      ),
                      null
                    );
                  var n = t[0];
                  if (o['isValidElement'](n) && Object(C['c'])(n)) {
                    var r = n.ref;
                    t[0] = o['cloneElement'](n, {
                      ref: Object(C['a'])(r, this.setChildNode),
                    });
                  }
                  return 1 === t.length
                    ? t[0]
                    : t.map(function(e, t) {
                        return !o['isValidElement'](e) ||
                          ('key' in e && null !== e.key)
                          ? e
                          : o['cloneElement'](e, {
                              key: ''.concat(M, '-').concat(t),
                            });
                      });
                },
              },
            ]),
            n
          );
        })(o['Component']);
      A.displayName = 'ResizeObserver';
      var x = A;
      function N(e) {
        var t = Object(o['useRef'])(),
          n = Object(o['useRef'])(!1);
        function r() {
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          n.current ||
            (v['a'].cancel(t.current),
            (t.current = Object(v['a'])(function() {
              e.apply(void 0, o);
            })));
        }
        return (
          Object(o['useEffect'])(function() {
            return function() {
              (n.current = !0), v['a'].cancel(t.current);
            };
          }, []),
          r
        );
      }
      function _(e) {
        var t = Object(o['useRef'])([]),
          n = Object(o['useState'])({}),
          r = Object(l['a'])(n, 2),
          i = r[1],
          a = Object(o['useRef'])('function' === typeof e ? e() : e),
          s = N(function() {
            var e = a.current;
            t.current.forEach(function(t) {
              e = t(e);
            }),
              (t.current = []),
              (a.current = e),
              i({});
          });
        function c(e) {
          t.current.push(e), s();
        }
        return [a.current, c];
      }
      var j = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function(e) {
            var t = e.keyCode;
            if (
              (e.altKey && !e.ctrlKey) ||
              e.metaKey ||
              (t >= j.F1 && t <= j.F12)
            )
              return !1;
            switch (t) {
              case j.ALT:
              case j.CAPS_LOCK:
              case j.CONTEXT_MENU:
              case j.CTRL:
              case j.DOWN:
              case j.END:
              case j.ESC:
              case j.HOME:
              case j.INSERT:
              case j.LEFT:
              case j.MAC_FF_META:
              case j.META:
              case j.NUMLOCK:
              case j.NUM_CENTER:
              case j.PAGE_DOWN:
              case j.PAGE_UP:
              case j.PAUSE:
              case j.PRINT_SCREEN:
              case j.RIGHT:
              case j.SHIFT:
              case j.UP:
              case j.WIN_KEY:
              case j.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function(e) {
            if (e >= j.ZERO && e <= j.NINE) return !0;
            if (e >= j.NUM_ZERO && e <= j.NUM_MULTIPLY) return !0;
            if (e >= j.A && e <= j.Z) return !0;
            if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
              return !0;
            switch (e) {
              case j.SPACE:
              case j.QUESTION_MARK:
              case j.NUM_PLUS:
              case j.NUM_MINUS:
              case j.NUM_PERIOD:
              case j.NUM_DIVISION:
              case j.SEMICOLON:
              case j.DASH:
              case j.EQUALS:
              case j.COMMA:
              case j.PERIOD:
              case j.SLASH:
              case j.APOSTROPHE:
              case j.SINGLE_QUOTE:
              case j.OPEN_SQUARE_BRACKET:
              case j.BACKSLASH:
              case j.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        I = j;
      function R(e, t) {
        var n,
          r = e.prefixCls,
          i = e.id,
          a = e.active,
          l = e.rtl,
          c = e.tab,
          u = c.key,
          p = c.tab,
          d = c.disabled,
          h = c.closeIcon,
          m = e.tabBarGutter,
          b = e.tabPosition,
          g = e.closable,
          v = e.renderWrapper,
          y = e.removeAriaLabel,
          O = e.editable,
          E = e.onClick,
          w = e.onRemove,
          k = e.onFocus,
          S = ''.concat(r, '-tab');
        o['useEffect'](function() {
          return w;
        }, []);
        var C = {};
        'top' === b || 'bottom' === b
          ? (C[l ? 'marginLeft' : 'marginRight'] = m)
          : (C.marginBottom = m);
        var T = O && !1 !== g && !d;
        function M(e) {
          d || E(e);
        }
        function A(e) {
          e.preventDefault(),
            e.stopPropagation(),
            O.onEdit('remove', { key: u, event: e });
        }
        var x = o['createElement'](
          'div',
          {
            key: u,
            ref: t,
            className: f()(
              S,
              ((n = {}),
              Object(s['a'])(n, ''.concat(S, '-with-remove'), T),
              Object(s['a'])(n, ''.concat(S, '-active'), a),
              Object(s['a'])(n, ''.concat(S, '-disabled'), d),
              n),
            ),
            style: C,
            onClick: M,
          },
          o['createElement'](
            'div',
            {
              role: 'tab',
              'aria-selected': a,
              id: i && ''.concat(i, '-tab-').concat(u),
              className: ''.concat(S, '-btn'),
              'aria-controls': i && ''.concat(i, '-panel-').concat(u),
              'aria-disabled': d,
              tabIndex: d ? null : 0,
              onClick: function(e) {
                e.stopPropagation(), M(e);
              },
              onKeyDown: function(e) {
                [I.SPACE, I.ENTER].includes(e.which) &&
                  (e.preventDefault(), M(e));
              },
              onFocus: k,
            },
            p,
          ),
          T &&
            o['createElement'](
              'button',
              {
                type: 'button',
                'aria-label': y || 'remove',
                tabIndex: 0,
                className: ''.concat(S, '-remove'),
                onClick: function(e) {
                  e.stopPropagation(), A(e);
                },
              },
              h || O.removeIcon || '\xd7',
            ),
        );
        return v && (x = v(x)), x;
      }
      var P = o['forwardRef'](R),
        D = { width: 0, height: 0, left: 0, top: 0 };
      function L(e, t, n) {
        return Object(o['useMemo'])(
          function() {
            for (
              var n,
                r = new Map(),
                o =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  D,
                i = o.left + o.width,
                a = 0;
              a < e.length;
              a += 1
            ) {
              var s,
                l = e[a].key,
                c = t.get(l);
              if (!c)
                c =
                  t.get(
                    null === (s = e[a - 1]) || void 0 === s ? void 0 : s.key,
                  ) || D;
              var u = r.get(l) || Object(p['a'])({}, c);
              (u.right = i - u.left - u.width), r.set(l, u);
            }
            return r;
          },
          [
            e
              .map(function(e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var F = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function B(e, t, n, r, i) {
        var a,
          s,
          l,
          c = i.tabs,
          u = i.tabPosition,
          p = i.rtl;
        ['top', 'bottom'].includes(u)
          ? ((a = 'width'), (s = p ? 'right' : 'left'), (l = Math.abs(t.left)))
          : ((a = 'height'), (s = 'top'), (l = -t.top));
        var d = t[a],
          f = n[a],
          h = r[a],
          m = d;
        return (
          f + h > d && (m = d - h),
          Object(o['useMemo'])(
            function() {
              if (!c.length) return [0, 0];
              for (var t = c.length, n = t, r = 0; r < t; r += 1) {
                var o = e.get(c[r].key) || F;
                if (o[s] + o[a] > l + m) {
                  n = r - 1;
                  break;
                }
              }
              for (var i = 0, u = t - 1; u >= 0; u -= 1) {
                var p = e.get(c[u].key) || F;
                if (p[s] < l) {
                  i = u + 1;
                  break;
                }
              }
              return [i, n];
            },
            [
              e,
              l,
              m,
              u,
              c
                .map(function(e) {
                  return e.key;
                })
                .join('_'),
              p,
            ],
          )
        );
      }
      var K = n('JX7q'),
        U = (function() {
          var e = function(t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        H = o['createContext'](null),
        G = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            U(t, e),
            (t.prototype.render = function() {
              return o['createElement'](
                H.Provider,
                { value: this.props.store },
                this.props.children,
              );
            }),
            t
          );
        })(o['Component']),
        $ = n('Gytx'),
        z = n.n($),
        W = n('2mql'),
        V = n.n(W),
        Y = (function() {
          var e = function(t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        X = function() {
          return (
            (X =
              Object.assign ||
              function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            X.apply(this, arguments)
          );
        };
      function q(e) {
        return e.displayName || e.name || 'Component';
      }
      var Z = function() {
        return {};
      };
      function Q(e, t) {
        void 0 === t && (t = {});
        var n = !!e,
          r = e || Z;
        return function(i) {
          var a = (function(t) {
            function a(e, n) {
              var o = t.call(this, e, n) || this;
              return (
                (o.unsubscribe = null),
                (o.handleChange = function() {
                  if (o.unsubscribe) {
                    var e = r(o.store.getState(), o.props);
                    o.setState({ subscribed: e });
                  }
                }),
                (o.store = o.context),
                (o.state = {
                  subscribed: r(o.store.getState(), e),
                  store: o.store,
                  props: e,
                }),
                o
              );
            }
            return (
              Y(a, t),
              (a.getDerivedStateFromProps = function(t, n) {
                return e && 2 === e.length && t !== n.props
                  ? { subscribed: r(n.store.getState(), t), props: t }
                  : { props: t };
              }),
              (a.prototype.componentDidMount = function() {
                this.trySubscribe();
              }),
              (a.prototype.componentWillUnmount = function() {
                this.tryUnsubscribe();
              }),
              (a.prototype.shouldComponentUpdate = function(e, t) {
                return (
                  !z()(this.props, e) ||
                  !z()(this.state.subscribed, t.subscribed)
                );
              }),
              (a.prototype.trySubscribe = function() {
                n &&
                  ((this.unsubscribe = this.store.subscribe(this.handleChange)),
                  this.handleChange());
              }),
              (a.prototype.tryUnsubscribe = function() {
                this.unsubscribe &&
                  (this.unsubscribe(), (this.unsubscribe = null));
              }),
              (a.prototype.render = function() {
                var e = X(X(X({}, this.props), this.state.subscribed), {
                  store: this.store,
                });
                return o['createElement'](
                  i,
                  X({}, e, { ref: this.props.miniStoreForwardedRef }),
                );
              }),
              (a.displayName = 'Connect(' + q(i) + ')'),
              (a.contextType = H),
              a
            );
          })(o['Component']);
          if (t.forwardRef) {
            var s = o['forwardRef'](function(e, t) {
              return o['createElement'](
                a,
                X({}, e, { miniStoreForwardedRef: t }),
              );
            });
            return V()(s, i);
          }
          return V()(a, i);
        };
      }
      var J = function() {
        return (
          (J =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          J.apply(this, arguments)
        );
      };
      function ee(e) {
        var t = e,
          n = [];
        function r(e) {
          t = J(J({}, t), e);
          for (var r = 0; r < n.length; r++) n[r]();
        }
        function o() {
          return t;
        }
        function i(e) {
          return (
            n.push(e),
            function() {
              var t = n.indexOf(e);
              n.splice(t, 1);
            }
          );
        }
        return { setState: r, getState: o, subscribe: i };
      }
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function(t) {
                Object(s['a'])(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function re(e, t) {
        var n = ne({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function(e) {
              delete n[e];
            }),
          n
        );
      }
      function oe() {
        var e = [].slice.call(arguments, 0);
        return 1 === e.length
          ? e[0]
          : function() {
              for (var t = 0; t < e.length; t++)
                e[t] && e[t].apply && e[t].apply(this, arguments);
            };
      }
      var ie = /iPhone/i,
        ae = /iPod/i,
        se = /iPad/i,
        le = /\bAndroid(?:.+)Mobile\b/i,
        ce = /Android/i,
        ue = /\bAndroid(?:.+)SD4930UR\b/i,
        pe = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
        de = /Windows Phone/i,
        fe = /\bWindows(?:.+)ARM\b/i,
        he = /BlackBerry/i,
        me = /BB10/i,
        be = /Opera Mini/i,
        ge = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        ve = /Mobile(?:.+)Firefox\b/i;
      function ye(e, t) {
        return e.test(t);
      }
      function Oe(e) {
        var t =
            e || ('undefined' !== typeof navigator ? navigator.userAgent : ''),
          n = t.split('[FBAN');
        if ('undefined' !== typeof n[1]) {
          var r = n,
            o = Object(l['a'])(r, 1);
          t = o[0];
        }
        if (((n = t.split('Twitter')), 'undefined' !== typeof n[1])) {
          var i = n,
            a = Object(l['a'])(i, 1);
          t = a[0];
        }
        var s = {
          apple: {
            phone: ye(ie, t) && !ye(de, t),
            ipod: ye(ae, t),
            tablet: !ye(ie, t) && ye(se, t) && !ye(de, t),
            device: (ye(ie, t) || ye(ae, t) || ye(se, t)) && !ye(de, t),
          },
          amazon: {
            phone: ye(ue, t),
            tablet: !ye(ue, t) && ye(pe, t),
            device: ye(ue, t) || ye(pe, t),
          },
          android: {
            phone: (!ye(de, t) && ye(ue, t)) || (!ye(de, t) && ye(le, t)),
            tablet:
              !ye(de, t) &&
              !ye(ue, t) &&
              !ye(le, t) &&
              (ye(pe, t) || ye(ce, t)),
            device:
              (!ye(de, t) &&
                (ye(ue, t) || ye(pe, t) || ye(le, t) || ye(ce, t))) ||
              ye(/\bokhttp\b/i, t),
          },
          windows: {
            phone: ye(de, t),
            tablet: ye(fe, t),
            device: ye(de, t) || ye(fe, t),
          },
          other: {
            blackberry: ye(he, t),
            blackberry10: ye(me, t),
            opera: ye(be, t),
            firefox: ye(ve, t),
            chrome: ye(ge, t),
            device:
              ye(he, t) || ye(me, t) || ye(be, t) || ye(ve, t) || ye(ge, t),
          },
          any: null,
          phone: null,
          tablet: null,
        };
        return (
          (s.any =
            s.apple.device ||
            s.android.device ||
            s.windows.device ||
            s.other.device),
          (s.phone = s.apple.phone || s.android.phone || s.windows.phone),
          (s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet),
          s
        );
      }
      var Ee = Object(p['a'])(Object(p['a'])({}, Oe()), {}, { isMobile: Oe }),
        we = Ee;
      function ke() {}
      function Se(e, t, n) {
        var r = t || '';
        return e.key || ''.concat(r, 'item_').concat(n);
      }
      function Ce(e) {
        return ''.concat(e, '-menu-');
      }
      function Te(e, t) {
        var n = -1;
        o['Children'].forEach(e, function(e) {
          (n += 1),
            e && e.type && e.type.isMenuItemGroup
              ? o['Children'].forEach(e.props.children, function(e) {
                  (n += 1), t(e, n);
                })
              : t(e, n);
        });
      }
      function Me(e, t, n) {
        e &&
          !n.find &&
          o['Children'].forEach(e, function(e) {
            if (e) {
              var r = e.type;
              if (!r || !(r.isSubMenu || r.isMenuItem || r.isMenuItemGroup))
                return;
              -1 !== t.indexOf(e.key)
                ? (n.find = !0)
                : e.props.children && Me(e.props.children, t, n);
            }
          });
      }
      var Ae = [
          'defaultSelectedKeys',
          'selectedKeys',
          'defaultOpenKeys',
          'openKeys',
          'mode',
          'getPopupContainer',
          'onSelect',
          'onDeselect',
          'onDestroy',
          'openTransitionName',
          'openAnimation',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'triggerSubMenuAction',
          'level',
          'selectable',
          'multiple',
          'onOpenChange',
          'visible',
          'focusable',
          'defaultActiveFirst',
          'prefixCls',
          'inlineIndent',
          'parentMenu',
          'title',
          'rootPrefixCls',
          'eventKey',
          'active',
          'onItemHover',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
          'onTitleClick',
          'popupAlign',
          'popupOffset',
          'isOpen',
          'renderMenuItem',
          'manualRef',
          'subMenuKey',
          'disabled',
          'index',
          'isSelected',
          'store',
          'activeKey',
          'builtinPlacements',
          'overflowedIndicator',
          'motion',
          'attribute',
          'value',
          'popupClassName',
          'inlineCollapsed',
          'menu',
          'theme',
          'itemIcon',
          'expandIcon',
        ],
        xe = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              e &&
              'function' === typeof e.getBoundingClientRect &&
              e.getBoundingClientRect().width;
          if (n) {
            if (t) {
              var r = getComputedStyle(e),
                o = r.marginLeft,
                i = r.marginRight;
              n += +o.replace('px', '') + +i.replace('px', '');
            }
            n = +n.toFixed(6);
          }
          return n || 0;
        },
        Ne = function(e, t, n) {
          e && 'object' === Object(c['a'])(e.style) && (e.style[t] = n);
        },
        _e = function() {
          return we.any;
        },
        je = n('i8i4'),
        Ie = n.n(je);
      function Re(e, t) {
        return !!e && e.contains(t);
      }
      function Pe(e, t, n, r) {
        var o = Ie.a.unstable_batchedUpdates
          ? function(e) {
              Ie.a.unstable_batchedUpdates(n, e);
            }
          : n;
        return (
          e.addEventListener && e.addEventListener(t, o, r),
          {
            remove: function() {
              e.removeEventListener && e.removeEventListener(t, o);
            },
          }
        );
      }
      var De = n('MNnm'),
        Le = Object(o['forwardRef'])(function(e, t) {
          var n = e.didUpdate,
            r = e.getContainer,
            i = e.children,
            a = Object(o['useRef'])();
          Object(o['useImperativeHandle'])(t, function() {
            return {};
          });
          var s = Object(o['useRef'])(!1);
          return (
            !s.current &&
              Object(De['a'])() &&
              ((a.current = r()), (s.current = !0)),
            Object(o['useEffect'])(function() {
              null === n || void 0 === n || n(e);
            }),
            Object(o['useEffect'])(function() {
              return function() {
                var e, t;
                null === (e = a.current) ||
                  void 0 === e ||
                  null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.removeChild(a.current);
              };
            }, []),
            a.current ? Ie.a.createPortal(i, a.current) : null
          );
        }),
        Fe = Le;
      function Be(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
      }
      function Ke(e, t, n) {
        var r = e[t] || {};
        return Object(p['a'])(Object(p['a'])({}, r), n);
      }
      function Ue(e, t, n, r) {
        for (
          var o = n.points, i = Object.keys(e), a = 0;
          a < i.length;
          a += 1
        ) {
          var s = i[a];
          if (Be(e[s].points, o, r))
            return ''.concat(t, '-placement-').concat(s);
        }
        return '';
      }
      var He = n('8XRh');
      function Ge(e) {
        var t = e.prefixCls,
          n = e.motion,
          r = e.animation,
          o = e.transitionName;
        return (
          n ||
          (r
            ? { motionName: ''.concat(t, '-').concat(r) }
            : o
            ? { motionName: o }
            : null)
        );
      }
      function $e(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.zIndex,
          i = e.mask,
          s = e.maskMotion,
          l = e.maskAnimation,
          c = e.maskTransitionName;
        if (!i) return null;
        var u = {};
        return (
          (s || c || l) &&
            (u = Object(p['a'])(
              { motionAppear: !0 },
              Ge({ motion: s, prefixCls: t, transitionName: c, animation: l }),
            )),
          o['createElement'](
            He['b'],
            Object(a['a'])({}, u, { visible: n, removeOnLeave: !0 }),
            function(e) {
              var n = e.className;
              return o['createElement']('div', {
                style: { zIndex: r },
                className: f()(''.concat(t, '-mask'), n),
              });
            },
          )
        );
      }
      var ze,
        We = function(e) {
          if (!e) return !1;
          if (e.offsetParent) return !0;
          if (e.getBBox) {
            var t = e.getBBox();
            if (t.width || t.height) return !0;
          }
          if (e.getBoundingClientRect) {
            var n = e.getBoundingClientRect();
            if (n.width || n.height) return !0;
          }
          return !1;
        };
      function Ve(e) {
        return (
          (Ve =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Ve(e)
        );
      }
      function Ye(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Xe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Xe(n, !0).forEach(function(t) {
                Ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var Ze = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
      function Qe() {
        if (void 0 !== ze) return ze;
        ze = '';
        var e = document.createElement('p').style,
          t = 'Transform';
        for (var n in Ze) n + t in e && (ze = n);
        return ze;
      }
      function Je() {
        return Qe()
          ? ''.concat(Qe(), 'TransitionProperty')
          : 'transitionProperty';
      }
      function et() {
        return Qe() ? ''.concat(Qe(), 'Transform') : 'transform';
      }
      function tt(e, t) {
        var n = Je();
        n &&
          ((e.style[n] = t),
          'transitionProperty' !== n && (e.style.transitionProperty = t));
      }
      function nt(e, t) {
        var n = et();
        n && ((e.style[n] = t), 'transform' !== n && (e.style.transform = t));
      }
      function rt(e) {
        return e.style.transitionProperty || e.style[Je()];
      }
      function ot(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(et());
        if (n && 'none' !== n) {
          var r = n.replace(/[^0-9\-.,]/g, '').split(',');
          return {
            x: parseFloat(r[12] || r[4], 0),
            y: parseFloat(r[13] || r[5], 0),
          };
        }
        return { x: 0, y: 0 };
      }
      var it = /matrix\((.*)\)/,
        at = /matrix3d\((.*)\)/;
      function st(e, t) {
        var n = window.getComputedStyle(e, null),
          r = n.getPropertyValue('transform') || n.getPropertyValue(et());
        if (r && 'none' !== r) {
          var o,
            i = r.match(it);
          if (i)
            (i = i[1]),
              (o = i.split(',').map(function(e) {
                return parseFloat(e, 10);
              })),
              (o[4] = t.x),
              (o[5] = t.y),
              nt(e, 'matrix('.concat(o.join(','), ')'));
          else {
            var a = r.match(at)[1];
            (o = a.split(',').map(function(e) {
              return parseFloat(e, 10);
            })),
              (o[12] = t.x),
              (o[13] = t.y),
              nt(e, 'matrix3d('.concat(o.join(','), ')'));
          }
        } else
          nt(
            e,
            'translateX('
              .concat(t.x, 'px) translateY(')
              .concat(t.y, 'px) translateZ(0)'),
          );
      }
      var lt,
        ct = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
      function ut(e) {
        var t = e.style.display;
        (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
      }
      function pt(e, t, n) {
        var r = n;
        if ('object' !== Ve(t))
          return 'undefined' !== typeof r
            ? ('number' === typeof r && (r = ''.concat(r, 'px')),
              void (e.style[t] = r))
            : lt(e, t);
        for (var o in t) t.hasOwnProperty(o) && pt(e, o, t[o]);
      }
      function dt(e) {
        var t,
          n,
          r,
          o = e.ownerDocument,
          i = o.body,
          a = o && o.documentElement;
        return (
          (t = e.getBoundingClientRect()),
          (n = t.left),
          (r = t.top),
          (n -= a.clientLeft || i.clientLeft || 0),
          (r -= a.clientTop || i.clientTop || 0),
          { left: n, top: r }
        );
      }
      function ft(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          r = 'scroll'.concat(t ? 'Top' : 'Left');
        if ('number' !== typeof n) {
          var o = e.document;
          (n = o.documentElement[r]), 'number' !== typeof n && (n = o.body[r]);
        }
        return n;
      }
      function ht(e) {
        return ft(e);
      }
      function mt(e) {
        return ft(e, !0);
      }
      function bt(e) {
        var t = dt(e),
          n = e.ownerDocument,
          r = n.defaultView || n.parentWindow;
        return (t.left += ht(r)), (t.top += mt(r)), t;
      }
      function gt(e) {
        return null !== e && void 0 !== e && e == e.window;
      }
      function vt(e) {
        return gt(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
      }
      function yt(e, t, n) {
        var r = n,
          o = '',
          i = vt(e);
        return (
          (r = r || i.defaultView.getComputedStyle(e, null)),
          r && (o = r.getPropertyValue(t) || r[t]),
          o
        );
      }
      var Ot = new RegExp('^('.concat(ct, ')(?!px)[a-z%]+$'), 'i'),
        Et = /^(top|right|bottom|left)$/,
        wt = 'currentStyle',
        kt = 'runtimeStyle',
        St = 'left',
        Ct = 'px';
      function Tt(e, t) {
        var n = e[wt] && e[wt][t];
        if (Ot.test(n) && !Et.test(t)) {
          var r = e.style,
            o = r[St],
            i = e[kt][St];
          (e[kt][St] = e[wt][St]),
            (r[St] = 'fontSize' === t ? '1em' : n || 0),
            (n = r.pixelLeft + Ct),
            (r[St] = o),
            (e[kt][St] = i);
        }
        return '' === n ? 'auto' : n;
      }
      function Mt(e, t) {
        return 'left' === e
          ? t.useCssRight
            ? 'right'
            : e
          : t.useCssBottom
          ? 'bottom'
          : e;
      }
      function At(e) {
        return 'left' === e
          ? 'right'
          : 'right' === e
          ? 'left'
          : 'top' === e
          ? 'bottom'
          : 'bottom' === e
          ? 'top'
          : void 0;
      }
      function xt(e, t, n) {
        'static' === pt(e, 'position') && (e.style.position = 'relative');
        var r = -999,
          o = -999,
          i = Mt('left', n),
          a = Mt('top', n),
          s = At(i),
          l = At(a);
        'left' !== i && (r = 999), 'top' !== a && (o = 999);
        var c = '',
          u = bt(e);
        ('left' in t || 'top' in t) && ((c = rt(e) || ''), tt(e, 'none')),
          'left' in t && ((e.style[s] = ''), (e.style[i] = ''.concat(r, 'px'))),
          'top' in t && ((e.style[l] = ''), (e.style[a] = ''.concat(o, 'px'))),
          ut(e);
        var p = bt(e),
          d = {};
        for (var f in t)
          if (t.hasOwnProperty(f)) {
            var h = Mt(f, n),
              m = 'left' === f ? r : o,
              b = u[f] - p[f];
            d[h] = h === f ? m + b : m - b;
          }
        pt(e, d), ut(e), ('left' in t || 'top' in t) && tt(e, c);
        var g = {};
        for (var v in t)
          if (t.hasOwnProperty(v)) {
            var y = Mt(v, n),
              O = t[v] - u[v];
            g[y] = v === y ? d[y] + O : d[y] - O;
          }
        pt(e, g);
      }
      function Nt(e, t) {
        var n = bt(e),
          r = ot(e),
          o = { x: r.x, y: r.y };
        'left' in t && (o.x = r.x + t.left - n.left),
          'top' in t && (o.y = r.y + t.top - n.top),
          st(e, o);
      }
      function _t(e, t, n) {
        if (n.ignoreShake) {
          var r = bt(e),
            o = r.left.toFixed(0),
            i = r.top.toFixed(0),
            a = t.left.toFixed(0),
            s = t.top.toFixed(0);
          if (o === a && i === s) return;
        }
        n.useCssRight || n.useCssBottom
          ? xt(e, t, n)
          : n.useCssTransform && et() in document.body.style
          ? Nt(e, t)
          : xt(e, t, n);
      }
      function jt(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n]);
      }
      function It(e) {
        return 'border-box' === lt(e, 'boxSizing');
      }
      'undefined' !== typeof window && (lt = window.getComputedStyle ? yt : Tt);
      var Rt = ['margin', 'border', 'padding'],
        Pt = -1,
        Dt = 2,
        Lt = 1,
        Ft = 0;
      function Bt(e, t, n) {
        var r,
          o = {},
          i = e.style;
        for (r in t) t.hasOwnProperty(r) && ((o[r] = i[r]), (i[r] = t[r]));
        for (r in (n.call(e), t)) t.hasOwnProperty(r) && (i[r] = o[r]);
      }
      function Kt(e, t, n) {
        var r,
          o,
          i,
          a = 0;
        for (o = 0; o < t.length; o++)
          if (((r = t[o]), r))
            for (i = 0; i < n.length; i++) {
              var s = void 0;
              (s =
                'border' === r ? ''.concat(r).concat(n[i], 'Width') : r + n[i]),
                (a += parseFloat(lt(e, s)) || 0);
            }
        return a;
      }
      var Ut = {
        getParent: function(e) {
          var t = e;
          do {
            t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
          } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
          return t;
        },
      };
      function Ht(e, t, n) {
        var r = n;
        if (gt(e))
          return 'width' === t ? Ut.viewportWidth(e) : Ut.viewportHeight(e);
        if (9 === e.nodeType)
          return 'width' === t ? Ut.docWidth(e) : Ut.docHeight(e);
        var o = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
          i =
            'width' === t
              ? e.getBoundingClientRect().width
              : e.getBoundingClientRect().height,
          a = (lt(e), It(e)),
          s = 0;
        (null === i || void 0 === i || i <= 0) &&
          ((i = void 0),
          (s = lt(e, t)),
          (null === s || void 0 === s || Number(s) < 0) &&
            (s = e.style[t] || 0),
          (s = parseFloat(s) || 0)),
          void 0 === r && (r = a ? Lt : Pt);
        var l = void 0 !== i || a,
          c = i || s;
        return r === Pt
          ? l
            ? c - Kt(e, ['border', 'padding'], o)
            : s
          : l
          ? r === Lt
            ? c
            : c + (r === Dt ? -Kt(e, ['border'], o) : Kt(e, ['margin'], o))
          : s + Kt(e, Rt.slice(r), o);
      }
      jt(['Width', 'Height'], function(e) {
        (Ut['doc'.concat(e)] = function(t) {
          var n = t.document;
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            Ut['viewport'.concat(e)](n),
          );
        }),
          (Ut['viewport'.concat(e)] = function(t) {
            var n = 'client'.concat(e),
              r = t.document,
              o = r.body,
              i = r.documentElement,
              a = i[n];
            return ('CSS1Compat' === r.compatMode && a) || (o && o[n]) || a;
          });
      });
      var Gt = { position: 'absolute', visibility: 'hidden', display: 'block' };
      function $t() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r,
          o = t[0];
        return (
          0 !== o.offsetWidth
            ? (r = Ht.apply(void 0, t))
            : Bt(o, Gt, function() {
                r = Ht.apply(void 0, t);
              }),
          r
        );
      }
      function zt(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      jt(['width', 'height'], function(e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        Ut['outer'.concat(t)] = function(t, n) {
          return t && $t(t, e, n ? Ft : Lt);
        };
        var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'];
        Ut[e] = function(t, r) {
          var o = r;
          if (void 0 === o) return t && $t(t, e, Pt);
          if (t) {
            lt(t);
            var i = It(t);
            return i && (o += Kt(t, ['padding', 'border'], n)), pt(t, e, o);
          }
        };
      });
      var Wt = {
        getWindow: function(e) {
          if (e && e.document && e.setTimeout) return e;
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow;
        },
        getDocument: vt,
        offset: function(e, t, n) {
          if ('undefined' === typeof t) return bt(e);
          _t(e, t, n || {});
        },
        isWindow: gt,
        each: jt,
        css: pt,
        clone: function(e) {
          var t,
            n = {};
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
          var r = e.overflow;
          if (r)
            for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
          return n;
        },
        mix: zt,
        getWindowScrollLeft: function(e) {
          return ht(e);
        },
        getWindowScrollTop: function(e) {
          return mt(e);
        },
        merge: function() {
          for (var e = {}, t = 0; t < arguments.length; t++)
            Wt.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
          return e;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      zt(Wt, Ut);
      var Vt = Wt.getParent;
      function Yt(e) {
        if (Wt.isWindow(e) || 9 === e.nodeType) return null;
        var t,
          n = Wt.getDocument(e),
          r = n.body,
          o = Wt.css(e, 'position'),
          i = 'fixed' === o || 'absolute' === o;
        if (!i) return 'html' === e.nodeName.toLowerCase() ? null : Vt(e);
        for (t = Vt(e); t && t !== r && 9 !== t.nodeType; t = Vt(t))
          if (((o = Wt.css(t, 'position')), 'static' !== o)) return t;
        return null;
      }
      var Xt = Wt.getParent;
      function qt(e) {
        if (Wt.isWindow(e) || 9 === e.nodeType) return !1;
        var t = Wt.getDocument(e),
          n = t.body,
          r = null;
        for (r = Xt(e); r && r !== n; r = Xt(r)) {
          var o = Wt.css(r, 'position');
          if ('fixed' === o) return !0;
        }
        return !1;
      }
      function Zt(e, t) {
        var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
          r = Yt(e),
          o = Wt.getDocument(e),
          i = o.defaultView || o.parentWindow,
          a = o.body,
          s = o.documentElement;
        while (r) {
          if (
            (-1 !== navigator.userAgent.indexOf('MSIE') &&
              0 === r.clientWidth) ||
            r === a ||
            r === s ||
            'visible' === Wt.css(r, 'overflow')
          ) {
            if (r === a || r === s) break;
          } else {
            var l = Wt.offset(r);
            (l.left += r.clientLeft),
              (l.top += r.clientTop),
              (n.top = Math.max(n.top, l.top)),
              (n.right = Math.min(n.right, l.left + r.clientWidth)),
              (n.bottom = Math.min(n.bottom, l.top + r.clientHeight)),
              (n.left = Math.max(n.left, l.left));
          }
          r = Yt(r);
        }
        var c = null;
        if (!Wt.isWindow(e) && 9 !== e.nodeType) {
          c = e.style.position;
          var u = Wt.css(e, 'position');
          'absolute' === u && (e.style.position = 'fixed');
        }
        var p = Wt.getWindowScrollLeft(i),
          d = Wt.getWindowScrollTop(i),
          f = Wt.viewportWidth(i),
          h = Wt.viewportHeight(i),
          m = s.scrollWidth,
          b = s.scrollHeight,
          g = window.getComputedStyle(a);
        if (
          ('hidden' === g.overflowX && (m = i.innerWidth),
          'hidden' === g.overflowY && (b = i.innerHeight),
          e.style && (e.style.position = c),
          t || qt(e))
        )
          (n.left = Math.max(n.left, p)),
            (n.top = Math.max(n.top, d)),
            (n.right = Math.min(n.right, p + f)),
            (n.bottom = Math.min(n.bottom, d + h));
        else {
          var v = Math.max(m, p + f);
          n.right = Math.min(n.right, v);
          var y = Math.max(b, d + h);
          n.bottom = Math.min(n.bottom, y);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function Qt(e, t, n, r) {
        var o = Wt.clone(e),
          i = { width: t.width, height: t.height };
        return (
          r.adjustX && o.left < n.left && (o.left = n.left),
          r.resizeWidth &&
            o.left >= n.left &&
            o.left + i.width > n.right &&
            (i.width -= o.left + i.width - n.right),
          r.adjustX &&
            o.left + i.width > n.right &&
            (o.left = Math.max(n.right - i.width, n.left)),
          r.adjustY && o.top < n.top && (o.top = n.top),
          r.resizeHeight &&
            o.top >= n.top &&
            o.top + i.height > n.bottom &&
            (i.height -= o.top + i.height - n.bottom),
          r.adjustY &&
            o.top + i.height > n.bottom &&
            (o.top = Math.max(n.bottom - i.height, n.top)),
          Wt.mix(o, i)
        );
      }
      function Jt(e) {
        var t, n, r;
        if (Wt.isWindow(e) || 9 === e.nodeType) {
          var o = Wt.getWindow(e);
          (t = {
            left: Wt.getWindowScrollLeft(o),
            top: Wt.getWindowScrollTop(o),
          }),
            (n = Wt.viewportWidth(o)),
            (r = Wt.viewportHeight(o));
        } else
          (t = Wt.offset(e)), (n = Wt.outerWidth(e)), (r = Wt.outerHeight(e));
        return (t.width = n), (t.height = r), t;
      }
      function en(e, t) {
        var n = t.charAt(0),
          r = t.charAt(1),
          o = e.width,
          i = e.height,
          a = e.left,
          s = e.top;
        return (
          'c' === n ? (s += i / 2) : 'b' === n && (s += i),
          'c' === r ? (a += o / 2) : 'r' === r && (a += o),
          { left: a, top: s }
        );
      }
      function tn(e, t, n, r, o) {
        var i = en(t, n[1]),
          a = en(e, n[0]),
          s = [a.left - i.left, a.top - i.top];
        return {
          left: Math.round(e.left - s[0] + r[0] - o[0]),
          top: Math.round(e.top - s[1] + r[1] - o[1]),
        };
      }
      function nn(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right;
      }
      function rn(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom;
      }
      function on(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      }
      function an(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      }
      function sn(e, t, n) {
        var r = [];
        return (
          Wt.each(e, function(e) {
            r.push(
              e.replace(t, function(e) {
                return n[e];
              }),
            );
          }),
          r
        );
      }
      function ln(e, t) {
        return (e[t] = -e[t]), e;
      }
      function cn(e, t) {
        var n;
        return (
          (n = /%$/.test(e)
            ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
            : parseInt(e, 10)),
          n || 0
        );
      }
      function un(e, t) {
        (e[0] = cn(e[0], t.width)), (e[1] = cn(e[1], t.height));
      }
      function pn(e, t, n, r) {
        var o = n.points,
          i = n.offset || [0, 0],
          a = n.targetOffset || [0, 0],
          s = n.overflow,
          l = n.source || e;
        (i = [].concat(i)), (a = [].concat(a)), (s = s || {});
        var c = {},
          u = 0,
          p = !(!s || !s.alwaysByViewport),
          d = Zt(l, p),
          f = Jt(l);
        un(i, f), un(a, t);
        var h = tn(f, t, o, i, a),
          m = Wt.merge(f, h);
        if (d && (s.adjustX || s.adjustY) && r) {
          if (s.adjustX && nn(h, f, d)) {
            var b = sn(o, /[lr]/gi, { l: 'r', r: 'l' }),
              g = ln(i, 0),
              v = ln(a, 0),
              y = tn(f, t, b, g, v);
            on(y, f, d) || ((u = 1), (o = b), (i = g), (a = v));
          }
          if (s.adjustY && rn(h, f, d)) {
            var O = sn(o, /[tb]/gi, { t: 'b', b: 't' }),
              E = ln(i, 1),
              w = ln(a, 1),
              k = tn(f, t, O, E, w);
            an(k, f, d) || ((u = 1), (o = O), (i = E), (a = w));
          }
          u && ((h = tn(f, t, o, i, a)), Wt.mix(m, h));
          var S = nn(h, f, d),
            C = rn(h, f, d);
          if (S || C) {
            var T = o;
            S && (T = sn(o, /[lr]/gi, { l: 'r', r: 'l' })),
              C && (T = sn(o, /[tb]/gi, { t: 'b', b: 't' })),
              (o = T),
              (i = n.offset || [0, 0]),
              (a = n.targetOffset || [0, 0]);
          }
          (c.adjustX = s.adjustX && S),
            (c.adjustY = s.adjustY && C),
            (c.adjustX || c.adjustY) && (m = Qt(h, f, d, c));
        }
        return (
          m.width !== f.width &&
            Wt.css(l, 'width', Wt.width(l) + m.width - f.width),
          m.height !== f.height &&
            Wt.css(l, 'height', Wt.height(l) + m.height - f.height),
          Wt.offset(
            l,
            { left: m.left, top: m.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: o, offset: i, targetOffset: a, overflow: c }
        );
      }
      function dn(e, t) {
        var n = Zt(e, t),
          r = Jt(e);
        return (
          !n ||
          r.left + r.width <= n.left ||
          r.top + r.height <= n.top ||
          r.left >= n.right ||
          r.top >= n.bottom
        );
      }
      function fn(e, t, n) {
        var r = n.target || t,
          o = Jt(r),
          i = !dn(r, n.overflow && n.overflow.alwaysByViewport);
        return pn(e, o, n, i);
      }
      function hn(e, t, n) {
        var r,
          o,
          i = Wt.getDocument(e),
          a = i.defaultView || i.parentWindow,
          s = Wt.getWindowScrollLeft(a),
          l = Wt.getWindowScrollTop(a),
          c = Wt.viewportWidth(a),
          u = Wt.viewportHeight(a);
        (r = 'pageX' in t ? t.pageX : s + t.clientX),
          (o = 'pageY' in t ? t.pageY : l + t.clientY);
        var p = { left: r, top: o, width: 0, height: 0 },
          d = r >= 0 && r <= s + c && o >= 0 && o <= l + u,
          f = [n.points[0], 'cc'];
        return pn(e, p, qe({}, n, { points: f }), d);
      }
      (fn.__getOffsetParent = Yt), (fn.__getVisibleRectForElement = Zt);
      function mn(e, t) {
        return (
          e === t ||
          (!(!e || !t) &&
            ('pageX' in t && 'pageY' in t
              ? e.pageX === t.pageX && e.pageY === t.pageY
              : 'clientX' in t &&
                'clientY' in t &&
                e.clientX === t.clientX && e.clientY === t.clientY))
        );
      }
      function bn(e, t) {
        e !== document.activeElement &&
          Re(t, e) &&
          'function' === typeof e.focus &&
          e.focus();
      }
      function gn(e, t) {
        var n = null,
          r = null;
        function o(e) {
          var o = Object(l['a'])(e, 1),
            i = o[0].target;
          if (document.documentElement.contains(i)) {
            var a = i.getBoundingClientRect(),
              s = a.width,
              c = a.height,
              u = Math.floor(s),
              p = Math.floor(c);
            (n === u && r === p) ||
              Promise.resolve().then(function() {
                t({ width: u, height: p });
              }),
              (n = u),
              (r = p);
          }
        }
        var i = new T['a'](o);
        return (
          e && i.observe(e),
          function() {
            i.disconnect();
          }
        );
      }
      var vn = function(e, t) {
        var n = i.a.useRef(!1),
          r = i.a.useRef(null);
        function o() {
          window.clearTimeout(r.current);
        }
        function a(i) {
          if (n.current && !0 !== i)
            o(),
              (r.current = window.setTimeout(function() {
                (n.current = !1), a();
              }, t));
          else {
            if (!1 === e()) return;
            (n.current = !0),
              o(),
              (r.current = window.setTimeout(function() {
                n.current = !1;
              }, t));
          }
        }
        return [
          a,
          function() {
            (n.current = !1), o();
          },
        ];
      };
      function yn(e) {
        return 'function' !== typeof e ? null : e();
      }
      function On(e) {
        return 'object' === Object(c['a'])(e) && e ? e : null;
      }
      var En = function(e, t) {
          var n = e.children,
            r = e.disabled,
            o = e.target,
            a = e.align,
            s = e.onAlign,
            c = e.monitorWindowResize,
            u = e.monitorBufferTime,
            p = void 0 === u ? 0 : u,
            d = i.a.useRef({}),
            f = i.a.useRef(),
            h = i.a.Children.only(n),
            m = i.a.useRef({});
          (m.current.disabled = r),
            (m.current.target = o),
            (m.current.onAlign = s);
          var b = vn(function() {
              var e = m.current,
                t = e.disabled,
                n = e.target,
                r = e.onAlign;
              if (!t && n) {
                var o,
                  i = f.current,
                  s = yn(n),
                  l = On(n);
                (d.current.element = s), (d.current.point = l);
                var c = document,
                  u = c.activeElement;
                return (
                  s && We(s) ? (o = fn(i, s, a)) : l && (o = hn(i, l, a)),
                  bn(u, i),
                  r && o && r(i, o),
                  !0
                );
              }
              return !1;
            }, p),
            g = Object(l['a'])(b, 2),
            v = g[0],
            y = g[1],
            O = i.a.useRef({ cancel: function() {} }),
            E = i.a.useRef({ cancel: function() {} });
          i.a.useEffect(function() {
            var e = yn(o),
              t = On(o);
            f.current !== E.current.element &&
              (E.current.cancel(),
              (E.current.element = f.current),
              (E.current.cancel = gn(f.current, v))),
              (d.current.element === e && mn(d.current.point, t)) ||
                (v(),
                O.current.element !== e &&
                  (O.current.cancel(),
                  (O.current.element = e),
                  (O.current.cancel = gn(e, v))));
          }),
            i.a.useEffect(
              function() {
                r ? y() : v();
              },
              [r],
            );
          var w = i.a.useRef(null);
          return (
            i.a.useEffect(
              function() {
                c
                  ? w.current || (w.current = Pe(window, 'resize', v))
                  : w.current && (w.current.remove(), (w.current = null));
              },
              [c],
            ),
            i.a.useEffect(function() {
              return function() {
                O.current.cancel(),
                  E.current.cancel(),
                  w.current && w.current.remove(),
                  y();
              };
            }, []),
            i.a.useImperativeHandle(t, function() {
              return {
                forceAlign: function() {
                  return v(!0);
                },
              };
            }),
            i.a.isValidElement(h) &&
              (h = i.a.cloneElement(h, { ref: Object(C['a'])(h.ref, f) })),
            h
          );
        },
        wn = i.a.forwardRef(En);
      wn.displayName = 'Align';
      var kn = wn,
        Sn = kn,
        Cn = n('o0o1'),
        Tn = n.n(Cn),
        Mn = n('HaE+'),
        An = ['measure', 'align', null, 'motion'],
        xn = function(e, t) {
          var n = Object(o['useState'])(null),
            r = Object(l['a'])(n, 2),
            i = r[0],
            a = r[1],
            s = Object(o['useRef'])(),
            c = Object(o['useRef'])(!1);
          function u(e) {
            c.current || a(e);
          }
          function p() {
            v['a'].cancel(s.current);
          }
          function d(e) {
            p(),
              (s.current = Object(v['a'])(function() {
                u(function(e) {
                  switch (i) {
                    case 'align':
                      return 'motion';
                    case 'motion':
                      return 'stable';
                    default:
                  }
                  return e;
                }),
                  null === e || void 0 === e || e();
              }));
          }
          return (
            Object(o['useEffect'])(
              function() {
                u('measure');
              },
              [e],
            ),
            Object(o['useEffect'])(
              function() {
                switch (i) {
                  case 'measure':
                    t();
                    break;
                  default:
                }
                i &&
                  (s.current = Object(v['a'])(
                    Object(Mn['a'])(
                      Tn.a.mark(function e() {
                        var t, n;
                        return Tn.a.wrap(function(e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = An.indexOf(i)),
                                  (n = An[t + 1]),
                                  n && -1 !== t && u(n);
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                  ));
              },
              [i],
            ),
            Object(o['useEffect'])(function() {
              return function() {
                (c.current = !0), p();
              };
            }, []),
            [i, d]
          );
        },
        Nn = function(e) {
          var t = o['useState']({ width: 0, height: 0 }),
            n = Object(l['a'])(t, 2),
            r = n[0],
            i = n[1];
          function a(e) {
            i({ width: e.offsetWidth, height: e.offsetHeight });
          }
          var s = o['useMemo'](
            function() {
              var t = {};
              if (e) {
                var n = r.width,
                  o = r.height;
                -1 !== e.indexOf('height') && o
                  ? (t.height = o)
                  : -1 !== e.indexOf('minHeight') && o && (t.minHeight = o),
                  -1 !== e.indexOf('width') && n
                    ? (t.width = n)
                    : -1 !== e.indexOf('minWidth') && n && (t.minWidth = n);
              }
              return t;
            },
            [e, r],
          );
          return [s, a];
        },
        _n = o['forwardRef'](function(e, t) {
          var n = e.visible,
            r = e.prefixCls,
            i = e.className,
            s = e.style,
            c = e.children,
            u = e.zIndex,
            d = e.stretch,
            h = e.destroyPopupOnHide,
            m = e.align,
            b = e.point,
            g = e.getRootDomNode,
            v = e.getClassNameFromAlign,
            y = e.onAlign,
            O = e.onMouseEnter,
            E = e.onMouseLeave,
            w = e.onMouseDown,
            k = e.onTouchStart,
            S = Object(o['useRef'])(),
            C = Object(o['useRef'])(),
            T = Object(o['useState'])(),
            M = Object(l['a'])(T, 2),
            A = M[0],
            x = M[1],
            N = Nn(d),
            _ = Object(l['a'])(N, 2),
            j = _[0],
            I = _[1];
          function R() {
            d && I(g());
          }
          var P = xn(n, R),
            D = Object(l['a'])(P, 2),
            L = D[0],
            F = D[1],
            B = Object(o['useRef'])();
          function K() {
            return b || g;
          }
          function U() {
            var e;
            null === (e = S.current) || void 0 === e || e.forceAlign();
          }
          function H(e, t) {
            if ('align' === L) {
              var n = v(t);
              x(n),
                A !== n
                  ? Promise.resolve().then(function() {
                      U();
                    })
                  : F(function() {
                      var e;
                      null === (e = B.current) || void 0 === e || e.call(B);
                    }),
                null === y || void 0 === y || y(e, t);
            }
          }
          var G = Object(p['a'])({}, Ge(e));
          function $() {
            return new Promise(function(e) {
              B.current = e;
            });
          }
          ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function(e) {
            var t = G[e];
            G[e] = function(e, n) {
              return F(), null === t || void 0 === t ? void 0 : t(e, n);
            };
          }),
            o['useEffect'](
              function() {
                G.motionName || 'motion' !== L || F();
              },
              [G.motionName, L],
            ),
            o['useImperativeHandle'](t, function() {
              return {
                forceAlign: U,
                getElement: function() {
                  return C.current;
                },
              };
            });
          var z = Object(p['a'])(
              Object(p['a'])(Object(p['a'])({}, j), {}, { zIndex: u }, s),
              {},
              {
                opacity: 'motion' !== L && 'stable' !== L && n ? 0 : void 0,
                pointerEvents: 'stable' === L ? void 0 : 'none',
              },
            ),
            W = !0;
          !(null === m || void 0 === m ? void 0 : m.points) ||
            ('align' !== L && 'stable' !== L) ||
            (W = !1);
          var V = c;
          return (
            o['Children'].count(c) > 1 &&
              (V = o['createElement'](
                'div',
                { className: ''.concat(r, '-content') },
                c,
              )),
            o['createElement'](
              He['b'],
              Object(a['a'])(
                {
                  visible: n,
                  ref: C,
                  leavedClassName: ''.concat(r, '-hidden'),
                },
                G,
                { onAppearPrepare: $, onEnterPrepare: $, removeOnLeave: h },
              ),
              function(e, t) {
                var n = e.className,
                  a = e.style,
                  s = f()(r, i, A, n);
                return o['createElement'](
                  Sn,
                  {
                    target: K(),
                    key: 'popup',
                    ref: S,
                    monitorWindowResize: !0,
                    disabled: W,
                    align: m,
                    onAlign: H,
                  },
                  o['createElement'](
                    'div',
                    {
                      ref: t,
                      className: s,
                      onMouseEnter: O,
                      onMouseLeave: E,
                      onMouseDown: w,
                      onTouchStart: k,
                      style: Object(p['a'])(Object(p['a'])({}, a), z),
                    },
                    V,
                  ),
                );
              },
            )
          );
        });
      _n.displayName = 'PopupInner';
      var jn = _n,
        In = o['forwardRef'](function(e, t) {
          var n = e.prefixCls,
            r = e.visible,
            i = e.zIndex,
            s = e.children,
            l = e.mobile;
          l = void 0 === l ? {} : l;
          var c = l.popupClassName,
            u = l.popupStyle,
            d = l.popupMotion,
            h = void 0 === d ? {} : d,
            m = l.popupRender,
            b = o['useRef']();
          o['useImperativeHandle'](t, function() {
            return {
              forceAlign: function() {},
              getElement: function() {
                return b.current;
              },
            };
          });
          var g = Object(p['a'])({ zIndex: i }, u),
            v = s;
          return (
            o['Children'].count(s) > 1 &&
              (v = o['createElement'](
                'div',
                { className: ''.concat(n, '-content') },
                s,
              )),
            m && (v = m(v)),
            o['createElement'](
              He['b'],
              Object(a['a'])({ visible: r, ref: b, removeOnLeave: !0 }, h),
              function(e, t) {
                var r = e.className,
                  i = e.style,
                  a = f()(n, c, r);
                return o['createElement'](
                  'div',
                  {
                    ref: t,
                    className: a,
                    style: Object(p['a'])(Object(p['a'])({}, i), g),
                  },
                  v,
                );
              },
            )
          );
        });
      In.displayName = 'MobilePopupInner';
      var Rn = In,
        Pn = o['forwardRef'](function(e, t) {
          var n = e.visible,
            r = e.mobile,
            i = Object(u['a'])(e, ['visible', 'mobile']),
            s = Object(o['useState'])(n),
            c = Object(l['a'])(s, 2),
            d = c[0],
            f = c[1],
            h = Object(o['useState'])(!1),
            b = Object(l['a'])(h, 2),
            g = b[0],
            v = b[1],
            y = Object(p['a'])(Object(p['a'])({}, i), {}, { visible: d });
          Object(o['useEffect'])(
            function() {
              f(n), n && r && v(m());
            },
            [n, r],
          );
          var O = g
            ? o['createElement'](
                Rn,
                Object(a['a'])({}, y, { mobile: r, ref: t }),
              )
            : o['createElement'](jn, Object(a['a'])({}, y, { ref: t }));
          return o['createElement']('div', null, o['createElement']($e, y), O);
        });
      Pn.displayName = 'Popup';
      var Dn = Pn,
        Ln = o['createContext'](null),
        Fn = Ln;
      function Bn() {}
      function Kn() {
        return '';
      }
      function Un(e) {
        return e ? e.ownerDocument : window.document;
      }
      var Hn = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ];
      function Gn(e) {
        var t = (function(t) {
          Object(E['a'])(r, t);
          var n = Object(w['a'])(r);
          function r(e) {
            var t, i;
            return (
              Object(y['a'])(this, r),
              (t = n.call(this, e)),
              (t.popupRef = o['createRef']()),
              (t.triggerRef = o['createRef']()),
              (t.onMouseEnter = function(e) {
                var n = t.props.mouseEnterDelay;
                t.fireEvents('onMouseEnter', e),
                  t.delaySetPopupVisible(!0, n, n ? null : e);
              }),
              (t.onMouseMove = function(e) {
                t.fireEvents('onMouseMove', e), t.setPoint(e);
              }),
              (t.onMouseLeave = function(e) {
                t.fireEvents('onMouseLeave', e),
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onPopupMouseEnter = function() {
                t.clearDelayTimer();
              }),
              (t.onPopupMouseLeave = function(e) {
                var n;
                (e.relatedTarget &&
                  !e.relatedTarget.setTimeout &&
                  Re(
                    null === (n = t.popupRef.current) || void 0 === n
                      ? void 0
                      : n.getElement(),
                    e.relatedTarget,
                  )) ||
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onFocus = function(e) {
                t.fireEvents('onFocus', e),
                  t.clearDelayTimer(),
                  t.isFocusToShow() &&
                    ((t.focusTime = Date.now()),
                    t.delaySetPopupVisible(!0, t.props.focusDelay));
              }),
              (t.onMouseDown = function(e) {
                t.fireEvents('onMouseDown', e), (t.preClickTime = Date.now());
              }),
              (t.onTouchStart = function(e) {
                t.fireEvents('onTouchStart', e), (t.preTouchTime = Date.now());
              }),
              (t.onBlur = function(e) {
                t.fireEvents('onBlur', e),
                  t.clearDelayTimer(),
                  t.isBlurToHide() &&
                    t.delaySetPopupVisible(!1, t.props.blurDelay);
              }),
              (t.onContextMenu = function(e) {
                e.preventDefault(),
                  t.fireEvents('onContextMenu', e),
                  t.setPopupVisible(!0, e);
              }),
              (t.onContextMenuClose = function() {
                t.isContextMenuToShow() && t.close();
              }),
              (t.onClick = function(e) {
                if ((t.fireEvents('onClick', e), t.focusTime)) {
                  var n;
                  if (
                    (t.preClickTime && t.preTouchTime
                      ? (n = Math.min(t.preClickTime, t.preTouchTime))
                      : t.preClickTime
                      ? (n = t.preClickTime)
                      : t.preTouchTime && (n = t.preTouchTime),
                    Math.abs(n - t.focusTime) < 20)
                  )
                    return;
                  t.focusTime = 0;
                }
                (t.preClickTime = 0),
                  (t.preTouchTime = 0),
                  t.isClickToShow() &&
                    (t.isClickToHide() || t.isBlurToHide()) &&
                    e &&
                    e.preventDefault &&
                    e.preventDefault();
                var r = !t.state.popupVisible;
                ((t.isClickToHide() && !r) || (r && t.isClickToShow())) &&
                  t.setPopupVisible(!t.state.popupVisible, e);
              }),
              (t.onPopupMouseDown = function() {
                var e;
                ((t.hasPopupMouseDown = !0),
                clearTimeout(t.mouseDownTimeout),
                (t.mouseDownTimeout = window.setTimeout(function() {
                  t.hasPopupMouseDown = !1;
                }, 0)),
                t.context) &&
                  (e = t.context).onPopupMouseDown.apply(e, arguments);
              }),
              (t.onDocumentClick = function(e) {
                if (!t.props.mask || t.props.maskClosable) {
                  var n = e.target,
                    r = t.getRootDomNode(),
                    o = t.getPopupDomNode();
                  Re(r, n) || Re(o, n) || t.hasPopupMouseDown || t.close();
                }
              }),
              (t.getRootDomNode = function() {
                var e = t.props.getTriggerDOMNode;
                if (e) return e(t.triggerRef.current);
                try {
                  var n = Object(k['a'])(t.triggerRef.current);
                  if (n) return n;
                } catch (r) {}
                return Ie.a.findDOMNode(Object(K['a'])(t));
              }),
              (t.getPopupClassNameFromAlign = function(e) {
                var n = [],
                  r = t.props,
                  o = r.popupPlacement,
                  i = r.builtinPlacements,
                  a = r.prefixCls,
                  s = r.alignPoint,
                  l = r.getPopupClassNameFromAlign;
                return (
                  o && i && n.push(Ue(i, a, e, s)),
                  l && n.push(l(e)),
                  n.join(' ')
                );
              }),
              (t.getComponent = function() {
                var e = t.props,
                  n = e.prefixCls,
                  r = e.destroyPopupOnHide,
                  i = e.popupClassName,
                  s = e.onPopupAlign,
                  l = e.popupMotion,
                  c = e.popupAnimation,
                  u = e.popupTransitionName,
                  p = e.popupStyle,
                  d = e.mask,
                  f = e.maskAnimation,
                  h = e.maskTransitionName,
                  m = e.maskMotion,
                  b = e.zIndex,
                  g = e.popup,
                  v = e.stretch,
                  y = e.alignPoint,
                  O = e.mobile,
                  E = t.state,
                  w = E.popupVisible,
                  k = E.point,
                  S = t.getPopupAlign(),
                  C = {};
                return (
                  t.isMouseEnterToShow() &&
                    (C.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (C.onMouseLeave = t.onPopupMouseLeave),
                  (C.onMouseDown = t.onPopupMouseDown),
                  (C.onTouchStart = t.onPopupMouseDown),
                  o['createElement'](
                    Dn,
                    Object(a['a'])(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: r,
                        visible: w,
                        point: y && k,
                        className: i,
                        align: S,
                        onAlign: s,
                        animation: c,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      C,
                      {
                        stretch: v,
                        getRootDomNode: t.getRootDomNode,
                        style: p,
                        mask: d,
                        zIndex: b,
                        transitionName: u,
                        maskAnimation: f,
                        maskTransitionName: h,
                        maskMotion: m,
                        ref: t.popupRef,
                        motion: l,
                        mobile: O,
                      },
                    ),
                    'function' === typeof g ? g() : g,
                  )
                );
              }),
              (t.attachParent = function(e) {
                v['a'].cancel(t.attachId);
                var n,
                  r = t.props,
                  o = r.getPopupContainer,
                  i = r.getDocument,
                  a = t.getRootDomNode();
                o
                  ? (a || 0 === o.length) && (n = o(a))
                  : (n = i(t.getRootDomNode()).body),
                  n
                    ? n.appendChild(e)
                    : (t.attachId = Object(v['a'])(function() {
                        t.attachParent(e);
                      }));
              }),
              (t.getContainer = function() {
                var e = t.props.getDocument,
                  n = e(t.getRootDomNode()).createElement('div');
                return (
                  (n.style.position = 'absolute'),
                  (n.style.top = '0'),
                  (n.style.left = '0'),
                  (n.style.width = '100%'),
                  t.attachParent(n),
                  n
                );
              }),
              (t.setPoint = function(e) {
                var n = t.props.alignPoint;
                n &&
                  e &&
                  t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
              }),
              (t.handlePortalUpdate = function() {
                t.state.prevPopupVisible !== t.state.popupVisible &&
                  t.props.afterPopupVisibleChange(t.state.popupVisible);
              }),
              (i =
                'popupVisible' in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: i, popupVisible: i }),
              Hn.forEach(function(e) {
                t['fire'.concat(e)] = function(n) {
                  t.fireEvents(e, n);
                };
              }),
              t
            );
          }
          return (
            Object(O['a'])(
              r,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.componentDidUpdate();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function() {
                    var e,
                      t = this.props,
                      n = this.state;
                    if (n.popupVisible)
                      return (
                        this.clickOutsideHandler ||
                          (!this.isClickToHide() &&
                            !this.isContextMenuToShow()) ||
                          ((e = t.getDocument(this.getRootDomNode())),
                          (this.clickOutsideHandler = Pe(
                            e,
                            'mousedown',
                            this.onDocumentClick,
                          ))),
                        this.touchOutsideHandler ||
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = Pe(
                            e,
                            'touchstart',
                            this.onDocumentClick,
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = Pe(
                            e,
                            'scroll',
                            this.onContextMenuClose,
                          ))),
                        void (
                          !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = Pe(
                            window,
                            'blur',
                            this.onContextMenuClose,
                          ))
                        )
                      );
                    this.clearOutsideHandler();
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      v['a'].cancel(this.attachId);
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function() {
                    var e;
                    return (
                      (null === (e = this.popupRef.current) || void 0 === e
                        ? void 0
                        : e.getElement()) || null
                    );
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function() {
                    var e = this.props,
                      t = e.popupPlacement,
                      n = e.popupAlign,
                      r = e.builtinPlacements;
                    return t && r ? Ke(r, t, n) : n;
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function(e, t) {
                    var n = this.props.alignPoint,
                      r = this.state.popupVisible;
                    this.clearDelayTimer(),
                      r !== e &&
                        ('popupVisible' in this.props ||
                          this.setState({
                            popupVisible: e,
                            prevPopupVisible: r,
                          }),
                        this.props.onPopupVisibleChange(e)),
                      n && t && e && this.setPoint(t);
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function(e, t, n) {
                    var r = this,
                      o = 1e3 * t;
                    if ((this.clearDelayTimer(), o)) {
                      var i = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                      this.delayTimer = window.setTimeout(function() {
                        r.setPopupVisible(e, i), r.clearDelayTimer();
                      }, o);
                    } else this.setPopupVisible(e, n);
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function() {
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null));
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function() {
                    this.clickOutsideHandler &&
                      (this.clickOutsideHandler.remove(),
                      (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(),
                        (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(),
                        (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler &&
                        (this.touchOutsideHandler.remove(),
                        (this.touchOutsideHandler = null));
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function(e) {
                    var t = this.props.children.props,
                      n = this.props;
                    return t[e] && n[e] ? this['fire'.concat(e)] : t[e] || n[e];
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function() {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function() {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('contextMenu') ||
                      -1 !== n.indexOf('contextMenu')
                    );
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function() {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function() {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseEnter')
                    );
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function() {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseLeave')
                    );
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function() {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('focus')
                    );
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function() {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('blur')
                    );
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function() {
                    var e;
                    this.state.popupVisible &&
                      (null === (e = this.popupRef.current) ||
                        void 0 === e ||
                        e.forceAlign());
                  },
                },
                {
                  key: 'fireEvents',
                  value: function(e, t) {
                    var n = this.props.children.props[e];
                    n && n(t);
                    var r = this.props[e];
                    r && r(t);
                  },
                },
                {
                  key: 'close',
                  value: function() {
                    this.setPopupVisible(!1);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this.state.popupVisible,
                      n = this.props,
                      r = n.children,
                      i = n.forceRender,
                      a = n.alignPoint,
                      s = n.className,
                      l = n.autoDestroy,
                      c = o['Children'].only(r),
                      u = { key: 'trigger' };
                    this.isContextMenuToShow()
                      ? (u.onContextMenu = this.onContextMenu)
                      : (u.onContextMenu = this.createTwoChains(
                          'onContextMenu',
                        )),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((u.onClick = this.onClick),
                          (u.onMouseDown = this.onMouseDown),
                          (u.onTouchStart = this.onTouchStart))
                        : ((u.onClick = this.createTwoChains('onClick')),
                          (u.onMouseDown = this.createTwoChains('onMouseDown')),
                          (u.onTouchStart = this.createTwoChains(
                            'onTouchStart',
                          ))),
                      this.isMouseEnterToShow()
                        ? ((u.onMouseEnter = this.onMouseEnter),
                          a && (u.onMouseMove = this.onMouseMove))
                        : (u.onMouseEnter = this.createTwoChains(
                            'onMouseEnter',
                          )),
                      this.isMouseLeaveToHide()
                        ? (u.onMouseLeave = this.onMouseLeave)
                        : (u.onMouseLeave = this.createTwoChains(
                            'onMouseLeave',
                          )),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((u.onFocus = this.onFocus), (u.onBlur = this.onBlur))
                        : ((u.onFocus = this.createTwoChains('onFocus')),
                          (u.onBlur = this.createTwoChains('onBlur')));
                    var d = f()(c && c.props && c.props.className, s);
                    d && (u.className = d);
                    var h = Object(p['a'])({}, u);
                    Object(C['c'])(c) &&
                      (h.ref = Object(C['a'])(this.triggerRef, c.ref));
                    var m,
                      b = o['cloneElement'](c, h);
                    return (
                      (t || this.popupRef.current || i) &&
                        (m = o['createElement'](
                          e,
                          {
                            key: 'portal',
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent(),
                        )),
                      !t && l && (m = null),
                      o['createElement'](
                        Fn.Provider,
                        { value: { onPopupMouseDown: this.onPopupMouseDown } },
                        b,
                        m,
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    var n = e.popupVisible,
                      r = {};
                    return (
                      void 0 !== n &&
                        t.popupVisible !== n &&
                        ((r.popupVisible = n),
                        (r.prevPopupVisible = t.popupVisible)),
                      r
                    );
                  },
                },
              ],
            ),
            r
          );
        })(o['Component']);
        return (
          (t.contextType = Fn),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: Kn,
            getDocument: Un,
            onPopupVisibleChange: Bn,
            afterPopupVisibleChange: Bn,
            onPopupAlign: Bn,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        );
      }
      var $n = Gn(Fe),
        zn = { adjustX: 1, adjustY: 1 },
        Wn = {
          topLeft: { points: ['bl', 'tl'], overflow: zn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: zn, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: zn, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: zn, offset: [4, 0] },
        },
        Vn = {
          topLeft: { points: ['bl', 'tl'], overflow: zn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: zn, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: zn, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: zn, offset: [4, 0] },
        },
        Yn = 0,
        Xn = {
          horizontal: 'bottomLeft',
          vertical: 'rightTop',
          'vertical-left': 'rightTop',
          'vertical-right': 'leftTop',
        },
        qn = function(e, t, n) {
          var r = Ce(t),
            o = e.getState();
          e.setState({
            defaultActiveFirst: Object(p['a'])(
              Object(p['a'])({}, o.defaultActiveFirst),
              {},
              Object(s['a'])({}, r, n),
            ),
          });
        },
        Zn = (function(e) {
          Object(E['a'])(n, e);
          var t = Object(w['a'])(n);
          function n(e) {
            var r;
            Object(y['a'])(this, n),
              (r = t.call(this, e)),
              (r.onDestroy = function(e) {
                r.props.onDestroy(e);
              }),
              (r.onKeyDown = function(e) {
                var t = e.keyCode,
                  n = r.menuInstance,
                  o = r.props.store,
                  i = r.getVisible();
                if (t === I.ENTER)
                  return r.onTitleClick(e), qn(o, r.props.eventKey, !0), !0;
                if (t === I.RIGHT)
                  return (
                    i
                      ? n.onKeyDown(e)
                      : (r.triggerOpenChange(!0), qn(o, r.props.eventKey, !0)),
                    !0
                  );
                if (t === I.LEFT) {
                  var a;
                  if (!i) return;
                  return (
                    (a = n.onKeyDown(e)),
                    a || (r.triggerOpenChange(!1), (a = !0)),
                    a
                  );
                }
                return !i || (t !== I.UP && t !== I.DOWN)
                  ? void 0
                  : n.onKeyDown(e);
              }),
              (r.onOpenChange = function(e) {
                r.props.onOpenChange(e);
              }),
              (r.onPopupVisibleChange = function(e) {
                r.triggerOpenChange(e, e ? 'mouseenter' : 'mouseleave');
              }),
              (r.onMouseEnter = function(e) {
                var t = r.props,
                  n = t.eventKey,
                  o = t.onMouseEnter,
                  i = t.store;
                qn(i, r.props.eventKey, !1), o({ key: n, domEvent: e });
              }),
              (r.onMouseLeave = function(e) {
                var t = r.props,
                  n = t.parentMenu,
                  o = t.eventKey,
                  i = t.onMouseLeave;
                (n.subMenuInstance = Object(K['a'])(r)),
                  i({ key: o, domEvent: e });
              }),
              (r.onTitleMouseEnter = function(e) {
                var t = r.props,
                  n = t.eventKey,
                  o = t.onItemHover,
                  i = t.onTitleMouseEnter;
                o({ key: n, hover: !0 }), i({ key: n, domEvent: e });
              }),
              (r.onTitleMouseLeave = function(e) {
                var t = r.props,
                  n = t.parentMenu,
                  o = t.eventKey,
                  i = t.onItemHover,
                  a = t.onTitleMouseLeave;
                (n.subMenuInstance = Object(K['a'])(r)),
                  i({ key: o, hover: !1 }),
                  a({ key: o, domEvent: e });
              }),
              (r.onTitleClick = function(e) {
                var t = Object(K['a'])(r),
                  n = t.props;
                n.onTitleClick({ key: n.eventKey, domEvent: e }),
                  'hover' !== n.triggerSubMenuAction &&
                    (r.triggerOpenChange(!r.getVisible(), 'click'),
                    qn(n.store, r.props.eventKey, !1));
              }),
              (r.onSubMenuClick = function(e) {
                'function' === typeof r.props.onClick &&
                  r.props.onClick(r.addKeyPath(e));
              }),
              (r.onSelect = function(e) {
                r.props.onSelect(e);
              }),
              (r.onDeselect = function(e) {
                r.props.onDeselect(e);
              }),
              (r.getPrefixCls = function() {
                return ''.concat(r.props.rootPrefixCls, '-submenu');
              }),
              (r.getActiveClassName = function() {
                return ''.concat(r.getPrefixCls(), '-active');
              }),
              (r.getDisabledClassName = function() {
                return ''.concat(r.getPrefixCls(), '-disabled');
              }),
              (r.getSelectedClassName = function() {
                return ''.concat(r.getPrefixCls(), '-selected');
              }),
              (r.getOpenClassName = function() {
                return ''.concat(r.props.rootPrefixCls, '-submenu-open');
              }),
              (r.getVisible = function() {
                return r.state.isOpen;
              }),
              (r.getMode = function() {
                return r.state.mode;
              }),
              (r.saveMenuInstance = function(e) {
                r.menuInstance = e;
              }),
              (r.addKeyPath = function(e) {
                return Object(p['a'])(
                  Object(p['a'])({}, e),
                  {},
                  { keyPath: (e.keyPath || []).concat(r.props.eventKey) },
                );
              }),
              (r.triggerOpenChange = function(e, t) {
                var n = r.props.eventKey,
                  o = function() {
                    r.onOpenChange({
                      key: n,
                      item: Object(K['a'])(r),
                      trigger: t,
                      open: e,
                    });
                  };
                'mouseenter' === t
                  ? (r.mouseenterTimeout = setTimeout(function() {
                      o();
                    }, 0))
                  : o();
              }),
              (r.isChildrenSelected = function() {
                var e = { find: !1 };
                return Me(r.props.children, r.props.selectedKeys, e), e.find;
              }),
              (r.isInlineMode = function() {
                return 'inline' === r.getMode();
              }),
              (r.adjustWidth = function() {
                if (r.subMenuTitle && r.menuInstance) {
                  var e = je['findDOMNode'](r.menuInstance);
                  e.offsetWidth >= r.subMenuTitle.offsetWidth ||
                    (e.style.minWidth = ''.concat(
                      r.subMenuTitle.offsetWidth,
                      'px',
                    ));
                }
              }),
              (r.saveSubMenuTitle = function(e) {
                r.subMenuTitle = e;
              }),
              (r.getBaseProps = function() {
                var e = Object(K['a'])(r),
                  t = e.props,
                  n = r.getMode();
                return {
                  mode: 'horizontal' === n ? 'vertical' : n,
                  visible: r.getVisible(),
                  level: t.level + 1,
                  inlineIndent: t.inlineIndent,
                  focusable: !1,
                  onClick: r.onSubMenuClick,
                  onSelect: r.onSelect,
                  onDeselect: r.onDeselect,
                  onDestroy: r.onDestroy,
                  selectedKeys: t.selectedKeys,
                  eventKey: ''.concat(t.eventKey, '-menu-'),
                  openKeys: t.openKeys,
                  motion: t.motion,
                  onOpenChange: r.onOpenChange,
                  subMenuOpenDelay: t.subMenuOpenDelay,
                  parentMenu: Object(K['a'])(r),
                  subMenuCloseDelay: t.subMenuCloseDelay,
                  forceSubMenuRender: t.forceSubMenuRender,
                  triggerSubMenuAction: t.triggerSubMenuAction,
                  builtinPlacements: t.builtinPlacements,
                  defaultActiveFirst: t.store.getState().defaultActiveFirst[
                    Ce(t.eventKey)
                  ],
                  multiple: t.multiple,
                  prefixCls: t.rootPrefixCls,
                  id: r.internalMenuId,
                  manualRef: r.saveMenuInstance,
                  itemIcon: t.itemIcon,
                  expandIcon: t.expandIcon,
                  direction: t.direction,
                };
              }),
              (r.getMotion = function(e, t) {
                var n = Object(K['a'])(r),
                  o = n.haveRendered,
                  i = r.props,
                  a = i.motion,
                  s = i.rootPrefixCls,
                  l = Object(p['a'])(
                    Object(p['a'])({}, a),
                    {},
                    {
                      leavedClassName: ''.concat(s, '-hidden'),
                      removeOnLeave: !1,
                      motionAppear: o || !t || 'inline' !== e,
                    },
                  );
                return l;
              });
            var o = e.store,
              i = e.eventKey,
              a = o.getState(),
              s = a.defaultActiveFirst;
            r.isRootMenu = !1;
            var l = !1;
            return (
              s && (l = s[i]),
              qn(o, i, l),
              (r.state = { mode: e.mode, isOpen: e.isOpen }),
              r
            );
          }
          return (
            Object(O['a'])(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.componentDidUpdate();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.mode,
                    r = t.parentMenu,
                    o = t.manualRef,
                    i = t.isOpen,
                    a = function() {
                      e.setState({ mode: n, isOpen: i });
                    },
                    s = i !== this.state.isOpen,
                    l = n !== this.state.mode;
                  (l || s) &&
                    (v['a'].cancel(this.updateStateRaf),
                    l ? (this.updateStateRaf = Object(v['a'])(a)) : a()),
                    o && o(this),
                    'horizontal' === n &&
                      (null === r || void 0 === r ? void 0 : r.isRootMenu) &&
                      i &&
                      (this.minWidthTimeout = setTimeout(function() {
                        return e.adjustWidth();
                      }, 0));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  var e = this.props,
                    t = e.onDestroy,
                    n = e.eventKey;
                  t && t(n),
                    this.minWidthTimeout && clearTimeout(this.minWidthTimeout),
                    this.mouseenterTimeout &&
                      clearTimeout(this.mouseenterTimeout),
                    v['a'].cancel(this.updateStateRaf);
                },
              },
              {
                key: 'renderPopupMenu',
                value: function(e, t) {
                  var n = this.getBaseProps();
                  return o['createElement'](
                    pr,
                    Object(a['a'])({}, n, {
                      id: this.internalMenuId,
                      className: e,
                      style: t,
                    }),
                    this.props.children,
                  );
                },
              },
              {
                key: 'renderChildren',
                value: function() {
                  var e = this,
                    t = this.getBaseProps(),
                    n = t.mode,
                    r = t.visible,
                    i = t.forceSubMenuRender,
                    l = t.direction,
                    c = this.getMotion(n, r);
                  if (
                    ((this.haveRendered = !0),
                    (this.haveOpened = this.haveOpened || r || i),
                    !this.haveOpened)
                  )
                    return o['createElement']('div', null);
                  var u = f()(
                    ''.concat(t.prefixCls, '-sub'),
                    Object(s['a'])(
                      {},
                      ''.concat(t.prefixCls, '-rtl'),
                      'rtl' === l,
                    ),
                  );
                  return this.isInlineMode()
                    ? o['createElement'](
                        He['b'],
                        Object(a['a'])({ visible: t.visible }, c),
                        function(t) {
                          var n = t.className,
                            r = t.style,
                            o = f()(u, n);
                          return e.renderPopupMenu(o, r);
                        },
                      )
                    : this.renderPopupMenu(u);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t,
                    n,
                    r = Object(p['a'])({}, this.props),
                    i = this.getVisible(),
                    l = this.getPrefixCls(),
                    c = this.isInlineMode(),
                    u = this.getMode(),
                    d = f()(
                      l,
                      ''.concat(l, '-').concat(u),
                      ((e = {}),
                      Object(s['a'])(e, r.className, !!r.className),
                      Object(s['a'])(e, this.getOpenClassName(), i),
                      Object(s['a'])(
                        e,
                        this.getActiveClassName(),
                        r.active || (i && !c),
                      ),
                      Object(s['a'])(
                        e,
                        this.getDisabledClassName(),
                        r.disabled,
                      ),
                      Object(s['a'])(
                        e,
                        this.getSelectedClassName(),
                        this.isChildrenSelected(),
                      ),
                      e),
                    );
                  this.internalMenuId ||
                    (r.eventKey
                      ? (this.internalMenuId = ''.concat(r.eventKey, '$Menu'))
                      : ((Yn += 1),
                        (this.internalMenuId = '$__$'.concat(Yn, '$Menu'))));
                  var h = {},
                    m = {},
                    b = {};
                  r.disabled ||
                    ((h = {
                      onMouseLeave: this.onMouseLeave,
                      onMouseEnter: this.onMouseEnter,
                    }),
                    (m = { onClick: this.onTitleClick }),
                    (b = {
                      onMouseEnter: this.onTitleMouseEnter,
                      onMouseLeave: this.onTitleMouseLeave,
                    }));
                  var g = {},
                    v = r.direction,
                    y = 'rtl' === v;
                  c &&
                    (y
                      ? (g.paddingRight = r.inlineIndent * r.level)
                      : (g.paddingLeft = r.inlineIndent * r.level));
                  var O = {};
                  this.getVisible() &&
                    (O = { 'aria-owns': this.internalMenuId });
                  var E = null;
                  'horizontal' !== u &&
                    ((E = this.props.expandIcon),
                    'function' === typeof this.props.expandIcon &&
                      (E = o['createElement'](
                        this.props.expandIcon,
                        Object(p['a'])({}, this.props),
                      )));
                  var w = o['createElement'](
                      'div',
                      Object(a['a'])(
                        {
                          ref: this.saveSubMenuTitle,
                          style: g,
                          className: ''.concat(l, '-title'),
                          role: 'button',
                        },
                        b,
                        m,
                        { 'aria-expanded': i },
                        O,
                        {
                          'aria-haspopup': 'true',
                          title: 'string' === typeof r.title ? r.title : void 0,
                        },
                      ),
                      r.title,
                      E ||
                        o['createElement']('i', {
                          className: ''.concat(l, '-arrow'),
                        }),
                    ),
                    k = this.renderChildren(),
                    S = (null === (t = r.parentMenu) || void 0 === t
                    ? void 0
                    : t.isRootMenu)
                      ? r.parentMenu.props.getPopupContainer
                      : function(e) {
                          return e.parentNode;
                        },
                    C = Xn[u],
                    T = r.popupOffset ? { offset: r.popupOffset } : {},
                    M = f()(
                      ((n = {}),
                      Object(s['a'])(
                        n,
                        r.popupClassName,
                        r.popupClassName && !c,
                      ),
                      Object(s['a'])(n, ''.concat(l, '-rtl'), y),
                      n),
                    ),
                    A = r.disabled,
                    x = r.triggerSubMenuAction,
                    N = r.subMenuOpenDelay,
                    _ = r.forceSubMenuRender,
                    j = r.subMenuCloseDelay,
                    I = r.builtinPlacements;
                  Ae.forEach(function(e) {
                    return delete r[e];
                  }),
                    delete r.onClick;
                  var R = y
                    ? Object(p['a'])(Object(p['a'])({}, Vn), I)
                    : Object(p['a'])(Object(p['a'])({}, Wn), I);
                  delete r.direction;
                  var P = this.getBaseProps(),
                    D = c ? null : this.getMotion(P.mode, P.visible);
                  return o['createElement'](
                    'li',
                    Object(a['a'])({}, r, h, {
                      className: d,
                      role: 'menuitem',
                    }),
                    o['createElement'](
                      $n,
                      {
                        prefixCls: l,
                        popupClassName: f()(''.concat(l, '-popup'), M),
                        getPopupContainer: S,
                        builtinPlacements: R,
                        popupPlacement: C,
                        popupVisible: !c && i,
                        popupAlign: T,
                        popup: c ? null : k,
                        action: A || c ? [] : [x],
                        mouseEnterDelay: N,
                        mouseLeaveDelay: j,
                        onPopupVisibleChange: this.onPopupVisibleChange,
                        forceRender: _,
                        popupMotion: D,
                      },
                      w,
                    ),
                    c ? k : null,
                  );
                },
              },
            ]),
            n
          );
        })(o['Component']);
      Zn.defaultProps = {
        onMouseEnter: ke,
        onMouseLeave: ke,
        onTitleMouseEnter: ke,
        onTitleMouseLeave: ke,
        onTitleClick: ke,
        manualRef: ke,
        mode: 'vertical',
        title: '',
      };
      var Qn = Q(function(e, t) {
        var n = e.openKeys,
          r = e.activeKey,
          o = e.selectedKeys,
          i = t.eventKey,
          a = t.subMenuKey;
        return {
          isOpen: n.indexOf(i) > -1,
          active: r[a] === i,
          selectedKeys: o,
        };
      })(Zn);
      Qn.isSubMenu = !0;
      var Jn = Qn,
        er = 'menuitem-overflowed',
        tr = 0.5,
        nr = (function(e) {
          Object(E['a'])(n, e);
          var t = Object(w['a'])(n);
          function n() {
            var e;
            return (
              Object(y['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.resizeObserver = null),
              (e.mutationObserver = null),
              (e.originalTotalWidth = 0),
              (e.overflowedItems = []),
              (e.menuItemSizes = []),
              (e.cancelFrameId = null),
              (e.state = { lastVisibleIndex: void 0 }),
              (e.childRef = o['createRef']()),
              (e.getMenuItemNodes = function() {
                var t = e.props.prefixCls,
                  n = e.childRef.current;
                return n
                  ? [].slice.call(n.children).filter(function(e) {
                      return (
                        e.className
                          .split(' ')
                          .indexOf(''.concat(t, '-overflowed-submenu')) < 0
                      );
                    })
                  : [];
              }),
              (e.getOverflowedSubMenuItem = function(t, n, r) {
                var i = e.props,
                  s = i.overflowedIndicator,
                  l = i.level,
                  c = i.mode,
                  d = i.prefixCls,
                  f = i.theme;
                if (1 !== l || 'horizontal' !== c) return null;
                var h = e.props.children[0],
                  m = h.props,
                  b = (m.children, m.title, m.style),
                  g = Object(u['a'])(m, ['children', 'title', 'style']),
                  v = Object(p['a'])({}, b),
                  y = ''.concat(t, '-overflowed-indicator'),
                  O = ''.concat(t, '-overflowed-indicator');
                0 === n.length && !0 !== r
                  ? (v = Object(p['a'])(
                      Object(p['a'])({}, v),
                      {},
                      { display: 'none' },
                    ))
                  : r &&
                    ((v = Object(p['a'])(
                      Object(p['a'])({}, v),
                      {},
                      { visibility: 'hidden', position: 'absolute' },
                    )),
                    (y = ''.concat(y, '-placeholder')),
                    (O = ''.concat(O, '-placeholder')));
                var E = f ? ''.concat(d, '-').concat(f) : '',
                  w = {};
                return (
                  Ae.forEach(function(e) {
                    void 0 !== g[e] && (w[e] = g[e]);
                  }),
                  o['createElement'](
                    Jn,
                    Object(a['a'])(
                      {
                        title: s,
                        className: ''.concat(d, '-overflowed-submenu'),
                        popupClassName: E,
                      },
                      w,
                      { key: y, eventKey: O, disabled: !1, style: v },
                    ),
                    n,
                  )
                );
              }),
              (e.setChildrenWidthAndResize = function() {
                if ('horizontal' === e.props.mode) {
                  var t = e.childRef.current;
                  if (t) {
                    var n = t.children;
                    if (n && 0 !== n.length) {
                      var r = t.children[n.length - 1];
                      Ne(r, 'display', 'inline-block');
                      var o = e.getMenuItemNodes(),
                        i = o.filter(function(e) {
                          return e.className.split(' ').indexOf(er) >= 0;
                        });
                      i.forEach(function(e) {
                        Ne(e, 'display', 'inline-block');
                      }),
                        (e.menuItemSizes = o.map(function(e) {
                          return xe(e, !0);
                        })),
                        i.forEach(function(e) {
                          Ne(e, 'display', 'none');
                        }),
                        (e.overflowedIndicatorWidth = xe(
                          t.children[t.children.length - 1],
                          !0,
                        )),
                        (e.originalTotalWidth = e.menuItemSizes.reduce(function(
                          e,
                          t,
                        ) {
                          return e + t;
                        },
                        0)),
                        e.handleResize(),
                        Ne(r, 'display', 'none');
                    }
                  }
                }
              }),
              (e.handleResize = function() {
                if ('horizontal' === e.props.mode) {
                  var t = e.childRef.current;
                  if (t) {
                    var n = xe(t);
                    e.overflowedItems = [];
                    var r,
                      o = 0;
                    e.originalTotalWidth > n + tr &&
                      ((r = -1),
                      e.menuItemSizes.forEach(function(t) {
                        (o += t),
                          o + e.overflowedIndicatorWidth <= n && (r += 1);
                      })),
                      e.setState({ lastVisibleIndex: r });
                  }
                }
              }),
              e
            );
          }
          return (
            Object(O['a'])(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  if (
                    (this.setChildrenWidthAndResize(),
                    1 === this.props.level && 'horizontal' === this.props.mode)
                  ) {
                    var t = this.childRef.current;
                    if (!t) return;
                    (this.resizeObserver = new T['a'](function(t) {
                      t.forEach(function() {
                        var t = e.cancelFrameId;
                        cancelAnimationFrame(t),
                          (e.cancelFrameId = requestAnimationFrame(
                            e.setChildrenWidthAndResize,
                          ));
                      });
                    })),
                      [].slice
                        .call(t.children)
                        .concat(t)
                        .forEach(function(t) {
                          e.resizeObserver.observe(t);
                        }),
                      'undefined' !== typeof MutationObserver &&
                        ((this.mutationObserver = new MutationObserver(
                          function() {
                            e.resizeObserver.disconnect(),
                              [].slice
                                .call(t.children)
                                .concat(t)
                                .forEach(function(t) {
                                  e.resizeObserver.observe(t);
                                }),
                              e.setChildrenWidthAndResize();
                          },
                        )),
                        this.mutationObserver.observe(t, {
                          attributes: !1,
                          childList: !0,
                          subTree: !1,
                        }));
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.resizeObserver && this.resizeObserver.disconnect(),
                    this.mutationObserver && this.mutationObserver.disconnect(),
                    cancelAnimationFrame(this.cancelFrameId);
                },
              },
              {
                key: 'renderChildren',
                value: function(e) {
                  var t = this,
                    n = this.state.lastVisibleIndex;
                  return (e || []).reduce(function(r, i, a) {
                    var s = i;
                    if ('horizontal' === t.props.mode) {
                      var l = t.getOverflowedSubMenuItem(i.props.eventKey, []);
                      void 0 !== n &&
                        -1 !==
                          t.props.className.indexOf(
                            ''.concat(t.props.prefixCls, '-root'),
                          ) &&
                        (a > n &&
                          (s = o['cloneElement'](i, {
                            style: { display: 'none' },
                            eventKey: ''.concat(i.props.eventKey, '-hidden'),
                            className: ''.concat(er),
                          })),
                        a === n + 1 &&
                          ((t.overflowedItems = e.slice(n + 1).map(function(e) {
                            return o['cloneElement'](e, {
                              key: e.props.eventKey,
                              mode: 'vertical-left',
                            });
                          })),
                          (l = t.getOverflowedSubMenuItem(
                            i.props.eventKey,
                            t.overflowedItems,
                          ))));
                      var c = [].concat(Object(g['a'])(r), [l, s]);
                      return (
                        a === e.length - 1 &&
                          c.push(
                            t.getOverflowedSubMenuItem(
                              i.props.eventKey,
                              [],
                              !0,
                            ),
                          ),
                        c
                      );
                    }
                    return [].concat(Object(g['a'])(r), [s]);
                  }, []);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t =
                      (e.visible,
                      e.prefixCls,
                      e.overflowedIndicator,
                      e.mode,
                      e.level,
                      e.tag),
                    n = e.children,
                    r =
                      (e.theme,
                      Object(u['a'])(e, [
                        'visible',
                        'prefixCls',
                        'overflowedIndicator',
                        'mode',
                        'level',
                        'tag',
                        'children',
                        'theme',
                      ])),
                    i = t;
                  return o['createElement'](
                    i,
                    Object(a['a'])({ ref: this.childRef }, r),
                    this.renderChildren(n),
                  );
                },
              },
            ]),
            n
          );
        })(o['Component']);
      nr.defaultProps = { tag: 'div', className: '' };
      var rr = nr;
      function or(e) {
        return (
          !e.length ||
          e.every(function(e) {
            return !!e.props.disabled;
          })
        );
      }
      function ir(e, t, n) {
        var r = e.getState();
        e.setState({
          activeKey: Object(p['a'])(
            Object(p['a'])({}, r.activeKey),
            {},
            Object(s['a'])({}, t, n),
          ),
        });
      }
      function ar(e) {
        return e.eventKey || '0-menu-';
      }
      function sr(e, t) {
        var n,
          r = t,
          o = e.children,
          i = e.eventKey;
        if (
          r &&
          (Te(o, function(e, t) {
            e && e.props && !e.props.disabled && r === Se(e, i, t) && (n = !0);
          }),
          n)
        )
          return r;
        return (
          (r = null),
          e.defaultActiveFirst
            ? (Te(o, function(e, t) {
                r || !e || e.props.disabled || (r = Se(e, i, t));
              }),
              r)
            : r
        );
      }
      function lr(e) {
        if (e) {
          var t = this.instanceArray.indexOf(e);
          -1 !== t ? (this.instanceArray[t] = e) : this.instanceArray.push(e);
        }
      }
      var cr = (function(e) {
        Object(E['a'])(n, e);
        var t = Object(w['a'])(n);
        function n(e) {
          var r;
          return (
            Object(y['a'])(this, n),
            (r = t.call(this, e)),
            (r.onKeyDown = function(e, t) {
              var n,
                o = e.keyCode;
              if (
                (r.getFlatInstanceArray().forEach(function(t) {
                  t && t.props.active && t.onKeyDown && (n = t.onKeyDown(e));
                }),
                n)
              )
                return 1;
              var i = null;
              return (
                (o !== I.UP && o !== I.DOWN) ||
                  (i = r.step(o === I.UP ? -1 : 1)),
                i
                  ? (e.preventDefault(),
                    ir(r.props.store, ar(r.props), i.props.eventKey),
                    'function' === typeof t && t(i),
                    1)
                  : void 0
              );
            }),
            (r.onItemHover = function(e) {
              var t = e.key,
                n = e.hover;
              ir(r.props.store, ar(r.props), n ? t : null);
            }),
            (r.onDeselect = function(e) {
              r.props.onDeselect(e);
            }),
            (r.onSelect = function(e) {
              r.props.onSelect(e);
            }),
            (r.onClick = function(e) {
              r.props.onClick(e);
            }),
            (r.onOpenChange = function(e) {
              r.props.onOpenChange(e);
            }),
            (r.onDestroy = function(e) {
              r.props.onDestroy(e);
            }),
            (r.getFlatInstanceArray = function() {
              return r.instanceArray;
            }),
            (r.step = function(e) {
              var t = r.getFlatInstanceArray(),
                n = r.props.store.getState().activeKey[ar(r.props)],
                o = t.length;
              if (!o) return null;
              e < 0 && (t = t.concat().reverse());
              var i = -1;
              if (
                (t.every(function(e, t) {
                  return !e || e.props.eventKey !== n || ((i = t), !1);
                }),
                r.props.defaultActiveFirst ||
                  -1 === i ||
                  !or(t.slice(i, o - 1)))
              ) {
                var a = (i + 1) % o,
                  s = a;
                do {
                  var l = t[s];
                  if (l && !l.props.disabled) return l;
                  s = (s + 1) % o;
                } while (s !== a);
                return null;
              }
            }),
            (r.renderCommonMenuItem = function(e, t, n) {
              var i = r.props.store.getState(),
                a = Object(K['a'])(r),
                s = a.props,
                l = Se(e, s.eventKey, t),
                c = e.props;
              if (!c || 'string' === typeof e.type) return e;
              var u = l === i.activeKey,
                d = Object(p['a'])(
                  Object(p['a'])(
                    {
                      mode: c.mode || s.mode,
                      level: s.level,
                      inlineIndent: s.inlineIndent,
                      renderMenuItem: r.renderMenuItem,
                      rootPrefixCls: s.prefixCls,
                      index: t,
                      parentMenu: s.parentMenu,
                      manualRef: c.disabled
                        ? void 0
                        : oe(e.ref, lr.bind(Object(K['a'])(r))),
                      eventKey: l,
                      active: !c.disabled && u,
                      multiple: s.multiple,
                      onClick: function(e) {
                        (c.onClick || ke)(e), r.onClick(e);
                      },
                      onItemHover: r.onItemHover,
                      motion: s.motion,
                      subMenuOpenDelay: s.subMenuOpenDelay,
                      subMenuCloseDelay: s.subMenuCloseDelay,
                      forceSubMenuRender: s.forceSubMenuRender,
                      onOpenChange: r.onOpenChange,
                      onDeselect: r.onDeselect,
                      onSelect: r.onSelect,
                      builtinPlacements: s.builtinPlacements,
                      itemIcon: c.itemIcon || r.props.itemIcon,
                      expandIcon: c.expandIcon || r.props.expandIcon,
                    },
                    n,
                  ),
                  {},
                  { direction: s.direction },
                );
              return (
                ('inline' === s.mode || _e()) &&
                  (d.triggerSubMenuAction = 'click'),
                o['cloneElement'](
                  e,
                  Object(p['a'])(Object(p['a'])({}, d), {}, { key: l || t }),
                )
              );
            }),
            (r.renderMenuItem = function(e, t, n) {
              if (!e) return null;
              var o = r.props.store.getState(),
                i = {
                  openKeys: o.openKeys,
                  selectedKeys: o.selectedKeys,
                  triggerSubMenuAction: r.props.triggerSubMenuAction,
                  subMenuKey: n,
                };
              return r.renderCommonMenuItem(e, t, i);
            }),
            e.store.setState({
              activeKey: Object(p['a'])(
                Object(p['a'])({}, e.store.getState().activeKey),
                {},
                Object(s['a'])({}, e.eventKey, sr(e, e.activeKey)),
              ),
            }),
            (r.instanceArray = []),
            r
          );
        }
        return (
          Object(O['a'])(n, [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.manualRef && this.props.manualRef(this);
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function(e) {
                return (
                  this.props.visible ||
                  e.visible ||
                  this.props.className !== e.className ||
                  !z()(this.props.style, e.style)
                );
              },
            },
            {
              key: 'componentDidUpdate',
              value: function(e) {
                var t = this.props,
                  n =
                    'activeKey' in t
                      ? t.activeKey
                      : t.store.getState().activeKey[ar(t)],
                  r = sr(t, n);
                if (r !== n) ir(t.store, ar(t), r);
                else if ('activeKey' in e) {
                  var o = sr(e, e.activeKey);
                  r !== o && ir(t.store, ar(t), r);
                }
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = Object(a['a'])({}, this.props);
                this.instanceArray = [];
                var n = f()(
                    t.prefixCls,
                    t.className,
                    ''.concat(t.prefixCls, '-').concat(t.mode),
                  ),
                  r = { className: n, role: t.role || 'menu' };
                t.id && (r.id = t.id),
                  t.focusable &&
                    ((r.tabIndex = 0), (r.onKeyDown = this.onKeyDown));
                var i = t.prefixCls,
                  s = t.eventKey,
                  l = t.visible,
                  c = t.level,
                  u = t.mode,
                  p = t.overflowedIndicator,
                  d = t.theme;
                return (
                  Ae.forEach(function(e) {
                    return delete t[e];
                  }),
                  delete t.onClick,
                  o['createElement'](
                    rr,
                    Object(a['a'])(
                      {},
                      t,
                      {
                        prefixCls: i,
                        mode: u,
                        tag: 'ul',
                        level: c,
                        theme: d,
                        visible: l,
                        overflowedIndicator: p,
                      },
                      r,
                    ),
                    Object(h['a'])(t.children).map(function(t, n) {
                      return e.renderMenuItem(t, n, s || '0-menu-');
                    }),
                  )
                );
              },
            },
          ]),
          n
        );
      })(o['Component']);
      cr.defaultProps = {
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        level: 1,
        inlineIndent: 24,
        visible: !0,
        focusable: !0,
        style: {},
        manualRef: ke,
      };
      var ur = Q()(cr),
        pr = ur;
      function dr(e, t, n) {
        var r = e.prefixCls,
          o = e.motion,
          i = e.defaultMotions,
          a = void 0 === i ? {} : i,
          s = e.openAnimation,
          l = e.openTransitionName,
          u = t.switchingModeFromInline;
        if (o) return o;
        if ('object' === Object(c['a'])(s) && s)
          Object(S['a'])(
            !1,
            'Object type of `openAnimation` is removed. Please use `motion` instead.',
          );
        else if ('string' === typeof s)
          return { motionName: ''.concat(r, '-open-').concat(s) };
        if (l) return { motionName: l };
        var p = a[n];
        return p || (u ? null : a.other);
      }
      var fr = (function(e) {
        Object(E['a'])(n, e);
        var t = Object(w['a'])(n);
        function n(e) {
          var r;
          Object(y['a'])(this, n),
            (r = t.call(this, e)),
            (r.onSelect = function(e) {
              var t = Object(K['a'])(r),
                n = t.props;
              if (n.selectable) {
                var o = r.store.getState(),
                  i = o.selectedKeys,
                  a = e.key;
                (i = n.multiple ? i.concat([a]) : [a]),
                  'selectedKeys' in n || r.store.setState({ selectedKeys: i }),
                  n.onSelect(
                    Object(p['a'])(
                      Object(p['a'])({}, e),
                      {},
                      { selectedKeys: i },
                    ),
                  );
              }
            }),
            (r.onClick = function(e) {
              var t = r.getRealMenuMode(),
                n = Object(K['a'])(r),
                o = n.store,
                i = n.props.onOpenChange;
              'inline' === t ||
                'openKeys' in r.props ||
                (o.setState({ openKeys: [] }), i([])),
                r.props.onClick(e);
            }),
            (r.onKeyDown = function(e, t) {
              r.innerMenu.getWrappedInstance().onKeyDown(e, t);
            }),
            (r.onOpenChange = function(e) {
              var t = Object(K['a'])(r),
                n = t.props,
                o = r.store.getState().openKeys.concat(),
                i = !1,
                a = function(e) {
                  var t = !1;
                  if (e.open) (t = -1 === o.indexOf(e.key)), t && o.push(e.key);
                  else {
                    var n = o.indexOf(e.key);
                    (t = -1 !== n), t && o.splice(n, 1);
                  }
                  i = i || t;
                };
              Array.isArray(e) ? e.forEach(a) : a(e),
                i &&
                  ('openKeys' in r.props || r.store.setState({ openKeys: o }),
                  n.onOpenChange(o));
            }),
            (r.onDeselect = function(e) {
              var t = Object(K['a'])(r),
                n = t.props;
              if (n.selectable) {
                var o = r.store.getState().selectedKeys.concat(),
                  i = e.key,
                  a = o.indexOf(i);
                -1 !== a && o.splice(a, 1),
                  'selectedKeys' in n || r.store.setState({ selectedKeys: o }),
                  n.onDeselect(
                    Object(p['a'])(
                      Object(p['a'])({}, e),
                      {},
                      { selectedKeys: o },
                    ),
                  );
              }
            }),
            (r.onMouseEnter = function(e) {
              r.restoreModeVerticalFromInline();
              var t = r.props.onMouseEnter;
              t && t(e);
            }),
            (r.onTransitionEnd = function(e) {
              var t =
                  'width' === e.propertyName && e.target === e.currentTarget,
                n = e.target.className,
                o =
                  '[object SVGAnimatedString]' ===
                  Object.prototype.toString.call(n)
                    ? n.animVal
                    : n,
                i = 'font-size' === e.propertyName && o.indexOf('anticon') >= 0;
              (t || i) && r.restoreModeVerticalFromInline();
            }),
            (r.setInnerMenu = function(e) {
              r.innerMenu = e;
            }),
            (r.isRootMenu = !0);
          var o = e.defaultSelectedKeys,
            i = e.defaultOpenKeys;
          return (
            'selectedKeys' in e && (o = e.selectedKeys || []),
            'openKeys' in e && (i = e.openKeys || []),
            (r.store = ee({
              selectedKeys: o,
              openKeys: i,
              activeKey: { '0-menu-': sr(e, e.activeKey) },
            })),
            (r.state = {
              switchingModeFromInline: !1,
              prevProps: e,
              inlineOpenKeys: [],
              store: r.store,
            }),
            r
          );
        }
        return (
          Object(O['a'])(
            n,
            [
              {
                key: 'componentDidMount',
                value: function() {
                  this.updateMiniStore(), this.updateMenuDisplay();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this.props,
                    n = t.siderCollapsed,
                    r = t.inlineCollapsed,
                    o = t.onOpenChange;
                  ((!e.inlineCollapsed && r) || (!e.siderCollapsed && n)) &&
                    o([]),
                    this.updateMiniStore(),
                    this.updateMenuDisplay();
                },
              },
              {
                key: 'updateMenuDisplay',
                value: function() {
                  var e = this.props.collapsedWidth,
                    t = this.store,
                    n = this.prevOpenKeys,
                    r =
                      this.getInlineCollapsed() &&
                      (0 === e || '0' === e || '0px' === e);
                  r
                    ? ((this.prevOpenKeys = t.getState().openKeys.concat()),
                      this.store.setState({ openKeys: [] }))
                    : n &&
                      (this.store.setState({ openKeys: n }),
                      (this.prevOpenKeys = null));
                },
              },
              {
                key: 'getRealMenuMode',
                value: function() {
                  var e = this.props.mode,
                    t = this.state.switchingModeFromInline,
                    n = this.getInlineCollapsed();
                  return t && n ? 'inline' : n ? 'vertical' : e;
                },
              },
              {
                key: 'getInlineCollapsed',
                value: function() {
                  var e = this.props,
                    t = e.inlineCollapsed,
                    n = e.siderCollapsed;
                  return void 0 !== n ? n : t;
                },
              },
              {
                key: 'restoreModeVerticalFromInline',
                value: function() {
                  var e = this.state.switchingModeFromInline;
                  e && this.setState({ switchingModeFromInline: !1 });
                },
              },
              {
                key: 'updateMiniStore',
                value: function() {
                  'selectedKeys' in this.props &&
                    this.store.setState({
                      selectedKeys: this.props.selectedKeys || [],
                    }),
                    'openKeys' in this.props &&
                      this.store.setState({
                        openKeys: this.props.openKeys || [],
                      });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = Object(p['a'])(
                      {},
                      re(this.props, [
                        'collapsedWidth',
                        'siderCollapsed',
                        'defaultMotions',
                      ]),
                    ),
                    t = this.getRealMenuMode();
                  return (
                    (e.className += ' '.concat(e.prefixCls, '-root')),
                    'rtl' === e.direction &&
                      (e.className += ' '.concat(e.prefixCls, '-rtl')),
                    (e = Object(p['a'])(
                      Object(p['a'])({}, e),
                      {},
                      {
                        mode: t,
                        onClick: this.onClick,
                        onOpenChange: this.onOpenChange,
                        onDeselect: this.onDeselect,
                        onSelect: this.onSelect,
                        onMouseEnter: this.onMouseEnter,
                        onTransitionEnd: this.onTransitionEnd,
                        parentMenu: this,
                        motion: dr(this.props, this.state, t),
                      },
                    )),
                    delete e.openAnimation,
                    delete e.openTransitionName,
                    o['createElement'](
                      G,
                      { store: this.store },
                      o['createElement'](
                        pr,
                        Object(a['a'])({}, e, { ref: this.setInnerMenu }),
                        this.props.children,
                      ),
                    )
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function(e, t) {
                  var n = t.prevProps,
                    r = t.store,
                    o = r.getState(),
                    i = {},
                    a = { prevProps: e };
                  return (
                    'inline' === n.mode &&
                      'inline' !== e.mode &&
                      (a.switchingModeFromInline = !0),
                    'openKeys' in e
                      ? (i.openKeys = e.openKeys || [])
                      : (((e.inlineCollapsed && !n.inlineCollapsed) ||
                          (e.siderCollapsed && !n.siderCollapsed)) &&
                          ((a.switchingModeFromInline = !0),
                          (a.inlineOpenKeys = o.openKeys),
                          (i.openKeys = [])),
                        ((!e.inlineCollapsed && n.inlineCollapsed) ||
                          (!e.siderCollapsed && n.siderCollapsed)) &&
                          ((i.openKeys = t.inlineOpenKeys),
                          (a.inlineOpenKeys = []))),
                    Object.keys(i).length && r.setState(i),
                    a
                  );
                },
              },
            ],
          ),
          n
        );
      })(o['Component']);
      fr.defaultProps = {
        selectable: !0,
        onClick: ke,
        onSelect: ke,
        onOpenChange: ke,
        onDeselect: ke,
        defaultSelectedKeys: [],
        defaultOpenKeys: [],
        subMenuOpenDelay: 0.1,
        subMenuCloseDelay: 0.1,
        triggerSubMenuAction: 'hover',
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        style: {},
        builtinPlacements: {},
        overflowedIndicator: o['createElement']('span', null, '\xb7\xb7\xb7'),
      };
      var hr = fr,
        mr = (function(e) {
          Object(E['a'])(n, e);
          var t = Object(w['a'])(n);
          function n() {
            var e;
            return (
              Object(y['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.onKeyDown = function(t) {
                var n = t.keyCode;
                if (n === I.ENTER) return e.onClick(t), !0;
              }),
              (e.onMouseLeave = function(t) {
                var n = e.props,
                  r = n.eventKey,
                  o = n.onItemHover,
                  i = n.onMouseLeave;
                o({ key: r, hover: !1 }), i({ key: r, domEvent: t });
              }),
              (e.onMouseEnter = function(t) {
                var n = e.props,
                  r = n.eventKey,
                  o = n.onItemHover,
                  i = n.onMouseEnter;
                o({ key: r, hover: !0 }), i({ key: r, domEvent: t });
              }),
              (e.onClick = function(t) {
                var n = e.props,
                  r = n.eventKey,
                  o = n.multiple,
                  i = n.onClick,
                  a = n.onSelect,
                  s = n.onDeselect,
                  l = n.isSelected,
                  c = {
                    key: r,
                    keyPath: [r],
                    item: Object(K['a'])(e),
                    domEvent: t,
                  };
                i(c), o ? (l ? s(c) : a(c)) : l || a(c);
              }),
              (e.saveNode = function(t) {
                e.node = t;
              }),
              e
            );
          }
          return (
            Object(O['a'])(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.callRef();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.callRef();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  var e = this.props;
                  e.onDestroy && e.onDestroy(e.eventKey);
                },
              },
              {
                key: 'getPrefixCls',
                value: function() {
                  return ''.concat(this.props.rootPrefixCls, '-item');
                },
              },
              {
                key: 'getActiveClassName',
                value: function() {
                  return ''.concat(this.getPrefixCls(), '-active');
                },
              },
              {
                key: 'getSelectedClassName',
                value: function() {
                  return ''.concat(this.getPrefixCls(), '-selected');
                },
              },
              {
                key: 'getDisabledClassName',
                value: function() {
                  return ''.concat(this.getPrefixCls(), '-disabled');
                },
              },
              {
                key: 'callRef',
                value: function() {
                  this.props.manualRef && this.props.manualRef(this);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = Object(p['a'])({}, this.props),
                    n = f()(
                      this.getPrefixCls(),
                      t.className,
                      ((e = {}),
                      Object(s['a'])(
                        e,
                        this.getActiveClassName(),
                        !t.disabled && t.active,
                      ),
                      Object(s['a'])(
                        e,
                        this.getSelectedClassName(),
                        t.isSelected,
                      ),
                      Object(s['a'])(
                        e,
                        this.getDisabledClassName(),
                        t.disabled,
                      ),
                      e),
                    ),
                    r = Object(p['a'])(
                      Object(p['a'])({}, t.attribute),
                      {},
                      {
                        title: 'string' === typeof t.title ? t.title : void 0,
                        className: n,
                        role: t.role || 'menuitem',
                        'aria-disabled': t.disabled,
                      },
                    );
                  'option' === t.role
                    ? (r = Object(p['a'])(
                        Object(p['a'])({}, r),
                        {},
                        { role: 'option', 'aria-selected': t.isSelected },
                      ))
                    : (null !== t.role && 'none' !== t.role) ||
                      (r.role = 'none');
                  var i = {
                      onClick: t.disabled ? null : this.onClick,
                      onMouseLeave: t.disabled ? null : this.onMouseLeave,
                      onMouseEnter: t.disabled ? null : this.onMouseEnter,
                    },
                    l = Object(p['a'])({}, t.style);
                  'inline' === t.mode &&
                    ('rtl' === t.direction
                      ? (l.paddingRight = t.inlineIndent * t.level)
                      : (l.paddingLeft = t.inlineIndent * t.level)),
                    Ae.forEach(function(e) {
                      return delete t[e];
                    }),
                    delete t.direction;
                  var c = this.props.itemIcon;
                  return (
                    'function' === typeof this.props.itemIcon &&
                      (c = o['createElement'](this.props.itemIcon, this.props)),
                    o['createElement'](
                      'li',
                      Object(a['a'])(
                        {},
                        re(t, [
                          'onClick',
                          'onMouseEnter',
                          'onMouseLeave',
                          'onSelect',
                        ]),
                        r,
                        i,
                        { style: l, ref: this.saveNode },
                      ),
                      t.children,
                      c,
                    )
                  );
                },
              },
            ]),
            n
          );
        })(o['Component']);
      (mr.isMenuItem = !0),
        (mr.defaultProps = {
          onSelect: ke,
          onMouseEnter: ke,
          onMouseLeave: ke,
          manualRef: ke,
        });
      var br = Q(function(e, t) {
          var n = e.activeKey,
            r = e.selectedKeys,
            o = t.eventKey,
            i = t.subMenuKey;
          return {
            active: n[i] === o,
            isSelected: Array.isArray(r) ? -1 !== r.indexOf(o) : r === o,
          };
        })(mr),
        gr = br,
        vr = (function(e) {
          Object(E['a'])(n, e);
          var t = Object(w['a'])(n);
          function n() {
            var e;
            return (
              Object(y['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.renderInnerMenuItem = function(t) {
                var n = e.props,
                  r = n.renderMenuItem,
                  o = n.index;
                return r(t, o, e.props.subMenuKey);
              }),
              e
            );
          }
          return (
            Object(O['a'])(n, [
              {
                key: 'render',
                value: function() {
                  var e = Object(a['a'])({}, this.props),
                    t = e.className,
                    n = void 0 === t ? '' : t,
                    r = e.rootPrefixCls,
                    i = ''.concat(r, '-item-group-title'),
                    s = ''.concat(r, '-item-group-list'),
                    l = e.title,
                    c = e.children;
                  return (
                    Ae.forEach(function(t) {
                      return delete e[t];
                    }),
                    delete e.onClick,
                    delete e.direction,
                    o['createElement'](
                      'li',
                      Object(a['a'])({}, e, {
                        className: ''.concat(n, ' ').concat(r, '-item-group'),
                      }),
                      o['createElement'](
                        'div',
                        {
                          className: i,
                          title: 'string' === typeof l ? l : void 0,
                        },
                        l,
                      ),
                      o['createElement'](
                        'ul',
                        { className: s },
                        o['Children'].map(c, this.renderInnerMenuItem),
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(o['Component']);
      (vr.isMenuItemGroup = !0), (vr.defaultProps = { disabled: !0 });
      var yr = function(e) {
        var t = e.className,
          n = e.rootPrefixCls,
          r = e.style;
        return o['createElement']('li', {
          className: ''.concat(t, ' ').concat(n, '-item-divider'),
          style: r,
        });
      };
      yr.defaultProps = { disabled: !0, className: '', style: {} };
      var Or = hr,
        Er = { adjustX: 1, adjustY: 1 },
        wr = [0, 0],
        kr = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: Er,
            offset: [0, -4],
            targetOffset: wr,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: Er,
            offset: [0, -4],
            targetOffset: wr,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: Er,
            offset: [0, -4],
            targetOffset: wr,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: Er,
            offset: [0, 4],
            targetOffset: wr,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: Er,
            offset: [0, 4],
            targetOffset: wr,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: Er,
            offset: [0, 4],
            targetOffset: wr,
          },
        },
        Sr = kr;
      function Cr(e, t) {
        var n = e.arrow,
          r = void 0 !== n && n,
          i = e.prefixCls,
          a = void 0 === i ? 'rc-dropdown' : i,
          c = e.transitionName,
          p = e.animation,
          d = e.align,
          h = e.placement,
          m = void 0 === h ? 'bottomLeft' : h,
          b = e.placements,
          g = void 0 === b ? Sr : b,
          v = e.getPopupContainer,
          y = e.showAction,
          O = e.hideAction,
          E = e.overlayClassName,
          w = e.overlayStyle,
          k = e.visible,
          S = e.trigger,
          C = void 0 === S ? ['hover'] : S,
          T = Object(u['a'])(e, [
            'arrow',
            'prefixCls',
            'transitionName',
            'animation',
            'align',
            'placement',
            'placements',
            'getPopupContainer',
            'showAction',
            'hideAction',
            'overlayClassName',
            'overlayStyle',
            'visible',
            'trigger',
          ]),
          M = o['useState'](),
          A = Object(l['a'])(M, 2),
          x = A[0],
          N = A[1],
          _ = 'visible' in e ? k : x,
          j = o['useRef'](null);
        o['useImperativeHandle'](t, function() {
          return j.current;
        });
        var I = function() {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          R = function(t) {
            var n = e.onOverlayClick,
              r = I().props;
            N(!1), n && n(t), r.onClick && r.onClick(t);
          },
          P = function(t) {
            var n = e.onVisibleChange;
            N(t), 'function' === typeof n && n(t);
          },
          D = function() {
            var e = I(),
              t = { prefixCls: ''.concat(a, '-menu'), onClick: R };
            return (
              'string' === typeof e.type && delete t.prefixCls,
              o['createElement'](
                o['Fragment'],
                null,
                r &&
                  o['createElement']('div', {
                    className: ''.concat(a, '-arrow'),
                  }),
                o['cloneElement'](e, t),
              )
            );
          },
          L = function() {
            var t = e.overlay;
            return 'function' === typeof t ? D : D();
          },
          F = function() {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          B = function() {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(a, '-open');
          },
          K = function() {
            var t = e.children,
              n = t.props ? t.props : {},
              r = f()(n.className, B());
            return x && t ? o['cloneElement'](t, { className: r }) : t;
          },
          U = O;
        return (
          U || -1 === C.indexOf('contextMenu') || (U = ['click']),
          o['createElement'](
            $n,
            Object.assign({}, T, {
              prefixCls: a,
              ref: j,
              popupClassName: f()(
                E,
                Object(s['a'])({}, ''.concat(a, '-show-arrow'), r),
              ),
              popupStyle: w,
              builtinPlacements: g,
              action: C,
              showAction: y,
              hideAction: U || [],
              popupPlacement: m,
              popupAlign: d,
              popupTransitionName: c,
              popupAnimation: p,
              popupVisible: _,
              stretch: F() ? 'minWidth' : '',
              popup: L(),
              onPopupVisibleChange: P,
              getPopupContainer: v,
            }),
            K(),
          )
        );
      }
      var Tr = o['forwardRef'](Cr),
        Mr = Tr;
      function Ar(e, t) {
        var n = e.prefixCls,
          r = e.editable,
          i = e.locale,
          a = e.style;
        return r && !1 !== r.showAdd
          ? o['createElement'](
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: a,
                'aria-label':
                  (null === i || void 0 === i ? void 0 : i.addAriaLabel) ||
                  'Add tab',
                onClick: function(e) {
                  r.onEdit('add', { event: e });
                },
              },
              r.addIcon || '+',
            )
          : null;
      }
      var xr = o['forwardRef'](Ar);
      function Nr(e, t) {
        var n = e.prefixCls,
          r = e.id,
          i = e.tabs,
          a = e.locale,
          c = e.mobile,
          u = e.moreIcon,
          p = void 0 === u ? 'More' : u,
          d = e.moreTransitionName,
          h = e.style,
          m = e.className,
          b = e.editable,
          g = e.tabBarGutter,
          v = e.rtl,
          y = e.onTabClick,
          O = Object(o['useState'])(!1),
          E = Object(l['a'])(O, 2),
          w = E[0],
          k = E[1],
          S = Object(o['useState'])(null),
          C = Object(l['a'])(S, 2),
          T = C[0],
          M = C[1],
          A = ''.concat(r, '-more-popup'),
          x = ''.concat(n, '-dropdown'),
          N = null !== T ? ''.concat(A, '-').concat(T) : null,
          _ = null === a || void 0 === a ? void 0 : a.dropdownAriaLabel,
          j = o['createElement'](
            Or,
            {
              onClick: function(e) {
                var t = e.key,
                  n = e.domEvent;
                y(t, n), k(!1);
              },
              id: A,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': N,
              selectedKeys: [T],
              'aria-label': void 0 !== _ ? _ : 'expanded dropdown',
            },
            i.map(function(e) {
              return o['createElement'](
                gr,
                {
                  key: e.key,
                  id: ''.concat(A, '-').concat(e.key),
                  role: 'option',
                  'aria-controls': r && ''.concat(r, '-panel-').concat(e.key),
                  disabled: e.disabled,
                },
                e.tab,
              );
            }),
          );
        function R(e) {
          for (
            var t = i.filter(function(e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function(e) {
                  return e.key === T;
                }) || 0,
              r = t.length,
              o = 0;
            o < r;
            o += 1
          ) {
            n = (n + e + r) % r;
            var a = t[n];
            if (!a.disabled) return void M(a.key);
          }
        }
        function P(e) {
          var t = e.which;
          if (w)
            switch (t) {
              case I.UP:
                R(-1), e.preventDefault();
                break;
              case I.DOWN:
                R(1), e.preventDefault();
                break;
              case I.ESC:
                k(!1);
                break;
              case I.SPACE:
              case I.ENTER:
                null !== T && y(T, e);
                break;
            }
          else
            [I.DOWN, I.SPACE, I.ENTER].includes(t) &&
              (k(!0), e.preventDefault());
        }
        Object(o['useEffect'])(
          function() {
            var e = document.getElementById(N);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [T],
        ),
          Object(o['useEffect'])(
            function() {
              w || M(null);
            },
            [w],
          );
        var D = Object(s['a'])({}, v ? 'marginLeft' : 'marginRight', g);
        i.length || ((D.visibility = 'hidden'), (D.order = 1));
        var L = f()(Object(s['a'])({}, ''.concat(x, '-rtl'), v)),
          F = c
            ? null
            : o['createElement'](
                Mr,
                {
                  prefixCls: x,
                  overlay: j,
                  trigger: ['hover'],
                  visible: w,
                  transitionName: d,
                  onVisibleChange: k,
                  overlayClassName: L,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                o['createElement'](
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: D,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': A,
                    id: ''.concat(r, '-more'),
                    'aria-expanded': w,
                    onKeyDown: P,
                  },
                  p,
                ),
              );
        return o['createElement'](
          'div',
          {
            className: f()(''.concat(n, '-nav-operations'), m),
            style: h,
            ref: t,
          },
          F,
          o['createElement'](xr, { prefixCls: n, locale: a, editable: b }),
        );
      }
      var _r = o['forwardRef'](Nr),
        jr = Object(o['createContext'])(null),
        Ir = 0.1,
        Rr = 0.01,
        Pr = 20,
        Dr = Math.pow(0.995, Pr);
      function Lr(e, t) {
        var n = Object(o['useState'])(),
          r = Object(l['a'])(n, 2),
          i = r[0],
          a = r[1],
          s = Object(o['useState'])(0),
          c = Object(l['a'])(s, 2),
          u = c[0],
          p = c[1],
          d = Object(o['useState'])(0),
          f = Object(l['a'])(d, 2),
          h = f[0],
          m = f[1],
          b = Object(o['useState'])(),
          g = Object(l['a'])(b, 2),
          v = g[0],
          y = g[1],
          O = Object(o['useRef'])();
        function E(e) {
          var t = e.touches[0],
            n = t.screenX,
            r = t.screenY;
          a({ x: n, y: r }), window.clearInterval(O.current);
        }
        function w(e) {
          if (i) {
            e.preventDefault();
            var n = e.touches[0],
              r = n.screenX,
              o = n.screenY;
            a({ x: r, y: o });
            var s = r - i.x,
              l = o - i.y;
            t(s, l);
            var c = Date.now();
            p(c), m(c - u), y({ x: s, y: l });
          }
        }
        function k() {
          if (i && (a(null), y(null), v)) {
            var e = v.x / h,
              n = v.y / h,
              r = Math.abs(e),
              o = Math.abs(n);
            if (Math.max(r, o) < Ir) return;
            var s = e,
              l = n;
            O.current = window.setInterval(function() {
              Math.abs(s) < Rr && Math.abs(l) < Rr
                ? window.clearInterval(O.current)
                : ((s *= Dr), (l *= Dr), t(s * Pr, l * Pr));
            }, Pr);
          }
        }
        var S = Object(o['useRef'])();
        function C(e) {
          var n = e.deltaX,
            r = e.deltaY,
            o = 0,
            i = Math.abs(n),
            a = Math.abs(r);
          i === a
            ? (o = 'x' === S.current ? n : r)
            : i > a
            ? ((o = n), (S.current = 'x'))
            : ((o = r), (S.current = 'y')),
            t(-o, -o) && e.preventDefault();
        }
        var T = Object(o['useRef'])(null);
        (T.current = {
          onTouchStart: E,
          onTouchMove: w,
          onTouchEnd: k,
          onWheel: C,
        }),
          o['useEffect'](function() {
            function t(e) {
              T.current.onTouchStart(e);
            }
            function n(e) {
              T.current.onTouchMove(e);
            }
            function r(e) {
              T.current.onTouchEnd(e);
            }
            function o(e) {
              T.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', r, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', o),
              function() {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', r);
              }
            );
          }, []);
      }
      function Fr() {
        var e = Object(o['useRef'])(new Map());
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, o['createRef']()),
            e.current.get(t)
          );
        }
        function n(t) {
          e.current['delete'](t);
        }
        return [t, n];
      }
      function Br(e, t) {
        var n = o['useRef'](e),
          r = o['useState']({}),
          i = Object(l['a'])(r, 2),
          a = i[1];
        function s(e) {
          var r = 'function' === typeof e ? e(n.current) : e;
          r !== n.current && t(r, n.current), (n.current = r), a({});
        }
        return [n.current, s];
      }
      var Kr = function(e) {
        var t,
          n = e.position,
          r = e.prefixCls,
          i = e.extra;
        if (!i) return null;
        var a = i;
        return (
          'right' === n && (t = a.right || (!a.left && a) || null),
          'left' === n && (t = a.left || null),
          t
            ? o['createElement'](
                'div',
                { className: ''.concat(r, '-extra-content') },
                t,
              )
            : null
        );
      };
      function Ur(e, t) {
        var n,
          r = o['useContext'](jr),
          i = r.prefixCls,
          c = r.tabs,
          u = e.className,
          d = e.style,
          h = e.id,
          m = e.animated,
          b = e.activeKey,
          y = e.rtl,
          O = e.extra,
          E = e.editable,
          w = e.locale,
          k = e.tabPosition,
          S = e.tabBarGutter,
          C = e.children,
          T = e.onTabClick,
          M = e.onTabScroll,
          A = Object(o['useRef'])(),
          j = Object(o['useRef'])(),
          I = Object(o['useRef'])(),
          R = Object(o['useRef'])(),
          D = Fr(),
          F = Object(l['a'])(D, 2),
          K = F[0],
          U = F[1],
          H = 'top' === k || 'bottom' === k,
          G = Br(0, function(e, t) {
            H && M && M({ direction: e > t ? 'left' : 'right' });
          }),
          $ = Object(l['a'])(G, 2),
          z = $[0],
          W = $[1],
          V = Br(0, function(e, t) {
            !H && M && M({ direction: e > t ? 'top' : 'bottom' });
          }),
          Y = Object(l['a'])(V, 2),
          X = Y[0],
          q = Y[1],
          Z = Object(o['useState'])(0),
          Q = Object(l['a'])(Z, 2),
          J = Q[0],
          ee = Q[1],
          te = Object(o['useState'])(0),
          ne = Object(l['a'])(te, 2),
          re = ne[0],
          oe = ne[1],
          ie = Object(o['useState'])(0),
          ae = Object(l['a'])(ie, 2),
          se = ae[0],
          le = ae[1],
          ce = Object(o['useState'])(0),
          ue = Object(l['a'])(ce, 2),
          pe = ue[0],
          de = ue[1],
          fe = Object(o['useState'])(null),
          he = Object(l['a'])(fe, 2),
          me = he[0],
          be = he[1],
          ge = Object(o['useState'])(null),
          ve = Object(l['a'])(ge, 2),
          ye = ve[0],
          Oe = ve[1],
          Ee = Object(o['useState'])(0),
          we = Object(l['a'])(Ee, 2),
          ke = we[0],
          Se = we[1],
          Ce = Object(o['useState'])(0),
          Te = Object(l['a'])(Ce, 2),
          Me = Te[0],
          Ae = Te[1],
          xe = _(new Map()),
          Ne = Object(l['a'])(xe, 2),
          _e = Ne[0],
          je = Ne[1],
          Ie = L(c, _e, J),
          Re = ''.concat(i, '-nav-operations-hidden'),
          Pe = 0,
          De = 0;
        function Le(e) {
          return e < Pe ? Pe : e > De ? De : e;
        }
        H
          ? y
            ? ((Pe = 0), (De = Math.max(0, J - me)))
            : ((Pe = Math.min(0, me - J)), (De = 0))
          : ((Pe = Math.min(0, ye - re)), (De = 0));
        var Fe = Object(o['useRef'])(),
          Be = Object(o['useState'])(),
          Ke = Object(l['a'])(Be, 2),
          Ue = Ke[0],
          He = Ke[1];
        function Ge() {
          He(Date.now());
        }
        function $e() {
          window.clearTimeout(Fe.current);
        }
        function ze() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b,
            t = Ie.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (H) {
            var n = z;
            y
              ? t.right < z
                ? (n = t.right)
                : t.right + t.width > z + me && (n = t.right + t.width - me)
              : t.left < -z
              ? (n = -t.left)
              : t.left + t.width > -z + me && (n = -(t.left + t.width - me)),
              q(0),
              W(Le(n));
          } else {
            var r = X;
            t.top < -X
              ? (r = -t.top)
              : t.top + t.height > -X + ye && (r = -(t.top + t.height - ye)),
              W(0),
              q(Le(r));
          }
        }
        Lr(A, function(e, t) {
          function n(e, t) {
            e(function(e) {
              var n = Le(e + t);
              return n;
            });
          }
          if (H) {
            if (me >= J) return !1;
            n(W, e);
          } else {
            if (ye >= re) return !1;
            n(q, t);
          }
          return $e(), Ge(), !0;
        }),
          Object(o['useEffect'])(
            function() {
              return (
                $e(),
                Ue &&
                  (Fe.current = window.setTimeout(function() {
                    He(0);
                  }, 100)),
                $e
              );
            },
            [Ue],
          );
        var We = B(
            Ie,
            { width: me, height: ye, left: z, top: X },
            { width: se, height: pe },
            { width: ke, height: Me },
            Object(p['a'])(Object(p['a'])({}, e), {}, { tabs: c }),
          ),
          Ve = Object(l['a'])(We, 2),
          Ye = Ve[0],
          Xe = Ve[1],
          qe = c.map(function(e) {
            var t = e.key;
            return o['createElement'](P, {
              id: h,
              prefixCls: i,
              key: t,
              rtl: y,
              tab: e,
              closable: e.closable,
              editable: E,
              active: t === b,
              tabPosition: k,
              tabBarGutter: S,
              renderWrapper: C,
              removeAriaLabel:
                null === w || void 0 === w ? void 0 : w.removeAriaLabel,
              ref: K(t),
              onClick: function(e) {
                T(t, e);
              },
              onRemove: function() {
                U(t);
              },
              onFocus: function() {
                ze(t),
                  Ge(),
                  y || (A.current.scrollLeft = 0),
                  (A.current.scrollTop = 0);
              },
            });
          }),
          Ze = N(function() {
            var e,
              t,
              n,
              r,
              o,
              i,
              a,
              s,
              l,
              u =
                (null === (e = A.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              p =
                (null === (t = A.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              d =
                (null === (n = R.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              f =
                (null === (r = R.current) || void 0 === r
                  ? void 0
                  : r.offsetHeight) || 0,
              h =
                (null === (o = I.current) || void 0 === o
                  ? void 0
                  : o.offsetWidth) || 0,
              m =
                (null === (i = I.current) || void 0 === i
                  ? void 0
                  : i.offsetHeight) || 0;
            be(u), Oe(p), Se(d), Ae(f);
            var b =
                ((null === (a = j.current) || void 0 === a
                  ? void 0
                  : a.offsetWidth) || 0) - d,
              g =
                ((null === (s = j.current) || void 0 === s
                  ? void 0
                  : s.offsetHeight) || 0) - f;
            ee(b), oe(g);
            var v =
              null === (l = I.current) || void 0 === l
                ? void 0
                : l.className.includes(Re);
            le(b - (v ? 0 : h)),
              de(g - (v ? 0 : m)),
              je(function() {
                var e = new Map();
                return (
                  c.forEach(function(t) {
                    var n = t.key,
                      r = K(n).current;
                    r &&
                      e.set(n, {
                        width: r.offsetWidth,
                        height: r.offsetHeight,
                        left: r.offsetLeft,
                        top: r.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          Qe = c.slice(0, Ye),
          Je = c.slice(Xe + 1),
          et = [].concat(Object(g['a'])(Qe), Object(g['a'])(Je)),
          tt = Object(o['useState'])(),
          nt = Object(l['a'])(tt, 2),
          rt = nt[0],
          ot = nt[1],
          it = Ie.get(b),
          at = Object(o['useRef'])();
        function st() {
          v['a'].cancel(at.current);
        }
        Object(o['useEffect'])(
          function() {
            var e = {};
            return (
              it &&
                (H
                  ? (y ? (e.right = it.right) : (e.left = it.left),
                    (e.width = it.width))
                  : ((e.top = it.top), (e.height = it.height))),
              st(),
              (at.current = Object(v['a'])(function() {
                ot(e);
              })),
              st
            );
          },
          [it, H, y],
        ),
          Object(o['useEffect'])(
            function() {
              ze();
            },
            [b, it, Ie, H],
          ),
          Object(o['useEffect'])(
            function() {
              Ze();
            },
            [
              y,
              S,
              b,
              c
                .map(function(e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var lt,
          ct,
          ut,
          pt,
          dt = !!et.length,
          ft = ''.concat(i, '-nav-wrap');
        return (
          H
            ? y
              ? ((ct = z > 0), (lt = z + me < J))
              : ((lt = z < 0), (ct = -z + me < J))
            : ((ut = X < 0), (pt = -X + ye < re)),
          o['createElement'](
            'div',
            {
              ref: t,
              role: 'tablist',
              className: f()(''.concat(i, '-nav'), u),
              style: d,
              onKeyDown: function() {
                Ge();
              },
            },
            o['createElement'](Kr, {
              position: 'left',
              extra: O,
              prefixCls: i,
            }),
            o['createElement'](
              x,
              { onResize: Ze },
              o['createElement'](
                'div',
                {
                  className: f()(
                    ft,
                    ((n = {}),
                    Object(s['a'])(n, ''.concat(ft, '-ping-left'), lt),
                    Object(s['a'])(n, ''.concat(ft, '-ping-right'), ct),
                    Object(s['a'])(n, ''.concat(ft, '-ping-top'), ut),
                    Object(s['a'])(n, ''.concat(ft, '-ping-bottom'), pt),
                    n),
                  ),
                  ref: A,
                },
                o['createElement'](
                  x,
                  { onResize: Ze },
                  o['createElement'](
                    'div',
                    {
                      ref: j,
                      className: ''.concat(i, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(z, 'px, ')
                          .concat(X, 'px)'),
                        transition: Ue ? 'none' : void 0,
                      },
                    },
                    qe,
                    o['createElement'](xr, {
                      ref: R,
                      prefixCls: i,
                      locale: w,
                      editable: E,
                      style: { visibility: dt ? 'hidden' : null },
                    }),
                    o['createElement']('div', {
                      className: f()(
                        ''.concat(i, '-ink-bar'),
                        Object(s['a'])(
                          {},
                          ''.concat(i, '-ink-bar-animated'),
                          m.inkBar,
                        ),
                      ),
                      style: rt,
                    }),
                  ),
                ),
              ),
            ),
            o['createElement'](
              _r,
              Object(a['a'])({}, e, {
                ref: I,
                prefixCls: i,
                tabs: et,
                className: !dt && Re,
              }),
            ),
            o['createElement'](Kr, {
              position: 'right',
              extra: O,
              prefixCls: i,
            }),
          )
        );
      }
      var Hr = o['forwardRef'](Ur);
      function Gr(e) {
        var t = e.id,
          n = e.activeKey,
          r = e.animated,
          i = e.tabPosition,
          a = e.rtl,
          l = e.destroyInactiveTabPane,
          c = o['useContext'](jr),
          u = c.prefixCls,
          p = c.tabs,
          d = r.tabPane,
          h = p.findIndex(function(e) {
            return e.key === n;
          });
        return o['createElement'](
          'div',
          { className: f()(''.concat(u, '-content-holder')) },
          o['createElement'](
            'div',
            {
              className: f()(
                ''.concat(u, '-content'),
                ''.concat(u, '-content-').concat(i),
                Object(s['a'])({}, ''.concat(u, '-content-animated'), d),
              ),
              style:
                h && d
                  ? Object(s['a'])(
                      {},
                      a ? 'marginRight' : 'marginLeft',
                      '-'.concat(h, '00%'),
                    )
                  : null,
            },
            p.map(function(e) {
              return o['cloneElement'](e.node, {
                key: e.key,
                prefixCls: u,
                tabKey: e.key,
                id: t,
                animated: d,
                active: e.key === n,
                destroyInactiveTabPane: l,
              });
            }),
          ),
        );
      }
      function $r(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          r = e.className,
          i = e.style,
          a = e.id,
          s = e.active,
          c = e.animated,
          u = e.destroyInactiveTabPane,
          d = e.tabKey,
          h = e.children,
          m = o['useState'](n),
          b = Object(l['a'])(m, 2),
          g = b[0],
          v = b[1];
        o['useEffect'](
          function() {
            s ? v(!0) : u && v(!1);
          },
          [s, u],
        );
        var y = {};
        return (
          s ||
            (c
              ? ((y.visibility = 'hidden'),
                (y.height = 0),
                (y.overflowY = 'hidden'))
              : (y.display = 'none')),
          o['createElement'](
            'div',
            {
              id: a && ''.concat(a, '-panel-').concat(d),
              role: 'tabpanel',
              tabIndex: s ? 0 : -1,
              'aria-labelledby': a && ''.concat(a, '-tab-').concat(d),
              'aria-hidden': !s,
              style: Object(p['a'])(Object(p['a'])({}, y), i),
              className: f()(
                ''.concat(t, '-tabpane'),
                s && ''.concat(t, '-tabpane-active'),
                r,
              ),
            },
            (s || g || n) && h,
          )
        );
      }
      var zr = 0;
      function Wr(e) {
        return Object(h['a'])(e)
          .map(function(e) {
            if (o['isValidElement'](e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return Object(p['a'])(
                Object(p['a'])({ key: t }, e.props),
                {},
                { node: e },
              );
            }
            return null;
          })
          .filter(function(e) {
            return e;
          });
      }
      function Vr(e, t) {
        var n,
          r,
          i = e.id,
          d = e.prefixCls,
          h = void 0 === d ? 'rc-tabs' : d,
          g = e.className,
          v = e.children,
          y = e.direction,
          O = e.activeKey,
          E = e.defaultActiveKey,
          w = e.editable,
          k = e.animated,
          S = void 0 === k ? { inkBar: !0, tabPane: !1 } : k,
          C = e.tabPosition,
          T = void 0 === C ? 'top' : C,
          M = e.tabBarGutter,
          A = e.tabBarStyle,
          x = e.tabBarExtraContent,
          N = e.locale,
          _ = e.moreIcon,
          j = e.moreTransitionName,
          I = e.destroyInactiveTabPane,
          R = e.renderTabBar,
          P = e.onChange,
          D = e.onTabClick,
          L = e.onTabScroll,
          F = Object(u['a'])(e, [
            'id',
            'prefixCls',
            'className',
            'children',
            'direction',
            'activeKey',
            'defaultActiveKey',
            'editable',
            'animated',
            'tabPosition',
            'tabBarGutter',
            'tabBarStyle',
            'tabBarExtraContent',
            'locale',
            'moreIcon',
            'moreTransitionName',
            'destroyInactiveTabPane',
            'renderTabBar',
            'onChange',
            'onTabClick',
            'onTabScroll',
          ]),
          B = Wr(v),
          K = 'rtl' === y;
        r =
          !1 === S
            ? { inkBar: !1, tabPane: !1 }
            : !0 === S
            ? { inkBar: !0, tabPane: !0 }
            : Object(p['a'])(
                { inkBar: !0, tabPane: !1 },
                'object' === Object(c['a'])(S) ? S : {},
              );
        var U = Object(o['useState'])(!1),
          H = Object(l['a'])(U, 2),
          G = H[0],
          $ = H[1];
        Object(o['useEffect'])(function() {
          $(m());
        }, []);
        var z = b(
            function() {
              var e;
              return null === (e = B[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: O, defaultValue: E },
          ),
          W = Object(l['a'])(z, 2),
          V = W[0],
          Y = W[1],
          X = Object(o['useState'])(function() {
            return B.findIndex(function(e) {
              return e.key === V;
            });
          }),
          q = Object(l['a'])(X, 2),
          Z = q[0],
          Q = q[1];
        Object(o['useEffect'])(
          function() {
            var e,
              t = B.findIndex(function(e) {
                return e.key === V;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(Z, B.length - 1))),
              Y(null === (e = B[t]) || void 0 === e ? void 0 : e.key));
            Q(t);
          },
          [
            B.map(function(e) {
              return e.key;
            }).join('_'),
            V,
            Z,
          ],
        );
        var J = b(null, { value: i }),
          ee = Object(l['a'])(J, 2),
          te = ee[0],
          ne = ee[1],
          re = T;
        function oe(e, t) {
          null === D || void 0 === D || D(e, t),
            Y(e),
            null === P || void 0 === P || P(e);
        }
        G && !['left', 'right'].includes(T) && (re = 'top'),
          Object(o['useEffect'])(function() {
            i || (ne('rc-tabs-'.concat(zr)), (zr += 1));
          }, []);
        var ie,
          ae = {
            id: te,
            activeKey: V,
            animated: r,
            tabPosition: re,
            rtl: K,
            mobile: G,
          },
          se = Object(p['a'])(
            Object(p['a'])({}, ae),
            {},
            {
              editable: w,
              locale: N,
              moreIcon: _,
              moreTransitionName: j,
              tabBarGutter: M,
              onTabClick: oe,
              onTabScroll: L,
              extra: x,
              style: A,
              panes: v,
            },
          );
        return (
          (ie = R ? R(se, Hr) : o['createElement'](Hr, se)),
          o['createElement'](
            jr.Provider,
            { value: { tabs: B, prefixCls: h } },
            o['createElement'](
              'div',
              Object(a['a'])(
                {
                  ref: t,
                  id: i,
                  className: f()(
                    h,
                    ''.concat(h, '-').concat(re),
                    ((n = {}),
                    Object(s['a'])(n, ''.concat(h, '-mobile'), G),
                    Object(s['a'])(n, ''.concat(h, '-editable'), w),
                    Object(s['a'])(n, ''.concat(h, '-rtl'), K),
                    n),
                    g,
                  ),
                },
                F,
              ),
              ie,
              o['createElement'](
                Gr,
                Object(a['a'])({ destroyInactiveTabPane: I }, ae, {
                  animated: r,
                }),
              ),
            ),
          )
        );
      }
      var Yr = o['forwardRef'](Vr);
      Yr.TabPane = $r;
      var Xr = Yr,
        qr = Xr,
        Zr = n('9kvl'),
        Qr = n('dEAq'),
        Jr = n('ZpkN');
      n('TIsu');
      function eo(e, t) {
        var n,
          r =
            null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r;
      }
      var to = e => {
        var t,
          n,
          a,
          s = Object(o['useRef'])(),
          l = Object(o['useContext'])(Qr['context']),
          c = l.locale,
          u = Object(Qr['useLocaleProps'])(c, e),
          p = Object(Qr['useDemoUrl'])(u.identifier),
          d = u.demoUrl || p,
          f =
            (null === Zr['a'] || void 0 === Zr['a']
              ? void 0
              : Zr['a'].location.hash) === '#'.concat(u.identifier),
          h = 1 === Object.keys(u.sources).length,
          m = Object(Qr['useCodeSandbox'])(
            null !== (t = u.hideActions) && void 0 !== t && t.includes('CSB')
              ? null
              : u,
          ),
          b = Object(Qr['useRiddle'])(
            null !== (n = u.hideActions) && void 0 !== n && n.includes('RIDDLE')
              ? null
              : u,
          ),
          g = Object(Qr['useMotions'])(u.motions || [], s.current),
          v = Object(r['default'])(g, 2),
          y = v[0],
          O = v[1],
          E = Object(Qr['useCopy'])(),
          w = Object(r['default'])(E, 2),
          k = w[0],
          S = w[1],
          C = Object(o['useState'])('_'),
          T = Object(r['default'])(C, 2),
          M = T[0],
          A = T[1],
          x = Object(o['useState'])(eo(M, u.sources[M])),
          N = Object(r['default'])(x, 2),
          _ = N[0],
          j = N[1],
          I = Object(o['useState'])(Boolean(u.defaultShowCode)),
          R = Object(r['default'])(I, 2),
          P = R[0],
          D = R[1],
          L = Object(o['useState'])(Math.random()),
          F = Object(r['default'])(L, 2),
          B = F[0],
          K = F[1],
          U = u.sources[M][_] || u.sources[M].content,
          H = Object(Qr['useTSPlaygroundUrl'])(c, U),
          G = Object(o['useRef'])(),
          $ = Object(Qr['usePrefersColor'])(),
          z = Object(r['default'])($, 1),
          W = z[0];
        function V(e) {
          A(e), j(eo(e, u.sources[e]));
        }
        return (
          Object(o['useEffect'])(() => {
            K(Math.random());
          }, [W]),
          i.a.createElement(
            'div',
            {
              style: u.style,
              className: [
                u.className,
                '__dumi-default-previewer',
                f ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: u.identifier,
              'data-debug': u.debug || void 0,
              'data-iframe': u.iframe || void 0,
            },
            u.iframe &&
              i.a.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            i.a.createElement(
              'div',
              {
                ref: s,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: u.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    u.compact || (u.iframe && !1 !== u.compact) ? '0' : void 0,
                  background: u.background,
                },
              },
              u.iframe
                ? i.a.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(u.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: B,
                    src: d,
                    ref: G,
                  })
                : u.children,
            ),
            i.a.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': u.title,
              },
              u.title &&
                i.a.createElement(
                  Qr['AnchorLink'],
                  { to: '#'.concat(u.identifier) },
                  u.title,
                ),
              u.description &&
                i.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: u.description },
                }),
            ),
            i.a.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              m &&
                i.a.createElement('button', {
                  title: 'Open demo on CodeSandbox.io',
                  className: '__dumi-default-icon',
                  role: 'codesandbox',
                  onClick: m,
                }),
              b &&
                i.a.createElement('button', {
                  title: 'Open demo on Riddle',
                  className: '__dumi-default-icon',
                  role: 'riddle',
                  onClick: b,
                }),
              u.motions &&
                i.a.createElement('button', {
                  title: 'Execute motions',
                  className: '__dumi-default-icon',
                  role: 'motions',
                  disabled: O,
                  onClick: () => y(),
                }),
              u.iframe &&
                i.a.createElement('button', {
                  title: 'Reload demo iframe page',
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: () => K(Math.random()),
                }),
              !(
                null !== (a = u.hideActions) &&
                void 0 !== a &&
                a.includes('EXTERNAL')
              ) &&
                i.a.createElement(
                  Qr['Link'],
                  { target: '_blank', to: d },
                  i.a.createElement('button', {
                    title: 'Open demo in new tab',
                    className: '__dumi-default-icon',
                    role: 'open-demo',
                    type: 'button',
                  }),
                ),
              i.a.createElement('span', null),
              i.a.createElement('button', {
                title: 'Copy source code',
                className: '__dumi-default-icon',
                role: 'copy',
                'data-status': S,
                onClick: () => k(U),
              }),
              'tsx' === _ &&
                P &&
                i.a.createElement(
                  Qr['Link'],
                  { target: '_blank', to: H },
                  i.a.createElement('button', {
                    title: 'Get JSX via TypeScript Playground',
                    className: '__dumi-default-icon',
                    role: 'change-tsx',
                    type: 'button',
                  }),
                ),
              i.a.createElement('button', {
                title: 'Toggle source code panel',
                className: '__dumi-default-icon'.concat(
                  P ? ' __dumi-default-btn-expand' : '',
                ),
                role: 'source',
                type: 'button',
                onClick: () => D(!P),
              }),
            ),
            P &&
              i.a.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !h &&
                  i.a.createElement(
                    qr,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: M,
                      onChange: V,
                    },
                    Object.keys(u.sources).map(e =>
                      i.a.createElement($r, {
                        tab:
                          '_' === e ? 'index.'.concat(eo(e, u.sources[e])) : e,
                        key: e,
                      }),
                    ),
                  ),
                i.a.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  i.a.createElement(Jr['a'], {
                    code: U,
                    lang: _,
                    showCopy: !1,
                  }),
                ),
              ),
          )
        );
      };
      t['default'] = to;
    },
    Gytx: function(e, t) {
      e.exports = function(e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < i.length;
          l++
        ) {
          var c = i[l];
          if (!s(c)) return !1;
          var u = e[c],
            p = t[c];
          if (
            ((o = n ? n.call(r, u, p, c) : void 0),
            !1 === o || (void 0 === o && u !== p))
          )
            return !1;
        }
        return !0;
      };
    },
    LMrN: function(e, t, n) {},
    TIsu: function(e, t, n) {},
    ZpkN: function(e, t, n) {
      'use strict';
      var r = n('0Owb'),
        o = n('tJVT'),
        i = n('q1tI'),
        a = n.n(i),
        s = (function() {
          var e = 0,
            t = {
              util: {
                encode: function(e) {
                  return e instanceof n
                    ? new n(e.type, t.util.encode(e.content), e.alias)
                    : 'Array' === t.util.type(e)
                    ? e.map(t.util.encode)
                    : e
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function(e) {
                  return Object.prototype.toString
                    .call(e)
                    .match(/\[object (\w+)\]/)[1];
                },
                objId: function(t) {
                  return (
                    t['__id'] ||
                      Object.defineProperty(t, '__id', { value: ++e }),
                    t['__id']
                  );
                },
                clone: function(e, n) {
                  var r = t.util.type(e);
                  switch (((n = n || {}), r)) {
                    case 'Object':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      i = {};
                      for (var o in ((n[t.util.objId(e)] = i), e))
                        e.hasOwnProperty(o) && (i[o] = t.util.clone(e[o], n));
                      return i;
                    case 'Array':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      var i = [];
                      return (
                        (n[t.util.objId(e)] = i),
                        e.forEach(function(e, r) {
                          i[r] = t.util.clone(e, n);
                        }),
                        i
                      );
                  }
                  return e;
                },
              },
              languages: {
                extend: function(e, n) {
                  var r = t.util.clone(t.languages[e]);
                  for (var o in n) r[o] = n[o];
                  return r;
                },
                insertBefore: function(e, n, r, o) {
                  o = o || t.languages;
                  var i = o[e];
                  if (2 == arguments.length) {
                    for (var a in ((r = arguments[1]), r))
                      r.hasOwnProperty(a) && (i[a] = r[a]);
                    return i;
                  }
                  var s = {};
                  for (var l in i)
                    if (i.hasOwnProperty(l)) {
                      if (l == n)
                        for (var a in r) r.hasOwnProperty(a) && (s[a] = r[a]);
                      s[l] = i[l];
                    }
                  return (
                    t.languages.DFS(t.languages, function(t, n) {
                      n === o[e] && t != e && (this[t] = s);
                    }),
                    (o[e] = s)
                  );
                },
                DFS: function(e, n, r, o) {
                  for (var i in ((o = o || {}), e))
                    e.hasOwnProperty(i) &&
                      (n.call(e, i, e[i], r || i),
                      'Object' !== t.util.type(e[i]) || o[t.util.objId(e[i])]
                        ? 'Array' !== t.util.type(e[i]) ||
                          o[t.util.objId(e[i])] ||
                          ((o[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, i, o))
                        : ((o[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, null, o)));
                },
              },
              plugins: {},
              highlight: function(e, r, o) {
                var i = { code: e, grammar: r, language: o };
                return (
                  t.hooks.run('before-tokenize', i),
                  (i.tokens = t.tokenize(i.code, i.grammar)),
                  t.hooks.run('after-tokenize', i),
                  n.stringify(t.util.encode(i.tokens), i.language)
                );
              },
              matchGrammar: function(e, n, r, o, i, a, s) {
                var l = t.Token;
                for (var c in r)
                  if (r.hasOwnProperty(c) && r[c]) {
                    if (c == s) return;
                    var u = r[c];
                    u = 'Array' === t.util.type(u) ? u : [u];
                    for (var p = 0; p < u.length; ++p) {
                      var d = u[p],
                        f = d.inside,
                        h = !!d.lookbehind,
                        m = !!d.greedy,
                        b = 0,
                        g = d.alias;
                      if (m && !d.pattern.global) {
                        var v = d.pattern.toString().match(/[imuy]*$/)[0];
                        d.pattern = RegExp(d.pattern.source, v + 'g');
                      }
                      d = d.pattern || d;
                      for (
                        var y = o, O = i;
                        y < n.length;
                        O += n[y].length, ++y
                      ) {
                        var E = n[y];
                        if (n.length > e.length) return;
                        if (!(E instanceof l)) {
                          if (m && y != n.length - 1) {
                            d.lastIndex = O;
                            var w = d.exec(e);
                            if (!w) break;
                            for (
                              var k = w.index + (h ? w[1].length : 0),
                                S = w.index + w[0].length,
                                C = y,
                                T = O,
                                M = n.length;
                              C < M &&
                              (T < S || (!n[C].type && !n[C - 1].greedy));
                              ++C
                            )
                              (T += n[C].length), k >= T && (++y, (O = T));
                            if (n[y] instanceof l) continue;
                            (A = C - y), (E = e.slice(O, T)), (w.index -= O);
                          } else {
                            d.lastIndex = 0;
                            w = d.exec(E);
                            var A = 1;
                          }
                          if (w) {
                            h && (b = w[1] ? w[1].length : 0);
                            (k = w.index + b),
                              (w = w[0].slice(b)),
                              (S = k + w.length);
                            var x = E.slice(0, k),
                              N = E.slice(S),
                              _ = [y, A];
                            x && (++y, (O += x.length), _.push(x));
                            var j = new l(c, f ? t.tokenize(w, f) : w, g, w, m);
                            if (
                              (_.push(j),
                              N && _.push(N),
                              Array.prototype.splice.apply(n, _),
                              1 != A && t.matchGrammar(e, n, r, y, O, !0, c),
                              a)
                            )
                              break;
                          } else if (a) break;
                        }
                      }
                    }
                  }
              },
              hooks: { add: function() {}, run: function(e, t) {} },
              tokenize: function(e, n, r) {
                var o = [e],
                  i = n.rest;
                if (i) {
                  for (var a in i) n[a] = i[a];
                  delete n.rest;
                }
                return t.matchGrammar(e, o, n, 0, 0, !1), o;
              },
            },
            n = (t.Token = function(e, t, n, r, o) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (r || '').length),
                (this.greedy = !!o);
            });
          return (
            (n.stringify = function(e, r, o) {
              if ('string' == typeof e) return e;
              if ('Array' === t.util.type(e))
                return e
                  .map(function(t) {
                    return n.stringify(t, r, e);
                  })
                  .join('');
              var i = {
                type: e.type,
                content: n.stringify(e.content, r, o),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: r,
                parent: o,
              };
              if (e.alias) {
                var a = 'Array' === t.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(i.classes, a);
              }
              var s = Object.keys(i.attributes)
                .map(function(e) {
                  return (
                    e +
                    '="' +
                    (i.attributes[e] || '').replace(/"/g, '&quot;') +
                    '"'
                  );
                })
                .join(' ');
              return (
                '<' +
                i.tag +
                ' class="' +
                i.classes.join(' ') +
                '"' +
                (s ? ' ' + s : '') +
                '>' +
                i.content +
                '</' +
                i.tag +
                '>'
              );
            }),
            t
          );
        })();
      (s.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': {
              pattern: /(\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: [
          { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
          /&#x?[\da-f]{1,8};/i,
        ],
      }),
        (s.languages.markup['tag'].inside['attr-value'].inside['entity'] =
          s.languages.markup['entity']),
        (s.languages.markup['doctype'].inside['internal-subset'].inside =
          s.languages.markup),
        s.hooks.add('wrap', function(e) {
          'entity' === e.type &&
            (e.attributes['title'] = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(s.languages.markup.tag, 'addInlined', {
          value: function(e, t) {
            var n = {};
            (n['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: s.languages[t],
            }),
              (n['cdata'] = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r['language-' + t] = { pattern: /[\s\S]+/, inside: s.languages[t] };
            var o = {};
            (o[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function() {
                    return e;
                  },
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              s.languages.insertBefore('markup', 'cdata', o);
          },
        }),
        (s.languages.html = s.languages.markup),
        (s.languages.mathml = s.languages.markup),
        (s.languages.svg = s.languages.markup),
        (s.languages.xml = s.languages.extend('markup', {})),
        (s.languages.ssml = s.languages.xml),
        (s.languages.atom = s.languages.xml),
        (s.languages.rss = s.languages.xml),
        (function(e) {
          var t =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + t),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
            ],
            environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
            variable: r.variable,
            function: {
              pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                'file-descriptor': { pattern: /^\d/, alias: 'important' },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var o = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              i = r.variable[1].inside,
              a = 0;
            a < o.length;
            a++
          )
            i[o[a]] = e.languages.bash[o[a]];
          e.languages.shell = e.languages.bash;
        })(s),
        (s.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (s.languages.c = s.languages.extend('clike', {
          comment: {
            pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          function: /[a-z_]\w*(?=\s*\()/i,
          number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        s.languages.insertBefore('c', 'string', {
          macro: {
            pattern: /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                s.languages.c['string'],
              ],
              comment: s.languages.c['comment'],
              'macro-name': [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: 'function',
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: 'keyword',
              },
              'directive-hash': /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: s.languages.c },
            },
          },
          constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete s.languages.c['boolean'],
        (function(e) {
          var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
          (e.languages.cpp = e.languages.extend('c', {
            'class-name': [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function() {
                      return t.source;
                    },
                  ),
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:true|false)\b/,
          })),
            e.languages.insertBefore('cpp', 'string', {
              'raw-string': {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: 'string',
                greedy: !0,
              },
            }),
            e.languages.insertBefore('cpp', 'class-name', {
              'base-clause': {
                pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend('cpp', {}),
              },
            }),
            e.languages.insertBefore(
              'inside',
              'operator',
              { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp['base-clause'],
            );
        })(s),
        (function(e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  t.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i',
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
              },
            },
            selector: RegExp(
              '[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
                t.source +
                ')*(?=\\s*\\{)',
            ),
            string: { pattern: t, greedy: !0 },
            property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css['atrule'].inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined('style', 'css'),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                  lookbehind: !0,
                  inside: {
                    'attr-value': {
                      pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                      inside: {
                        style: {
                          pattern: /(["'])[\s\S]+(?=["']$)/,
                          lookbehind: !0,
                          alias: 'language-css',
                          inside: e.languages.css,
                        },
                        punctuation: [
                          { pattern: /^=/, alias: 'attr-equals' },
                          /"|'/,
                        ],
                      },
                    },
                    'attr-name': /^style/i,
                  },
                },
              },
              n.tag,
            ));
        })(s),
        (function(e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector,
            inside: (t = {
              'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              'pseudo-class': /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  'case-sensitivity': {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: 'keyword',
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  'attr-name': {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  'attr-value': [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              'n-th': [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css['atrule'].inside[
              'selector-function-argument'
            ].inside = t),
            e.languages.insertBefore('css', 'property', {
              variable: {
                pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var r = { pattern: /(\b\d+)(?:%|[a-z]+\b)/, lookbehind: !0 },
            o = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore('css', 'function', {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i, alias: 'color' },
            color: [
              /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
              {
                pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: o,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: o,
          });
        })(s),
        (s.languages.javascript = s.languages.extend('clike', {
          'class-name': [
            s.languages.clike['class-name'],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (s.languages.javascript[
          'class-name'
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        s.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: s.languages.regex,
              },
              'regex-flags': /[a-z]+$/,
              'regex-delimiter': /^\/|\/$/,
            },
          },
          'function-variable': {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
            {
              pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              inside: s.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        s.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\${|}$/,
                    alias: 'punctuation',
                  },
                  rest: s.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        s.languages.markup &&
          s.languages.markup.tag.addInlined('script', 'javascript'),
        (s.languages.js = s.languages.javascript),
        (function(e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside[
              'attr-value'
            ].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside['tag'].inside[
              'class-name'
            ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ },
                },
              },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?={)/,
                      alias: 'punctuation',
                    },
                    rest: e.languages.jsx,
                  },
                  alias: 'language-javascript',
                },
              },
              e.languages.jsx.tag,
            );
          var n = function e(t) {
              return t
                ? 'string' === typeof t
                  ? t
                  : 'string' === typeof t.content
                  ? t.content
                  : t.content.map(e).join('')
                : '';
            },
            r = function t(r) {
              for (var o = [], i = 0; i < r.length; i++) {
                var a = r[i],
                  s = !1;
                if (
                  ('string' !== typeof a &&
                    ('tag' === a.type &&
                    a.content[0] &&
                    'tag' === a.content[0].type
                      ? '</' === a.content[0].content[0].content
                        ? o.length > 0 &&
                          o[o.length - 1].tagName ===
                            n(a.content[0].content[1]) &&
                          o.pop()
                        : '/>' === a.content[a.content.length - 1].content ||
                          o.push({
                            tagName: n(a.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : o.length > 0 &&
                        'punctuation' === a.type &&
                        '{' === a.content
                      ? o[o.length - 1].openedBraces++
                      : o.length > 0 &&
                        o[o.length - 1].openedBraces > 0 &&
                        'punctuation' === a.type &&
                        '}' === a.content
                      ? o[o.length - 1].openedBraces--
                      : (s = !0)),
                  (s || 'string' === typeof a) &&
                    o.length > 0 &&
                    0 === o[o.length - 1].openedBraces)
                ) {
                  var l = n(a);
                  i < r.length - 1 &&
                    ('string' === typeof r[i + 1] ||
                      'plain-text' === r[i + 1].type) &&
                    ((l += n(r[i + 1])), r.splice(i + 1, 1)),
                    i > 0 &&
                      ('string' === typeof r[i - 1] ||
                        'plain-text' === r[i - 1].type) &&
                      ((l = n(r[i - 1]) + l), r.splice(i - 1, 1), i--),
                    (r[i] = new e.Token('plain-text', l, null, l));
                }
                a.content && 'string' !== typeof a.content && t(a.content);
              }
            };
          e.hooks.add('after-tokenize', function(e) {
            ('jsx' !== e.language && 'tsx' !== e.language) || r(e.tokens);
          });
        })(s),
        (function(e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function() {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t,
            );
          }
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  e.languages.javascript['function-variable'].pattern.source,
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + e.languages.javascript['function'].source,
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.insertBefore('javascript', 'keyword', {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript['keyword'].unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              {
                pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var n = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r],
              i = e.languages.javascript[o];
            'RegExp' === e.util.type(i) &&
              (i = e.languages.javascript[o] = { pattern: i });
            var a = i.inside || {};
            (i.inside = a), (a['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(s),
        (function(e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': {
                pattern: /###[\s\S]+?###/,
                alias: 'comment',
              },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: 'language-javascript',
                    inside: e.languages.javascript,
                  },
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: 'string',
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(s),
        (function(e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var t = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          };
          Object.keys(t).forEach(function(n) {
            var r = t[n],
              o = [];
            /^\w+$/.test(n) || o.push(/\w+/.exec(n)[0]),
              'diff' === n && o.push('bold'),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  '^(?:[' + r + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
                  'm',
                ),
                alias: o,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: t });
        })(s),
        (s.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          'commit-sha1': /^commit \w{40}$/m,
        }),
        (s.languages.go = s.languages.extend('clike', {
          string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
        })),
        delete s.languages.go['class-name'],
        (s.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: s.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function(e) {
          function t(e, t) {
            return '___' + e.toUpperCase() + t + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function(n, r, o, i) {
                if (n.language === r) {
                  var a = (n.tokenStack = []);
                  (n.code = n.code.replace(o, function(e) {
                    if ('function' === typeof i && !i(e)) return e;
                    var o,
                      s = a.length;
                    while (-1 !== n.code.indexOf((o = t(r, s)))) ++s;
                    return (a[s] = e), o;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function(n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var o = 0,
                    i = Object.keys(n.tokenStack);
                  a(n.tokens);
                }
                function a(s) {
                  for (var l = 0; l < s.length; l++) {
                    if (o >= i.length) break;
                    var c = s[l];
                    if (
                      'string' === typeof c ||
                      (c.content && 'string' === typeof c.content)
                    ) {
                      var u = i[o],
                        p = n.tokenStack[u],
                        d = 'string' === typeof c ? c : c.content,
                        f = t(r, u),
                        h = d.indexOf(f);
                      if (h > -1) {
                        ++o;
                        var m = d.substring(0, h),
                          b = new e.Token(
                            r,
                            e.tokenize(p, n.grammar),
                            'language-' + r,
                            p,
                          ),
                          g = d.substring(h + f.length),
                          v = [];
                        m && v.push.apply(v, a([m])),
                          v.push(b),
                          g && v.push.apply(v, a([g])),
                          'string' === typeof c
                            ? s.splice.apply(s, [l, 1].concat(v))
                            : (c.content = v);
                      }
                    } else c.content && a(c.content);
                  }
                  return s;
                }
              },
            },
          });
        })(s),
        (function(e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
              lookbehind: !0,
              alias: 'keyword',
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function(t) {
              var n = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'handlebars',
                n,
              );
            }),
            e.hooks.add('after-tokenize', function(t) {
              e.languages['markup-templating'].tokenizePlaceholders(
                t,
                'handlebars',
              );
            });
        })(s),
        (s.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (s.languages.webmanifest = s.languages.json),
        (s.languages.less = s.languages.extend('css', {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        s.languages.insertBefore('less', 'property', {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          'mixin-usage': {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: 'function',
          },
        }),
        (s.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (function(e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function() {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function() {
                return r;
              },
            ),
            i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
              .source;
          (e.languages.markdown = e.languages.extend('markup', {})),
            e.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'font-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + o + i + '(?:' + o + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + o + i + ')(?:' + o + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + o + ')' + i + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + o + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(r),
                        alias: 'important',
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function(t) {
              ['url', 'bold', 'italic', 'strike'].forEach(function(n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add('after-tokenize', function(e) {
              function t(e) {
                if (e && 'string' !== typeof e)
                  for (var n = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    if ('code' === o.type) {
                      var i = o.content[1],
                        a = o.content[3];
                      if (
                        i &&
                        a &&
                        'code-language' === i.type &&
                        'code-block' === a.type &&
                        'string' === typeof i.content
                      ) {
                        var s = i.content
                          .replace(/\b#/g, 'sharp')
                          .replace(/\b\+\+/g, 'pp');
                        s = (/[a-z][\w-]*/i.exec(s) || [''])[0].toLowerCase();
                        var l = 'language-' + s;
                        a.alias
                          ? 'string' === typeof a.alias
                            ? (a.alias = [a.alias, l])
                            : a.alias.push(l)
                          : (a.alias = [l]);
                      }
                    } else t(o.content);
                  }
              }
              ('markdown' !== e.language && 'md' !== e.language) || t(e.tokens);
            }),
            e.hooks.add('wrap', function(t) {
              if ('code-block' === t.type) {
                for (var n = '', r = 0, o = t.classes.length; r < o; r++) {
                  var i = t.classes[r],
                    a = /language-(.+)/.exec(i);
                  if (a) {
                    n = a[1];
                    break;
                  }
                }
                var s = e.languages[n];
                if (s) {
                  var l = t.content
                    .replace(/&lt;/g, '<')
                    .replace(/&amp;/g, '&');
                  t.content = e.highlight(l, s, n);
                } else if (n && 'none' !== n && e.plugins.autoloader) {
                  var c =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(1e16 * Math.random());
                  (t.attributes['id'] = c),
                    e.plugins.autoloader.loadLanguages(n, function() {
                      var t = document.getElementById(c);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n,
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(s),
        (s.languages.objectivec = s.languages.extend('c', {
          string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete s.languages.objectivec['class-name'],
        (s.languages.objc = s.languages.objectivec),
        (s.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
          directive: { pattern: /\B#\w+/, alias: 'important' },
          label: { pattern: /\B~\w+/, alias: 'function' },
          'type-variable': { pattern: /\B'\w+/, alias: 'function' },
          variant: { pattern: /`\w+/, alias: 'variable' },
          module: { pattern: /\b[A-Z]\w+/, alias: 'variable' },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /[(){}\[\]|.,:;]|\b_\b/,
        }),
        (s.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          'string-interpolation': {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  'format-spec': {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  'conversion-option': {
                    pattern: /![sra](?=[:}]$)/,
                    alias: 'punctuation',
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: 'string',
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/im,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (s.languages.python['string-interpolation'].inside[
          'interpolation'
        ].inside.rest = s.languages.python),
        (s.languages.py = s.languages.python),
        (s.languages.reason = s.languages.extend('clike', {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          'class-name': /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        s.languages.insertBefore('reason', 'class-name', {
          character: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: 'string',
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete s.languages.reason['function'],
        (function(e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern: /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(s),
        (s.languages.scss = s.languages.extend('css', {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        s.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        s.languages.insertBefore('scss', 'important', {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        s.languages.insertBefore('scss', 'function', {
          'module-modifier': {
            pattern: /\b(?:as|with|show|hide)\b/i,
            alias: 'keyword',
          },
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: 'keyword',
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (s.languages.scss['atrule'].inside.rest = s.languages.scss),
        (s.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function(e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /url\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:true|false)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (r['interpolation'] = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: {
              delimiter: { pattern: /^{|}$/, alias: 'punctuation' },
              rest: r,
            },
          }),
            (r['func'] = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              'atrule-declaration': {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              'property-declaration': {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(s),
        (function(e) {
          (e.languages.typescript = e.languages.extend('javascript', {
            'class-name': {
              pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
            builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
          })),
            delete e.languages.typescript['parameter'];
          var t = e.languages.extend('typescript', {});
          delete t['class-name'],
            (e.languages.typescript['class-name'].inside = t),
            e.languages.insertBefore('typescript', 'function', {
              'generic-function': {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(s),
        (function(e) {
          var t = e.util.clone(e.languages.typescript);
          e.languages.tsx = e.languages.extend('jsx', t);
          var n = e.languages.tsx.tag;
          (n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + '(?:' + n.pattern.source + ')',
            n.pattern.flags,
          )),
            (n.lookbehind = !0);
        })(s),
        (s.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (function(e) {
          var t = /[*&][^\s[\]{},]+/,
            n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              '(?:' +
              n.source +
              '(?:[ \t]+' +
              t.source +
              ')?|' +
              t.source +
              '(?:[ \t]+' +
              n.source +
              ')?)',
            o = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
              /<PLAIN>/g,
              function() {
                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                  .source;
              },
            ),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function a(e, t) {
            t = (t || '').replace(/m/g, '') + 'm';
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function() {
                return r;
              })
              .replace(/<<value>>/g, function() {
                return e;
              });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function() {
                    return r;
                  },
                ),
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function() {
                    return r;
                  })
                  .replace(/<<key>>/g, function() {
                    return '(?:' + o + '|' + i + ')';
                  }),
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important',
            },
            datetime: {
              pattern: a(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: a(/true|false/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: a(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: a(i), lookbehind: !0, greedy: !0 },
            number: {
              pattern: a(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i',
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(s);
      var l = s,
        c = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
              style: { color: '#6c6783' },
            },
            { types: ['namespace'], style: { opacity: 0.7 } },
            {
              types: ['tag', 'operator', 'number'],
              style: { color: '#e09142' },
            },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            {
              types: ['tag-id', 'selector', 'atrule-id'],
              style: { color: '#eeebff' },
            },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            {
              types: ['deleted'],
              style: { textDecorationLine: 'line-through' },
            },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        u = c,
        p = { Prism: l, theme: u };
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f() {
        return (
          (f =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          f.apply(this, arguments)
        );
      }
      var h = /\r\n|\r|\n/,
        m = function(e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length &&
              '' === e[0].content &&
              ((e[0].content = '\n'), (e[0].empty = !0));
        },
        b = function(e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        g = function(e) {
          var t = [[]],
            n = [e],
            r = [0],
            o = [e.length],
            i = 0,
            a = 0,
            s = [],
            l = [s];
          while (a > -1) {
            while ((i = r[a]++) < o[a]) {
              var c = void 0,
                u = t[a],
                p = n[a],
                d = p[i];
              if (
                ('string' === typeof d
                  ? ((u = a > 0 ? u : ['plain']), (c = d))
                  : ((u = b(u, d.type)),
                    d.alias && (u = b(u, d.alias)),
                    (c = d.content)),
                'string' === typeof c)
              ) {
                var f = c.split(h),
                  g = f.length;
                s.push({ types: u, content: f[0] });
                for (var v = 1; v < g; v++)
                  m(s), l.push((s = [])), s.push({ types: u, content: f[v] });
              } else a++, t.push(u), n.push(c), r.push(0), o.push(c.length);
            }
            a--, t.pop(), n.pop(), r.pop(), o.pop();
          }
          return m(s), l;
        },
        v = function(e, t) {
          var n = e.plain,
            r = Object.create(null),
            o = e.styles.reduce(function(e, n) {
              var r = n.languages,
                o = n.style;
              return (
                (r && !r.includes(t)) ||
                  n.types.forEach(function(t) {
                    var n = f({}, e[t], o);
                    e[t] = n;
                  }),
                e
              );
            }, r);
          return (
            (o.root = n), (o.plain = f({}, n, { backgroundColor: null })), o
          );
        };
      function y(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            -1 === t.indexOf(r) &&
            (n[r] = e[r]);
        return n;
      }
      var O = (function(e) {
          function t() {
            var t = this,
              n = [],
              r = arguments.length;
            while (r--) n[r] = arguments[r];
            e.apply(this, n),
              d(this, 'getThemeDict', function(e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? v(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              d(this, 'getLineProps', function(e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  i = y(e, ['key', 'className', 'style', 'line']),
                  a = i,
                  s = f({}, a, {
                    className: 'token-line',
                    style: void 0,
                    key: void 0,
                  }),
                  l = t.getThemeDict(t.props);
                return (
                  void 0 !== l && (s.style = l.plain),
                  void 0 !== o &&
                    (s.style = void 0 !== s.style ? f({}, s.style, o) : o),
                  void 0 !== n && (s.key = n),
                  r && (s.className += ' ' + r),
                  s
                );
              }),
              d(this, 'getStyleForToken', function(e) {
                var n = e.types,
                  r = e.empty,
                  o = n.length,
                  i = t.getThemeDict(t.props);
                if (void 0 !== i) {
                  if (1 === o && 'plain' === n[0])
                    return r ? { display: 'inline-block' } : void 0;
                  if (1 === o && !r) return i[n[0]];
                  var a = r ? { display: 'inline-block' } : {},
                    s = n.map(function(e) {
                      return i[e];
                    });
                  return Object.assign.apply(Object, [a].concat(s));
                }
              }),
              d(this, 'getTokenProps', function(e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  i = e.token,
                  a = y(e, ['key', 'className', 'style', 'token']),
                  s = a,
                  l = f({}, s, {
                    className: 'token ' + i.types.join(' '),
                    children: i.content,
                    style: t.getStyleForToken(i),
                    key: void 0,
                  });
                return (
                  void 0 !== o &&
                    (l.style = void 0 !== l.style ? f({}, l.style, o) : o),
                  void 0 !== n && (l.key = n),
                  r && (l.className += ' ' + r),
                  l
                );
              }),
              d(this, 'tokenize', function(e, t, n, r) {
                var o = { code: t, grammar: n, language: r, tokens: [] };
                e.hooks.run('before-tokenize', o);
                var i = (o.tokens = e.tokenize(o.code, o.grammar, o.language));
                return e.hooks.run('after-tokenize', o), i;
              });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                r = e.code,
                o = e.children,
                i = this.getThemeDict(this.props),
                a = t.languages[n],
                s = void 0 !== a ? this.tokenize(t, r, a, n) : [r],
                l = g(s);
              return o({
                tokens: l,
                className: 'prism-code language-' + n,
                style: void 0 !== i ? i.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            t
          );
        })(i['Component']),
        E = O,
        w = n('dEAq');
      n('qHiR'),
        n('LMrN'),
        (t['a'] = e => {
          var t = e.code,
            n = e.lang,
            i = e.showCopy,
            s = void 0 === i || i,
            l = Object(w['useCopy'])(),
            c = Object(o['default'])(l, 2),
            u = c[0],
            d = c[1];
          return a.a.createElement(
            'div',
            { className: '__dumi-default-code-block' },
            a.a.createElement(
              E,
              Object(r['a'])({}, p, { code: t, language: n, theme: void 0 }),
              e => {
                var n = e.className,
                  r = e.style,
                  o = e.tokens,
                  i = e.getLineProps,
                  l = e.getTokenProps;
                return a.a.createElement(
                  'pre',
                  { className: n, style: r },
                  s &&
                    a.a.createElement('button', {
                      className:
                        '__dumi-default-icon __dumi-default-code-block-copy-btn',
                      'data-status': d,
                      onClick: () => u(t),
                    }),
                  o.map((e, t) =>
                    a.a.createElement(
                      'div',
                      i({ line: e, key: t }),
                      e.map((e, t) =>
                        a.a.createElement('span', l({ token: e, key: t })),
                      ),
                    ),
                  ),
                );
              },
            ),
          );
        });
    },
    bdgK: function(e, t, n) {
      'use strict';
      (function(e) {
        var n = (function() {
            if ('undefined' !== typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function(e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function() {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, 'size', {
                  get: function() {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function(t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function(t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype['delete'] = function(t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function(t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function() {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function(e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n];
                    e.call(t, o[1], o[0]);
                  }
                }),
                t
              );
            })();
          })(),
          r =
            'undefined' !== typeof window &&
            'undefined' !== typeof document &&
            window.document === document,
          o = (function() {
            return 'undefined' !== typeof e && e.Math === Math
              ? e
              : 'undefined' !== typeof self && self.Math === Math
              ? self
              : 'undefined' !== typeof window && window.Math === Math
              ? window
              : Function('return this')();
          })(),
          i = (function() {
            return 'function' === typeof requestAnimationFrame
              ? requestAnimationFrame.bind(o)
              : function(e) {
                  return setTimeout(function() {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
          })(),
          a = 2;
        function s(e, t) {
          var n = !1,
            r = !1,
            o = 0;
          function s() {
            n && ((n = !1), e()), r && c();
          }
          function l() {
            i(s);
          }
          function c() {
            var e = Date.now();
            if (n) {
              if (e - o < a) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(l, t);
            o = e;
          }
          return c;
        }
        var l = 20,
          c = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight',
          ],
          u = 'undefined' !== typeof MutationObserver,
          p = (function() {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = s(this.refresh.bind(this), l));
            }
            return (
              (e.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function(e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function() {
                var e = this.updateObservers_();
                e && this.refresh();
              }),
              (e.prototype.updateObservers_ = function() {
                var e = this.observers_.filter(function(e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function(e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function() {
                r &&
                  !this.connected_ &&
                  (document.addEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener('resize', this.refresh),
                  u
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh,
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        'DOMSubtreeModified',
                        this.refresh,
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function() {
                r &&
                  this.connected_ &&
                  (document.removeEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.removeEventListener('resize', this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function(e) {
                var t = e.propertyName,
                  n = void 0 === t ? '' : t,
                  r = c.some(function(e) {
                    return !!~n.indexOf(e);
                  });
                r && this.refresh();
              }),
              (e.getInstance = function() {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          d = function(e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var o = r[n];
              Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          f = function(e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
            return t || o;
          },
          h = S(0, 0, 0, 0);
        function m(e) {
          return parseFloat(e) || 0;
        }
        function b(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function(t, n) {
            var r = e['border-' + n + '-width'];
            return t + m(r);
          }, 0);
        }
        function g(e) {
          for (
            var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
            r < o.length;
            r++
          ) {
            var i = o[r],
              a = e['padding-' + i];
            n[i] = m(a);
          }
          return n;
        }
        function v(e) {
          var t = e.getBBox();
          return S(0, 0, t.width, t.height);
        }
        function y(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return h;
          var r = f(e).getComputedStyle(e),
            o = g(r),
            i = o.left + o.right,
            a = o.top + o.bottom,
            s = m(r.width),
            l = m(r.height);
          if (
            ('border-box' === r.boxSizing &&
              (Math.round(s + i) !== t && (s -= b(r, 'left', 'right') + i),
              Math.round(l + a) !== n && (l -= b(r, 'top', 'bottom') + a)),
            !E(e))
          ) {
            var c = Math.round(s + i) - t,
              u = Math.round(l + a) - n;
            1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(u) && (l -= u);
          }
          return S(o.left, o.top, s, l);
        }
        var O = (function() {
          return 'undefined' !== typeof SVGGraphicsElement
            ? function(e) {
                return e instanceof f(e).SVGGraphicsElement;
              }
            : function(e) {
                return (
                  e instanceof f(e).SVGElement &&
                  'function' === typeof e.getBBox
                );
              };
        })();
        function E(e) {
          return e === f(e).document.documentElement;
        }
        function w(e) {
          return r ? (O(e) ? v(e) : y(e)) : h;
        }
        function k(e) {
          var t = e.x,
            n = e.y,
            r = e.width,
            o = e.height,
            i =
              'undefined' !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            a = Object.create(i.prototype);
          return (
            d(a, {
              x: t,
              y: n,
              width: r,
              height: o,
              top: n,
              right: t + r,
              bottom: o + n,
              left: t,
            }),
            a
          );
        }
        function S(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var C = (function() {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = S(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function() {
                var e = w(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          T = (function() {
            function e(e, t) {
              var n = k(t);
              d(this, { target: e, contentRect: n });
            }
            return e;
          })(),
          M = (function() {
            function e(e, t, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new n()),
                'function' !== typeof e)
              )
                throw new TypeError(
                  'The callback provided as parameter 1 is not a function.',
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = r);
            }
            return (
              (e.prototype.observe = function(e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new C(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function(e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t['delete'](e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function() {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function() {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function(t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function(e) {
                      return new T(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function() {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          A = 'undefined' !== typeof WeakMap ? new WeakMap() : new n(),
          x = (function() {
            function e(t) {
              if (!(this instanceof e))
                throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = p.getInstance(),
                r = new M(t, n, this);
              A.set(this, r);
            }
            return e;
          })();
        ['observe', 'unobserve', 'disconnect'].forEach(function(e) {
          x.prototype[e] = function() {
            var t;
            return (t = A.get(this))[e].apply(t, arguments);
          };
        });
        var N = (function() {
          return 'undefined' !== typeof o.ResizeObserver ? o.ResizeObserver : x;
        })();
        t['a'] = N;
      }.call(this, n('IyRk')));
    },
    qHiR: function(e, t, n) {},
  },
]);
