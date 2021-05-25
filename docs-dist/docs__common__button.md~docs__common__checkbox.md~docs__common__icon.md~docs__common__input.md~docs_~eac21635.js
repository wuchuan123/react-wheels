(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '/7QA': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'CentButton', function() {
          return u;
        }),
        n.d(t, 'IconBlur', function() {
          return m;
        }),
        n.d(t, 'RangeStepInput', function() {
          return b;
        }),
        n.d(t, 'Checkbox', function() {
          return w;
        }),
        n.d(t, 'ProgressBar', function() {
          return L;
        }),
        n.d(t, 'PaginacionTabla', function() {
          return K;
        }),
        n.d(t, 'UncontrolledInput', function() {
          return D;
        }),
        n.d(t, 'Modal', function() {
          return H;
        });
      var a = n('tJVT'),
        o = n('q1tI'),
        l = n.n(o),
        r =
          (n('eRxg'),
          l.a.createElement(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              'data-prefix': 'fas',
              'data-icon': 'spinner',
              className: 'reactive-btn-loading-svg reactive-spin',
              role: 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 512 512',
            },
            l.a.createElement('path', {
              fill: 'currentColor',
              d:
                'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z',
            }),
          )),
        i = l.a.createElement(
          'svg',
          {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fas',
            'data-icon': 'check',
            className: 'reactive-btn-success-svg',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 512 512',
          },
          l.a.createElement('path', {
            fill: 'currentColor',
            d:
              'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
          }),
        ),
        s = l.a.createElement(
          'svg',
          {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fas',
            'data-icon': 'times',
            className: 'reactive-btn-error-svg',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 352 512',
          },
          l.a.createElement('path', {
            fill: 'currentColor',
            d:
              'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
          }),
        ),
        c = e => {
          var t = e.color,
            n = void 0 === t ? 'primary' : t,
            c = e.outline,
            u = e.shadow,
            d = e.rounded,
            m = e.size,
            g = void 0 === m ? 'normal' : m,
            p = e.type,
            h = void 0 === p ? 'button' : p,
            f = e.idleText,
            b = void 0 === f ? 'Click Me' : f,
            v = e.style,
            B = void 0 === v ? {} : v,
            w = 'centui-btn'.concat(e.className ? ' ' + e.className : ''),
            C =
              e.loadingText && '' !== e.loadingText ? e.loadingText : 'Loading',
            k =
              e.successText && '' !== e.successText ? e.successText : 'Success',
            x = e.errorText && '' !== e.errorText ? e.error : 'Error',
            E = !('undefined' !== typeof e.animation && !1 === e.animation),
            y = Object(o['useState'])(e.buttonState ? e.buttonState : 'idle'),
            S = Object(a['default'])(y, 2),
            F = S[0],
            T = S[1],
            P = () => {
              'undefined' !== typeof e.onClick && e.onClick();
            };
          Object(o['useEffect'])(() => {
            'undefined' !== typeof e.buttonState &&
              (T(e.buttonState),
              ('success' !== e.buttonState && 'error' !== e.buttonState) ||
                setTimeout(
                  () => T('idle'),
                  e.messgeDuration ? e.messgeDuration : 2e3,
                ));
          }, [e.buttonState, e.messageDuration]);
          var N = e => {
            switch (e) {
              case 'idle':
                return b;
              case 'loading':
                return 'Loading' === C
                  ? l.a.createElement(l.a.Fragment, null, r, ' ', C)
                  : C;
              case 'success':
                return 'Success' === k
                  ? l.a.createElement(l.a.Fragment, null, i, ' ', k)
                  : k;
              case 'error':
                return 'error' === x
                  ? l.a.createElement(l.a.Fragment, null, s, ' ', x)
                  : x;
              default:
                return b;
            }
          };
          return (
            console.log(w, 'classname'),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                'span',
                {
                  className: 'centui-wrapper '
                    .concat(g)
                    .concat(e.block ? ' block' : ''),
                  style: { width: e.width, height: e.height },
                },
                l.a.createElement(
                  'button',
                  {
                    className: ''
                      .concat(w, ' ')
                      .concat(n)
                      .concat(c ? ' outline' : '')
                      .concat(E ? '' : ' no-animation')
                      .concat(d ? ' rounded' : '')
                      .concat(u ? ' shadow' : '')
                      .concat(e.disabled ? ' disabled' : ''),
                    ref:
                      'undefined' !== typeof e.buttonRef ? e.buttonRef : null,
                    disabled: 'idle' !== F || e.disabled,
                    type: h,
                    'data-button-state': F,
                    onClick: P,
                    style: B,
                  },
                  l.a.createElement('span', { className: 'centui-progress' }),
                  l.a.createElement(
                    'span',
                    { className: 'content' },
                    l.a.createElement(l.a.Fragment, null, N(F)),
                  ),
                ),
              ),
            )
          );
        },
        u = c,
        d =
          (n('jgzr'),
          e => {
            var t = e.type,
              n = void 0 === t ? 'ROUNDED' : t,
              a = e.src,
              l = e.size,
              r = e.padding,
              i = e.name,
              s = e.onClick;
            return o['createElement'](
              'div',
              { className: 'icon-wrapper', onClick: () => s && s() },
              o['createElement'](
                'div',
                { className: 'icon-container '.concat(s ? 'pointer' : '') },
                o['createElement'](
                  'div',
                  {
                    className: 'icon '.concat(n.toLocaleLowerCase()),
                    style: {
                      padding: r ? ''.concat(r, 'px') : '5px',
                      width: l ? ''.concat(l, 'px') : '100px',
                    },
                  },
                  o['createElement']('img', {
                    src: a,
                    alt: '',
                    className: 'background',
                  }),
                  o['createElement']('img', {
                    src: a,
                    alt: 'icon-'.concat(i),
                    width: '100%',
                  }),
                ),
              ),
            );
          }),
        m = d,
        g = n('0Owb'),
        p = n('PpiC'),
        h = function(e) {
          return (
            (e = Number(e)),
            (isNaN(e) || 'undefined' === typeof e) && (e = 0),
            e
          );
        },
        f = e => {
          var t = e.className,
            n = e.min,
            r = e.max,
            i = e.step,
            s = e.value,
            c = e.name,
            u = e.id,
            d = e.style,
            m = e.disabled,
            f = e.onChange,
            b = e.onClick,
            v = e.hold,
            B = void 0 === v || v,
            w = Object(p['a'])(e, [
              'className',
              'min',
              'max',
              'step',
              'value',
              'name',
              'id',
              'style',
              'disabled',
              'onChange',
              'onClick',
              'hold',
            ]),
            C = Object(o['useState'])(!1),
            k = Object(a['default'])(C, 2),
            x = k[0],
            E = k[1],
            y = Object(o['useState'])(!1),
            S = Object(a['default'])(y, 2),
            F = S[0],
            T = S[1],
            P = Object(o['useRef'])(null),
            N = null,
            L = () => {
              if ((E(!0), B)) {
                N && clearInterval(N);
                var e = null !== s && void 0 !== s ? s : 0;
                setTimeout(function() {
                  N && clearInterval(N), (N = _(e));
                }, 250);
              }
            },
            O = () => {
              E(!1), T(!1), N && clearInterval(N);
            },
            I = () => {
              x && T(!0);
            },
            j = e => {
              var t = h(e.target.value),
                n = s;
              (x && F) ||
                !n ||
                (e.target.value =
                  t > n
                    ? n + (null !== i && void 0 !== i ? i : 1)
                    : n - (null !== i && void 0 !== i ? i : 1));
            },
            _ = e =>
              setInterval(function() {
                if (!x || F) return N && clearInterval(N), !1;
                var t = P.current,
                  a = s || 0;
                if (
                  (e > a && a - (i || 1) >= (n || 0)
                    ? (a -= i || 1)
                    : e < a && a + (i || 1) <= (r || 100) && (a += i || 1),
                  e === a)
                )
                  return !1;
                var o = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  'value',
                ).set;
                o.call(t, a);
                var l = new Event('change', { bubbles: !0 });
                return t.dispatchEvent(l);
              }, 100);
          return l.a.createElement(
            'input',
            Object(g['a'])(
              {
                type: 'range',
                className: t,
                min: n,
                max: r,
                ref: P,
                step: i,
                value: s,
                name: c,
                id: u,
                style: d,
                disabled: m,
                onChange: f,
                onMouseDown: L,
                onMouseUp: O,
                onMouseMove: I,
                onClick: b,
                onInput: j,
              },
              w,
            ),
          );
        },
        b = f,
        v = e => {
          var t = typeof e;
          return 'string' === t || 'number' === t
            ? e || ''
            : Array.isArray(e) && e.length > 0
            ? e.reduce((e, t) => (t ? e.concat(''.concat(t, ' ')) : e), '')
            : Object.keys(e).reduce(
                (t, n) => (e[n] ? t.concat(''.concat(n, ' ')) : t),
                '',
              );
        },
        B =
          (n('QoHf'),
          e => {
            var t = e.theme,
              n = void 0 === t ? '' : t,
              a = e.modification,
              o = void 0 === a ? '' : a,
              r = e.indeterminate,
              i = void 0 !== r && r,
              s = e.disabled,
              c = void 0 !== s && s,
              u = e.value,
              d = e.onChange,
              m = e.children;
            return l.a.createElement(
              'label',
              {
                className: v({ Checkbox_themed: n, [n]: n, [o]: o }),
                onClick: () =>
                  setTimeout(() => {
                    document.activeElement.blur();
                  }, 0),
              },
              l.a.createElement('input', {
                type: 'checkbox',
                className: v({
                  Checkbox__input_themed: n,
                  Checkbox__input_themed_indeterminate: i,
                  [''.concat(n, '__input')]: n,
                  [''.concat(n, '__input_indeterminate')]: i,
                  [o]: o,
                }),
                disabled: c,
                checked: u,
                onChange: d,
              }),
              n &&
                l.a.createElement('span', {
                  className: v({
                    Checkbox__image_themed: !0,
                    [''.concat(n, '__image')]: !0,
                    [o]: o,
                  }),
                }),
              l.a.createElement(
                'span',
                { className: v({ [''.concat(n, '__label')]: n, [o]: o }) },
                m,
              ),
            );
          }),
        w = B,
        C = n('k1fw'),
        k = n('jBXu'),
        x = {
          initial: { to: { value: 45 }, duration: 2e3, easing: 'easeOutQuad' },
          slow: { to: { value: 80 }, duration: 2e4, easing: 'easeOutQuad' },
          finish: { to: { value: 100 }, duration: 200, easing: 'easeOutQuad' },
        },
        E = () => {};
      class y extends o['Component'] {
        constructor(e) {
          super(e),
            (this._tweenable = void 0),
            (this.state = { active: !1, value: 0 });
        }
        componentDidMount() {
          (this._tweenable = new k['Tweenable']()),
            this.props.isLoading && this.begin();
        }
        componentWillReceiveProps(e) {
          !this.props.isLoading && e.isLoading
            ? this.begin()
            : this.props.isLoading && !e.isLoading && this.finish();
        }
        componentWillUnmount() {
          this.stop(), this._tweenable.dispose(), (this._tweenable = null);
        }
        stop() {
          this._tweenable.isPlaying() && this._tweenable.stop();
        }
        begin() {
          this.stop(), this.setState({ active: !0, value: 0 });
          var e = { from: { value: 0 } };
          this.tween(Object(C['a'])(Object(C['a'])({}, x.initial), e))
            .then(() => this.tween(x.slow))
            .catch(E);
        }
        tween(e) {
          return (
            this._tweenable.setConfig(
              Object(C['a'])(
                Object(C['a'])({}, e),
                {},
                { step: e => this.updateValue(e) },
              ),
            ),
            this._tweenable.tween()
          );
        }
        finish() {
          this.stop(),
            this.tween(x.finish)
              .then(() => {
                this.setState({
                  value: this._tweenable.get().value,
                  active: !1,
                });
              })
              .catch(E);
        }
        updateValue(e) {
          var t = e.value;
          this.setState({ value: t });
        }
        render() {
          var e = this.props.children,
            t = this.state,
            n = t.active,
            a = t.value,
            r = o['Children'].only(e);
          if (!r) return null;
          var i = { active: n, value: a },
            s = l.a.cloneElement(r, { progress: i });
          return s;
        }
      }
      var S = n('TSYQ'),
        F = n.n(S);
      function T(e) {
        var t = e.useBoxShadow,
          n = e.height,
          a = e.color,
          o = e.className,
          r = e.progress,
          i = r.active,
          s = r.value,
          c = { width: s + '%', height: n, backgroundColor: a, boxShadow: '' };
        t && (c.boxShadow = '0 0 5px ' + a);
        var u = F()('reprogressbar', o, {
          'reprogressbar--active': i,
          'reprogressbar--inactive': !i,
        });
        return l.a.createElement(
          'div',
          { className: u },
          i &&
            l.a.createElement('div', {
              className: 'reprogressbar_bar',
              style: c,
            }),
        );
      }
      var P = T;
      function N(e, t) {
        var n = {};
        return (
          t.forEach(function(t) {
            void 0 !== e[t] && (n[t] = e[t]);
          }),
          n
        );
      }
      function L(e) {
        var t = N(e, ['color', 'height', 'className', 'useBoxShadow']);
        return l.a.createElement(
          y,
          { isLoading: e.isLoading },
          l.a.createElement(P, t),
        );
      }
      function O() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function(e) {
          for (
            var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            a[o - 1] = arguments[o];
          return t.some(t => {
            t && t(e, ...a), e.persist();
          });
        };
      }
      var I = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return Math.ceil(e.length / t);
        },
        j = e => Math.floor(e / 2),
        _ = (e, t) => e > t,
        R = (e, t, n, a) => {
          if (_(e, t) && n <= e) {
            var o = j(t);
            if (n >= o + a) {
              var l = n - o > 0 ? n - o : 1;
              return l + t <= e ? l : e - t + 1;
            }
            return n > 0 && n - o > 0 ? n - o : 1;
          }
          return a;
        };
      class A extends l.a.Component {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.generateStateFromProps = function(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                a = e.items,
                o = e.itemsperpage,
                l = e.pagesspan,
                r = I(a, o),
                i = n;
              n > r && (i = 1);
              var s = (i - 1) * o,
                c = i * o,
                u = _(r, l) ? l : r;
              return {
                pagesspan: l,
                inipagearray: 1,
                pagesforarray: u,
                nopages: r,
                noitems: a.length,
                initialitem: s,
                lastitem: c,
                currentpage: i,
                goBackBdisabled: t.goBackButtonState(i),
                goFastBackBdisabled: t.goFastBackButtonState(i),
                goFwdBdisabled: t.goFwdButtonState(i, r),
                goFastFwdBdisabled: t.goFastFwdButtonState(i, r),
              };
            }),
            (this.computeBackLimits = e => {
              var t = this.props.itemsperpage,
                n = (e - 1) * t,
                a = e * t;
              return { newinitialitem: n, newlastitem: a };
            }),
            (this.computeFwdLimits = e => {
              var t = this.props.itemsperpage,
                n = (e - 1) * t,
                a = e * t;
              return { newinitialitem: n, newlastitem: a };
            }),
            (this.computeSelectedPageLimits = e => {
              var t = this.props.itemsperpage,
                n = (e - 1) * t,
                a = e * t;
              return { newinitialitem: n, newlastitem: a };
            }),
            (this.goToPage = (e, t) => {
              var n = this.state,
                a = (n.currentpage, n.nopages),
                o = n.pagesspan,
                l = n.inipagearray;
              if (e > 0 && e <= a) {
                var r = this.computeSelectedPageLimits(e),
                  i = R(a, o, e, l);
                this.setState({
                  inipagearray: i,
                  currentpage: e,
                  initialitem: r.newinitialitem,
                  lastitem: r.newlastitem,
                  goBackBdisabled: this.goBackButtonState(e),
                  goFastBackBdisabled: this.goFastBackButtonState(e),
                  goFwdBdisabled: this.goFwdButtonState(e, a),
                  goFastFwdBdisabled: this.goFastFwdButtonState(e, a),
                });
              }
            }),
            (this.goBack = () => {
              var e = this.state,
                t = e.currentpage,
                n = e.nopages,
                a = e.pagesspan,
                o = e.inipagearray;
              if (t > 1) {
                var l = t - 1,
                  r = this.computeBackLimits(l),
                  i = R(n, a, l, o);
                this.setState({
                  currentpage: l,
                  inipagearray: i,
                  initialitem: r.newinitialitem,
                  lastitem: r.newlastitem,
                  goBackBdisabled: this.goBackButtonState(l),
                  goFastBackBdisabled: this.goFastBackButtonState(l),
                  goFwdBdisabled: this.goFwdButtonState(l, n),
                  goFastFwdBdisabled: this.goFastFwdButtonState(l, n),
                });
              }
            }),
            (this.goFastBack = () => {
              var e = this.state,
                t = e.currentpage,
                n = e.nopages,
                a = e.pagesspan,
                o = e.inipagearray;
              if (t > 1) {
                var l = 1,
                  r = this.computeBackLimits(l),
                  i = R(n, a, l, o);
                this.setState({
                  currentpage: l,
                  inipagearray: i,
                  initialitem: r.newinitialitem,
                  lastitem: r.newlastitem,
                  goBackBdisabled: this.goBackButtonState(l),
                  goFastBackBdisabled: this.goFastBackButtonState(l),
                  goFwdBdisabled: this.goFwdButtonState(l, n),
                  goFastFwdBdisabled: this.goFastFwdButtonState(l, n),
                });
              }
            }),
            (this.goFwd = () => {
              var e = this.state,
                t = e.nopages,
                n = e.currentpage,
                a = e.pagesspan,
                o = e.inipagearray;
              if (n < t) {
                var l = n + 1,
                  r = this.computeFwdLimits(l),
                  i = R(t, a, l, o);
                this.setState({
                  currentpage: l,
                  inipagearray: i,
                  initialitem: r.newinitialitem,
                  lastitem: r.newlastitem,
                  goBackBdisabled: this.goBackButtonState(l),
                  goFastBackBdisabled: this.goFastBackButtonState(l),
                  goFwdBdisabled: this.goFwdButtonState(l, t),
                  goFastFwdBdisabled: this.goFastFwdButtonState(l, t),
                });
              }
            }),
            (this.goFastFwd = () => {
              var e = this.state,
                t = e.nopages,
                n = e.currentpage,
                a = e.pagesspan,
                o = e.inipagearray;
              if (n < t) {
                var l = 1 * t,
                  r = this.computeFwdLimits(l),
                  i = R(t, a, l, o);
                this.setState({
                  currentpage: l,
                  inipagearray: i,
                  initialitem: r.newinitialitem,
                  lastitem: r.newlastitem,
                  goBackBdisabled: this.goBackButtonState(l),
                  goFastBackBdisabled: this.goFastBackButtonState(l),
                  goFwdBdisabled: this.goFwdButtonState(l, t),
                  goFastFwdBdisabled: this.goFastFwdButtonState(l, t),
                });
              }
            }),
            (this.goBackButtonState = e => e <= 1),
            (this.goFastBackButtonState = e => e <= 1),
            (this.goFwdButtonState = (e, t) => e >= t),
            (this.goFastFwdButtonState = (e, t) => e >= t),
            (this.getBackButtonProps = function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.onClick,
                a = Object(p['a'])(e, ['onClick']),
                o = { onClick: O(n, t.goBack) };
              return Object(C['a'])(Object(C['a'])({ role: 'button' }, o), a);
            }),
            (this.getFastBackButtonProps = function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.onClick,
                a = Object(p['a'])(e, ['onClick']),
                o = { onClick: O(n, t.goFastBack) };
              return Object(C['a'])(Object(C['a'])({ role: 'button' }, o), a);
            }),
            (this.getFwdButtonProps = function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.onClick,
                a = Object(p['a'])(e, ['onClick']),
                o = { onClick: O(n, t.goFwd) };
              return Object(C['a'])(Object(C['a'])({ role: 'button' }, o), a);
            }),
            (this.getFastFwdButtonProps = function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.onClick,
                a = Object(p['a'])(e, ['onClick']),
                o = { onClick: O(n, t.goFastFwd) };
              return Object(C['a'])(Object(C['a'])({ role: 'button' }, o), a);
            }),
            (this.getSelPageButtonProps = function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.onClick,
                a = e.page,
                o = Object(p['a'])(e, ['onClick', 'page']),
                l = { onClick: O(n, e => t.goToPage(a, e)) };
              return Object(C['a'])(Object(C['a'])({ role: 'button' }, l), o);
            });
          var n = this.generateStateFromProps(e);
          this.state = Object(C['a'])({}, n);
        }
        componentDidUpdate(e, t, n) {
          if (
            this.props.items.length !== e.items.length ||
            this.props.itemsperpage !== e.itemsperpage ||
            this.props.pagesspan !== e.pagesspan
          ) {
            var a = t.currentpage,
              o = this.generateStateFromProps(this.props, a);
            this.setState(Object(C['a'])({}, o));
          }
        }
        getStateAndHelpers() {
          var e = this.state,
            t = e.nopages,
            n = e.inipagearray,
            a = e.currentpage,
            o = e.pagesforarray,
            l = e.noitems,
            r = e.initialitem,
            i = e.lastitem,
            s = e.goBackBdisabled,
            c = e.goFastBackBdisabled,
            u = e.goFwdBdisabled,
            d = e.goFastFwdBdisabled,
            m = this.getBackButtonProps,
            g = this.getFastBackButtonProps,
            p = this.getFwdButtonProps,
            h = this.getFastFwdButtonProps,
            f = this.getSelPageButtonProps;
          return {
            getBackButtonProps: m,
            getFastBackButtonProps: g,
            getFwdButtonProps: p,
            getFastFwdButtonProps: h,
            getSelPageButtonProps: f,
            nopages: t,
            pagesforarray: o,
            inipagearray: n,
            currentpage: a,
            noitems: l,
            initialitem: r,
            lastitem: i,
            goBackBdisabled: s,
            goFastBackBdisabled: c,
            goFwdBdisabled: u,
            goFastFwdBdisabled: d,
          };
        }
        render() {
          return this.props.children(this.getStateAndHelpers());
        }
      }
      A.defaultProps = {
        itemsperpage: 10,
        pagesspan: 10,
        pagesforarray: 10,
        inipagearray: 1,
        items: [],
      };
      var z = A,
        V = {
          border: '1px solid #ccc',
          background: '#fff',
          fontSize: '1em',
          padding: 10,
          margin: 5,
          width: 70,
        },
        M = e => {
          var t = e.itemsperpage,
            n = e.nocolumns,
            a = e.items,
            o = e.pagesspan;
          return l.a.createElement(
            z,
            { itemsperpage: t, nocolumns: n, items: a, pagesspan: o },
            e => {
              var t = e.getBackButtonProps,
                o = e.getFastBackButtonProps,
                r = e.getFwdButtonProps,
                i = e.getFastFwdButtonProps,
                s = e.getSelPageButtonProps,
                c = (e.nopages, e.inipagearray),
                u = e.pagesforarray,
                d = e.currentpage,
                m = e.noitems,
                p = e.initialitem,
                h = e.lastitem,
                f = e.goBackBdisabled,
                b = e.goFastBackBdisabled,
                v = e.goFwdBdisabled,
                B = e.goFastFwdBdisabled;
              return l.a.createElement(
                'tbody',
                null,
                a.slice(p, h).map(e => e),
                m > 0
                  ? [
                      l.a.createElement(
                        'tr',
                        { key: 'pagingrow100' },
                        l.a.createElement(
                          'td',
                          { colSpan: n, style: { textAlign: 'center' } },
                          l.a.createElement(
                            'button',
                            Object(g['a'])({ style: V }, o(), { disabled: b }),
                            '<<',
                          ),
                          l.a.createElement(
                            'button',
                            Object(g['a'])({ style: V }, t(), { disabled: f }),
                            '<',
                          ),
                          Array.from({ length: u }, (e, t) => t + c).map(e =>
                            l.a.createElement(
                              'button',
                              Object(g['a'])({ key: e }, s({ page: e }), {
                                disabled: d == e,
                              }),
                              e,
                            ),
                          ),
                          l.a.createElement(
                            'button',
                            Object(g['a'])({ style: V }, r(), { disabled: v }),
                            '>',
                          ),
                          l.a.createElement(
                            'button',
                            Object(g['a'])({ style: V }, i(), { disabled: B }),
                            '>>',
                          ),
                        ),
                      ),
                    ]
                  : null,
              );
            },
          );
        },
        K = M,
        Q = e => {
          var t = e.defaultValue,
            n = e.onValueChange,
            a = Object(p['a'])(e, ['defaultValue', 'onValueChange']);
          return l.a.createElement(
            'input',
            Object(g['a'])(
              {
                defaultValue: t,
                onChange: e => {
                  var t = e.target.value;
                  return n(t);
                },
              },
              a,
            ),
          );
        },
        D = Q,
        W =
          (n('KxkV'),
          e => {
            var t = e.isVisible,
              n = void 0 !== t && t,
              a = e.title,
              o = e.content,
              r = e.footer,
              i = e.onClose,
              s = e => {
                var t = e.key;
                switch (t) {
                  case 'Escape':
                    i();
                    break;
                  default:
                }
              };
            return (
              l.a.useEffect(
                () => (
                  document.addEventListener('keydown', s),
                  () => document.removeEventListener('keydown', s)
                ),
              ),
              n
                ? l.a.createElement(
                    'div',
                    { className: 'modal', onClick: i },
                    l.a.createElement(
                      'div',
                      {
                        className: 'modal-dialog',
                        onClick: e => e.stopPropagation(),
                      },
                      l.a.createElement(
                        'div',
                        { className: 'modal-header' },
                        l.a.createElement(
                          'h3',
                          { className: 'modal-title' },
                          a,
                        ),
                        l.a.createElement(
                          'span',
                          { className: 'modal-close', onClick: i },
                          '\xd7',
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'modal-body' },
                        l.a.createElement(
                          'div',
                          { className: 'modal-content' },
                          o,
                        ),
                      ),
                      r &&
                        l.a.createElement(
                          'div',
                          { className: 'modal-footer' },
                          r,
                        ),
                    ),
                  )
                : null
            );
          }),
        H = W;
    },
    KxkV: function(e, t, n) {},
    QoHf: function(e, t, n) {},
    Rsk4: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = '.centui-wrapper{\n  margin: 0 12px 12px 0;\n}';
      t['default'] = {
        'button-demo': {
          component: function() {
            var e = n('3PQu'),
              t = n('K+nK'),
              a = t(n('tJVT')),
              o = e(n('q1tI')),
              l = n('/7QA');
            n('VBjf');
            var r = function() {
              var e = (0, o.useState)('idle'),
                t = (0, a['default'])(e, 2),
                n = t[0],
                r = t[1],
                i = function() {
                  r('loading'),
                    setTimeout(function() {
                      r('success');
                    }, 2e3);
                };
              return o['default'].createElement(
                o['default'].Fragment,
                null,
                o['default'].createElement(l.CentButton, {
                  size: 'tiny',
                  idleText: 'tiny',
                }),
                o['default'].createElement(l.CentButton, {
                  size: 'small',
                  idleText: 'small',
                }),
                o['default'].createElement(l.CentButton, {
                  size: 'normal',
                  idleText: 'normal',
                }),
                o['default'].createElement(l.CentButton, {
                  size: 'large',
                  idleText: 'large',
                }),
                o['default'].createElement('br', null),
                o['default'].createElement(l.CentButton, {
                  color: 'primary',
                  idleText: 'primary',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'secondary',
                  idleText: 'secondary',
                  outline: !0,
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'dark',
                  idleText: 'dark',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'light',
                  idleText: 'light',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'green',
                  idleText: 'green',
                }),
                o['default'].createElement('br', null),
                o['default'].createElement(l.CentButton, {
                  color: 'red',
                  idleText: 'red',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'yellow',
                  idleText: 'yellow',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'teal',
                  idleText: 'teal',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'violet',
                  idleText: 'violet',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'blue',
                  idleText: 'blue',
                }),
                o['default'].createElement('br', null),
                o['default'].createElement(l.CentButton, {
                  color: 'blue',
                  block: 'block',
                  idleText: 'block',
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'blue',
                  outline: 'outline',
                  idleText: 'outline',
                }),
                o['default'].createElement('br', null),
                o['default'].createElement(l.CentButton, {
                  color: 'blue',
                  className: 'hello',
                  disabled: !1,
                  idleText: 'outline',
                }),
                o['default'].createElement('br', null),
                o['default'].createElement(l.CentButton, {
                  color: 'blue',
                  disabled: !1,
                  idleText: 'outline',
                  animation: !1,
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'blue',
                  disabled: !1,
                  idleText: 'outline',
                  rounded: !0,
                }),
                o['default'].createElement(l.CentButton, {
                  color: 'blue',
                  disabled: !1,
                  idleText: 'outline',
                  rounded: !0,
                  loadingText: 'Loading',
                  successText: 'Success',
                  errorText: 'Error',
                  onClick: i,
                }),
                o['default'].createElement('br', null),
                o['default'].createElement(l.CentButton, {
                  buttonState: n,
                  onClick: i,
                  color: 'primary',
                  idleText: 'Button',
                  loadingText: 'Loading',
                  successText: 'Success',
                  errorText: 'Error',
                  type: 'reset',
                  className: 'class1 class2',
                  style: { borderRadius: '5px' },
                  outline: !1,
                  shadow: !1,
                  rounded: !1,
                  size: 'normal',
                  block: !1,
                  messageDuration: 2e3,
                  disabled: !1,
                  buttonRef: console.log,
                  width: null,
                  height: null,
                  animation: !0,
                }),
              );
            };
            return o['default'].createElement(r);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState } from 'react';\nimport { CentButton } from 'cent-react-wheel';\nimport '../md.scss';\n\nexport default () => {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  };\n  return (\n    <>\n      <CentButton size={'tiny'} idleText={'tiny'} />\n      <CentButton size={'small'} idleText={'small'} />\n      <CentButton size={'normal'} idleText={'normal'} />\n      <CentButton size={'large'} idleText={'large'} />\n      <br />\n      <CentButton color={'primary'} idleText={'primary'} />\n      <CentButton color={'secondary'} idleText={'secondary'} outline={true} />\n      <CentButton color={'dark'} idleText={'dark'} />\n      <CentButton color={'light'} idleText={'light'} />\n      <CentButton color={'green'} idleText={'green'} />\n      <br />\n      <CentButton color={'red'} idleText={'red'} />\n      <CentButton color={'yellow'} idleText={'yellow'} />\n      <CentButton color={'teal'} idleText={'teal'} />\n      <CentButton color={'violet'} idleText={'violet'} />\n      <CentButton color={'blue'} idleText={'blue'} />\n      <br />\n      <CentButton color={'blue'} block={'block'} idleText={'block'} />\n      <CentButton color={'blue'} outline={'outline'} idleText={'outline'} />\n      <br />\n      <CentButton\n        color={'blue'}\n        className={'hello'}\n        disabled={false}\n        idleText={'outline'}\n      />\n      <br />\n      <CentButton\n        color={'blue'}\n        disabled={false}\n        idleText={'outline'}\n        animation={false}\n      />\n      <CentButton\n        color={'blue'}\n        disabled={false}\n        idleText={'outline'}\n        rounded={true}\n      />\n      <CentButton\n        color={'blue'}\n        disabled={false}\n        idleText={'outline'}\n        rounded={true}\n        loadingText={'Loading'}\n        successText={'Success'}\n        errorText={'Error'}\n        onClick={onClickHandler}\n      />\n      <br />\n      <CentButton\n        buttonState={state}\n        onClick={onClickHandler}\n        color={'primary'}\n        idleText={'Button'}\n        loadingText={'Loading'}\n        successText={'Success'}\n        errorText={'Error'}\n        type={'reset'}\n        className={'class1 class2'}\n        style={{ borderRadius: '5px' }}\n        outline={false}\n        shadow={false}\n        rounded={false}\n        size={'normal'}\n        block={false}\n        messageDuration={2000}\n        disabled={false}\n        buttonRef={console.log}\n        width={null}\n        height={null}\n        animation={true}\n      />\n    </>\n  );\n};",
              },
              'md.scss': { import: '../md.scss', content: a },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'button-demo',
          },
        },
        'checkbox-demo': {
          component: function() {
            var e = n('K+nK'),
              t = e(n('tJVT')),
              a = e(n('q1tI')),
              o = n('/7QA'),
              l = function(e) {
                var n = e.theme,
                  l = a['default'].useState(1),
                  r = (0, t['default'])(l, 2),
                  i = r[0],
                  s = r[1],
                  c = a['default'].useState(!0),
                  u = (0, t['default'])(c, 2),
                  d = u[0],
                  m = u[1],
                  g = a['default'].useState(!1),
                  p = (0, t['default'])(g, 2),
                  h = p[0],
                  f = p[1],
                  b = a['default'].useState(!1),
                  v = (0, t['default'])(b, 2),
                  B = v[0],
                  w = v[1],
                  C = a['default'].useState(!0),
                  k = (0, t['default'])(C, 2),
                  x = k[0],
                  E = k[1];
                a['default'].useEffect(
                  function() {
                    s(d && h && B && x ? 2 : d || h || B || x ? 1 : 0);
                  },
                  [d, h, B, x],
                );
                var y = function() {
                  d && h && B && x
                    ? (m(!1), f(!1), w(!1), E(!1), s(0))
                    : (m(!0), f(!0), w(!0), E(!0), s(2));
                };
                return a['default'].createElement(
                  'fieldset',
                  null,
                  a['default'].createElement('legend', null, '\u4f8b\u5b50'),
                  a['default'].createElement(
                    o.Checkbox,
                    {
                      theme: n,
                      value: 2 === i,
                      indeterminate: 1 === i,
                      onChange: y,
                    },
                    '\u5168\u9009',
                  ),
                  a['default'].createElement(
                    'ul',
                    null,
                    a['default'].createElement(
                      'li',
                      null,
                      a['default'].createElement(
                        o.Checkbox,
                        {
                          theme: n,
                          modification: 'md-ink-ripple',
                          value: d,
                          onChange: function() {
                            return m(!d);
                          },
                        },
                        '\u7b80\u5355',
                      ),
                    ),
                    a['default'].createElement(
                      'li',
                      null,
                      a['default'].createElement(
                        o.Checkbox,
                        {
                          theme: n,
                          value: h,
                          onChange: function() {
                            return f(!h);
                          },
                        },
                        '\u5355\u9009',
                      ),
                    ),
                    a['default'].createElement(
                      'li',
                      null,
                      a['default'].createElement(
                        o.Checkbox,
                        {
                          theme: n,
                          value: B,
                          onChange: function() {
                            return w(!B);
                          },
                        },
                        'Indeterminate',
                      ),
                    ),
                    a['default'].createElement(
                      'li',
                      null,
                      a['default'].createElement(
                        o.Checkbox,
                        {
                          theme: n,
                          value: x,
                          onChange: function() {
                            return E(!x);
                          },
                          disabled: !0,
                        },
                        '\u5355\u9009',
                      ),
                    ),
                  ),
                );
              };
            return a['default'].createElement(l);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState } from 'react';\nimport { Checkbox } from 'cent-react-wheel';\n\nexport default ({ theme }) => {\n  const [all, setAll] = React.useState(1); // 0 for none, 1 for some, 2 for all\n  const [easyToStyle, setEasyToStyle] = React.useState(true);\n  const [types, setTypes] = React.useState(false);\n  const [indeterminate, setIndeterminate] = React.useState(false);\n  const [lightWeight, setLightWeight] = React.useState(true);\n\n  React.useEffect(() => {\n    if (easyToStyle && types && indeterminate && lightWeight) {\n      setAll(2);\n    } else if (easyToStyle || types || indeterminate || lightWeight) {\n      setAll(1);\n    } else {\n      setAll(0);\n    }\n  }, [easyToStyle, types, indeterminate, lightWeight]);\n\n  const toggleAll = () => {\n    if (easyToStyle && types && indeterminate && lightWeight) {\n      setEasyToStyle(false);\n      setTypes(false);\n      setIndeterminate(false);\n      setLightWeight(false);\n      setAll(0);\n    } else {\n      setEasyToStyle(true);\n      setTypes(true);\n      setIndeterminate(true);\n      setLightWeight(true);\n      setAll(2);\n    }\n  };\n  return (\n    <fieldset>\n      <legend>\u4f8b\u5b50</legend>\n\n      <Checkbox\n        theme={theme}\n        value={all === 2}\n        indeterminate={all === 1}\n        onChange={toggleAll}\n      >\n        \u5168\u9009\n      </Checkbox>\n\n      <ul>\n        <li>\n          <Checkbox\n            theme={theme}\n            modification=\"md-ink-ripple\"\n            value={easyToStyle}\n            onChange={() => setEasyToStyle(!easyToStyle)}\n          >\n            \u7b80\u5355\n          </Checkbox>\n        </li>\n        <li>\n          <Checkbox\n            theme={theme}\n            value={types}\n            onChange={() => setTypes(!types)}\n          >\n            \u5355\u9009\n          </Checkbox>\n        </li>\n        <li>\n          <Checkbox\n            theme={theme}\n            value={indeterminate}\n            onChange={() => setIndeterminate(!indeterminate)}\n          >\n            Indeterminate\n          </Checkbox>\n        </li>\n        <li>\n          <Checkbox\n            theme={theme}\n            value={lightWeight}\n            onChange={() => setLightWeight(!lightWeight)}\n            disabled={true}\n          >\n            \u5355\u9009\n          </Checkbox>\n        </li>\n      </ul>\n    </fieldset>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'checkbox-demo',
          },
        },
        'icon-demo': {
          component: function() {
            var e = n('K+nK'),
              t = e(n('q1tI')),
              a = n('/7QA'),
              o = function() {
                return t['default'].createElement(
                  t['default'].Fragment,
                  null,
                  t['default'].createElement(a.IconBlur, {
                    src: 'https://codekeep.io/assets/icon.svg',
                    size: '100',
                    padding: '',
                    onClick: function() {
                      return console.log('codekeep');
                    },
                  }),
                  t['default'].createElement('br', null),
                  t['default'].createElement(a.IconBlur, {
                    type: 'CIRCLE',
                    src: 'https://codekeep.io/assets/icon.svg',
                    size: '50',
                    padding: '10',
                    onClick: function() {
                      return console.log('');
                    },
                  }),
                );
              };
            return t['default'].createElement(o);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  'import React, { useState } from \'react\';\nimport { IconBlur } from \'cent-react-wheel\';\n\nexport default () => (\n  <>\n    <IconBlur\n      src="https://codekeep.io/assets/icon.svg"\n      size="100"\n      padding=""\n      onClick={() => console.log(\'codekeep\')}\n    />\n    <br />\n    <IconBlur\n      type="CIRCLE"\n      src="https://codekeep.io/assets/icon.svg"\n      size="50"\n      padding="10"\n      onClick={() => console.log(\'\')}\n    />\n  </>\n);',
              },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'icon-demo',
          },
        },
        'input-demo': {
          component: function() {
            var e = n('K+nK'),
              t = e(n('q1tI')),
              a = n('/7QA'),
              o = function() {
                return t['default'].createElement(a.UncontrolledInput, {
                  type: 'text',
                  placeholder: 'Insert some text here...',
                  onValueChange: console.log,
                });
              };
            return t['default'].createElement(o);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  'import React, { useState } from \'react\';\nimport { UncontrolledInput } from \'cent-react-wheel\';\n\nexport default () => {\n  return (\n    <UncontrolledInput\n      type="text"\n      placeholder="Insert some text here..."\n      onValueChange={console.log}\n    />\n  );\n};',
              },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'input-demo',
          },
        },
        'modal-demo': {
          component: function() {
            var e = n('K+nK'),
              t = e(n('tJVT')),
              a = e(n('q1tI')),
              o = n('/7QA'),
              l = function() {
                var e = a['default'].useState(!1),
                  n = (0, t['default'])(e, 2),
                  l = n[0],
                  r = n[1];
                return a['default'].createElement(
                  a['default'].Fragment,
                  null,
                  a['default'].createElement(
                    o.CentButton,
                    {
                      onClick: function() {
                        return r(!0);
                      },
                    },
                    'Click Here',
                  ),
                  a['default'].createElement(o.Modal, {
                    isVisible: l,
                    title: 'Modal Title',
                    content: a['default'].createElement(
                      'p',
                      null,
                      'Add your content here',
                    ),
                    footer: a['default'].createElement(
                      'button',
                      null,
                      'Cancel',
                    ),
                    onClose: function() {
                      return r(!1);
                    },
                  }),
                );
              };
            return a['default'].createElement(l);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState } from 'react';\nimport { Modal, CentButton } from 'cent-react-wheel';\n\nexport default () => {\n  const [isModal, setModal] = React.useState(false);\n  return (\n    <>\n      <CentButton onClick={() => setModal(true)}>Click Here</CentButton>\n      <Modal\n        isVisible={isModal}\n        title=\"Modal Title\"\n        content={<p>Add your content here</p>}\n        footer={<button>Cancel</button>}\n        onClose={() => setModal(false)}\n      />\n    </>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'modal-demo',
          },
        },
        'nextpaging-demo': {
          component: function() {
            var e = n('K+nK'),
              t = e(n('q1tI')),
              a = n('/7QA'),
              o = function() {
                var e = [
                  [1, 2],
                  [3, 4],
                  [5, 6],
                ];
                return t['default'].createElement(
                  'table',
                  { className: 'table table-hover' },
                  t['default'].createElement(
                    'thead',
                    null,
                    t['default'].createElement(
                      'tr',
                      null,
                      t['default'].createElement('th', null, 'Id. pedido'),
                      t['default'].createElement('th', null, 'Agregado'),
                      t['default'].createElement('th', null, 'Despacho'),
                      t['default'].createElement('th', null, 'Cliente'),
                      t['default'].createElement('th', null),
                    ),
                  ),
                  t['default'].createElement(a.PaginacionTabla, {
                    itemsperpage: 1,
                    nocolumns: 4,
                    items: e,
                    pagesspan: 3,
                  }),
                );
              };
            return t['default'].createElement(o);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState } from 'react';\nimport { PaginacionTabla } from 'cent-react-wheel';\n\nexport default () => {\n  const filas = [\n    [1, 2],\n    [3, 4],\n    [5, 6],\n  ];\n  return (\n    <table className=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Id. pedido</th>\n          <th>Agregado</th>\n          <th>Despacho</th>\n          <th>Cliente</th>\n          <th />\n        </tr>\n      </thead>\n      <PaginacionTabla\n        itemsperpage={1}\n        nocolumns={4}\n        items={filas}\n        pagesspan={3}\n      />\n    </table>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'nextpaging-demo',
          },
        },
        'progress-demo': {
          component: function() {
            var e = n('3PQu'),
              t = n('K+nK'),
              a = t(n('tJVT')),
              o = e(n('q1tI')),
              l = n('/7QA'),
              r = function() {
                var e = (0, o.useState)(!1),
                  t = (0, a['default'])(e, 2),
                  n = t[0],
                  r = t[1],
                  i = null,
                  s = function() {
                    c(), r(!n);
                  },
                  c = function() {
                    i && window.clearInterval(i);
                  };
                return o['default'].createElement(
                  'div',
                  null,
                  o['default'].createElement(l.ProgressBar, {
                    isLoading: n,
                    className: 'fixed-progress-bar',
                    color: '#4285F4',
                    height: '4px',
                    useBoxShadow: !0,
                  }),
                  o['default'].createElement('br', null),
                  o['default'].createElement(
                    'div',
                    { className: 'button-row' },
                    o['default'].createElement(
                      l.CentButton,
                      {
                        onClick: function() {
                          return s();
                        },
                      },
                      n ? 'End Loading' : 'Begin Loading',
                    ),
                  ),
                );
              };
            return o['default'].createElement(r);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  'import React, { useState } from \'react\';\nimport { ProgressBar, CentButton } from \'cent-react-wheel\';\n\nexport default () => {\n  const [isLoading, setIsLoading] = useState(false);\n  let timeout = null;\n  const toggleLoading = () => {\n    clearTimeout();\n    setIsLoading(!isLoading);\n  };\n\n  const clearTimeout = () => {\n    if (timeout) {\n      window.clearInterval(timeout);\n    }\n  };\n\n  return (\n    <div>\n      <ProgressBar\n        isLoading={isLoading}\n        className="fixed-progress-bar"\n        color="#4285F4"\n        height="4px"\n        useBoxShadow={true}\n      />\n      <br />\n      <div className="button-row">\n        <CentButton onClick={() => toggleLoading()}>\n          {isLoading ? \'End Loading\' : \'Begin Loading\'}\n        </CentButton>\n      </div>\n    </div>\n  );\n};',
              },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'progress-demo',
          },
        },
        'slider-demo': {
          component: function() {
            var e = n('3PQu'),
              t = n('K+nK'),
              a = t(n('tJVT')),
              o = e(n('q1tI')),
              l = n('/7QA'),
              r = function() {
                var e = function(e) {
                    return (
                      (e = Number(e)),
                      (isNaN(e) || 'undefined' === typeof e) && (e = 0),
                      e
                    );
                  },
                  t = (0, o.useState)(50),
                  n = (0, a['default'])(t, 2),
                  r = n[0],
                  i = n[1],
                  s = function(t) {
                    var n = e(t.target.value);
                    i(n);
                  };
                return o['default'].createElement(
                  o['default'].Fragment,
                  null,
                  o['default'].createElement(l.RangeStepInput, {
                    min: 0,
                    max: 100,
                    value: r,
                    onChange: s,
                    hold: !1,
                  }),
                  o['default'].createElement(
                    'div',
                    null,
                    o['default'].createElement('span', null, r),
                  ),
                );
              };
            return o['default'].createElement(r);
          },
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState } from 'react';\nimport { RangeStepInput } from 'cent-react-wheel';\n\nexport default () => {\n  const forceNumber = function(n: number) {\n    n = Number(n);\n    if (isNaN(n) || typeof n === 'undefined') {\n      n = 0;\n    }\n    return n;\n  };\n  const [value, setValue] = useState(50);\n  const onChange = e => {\n    const newVal = forceNumber(e.target.value);\n    setValue(newVal);\n  };\n  return (\n    <>\n      <RangeStepInput\n        min={0}\n        max={100}\n        value={value}\n        onChange={onChange}\n        hold={false}\n      />\n\n      <div>\n        <span>{value}</span>\n      </div>\n    </>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '16.14.0' },
              'cent-react-wheel': { version: '1.0.0' },
            },
            identifier: 'slider-demo',
          },
        },
      };
    },
    VBjf: function(e, t, n) {},
    eRxg: function(e, t, n) {},
    jgzr: function(e, t, n) {},
    x2v5: function(e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
