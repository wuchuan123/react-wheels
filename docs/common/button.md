---
title: Button
---

# 按钮组件

## Type

```tsx
import React, { useState } from 'react';
import { CentButton } from 'cent-react-wheel';
import '../md.scss';

export default () => {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 2000);
  };
  return (
    <>
      <CentButton size={'tiny'} idleText={'tiny'} />
      <CentButton size={'small'} idleText={'small'} />
      <CentButton size={'normal'} idleText={'normal'} />
      <CentButton size={'large'} idleText={'large'} />
      <br />
      <CentButton color={'primary'} idleText={'primary'} />
      <CentButton color={'secondary'} idleText={'secondary'} outline={true} />
      <CentButton color={'dark'} idleText={'dark'} />
      <CentButton color={'light'} idleText={'light'} />
      <CentButton color={'green'} idleText={'green'} />
      <br />
      <CentButton color={'red'} idleText={'red'} />
      <CentButton color={'yellow'} idleText={'yellow'} />
      <CentButton color={'teal'} idleText={'teal'} />
      <CentButton color={'violet'} idleText={'violet'} />
      <CentButton color={'blue'} idleText={'blue'} />
      <br />
      <CentButton color={'blue'} block={'block'} idleText={'block'} />
      <CentButton color={'blue'} outline={'outline'} idleText={'outline'} />
      <br />
      <CentButton
        color={'blue'}
        className={'hello'}
        disabled={false}
        idleText={'outline'}
      />
      <br />
      <CentButton
        color={'blue'}
        disabled={false}
        idleText={'outline'}
        animation={false}
      />
      <CentButton
        color={'blue'}
        disabled={false}
        idleText={'outline'}
        rounded={true}
      />
      <CentButton
        color={'blue'}
        disabled={false}
        idleText={'outline'}
        rounded={true}
        loadingText={'Loading'}
        successText={'Success'}
        errorText={'Error'}
        onClick={onClickHandler}
      />
      <br />
      <CentButton
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
    </>
  );
};
```
