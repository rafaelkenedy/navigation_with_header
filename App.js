import React from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from './src/components/Header'

const Screen1 = () => {
  const { navigate } = useNavigation()

  return (
    <>
      <Header />
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' }
        ]}>
        <Text>Screen 1</Text>
        <TouchableOpacity onPress={() => navigate('Screen2')}>
          <Text>Next page</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const Screen2 = () => {
  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,
          backgroundColor: '$74b3a7',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>Screen 2</Text>
      </View>
    </>
  )
}

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Screen1'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#a3ccaf'
    }
  })

export default App