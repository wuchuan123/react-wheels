(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '3PQu': function(e, t, n) {
      var a = n('z01/');
      function r() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      function i(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== a(e) && 'function' !== typeof e))
          return { default: e };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, o, s)
              : (n[o] = e[o]);
          }
        return (n['default'] = e), t && t.set(e, n), n;
      }
      e.exports = i;
    },
    'K+nK': function(e, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = n;
    },
    LMrN: function(e, t, n) {},
    ZpkN: function(e, t, n) {
      'use strict';
      var a = n('0Owb'),
        r = n('tJVT'),
        i = n('q1tI'),
        o = n.n(i),
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
                  var a = t.util.type(e);
                  switch (((n = n || {}), a)) {
                    case 'Object':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      i = {};
                      for (var r in ((n[t.util.objId(e)] = i), e))
                        e.hasOwnProperty(r) && (i[r] = t.util.clone(e[r], n));
                      return i;
                    case 'Array':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      var i = [];
                      return (
                        (n[t.util.objId(e)] = i),
                        e.forEach(function(e, a) {
                          i[a] = t.util.clone(e, n);
                        }),
                        i
                      );
                  }
                  return e;
                },
              },
              languages: {
                extend: function(e, n) {
                  var a = t.util.clone(t.languages[e]);
                  for (var r in n) a[r] = n[r];
                  return a;
                },
                insertBefore: function(e, n, a, r) {
                  r = r || t.languages;
                  var i = r[e];
                  if (2 == arguments.length) {
                    for (var o in ((a = arguments[1]), a))
                      a.hasOwnProperty(o) && (i[o] = a[o]);
                    return i;
                  }
                  var s = {};
                  for (var l in i)
                    if (i.hasOwnProperty(l)) {
                      if (l == n)
                        for (var o in a) a.hasOwnProperty(o) && (s[o] = a[o]);
                      s[l] = i[l];
                    }
                  return (
                    t.languages.DFS(t.languages, function(t, n) {
                      n === r[e] && t != e && (this[t] = s);
                    }),
                    (r[e] = s)
                  );
                },
                DFS: function(e, n, a, r) {
                  for (var i in ((r = r || {}), e))
                    e.hasOwnProperty(i) &&
                      (n.call(e, i, e[i], a || i),
                      'Object' !== t.util.type(e[i]) || r[t.util.objId(e[i])]
                        ? 'Array' !== t.util.type(e[i]) ||
                          r[t.util.objId(e[i])] ||
                          ((r[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, i, r))
                        : ((r[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, null, r)));
                },
              },
              plugins: {},
              highlight: function(e, a, r) {
                var i = { code: e, grammar: a, language: r };
                return (
                  t.hooks.run('before-tokenize', i),
                  (i.tokens = t.tokenize(i.code, i.grammar)),
                  t.hooks.run('after-tokenize', i),
                  n.stringify(t.util.encode(i.tokens), i.language)
                );
              },
              matchGrammar: function(e, n, a, r, i, o, s) {
                var l = t.Token;
                for (var u in a)
                  if (a.hasOwnProperty(u) && a[u]) {
                    if (u == s) return;
                    var c = a[u];
                    c = 'Array' === t.util.type(c) ? c : [c];
                    for (var p = 0; p < c.length; ++p) {
                      var d = c[p],
                        g = d.inside,
                        f = !!d.lookbehind,
                        h = !!d.greedy,
                        b = 0,
                        m = d.alias;
                      if (h && !d.pattern.global) {
                        var y = d.pattern.toString().match(/[imuy]*$/)[0];
                        d.pattern = RegExp(d.pattern.source, y + 'g');
                      }
                      d = d.pattern || d;
                      for (
                        var v = r, S = i;
                        v < n.length;
                        S += n[v].length, ++v
                      ) {
                        var k = n[v];
                        if (n.length > e.length) return;
                        if (!(k instanceof l)) {
                          if (h && v != n.length - 1) {
                            d.lastIndex = S;
                            var w = d.exec(e);
                            if (!w) break;
                            for (
                              var E = w.index + (f ? w[1].length : 0),
                                _ = w.index + w[0].length,
                                A = v,
                                O = S,
                                T = n.length;
                              A < T &&
                              (O < _ || (!n[A].type && !n[A - 1].greedy));
                              ++A
                            )
                              (O += n[A].length), E >= O && (++v, (S = O));
                            if (n[v] instanceof l) continue;
                            (I = A - v), (k = e.slice(S, O)), (w.index -= S);
                          } else {
                            d.lastIndex = 0;
                            w = d.exec(k);
                            var I = 1;
                          }
                          if (w) {
                            f && (b = w[1] ? w[1].length : 0);
                            (E = w.index + b),
                              (w = w[0].slice(b)),
                              (_ = E + w.length);
                            var R = k.slice(0, E),
                              x = k.slice(_),
                              F = [v, I];
                            R && (++v, (S += R.length), F.push(R));
                            var N = new l(u, g ? t.tokenize(w, g) : w, m, w, h);
                            if (
                              (F.push(N),
                              x && F.push(x),
                              Array.prototype.splice.apply(n, F),
                              1 != I && t.matchGrammar(e, n, a, v, S, !0, u),
                              o)
                            )
                              break;
                          } else if (o) break;
                        }
                      }
                    }
                  }
              },
              hooks: { add: function() {}, run: function(e, t) {} },
              tokenize: function(e, n, a) {
                var r = [e],
                  i = n.rest;
                if (i) {
                  for (var o in i) n[o] = i[o];
                  delete n.rest;
                }
                return t.matchGrammar(e, r, n, 0, 0, !1), r;
              },
            },
            n = (t.Token = function(e, t, n, a, r) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (a || '').length),
                (this.greedy = !!r);
            });
          return (
            (n.stringify = function(e, a, r) {
              if ('string' == typeof e) return e;
              if ('Array' === t.util.type(e))
                return e
                  .map(function(t) {
                    return n.stringify(t, a, e);
                  })
                  .join('');
              var i = {
                type: e.type,
                content: n.stringify(e.content, a, r),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: a,
                parent: r,
              };
              if (e.alias) {
                var o = 'Array' === t.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(i.classes, o);
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
            var a = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            a['language-' + t] = { pattern: /[\s\S]+/, inside: s.languages[t] };
            var r = {};
            (r[e] = {
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
              inside: a,
            }),
              s.languages.insertBefore('markup', 'cdata', r);
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
            a = {
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
                inside: a,
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
                inside: a,
              },
            ],
            environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
            variable: a.variable,
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
            var r = [
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
              i = a.variable[1].inside,
              o = 0;
            o < r.length;
            o++
          )
            i[r[o]] = e.languages.bash[r[o]];
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
          var a = { pattern: /(\b\d+)(?:%|[a-z]+\b)/, lookbehind: !0 },
            r = {
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
                  unit: a,
                  number: r,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: a,
            number: r,
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
            a = function t(a) {
              for (var r = [], i = 0; i < a.length; i++) {
                var o = a[i],
                  s = !1;
                if (
                  ('string' !== typeof o &&
                    ('tag' === o.type &&
                    o.content[0] &&
                    'tag' === o.content[0].type
                      ? '</' === o.content[0].content[0].content
                        ? r.length > 0 &&
                          r[r.length - 1].tagName ===
                            n(o.content[0].content[1]) &&
                          r.pop()
                        : '/>' === o.content[o.content.length - 1].content ||
                          r.push({
                            tagName: n(o.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : r.length > 0 &&
                        'punctuation' === o.type &&
                        '{' === o.content
                      ? r[r.length - 1].openedBraces++
                      : r.length > 0 &&
                        r[r.length - 1].openedBraces > 0 &&
                        'punctuation' === o.type &&
                        '}' === o.content
                      ? r[r.length - 1].openedBraces--
                      : (s = !0)),
                  (s || 'string' === typeof o) &&
                    r.length > 0 &&
                    0 === r[r.length - 1].openedBraces)
                ) {
                  var l = n(o);
                  i < a.length - 1 &&
                    ('string' === typeof a[i + 1] ||
                      'plain-text' === a[i + 1].type) &&
                    ((l += n(a[i + 1])), a.splice(i + 1, 1)),
                    i > 0 &&
                      ('string' === typeof a[i - 1] ||
                        'plain-text' === a[i - 1].type) &&
                      ((l = n(a[i - 1]) + l), a.splice(i - 1, 1), i--),
                    (a[i] = new e.Token('plain-text', l, null, l));
                }
                o.content && 'string' !== typeof o.content && t(o.content);
              }
            };
          e.hooks.add('after-tokenize', function(e) {
            ('jsx' !== e.language && 'tsx' !== e.language) || a(e.tokens);
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
              a = 0;
            a < n.length;
            a++
          ) {
            var r = n[a],
              i = e.languages.javascript[r];
            'RegExp' === e.util.type(i) &&
              (i = e.languages.javascript[r] = { pattern: i });
            var o = i.inside || {};
            (i.inside = o), (o['maybe-class-name'] = /^[A-Z][\s\S]*/);
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
            var a = t[n],
              r = [];
            /^\w+$/.test(n) || r.push(/\w+/.exec(n)[0]),
              'diff' === n && r.push('bold'),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  '^(?:[' + a + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
                  'm',
                ),
                alias: r,
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
              value: function(n, a, r, i) {
                if (n.language === a) {
                  var o = (n.tokenStack = []);
                  (n.code = n.code.replace(r, function(e) {
                    if ('function' === typeof i && !i(e)) return e;
                    var r,
                      s = o.length;
                    while (-1 !== n.code.indexOf((r = t(a, s)))) ++s;
                    return (o[s] = e), r;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function(n, a) {
                if (n.language === a && n.tokenStack) {
                  n.grammar = e.languages[a];
                  var r = 0,
                    i = Object.keys(n.tokenStack);
                  o(n.tokens);
                }
                function o(s) {
                  for (var l = 0; l < s.length; l++) {
                    if (r >= i.length) break;
                    var u = s[l];
                    if (
                      'string' === typeof u ||
                      (u.content && 'string' === typeof u.content)
                    ) {
                      var c = i[r],
                        p = n.tokenStack[c],
                        d = 'string' === typeof u ? u : u.content,
                        g = t(a, c),
                        f = d.indexOf(g);
                      if (f > -1) {
                        ++r;
                        var h = d.substring(0, f),
                          b = new e.Token(
                            a,
                            e.tokenize(p, n.grammar),
                            'language-' + a,
                            p,
                          ),
                          m = d.substring(f + g.length),
                          y = [];
                        h && y.push.apply(y, o([h])),
                          y.push(b),
                          m && y.push.apply(y, o([m])),
                          'string' === typeof u
                            ? s.splice.apply(s, [l, 1].concat(y))
                            : (u.content = y);
                      }
                    } else u.content && o(u.content);
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
          var a = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            r = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function() {
                return a;
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
                pattern: RegExp('^' + r + i + '(?:' + r + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + r + i + ')(?:' + r + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(a),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + r + ')' + i + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + r + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(a),
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
                  for (var n = 0, a = e.length; n < a; n++) {
                    var r = e[n];
                    if ('code' === r.type) {
                      var i = r.content[1],
                        o = r.content[3];
                      if (
                        i &&
                        o &&
                        'code-language' === i.type &&
                        'code-block' === o.type &&
                        'string' === typeof i.content
                      ) {
                        var s = i.content
                          .replace(/\b#/g, 'sharp')
                          .replace(/\b\+\+/g, 'pp');
                        s = (/[a-z][\w-]*/i.exec(s) || [''])[0].toLowerCase();
                        var l = 'language-' + s;
                        o.alias
                          ? 'string' === typeof o.alias
                            ? (o.alias = [o.alias, l])
                            : o.alias.push(l)
                          : (o.alias = [l]);
                      }
                    } else t(r.content);
                  }
              }
              ('markdown' !== e.language && 'md' !== e.language) || t(e.tokens);
            }),
            e.hooks.add('wrap', function(t) {
              if ('code-block' === t.type) {
                for (var n = '', a = 0, r = t.classes.length; a < r; a++) {
                  var i = t.classes[a],
                    o = /language-(.+)/.exec(i);
                  if (o) {
                    n = o[1];
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
                  var u =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(1e16 * Math.random());
                  (t.attributes['id'] = u),
                    e.plugins.autoloader.loadLanguages(n, function() {
                      var t = document.getElementById(u);
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
            a = {
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
          (a['interpolation'] = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: {
              delimiter: { pattern: /^{|}$/, alias: 'punctuation' },
              rest: a,
            },
          }),
            (a['func'] = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: a },
            }),
            (e.languages.stylus = {
              'atrule-declaration': {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: a },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: a },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: a },
              },
              'property-declaration': {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: a.interpolation },
                  },
                  rest: a,
                },
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: a.interpolation,
                  comment: a.comment,
                  punctuation: /[{},]/,
                },
              },
              func: a.func,
              string: a.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: a.interpolation,
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
            a =
              '(?:' +
              n.source +
              '(?:[ \t]+' +
              t.source +
              ')?|' +
              t.source +
              '(?:[ \t]+' +
              n.source +
              ')?)',
            r = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
              /<PLAIN>/g,
              function() {
                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                  .source;
              },
            ),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function o(e, t) {
            t = (t || '').replace(/m/g, '') + 'm';
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function() {
                return a;
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
                    return a;
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
                    return a;
                  })
                  .replace(/<<key>>/g, function() {
                    return '(?:' + r + '|' + i + ')';
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
              pattern: o(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: o(/true|false/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: o(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: o(i), lookbehind: !0, greedy: !0 },
            number: {
              pattern: o(
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
        u = {
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
        c = u,
        p = { Prism: l, theme: c };
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
      function g() {
        return (
          (g =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          g.apply(this, arguments)
        );
      }
      var f = /\r\n|\r|\n/,
        h = function(e) {
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
        m = function(e) {
          var t = [[]],
            n = [e],
            a = [0],
            r = [e.length],
            i = 0,
            o = 0,
            s = [],
            l = [s];
          while (o > -1) {
            while ((i = a[o]++) < r[o]) {
              var u = void 0,
                c = t[o],
                p = n[o],
                d = p[i];
              if (
                ('string' === typeof d
                  ? ((c = o > 0 ? c : ['plain']), (u = d))
                  : ((c = b(c, d.type)),
                    d.alias && (c = b(c, d.alias)),
                    (u = d.content)),
                'string' === typeof u)
              ) {
                var g = u.split(f),
                  m = g.length;
                s.push({ types: c, content: g[0] });
                for (var y = 1; y < m; y++)
                  h(s), l.push((s = [])), s.push({ types: c, content: g[y] });
              } else o++, t.push(c), n.push(u), a.push(0), r.push(u.length);
            }
            o--, t.pop(), n.pop(), a.pop(), r.pop();
          }
          return h(s), l;
        },
        y = function(e, t) {
          var n = e.plain,
            a = Object.create(null),
            r = e.styles.reduce(function(e, n) {
              var a = n.languages,
                r = n.style;
              return (
                (a && !a.includes(t)) ||
                  n.types.forEach(function(t) {
                    var n = g({}, e[t], r);
                    e[t] = n;
                  }),
                e
              );
            }, a);
          return (
            (r.root = n), (r.plain = g({}, n, { backgroundColor: null })), r
          );
        };
      function v(e, t) {
        var n = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            -1 === t.indexOf(a) &&
            (n[a] = e[a]);
        return n;
      }
      var S = (function(e) {
          function t() {
            var t = this,
              n = [],
              a = arguments.length;
            while (a--) n[a] = arguments[a];
            e.apply(this, n),
              d(this, 'getThemeDict', function(e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? y(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              d(this, 'getLineProps', function(e) {
                var n = e.key,
                  a = e.className,
                  r = e.style,
                  i = v(e, ['key', 'className', 'style', 'line']),
                  o = i,
                  s = g({}, o, {
                    className: 'token-line',
                    style: void 0,
                    key: void 0,
                  }),
                  l = t.getThemeDict(t.props);
                return (
                  void 0 !== l && (s.style = l.plain),
                  void 0 !== r &&
                    (s.style = void 0 !== s.style ? g({}, s.style, r) : r),
                  void 0 !== n && (s.key = n),
                  a && (s.className += ' ' + a),
                  s
                );
              }),
              d(this, 'getStyleForToken', function(e) {
                var n = e.types,
                  a = e.empty,
                  r = n.length,
                  i = t.getThemeDict(t.props);
                if (void 0 !== i) {
                  if (1 === r && 'plain' === n[0])
                    return a ? { display: 'inline-block' } : void 0;
                  if (1 === r && !a) return i[n[0]];
                  var o = a ? { display: 'inline-block' } : {},
                    s = n.map(function(e) {
                      return i[e];
                    });
                  return Object.assign.apply(Object, [o].concat(s));
                }
              }),
              d(this, 'getTokenProps', function(e) {
                var n = e.key,
                  a = e.className,
                  r = e.style,
                  i = e.token,
                  o = v(e, ['key', 'className', 'style', 'token']),
                  s = o,
                  l = g({}, s, {
                    className: 'token ' + i.types.join(' '),
                    children: i.content,
                    style: t.getStyleForToken(i),
                    key: void 0,
                  });
                return (
                  void 0 !== r &&
                    (l.style = void 0 !== l.style ? g({}, l.style, r) : r),
                  void 0 !== n && (l.key = n),
                  a && (l.className += ' ' + a),
                  l
                );
              }),
              d(this, 'tokenize', function(e, t, n, a) {
                var r = { code: t, grammar: n, language: a, tokens: [] };
                e.hooks.run('before-tokenize', r);
                var i = (r.tokens = e.tokenize(r.code, r.grammar, r.language));
                return e.hooks.run('after-tokenize', r), i;
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
                a = e.code,
                r = e.children,
                i = this.getThemeDict(this.props),
                o = t.languages[n],
                s = void 0 !== o ? this.tokenize(t, a, o, n) : [a],
                l = m(s);
              return r({
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
        k = S,
        w = n('dEAq');
      n('qHiR'),
        n('LMrN'),
        (t['a'] = e => {
          var t = e.code,
            n = e.lang,
            i = e.showCopy,
            s = void 0 === i || i,
            l = Object(w['useCopy'])(),
            u = Object(r['default'])(l, 2),
            c = u[0],
            d = u[1];
          return o.a.createElement(
            'div',
            { className: '__dumi-default-code-block' },
            o.a.createElement(
              k,
              Object(a['a'])({}, p, { code: t, language: n, theme: void 0 }),
              e => {
                var n = e.className,
                  a = e.style,
                  r = e.tokens,
                  i = e.getLineProps,
                  l = e.getTokenProps;
                return o.a.createElement(
                  'pre',
                  { className: n, style: a },
                  s &&
                    o.a.createElement('button', {
                      className:
                        '__dumi-default-icon __dumi-default-code-block-copy-btn',
                      'data-status': d,
                      onClick: () => c(t),
                    }),
                  r.map((e, t) =>
                    o.a.createElement(
                      'div',
                      i({ line: e, key: t }),
                      e.map((e, t) =>
                        o.a.createElement('span', l({ token: e, key: t })),
                      ),
                    ),
                  ),
                );
              },
            ),
          );
        });
    },
    jBXu: function(e, t, n) {
      !(function(t, n) {
        e.exports = n();
      })(self, function() {
        return (function() {
          'use strict';
          var e = {
              720: function(e, t, n) {
                n.r(t),
                  n.d(t, {
                    Scene: function() {
                      return Ve;
                    },
                    Tweenable: function() {
                      return he;
                    },
                    interpolate: function() {
                      return qe;
                    },
                    processTweens: function() {
                      return ce;
                    },
                    setBezierFunction: function() {
                      return Qe;
                    },
                    tween: function() {
                      return be;
                    },
                    unsetBezierFunction: function() {
                      return Je;
                    },
                  });
                var a = {};
                n.r(a),
                  n.d(a, {
                    bounce: function() {
                      return P;
                    },
                    bouncePast: function() {
                      return C;
                    },
                    easeFrom: function() {
                      return M;
                    },
                    easeFromTo: function() {
                      return B;
                    },
                    easeInBack: function() {
                      return I;
                    },
                    easeInCirc: function() {
                      return _;
                    },
                    easeInCubic: function() {
                      return u;
                    },
                    easeInExpo: function() {
                      return k;
                    },
                    easeInOutBack: function() {
                      return x;
                    },
                    easeInOutCirc: function() {
                      return O;
                    },
                    easeInOutCubic: function() {
                      return p;
                    },
                    easeInOutExpo: function() {
                      return E;
                    },
                    easeInOutQuad: function() {
                      return l;
                    },
                    easeInOutQuart: function() {
                      return f;
                    },
                    easeInOutQuint: function() {
                      return m;
                    },
                    easeInOutSine: function() {
                      return S;
                    },
                    easeInQuad: function() {
                      return o;
                    },
                    easeInQuart: function() {
                      return d;
                    },
                    easeInQuint: function() {
                      return h;
                    },
                    easeInSine: function() {
                      return y;
                    },
                    easeOutBack: function() {
                      return R;
                    },
                    easeOutBounce: function() {
                      return T;
                    },
                    easeOutCirc: function() {
                      return A;
                    },
                    easeOutCubic: function() {
                      return c;
                    },
                    easeOutExpo: function() {
                      return w;
                    },
                    easeOutQuad: function() {
                      return s;
                    },
                    easeOutQuart: function() {
                      return g;
                    },
                    easeOutQuint: function() {
                      return b;
                    },
                    easeOutSine: function() {
                      return v;
                    },
                    easeTo: function() {
                      return $;
                    },
                    elastic: function() {
                      return F;
                    },
                    linear: function() {
                      return i;
                    },
                    swingFrom: function() {
                      return L;
                    },
                    swingFromTo: function() {
                      return N;
                    },
                    swingTo: function() {
                      return D;
                    },
                  });
                var r = {};
                n.r(r),
                  n.d(r, {
                    afterTween: function() {
                      return $e;
                    },
                    beforeTween: function() {
                      return Me;
                    },
                    doesApply: function() {
                      return Ce;
                    },
                    tweenCreated: function() {
                      return Be;
                    },
                  });
                var i = function(e) {
                    return e;
                  },
                  o = function(e) {
                    return Math.pow(e, 2);
                  },
                  s = function(e) {
                    return -(Math.pow(e - 1, 2) - 1);
                  },
                  l = function(e) {
                    return (e /= 0.5) < 1
                      ? 0.5 * Math.pow(e, 2)
                      : -0.5 * ((e -= 2) * e - 2);
                  },
                  u = function(e) {
                    return Math.pow(e, 3);
                  },
                  c = function(e) {
                    return Math.pow(e - 1, 3) + 1;
                  },
                  p = function(e) {
                    return (e /= 0.5) < 1
                      ? 0.5 * Math.pow(e, 3)
                      : 0.5 * (Math.pow(e - 2, 3) + 2);
                  },
                  d = function(e) {
                    return Math.pow(e, 4);
                  },
                  g = function(e) {
                    return -(Math.pow(e - 1, 4) - 1);
                  },
                  f = function(e) {
                    return (e /= 0.5) < 1
                      ? 0.5 * Math.pow(e, 4)
                      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                  },
                  h = function(e) {
                    return Math.pow(e, 5);
                  },
                  b = function(e) {
                    return Math.pow(e - 1, 5) + 1;
                  },
                  m = function(e) {
                    return (e /= 0.5) < 1
                      ? 0.5 * Math.pow(e, 5)
                      : 0.5 * (Math.pow(e - 2, 5) + 2);
                  },
                  y = function(e) {
                    return 1 - Math.cos(e * (Math.PI / 2));
                  },
                  v = function(e) {
                    return Math.sin(e * (Math.PI / 2));
                  },
                  S = function(e) {
                    return -0.5 * (Math.cos(Math.PI * e) - 1);
                  },
                  k = function(e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
                  },
                  w = function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                  },
                  E = function(e) {
                    return 0 === e
                      ? 0
                      : 1 === e
                      ? 1
                      : (e /= 0.5) < 1
                      ? 0.5 * Math.pow(2, 10 * (e - 1))
                      : 0.5 * (2 - Math.pow(2, -10 * --e));
                  },
                  _ = function(e) {
                    return -(Math.sqrt(1 - e * e) - 1);
                  },
                  A = function(e) {
                    return Math.sqrt(1 - Math.pow(e - 1, 2));
                  },
                  O = function(e) {
                    return (e /= 0.5) < 1
                      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                  },
                  T = function(e) {
                    return e < 1 / 2.75
                      ? 7.5625 * e * e
                      : e < 2 / 2.75
                      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                      : e < 2.5 / 2.75
                      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                  },
                  I = function(e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t);
                  },
                  R = function(e) {
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1;
                  },
                  x = function(e) {
                    var t = 1.70158;
                    return (e /= 0.5) < 1
                      ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                      : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                  },
                  F = function(e) {
                    return (
                      -1 *
                        Math.pow(4, -8 * e) *
                        Math.sin(((6 * e - 1) * (2 * Math.PI)) / 2) +
                      1
                    );
                  },
                  N = function(e) {
                    var t = 1.70158;
                    return (e /= 0.5) < 1
                      ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                      : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                  },
                  L = function(e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t);
                  },
                  D = function(e) {
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1;
                  },
                  P = function(e) {
                    return e < 1 / 2.75
                      ? 7.5625 * e * e
                      : e < 2 / 2.75
                      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                      : e < 2.5 / 2.75
                      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                  },
                  C = function(e) {
                    return e < 1 / 2.75
                      ? 7.5625 * e * e
                      : e < 2 / 2.75
                      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                      : e < 2.5 / 2.75
                      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
                  },
                  B = function(e) {
                    return (e /= 0.5) < 1
                      ? 0.5 * Math.pow(e, 4)
                      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                  },
                  M = function(e) {
                    return Math.pow(e, 4);
                  },
                  $ = function(e) {
                    return Math.pow(e, 0.25);
                  };
                function j(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                }
                function G(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    (a.enumerable = a.enumerable || !1),
                      (a.configurable = !0),
                      'value' in a && (a.writable = !0),
                      Object.defineProperty(e, a.key, a);
                  }
                }
                function U(e) {
                  return (U =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                      ? function(e) {
                          return typeof e;
                        }
                      : function(e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        })(e);
                }
                function z(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                      (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, a);
                  }
                  return n;
                }
                function H(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? z(Object(n), !0).forEach(function(t) {
                          q(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n),
                        )
                      : z(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t),
                          );
                        });
                  }
                  return e;
                }
                function q(e, t, n) {
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
                var Y,
                  W,
                  Z,
                  X = 'linear',
                  K = 'undefined' != typeof window ? window : n.g,
                  V = 'afterTween',
                  Q = 'afterTweenEnd',
                  J = 'beforeTween',
                  ee = 'tweenCreated',
                  te = 'function',
                  ne = 'string',
                  ae =
                    K.requestAnimationFrame ||
                    K.webkitRequestAnimationFrame ||
                    K.oRequestAnimationFrame ||
                    K.msRequestAnimationFrame ||
                    (K.mozCancelRequestAnimationFrame &&
                      K.mozRequestAnimationFrame) ||
                    setTimeout,
                  re = function() {},
                  ie = null,
                  oe = null,
                  se = H({}, a),
                  le = function(e, t, n, a, r, i, o) {
                    var s,
                      l,
                      u,
                      c = e < i ? 0 : (e - i) / r,
                      p = !1;
                    for (var d in (o && o.call && ((p = !0), (s = o(c))), t))
                      p || (s = ((l = o[d]).call ? l : se[l])(c)),
                        (u = n[d]),
                        (t[d] = u + (a[d] - u) * s);
                    return t;
                  },
                  ue = function(e, t) {
                    var n = e._timestamp,
                      a = e._currentState,
                      r = e._delay;
                    if (!(t < n + r)) {
                      var i = e._duration,
                        o = e._targetState,
                        s = n + r + i,
                        l = t > s ? s : t,
                        u = l >= s,
                        c = i - (s - l),
                        p = e._filters.length > 0;
                      if (u) return e._render(o, e._data, c), e.stop(!0);
                      p && e._applyFilter(J),
                        l < n + r ? (n = i = l = 1) : (n += r),
                        le(l, a, e._originalState, o, i, n, e._easing),
                        p && e._applyFilter(V),
                        e._render(a, e._data, c);
                    }
                  },
                  ce = function() {
                    for (var e, t = he.now(), n = ie; n; )
                      (e = n._next), ue(n, t), (n = e);
                  },
                  pe =
                    Date.now ||
                    function() {
                      return +new Date();
                    },
                  de = function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : X,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      a = U(t);
                    if (se[t]) return se[t];
                    if (a === ne || a === te) for (var r in e) n[r] = t;
                    else for (var i in e) n[i] = t[i] || X;
                    return n;
                  },
                  ge = function(e) {
                    e === ie
                      ? (ie = e._next)
                        ? (ie._previous = null)
                        : (oe = null)
                      : e === oe
                      ? (oe = e._previous)
                        ? (oe._next = null)
                        : (ie = null)
                      : ((W = e._previous),
                        (Z = e._next),
                        (W._next = Z),
                        (Z._previous = W)),
                      (e._previous = e._next = null);
                  },
                  fe = 'function' == typeof Promise ? Promise : null,
                  he = (function() {
                    function e() {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : void 0;
                      j(this, e),
                        (this._config = {}),
                        (this._data = {}),
                        (this._delay = 0),
                        (this._filters = []),
                        (this._next = null),
                        (this._previous = null),
                        (this._timestamp = null),
                        (this._resolve = null),
                        (this._reject = null),
                        (this._currentState = t || {}),
                        (this._originalState = {}),
                        (this._targetState = {}),
                        (this._start = re),
                        (this._render = re),
                        (this._promiseCtor = fe),
                        n && this.setConfig(n);
                    }
                    var t, n;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: '_applyFilter',
                          value: function(e) {
                            for (var t = this._filters.length; t > 0; t--) {
                              var n = this._filters[t - t][e];
                              n && n(this);
                            }
                          },
                        },
                        {
                          key: 'tween',
                          value: function() {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : void 0;
                            return (
                              this._isPlaying && this.stop(),
                              (!t && this._config) || this.setConfig(t),
                              (this._pausedAtTime = null),
                              (this._timestamp = e.now()),
                              this._start(this.get(), this._data),
                              this._delay &&
                                this._render(this._currentState, this._data, 0),
                              this._resume(this._timestamp)
                            );
                          },
                        },
                        {
                          key: 'setConfig',
                          value: function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              n = this._config;
                            for (var a in t) n[a] = t[a];
                            var r = n.promise,
                              i = void 0 === r ? this._promiseCtor : r,
                              o = n.start,
                              s = void 0 === o ? re : o,
                              l = n.finish,
                              u = n.render,
                              c = void 0 === u ? this._config.step || re : u,
                              p = n.step,
                              d = void 0 === p ? re : p;
                            (this._data = n.data || n.attachment || this._data),
                              (this._isPlaying = !1),
                              (this._pausedAtTime = null),
                              (this._scheduleId = null),
                              (this._delay = t.delay || 0),
                              (this._start = s),
                              (this._render = c || d),
                              (this._duration = n.duration || 500),
                              (this._promiseCtor = i),
                              l && (this._resolve = l);
                            var g = t.from,
                              f = t.to,
                              h = void 0 === f ? {} : f,
                              b = this._currentState,
                              m = this._originalState,
                              y = this._targetState;
                            for (var v in g) b[v] = g[v];
                            var S = !1;
                            for (var k in b) {
                              var w = b[k];
                              S || U(w) !== ne || (S = !0),
                                (m[k] = w),
                                (y[k] = h.hasOwnProperty(k) ? h[k] : w);
                            }
                            if (
                              ((this._easing = de(
                                this._currentState,
                                n.easing,
                                this._easing,
                              )),
                              (this._filters.length = 0),
                              S)
                            ) {
                              for (var E in e.filters)
                                e.filters[E].doesApply(this) &&
                                  this._filters.push(e.filters[E]);
                              this._applyFilter(ee);
                            }
                            return this;
                          },
                        },
                        {
                          key: 'then',
                          value: function(e, t) {
                            var n = this;
                            return (
                              (this._promise = new this._promiseCtor(function(
                                e,
                                t,
                              ) {
                                (n._resolve = e), (n._reject = t);
                              })),
                              this._promise.then(e, t)
                            );
                          },
                        },
                        {
                          key: 'catch',
                          value: function(e) {
                            return this.then()['catch'](e);
                          },
                        },
                        {
                          key: 'get',
                          value: function() {
                            return H({}, this._currentState);
                          },
                        },
                        {
                          key: 'set',
                          value: function(e) {
                            this._currentState = e;
                          },
                        },
                        {
                          key: 'pause',
                          value: function() {
                            if (this._isPlaying)
                              return (
                                (this._pausedAtTime = e.now()),
                                (this._isPlaying = !1),
                                ge(this),
                                this
                              );
                          },
                        },
                        {
                          key: 'resume',
                          value: function() {
                            return this._resume();
                          },
                        },
                        {
                          key: '_resume',
                          value: function() {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : e.now();
                            return null === this._timestamp
                              ? this.tween()
                              : this._isPlaying
                              ? this._promise
                              : (this._pausedAtTime &&
                                  ((this._timestamp += t - this._pausedAtTime),
                                  (this._pausedAtTime = null)),
                                (this._isPlaying = !0),
                                null === ie
                                  ? ((ie = this), (oe = this))
                                  : ((this._previous = oe),
                                    (oe._next = this),
                                    (oe = this)),
                                this);
                          },
                        },
                        {
                          key: 'seek',
                          value: function(t) {
                            t = Math.max(t, 0);
                            var n = e.now();
                            return (
                              this._timestamp + t === 0 ||
                                ((this._timestamp = n - t), ue(this, n)),
                              this
                            );
                          },
                        },
                        {
                          key: 'stop',
                          value: function() {
                            var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0];
                            if (!this._isPlaying) return this;
                            (this._isPlaying = !1), ge(this);
                            var t = this._filters.length > 0;
                            e &&
                              (t && this._applyFilter(J),
                              le(
                                1,
                                this._currentState,
                                this._originalState,
                                this._targetState,
                                1,
                                0,
                                this._easing,
                              ),
                              t &&
                                (this._applyFilter(V), this._applyFilter(Q))),
                              this._resolve &&
                                this._resolve({
                                  data: this._data,
                                  state: this._currentState,
                                  tweenable: this,
                                }),
                              (this._resolve = null),
                              (this._reject = null);
                            var n = this._currentState,
                              a = this._originalState,
                              r = this._targetState;
                            for (var i in n) a[i] = r[i] = n[i];
                            return this;
                          },
                        },
                        {
                          key: 'cancel',
                          value: function() {
                            var e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0],
                              t = this._currentState,
                              n = this._data,
                              a = this._isPlaying;
                            return a
                              ? (this._reject &&
                                  this._reject({
                                    data: n,
                                    state: t,
                                    tweenable: this,
                                  }),
                                (this._resolve = null),
                                (this._reject = null),
                                this.stop(e))
                              : this;
                          },
                        },
                        {
                          key: 'isPlaying',
                          value: function() {
                            return this._isPlaying;
                          },
                        },
                        {
                          key: 'setScheduleFunction',
                          value: function(t) {
                            e.setScheduleFunction(t);
                          },
                        },
                        {
                          key: 'data',
                          value: function() {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : null;
                            return e && (this._data = H({}, e)), this._data;
                          },
                        },
                        {
                          key: 'dispose',
                          value: function() {
                            for (var e in this) delete this[e];
                          },
                        },
                      ]) && G(t.prototype, n),
                      e
                    );
                  })();
                function be() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = new he();
                  return t.tween(e), (t.tweenable = t), t;
                }
                q(he, 'now', function() {
                  return Y;
                }),
                  (he.setScheduleFunction = function(e) {
                    return (ae = e);
                  }),
                  (he.formulas = se),
                  (he.filters = {}),
                  (function e() {
                    (Y = pe()), ae.call(K, e, 16.666666666666668), ce();
                  })();
                var me,
                  ye,
                  ve = /(\d|-|\.)/,
                  Se = /([^\-0-9.]+)/g,
                  ke = /[0-9.-]+/g,
                  we =
                    ((me = ke.source),
                    (ye = /,\s*/.source),
                    new RegExp(
                      'rgb\\('
                        .concat(me)
                        .concat(ye)
                        .concat(me)
                        .concat(ye)
                        .concat(me, '\\)'),
                      'g',
                    )),
                  Ee = /^.*\(/,
                  _e = /#([0-9]|[a-f]){3,6}/gi,
                  Ae = 'VAL',
                  Oe = function(e, t) {
                    return e.map(function(e, n) {
                      return '_'.concat(t, '_').concat(n);
                    });
                  };
                function Te(e) {
                  return parseInt(e, 16);
                }
                var Ie = function(e) {
                    return 'rgb('.concat(
                      ((t = e),
                      3 === (t = t.replace(/#/, '')).length &&
                        (t =
                          (t = t.split(''))[0] +
                          t[0] +
                          t[1] +
                          t[1] +
                          t[2] +
                          t[2]),
                      [
                        Te(t.substr(0, 2)),
                        Te(t.substr(2, 2)),
                        Te(t.substr(4, 2)),
                      ]).join(','),
                      ')',
                    );
                    var t;
                  },
                  Re = function(e, t, n) {
                    var a = t.match(e),
                      r = t.replace(e, Ae);
                    return (
                      a &&
                        a.forEach(function(e) {
                          return (r = r.replace(Ae, n(e)));
                        }),
                      r
                    );
                  },
                  xe = function(e) {
                    for (var t in e) {
                      var n = e[t];
                      'string' == typeof n &&
                        n.match(_e) &&
                        (e[t] = Re(_e, n, Ie));
                    }
                  },
                  Fe = function(e) {
                    var t = e.match(ke).map(Math.floor),
                      n = e.match(Ee)[0];
                    return ''.concat(n).concat(t.join(','), ')');
                  },
                  Ne = function(e) {
                    return e.match(ke);
                  },
                  Le = function(e, t) {
                    var n = {};
                    return (
                      t.forEach(function(t) {
                        (n[t] = e[t]), delete e[t];
                      }),
                      n
                    );
                  },
                  De = function(e, t) {
                    return t.map(function(t) {
                      return e[t];
                    });
                  },
                  Pe = function(e, t) {
                    return (
                      t.forEach(function(t) {
                        return (e = e.replace(Ae, +t.toFixed(4)));
                      }),
                      e
                    );
                  },
                  Ce = function(e) {
                    for (var t in e._currentState)
                      if ('string' == typeof e._currentState[t]) return !0;
                    return !1;
                  };
                function Be(e) {
                  var t = e._currentState;
                  [t, e._originalState, e._targetState].forEach(xe),
                    (e._tokenData = (function(e) {
                      var t,
                        n,
                        a = {};
                      for (var r in e) {
                        var i = e[r];
                        'string' == typeof i &&
                          (a[r] = {
                            formatString:
                              ((t = i),
                              (n = void 0),
                              (n = t.match(Se)),
                              n
                                ? (1 === n.length || t.charAt(0).match(ve)) &&
                                  n.unshift('')
                                : (n = ['', '']),
                              n.join(Ae)),
                            chunkNames: Oe(Ne(i), r),
                          });
                      }
                      return a;
                    })(t));
                }
                function Me(e) {
                  var t = e._currentState,
                    n = e._originalState,
                    a = e._targetState,
                    r = e._easing,
                    i = e._tokenData;
                  !(function(e, t) {
                    var n = function(n) {
                      var a = t[n].chunkNames,
                        r = e[n];
                      if ('string' == typeof r) {
                        var i = r.split(' '),
                          o = i[i.length - 1];
                        a.forEach(function(t, n) {
                          return (e[t] = i[n] || o);
                        });
                      } else
                        a.forEach(function(t) {
                          return (e[t] = r);
                        });
                      delete e[n];
                    };
                    for (var a in t) n(a);
                  })(r, i),
                    [t, n, a].forEach(function(e) {
                      return (function(e, t) {
                        var n = function(n) {
                          Ne(e[n]).forEach(function(a, r) {
                            return (e[t[n].chunkNames[r]] = +a);
                          }),
                            delete e[n];
                        };
                        for (var a in t) n(a);
                      })(e, i);
                    });
                }
                function $e(e) {
                  var t = e._currentState,
                    n = e._originalState,
                    a = e._targetState,
                    r = e._easing,
                    i = e._tokenData;
                  [t, n, a].forEach(function(e) {
                    return (function(e, t) {
                      for (var n in t) {
                        var a = t[n],
                          r = a.chunkNames,
                          i = a.formatString,
                          o = Pe(i, De(Le(e, r), r));
                        e[n] = Re(we, o, Fe);
                      }
                    })(e, i);
                  }),
                    (function(e, t) {
                      for (var n in t) {
                        var a = t[n].chunkNames,
                          r = e[a[0]];
                        e[n] =
                          'string' == typeof r
                            ? a
                                .map(function(t) {
                                  var n = e[t];
                                  return delete e[t], n;
                                })
                                .join(' ')
                            : r;
                      }
                    })(r, i);
                }
                function je(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                      (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, a);
                  }
                  return n;
                }
                function Ge(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? je(Object(n), !0).forEach(function(t) {
                          Ue(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n),
                        )
                      : je(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t),
                          );
                        });
                  }
                  return e;
                }
                function Ue(e, t, n) {
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
                var ze = new he(),
                  He = he.filters,
                  qe = function(e, t, n, a) {
                    var r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      i = Ge({}, e),
                      o = de(e, a);
                    for (var s in ((ze._filters.length = 0),
                    ze.set({}),
                    (ze._currentState = i),
                    (ze._originalState = e),
                    (ze._targetState = t),
                    (ze._easing = o),
                    He))
                      He[s].doesApply(ze) && ze._filters.push(He[s]);
                    ze._applyFilter('tweenCreated'),
                      ze._applyFilter('beforeTween');
                    var l = le(n, i, e, t, 1, r, o);
                    return ze._applyFilter('afterTween'), l;
                  };
                function Ye(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                  return a;
                }
                function We(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                }
                function Ze(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    (a.enumerable = a.enumerable || !1),
                      (a.configurable = !0),
                      'value' in a && (a.writable = !0),
                      Object.defineProperty(e, a.key, a);
                  }
                }
                function Xe(e, t) {
                  var n = t.get(e);
                  if (!n)
                    throw new TypeError(
                      'attempted to get private field on non-instance',
                    );
                  return n.get ? n.get.call(e) : n.value;
                }
                var Ke = new WeakMap(),
                  Ve = (function() {
                    function e() {
                      We(this, e), Ke.set(this, { writable: !0, value: [] });
                      for (
                        var t = arguments.length, n = new Array(t), a = 0;
                        a < t;
                        a++
                      )
                        n[a] = arguments[a];
                      n.forEach(this.add.bind(this));
                    }
                    var t, n;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: 'add',
                          value: function(e) {
                            return Xe(this, Ke).push(e), e;
                          },
                        },
                        {
                          key: 'remove',
                          value: function(e) {
                            var t = Xe(this, Ke).indexOf(e);
                            return ~t && Xe(this, Ke).splice(t, 1), e;
                          },
                        },
                        {
                          key: 'empty',
                          value: function() {
                            return this.tweenables.map(this.remove.bind(this));
                          },
                        },
                        {
                          key: 'isPlaying',
                          value: function() {
                            return Xe(this, Ke).some(function(e) {
                              return e.isPlaying();
                            });
                          },
                        },
                        {
                          key: 'play',
                          value: function() {
                            return (
                              Xe(this, Ke).forEach(function(e) {
                                return e.tween();
                              }),
                              this
                            );
                          },
                        },
                        {
                          key: 'pause',
                          value: function() {
                            return (
                              Xe(this, Ke).forEach(function(e) {
                                return e.pause();
                              }),
                              this
                            );
                          },
                        },
                        {
                          key: 'resume',
                          value: function() {
                            return (
                              Xe(this, Ke).forEach(function(e) {
                                return e.resume();
                              }),
                              this
                            );
                          },
                        },
                        {
                          key: 'stop',
                          value: function(e) {
                            return (
                              Xe(this, Ke).forEach(function(t) {
                                return t.stop(e);
                              }),
                              this
                            );
                          },
                        },
                        {
                          key: 'tweenables',
                          get: function() {
                            return (
                              (function(e) {
                                if (Array.isArray(e)) return Ye(e);
                              })((e = Xe(this, Ke))) ||
                              (function(e) {
                                if (
                                  'undefined' != typeof Symbol &&
                                  Symbol.iterator in Object(e)
                                )
                                  return Array.from(e);
                              })(e) ||
                              (function(e, t) {
                                if (e) {
                                  if ('string' == typeof e) return Ye(e, t);
                                  var n = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                  return (
                                    'Object' === n &&
                                      e.constructor &&
                                      (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                      ? Array.from(e)
                                      : 'Arguments' === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n,
                                        )
                                      ? Ye(e, t)
                                      : void 0
                                  );
                                }
                              })(e) ||
                              (function() {
                                throw new TypeError(
                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                );
                              })()
                            );
                            var e;
                          },
                        },
                        {
                          key: 'promises',
                          get: function() {
                            return Xe(this, Ke).map(function(e) {
                              return e.then();
                            });
                          },
                        },
                      ]) && Ze(t.prototype, n),
                      e
                    );
                  })(),
                  Qe = function(e, t, n, a, r) {
                    var i = (function(e, t, n, a) {
                      return function(r) {
                        return (
                          (c = 0),
                          (p = 0),
                          (d = 0),
                          (g = function(e) {
                            return ((c * e + p) * e + d) * e;
                          }),
                          (f = function(e) {
                            return (3 * c * e + 2 * p) * e + d;
                          }),
                          (h = function(e) {
                            return e >= 0 ? e : 0 - e;
                          }),
                          (c = 1 - (d = 3 * (i = e)) - (p = 3 * (n - i) - d)),
                          (s = 1 - (u = 3 * (o = t)) - (l = 3 * (a - o) - u)),
                          (function(e) {
                            return ((s * e + l) * e + u) * e;
                          })(
                            (function(e, t) {
                              var n, a, r, i, o, s;
                              for (r = e, s = 0; s < 8; s++) {
                                if (((i = g(r) - e), h(i) < t)) return r;
                                if (((o = f(r)), h(o) < 1e-6)) break;
                                r -= i / o;
                              }
                              if ((r = e) < (n = 0)) return n;
                              if (r > (a = 1)) return a;
                              for (; n < a; ) {
                                if (((i = g(r)), h(i - e) < t)) return r;
                                e > i ? (n = r) : (a = r),
                                  (r = 0.5 * (a - n) + n);
                              }
                              return r;
                            })(
                              r,
                              (function(e) {
                                return 1 / (200 * e);
                              })(1),
                            ),
                          )
                        );
                        var i, o, s, l, u, c, p, d, g, f, h;
                      };
                    })(t, n, a, r);
                    return (
                      (i.displayName = e),
                      (i.x1 = t),
                      (i.y1 = n),
                      (i.x2 = a),
                      (i.y2 = r),
                      (he.formulas[e] = i)
                    );
                  },
                  Je = function(e) {
                    return delete he.formulas[e];
                  };
                he.filters.token = r;
              },
            },
            t = {};
          function n(a) {
            if (t[a]) return t[a].exports;
            var r = (t[a] = { exports: {} });
            return e[a](r, r.exports, n), r.exports;
          }
          return (
            (n.d = function(e, t) {
              for (var a in t)
                n.o(t, a) &&
                  !n.o(e, a) &&
                  Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
            (n.g = (function() {
              if ('object' == typeof globalThis) return globalThis;
              try {
                return this || new Function('return this')();
              } catch (e) {
                if ('object' == typeof window) return window;
              }
            })()),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.r = function(e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            n(720)
          );
        })();
      });
    },
    qHiR: function(e, t, n) {},
    'z01/': function(e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (e.exports = n = function(e) {
                return typeof e;
              })
            : (e.exports = n = function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
  },
]);
