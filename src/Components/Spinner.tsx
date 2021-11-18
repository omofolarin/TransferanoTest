import * as React from 'react';

import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

interface SpinnerProps extends ActivityIndicatorProps {}

export const Spinner: React.FC<SpinnerProps> = props => {
  return <ActivityIndicator size="small" color="#4444" {...props} />;
};
