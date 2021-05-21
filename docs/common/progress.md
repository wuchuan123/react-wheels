---
title: Progress
---

# Progress 组件

## Type

```tsx
import React, { useState } from 'react';
import { ProgressBar, CentButton } from 'cent-react-wheel';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  let timeout = null;
  const toggleLoading = () => {
    clearTimeout();
    setIsLoading(!isLoading);
  };

  const clearTimeout = () => {
    if (timeout) {
      window.clearInterval(timeout);
    }
  };

  return (
    <div>
      <ProgressBar
        isLoading={isLoading}
        className="fixed-progress-bar"
        color="#4285F4"
        height="4px"
        useBoxShadow={true}
      />
      <br />
      <div className="button-row">
        <CentButton onClick={() => toggleLoading()}>
          {isLoading ? 'End Loading' : 'Begin Loading'}
        </CentButton>
      </div>
    </div>
  );
};
```

## Props

| 属性         | 说明         | 类型      | 默认值 |
| ------------ | ------------ | --------- | ------ |
| isLoading    | 加载的状态   | `boolan`  | -      |
| color        | 进度条的颜色 | `string`  | -      |
| height       | 进度条高度   | `string`  | -      |
| className    | 类名         | `string`  | -      |
| useBoxShadow | 是否使用阴影 | `boolean` | -      |
