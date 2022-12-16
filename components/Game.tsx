import React from 'react'
import Image from 'next/image'

function Game() {
  const diceImages = [
    '/images/dice1.png',
    '/images/dice2.png',
    '/images/dice3.png',
    '/images/dice4.png',
    '/images/dice5.png',
    '/images/dice6.png',
  ]

  const [image1, setImage1] = React.useState(diceImages[0])
  const [image2, setImage2] = React.useState(diceImages[1])
  const [image3, setImage3] = React.useState(diceImages[2])
  const [image4, setImage4] = React.useState(diceImages[3])
  const [image5, setImage5] = React.useState(diceImages[4])

  const diceRoll = () => {
    const randomNum1 = Math.floor(Math.random() * 6) + 1
    const randomNum2 = Math.floor(Math.random() * 6) + 1
    const randomNum3 = Math.floor(Math.random() * 6) + 1
    const randomNum4 = Math.floor(Math.random() * 6) + 1
    const randomNum5 = Math.floor(Math.random() * 6) + 1

    console.log(randomNum1, randomNum2, randomNum3, randomNum4, randomNum5)

    setImage1(diceImages[randomNum1 - 1])
    setImage2(diceImages[randomNum2 - 1])
    setImage3(diceImages[randomNum3 - 1])
    setImage4(diceImages[randomNum4 - 1])
    setImage5(diceImages[randomNum5 - 1])
  }

  return (
    <div className='h-full flex flex-col justify-center'>
      <h1 className='text-3xl font-bold text-center'>Roll The Dice !</h1>

      <div className='flex justify-between my-32'>
        <Image src={image1} alt={'dice 1'} width={50} height={50} />
        <Image src={image2} alt={'dice 2'} width={50} height={50} />
        <Image src={image3} alt={'dice 3'} width={50} height={50} />
        <Image src={image4} alt={'dice 4'} width={50} height={50} />
        <Image src={image5} alt={'dice 5'} width={50} height={50} />
      </div>

      <div className='flex justify-center'>
        <button
          className='bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary font-bold py-2 px-4 rounded'
          onClick={diceRoll}
        >
          Play
        </button>
      </div>
    </div>
  )
}

export default Game
