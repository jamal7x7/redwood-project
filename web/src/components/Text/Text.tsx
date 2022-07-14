import { Text } from '@nextui-org/react'

export default function App(props) {
  return (
    <Text {...props} css={{ fontFamily: 'Merriweather' }}>
      {props.children}
    </Text>
  )
}
