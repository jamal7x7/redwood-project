import {
  // Button,
  Avatar,
  Container,
  Grid,
  Text,
  Spacer,
  Switch,
  User,
  useTheme,
  Card,
  Dropdown,
} from '@nextui-org/react'
import * as BX from 'react-icons/bi'
import * as H from 'react-icons/hi'
import useDarkMode from 'use-dark-mode'

import { Link, routes } from '@redwoodjs/router'

import Button from '../../components/Button/Button'

type ArticleLayoutProps = {
  children?: React.ReactNode
}

const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  // console.log(bx.BoxIconElement)
  const darkMode = useDarkMode(false)
  const { type, isDark } = useTheme()
  return (
    <>
      <Grid.Container
        wrap="nowrap"
        gap={2}
        justify="space-between"
        css={{ backgroundColor: '$gray50', height: '80px' }}
      >
        <Grid css={{ display: 'flex' }}>
          <Text>
            <Link to={routes.home()}>
              <Avatar text="LP" color="gradient" textColor="white" />
            </Link>
          </Text>
          <Spacer y={5} />
          {/* <Card.Body css={{ backgroundColor: '$gray100', borderRadius: '$md' }}>
            1
          </Card.Body> */}
          <Dropdown>
            {/* <Dropdown.Button flat color="secondary">
              Trigger
            </Dropdown.Button> */}
            <Dropdown.Button
              auto
              flat
              css={{ backgroundColor: '$gray100', color: '$gray900' }}
              color="default"
              icon={<BX.BiMenu size={18} fill="currentColor" />}
            ></Dropdown.Button>
            <Dropdown.Menu
              color="secondary"
              aria-label="Actions"
              css={{ $$dropdownMenuWidth: '480px' }}
            >
              <Dropdown.Section title="Actions">
                <Dropdown.Item
                  key="new"
                  // command="⌘N"
                  description="Create a new file"
                  icon={
                    <BX.BiMenu
                      size={22}
                      fill="var(--nextui-colors-secondary)"
                    />
                  }
                >
                  hello
                  {/* <Dropdown.Button
                    auto
                    flat
                    css={{ backgroundColor: '$gray100', color: '$gray900' }}
                    color="default"
                    icon={<BX.BiMenu fill="currentColor" />}
                  ></Dropdown.Button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  key="copy"
                  // command="⌘C"
                  description="Copy the file link"
                  icon={
                    <BX.BiMenu
                      size={22}
                      fill="var(--nextui-colors-secondary)"
                    />
                  }
                >
                  Copy link
                </Dropdown.Item>
                <Dropdown.Item
                  key="edit"
                  // command="⌘⇧E"
                  description="Allows you to edit the file"
                  icon={
                    <BX.BiMenu
                      size={22}
                      fill="var(--nextui-colors-secondary)"
                    />
                  }
                >
                  Edit file
                </Dropdown.Item>
              </Dropdown.Section>
              <Dropdown.Section title="Danger zone">
                <Dropdown.Item
                  key="delete"
                  color="error"
                  // command="⌘⇧D"
                  description="Permanently delete the file"
                  icon={<BX.BiMenu size={22} fill="currentColor" />}
                >
                  Delete file
                </Dropdown.Item>
              </Dropdown.Section>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
        <Spacer y={5} />

        <Grid>
          <div>
            {/* The current theme is: {type} */}
            {/* <Switch
              checked={darkMode.value}
              onChange={() => darkMode.toggle()}
            /> */}
          </div>
        </Grid>

        {/* <Spacer y={5} /> */}
        <Grid css={{ display: 'flex' }}>
          <Grid>
            <Link to={routes.home()}>Home</Link>
          </Grid>
          <Grid>
            <Link to={routes.about()}>About</Link>
          </Grid>

          <Spacer y={5} />
          <Button
            auto
            flat
            css={{ backgroundColor: '$gray100', color: '$gray900' }}
            color="default"
            icon={
              darkMode.value == false ? (
                <H.HiMoon type="solid" size={18} fill="currentColor" />
              ) : (
                <H.HiSun size={18} fill="currentColor" />
              )
            }
            onPress={() => darkMode.toggle()}
          />
          <Spacer x={2} />
          <Avatar
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            color="gradient"
            bordered
          />
        </Grid>
      </Grid.Container>

      <main className="bg-white dark:bg-neutral-900 h-screen  text-slate-900 dark:text-white text-opacity-90 font-serif">
        {' '}
        {children}
      </main>
    </>
  )
}

export default ArticleLayout
