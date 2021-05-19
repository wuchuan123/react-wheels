import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Tweenable } from 'shifty';

const stepsConfig = {
  initial: {
    to: { value: 45 },
    duration: 2000,
    easing: 'easeOutQuad',
  },
  slow: {
    to: { value: 80 },
    duration: 20000,
    easing: 'easeOutQuad',
  },
  finish: {
    to: { value: 100 },
    duration: 200,
    easing: 'easeOutQuad',
  },
};

const noOp = () => {};

export default class ProgressProvider extends Component<any, any> {
  static propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.element,
  };
  private _tweenable: any;

  constructor(props: any) {
    super(props);
    this.state = {
      active: false,
      value: 0,
    };
  }

  componentDidMount() {
    this._tweenable = new Tweenable();

    if (this.props.isLoading) {
      this.begin();
    }
  }

  componentWillReceiveProps(nextProps: any) {
    if (!this.props.isLoading && nextProps.isLoading) {
      this.begin();
    } else if (this.props.isLoading && !nextProps.isLoading) {
      this.finish();
    }
  }

  componentWillUnmount() {
    this.stop();
    this._tweenable.dispose();
    this._tweenable = null;
  }

  stop() {
    if (this._tweenable.isPlaying()) {
      this._tweenable.stop();
    }
  }

  begin() {
    this.stop();
    this.setState({
      active: true,
      value: 0,
    });

    const fromValue = {
      from: { value: 0 },
    };

    this.tween({ ...stepsConfig.initial, ...fromValue })
      .then(() => this.tween(stepsConfig.slow))
      .catch(noOp);
  }
  tween(config: any) {
    this._tweenable.setConfig({
      ...config,
      step: (state: any) => this.updateValue(state),
    });
    return this._tweenable.tween();
  }
  finish() {
    this.stop();
    this.tween(stepsConfig.finish)
      .then(() => {
        this.setState({
          value: this._tweenable.get().value,
          active: false,
        });
      })
      .catch(noOp);
  }

  updateValue({ value }: any) {
    this.setState({
      value,
    });
  }
  render() {
    const { children } = this.props;
    const { active, value } = this.state;

    const child: any = Children.only(children);
    if (!child) {
      return null;
    }

    const progressProps = {
      active,
      value,
    };

    const enhancedChild = React.cloneElement(child, {
      progress: progressProps,
    });

    return enhancedChild;
  }
}
