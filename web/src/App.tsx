// 1. Import `createTheme`

import { createTheme, NextUIProvider } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

// import './index.css'

/////////////////////////////////////////////////////////////////////////////////////////
// 2. Call `createTheme` and pass your custom values

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '$gray900',
    },
  },
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // // brand colors
      // primaryLight: '$green200',
      // primaryLightHover: '$green300',
      // primaryLightActive: '$green400',
      // primaryLightContrast: '$green600',
      // primary: '#0045fe',
      primary: '$gray50',
      // primaryBorder: '$green500',
      // primaryBorderHover: '$green600',
      // primarySolidHover: '$green700',
      // primarySolidContrast: '$white',
      // primaryShadow: '$green500',
      // gradient:
      //   'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      // link: '#5E1DAD',
      // // you can also create your own color
      // myColor: '#ff4ecd',
      // ...  more colors
      gradientGray:
        'linear-gradient(112deg, $gray100 -25%, $gray500 -10%, $gray500 80%)',
      link: '#5E1DAD',
    },
    space: {},
    fonts: {
      serif: 'mono, Merriweather',
      sans: 'mono',
    },
  },
})
/////////////////////////////////////////////////////////////////////////////////////////////

const App = () => {
  const darkMode = useDarkMode(false)

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
            <Routes />
          </NextUIProvider>
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
