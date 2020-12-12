import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Basic1 from './Basic1';
import Basic2 from './Basic2';
import Basic3 from './Basic3';
import styles from './styles';
export default function App() {
  return (
    // <Basic1 styles={styles} />
    <Basic2 styles={styles} />
    // <Basic3 />
  );
}