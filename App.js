import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
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
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button onPress={changeTitle} title="Switch person" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
