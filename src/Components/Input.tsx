import * as React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import {AppTheme} from '../Configs';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import mergeRefs from 'react-merge-refs';

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  error?: string | React.ComponentClass<TextInputProps>;
  hasError?: boolean;
  caption?: string | React.ComponentClass<TextInputProps>;
  footer?: string | React.ComponentClass<TextInputProps>;
  rightIcon?: () => React.ReactNode;
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({caption, footer, error, hasError, rightIcon, style, ...rest}, ref) => {
    const innerRef = React.useRef<TextInput | null>(null);
    const inputRef = mergeRefs<TextInput>([innerRef, ref]);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          innerRef.current?.focus();
        }}>
        <View style={[styles.root, style]}>
          {caption && (
            <View style={styles.field}>
              <Text style={styles.label}>{caption}</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, rightIcon && styles.inputWithRightIcon]}
              ref={inputRef}
              {...rest}
            />
            {rightIcon && <View style={styles.rightIcon}>{rightIcon()}</View>}
          </View>

          {(footer || error) && (
            <View style={styles.footer}>
              <Text
                style={[styles.footerText, hasError && styles.errorFooterText]}>
                {error ? error : footer}
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    background: 'yellow',
  },

  field: {
    paddingVertical: 4,
  },

  inputContainer: {
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },

  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  inputWithRightIcon: {},

  label: {
    fontSize: 16,
  },
  footer: {},
  footerText: {},
  errorFooterText: {
    fontSize: 14,
    color: AppTheme.palette.error.main,
    // textTransform: 'capitalize',
  },

  rightIcon: {},
});
