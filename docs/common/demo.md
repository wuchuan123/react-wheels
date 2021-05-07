---
title: Demo
---

# Demo

## Type

```tsx
import React, { useState } from 'react';
import { Demo } from 'cent-react-wheel';

export default () => {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 2000);
  };

  return (
    <Demo
      buttonState={state}
      onClick={onClickHandler}
      color={'primary'}
      idleText={'Button'}
      loadingText={'Loading'}
      successText={'Success'}
      errorText={'Error'}
      type={'reset'}
      className={'class1 class2'}
      style={{ borderRadius: '5px' }}
      outline={false}
      shadow={false}
      rounded={false}
      size={'normal'}
      block={false}
      messageDuration={2000}
      disabled={false}
      buttonRef={console.log}
      width={null}
      height={null}
      animation={true}
    />
  );
};
```
