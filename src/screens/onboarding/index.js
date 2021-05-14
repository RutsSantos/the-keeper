import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Dots from "react-native-dots-pagination";
import Icon from "react-native-ico";

function DotSlider({active}) {
  return (
    <View style={{ height: 20, marginTop: 55 }}>
      <Dots
        length={3}
        activeColor='#B9AA87'
        passiveColor='#E5E5E5'
        active={active}
      />
    </View>
  );
}

export function Onboarding({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.center}>
        <Image
          source={require("../../assets/img/Artboard1.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>¿Necesitas ayuda?</Text>
          <Text style={styles.textSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <DotSlider active={0} />
        </View>
      </View>
      <View style={styles.navigatorConntainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Onboarding3")}>
          <Text style={{ color: "#828282", fontSize: 16 }}>Omitir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Onboarding2")}
          style={{ alignSelf: "flex-end", bottom: 0 }}>
          <Icon
            name='right-arrowhead'
            width='26'
            height='30'
            color={"#B9B9B9"}
            group='universalicons'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Onboarding2({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.center}>
        <Image
          source={require("../../assets/img/Artboard2.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Consigue empleo</Text>
          <Text style={styles.textSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <DotSlider active={1} />
        </View>
      </View>
      <View style={styles.navigatorConntainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Onboarding3")}>
          <Text style={{ color: "#828282", fontSize: 16 }}>Omitir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Onboarding3")}
          style={{ alignSelf: "flex-end", bottom: 0 }}>
          <Icon
            name='right-arrowhead'
            width='26'
            height='30'
            color={"#B9B9B9"}
            group='universalicons'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Onboarding3({ navigation }) {
  return (
    <View style={styles.center}>
      <Image
        source={require("../../assets/img/Artboard3.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>únete</Text>
        <Text style={styles.textSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <DotSlider active={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
  textContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: "15%",
    height: "30%",
    marginHorizontal: 30,
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 26,
  },
  textSubtitle: {
    fontSize: 18,
    marginTop: 30,
  },
  center: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  navigatorConntainer: {
    marginHorizontal: 45,
    marginBottom: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
