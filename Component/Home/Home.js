import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import SiteBox from '../SiteBox/SiteBox';
import WebPage from '../WebPage/WebPage';
import * as Progress from 'react-native-progress';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [url, setUrl] = useState('https://www.google.com');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setUrl={setUrl}
        />
      </View>
      <View style={{width: '100%'}}>
        {loading ? (
          <Progress.Bar
            progress={progress}
            style={styles.ProgressStyle}
            borderWidth={0}
          />
        ) : null}
      </View>
      <View
        style={{
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderColor: 'gray',
          margin: '1%',
          borderRadius: 4,
        }}>
        <View style={{padding: '1%'}}>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
            }}>
            <Text style={{fontSize: 9, marginBottom: 5}}>Top Sites</Text>
          </View>
          <View>
            <SiteBox setUrl={setUrl} />
          </View>
        </View>
      </View>
      {/* <WebPage setLoading={setLoading} setProgress={setProgress} url={url} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '97.8%',
    marginTop: Platform.OS == 'android' ? 0 : StatusBar.currentHeight,
  },
  ProgressStyle: {
    width: '100%',
    height: 3,
  },
});
