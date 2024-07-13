import {PropsWithChildren} from 'react';
import React from 'react';
import {View} from 'react-native';

type NewType = {
  height: number;
};

type Props = PropsWithChildren<NewType>;

export function ItemsSeparator(props: Props) {
  return <View style={{width: '100%', height: props.height}} />;
}
