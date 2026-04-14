import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';

// Screens
import CitizenHome from './screens/CitizenHome';
import ReportIssue from './screens/ReportIssue';
import AdminDashboard from './screens/AdminDashboard';
import WorkerTasks from './screens/WorkerTasks';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name="Home" component={CitizenHome} />
      <Stack.Screen name="Report" component={ReportIssue} />
      <Stack.Screen name="Admin" component={AdminDashboard} />
      <Stack.Screen name="Worker" component={WorkerTasks} />
    </Stack.Navigator>
  );
}

export default function App() {
  // On web, we wrap the app in a "phone frame" for better preview
  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <View style={styles.phoneFrame}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  phoneFrame: {
    width: 375,
    height: 812,
    backgroundColor: '#fff',
    borderRadius: 40,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 10,
    borderWidth: 8,
    borderColor: '#1e293b',
  },
});
