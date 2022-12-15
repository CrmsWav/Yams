import { GetStaticProps } from 'next';
import React from 'react'
import Layout from '../../components/Layout';

function Prizes({ datas }: any) {
  console.log('datas.yams.pastries', datas.yams.pastries);
  return (
    <Layout>
      <div className='flex justify-center'>
        <div>
            <h1 className='text-3xl font-bold'>Prizes</h1>
            {datas.yams.pastries.map((pastrie: any) => (
              <div key={datas.id}>
                  <h1>{pastrie.name}</h1>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default Prizes

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.API_URL + '/pastries')
  const datas = await res.json()

  return {
    props: {
      datas
    },
  }
}
