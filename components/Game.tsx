import React from 'react'
import Image from 'next/image'

function Game
() {
  return (
    <div className='h-full flex flex-col justify-center'>
      <h1 className='text-3xl font-bold text-center'>Roll The Dice !</h1>

      <div className='flex justify-between my-32'>
        <Image src='/images/dice1.png' width={50} height={50} alt={'dice 1'} />
        <Image src='/images/dice2.png' width={50} height={50} alt={'dice 2'} />
        <Image src='/images/dice3.png' width={50} height={50} alt={'dice 3'} />
        <Image src='/images/dice4.png' width={50} height={50} alt={'dice 4'} />
        <Image src='/images/dice5.png' width={50} height={50} alt={'dice 5'} />
      </div>

      <div className='flex justify-center'>
        <button className='bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary font-bold py-2 px-4 rounded'>
          Play
        </button>
      </div>
    </div>
  )
}

export default Game
