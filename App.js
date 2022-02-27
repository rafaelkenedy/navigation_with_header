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
import Input from './src/components/Input'
import styled from 'styled-components/native'

const Screen1 = () => {
  const { navigate, goBack } = useNavigation()

  return (
    <>
      <Header
        onBackPress={() =>
          console.log("não é possível voltar")
        }
        title="Primeira tela"
        onNextPress={() =>
          navigate('Screen2')
        }
      />
      <View
        style={[
          styles.container,
          { justifyContent: 'center', 
            alignItems: 'center',
            paddingHorizontal: 12
          }
        ]}>
        <Text>Screen 1</Text>
        <StyledTextInput label={"Email"} />
        <StyledTextInput label={"Senha"} showRightIcon />
      </View>
    </>
  )
}

const Screen2 = () => {
  const { navigate, goBack } = useNavigation()
  return (
    <>
      <Header
        onBackPress={() => goBack()}
        title="Segunda tela"
        onNextPress={() => console.log("não é possível avançar")}
      />
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

const StyledTextInput = styled(Input)`
  margin-top: 16px;
`;

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