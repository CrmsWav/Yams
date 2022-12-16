import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

export default function Layout({children, title = "Yamstrie"}: LayoutProps) {
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="The Yamstrie is a game to be promote a pastrie by winning cakes" />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 justify-between items-center p-4 shadow'>
            <Link className='text-xl font-bold text-tertiary' href="/">{title}</Link>
            <Link className='text-xl font-bold text-tertiary' href="/prizes">Prizes</Link>
          </nav>
        </header>

        <main className='p-4'>
          {children}
        </main>
        
        <footer>
          <p className='flex justify-center text-xl text-tertiary py-4'>Yamstrie © - 2022</p>
        </footer>
      </div>
    </>
  )
}
