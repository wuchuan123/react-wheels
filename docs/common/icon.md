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
      type="ROUNDED"
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

## API

| 属性         | 说明                 | 类型            | 默认值 | 版本 |
| ------------ | -------------------- | --------------- | ------ | ---- |
| className    | 类名                 | string          | -      |      |
| visible      | 显示弹窗             | boolean         | false  |      |
| onCancel     | 关闭弹窗的回调       | () => any       | -      |      |
| onOK         | 点击确定的回调       | () => any       | -      |      |
| popup        | 是否为底部弹窗模式   | boolean         | -      |      |
| footer       | 底部内容             | ReactNode       | -      |      |
| maskClosable | 点击蒙层是否关闭弹窗 | boolean         | true   |      |
| closable     | 是否显示关闭按钮     | boolean         | true   |      |
| children     | 子级                 | React.ReactNode | -      |      |
| maxHeight    | 弹窗最大高度         | string          | 50vh   |      |

methods:

`Modal.confirm(<options>)` 确认弹窗

可配置 `content`、`okText`、`onOK`、`cancelText`、`onCancel`、`className`

`Modal.info(<options>)` 信息弹窗

可配置 `content`、`okText`、`onOK`、`className`
