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
