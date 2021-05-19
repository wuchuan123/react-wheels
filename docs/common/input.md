---
title: IntlCurrencyInput
---

# IntlCurrencyInput 组件

## Type

```tsx
import React, { useState } from 'react';
import { IntlCurrencyInput } from 'cent-react-wheel';

export default () => {
  const currencyConfig = {
    locale: 'pt-BR',
    formats: {
      number: {
        BRL: {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };
  const stripKeyQuotes = strObj => {
    const regex = /"([\w]+)":/g;
    const subst = `$1:`;

    return strObj.replace(regex, subst);
  };

  const defaultValue = 2.5;
  const maxValue = 999999999.99;
  const [value, setValue] = useState(defaultValue);
  const [maskedValue, setMaskedValue] = useState('R$1.234,56');

  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    setValue(value);
    setMaskedValue(maskedValue);
  };
  return (
    <div>
      <IntlCurrencyInput
        currency="BRL"
        config={currencyConfig}
        defaultValue={defaultValue}
        onChange={handleChange}
        autoFocus={true}
        autoSelect={true}
        max={maxValue}
      />
      <p>
        Value: <strong>{value}</strong>
      </p>
      <p>
        Masked Value: <strong>{maskedValue}</strong>
      </p>
      <p>
        Max Value: <strong>{maxValue}</strong>
      </p>
    </div>
  );
};
```
