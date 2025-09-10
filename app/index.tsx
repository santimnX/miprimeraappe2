import HelloWorldText from '@/components/helloWorldText'
import React from 'react'
import { View } from 'react-native'

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HelloWorldText />
    </View>
  )
}

export default index