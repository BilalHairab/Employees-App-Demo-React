import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Employee} from '../types/employee.types';
import {PropsWithChildren} from 'react';
import React from 'react';
type NewType = {
  employee: Employee;
};

type Props = PropsWithChildren<NewType>;

export function EmployeeCard(props: Props) {
  const defualtImage = require('../../assets/employee_placeholder.jpg');
  const hasValidImage = (employee: Employee) => {
    if (!employee.profile_image) {
      return false;
    }
    if (employee.profile_image === '') {
      return false;
    }
    return true;
  };
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.image}
        source={
          hasValidImage(props.employee)
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
