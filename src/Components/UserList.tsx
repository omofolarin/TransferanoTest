import * as React from 'react';

import {
  FlatList,
  FlatListProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Spinner} from './Spinner';
import {User} from '../Services';

interface UserListProps<T> extends FlatListProps<T> {
  layout?: 'grid' | 'list';
  isFetching?: boolean;
}

export const UserList: React.FC<UserListProps<User>> = props => {
  const listLayout = props.layout ?? 'grid';
  return (
    <View>
      {props.isFetching && <Spinner />}
      <FlatList
        data={props.data}
        renderItem={listLayout === 'grid' ? ListItem : GridItem}
        numColumns={listLayout === 'grid' ? 2 : 1}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

const ListHeaderComponent: React.FC<any> = ({isSelected, noOfSelected}) => {
  return (
    <View>
      <View>
        <Text>Filter</Text>
        <Text>Sort</Text>
      </View>

      {isSelected && (
        <View>
          <Text>
            Delete {noOfSelected} user{noOfSelected > 0 ? 's' : ''}{' '}
          </Text>
          <Text>Delete</Text>
        </View>
      )}
    </View>
  );
};

export const EmptyList: React.FC<any> = props => {
  return <View></View>;
};

export const FetchError: React.FC<any> = props => {
  return <View></View>;
};

const GridItem: React.FC<any> = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        // select item
      }}>
      <View></View>
    </TouchableOpacity>
  );
};

const ListItem: React.FC<any> = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        // select item
      }}>
      <View></View>
    </TouchableOpacity>
  );
};
