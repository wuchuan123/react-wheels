---
title: NextPaging
---

# NextPaging 组件

## Type

```tsx
import React, { useState } from 'react';
import { PaginacionTabla } from 'cent-react-wheel';

export default () => {
  const filas = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Id. pedido</th>
          <th>Agregado</th>
          <th>Despacho</th>
          <th>Cliente</th>
          <th />
        </tr>
      </thead>
      <PaginacionTabla
        itemsperpage={1}
        nocolumns={4}
        items={filas}
        pagesspan={3}
      />
    </table>
  );
};
```

## Props

| 属性         | 说明                                       | 类型        | 默认值 |
| ------------ | ------------------------------------------ | ----------- | ------ |
| itemsperpage | 传递一个数字，该数字表示每个页面的项目数。 | `number`    | `10`   |
| nocolumns    | 设置显示表单展示的列数                     | `number`    | -      |
| pagesspan    | 设置页数                                   | `number`    | -      |
| items        | 传递的内容                                 | `Array<[]>` | -      |
