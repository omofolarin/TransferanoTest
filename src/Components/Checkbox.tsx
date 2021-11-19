import * as React from 'react';

import CheckBox, {CheckBoxProps} from '@react-native-community/checkbox';

export const Checkbox: React.FC<CheckBoxProps> = ({
  onValueChange,
  value,
  disabled,
  ...rest
}) => {
  return (
    <CheckBox
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
      {...rest}
    />
  );
};
