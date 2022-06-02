import Constants from 'expo-constants';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView 
        style={{ flex: 1 }}
        injectedJavaScript={`
         const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
         if (!iOS) {
           const meta = document.createElement('meta');
           let initialScale = 1;
           if(screen.width <= 800) {
            initialScale = ((screen.width / window.innerWidth) + 0.1).toFixed(2);
           }
           const content = 'width=device-width, initial-scale=' + initialScale ;
           meta.setAttribute('name', 'viewport');
           meta.setAttribute('content', content);
           document.getElementsByTagName('head')[0].appendChild(meta);
         }
       `}
        scalesPageToFit={Platform.OS === 'ios'}
        originWhitelist={['*']}
        source={{
          uri: 'https://arcg.is/1qX4rr'
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
});
