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
      <RangeStepInput
        min={0}
        max={100}
        value={value}
        onChange={onChange}
        hold={false}
      />

      <div>
        <span>{value}</span>
      </div>
    </>
  );
};
```

## Props

| 属性      | 说明           | 类型                  | 默认值 |
| --------- | -------------- | --------------------- | ------ |
| className | 添加类名       | `string`              | null   |
| min       | 最小值         | `number`              | -      |
| max       | 最大值         | `number`              | -      |
| step      | 移动一步加多少 | `number`              | -      |
| value     | slider 的值    | `number`              | -      |
| name      | slider 名字    | `string`              | -      |
| id        | slider id      | `string`              | -      |
| style     | 样式           | `React.CSSProperties` | -      |
| disabled  | 是否禁用       | `boolean`             | -      |
| onChange  | 值改变的回调   | `function`            | -      |
| onClick   | 点击时的回调   | `function`            | -      |
| hold      | 鼠标按下的延时 | `boolean`             | true   |
