import * as React from 'react';
import classNames from 'classnames';
// import  {createRef,useEffect} from "react";
import lottie from 'lottie-web';
import './index.less';
import './style.scss';

interface Props {
  type?: 'primary' | 'link' | 'text' | 'dashed';
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => void;
  loadingText?: string;
  [key: string]: any;
  href?: string;
}

const prefixCls = 'centui-button';

const Button: React.FC<Props> = props => {
  const {
    type,
    className,
    htmlType,
    size,
    disabled,
    loading,
    onClick,
    children,
    loadingText,
    block,
    href,
    ...other
  } = props;
  const loadingLogRef = React.createRef<any>();

  const classes = classNames(
    {
      [prefixCls]: true,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-size-${size}`]: true,
      [`${prefixCls}-block`]: block,
    },
    className,
  );
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (disabled || loading) {
      return;
    }
    onClick?.(e);
  };

  React.useEffect(() => {
    if (loading) {
      lottie.loadAnimation({
        container: loadingLogRef.current, // 包含动画的DOM元素
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require(`../assets/json/${type}-loading.json`),
      });
    }
  }, [loading]);

  return (
    <button
      className={classes}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
      {...other}
    >
      {!loading && children}
      {loading && (
        <>
          <span className={`${prefixCls}-img`} ref={loadingLogRef}>
            {loadingText || children || 'loading'}
          </span>
        </>
      )}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  htmlType: 'button',
};

export default Button;
