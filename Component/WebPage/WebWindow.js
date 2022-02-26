import React from 'react';
import {WebView} from 'react-native-webview';

// ...

export default function WebWindow({setProgress, setLoading, url}) {
  return (
    <WebView
      onLoad={() => {
        setLoading(false);
        setProgress(0);
      }}
      source={{uri: url}}
      onLoadStart={() => setLoading(true)}
      onLoadProgress={event => setProgress(event.nativeEvent.progress)}
    />
  );
}
