import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Employee} from '../types/employee.types';
import {PropsWithChildren} from 'react';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setActiveEmployee} from '../reducers/employees/employeesActions';
import ImageUtil from '../utils/ImageUtil';
type EmployeeCardProps = {
  employee: Employee;
  navigation: any;
};

type Props = PropsWithChildren<EmployeeCardProps>;

export function EmployeeCard(props: Props) {
  const dispatch = useDispatch();
  const defualtImage = require('../../assets/employee_placeholder.jpg');
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        dispatch(setActiveEmployee(props.employee));
        props.navigation.navigate('SingleEmployeeTab');
      }}>
      <Image
        style={styles.image}
        source={
          ImageUtil.hasValidImage(props.employee)
            ? {uri: props.employee.profile_image}
            : defualtImage
        }
      />
      <View
        style={{
          flexDirection: 'column',
          marginStart: 10,
          alignContent: 'space-between',
        }}>
        <Text style={{flex: 3, fontSize: 20}}>
          {props.employee.employee_name}
        </Text>
        <Text style={{flex: 2, fontSize: 15}}>
          {props.employee.employee_salary + ' AED'}
        </Text>
        <Text style={{flex: 2, fontSize: 15}}>
          {props.employee.employee_age + ' Years Old'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    overflow: 'hidden',
  },
});
