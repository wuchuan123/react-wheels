import React, { useRef, useState } from 'react';
import { forceNumber } from './utils';

type Props = {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  name?: string;
  id?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (n: any) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  hold?: boolean;
};
export const RangeStepInput: React.FC<Props> = props => {
  const {
    className,
    min,
    max,
    step,
    value,
    name,
    id,
    style,
    disabled,
    onChange,
    onClick,
    hold = true,
    ...rest
  } = props;
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const domRef = useRef(null);
  let holdLoop: any = null;
  const onMouseDown = () => {
    setIsMouseDown(true);
    if (hold) {
      if (holdLoop) {
        clearInterval(holdLoop);
      }
      let oldVal = value ?? 0;
      setTimeout(function() {
        if (holdLoop) {
          clearInterval(holdLoop);
        }
        holdLoop = makeHoldLoop(oldVal);
      }, 250);
    }
  };
  const onMouseUp = () => {
    setIsMouseDown(false);
    setIsDragging(false);
    if (holdLoop) {
      clearInterval(holdLoop);
    }
  };
  const onMouseMove = () => {
    if (isMouseDown) {
      setIsDragging(true);
    }
  };
  const onInput = (e: any) => {
    const newVal = forceNumber(e.target.value);
    const oldVal = value;
    if (!(isMouseDown && isDragging) && oldVal) {
      e.target.value =
        newVal > oldVal ? oldVal + (step ?? 1) : oldVal - (step ?? 1);
    }
  };
  const makeHoldLoop = (oldVal: number) => {
    return setInterval(function() {
      if (!isMouseDown || isDragging) {
        if (holdLoop) {
          clearInterval(holdLoop);
        }
        return false;
      }

      const input = domRef.current;
      let newVal = value || 0;

      if (oldVal > newVal && newVal - (step || 1) >= (min || 0)) {
        newVal -= step || 1;
      } else if (oldVal < newVal && newVal + (step || 1) <= (max || 100)) {
        newVal += step || 1;
      }

      if (oldVal === newVal) {
        return false;
      }

      const nativeInputValueSetter = (Object as any).getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      ).set;
      nativeInputValueSetter.call(input, newVal);

      const e = new Event('change', { bubbles: true });

      return (input as any).dispatchEvent(e);
    }, 100);
  };
  return (
    <input
      type="range"
      className={className}
      min={min}
      max={max}
      ref={domRef}
      step={step}
      value={value}
      name={name}
      id={id}
      style={style}
      disabled={disabled}
      onChange={onChange}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onClick={onClick}
      onInput={onInput}
      {...rest}
    />
  );
};
