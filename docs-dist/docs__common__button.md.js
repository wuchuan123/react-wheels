(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    UBgS: function(e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        r = l('dEAq'),
        c = l('0zqC'),
        u = l('Rsk4'),
        m = a.a.memo(u['default']['button-demo'].component);
      t['default'] = function() {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              'div',
              { className: 'markdown' },
              a.a.createElement(
                'h1',
                { id: '\u6309\u94ae\u7ec4\u4ef6' },
                a.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#\u6309\u94ae\u7ec4\u4ef6',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  a.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u6309\u94ae\u7ec4\u4ef6',
              ),
              a.a.createElement(
                'h2',
                { id: 'type' },
                a.a.createElement(
                  r['AnchorLink'],
                  { to: '#type', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Type',
              ),
            ),
            a.a.createElement(
              c['default'],
              u['default']['button-demo'].previewerProps,
              a.a.createElement(m, null),
            ),
            a.a.createElement(
              'div',
              { className: 'markdown' },
              a.a.createElement(
                'h2',
                { id: 'props' },
                a.a.createElement(
                  r['AnchorLink'],
                  { to: '#props', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Props',
              ),
              a.a.createElement(
                'table',
                null,
                a.a.createElement(
                  'thead',
                  null,
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('th', null, '\u5c5e\u6027'),
                    a.a.createElement('th', null, '\u7c7b\u578b'),
                    a.a.createElement('th', null, '\u8bf4\u660e'),
                    a.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  ),
                ),
                a.a.createElement(
                  'tbody',
                  null,
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'buttonState'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement(
                        'code',
                        null,
                        "'idle' 'loading' 'success' 'error'",
                      ),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      '\u5f53\u524d button \u72b6\u6001',
                    ),
                    a.a.createElement('td', null, "'idle'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'onClick'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'function'),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      '\u70b9\u51fb button \u7684\u56de\u8c03',
                    ),
                    a.a.createElement('td', null, '() => ', '{', '}'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'color'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement(
                        'code',
                        null,
                        "'primary' 'secondary' 'dark' 'light' 'green' 'red' 'yellow' 'teal' 'violet' 'blue'",
                      ),
                    ),
                    a.a.createElement('td', null, 'button \u989c\u8272'),
                    a.a.createElement('td', null, "'primary'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'idleText'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'string | ReactNode'),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      'button \u9759\u6b62\u65f6\u7684\u6587\u672c',
                    ),
                    a.a.createElement('td', null, "'Click Me'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'loadingText'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'string | ReactNode'),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      'button \u52a0\u8f7d\u65f6\u7684\u6587\u672c',
                    ),
                    a.a.createElement('td', null, "'Loading'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'successText'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'string | ReactNode'),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      'button \u52a0\u8f7d\u6210\u529f\u7684\u6587\u672c',
                    ),
                    a.a.createElement('td', null, "'Success'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'errorText'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'string | ReactNode'),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      'button \u52a0\u8f7d\u5931\u8d25\u7684\u6587\u672c',
                    ),
                    a.a.createElement('td', null, "'Error'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'type'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement(
                        'code',
                        null,
                        "'button' 'submit' 'reset'",
                      ),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      'button \u7c7b\u578b\u5c5e\u6027',
                    ),
                    a.a.createElement('td', null, "'button'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'className'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'string'),
                    ),
                    a.a.createElement('td', null, 'classnames'),
                    a.a.createElement('td', null, "''"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'style'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'React.CSSProperties'),
                    ),
                    a.a.createElement('td', null, 'style'),
                    a.a.createElement('td', null, '{', '}'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'outline'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'boolean'),
                    ),
                    a.a.createElement('td', null, '\u53ea\u6709\u8fb9\u6846'),
                    a.a.createElement('td', null, 'false'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'shadow'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'boolean'),
                    ),
                    a.a.createElement('td', null, '\u9634\u5f71'),
                    a.a.createElement('td', null, 'false'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'rounded'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'boolean'),
                    ),
                    a.a.createElement('td', null, '\u5706\u89d2'),
                    a.a.createElement('td', null, 'false'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'size'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement(
                        'code',
                        null,
                        "'tiny' 'small' 'normal' 'large'",
                      ),
                    ),
                    a.a.createElement('td', null, '\u5927\u5c0f'),
                    a.a.createElement('td', null, "'normal'"),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'block'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'boolean'),
                    ),
                    a.a.createElement('td', null, 'block'),
                    a.a.createElement('td', null, 'false'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'messageDuration'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'number'),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      '\u6210\u529f\u6216\u8005\u5931\u8d25\u7684\u5ef6\u65f6',
                    ),
                    a.a.createElement('td', null, '2000'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'disabled'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'boolean'),
                    ),
                    a.a.createElement(
                      'td',
                      null,
                      'button \u662f\u5426\u7981\u7528',
                    ),
                    a.a.createElement('td', null, 'false'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'buttonRef'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'React.Ref | null'),
                    ),
                    a.a.createElement('td', null, 'button \u5f15\u7528'),
                    a.a.createElement('td', null, 'null'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'width'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'string | null'),
                    ),
                    a.a.createElement('td', null, '\u8986\u76d6\u5bbd\u5ea6'),
                    a.a.createElement('td', null, 'null'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'height'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'string | null'),
                    ),
                    a.a.createElement('td', null, '\u8986\u76d6\u9ad8\u5ea6'),
                    a.a.createElement('td', null, 'null'),
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('td', null, 'animation'),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, 'boolean'),
                    ),
                    a.a.createElement('td', null, '\u52a8\u753b'),
                    a.a.createElement('td', null, 'true'),
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
