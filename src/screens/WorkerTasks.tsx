import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkerTasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Worker Tasks Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4fbf4' },
  text: { fontSize: 18, fontWeight: 'bold', color: '#006c49' }
});
