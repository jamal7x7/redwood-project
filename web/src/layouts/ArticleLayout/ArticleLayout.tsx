import { Link, routes } from '@redwoodjs/router'

type ArticleLayoutProps = {
  children?: React.ReactNode
}

const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  return (
    <>
      <header className="grid grid-cols-10 gap-4 place-content-center bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-white p-1.5">
        <h1 className="font-semibold font-body w-16 grid place-content-center p-4">
          <Link to={routes.home()}>LP</Link>
        </h1>

        <div className="text-2xl font-body font-black rounded-lg dark:bg-neutral-700 p-2 w-16 grid place-content-center">
          1
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <nav className="p-2  grid grow gap-4  place-content-center">
          <ul className="grid grid-cols-2 gap-4 place-items-center">
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-white dark:bg-neutral-900 h-screen  text-slate-900 dark:text-white text-opacity-90 font-serif">
        {' '}
        {children}
      </main>
    </>
  )
}

export default ArticleLayout
