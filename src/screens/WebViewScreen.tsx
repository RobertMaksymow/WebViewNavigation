import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({navigation}) => {
  const webViewRef = useRef<WebView>(null);

  return (
    <>
      <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
        <Text>WebView Screen</Text>
        <Button title="Go Back" onPress={() => webViewRef.current?.goBack()} />
        <Button title="Reload" onPress={() => webViewRef.current?.reload()} />
        <Button
          title="Go Forward"
          onPress={() => webViewRef.current?.goForward()}
        />
        <Button
          title="Inject JavaScript"
          onPress={() =>
            webViewRef.current?.injectJavaScript('alert(document.title)')
          }
        />
      </View>
      <WebView
        source={{uri: 'https://www.preloved.co.uk'}}
        startInLoadingState
        ref={webViewRef}
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
