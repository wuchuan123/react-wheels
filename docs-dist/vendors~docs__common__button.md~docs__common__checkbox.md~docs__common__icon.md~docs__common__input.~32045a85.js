(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    '0zqC': function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('tJVT'),
        i = n('q1tI'),
        r = n.n(i),
        a = n('wx14'),
        c = n('rePB'),
        s = n('ODXe'),
        u = n('U8pU'),
        l = n('Ff2n'),
        p = n('VTBJ'),
        f = n('TSYQ'),
        d = n.n(f),
        v = n('Zm9Q'),
        h = function() {
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
      function m(e, t) {
        var n = t || {},
          o = n.defaultValue,
          r = n.value,
          a = n.onChange,
          c = n.postState,
          u = i['useState'](function() {
            return void 0 !== r
              ? r
              : void 0 !== o
              ? 'function' === typeof o
                ? o()
                : o
              : 'function' === typeof e
              ? e()
              : e;
          }),
          l = Object(s['a'])(u, 2),
          p = l[0],
          f = l[1],
          d = void 0 !== r ? r : p;
        function v(e) {
          f(e), d !== e && a && a(e, d);
        }
        c && (d = c(d));
        var h = i['useRef'](!0);
        return (
          i['useEffect'](
            function() {
              h.current ? (h.current = !1) : void 0 === r && f(r);
            },
            [r],
          ),
          [d, v]
        );
      }
      var b = n('KQm4'),
        y = n('wgJM'),
        g = n('1OyB'),
        O = n('vuIU'),
        w = n('Ji7U'),
        C = n('LK+K'),
        E = n('m+aA'),
        j = n('Kwbf'),
        M = n('c+Xe'),
        k = n('bdgK'),
        S = 'rc-observer-key',
        x = (function(e) {
          Object(w['a'])(n, e);
          var t = Object(C['a'])(n);
          function n() {
            var e;
            return (
              Object(g['a'])(this, n),
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
                  o = t[0].target,
                  i = o.getBoundingClientRect(),
                  r = i.width,
                  a = i.height,
                  c = o.offsetWidth,
                  s = o.offsetHeight,
                  u = Math.floor(r),
                  l = Math.floor(a);
                if (
                  e.state.width !== u ||
                  e.state.height !== l ||
                  e.state.offsetWidth !== c ||
                  e.state.offsetHeight !== s
                ) {
                  var f = {
                    width: u,
                    height: l,
                    offsetWidth: c,
                    offsetHeight: s,
                  };
                  e.setState(f),
                    n &&
                      Promise.resolve().then(function() {
                        n(
                          Object(p['a'])(
                            Object(p['a'])({}, f),
                            {},
                            { offsetWidth: c, offsetHeight: s },
                          ),
                          o,
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
                    var t = Object(E['a'])(this.childNode || this),
                      n = t !== this.currentElement;
                    n && (this.destroyObserver(), (this.currentElement = t)),
                      !this.resizeObserver &&
                        t &&
                        ((this.resizeObserver = new k['a'](this.onResize)),
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
                    t = Object(v['a'])(e);
                  if (t.length > 1)
                    Object(j['a'])(
                      !1,
                      'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
                    );
                  else if (0 === t.length)
                    return (
                      Object(j['a'])(
                        !1,
                        '`children` of ResizeObserver is empty. Nothing is in observe.',
                      ),
                      null
                    );
                  var n = t[0];
                  if (i['isValidElement'](n) && Object(M['c'])(n)) {
                    var o = n.ref;
                    t[0] = i['cloneElement'](n, {
                      ref: Object(M['a'])(o, this.setChildNode),
                    });
                  }
                  return 1 === t.length
                    ? t[0]
                    : t.map(function(e, t) {
                        return !i['isValidElement'](e) ||
                          ('key' in e && null !== e.key)
                          ? e
                          : i['cloneElement'](e, {
                              key: ''.concat(S, '-').concat(t),
                            });
                      });
                },
              },
            ]),
            n
          );
        })(i['Component']);
      x.displayName = 'ResizeObserver';
      var T = x;
      function N(e) {
        var t = Object(i['useRef'])(),
          n = Object(i['useRef'])(!1);
        function o() {
          for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
            i[r] = arguments[r];
          n.current ||
            (y['a'].cancel(t.current),
            (t.current = Object(y['a'])(function() {
              e.apply(void 0, i);
            })));
        }
        return (
          Object(i['useEffect'])(function() {
            return function() {
              (n.current = !0), y['a'].cancel(t.current);
            };
          }, []),
          o
        );
      }
      function P(e) {
        var t = Object(i['useRef'])([]),
          n = Object(i['useState'])({}),
          o = Object(s['a'])(n, 2),
          r = o[1],
          a = Object(i['useRef'])('function' === typeof e ? e() : e),
          c = N(function() {
            var e = a.current;
            t.current.forEach(function(t) {
              e = t(e);
            }),
              (t.current = []),
              (a.current = e),
              r({});
          });
        function u(e) {
          t.current.push(e), c();
        }
        return [a.current, u];
      }
      var _ = {
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
              (t >= _.F1 && t <= _.F12)
            )
              return !1;
            switch (t) {
              case _.ALT:
              case _.CAPS_LOCK:
              case _.CONTEXT_MENU:
              case _.CTRL:
              case _.DOWN:
              case _.END:
              case _.ESC:
              case _.HOME:
              case _.INSERT:
              case _.LEFT:
              case _.MAC_FF_META:
              case _.META:
              case _.NUMLOCK:
              case _.NUM_CENTER:
              case _.PAGE_DOWN:
              case _.PAGE_UP:
              case _.PAUSE:
              case _.PRINT_SCREEN:
              case _.RIGHT:
              case _.SHIFT:
              case _.UP:
              case _.WIN_KEY:
              case _.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function(e) {
            if (e >= _.ZERO && e <= _.NINE) return !0;
            if (e >= _.NUM_ZERO && e <= _.NUM_MULTIPLY) return !0;
            if (e >= _.A && e <= _.Z) return !0;
            if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
              return !0;
            switch (e) {
              case _.SPACE:
              case _.QUESTION_MARK:
              case _.NUM_PLUS:
              case _.NUM_MINUS:
              case _.NUM_PERIOD:
              case _.NUM_DIVISION:
              case _.SEMICOLON:
              case _.DASH:
              case _.EQUALS:
              case _.COMMA:
              case _.PERIOD:
              case _.SLASH:
              case _.APOSTROPHE:
              case _.SINGLE_QUOTE:
              case _.OPEN_SQUARE_BRACKET:
              case _.BACKSLASH:
              case _.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        R = _;
      function I(e, t) {
        var n,
          o = e.prefixCls,
          r = e.id,
          a = e.active,
          s = e.rtl,
          u = e.tab,
          l = u.key,
          p = u.tab,
          f = u.disabled,
          v = u.closeIcon,
          h = e.tabBarGutter,
          m = e.tabPosition,
          b = e.closable,
          y = e.renderWrapper,
          g = e.removeAriaLabel,
          O = e.editable,
          w = e.onClick,
          C = e.onRemove,
          E = e.onFocus,
          j = ''.concat(o, '-tab');
        i['useEffect'](function() {
          return C;
        }, []);
        var M = {};
        'top' === m || 'bottom' === m
          ? (M[s ? 'marginLeft' : 'marginRight'] = h)
          : (M.marginBottom = h);
        var k = O && !1 !== b && !f;
        function S(e) {
          f || w(e);
        }
        function x(e) {
          e.preventDefault(),
            e.stopPropagation(),
            O.onEdit('remove', { key: l, event: e });
        }
        var T = i['createElement'](
          'div',
          {
            key: l,
            ref: t,
            className: d()(
              j,
              ((n = {}),
              Object(c['a'])(n, ''.concat(j, '-with-remove'), k),
              Object(c['a'])(n, ''.concat(j, '-active'), a),
              Object(c['a'])(n, ''.concat(j, '-disabled'), f),
              n),
            ),
            style: M,
            onClick: S,
          },
          i['createElement'](
            'div',
            {
              role: 'tab',
              'aria-selected': a,
              id: r && ''.concat(r, '-tab-').concat(l),
              className: ''.concat(j, '-btn'),
              'aria-controls': r && ''.concat(r, '-panel-').concat(l),
              'aria-disabled': f,
              tabIndex: f ? null : 0,
              onClick: function(e) {
                e.stopPropagation(), S(e);
              },
              onKeyDown: function(e) {
                [R.SPACE, R.ENTER].includes(e.which) &&
                  (e.preventDefault(), S(e));
              },
              onFocus: E,
            },
            p,
          ),
          k &&
            i['createElement'](
              'button',
              {
                type: 'button',
                'aria-label': g || 'remove',
                tabIndex: 0,
                className: ''.concat(j, '-remove'),
                onClick: function(e) {
                  e.stopPropagation(), x(e);
                },
              },
              v || O.removeIcon || '\xd7',
            ),
        );
        return y && (T = y(T)), T;
      }
      var D = i['forwardRef'](I),
        A = { width: 0, height: 0, left: 0, top: 0 };
      function K(e, t, n) {
        return Object(i['useMemo'])(
          function() {
            for (
              var n,
                o = new Map(),
                i =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  A,
                r = i.left + i.width,
                a = 0;
              a < e.length;
              a += 1
            ) {
              var c,
                s = e[a].key,
                u = t.get(s);
              if (!u)
                u =
                  t.get(
                    null === (c = e[a - 1]) || void 0 === c ? void 0 : c.key,
                  ) || A;
              var l = o.get(s) || Object(p['a'])({}, u);
              (l.right = r - l.left - l.width), o.set(s, l);
            }
            return o;
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
      var L = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function W(e, t, n, o, r) {
        var a,
          c,
          s,
          u = r.tabs,
          l = r.tabPosition,
          p = r.rtl;
        ['top', 'bottom'].includes(l)
          ? ((a = 'width'), (c = p ? 'right' : 'left'), (s = Math.abs(t.left)))
          : ((a = 'height'), (c = 'top'), (s = -t.top));
        var f = t[a],
          d = n[a],
          v = o[a],
          h = f;
        return (
          d + v > f && (h = f - v),
          Object(i['useMemo'])(
            function() {
              if (!u.length) return [0, 0];
              for (var t = u.length, n = t, o = 0; o < t; o += 1) {
                var i = e.get(u[o].key) || L;
                if (i[c] + i[a] > s + h) {
                  n = o - 1;
                  break;
                }
              }
              for (var r = 0, l = t - 1; l >= 0; l -= 1) {
                var p = e.get(u[l].key) || L;
                if (p[c] < s) {
                  r = l + 1;
                  break;
                }
              }
              return [r, n];
            },
            [
              e,
              s,
              h,
              l,
              u
                .map(function(e) {
                  return e.key;
                })
                .join('_'),
              p,
            ],
          )
        );
      }
      var H = n('JX7q'),
        F = (function() {
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
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        V = i['createContext'](null),
        U = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            F(t, e),
            (t.prototype.render = function() {
              return i['createElement'](
                V.Provider,
                { value: this.props.store },
                this.props.children,
              );
            }),
            t
          );
        })(i['Component']),
        B = n('Gytx'),
        z = n.n(B),
        X = n('2mql'),
        Y = n.n(X),
        G = (function() {
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
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        q = function() {
          return (
            (q =
              Object.assign ||
              function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var i in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            q.apply(this, arguments)
          );
        };
      function Q(e) {
        return e.displayName || e.name || 'Component';
      }
      var Z = function() {
        return {};
      };
      function $(e, t) {
        void 0 === t && (t = {});
        var n = !!e,
          o = e || Z;
        return function(r) {
          var a = (function(t) {
            function a(e, n) {
              var i = t.call(this, e, n) || this;
              return (
                (i.unsubscribe = null),
                (i.handleChange = function() {
                  if (i.unsubscribe) {
                    var e = o(i.store.getState(), i.props);
                    i.setState({ subscribed: e });
                  }
                }),
                (i.store = i.context),
                (i.state = {
                  subscribed: o(i.store.getState(), e),
                  store: i.store,
                  props: e,
                }),
                i
              );
            }
            return (
              G(a, t),
              (a.getDerivedStateFromProps = function(t, n) {
                return e && 2 === e.length && t !== n.props
                  ? { subscribed: o(n.store.getState(), t), props: t }
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
                var e = q(q(q({}, this.props), this.state.subscribed), {
                  store: this.store,
                });
                return i['createElement'](
                  r,
                  q({}, e, { ref: this.props.miniStoreForwardedRef }),
                );
              }),
              (a.displayName = 'Connect(' + Q(r) + ')'),
              (a.contextType = V),
              a
            );
          })(i['Component']);
          if (t.forwardRef) {
            var c = i['forwardRef'](function(e, t) {
              return i['createElement'](
                a,
                q({}, e, { miniStoreForwardedRef: t }),
              );
            });
            return Y()(c, r);
          }
          return Y()(a, r);
        };
      }
      var J = function() {
        return (
          (J =
            Object.assign ||
            function(e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          J.apply(this, arguments)
        );
      };
      function ee(e) {
        var t = e,
          n = [];
        function o(e) {
          t = J(J({}, t), e);
          for (var o = 0; o < n.length; o++) n[o]();
        }
        function i() {
          return t;
        }
        function r(e) {
          return (
            n.push(e),
            function() {
              var t = n.indexOf(e);
              n.splice(t, 1);
            }
          );
        }
        return { setState: o, getState: i, subscribe: r };
      }
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function(t) {
                Object(c['a'])(e, t, n[t]);
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
      function oe(e, t) {
        var n = ne({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function(e) {
              delete n[e];
            }),
          n
        );
      }
      function ie() {
        var e = [].slice.call(arguments, 0);
        return 1 === e.length
          ? e[0]
          : function() {
              for (var t = 0; t < e.length; t++)
                e[t] && e[t].apply && e[t].apply(this, arguments);
            };
      }
      var re = /iPhone/i,
        ae = /iPod/i,
        ce = /iPad/i,
        se = /\bAndroid(?:.+)Mobile\b/i,
        ue = /Android/i,
        le = /\bAndroid(?:.+)SD4930UR\b/i,
        pe = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
        fe = /Windows Phone/i,
        de = /\bWindows(?:.+)ARM\b/i,
        ve = /BlackBerry/i,
        he = /BB10/i,
        me = /Opera Mini/i,
        be = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        ye = /Mobile(?:.+)Firefox\b/i;
      function ge(e, t) {
        return e.test(t);
      }
      function Oe(e) {
        var t =
            e || ('undefined' !== typeof navigator ? navigator.userAgent : ''),
          n = t.split('[FBAN');
        if ('undefined' !== typeof n[1]) {
          var o = n,
            i = Object(s['a'])(o, 1);
          t = i[0];
        }
        if (((n = t.split('Twitter')), 'undefined' !== typeof n[1])) {
          var r = n,
            a = Object(s['a'])(r, 1);
          t = a[0];
        }
        var c = {
          apple: {
            phone: ge(re, t) && !ge(fe, t),
            ipod: ge(ae, t),
            tablet: !ge(re, t) && ge(ce, t) && !ge(fe, t),
            device: (ge(re, t) || ge(ae, t) || ge(ce, t)) && !ge(fe, t),
          },
          amazon: {
            phone: ge(le, t),
            tablet: !ge(le, t) && ge(pe, t),
            device: ge(le, t) || ge(pe, t),
          },
          android: {
            phone: (!ge(fe, t) && ge(le, t)) || (!ge(fe, t) && ge(se, t)),
            tablet:
              !ge(fe, t) &&
              !ge(le, t) &&
              !ge(se, t) &&
              (ge(pe, t) || ge(ue, t)),
            device:
              (!ge(fe, t) &&
                (ge(le, t) || ge(pe, t) || ge(se, t) || ge(ue, t))) ||
              ge(/\bokhttp\b/i, t),
          },
          windows: {
            phone: ge(fe, t),
            tablet: ge(de, t),
            device: ge(fe, t) || ge(de, t),
          },
          other: {
            blackberry: ge(ve, t),
            blackberry10: ge(he, t),
            opera: ge(me, t),
            firefox: ge(ye, t),
            chrome: ge(be, t),
            device:
              ge(ve, t) || ge(he, t) || ge(me, t) || ge(ye, t) || ge(be, t),
          },
          any: null,
          phone: null,
          tablet: null,
        };
        return (
          (c.any =
            c.apple.device ||
            c.android.device ||
            c.windows.device ||
            c.other.device),
          (c.phone = c.apple.phone || c.android.phone || c.windows.phone),
          (c.tablet = c.apple.tablet || c.android.tablet || c.windows.tablet),
          c
        );
      }
      var we = Object(p['a'])(Object(p['a'])({}, Oe()), {}, { isMobile: Oe }),
        Ce = we;
      function Ee() {}
      function je(e, t, n) {
        var o = t || '';
        return e.key || ''.concat(o, 'item_').concat(n);
      }
      function Me(e) {
        return ''.concat(e, '-menu-');
      }
      function ke(e, t) {
        var n = -1;
        i['Children'].forEach(e, function(e) {
          (n += 1),
            e && e.type && e.type.isMenuItemGroup
              ? i['Children'].forEach(e.props.children, function(e) {
                  (n += 1), t(e, n);
                })
              : t(e, n);
        });
      }
      function Se(e, t, n) {
        e &&
          !n.find &&
          i['Children'].forEach(e, function(e) {
            if (e) {
              var o = e.type;
              if (!o || !(o.isSubMenu || o.isMenuItem || o.isMenuItemGroup))
                return;
              -1 !== t.indexOf(e.key)
                ? (n.find = !0)
                : e.props.children && Se(e.props.children, t, n);
            }
          });
      }
      var xe = [
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
        Te = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              e &&
              'function' === typeof e.getBoundingClientRect &&
              e.getBoundingClientRect().width;
          if (n) {
            if (t) {
              var o = getComputedStyle(e),
                i = o.marginLeft,
                r = o.marginRight;
              n += +i.replace('px', '') + +r.replace('px', '');
            }
            n = +n.toFixed(6);
          }
          return n || 0;
        },
        Ne = function(e, t, n) {
          e && 'object' === Object(u['a'])(e.style) && (e.style[t] = n);
        },
        Pe = function() {
          return Ce.any;
        },
        _e = n('i8i4'),
        Re = n.n(_e);
      function Ie(e, t) {
        return !!e && e.contains(t);
      }
      function De(e, t, n, o) {
        var i = Re.a.unstable_batchedUpdates
          ? function(e) {
              Re.a.unstable_batchedUpdates(n, e);
            }
          : n;
        return (
          e.addEventListener && e.addEventListener(t, i, o),
          {
            remove: function() {
              e.removeEventListener && e.removeEventListener(t, i);
            },
          }
        );
      }
      var Ae = n('MNnm'),
        Ke = Object(i['forwardRef'])(function(e, t) {
          var n = e.didUpdate,
            o = e.getContainer,
            r = e.children,
            a = Object(i['useRef'])();
          Object(i['useImperativeHandle'])(t, function() {
            return {};
          });
          var c = Object(i['useRef'])(!1);
          return (
            !c.current &&
              Object(Ae['a'])() &&
              ((a.current = o()), (c.current = !0)),
            Object(i['useEffect'])(function() {
              null === n || void 0 === n || n(e);
            }),
            Object(i['useEffect'])(function() {
              return function() {
                var e, t;
                null === (e = a.current) ||
                  void 0 === e ||
                  null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.removeChild(a.current);
              };
            }, []),
            a.current ? Re.a.createPortal(r, a.current) : null
          );
        }),
        Le = Ke;
      function We(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
      }
      function He(e, t, n) {
        var o = e[t] || {};
        return Object(p['a'])(Object(p['a'])({}, o), n);
      }
      function Fe(e, t, n, o) {
        for (
          var i = n.points, r = Object.keys(e), a = 0;
          a < r.length;
          a += 1
        ) {
          var c = r[a];
          if (We(e[c].points, i, o))
            return ''.concat(t, '-placement-').concat(c);
        }
        return '';
      }
      var Ve = n('8XRh');
      function Ue(e) {
        var t = e.prefixCls,
          n = e.motion,
          o = e.animation,
          i = e.transitionName;
        return (
          n ||
          (o
            ? { motionName: ''.concat(t, '-').concat(o) }
            : i
            ? { motionName: i }
            : null)
        );
      }
      function Be(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.zIndex,
          r = e.mask,
          c = e.maskMotion,
          s = e.maskAnimation,
          u = e.maskTransitionName;
        if (!r) return null;
        var l = {};
        return (
          (c || u || s) &&
            (l = Object(p['a'])(
              { motionAppear: !0 },
              Ue({ motion: c, prefixCls: t, transitionName: u, animation: s }),
            )),
          i['createElement'](
            Ve['b'],
            Object(a['a'])({}, l, { visible: n, removeOnLeave: !0 }),
            function(e) {
              var n = e.className;
              return i['createElement']('div', {
                style: { zIndex: o },
                className: d()(''.concat(t, '-mask'), n),
              });
            },
          )
        );
      }
      var ze,
        Xe = function(e) {
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
      function Ye(e) {
        return (
          (Ye =
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
          Ye(e)
        );
      }
      function Ge(e, t, n) {
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
      function qe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(n, !0).forEach(function(t) {
                Ge(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : qe(n).forEach(function(t) {
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
      function $e() {
        if (void 0 !== ze) return ze;
        ze = '';
        var e = document.createElement('p').style,
          t = 'Transform';
        for (var n in Ze) n + t in e && (ze = n);
        return ze;
      }
      function Je() {
        return $e()
          ? ''.concat($e(), 'TransitionProperty')
          : 'transitionProperty';
      }
      function et() {
        return $e() ? ''.concat($e(), 'Transform') : 'transform';
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
      function ot(e) {
        return e.style.transitionProperty || e.style[Je()];
      }
      function it(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(et());
        if (n && 'none' !== n) {
          var o = n.replace(/[^0-9\-.,]/g, '').split(',');
          return {
            x: parseFloat(o[12] || o[4], 0),
            y: parseFloat(o[13] || o[5], 0),
          };
        }
        return { x: 0, y: 0 };
      }
      var rt = /matrix\((.*)\)/,
        at = /matrix3d\((.*)\)/;
      function ct(e, t) {
        var n = window.getComputedStyle(e, null),
          o = n.getPropertyValue('transform') || n.getPropertyValue(et());
        if (o && 'none' !== o) {
          var i,
            r = o.match(rt);
          if (r)
            (r = r[1]),
              (i = r.split(',').map(function(e) {
                return parseFloat(e, 10);
              })),
              (i[4] = t.x),
              (i[5] = t.y),
              nt(e, 'matrix('.concat(i.join(','), ')'));
          else {
            var a = o.match(at)[1];
            (i = a.split(',').map(function(e) {
              return parseFloat(e, 10);
            })),
              (i[12] = t.x),
              (i[13] = t.y),
              nt(e, 'matrix3d('.concat(i.join(','), ')'));
          }
        } else
          nt(
            e,
            'translateX('
              .concat(t.x, 'px) translateY(')
              .concat(t.y, 'px) translateZ(0)'),
          );
      }
      var st,
        ut = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
      function lt(e) {
        var t = e.style.display;
        (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
      }
      function pt(e, t, n) {
        var o = n;
        if ('object' !== Ye(t))
          return 'undefined' !== typeof o
            ? ('number' === typeof o && (o = ''.concat(o, 'px')),
              void (e.style[t] = o))
            : st(e, t);
        for (var i in t) t.hasOwnProperty(i) && pt(e, i, t[i]);
      }
      function ft(e) {
        var t,
          n,
          o,
          i = e.ownerDocument,
          r = i.body,
          a = i && i.documentElement;
        return (
          (t = e.getBoundingClientRect()),
          (n = t.left),
          (o = t.top),
          (n -= a.clientLeft || r.clientLeft || 0),
          (o -= a.clientTop || r.clientTop || 0),
          { left: n, top: o }
        );
      }
      function dt(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          o = 'scroll'.concat(t ? 'Top' : 'Left');
        if ('number' !== typeof n) {
          var i = e.document;
          (n = i.documentElement[o]), 'number' !== typeof n && (n = i.body[o]);
        }
        return n;
      }
      function vt(e) {
        return dt(e);
      }
      function ht(e) {
        return dt(e, !0);
      }
      function mt(e) {
        var t = ft(e),
          n = e.ownerDocument,
          o = n.defaultView || n.parentWindow;
        return (t.left += vt(o)), (t.top += ht(o)), t;
      }
      function bt(e) {
        return null !== e && void 0 !== e && e == e.window;
      }
      function yt(e) {
        return bt(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
      }
      function gt(e, t, n) {
        var o = n,
          i = '',
          r = yt(e);
        return (
          (o = o || r.defaultView.getComputedStyle(e, null)),
          o && (i = o.getPropertyValue(t) || o[t]),
          i
        );
      }
      var Ot = new RegExp('^('.concat(ut, ')(?!px)[a-z%]+$'), 'i'),
        wt = /^(top|right|bottom|left)$/,
        Ct = 'currentStyle',
        Et = 'runtimeStyle',
        jt = 'left',
        Mt = 'px';
      function kt(e, t) {
        var n = e[Ct] && e[Ct][t];
        if (Ot.test(n) && !wt.test(t)) {
          var o = e.style,
            i = o[jt],
            r = e[Et][jt];
          (e[Et][jt] = e[Ct][jt]),
            (o[jt] = 'fontSize' === t ? '1em' : n || 0),
            (n = o.pixelLeft + Mt),
            (o[jt] = i),
            (e[Et][jt] = r);
        }
        return '' === n ? 'auto' : n;
      }
      function St(e, t) {
        return 'left' === e
          ? t.useCssRight
            ? 'right'
            : e
          : t.useCssBottom
          ? 'bottom'
          : e;
      }
      function xt(e) {
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
      function Tt(e, t, n) {
        'static' === pt(e, 'position') && (e.style.position = 'relative');
        var o = -999,
          i = -999,
          r = St('left', n),
          a = St('top', n),
          c = xt(r),
          s = xt(a);
        'left' !== r && (o = 999), 'top' !== a && (i = 999);
        var u = '',
          l = mt(e);
        ('left' in t || 'top' in t) && ((u = ot(e) || ''), tt(e, 'none')),
          'left' in t && ((e.style[c] = ''), (e.style[r] = ''.concat(o, 'px'))),
          'top' in t && ((e.style[s] = ''), (e.style[a] = ''.concat(i, 'px'))),
          lt(e);
        var p = mt(e),
          f = {};
        for (var d in t)
          if (t.hasOwnProperty(d)) {
            var v = St(d, n),
              h = 'left' === d ? o : i,
              m = l[d] - p[d];
            f[v] = v === d ? h + m : h - m;
          }
        pt(e, f), lt(e), ('left' in t || 'top' in t) && tt(e, u);
        var b = {};
        for (var y in t)
          if (t.hasOwnProperty(y)) {
            var g = St(y, n),
              O = t[y] - l[y];
            b[g] = y === g ? f[g] + O : f[g] - O;
          }
        pt(e, b);
      }
      function Nt(e, t) {
        var n = mt(e),
          o = it(e),
          i = { x: o.x, y: o.y };
        'left' in t && (i.x = o.x + t.left - n.left),
          'top' in t && (i.y = o.y + t.top - n.top),
          ct(e, i);
      }
      function Pt(e, t, n) {
        if (n.ignoreShake) {
          var o = mt(e),
            i = o.left.toFixed(0),
            r = o.top.toFixed(0),
            a = t.left.toFixed(0),
            c = t.top.toFixed(0);
          if (i === a && r === c) return;
        }
        n.useCssRight || n.useCssBottom
          ? Tt(e, t, n)
          : n.useCssTransform && et() in document.body.style
          ? Nt(e, t)
          : Tt(e, t, n);
      }
      function _t(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n]);
      }
      function Rt(e) {
        return 'border-box' === st(e, 'boxSizing');
      }
      'undefined' !== typeof window && (st = window.getComputedStyle ? gt : kt);
      var It = ['margin', 'border', 'padding'],
        Dt = -1,
        At = 2,
        Kt = 1,
        Lt = 0;
      function Wt(e, t, n) {
        var o,
          i = {},
          r = e.style;
        for (o in t) t.hasOwnProperty(o) && ((i[o] = r[o]), (r[o] = t[o]));
        for (o in (n.call(e), t)) t.hasOwnProperty(o) && (r[o] = i[o]);
      }
      function Ht(e, t, n) {
        var o,
          i,
          r,
          a = 0;
        for (i = 0; i < t.length; i++)
          if (((o = t[i]), o))
            for (r = 0; r < n.length; r++) {
              var c = void 0;
              (c =
                'border' === o ? ''.concat(o).concat(n[r], 'Width') : o + n[r]),
                (a += parseFloat(st(e, c)) || 0);
            }
        return a;
      }
      var Ft = {
        getParent: function(e) {
          var t = e;
          do {
            t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
          } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
          return t;
        },
      };
      function Vt(e, t, n) {
        var o = n;
        if (bt(e))
          return 'width' === t ? Ft.viewportWidth(e) : Ft.viewportHeight(e);
        if (9 === e.nodeType)
          return 'width' === t ? Ft.docWidth(e) : Ft.docHeight(e);
        var i = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
          r =
            'width' === t
              ? e.getBoundingClientRect().width
              : e.getBoundingClientRect().height,
          a = (st(e), Rt(e)),
          c = 0;
        (null === r || void 0 === r || r <= 0) &&
          ((r = void 0),
          (c = st(e, t)),
          (null === c || void 0 === c || Number(c) < 0) &&
            (c = e.style[t] || 0),
          (c = parseFloat(c) || 0)),
          void 0 === o && (o = a ? Kt : Dt);
        var s = void 0 !== r || a,
          u = r || c;
        return o === Dt
          ? s
            ? u - Ht(e, ['border', 'padding'], i)
            : c
          : s
          ? o === Kt
            ? u
            : u + (o === At ? -Ht(e, ['border'], i) : Ht(e, ['margin'], i))
          : c + Ht(e, It.slice(o), i);
      }
      _t(['Width', 'Height'], function(e) {
        (Ft['doc'.concat(e)] = function(t) {
          var n = t.document;
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            Ft['viewport'.concat(e)](n),
          );
        }),
          (Ft['viewport'.concat(e)] = function(t) {
            var n = 'client'.concat(e),
              o = t.document,
              i = o.body,
              r = o.documentElement,
              a = r[n];
            return ('CSS1Compat' === o.compatMode && a) || (i && i[n]) || a;
          });
      });
      var Ut = { position: 'absolute', visibility: 'hidden', display: 'block' };
      function Bt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o,
          i = t[0];
        return (
          0 !== i.offsetWidth
            ? (o = Vt.apply(void 0, t))
            : Wt(i, Ut, function() {
                o = Vt.apply(void 0, t);
              }),
          o
        );
      }
      function zt(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      _t(['width', 'height'], function(e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        Ft['outer'.concat(t)] = function(t, n) {
          return t && Bt(t, e, n ? Lt : Kt);
        };
        var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'];
        Ft[e] = function(t, o) {
          var i = o;
          if (void 0 === i) return t && Bt(t, e, Dt);
          if (t) {
            st(t);
            var r = Rt(t);
            return r && (i += Ht(t, ['padding', 'border'], n)), pt(t, e, i);
          }
        };
      });
      var Xt = {
        getWindow: function(e) {
          if (e && e.document && e.setTimeout) return e;
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow;
        },
        getDocument: yt,
        offset: function(e, t, n) {
          if ('undefined' === typeof t) return mt(e);
          Pt(e, t, n || {});
        },
        isWindow: bt,
        each: _t,
        css: pt,
        clone: function(e) {
          var t,
            n = {};
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
          var o = e.overflow;
          if (o)
            for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
          return n;
        },
        mix: zt,
        getWindowScrollLeft: function(e) {
          return vt(e);
        },
        getWindowScrollTop: function(e) {
          return ht(e);
        },
        merge: function() {
          for (var e = {}, t = 0; t < arguments.length; t++)
            Xt.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
          return e;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      zt(Xt, Ft);
      var Yt = Xt.getParent;
      function Gt(e) {
        if (Xt.isWindow(e) || 9 === e.nodeType) return null;
        var t,
          n = Xt.getDocument(e),
          o = n.body,
          i = Xt.css(e, 'position'),
          r = 'fixed' === i || 'absolute' === i;
        if (!r) return 'html' === e.nodeName.toLowerCase() ? null : Yt(e);
        for (t = Yt(e); t && t !== o && 9 !== t.nodeType; t = Yt(t))
          if (((i = Xt.css(t, 'position')), 'static' !== i)) return t;
        return null;
      }
      var qt = Xt.getParent;
      function Qt(e) {
        if (Xt.isWindow(e) || 9 === e.nodeType) return !1;
        var t = Xt.getDocument(e),
          n = t.body,
          o = null;
        for (o = qt(e); o && o !== n; o = qt(o)) {
          var i = Xt.css(o, 'position');
          if ('fixed' === i) return !0;
        }
        return !1;
      }
      function Zt(e, t) {
        var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
          o = Gt(e),
          i = Xt.getDocument(e),
          r = i.defaultView || i.parentWindow,
          a = i.body,
          c = i.documentElement;
        while (o) {
          if (
            (-1 !== navigator.userAgent.indexOf('MSIE') &&
              0 === o.clientWidth) ||
            o === a ||
            o === c ||
            'visible' === Xt.css(o, 'overflow')
          ) {
            if (o === a || o === c) break;
          } else {
            var s = Xt.offset(o);
            (s.left += o.clientLeft),
              (s.top += o.clientTop),
              (n.top = Math.max(n.top, s.top)),
              (n.right = Math.min(n.right, s.left + o.clientWidth)),
              (n.bottom = Math.min(n.bottom, s.top + o.clientHeight)),
              (n.left = Math.max(n.left, s.left));
          }
          o = Gt(o);
        }
        var u = null;
        if (!Xt.isWindow(e) && 9 !== e.nodeType) {
          u = e.style.position;
          var l = Xt.css(e, 'position');
          'absolute' === l && (e.style.position = 'fixed');
        }
        var p = Xt.getWindowScrollLeft(r),
          f = Xt.getWindowScrollTop(r),
          d = Xt.viewportWidth(r),
          v = Xt.viewportHeight(r),
          h = c.scrollWidth,
          m = c.scrollHeight,
          b = window.getComputedStyle(a);
        if (
          ('hidden' === b.overflowX && (h = r.innerWidth),
          'hidden' === b.overflowY && (m = r.innerHeight),
          e.style && (e.style.position = u),
          t || Qt(e))
        )
          (n.left = Math.max(n.left, p)),
            (n.top = Math.max(n.top, f)),
            (n.right = Math.min(n.right, p + d)),
            (n.bottom = Math.min(n.bottom, f + v));
        else {
          var y = Math.max(h, p + d);
          n.right = Math.min(n.right, y);
          var g = Math.max(m, f + v);
          n.bottom = Math.min(n.bottom, g);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function $t(e, t, n, o) {
        var i = Xt.clone(e),
          r = { width: t.width, height: t.height };
        return (
          o.adjustX && i.left < n.left && (i.left = n.left),
          o.resizeWidth &&
            i.left >= n.left &&
            i.left + r.width > n.right &&
            (r.width -= i.left + r.width - n.right),
          o.adjustX &&
            i.left + r.width > n.right &&
            (i.left = Math.max(n.right - r.width, n.left)),
          o.adjustY && i.top < n.top && (i.top = n.top),
          o.resizeHeight &&
            i.top >= n.top &&
            i.top + r.height > n.bottom &&
            (r.height -= i.top + r.height - n.bottom),
          o.adjustY &&
            i.top + r.height > n.bottom &&
            (i.top = Math.max(n.bottom - r.height, n.top)),
          Xt.mix(i, r)
        );
      }
      function Jt(e) {
        var t, n, o;
        if (Xt.isWindow(e) || 9 === e.nodeType) {
          var i = Xt.getWindow(e);
          (t = {
            left: Xt.getWindowScrollLeft(i),
            top: Xt.getWindowScrollTop(i),
          }),
            (n = Xt.viewportWidth(i)),
            (o = Xt.viewportHeight(i));
        } else
          (t = Xt.offset(e)), (n = Xt.outerWidth(e)), (o = Xt.outerHeight(e));
        return (t.width = n), (t.height = o), t;
      }
      function en(e, t) {
        var n = t.charAt(0),
          o = t.charAt(1),
          i = e.width,
          r = e.height,
          a = e.left,
          c = e.top;
        return (
          'c' === n ? (c += r / 2) : 'b' === n && (c += r),
          'c' === o ? (a += i / 2) : 'r' === o && (a += i),
          { left: a, top: c }
        );
      }
      function tn(e, t, n, o, i) {
        var r = en(t, n[1]),
          a = en(e, n[0]),
          c = [a.left - r.left, a.top - r.top];
        return {
          left: Math.round(e.left - c[0] + o[0] - i[0]),
          top: Math.round(e.top - c[1] + o[1] - i[1]),
        };
      }
      function nn(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right;
      }
      function on(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom;
      }
      function rn(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      }
      function an(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      }
      function cn(e, t, n) {
        var o = [];
        return (
          Xt.each(e, function(e) {
            o.push(
              e.replace(t, function(e) {
                return n[e];
              }),
            );
          }),
          o
        );
      }
      function sn(e, t) {
        return (e[t] = -e[t]), e;
      }
      function un(e, t) {
        var n;
        return (
          (n = /%$/.test(e)
            ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
            : parseInt(e, 10)),
          n || 0
        );
      }
      function ln(e, t) {
        (e[0] = un(e[0], t.width)), (e[1] = un(e[1], t.height));
      }
      function pn(e, t, n, o) {
        var i = n.points,
          r = n.offset || [0, 0],
          a = n.targetOffset || [0, 0],
          c = n.overflow,
          s = n.source || e;
        (r = [].concat(r)), (a = [].concat(a)), (c = c || {});
        var u = {},
          l = 0,
          p = !(!c || !c.alwaysByViewport),
          f = Zt(s, p),
          d = Jt(s);
        ln(r, d), ln(a, t);
        var v = tn(d, t, i, r, a),
          h = Xt.merge(d, v);
        if (f && (c.adjustX || c.adjustY) && o) {
          if (c.adjustX && nn(v, d, f)) {
            var m = cn(i, /[lr]/gi, { l: 'r', r: 'l' }),
              b = sn(r, 0),
              y = sn(a, 0),
              g = tn(d, t, m, b, y);
            rn(g, d, f) || ((l = 1), (i = m), (r = b), (a = y));
          }
          if (c.adjustY && on(v, d, f)) {
            var O = cn(i, /[tb]/gi, { t: 'b', b: 't' }),
              w = sn(r, 1),
              C = sn(a, 1),
              E = tn(d, t, O, w, C);
            an(E, d, f) || ((l = 1), (i = O), (r = w), (a = C));
          }
          l && ((v = tn(d, t, i, r, a)), Xt.mix(h, v));
          var j = nn(v, d, f),
            M = on(v, d, f);
          if (j || M) {
            var k = i;
            j && (k = cn(i, /[lr]/gi, { l: 'r', r: 'l' })),
              M && (k = cn(i, /[tb]/gi, { t: 'b', b: 't' })),
              (i = k),
              (r = n.offset || [0, 0]),
              (a = n.targetOffset || [0, 0]);
          }
          (u.adjustX = c.adjustX && j),
            (u.adjustY = c.adjustY && M),
            (u.adjustX || u.adjustY) && (h = $t(v, d, f, u));
        }
        return (
          h.width !== d.width &&
            Xt.css(s, 'width', Xt.width(s) + h.width - d.width),
          h.height !== d.height &&
            Xt.css(s, 'height', Xt.height(s) + h.height - d.height),
          Xt.offset(
            s,
            { left: h.left, top: h.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: i, offset: r, targetOffset: a, overflow: u }
        );
      }
      function fn(e, t) {
        var n = Zt(e, t),
          o = Jt(e);
        return (
          !n ||
          o.left + o.width <= n.left ||
          o.top + o.height <= n.top ||
          o.left >= n.right ||
          o.top >= n.bottom
        );
      }
      function dn(e, t, n) {
        var o = n.target || t,
          i = Jt(o),
          r = !fn(o, n.overflow && n.overflow.alwaysByViewport);
        return pn(e, i, n, r);
      }
      function vn(e, t, n) {
        var o,
          i,
          r = Xt.getDocument(e),
          a = r.defaultView || r.parentWindow,
          c = Xt.getWindowScrollLeft(a),
          s = Xt.getWindowScrollTop(a),
          u = Xt.viewportWidth(a),
          l = Xt.viewportHeight(a);
        (o = 'pageX' in t ? t.pageX : c + t.clientX),
          (i = 'pageY' in t ? t.pageY : s + t.clientY);
        var p = { left: o, top: i, width: 0, height: 0 },
          f = o >= 0 && o <= c + u && i >= 0 && i <= s + l,
          d = [n.points[0], 'cc'];
        return pn(e, p, Qe({}, n, { points: d }), f);
      }
      (dn.__getOffsetParent = Gt), (dn.__getVisibleRectForElement = Zt);
      function hn(e, t) {
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
      function mn(e, t) {
        e !== document.activeElement &&
          Ie(t, e) &&
          'function' === typeof e.focus &&
          e.focus();
      }
      function bn(e, t) {
        var n = null,
          o = null;
        function i(e) {
          var i = Object(s['a'])(e, 1),
            r = i[0].target;
          if (document.documentElement.contains(r)) {
            var a = r.getBoundingClientRect(),
              c = a.width,
              u = a.height,
              l = Math.floor(c),
              p = Math.floor(u);
            (n === l && o === p) ||
              Promise.resolve().then(function() {
                t({ width: l, height: p });
              }),
              (n = l),
              (o = p);
          }
        }
        var r = new k['a'](i);
        return (
          e && r.observe(e),
          function() {
            r.disconnect();
          }
        );
      }
      var yn = function(e, t) {
        var n = r.a.useRef(!1),
          o = r.a.useRef(null);
        function i() {
          window.clearTimeout(o.current);
        }
        function a(r) {
          if (n.current && !0 !== r)
            i(),
              (o.current = window.setTimeout(function() {
                (n.current = !1), a();
              }, t));
          else {
            if (!1 === e()) return;
            (n.current = !0),
              i(),
              (o.current = window.setTimeout(function() {
                n.current = !1;
              }, t));
          }
        }
        return [
          a,
          function() {
            (n.current = !1), i();
          },
        ];
      };
      function gn(e) {
        return 'function' !== typeof e ? null : e();
      }
      function On(e) {
        return 'object' === Object(u['a'])(e) && e ? e : null;
      }
      var wn = function(e, t) {
          var n = e.children,
            o = e.disabled,
            i = e.target,
            a = e.align,
            c = e.onAlign,
            u = e.monitorWindowResize,
            l = e.monitorBufferTime,
            p = void 0 === l ? 0 : l,
            f = r.a.useRef({}),
            d = r.a.useRef(),
            v = r.a.Children.only(n),
            h = r.a.useRef({});
          (h.current.disabled = o),
            (h.current.target = i),
            (h.current.onAlign = c);
          var m = yn(function() {
              var e = h.current,
                t = e.disabled,
                n = e.target,
                o = e.onAlign;
              if (!t && n) {
                var i,
                  r = d.current,
                  c = gn(n),
                  s = On(n);
                (f.current.element = c), (f.current.point = s);
                var u = document,
                  l = u.activeElement;
                return (
                  c && Xe(c) ? (i = dn(r, c, a)) : s && (i = vn(r, s, a)),
                  mn(l, r),
                  o && i && o(r, i),
                  !0
                );
              }
              return !1;
            }, p),
            b = Object(s['a'])(m, 2),
            y = b[0],
            g = b[1],
            O = r.a.useRef({ cancel: function() {} }),
            w = r.a.useRef({ cancel: function() {} });
          r.a.useEffect(function() {
            var e = gn(i),
              t = On(i);
            d.current !== w.current.element &&
              (w.current.cancel(),
              (w.current.element = d.current),
              (w.current.cancel = bn(d.current, y))),
              (f.current.element === e && hn(f.current.point, t)) ||
                (y(),
                O.current.element !== e &&
                  (O.current.cancel(),
                  (O.current.element = e),
                  (O.current.cancel = bn(e, y))));
          }),
            r.a.useEffect(
              function() {
                o ? g() : y();
              },
              [o],
            );
          var C = r.a.useRef(null);
          return (
            r.a.useEffect(
              function() {
                u
                  ? C.current || (C.current = De(window, 'resize', y))
                  : C.current && (C.current.remove(), (C.current = null));
              },
              [u],
            ),
            r.a.useEffect(function() {
              return function() {
                O.current.cancel(),
                  w.current.cancel(),
                  C.current && C.current.remove(),
                  g();
              };
            }, []),
            r.a.useImperativeHandle(t, function() {
              return {
                forceAlign: function() {
                  return y(!0);
                },
              };
            }),
            r.a.isValidElement(v) &&
              (v = r.a.cloneElement(v, { ref: Object(M['a'])(v.ref, d) })),
            v
          );
        },
        Cn = r.a.forwardRef(wn);
      Cn.displayName = 'Align';
      var En = Cn,
        jn = En,
        Mn = n('o0o1'),
        kn = n.n(Mn),
        Sn = n('HaE+'),
        xn = ['measure', 'align', null, 'motion'],
        Tn = function(e, t) {
          var n = Object(i['useState'])(null),
            o = Object(s['a'])(n, 2),
            r = o[0],
            a = o[1],
            c = Object(i['useRef'])(),
            u = Object(i['useRef'])(!1);
          function l(e) {
            u.current || a(e);
          }
          function p() {
            y['a'].cancel(c.current);
          }
          function f(e) {
            p(),
              (c.current = Object(y['a'])(function() {
                l(function(e) {
                  switch (r) {
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
            Object(i['useEffect'])(
              function() {
                l('measure');
              },
              [e],
            ),
            Object(i['useEffect'])(
              function() {
                switch (r) {
                  case 'measure':
                    t();
                    break;
                  default:
                }
                r &&
                  (c.current = Object(y['a'])(
                    Object(Sn['a'])(
                      kn.a.mark(function e() {
                        var t, n;
                        return kn.a.wrap(function(e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = xn.indexOf(r)),
                                  (n = xn[t + 1]),
                                  n && -1 !== t && l(n);
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                  ));
              },
              [r],
            ),
            Object(i['useEffect'])(function() {
              return function() {
                (u.current = !0), p();
              };
            }, []),
            [r, f]
          );
        },
        Nn = function(e) {
          var t = i['useState']({ width: 0, height: 0 }),
            n = Object(s['a'])(t, 2),
            o = n[0],
            r = n[1];
          function a(e) {
            r({ width: e.offsetWidth, height: e.offsetHeight });
          }
          var c = i['useMemo'](
            function() {
              var t = {};
              if (e) {
                var n = o.width,
                  i = o.height;
                -1 !== e.indexOf('height') && i
                  ? (t.height = i)
                  : -1 !== e.indexOf('minHeight') && i && (t.minHeight = i),
                  -1 !== e.indexOf('width') && n
                    ? (t.width = n)
                    : -1 !== e.indexOf('minWidth') && n && (t.minWidth = n);
              }
              return t;
            },
            [e, o],
          );
          return [c, a];
        },
        Pn = i['forwardRef'](function(e, t) {
          var n = e.visible,
            o = e.prefixCls,
            r = e.className,
            c = e.style,
            u = e.children,
            l = e.zIndex,
            f = e.stretch,
            v = e.destroyPopupOnHide,
            h = e.align,
            m = e.point,
            b = e.getRootDomNode,
            y = e.getClassNameFromAlign,
            g = e.onAlign,
            O = e.onMouseEnter,
            w = e.onMouseLeave,
            C = e.onMouseDown,
            E = e.onTouchStart,
            j = Object(i['useRef'])(),
            M = Object(i['useRef'])(),
            k = Object(i['useState'])(),
            S = Object(s['a'])(k, 2),
            x = S[0],
            T = S[1],
            N = Nn(f),
            P = Object(s['a'])(N, 2),
            _ = P[0],
            R = P[1];
          function I() {
            f && R(b());
          }
          var D = Tn(n, I),
            A = Object(s['a'])(D, 2),
            K = A[0],
            L = A[1],
            W = Object(i['useRef'])();
          function H() {
            return m || b;
          }
          function F() {
            var e;
            null === (e = j.current) || void 0 === e || e.forceAlign();
          }
          function V(e, t) {
            if ('align' === K) {
              var n = y(t);
              T(n),
                x !== n
                  ? Promise.resolve().then(function() {
                      F();
                    })
                  : L(function() {
                      var e;
                      null === (e = W.current) || void 0 === e || e.call(W);
                    }),
                null === g || void 0 === g || g(e, t);
            }
          }
          var U = Object(p['a'])({}, Ue(e));
          function B() {
            return new Promise(function(e) {
              W.current = e;
            });
          }
          ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function(e) {
            var t = U[e];
            U[e] = function(e, n) {
              return L(), null === t || void 0 === t ? void 0 : t(e, n);
            };
          }),
            i['useEffect'](
              function() {
                U.motionName || 'motion' !== K || L();
              },
              [U.motionName, K],
            ),
            i['useImperativeHandle'](t, function() {
              return {
                forceAlign: F,
                getElement: function() {
                  return M.current;
                },
              };
            });
          var z = Object(p['a'])(
              Object(p['a'])(Object(p['a'])({}, _), {}, { zIndex: l }, c),
              {},
              {
                opacity: 'motion' !== K && 'stable' !== K && n ? 0 : void 0,
                pointerEvents: 'stable' === K ? void 0 : 'none',
              },
            ),
            X = !0;
          !(null === h || void 0 === h ? void 0 : h.points) ||
            ('align' !== K && 'stable' !== K) ||
            (X = !1);
          var Y = u;
          return (
            i['Children'].count(u) > 1 &&
              (Y = i['createElement'](
                'div',
                { className: ''.concat(o, '-content') },
                u,
              )),
            i['createElement'](
              Ve['b'],
              Object(a['a'])(
                {
                  visible: n,
                  ref: M,
                  leavedClassName: ''.concat(o, '-hidden'),
                },
                U,
                { onAppearPrepare: B, onEnterPrepare: B, removeOnLeave: v },
              ),
              function(e, t) {
                var n = e.className,
                  a = e.style,
                  c = d()(o, r, x, n);
                return i['createElement'](
                  jn,
                  {
                    target: H(),
                    key: 'popup',
                    ref: j,
                    monitorWindowResize: !0,
                    disabled: X,
                    align: h,
                    onAlign: V,
                  },
                  i['createElement'](
                    'div',
                    {
                      ref: t,
                      className: c,
                      onMouseEnter: O,
                      onMouseLeave: w,
                      onMouseDown: C,
                      onTouchStart: E,
                      style: Object(p['a'])(Object(p['a'])({}, a), z),
                    },
                    Y,
                  ),
                );
              },
            )
          );
        });
      Pn.displayName = 'PopupInner';
      var _n = Pn,
        Rn = i['forwardRef'](function(e, t) {
          var n = e.prefixCls,
            o = e.visible,
            r = e.zIndex,
            c = e.children,
            s = e.mobile;
          s = void 0 === s ? {} : s;
          var u = s.popupClassName,
            l = s.popupStyle,
            f = s.popupMotion,
            v = void 0 === f ? {} : f,
            h = s.popupRender,
            m = i['useRef']();
          i['useImperativeHandle'](t, function() {
            return {
              forceAlign: function() {},
              getElement: function() {
                return m.current;
              },
            };
          });
          var b = Object(p['a'])({ zIndex: r }, l),
            y = c;
          return (
            i['Children'].count(c) > 1 &&
              (y = i['createElement'](
                'div',
                { className: ''.concat(n, '-content') },
                c,
              )),
            h && (y = h(y)),
            i['createElement'](
              Ve['b'],
              Object(a['a'])({ visible: o, ref: m, removeOnLeave: !0 }, v),
              function(e, t) {
                var o = e.className,
                  r = e.style,
                  a = d()(n, u, o);
                return i['createElement'](
                  'div',
                  {
                    ref: t,
                    className: a,
                    style: Object(p['a'])(Object(p['a'])({}, r), b),
                  },
                  y,
                );
              },
            )
          );
        });
      Rn.displayName = 'MobilePopupInner';
      var In = Rn,
        Dn = i['forwardRef'](function(e, t) {
          var n = e.visible,
            o = e.mobile,
            r = Object(l['a'])(e, ['visible', 'mobile']),
            c = Object(i['useState'])(n),
            u = Object(s['a'])(c, 2),
            f = u[0],
            d = u[1],
            v = Object(i['useState'])(!1),
            m = Object(s['a'])(v, 2),
            b = m[0],
            y = m[1],
            g = Object(p['a'])(Object(p['a'])({}, r), {}, { visible: f });
          Object(i['useEffect'])(
            function() {
              d(n), n && o && y(h());
            },
            [n, o],
          );
          var O = b
            ? i['createElement'](
                In,
                Object(a['a'])({}, g, { mobile: o, ref: t }),
              )
            : i['createElement'](_n, Object(a['a'])({}, g, { ref: t }));
          return i['createElement']('div', null, i['createElement'](Be, g), O);
        });
      Dn.displayName = 'Popup';
      var An = Dn,
        Kn = i['createContext'](null),
        Ln = Kn;
      function Wn() {}
      function Hn() {
        return '';
      }
      function Fn(e) {
        return e ? e.ownerDocument : window.document;
      }
      var Vn = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ];
      function Un(e) {
        var t = (function(t) {
          Object(w['a'])(o, t);
          var n = Object(C['a'])(o);
          function o(e) {
            var t, r;
            return (
              Object(g['a'])(this, o),
              (t = n.call(this, e)),
              (t.popupRef = i['createRef']()),
              (t.triggerRef = i['createRef']()),
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
                  Ie(
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
                var o = !t.state.popupVisible;
                ((t.isClickToHide() && !o) || (o && t.isClickToShow())) &&
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
                    o = t.getRootDomNode(),
                    i = t.getPopupDomNode();
                  Ie(o, n) || Ie(i, n) || t.hasPopupMouseDown || t.close();
                }
              }),
              (t.getRootDomNode = function() {
                var e = t.props.getTriggerDOMNode;
                if (e) return e(t.triggerRef.current);
                try {
                  var n = Object(E['a'])(t.triggerRef.current);
                  if (n) return n;
                } catch (o) {}
                return Re.a.findDOMNode(Object(H['a'])(t));
              }),
              (t.getPopupClassNameFromAlign = function(e) {
                var n = [],
                  o = t.props,
                  i = o.popupPlacement,
                  r = o.builtinPlacements,
                  a = o.prefixCls,
                  c = o.alignPoint,
                  s = o.getPopupClassNameFromAlign;
                return (
                  i && r && n.push(Fe(r, a, e, c)),
                  s && n.push(s(e)),
                  n.join(' ')
                );
              }),
              (t.getComponent = function() {
                var e = t.props,
                  n = e.prefixCls,
                  o = e.destroyPopupOnHide,
                  r = e.popupClassName,
                  c = e.onPopupAlign,
                  s = e.popupMotion,
                  u = e.popupAnimation,
                  l = e.popupTransitionName,
                  p = e.popupStyle,
                  f = e.mask,
                  d = e.maskAnimation,
                  v = e.maskTransitionName,
                  h = e.maskMotion,
                  m = e.zIndex,
                  b = e.popup,
                  y = e.stretch,
                  g = e.alignPoint,
                  O = e.mobile,
                  w = t.state,
                  C = w.popupVisible,
                  E = w.point,
                  j = t.getPopupAlign(),
                  M = {};
                return (
                  t.isMouseEnterToShow() &&
                    (M.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (M.onMouseLeave = t.onPopupMouseLeave),
                  (M.onMouseDown = t.onPopupMouseDown),
                  (M.onTouchStart = t.onPopupMouseDown),
                  i['createElement'](
                    An,
                    Object(a['a'])(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: o,
                        visible: C,
                        point: g && E,
                        className: r,
                        align: j,
                        onAlign: c,
                        animation: u,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      M,
                      {
                        stretch: y,
                        getRootDomNode: t.getRootDomNode,
                        style: p,
                        mask: f,
                        zIndex: m,
                        transitionName: l,
                        maskAnimation: d,
                        maskTransitionName: v,
                        maskMotion: h,
                        ref: t.popupRef,
                        motion: s,
                        mobile: O,
                      },
                    ),
                    'function' === typeof b ? b() : b,
                  )
                );
              }),
              (t.attachParent = function(e) {
                y['a'].cancel(t.attachId);
                var n,
                  o = t.props,
                  i = o.getPopupContainer,
                  r = o.getDocument,
                  a = t.getRootDomNode();
                i
                  ? (a || 0 === i.length) && (n = i(a))
                  : (n = r(t.getRootDomNode()).body),
                  n
                    ? n.appendChild(e)
                    : (t.attachId = Object(y['a'])(function() {
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
              (r =
                'popupVisible' in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: r, popupVisible: r }),
              Vn.forEach(function(e) {
                t['fire'.concat(e)] = function(n) {
                  t.fireEvents(e, n);
                };
              }),
              t
            );
          }
          return (
            Object(O['a'])(
              o,
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
                          (this.clickOutsideHandler = De(
                            e,
                            'mousedown',
                            this.onDocumentClick,
                          ))),
                        this.touchOutsideHandler ||
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = De(
                            e,
                            'touchstart',
                            this.onDocumentClick,
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = De(
                            e,
                            'scroll',
                            this.onContextMenuClose,
                          ))),
                        void (
                          !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = De(
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
                      y['a'].cancel(this.attachId);
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
                      o = e.builtinPlacements;
                    return t && o ? He(o, t, n) : n;
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function(e, t) {
                    var n = this.props.alignPoint,
                      o = this.state.popupVisible;
                    this.clearDelayTimer(),
                      o !== e &&
                        ('popupVisible' in this.props ||
                          this.setState({
                            popupVisible: e,
                            prevPopupVisible: o,
                          }),
                        this.props.onPopupVisibleChange(e)),
                      n && t && e && this.setPoint(t);
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function(e, t, n) {
                    var o = this,
                      i = 1e3 * t;
                    if ((this.clearDelayTimer(), i)) {
                      var r = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                      this.delayTimer = window.setTimeout(function() {
                        o.setPopupVisible(e, r), o.clearDelayTimer();
                      }, i);
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
                    var o = this.props[e];
                    o && o(t);
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
                      o = n.children,
                      r = n.forceRender,
                      a = n.alignPoint,
                      c = n.className,
                      s = n.autoDestroy,
                      u = i['Children'].only(o),
                      l = { key: 'trigger' };
                    this.isContextMenuToShow()
                      ? (l.onContextMenu = this.onContextMenu)
                      : (l.onContextMenu = this.createTwoChains(
                          'onContextMenu',
                        )),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((l.onClick = this.onClick),
                          (l.onMouseDown = this.onMouseDown),
                          (l.onTouchStart = this.onTouchStart))
                        : ((l.onClick = this.createTwoChains('onClick')),
                          (l.onMouseDown = this.createTwoChains('onMouseDown')),
                          (l.onTouchStart = this.createTwoChains(
                            'onTouchStart',
                          ))),
                      this.isMouseEnterToShow()
                        ? ((l.onMouseEnter = this.onMouseEnter),
                          a && (l.onMouseMove = this.onMouseMove))
                        : (l.onMouseEnter = this.createTwoChains(
                            'onMouseEnter',
                          )),
                      this.isMouseLeaveToHide()
                        ? (l.onMouseLeave = this.onMouseLeave)
                        : (l.onMouseLeave = this.createTwoChains(
                            'onMouseLeave',
                          )),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((l.onFocus = this.onFocus), (l.onBlur = this.onBlur))
                        : ((l.onFocus = this.createTwoChains('onFocus')),
                          (l.onBlur = this.createTwoChains('onBlur')));
                    var f = d()(u && u.props && u.props.className, c);
                    f && (l.className = f);
                    var v = Object(p['a'])({}, l);
                    Object(M['c'])(u) &&
                      (v.ref = Object(M['a'])(this.triggerRef, u.ref));
                    var h,
                      m = i['cloneElement'](u, v);
                    return (
                      (t || this.popupRef.current || r) &&
                        (h = i['createElement'](
                          e,
                          {
                            key: 'portal',
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent(),
                        )),
                      !t && s && (h = null),
                      i['createElement'](
                        Ln.Provider,
                        { value: { onPopupMouseDown: this.onPopupMouseDown } },
                        m,
                        h,
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
                      o = {};
                    return (
                      void 0 !== n &&
                        t.popupVisible !== n &&
                        ((o.popupVisible = n),
                        (o.prevPopupVisible = t.popupVisible)),
                      o
                    );
                  },
                },
              ],
            ),
            o
          );
        })(i['Component']);
        return (
          (t.contextType = Ln),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: Hn,
            getDocument: Fn,
            onPopupVisibleChange: Wn,
            afterPopupVisibleChange: Wn,
            onPopupAlign: Wn,
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
      var Bn = Un(Le),
        zn = { adjustX: 1, adjustY: 1 },
        Xn = {
          topLeft: { points: ['bl', 'tl'], overflow: zn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: zn, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: zn, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: zn, offset: [4, 0] },
        },
        Yn = {
          topLeft: { points: ['bl', 'tl'], overflow: zn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: zn, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: zn, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: zn, offset: [4, 0] },
        },
        Gn = 0,
        qn = {
          horizontal: 'bottomLeft',
          vertical: 'rightTop',
          'vertical-left': 'rightTop',
          'vertical-right': 'leftTop',
        },
        Qn = function(e, t, n) {
          var o = Me(t),
            i = e.getState();
          e.setState({
            defaultActiveFirst: Object(p['a'])(
              Object(p['a'])({}, i.defaultActiveFirst),
              {},
              Object(c['a'])({}, o, n),
            ),
          });
        },
        Zn = (function(e) {
          Object(w['a'])(n, e);
          var t = Object(C['a'])(n);
          function n(e) {
            var o;
            Object(g['a'])(this, n),
              (o = t.call(this, e)),
              (o.onDestroy = function(e) {
                o.props.onDestroy(e);
              }),
              (o.onKeyDown = function(e) {
                var t = e.keyCode,
                  n = o.menuInstance,
                  i = o.props.store,
                  r = o.getVisible();
                if (t === R.ENTER)
                  return o.onTitleClick(e), Qn(i, o.props.eventKey, !0), !0;
                if (t === R.RIGHT)
                  return (
                    r
                      ? n.onKeyDown(e)
                      : (o.triggerOpenChange(!0), Qn(i, o.props.eventKey, !0)),
                    !0
                  );
                if (t === R.LEFT) {
                  var a;
                  if (!r) return;
                  return (
                    (a = n.onKeyDown(e)),
                    a || (o.triggerOpenChange(!1), (a = !0)),
                    a
                  );
                }
                return !r || (t !== R.UP && t !== R.DOWN)
                  ? void 0
                  : n.onKeyDown(e);
              }),
              (o.onOpenChange = function(e) {
                o.props.onOpenChange(e);
              }),
              (o.onPopupVisibleChange = function(e) {
                o.triggerOpenChange(e, e ? 'mouseenter' : 'mouseleave');
              }),
              (o.onMouseEnter = function(e) {
                var t = o.props,
                  n = t.eventKey,
                  i = t.onMouseEnter,
                  r = t.store;
                Qn(r, o.props.eventKey, !1), i({ key: n, domEvent: e });
              }),
              (o.onMouseLeave = function(e) {
                var t = o.props,
                  n = t.parentMenu,
                  i = t.eventKey,
                  r = t.onMouseLeave;
                (n.subMenuInstance = Object(H['a'])(o)),
                  r({ key: i, domEvent: e });
              }),
              (o.onTitleMouseEnter = function(e) {
                var t = o.props,
                  n = t.eventKey,
                  i = t.onItemHover,
                  r = t.onTitleMouseEnter;
                i({ key: n, hover: !0 }), r({ key: n, domEvent: e });
              }),
              (o.onTitleMouseLeave = function(e) {
                var t = o.props,
                  n = t.parentMenu,
                  i = t.eventKey,
                  r = t.onItemHover,
                  a = t.onTitleMouseLeave;
                (n.subMenuInstance = Object(H['a'])(o)),
                  r({ key: i, hover: !1 }),
                  a({ key: i, domEvent: e });
              }),
              (o.onTitleClick = function(e) {
                var t = Object(H['a'])(o),
                  n = t.props;
                n.onTitleClick({ key: n.eventKey, domEvent: e }),
                  'hover' !== n.triggerSubMenuAction &&
                    (o.triggerOpenChange(!o.getVisible(), 'click'),
                    Qn(n.store, o.props.eventKey, !1));
              }),
              (o.onSubMenuClick = function(e) {
                'function' === typeof o.props.onClick &&
                  o.props.onClick(o.addKeyPath(e));
              }),
              (o.onSelect = function(e) {
                o.props.onSelect(e);
              }),
              (o.onDeselect = function(e) {
                o.props.onDeselect(e);
              }),
              (o.getPrefixCls = function() {
                return ''.concat(o.props.rootPrefixCls, '-submenu');
              }),
              (o.getActiveClassName = function() {
                return ''.concat(o.getPrefixCls(), '-active');
              }),
              (o.getDisabledClassName = function() {
                return ''.concat(o.getPrefixCls(), '-disabled');
              }),
              (o.getSelectedClassName = function() {
                return ''.concat(o.getPrefixCls(), '-selected');
              }),
              (o.getOpenClassName = function() {
                return ''.concat(o.props.rootPrefixCls, '-submenu-open');
              }),
              (o.getVisible = function() {
                return o.state.isOpen;
              }),
              (o.getMode = function() {
                return o.state.mode;
              }),
              (o.saveMenuInstance = function(e) {
                o.menuInstance = e;
              }),
              (o.addKeyPath = function(e) {
                return Object(p['a'])(
                  Object(p['a'])({}, e),
                  {},
                  { keyPath: (e.keyPath || []).concat(o.props.eventKey) },
                );
              }),
              (o.triggerOpenChange = function(e, t) {
                var n = o.props.eventKey,
                  i = function() {
                    o.onOpenChange({
                      key: n,
                      item: Object(H['a'])(o),
                      trigger: t,
                      open: e,
                    });
                  };
                'mouseenter' === t
                  ? (o.mouseenterTimeout = setTimeout(function() {
                      i();
                    }, 0))
                  : i();
              }),
              (o.isChildrenSelected = function() {
                var e = { find: !1 };
                return Se(o.props.children, o.props.selectedKeys, e), e.find;
              }),
              (o.isInlineMode = function() {
                return 'inline' === o.getMode();
              }),
              (o.adjustWidth = function() {
                if (o.subMenuTitle && o.menuInstance) {
                  var e = _e['findDOMNode'](o.menuInstance);
                  e.offsetWidth >= o.subMenuTitle.offsetWidth ||
                    (e.style.minWidth = ''.concat(
                      o.subMenuTitle.offsetWidth,
                      'px',
                    ));
                }
              }),
              (o.saveSubMenuTitle = function(e) {
                o.subMenuTitle = e;
              }),
              (o.getBaseProps = function() {
                var e = Object(H['a'])(o),
                  t = e.props,
                  n = o.getMode();
                return {
                  mode: 'horizontal' === n ? 'vertical' : n,
                  visible: o.getVisible(),
                  level: t.level + 1,
                  inlineIndent: t.inlineIndent,
                  focusable: !1,
                  onClick: o.onSubMenuClick,
                  onSelect: o.onSelect,
                  onDeselect: o.onDeselect,
                  onDestroy: o.onDestroy,
                  selectedKeys: t.selectedKeys,
                  eventKey: ''.concat(t.eventKey, '-menu-'),
                  openKeys: t.openKeys,
                  motion: t.motion,
                  onOpenChange: o.onOpenChange,
                  subMenuOpenDelay: t.subMenuOpenDelay,
                  parentMenu: Object(H['a'])(o),
                  subMenuCloseDelay: t.subMenuCloseDelay,
                  forceSubMenuRender: t.forceSubMenuRender,
                  triggerSubMenuAction: t.triggerSubMenuAction,
                  builtinPlacements: t.builtinPlacements,
                  defaultActiveFirst: t.store.getState().defaultActiveFirst[
                    Me(t.eventKey)
                  ],
                  multiple: t.multiple,
                  prefixCls: t.rootPrefixCls,
                  id: o.internalMenuId,
                  manualRef: o.saveMenuInstance,
                  itemIcon: t.itemIcon,
                  expandIcon: t.expandIcon,
                  direction: t.direction,
                };
              }),
              (o.getMotion = function(e, t) {
                var n = Object(H['a'])(o),
                  i = n.haveRendered,
                  r = o.props,
                  a = r.motion,
                  c = r.rootPrefixCls,
                  s = Object(p['a'])(
                    Object(p['a'])({}, a),
                    {},
                    {
                      leavedClassName: ''.concat(c, '-hidden'),
                      removeOnLeave: !1,
                      motionAppear: i || !t || 'inline' !== e,
                    },
                  );
                return s;
              });
            var i = e.store,
              r = e.eventKey,
              a = i.getState(),
              c = a.defaultActiveFirst;
            o.isRootMenu = !1;
            var s = !1;
            return (
              c && (s = c[r]),
              Qn(i, r, s),
              (o.state = { mode: e.mode, isOpen: e.isOpen }),
              o
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
                    o = t.parentMenu,
                    i = t.manualRef,
                    r = t.isOpen,
                    a = function() {
                      e.setState({ mode: n, isOpen: r });
                    },
                    c = r !== this.state.isOpen,
                    s = n !== this.state.mode;
                  (s || c) &&
                    (y['a'].cancel(this.updateStateRaf),
                    s ? (this.updateStateRaf = Object(y['a'])(a)) : a()),
                    i && i(this),
                    'horizontal' === n &&
                      (null === o || void 0 === o ? void 0 : o.isRootMenu) &&
                      r &&
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
                    y['a'].cancel(this.updateStateRaf);
                },
              },
              {
                key: 'renderPopupMenu',
                value: function(e, t) {
                  var n = this.getBaseProps();
                  return i['createElement'](
                    po,
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
                    o = t.visible,
                    r = t.forceSubMenuRender,
                    s = t.direction,
                    u = this.getMotion(n, o);
                  if (
                    ((this.haveRendered = !0),
                    (this.haveOpened = this.haveOpened || o || r),
                    !this.haveOpened)
                  )
                    return i['createElement']('div', null);
                  var l = d()(
                    ''.concat(t.prefixCls, '-sub'),
                    Object(c['a'])(
                      {},
                      ''.concat(t.prefixCls, '-rtl'),
                      'rtl' === s,
                    ),
                  );
                  return this.isInlineMode()
                    ? i['createElement'](
                        Ve['b'],
                        Object(a['a'])({ visible: t.visible }, u),
                        function(t) {
                          var n = t.className,
                            o = t.style,
                            i = d()(l, n);
                          return e.renderPopupMenu(i, o);
                        },
                      )
                    : this.renderPopupMenu(l);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t,
                    n,
                    o = Object(p['a'])({}, this.props),
                    r = this.getVisible(),
                    s = this.getPrefixCls(),
                    u = this.isInlineMode(),
                    l = this.getMode(),
                    f = d()(
                      s,
                      ''.concat(s, '-').concat(l),
                      ((e = {}),
                      Object(c['a'])(e, o.className, !!o.className),
                      Object(c['a'])(e, this.getOpenClassName(), r),
                      Object(c['a'])(
                        e,
                        this.getActiveClassName(),
                        o.active || (r && !u),
                      ),
                      Object(c['a'])(
                        e,
                        this.getDisabledClassName(),
                        o.disabled,
                      ),
                      Object(c['a'])(
                        e,
                        this.getSelectedClassName(),
                        this.isChildrenSelected(),
                      ),
                      e),
                    );
                  this.internalMenuId ||
                    (o.eventKey
                      ? (this.internalMenuId = ''.concat(o.eventKey, '$Menu'))
                      : ((Gn += 1),
                        (this.internalMenuId = '$__$'.concat(Gn, '$Menu'))));
                  var v = {},
                    h = {},
                    m = {};
                  o.disabled ||
                    ((v = {
                      onMouseLeave: this.onMouseLeave,
                      onMouseEnter: this.onMouseEnter,
                    }),
                    (h = { onClick: this.onTitleClick }),
                    (m = {
                      onMouseEnter: this.onTitleMouseEnter,
                      onMouseLeave: this.onTitleMouseLeave,
                    }));
                  var b = {},
                    y = o.direction,
                    g = 'rtl' === y;
                  u &&
                    (g
                      ? (b.paddingRight = o.inlineIndent * o.level)
                      : (b.paddingLeft = o.inlineIndent * o.level));
                  var O = {};
                  this.getVisible() &&
                    (O = { 'aria-owns': this.internalMenuId });
                  var w = null;
                  'horizontal' !== l &&
                    ((w = this.props.expandIcon),
                    'function' === typeof this.props.expandIcon &&
                      (w = i['createElement'](
                        this.props.expandIcon,
                        Object(p['a'])({}, this.props),
                      )));
                  var C = i['createElement'](
                      'div',
                      Object(a['a'])(
                        {
                          ref: this.saveSubMenuTitle,
                          style: b,
                          className: ''.concat(s, '-title'),
                          role: 'button',
                        },
                        m,
                        h,
                        { 'aria-expanded': r },
                        O,
                        {
                          'aria-haspopup': 'true',
                          title: 'string' === typeof o.title ? o.title : void 0,
                        },
                      ),
                      o.title,
                      w ||
                        i['createElement']('i', {
                          className: ''.concat(s, '-arrow'),
                        }),
                    ),
                    E = this.renderChildren(),
                    j = (null === (t = o.parentMenu) || void 0 === t
                    ? void 0
                    : t.isRootMenu)
                      ? o.parentMenu.props.getPopupContainer
                      : function(e) {
                          return e.parentNode;
                        },
                    M = qn[l],
                    k = o.popupOffset ? { offset: o.popupOffset } : {},
                    S = d()(
                      ((n = {}),
                      Object(c['a'])(
                        n,
                        o.popupClassName,
                        o.popupClassName && !u,
                      ),
                      Object(c['a'])(n, ''.concat(s, '-rtl'), g),
                      n),
                    ),
                    x = o.disabled,
                    T = o.triggerSubMenuAction,
                    N = o.subMenuOpenDelay,
                    P = o.forceSubMenuRender,
                    _ = o.subMenuCloseDelay,
                    R = o.builtinPlacements;
                  xe.forEach(function(e) {
                    return delete o[e];
                  }),
                    delete o.onClick;
                  var I = g
                    ? Object(p['a'])(Object(p['a'])({}, Yn), R)
                    : Object(p['a'])(Object(p['a'])({}, Xn), R);
                  delete o.direction;
                  var D = this.getBaseProps(),
                    A = u ? null : this.getMotion(D.mode, D.visible);
                  return i['createElement'](
                    'li',
                    Object(a['a'])({}, o, v, {
                      className: f,
                      role: 'menuitem',
                    }),
                    i['createElement'](
                      Bn,
                      {
                        prefixCls: s,
                        popupClassName: d()(''.concat(s, '-popup'), S),
                        getPopupContainer: j,
                        builtinPlacements: I,
                        popupPlacement: M,
                        popupVisible: !u && r,
                        popupAlign: k,
                        popup: u ? null : E,
                        action: x || u ? [] : [T],
                        mouseEnterDelay: N,
                        mouseLeaveDelay: _,
                        onPopupVisibleChange: this.onPopupVisibleChange,
                        forceRender: P,
                        popupMotion: A,
                      },
                      C,
                    ),
                    u ? E : null,
                  );
                },
              },
            ]),
            n
          );
        })(i['Component']);
      Zn.defaultProps = {
        onMouseEnter: Ee,
        onMouseLeave: Ee,
        onTitleMouseEnter: Ee,
        onTitleMouseLeave: Ee,
        onTitleClick: Ee,
        manualRef: Ee,
        mode: 'vertical',
        title: '',
      };
      var $n = $(function(e, t) {
        var n = e.openKeys,
          o = e.activeKey,
          i = e.selectedKeys,
          r = t.eventKey,
          a = t.subMenuKey;
        return {
          isOpen: n.indexOf(r) > -1,
          active: o[a] === r,
          selectedKeys: i,
        };
      })(Zn);
      $n.isSubMenu = !0;
      var Jn = $n,
        eo = 'menuitem-overflowed',
        to = 0.5,
        no = (function(e) {
          Object(w['a'])(n, e);
          var t = Object(C['a'])(n);
          function n() {
            var e;
            return (
              Object(g['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.resizeObserver = null),
              (e.mutationObserver = null),
              (e.originalTotalWidth = 0),
              (e.overflowedItems = []),
              (e.menuItemSizes = []),
              (e.cancelFrameId = null),
              (e.state = { lastVisibleIndex: void 0 }),
              (e.childRef = i['createRef']()),
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
              (e.getOverflowedSubMenuItem = function(t, n, o) {
                var r = e.props,
                  c = r.overflowedIndicator,
                  s = r.level,
                  u = r.mode,
                  f = r.prefixCls,
                  d = r.theme;
                if (1 !== s || 'horizontal' !== u) return null;
                var v = e.props.children[0],
                  h = v.props,
                  m = (h.children, h.title, h.style),
                  b = Object(l['a'])(h, ['children', 'title', 'style']),
                  y = Object(p['a'])({}, m),
                  g = ''.concat(t, '-overflowed-indicator'),
                  O = ''.concat(t, '-overflowed-indicator');
                0 === n.length && !0 !== o
                  ? (y = Object(p['a'])(
                      Object(p['a'])({}, y),
                      {},
                      { display: 'none' },
                    ))
                  : o &&
                    ((y = Object(p['a'])(
                      Object(p['a'])({}, y),
                      {},
                      { visibility: 'hidden', position: 'absolute' },
                    )),
                    (g = ''.concat(g, '-placeholder')),
                    (O = ''.concat(O, '-placeholder')));
                var w = d ? ''.concat(f, '-').concat(d) : '',
                  C = {};
                return (
                  xe.forEach(function(e) {
                    void 0 !== b[e] && (C[e] = b[e]);
                  }),
                  i['createElement'](
                    Jn,
                    Object(a['a'])(
                      {
                        title: c,
                        className: ''.concat(f, '-overflowed-submenu'),
                        popupClassName: w,
                      },
                      C,
                      { key: g, eventKey: O, disabled: !1, style: y },
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
                      var o = t.children[n.length - 1];
                      Ne(o, 'display', 'inline-block');
                      var i = e.getMenuItemNodes(),
                        r = i.filter(function(e) {
                          return e.className.split(' ').indexOf(eo) >= 0;
                        });
                      r.forEach(function(e) {
                        Ne(e, 'display', 'inline-block');
                      }),
                        (e.menuItemSizes = i.map(function(e) {
                          return Te(e, !0);
                        })),
                        r.forEach(function(e) {
                          Ne(e, 'display', 'none');
                        }),
                        (e.overflowedIndicatorWidth = Te(
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
                        Ne(o, 'display', 'none');
                    }
                  }
                }
              }),
              (e.handleResize = function() {
                if ('horizontal' === e.props.mode) {
                  var t = e.childRef.current;
                  if (t) {
                    var n = Te(t);
                    e.overflowedItems = [];
                    var o,
                      i = 0;
                    e.originalTotalWidth > n + to &&
                      ((o = -1),
                      e.menuItemSizes.forEach(function(t) {
                        (i += t),
                          i + e.overflowedIndicatorWidth <= n && (o += 1);
                      })),
                      e.setState({ lastVisibleIndex: o });
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
                    (this.resizeObserver = new k['a'](function(t) {
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
                  return (e || []).reduce(function(o, r, a) {
                    var c = r;
                    if ('horizontal' === t.props.mode) {
                      var s = t.getOverflowedSubMenuItem(r.props.eventKey, []);
                      void 0 !== n &&
                        -1 !==
                          t.props.className.indexOf(
                            ''.concat(t.props.prefixCls, '-root'),
                          ) &&
                        (a > n &&
                          (c = i['cloneElement'](r, {
                            style: { display: 'none' },
                            eventKey: ''.concat(r.props.eventKey, '-hidden'),
                            className: ''.concat(eo),
                          })),
                        a === n + 1 &&
                          ((t.overflowedItems = e.slice(n + 1).map(function(e) {
                            return i['cloneElement'](e, {
                              key: e.props.eventKey,
                              mode: 'vertical-left',
                            });
                          })),
                          (s = t.getOverflowedSubMenuItem(
                            r.props.eventKey,
                            t.overflowedItems,
                          ))));
                      var u = [].concat(Object(b['a'])(o), [s, c]);
                      return (
                        a === e.length - 1 &&
                          u.push(
                            t.getOverflowedSubMenuItem(
                              r.props.eventKey,
                              [],
                              !0,
                            ),
                          ),
                        u
                      );
                    }
                    return [].concat(Object(b['a'])(o), [c]);
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
                    o =
                      (e.theme,
                      Object(l['a'])(e, [
                        'visible',
                        'prefixCls',
                        'overflowedIndicator',
                        'mode',
                        'level',
                        'tag',
                        'children',
                        'theme',
                      ])),
                    r = t;
                  return i['createElement'](
                    r,
                    Object(a['a'])({ ref: this.childRef }, o),
                    this.renderChildren(n),
                  );
                },
              },
            ]),
            n
          );
        })(i['Component']);
      no.defaultProps = { tag: 'div', className: '' };
      var oo = no;
      function io(e) {
        return (
          !e.length ||
          e.every(function(e) {
            return !!e.props.disabled;
          })
        );
      }
      function ro(e, t, n) {
        var o = e.getState();
        e.setState({
          activeKey: Object(p['a'])(
            Object(p['a'])({}, o.activeKey),
            {},
            Object(c['a'])({}, t, n),
          ),
        });
      }
      function ao(e) {
        return e.eventKey || '0-menu-';
      }
      function co(e, t) {
        var n,
          o = t,
          i = e.children,
          r = e.eventKey;
        if (
          o &&
          (ke(i, function(e, t) {
            e && e.props && !e.props.disabled && o === je(e, r, t) && (n = !0);
          }),
          n)
        )
          return o;
        return (
          (o = null),
          e.defaultActiveFirst
            ? (ke(i, function(e, t) {
                o || !e || e.props.disabled || (o = je(e, r, t));
              }),
              o)
            : o
        );
      }
      function so(e) {
        if (e) {
          var t = this.instanceArray.indexOf(e);
          -1 !== t ? (this.instanceArray[t] = e) : this.instanceArray.push(e);
        }
      }
      var uo = (function(e) {
        Object(w['a'])(n, e);
        var t = Object(C['a'])(n);
        function n(e) {
          var o;
          return (
            Object(g['a'])(this, n),
            (o = t.call(this, e)),
            (o.onKeyDown = function(e, t) {
              var n,
                i = e.keyCode;
              if (
                (o.getFlatInstanceArray().forEach(function(t) {
                  t && t.props.active && t.onKeyDown && (n = t.onKeyDown(e));
                }),
                n)
              )
                return 1;
              var r = null;
              return (
                (i !== R.UP && i !== R.DOWN) ||
                  (r = o.step(i === R.UP ? -1 : 1)),
                r
                  ? (e.preventDefault(),
                    ro(o.props.store, ao(o.props), r.props.eventKey),
                    'function' === typeof t && t(r),
                    1)
                  : void 0
              );
            }),
            (o.onItemHover = function(e) {
              var t = e.key,
                n = e.hover;
              ro(o.props.store, ao(o.props), n ? t : null);
            }),
            (o.onDeselect = function(e) {
              o.props.onDeselect(e);
            }),
            (o.onSelect = function(e) {
              o.props.onSelect(e);
            }),
            (o.onClick = function(e) {
              o.props.onClick(e);
            }),
            (o.onOpenChange = function(e) {
              o.props.onOpenChange(e);
            }),
            (o.onDestroy = function(e) {
              o.props.onDestroy(e);
            }),
            (o.getFlatInstanceArray = function() {
              return o.instanceArray;
            }),
            (o.step = function(e) {
              var t = o.getFlatInstanceArray(),
                n = o.props.store.getState().activeKey[ao(o.props)],
                i = t.length;
              if (!i) return null;
              e < 0 && (t = t.concat().reverse());
              var r = -1;
              if (
                (t.every(function(e, t) {
                  return !e || e.props.eventKey !== n || ((r = t), !1);
                }),
                o.props.defaultActiveFirst ||
                  -1 === r ||
                  !io(t.slice(r, i - 1)))
              ) {
                var a = (r + 1) % i,
                  c = a;
                do {
                  var s = t[c];
                  if (s && !s.props.disabled) return s;
                  c = (c + 1) % i;
                } while (c !== a);
                return null;
              }
            }),
            (o.renderCommonMenuItem = function(e, t, n) {
              var r = o.props.store.getState(),
                a = Object(H['a'])(o),
                c = a.props,
                s = je(e, c.eventKey, t),
                u = e.props;
              if (!u || 'string' === typeof e.type) return e;
              var l = s === r.activeKey,
                f = Object(p['a'])(
                  Object(p['a'])(
                    {
                      mode: u.mode || c.mode,
                      level: c.level,
                      inlineIndent: c.inlineIndent,
                      renderMenuItem: o.renderMenuItem,
                      rootPrefixCls: c.prefixCls,
                      index: t,
                      parentMenu: c.parentMenu,
                      manualRef: u.disabled
                        ? void 0
                        : ie(e.ref, so.bind(Object(H['a'])(o))),
                      eventKey: s,
                      active: !u.disabled && l,
                      multiple: c.multiple,
                      onClick: function(e) {
                        (u.onClick || Ee)(e), o.onClick(e);
                      },
                      onItemHover: o.onItemHover,
                      motion: c.motion,
                      subMenuOpenDelay: c.subMenuOpenDelay,
                      subMenuCloseDelay: c.subMenuCloseDelay,
                      forceSubMenuRender: c.forceSubMenuRender,
                      onOpenChange: o.onOpenChange,
                      onDeselect: o.onDeselect,
                      onSelect: o.onSelect,
                      builtinPlacements: c.builtinPlacements,
                      itemIcon: u.itemIcon || o.props.itemIcon,
                      expandIcon: u.expandIcon || o.props.expandIcon,
                    },
                    n,
                  ),
                  {},
                  { direction: c.direction },
                );
              return (
                ('inline' === c.mode || Pe()) &&
                  (f.triggerSubMenuAction = 'click'),
                i['cloneElement'](
                  e,
                  Object(p['a'])(Object(p['a'])({}, f), {}, { key: s || t }),
                )
              );
            }),
            (o.renderMenuItem = function(e, t, n) {
              if (!e) return null;
              var i = o.props.store.getState(),
                r = {
                  openKeys: i.openKeys,
                  selectedKeys: i.selectedKeys,
                  triggerSubMenuAction: o.props.triggerSubMenuAction,
                  subMenuKey: n,
                };
              return o.renderCommonMenuItem(e, t, r);
            }),
            e.store.setState({
              activeKey: Object(p['a'])(
                Object(p['a'])({}, e.store.getState().activeKey),
                {},
                Object(c['a'])({}, e.eventKey, co(e, e.activeKey)),
              ),
            }),
            (o.instanceArray = []),
            o
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
                      : t.store.getState().activeKey[ao(t)],
                  o = co(t, n);
                if (o !== n) ro(t.store, ao(t), o);
                else if ('activeKey' in e) {
                  var i = co(e, e.activeKey);
                  o !== i && ro(t.store, ao(t), o);
                }
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = Object(a['a'])({}, this.props);
                this.instanceArray = [];
                var n = d()(
                    t.prefixCls,
                    t.className,
                    ''.concat(t.prefixCls, '-').concat(t.mode),
                  ),
                  o = { className: n, role: t.role || 'menu' };
                t.id && (o.id = t.id),
                  t.focusable &&
                    ((o.tabIndex = 0), (o.onKeyDown = this.onKeyDown));
                var r = t.prefixCls,
                  c = t.eventKey,
                  s = t.visible,
                  u = t.level,
                  l = t.mode,
                  p = t.overflowedIndicator,
                  f = t.theme;
                return (
                  xe.forEach(function(e) {
                    return delete t[e];
                  }),
                  delete t.onClick,
                  i['createElement'](
                    oo,
                    Object(a['a'])(
                      {},
                      t,
                      {
                        prefixCls: r,
                        mode: l,
                        tag: 'ul',
                        level: u,
                        theme: f,
                        visible: s,
                        overflowedIndicator: p,
                      },
                      o,
                    ),
                    Object(v['a'])(t.children).map(function(t, n) {
                      return e.renderMenuItem(t, n, c || '0-menu-');
                    }),
                  )
                );
              },
            },
          ]),
          n
        );
      })(i['Component']);
      uo.defaultProps = {
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        level: 1,
        inlineIndent: 24,
        visible: !0,
        focusable: !0,
        style: {},
        manualRef: Ee,
      };
      var lo = $()(uo),
        po = lo;
      function fo(e, t, n) {
        var o = e.prefixCls,
          i = e.motion,
          r = e.defaultMotions,
          a = void 0 === r ? {} : r,
          c = e.openAnimation,
          s = e.openTransitionName,
          l = t.switchingModeFromInline;
        if (i) return i;
        if ('object' === Object(u['a'])(c) && c)
          Object(j['a'])(
            !1,
            'Object type of `openAnimation` is removed. Please use `motion` instead.',
          );
        else if ('string' === typeof c)
          return { motionName: ''.concat(o, '-open-').concat(c) };
        if (s) return { motionName: s };
        var p = a[n];
        return p || (l ? null : a.other);
      }
      var vo = (function(e) {
        Object(w['a'])(n, e);
        var t = Object(C['a'])(n);
        function n(e) {
          var o;
          Object(g['a'])(this, n),
            (o = t.call(this, e)),
            (o.onSelect = function(e) {
              var t = Object(H['a'])(o),
                n = t.props;
              if (n.selectable) {
                var i = o.store.getState(),
                  r = i.selectedKeys,
                  a = e.key;
                (r = n.multiple ? r.concat([a]) : [a]),
                  'selectedKeys' in n || o.store.setState({ selectedKeys: r }),
                  n.onSelect(
                    Object(p['a'])(
                      Object(p['a'])({}, e),
                      {},
                      { selectedKeys: r },
                    ),
                  );
              }
            }),
            (o.onClick = function(e) {
              var t = o.getRealMenuMode(),
                n = Object(H['a'])(o),
                i = n.store,
                r = n.props.onOpenChange;
              'inline' === t ||
                'openKeys' in o.props ||
                (i.setState({ openKeys: [] }), r([])),
                o.props.onClick(e);
            }),
            (o.onKeyDown = function(e, t) {
              o.innerMenu.getWrappedInstance().onKeyDown(e, t);
            }),
            (o.onOpenChange = function(e) {
              var t = Object(H['a'])(o),
                n = t.props,
                i = o.store.getState().openKeys.concat(),
                r = !1,
                a = function(e) {
                  var t = !1;
                  if (e.open) (t = -1 === i.indexOf(e.key)), t && i.push(e.key);
                  else {
                    var n = i.indexOf(e.key);
                    (t = -1 !== n), t && i.splice(n, 1);
                  }
                  r = r || t;
                };
              Array.isArray(e) ? e.forEach(a) : a(e),
                r &&
                  ('openKeys' in o.props || o.store.setState({ openKeys: i }),
                  n.onOpenChange(i));
            }),
            (o.onDeselect = function(e) {
              var t = Object(H['a'])(o),
                n = t.props;
              if (n.selectable) {
                var i = o.store.getState().selectedKeys.concat(),
                  r = e.key,
                  a = i.indexOf(r);
                -1 !== a && i.splice(a, 1),
                  'selectedKeys' in n || o.store.setState({ selectedKeys: i }),
                  n.onDeselect(
                    Object(p['a'])(
                      Object(p['a'])({}, e),
                      {},
                      { selectedKeys: i },
                    ),
                  );
              }
            }),
            (o.onMouseEnter = function(e) {
              o.restoreModeVerticalFromInline();
              var t = o.props.onMouseEnter;
              t && t(e);
            }),
            (o.onTransitionEnd = function(e) {
              var t =
                  'width' === e.propertyName && e.target === e.currentTarget,
                n = e.target.className,
                i =
                  '[object SVGAnimatedString]' ===
                  Object.prototype.toString.call(n)
                    ? n.animVal
                    : n,
                r = 'font-size' === e.propertyName && i.indexOf('anticon') >= 0;
              (t || r) && o.restoreModeVerticalFromInline();
            }),
            (o.setInnerMenu = function(e) {
              o.innerMenu = e;
            }),
            (o.isRootMenu = !0);
          var i = e.defaultSelectedKeys,
            r = e.defaultOpenKeys;
          return (
            'selectedKeys' in e && (i = e.selectedKeys || []),
            'openKeys' in e && (r = e.openKeys || []),
            (o.store = ee({
              selectedKeys: i,
              openKeys: r,
              activeKey: { '0-menu-': co(e, e.activeKey) },
            })),
            (o.state = {
              switchingModeFromInline: !1,
              prevProps: e,
              inlineOpenKeys: [],
              store: o.store,
            }),
            o
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
                    o = t.inlineCollapsed,
                    i = t.onOpenChange;
                  ((!e.inlineCollapsed && o) || (!e.siderCollapsed && n)) &&
                    i([]),
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
                    o =
                      this.getInlineCollapsed() &&
                      (0 === e || '0' === e || '0px' === e);
                  o
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
                      oe(this.props, [
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
                        motion: fo(this.props, this.state, t),
                      },
                    )),
                    delete e.openAnimation,
                    delete e.openTransitionName,
                    i['createElement'](
                      U,
                      { store: this.store },
                      i['createElement'](
                        po,
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
                    o = t.store,
                    i = o.getState(),
                    r = {},
                    a = { prevProps: e };
                  return (
                    'inline' === n.mode &&
                      'inline' !== e.mode &&
                      (a.switchingModeFromInline = !0),
                    'openKeys' in e
                      ? (r.openKeys = e.openKeys || [])
                      : (((e.inlineCollapsed && !n.inlineCollapsed) ||
                          (e.siderCollapsed && !n.siderCollapsed)) &&
                          ((a.switchingModeFromInline = !0),
                          (a.inlineOpenKeys = i.openKeys),
                          (r.openKeys = [])),
                        ((!e.inlineCollapsed && n.inlineCollapsed) ||
                          (!e.siderCollapsed && n.siderCollapsed)) &&
                          ((r.openKeys = t.inlineOpenKeys),
                          (a.inlineOpenKeys = []))),
                    Object.keys(r).length && o.setState(r),
                    a
                  );
                },
              },
            ],
          ),
          n
        );
      })(i['Component']);
      vo.defaultProps = {
        selectable: !0,
        onClick: Ee,
        onSelect: Ee,
        onOpenChange: Ee,
        onDeselect: Ee,
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
        overflowedIndicator: i['createElement']('span', null, '\xb7\xb7\xb7'),
      };
      var ho = vo,
        mo = (function(e) {
          Object(w['a'])(n, e);
          var t = Object(C['a'])(n);
          function n() {
            var e;
            return (
              Object(g['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.onKeyDown = function(t) {
                var n = t.keyCode;
                if (n === R.ENTER) return e.onClick(t), !0;
              }),
              (e.onMouseLeave = function(t) {
                var n = e.props,
                  o = n.eventKey,
                  i = n.onItemHover,
                  r = n.onMouseLeave;
                i({ key: o, hover: !1 }), r({ key: o, domEvent: t });
              }),
              (e.onMouseEnter = function(t) {
                var n = e.props,
                  o = n.eventKey,
                  i = n.onItemHover,
                  r = n.onMouseEnter;
                i({ key: o, hover: !0 }), r({ key: o, domEvent: t });
              }),
              (e.onClick = function(t) {
                var n = e.props,
                  o = n.eventKey,
                  i = n.multiple,
                  r = n.onClick,
                  a = n.onSelect,
                  c = n.onDeselect,
                  s = n.isSelected,
                  u = {
                    key: o,
                    keyPath: [o],
                    item: Object(H['a'])(e),
                    domEvent: t,
                  };
                r(u), i ? (s ? c(u) : a(u)) : s || a(u);
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
                    n = d()(
                      this.getPrefixCls(),
                      t.className,
                      ((e = {}),
                      Object(c['a'])(
                        e,
                        this.getActiveClassName(),
                        !t.disabled && t.active,
                      ),
                      Object(c['a'])(
                        e,
                        this.getSelectedClassName(),
                        t.isSelected,
                      ),
                      Object(c['a'])(
                        e,
                        this.getDisabledClassName(),
                        t.disabled,
                      ),
                      e),
                    ),
                    o = Object(p['a'])(
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
                    ? (o = Object(p['a'])(
                        Object(p['a'])({}, o),
                        {},
                        { role: 'option', 'aria-selected': t.isSelected },
                      ))
                    : (null !== t.role && 'none' !== t.role) ||
                      (o.role = 'none');
                  var r = {
                      onClick: t.disabled ? null : this.onClick,
                      onMouseLeave: t.disabled ? null : this.onMouseLeave,
                      onMouseEnter: t.disabled ? null : this.onMouseEnter,
                    },
                    s = Object(p['a'])({}, t.style);
                  'inline' === t.mode &&
                    ('rtl' === t.direction
                      ? (s.paddingRight = t.inlineIndent * t.level)
                      : (s.paddingLeft = t.inlineIndent * t.level)),
                    xe.forEach(function(e) {
                      return delete t[e];
                    }),
                    delete t.direction;
                  var u = this.props.itemIcon;
                  return (
                    'function' === typeof this.props.itemIcon &&
                      (u = i['createElement'](this.props.itemIcon, this.props)),
                    i['createElement'](
                      'li',
                      Object(a['a'])(
                        {},
                        oe(t, [
                          'onClick',
                          'onMouseEnter',
                          'onMouseLeave',
                          'onSelect',
                        ]),
                        o,
                        r,
                        { style: s, ref: this.saveNode },
                      ),
                      t.children,
                      u,
                    )
                  );
                },
              },
            ]),
            n
          );
        })(i['Component']);
      (mo.isMenuItem = !0),
        (mo.defaultProps = {
          onSelect: Ee,
          onMouseEnter: Ee,
          onMouseLeave: Ee,
          manualRef: Ee,
        });
      var bo = $(function(e, t) {
          var n = e.activeKey,
            o = e.selectedKeys,
            i = t.eventKey,
            r = t.subMenuKey;
          return {
            active: n[r] === i,
            isSelected: Array.isArray(o) ? -1 !== o.indexOf(i) : o === i,
          };
        })(mo),
        yo = bo,
        go = (function(e) {
          Object(w['a'])(n, e);
          var t = Object(C['a'])(n);
          function n() {
            var e;
            return (
              Object(g['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.renderInnerMenuItem = function(t) {
                var n = e.props,
                  o = n.renderMenuItem,
                  i = n.index;
                return o(t, i, e.props.subMenuKey);
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
                    o = e.rootPrefixCls,
                    r = ''.concat(o, '-item-group-title'),
                    c = ''.concat(o, '-item-group-list'),
                    s = e.title,
                    u = e.children;
                  return (
                    xe.forEach(function(t) {
                      return delete e[t];
                    }),
                    delete e.onClick,
                    delete e.direction,
                    i['createElement'](
                      'li',
                      Object(a['a'])({}, e, {
                        className: ''.concat(n, ' ').concat(o, '-item-group'),
                      }),
                      i['createElement'](
                        'div',
                        {
                          className: r,
                          title: 'string' === typeof s ? s : void 0,
                        },
                        s,
                      ),
                      i['createElement'](
                        'ul',
                        { className: c },
                        i['Children'].map(u, this.renderInnerMenuItem),
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(i['Component']);
      (go.isMenuItemGroup = !0), (go.defaultProps = { disabled: !0 });
      var Oo = function(e) {
        var t = e.className,
          n = e.rootPrefixCls,
          o = e.style;
        return i['createElement']('li', {
          className: ''.concat(t, ' ').concat(n, '-item-divider'),
          style: o,
        });
      };
      Oo.defaultProps = { disabled: !0, className: '', style: {} };
      var wo = ho,
        Co = { adjustX: 1, adjustY: 1 },
        Eo = [0, 0],
        jo = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: Co,
            offset: [0, -4],
            targetOffset: Eo,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: Co,
            offset: [0, -4],
            targetOffset: Eo,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: Co,
            offset: [0, -4],
            targetOffset: Eo,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: Co,
            offset: [0, 4],
            targetOffset: Eo,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: Co,
            offset: [0, 4],
            targetOffset: Eo,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: Co,
            offset: [0, 4],
            targetOffset: Eo,
          },
        },
        Mo = jo;
      function ko(e, t) {
        var n = e.arrow,
          o = void 0 !== n && n,
          r = e.prefixCls,
          a = void 0 === r ? 'rc-dropdown' : r,
          u = e.transitionName,
          p = e.animation,
          f = e.align,
          v = e.placement,
          h = void 0 === v ? 'bottomLeft' : v,
          m = e.placements,
          b = void 0 === m ? Mo : m,
          y = e.getPopupContainer,
          g = e.showAction,
          O = e.hideAction,
          w = e.overlayClassName,
          C = e.overlayStyle,
          E = e.visible,
          j = e.trigger,
          M = void 0 === j ? ['hover'] : j,
          k = Object(l['a'])(e, [
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
          S = i['useState'](),
          x = Object(s['a'])(S, 2),
          T = x[0],
          N = x[1],
          P = 'visible' in e ? E : T,
          _ = i['useRef'](null);
        i['useImperativeHandle'](t, function() {
          return _.current;
        });
        var R = function() {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          I = function(t) {
            var n = e.onOverlayClick,
              o = R().props;
            N(!1), n && n(t), o.onClick && o.onClick(t);
          },
          D = function(t) {
            var n = e.onVisibleChange;
            N(t), 'function' === typeof n && n(t);
          },
          A = function() {
            var e = R(),
              t = { prefixCls: ''.concat(a, '-menu'), onClick: I };
            return (
              'string' === typeof e.type && delete t.prefixCls,
              i['createElement'](
                i['Fragment'],
                null,
                o &&
                  i['createElement']('div', {
                    className: ''.concat(a, '-arrow'),
                  }),
                i['cloneElement'](e, t),
              )
            );
          },
          K = function() {
            var t = e.overlay;
            return 'function' === typeof t ? A : A();
          },
          L = function() {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          W = function() {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(a, '-open');
          },
          H = function() {
            var t = e.children,
              n = t.props ? t.props : {},
              o = d()(n.className, W());
            return T && t ? i['cloneElement'](t, { className: o }) : t;
          },
          F = O;
        return (
          F || -1 === M.indexOf('contextMenu') || (F = ['click']),
          i['createElement'](
            Bn,
            Object.assign({}, k, {
              prefixCls: a,
              ref: _,
              popupClassName: d()(
                w,
                Object(c['a'])({}, ''.concat(a, '-show-arrow'), o),
              ),
              popupStyle: C,
              builtinPlacements: b,
              action: M,
              showAction: g,
              hideAction: F || [],
              popupPlacement: h,
              popupAlign: f,
              popupTransitionName: u,
              popupAnimation: p,
              popupVisible: P,
              stretch: L() ? 'minWidth' : '',
              popup: K(),
              onPopupVisibleChange: D,
              getPopupContainer: y,
            }),
            H(),
          )
        );
      }
      var So = i['forwardRef'](ko),
        xo = So;
      function To(e, t) {
        var n = e.prefixCls,
          o = e.editable,
          r = e.locale,
          a = e.style;
        return o && !1 !== o.showAdd
          ? i['createElement'](
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: a,
                'aria-label':
                  (null === r || void 0 === r ? void 0 : r.addAriaLabel) ||
                  'Add tab',
                onClick: function(e) {
                  o.onEdit('add', { event: e });
                },
              },
              o.addIcon || '+',
            )
          : null;
      }
      var No = i['forwardRef'](To);
      function Po(e, t) {
        var n = e.prefixCls,
          o = e.id,
          r = e.tabs,
          a = e.locale,
          u = e.mobile,
          l = e.moreIcon,
          p = void 0 === l ? 'More' : l,
          f = e.moreTransitionName,
          v = e.style,
          h = e.className,
          m = e.editable,
          b = e.tabBarGutter,
          y = e.rtl,
          g = e.onTabClick,
          O = Object(i['useState'])(!1),
          w = Object(s['a'])(O, 2),
          C = w[0],
          E = w[1],
          j = Object(i['useState'])(null),
          M = Object(s['a'])(j, 2),
          k = M[0],
          S = M[1],
          x = ''.concat(o, '-more-popup'),
          T = ''.concat(n, '-dropdown'),
          N = null !== k ? ''.concat(x, '-').concat(k) : null,
          P = null === a || void 0 === a ? void 0 : a.dropdownAriaLabel,
          _ = i['createElement'](
            wo,
            {
              onClick: function(e) {
                var t = e.key,
                  n = e.domEvent;
                g(t, n), E(!1);
              },
              id: x,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': N,
              selectedKeys: [k],
              'aria-label': void 0 !== P ? P : 'expanded dropdown',
            },
            r.map(function(e) {
              return i['createElement'](
                yo,
                {
                  key: e.key,
                  id: ''.concat(x, '-').concat(e.key),
                  role: 'option',
                  'aria-controls': o && ''.concat(o, '-panel-').concat(e.key),
                  disabled: e.disabled,
                },
                e.tab,
              );
            }),
          );
        function I(e) {
          for (
            var t = r.filter(function(e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function(e) {
                  return e.key === k;
                }) || 0,
              o = t.length,
              i = 0;
            i < o;
            i += 1
          ) {
            n = (n + e + o) % o;
            var a = t[n];
            if (!a.disabled) return void S(a.key);
          }
        }
        function D(e) {
          var t = e.which;
          if (C)
            switch (t) {
              case R.UP:
                I(-1), e.preventDefault();
                break;
              case R.DOWN:
                I(1), e.preventDefault();
                break;
              case R.ESC:
                E(!1);
                break;
              case R.SPACE:
              case R.ENTER:
                null !== k && g(k, e);
                break;
            }
          else
            [R.DOWN, R.SPACE, R.ENTER].includes(t) &&
              (E(!0), e.preventDefault());
        }
        Object(i['useEffect'])(
          function() {
            var e = document.getElementById(N);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [k],
        ),
          Object(i['useEffect'])(
            function() {
              C || S(null);
            },
            [C],
          );
        var A = Object(c['a'])({}, y ? 'marginLeft' : 'marginRight', b);
        r.length || ((A.visibility = 'hidden'), (A.order = 1));
        var K = d()(Object(c['a'])({}, ''.concat(T, '-rtl'), y)),
          L = u
            ? null
            : i['createElement'](
                xo,
                {
                  prefixCls: T,
                  overlay: _,
                  trigger: ['hover'],
                  visible: C,
                  transitionName: f,
                  onVisibleChange: E,
                  overlayClassName: K,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                i['createElement'](
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: A,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': x,
                    id: ''.concat(o, '-more'),
                    'aria-expanded': C,
                    onKeyDown: D,
                  },
                  p,
                ),
              );
        return i['createElement'](
          'div',
          {
            className: d()(''.concat(n, '-nav-operations'), h),
            style: v,
            ref: t,
          },
          L,
          i['createElement'](No, { prefixCls: n, locale: a, editable: m }),
        );
      }
      var _o = i['forwardRef'](Po),
        Ro = Object(i['createContext'])(null),
        Io = 0.1,
        Do = 0.01,
        Ao = 20,
        Ko = Math.pow(0.995, Ao);
      function Lo(e, t) {
        var n = Object(i['useState'])(),
          o = Object(s['a'])(n, 2),
          r = o[0],
          a = o[1],
          c = Object(i['useState'])(0),
          u = Object(s['a'])(c, 2),
          l = u[0],
          p = u[1],
          f = Object(i['useState'])(0),
          d = Object(s['a'])(f, 2),
          v = d[0],
          h = d[1],
          m = Object(i['useState'])(),
          b = Object(s['a'])(m, 2),
          y = b[0],
          g = b[1],
          O = Object(i['useRef'])();
        function w(e) {
          var t = e.touches[0],
            n = t.screenX,
            o = t.screenY;
          a({ x: n, y: o }), window.clearInterval(O.current);
        }
        function C(e) {
          if (r) {
            e.preventDefault();
            var n = e.touches[0],
              o = n.screenX,
              i = n.screenY;
            a({ x: o, y: i });
            var c = o - r.x,
              s = i - r.y;
            t(c, s);
            var u = Date.now();
            p(u), h(u - l), g({ x: c, y: s });
          }
        }
        function E() {
          if (r && (a(null), g(null), y)) {
            var e = y.x / v,
              n = y.y / v,
              o = Math.abs(e),
              i = Math.abs(n);
            if (Math.max(o, i) < Io) return;
            var c = e,
              s = n;
            O.current = window.setInterval(function() {
              Math.abs(c) < Do && Math.abs(s) < Do
                ? window.clearInterval(O.current)
                : ((c *= Ko), (s *= Ko), t(c * Ao, s * Ao));
            }, Ao);
          }
        }
        var j = Object(i['useRef'])();
        function M(e) {
          var n = e.deltaX,
            o = e.deltaY,
            i = 0,
            r = Math.abs(n),
            a = Math.abs(o);
          r === a
            ? (i = 'x' === j.current ? n : o)
            : r > a
            ? ((i = n), (j.current = 'x'))
            : ((i = o), (j.current = 'y')),
            t(-i, -i) && e.preventDefault();
        }
        var k = Object(i['useRef'])(null);
        (k.current = {
          onTouchStart: w,
          onTouchMove: C,
          onTouchEnd: E,
          onWheel: M,
        }),
          i['useEffect'](function() {
            function t(e) {
              k.current.onTouchStart(e);
            }
            function n(e) {
              k.current.onTouchMove(e);
            }
            function o(e) {
              k.current.onTouchEnd(e);
            }
            function i(e) {
              k.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', o, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', i),
              function() {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', o);
              }
            );
          }, []);
      }
      function Wo() {
        var e = Object(i['useRef'])(new Map());
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, i['createRef']()),
            e.current.get(t)
          );
        }
        function n(t) {
          e.current['delete'](t);
        }
        return [t, n];
      }
      function Ho(e, t) {
        var n = i['useRef'](e),
          o = i['useState']({}),
          r = Object(s['a'])(o, 2),
          a = r[1];
        function c(e) {
          var o = 'function' === typeof e ? e(n.current) : e;
          o !== n.current && t(o, n.current), (n.current = o), a({});
        }
        return [n.current, c];
      }
      var Fo = function(e) {
        var t,
          n = e.position,
          o = e.prefixCls,
          r = e.extra;
        if (!r) return null;
        var a = r;
        return (
          'right' === n && (t = a.right || (!a.left && a) || null),
          'left' === n && (t = a.left || null),
          t
            ? i['createElement'](
                'div',
                { className: ''.concat(o, '-extra-content') },
                t,
              )
            : null
        );
      };
      function Vo(e, t) {
        var n,
          o = i['useContext'](Ro),
          r = o.prefixCls,
          u = o.tabs,
          l = e.className,
          f = e.style,
          v = e.id,
          h = e.animated,
          m = e.activeKey,
          g = e.rtl,
          O = e.extra,
          w = e.editable,
          C = e.locale,
          E = e.tabPosition,
          j = e.tabBarGutter,
          M = e.children,
          k = e.onTabClick,
          S = e.onTabScroll,
          x = Object(i['useRef'])(),
          _ = Object(i['useRef'])(),
          R = Object(i['useRef'])(),
          I = Object(i['useRef'])(),
          A = Wo(),
          L = Object(s['a'])(A, 2),
          H = L[0],
          F = L[1],
          V = 'top' === E || 'bottom' === E,
          U = Ho(0, function(e, t) {
            V && S && S({ direction: e > t ? 'left' : 'right' });
          }),
          B = Object(s['a'])(U, 2),
          z = B[0],
          X = B[1],
          Y = Ho(0, function(e, t) {
            !V && S && S({ direction: e > t ? 'top' : 'bottom' });
          }),
          G = Object(s['a'])(Y, 2),
          q = G[0],
          Q = G[1],
          Z = Object(i['useState'])(0),
          $ = Object(s['a'])(Z, 2),
          J = $[0],
          ee = $[1],
          te = Object(i['useState'])(0),
          ne = Object(s['a'])(te, 2),
          oe = ne[0],
          ie = ne[1],
          re = Object(i['useState'])(0),
          ae = Object(s['a'])(re, 2),
          ce = ae[0],
          se = ae[1],
          ue = Object(i['useState'])(0),
          le = Object(s['a'])(ue, 2),
          pe = le[0],
          fe = le[1],
          de = Object(i['useState'])(null),
          ve = Object(s['a'])(de, 2),
          he = ve[0],
          me = ve[1],
          be = Object(i['useState'])(null),
          ye = Object(s['a'])(be, 2),
          ge = ye[0],
          Oe = ye[1],
          we = Object(i['useState'])(0),
          Ce = Object(s['a'])(we, 2),
          Ee = Ce[0],
          je = Ce[1],
          Me = Object(i['useState'])(0),
          ke = Object(s['a'])(Me, 2),
          Se = ke[0],
          xe = ke[1],
          Te = P(new Map()),
          Ne = Object(s['a'])(Te, 2),
          Pe = Ne[0],
          _e = Ne[1],
          Re = K(u, Pe, J),
          Ie = ''.concat(r, '-nav-operations-hidden'),
          De = 0,
          Ae = 0;
        function Ke(e) {
          return e < De ? De : e > Ae ? Ae : e;
        }
        V
          ? g
            ? ((De = 0), (Ae = Math.max(0, J - he)))
            : ((De = Math.min(0, he - J)), (Ae = 0))
          : ((De = Math.min(0, ge - oe)), (Ae = 0));
        var Le = Object(i['useRef'])(),
          We = Object(i['useState'])(),
          He = Object(s['a'])(We, 2),
          Fe = He[0],
          Ve = He[1];
        function Ue() {
          Ve(Date.now());
        }
        function Be() {
          window.clearTimeout(Le.current);
        }
        function ze() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : m,
            t = Re.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (V) {
            var n = z;
            g
              ? t.right < z
                ? (n = t.right)
                : t.right + t.width > z + he && (n = t.right + t.width - he)
              : t.left < -z
              ? (n = -t.left)
              : t.left + t.width > -z + he && (n = -(t.left + t.width - he)),
              Q(0),
              X(Ke(n));
          } else {
            var o = q;
            t.top < -q
              ? (o = -t.top)
              : t.top + t.height > -q + ge && (o = -(t.top + t.height - ge)),
              X(0),
              Q(Ke(o));
          }
        }
        Lo(x, function(e, t) {
          function n(e, t) {
            e(function(e) {
              var n = Ke(e + t);
              return n;
            });
          }
          if (V) {
            if (he >= J) return !1;
            n(X, e);
          } else {
            if (ge >= oe) return !1;
            n(Q, t);
          }
          return Be(), Ue(), !0;
        }),
          Object(i['useEffect'])(
            function() {
              return (
                Be(),
                Fe &&
                  (Le.current = window.setTimeout(function() {
                    Ve(0);
                  }, 100)),
                Be
              );
            },
            [Fe],
          );
        var Xe = W(
            Re,
            { width: he, height: ge, left: z, top: q },
            { width: ce, height: pe },
            { width: Ee, height: Se },
            Object(p['a'])(Object(p['a'])({}, e), {}, { tabs: u }),
          ),
          Ye = Object(s['a'])(Xe, 2),
          Ge = Ye[0],
          qe = Ye[1],
          Qe = u.map(function(e) {
            var t = e.key;
            return i['createElement'](D, {
              id: v,
              prefixCls: r,
              key: t,
              rtl: g,
              tab: e,
              closable: e.closable,
              editable: w,
              active: t === m,
              tabPosition: E,
              tabBarGutter: j,
              renderWrapper: M,
              removeAriaLabel:
                null === C || void 0 === C ? void 0 : C.removeAriaLabel,
              ref: H(t),
              onClick: function(e) {
                k(t, e);
              },
              onRemove: function() {
                F(t);
              },
              onFocus: function() {
                ze(t),
                  Ue(),
                  g || (x.current.scrollLeft = 0),
                  (x.current.scrollTop = 0);
              },
            });
          }),
          Ze = N(function() {
            var e,
              t,
              n,
              o,
              i,
              r,
              a,
              c,
              s,
              l =
                (null === (e = x.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              p =
                (null === (t = x.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              f =
                (null === (n = I.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              d =
                (null === (o = I.current) || void 0 === o
                  ? void 0
                  : o.offsetHeight) || 0,
              v =
                (null === (i = R.current) || void 0 === i
                  ? void 0
                  : i.offsetWidth) || 0,
              h =
                (null === (r = R.current) || void 0 === r
                  ? void 0
                  : r.offsetHeight) || 0;
            me(l), Oe(p), je(f), xe(d);
            var m =
                ((null === (a = _.current) || void 0 === a
                  ? void 0
                  : a.offsetWidth) || 0) - f,
              b =
                ((null === (c = _.current) || void 0 === c
                  ? void 0
                  : c.offsetHeight) || 0) - d;
            ee(m), ie(b);
            var y =
              null === (s = R.current) || void 0 === s
                ? void 0
                : s.className.includes(Ie);
            se(m - (y ? 0 : v)),
              fe(b - (y ? 0 : h)),
              _e(function() {
                var e = new Map();
                return (
                  u.forEach(function(t) {
                    var n = t.key,
                      o = H(n).current;
                    o &&
                      e.set(n, {
                        width: o.offsetWidth,
                        height: o.offsetHeight,
                        left: o.offsetLeft,
                        top: o.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          $e = u.slice(0, Ge),
          Je = u.slice(qe + 1),
          et = [].concat(Object(b['a'])($e), Object(b['a'])(Je)),
          tt = Object(i['useState'])(),
          nt = Object(s['a'])(tt, 2),
          ot = nt[0],
          it = nt[1],
          rt = Re.get(m),
          at = Object(i['useRef'])();
        function ct() {
          y['a'].cancel(at.current);
        }
        Object(i['useEffect'])(
          function() {
            var e = {};
            return (
              rt &&
                (V
                  ? (g ? (e.right = rt.right) : (e.left = rt.left),
                    (e.width = rt.width))
                  : ((e.top = rt.top), (e.height = rt.height))),
              ct(),
              (at.current = Object(y['a'])(function() {
                it(e);
              })),
              ct
            );
          },
          [rt, V, g],
        ),
          Object(i['useEffect'])(
            function() {
              ze();
            },
            [m, rt, Re, V],
          ),
          Object(i['useEffect'])(
            function() {
              Ze();
            },
            [
              g,
              j,
              m,
              u
                .map(function(e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var st,
          ut,
          lt,
          pt,
          ft = !!et.length,
          dt = ''.concat(r, '-nav-wrap');
        return (
          V
            ? g
              ? ((ut = z > 0), (st = z + he < J))
              : ((st = z < 0), (ut = -z + he < J))
            : ((lt = q < 0), (pt = -q + ge < oe)),
          i['createElement'](
            'div',
            {
              ref: t,
              role: 'tablist',
              className: d()(''.concat(r, '-nav'), l),
              style: f,
              onKeyDown: function() {
                Ue();
              },
            },
            i['createElement'](Fo, {
              position: 'left',
              extra: O,
              prefixCls: r,
            }),
            i['createElement'](
              T,
              { onResize: Ze },
              i['createElement'](
                'div',
                {
                  className: d()(
                    dt,
                    ((n = {}),
                    Object(c['a'])(n, ''.concat(dt, '-ping-left'), st),
                    Object(c['a'])(n, ''.concat(dt, '-ping-right'), ut),
                    Object(c['a'])(n, ''.concat(dt, '-ping-top'), lt),
                    Object(c['a'])(n, ''.concat(dt, '-ping-bottom'), pt),
                    n),
                  ),
                  ref: x,
                },
                i['createElement'](
                  T,
                  { onResize: Ze },
                  i['createElement'](
                    'div',
                    {
                      ref: _,
                      className: ''.concat(r, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(z, 'px, ')
                          .concat(q, 'px)'),
                        transition: Fe ? 'none' : void 0,
                      },
                    },
                    Qe,
                    i['createElement'](No, {
                      ref: I,
                      prefixCls: r,
                      locale: C,
                      editable: w,
                      style: { visibility: ft ? 'hidden' : null },
                    }),
                    i['createElement']('div', {
                      className: d()(
                        ''.concat(r, '-ink-bar'),
                        Object(c['a'])(
                          {},
                          ''.concat(r, '-ink-bar-animated'),
                          h.inkBar,
                        ),
                      ),
                      style: ot,
                    }),
                  ),
                ),
              ),
            ),
            i['createElement'](
              _o,
              Object(a['a'])({}, e, {
                ref: R,
                prefixCls: r,
                tabs: et,
                className: !ft && Ie,
              }),
            ),
            i['createElement'](Fo, {
              position: 'right',
              extra: O,
              prefixCls: r,
            }),
          )
        );
      }
      var Uo = i['forwardRef'](Vo);
      function Bo(e) {
        var t = e.id,
          n = e.activeKey,
          o = e.animated,
          r = e.tabPosition,
          a = e.rtl,
          s = e.destroyInactiveTabPane,
          u = i['useContext'](Ro),
          l = u.prefixCls,
          p = u.tabs,
          f = o.tabPane,
          v = p.findIndex(function(e) {
            return e.key === n;
          });
        return i['createElement'](
          'div',
          { className: d()(''.concat(l, '-content-holder')) },
          i['createElement'](
            'div',
            {
              className: d()(
                ''.concat(l, '-content'),
                ''.concat(l, '-content-').concat(r),
                Object(c['a'])({}, ''.concat(l, '-content-animated'), f),
              ),
              style:
                v && f
                  ? Object(c['a'])(
                      {},
                      a ? 'marginRight' : 'marginLeft',
                      '-'.concat(v, '00%'),
                    )
                  : null,
            },
            p.map(function(e) {
              return i['cloneElement'](e.node, {
                key: e.key,
                prefixCls: l,
                tabKey: e.key,
                id: t,
                animated: f,
                active: e.key === n,
                destroyInactiveTabPane: s,
              });
            }),
          ),
        );
      }
      function zo(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          o = e.className,
          r = e.style,
          a = e.id,
          c = e.active,
          u = e.animated,
          l = e.destroyInactiveTabPane,
          f = e.tabKey,
          v = e.children,
          h = i['useState'](n),
          m = Object(s['a'])(h, 2),
          b = m[0],
          y = m[1];
        i['useEffect'](
          function() {
            c ? y(!0) : l && y(!1);
          },
          [c, l],
        );
        var g = {};
        return (
          c ||
            (u
              ? ((g.visibility = 'hidden'),
                (g.height = 0),
                (g.overflowY = 'hidden'))
              : (g.display = 'none')),
          i['createElement'](
            'div',
            {
              id: a && ''.concat(a, '-panel-').concat(f),
              role: 'tabpanel',
              tabIndex: c ? 0 : -1,
              'aria-labelledby': a && ''.concat(a, '-tab-').concat(f),
              'aria-hidden': !c,
              style: Object(p['a'])(Object(p['a'])({}, g), r),
              className: d()(
                ''.concat(t, '-tabpane'),
                c && ''.concat(t, '-tabpane-active'),
                o,
              ),
            },
            (c || b || n) && v,
          )
        );
      }
      var Xo = 0;
      function Yo(e) {
        return Object(v['a'])(e)
          .map(function(e) {
            if (i['isValidElement'](e)) {
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
      function Go(e, t) {
        var n,
          o,
          r = e.id,
          f = e.prefixCls,
          v = void 0 === f ? 'rc-tabs' : f,
          b = e.className,
          y = e.children,
          g = e.direction,
          O = e.activeKey,
          w = e.defaultActiveKey,
          C = e.editable,
          E = e.animated,
          j = void 0 === E ? { inkBar: !0, tabPane: !1 } : E,
          M = e.tabPosition,
          k = void 0 === M ? 'top' : M,
          S = e.tabBarGutter,
          x = e.tabBarStyle,
          T = e.tabBarExtraContent,
          N = e.locale,
          P = e.moreIcon,
          _ = e.moreTransitionName,
          R = e.destroyInactiveTabPane,
          I = e.renderTabBar,
          D = e.onChange,
          A = e.onTabClick,
          K = e.onTabScroll,
          L = Object(l['a'])(e, [
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
          W = Yo(y),
          H = 'rtl' === g;
        o =
          !1 === j
            ? { inkBar: !1, tabPane: !1 }
            : !0 === j
            ? { inkBar: !0, tabPane: !0 }
            : Object(p['a'])(
                { inkBar: !0, tabPane: !1 },
                'object' === Object(u['a'])(j) ? j : {},
              );
        var F = Object(i['useState'])(!1),
          V = Object(s['a'])(F, 2),
          U = V[0],
          B = V[1];
        Object(i['useEffect'])(function() {
          B(h());
        }, []);
        var z = m(
            function() {
              var e;
              return null === (e = W[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: O, defaultValue: w },
          ),
          X = Object(s['a'])(z, 2),
          Y = X[0],
          G = X[1],
          q = Object(i['useState'])(function() {
            return W.findIndex(function(e) {
              return e.key === Y;
            });
          }),
          Q = Object(s['a'])(q, 2),
          Z = Q[0],
          $ = Q[1];
        Object(i['useEffect'])(
          function() {
            var e,
              t = W.findIndex(function(e) {
                return e.key === Y;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(Z, W.length - 1))),
              G(null === (e = W[t]) || void 0 === e ? void 0 : e.key));
            $(t);
          },
          [
            W.map(function(e) {
              return e.key;
            }).join('_'),
            Y,
            Z,
          ],
        );
        var J = m(null, { value: r }),
          ee = Object(s['a'])(J, 2),
          te = ee[0],
          ne = ee[1],
          oe = k;
        function ie(e, t) {
          null === A || void 0 === A || A(e, t),
            G(e),
            null === D || void 0 === D || D(e);
        }
        U && !['left', 'right'].includes(k) && (oe = 'top'),
          Object(i['useEffect'])(function() {
            r || (ne('rc-tabs-'.concat(Xo)), (Xo += 1));
          }, []);
        var re,
          ae = {
            id: te,
            activeKey: Y,
            animated: o,
            tabPosition: oe,
            rtl: H,
            mobile: U,
          },
          ce = Object(p['a'])(
            Object(p['a'])({}, ae),
            {},
            {
              editable: C,
              locale: N,
              moreIcon: P,
              moreTransitionName: _,
              tabBarGutter: S,
              onTabClick: ie,
              onTabScroll: K,
              extra: T,
              style: x,
              panes: y,
            },
          );
        return (
          (re = I ? I(ce, Uo) : i['createElement'](Uo, ce)),
          i['createElement'](
            Ro.Provider,
            { value: { tabs: W, prefixCls: v } },
            i['createElement'](
              'div',
              Object(a['a'])(
                {
                  ref: t,
                  id: r,
                  className: d()(
                    v,
                    ''.concat(v, '-').concat(oe),
                    ((n = {}),
                    Object(c['a'])(n, ''.concat(v, '-mobile'), U),
                    Object(c['a'])(n, ''.concat(v, '-editable'), C),
                    Object(c['a'])(n, ''.concat(v, '-rtl'), H),
                    n),
                    b,
                  ),
                },
                L,
              ),
              re,
              i['createElement'](
                Bo,
                Object(a['a'])({ destroyInactiveTabPane: R }, ae, {
                  animated: o,
                }),
              ),
            ),
          )
        );
      }
      var qo = i['forwardRef'](Go);
      qo.TabPane = zo;
      var Qo = qo,
        Zo = Qo,
        $o = n('9kvl'),
        Jo = n('dEAq'),
        ei = n('ZpkN');
      n('TIsu');
      function ti(e, t) {
        var n,
          o =
            null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return o || (o = t.tsx ? 'tsx' : 'jsx'), o;
      }
      var ni = e => {
        var t,
          n,
          a,
          c = Object(i['useRef'])(),
          s = Object(i['useContext'])(Jo['context']),
          u = s.locale,
          l = Object(Jo['useLocaleProps'])(u, e),
          p = Object(Jo['useDemoUrl'])(l.identifier),
          f = l.demoUrl || p,
          d =
            (null === $o['a'] || void 0 === $o['a']
              ? void 0
              : $o['a'].location.hash) === '#'.concat(l.identifier),
          v = 1 === Object.keys(l.sources).length,
          h = Object(Jo['useCodeSandbox'])(
            null !== (t = l.hideActions) && void 0 !== t && t.includes('CSB')
              ? null
              : l,
          ),
          m = Object(Jo['useRiddle'])(
            null !== (n = l.hideActions) && void 0 !== n && n.includes('RIDDLE')
              ? null
              : l,
          ),
          b = Object(Jo['useMotions'])(l.motions || [], c.current),
          y = Object(o['default'])(b, 2),
          g = y[0],
          O = y[1],
          w = Object(Jo['useCopy'])(),
          C = Object(o['default'])(w, 2),
          E = C[0],
          j = C[1],
          M = Object(i['useState'])('_'),
          k = Object(o['default'])(M, 2),
          S = k[0],
          x = k[1],
          T = Object(i['useState'])(ti(S, l.sources[S])),
          N = Object(o['default'])(T, 2),
          P = N[0],
          _ = N[1],
          R = Object(i['useState'])(Boolean(l.defaultShowCode)),
          I = Object(o['default'])(R, 2),
          D = I[0],
          A = I[1],
          K = Object(i['useState'])(Math.random()),
          L = Object(o['default'])(K, 2),
          W = L[0],
          H = L[1],
          F = l.sources[S][P] || l.sources[S].content,
          V = Object(Jo['useTSPlaygroundUrl'])(u, F),
          U = Object(i['useRef'])(),
          B = Object(Jo['usePrefersColor'])(),
          z = Object(o['default'])(B, 1),
          X = z[0];
        function Y(e) {
          x(e), _(ti(e, l.sources[e]));
        }
        return (
          Object(i['useEffect'])(() => {
            H(Math.random());
          }, [X]),
          r.a.createElement(
            'div',
            {
              style: l.style,
              className: [
                l.className,
                '__dumi-default-previewer',
                d ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: l.identifier,
              'data-debug': l.debug || void 0,
              'data-iframe': l.iframe || void 0,
            },
            l.iframe &&
              r.a.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            r.a.createElement(
              'div',
              {
                ref: c,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: l.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    l.compact || (l.iframe && !1 !== l.compact) ? '0' : void 0,
                  background: l.background,
                },
              },
              l.iframe
                ? r.a.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(l.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: W,
                    src: f,
                    ref: U,
                  })
                : l.children,
            ),
            r.a.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': l.title,
              },
              l.title &&
                r.a.createElement(
                  Jo['AnchorLink'],
                  { to: '#'.concat(l.identifier) },
                  l.title,
                ),
              l.description &&
                r.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: l.description },
                }),
            ),
            r.a.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              h &&
                r.a.createElement('button', {
                  title: 'Open demo on CodeSandbox.io',
                  className: '__dumi-default-icon',
                  role: 'codesandbox',
                  onClick: h,
                }),
              m &&
                r.a.createElement('button', {
                  title: 'Open demo on Riddle',
                  className: '__dumi-default-icon',
                  role: 'riddle',
                  onClick: m,
                }),
              l.motions &&
                r.a.createElement('button', {
                  title: 'Execute motions',
                  className: '__dumi-default-icon',
                  role: 'motions',
                  disabled: O,
                  onClick: () => g(),
                }),
              l.iframe &&
                r.a.createElement('button', {
                  title: 'Reload demo iframe page',
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: () => H(Math.random()),
                }),
              !(
                null !== (a = l.hideActions) &&
                void 0 !== a &&
                a.includes('EXTERNAL')
              ) &&
                r.a.createElement(
                  Jo['Link'],
                  { target: '_blank', to: f },
                  r.a.createElement('button', {
                    title: 'Open demo in new tab',
                    className: '__dumi-default-icon',
                    role: 'open-demo',
                    type: 'button',
                  }),
                ),
              r.a.createElement('span', null),
              r.a.createElement('button', {
                title: 'Copy source code',
                className: '__dumi-default-icon',
                role: 'copy',
                'data-status': j,
                onClick: () => E(F),
              }),
              'tsx' === P &&
                D &&
                r.a.createElement(
                  Jo['Link'],
                  { target: '_blank', to: V },
                  r.a.createElement('button', {
                    title: 'Get JSX via TypeScript Playground',
                    className: '__dumi-default-icon',
                    role: 'change-tsx',
                    type: 'button',
                  }),
                ),
              r.a.createElement('button', {
                title: 'Toggle source code panel',
                className: '__dumi-default-icon'.concat(
                  D ? ' __dumi-default-btn-expand' : '',
                ),
                role: 'source',
                type: 'button',
                onClick: () => A(!D),
              }),
            ),
            D &&
              r.a.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !v &&
                  r.a.createElement(
                    Zo,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: S,
                      onChange: Y,
                    },
                    Object.keys(l.sources).map(e =>
                      r.a.createElement(zo, {
                        tab:
                          '_' === e ? 'index.'.concat(ti(e, l.sources[e])) : e,
                        key: e,
                      }),
                    ),
                  ),
                r.a.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  r.a.createElement(ei['a'], {
                    code: F,
                    lang: P,
                    showCopy: !1,
                  }),
                ),
              ),
          )
        );
      };
      t['default'] = ni;
    },
    Gytx: function(e, t) {
      e.exports = function(e, t, n, o) {
        var i = n ? n.call(o, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var r = Object.keys(e),
          a = Object.keys(t);
        if (r.length !== a.length) return !1;
        for (
          var c = Object.prototype.hasOwnProperty.bind(t), s = 0;
          s < r.length;
          s++
        ) {
          var u = r[s];
          if (!c(u)) return !1;
          var l = e[u],
            p = t[u];
          if (
            ((i = n ? n.call(o, l, p, u) : void 0),
            !1 === i || (void 0 === i && l !== p))
          )
            return !1;
        }
        return !0;
      };
    },
    TIsu: function(e, t, n) {},
    bdgK: function(e, t, n) {
      'use strict';
      (function(e) {
        var n = (function() {
            if ('undefined' !== typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function(e, o) {
                  return e[0] === t && ((n = o), !0);
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
                    o = this.__entries__[n];
                  return o && o[1];
                }),
                (t.prototype.set = function(t, n) {
                  var o = e(this.__entries__, t);
                  ~o
                    ? (this.__entries__[o][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype['delete'] = function(t) {
                  var n = this.__entries__,
                    o = e(n, t);
                  ~o && n.splice(o, 1);
                }),
                (t.prototype.has = function(t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function() {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function(e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, o = this.__entries__; n < o.length; n++) {
                    var i = o[n];
                    e.call(t, i[1], i[0]);
                  }
                }),
                t
              );
            })();
          })(),
          o =
            'undefined' !== typeof window &&
            'undefined' !== typeof document &&
            window.document === document,
          i = (function() {
            return 'undefined' !== typeof e && e.Math === Math
              ? e
              : 'undefined' !== typeof self && self.Math === Math
              ? self
              : 'undefined' !== typeof window && window.Math === Math
              ? window
              : Function('return this')();
          })(),
          r = (function() {
            return 'function' === typeof requestAnimationFrame
              ? requestAnimationFrame.bind(i)
              : function(e) {
                  return setTimeout(function() {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
          })(),
          a = 2;
        function c(e, t) {
          var n = !1,
            o = !1,
            i = 0;
          function c() {
            n && ((n = !1), e()), o && u();
          }
          function s() {
            r(c);
          }
          function u() {
            var e = Date.now();
            if (n) {
              if (e - i < a) return;
              o = !0;
            } else (n = !0), (o = !1), setTimeout(s, t);
            i = e;
          }
          return u;
        }
        var s = 20,
          u = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight',
          ],
          l = 'undefined' !== typeof MutationObserver,
          p = (function() {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = c(this.refresh.bind(this), s));
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
                o &&
                  !this.connected_ &&
                  (document.addEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener('resize', this.refresh),
                  l
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
                o &&
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
                  o = u.some(function(e) {
                    return !!~n.indexOf(e);
                  });
                o && this.refresh();
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
          f = function(e, t) {
            for (var n = 0, o = Object.keys(t); n < o.length; n++) {
              var i = o[n];
              Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          d = function(e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
            return t || i;
          },
          v = j(0, 0, 0, 0);
        function h(e) {
          return parseFloat(e) || 0;
        }
        function m(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function(t, n) {
            var o = e['border-' + n + '-width'];
            return t + h(o);
          }, 0);
        }
        function b(e) {
          for (
            var t = ['top', 'right', 'bottom', 'left'], n = {}, o = 0, i = t;
            o < i.length;
            o++
          ) {
            var r = i[o],
              a = e['padding-' + r];
            n[r] = h(a);
          }
          return n;
        }
        function y(e) {
          var t = e.getBBox();
          return j(0, 0, t.width, t.height);
        }
        function g(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return v;
          var o = d(e).getComputedStyle(e),
            i = b(o),
            r = i.left + i.right,
            a = i.top + i.bottom,
            c = h(o.width),
            s = h(o.height);
          if (
            ('border-box' === o.boxSizing &&
              (Math.round(c + r) !== t && (c -= m(o, 'left', 'right') + r),
              Math.round(s + a) !== n && (s -= m(o, 'top', 'bottom') + a)),
            !w(e))
          ) {
            var u = Math.round(c + r) - t,
              l = Math.round(s + a) - n;
            1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(l) && (s -= l);
          }
          return j(i.left, i.top, c, s);
        }
        var O = (function() {
          return 'undefined' !== typeof SVGGraphicsElement
            ? function(e) {
                return e instanceof d(e).SVGGraphicsElement;
              }
            : function(e) {
                return (
                  e instanceof d(e).SVGElement &&
                  'function' === typeof e.getBBox
                );
              };
        })();
        function w(e) {
          return e === d(e).document.documentElement;
        }
        function C(e) {
          return o ? (O(e) ? y(e) : g(e)) : v;
        }
        function E(e) {
          var t = e.x,
            n = e.y,
            o = e.width,
            i = e.height,
            r =
              'undefined' !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            a = Object.create(r.prototype);
          return (
            f(a, {
              x: t,
              y: n,
              width: o,
              height: i,
              top: n,
              right: t + o,
              bottom: i + n,
              left: t,
            }),
            a
          );
        }
        function j(e, t, n, o) {
          return { x: e, y: t, width: n, height: o };
        }
        var M = (function() {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = j(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function() {
                var e = C(this.target);
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
          k = (function() {
            function e(e, t) {
              var n = E(t);
              f(this, { target: e, contentRect: n });
            }
            return e;
          })(),
          S = (function() {
            function e(e, t, o) {
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
                (this.callbackCtx_ = o);
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
                  if (!(e instanceof d(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new M(e)),
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
                  if (!(e instanceof d(e).Element))
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
                      return new k(e.target, e.broadcastRect());
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
          x = 'undefined' !== typeof WeakMap ? new WeakMap() : new n(),
          T = (function() {
            function e(t) {
              if (!(this instanceof e))
                throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = p.getInstance(),
                o = new S(t, n, this);
              x.set(this, o);
            }
            return e;
          })();
        ['observe', 'unobserve', 'disconnect'].forEach(function(e) {
          T.prototype[e] = function() {
            var t;
            return (t = x.get(this))[e].apply(t, arguments);
          };
        });
        var N = (function() {
          return 'undefined' !== typeof i.ResizeObserver ? i.ResizeObserver : T;
        })();
        t['a'] = N;
      }.call(this, n('IyRk')));
    },
  },
]);
