/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren, useRef} from 'react';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {Modal, View, Button, Text} from 'react-native';
import {EmployeesFilter} from '../types/filter.types';
import EmployeeFilterUtil from '../utils/EmployeeFilterUtil';
import { useFocusEffect } from '@react-navigation/native';

type EmployeeFilterProps = {
  isModalVisible: boolean;
  changeModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setResultantFilter: React.Dispatch<React.SetStateAction<EmployeesFilter>>;
};

type Props = PropsWithChildren<EmployeeFilterProps>;

export function EmployeesFilterModal(props: Props) {
  const employeesFilter = useRef<EmployeesFilter>(
    EmployeeFilterUtil.getEmptyFilter(),
  );

  useFocusEffect(() => {
    employeesFilter.current = EmployeeFilterUtil.getEmptyFilter();
  });

  const handleEmployeeName = text => {
    employeesFilter.current.name = text;
  };

  const handleFilterAttribute = (
    name: 'age' | 'salary',
    level: 'min' | 'max',
    value: string,
  ) => {
    employeesFilter.current[name][level] = Number(value);
  };

  return (
    <Modal
      animationType="fade"
      visible={props.isModalVisible}
      presentationStyle="formSheet"
      style={{margin: 0}}>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: '30%',
          height: '40%',
          borderColor: 'rgba(0,0,0,0.38)',
          padding: 5,
          alignItems: 'center',
          backgroundColor: '#fff',
          elevation: 5,
          shadowRadius: 20,
          rowGap: 30,
          shadowOffset: {width: 3, height: 3},
        }}>
        <Text style={{fontSize: 30}}>Filter Employees List</Text>
        <TextInput
          style={[styles.input, {width: '80%'}]}
          underlineColorAndroid="transparent"
          placeholder=" Employee Name"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleEmployeeName}
        />

        <View style={styles.attributeContainer}>
          <Text style={{fontSize: 20}}>Age</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={[styles.input, {width: 80}]}
              underlineColorAndroid="transparent"
              placeholder=" Min"
              placeholderTextColor="#000000"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                handleFilterAttribute('age', 'min', text);
              }}
            />
            <TextInput
              style={[styles.input, {width: 80}]}
              underlineColorAndroid="transparent"
              placeholder=" Max"
              placeholderTextColor="#000000"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                handleFilterAttribute('age', 'max', text);
              }}
            />
          </View>
        </View>
        <View style={styles.attributeContainer}>
          <Text style={{fontSize: 20}}>Salary</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={[styles.input, {width: 80}]}
              underlineColorAndroid="transparent"
              placeholder=" Min"
              placeholderTextColor="#000000"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                handleFilterAttribute('salary', 'min', text);
              }}
            />
            <TextInput
              style={[styles.input, {width: 80}]}
              underlineColorAndroid="transparent"
              placeholder=" Max"
              placeholderTextColor="#000000"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                handleFilterAttribute('salary', 'max', text);
              }}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title={'OK'}
            onPress={() => {
              props.setResultantFilter(employeesFilter.current);
              props.changeModalVisibility(false);
            }}
          />
          <Button
            title={'Cancel Filter'}
            onPress={() => {
              props.setResultantFilter(EmployeeFilterUtil.getEmptyFilter());
              props.changeModalVisibility(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
  },
  attributeContainer: {
    margin: 15,
    height: 40,
    width: '70%',
    alignItems: 'center',
  },
});
