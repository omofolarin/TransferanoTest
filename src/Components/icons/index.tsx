import * as React from 'react';

import {SvgIcons} from './svg-icons';

export interface IconProps {
  name: string;
  style?: any;
  onPress?: (e?: any) => any;
  size?: number;
  color?: string;
  width?: number;
  height?: number;
}

export const Icon = (props: IconProps) => {
  return <SvgIcons {...props} size={props.size ?? 5} />;
};
