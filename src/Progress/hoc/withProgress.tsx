import React from 'react';
import PropTypes from 'prop-types';
import ProgressProvider from '../components/ProgressProvider';

function withProgress(ProgressBarComponent: any) {
  function ProgressBarProvider({ isLoading }: any) {
    return (
      <ProgressProvider isLoading={isLoading}>
        <ProgressBarComponent />
      </ProgressProvider>
    );
  }

  ProgressBarProvider.propTypes = {
    isLoading: PropTypes.bool,
  };

  return ProgressBarProvider;
}
export default withProgress;
