import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ParamsScreen = ({route, navigation}) => {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;

  return (
    <View>
      <Text>This Params Screen has parameters passed by navigator!</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
};

export default ParamsScreen;

const styles = StyleSheet.create({});
