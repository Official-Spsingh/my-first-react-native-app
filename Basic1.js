import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
const Basic1 = (props) => {
    const arr = ['Hey there, I am SPSingh', 'Hey there, I am Aman']
    const [arrPos, setarrPos] = useState(0)
    const [title, settitle] = useState(arr[arrPos])
    const changeTitle = () => {
        if (arrPos == 0) {
            setarrPos(1)
            settitle(arr[1])
        }
        else {
            setarrPos(0)
            settitle(arr[0])
        }
    }
    return (
        <View style={props.styles.basic1}>
            <Text>{title}</Text>
            <Button onPress={changeTitle} title="Switch person" />
        </View>
    )
}

export default Basic1
