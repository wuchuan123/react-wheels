// export const getUUID = () => {
//   const s = [];
//   const hexDigits = '0123456789abcdef';
//
//   for (let i = 0; i < 36; i++) {
//     s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
//   }
//   s[14] = '4';
//   s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
//   s[8] = s[13] = s[18] = s[23] = '-';
//
//   const uuid = s.join('');
//
//   return uuid;
// };

export const isPC = () => {
  const ua = window && window.navigator.userAgent.toLowerCase();
  const isPC = !/Android|iPhone|SymbianOS|Windows\s+Phone|iPad|iPod|XiaoMi\/MiuiBrowser/i.test(
    ua,
  );
  return isPC;
};

export const forceNumber = function(n: number) {
  n = Number(n);
  if (isNaN(n) || typeof n === 'undefined') {
    n = 0;
  }
  return n;
};

export const classConcat = (classes: any) => {
  let type = typeof classes;
  if (type === 'string' || type === 'number') return classes || '';

  if (Array.isArray(classes) && classes.length > 0) {
    return classes.reduce((concated, className) => {
      return className ? concated.concat(`${className} `) : concated;
    }, '');
  } else {
    return Object.keys(classes).reduce((concated, className) => {
      return classes[className] ? concated.concat(`${className} `) : concated;
    }, '');
  }
};
