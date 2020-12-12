import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
const Basic2 = (props) => {
    return (
        <View style={{ padding: 50 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput placeholder="Course Goal"
                    style={{ borderColor: 'black', borderWidth: 1, padding: 10, width: '80%' }}
                />
                <Button title="Add" color="#f194ff" />
            </View>
            <View>

            </View>
        </View>
    )
}

export default Basic2
