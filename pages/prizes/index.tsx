import { GetStaticProps } from 'next';
import React from 'react'
import Layout from '../../components/Layout';

function Prizes({ datas }: any) {  
  return (
    <Layout>
      <div className='h-full flex flex-col items-center justify-between'>
          <h1 className='text-3xl font-bold my-4 text-tertiary'>Prizes</h1>

          <h2 className='text-2xl font-bold my-4'>To Won</h2>
          <ul>
            {datas[0].pastries.map((pastrie: any, id: any) => (
              <li key={id}>{pastrie.name}</li>
            ))}
          </ul>

          <h2 className='text-2xl font-bold my-4'>Won</h2>
          <ul>
            <li>Cake aux fruits (A/M/J/H/S)</li>
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
