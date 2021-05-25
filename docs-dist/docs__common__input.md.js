(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    vHK2: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('q1tI'),
        l = n.n(a),
        r = n('dEAq'),
        c = n('0zqC'),
        m = n('Rsk4'),
        u = l.a.memo(m['default']['input-demo'].component);
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h1',
                { id: 'uncontrolledinput-\u7ec4\u4ef6' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#uncontrolledinput-\u7ec4\u4ef6',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'UncontrolledInput \u7ec4\u4ef6',
              ),
              l.a.createElement(
                'h2',
                { id: 'type' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#type', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Type',
              ),
            ),
            l.a.createElement(
              c['default'],
              m['default']['input-demo'].previewerProps,
              l.a.createElement(u, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h2',
                { id: 'props' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#props', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Props',
              ),
              l.a.createElement(
                'table',
                null,
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', null, '\u5c5e\u6027'),
                    l.a.createElement('th', null, '\u7c7b\u578b'),
                    l.a.createElement('th', null, '\u8bf4\u660e'),
                    l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  ),
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'defaultValue'),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'number'),
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      '\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6\u7684\u9ed8\u8ba4\u503c',
                    ),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onChange'),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'function'),
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      '\u503c\u6539\u53d8\u7684\u56de\u8c03',
                    ),
                    l.a.createElement('td', null, '-'),
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
