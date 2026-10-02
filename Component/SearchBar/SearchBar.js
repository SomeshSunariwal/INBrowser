import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function SearchBar({searchText, setSearchText, setUrl}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderLeftWidth: 3,
          borderRightWidth: 3,
          borderTopWidth: 3,
          borderBottomWidth: 3,
          borderColor: 'gray',
          backgroundColor: 'gray',
        }}>
        <View
          style={{
            padding: 5,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderRadius: 5,
            borderColor: 'gray',
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
          {/* https://www.YouTube.com
                    https://www.google.com */}
          <TextInput
            style={{width: '90%'}}
            autoCapitalize="none"
            placeholder="Search here"
            onChangeText={text => {
              setSearchText(text);
            }}
          />
          <View
            style={{borderLeftWidth: 1, paddingLeft: 5, borderColor: 'gray'}}>
            <TouchableOpacity
              style={{
                width: '140%',
              }}
              onPress={() => setUrl(searchText)}>
              <Text>GO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
