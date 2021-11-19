import * as React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../Hooks/useAppStore';

import {UserList} from '../Components';
import {sx} from '../Components/HelperStyles';
import {useListAttendeesQuery} from '../Services';

export const ListAttendees: React.FC<{}> = ({navigation, route}) => {
  //   const reduxDispatcher = useAppDispatch();

  const listAttendee = useListAttendeesQuery({});

  const listLayout = useAppSelector(state => {
    return state.root.users.layout;
  });
  const users = useAppSelector(state => {
    return state.root.users.users;
  });
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (listAttendee.isSuccess && !users.length) {
      dispatch({
        type: 'fetchUsers',
        payload: {users: listAttendee.data?.data},
      });
    }
  }, [dispatch, listAttendee.data?.data, listAttendee.isSuccess, users.length]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{paddingHorizontal: 8}}
          onPress={() => {
            dispatch({type: 'logOut'});
            navigation.replace('Login');
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [dispatch, navigation]);

  return (
    <View style={(sx.flex1, sx.bgWhite)}>
      <UserList
        data={users}
        isFetching={listAttendee.isFetching}
        layout={listLayout}
      />
    </View>
  );
};
