/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import useLoadEmployees from '../hooks/useLoadEmployeesHook';
import {EmployeeCard} from '../components/EmployeeCardItem';
import {ItemsSeparator} from '../components/ItemsSeparator';
import { useNavigation } from '@react-navigation/native';

export default function EmployeesTab(): React.JSX.Element {
  const [lastRequestTimestamp, setLastRequestTimestamp] = useState(Date.now());
  const {employees, error, isLoading} = useLoadEmployees(lastRequestTimestamp);
  const navigation = useNavigation();
  const onRefresh = useCallback(() => {
    setLastRequestTimestamp(Date.now());
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{padding: 10, paddingBottom: 10}}
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        data={employees}
        renderItem={({item}) => {
          return <EmployeeCard employee={item} navigation={navigation} />;
        }}
        ItemSeparatorComponent={_ => <ItemsSeparator height={10} />}
        ListEmptyComponent={_ => (
          <View style={{height: '100%', justifyContent: 'center'}}>
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                alignContent: 'center',
                alignSelf: 'center',
              }}>
              {error}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
