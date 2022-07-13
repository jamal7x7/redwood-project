import { Text } from '@nextui-org/react'

export default function App(props) {
  return <Text {...props}>{props.children}</Text>
}
