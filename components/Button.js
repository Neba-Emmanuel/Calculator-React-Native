import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (prop) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{prop.number}</Text>
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
        borderColor: '#333333',
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#fff',
        fontSize: 24,
    }
})

export default Button;