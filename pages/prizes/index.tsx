import { GetStaticProps } from 'next';
import React from 'react'
import Layout from '../../components/Layout';

function Prizes({ datas }: any) {  
  return (
    <Layout>
      <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold'>Prizes</h1>

          <ul className=''>
            {datas[0].pastries.map((pastrie: any, id: any) => (
              <li key={id}>{pastrie.name}</li>
            ))}
          </ul>
      </div>
    </Layout>
  )
}

export default Prizes

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.API_URL + '/datas/pastries')
  const datas = await res.json()

  return {
    props: {
      datas
    },
  }
}
