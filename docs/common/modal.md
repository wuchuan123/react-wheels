---
title: Modal
---

# Modal 组件

## Type

```tsx
import React, { useState } from 'react';
import { Modal, CentButton } from 'cent-react-wheel';

export default () => {
  const [isModal, setModal] = React.useState(false);
  return (
    <>
      <CentButton onClick={() => setModal(true)}>Click Here</CentButton>
      <Modal
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </>
  );
};
```

## Props

| 属性      | 说明         | 类型               | 默认值 |
| --------- | ------------ | ------------------ | ------ |
| isVisible | 是否弹出     | `boolean`          | false  |
| title     | 标题         | `string`           | -      |
| content   | 中间部分内容 | `React.DOMElement` | -      |
| footer    | 底部内容     | `React.DOMElement` | -      |
| onClose   | 关闭         | `function`         | -      |
