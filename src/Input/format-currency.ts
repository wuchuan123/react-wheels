import Big from 'big.js';

export default function formatCurrency(
  value: any,
  localeConfig: any,
  currencyName: string,
) {
  const numberConfig = localeConfig.formats.number[currencyName];
  const formatter: any = new global.Intl.NumberFormat(
    localeConfig.locale,
    numberConfig,
  );

  return formatter.format(Big(value));
}
