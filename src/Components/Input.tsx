import * as React from 'react';

import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputProps {
  error?: string | React.ComponentClass<TextInputProps>;
  hasError?: boolean;
  caption?: string | React.ComponentClass<TextInputProps>;
  footer?: string | React.ComponentClass<TextInputProps>;
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({caption, footer, error, hasError, ...rest}, ref) => {
    return (
      <View style={styles.root}>
        <View style={styles.field}>
          {caption && <Text style={styles.label}>{caption}</Text>}
        </View>

        <View style={styles.input}>
          <TextInput style={styles.input} ref={ref} {...rest} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{footer}</Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  root: {},
  field: {},
  input: {},
  label: {},
  footer: {},
  footerText: {},
});
