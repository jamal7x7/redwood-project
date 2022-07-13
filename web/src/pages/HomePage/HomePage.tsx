import {
  // Button,
  Grid,
  Text,
  Row,
  Col,
  Container,
  Spacer,
} from '@nextui-org/react'
// import AAA from 'web/src/components/Button'
import * as BX from 'react-icons/bi'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Button from '../../components/Button/Button'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
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
          Bienvenue
        </Text>
        {/* <Text blockquote> Choisissez votre Niveau</Text> */}
      </Container>

      {/* <AAA>go</AAA> */}
      <Grid.Container gap={2} justify="center">
        {/* <Grid>
          <Button color="primary" auto>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button color="secondary" auto>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button color="success" auto>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button color="warning" auto>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button color="error" auto>
            Error
          </Button>
        </Grid> */}
        <Spacer y={4} />

        <Row gap={1} justify="center">
          <Grid>
            <Link to={routes.yearOne()}>
              <Button
                size="xl"
                iconRight={<BX.BiRightArrowAlt />}
                iconRightCss={{ color: '$blue600' }}
                // color="gradient"
                // bordered
                color="primary"

                // css={{
                //   borderRadius: '$md',

                //   // backgroundColor: '$red300',
                // }}
                // shadow
                // flat
                // auto
              >
                1ère année
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
              // css={{ borderRadius: '$md', backgroundColor: '$gray50' }}
              // shadow
              // flat
              // disabled
              // ghost
              // auto
            >
              2ème année
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
              // css={{ borderRadius: '$md', backgroundColor: '$gray100' }}
              // shadow
              // flat
              // auto
            >
              3ème année
            </Button>
          </Grid>
        </Row>
      </Grid.Container>
    </>
  )
}

export default HomePage
