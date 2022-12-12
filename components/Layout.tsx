import { FC, ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const Layout: FC<LayoutProps> = ({ children, title = 'Yamstry' }) => (
    <div className="Layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
          <Link href="/users">Users List</Link> |{' '}
          <a href="/api/users">Users API</a>
        </nav>
      </header>

      <main>
        <h1 className='text-3xl font-bold'>YAMS</h1>
        {children}
      </main>

      <footer>
        <hr />
        <p>I am here to stay (Footer)</p>
      </footer>
    </div>
)

export default Layout
