import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/mainStore';
import ImageUtil from '../utils/ImageUtil';

export default function SingleEmployeeTab(): React.JSX.Element {
  let employee = useSelector((state: RootState) => state.activeEmployee);
  const defualtImage = require('../../assets/employee_placeholder.jpg');

  return (
    <View style={{flex: 1}}>
      {employee ? (
        <View style={{flex: 1, padding: 10, rowGap: 20, alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={
              ImageUtil.hasValidImage(employee)
                ? {uri: employee.profile_image}
                : defualtImage
            }
          />
          <Text
            style={{
              fontSize: 30,
            }}>{`# ${employee.id} - ${employee.employee_name}`}</Text>
          <Text
            style={{
              fontSize: 20,
            }}>{`Salary: ${employee.employee_salary} AED`}</Text>
          <Text
            style={{
              fontSize: 20,
            }}>{`${employee.employee_age} Years Old`}</Text>
        </View>
      ) : (
        <Text
          style={{
            textAlign: 'center',
            height: '100%',
            flex: 1,
            verticalAlign: 'middle',
          }}>
          {'Select an employee from the list to view his/her details'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
  },
});
