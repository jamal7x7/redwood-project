import { Link, routes } from '@redwoodjs/router'

type ArticleLayoutProps = {
  children?: React.ReactNode
}

const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  return (
    <>
      <header className="grid grid-cols-2 gap-4 place-content-center">
        <h1 className="text-2xl font-bold ">
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul className="grid grid-cols-6 gap-4 place-content-center bg-slate-400">
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main> {children}</main>
    </>
  )
}

export default ArticleLayout
