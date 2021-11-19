import * as React from 'react';

import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import {AppTheme} from '../Configs';
import {Spinner} from '.';

interface ButtonProps {
  onPress?: TouchableOpacityProps['onPress'];
  style?: ViewStyle;
  startIcon?: () => React.ReactNode;
  endIcon?: () => React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: string | React.ComponentClass<TextProps>;
  color: 'primary' | 'secondary';
}

const noop = () => {};

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  startIcon,
  endIcon,
  color,
  isLoading,
  isDisabled,
  style,
}) => {
  const buttonColor =
    color === 'primary'
      ? AppTheme.palette.primary.main
      : AppTheme.palette.secondary.main;

  const buttonTextColor =
    color === 'primary'
      ? AppTheme.palette.primary.contrastText
      : AppTheme.palette.secondary.contrastText;
  const buttonDisabled = typeof isDisabled === 'boolean' ? isDisabled : false;

  console.log(buttonDisabled, onPress);

  return (
    <View style={[styles.root, style]} accessibilityRole="button" accessible>
      <TouchableOpacity
        onPress={e => {
          onPress ? onPress(e) : noop();
        }}>
        <View
          style={[
            styles.button,
            {backgroundColor: buttonColor},
            isDisabled && {backgroundColor: AppTheme.palette.primary.light},
          ]}>
          {!isLoading && (
            <>
              {startIcon && <View style={styles.left}>{startIcon()}</View>}
              <View
                style={[
                  styles.content,
                  startIcon && styles.contentWithLeft,
                  endIcon && styles.contentWithRight,
                  startIcon && endIcon && styles.contentWithLeftAndRight,
                ]}>
                <Text style={[styles.buttonText, {color: buttonTextColor}]}>
                  {children}
                </Text>
              </View>
              {endIcon && <View style={styles.content}>{endIcon()}</View>}
            </>
          )}
          {isLoading && <Spinner size="small" color={buttonTextColor} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  button: {
    paddingVertical: 8,
    justifyContent: 'space-between',
    borderRadius: 4,
  },

  buttonText: {
    fontSize: 16,
  },

  left: {
    flex: 0.25,
  },
  right: {
    flex: 0.25,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  contentWithLeft: {
    flex: 0.75,
    alignItems: 'center',
  },

  contentWithRight: {
    flex: 0.75,
  },

  contentWithLeftAndRight: {
    flex: 0.5,
  },
});
