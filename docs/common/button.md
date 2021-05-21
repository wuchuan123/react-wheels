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

## Props

| 属性            | 类型                                                                                 | 说明                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | --------------------- | ---------- |
| buttonState     | `'idle' 'loading' 'success' 'error'`                                                 | 当前 button 状态      | 'idle'     |
| onClick         | `function`                                                                           | 点击 button 的回调    | () => {}   |
| color           | `'primary' 'secondary' 'dark' 'light' 'green' 'red' 'yellow' 'teal' 'violet' 'blue'` | button 颜色           | 'primary'  |
| idleText        | `string \| ReactNode`                                                                | button 静止时的文本   | 'Click Me' |
| loadingText     | `string \| ReactNode`                                                                | button 加载时的文本   | 'Loading'  |
| successText     | `string \| ReactNode`                                                                | button 加载成功的文本 | 'Success'  |
| errorText       | `string \| ReactNode`                                                                | button 加载失败的文本 | 'Error'    |
| type            | `'button' 'submit' 'reset'`                                                          | button 类型属性       | 'button'   |
| className       | `string`                                                                             | classnames            | ''         |
| style           | `React.CSSProperties`                                                                | style                 | {}         |
| outline         | `boolean`                                                                            | 只有边框              | false      |
| shadow          | `boolean`                                                                            | 阴影                  | false      |
| rounded         | `boolean`                                                                            | 圆角                  | false      |
| size            | `'tiny' 'small' 'normal' 'large'`                                                    | 大小                  | 'normal'   |
| block           | `boolean`                                                                            | block                 | false      |
| messageDuration | `number`                                                                             | 成功或者失败的延时    | 2000       |
| disabled        | `boolean`                                                                            | button 是否禁用       | false      |
| buttonRef       | `React.Ref \| null`                                                                  | button 引用           | null       |
| width           | `string \| null`                                                                     | 覆盖宽度              | null       |
| height          | `string \| null`                                                                     | 覆盖高度              | null       |
| animation       | `boolean`                                                                            | 动画                  | true       |
