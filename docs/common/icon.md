---
title: Icon
---

# Icon 组件

## Type

```tsx
import React, { useState } from 'react';
import { IconBlur } from 'cent-react-wheel';

export default () => (
  <>
    <IconBlur
      src="https://codekeep.io/assets/icon.svg"
      size="100"
      padding=""
      onClick={() => console.log('codekeep')}
    />
    <br />
    <IconBlur
      type="CIRCLE"
      src="https://codekeep.io/assets/icon.svg"
      size="50"
      padding="10"
      onClick={() => console.log('')}
    />
  </>
);
```

## Props

| 属性    | 类型                          | 说明             | 默认值  |
| ------- | ----------------------------- | ---------------- | ------- |
| type    | `'ROUNDED' 'SQUARE' 'CIRCLE'` | icon 的形状      | ROUNDED |
| src     | `string`                      | 图片路径         | null    |
| size    | `number`                      | 大小             | null    |
| padding | `number`                      | 边距             | null    |
| name    | `string`                      | 图片 alt 属性名  | null    |
| onClick | `function`                    | 点击 icon 的回调 | null    |
