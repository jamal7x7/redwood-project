import * as BX from 'react-icons/bi'

import Button from './Button'

export const generated = () => {
  return (
    <Button
      size="xl"
      iconRight={<BX.BiRightArrowAlt />}
      iconRightCss={{ color: '$blue600' }}
      // color="gradient"
      // bordered
      color="primary"
      ghost
      css={{
        color: '$gray900',
        border: 'none',
        justifyContent: 'start',
        width: '350px',
      }}
      // shadow
      // flat
      // auto
    >
      Button
    </Button>
  )
}

export default { title: 'Components/Button' }
