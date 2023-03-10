import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const OperatorButton = (prop) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{prop.operator}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 70,
        height: 70,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#0096FF',
        backgroundColor: '#0096FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#fff',
        fontSize: 24,
    }
})

export default OperatorButton;