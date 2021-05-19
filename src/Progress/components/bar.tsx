import React from 'react';
import classNames from 'classnames';

type Props = {
  useBoxShadow: boolean;
  height: string;
  color: string;
  className: string;
  progress: any;
};

function Bar(props: Props) {
  const useBoxShadow = props.useBoxShadow,
    height = props.height,
    color = props.color,
    className = props.className,
    _props$progress = props.progress,
    active = _props$progress.active,
    value = _props$progress.value;

  const barStyles = {
    width: value + '%',
    height: height,
    backgroundColor: color,
    boxShadow: '',
  };

  if (useBoxShadow) {
    barStyles.boxShadow = '0 0 5px ' + color;
  }

  const wrapperClassNames = classNames('reprogressbar', className, {
    'reprogressbar--active': active,
    'reprogressbar--inactive': !active,
  });

  return React.createElement(
    'div',
    { className: wrapperClassNames },
    active &&
      React.createElement('div', {
        className: 'reprogressbar_bar',
        style: barStyles,
      }),
  );
}
export default Bar;
