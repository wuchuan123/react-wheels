---
title: Slider
---

# Slider 组件

## Type

```tsx
import React, { useState } from 'react';
import { RangeStepInput } from 'cent-react-wheel';

export default () => {
  const forceNumber = function(n: number) {
    n = Number(n);
    if (isNaN(n) || typeof n === 'undefined') {
      n = 0;
    }
    return n;
  };
  const [value, setValue] = useState(50);
  const onChange = e => {
    const newVal = forceNumber(e.target.value);
    setValue(newVal);
  };
  return (
    <>
      <RangeStepInput min={0} max={100} value={value} onChange={onChange} />

      <div>
        <span>{value}</span>
      </div>
    </>
  );
};
```
