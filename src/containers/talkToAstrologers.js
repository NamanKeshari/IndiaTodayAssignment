import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
} from "react-native";

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Astrologer from "../components/astrologer";
import MyRadioButton from "../components/myRadioButton";
import { getAstros } from "../services/astroService";
import Header from "../components/header";

const TalkToAstrologers = () => {
  const [filterChecked, setFilterChecked] = React.useState("first");

  const [filterVisible, setFilterVisible] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const textInputRef = useRef();
  const [astros, setAstros] = useState([]);
  const [inverted, setInverted] = useState(false);

  const sortFunction = (a, b) => {
    return filterChecked === "exhl"
      ? a.experience < b.experience
      : filterChecked === "exlh"
      ? a.experience > b.experience
      : filterChecked === "plh"
      ? a.minimumCallDurationCharges > b.minimumCallDurationCharges
      : filterChecked === "phl"
      ? a.minimumCallDurationCharges < b.minimumCallDurationCharges
      : a.firstName > b.firstName;
  };
  useEffect(() => {
    (async () => {
      const data = await getAstros();
      setAstros(data["astros"]);
    })();
  }, []);
  useEffect(() => {
    if (searchBarVisible) {
      setTimeout(() => {
        textInputRef.current.focus();
      }, 100);
    }
  }, [searchBarVisible]);

  const filteredAndSortedAstros = useMemo(() => {
    const filteredBySearchText = astros.filter(
      (astro) =>
        astro.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        astro.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
    filteredBySearchText.sort(sortFunction);
    if (inverted) {
      filteredBySearchText.reverse();
    }
    return filteredBySearchText;
  }, [astros, searchText, filterChecked, inverted]);
  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          paddingHorizontal: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Talk to an Astrologer
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setSearchBarVisible(true);
            }}
          >
            <FontistoIcon name="search" size={25} color="#f28c49" />
          </TouchableOpacity>

          <View style={{ width: 10 }} />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setFilterVisible(true);
            }}
          >
            <FontAwesome5Icon name="sliders-h" size={25} color="#f28c49" />
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setInverted(!inverted);
            }}
          >
            <Animated.View
              style={{
                transform: [{ rotate: "90deg" }],
              }}
            >
              <FontistoIcon name="arrow-swap" size={25} color="#f28c49" />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 15,
        }}
      />
      {filteredAndSortedAstros.length ? (
        <FlatList
          data={filteredAndSortedAstros}
          renderItem={({ item }) => <Astrologer astro={item} />}
          keyExtractor={(astro) => astro._id}
          style={{
            paddingHorizontal: 10,
          }}
        />
      ) : (
        <Text>No Items Matched</Text>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={searchBarVisible}
        onRequestClose={() => {
          setSearchBarVisible(false);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setSearchBarVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View
              style={{
                paddingHorizontal: 10,
                top: 70,
              }}
            >
              <View
                style={[
                  styles.shadows,
                  {
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    justifyContent: "center",
                  },
                ]}
              >
                <TextInput
                  style={{ height: 50, padding: 10 }}
                  onChangeText={(text) => setSearchText(text)}
                  value={searchText}
                  ref={textInputRef}
                />

                <View
                  style={{
                    position: "absolute",
                    right: 10,
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      if (searchText) {
                        setSearchText("");
                      } else {
                        setSearchBarVisible(false);
                      }
                    }}
                  >
                    <AntDesignIcon name="close" size={25} color="#f28c49" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={filterVisible}
        onRequestClose={() => {
          setFilterVisible(false);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setFilterVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.shadows, styles.filterView]}>
              <Text
                style={{
                  color: "#f28c49",
                  fontSize: 20,
                  borderBottomColor: "grey",
                  borderBottomWidth: 1,
                  paddingBottom: 5,
                }}
              >
                Sort By
              </Text>

              <MyRadioButton
                value="exhl"
                checked={filterChecked}
                setChecked={setFilterChecked}
                label="Experience - high to low"
              />
              <MyRadioButton
                value="exlh"
                checked={filterChecked}
                setChecked={setFilterChecked}
                label="Experience - low to high"
              />
              <MyRadioButton
                value="phl"
                checked={filterChecked}
                setChecked={setFilterChecked}
                label="Price - high to low"
              />
              <MyRadioButton
                value="plh"
                checked={filterChecked}
                setChecked={setFilterChecked}
                label="Price - low to high"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default TalkToAstrologers;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
  modalContainer: {
    width: "100%",
    height: "100%",
  },
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  filterView: {
    position: "absolute",
    top: "15%",
    right: 20,
    width: "70%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
