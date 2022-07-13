import { Container, Spacer, Text, useTheme } from '@nextui-org/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CourseArticlePage = () => {
  const { theme } = useTheme()
  return (
    <>
      <MetaTags title="CourseArticle" description="CourseArticle page" />
      <Spacer y={2} />
      <Container>
        <Text
          h1
          size={60}
          css={{
            // textGradient: '45deg, $blue600 -20%, $pink600 50%',
            color: '$gray800',
            fontFamily: theme.fonts.sans,
          }}
          weight="bold"
        >
          Le Systeme Informatique
        </Text>
        {/* <Text blockquote> Choisissez votre Niveau</Text> */}
      </Container>
    </>
  )
}

export default CourseArticlePage
