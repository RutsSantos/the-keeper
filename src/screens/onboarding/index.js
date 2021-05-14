import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";

export default function Onboarding() {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key='1' style={styles.center}>
        <Image
          source={require("../../assets/img/Artboard1.png")}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={{ fontWeight: "700", fontSize: 26 }}>
            ¿Necesitas ayuda?
          </Text>
          <Text style={{ fontSize: 18, marginTop: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
      </View>
      <View key='2' style={styles.center}>
        <Image
          source={require("../../assets/img/Artboard2.png")}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={{ fontWeight: "700", fontSize: 26 }}>
            Consigue empleo
          </Text>
          <Text style={{ fontSize: 18, marginTop: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
      </View>
      <View key='3' style={styles.center}>
        <Image
          source={require("../../assets/img/Artboard3.png")}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={{ fontWeight: "700", fontSize: 26 }}>únete</Text>
          <Text style={{ fontSize: 18, marginTop: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: "70%",
    marginHorizontal: 30,
  },
  center: {
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    marginTop: -10,
  },
});
