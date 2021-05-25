import React from 'react';

type Props = {
  defaultValue?: string | number;
  onValueChange: (e?: any) => any;
};
const UncontrolledInput = ({ defaultValue, onValueChange, ...rest }: Props) => {
  return (
    <input
      defaultValue={defaultValue}
      onChange={({ target: { value } }) => onValueChange(value)}
      {...rest}
    />
  );
};
export default UncontrolledInput;
