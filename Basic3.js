import React from 'react'
import { View, Text } from 'react-native'
const Basic3 = (props) => {
    return (
        <View style={{ padding: 50, flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'red', width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text>1</Text>
            </View>
            <View style={{ backgroundColor: 'green', width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text>2</Text>
            </View>
            <View style={{ backgroundColor: 'blue', width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text>3</Text>
            </View>
            <View>

            </View>
        </View>
    )
}

export default Basic3
