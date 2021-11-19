import * as React from 'react';
import * as yup from 'yup';

import {Button, Input} from '../Components';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {AppTheme} from '../Configs';
import {useAppDispatch} from '../Hooks/useAppStore';
import {useForm} from 'react-hook-form';
import {useLogInMutation} from '../Services';
import {yupResolver} from '@hookform/resolvers/yup';

type LoginForm = {
  email: string;
  password: string;
};

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const Landing = props => {
  const {navigation} = props;

  const [logIn, logInState] = useLogInMutation();
  const {handleSubmit, register, formState} = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const emailInput = register('email');
  const passwordInput = register('password');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (logInState.isSuccess) {
      dispatch({
        type: 'logIn',
        payload: {
          jwt: logInState.data.token,
          isAuthenticated: true,
          account: {},
        },
      });
      navigation.replace('ListAttendees');
    }
  }, [dispatch, formState, logInState, logInState.isSuccess, navigation]);

  const onSubmit = (values: LoginForm) => {
    logIn({body: values});
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Login to attend</Text>

        <KeyboardAvoidingView>
          <View style={styles.fieldContainer}>
            {logInState.isError && (
              <Text
                style={{marginVertical: 8, color: AppTheme.palette.error.main}}>
                {typeof logInState.error === 'string'
                  ? logInState.error
                  : logInState?.error?.data?.error}
              </Text>
            )}

            <Input
              placeholder="Email"
              style={styles.inputStyle}
              ref={emailInput.ref}
              onChangeText={val =>
                emailInput.onChange({target: {value: val, name: 'email'}})
              }
              hasError={Boolean(formState.errors?.email)}
              error={formState.errors?.email?.message}
              onBlur={emailInput.onBlur}
            />

            <Input
              placeholder="Password"
              style={styles.inputStyle}
              ref={passwordInput.ref}
              onChangeText={val =>
                passwordInput.onChange({target: {value: val, name: 'password'}})
              }
              onBlur={passwordInput.onBlur}
              hasError={Boolean(formState.errors?.password)}
              error={formState.errors?.password?.message}
              textContentType="emailAddress"
              secureTextEntry
            />

            <Button
              color="primary"
              style={styles.button}
              isLoading={logInState.isLoading}
              isDisabled={!formState.isValid}
              onPress={handleSubmit(onSubmit)}>
              Log in
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 16,
  },

  heading: {
    textAlign: 'center',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.75)',
  },

  fieldContainer: {
    marginHorizontal: 16,
  },

  inputStyle: {
    marginVertical: 8,
  },

  button: {
    marginVertical: 8,
  },
});
