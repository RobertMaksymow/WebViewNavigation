import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({navigation}) => {
  return (
    <>
      {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>WebView Screen</Text>
      </View> */}
      <WebView
        source={{uri: 'https://www.google.com/search?q=react+native+school'}}
        startInLoadingState
        renderLoading={() => (
          <View style={{flex: 1, alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        )}
        allowsBackForwardNavigationGestures
      />
    </>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({});
