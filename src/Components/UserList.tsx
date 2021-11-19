import * as React from 'react';

import {
  Alert,
  Dimensions,
  FlatList,
  FlatListProps,
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../Hooks/useAppStore';

import {Button} from '.';
import {Checkbox} from './Checkbox';
import {Icon} from './icons';
import {Spinner} from './Spinner';
import {User} from '../Services';
import {sx} from './HelperStyles';

interface UserListProps<T> extends FlatListProps<T> {
  layout?: 'grid' | 'list';
  isFetching?: boolean;
  hasError?: boolean;
}

export const UserList: React.FC<UserListProps<User>> = ({
  layout,
  isFetching,
  hasError,
  data,
}) => {
  const listFetching = isFetching;
  const listData = data;
  const dispatch = useAppDispatch();
  const listLayout = layout;
  const item = React.useMemo(
    () =>
      listLayout === 'grid'
        ? props => <GridItem {...props} />
        : props => <ListItem {...props} />,
    [listLayout],
  );

  return (
    <View>
      {listFetching && (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      )}

      {hasError && <FetchError />}
      <FlatList
        data={listData}
        renderItem={item}
        numColumns={listLayout === 'grid' ? 2 : 1}
        key={listLayout}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={() => (
          <ListHeaderComponent
            isSelected={false}
            selected={[]}
            layout={listLayout}
            onToggleLayout={() => {
              dispatch({
                type: 'toggleLayout',
                payload: {layout: listLayout === 'grid' ? 'list' : 'grid'},
              });
            }}
          />
        )}
      />
    </View>
  );
};

const ListHeaderComponent: React.FC<any> = ({layout, onToggleLayout}) => {
  const isSelected = useAppSelector(
    state => state.root.users.filteredUsers.length > 0,
  );
  const selected = useAppSelector(state => state.root.users.filteredUsers);
  const users = useAppSelector(state => state.root.users.users);
  const dispatch = useAppDispatch();

  return (
    <View style={[styles.toolBar, sx.marginX8, sx.itemsCenter]}>
      {!isSelected && (
        <View style={[sx.flex1, sx.flexRow, sx.itemsCenter, sx.justifyBetween]}>
          {/* <TouchableOpacity style={styles.toolBarButton}>
            <Text>Filter</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={[
              sx.flexRow,
              sx.itemsCenter,
              sx.justifyCenter,
              styles.toolBarButton,
            ]}>
            <Text>Sort</Text>
            <Icon name="arrow-down" size={20} />
          </TouchableOpacity>

          <Text>Tap attendee to select</Text>

          <View
            style={[
              sx.wScreen20,
              sx.justifyCenter,
              sx.itemsEnd,
              sx.paddingX10,
            ]}>
            {layout === 'list' && (
              <TouchableOpacity onPress={onToggleLayout}>
                <Icon name="grid" size={20} />
              </TouchableOpacity>
            )}
            {layout === 'grid' && (
              <TouchableOpacity onPress={onToggleLayout}>
                <Icon name="list" size={20} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}

      {isSelected && (
        <View style={[sx.flex1, sx.flexRow, sx.justifyBetween, sx.itemsCenter]}>
          <Text>
            Selected {selected?.length} user{selected?.length > 0 ? 's' : ''}of{' '}
            {users?.length}
          </Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                `You are about to delete ${selected.length} attendees`,
                '',
                [
                  {
                    text: 'Cancel',
                  },
                  {
                    onPress: () => {
                      dispatch({
                        type: 'deleteUsers',
                        payload: {users: selected.map(s => s.id)},
                      });
                    },
                    text: 'Continue',
                  },
                ],
              );
            }}
            style={{
              backgroundColor: 'red',
              width: 55,
              borderRadius: 8,
              paddingVertical: 2,
              paddingHorizontal: 4,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export const EmptyList: React.FC<any> = props => {
  return <View></View>;
};

export const FetchError: React.FC<{
  error?: string;
  hasError?: boolean;
  onRefresh?: (e: GestureResponderEvent) => void;
}> = ({error, hasError, onRefresh}) => {
  return hasError ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorHeading}>
        {error ?? 'An Error occurred while fetching'}
      </Text>
      <Button
        color="secondary"
        onPress={e => {
          onRefresh ? onRefresh(e) : null;
        }}>
        Please refresh
      </Button>
    </View>
  ) : null;
};

const GridItem: React.FC<any> = props => {
  const {index, item} = props;
  const dispatch = useAppDispatch();
  const filteredUsers = useAppSelector(state => state.root.users.filteredUsers);

  return (
    <TouchableOpacity
      key={index.toString()}
      onPress={() => {
        // select item
        dispatch({type: 'filterUsers', payload: {user: item}});
      }}>
      <View style={styles.grid}>
        <View>
          <View
            style={[
              sx.absolute,
              {top: 0, zIndex: 2, padding: 8},
              {display: !filteredUsers.length ? 'none' : 'flex'},
            ]}>
            <Checkbox
              value={
                filteredUsers?.filter(user => user.id === item.id).length !== 0
              }
              onFillColor="#fff"
            />
          </View>
          <Image
            source={{
              uri: item.avatar,
              width: Dimensions.get('window').width * 0.48,
              height: 200,
            }}
          />
        </View>

        <View style={styles.gridContent}>
          <View style={[sx.flex1, sx.padding4, sx.flexRow]}>
            <View>
              <Text style={styles.gridHeading}>
                {item.first_name} {item.last_name}
              </Text>

              <Text style={styles.gridSubText}>{item.email}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListItem: React.FC<any> = props => {
  const {item, index} = props;
  const dispatch = useAppDispatch();
  const filteredUsers = useAppSelector(state => state.root.users.filteredUsers);

  return (
    <TouchableOpacity
      key={index.toString()}
      onPress={() => {
        // select item
        dispatch({type: 'filterUsers', payload: {user: item}});
      }}>
      <View style={styles.row}>
        <View>
          <Image source={{uri: item.avatar, width: 100, height: 80}} />
        </View>
        <View style={styles.rowContent}>
          <Text style={styles.rowHeading}>
            {item.first_name} {item.last_name}
          </Text>

          <Text style={styles.rowSubText}>{item.email}</Text>
        </View>

        <View
          style={[
            sx.flex1,
            sx.itemsEnd,
            sx.justifyCenter,
            sx.paddingX8,
            {display: !filteredUsers.length ? 'none' : 'flex'},
          ]}>
          <Checkbox
            value={
              filteredUsers?.filter(user => user.id === item.id).length !== 0
            }
            onFillColor="#fff"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridContainer: {},

  errorHeading: {
    fontSize: 18,
    textAlign: 'center',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorButton: {
    marginVertical: 8,
  },

  grid: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 4,
    marginVertical: 16,
  },

  gridContent: {
    paddingVertical: 8,
  },

  gridHeading: {},
  gridSubText: {},
  row: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 0,
    paddingVertical: 1,
    backgroundColor: '#fff',
  },

  rowContent: {
    paddingHorizontal: 8,
  },

  rowHeading: {
    fontSize: 18,
    paddingVertical: 4,
  },

  rowSubText: {
    fontSize: 14,
    marginVertical: 4,
  },

  toolBar: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#fff',
  },

  toolBarButton: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },

  spinner: {
    marginVertical: 8,
  },
});
