import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({navigation, route}) => {
  const webViewRef = useRef<WebView>(null);

  const handleNavigationStateChange = navState => {
    // Check if WebView can go back
    const canGoBack = navState.canGoBack;

    // Update the header left button based on WebView navigation
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <Button
            onPress={() => {
              if (canGoBack) {
                // If WebView can go back, go back in WebView
                webViewRef.current.goBack();
              } else {
                // If WebView cannot go back, go back in the navigation stack
                navigation.goBack();
              }
            }}
            title="Go Back"
            color="blue"
          />
        </View>
      ),
    });
  };

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
        onNavigationStateChange={handleNavigationStateChange}
      />
    </>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({});
