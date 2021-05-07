---
title: Button1
---

# 按钮组件

## Type

```tsx
import React, { useState } from 'react';
import { CentButton } from 'cent-react-wheel';
import '../md.scss';

export default () => {
  return (
    <>
      <CentButton size={'tiny'} idleText={'tiny'} />
      <CentButton size={'small'} idleText={'small'} />
      <CentButton size={'normal'} idleText={'normal'} />
      <CentButton size={'large'} idleText={'large'} />
      <br />
      <CentButton color={'primary'} idleText={'primary'} />
      <CentButton color={'secondary'} idleText={'secondary'} />
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
      <CentButton color={'blue'} disabled={false} idleText={'outline'} />
    </>
  );
};
```
