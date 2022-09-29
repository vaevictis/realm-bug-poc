import React, { useEffect, useMemo, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, LogBox } from 'react-native'

export default function App({ navigation }) {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.allowFontScaling = false
  }, [])

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}
