import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ParamsScreen = ({navigation, route}) => {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;

  return (
    <View>
      <Text>This Params Screen has parameters passed by navigator!</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Params Screen... again"
        onPress={() =>
          navigation.push('Params Screen', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go To WebView Screen"
        onPress={() => navigation.navigate('Header Title WebView')}
      />
    </View>
  );
};

export default ParamsScreen;

const styles = StyleSheet.create({});
