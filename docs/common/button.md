---
title: Button
---

# 按钮组件

## Type

```tsx
import React from 'react';
import {Button} from 'cent-react-wheel'
import '../md.less';

export default () => {
  return (
    <>
      <Button type='primary'>Primary Button</Button>
      <Button>Defult Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br/>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  )
}

```

## Size

```tsx
import React from 'react';
import {Button} from 'cent-react-wheel'
import '../md.less';

export default () => {
  const handleClick = () => {
    console.log('点击了')
    return(
      <a href='https://www.baidu.com/'>xx</a>
    )
  }
  return (
    <>
      <Button type='primary' size='large'>Primary Button</Button>
      <Button size='middle'>Defult Button</Button>
      <Button type='dashed' size='small'>Dashed Button</Button>
      <br/>
      <p>disabled:true</p>
      <Button type='primary' disabled>Dashed Button</Button>
      <br/>
      <p>disabled:false</p>
      <Button type='primary' disabled={false}>Dashed Button</Button>
      <br/>
      <Button type='primary' disabled={false} loading={true}>Dashed Button</Button>
      <Button type='primary' disabled={false} onClick={handleClick}>Dashed Button</Button>
    </>
  )
}

```
