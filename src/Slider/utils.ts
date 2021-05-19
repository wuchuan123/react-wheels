const forceNumber = function(n: number) {
  n = Number(n);
  if (isNaN(n) || typeof n === 'undefined') {
    n = 0;
  }
  return n;
};
export { forceNumber };
