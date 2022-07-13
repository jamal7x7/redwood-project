import Text from './Text'

export const generated = () => {
  return (
    <Text
      h1
      size={60}
      css={{
        textGradient: '45deg, $blue600 -20%, $pink600 50%',
      }}
      weight="bold"
    >
      Hello, World!
    </Text>
  )
}

export default { title: 'Components/Text' }
