import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import LinkEditModel from '../LInkEditModel/LinkEditModel';

export default function SiteBox({setUrl}) {
  const Collection = [
    {
      link: 'https://google.com',
      logo: require('./../../assets/google.jpg'),
      name: 'Google1',
    },
    {
      link: 'https://youtube.com',
      logo: require('./../../assets/youtube.jpg'),
      name: 'Youtube',
    },
    {
      link: 'https://google.com',
      logo: require('./../../assets/google.jpg'),
      name: 'Google2',
    },
    {
      link: 'https://youtube.com',
      logo: require('./../../assets/youtube.jpg'),
      name: 'Youtube',
    },
    {
      link: 'https://google.com',
      logo: require('./../../assets/google.jpg'),
      name: 'Google3',
    },
    {
      link: 'https://youtube.com',
      logo: require('./../../assets/youtube.jpg'),
      name: 'Youtube',
    },
    {
      link: 'https://google.com',
      logo: require('./../../assets/google.jpg'),
      name: 'Google4',
    },
    {
      link: 'https://youtube.com',
      logo: require('./../../assets/youtube.jpg'),
      name: 'Youtube',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [LinkCollection, setLinkCollection] = useState(Collection);

  const [HandlingId, setHandlingId] = useState(null);

  const TotalRow = 2;
  const TotalColumn = 4;

  return (
    <View>
      <LinkEditModel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        LinkCollection={LinkCollection}
        HandlingId={HandlingId}
        setLinkCollection={setLinkCollection}
      />
      <View
        style={{
          marginStart: '3%',
          marginEnd: '3%',
          marginTop: '3%',
        }}>
        {Array.from(Array(TotalRow).keys()).map((key, RowKey) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              key={key}>
              {Array.from(Array(TotalColumn).keys()).map((key, ColKey) => {
                return (
                  <View
                    key={key}
                    style={{
                      margin: '2%',
                      alignItems: 'center',
                      marginBottom: 15,
                    }}>
                    <TouchableOpacity
                      style={{
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        setUrl(
                          LinkCollection[ColKey + RowKey * TotalColumn].link,
                        );
                      }}
                      onLongPress={() => {
                        setModalVisible(!modalVisible);
                        setHandlingId(ColKey + RowKey * TotalColumn);
                      }}>
                      <Image
                        source={
                          LinkCollection[ColKey + RowKey * TotalColumn].logo
                        }
                        style={{
                          height: 40,
                          width: 50,
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={{fontSize: 10}}>
                      {LinkCollection[ColKey + RowKey * TotalColumn].name}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}
