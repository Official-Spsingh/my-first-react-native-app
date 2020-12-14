import React, { useState } from 'react'
import { View, Text, TextInput, Button, Modal, FlatList } from 'react-native'
const Basic2 = (props) => {
    const [addModalVisible, setaddModalVisible] = useState(false)
    const [taskItem, settaskItem] = useState('')
    const [tasks, settasks] = useState([])
    const changeTask = (e) => {
        settaskItem(e.target.value)
    }
    const addTask = () => {
        settasks([...tasks, taskItem])
        settaskItem('')
        setaddModalVisible(false)
    }
    const renderItem = ({ item }) => (
        <View>
            <Text>
                {item}
            </Text>
        </View>
    );
    return (
        <View style={{ padding: 50 }}>
            <Button title="Add task" color="#f194ff" onPress={() => setaddModalVisible(true)} />
            <Modal visible={addModalVisible} animationType="slide">
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput placeholder="Add Task" onChange={changeTask} value={taskItem}
                        style={{ borderColor: 'black', borderWidth: 1, padding: 10, width: '80%', marginBottom: 10 }}
                    />
                    <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '40%' }}>
                            <Button title="Cancel" color="#aa0000" onPress={() => setaddModalVisible(false)} />
                        </View>
                        <View style={{ width: '40%' }}>
                            <Button title="Add" color="#f194ff" onPress={addTask} />
                        </View>
                    </View>
                </View>
            </Modal>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item=>item}
            />
            <View>

            </View>
        </View>
    )
}

export default Basic2
