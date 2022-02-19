import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function LinkEditModel({
  modalVisible,
  setModalVisible,
  HandlingId,
  LinkCollection,
  setLinkCollection,
}) {
  const [LinkSet, setLinkSet] = useState({
    link: "",
    logo: require("./../assets/google.jpg"),
    name: "",
  });

  const SettingInput = (text, type) => {
    setLinkSet((prev) => ({
      ...prev,
      [type]: text,
    }));
  };

  const updateCollection = () => {
    const NewArray = { ...LinkCollection };
    NewArray[HandlingId] = LinkSet;
    setLinkCollection(NewArray);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                textAlign: "left",
                width: "100%",
                color: "gray",
                margin: 5,
                fontSize: 20,
              }}
            >
              Add Website
            </Text>
            <View style={styles.TextInputOuter}>
              <TextInput
                style={styles.TextInputBoxStyle}
                onChangeText={(text) => {
                  SettingInput(text, "name");
                }}
                placeholder="Name"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.TextInputOuter}>
              <TextInput
                style={styles.TextInputBoxStyle}
                onChangeText={(text) => {
                  SettingInput(text, "link");
                }}
                placeholder="https://"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "flex-end",
                marginTop: 15,
              }}
            >
              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  AlignContent: "center",
                  backgroundColor: "#5C7AEA",
                  borderRadius: 7,
                  height: 35,
                  margin: 4,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    updateCollection();
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "25%",
                  backgroundColor: "#FF6464",
                  justifyContent: "center",
                  AlignContent: "center",
                  borderRadius: 7,
                  height: 35,
                  margin: 4,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    paddingBottom: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  TextInputOuter: {
    margin: 4,
    width: "100%",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
  },
  TextInputBoxStyle: {
    margin: 4,
    textAlign: "left",
  },
});
