/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import useLoadEmployees from '../hooks/useLoadEmployeesHook';
import {EmployeeCard} from '../components/EmployeeCardItem';
import {ItemsSeparator} from '../components/ItemsSeparator';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import {EmployeesFilterModal} from '../components/EmployeesFilterModal';
import {EmployeesFilter} from '../types/filter.types';
import EmployeeFilterUtil from '../utils/EmployeeFilterUtil';

export default function EmployeesTab(): React.JSX.Element {
  const [lastRequestTimestamp, setLastRequestTimestamp] = useState(Date.now());
  const [employeesFilter, setEmployeesFilter] = useState<EmployeesFilter>(
    EmployeeFilterUtil.getEmptyFilter(),
  );
  const {employees, error, isLoading} = useLoadEmployees(
    lastRequestTimestamp,
    employeesFilter,
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const onRefresh = useCallback(() => {
    setLastRequestTimestamp(Date.now());
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', columnGap: 5, marginHorizontal: 10}}>
        <View style={{flex: 0.9}}>
          <Button
            title={'Filter'}
            onPress={() => {
              setIsModalVisible(true);
            }}
          />
        </View>
        <View style={{flex: 0.9}}>
          <Button
            title={'Clear Filter'}
            onPress={() => {
              setEmployeesFilter(EmployeeFilterUtil.getEmptyFilter());
            }}
          />
        </View>
      </View>
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
      <EmployeesFilterModal
        setResultantFilter={setEmployeesFilter}
        isModalVisible={isModalVisible}
        changeModalVisibility={setIsModalVisible}
      />
    </View>
  );
}
