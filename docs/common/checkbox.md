---
title: Checkbox
---

# Checkbox 组件

## Type

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'cent-react-wheel';

export default ({ theme }) => {
  const [all, setAll] = React.useState(1); // 0 for none, 1 for some, 2 for all
  const [easyToStyle, setEasyToStyle] = React.useState(true);
  const [types, setTypes] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [lightWeight, setLightWeight] = React.useState(true);

  React.useEffect(() => {
    if (easyToStyle && types && indeterminate && lightWeight) {
      setAll(2);
    } else if (easyToStyle || types || indeterminate || lightWeight) {
      setAll(1);
    } else {
      setAll(0);
    }
  }, [easyToStyle, types, indeterminate, lightWeight]);

  const toggleAll = () => {
    if (easyToStyle && types && indeterminate && lightWeight) {
      setEasyToStyle(false);
      setTypes(false);
      setIndeterminate(false);
      setLightWeight(false);
      setAll(0);
    } else {
      setEasyToStyle(true);
      setTypes(true);
      setIndeterminate(true);
      setLightWeight(true);
      setAll(2);
    }
  };
  return (
    <fieldset>
      <legend>例子</legend>

      <Checkbox
        theme={theme}
        value={all === 2}
        indeterminate={all === 1}
        onChange={toggleAll}
      >
        全选
      </Checkbox>

      <ul>
        <li>
          <Checkbox
            theme={theme}
            modification="md-ink-ripple"
            value={easyToStyle}
            onChange={() => setEasyToStyle(!easyToStyle)}
          >
            简单
          </Checkbox>
        </li>
        <li>
          <Checkbox
            theme={theme}
            value={types}
            onChange={() => setTypes(!types)}
          >
            单选
          </Checkbox>
        </li>
        <li>
          <Checkbox
            theme={theme}
            value={indeterminate}
            onChange={() => setIndeterminate(!indeterminate)}
          >
            Indeterminate
          </Checkbox>
        </li>
        <li>
          <Checkbox
            theme={theme}
            value={lightWeight}
            onChange={() => setLightWeight(!lightWeight)}
          >
            单选
          </Checkbox>
        </li>
      </ul>
    </fieldset>
  );
};
```
