import {
  // Button,
  Grid,
  Text,
  Row,
  Col,
  Container,
  Spacer,
} from '@nextui-org/react'
import * as BX from 'react-icons/bi'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

// import AAA from 'web/src/components/Button'
import Button from '../../components/Button/Button'

const YearOnePage = () => {
  return (
    <>
      <MetaTags title="YearOne" description="YearOne page" />

      <Spacer y={2} />
      <Container>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight="bold"
        >
          1ère année
        </Text>
        {/* <Text blockquote> Choisissez votre Niveau</Text> */}
      </Container>

      {/* <AAA>go</AAA> */}
      <Grid.Container gap={2} justify="center">
        <Spacer y={4} />

        <Row gap={1} justify="center">
          <Grid>
            <Link to={routes.courseArticle()}>
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
                Système informatique
              </Button>
            </Link>
          </Grid>
        </Row>
        <Row gap={1} justify="center">
          <Grid>
            <Button
              size="xl"
              color="primary"
              iconRight={<BX.BiRightArrowAlt />}
              iconRightCss={{ color: '$blue600' }}
              ghost
              css={{
                color: '$gray900',
                border: 'none',
                justifyContent: 'start',
                width: '350px',
              }}
            >
              Système d’exploitation
            </Button>
          </Grid>
        </Row>
        <Row gap={1} justify="center">
          <Grid>
            <Button
              size="xl"
              color="primary"
              iconRight={<BX.BiRightArrowAlt />}
              iconRightCss={{ color: '$blue600' }}
              ghost
              css={{
                color: '$gray900',
                border: 'none',
                justifyContent: 'start',
                width: '350px',
              }}
            >
              Utilitaires et fichiers
            </Button>
          </Grid>
        </Row>
        <Row gap={1} justify="center">
          <Grid>
            <Button
              size="xl"
              color="primary"
              iconRight={<BX.BiRightArrowAlt />}
              iconRightCss={{ color: '$blue600' }}
              ghost
              css={{
                color: '$gray900',
                border: 'none',
                justifyContent: 'start',
                width: '350px',
              }}
            >
              Traitement de textes
            </Button>
          </Grid>
        </Row>
        <Row gap={1} justify="center">
          <Grid>
            <Button
              size="xl"
              color="primary"
              iconRight={<BX.BiRightArrowAlt />}
              iconRightCss={{ color: '$blue600' }}
              ghost
              // auto
              css={{
                color: '$gray900',
                border: 'none',
                justifyContent: 'start',
                width: '350px',
              }}
            >
              Recherches documentaires
            </Button>
          </Grid>
        </Row>
      </Grid.Container>
    </>
  )
}

export default YearOnePage
