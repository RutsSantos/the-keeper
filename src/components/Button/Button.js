import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from "react-native-ico";

export function MainButton({text, onPress}){
    return(
        <TouchableOpacity style={styles.mainButton} onPress={onPress}>
            <Text style={[styles.text, styles.uppercase]}>{text}</Text>
        </TouchableOpacity>
    )
}

export function SecondaryButton({text, onPress, buttonColor}){
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: buttonColor}]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export function ArrowBack ({onPress}){
    return(
        <TouchableOpacity style={{top: 0}} onPress={onPress}>
            <Icon
            name='left-arrowhead'
            width='26'
            height='30'
            color={"#000"}
            group='universalicons'
          />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: "#000",
        height: 48,
        minWidth: 250,
        maxWidth: 250,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    text: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18
    },
    uppercase: {
        textTransform: "uppercase",
    },
    secondaryButton: {
        height: 48,
        minWidth: 250,
        maxWidth: 250,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
})
