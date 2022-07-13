// import { Children } from 'react'

import { Button } from '@nextui-org/react'

export default function App(props) {
  return <Button {...props}>{props.children}</Button>
}
