import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({number, Calculate, onPress}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{number}</Text>
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
        justifyContent: 'center',
        elevation: 20
    },
    text:{
        color: '#fff',
        fontSize: 24,
    }
})

export default Button;