import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

export default function Layout({children, title = "Yamstrie"}: LayoutProps) {
  // console.log('children', children);
  // console.log('title', title);
  
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
          <nav className='flex h-12 items-center px-4 justify-between shadow-sm'>
            <Link href="/">{title}</Link>
            <Link href="/prizes">Prizes To Be Won</Link>
          </nav>
        </header>

        <main>
          {children}
        </main>
        
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch('')
//   const datas = await res.json()

//   return {
//     props: {
//       datas
//     },
//   }
// }
