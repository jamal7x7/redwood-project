import { Container, Spacer, Text, useTheme, Button } from '@nextui-org/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CourseArticlePage = () => {
  const { theme } = useTheme()
  return (
    <>
      <MetaTags title="CourseArticle" description="CourseArticle page" />
      <Spacer y={8} />
      <Container>
        <Text
          h1
          size={48}
          css={{
            // textGradient: '45deg, $blue600 -20%, $pink600 50%',
            color: '$gray800',
            fontFamily: 'Merriweather',
            justifyContent: 'start',
            textAlign: 'center',
            letterSpacing: '0.01em',
          }}
          weight="black"
        >
          {/* Le Systeme Informatique  */}
          Information et informatique
        </Text>
        <Text
          size={11}
          css={{
            // textGradient: '45deg, $blue600 -20%, $pink600 50%',
            color: '$gray800',
            fontFamily: 'Merriweather',
            justifyContent: 'center',
            textAlign: 'center',
            letterSpacing: '0.01em',
          }}
        >
          {/* <Link to={routes.courseArticle()}>
            <Button
              ghost
              flat
              size="xs"
              css={{
                color: '$gray900',
                border: 'none',
                justifyContent: 'center',
                width: '350px',
              }}
            > */}
          COURS 1
          {/* </Button>
          </Link> */}
        </Text>
        {/* <Text blockquote> Choisissez votre Niveau</Text> */}
      </Container>
    </>
  )
}

export default CourseArticlePage
