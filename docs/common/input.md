---
title: UncontrolledInput
---

# UncontrolledInput 组件

## Type

```tsx
import React, { useState } from 'react';
import { UncontrolledInput } from 'cent-react-wheel';

export default () => {
  return (
    <UncontrolledInput
      type="text"
      placeholder="Insert some text here..."
      onValueChange={console.log}
    />
  );
};
```

## Props

| 属性         | 类型       | 说明                 | 默认值 |
| ------------ | ---------- | -------------------- | ------ |
| defaultValue | `number`   | 第一次加载时的默认值 | -      |
| onChange     | `function` | 值改变的回调         | -      |
