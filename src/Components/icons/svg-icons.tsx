import * as React from 'react';

import {SvgProps, SvgXml} from 'react-native-svg';

import {SVGDictionary} from './svg-dictionary';

export interface SVGIconsProps extends SvgProps {
  size?: number;
  name: string;
}

export const SvgIcons: React.FC<SVGIconsProps> = ({
  color,
  size,
  width,
  height,
  name,
  opacity,
}) => {
  const iconSvg = SVGDictionary.icons.filter(
    icon => name.toLowerCase() === icon.name.toLowerCase(),
  )?.[0].svg;

  return iconSvg ? (
    <SvgXml
      xml={iconSvg}
      width={size || width || 20}
      height={size || height || 20}
      color={color}
      opacity={opacity || 1}
    />
  ) : null;
};
