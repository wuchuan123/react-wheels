import React, { useEffect, useState } from 'react';
import './index.scss';

const loadingIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="spinner"
    className="reactive-btn-loading-svg reactive-spin"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
    />
  </svg>
);

const successIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="check"
    className="reactive-btn-success-svg"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
    />
  </svg>
);

const errorIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="times"
    className="reactive-btn-error-svg"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 352 512"
  >
    <path
      fill="currentColor"
      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    />
  </svg>
);

interface Props {
  size?: 'tiny' | 'small' | 'normal' | 'large';
  type?: 'button' | 'submit' | 'reset';
}

const CentButton = (props: any) => {
  const {
    color = 'primary',
    outline,
    shadow,
    rounded,
    size = 'normal',
    type = 'button',
    idleText = 'Click Me',
    style = {},
  } = props;
  const className = `centui-btn${props.className ? ' ' + props.className : ''}`;
  const loadingText =
    props.loadingText && props.loadingText !== ''
      ? props.loadingText
      : 'Loading';
  const successText =
    props.successText && props.successText !== ''
      ? props.successText
      : 'Success';
  const errorText =
    props.errorText && props.errorText !== '' ? props.error : 'Error';
  const animation = !(
    typeof props.animation !== 'undefined' && props.animation === false
  );
  const [buttonState, setButtonState] = useState(
    props.buttonState ? props.buttonState : 'idle',
  );
  const onClickHandle = () => {
    if (typeof props.onClick !== 'undefined') {
      props.onClick();
    }
  };
  useEffect(() => {
    if (typeof props.buttonState !== 'undefined') {
      setButtonState(props.buttonState);
      if (props.buttonState === 'success' || props.buttonState === 'error') {
        setTimeout(
          () => setButtonState('idle'),
          props.messgeDuration ? props.messgeDuration : 2000,
        );
      }
    }
  }, [props.buttonState, props.messageDuration]);
  const getButtonText = (currentButtonState: any) => {
    switch (currentButtonState) {
      case 'idle':
        return idleText;
      case 'loading':
        return loadingText === 'Loading' ? (
          <>
            {loadingIcon} {loadingText}
          </>
        ) : (
          loadingText
        );
      case 'success':
        return successText === 'Success' ? (
          <>
            {successIcon} {successText}
          </>
        ) : (
          successText
        );
      case 'error':
        return errorText === 'error' ? (
          <>
            {errorIcon} {errorText}
          </>
        ) : (
          errorText
        );
      default:
        return idleText;
    }
  };
  console.log(className, 'classname');
  return (
    <>
      <span
        className={`centui-wrapper ${size}${props.block ? ' block' : ''}`}
        style={{ width: props.width, height: props.height }}
      >
        <button
          className={`${className} ${color}${outline ? ' outline' : ''}${
            !animation ? ' no-animation' : ''
          }${rounded ? ' rounded' : ''}${shadow ? ' shadow' : ''}${
            props.disabled ? ' disabled' : ''
          }`}
          ref={typeof props.buttonRef !== 'undefined' ? props.buttonRef : null}
          disabled={buttonState !== 'idle' || props.disabled}
          type={type}
          data-button-state={buttonState}
          onClick={onClickHandle}
          style={style}
        >
          <span className="centui-progress" />
          <span className="content">
            <>{getButtonText(buttonState)}</>
          </span>
        </button>
      </span>
    </>
  );
};

export default CentButton;
