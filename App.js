import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { useState } from "react";
import * as Progress from "react-native-progress";
import WebWindow from "./Component/WebWindow";
import SearchBar from "./Component/SearchBar";
import SiteBox from "./Component/SiteBox";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [url, setUrl] = useState("https://www.google.com");
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
      <View style={{ width: "100%" }}>
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
          borderColor: "gray",
          margin: "1%",
          borderRadius: 4,
        }}
      >
        <View style={{ padding: "1%" }}>
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            <Text style={{ fontSize: 9, marginBottom: 5 }}>Top Sites</Text>
          </View>
          <View>
            <SiteBox setUrl={setUrl} />
          </View>
        </View>
      </View>

      <View style={styles.WebView}>
        <WebWindow
          setProgress={setProgress}
          setLoading={setLoading}
          url={url}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: StatusBar.currentHeight,
  },
  ProgressStyle: {
    width: "100%",
    height: 3,
  },
  WebView: {
    height: "100%",
    width: "100%",
  },
});
