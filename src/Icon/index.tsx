import * as React from 'react';
import './index.scss';

interface IconProps {
  type: 'ROUNDED' | 'SQUARE' | 'CIRCLE';
  src?: string;
  size?: number;
  padding?: number;
  name?: string;
  onClick?: Function;
}

const IconBlur: React.FC<IconProps> = props => {
  const { type = 'ROUNDED', src, size, padding, name, onClick } = props;
  return (
    <div className="icon-wrapper" onClick={() => onClick && onClick()}>
      <div className={`icon-container ${onClick ? 'pointer' : ''}`}>
        <div
          className={`icon ${type.toLocaleLowerCase()}`}
          style={{
            padding: padding ? `${padding}px` : '5px',
            width: size ? `${size}px` : '100px',
          }}
        >
          <img src={src} alt="" className="background" />
          <img src={src} alt={`icon-${name}`} width="100%" />
        </div>
      </div>
    </div>
  );
};

export default IconBlur;
