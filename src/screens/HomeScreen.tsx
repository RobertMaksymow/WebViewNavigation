import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go To WebView Screen"
        onPress={() => navigation.navigate('Header Title WebView')}
      />
      <Button
        title="Go To Params Screen"
        /* 1. Navigate to the Details route with params */
        onPress={() =>
          navigation.navigate('Params Screen', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
