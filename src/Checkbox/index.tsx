import React, { FormEvent } from 'react';
import { classConcat } from '@/utils';
import './index.scss';

type Props = {
  theme: string;
  modification: string;
  indeterminate: boolean;
  disabled: boolean;
  value?: boolean;
  onChange: (e: FormEvent<any>) => void;
};
const Checkbox: React.FC<Props> = props => {
  const {
    theme = '',
    modification = '',
    indeterminate = false,
    disabled = false,
    value,
    onChange,
    children,
  } = props;
  return (
    <label
      className={classConcat({
        Checkbox_themed: theme,
        [theme]: theme,
        [modification]: modification,
      })}
      onClick={() =>
        setTimeout(() => {
          (document as any).activeElement.blur();
        }, 0)
      }
    >
      <input
        type="checkbox"
        className={classConcat({
          Checkbox__input_themed: theme,
          Checkbox__input_themed_indeterminate: indeterminate,
          [`${theme}__input`]: theme,
          [`${theme}__input_indeterminate`]: indeterminate,
          [modification]: modification,
        })}
        disabled={disabled}
        checked={value}
        onChange={onChange}
      />
      {theme && (
        <span
          className={classConcat({
            Checkbox__image_themed: true,
            [`${theme}__image`]: true,
            [modification]: modification,
          })}
        />
      )}
      <span
        className={classConcat({
          [`${theme}__label`]: theme,
          [modification]: modification,
        })}
      >
        {children}
      </span>
    </label>
  );
};
export default Checkbox;
