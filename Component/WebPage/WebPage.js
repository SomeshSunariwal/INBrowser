import {StyleSheet, View} from 'react-native';
import React from 'react';
import WebWindow from './WebWindow';

export default function WebPage({setProgress, setLoading, url}) {
  return (
    <View style={styles.WebView}>
      <WebWindow setProgress={setProgress} setLoading={setLoading} url={url} />
    </View>
  );
}

const styles = StyleSheet.create({
  WebView: {
    height: '100%',
    width: '100%',
  },
});
