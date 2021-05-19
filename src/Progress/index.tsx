import React from 'react';
import ProgressProvider from './components/ProgressProvider';
import Bar from './components/Bar';

type Props = {
  color: string;
  height: string;
  isLoading: boolean;
  className: string;
  useBoxShadow: boolean;
};

function only(originalObject: any, keys: any[]) {
  const newObject: any = {};
  keys.forEach(function(key) {
    if (originalObject[key] !== undefined) {
      newObject[key] = originalObject[key];
    }
  });
  return newObject;
}

export default function ProgressBar(props: Props) {
  const barProps = only(props, [
    'color',
    'height',
    'className',
    'useBoxShadow',
  ]);
  return React.createElement(
    ProgressProvider,
    { isLoading: props.isLoading },
    React.createElement(Bar, barProps),
  );
}
